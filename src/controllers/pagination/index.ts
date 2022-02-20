import { createReducer, ActionType } from "typesafe-actions";

// Actions
import * as actions from "./actions";

// Interfaces
import { IPagination } from "./models";

export type PagesType = ActionType<typeof actions>;

/* Reducer */
const initialState: IPagination = {
    pages: 1,
    activePage: 1,
};

export const paginationReducer = createReducer<IPagination, PagesType>(
    initialState
)
  .handleAction(actions.setPages, (state, { payload }) => ({
    pages: payload,
    activePage: state.activePage,
}))
.handleAction(actions.setActivePage, (state, { payload }) => ({
    pages: state.pages,
    activePage: payload,
}))