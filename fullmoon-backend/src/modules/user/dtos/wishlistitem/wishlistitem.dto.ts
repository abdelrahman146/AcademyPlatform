import { Authorize, FilterableField, IDField, Relation } from '@nestjs-query/query-graphql';
import { ID, ObjectType } from '@nestjs/graphql';
import { CourseDTO } from 'src/modules/course/dtos/course/course.dto';
import { UserContext } from '../../types/auth.types';
import { UserRole } from '../../types/user.types';
import { UserDTO } from '../user/user.dto';

@ObjectType('WishlistItem')
@Authorize({
  authorize: (context: UserContext) => {
    if (context.req.user.role === UserRole.admin) return {};
    return { userId: { eq: context.req.user.role } };
  },
})
@Relation('user', () => UserDTO, { disableRemove: true, disableUpdate: true })
@Relation('course', () => CourseDTO, { disableRemove: true, disableUpdate: true })
export class WishlistItemDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  userId!: number;

  @FilterableField()
  courseId!: number;
}
