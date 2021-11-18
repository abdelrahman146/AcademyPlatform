import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AttendanceModule } from '../attendance/attendance.module';
import { CourseModule } from '../course/course.module';
import { LectureDTO } from './dtos/lecture.dto';

// Models
import { LectureEntity } from './entities/lecture.entity';

@Module({
  imports: [
    AttendanceModule,
    CourseModule,
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([LectureEntity])],
      resolvers: [{ DTOClass: LectureDTO, EntityClass: LectureEntity }],
    }),
  ],
  exports: [SequelizeModule],
  providers: [],
})
export class LectureModule {}
