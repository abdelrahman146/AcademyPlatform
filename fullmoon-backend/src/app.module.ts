import 'reflect-metadata';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';

/* Models */
import { AnswerEntity } from './modules/attendance/entities/answer.entity';
import { AttendanceEntity } from './modules/attendance/entities/attendance.entity';
import { CategoryEntity } from './modules/course/entities/category.entity';
import { CourseEntity } from './modules/course/entities/course.entity';
import { EnrollmentEntity } from './modules/user/entities/enrollment.entity';
import { SectionEntity } from './modules/course/entities/section.entity';
import { SubCategoryEntity } from './modules/course/entities/subcategory.entity';
import { LectureEntity } from './modules/lecture/entities/lecture.entity';
import { OptionEntity } from './modules/quiz/entities/option.entity';
import { QuestionEntity } from './modules/quiz/entities/question.entity';
import { QuizEntity } from './modules/quiz/entities/quiz.entity';
import { CartItemEntity } from './modules/user/entities/cartitem.entity';
import { UserEntity } from './modules/user/entities/user.entity';
import { WishlistItemEntity } from './modules/user/entities/wishlistitem.entity';
import { GraphQLModule } from '@nestjs/graphql';

const infrastructurePath = join(process.cwd(), 'src/infrastructure');

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: join(infrastructurePath, 'db.sqlite'),
      autoLoadModels: true,
      synchronize: true,
      models: [
        AttendanceEntity,
        AnswerEntity,
        CategoryEntity,
        CourseEntity,
        EnrollmentEntity,
        SectionEntity,
        SubCategoryEntity,
        LectureEntity,
        OptionEntity,
        QuestionEntity,
        QuizEntity,
        CartItemEntity,
        UserEntity,
        WishlistItemEntity,
      ],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(infrastructurePath, 'schema.gql'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
