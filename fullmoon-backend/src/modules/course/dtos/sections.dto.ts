import { FilterableField, FilterableUnPagedRelation, IDField, Relation } from '@nestjs-query/query-graphql';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { LectureDTO } from 'src/modules/lecture/dtos/lecture.dto';
import { QuizDTO } from 'src/modules/quiz/dtos/quiz.dto';
import { CourseDTO } from './course.dto';

@ObjectType('Section')
@Relation('course', () => CourseDTO, { disableRemove: true, disableUpdate: true })
@FilterableUnPagedRelation('lectures', () => LectureDTO, { enableTotalCount: true })
@FilterableUnPagedRelation('quizzes', () => QuizDTO, { enableTotalCount: true })
export class SectionDTO {
  @IDField(() => ID)
  id!: number;

  @Field()
  order: number;

  @Field()
  title: string;

  @Field()
  headline: string;

  @FilterableField()
  courseId: number;
}
