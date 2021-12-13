import {
  AuthorizationContext,
  Authorize,
  FilterableField,
  FilterableUnPagedRelation,
  IDField,
  Relation,
} from '@nestjs-query/query-graphql';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { LectureDTO } from 'src/modules/lecture/dtos/lecture/lecture.dto';
import { QuizDTO } from 'src/modules/quiz/dtos/quiz/quiz.dto';
import { UserContext } from 'src/modules/user/types/auth.types';
import { UserRole } from 'src/modules/user/types/user.types';
import { CourseDTO } from '../course/course.dto';

@ObjectType('Section')
@Authorize({
  authorize: (context: UserContext, authContext: AuthorizationContext) => {
    if (!authContext?.readonly && context.req.user.role === UserRole.teacher) return { teacherId: { eq: context.req.user.id } };
    if (authContext?.readonly) return {};
  },
})
@Relation('course', () => CourseDTO, { disableRemove: true, disableUpdate: true })
@FilterableUnPagedRelation('lectures', () => LectureDTO, { enableTotalCount: true })
@FilterableUnPagedRelation('quizzes', () => QuizDTO, { enableTotalCount: true })
export class SectionDTO {
  @IDField(() => ID)
  id!: number;

  @Field({ nullable: true })
  @IsOptional()
  order?: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  @IsOptional()
  headline?: string;

  @FilterableField()
  courseId: number;

  @FilterableField()
  teacherId: number;
}
