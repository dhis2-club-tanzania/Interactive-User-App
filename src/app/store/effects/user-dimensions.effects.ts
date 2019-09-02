import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../../modules/users/services/user.service";
import {
  loadUserDimensions,
  loadUserDimensionsSuccess,
  loadUserDimensionsFail
} from "../actions";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { ErrorMessage } from "src/app/core";
import * as _ from "lodash";

@Injectable()
export class UserDimensionsEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUserDimensions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserDimensions),
      switchMap(() =>
        this.userService.getUserDimensions().pipe(
          map(userDimensionData => {
            const dimension = _.map(userDimensionData.dimensions, element => {
              return _.assignIn({}, element, { selected: false });
            });
            return loadUserDimensionsSuccess({ userDimensions: dimension });
          }),
          catchError((err: ErrorMessage) =>
            of(loadUserDimensionsFail({ error: err }))
          )
        )
      )
    )
  );
}
