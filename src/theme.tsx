import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8C2824',
    },
    secondary: {
      main: '#C76C69',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f2f2f2',
    },
  },
});

export default theme;