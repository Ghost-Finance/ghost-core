import { Badge, Button, Typography } from '@material-ui/core';
import React, { MouseEventHandler } from 'react';
import useStyles from './index.style';
import theme from '../../../theme.style';
import hooks from '../../../hooks/walletConnect';
import { useSelector } from '../../../redux/hooks';
import { Link } from 'react-router-dom';

const ConnectWallet = (): React.ReactElement => {
  const { networkName } = useSelector((state) => state.app);
  const classes = useStyles(theme);
  const { wallet } = hooks();

  const handleLink = (location: any) => {
    if (wallet.connected) {
      return {};
    }
    return {
      ...location,
      pathname: '/wallet-connect',
    };
  };

  const { account, network } = wallet;

  const ConnectButton = () => (
    <Link to={handleLink} className={classes.link}>
      <Button className={`${classes.root} ${classes.connect}`}>
        <Typography
          variant="caption"
          className={`${classes.label} ${classes.labelConnect} ${
            account ? classes.ellipse : ''
          }`}
        >
          {account
            ? [account?.slice(0, 5), account?.slice(-5)].join('...')
            : 'Connect your wallet'}
        </Typography>
      </Button>
    </Link>
  );

  const WrongNetworkButton = () => (
    <Button className={`${classes.root} ${classes.wrongNetwork}`}>
      <Typography
        variant="caption"
        className={`${classes.label} ${classes.labelWrongNetwork} ${classes.ellipseRedColor}`}
      >
        Wrong Network
      </Typography>
    </Button>
  );

  return networkName !== network ? <WrongNetworkButton /> : <ConnectButton />;
};

export default React.memo(ConnectWallet);
