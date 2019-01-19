import * as React from 'react';
import { Products } from './products';
import { Todos } from './todos';
import ReactGridLayout, { Layout } from 'react-grid-layout';
import { Box } from 'grommet/components/Box';
import { backgroundPage } from '../data/theme';

export const Home: React.SFC<{}> = () => (
  <Box background={backgroundPage} basis="full">
    <ReactGridLayout className="layout" layout={layout} cols={12} width={1200} rowHeight={10}>
      <div key={ProductsKey}><Products /></div>
      <div key={TodosKey}><Todos /></div>
    </ReactGridLayout>
  </Box>
);

const ProductsKey = 'Products';
const TodosKey = 'Todos';

const layout: Layout[] = [
  { i: ProductsKey, x: 0, y: 0, w: 3, h: 30 },
  { i: TodosKey, x: 4, y: 0, w: 3.5, h: 2 },
];
