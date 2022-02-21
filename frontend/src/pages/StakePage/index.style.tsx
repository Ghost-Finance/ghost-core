import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      left: '30%',
      width: '100%',
      height: '100%',
    },
  })
);

export default useStyle;
