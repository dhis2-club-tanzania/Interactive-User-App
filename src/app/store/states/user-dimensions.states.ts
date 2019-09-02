import { BaseState, initialBaseState } from "./base.state";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export interface UserDimensionsState extends BaseState, EntityState<any> {}

export function selectUserDimensionId(userDimension: any) {
  return userDimension.id;
}

export const adapter: EntityAdapter<any> = createEntityAdapter({
  sortComparer: false,
  selectId: selectUserDimensionId
});

export const initialUserDimensionState: UserDimensionsState = adapter.getInitialState(
  {
    ...initialBaseState
  }
);

export const { selectAll: selectAllUserDimensions } = adapter.getSelectors();
