import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

// Models
import { Section } from './entities/section.entity';
import { SubCategory } from './entities/subcategory.entity';
import { Category } from './entities/category.entity';
import { Course } from './entities/course.entity';
import { LectureModule } from '../lecture/lecture.module';
import { QuizModule } from '../quiz/quiz.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [SequelizeModule.forFeature([Category, SubCategory, Course, Section]), LectureModule, QuizModule, UserModule],
  exports: [SequelizeModule],
  providers: [],
})
export class CourseModule {}
