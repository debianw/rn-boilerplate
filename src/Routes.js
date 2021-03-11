import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './navigators/AuthNavigator';
import AppNavigator from './navigators/AppNavigator';
import { useAuth } from './context/auth-context';

const Stack = createStackNavigator();

const Routes = () => {
  const { isAuth } = useAuth();

  return (
    <NavigationContainer>
      {!isAuth ? (
        <AuthNavigator />
      ) : (
        <AppNavigator />
      )}
    </NavigationContainer>
  );
};

export default Routes;