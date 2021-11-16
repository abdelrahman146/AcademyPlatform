import { BelongsToMany, Column, HasOne, Model, Table } from 'sequelize-typescript';
import { Course } from 'src/modules/course/models/course.model';
import { Enrolled } from 'src/modules/course/models/enrolled.model';
import { Cart } from './cart.model';
import { Wishlist } from './wishlist.model';

@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @BelongsToMany(() => Course, () => Enrolled)
  enrolledCourses: Course[];

  @BelongsToMany(() => Course, () => Cart)
  cart: Course[];

  @BelongsToMany(() => Course, () => Wishlist)
  wishlist: Course[];
}
