import { BelongsTo, Column, ForeignKey, Model, NotNull, Table } from 'sequelize-typescript';
import { QuestionEntity } from 'src/modules/quiz/entities/question.entity';
import { OptionEntity } from 'src/modules/quiz/entities/option.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { AttendanceEntity } from './attendance.entity';

@Table({ modelName: 'Answer', timestamps: false })
export class AnswerEntity extends Model {
  @NotNull
  @ForeignKey(() => UserEntity)
  @Column({ allowNull: false })
  studentId: number;

  @NotNull
  @ForeignKey(() => QuestionEntity)
  @Column({ allowNull: false })
  questionId: number;

  @ForeignKey(() => OptionEntity)
  @Column
  choosedOptionEntityId: number;
  @BelongsTo(() => OptionEntity)
  choosedOptionEntity: OptionEntity;

  @NotNull
  @ForeignKey(() => AttendanceEntity)
  @Column({ allowNull: false })
  attendanceId: number;
  @BelongsTo(() => AttendanceEntity)
  attendance: AttendanceEntity;

  @Column
  answer: string;
}
