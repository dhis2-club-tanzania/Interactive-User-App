import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';
import {
  UserRolesState,
  selectAllUserRoles
} from '../states/user-roles.states';
import * as _ from 'lodash';

export const getUserRoleState = createSelector(
  getRootState,
  (state: State) => state.userRoles
);
export const getUserRoles = createSelector(
  getUserRoleState,
  selectAllUserRoles
);

export const getSelectedUserRoles = createSelector(
  getUserRoles,
  userRoles => _.filter(userRoles, userRole => userRole.selected)
);
