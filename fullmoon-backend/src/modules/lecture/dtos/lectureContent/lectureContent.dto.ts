import { AuthorizationContext, Authorize, FilterableField, IDField, Relation } from '@nestjs-query/query-graphql';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { UserContext } from 'src/modules/user/types/auth.types';
import { UserRole } from 'src/modules/user/types/user.types';
import { LectureDTO } from '../lecture/lecture.dto';

@ObjectType('LectureContent')
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
@Relation('lecture', () => LectureDTO, { disableRemove: true })
export class LectureContentDTO {
  @IDField(() => ID)
  id!: number;

  @Field({ nullable: true })
  @IsOptional()
  article?: string;

  @Field({ nullable: true })
  @IsOptional()
  streamLink?: string;

  @Field({ nullable: true })
  @IsOptional()
  videoLink?: string;

  @Field({ nullable: true })
  @IsOptional()
  conferenceId?: string;

  @FilterableField()
  lectureId: number;

  @FilterableField()
  teacherId: number;

  @FilterableField()
  courseId: number;
}
