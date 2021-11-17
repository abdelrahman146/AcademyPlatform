import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Option } from '../entities/option.entity';

@Injectable()
export class OptionService {
  constructor(
    @InjectModel(Option)
    private optionEntity: typeof Option,
  ) {}

  async findAll(): Promise<Option[]> {
    const options = await this.optionEntity.findAll();
    return options;
  }

  async findOne(id: number): Promise<Option> {
    const option = await this.optionEntity.findOne({
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
