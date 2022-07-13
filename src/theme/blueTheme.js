import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: blue[700],
    },
  },
});