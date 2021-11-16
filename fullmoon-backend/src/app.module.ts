import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';

/* Models */
import { Answer } from './modules/attendance/models/answer.model';
import { Attendance } from './modules/attendance/models/attendance.model';
import { Category } from './modules/course/models/category.model';
import { Course } from './modules/course/models/course.model';
import { Enrolled } from './modules/course/models/enrolled.model';
import { Section } from './modules/course/models/section.model';
import { SubCategory } from './modules/course/models/subcategory.model';
import { Lecture } from './modules/lecture/models/lecture.model';
import { Option } from './modules/quiz/models/option.model';
import { Question } from './modules/quiz/models/question.model';
import { Quiz } from './modules/quiz/models/quiz.model';
import { Cart } from './modules/user/models/cart.model';
import { User } from './modules/user/models/user.model';
import { Wishlist } from './modules/user/models/wishlist.model';

const infrastructurePath = join(process.cwd(), 'src/infrastructure');

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: join(infrastructurePath, 'db.sqlite'),
      autoLoadModels: true,
      synchronize: true,
      models: [Attendance, Answer, Category, Course, Enrolled, Section, SubCategory, Lecture, Option, Question, Quiz, Cart, User, Wishlist],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
