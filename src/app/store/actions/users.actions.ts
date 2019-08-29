import { createAction, props } from "@ngrx/store";
import { ErrorMessage } from "src/app/core";

export const loadUsers = createAction("[Users] Load Users");
export const loadUsersSuccess = createAction(
  "[Users] Add Users",
  props<{ users: any[] }>()
);
export const loadUsersFail = createAction(
  "[Users] Load Users fail",
  props<{ error: ErrorMessage }>()
);
