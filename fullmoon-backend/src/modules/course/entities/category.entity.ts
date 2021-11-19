import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { SubCategoryEntity } from './subcategory.entity';

@Table({ modelName: 'Category', timestamps: false })
export class CategoryEntity extends Model {
  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  headline: string;

  @Column(DataType.STRING)
  image: string;

  @HasMany(() => SubCategoryEntity)
  subcategories: SubCategoryEntity[];
}
