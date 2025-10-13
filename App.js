import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import RootNavigation from './src/navigator/rootNavigation';
import Toast from 'react-native-toast-message';
import toastConfig from './src/components/toastMessage';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
        <Toast config={toastConfig} visibilityTime={3000} />
      </PersistGate>
    </Provider>
  );
};

export default App;
