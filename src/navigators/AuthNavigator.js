import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen, { ScreenOptions as SignInScreenOptions } from "../screens/signin/SignInScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} options={SignInScreenOptions} />
    </Stack.Navigator>
  )
};

export default AuthNavigator;