import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/main.scss';
import Provider from './graphql/Provider';

const Main = () => (
  <Provider>
    <App />
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
