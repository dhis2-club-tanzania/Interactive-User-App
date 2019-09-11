import * as _ from 'lodash';

export function getSanitizedUsers(users: any) {
  if (!users) {
    return null;
  }

  return _.map(users, user => ({
    id: user ? user.id : '',
    displayName: user.displayName,
    username: user
      ? user.userCredentials
        ? user.userCredentials.username
        : ''
      : '',
    lastLogin: user
      ? user.userCredentials
        ? user.userCredentials.lastLogin
        : ''
      : '',
    disabled: user
      ? user.userCredentials
        ? user.userCredentials.disabled
        : ''
      : '',
    menu: ''
  }));
}
