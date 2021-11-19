import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { QuestionEntity } from './question.entity';

@Table({ modelName: 'Option', timestamps: false })
export class OptionEntity extends Model {
  @Column(DataType.TEXT)
  statement: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isCorrect: boolean;

  @ForeignKey(() => QuestionEntity)
  @Column
  questionId: number;

  @BelongsTo(() => QuestionEntity)
  question: QuestionEntity;
}
