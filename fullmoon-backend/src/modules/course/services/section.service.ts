import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Section } from '../entities/section.entity';

@Injectable()
export class SectionService {
  constructor(
    @InjectModel(Section)
    private sectionEntity: typeof Section,
  ) {}

  async findAll(): Promise<Section[]> {
    const sections = await this.sectionEntity.findAll();
    return sections;
  }

  async findOne(id: number): Promise<Section> {
    const section = await this.sectionEntity.findOne({
      where: {
        id,
      },
    });
    return section;
  }

  async create(sectionObj: Partial<Section>): Promise<Section> {
    const section = new Section(sectionObj);
    await section.save();
    return section;
  }

  async update(id: number, sectionObj: Partial<Section>): Promise<Section> {
    const section = await this.findOne(id);
    await section.update(sectionObj);
    return section;
  }

  async remove(id: number): Promise<void> {
    const section = await this.findOne(id);
    await section.destroy();
  }
}
