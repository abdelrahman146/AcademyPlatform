import { Column, ForeignKey, HasMany, Model, NotNull, Table } from 'sequelize-typescript';
import { LectureEntity } from 'src/modules/lecture/entities/lecture.entity';
import { QuizEntity } from 'src/modules/quiz/entities/quiz.entity';
import { EnrollmentEntity } from 'src/modules/user/entities/enrollment.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { AnswerEntity } from './answer.entity';

@Table({ modelName: 'Attendance' })
export class AttendanceEntity extends Model {
  @NotNull
  @ForeignKey(() => UserEntity)
  @Column({ allowNull: false })
  studentId: number;

  @NotNull
  @ForeignKey(() => UserEntity)
  @Column({ allowNull: false })
  teacherId: number;

  @NotNull
  @ForeignKey(() => LectureEntity)
  @Column({ allowNull: false })
  lectureId: number;

  @NotNull
  @ForeignKey(() => EnrollmentEntity)
  @Column({ allowNull: false })
  enrollmentId: number;

  @NotNull
  @ForeignKey(() => QuizEntity)
  @Column({ allowNull: false })
  quizId: number;

  @HasMany(() => AnswerEntity)
  answers: AnswerEntity[];
}
