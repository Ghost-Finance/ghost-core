import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import useStyle from './index.style';
import ButtonForm from '../../components/Button/ButtonForm';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ConfirmTransactionMessage from './AlertMessage/ConfirmTransactionMessage';
import WaitingTransactionMessage from './AlertMessage/WaitingTransactionMessage';
import SuccessTransactionMessage from './AlertMessage/SuccessTransactionMessage';
import ErrorTransactionMessage from './AlertMessage/ErrorTransactionMessage';
import { useSelector } from '../../redux/hooks';

let CONFIRM_TRANSACTION: string = 'confirm';
let WATING_TRANSACTION: string = 'waiting';
let SUCCESS_TRANSACTION: string = 'finish';
let ERROR_TRANSACTION: string = 'error';

const AlertPage = () => {
  const classes = useStyle();
  const [message, setMessage] = useState('confirm');
  const [confirmed, setConfirmed] = useState(false);
  const { status } = useSelector((state) => state.app);

  const messageComponents = {
    [CONFIRM_TRANSACTION]: () => <ConfirmTransactionMessage />,
    [WATING_TRANSACTION]: () => <WaitingTransactionMessage />,
    [SUCCESS_TRANSACTION]: () => <SuccessTransactionMessage />,
    [ERROR_TRANSACTION]: () => <ErrorTransactionMessage />,
  };

  useEffect(() => {
    setMessage(status as string);
  }, [status]);

  return (
    <div className="modal">
      <Grid container direction="column" className={classes.root}>
        <Grid className={classes.paperContent} item>
          <div className={classes.cardForm}>
            {(messageComponents[message as string] &&
              messageComponents[message as string]()) ||
              messageComponents[CONFIRM_TRANSACTION]()}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AlertPage;
