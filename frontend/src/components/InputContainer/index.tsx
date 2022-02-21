import React from 'react';
import { makeStyles, Theme, Typography, List } from '@material-ui/core';
interface Props {
  children?: JSX.Element | JSX.Element[];
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '330px',
    height: '50px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '30px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 15px',
    marginBottom: '25px',
  },
  label: {
    color: theme.palette.secondary.dark,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    lineHeight: '15px',
  },
}));

const InputContainer = ({ children }: Props) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default InputContainer;
