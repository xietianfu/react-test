import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// 转换es的语法
import 'babel-polyfill';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./index.jsx', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  });
}
