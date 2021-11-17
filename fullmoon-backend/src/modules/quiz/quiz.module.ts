import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AttendanceModule } from '../attendance/attendance.module';
import { CourseModule } from '../course/course.module';

// Models
import { Option } from './entities/option.model';
import { Question } from './entities/question.model';
import { Quiz } from './entities/quiz.model';

@Module({
  imports: [SequelizeModule.forFeature([Quiz, Question, Option]), AttendanceModule, CourseModule],
  exports: [SequelizeModule],
  providers: [],
})
export class QuizModule {}
