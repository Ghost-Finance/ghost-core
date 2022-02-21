import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { LogoIcon } from '../../../components/Icons';
import ButtonForm from '../../../components/Button/ButtonForm';
import infoImage from '../../../assets/arrow-icon-yellow.png';
import useStyle from '../index.style';

const SuccessTransactionMessage = () => {
  const classes = useStyle();

  return (
    <div>
      <div className={classes.icon}>
        <LogoIcon />
      </div>

      <div className={classes.boxMessage}>
        <h1 className={classes.title}>
          Welcome, <br />
          <span className={classes.textYellow}>ghost friend</span>
        </h1>

        <p className={classes.subTitle}>
          Now that you have collateral. <br />
          <span className={classes.textBold}>Let’s start the game ✨</span>
        </p>
      </div>

      <div className={classes.containerRow}>
        <div className={classes.contentButton}>
          <img alt="complex" src={infoImage} />
          <h3>
            Provide liquidity and <br />
            <span className={classes.textYellow}>earn rewards</span>
          </h3>
          <Link
            to={process.env.LIQUIDITY_PROGRAM || '#'}
            className={classes.link}
          >
            <ButtonForm
              text="Liquidity program ->"
              className={`${classes.button} ${classes.buttonCancel}`}
            />
          </Link>
        </div>

        <Link to="/" className={classes.link}>
          <Button className={classes.buttonDefault}>Back to home {`->`}</Button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessTransactionMessage;
