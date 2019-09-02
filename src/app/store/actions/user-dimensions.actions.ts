import { createAction, props } from "@ngrx/store";
import { ErrorMessage } from "src/app/core";
import { Update } from "@ngrx/entity";

export const loadUserDimensions = createAction(
  "[USER DIMENSIONS] Load user dimensions"
);
export const loadUserDimensionsFail = createAction(
  "[USER DIMENSIONS] Load user dimensions Fail",
  props<{ error: ErrorMessage }>()
);
export const loadUserDimensionsSuccess = createAction(
  "[USER DIMENSIONS] Load user dimensions Success",
  props<{ userDimensions: any[] }>()
);
export const updateUserDimension = createAction(
  "[USER DIMENSIONS] select User Dimension",
  props<{ userDimension: Update<any> }>()
);
export const assignUserDimension = createAction(
  "[USER DIMENSIONS] select User Dimensions",
  props<{ userDimension: Update<any>[] }>()
);
