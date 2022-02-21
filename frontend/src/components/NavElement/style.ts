import { makeStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: 400,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: 400,
    zIndex: 100,
    left: '80px',
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.down('md')]: {
      width: 300,
    },
  },
  drawerPaperWithoutBackground: {
    width: 400,
    zIndex: 100,
    left: 0,
    backgroundColor: 'transparent',
    border: 0,
    [theme.breakpoints.down('md')]: {
      width: 300,
    },
  },
  content: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    paddingTop: '48px',
    padding: theme.spacing(1),
  },
}));

export default useStyle;
