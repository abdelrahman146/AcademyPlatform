import { BelongsTo, BelongsToMany, Column, ForeignKey, HasOne, Model, Table } from 'sequelize-typescript';
import { User } from 'src/modules/user/models/user.model';
import { Enrolled } from './enrolled.model';
import { SubCategory } from './subcategory.model';

@Table
export class Course extends Model {
  // teacher
  @HasOne(() => User)
  teacher: User;

  // enrolled students
  @BelongsToMany(() => User, () => Enrolled)
  students: User[];

  @BelongsTo(() => SubCategory)
  subcategory: SubCategory;
}
