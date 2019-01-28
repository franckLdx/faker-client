import * as React from 'react';
import { useState, useCallback } from 'react';
import { Server, withServer } from '../data/graphql';
import { useLoginToken } from '../data/data';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Input from 'reactstrap/lib/Input';
import Button from 'reactstrap/lib/Button';
import styled from 'styled-components';
import Jumbotron from 'reactstrap/lib/Jumbotron';

const SurroundDiv = styled.div.attrs({
  className: "d-flex flex-column justify-content-center bg-secondary"
})`
  height: 100vh`;

const JumbotronContainer = styled.div.attrs({
  className: "d-flex flex-column align-items-center"
})``;

const width = `
  min-width: 300px;
  max-width: 600px;
  width: 75%;`;

const StyledInput = styled(Input)`
  ${width}
`;

const StyledButton = styled(Button).attrs({
  color: "primary",
})`
${width}`;

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
    <SurroundDiv>
      <Jumbotron fluid className="m-0 px-2">
        <JumbotronContainer>

          <h1 className="display-4">Faker Client</h1>
          <StyledInput placeholder="Login" onChange={onLoginChange} />
          <StyledInput type="password" placeholder="Password" onChange={onPasswordChange} />
          <StyledButton className="mt-2" disabled={!formValid} onClick={onLogin}>Login</StyledButton>

          <h5 className="mt-3">Not registered Yet?</h5>
          <StyledButton disabled={!formValid} onClick={onRegister}>Register</StyledButton>

        </JumbotronContainer>
      </Jumbotron>
    </SurroundDiv>
  );
}

export const Login = withRouter(withServer(RowLogin));