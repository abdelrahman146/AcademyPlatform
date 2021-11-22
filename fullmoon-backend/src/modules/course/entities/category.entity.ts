import { Column, HasMany, Model, NotNull, Table } from 'sequelize-typescript';
import { SubCategoryEntity } from './subCategory.entity';

@Table({ modelName: 'Category', timestamps: false })
export class CategoryEntity extends Model {
  @NotNull
  @Column({ allowNull: false })
  name!: string;

  @Column
  headline: string;

  @Column({ allowNull: false })
  image: string;

  @HasMany(() => SubCategoryEntity)
  subCategories: SubCategoryEntity[];
}
