import React from 'react';
import { AppNavigator } from './AppNavigator';
import { AppDataProvider } from './context/AppDataProvider';

const withProviders = (Component: React.FC): React.FC => {
  return () => (
      <AppDataProvider>
        <Component />
      </AppDataProvider>
  )
}

export const App: React.FC = withProviders(AppNavigator)

