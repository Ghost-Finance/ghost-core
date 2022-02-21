import React from 'react'
import { Box, Chip, IconButton, makeStyles } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './account.css'

interface Props {
  address: string
  networkName: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '14px'
    }
  },
  label: {
    background: '#fff',
    color: '#000',
    [theme.breakpoints.down('md')]: {
      fontSize: '12px'
    }
  },
  iconButton: {
    [theme.breakpoints.down('md')]: {
      padding: 0
    }
  }
}))

const Account = ({ address, networkName }: Props) => {
  const classes = useStyles()
  return (
    <Box component="div" m={1} className={classes.root}>
      <span className="ellipse">
        {[address.slice(0, 5), address.slice(-5)].join('...')}
      </span>
      &nbsp;
      <Chip size="small" label={networkName} className={classes.label} />
      <IconButton edge="end" color="inherit" className={classes.iconButton}>
        <ExpandMoreIcon />
      </IconButton>
    </Box>
  )
}

export default Account
