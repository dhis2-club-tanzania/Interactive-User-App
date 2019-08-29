import { reducer } from './users.reducer';
import { initialUsersState } from '../states/users.state';

describe('Users Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialUsersState, action);

      expect(result).toBe(initialUsersState);
    });
  });
});
