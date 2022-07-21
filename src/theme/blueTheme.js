import { createTheme } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors';

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: blue[700],
    },
    error:{
      main: red[200],
    }
  },
});