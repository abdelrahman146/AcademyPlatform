import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Max, Min, Model, Table } from 'sequelize-typescript';
import { AttendanceEntity } from 'src/modules/attendance/entities/attendance.entity';
import { SectionEntity } from 'src/modules/course/entities/section.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { QuestionEntity } from './question.entity';

@Table
export class QuizEntity extends Model {
  @Column(DataType.STRING)
  title: string;

  @Column(DataType.DATE)
  startingDate: Date;

  @Column(DataType.DATE)
  endingDate: Date;

  @Max(1)
  @Min(0)
  @Column(DataType.DECIMAL)
  minScoreToPass: number;

  @Column(DataType.BOOLEAN)
  isLocked: boolean;

  @HasMany(() => QuestionEntity)
  questions: QuestionEntity;

  @ForeignKey(() => SectionEntity)
  @Column
  sectionId: number;

  @BelongsTo(() => SectionEntity)
  section: SectionEntity;

  @BelongsToMany(() => UserEntity, () => AttendanceEntity)
  attendanceList: Array<UserEntity & { attendance: AttendanceEntity }>;
}
