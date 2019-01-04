import Raven from 'raven-js';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

Raven.config(
  'http://295cc2dc36544e278615b788d2545ab4@sentry.cdecube.com/9',
).install();

// require('react-codemirror/lib/codemirror.css');

ReactDOM.render(<Router />, document.getElementById('root'));
