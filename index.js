import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './src/App';
import './index.css';
import data from './src/data.json';




ReactDOM.render(
  <App className="App" title="Thinking in React" products={data}/>,
  document.getElementById('root')
);


// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
