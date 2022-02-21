import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: 30,
      margin: 0,
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 'auto',
      borderRadius: 24,
      height: 190,
      backgroundColor: theme.palette.primary.light,
    },
    contentInternalLeft: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '20%',
    },
    contentInternalRight: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '80%',
      height: '100%',
      backgroundColor: theme.palette.primary.dark,
      borderRadius: '0 20px 20px 0',
    },
    image: {
      width: 56,
    },
    img: {
      margin: '0px auto',
      marginLeft: 38,
      marginBottom: 18,
      display: 'block',
      maxWidth: '60%',
      maxHeight: '60%',
    },
    imgInfo: {
      margin: '0px auto',
    },
    title: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 24,
      display: 'flex',
      alignItems: 'center',
      color: theme?.brand.main,
      marginLeft: 35,
    },
    subTitle: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 24,
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      marginLeft: 38,
    },
    arrowIcon: {
      width: 151,
    },
    link: {
      textDecoration: 'none',
      margin: 0,
      padding: 0,
    },
  })
);

export default useStyle;
