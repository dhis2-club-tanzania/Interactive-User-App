import { UserEffects } from "./user.effects";
import { UsersEffects } from "./users.effects";
import { SystemInfoEffects } from "./system-info.effects";
import { RouterEffects } from "./router.effects";
import { UserRolesEffects } from "./user-roles.effects";
import { UserGroupsEffects } from "./user-groups.effects";
import { UserDimensionsEffects } from "./user-dimensions.effects";

export const effects: any[] = [
  UserEffects,
  UsersEffects,
  SystemInfoEffects,
  RouterEffects,
  UserRolesEffects,
  UserGroupsEffects,
  UserDimensionsEffects
];
