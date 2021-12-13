import { BelongsTo, Column, DataType, ForeignKey, Model, NotNull, Table } from 'sequelize-typescript';
import { CourseEntity } from 'src/modules/course/entities/course.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { QuestionEntity } from './question.entity';

@Table({ modelName: 'Option', timestamps: false })
export class OptionEntity extends Model {
  @NotNull
  @Column({ type: DataType.TEXT, allowNull: false })
  statement: string;

  @NotNull
  @Column({ type: DataType.BOOLEAN, defaultValue: false, allowNull: false })
  isCorrect: boolean;

  @NotNull
  @ForeignKey(() => QuestionEntity)
  @Column({ allowNull: false })
  questionId: number;

  @BelongsTo(() => QuestionEntity)
  question: QuestionEntity;

  @NotNull
  @ForeignKey(() => UserEntity)
  @Column({ allowNull: false })
  teacherId: number;

  @NotNull
  @ForeignKey(() => CourseEntity)
  @Column({ allowNull: false })
  courseId: number;
}
