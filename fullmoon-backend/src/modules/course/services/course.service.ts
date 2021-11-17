import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Course } from '../entities/course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course)
    private courseEntity: typeof Course,
  ) {}

  async findAll(): Promise<Course[]> {
    const courses = await this.courseEntity.findAll();
    return courses;
  }

  async findOne(id: number): Promise<Course> {
    const course = await this.courseEntity.findOne({
      where: {
        id,
      },
    });
    return course;
  }

  async create(courseObj: Partial<Course>): Promise<Course> {
    const course = new Course(courseObj);
    await course.save();
    return course;
  }

  async update(id: number, courseObj: Partial<Course>): Promise<Course> {
    const course = await this.findOne(id);
    await course.update(courseObj);
    return course;
  }

  async remove(id: number): Promise<void> {
    const course = await this.findOne(id);
    await course.destroy();
  }
}
