import { Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Attendance } from 'src/modules/attendance/entities/attendance.model';
import { User } from 'src/modules/user/entities/user.model';
import { Course } from '../../course/entities/course.model';

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
