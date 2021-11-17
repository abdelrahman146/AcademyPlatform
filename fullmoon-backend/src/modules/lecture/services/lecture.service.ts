import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Lecture } from '../models/lecture.model';

@Injectable()
export class LectureService {
  constructor(
    @InjectModel(Lecture)
    private lectureModel: typeof Lecture,
  ) {}

  async findAll(): Promise<Lecture[]> {
    const lectures = await this.lectureModel.findAll();
    return lectures;
  }

  async findOne(id: number): Promise<Lecture> {
    const lecture = await this.lectureModel.findOne({
      where: {
        id,
      },
    });
    return lecture;
  }

  async create(lectureObj: Lecture): Promise<Lecture> {
    const lecture = new Lecture(lectureObj);
    await lecture.save();
    return lecture;
  }

  async update(id: number, lectureObj: Lecture): Promise<Lecture> {
    const lecture = await this.findOne(id);
    await lecture.update(lectureObj);
    return lecture;
  }

  async remove(id: number): Promise<void> {
    const lecture = await this.findOne(id);
    await lecture.destroy();
  }
}
