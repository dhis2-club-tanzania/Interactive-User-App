import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { defer, of } from 'rxjs';

import {
  loadUsers,
  loadUsersSuccess,
  loadUsersFail,
  createUsers,
  createUsersSuccess,
  createUsersFail
} from '../actions/users.actions';
import { UserService } from '../../modules/users/services/user.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
@Injectable()
export class UsersEffects {
  loadUserDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        this.userService.getData().pipe(
          map((userDetails: any) =>
            loadUsersSuccess({ users: userDetails.users })
          ),
          catchError(error => of(loadUsersFail({ error: error })))
        )
      )
    )
  );
  createUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createUsers),
      switchMap(action =>
        this.userService.postNewUser(action.user).pipe(
          map(() => createUsersSuccess({ user: action.user })),
          catchError(error => of(createUsersFail({ error: error })))
        )
      )
    )
  );

  init$ = createEffect(() => defer(() => of(loadUsers())));

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store<State>
  ) {}
}
