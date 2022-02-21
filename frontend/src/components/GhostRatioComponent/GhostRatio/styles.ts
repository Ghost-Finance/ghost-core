import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '28px',
    width: '100%',
  },
  box: {
    display: 'flex',
    flexFlow: 'column',
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '100%',
      float: 'none',
    },
  },
  content: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column',
    padding: '25px',
  },
}));
