import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AttendanceModule } from '../attendance/attendance.module';
import { CourseModule } from '../course/course.module';

// Models
import { Lecture } from './models/lecture.model';

@Module({
  imports: [SequelizeModule.forFeature([Lecture]), AttendanceModule, CourseModule],
  exports: [SequelizeModule],
  providers: [],
})
export class LectureModule {}
