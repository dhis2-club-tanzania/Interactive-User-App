import { BaseState, initialBaseState } from './base.state';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { User } from 'src/app/core/models/user.model';
export interface UsersState extends BaseState, EntityState<User> {
  updating: boolean;
  updated: boolean;
  deleting: boolean;
  deleted: boolean;
  adding: boolean;
  added: boolean;
}

export function selectUserId(user: any): string {
  return user.id;
}

export const adapter: EntityAdapter<User> = createEntityAdapter({
  sortComparer: false,
  selectId: selectUserId
});

export const initialUsersState: UsersState = adapter.getInitialState({
  ...initialBaseState,
  updated: false,
  updating: false,
  deleting: false,
  deleted: false,
  adding: false,
  added: false
});

export const {
  selectIds: selectUsersIds,
  selectEntities: selectUsersEntities,
  selectAll: selectAllUsers,
  selectTotal: selectUsersCount
} = adapter.getSelectors();
