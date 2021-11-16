import { BelongsTo, BelongsToMany, Column, ForeignKey, HasOne, Model, Table } from 'sequelize-typescript';
import { Question } from './question.model';

@Table
export class Option extends Model {
  @ForeignKey(() => Question)
  @Column
  questionId: number;

  @BelongsTo(() => Question)
  question: Question;
}
