import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Attendance } from 'src/modules/attendance/entities/attendance.entity';
import { Section } from 'src/modules/course/entities/section.entity';
import { User } from 'src/modules/user/entities/user.entity';

enum LectureType {
  VIDEO = 'video',
  STREAM = 'stream',
  CONFERENCE = 'conference',
  ARTICLE = 'article',
}

@Table
export class Lecture extends Model {
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

  @ForeignKey(() => Section)
  @Column
  sectionId: number;

  @BelongsTo(() => Section)
  section: Section;

  @BelongsToMany(() => User, () => Attendance)
  attendanceList: Array<User & { attendance: Attendance }>;
}
