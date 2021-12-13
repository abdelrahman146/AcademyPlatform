import { FilterableField, Relation, UnPagedRelation, Authorize, AuthorizationContext } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { UserContext } from 'src/modules/user/types/auth.types';
import { UserRole } from 'src/modules/user/types/user.types';
import { OptionDTO } from '../option/option.dto';
import { QuizDTO } from '../quiz/quiz.dto';

@ObjectType('Question')
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unreachable code error
@Authorize({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: Unreachable code error
  authorize: (context: UserContext, authContext: AuthorizationContext) => {
    if (!authContext?.readonly && context.req.user.role === UserRole.teacher) return { teacherId: { eq: context.req.user.id } };
    if (authContext?.readonly)
      return {
        teacherId: { eq: context.req.user.id },
        or: { courseId: { in: context.req.user.enrollments } },
      };
  },
})
@Relation('quiz', () => QuizDTO, { disableRemove: true })
@UnPagedRelation('options', () => OptionDTO, { enableTotalCount: true })
export class QuestionDTO {
  @Field()
  statement!: string;

  @Field({ nullable: true })
  @IsOptional()
  hint?: string;

  @Field()
  points!: number;

  @FilterableField()
  quizId!: number;

  @FilterableField()
  teacherId: number;

  @FilterableField()
  courseId: number;
}
