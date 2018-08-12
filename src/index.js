import React from 'react';
import ReactDOM from 'react-dom';

const title = 'The Comic Connect';

ReactDOM.render(
  <h1>{title}</h1>,
  document.getElementById('app'),
);

module.hot.accept();
