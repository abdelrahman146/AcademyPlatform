import 'reflect-metadata';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';

/* Models */
import { Answer } from './modules/attendance/entities/answer.model';
import { Attendance } from './modules/attendance/entities/attendance.model';
import { Category } from './modules/course/entities/category.model';
import { Course } from './modules/course/entities/course.model';
import { EnrolledCourse } from './modules/user/entities/enrolled.model';
import { Section } from './modules/course/entities/section.model';
import { SubCategory } from './modules/course/entities/subcategory.model';
import { Lecture } from './modules/lecture/entities/lecture.model';
import { Option } from './modules/quiz/entities/option.model';
import { Question } from './modules/quiz/entities/question.model';
import { Quiz } from './modules/quiz/entities/quiz.model';
import { CartItem } from './modules/user/entities/cart.model';
import { User } from './modules/user/entities/user.model';
import { WishlistItem } from './modules/user/entities/wishlist.model';
import { GraphQLModule } from '@nestjs/graphql';

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
    GraphQLModule.forRoot({
      autoSchemaFile: join(infrastructurePath, 'schema.gql'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
