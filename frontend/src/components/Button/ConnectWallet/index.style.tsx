import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    borderRadius: '100px',
    boxSizing: 'border-box',
    textAlign: 'center',
    padding: '12px 25px',
    maxWidth: '210px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  connect: {
    border: `4px solid ${theme.palette.primary.light}`,
    backgroundColor: theme.palette.primary.dark,
    '&:hover': {
      borderColor: theme.palette.primary.dark,
      backgroundColor: theme.palette.primary.light,
    },
  },
  wrongNetwork: {
    border: `4px solid ${theme.palette.error.main}`,
    backgroundColor: theme.palette.error.dark,
    color: theme.palette.error.main,
    '&:hover': {
      color: theme.palette.error.main,
      borderColor: theme.palette.primary.dark,
      backgroundColor: theme.palette.error.dark,
    },
  },
  rootLoading: {
    border: `1px solid ${theme.palette.warning.main}`,
  },
  badge: {
    backgroundColor: theme.palette.secondary.contrastText,
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    marginRight: '8px',
  },
  badgeLoading: {
    backgroundColor: theme.palette.warning.main,
  },
  label: {
    fontSize: '14px',
    textAlign: 'center',
    lineHeight: '17px',
    textTransform: 'none',
  },
  labelConnect: {
    color: theme.palette.secondary.contrastText,
  },
  labelWrongNetwork: {
    color: theme.palette.error.main,
  },
  ellipse: {
    '&::before': {
      content: '""',
      display: 'inline-block',
      background: '#65c466',
      width: 10,
      height: 10,
      margin: '0px 3px',
      borderRadius: '50%',
    },
  },
  ellipseRedColor: {
    '&::before': {
      content: '""',
      display: 'inline-block',
      background: '#F50041',
      width: 10,
      height: 10,
      margin: '0px 3px',
      borderRadius: '50%',
    },
  },
  labelLoading: {
    color: theme.palette.warning.main,
  },
  link: {
    textDecoration: 'none',
  },
}));
