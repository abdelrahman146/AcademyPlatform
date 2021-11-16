import { BelongsTo, BelongsToMany, Column, HasOne, Model, Table } from 'sequelize-typescript';
import { User } from 'src/modules/user/models/user.model';
import { Question } from './question.model';

@Table
export class Option extends Model {
  @BelongsTo(() => User)
  question: Question;
}
