import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { LectureEntity } from 'src/modules/lecture/entities/lecture.entity';
import { QuizEntity } from 'src/modules/quiz/entities/quiz.entity';
import { CourseEntity } from './course.entity';

@Table({ modelName: 'Section', timestamps: false })
export class SectionEntity extends Model {
  @Column(DataType.SMALLINT)
  order: number;

  @Column(DataType.STRING)
  title: string;

  @Column(DataType.STRING)
  headline: string;

  @ForeignKey(() => CourseEntity)
  @Column
  courseId: number;

  @BelongsTo(() => CourseEntity)
  CourseEntity: CourseEntity;

  @HasMany(() => LectureEntity)
  lectures: LectureEntity[];

  @HasMany(() => QuizEntity)
  quizes: QuizEntity[];
}
