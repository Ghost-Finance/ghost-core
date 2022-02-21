import { makeStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    alignItems: 'center',
  },
  title: {
    marginTop: '50px',
    fontSize: 36,
    textAlign: 'center',
    marginBottom: '40px',
    lineHeight: '37px',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      marginTop: '35px',
    },
  },
  label: {
    color: theme.palette.secondary.dark,
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '17px',
    marginBottom: '70px',
    textAlign: 'center',
    [theme.breakpoints.down(1800)]: {
      marginBottom: '42px',
    },
  },
  button: {
    width: '325px !important',
    maxWidth: '325px',
    fontWeight: 'bold',
    marginBottom: '90px',
    [theme.breakpoints.down(1800)]: {
      marginBottom: '54px',
    },
  },
  disableButton: {
    backgroundColor: `${theme.palette.secondary.dark} !important`,
  },
  bottomYellow: {
    margin: '0 auto',
    width: '100% !important',
    height: '4px',
    backgroundColor: theme?.brand.main,
  },
  bottomGrey: {
    margin: '0 auto',
    width: '100% !important',
    height: '4px',
    backgroundColor: theme.palette.secondary.dark,
  },
}));

export default useStyle;
