import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from '../models/cart.model';
import { Wishlist } from '../models/wishlist.model';

@Injectable()
export class WishlistService {
  constructor(
    @InjectModel(Wishlist)
    private wishlistModel: typeof Wishlist,
  ) {}

  async findAll(): Promise<Wishlist[]> {
    const wishlists = await this.wishlistModel.findAll({ include: [Cart, Wishlist] });
    return wishlists;
  }

  async findOne(id: string): Promise<Wishlist> {
    const wishlist = await this.wishlistModel.findOne({
      where: {
        id,
      },
      include: [Cart, Wishlist],
    });
    return wishlist;
  }

  async create(): Promise<Wishlist> {
    const wishlist = new Wishlist();
    await wishlist.save();
    return wishlist;
  }

  async update(id: number, wishlistObj: Wishlist): Promise<Wishlist> {
    const wishlist = await this.wishlistModel.findOne({
      where: {
        id,
      },
      include: [Cart, Wishlist],
    });
    await wishlist.update(wishlistObj);
    return wishlist;
  }

  async remove(id: number): Promise<void> {
    const wishlist = await this.wishlistModel.findOne({
      where: {
        id,
      },
      include: [Cart, Wishlist],
    });
    await wishlist.destroy();
  }
}
