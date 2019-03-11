import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import reducers from './reducers';
import sagas from '../sagas';
const sagaMiddleware = createSagaMiddleware();
const initialState = {};

const composeEnhancer =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            shouldHotReload: false
        })) ||
    compose;
const store = createStore(
    reducers,
    initialState,
    composeEnhancer(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(sagas);
export default store;
