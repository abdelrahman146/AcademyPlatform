import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { QuestionEntity } from 'src/modules/quiz/entities/question.entity';
import { OptionEntity } from 'src/modules/quiz/entities/option.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { AttendanceEntity } from './attendance.entity';
import { IDField } from '@nestjs-query/query-graphql';
import { ID } from '@nestjs/graphql';

@Table({ modelName: 'Answer', timestamps: false })
export class AnswerEntity extends Model {
  @IDField(() => ID)
  id!: number;

  @ForeignKey(() => UserEntity)
  @Column
  studentId: number;

  @ForeignKey(() => QuestionEntity)
  @Column
  questionId: number;

  @ForeignKey(() => OptionEntity)
  @Column
  choosedOptionEntityId: number;
  @BelongsTo(() => OptionEntity)
  choosedOptionEntity: OptionEntity;

  @ForeignKey(() => AttendanceEntity)
  @Column
  attendanceId: number;
  @BelongsTo(() => AttendanceEntity)
  attendance: AttendanceEntity;

  @Column
  answer: string;
}
