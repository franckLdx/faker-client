import * as React from 'react';
import { useState, useCallback } from 'react';
import { Text, Heading } from 'grommet';
import { Box } from 'grommet/components/Box';
import { Layer } from 'grommet/components/Layer';
import { Button } from 'grommet/components/Button';
import { FormField } from 'grommet/components/FormField';
import { TextInput } from 'grommet/components/TextInput';
import { Image } from 'grommet/components/Image';

export const Login: React.SFC<{}> = () => {
  const [login, setLogin] = useState("");
  const onLoginChange = useCallback(
    (...args: any[]) => setLogin(args[0].target.value),
    [login]);

  const [password, setPassword] = useState("");
  const onPasswordChange = useCallback(
    (...args: any[]) => setPassword(args[0].target.value),
    [password]);

  return (
    <Layer full plain modal margin="small" >
      <Box fill direction="column" background="light-3" align="center" justify="center">
        <Box direction="column" align="center" justify="center" overflow="auto">
          {/* <Image src="faker.js" alignSelf="center" /> */}
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
            <Button label="Register" margin={{ top: "xsmall" }} />
          </Box>
        </Box>
      </Box>
    </Layer >
  );
}