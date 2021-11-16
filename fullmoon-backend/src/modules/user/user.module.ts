import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

// Models
import { Cart } from './models/cart.model';
import { User } from './models/user.model';
import { Wishlist } from './models/wishlist.model';

@Module({
  imports: [SequelizeModule.forFeature([User, Wishlist, Cart])],
  providers: [],
})
export class UserModule {}
