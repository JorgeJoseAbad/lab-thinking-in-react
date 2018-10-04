import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './src/App.js';
import data from './src/data.json';
import './src/App.css';



ReactDOM.render(
  <App className="App" title="Thinking in React" products={data}/>,
  document.getElementById('root')
);


// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
