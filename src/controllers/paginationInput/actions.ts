import { appName } from "../../config/contants";
import {createAction } from "typesafe-actions";

/* Actions */
export const widgetName = "PAGINATION_INPUT";

export const setText = createAction(
    `${appName}/${widgetName}/TEXT`
  )<string>();