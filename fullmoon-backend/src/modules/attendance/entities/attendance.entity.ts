import { Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { LectureEntity } from 'src/modules/lecture/entities/lecture.entity';
import { QuizEntity } from 'src/modules/quiz/entities/quiz.entity';
import { EnrollmentEntity } from 'src/modules/user/entities/enrollment.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { AnswerEntity } from './answer.entity';

@Table
export class AttendanceEntity extends Model {
  @ForeignKey(() => UserEntity)
  @Column
  studentId: number;

  @ForeignKey(() => LectureEntity)
  @Column
  lectureId: number;

  @ForeignKey(() => EnrollmentEntity)
  @Column
  enrollmentId: number;

  @ForeignKey(() => QuizEntity)
  @Column
  quizId: number;

  @HasMany(() => AnswerEntity)
  answers: AnswerEntity[];
}
