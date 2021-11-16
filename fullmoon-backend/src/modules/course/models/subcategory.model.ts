import { BelongsTo, BelongsToMany, Column, ForeignKey, HasMany, HasOne, Model, Table } from 'sequelize-typescript';
import { Category } from './category.model';
import { Course } from './course.model';

@Table
export class SubCategory extends Model {
  @ForeignKey(() => Category)
  @Column
  categoryId: number;

  @BelongsTo(() => Category)
  parent: Category;

  @HasMany(() => Course)
  subcategories: Course[];
}
