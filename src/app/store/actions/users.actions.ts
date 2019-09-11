import { createAction, props } from '@ngrx/store';
import { ErrorMessage, User } from 'src/app/core';

export const loadUsers = createAction('[Users] Load Users');
export const loadUsersSuccess = createAction(
  '[Users] Add Users',
  props<{ users: any[] }>()
);
export const loadUsersFail = createAction(
  '[Users] Load Users fail',
  props<{ error: ErrorMessage }>()
);

export const createUsers = createAction(
  '[Users] Create Users',
  props<{ user: any }>()
);
export const createUsersSuccess = createAction(
  '[Users] Created Users',
  props<{ user: any }>()
);
export const createUsersFail = createAction(
  '[Users] Load Users fail',
  props<{ error: ErrorMessage }>()
);
