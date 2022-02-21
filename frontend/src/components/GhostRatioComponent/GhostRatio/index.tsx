import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import ListSynths from '../../ListSynths';
import Token from '../../Token';
import TokenLight from '../../TokenLight';
import {
  GhostIcon,
  DaiIcon,
  GdaiIcon,
  GhoIcon,
  SynthsIcon,
  SpaceXIcon,
  EtherIcon,
} from '../../Icons';
import { useSelector } from '../../../redux/hooks';
import { formatBalance } from '../../../utils/StringUtils';
import CRatio from '../../CRatio';
import useStyles from './styles';
import theme from '../../../theme.style';

const GhostRatio = () => {
  const classes = useStyles(theme);
  const [position, setPosition] = useState(0);
  const { account } = useSelector((state) => state.wallet);
  const app = useSelector((state) => state.app);
  const {
    cRatioValue,
    balanceOfGho,
    balanceOfGdai,
    collateralBalance,
    synthDebt,
    collateralBalancePrice,
    synthDebtPrice,
  } = app;

  const tokenValues = (
    <>
      <Token
        icon={<DaiIcon />}
        label="gDAI"
        valueNumber={formatBalance(Number(balanceOfGdai || '0'))}
      />
      <Token
        icon={<GhostIcon />}
        label="GHO"
        valueNumber={formatBalance(Number(balanceOfGho || '0'))}
      />
    </>
  );

  const tokenLightValues = (
    <>
      <TokenLight
        icon={<GdaiIcon />}
        label="gDAI"
        amount={formatBalance(Number(synthDebt || '0'))}
        valueNumber={synthDebtPrice || '$ 0,00'}
      />
      <TokenLight
        icon={<GhoIcon />}
        label="GHO"
        amount={formatBalance(Number(collateralBalance || '0'))}
        valueNumber={collateralBalancePrice || '$ 0,00'}
      />
    </>
  );

  useEffect(() => {
    setPosition(
      parseInt(collateralBalance || '0') > 0 && parseInt(synthDebt || '0') > 0
        ? 1
        : 0
    );
  }, [collateralBalance, synthDebt, cRatioValue]);

  return (
    <Box component="div" m={3}>
      <div className={classes.content}>
        <CRatio
          size={200}
          progress={account ? parseInt(cRatioValue || '0') : 0}
          strokeWidth={4}
          circleOneStroke="#333333"
          circleTwoStroke="#4BE29A"
          errorColorStroke="#F44336"
        />
      </div>

      <ListSynths label={position ? 'position' : 'wallet'}>
        {position ? tokenLightValues : tokenValues}
      </ListSynths>
    </Box>
  );
};

export default GhostRatio;
