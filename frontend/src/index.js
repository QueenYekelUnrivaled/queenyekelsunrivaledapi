import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import routing from './utils/routing';
import { AuthContext } from './auth/context';

import Router from './router';

import './css/root.sass';

const App = () => {
    return (
        <AuthContext.Provider value=''>
            <Router history={routing.history}>{(context, routeProps) => context}</Router>
        </AuthContext.Provider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
