import React from 'react';
import Routes from './src/Routes';
import { AuthProvider } from './src/context/auth-context';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}