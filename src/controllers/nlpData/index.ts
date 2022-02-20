import { createReducer, ActionType } from "typesafe-actions";
import { all } from "redux-saga/effects";

// sagas
import { getDataSagas } from './sagas';

// Actions
import * as actions from "./actions";

// Interfaces
import { IResponseData } from "./models";

// hardcoded
import { data } from "../../assets/constants";

export type DataType = ActionType<typeof actions>;

export const dataSagas = function* () {
    yield all([
        getDataSagas()
    ]);
  };

/* Reducer */
const initialState: IResponseData = {
    data: data
};

export const dataReducer = createReducer<IResponseData, DataType>(
  initialState
)
  .handleAction(
    actions.getDataAction.success,
    (state: IResponseData, { payload }): IResponseData => ({
      ...state,
      data: [...payload]
    })
  );
  