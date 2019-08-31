import { createAction, props } from "@ngrx/store";
import { ErrorMessage } from "src/app/core";
import { Update } from "@ngrx/entity";

export const loadUserGroups = createAction("[USER GROUPS] Load user roles");
export const loadUserGroupsFail = createAction(
  "[USER GROUPS] Load user groups Fail",
  props<{ error: ErrorMessage }>()
);
export const loadUserGroupsSuccess = createAction(
  "[USER GROUPS] Load user groups Success",
  props<{ userGroups: any[] }>()
);
export const updateUserGroup = createAction(
  "[USER GROUPS] select User Group",
  props<{ userGroup: Update<any> }>()
);
export const assignUserGroup = createAction(
  "[USER GROUPS] select User Groups",
  props<{ userGroup: Update<any>[] }>()
);
