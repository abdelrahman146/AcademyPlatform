import { FilterableCursorConnection, FilterableField, IDField, Relation } from '@nestjs-query/query-graphql';
import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { AttendanceDTO } from 'src/modules/attendance/dtos/attendance.dto';
import { CourseDTO } from 'src/modules/course/dtos/course.dto';
import { UserDTO } from './user.dto';

@ObjectType('Enrollment')
@Relation('student', () => UserDTO, { disableRemove: true })
@Relation('course', () => CourseDTO, { disableRemove: true })
@FilterableCursorConnection('attendances', () => AttendanceDTO, { disableRemove: true })
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
