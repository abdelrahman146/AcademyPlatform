import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CartItemEntity } from '../entities/cartitem.entity';
import { UserEntity } from '../entities/user.entity';
import { WishlistItemEntity } from '../entities/wishlistitem.entity';

@Injectable()
export class UserEntityService {
  constructor(
    @InjectModel(UserEntity)
    private userEntity: typeof UserEntity,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    const users = await this.userEntity.findAll({ include: [CartItemEntity, WishlistItemEntity] });
    return users;
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.userEntity.findOne({
      where: {
        id,
      },
      include: [CartItemEntity, WishlistItemEntity],
    });
    return user;
  }

  async create(userObj: Partial<UserEntity>): Promise<UserEntity> {
    const user = new UserEntity(userObj);
    await user.save();
    return user;
  }

  async update(id: number, userObj: Partial<UserEntity>): Promise<UserEntity> {
    const user = await this.findOne(id);
    await user.update(userObj);
    return user;
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
