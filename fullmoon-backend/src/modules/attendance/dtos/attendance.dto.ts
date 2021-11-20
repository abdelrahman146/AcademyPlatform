import { FilterableField, FilterableRelation, FilterableUnPagedRelation, IDField } from '@nestjs-query/query-graphql';
import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { LectureDTO } from 'src/modules/lecture/dtos/lecture/lecture.read.dto';
import { EnrollmentDTO } from 'src/modules/user/dtos/enrollment/enrollment.read.dto';
import { UserDTO } from 'src/modules/user/dtos/user/user.read.dto';
import { AnswerDTO } from './answer.dto';

@ObjectType('Attendance')
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
  enrolledId: number;

  @FilterableField()
  quizId: number;

  @FilterableField(() => GraphQLISODateTime)
  createdAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updatedAt!: Date;
}
