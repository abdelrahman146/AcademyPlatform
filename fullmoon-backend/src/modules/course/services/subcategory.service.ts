import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SubCategory } from '../entities/subcategory.model';

@Injectable()
export class SubCategoryService {
  constructor(
    @InjectModel(SubCategory)
    private subcategoryModel: typeof SubCategory,
  ) {}

  async findAll(): Promise<SubCategory[]> {
    const subcategories = await this.subcategoryModel.findAll();
    return subcategories;
  }

  async findOne(id: number): Promise<SubCategory> {
    const subcategory = await this.subcategoryModel.findOne({
      where: {
        id,
      },
    });
    return subcategory;
  }

  async create(subcategoryObj: Partial<SubCategory>): Promise<SubCategory> {
    const subcategory = new SubCategory(subcategoryObj);
    await subcategory.save();
    return subcategory;
  }

  async update(id: number, subcategoryObj: Partial<SubCategory>): Promise<SubCategory> {
    const subcategory = await this.findOne(id);
    await subcategory.update(subcategoryObj);
    return subcategory;
  }

  async remove(id: number): Promise<void> {
    const subcategory = await this.findOne(id);
    await subcategory.destroy();
  }
}
