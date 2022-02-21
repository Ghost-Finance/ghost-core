import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      color: theme.palette.primary.contrastText,
    },
    panel: {
      padding: 0,
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
  })
);

export default useStyle;
