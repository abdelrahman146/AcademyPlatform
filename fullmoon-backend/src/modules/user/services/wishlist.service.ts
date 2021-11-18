import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WishlistItemEntity } from '../entities/wishlistitem.entity';

@Injectable()
export class WishlistItemEntityService {
  constructor(
    @InjectModel(WishlistItemEntity)
    private wishlistItemEntity: typeof WishlistItemEntity,
  ) {}

  async findAll(): Promise<WishlistItemEntity[]> {
    const wishlistItems = await this.wishlistItemEntity.findAll();
    return wishlistItems;
  }

  async findOne(id: number): Promise<WishlistItemEntity> {
    const wishlistItem = await this.wishlistItemEntity.findOne({
      where: {
        id,
      },
    });
    return wishlistItem;
  }

  async create(wishlistItemObj: Partial<WishlistItemEntity>): Promise<WishlistItemEntity> {
    const wishlistItem = new WishlistItemEntity(wishlistItemObj);
    await wishlistItem.save();
    return wishlistItem;
  }

  async update(id: number, wishlistItemObj: Partial<WishlistItemEntity>): Promise<WishlistItemEntity> {
    const wishlistItem = await this.findOne(id);
    await wishlistItem.update(wishlistItemObj);
    return wishlistItem;
  }

  async remove(id: number): Promise<void> {
    const wishlistItem = await this.findOne(id);
    await wishlistItem.destroy();
  }
}
