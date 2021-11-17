import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { Course } from 'src/modules/course/entities/course.entity';
import { Exclude } from 'class-transformer';
import { Enrollment } from 'src/modules/user/entities/enrollment.entity';
import { CartItem } from './cartitem.entity';
import { WishlistItem } from './wishlistitem.entity';
import { UserRole } from '../types/user.types';

@Table
export class User extends Model {
  @Column({ type: DataType.ENUM('admin', 'teacher', 'student'), defaultValue: 'student' })
  role: UserRole;

  @Column(DataType.STRING)
  firstName: string;

  @Column(DataType.STRING)
  lastName: string;

  @Column(DataType.STRING)
  title: string;

  @Column({ type: DataType.STRING, validate: { max: Date.now() } })
  dob: Date;

  @Column({ type: DataType.STRING, validate: { isEmail: true } })
  email: string;

  @Exclude()
  @Column(DataType.STRING)
  password: string;

  @Column(DataType.STRING)
  country: string;

  @Column(DataType.STRING)
  avatar: string;

  @Column(DataType.STRING)
  mobile: string;

  @Column(DataType.TEXT)
  bio: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  // courses user enrolled to
  @BelongsToMany(() => Course, () => Enrollment)
  Enrollments: Array<Course & { enrollment: Enrollment }>;

  // courses user added to cart
  @BelongsToMany(() => Course, () => CartItem)
  cart: Course[];

  // courses user added to wishlist
  @BelongsToMany(() => Course, () => WishlistItem)
  wishlist: Course[];
}
