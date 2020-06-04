import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import Routes from '../../routes';

import { store, persistor } from '../../store';

import './App.scss';

const App = () => (
  <div className="app">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="app" data-testid="app">
          <BrowserRouter>
            <Routes/>
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  </div>
);

export default App;
