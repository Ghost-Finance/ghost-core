import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      color: theme.palette.primary.contrastText,
      left: '30%',
      width: '100%',
      marginTop: 20,
    },
    paperContent: {
      display: 'flex',
      padding: '50px 50px 0px 50px',
      alignItems: 'center',
      flexFlow: 'column',
      justifyContent: 'space-between',
      height: '100vh',
      [theme.breakpoints.down('md')]: {
        padding: 0,
        width: '100%',
      },
    },
    cardForm: {
      marginTop: 20,
      width: 'calc(50% - 40px)',
    },
    boxMessage: {
      marginTop: 150,
      marginBottom: 150,
      [theme.breakpoints.down('md')]: {
        marginTop: 0,
        marginBottom: 0,
      },
    },
    contentCard: {
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      width: '100%',
    },
    link: {
      textDecoration: 'none',
    },
    help: {
      color: '#444',
    },
    button: {
      backgroundColor: theme.palette.primary.light,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
    buttonCancel: {
      color: theme.palette.primary.contrastText,
      fontSize: 14,
      textTransform: 'none',
      fontWeight: 'bold',
    },
    buttonDefault: {
      textTransform: 'none',
      fontWeight: 'bold',
      color: theme.palette.primary.contrastText,
      backgroundColor: 'none',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    containerRow: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-between',
      alignItems: 'baseline',
    },
    title: {
      marginTop: '65px',
      marginBottom: '35px',
      fontFamily: 'Inter',
      fontSize: '36px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '44px',
      letterSpacing: '0em',
      textAlign: 'left',
      [theme.breakpoints.down(1800)]: {
        marginTop: '30px',
      },
    },
    subTitle: {
      marginBottom: '85px',
      color: theme.palette.secondary.dark,
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '18px',
      lineHeight: '22px',
      [theme.breakpoints.down(1800)]: {
        marginBottom: '35px',
      },
    },
    icon: {
      marginTop: '25px',
      [theme.breakpoints.down(1800)]: {
        marginTop: '0px',
      },
    },
    topBox: {
      margin: '0 auto',
      width: '325px !important',
      maxWidth: '325px',
      height: '41px',
      backgroundColor: '#171717',
      borderRadius: '0 0 40px 40px',
    },
    bottomBox: {
      marginTop: '90px',
      width: '100% !important',
      height: '90px',
      backgroundColor: theme.palette.primary.dark,
      [theme.breakpoints.up(1800)]: {
        marginTop: '260px',
      },
      [theme.breakpoints.down(1800)]: {
        marginTop: '67px',
      },
    },
    bottomBoxYellow: {
      width: '100% !important',
      height: '6px',
      backgroundColor: theme.palette.warning.main,
    },
    contentButton: {
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '2px 16px',
      width: '70%',
      borderRadius: 24,
      backgroundColor: 'rgba(64, 64, 0, 0.255)',
    },
    textDark: {
      color: theme.palette.secondary.dark,
    },
    textYellow: {
      color: theme.palette.warning.main,
    },
    textWarning: {
      color: theme.palette.error.main,
    },
    textBold: {
      fontWeight: 'bold',
    },
    textYellowC: {
      color: theme.palette.warning.main,
      cursor: 'pointer',
      marginTop: 30,
    },
  })
);

export default useStyle;
