import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Question } from 'src/modules/quiz/models/question.model';
import { Option } from 'src/modules/quiz/models/option.model';
import { User } from 'src/modules/user/models/user.model';
import { Attendance } from './attendance.model';

@Table({ timestamps: false })
export class Answer extends Model {
  @ForeignKey(() => User)
  @Column
  studentId: number;

  @ForeignKey(() => Question)
  @Column
  questionId: number;

  @ForeignKey(() => Option)
  @Column
  choosedOptionId: number;
  @BelongsTo(() => Option)
  choosedOption: Option;

  @ForeignKey(() => Attendance)
  @Column
  attendanceId: number;
  @BelongsTo(() => Attendance)
  Attendance: Attendance;

  @Column
  answer: string;
}
