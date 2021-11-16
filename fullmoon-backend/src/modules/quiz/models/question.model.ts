import { BelongsTo, BelongsToMany, Column, ForeignKey, HasMany, HasOne, Model, Table } from 'sequelize-typescript';
import { Answer } from 'src/modules/attendance/models/answer.model';
import { User } from 'src/modules/user/models/user.model';
import { Option } from './option.model';
import { Quiz } from './quiz.model';

@Table
export class Question extends Model {
  @ForeignKey(() => Quiz)
  @Column
  quizId: number;

  @BelongsTo(() => Quiz)
  quiz: Quiz;

  @BelongsToMany(() => User, () => Answer)
  answers: Answer[];

  @HasMany(() => Option)
  options: Option;
}
