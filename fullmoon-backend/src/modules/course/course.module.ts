import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

// Models
import { Section } from './entities/section.model';
import { SubCategory } from './entities/subcategory.model';
import { Category } from './entities/category.model';
import { Course } from './entities/course.model';
import { LectureModule } from '../lecture/lecture.module';
import { QuizModule } from '../quiz/quiz.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [SequelizeModule.forFeature([Category, SubCategory, Course, Section]), LectureModule, QuizModule, UserModule],
  exports: [SequelizeModule],
  providers: [],
})
export class CourseModule {}
