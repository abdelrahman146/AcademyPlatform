import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { Course } from 'src/modules/course/entities/course.model';
import { Exclude } from 'class-transformer';
import { EnrolledCourse } from 'src/modules/user/entities/enrolled.model';
import { CartItem } from './cart.model';
import { WishlistItem } from './wishlist.model';

enum UserRole {
  admin = 'admin',
  teacher = 'teacher',
  student = 'student',
}

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
  @BelongsToMany(() => Course, () => EnrolledCourse)
  enrolledCourses: Course[];

  // courses user added to cart
  @BelongsToMany(() => Course, () => CartItem)
  cart: Course[];

  // courses user added to wishlist
  @BelongsToMany(() => Course, () => WishlistItem)
  wishlist: Course[];
}
