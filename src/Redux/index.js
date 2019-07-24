import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import isShowFooterbar from './Reducers/HideFooterbar';

const reducers = combineReducers({
    isShowFooterbar
});

// const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(promiseMiddleware, thunkMiddleware)
));

export default store;
