import { FilterableField, IDField, Relation, Authorize, AuthorizationContext } from '@nestjs-query/query-graphql';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserContext } from 'src/modules/user/types/auth.types';
import { UserRole } from 'src/modules/user/types/user.types';
import { QuestionDTO } from '../question/question.dto';

@ObjectType('Option')
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
@Relation('question', () => QuestionDTO, { disableRemove: true })
export class OptionDTO {
  @IDField(() => ID)
  id: number;

  @Field()
  statement: string;

  @FilterableField()
  isCorrect: boolean;

  @FilterableField()
  questionId: number;

  @FilterableField()
  teacherId: number;

  @FilterableField()
  courseId: number;
}
