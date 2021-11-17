import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Course } from '../models/course.model';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course)
    private courseModel: typeof Course,
  ) {}

  async findAll(): Promise<Course[]> {
    const courses = await this.courseModel.findAll();
    return courses;
  }

  async findOne(id: number): Promise<Course> {
    const course = await this.courseModel.findOne({
      where: {
        id,
      },
    });
    return course;
  }

  async create(courseObj: Course): Promise<Course> {
    const course = new Course(courseObj);
    await course.save();
    return course;
  }

  async update(id: number, courseObj: Course): Promise<Course> {
    const course = await this.findOne(id);
    await course.update(courseObj);
    return course;
  }

  async remove(id: number): Promise<void> {
    const course = await this.findOne(id);
    await course.destroy();
  }
}
