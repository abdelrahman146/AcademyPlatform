import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { SubCategory } from './subcategory.model';

@Table({ timestamps: false })
export class Category extends Model {
  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  headline: string;

  @Column(DataType.STRING)
  image: string;

  @HasMany(() => SubCategory)
  subcategories: SubCategory[];
}
