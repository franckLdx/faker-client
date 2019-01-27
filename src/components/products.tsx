import * as React from 'react';
import { withServer, WithServerProps } from '../data/graphql';
import { Product } from '../data/model';
import { Table } from 'reactstrap';

const ProductsRow: React.SFC<WithServerProps> = ({ server }) => {
  const [products, setProducts] = React.useState([] as Array<Product>);

  React.useEffect(() => {
    server.getProducts("id", "name", "price")
      .then(products => setProducts(products as Array<Product>));
  }, []);

  return (
    <Table striped bordered responsive>
      <THeader />
      <tbody>
        {products.map(product => <TLine key={product.id} product={product} />)}
      </tbody>
    </Table>
  );
}

const THeader: React.SFC<{}> = () => (
  <thead>
    <tr>
      <th className="text-right">Name</th>
      <th className="text-left">Price</th>
    </tr>
  </thead>
);

const TLine: React.SFC<{ product: Product }> = ({ product }) => (
  <tr>
    <th className="text-right">{product.name}</th>
    <th className="text-left">{product.price}</th>
  </tr>
);

export const Products = withServer(ProductsRow);