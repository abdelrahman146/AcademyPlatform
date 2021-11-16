import { BelongsTo, BelongsToMany, Column, ForeignKey, HasOne, Model, Table } from 'sequelize-typescript';
import { Attendance } from 'src/modules/attendance/models/attendance.model';
import { Section } from 'src/modules/course/models/section.model';
import { User } from 'src/modules/user/models/user.model';

@Table
export class Lecture extends Model {
  @ForeignKey(() => Section)
  @Column
  sectionId: number;

  @BelongsTo(() => Section)
  section: Section;

  @BelongsToMany(() => User, () => Attendance)
  attendanceList: Attendance[];
}
