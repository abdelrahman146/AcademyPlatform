import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CartItem } from '../entities/cart.entity';
import { User } from '../entities/user.entity';
import { WishlistItem } from '../entities/wishlist.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userEntity: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.userEntity.findAll({ include: [CartItem, WishlistItem] });
    return users;
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userEntity.findOne({
      where: {
        id,
      },
      include: [CartItem, WishlistItem],
    });
    return user;
  }

  async create(userObj: Partial<User>): Promise<User> {
    const user = new User(userObj);
    await user.save();
    return user;
  }

  async update(id: number, userObj: Partial<User>): Promise<User> {
    const user = await this.findOne(id);
    await user.update(userObj);
    return user;
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
