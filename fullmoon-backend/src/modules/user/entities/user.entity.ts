import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { CourseEntity } from 'src/modules/course/entities/course.entity';
import { Exclude } from 'class-transformer';
import { EnrollmentEntity } from 'src/modules/user/entities/enrollment.entity';
import { CartItemEntity } from './cartitem.entity';
import { WishlistItemEntity } from './wishlistitem.entity';
import { UserRole } from '../types/user.types';

@Table
export class UserEntity extends Model {
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
  @BelongsToMany(() => CourseEntity, () => EnrollmentEntity)
  enrollments: Array<CourseEntity & { enrollment: EnrollmentEntity }>;

  // courses user added to cart
  @BelongsToMany(() => CourseEntity, () => CartItemEntity)
  cart: CourseEntity[];

  // courses user added to wishlist
  @BelongsToMany(() => CourseEntity, () => WishlistItemEntity)
  wishlist: CourseEntity[];
}
