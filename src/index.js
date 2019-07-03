// react libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Third party libraries
import 'semantic-ui-css/semantic.min.css';

//styles
import './assets/scss/index.scss';

// components
import App from "./App";

//tools
import * as serviceWorker from './tools/serviceWorker';

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
