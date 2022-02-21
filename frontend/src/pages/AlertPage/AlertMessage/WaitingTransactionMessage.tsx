import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ButtonForm from '../../../components/Button/ButtonForm';
import useStyle from '../index.style';
import './AnimatedDot.css';

const WaitingTransactionMessage = () => {
  const classes = useStyle();

  return (
    <div>
      <div className="dot-floating"></div>

      <div className={classes.boxMessage}>
        <h1 className={classes.title}>
          Your transaction <br />
          is right on the way <br />
          <span className={classes.textDark}>to be confirmed</span>
        </h1>

        <p className={classes.subTitle}>
          Now you just need to <br />
          wait a few more minutes...
        </p>
      </div>
    </div>
  );
};

export default WaitingTransactionMessage;
