import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CartItem } from '../models/cart.model';

@Injectable()
export class CartItemService {
  constructor(
    @InjectModel(CartItem)
    private cartItemModel: typeof CartItem,
  ) {}

  async findAll(): Promise<CartItem[]> {
    const cartItems = await this.cartItemModel.findAll();
    return cartItems;
  }

  async findOne(id: number): Promise<CartItem> {
    const cartItem = await this.cartItemModel.findOne({
      where: {
        id,
      },
    });
    return cartItem;
  }

  async create(cartItemObj: CartItem): Promise<CartItem> {
    const cartItem = new CartItem(cartItemObj);
    await cartItem.save();
    return cartItem;
  }

  async update(id: number, cartItemObj: CartItem): Promise<CartItem> {
    const cartItem = await this.findOne(id);
    await cartItem.update(cartItemObj);
    return cartItem;
  }

  async remove(id: number): Promise<void> {
    const cartItem = await this.findOne(id);
    await cartItem.destroy();
  }
}
