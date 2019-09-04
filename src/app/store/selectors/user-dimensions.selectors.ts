import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';
import * as _ from 'lodash';
import {
  UserDimensionsState,
  selectAllUserDimensions
} from '../states/user-dimensions.states';

export const getUserDimensionsState = createSelector(
  getRootState,
  (state: State) => state.userDimensions
);
export const getUserDimensions = createSelector(
  getUserDimensionsState,
  selectAllUserDimensions
);

export const getSelectedUserDimensions = createSelector(
  getUserDimensions,
  userDimensions =>
    _.filter(userDimensions, userDimension => userDimension.selected)
);
