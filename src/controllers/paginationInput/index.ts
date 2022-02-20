import { createReducer, ActionType } from "typesafe-actions";

// Actions
import * as actions from "./actions";

export type InputText = ActionType<typeof actions>;

/* Reducer */
const initialState: string = ''

export const textInputReducer = createReducer<string, InputText>(
    initialState
)
  .handleAction(actions.setText, (state, { payload }) => payload)
