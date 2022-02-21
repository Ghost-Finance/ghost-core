import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    marginTop: '10px',
    marginBottom: '20px',
    borderRadius: '100px',
    border: `4px solid ${theme.palette.primary.light}`,
    fontSize: '14px',
    color: theme.palette.secondary.contrastText,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
  },
  value: {
    color: theme.palette.secondary.contrastText,
  },
  center: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerAvatar: {
    minWidth: 0,
    margin: '0px 8px',
  },
  avatar: {
    minWidth: '40px',
  },
  full: {
    backgroundColor: theme.palette.primary.light,
  },
}));
