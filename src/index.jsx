import React from 'react';
import ReactDOM from 'react-dom';
import RouterMap from './routes';

ReactDOM.render(<RouterMap />, document.getElementById('root'));

if (module.hot) {
  // eslint-disable-next-line
  module.hot.accept('./index.jsx', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  });
}
