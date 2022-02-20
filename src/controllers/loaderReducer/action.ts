import { appName } from "../../config/contants";
import {createAction } from "typesafe-actions";

import { ILoaderState } from "./models";

/* Actions */
export const widgetName = "LOADER";

export const setLoader = createAction(
    `${appName}/${widgetName}/SET_LOADER`
  )<ILoaderState>();