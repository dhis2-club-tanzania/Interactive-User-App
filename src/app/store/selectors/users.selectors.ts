import { createSelector } from "@ngrx/store";
import * as _ from "lodash";

import { getRootState, State } from "../reducers";
import * as fromUsersState from "../states/users.state";
import { User } from "src/app/core/models/user.model";

export const getUsersState = createSelector(
  getRootState,
  (state: State) => state.userDetails
);

export const getUsers = createSelector(
  getUsersState,
  fromUsersState.selectAllUsers
);

export const getUsersErrorState = createSelector(
  getUsersState,
  (state: fromUsersState.UsersState) => state.error
);

export const getUsersList = createSelector(
  getUsers,
  (users: User[]) => {
    return users;
  }
);
