import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      left: '30%',
      width: '100%',
      height: '100%',
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
  })
);

export default useStyle;
