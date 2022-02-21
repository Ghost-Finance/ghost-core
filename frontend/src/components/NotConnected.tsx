import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Box,
  Button,
  DialogActions,
  Typography,
  Grid,
  CircularProgress
} from '@material-ui/core'

interface NotConnectedProps {
  isOpen: boolean
  onClose: () => void
  onConnectClicked: () => void
  isConnecting: boolean
}

const NotConnected = ({
  isOpen,
  onClose,
  onConnectClicked,
  isConnecting
}: NotConnectedProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="dialog-title"
      maxWidth="xs"
    >
      <DialogTitle id="dialog-title">Wallet not connected</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {isConnecting ? (
            <Grid container spacing={1}>
              <Grid item>
                <CircularProgress size="1.2rem" />
              </Grid>
              <Grid item>
                <Typography>Connecting...</Typography>
              </Grid>
            </Grid>
          ) : (
            <Typography>
              To proceed, please connect your wallet first!
            </Typography>
          )}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Box m={2} textAlign="center">
          <Button
            variant="contained"
            color="primary"
            onClick={onConnectClicked}
            disabled={isConnecting}
          >
            Connect
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  )
}

export default NotConnected
