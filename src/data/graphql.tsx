import axios, { AxiosRequestConfig } from 'axios';
import React, { useContext } from 'react';
import { Product, Todo } from './model';
import { getToken } from './data';

export class Server {
  private client = axios.create({
    baseURL: 'https://fakerql.com/graphql'
  });

  constructor() {
    this.client.interceptors.request.use(function (config) {
      if (isAuthenticationRequest(config)) {
        return config;
      }
      const token = getToken();
      if (token !== null) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    });
  }

  async register(email: string, password: string) {
    const response = await this.client.post('', {
      query: `mutation {
      register(email:"${email}",password:"${password}") {token}
    }`
    });
    return response.data.data.register.token;
  }

  async login(email: string, password: string) {
    const response = await this.client.post('', {
      query: `mutation {
      login(email:"${email}",password:"${password}" expiresIn:"24h") {token}
    }`
    });
    return response.data.data.login.token;
  }

  async getProducts<T extends Partial<Product>>(...fields: (keyof T)[]): Promise<T[]> {
    const query = `{allProducts{${fields.join(',')}}}`;
    const response = await this.client.post('', {
      query
    });
    return response.data.data.allProducts as T[];
  }

  async getTodos<T extends Partial<Todo>>(...fields: (keyof T)[]): Promise<T[]> {
    const query = `{allTodos{${fields.join(',')}}}`;
    const response = await this.client.post('', {
      query
    });
    return response.data.data.allTodos as T[];
  }
}

export const server = new Server();

const ServiceContext = React.createContext(server);

const ServiceProvider = ServiceContext.Provider

export interface WithServerProps {
  server: Server
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

function withServer<T extends WithServerProps>(Component: React.ComponentType<T>) {
  type ComponentOwnProps = Omit<T, 'server'>;
  const wrappedComponent: React.SFC<ComponentOwnProps> = props => {
    const server = useContext(ServiceContext);
    const injectedProps = { ...props, server } as T;
    return <Component {...injectedProps} />
  }
  return wrappedComponent;
}

function isAuthenticationRequest(config: AxiosRequestConfig) {
  return config.data.query.indexOf('login(') !== -1 || config.data.query.indexOf('register(') !== -1;
}

export { ServiceProvider, withServer }