import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AttendanceModule } from '../attendance/attendance.module';
import { CourseModule } from '../course/course.module';

// Models
import { CartItem } from './models/cart.model';
import { EnrolledCourse } from './models/enrolled.model';
import { User } from './models/user.model';
import { WishlistItem } from './models/wishlist.model';

@Module({
  imports: [SequelizeModule.forFeature([User, WishlistItem, CartItem, EnrolledCourse]), AttendanceModule, CourseModule],
  exports: [SequelizeModule],
  providers: [],
})
export class UserModule {}
