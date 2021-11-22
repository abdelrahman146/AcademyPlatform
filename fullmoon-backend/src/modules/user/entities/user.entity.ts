import { BelongsToMany, Column, DataType, Model, NotNull, Table } from 'sequelize-typescript';
import { CourseEntity } from 'src/modules/course/entities/course.entity';
import { Exclude } from 'class-transformer';
import { EnrollmentEntity } from 'src/modules/user/entities/enrollment.entity';
import { CartItemEntity } from './cartitem.entity';
import { WishlistItemEntity } from './wishlistitem.entity';
import { UserGender, UserRole } from '../types/user.types';

@Table({ modelName: 'User' })
export class UserEntity extends Model {
  @NotNull
  @Column({ type: DataType.ENUM('admin', 'teacher', 'student'), defaultValue: 'student', allowNull: false })
  role!: UserRole;

  @Column({ type: DataType.STRING, allowNull: true })
  firstName?: string;

  @Column(DataType.STRING)
  lastName?: string;

  @Column(DataType.STRING)
  title?: string;

  @Column({ type: DataType.STRING, validate: { max: Date.now() } })
  dob?: Date;

  @Column({ type: DataType.ENUM('male', 'female') })
  gender?: UserGender;

  @NotNull
  @Column({ type: DataType.STRING, validate: { isEmail: true }, allowNull: false })
  email!: string;

  @Exclude()
  @NotNull
  @Column({ allowNull: false })
  password!: string;

  @Column(DataType.STRING)
  country: string;

  @Column(DataType.STRING)
  avatar: string;

  @Column(DataType.STRING)
  mobile: string;

  @Column(DataType.TEXT)
  bio: string;

  @NotNull
  @Column({ defaultValue: true, allowNull: false })
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
