import { Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { AttendanceEntity } from 'src/modules/attendance/entities/attendance.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { CourseEntity } from '../../course/entities/course.entity';

@Table
export class EnrollmentEntity extends Model {
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  passed: boolean;

  @ForeignKey(() => UserEntity)
  @Column
  studentId: number;

  @ForeignKey(() => CourseEntity)
  @Column
  courseId: number;

  @HasMany(() => AttendanceEntity)
  attendances: AttendanceEntity[];
}
