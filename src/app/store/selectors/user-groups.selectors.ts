import { createSelector } from "@ngrx/store";
import { getRootState, State } from "../reducers";
import {
  UserGroupsState,
  selectAllUserGroups
} from "../states/user-groups.states";

export const getUserGroupsState = createSelector(
  getRootState,
  (state: State) => state.userGroups
);
export const getUserGroups = createSelector(
  getUserGroupsState,
  selectAllUserGroups
);
