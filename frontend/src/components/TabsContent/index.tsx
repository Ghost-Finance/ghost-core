import React from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Tab } from '@material-ui/core';
import { TabList } from '@material-ui/lab';

export const TabsListWithTheme = withStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#393939',
      color: theme.palette.primary.contrastText,
    },
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {
        backgroundColor: 'none',
      },
    },
  })
)(TabList);

export const TabWithTheme = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textDecoration: 'none',
      color: theme.palette.primary.contrastText,
      borderBottom: 'none',
      textTransform: 'none',
      minWidth: 70,
      [theme.breakpoints.down('md')]: {
        minWidth: 100,
      },
    },
    selected: {
      color: theme.palette.primary.contrastText,
      borderRadius: 24,
      backgroundColor: theme.palette.primary.main,
      opacity: 1,
    },
  })
)(Tab);
