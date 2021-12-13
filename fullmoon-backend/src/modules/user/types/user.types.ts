import { registerEnumType } from '@nestjs/graphql';
import { CourseDTO } from 'src/modules/course/dtos/course/course.dto';
import { CourseEntity } from 'src/modules/course/entities/course.entity';
import { EnrollmentDTO } from '../dtos/enrollment/enrollment.dto';
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

export type EnrollmentType = CourseEntity & { info: EnrollmentEntity };
export type EnrollmentTypeDTO = CourseDTO & { info: EnrollmentDTO };

export type Payload = {
  email: string;
};
