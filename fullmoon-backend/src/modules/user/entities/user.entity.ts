import { BeforeSave, BelongsToMany, Column, DataType, Model, NotNull, Table, Unique } from 'sequelize-typescript';
import { CourseEntity } from 'src/modules/course/entities/course.entity';
import { EnrollmentEntity } from 'src/modules/user/entities/enrollment.entity';
import { CartItemEntity } from './cartitem.entity';
import { WishlistItemEntity } from './wishlistitem.entity';
import { UserGender, UserRole } from '../types/user.types';
import Encryptor from 'src/lib/encryption';

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

  @Unique
  @NotNull
  @Column({ type: DataType.STRING, validate: { isEmail: true }, allowNull: false })
  email!: string;

  @NotNull
  @Column({ allowNull: false })
  password!: string;

  @Column(DataType.STRING)
  country: string;

  @Column(DataType.STRING)
  avatar: string;

  @Unique(true)
  @Column(DataType.STRING)
  mobile: string;

  @Column(DataType.TEXT)
  bio: string;

  @NotNull
  @Column({ defaultValue: true, allowNull: false })
  isActive: boolean;

  @BelongsToMany(() => CourseEntity, () => EnrollmentEntity)
  enrollments: Array<CourseEntity & { enrollmentInfo: EnrollmentEntity }>;

  @BelongsToMany(() => CourseEntity, () => CartItemEntity)
  cart: CourseEntity[];

  @BelongsToMany(() => CourseEntity, () => WishlistItemEntity)
  wishlist: CourseEntity[];

  @BeforeSave
  static async hashPassword(user: UserEntity) {
    user.password = await Encryptor.hash(user.password);
  }
}
