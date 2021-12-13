import {
  AuthorizationContext,
  Authorize,
  FilterableCursorConnection,
  FilterableField,
  IDField,
  Relation,
} from '@nestjs-query/query-graphql';
import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { AttendanceDTO } from 'src/modules/attendance/dtos/attendance/attendance.dto';
import { CourseDTO } from 'src/modules/course/dtos/course/course.dto';
import { UserContext } from '../../types/auth.types';
import { UserRole } from '../../types/user.types';
import { UserDTO } from '../user/user.dto';

@ObjectType('Enrollment')
@Authorize({
  authorize: (context: UserContext, authContext?: AuthorizationContext) => {
    if (context.req.user.role === UserRole.admin) return {};
    if (!authContext?.readonly) return { studentId: { eq: context.req.user.id } };
    return {};
  },
})
@Relation('student', () => UserDTO, { disableRemove: true, disableUpdate: true })
@Relation('course', () => CourseDTO, { disableRemove: true, disableUpdate: true })
@FilterableCursorConnection('attendances', () => AttendanceDTO, { enableTotalCount: true })
export class EnrollmentDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  passed!: boolean;

  @FilterableField()
  studentId!: number;

  @FilterableField()
  courseId!: number;

  @FilterableField(() => GraphQLISODateTime)
  createdAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updatedAt!: Date;
}
