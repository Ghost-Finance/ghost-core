import React from 'react'
import {
  AppBar,
  IconButton,
  makeStyles,
  Theme,
  Toolbar
} from '@material-ui/core'
import ConnectButton from '../Button/ConnectButton'
import Account from '../Account'
import theme from '../../theme.style'

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      flexGrow: 1,
      borderBottom: '1px solid rgba(242, 242, 242, 1)'
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    flex: {
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-between'
    }
  }
})
interface Props {
  account: string
  networkName: string
}

const TopBar = ({ account, networkName }: Props) => {
  const classes = useStyles(theme)

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar className={classes.flex}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
        </IconButton>
        {account ? (
          <Account address={account} networkName={networkName} />
        ) : (
          <ConnectButton />
        )}
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
