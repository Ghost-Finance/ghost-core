import React from 'react';
import useStyle from './style';
import { Grid } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/styles';

type Props = {
  typeCard?: string;
  children?: React.ReactNode;
};

let MintLabel: string = 'mint';
let BurnLabel: string = 'burn';

const CardContent = ({ typeCard, children }: Props) => {
  const classes = useStyle();

  const topClassName = {
    [MintLabel]: classes.mint,
    [BurnLabel]: classes.burn,
  };

  return (
    <Grid className={classes.root} item>
      <div className={classes.cardForm}>
        <div className={topClassName[typeCard || 'mint']}>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </div>
        {children}
      </div>
    </Grid>
  );
};

export default CardContent;
