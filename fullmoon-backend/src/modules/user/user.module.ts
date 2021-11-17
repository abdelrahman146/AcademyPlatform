import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AttendanceModule } from '../attendance/attendance.module';
import { CourseModule } from '../course/course.module';

// Models
import { CartItem } from './entities/cartitem.entity';
import { Enrollment } from './entities/enrollment.entity';
import { User } from './entities/user.entity';
import { WishlistItem } from './entities/wishlistitem.entity';

@Module({
  imports: [SequelizeModule.forFeature([User, WishlistItem, CartItem, Enrollment]), AttendanceModule, CourseModule],
  exports: [SequelizeModule],
  providers: [],
})
export class UserModule {}
