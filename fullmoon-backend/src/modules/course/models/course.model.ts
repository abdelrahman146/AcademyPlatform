import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { User } from 'src/modules/user/models/user.model';
import { EnrolledCourse } from '../../user/models/enrolled.model';
import { Section } from './section.model';
import { SubCategory } from './subcategory.model';

enum CourseType {
  recorded = 'recorded',
  live = 'live',
}

@Table
export class Course extends Model {
  @Column({ type: DataType.ENUM('recorded', 'live'), defaultValue: 'recorded' })
  type: CourseType;

  @Column(DataType.STRING)
  title: string;

  @Column(DataType.STRING)
  headline: string;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.STRING)
  image: string;

  @Column(DataType.STRING)
  introVideo: string;

  @Column(DataType.DATE)
  startingDate: Date;

  @Column(DataType.DATE)
  endingDate: Date;

  @Column(DataType.NUMBER)
  price: number;

  // course sections
  @HasMany(() => Section)
  sections: Section[];

  // teacher of the course
  @ForeignKey(() => User)
  @Column
  teacherId: number;
  @BelongsTo(() => User)
  teacher: User;

  // students who enrolled to the course
  @BelongsToMany(() => User, () => EnrolledCourse)
  students: User[];

  // course subcategory
  @ForeignKey(() => SubCategory)
  @Column
  subcategoryId: number;
  @BelongsTo(() => SubCategory)
  subcategory: SubCategory;
}
