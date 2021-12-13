import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, NotNull, Table } from 'sequelize-typescript';
import { CourseEntity } from 'src/modules/course/entities/course.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
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

  @NotNull
  @ForeignKey(() => UserEntity)
  @Column({ allowNull: false })
  teacherId: number;

  @NotNull
  @ForeignKey(() => CourseEntity)
  @Column({ allowNull: false })
  courseId: number;
}
