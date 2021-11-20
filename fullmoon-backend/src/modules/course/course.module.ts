import { Module } from '@nestjs/common';

// Models
import { SectionEntity } from './entities/section.entity';
import { SubCategoryEntity } from './entities/subCategory.entity';
import { CategoryEntity } from './entities/category.entity';
import { CourseEntity } from './entities/course.entity';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { CategoryDTO } from './dtos/category.dto';
import { CourseDTO } from './dtos/course.dto';
import { SectionDTO } from './dtos/sections.dto';
import { SubCategoryDTO } from './dtos/subCategory.dto';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([CategoryEntity, SubCategoryEntity, CourseEntity, SectionEntity])],
      resolvers: [
        { DTOClass: CategoryDTO, EntityClass: CategoryEntity },
        { DTOClass: SubCategoryDTO, EntityClass: SubCategoryEntity },
        { DTOClass: CourseDTO, EntityClass: CourseEntity },
        { DTOClass: SectionDTO, EntityClass: SectionEntity },
      ],
    }),
  ],
  providers: [],
})
export class CourseModule {}
