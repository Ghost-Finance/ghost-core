import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    width: 90,
  },
  image: {
    width: '28px',
    height: '16px',
    position: 'fixed',
  },
  appBar: {
    top: 0,
    left: 'auto',
    position: 'fixed',
    right: 'auto',
    zIndex: theme.zIndex.drawer + 1,
    width: 80,
    height: '100%',
    backgroundColor: theme.palette.primary.light,
    boxShadow: 'none',
    padding: theme.spacing(6, 1),
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: 200,
    backgroundColor: theme.palette.primary.light,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 0,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: 400,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor: theme.palette.primary.light,
    color: '#fff',
  },
  drawerOpen: {
    width: 400,
    backgroundColor: theme.palette.primary.light,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: theme.palette.primary.light,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(6, 1),
    ...theme.mixins.toolbar,
  },
  iconLogo: {
    margin: 'auto',
    left: 0,
    right: 0,
  },
  icon: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  menu: {
    paddingTop: 50,
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    paddingLeft: 55,
    paddingRight: 8,
  },
  menuItem: {
    fontSize: 24,
    fontWeight: 600,
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
    margin: 'auto',
  },
  menuMediaSocial: {
    display: 'flex',
    flexFlow: 'row',
    justifyItems: 'center',
    width: '100%',
    height: '100%',
    padding: theme.spacing(0, 3),
  },
  menuMediaSocialItem: {
    alignSelf: 'end',
    '& > a': {
      margin: 'auto',
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
