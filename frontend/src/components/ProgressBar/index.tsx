import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import useStyle from './style';

const ProgressBar = () => {
  const classes = useStyle();

  return (
    <>
      <LinearProgress color="primary" className={classes.root} />
    </>
  );
};

export default ProgressBar;
