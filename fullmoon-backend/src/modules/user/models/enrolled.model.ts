import { Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Attendance } from 'src/modules/attendance/models/attendance.model';
import { User } from 'src/modules/user/models/user.model';
import { Course } from '../../course/models/course.model';

@Table
export class EnrolledCourse extends Model {
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  passed: boolean;

  @ForeignKey(() => User)
  @Column
  studentId: number;

  @ForeignKey(() => Course)
  @Column
  courseId: number;

  @HasMany(() => Attendance)
  attendances: Attendance[];
}
