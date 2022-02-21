import React from 'react'
import App from './pages/App'
import { CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core'
import { SnackbarProvider } from 'notistack'
import theme from './theme.style'

const useStyles = makeStyles({
  root: {
    width: '100vw',
    minHeight: '100vh',
    margin: 0,
    padding: 0
  }
})

const AppTheme = () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={1}>
        <div className={classes.root}>
          <App />
        </div>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default AppTheme
