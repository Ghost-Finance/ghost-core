import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
  root: {
    borderRadius: '24px',
    boxSizing: 'border-box',
    textAlign: 'center',
    padding: '12px 25px',
    maxWidth: '298px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'none',
    backgroundColor: theme?.brand.main,
    '&:hover': {
      backgroundColor: theme?.brand.main,
    },
  },
}));
