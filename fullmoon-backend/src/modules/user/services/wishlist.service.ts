import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WishlistItem } from '../entities/wishlist.model';

@Injectable()
export class WishlistItemService {
  constructor(
    @InjectModel(WishlistItem)
    private wishlistItemModel: typeof WishlistItem,
  ) {}

  async findAll(): Promise<WishlistItem[]> {
    const wishlistItems = await this.wishlistItemModel.findAll();
    return wishlistItems;
  }

  async findOne(id: number): Promise<WishlistItem> {
    const wishlistItem = await this.wishlistItemModel.findOne({
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
