import * as React from 'react';
import { Products } from './products';
import { Todos } from './todos';

export const Home: React.SFC<{}> = () => (
  <>
    <section><Products /></section>
    <section><Todos /></section>
  </>
);