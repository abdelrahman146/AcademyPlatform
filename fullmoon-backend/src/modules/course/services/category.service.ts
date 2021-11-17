import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from '../entities/category.model';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category)
    private categoryModel: typeof Category,
  ) {}

  async findAll(): Promise<Category[]> {
    const categories = await this.categoryModel.findAll();
    return categories;
  }

  async findOne(id: number): Promise<Category> {
    const category = await this.categoryModel.findOne({
      where: {
        id,
      },
    });
    return category;
  }

  async create(categoryObj: Partial<Category>): Promise<Category> {
    const category = new Category(categoryObj);
    await category.save();
    return category;
  }

  async update(id: number, categoryObj: Partial<Category>): Promise<Category> {
    const category = await this.findOne(id);
    await category.update(categoryObj);
    return category;
  }

  async remove(id: number): Promise<void> {
    const category = await this.findOne(id);
    await category.destroy();
  }
}
