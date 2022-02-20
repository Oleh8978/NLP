import { appName } from "../../config/contants";
import {createAction } from "typesafe-actions";

import { IPagination } from "./models";

/* Actions */
export const widgetName = "PAGINATION";

export const setPages = createAction(
    `${appName}/${widgetName}/SET_NUMBER_OF_PAGES`
  )<number>();

export const setActivePage = createAction(
    `${appName}/${widgetName}/SET_ACTIVE_PAGE`
)<number>();