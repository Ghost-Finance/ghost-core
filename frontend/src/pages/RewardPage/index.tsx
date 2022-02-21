import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import useStyle from './index.style';
import { useSelector } from '../../redux/hooks';

const RewardPage = () => {
  const { account } = useSelector((state) => state.wallet);
  const [redirectHome, setRedirectHome] = useState(false);
  const classes = useStyle();

  useEffect(() => {
    setRedirectHome(account === null);
  }, [account]);
  return (
    <div className="modal side-left">
      {redirectHome ? (
        <Redirect
          to={{
            pathname: '/',
          }}
        />
      ) : null}
      <Grid container direction="row" className={classes.root}>
        <div>
          <Link to="/">
            <IconButton>
              <CloseIcon style={{ color: '#fff' }} />
            </IconButton>
          </Link>
        </div>
      </Grid>
    </div>
  );
};

export default RewardPage;
