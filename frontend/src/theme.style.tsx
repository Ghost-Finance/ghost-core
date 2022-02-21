import '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import {
  TOKEN_BRAND_COLOR_PRIMARY_DARK,
  TOKEN_BRAND_COLOR_PRIMARY_PURE,
  TOKEN_NEUTRAL_COLOR_LOW_DARK,
  TOKEN_NEUTRAL_COLOR_LOW_PURE,
  TOKEN_NEUTRAL_COLOR_LOW_LIGHT,
  TOKEN_NEUTRAL_COLOR_HIGH_DARK,
  TOKEN_NEUTRAL_COLOR_HIGH_LIGHT,
  TOKEN_NEUTRAL_COLOR_HIGH_PURE,
  TOKEN_FEEDBACK_COLOR_POSITIVE_PURE,
  TOKEN_FEEDBACK_COLOR_POSITIVE_DARK,
  TOKEN_FEEDBACK_COLOR_NEGATIVE_PURE,
  TOKEN_FEEDBACK_COLOR_NEGATIVE_DARK,
  TOKEN_BACKGROUND_COLOR_DEFAULT,
  TOKEN_WARNING_COLOR_PRIMARY,
} from './tokens';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    brand: {
      main: React.CSSProperties['color'];
      dark: React.CSSProperties['color'];
    };
  }
  interface ThemeOptions {
    brand: {
      main: React.CSSProperties['color'];
      dark: React.CSSProperties['color'];
    };
  }
}

const theme = createMuiTheme({
  brand: {
    main: TOKEN_BRAND_COLOR_PRIMARY_PURE,
    dark: TOKEN_BRAND_COLOR_PRIMARY_DARK,
  },
  palette: {
    primary: {
      main: TOKEN_NEUTRAL_COLOR_LOW_DARK,
      dark: TOKEN_NEUTRAL_COLOR_LOW_PURE,
      light: TOKEN_NEUTRAL_COLOR_LOW_LIGHT,
      contrastText: '#fff',
    },
    secondary: {
      main: TOKEN_NEUTRAL_COLOR_HIGH_PURE,
      dark: TOKEN_NEUTRAL_COLOR_HIGH_DARK,
      light: TOKEN_NEUTRAL_COLOR_HIGH_LIGHT,
      contrastText: '#fff',
    },
    error: {
      main: TOKEN_FEEDBACK_COLOR_NEGATIVE_PURE,
      dark: TOKEN_FEEDBACK_COLOR_NEGATIVE_DARK,
    },
    success: {
      main: TOKEN_FEEDBACK_COLOR_POSITIVE_PURE,
      dark: TOKEN_FEEDBACK_COLOR_POSITIVE_DARK,
    },
    background: {
      default: TOKEN_NEUTRAL_COLOR_LOW_DARK,
    },
    warning: {
      main: TOKEN_WARNING_COLOR_PRIMARY,
    },
  },
  typography: {
    fontFamily: 'Inter',
    h6: {
      color: '#fff',
    },
    caption: {
      white: '#ffffff',
    },
  },
});

export default theme;
