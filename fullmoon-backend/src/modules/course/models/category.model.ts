import { BelongsToMany, Column, ForeignKey, HasMany, HasOne, Model, Table } from 'sequelize-typescript';
import { SubCategory } from './subcategory.model';

@Table
export class Category extends Model {
  @HasMany(() => SubCategory)
  subcategories: SubCategory[];
}
