import React, { ReactNode } from 'react';
import { Box, Typography } from '@material-ui/core';
import ButtonForm from '../Button/ButtonForm';
import useStyle from './index.style';

interface Props {
  title?: string;
  children: ReactNode;
  titleButton?: string;
  disableButton?: boolean;
  onClick?: () => void;
}

export const FormBox = ({
  title,
  titleButton,
  children,
  disableButton,
  onClick,
}: Props) => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Typography component="h3" variant="h3" className={classes.title}>
        {title}
      </Typography>

      {children}

      <ButtonForm
        text={titleButton || '#'}
        className={`${classes.button} ${(disableButton &&
          classes.disableButton) ||
          ''}`}
        onClick={onClick}
        disabled={disableButton}
      />

      <div
        className={disableButton ? classes.bottomGrey : classes.bottomYellow}
      >
        &nbsp;
      </div>
    </Box>
  );
};

export default FormBox;
