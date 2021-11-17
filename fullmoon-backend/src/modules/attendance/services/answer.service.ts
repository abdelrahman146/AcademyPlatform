import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Answer } from '../models/answer.model';

@Injectable()
export class AnswerService {
  constructor(
    @InjectModel(Answer)
    private answerModel: typeof Answer,
  ) {}

  async findAll(): Promise<Answer[]> {
    const answers = await this.answerModel.findAll();
    return answers;
  }

  async findOne(id: number): Promise<Answer> {
    const answer = await this.answerModel.findOne({
      where: {
        id,
      },
    });
    return answer;
  }

  async create(answerObj: Partial<Answer>): Promise<Answer> {
    const answer = new Answer(answerObj);
    await answer.save();
    return answer;
  }

  async update(id: number, answerObj: Partial<Answer>): Promise<Answer> {
    const answer = await this.findOne(id);
    await answer.update(answerObj);
    return answer;
  }

  async remove(id: number): Promise<void> {
    const answer = await this.findOne(id);
    await answer.destroy();
  }
}
