import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CourseModule } from '../course/course.module';
import { LectureModule } from '../lecture/lecture.module';
import { QuizModule } from '../quiz/quiz.module';
import { UserModule } from '../user/user.module';

// Models
import { Answer } from './entities/answer.entity';
import { Attendance } from './entities/attendance.entity';

@Module({
  imports: [SequelizeModule.forFeature([Answer, Attendance]), CourseModule, LectureModule, QuizModule, UserModule],
  exports: [SequelizeModule],
  providers: [],
})
export class AttendanceModule {}
