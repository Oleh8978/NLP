import { appName } from "../../config/contants";
import { createAsyncAction } from "typesafe-actions";

import { IResponseItem } from './models';

/* Actions */
export const widgetName = "GET_DATA";

export const getDataAction = createAsyncAction(
  `${appName}/${widgetName}/REQUEST`,
  `${appName}/${widgetName}/SUCCESS`,
  `${appName}/${widgetName}/FAILED`
)<number, IResponseItem[], string>();