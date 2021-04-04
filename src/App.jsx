import React from 'react';
import { Provider } from 'react-redux';

import MessagesScreen from 'screens/Messages';
import store from 'store';

function App() {
  return (
    <Provider store={store}>
      <MessagesScreen />
    </Provider>
  );
}

export default App;
