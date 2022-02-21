import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    marginTop: '10px',
    marginBottom: '20px',
    borderRadius: '100px',
    fontSize: '14px',
    color: theme.palette.secondary.contrastText,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#414141',
  },
  value: {
    color: theme.palette.secondary.contrastText,
  },
  secondaryText: {
    marginLeft: 15,
    color: theme.palette.secondary.dark,
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
