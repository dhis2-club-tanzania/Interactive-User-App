import { createReducer, on } from "@ngrx/store";
import {
  initialUserRoleState,
  UserRolesState
} from "../states/user-roles.states";
import {
  loadUserRoles,
  loadUserRolesSuccess,
  loadUserRolesFail
} from "../actions";
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from "../states/base.state";
import { adapter } from "../states/users.state";

export const reducer = createReducer(
  initialUserRoleState,
  on(loadUserRoles, state => ({ ...state, ...loadingBaseState })),
  on(loadUserRolesSuccess, (state, { userRoles }) =>
    adapter.addMany(userRoles, { ...state, ...loadedBaseState })
  ),
  on(loadUserRolesFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error
  }))
);

export function userRolesReducer(state, action): UserRolesState {
  return reducer(state, action);
}
