import { AuthorizationContext, Authorize, FilterableField, IDField, Relation, UnPagedRelation } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { SubCategoryDTO } from '../subCategory/subCategory.dto';
import { CourseType } from '../../types/course.types';
import { SectionDTO } from '../section/section.dto';
import { UserDTO } from 'src/modules/user/dtos/user/user.dto';
import { IsOptional } from 'class-validator';
import { UserRole } from 'src/modules/user/types/user.types';
import { UserContext } from 'src/modules/user/types/auth.types';
import { EnrollmentDTO } from 'src/modules/user/dtos/enrollment/enrollment.dto';

@ObjectType('Course')
@Authorize({
  authorize: (context: UserContext, authContext: AuthorizationContext) => {
    if (!authContext?.readonly && context.req.user.role === UserRole.teacher) return { teacherId: { eq: context.req.user.id } };
    if (authContext?.readonly) return {};
  },
})
@Relation('teacher', () => UserDTO, { disableRemove: true, disableUpdate: true })
@Relation('subCategory', () => SubCategoryDTO, { disableRemove: true })
@Relation(
  'students',
  () => {
    @ObjectType('EnrolledStudents')
    class EnrolledStudents extends CourseDTO {
      @Field()
      enrollmentInfo: EnrollmentDTO;
    }
    return EnrolledStudents;
  },
  {
    relationName: 'students',
    enableTotalCount: true,
    disableRemove: true,
  },
)
@UnPagedRelation('sections', () => SectionDTO, { enableTotalCount: true })
export class CourseDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField(() => CourseType)
  type: CourseType;

  @FilterableField()
  title: string;

  @Field({ nullable: true })
  @IsOptional()
  headline?: string;

  @Field({ nullable: true })
  @IsOptional()
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
  image?: string;

  @Field({ nullable: true })
  @IsOptional()
  introVideo?: string;

  @FilterableField(() => GraphQLISODateTime, { nullable: true })
  @IsOptional()
  startingDate?: Date;

  @FilterableField(() => GraphQLISODateTime, { nullable: true })
  @IsOptional()
  endingDate?: Date;

  @FilterableField()
  price: number;

  @FilterableField()
  teacherId: number;

  @FilterableField()
  subCategoryId: number;

  @FilterableField(() => GraphQLISODateTime)
  createdAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updatedAt!: Date;
}
