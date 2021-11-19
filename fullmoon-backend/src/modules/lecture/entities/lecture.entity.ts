import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { AttendanceEntity } from 'src/modules/attendance/entities/attendance.entity';
import { SectionEntity } from 'src/modules/course/entities/section.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';

enum LectureType {
  VIDEO = 'video',
  STREAM = 'stream',
  CONFERENCE = 'conference',
  ARTICLE = 'article',
}

@Table({ modelName: 'Lecture' })
export class LectureEntity extends Model {
  @Column({ type: DataType.ENUM('video', 'stream', 'conference', 'article'), defaultValue: 'article' })
  type: LectureType;

  @Column(DataType.STRING)
  title: string;

  @Column(DataType.DATE)
  startingDate: Date;

  @Column(DataType.DATE)
  endingDate: Date;

  @Column(DataType.TEXT)
  article: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  isLocked: boolean;

  @Column({ type: DataType.STRING })
  streamLink: string;

  @Column({ type: DataType.STRING })
  videoLink: string;

  @Column({ type: DataType.STRING })
  conferenceId: string;

  @ForeignKey(() => SectionEntity)
  @Column
  sectionId: number;

  @BelongsTo(() => SectionEntity)
  section: SectionEntity;

  @BelongsToMany(() => UserEntity, () => AttendanceEntity)
  attendanceList: Array<UserEntity & { attendance: AttendanceEntity }>;
}
