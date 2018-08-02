import React from 'react';
import ReactDOM from 'react-dom';
import RouterMap from './components/RouterMap';

ReactDOM.render(<RouterMap />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./index.jsx', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  });
}
