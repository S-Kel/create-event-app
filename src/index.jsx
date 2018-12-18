import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import './App/Layout/App.css';
import App from './App/Layout/App';
import * as serviceWorker from './serviceWorker';
// C:\Users\Owner\Desktop\Student\Projects\React\re-event\node_modules\semantic-ui-css\semantic.min.css


ReactDOM.render( <App /> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();