import { BelongsTo, BelongsToMany, Column, ForeignKey, HasOne, Model, Table } from 'sequelize-typescript';
import { User } from 'src/modules/user/models/user.model';
import { Enrolled } from './enrolled.model';
import { SubCategory } from './subcategory.model';

@Table
export class Course extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  teacher: User;

  @BelongsToMany(() => User, () => Enrolled)
  students: User[];

  @ForeignKey(() => SubCategory)
  @Column
  subcategoryId: number;

  @BelongsTo(() => SubCategory)
  subcategory: SubCategory;
}
