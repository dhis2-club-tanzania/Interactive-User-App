import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../modules/users/services/user.service';
import {
  loadUserRoles,
  loadUserRolesSuccess,
  loadUserRolesFail
} from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ErrorMessage } from 'src/app/core';
import * as _ from 'lodash';

@Injectable()
export class UserRolesEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUserRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserRoles),
      switchMap(() =>
        this.userService.getUserRoles().pipe(
          map(userRoleData => {
            const role = _.map(userRoleData.userRoles, element => {
              return _.assignIn({}, element, { selected: false });
            });
            return loadUserRolesSuccess({ userRoles: role });
          }),
          catchError((err: ErrorMessage) =>
            of(loadUserRolesFail({ error: err }))
          )
        )
      )
    )
  );
}

/**
 *
 * _.map(Roles.userRoles, element => {
          return _.assignIn({}, element, { selected: false });
        })
 */
