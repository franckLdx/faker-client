import * as React from 'react';
import { useState, useCallback } from 'react';
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
    <Layer full plain modal margin="small">
      <Image src="faker.js" alignSelf="center" />
      <Box width="small" alignSelf="center" margin="none" align="center" overflow="auto" >
        <FormField label='Login'>
          <TextInput onChange={onLoginChange} value={login} />
        </FormField>
        <FormField label='Password'>
          <TextInput type="password" onChange={onPasswordChange} value={password} />
        </FormField>
        <Button label="Login" primary disabled={!login || !password} type="submit" margin="xsmall" fill={true} />
        <Button label="Register" type="submit" margin="xsmall" fill={true} />
      </Box>
    </Layer >
  );
}