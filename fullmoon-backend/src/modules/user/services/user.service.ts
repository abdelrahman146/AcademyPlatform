import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserInsertObject } from '../dtos/user.insert.dto';
import { UserResponseObject } from '../dtos/user.response.dto';
import { UserUpdateObject } from '../dtos/user.update.dto';
import { CartItem } from '../models/cart.model';
import { User } from '../models/user.model';
import { WishlistItem } from '../models/wishlist.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  createResponseObject(user: User) {
    const response: UserResponseObject = { id: user.id, firstname: user.firstName, lastname: user.lastName };
    return response;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.findAll({ include: [CartItem, WishlistItem] });
    return users;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findOne({
      where: {
        id,
      },
      include: [CartItem, WishlistItem],
    });
    return user;
  }

  async create(userObj: UserInsertObject): Promise<User> {
    const user = new User(userObj);
    await user.save();
    return user;
  }

  async update(id: number, userObj: UserUpdateObject): Promise<User> {
    const user = await this.userModel.findOne({
      where: {
        id,
      },
      include: [CartItem, WishlistItem],
    });
    await user.update(userObj);
    return user;
  }

  async remove(id: number): Promise<void> {
    const user = await this.userModel.findOne({
      where: {
        id,
      },
      include: [CartItem, WishlistItem],
    });
    await user.destroy();
  }
}
