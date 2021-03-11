import React from 'react';
import { View, Text } from 'react-native';
import SignInScreen from './SignInScreen';
import { AuthProvider, useAuth } from '../../context/auth-context';
import { fireEvent, render } from '@testing-library/react-native';

const TestAuth = () => {
  const { isAuth } = useAuth();

  if (!isAuth) return null;

  return (
    <View>
      <Text>welcome!</Text>
    </View>
  )
};

it('Should process SignIn', () => {
  const { getByText , getByPlaceholderText} = render(
    <AuthProvider>
      <SignInScreen />
      <TestAuth />
    </AuthProvider>
  );

  const userNameInput = getByPlaceholderText("Enter your Username");
  const passwordInput = getByPlaceholderText("Enter your Password");
  const button = getByText("Sign In");

  fireEvent.changeText(userNameInput, 'demo');
  fireEvent.changeText(passwordInput, 'demo');
  fireEvent.press(button);

  const testAuthCmp = getByText("welcome!");

  expect(userNameInput).not.toBeNull();
  expect(passwordInput).not.toBeNull();
  expect(button).not.toBeNull();
  expect(testAuthCmp).not.toBeNull();
})