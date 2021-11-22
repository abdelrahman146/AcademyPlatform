import { Column, DataType, ForeignKey, HasMany, Model, NotNull, Table } from 'sequelize-typescript';
import { AttendanceEntity } from 'src/modules/attendance/entities/attendance.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { CourseEntity } from '../../course/entities/course.entity';

@Table({ modelName: 'Enrollment' })
export class EnrollmentEntity extends Model {
  @NotNull
  @Column({ type: DataType.BOOLEAN, defaultValue: false, allowNull: false })
  passed: boolean;

  @NotNull
  @ForeignKey(() => UserEntity)
  @Column({ allowNull: false })
  studentId: number;

  @NotNull
  @ForeignKey(() => CourseEntity)
  @Column({ allowNull: false })
  courseId: number;

  @HasMany(() => AttendanceEntity)
  attendances: AttendanceEntity[];
}
