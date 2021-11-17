import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AttendanceModule } from '../attendance/attendance.module';
import { CourseModule } from '../course/course.module';

// Models
import { CartItem } from './entities/cart.entity';
import { EnrolledCourse } from './entities/enrolled.entity';
import { User } from './entities/user.entity';
import { WishlistItem } from './entities/wishlist.entity';

@Module({
  imports: [SequelizeModule.forFeature([User, WishlistItem, CartItem, EnrolledCourse]), AttendanceModule, CourseModule],
  exports: [SequelizeModule],
  providers: [],
})
export class UserModule {}
