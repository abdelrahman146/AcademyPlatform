import { FilterableField, IDField, Relation } from '@nestjs-query/query-graphql';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { QuestionDTO } from 'src/modules/quiz/dtos/question/question.read.dto';
import { UserDTO } from 'src/modules/user/dtos/user/user.read.dto';
import { AttendanceDTO } from './attendance.dto';

@ObjectType('Answer')
@Relation('student', () => UserDTO, { disableRemove: true, disableUpdate: true })
@Relation('question', () => QuestionDTO, { disableRemove: true, disableUpdate: true })
@Relation('attendance', () => AttendanceDTO, { disableRemove: true, disableUpdate: true })
export class AnswerDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  studentId!: number;

  @Field()
  questionId!: number;

  @FilterableField()
  choosedOptionEntityId: number;

  @FilterableField()
  attendanceId!: number;

  @Field()
  answer: string;
}
