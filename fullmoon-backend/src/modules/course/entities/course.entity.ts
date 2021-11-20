import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { EnrollmentEntity } from '../../user/entities/enrollment.entity';
import { CourseType } from '../types/course.types';
import { SectionEntity } from './section.entity';
import { SubCategoryEntity } from './subCategory.entity';

@Table({ modelName: 'Course' })
export class CourseEntity extends Model {
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
  @HasMany(() => SectionEntity)
  sections: SectionEntity[];

  // teacher of the course
  @ForeignKey(() => UserEntity)
  @Column
  teacherId: number;
  @BelongsTo(() => UserEntity)
  teacher: UserEntity;

  // students who enrolled to the course
  @BelongsToMany(() => UserEntity, () => EnrollmentEntity)
  students: Array<UserEntity & { enrollment: EnrollmentEntity }>;

  // course subcategory
  @ForeignKey(() => SubCategoryEntity)
  @Column
  subCategoryId: number;
  @BelongsTo(() => SubCategoryEntity)
  subCategory: SubCategoryEntity;
}
