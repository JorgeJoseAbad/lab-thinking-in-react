import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './src/app.js';


ReactDOM.render(
  <App title="Thinking in React"/>,
  document.getElementById('root')
);


// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
