import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Question } from './question.model';

@Table({ timestamps: false })
export class Option extends Model {
  @Column(DataType.TEXT)
  statement: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isCorrect: boolean;

  @ForeignKey(() => Question)
  @Column
  questionId: number;

  @BelongsTo(() => Question)
  question: Question;
}
