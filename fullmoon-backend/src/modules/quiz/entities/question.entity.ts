import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, NotNull, Table } from 'sequelize-typescript';
import { OptionEntity } from './option.entity';
import { QuizEntity } from './quiz.entity';

@Table({ modelName: 'Question', timestamps: false })
export class QuestionEntity extends Model {
  @NotNull
  @Column({ type: DataType.TEXT, allowNull: false })
  statement: string;

  @Column
  hint: string;

  @NotNull
  @Column({ type: DataType.INTEGER, allowNull: false })
  points: number;

  @NotNull
  @ForeignKey(() => QuizEntity)
  @Column({ allowNull: false })
  quizId: number;
  @BelongsTo(() => QuizEntity)
  quiz: QuizEntity;

  @HasMany(() => OptionEntity)
  options: OptionEntity;
}
