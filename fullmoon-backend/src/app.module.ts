import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';

/* Models */
import { Answer } from './modules/attendance/models/answer.model';
import { Attendance } from './modules/attendance/models/attendance.model';
import { Category } from './modules/course/models/category.model';
import { Course } from './modules/course/models/course.model';
import { EnrolledCourse } from './modules/user/models/enrolled.model';
import { Section } from './modules/course/models/section.model';
import { SubCategory } from './modules/course/models/subcategory.model';
import { Lecture } from './modules/lecture/models/lecture.model';
import { Option } from './modules/quiz/models/option.model';
import { Question } from './modules/quiz/models/question.model';
import { Quiz } from './modules/quiz/models/quiz.model';
import { CartItem } from './modules/user/models/cart.model';
import { User } from './modules/user/models/user.model';
import { WishlistItem } from './modules/user/models/wishlist.model';

const infrastructurePath = join(process.cwd(), 'src/infrastructure');

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: join(infrastructurePath, 'db.sqlite'),
      autoLoadModels: true,
      synchronize: true,
      models: [Attendance, Answer, Category, Course, EnrolledCourse, Section, SubCategory, Lecture, Option, Question, Quiz, CartItem, User, WishlistItem],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
