import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Option } from '../models/option.model';

@Injectable()
export class OptionService {
  constructor(
    @InjectModel(Option)
    private optionModel: typeof Option,
  ) {}

  async findAll(): Promise<Option[]> {
    const options = await this.optionModel.findAll();
    return options;
  }

  async findOne(id: number): Promise<Option> {
    const option = await this.optionModel.findOne({
      where: {
        id,
      },
    });
    return option;
  }

  async create(optionObj: Partial<Option>): Promise<Option> {
    const option = new Option(optionObj);
    await option.save();
    return option;
  }

  async update(id: number, optionObj: Partial<Option>): Promise<Option> {
    const option = await this.findOne(id);
    await option.update(optionObj);
    return option;
  }

  async remove(id: number): Promise<void> {
    const option = await this.findOne(id);
    await option.destroy();
  }
}
