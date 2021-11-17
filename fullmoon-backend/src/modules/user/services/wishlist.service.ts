import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WishlistItem } from '../entities/wishlist.entity';

@Injectable()
export class WishlistItemService {
  constructor(
    @InjectModel(WishlistItem)
    private wishlistItemEntity: typeof WishlistItem,
  ) {}

  async findAll(): Promise<WishlistItem[]> {
    const wishlistItems = await this.wishlistItemEntity.findAll();
    return wishlistItems;
  }

  async findOne(id: number): Promise<WishlistItem> {
    const wishlistItem = await this.wishlistItemEntity.findOne({
      where: {
        id,
      },
    });
    return wishlistItem;
  }

  async create(wishlistItemObj: Partial<WishlistItem>): Promise<WishlistItem> {
    const wishlistItem = new WishlistItem(wishlistItemObj);
    await wishlistItem.save();
    return wishlistItem;
  }

  async update(id: number, wishlistItemObj: Partial<WishlistItem>): Promise<WishlistItem> {
    const wishlistItem = await this.findOne(id);
    await wishlistItem.update(wishlistItemObj);
    return wishlistItem;
  }

  async remove(id: number): Promise<void> {
    const wishlistItem = await this.findOne(id);
    await wishlistItem.destroy();
  }
}
