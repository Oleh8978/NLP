import { all } from "redux-saga/effects";
import { combineReducers, Reducer } from "redux";
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

// reducers
import { errorsReducer } from  './errorHandler';
import { loaderReducer } from "./loaderReducer";
import { dataReducer, dataSagas } from './nlpData';
import { paginationReducer } from "./pagination";
import { textInputReducer } from './paginationInput';

// interfaces 
import { IStore } from "./storeModel";

export const rootSaga = function* () {
  yield all([
    dataSagas(),
  ]);
};

export const rootReducer = (history: History): Reducer =>
  combineReducers<IStore>({
    router: connectRouter(history),
    loader: loaderReducer,
    errors: errorsReducer,
    data: dataReducer,
    pagination: paginationReducer,
    textPaginationInput: textInputReducer,
  });
