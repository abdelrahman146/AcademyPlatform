import { BelongsToMany, Column, ForeignKey, HasOne, Model, Table } from 'sequelize-typescript';
import { User } from 'src/modules/user/models/user.model';
import { Course } from './course.model';

@Table
export class Enrolled extends Model {
  @ForeignKey(() => User)
  @Column
  studentId: number;

  @ForeignKey(() => Course)
  @Column
  courseId: number;
}
