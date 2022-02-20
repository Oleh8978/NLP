import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer, rootSaga } from "./controllers";

import history from '../src/historyApi';

const sagaMiddleware = createSagaMiddleware();
let middleWares = applyMiddleware(routerMiddleware(history), sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  middleWares = composeWithDevTools(
    applyMiddleware(routerMiddleware(history), sagaMiddleware),
  );
}

const store = createStore(rootReducer(history), middleWares);
sagaMiddleware.run(rootSaga);

(window as any).store = store;

export default store;