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
import { userRolesReducer } from "./user-roles.actions";

export interface State {
  userDetails: UsersState;
  user: UserState;
  systemInfo: SystemInfoState;
  router: RouterReducerState;
  userRoles: UserRolesState;
}

export const reducers: ActionReducerMap<State> = {
  userDetails: usersReducer,
  user: userReducer,
  systemInfo: systemInfoReducer,
  router: routerReducer,
  userRoles: userRolesReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];

/**
 * Root state selector
 */
export const getRootState = (state: State) => state;
