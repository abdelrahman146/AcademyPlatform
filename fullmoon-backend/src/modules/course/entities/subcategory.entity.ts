import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, NotNull, Table } from 'sequelize-typescript';
import { CategoryEntity } from './category.entity';
import { CourseEntity } from './course.entity';

@Table({ modelName: 'SubCategory', timestamps: false })
export class SubCategoryEntity extends Model {
  @NotNull
  @Column({ allowNull: false })
  title: string;

  @Column(DataType.STRING)
  headline: string;

  @HasMany(() => CourseEntity)
  courses: CourseEntity[];

  @NotNull
  @ForeignKey(() => CategoryEntity)
  @Column({ allowNull: false })
  parentId: number;

  @BelongsTo(() => CategoryEntity)
  parent: CategoryEntity;
}
