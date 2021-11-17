import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Attendance } from '../models/attendance.model';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectModel(Attendance)
    private attendanceModel: typeof Attendance,
  ) {}

  async findAll(): Promise<Attendance[]> {
    const attendances = await this.attendanceModel.findAll();
    return attendances;
  }

  async findOne(id: number): Promise<Attendance> {
    const attendance = await this.attendanceModel.findOne({
      where: {
        id,
      },
    });
    return attendance;
  }

  async create(attendanceObj: Partial<Attendance>): Promise<Attendance> {
    const attendance = new Attendance(attendanceObj);
    await attendance.save();
    return attendance;
  }

  async update(id: number, attendanceObj: Partial<Attendance>): Promise<Attendance> {
    const attendance = await this.findOne(id);
    await attendance.update(attendanceObj);
    return attendance;
  }

  async remove(id: number): Promise<void> {
    const attendance = await this.findOne(id);
    await attendance.destroy();
  }
}
