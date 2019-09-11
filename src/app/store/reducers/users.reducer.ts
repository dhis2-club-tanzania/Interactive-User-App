import { createReducer, on } from '@ngrx/store';
import { initialUsersState, UsersState, adapter } from '../states/users.state';

import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from '../states/base.state';
import {
  loadUsers,
  loadUsersSuccess,
  loadUsersFail,
  createUsers,
  createUsersSuccess,
  createUsersFail
} from '../actions/users.actions';

export const reducer = createReducer(
  initialUsersState,
  on(loadUsers, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(loadUsersSuccess, (state, { users }) =>
    adapter.addMany(users, { ...state, ...loadedBaseState })
  ),
  on(loadUsersFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error
  })),
  on(createUsers, state => ({ ...state, added: false, adding: true })),
  on(createUsersSuccess, (state, { user }) =>
    adapter.addOne(user, { ...state, added: true, adding: false })
  ),
  on(createUsersFail, (state, { error }) => ({
    ...state,
    errorBaseState,
    error
  }))
);

export function usersReducer(state, action): UsersState {
  return reducer(state, action);
}
