import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
  root: {
    margin: 'auto',
    padding: 10,
  },
  svg: {
    display: 'block',
  },
  svgCircle: {
    fill: theme.palette.primary.main,
    fontSize: '2rem',
  },
  svgCircleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.7rem',
  },
  text: {
    color: theme.palette.secondary.dark,
    textTransform: 'uppercase',
    marginTop: 5,
    fontSize: '0.6rem',
  },
  infos: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
