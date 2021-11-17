import { Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Lecture } from 'src/modules/lecture/entities/lecture.entity';
import { Quiz } from 'src/modules/quiz/entities/quiz.entity';
import { EnrolledCourse } from 'src/modules/user/entities/enrolled.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Answer } from './answer.entity';

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
