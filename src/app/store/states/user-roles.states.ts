import { BaseState, initialBaseState } from "./base.state";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export interface UserRolesState extends BaseState, EntityState<any> {}

//the method selects user role id's for the entity adapter
export function selectUserRoleId(userRole: any) {
  return userRole.id;
}

export const adapter: EntityAdapter<any> = createEntityAdapter({
  sortComparer: false,
  selectId: selectUserRoleId
});

export const initialUserRoleState: UserRolesState = adapter.getInitialState({
  ...initialBaseState
});

export const { selectAll: selectAllUserRoles } = adapter.getSelectors();
