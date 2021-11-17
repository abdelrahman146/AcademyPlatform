import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Course } from 'src/modules/course/models/course.model';
import { User } from './user.model';

@Table({ timestamps: false })
export class CartItem extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Course)
  @Column
  courseId: number;

  @BelongsTo(() => Course)
  course: Course;
}
