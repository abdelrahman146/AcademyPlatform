import { FilterableCursorConnection, FilterableField, IDField, Relation } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { AttendanceDTO } from 'src/modules/attendance/dtos/attendance.dto';
import { SectionDTO } from 'src/modules/course/dtos/sections.dto';
import { LectureType } from '../types/lecture.types';

@ObjectType('Lecture')
@Relation('section', () => SectionDTO, { disableRemove: true })
@FilterableCursorConnection('attendances', () => AttendanceDTO, { enableTotalCount: true, relationName: 'attendanceList' })
export class LectureDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField(() => LectureType)
  type: LectureType;

  @FilterableField()
  title: string;

  @FilterableField(() => GraphQLISODateTime)
  startingDate: Date;

  @FilterableField(() => GraphQLISODateTime)
  endingDate: Date;

  @Field()
  article: string;

  @FilterableField()
  isLocked: boolean;

  @Field()
  streamLink: string;

  @Field()
  videoLink: string;

  @Field()
  conferenceId: string;

  @FilterableField()
  sectionId: number;

  @FilterableField(() => GraphQLISODateTime)
  createdAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updatedAt!: Date;
}
