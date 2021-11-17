import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Option } from './option.entity';
import { Quiz } from './quiz.entity';

@Table({ timestamps: false })
export class Question extends Model {
  @Column(DataType.TEXT)
  statement: string;

  @Column
  hint: string;

  @Column(DataType.INTEGER)
  points: number;

  @ForeignKey(() => Quiz)
  @Column
  quizId: number;
  @BelongsTo(() => Quiz)
  quiz: Quiz;

  @HasMany(() => Option)
  options: Option;
}
