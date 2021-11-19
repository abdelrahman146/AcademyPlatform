import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { CategoryEntity } from './category.entity';
import { CourseEntity } from './course.entity';

@Table({ modelName: 'SubCategory', timestamps: false })
export class SubCategoryEntity extends Model {
  @Column(DataType.STRING)
  title: string;

  @Column(DataType.STRING)
  headline: string;

  @HasMany(() => CourseEntity)
  courses: CourseEntity[];

  @ForeignKey(() => CategoryEntity)
  @Column
  parentId: number;

  @BelongsTo(() => CategoryEntity)
  parent: CategoryEntity;
}
