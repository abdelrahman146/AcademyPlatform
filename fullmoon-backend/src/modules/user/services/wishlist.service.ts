import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WishlistItem } from '../models/wishlist.model';

@Injectable()
export class WishlistService {
  constructor(
    @InjectModel(WishlistItem)
    private wishlistModel: typeof WishlistItem,
  ) {}

  async findAll(): Promise<WishlistItem[]> {
    const wishlists = await this.wishlistModel.findAll();
    return wishlists;
  }

  async findOne(id: string): Promise<WishlistItem> {
    const wishlist = await this.wishlistModel.findOne({
      where: {
        id,
      },
    });
    return wishlist;
  }

  async create(): Promise<WishlistItem> {
    const wishlist = new WishlistItem();
    await wishlist.save();
    return wishlist;
  }

  async update(id: number, wishlistObj: WishlistItem): Promise<WishlistItem> {
    const wishlist = await this.wishlistModel.findOne({
      where: {
        id,
      },
    });
    await wishlist.update(wishlistObj);
    return wishlist;
  }

  async remove(id: number): Promise<void> {
    const wishlist = await this.wishlistModel.findOne({
      where: {
        id,
      },
    });
    await wishlist.destroy();
  }
}
