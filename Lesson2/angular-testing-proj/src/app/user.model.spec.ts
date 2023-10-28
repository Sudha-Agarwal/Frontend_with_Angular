import { User } from './user.model';

describe('User', () => {
  let user:User;

  beforeEach(() => {
    user = new User(1,'Sudha','sudha@gmail.com')
  });

  it('should create a user', () => {
    expect(user).toBeTruthy();
    expect(user.id).toBe(1);
    expect(user.name).toBe('Sudha');
    expect(user.email).toBe('sudha@gmail.com');
  })

});
