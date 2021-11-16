import { BelongsTo, BelongsToMany, Column, HasOne, Model, Table } from 'sequelize-typescript';
import { Attendance } from 'src/modules/attendance/models/attendance.model';
import { Section } from 'src/modules/course/models/section.model';
import { User } from 'src/modules/user/models/user.model';

@Table
export class Quiz extends Model {
  @BelongsTo(() => Section)
  section: Section;

  @BelongsToMany(() => User, () => Attendance)
  attendanceList: Attendance[];
}
