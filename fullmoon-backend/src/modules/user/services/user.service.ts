import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CartItem } from '../models/cart.model';
import { User } from '../models/user.model';
import { WishlistItem } from '../models/wishlist.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.userModel.findAll({ include: [CartItem, WishlistItem] });
    return users;
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userModel.findOne({
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
