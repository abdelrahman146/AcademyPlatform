import { Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Lecture } from 'src/modules/lecture/entities/lecture.model';
import { Quiz } from 'src/modules/quiz/entities/quiz.model';
import { EnrolledCourse } from 'src/modules/user/entities/enrolled.model';
import { User } from 'src/modules/user/entities/user.model';
import { Answer } from './answer.model';

@Table
export class Attendance extends Model {
  @ForeignKey(() => User)
  @Column
  studentId: number;

  @ForeignKey(() => Lecture)
  @Column
  lectureId: number;

  @ForeignKey(() => EnrolledCourse)
  @Column
  enrolledId: number;

  @ForeignKey(() => Quiz)
  @Column
  quizId: number;

  @HasMany(() => Answer)
  answers: Answer[];
}
