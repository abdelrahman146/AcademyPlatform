import { BelongsTo, Column, DataType, ForeignKey, Model, NotNull, Table } from 'sequelize-typescript';
import { CourseEntity } from 'src/modules/course/entities/course.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { LectureEntity } from './lecture.entity';

@Table({ modelName: 'LectureContent', timestamps: false })
export class LectureContentEntity extends Model {
  @Column(DataType.TEXT)
  article: string;

  @Column({ type: DataType.STRING })
  streamLink: string;

  @Column({ type: DataType.STRING })
  videoLink: string;

  @Column({ type: DataType.STRING })
  conferenceId: string;

  @NotNull
  @ForeignKey(() => LectureEntity)
  @Column({ allowNull: false })
  lectureId: number;

  @BelongsTo(() => LectureEntity)
  lecture: LectureEntity;

  @NotNull
  @ForeignKey(() => UserEntity)
  @Column({ allowNull: false })
  teacherId: number;

  @NotNull
  @ForeignKey(() => CourseEntity)
  @Column({ allowNull: false })
  courseId: number;
}
