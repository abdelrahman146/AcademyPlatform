import { AuthorizationContext, Authorize, FilterableField, IDField, Relation } from '@nestjs-query/query-graphql';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { QuestionDTO } from 'src/modules/quiz/dtos/question/question.dto';
import { UserDTO } from 'src/modules/user/dtos/user/user.dto';
import { UserContext } from 'src/modules/user/types/auth.types';
import { AttendanceDTO } from '../attendance/attendance.dto';

@ObjectType('Answer')
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
@Authorize({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  authorize: (context: UserContext, authContext?: AuthorizationContext) => {
    if (!authContext?.readonly) return { studentId: context.req.user.id };
    return { studentId: context.req.user.id, or: { teacherId: context.req.user.id } };
  },
})
@Relation('student', () => UserDTO, { disableRemove: true, disableUpdate: true })
@Relation('question', () => QuestionDTO, { disableRemove: true, disableUpdate: true })
@Relation('attendance', () => AttendanceDTO, { disableRemove: true, disableUpdate: true })
export class AnswerDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  studentId!: number;

  @FilterableField()
  teacherId: number;

  @Field()
  questionId!: number;

  @FilterableField({ nullable: true })
  @IsOptional()
  choosedOptionId?: number;

  @FilterableField()
  attendanceId!: number;

  @Field({ nullable: true })
  @IsOptional()
  answer?: string;
}
