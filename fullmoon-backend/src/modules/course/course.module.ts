import { Module } from '@nestjs/common';

// Models
import { SectionEntity } from './entities/section.entity';
import { SubCategoryEntity } from './entities/subCategory.entity';
import { CategoryEntity } from './entities/category.entity';
import { CourseEntity } from './entities/course.entity';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { CategoryDTO } from './dtos/category/category.dto';
import { CourseDTO } from './dtos/course/course.dto';
import { SectionDTO } from './dtos/section/section.dto';
import { SubCategoryDTO } from './dtos/subCategory/subCategory.dto';
import { CourseCreateInputDTO } from './dtos/course/course.create.dto';
import { CourseUpdateInputDTO } from './dtos/course/course.update.dto';
import { SubCategoryCreateInputDTO } from './dtos/subCategory/subCategory.create.dto';
import { SubCategoryUpdateInputDTO } from './dtos/subCategory/subCategory.update.dto';
import { CategoryCreateInputDTO } from './dtos/category/category.create.dto';
import { CategoryUpdateInputDTO } from './dtos/category/category.update.dto';
import { GqlAuthGuard } from '../auth/guards/gql.jwt.guard';
import { SectionCreateInputDTO } from './dtos/section/section.create.dto';
import { SectionUpdateInputDTO } from './dtos/section/section.update.dto';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([CategoryEntity, SubCategoryEntity, CourseEntity, SectionEntity])],
      resolvers: [
        {
          DTOClass: CategoryDTO,
          EntityClass: CategoryEntity,
          CreateDTOClass: CategoryCreateInputDTO,
          UpdateDTOClass: CategoryUpdateInputDTO,
          guards: [GqlAuthGuard],
        },
        {
          DTOClass: SubCategoryDTO,
          EntityClass: SubCategoryEntity,
          CreateDTOClass: SubCategoryCreateInputDTO,
          UpdateDTOClass: SubCategoryUpdateInputDTO,
          guards: [GqlAuthGuard],
        },
        {
          DTOClass: CourseDTO,
          EntityClass: CourseEntity,
          CreateDTOClass: CourseCreateInputDTO,
          UpdateDTOClass: CourseUpdateInputDTO,
          guards: [GqlAuthGuard],
        },
        {
          DTOClass: SectionDTO,
          EntityClass: SectionEntity,
          CreateDTOClass: SectionCreateInputDTO,
          UpdateDTOClass: SectionUpdateInputDTO,
          guards: [GqlAuthGuard],
        },
      ],
    }),
  ],
  providers: [],
})
export class CourseModule {}
