import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      color: theme.palette.primary.contrastText,
      marginTop: 20,
    },
    contentCard: {
      width: '100%',
    },
    link: {
      textDecoration: 'none',
    },
    buttonCancel: {
      color: theme.palette.primary.contrastText,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: `${theme.palette.primary.light} !important`,
      '&:hover': {
        backgroundColor: `${theme.palette.primary.light} !important`,
      },
    },
    buttonMax: {
      color: theme.palette.primary.contrastText,
      fontSize: 13,
      backgroundColor: `${theme.palette.primary.dark} !important`,
      '&:hover': {
        backgroundColor: `#161616  !important`,
      },
      border: `2px solid #353535 !important`,
      height: '28px',
      width: '20px',
      marginLeft: '15px',
    },
    active: {
      width: '325px !important',
      maxWidth: '325px',
      fontWeight: 'bold',
      marginBottom: '90px',
      [theme.breakpoints.down(1800)]: {
        marginBottom: '54px',
      },
    },
    disabled: {
      width: '325px !important',
      maxWidth: '325px',
      fontWeight: 'bold',
      marginBottom: '90px',
      [theme.breakpoints.down(1800)]: {
        marginBottom: '54px',
      },
      backgroundColor: `${theme.palette.secondary.dark} !important`,
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    title: {
      marginTop: '60px',
      fontSize: 36,
      textAlign: 'center',
      marginBottom: '90px',
      lineHeight: '37px',
      [theme.breakpoints.down(1800)]: {
        marginTop: '35px',
        marginBottom: '40px',
      },
    },
    labelInput: {
      marginLeft: '14px',
    },
    labelGas: {
      color: `${theme.palette.secondary.dark}`,
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '17px',
      marginBottom: '70px',
      [theme.breakpoints.down(1800)]: {
        marginBottom: '42px',
      },
    },
    input: {
      padding: '15px',
      marginBottom: '10px',
      background: 'transparent',
      border: 'none',
      outline: 'none',
      width: '100px',
      color: '#fff',
      marginTop: '10px',
      marginLeft: '55px',
      letterSpacing: '0.008em',
    },
    topBox: {
      margin: '0 auto',
      width: '325px !important',
      maxWidth: '325px',
      height: '41px',
      backgroundColor: theme.palette.primary.dark,
      borderRadius: '0 0 40px 40px',
    },
    bottomBox: {
      margin: '0 auto',
      width: '100% !important',
      height: '4px',
      backgroundColor: theme?.brand.main,
    },
    bottomBoxGrey: {
      margin: '0 auto',
      width: '100% !important',
      height: '4px',
      backgroundColor: theme.palette.secondary.dark,
    },
    containerTop: {
      display: 'flex',
      width: '63%',
      justifyContent: 'space-between',
    },
  })
);

export default useStyle;
