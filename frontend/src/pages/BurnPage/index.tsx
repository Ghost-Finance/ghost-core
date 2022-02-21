import React, { useState, useEffect, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { ContextPage } from '../ContentPage';
import FormBox from '../../components/FormBox';
import InputContainer from '../../components/InputContainer';
import ButtonForm from '../../components/Button/ButtonForm';
import DaiCoinIcon from '../../components/Icons/DaiCoinIcon';
import { NumericalInput } from '../../components/InputMask';
import useOnlyDigitField from '../../hooks/useOnlyDigitField';
import { useMinter, useERC20, useFeed } from '../../hooks/useContract';
import { useDispatch, useSelector } from '../../redux/hooks';
import {
  gDaiAddress,
  minterAddress,
  feedGhoAddress,
  feedGdaiAddress,
} from '../../utils/constants';
import {
  balanceOf,
  burn,
  approve,
  simulateBurn,
  feedPrice,
} from '../../utils/calls';
import {
  setTxSucces,
  setStatus,
  setCRatioSimulateMint,
} from '../../redux/app/actions';
import { bigNumberToFloat } from '../../utils/StringUtils';
import useStyle from '../style';

const BurnPage = () => {
  const classes = useStyle();
  const minterContract = useMinter();
  const gDaiContract = useERC20(gDaiAddress);
  const feedGhoContract = useFeed(feedGhoAddress);
  const feedGdaiContract = useFeed(feedGdaiAddress);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const {
    reset: resetGdaiField,
    valid: gdaiFieldValid,
    value: gdaiValue,
    setValue: setGdaiValue,
    onChange: onChangeGdai,
    ...gdaiField
  } = useOnlyDigitField('tel');

  const { account } = useSelector((state) => state.wallet);
  const { balanceOfGdai } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const { setRedirectHome, setRedirect } = useContext(ContextPage);

  function dispatchLoading(key: string) {
    dispatch(setStatus(key));
  }

  async function handleBurn() {
    if (btnDisabled || gdaiValue === '') return;
    setRedirect(true);
    dispatchLoading('idle');
    try {
      await approve(
        gDaiContract,
        account as string,
        minterAddress,
        gdaiValue
      )(dispatchLoading);

      await burn(
        minterContract,
        gDaiAddress,
        gdaiValue,
        account as string
      )(dispatchLoading);

      resetGdaiField();
    } catch (error) {
      dispatchLoading('error');
    }
  }

  async function handleMaxDAI(e: any) {
    e.preventDefault();
    let balanceOfGdai = bigNumberToFloat(
      await balanceOf(gDaiContract, account as string)
    );

    if (balanceOfGdai <= 0) {
      return;
    }

    setGdaiValue(balanceOfGdai.toString());
  }

  useEffect(() => {
    setRedirectHome(account === null);
    dispatchLoading('pending');
    setBtnDisabled(true);

    async function fetchData() {
      try {
        const feedPriceGho = await feedPrice(feedGhoContract);
        const feedPriceGdai = await feedPrice(feedGdaiContract);
        const [cRatio, collateralBalance, synthDebt] = await simulateBurn(
          minterContract,
          gDaiAddress,
          account as string,
          gdaiValue ? gdaiValue : '0',
          feedPriceGho,
          feedPriceGdai
        );
        let ratio = bigNumberToFloat(cRatio) * 100;
        setBtnDisabled(
          ratio < 900 ||
            parseInt(balanceOfGdai || '0') <= 0 ||
            parseInt(gdaiValue || '0') <= 0 ||
            parseInt(gdaiValue || '0') > parseInt(balanceOfGdai || '0')
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
      }
    }

    const requestId = setTimeout(() => {
      if (parseInt(gdaiValue) > 0) setBtnDisabled(false);

      fetchData();
      dispatchLoading('idle');
    }, 3000);

    return () => {
      clearTimeout(requestId);
    };
  }, [account, gdaiValue, dispatch, minterContract]);

  return (
    <FormBox
      titleButton="Burn your gDai"
      onClick={handleBurn}
      disableButton={
        btnDisabled ||
        parseInt(balanceOfGdai || '') <= 0 ||
        parseInt(gdaiValue) <= 0
      }
    >
      <InputContainer>
        <DaiCoinIcon />
        <span className={classes.labelInput}>gDAI</span>

        <NumericalInput
          className={classes.input}
          id="gdai"
          value={gdaiValue}
          placeholder="0.0"
          onChange={(e: any) => {
            setTimeout(() => dispatchLoading('pending'), 500);
            onChangeGdai(e);
          }}
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

      <span className={classes.labelGas}>Gas Fee $0.00/0 GWEI</span>
    </FormBox>
  );
};

export default BurnPage;
