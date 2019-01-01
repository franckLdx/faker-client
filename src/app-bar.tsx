import * as React from "react";
import { Box } from "grommet/components/Box";


export const AppBar: React.SFC<{}> = () => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
  />
);