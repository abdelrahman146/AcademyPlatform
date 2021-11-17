import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Lecture } from '../entities/lecture.entity';

@Injectable()
export class LectureService {
  constructor(
    @InjectModel(Lecture)
    private lectureEntity: typeof Lecture,
  ) {}

  async findAll(): Promise<Lecture[]> {
    const lectures = await this.lectureEntity.findAll();
    return lectures;
  }

  async findOne(id: number): Promise<Lecture> {
    const lecture = await this.lectureEntity.findOne({
      where: {
        id,
      },
    });
    return lecture;
  }

  async create(lectureObj: Partial<Lecture>): Promise<Lecture> {
    const lecture = new Lecture(lectureObj);
    await lecture.save();
    return lecture;
  }

  async update(id: number, lectureObj: Partial<Lecture>): Promise<Lecture> {
    const lecture = await this.findOne(id);
    await lecture.update(lectureObj);
    return lecture;
  }

  async remove(id: number): Promise<void> {
    const lecture = await this.findOne(id);
    await lecture.destroy();
  }
}
