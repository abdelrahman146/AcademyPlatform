import { BelongsTo, BelongsToMany, Column, ForeignKey, HasMany, HasOne, Model, Table } from 'sequelize-typescript';
import { Lecture } from 'src/modules/lecture/models/lecture.model';
import { Quiz } from 'src/modules/quiz/models/quiz.model';
import { Course } from './course.model';

@Table
export class Section extends Model {
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
