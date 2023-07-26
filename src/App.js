// App.js
import React from 'react';
import B from './B';
import C from './C';
import { store } from './Store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
        <B />
        <C />
    </Provider>
  );
};

export default App;
