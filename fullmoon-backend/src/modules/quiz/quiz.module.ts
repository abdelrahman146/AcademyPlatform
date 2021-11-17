import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AttendanceModule } from '../attendance/attendance.module';
import { CourseModule } from '../course/course.module';

// Models
import { Option } from './entities/option.entity';
import { Question } from './entities/question.entity';
import { Quiz } from './entities/quiz.entity';

@Module({
  imports: [SequelizeModule.forFeature([Quiz, Question, Option]), AttendanceModule, CourseModule],
  exports: [SequelizeModule],
  providers: [],
})
export class QuizModule {}
