import * as React from "react";
import { Box } from "grommet/components/Box";

interface AppBarProps {
  children: React.ReactNode;
}

export const AppBar: React.SFC<AppBarProps> = ({ children }) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
  >
    {children}
  </Box>
);