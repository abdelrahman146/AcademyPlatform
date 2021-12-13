import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasOne, Model, NotNull, Table } from 'sequelize-typescript';
import { AttendanceEntity } from 'src/modules/attendance/entities/attendance.entity';
import { CourseEntity } from 'src/modules/course/entities/course.entity';
import { SectionEntity } from 'src/modules/course/entities/section.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { LectureContentEntity } from './lectureContent.entity';

enum LectureType {
  VIDEO = 'video',
  STREAM = 'stream',
  CONFERENCE = 'conference',
  ARTICLE = 'article',
}

@Table({ modelName: 'Lecture' })
export class LectureEntity extends Model {
  @NotNull
  @Column({ type: DataType.ENUM('video', 'stream', 'conference', 'article'), defaultValue: 'article', allowNull: false })
  type!: LectureType;

  @NotNull
  @Column({ allowNull: false })
  title!: string;

  @Column(DataType.DATE)
  startingDate?: Date;

  @Column(DataType.DATE)
  endingDate?: Date;

  @NotNull
  @Column({ type: DataType.BOOLEAN, defaultValue: true, allowNull: false })
  isLocked: boolean;

  @NotNull
  @ForeignKey(() => LectureContentEntity)
  @Column({ allowNull: false })
  lectureContentId: number;
  @HasOne(() => LectureContentEntity)
  lectureContent: LectureContentEntity;

  @NotNull
  @ForeignKey(() => SectionEntity)
  @Column({ allowNull: false })
  sectionId: number;

  @BelongsTo(() => SectionEntity)
  section: SectionEntity;

  @BelongsToMany(() => UserEntity, () => AttendanceEntity)
  attendanceList: Array<UserEntity & { attendance: AttendanceEntity }>;

  @NotNull
  @ForeignKey(() => UserEntity)
  @Column({ allowNull: false })
  teacherId: number;

  @NotNull
  @ForeignKey(() => CourseEntity)
  @Column({ allowNull: false })
  courseId: number;
}
