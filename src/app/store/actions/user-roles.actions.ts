import { createAction, props } from "@ngrx/store";
import { ErrorMessage } from "src/app/core";
import { Update } from "@ngrx/entity";

export const loadUserRoles = createAction("[USER ROLES] Load user roles");
export const loadUserRolesFail = createAction(
  "[USER ROLES] Load user roles Fail",
  props<{ error: ErrorMessage }>()
);
export const loadUserRolesSuccess = createAction(
  "[USER ROLES] Load user roles Success",
  props<{ userRoles: any[] }>()
);
export const selectUserRoles = createAction(
  "[USER ROLES] select User Roles",
  props<{ user: Update<any> }>()
);
