import React from 'react';
import theme from '../../../theme.style';
import { Button } from '@material-ui/core';
import useStyles from './styles';

interface Props {
  text: string;
  className?: string;
  children?: JSX.Element;
  onClick?: any;
  disabled?: boolean;
}

const ButtonForm = ({
  text,
  className,
  children,
  onClick,
  disabled,
}: Props): React.ReactElement => {
  const classes = useStyles(theme);

  return (
    <Button
      variant="contained"
      disableElevation
      className={`${classes.root} ${className}`}
      onClick={onClick}
      {...(disabled ? { disabled: true } : {})}
    >
      {text || children}
    </Button>
  );
};

export default ButtonForm;
