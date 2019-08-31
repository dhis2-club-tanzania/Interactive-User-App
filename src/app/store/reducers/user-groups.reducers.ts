import { createReducer, on } from "@ngrx/store";
import {
  initialUserGroupState,
  UserGroupsState
} from "../states/user-groups.states";
import {
  loadUserGroups,
  loadUserGroupsSuccess,
  loadUserGroupsFail,
  updateUserGroup,
  assignUserGroup
} from "../actions";
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from "../states/base.state";
import { adapter } from "../states/users.state";

export const reducer = createReducer(
  initialUserGroupState,
  on(loadUserGroups, state => ({ ...state, ...loadingBaseState })),
  on(loadUserGroupsSuccess, (state, { userGroups }) =>
    adapter.addMany(userGroups, { ...state, ...loadedBaseState })
  ),
  on(loadUserGroupsFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error
  })),
  on(updateUserGroup, (state, { userGroup }) =>
    adapter.updateOne(userGroup, state)
  ),
  on(assignUserGroup, (state, { userGroup }) =>
    adapter.updateMany(userGroup, state)
  )
);

export function userGroupsReducer(state, action): UserGroupsState {
  return reducer(state, action);
}
