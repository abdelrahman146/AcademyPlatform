import { BelongsTo, BelongsToMany, Column, ForeignKey, HasMany, HasOne, Model, Table } from 'sequelize-typescript';
import { Lecture } from 'src/modules/lecture/models/lecture.model';
import { Quiz } from 'src/modules/quiz/models/quiz.model';
import { User } from 'src/modules/user/models/user.model';
import { Course } from './course.model';

@Table
export class Section extends Model {
  @BelongsTo(() => Course)
  teacher: User;

  @HasMany(() => Lecture)
  lectures: Lecture[];

  @HasMany(() => Quiz)
  quizes: Quiz[];
}
