import React from 'react';
import { makeStyles, Theme, Typography, List } from '@material-ui/core';
interface Props {
  label: string;
  children?: JSX.Element | JSX.Element[];
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: '10px',
  },
  label: {
    color: theme.palette.secondary.dark,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    lineHeight: '15px',
  },
}));

const ListSynths = ({ label, children }: Props) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <Typography className={classes.label}>{label}</Typography>
      {children}
    </List>
  );
};

export default ListSynths;
