import 'react-native-gesture-handler';

import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import LateralMenu from './src/navigator/LateralMenu';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <LateralMenu />
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ( { children }: any ) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default App
