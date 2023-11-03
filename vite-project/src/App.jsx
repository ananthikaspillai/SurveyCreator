

import React from 'react';
import { Provider } from 'react-redux';
import store from "../src/assets/store";
import LoginPage from "../src/assets/LoginPage"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LoginPage />
      </div>
    </Provider>
  );
}

export default App;

