import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

// Models
import { CartItem } from './models/cart.model';
import { EnrolledCourse } from './models/enrolled.model';
import { User } from './models/user.model';
import { WishlistItem } from './models/wishlist.model';

@Module({
  imports: [SequelizeModule.forFeature([User, WishlistItem, CartItem, EnrolledCourse])],
  providers: [],
})
export class UserModule {}
