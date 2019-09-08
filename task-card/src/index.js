import React from 'react';
import ReactDOM from 'react-dom';
import MainWindow from "./mainWindow"
import * as serviceWorker from './serviceWorker';
import Login from './login';
import {HashRouter, Route, Router} from 'react-router-dom';
import {browserHistory, hashHistory} from 'react-router';

ReactDOM.render((
    <HashRouter>
        <div>
            <Route exact path='/' component={Login}/>
            <Route path='/main' component={MainWindow}/>
        </div>
    </HashRouter>
), document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
