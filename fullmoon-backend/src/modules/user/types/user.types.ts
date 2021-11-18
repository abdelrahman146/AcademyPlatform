import { registerEnumType } from '@nestjs/graphql';
import { CourseEntity } from 'src/modules/course/entities/course.entity';
import { EnrollmentEntity } from '../entities/enrollment.entity';

export enum UserRole {
  admin = 'admin',
  teacher = 'teacher',
  student = 'student',
}

registerEnumType(UserRole, {
  name: 'LectureType',
});

export type EnrollmentType = CourseEntity & { enrollment: EnrollmentEntity };
