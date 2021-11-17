import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Lecture } from 'src/modules/lecture/entities/lecture.entity';
import { Quiz } from 'src/modules/quiz/entities/quiz.entity';
import { Course } from './course.entity';

@Table({ timestamps: false })
export class Section extends Model {
  @Column(DataType.SMALLINT)
  order: number;

  @Column(DataType.STRING)
  title: string;

  @Column(DataType.STRING)
  headline: string;

  @ForeignKey(() => Course)
  @Column
  courseId: number;

  @BelongsTo(() => Course)
  Course: Course;

  @HasMany(() => Lecture)
  lectures: Lecture[];

  @HasMany(() => Quiz)
  quizes: Quiz[];
}
