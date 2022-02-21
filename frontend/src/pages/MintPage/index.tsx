import React, { useEffect, useState, useContext } from 'react';
import BigNumber from 'bignumber.js';
import { Typography } from '@material-ui/core';
import useStyle from './index.style';
import hooks from '../../hooks/walletConnect';
import { ContextPage } from '../ContentPage';
import ButtonForm from '../../components/Button/ButtonForm';
import InputContainer from '../../components/InputContainer';
import FormBox from '../../components/FormBox';
import { NumericalInput } from '../../components/InputMask';
import { GhostIcon, DaiCoinIcon } from '../../components/Icons';
import { useMinter, useERC20, useFeed } from '../../hooks/useContract';
import useOnlyDigitField from '../../hooks/useOnlyDigitField';
import { useDispatch, useSelector } from '../../redux/hooks';
import {
  approve,
  mint,
  balanceOf,
  maximumByCollateral,
  maximumByDebt,
  simulateMint,
  feedPrice,
} from '../../utils/calls';
import { setStatus, setCRatioSimulateMint } from '../../redux/app/actions';
import {
  gDaiAddress,
  ghoAddress,
  minterAddress,
  feedGhoAddress,
  feedGdaiAddress,
} from '../../utils/constants';
import {
  bigNumberToFloat,
  bigNumberToString,
  formatBalance,
  stringToBigNumber,
} from '../../utils/StringUtils';

interface Props {
  title?: string;
}

const MintPage = ({ title }: Props) => {
  const classes = useStyle();
  const minterContract = useMinter();
  const ghoContract = useERC20(ghoAddress);
  const gDaiContract = useERC20(gDaiAddress);
  const feedGhoContract = useFeed(feedGhoAddress);
  const feedGdaiContract = useFeed(feedGdaiAddress);

  const dispatch = useDispatch();
  const { account } = useSelector((state) => state.wallet);
  const { balanceOfGho } = useSelector((state) => state.app);

  const { setRedirectHome, setRedirect } = useContext(ContextPage);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const {
    reset: resetGhoField,
    valid: ghoFieldValid,
    setValue: setGhoValue,
    ...ghoField
  } = useOnlyDigitField('tel');
  const {
    reset: resetGdaiField,
    valid: gdaiFieldValid,
    setValue: setGdaiValue,
    ...gdaiField
  } = useOnlyDigitField('tel');

  function dispatchLoading(key: string) {
    dispatch(setStatus(key));
  }

  async function handleMint() {
    if (btnDisabled || ghoField.value === '' || gdaiField.value === '') return;

    setRedirect(true);
    await approve(
      ghoContract,
      account as string,
      minterAddress,
      ghoField.value
    )(dispatchLoading);

    await mint(
      minterContract,
      gDaiAddress,
      ghoField.value,
      gdaiField.value,
      account as string
    )(dispatchLoading);

    resetGhoField();
    resetGdaiField();
  }

  function setValues(ghoValue: string, gdaiValue: string) {
    setGhoValue(ghoValue);
    setGdaiValue(gdaiValue);
  }

  async function handleMaxGHO() {
    dispatchLoading('pending');
    let balanceValue = bigNumberToFloat(
      await balanceOf(ghoContract, account as string)
    );
    await maximumCollateralValue(balanceValue.toString());
  }

  async function handleMaxDAI() {
    dispatchLoading('pending');
    let balanceGdaiValue = bigNumberToFloat(
      await balanceOf(gDaiContract, account as string)
    );

    if (balanceGdaiValue === 0) {
      handleMaxGHO();
      return;
    }

    await maximumDebtValue(balanceGdaiValue.toString());
  }

  async function changeMaxGho() {
    if (ghoField.value === '' || gdaiField.value !== '') return;
    dispatchLoading('pending');
    await maximumCollateralValue(ghoField.value);
  }

  async function changeMaxGdai() {
    if (gdaiField.value === '' || ghoField.value !== '') return;
    dispatchLoading('pending');
    await maximumDebtValue(gdaiField.value);
  }

  async function maximumCollateralValue(value: string) {
    try {
      let maxValue = await maximumByCollateral(
        minterContract,
        gDaiAddress,
        account as string,
        value
      );
      setValues(
        Number(value).toFixed(2),
        bigNumberToFloat(maxValue).toFixed(2)
      );
    } catch (error) {
      dispatchLoading('error');
      console.error(error.message);
    }
  }

  async function maximumDebtValue(value: string) {
    try {
      let maxGhoValue = await maximumByDebt(value);
      setValues(
        bigNumberToFloat(maxGhoValue).toFixed(2),
        Number(value).toFixed(2)
      );
    } catch (error) {
      dispatchLoading('error');
      console.error(error.message);
    }
  }

  useEffect(() => {
    setRedirectHome(account === null);
    dispatchLoading('pending');
    setBtnDisabled(true);

    async function fetchData() {
      try {
        const feedPriceGho = await feedPrice(feedGhoContract);
        const feedPriceGdai = await feedPrice(feedGdaiContract);
        const [cRatio, collateralBalance, synthDebt] = await simulateMint(
          minterContract,
          gDaiAddress,
          account as string,
          ghoField.value || '0',
          gdaiField.value || '0',
          feedPriceGho,
          feedPriceGdai
        );

        let ratio = bigNumberToFloat(cRatio) * 100;
        setBtnDisabled(
          ratio < 900 ||
            parseInt(balanceOfGho || '0') <= 0 ||
            parseInt(ghoField.value || '0') <= 0 ||
            parseInt(gdaiField.value || '0') <= 0 ||
            parseInt(ghoField.value || '0') > parseInt(balanceOfGho || '0')
        );
        dispatch(
          setCRatioSimulateMint(
            ratio.toString(),
            collateralBalance.toString(),
            synthDebt.toString()
          )
        );

        dispatchLoading('success');
      } catch (error) {
        setBtnDisabled(true);
        dispatchLoading('error');
        dispatch(setCRatioSimulateMint('0', '0', '0'));
      }
    }

    const requestId = setTimeout(() => {
      changeMaxGdai();
      changeMaxGho();
      fetchData();
      dispatchLoading('idle');
    }, 2000);

    return () => {
      clearTimeout(requestId);
    };
  }, [
    account,
    minterContract,
    ghoField.value,
    gdaiField.value,
    gdaiFieldValid,
    ghoFieldValid,
  ]);

  return (
    <FormBox
      title={title || ''}
      titleButton="Mint your gDai"
      onClick={handleMint}
      disableButton={btnDisabled}
    >
      <InputContainer>
        <DaiCoinIcon />
        <span className={classes.labelInput}>gDAI</span>

        <NumericalInput
          className={classes.input}
          id="gdai"
          placeholder="0.0"
          {...gdaiField}
        />

        <div>
          <ButtonForm
            text="MAX"
            className={classes.buttonMax}
            onClick={handleMaxDAI}
          />
        </div>
      </InputContainer>
      <InputContainer>
        <GhostIcon />
        <span className={classes.labelInput}>GHO</span>

        <NumericalInput
          className={classes.input}
          id="gho"
          placeholder="0.0"
          {...ghoField}
        />

        <div>
          <ButtonForm
            text="MAX"
            className={classes.buttonMax}
            onClick={handleMaxGHO}
          />
        </div>
      </InputContainer>

      <span className={classes.labelGas}>Gas Fee $0.00/0 GWEI</span>
    </FormBox>
  );
};

export default MintPage;
