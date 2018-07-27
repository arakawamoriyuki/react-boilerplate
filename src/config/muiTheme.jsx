import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

export default createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green.A700,
    },
  },
});
