import { Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Attendance } from 'src/modules/attendance/entities/attendance.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Course } from '../../course/entities/course.entity';

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
