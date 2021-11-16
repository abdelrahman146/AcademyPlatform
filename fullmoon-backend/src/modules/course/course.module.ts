import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

// Models
import { Section } from './models/section.model';
import { SubCategory } from './models/subcategory.model';
import { Category } from './models/category.model';
import { Course } from './models/course.model';
import { Enrolled } from './models/enrolled.model';

@Module({
  imports: [SequelizeModule.forFeature([Category, SubCategory, Course, Enrolled, Section])],
  providers: [],
})
export class UserModule {}
