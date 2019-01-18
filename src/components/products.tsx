import * as React from 'react';
import { Server, server, withServer } from '../data/graphql';
import { DataTable } from 'grommet';
import { Product } from '../data/model';

interface ProductsRowProps {
  server: Server
}

type OwnProduct = Pick<Product, "name" | "price">;

const ProductsRow: React.SFC<ProductsRowProps> = ({ server }) => {
  const [products, setProducts] = React.useState([] as Array<OwnProduct>);

  React.useEffect(() => {
    server.getProducts("name", "price")
      .then(products => setProducts(products as Array<OwnProduct>));
  }, []);

  return <DataTable
    columns={columns}
    data={products}
    sortable={true}
  />;

}

const columns = [
  { property: 'name', header: 'Product', search: true },
  { property: 'price', header: 'Price', search: true }
];

export const Products = withServer(ProductsRow);