import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { OptionEntity } from './option.entity';
import { QuizEntity } from './quiz.entity';

@Table({ modelName: 'Question', timestamps: false })
export class QuestionEntity extends Model {
  @Column(DataType.TEXT)
  statement: string;

  @Column
  hint: string;

  @Column(DataType.INTEGER)
  points: number;

  @ForeignKey(() => QuizEntity)
  @Column
  quizId: number;
  @BelongsTo(() => QuizEntity)
  quiz: QuizEntity;

  @HasMany(() => OptionEntity)
  options: OptionEntity;
}
