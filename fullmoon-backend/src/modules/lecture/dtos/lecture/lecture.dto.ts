import {
  AuthorizationContext,
  Authorize,
  FilterableCursorConnection,
  FilterableField,
  IDField,
  Relation,
} from '@nestjs-query/query-graphql';
import { UnauthorizedException } from '@nestjs/common';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { AttendanceDTO } from 'src/modules/attendance/dtos/attendance/attendance.dto';
import { SectionDTO } from 'src/modules/course/dtos/section/section.dto';
import { UserContext } from 'src/modules/user/types/auth.types';
import { UserRole } from 'src/modules/user/types/user.types';
import { LectureType } from '../../types/lecture.types';

@ObjectType('Lecture')
@Authorize({
  authorize: (context: UserContext, authContext: AuthorizationContext) => {
    if (!authContext?.readonly && context.req.user.role === UserRole.teacher) return { teacherId: { eq: context.req.user.id } };
    if (!authContext?.readonly) throw new UnauthorizedException();
    return {};
  },
})
@Relation('section', () => SectionDTO, { disableRemove: true })
@FilterableCursorConnection('attendances', () => AttendanceDTO, { enableTotalCount: true, relationName: 'attendanceList' })
export class LectureDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField(() => LectureType)
  type: LectureType;

  @FilterableField()
  title: string;

  @FilterableField(() => GraphQLISODateTime, { nullable: true })
  @IsOptional()
  startingDate?: Date;

  @FilterableField(() => GraphQLISODateTime, { nullable: true })
  @IsOptional()
  endingDate?: Date;

  @Field({ nullable: true })
  @IsOptional()
  article?: string;

  @FilterableField()
  isLocked?: boolean;

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
  sectionId: number;

  @FilterableField()
  teacherId: number;

  @FilterableField()
  courseId: number;

  @FilterableField(() => GraphQLISODateTime)
  createdAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updatedAt!: Date;
}
