import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import './css/pure/pure-min.css';
import './css/pure/marketing.css';
import './css/fa/font-awesome-4.7.0/css/font-awesome.min.css'
//import './css/fa/fontawesome-free-5.8.1-web/css/all.min.css'
import './css/index.css';

import Home from './js/main/App';
import Works from './js/pages/works/Works';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    (<Router>
        <Route exact path="/" component={Home}></Route>
        <Route path="/trabalhos" component={Works}></Route>
    </Router>), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
