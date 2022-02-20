import { all, put, takeEvery } from "redux-saga/effects";

//APIs

// actions 
import { getDataAction } from '../actions';

// loader handler
import * as LoaderActions from '../../loaderReducer/action';

// errors handlers 
import * as errorHandlers from '../../errorHandler/action';

import { IResponseItem } from '../models';

//  hardcoded 
import { data } from '../../../assets/constants';

export function*  dataSagas({
        payload,
}: ReturnType<typeof getDataAction.request>) {

  yield put(LoaderActions.setLoader({loader: true}));

  try {
    const res: IResponseItem[] = data;
    
    if (res) {
        yield put(getDataAction.success(res));
        yield put(LoaderActions.setLoader({loader: false}));
    }

  } catch (error: any) {

    yield put(errorHandlers.setNewError({
      type: 'Failure to get data',
      msg: String(error.status_message),
      id: Math.random(),
    }))

    yield put(LoaderActions.setLoader({loader: false}));

  }
}

export function* getDataSagas() {
  yield all([
    takeEvery(getDataAction.request, dataSagas),
  ]);
}
