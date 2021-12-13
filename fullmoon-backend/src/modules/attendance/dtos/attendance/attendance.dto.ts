import {
  AuthorizationContext,
  Authorize,
  FilterableField,
  FilterableRelation,
  FilterableUnPagedRelation,
  IDField,
} from '@nestjs-query/query-graphql';
import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { LectureDTO } from 'src/modules/lecture/dtos/lecture/lecture.dto';
import { EnrollmentDTO } from 'src/modules/user/dtos/enrollment/enrollment.dto';
import { UserDTO } from 'src/modules/user/dtos/user/user.dto';
import { UserContext } from 'src/modules/user/types/auth.types';
import { AnswerDTO } from '../answer/answer.dto';

@ObjectType('Attendance')
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
@Authorize({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  authorize: (context: UserContext, authContext?: AuthorizationContext) => {
    if (!authContext?.readonly) return { studentId: context.req.user.id };
    return { studentId: context.req.user.id, or: { teacherId: context.req.user.id } };
  },
})
@FilterableRelation('student', () => UserDTO, { disableRemove: true, disableUpdate: true })
@FilterableRelation('lecture', () => LectureDTO, { disableRemove: true, disableUpdate: true })
@FilterableRelation('enrollment', () => EnrollmentDTO, { disableRemove: true, disableUpdate: true })
@FilterableUnPagedRelation('answers', () => AnswerDTO, { disableRemove: true, disableUpdate: true })
export class AttendanceDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  studentId: number;

  @FilterableField()
  lectureId: number;

  @FilterableField()
  enrollmentId: number;

  @FilterableField()
  quizId: number;

  @FilterableField()
  teacherId: number;

  @FilterableField(() => GraphQLISODateTime)
  createdAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updatedAt!: Date;
}
