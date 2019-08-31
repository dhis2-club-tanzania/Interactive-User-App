import { BaseState, initialBaseState } from "./base.state";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export interface UserGroupsState extends BaseState, EntityState<any> {}

export function selectUserGroupId(userGroup: any) {
  return userGroup.id;
}

export const adapter: EntityAdapter<any> = createEntityAdapter({
  sortComparer: false,
  selectId: selectUserGroupId
});

export const initialUserGroupState: UserGroupsState = adapter.getInitialState({
  ...initialBaseState
});

export const { selectAll: selectAllUserGroups } = adapter.getSelectors();
