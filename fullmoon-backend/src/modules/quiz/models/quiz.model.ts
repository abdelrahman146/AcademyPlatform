import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Max, Min, Model, Table } from 'sequelize-typescript';
import { Attendance } from 'src/modules/attendance/models/attendance.model';
import { Section } from 'src/modules/course/models/section.model';
import { User } from 'src/modules/user/models/user.model';
import { Question } from './question.model';

@Table
export class Quiz extends Model {
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

  @HasMany(() => Question)
  questions: Question;

  @ForeignKey(() => Section)
  @Column
  sectionId: number;

  @BelongsTo(() => Section)
  section: Section;

  @BelongsToMany(() => User, () => Attendance)
  attendanceList: Attendance[];
}
