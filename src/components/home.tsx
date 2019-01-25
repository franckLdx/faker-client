import * as React from 'react';
import { Products } from './products';
import { Todos } from './todos';
import { Grid } from 'grommet';

export const Home: React.SFC<{}> = () => (
  <Grid margin="small" columns={{ count: 3, size: "xsmall" }} gap='large' >
    <Products />
    <Todos />
  </Grid >
);

const ProductsKey = 'Products';
const TodosKey = 'Todos';

