import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Quiz } from '../models/quiz.model';

@Injectable()
export class QuizService {
  constructor(
    @InjectModel(Quiz)
    private quizModel: typeof Quiz,
  ) {}

  async findAll(): Promise<Quiz[]> {
    const quizs = await this.quizModel.findAll();
    return quizs;
  }

  async findOne(id: number): Promise<Quiz> {
    const quiz = await this.quizModel.findOne({
      where: {
        id,
      },
    });
    return quiz;
  }

  async create(quizObj: Partial<Quiz>): Promise<Quiz> {
    const quiz = new Quiz(quizObj);
    await quiz.save();
    return quiz;
  }

  async update(id: number, quizObj: Partial<Quiz>): Promise<Quiz> {
    const quiz = await this.findOne(id);
    await quiz.update(quizObj);
    return quiz;
  }

  async remove(id: number): Promise<void> {
    const quiz = await this.findOne(id);
    await quiz.destroy();
  }
}
