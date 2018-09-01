import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './components/App';

render(
  <App />,
  document.getElementById('app'),
);

module.hot.accept();
