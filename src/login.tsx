import * as React from 'react';
import { useState, useCallback } from 'react';
import { Text, Heading } from 'grommet';
import { Box } from 'grommet/components/Box';
import { Layer } from 'grommet/components/Layer';
import { Button } from 'grommet/components/Button';
import { FormField } from 'grommet/components/FormField';
import { TextInput } from 'grommet/components/TextInput';
import { Server, withServer } from './api/graphql';

interface LoginProps { server: Server }

const RowLogin: React.SFC<LoginProps> = ({ server }) => {
  const [login, setLogin] = useState("");
  const onLoginChange = useCallback(
    (...args: any[]) => setLogin(args[0].target.value),
    [login]);

  const [password, setPassword] = useState("");
  const onPasswordChange = useCallback(
    (...args: any[]) => setPassword(args[0].target.value),
    [password]);

  const onLogin = useCallback(
    (...args: any[]) => server.login("", "").then(console.log),
    [login, password]);


  const onRegister = useCallback(
    (...args: any[]) => server.register("", "").then(console.log),
    [login, password]);


  return (
    <Layer full plain modal margin="small" >
      <Box fill direction="column" background="light-3" align="center" justify="center">
        <Box direction="column" align="center" justify="center" overflow="auto">
          <Heading level="1">Faker Client</Heading>

          <Box
            direction="column"
            width="medium"
            margin={{ top: "medium" }}
            pad="small"
            elevation="medium"
            background="light-1"
          >
            <FormField label='Login'>
              <TextInput onChange={onLoginChange} value={login} />
            </FormField>
            <FormField label='Password'>
              <TextInput type="password" onChange={onPasswordChange} value={password} />
            </FormField>
            <Button label="Login" primary margin={{ top: "small" }} onClick={onLogin} />
          </Box>

          <Box
            direction="column"
            width="medium"
            margin={{ top: "medium" }}
            pad="small"
            elevation="medium"
            background="light-1">
            <Text>Not registered Yet?</Text>
            <Button label="Register" margin={{ top: "xsmall" }} onClick={onRegister} />
          </Box>
        </Box>
      </Box>
    </Layer >
  );
}

export const Login = withServer(RowLogin);