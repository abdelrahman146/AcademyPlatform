import { FilterableCursorConnection, FilterableField, Relation, UnPagedRelation } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { AttendanceDTO } from 'src/modules/attendance/dtos/attendance/attendance.dto';
import { SectionDTO } from 'src/modules/course/dtos/section/section.dto';
import { QuestionDTO } from '../question/question.read.dto';

@ObjectType('Quiz')
@Relation('section', () => SectionDTO, { disableRemove: true })
@UnPagedRelation('questions', () => QuestionDTO, { enableTotalCount: true })
@FilterableCursorConnection('attendances', () => AttendanceDTO, { enableTotalCount: true, relationName: 'attendanceList' })
export class QuizDTO {
  @FilterableField()
  title: string;

  @FilterableField(() => GraphQLISODateTime)
  startingDate: Date;

  @FilterableField(() => GraphQLISODateTime)
  endingDate: Date;

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
}
