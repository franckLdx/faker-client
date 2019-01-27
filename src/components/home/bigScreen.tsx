import * as React from 'react';
import { Products } from '../products';
import { Todos } from '../todos';

export const BigSreen: React.SFC<{}> = () => {
  return (
    <>
      <section className="d-flex justify-content-center">
        <Article title="Products">
          <Products />
        </Article>
        <Article title="Todos">
          <Todos />
        </Article>
      </section>
    </>
  );
}

interface ArticleProps {
  title: string;
  children: React.ReactNode;
}
const Article: React.SFC<ArticleProps> = ({ title, children }) => (
  <article className="m-4">
    <h5 className="text-center">{title}</h5>
    {children}
  </article>
);