import * as React from 'react';
import { Server, server, Product, withServer2 } from './data/graphql';

interface HomeRowProps {
  server: Server
}

type HomeProduct = Pick<Product, "name" | "price">;

const HomeRow: React.SFC<HomeRowProps> = () => {
  const [products, setProducts] = React.useState([] as Array<HomeProduct>);

  React.useEffect(() => {
    server.getProducts("name", "price")
      .then(products => setProducts(products as Array<HomeProduct>));
  }, []);

  return (
    <div>HOME SWEET HOME<br />
      {products && products.map(p => (<article key={p.name}>{p.name} --> {p.price}<br /></article>))}
    </div>
  );
}

export const Home = withServer2(HomeRow);