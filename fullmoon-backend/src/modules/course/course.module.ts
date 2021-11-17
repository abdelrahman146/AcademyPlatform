import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

// Models
import { Section } from './models/section.model';
import { SubCategory } from './models/subcategory.model';
import { Category } from './models/category.model';
import { Course } from './models/course.model';
import { LectureModule } from '../lecture/lecture.module';
import { QuizModule } from '../quiz/quiz.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [SequelizeModule.forFeature([Category, SubCategory, Course, Section]), LectureModule, QuizModule, UserModule],
  exports: [SequelizeModule],
  providers: [],
})
export class CourseModule {}
