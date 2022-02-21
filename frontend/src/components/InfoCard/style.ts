import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: 30,
      margin: 0,
      width: 548,
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 'auto',
      padding: 48,
      borderRadius: 24,
    },
    contentError: {
      backgroundColor: theme.palette.error.dark,
      border: `4px solid ${theme.palette.error.main}`,
    },
    contentSuccess: {
      backgroundColor: theme.palette.success.dark,
      border: `4px solid ${theme.palette.success.main}`,
    },
    contentInternalRight: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexDirection: 'column',
      margin: 'auto',
      width: 390,
      height: 192,
      backgroundColor: theme.palette.primary.dark,
      borderRadius: '0 20px 20px 0',
    },
    image: {
      width: 56,
    },
    text: {
      fontWeight: 'bold',
      fontSize: '24px',
      color: theme.palette.primary.contrastText,
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
