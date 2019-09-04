import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';
import * as _ from 'lodash';
import {
  UserGroupsState,
  selectAllUserGroups
} from '../states/user-groups.states';

export const getUserGroupsState = createSelector(
  getRootState,
  (state: State) => state.userGroups
);
export const getUserGroups = createSelector(
  getUserGroupsState,
  selectAllUserGroups
);

export const getSelectedUserGroups = createSelector(
  getUserGroups,
  userGroups => _.filter(userGroups, userGroup => userGroup.selected)
);
