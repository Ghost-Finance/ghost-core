import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ButtonForm from '../../../components/Button/ButtonForm';
import infoImage from '../../../assets/arrow-icon-yellow.png';
import useStyle from '../index.style';

const ErrorTransactionMessage = () => {
  const classes = useStyle();

  return (
    <div>
      <div className={classes.icon}>
        <ErrorOutlineIcon color="error" fontSize="large" />
      </div>

      <div className={classes.boxMessage}>
        <h1 className={classes.title}>
          Ops :(, <br />
          <span className={classes.textWarning}>transaction rejected!</span>
        </h1>

        <p className={classes.subTitle}>
          You can see the log <br />
          <span className={classes.textBold}>in your wallet.</span>
        </p>
      </div>

      <Link to="/" className={classes.link}>
        <Button className={classes.buttonDefault}>Back to home {`->`}</Button>
      </Link>
    </div>
  );
};

export default ErrorTransactionMessage;
