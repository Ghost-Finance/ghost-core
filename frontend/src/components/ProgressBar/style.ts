import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      backgroundColor: theme.brand.main,
      zIndex: 99999,
    },
  })
);

export default useStyle;
