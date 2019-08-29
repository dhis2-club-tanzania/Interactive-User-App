import { createAction, props } from '@ngrx/store';
import { ErrorMessage } from 'src/app/core';

export const loadUsers = createAction('[Users] Load Users');
export const addUsers = createAction(
  '[Users] Add Users',
  props<{ users: any[] }>()
);
