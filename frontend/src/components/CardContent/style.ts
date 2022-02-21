import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'flex-start',
    },
    cardForm: {
      marginTop: 20,
      width: '62%',
      backgroundColor: '#393939',
      border: 1,
      [theme.breakpoints.down('md')]: {
        marginTop: 0,
        width: 'calc(80% - 20px)',
      },
    },
    default: {
      marginTop: 0,
    },
    mint: {
      margin: '0 auto',
      width: '320px !important',
      height: '40px',
      backgroundColor: theme.palette.primary.dark,
      borderRadius: '0 0 40px 40px',
    },
    burn: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      '& > div:nth-child(n)': {
        width: 80,
        height: 40,
        padding: 10,
        marginLeft: 12,
        marginRight: 12,
        backgroundColor: theme.palette.primary.dark,
        borderRadius: '0 0 40px 40px',
      },
    },
  })
);

export default useStyle;
