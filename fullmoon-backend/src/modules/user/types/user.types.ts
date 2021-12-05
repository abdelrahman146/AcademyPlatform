import { registerEnumType } from '@nestjs/graphql';
import { CourseEntity } from 'src/modules/course/entities/course.entity';
import { EnrollmentEntity } from '../entities/enrollment.entity';

export enum UserRole {
  admin = 'admin',
  teacher = 'teacher',
  student = 'student',
}

export enum UserGender {
  male = 'male',
  female = 'female',
}

registerEnumType(UserRole, {
  name: 'UserRole',
});

registerEnumType(UserGender, {
  name: 'UserGender',
});

export type EnrollmentType = CourseEntity & { enrollment: EnrollmentEntity };

export type Payload = {
  email: string;
};
