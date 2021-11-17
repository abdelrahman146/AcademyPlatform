import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Question } from '../entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question)
    private questionEntity: typeof Question,
  ) {}

  async findAll(): Promise<Question[]> {
    const questions = await this.questionEntity.findAll();
    return questions;
  }

  async findOne(id: number): Promise<Question> {
    const question = await this.questionEntity.findOne({
      where: {
        id,
      },
    });
    return question;
  }

  async create(questionObj: Partial<Question>): Promise<Question> {
    const question = new Question(questionObj);
    await question.save();
    return question;
  }

  async update(id: number, questionObj: Partial<Question>): Promise<Question> {
    const question = await this.findOne(id);
    await question.update(questionObj);
    return question;
  }

  async remove(id: number): Promise<void> {
    const question = await this.findOne(id);
    await question.destroy();
  }
}
