import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from '../../plugins/material-ui/mu-theme'
const MULayout = ({children}) => {
  return <ThemeProvider theme={theme}>
      {children}
  </ThemeProvider>;
};

export default MULayout;
