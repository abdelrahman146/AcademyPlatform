import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Question } from 'src/modules/quiz/entities/question.entity';
import { Option } from 'src/modules/quiz/entities/option.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Attendance } from './attendance.entity';

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
