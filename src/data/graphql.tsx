import axios from 'axios';
import React, { useContext } from 'react';

export class Server {
  private client = axios.create({
    baseURL: 'https://fakerql.com/graphql'
  });

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
}

export const server = new Server();

const ServiceContext = React.createContext(server);

const ServiceProvider = ServiceContext.Provider

function withServer<T extends { server: Server }>(Component: React.ComponentType<T>) {
  type ComponentOnwProps = Exclude<T, 'server'>;
  return (props: ComponentOnwProps) => {
    const server = useContext(ServiceContext);
    const injectedProps: T = { ...props, server };
    return <Component {...injectedProps} />
  };
}

export { ServiceProvider, withServer }