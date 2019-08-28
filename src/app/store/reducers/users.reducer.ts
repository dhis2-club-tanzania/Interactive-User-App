import { createReducer, on } from '@ngrx/store';
import { initialUsersState, UsersState, adapter } from '../states/users.state';

import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from '../states/base.state';
import { loadUsers, addUsers } from '../actions/users.actions';

export const reducer = createReducer(
  initialUsersState,
  on(loadUsers, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(addUsers, (state, { users }) =>
    adapter.addMany(users, { ...state, ...loadedBaseState })
  )
);

export function usersReducer(state, action): UsersState {
  return reducer(state, action);
}
