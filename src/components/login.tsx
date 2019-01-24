import * as React from 'react';
import { useState, useCallback } from 'react';
import { Server, withServer } from '../data/graphql';
import { useLoginToken } from '../data/data';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Input from 'reactstrap/lib/Input';
import Button from 'reactstrap/lib/Button';
import styled from 'styled-components';

const Background = styled.div.attrs({
  className: "d-flex flex-column align-items-center justify-content-center flex-grow-1 m-2"
})`
  background: lightGrey;
  border-radius: 30px;
`;

const width = `
  min-width: 300px;
  max-width: 600px;
  width: 75%;
`;

const LoginDiv = styled.div.attrs({
  className: "d-flex flex-column mb-3 p-1"
})`
  background: white;
  overflow: auto;
  ${width}
`;

const RegisterButton = styled(Button).attrs({
  color: "primary"
})`
${width}
`;

interface LoginProps { server: Server }

const RowLogin: React.SFC<LoginProps & RouteComponentProps> = ({ server, history }) => {
  const [login, setLogin] = useState("");
  const onLoginChange = useCallback(
    (...args: any[]) => setLogin(args[0].target.value),
    [login]);

  const [password, setPassword] = useState("");
  const onPasswordChange = useCallback(
    (...args: any[]) => setPassword(args[0].target.value),
    [password]);

  const [, setToken] = useLoginToken();

  const onLoggedIn = useCallback(
    (newToken: string) => {
      setToken(newToken);
      history.push("/");
    }, []
  );

  const onLogin = useCallback(
    (...args: any[]) => server.login("", "").then(onLoggedIn),
    [login, password]);

  const onRegister = useCallback(
    (...args: any[]) => server.register("", "").then(onLoggedIn),
    [login, password]);

  const formValid = login && password;

  return (
    <Background>
      <LoginDiv>
        <Input placeholder="Login" onChange={onLoginChange} />
        <Input type="password" placeholder="Password" onChange={onPasswordChange} />
        <Button className="mt-2" color="primary" disabled={!formValid} onClick={onLogin}>Login</Button>
      </LoginDiv>
      <h5>Not registered Yet?</h5>
      <RegisterButton disabled={!formValid} onClick={onRegister}>Register</RegisterButton>
    </Background>
  );
}

export const Login = withRouter(withServer(RowLogin));