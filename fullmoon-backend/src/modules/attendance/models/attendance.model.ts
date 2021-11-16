import { BelongsToMany, Column, ForeignKey, HasMany, HasOne, Model, Table } from 'sequelize-typescript';
import { Lecture } from 'src/modules/lecture/models/lecture.model';
import { Quiz } from 'src/modules/quiz/models/quiz.model';
import { User } from 'src/modules/user/models/user.model';
import { Answer } from './answer.model';

@Table
export class Attendance extends Model {
  @ForeignKey(() => User)
  @Column
  studentId: number;

  @ForeignKey(() => Lecture)
  @Column
  lectureId: number;

  @ForeignKey(() => Quiz)
  @Column
  quizId: number;

  @HasMany(() => Answer)
  answers: Answer[];
}
