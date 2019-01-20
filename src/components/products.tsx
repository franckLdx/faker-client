import * as React from 'react';
import { withServer, WithServerProps } from '../data/graphql';
import { Product } from '../data/model';
import { Draggable } from './draggable';
import { Table } from './table';

const ProductsRow: React.SFC<WithServerProps> = ({ server }) => {
  const [products, setProducts] = React.useState([] as Array<Product>);

  React.useEffect(() => {
    server.getProducts("name", "price")
      .then(products => setProducts(products as Array<Product>));
  }, []);

  return (
    <Draggable title="Products">
      <Table
        columns={columns}
        data={products}
      />
    </Draggable>
  );

}

const columns = [
  { property: 'name', header: 'Product', search: true },
  { property: 'price', header: 'Price', search: true }
];

export const Products = withServer(ProductsRow);