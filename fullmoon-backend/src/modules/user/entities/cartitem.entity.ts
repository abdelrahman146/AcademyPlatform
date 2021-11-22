import { BelongsTo, Column, ForeignKey, Model, NotNull, Table } from 'sequelize-typescript';
import { CourseEntity } from 'src/modules/course/entities/course.entity';
import { UserEntity } from './user.entity';

@Table({ modelName: 'CartItem', timestamps: false })
export class CartItemEntity extends Model {
  @NotNull
  @ForeignKey(() => UserEntity)
  @Column({ allowNull: false })
  userId: number;

  @BelongsTo(() => UserEntity)
  user: UserEntity;

  @NotNull
  @ForeignKey(() => CourseEntity)
  @Column({ allowNull: false })
  courseId: number;

  @BelongsTo(() => CourseEntity)
  course: CourseEntity;
}
