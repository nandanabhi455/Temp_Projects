import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/sass/style.scss';
import './i18n';

ReactDOM.render( <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode>,
    document.getElementById('periodic-table')
);