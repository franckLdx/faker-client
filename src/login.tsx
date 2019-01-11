import * as React from 'react';
import { useState, useCallback } from 'react';
import { Text, Heading } from 'grommet';
import { Box } from 'grommet/components/Box';
import { Layer } from 'grommet/components/Layer';
import { Button } from 'grommet/components/Button';
import { FormField } from 'grommet/components/FormField';
import { TextInput } from 'grommet/components/TextInput';
import axios from 'axios';
import { log } from 'util';

export const Login: React.SFC<{}> = () => {
  const [login, setLogin] = useState("");
  const onLoginChange = useCallback(
    (...args: any[]) => setLogin(args[0].target.value),
    [login]);

  const [password, setPassword] = useState("");
  const onPasswordChange = useCallback(
    (...args: any[]) => setPassword(args[0].target.value),
    [password]);

  const onRegister = useCallback(
    (...args: any[]) => register(),
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
            <Button label="Login" primary margin={{ top: "small" }} />
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

async function register() {
  const client = axios.create({
    url: 'https://fakerql.com/graphql'
  });
  const foo = await client.post('https://fakerql.com/graphql', {
    query: `mutation {
      login(email:"franck.ledoux.progmail.com",password:"foo") {token}
    }`
  });
  console.log('token', foo.data.data.login.token);

}