import { createSelector } from "@ngrx/store";
import { getRootState, State } from "../reducers";
import {
  UserRolesState,
  selectAllUserRoles
} from "../states/user-roles.states";

export const getUserRoleState = createSelector(
  getRootState,
  (state: State) => state.userRoles
);
export const getUserRoles = createSelector(
  getUserRoleState,
  selectAllUserRoles
);
