import { Course } from 'src/modules/course/entities/course.entity';
import { Enrollment } from '../entities/enrollment.entity';

export enum UserRole {
  admin = 'admin',
  teacher = 'teacher',
  student = 'student',
}

export type EnrollmentType = Course & { enrollment: Enrollment };
