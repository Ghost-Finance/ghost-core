import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 547,
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '100%',
    },
  },
  card: {
    background: theme.palette.primary.dark,
    boxSizing: 'border-box',
    marginBottom: 12,
  },
  media: {
    backgroundPosition: 'bottom',
    width: '100%',
    height: '100%',
    paddingTop: '1%',
  },
}));

export default useStyles;
