import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CourseModule } from '../course/course.module';
import { LectureModule } from '../lecture/lecture.module';
import { QuizModule } from '../quiz/quiz.module';
import { UserModule } from '../user/user.module';
import { AnswerDTO } from './dtos/answer.dto';
import { AttendanceDTO } from './dtos/attendance.dto';

// Models
import { AnswerEntity } from './entities/answer.entity';
import { AttendanceEntity } from './entities/attendance.entity';

@Module({
  imports: [
    CourseModule,
    LectureModule,
    QuizModule,
    UserModule,
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([AnswerEntity, AttendanceEntity])],
      resolvers: [
        { DTOClass: AnswerDTO, EntityClass: AnswerEntity },
        { DTOClass: AttendanceDTO, EntityClass: AttendanceEntity },
      ],
    }),
  ],
  exports: [SequelizeModule],
  providers: [],
})
export class AttendanceModule {}
