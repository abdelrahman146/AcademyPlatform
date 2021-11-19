import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { CourseEntity } from 'src/modules/course/entities/course.entity';
import { UserEntity } from './user.entity';

@Table({ modelName: 'CartItem', timestamps: false })
export class CartItemEntity extends Model {
  @ForeignKey(() => UserEntity)
  @Column
  userId: number;

  @BelongsTo(() => UserEntity)
  user: UserEntity;

  @ForeignKey(() => CourseEntity)
  @Column
  courseId: number;

  @BelongsTo(() => CourseEntity)
  course: CourseEntity;
}
