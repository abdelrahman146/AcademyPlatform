import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Max,
  Min,
  Model,
  NotNull,
  Table,
} from 'sequelize-typescript';
import { AttendanceEntity } from 'src/modules/attendance/entities/attendance.entity';
import { CourseEntity } from 'src/modules/course/entities/course.entity';
import { SectionEntity } from 'src/modules/course/entities/section.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { QuestionEntity } from './question.entity';

@Table({ modelName: 'Quiz' })
export class QuizEntity extends Model {
  @NotNull
  @Column({ allowNull: false })
  title: string;

  @Column(DataType.DATE)
  startingDate?: Date;

  @Column(DataType.DATE)
  endingDate?: Date;

  @NotNull
  @Max(1)
  @Min(0)
  @Column({ type: DataType.DECIMAL, allowNull: false })
  minScoreToPass: number;

  @NotNull
  @Column({ type: DataType.BOOLEAN, allowNull: false })
  isLocked: boolean;

  @HasMany(() => QuestionEntity)
  questions: QuestionEntity;

  @NotNull
  @ForeignKey(() => SectionEntity)
  @Column({ allowNull: false })
  sectionId: number;

  @BelongsTo(() => SectionEntity)
  section: SectionEntity;

  @BelongsToMany(() => UserEntity, () => AttendanceEntity)
  attendanceList: Array<UserEntity & { attendance: AttendanceEntity }>;

  @NotNull
  @ForeignKey(() => UserEntity)
  @Column({ allowNull: false })
  teacherId: number;

  @NotNull
  @ForeignKey(() => CourseEntity)
  @Column({ allowNull: false })
  courseId: number;
}
