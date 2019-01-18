import * as React from 'react';
import { Server, server, Product, withServer } from '../data/graphql';
import { DataTable } from 'grommet';
import { start } from 'repl';

interface ProductsRowProps {
  server: Server
}

type HomeProduct = Pick<Product, "name" | "price">;

const ProductsRow: React.SFC<ProductsRowProps> = () => {
  const [products, setProducts] = React.useState([] as Array<HomeProduct>);

  React.useEffect(() => {
    server.getProducts("name", "price")
      .then(products => setProducts(products as Array<HomeProduct>));
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