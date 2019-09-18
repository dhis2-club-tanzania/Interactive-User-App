import * as _ from "lodash";

export function getSanitizedUsers(users: any) {
  if (!users) {
    return null;
  }

  return _.map(users, user => ({
    id: user ? user.id : "",
    displayName: user.displayName,
    username: user
      ? user.userCredentials
        ? user.userCredentials.username
        : ""
      : "",
    userRoles: user.userCredentials
      ? user.userCredentials.userRoles
        ? user.userCredentials.userRoles
        : []
      : [],
    invitation: user.userCredentials
      ? user.userCredentials.invitation
        ? user.userCredentials.invitation
        : false
      : false,
    selfRegistered: user.userCredentials
      ? user.userCredentials.selfRegistered
        ? user.userCredentials.selfRegistered
        : false
      : false,
    userGroups: user ? (user.userGroups ? user.userGroups : []) : [],
    lastLogin: user
      ? user.userCredentials
        ? user.userCredentials.lastLogin
        : ""
      : "",
    disabled: user
      ? user.userCredentials
        ? user.userCredentials.disabled
        : ""
      : "",
    menu: ""
  }));
}
