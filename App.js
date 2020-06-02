import React, { Component } from 'react';
import Main from './components/Main';
import store from './redux/store/index';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
