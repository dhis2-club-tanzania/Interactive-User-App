import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";

import { environment } from "../../../environments/environment";
import { SystemInfoState } from "../states/system-info.state";
import { UserState } from "../states/user.state";
import { UsersState } from "../states/users.state";
import { systemInfoReducer } from "./system-info.reducer";
import { userReducer } from "./user.reducer";
import { usersReducer } from "./users.reducer";
import { UserRolesState } from "../states/user-roles.states";
import { userRolesReducer } from "./user-roles.reducers";
import { UserGroupsState } from "../states/user-groups.states";
import { userGroupsReducer } from "./user-groups.reducers";
import { UserDimensionsState } from "../states/user-dimensions.states";
import { userDimensionsReducer } from "./user-dimensions.reducers";

export interface State {
  userDetails: UsersState;
  user: UserState;
  systemInfo: SystemInfoState;
  router: RouterReducerState;
  userRoles: UserRolesState;
  userGroups: UserGroupsState;
  userDimensions: UserDimensionsState;
}

export const reducers: ActionReducerMap<State> = {
  userDetails: usersReducer,
  user: userReducer,
  systemInfo: systemInfoReducer,
  router: routerReducer,
  userRoles: userRolesReducer,
  userGroups: userGroupsReducer,
  userDimensions: userDimensionsReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];

/**
 * Root state selector
 */
export const getRootState = (state: State) => state;
