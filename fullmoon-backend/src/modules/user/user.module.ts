import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AttendanceModule } from '../attendance/attendance.module';
import { CourseModule } from '../course/course.module';

// Models
import { CartItem } from './entities/cart.model';
import { EnrolledCourse } from './entities/enrolled.model';
import { User } from './entities/user.model';
import { WishlistItem } from './entities/wishlist.model';

@Module({
  imports: [SequelizeModule.forFeature([User, WishlistItem, CartItem, EnrolledCourse]), AttendanceModule, CourseModule],
  exports: [SequelizeModule],
  providers: [],
})
export class UserModule {}
