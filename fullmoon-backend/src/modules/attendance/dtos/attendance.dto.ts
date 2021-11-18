import { FilterableCursorConnection, FilterableField, FilterableRelation, IDField } from '@nestjs-query/query-graphql';
import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { LectureDTO } from 'src/modules/lecture/dtos/lecture.dto';
import { EnrollmentDTO } from 'src/modules/user/dtos/enrollment.dto';
import { UserDTO } from 'src/modules/user/dtos/user.dto';
import { AnswerDTO } from './answer.dto';

@ObjectType('Attendance')
@FilterableRelation('student', () => UserDTO, { disableRemove: true })
@FilterableRelation('lecture', () => LectureDTO, { disableRemove: true })
@FilterableRelation('enrollment', () => EnrollmentDTO, { disableRemove: true })
@FilterableCursorConnection('answers', () => AnswerDTO)
export class AttendanceDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  studentId: number;

  @FilterableField()
  lectureId: number;

  @FilterableField()
  enrolledId: number;

  @FilterableField()
  quizId: number;

  @FilterableField(() => GraphQLISODateTime)
  createdAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updatedAt!: Date;
}
