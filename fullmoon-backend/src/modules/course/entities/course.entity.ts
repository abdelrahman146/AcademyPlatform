import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, NotNull, Table } from 'sequelize-typescript';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { EnrollmentEntity } from '../../user/entities/enrollment.entity';
import { CourseType } from '../types/course.types';
import { SectionEntity } from './section.entity';
import { SubCategoryEntity } from './subCategory.entity';

@Table({ modelName: 'Course' })
export class CourseEntity extends Model {
  @NotNull
  @Column({ type: DataType.ENUM('recorded', 'live'), defaultValue: 'recorded', allowNull: false })
  type: CourseType;

  @NotNull
  @Column({ allowNull: false })
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

  @NotNull
  @Column({ allowNull: false })
  price: number;

  // course sections
  @HasMany(() => SectionEntity)
  sections: SectionEntity[];

  // teacher of the course
  @NotNull
  @ForeignKey(() => UserEntity)
  @Column({ allowNull: false })
  teacherId: number;
  @BelongsTo(() => UserEntity)
  teacher: UserEntity;

  // students who enrolled to the course
  @BelongsToMany(() => UserEntity, () => EnrollmentEntity)
  students: Array<UserEntity & { enrollment: EnrollmentEntity }>;

  // course subcategory
  @NotNull
  @ForeignKey(() => SubCategoryEntity)
  @Column({ allowNull: false })
  subCategoryId: number;
  @BelongsTo(() => SubCategoryEntity)
  subCategory: SubCategoryEntity;
}
