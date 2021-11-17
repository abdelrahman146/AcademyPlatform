import 'reflect-metadata';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';

/* Models */
import { Answer } from './modules/attendance/entities/answer.entity';
import { Attendance } from './modules/attendance/entities/attendance.entity';
import { Category } from './modules/course/entities/category.entity';
import { Course } from './modules/course/entities/course.entity';
import { EnrolledCourse } from './modules/user/entities/enrolled.entity';
import { Section } from './modules/course/entities/section.entity';
import { SubCategory } from './modules/course/entities/subcategory.entity';
import { Lecture } from './modules/lecture/entities/lecture.entity';
import { Option } from './modules/quiz/entities/option.entity';
import { Question } from './modules/quiz/entities/question.entity';
import { Quiz } from './modules/quiz/entities/quiz.entity';
import { CartItem } from './modules/user/entities/cart.entity';
import { User } from './modules/user/entities/user.entity';
import { WishlistItem } from './modules/user/entities/wishlist.entity';
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
