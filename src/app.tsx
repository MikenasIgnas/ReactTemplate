/* eslint-disable linebreak-style */
import * as React from 'react';
import { Provider } from 'react-redux';
import Routing from './Routing';
import store from './store/store';

const App: React.FC = () => (
  <Provider store={store}>
    <Routing />
  </Provider>
  );

export default App;
