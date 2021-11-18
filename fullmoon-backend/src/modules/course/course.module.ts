import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

// Models
import { SectionEntity } from './entities/section.entity';
import { SubCategoryEntity } from './entities/subcategory.entity';
import { CategoryEntity } from './entities/category.entity';
import { CourseEntity } from './entities/course.entity';
import { LectureModule } from '../lecture/lecture.module';
import { QuizModule } from '../quiz/quiz.module';
import { UserModule } from '../user/user.module';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { CategoryDTO } from './dtos/category.dto';
import { CourseDTO } from './dtos/course.dto';
import { SectionDTO } from './dtos/sections.dto';
import { SubCategoryDTO } from './dtos/subcategory.dto';

@Module({
  imports: [
    LectureModule,
    QuizModule,
    UserModule,
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
  exports: [SequelizeModule],
  providers: [],
})
export class CourseModule {}
