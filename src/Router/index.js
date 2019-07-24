import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux'
import App from '../App';
import Detail from '../Views/Detail/Detail';
import Home from '../Views/Home/Home';
import List from '../Views/List/List';
import Center from '../Views/Center/Center';
import City from '../Views/City/City';


const router = <Provider store={store}>
        <HashRouter>
            <App>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/list' component={List} />
                    <Route path='/detail' component={Detail} />
                    <Route path='/center' component={Center} />
                    <Route path='/city' component={City} />
                    <Redirect from='/' to='/home' />
                </Switch>
            </App>
        </HashRouter>
    </Provider>;


export default router;
