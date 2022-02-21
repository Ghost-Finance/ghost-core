import React from 'react';
import { Link } from 'react-router-dom';
import ButtonForm from '../../../components/Button/ButtonForm';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import useStyle from '../index.style';

const ConfirmTransactionMessage = () => {
  const classes = useStyle();

  return (
    <div>
      <div
        className={classes.icon}
        // onClick={() => setConfirmed(!confirmed)}
      >
        <ArrowForwardIcon style={{ fontSize: '2.8rem' }} />
      </div>

      <div className={classes.boxMessage}>
        <h1 className={classes.title}>
          Please <br />
          confirm your <br />
          transaction
        </h1>

        <p className={classes.subTitle}>
          You need to confirm this in your <br />
          wallet. If it doens't work, &nbsp;
          <Link to="/" className={classes.help}>
            ask here <br /> for help.
          </Link>
        </p>
      </div>

      <Link to="/" className={classes.link}>
        <ButtonForm
          text="Cancel"
          className={`${classes.button} ${classes.buttonCancel}`}
        />
      </Link>
    </div>
  );
};

export default ConfirmTransactionMessage;
