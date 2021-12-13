import { UserEntity } from '../entities/user.entity';

export type AuthenticatedUser = Pick<UserEntity, 'id' | 'email' | 'role' | 'enrollments'>;

export type UserContext = {
  req: {
    user: AuthenticatedUser;
  };
};
