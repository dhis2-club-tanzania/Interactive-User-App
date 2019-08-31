import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../../modules/users/services/user.service";
import {
  loadUserGroups,
  loadUserGroupsSuccess,
  loadUserGroupsFail
} from "../actions";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { ErrorMessage } from "src/app/core";
import * as _ from "lodash";

@Injectable()
export class UserGroupsEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUserGroups$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserGroups),
      switchMap(() =>
        this.userService.getUserGroups().pipe(
          map(userGroupData => {
            const group = _.map(userGroupData.userGroups, element => {
              return _.assignIn({}, element, { selected: false });
            });
            return loadUserGroupsSuccess({ userGroups: group });
          }),
          catchError((err: ErrorMessage) =>
            of(loadUserGroupsFail({ error: err }))
          )
        )
      )
    )
  );
}
