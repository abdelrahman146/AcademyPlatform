import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Category } from './category.entity';
import { Course } from './course.entity';

@Table({ timestamps: false })
export class SubCategory extends Model {
  @Column(DataType.STRING)
  title: string;

  @Column(DataType.STRING)
  headline: string;

  @HasMany(() => Course)
  courses: Course[];

  @ForeignKey(() => Category)
  @Column
  categoryId: number;

  @BelongsTo(() => Category)
  parent: Category;

  @HasMany(() => Course)
  subcategories: Course[];
}
