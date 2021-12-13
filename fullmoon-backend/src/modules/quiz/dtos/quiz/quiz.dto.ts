import {
  AuthorizationContext,
  Authorize,
  FilterableCursorConnection,
  FilterableField,
  Relation,
  UnPagedRelation,
} from '@nestjs-query/query-graphql';
import { UnauthorizedException } from '@nestjs/common';
import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { AttendanceDTO } from 'src/modules/attendance/dtos/attendance/attendance.dto';
import { SectionDTO } from 'src/modules/course/dtos/section/section.dto';
import { UserContext } from 'src/modules/user/types/auth.types';
import { UserRole } from 'src/modules/user/types/user.types';
import { QuestionDTO } from '../question/question.dto';

@ObjectType('Quiz')
@Authorize({
  authorize: (context: UserContext, authContext?: AuthorizationContext) => {
    if (!authContext?.readonly && context.req.user.role === UserRole.teacher) return { teacherId: { eq: context.req.user.id } };
    if (!authContext?.readonly) throw new UnauthorizedException();
    return {};
  },
})
@Relation('section', () => SectionDTO, { disableRemove: true })
@UnPagedRelation('questions', () => QuestionDTO, { enableTotalCount: true })
@FilterableCursorConnection('attendances', () => AttendanceDTO, { enableTotalCount: true, relationName: 'attendanceList' })
export class QuizDTO {
  @FilterableField()
  title: string;

  @FilterableField(() => GraphQLISODateTime, { nullable: true })
  @IsOptional()
  startingDate?: Date;

  @FilterableField(() => GraphQLISODateTime, { nullable: true })
  @IsOptional()
  endingDate?: Date;

  @FilterableField()
  isLocked: boolean;

  @Field()
  minScoreToPass: number;

  @FilterableField()
  sectionId: number;

  @FilterableField(() => GraphQLISODateTime)
  createdAt: Date;

  @FilterableField(() => GraphQLISODateTime)
  updatedAt: Date;

  @FilterableField()
  teacherId: number;

  @FilterableField()
  courseId: number;
}
