import { BelongsTo, HasMany, HasOne, Model, Table } from 'sequelize-typescript';
import { Course } from 'src/modules/course/models/course.model';
import { User } from './user.model';

@Table
export class Cart extends Model {
  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Course)
  courses: Course[];
}
