import {
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import theme from '../../theme.style';
import { convertCurrency } from '../utils';

type T = {
  label: string;
  icon?: JSX.Element;
  valueNumber: number | string;
  center?: boolean;
  full?: boolean;
};

const TokenBorderLight = ({
  label,
  icon,
  valueNumber,
  center,
  full,
}: T): JSX.Element => {
  const classes = useStyles();

  const _avatar = (
    <ListItemAvatar className={center ? classes.centerAvatar : classes.avatar}>
      <div>{icon}</div>
    </ListItemAvatar>
  );

  const _label = <ListItemText primary={label} />;

  const _price = center ? (
    <ListItemText primary={valueNumber} />
  ) : (
    <ListItemSecondaryAction className={classes.value}>
      {valueNumber}
    </ListItemSecondaryAction>
  );

  return (
    <ListItem className={`${classes.root} ${(full && classes.full) || ''}`}>
      {center ? (
        <div className={classes.center}>
          {_label}
          {_avatar}
          {_price}
        </div>
      ) : (
        <>
          {_avatar}
          {_label}
          {_price}
        </>
      )}
    </ListItem>
  );
};

export default React.memo(TokenBorderLight);
