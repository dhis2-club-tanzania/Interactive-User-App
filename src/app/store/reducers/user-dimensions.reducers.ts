import { createReducer, on } from "@ngrx/store";
import {
  initialUserDimensionState,
  UserDimensionsState
} from "../states/user-dimensions.states";
import {
  loadUserDimensions,
  loadUserDimensionsSuccess,
  loadUserDimensionsFail,
  updateUserDimension,
  assignUserDimension
} from "../actions";
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from "../states/base.state";
import { adapter } from "../states/users.state";

export const reducer = createReducer(
  initialUserDimensionState,
  on(loadUserDimensions, state => ({ ...state, ...loadingBaseState })),
  on(loadUserDimensionsSuccess, (state, { userDimensions }) =>
    adapter.addMany(userDimensions, { ...state, ...loadedBaseState })
  ),
  on(loadUserDimensionsFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error
  })),
  on(updateUserDimension, (state, { userDimension }) =>
    adapter.updateOne(userDimension, state)
  ),
  on(assignUserDimension, (state, { userDimension }) =>
    adapter.updateMany(userDimension, state)
  )
);

export function userDimensionsReducer(state, action): UserDimensionsState {
  return reducer(state, action);
}
