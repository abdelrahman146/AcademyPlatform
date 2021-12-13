import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, NotNull, Table } from 'sequelize-typescript';
import { LectureEntity } from 'src/modules/lecture/entities/lecture.entity';
import { QuizEntity } from 'src/modules/quiz/entities/quiz.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { CourseEntity } from './course.entity';

@Table({ modelName: 'Section', timestamps: false })
export class SectionEntity extends Model {
  @NotNull
  @Column({ type: DataType.SMALLINT, defaultValue: 0, allowNull: false })
  order: number;

  @NotNull
  @Column({ allowNull: false })
  title: string;

  @Column(DataType.STRING)
  headline: string;

  @NotNull
  @ForeignKey(() => CourseEntity)
  @Column({ allowNull: false })
  courseId: number;

  @BelongsTo(() => CourseEntity)
  course: CourseEntity;

  @HasMany(() => LectureEntity)
  lectures: LectureEntity[];

  @HasMany(() => QuizEntity)
  quizes: QuizEntity[];

  @NotNull
  @ForeignKey(() => UserEntity)
  @Column({ allowNull: false })
  teacherId: number;
}
