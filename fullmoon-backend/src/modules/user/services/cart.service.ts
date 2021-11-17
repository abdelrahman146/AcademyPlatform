import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CartItem } from '../entities/cart.entity';

@Injectable()
export class CartItemService {
  constructor(
    @InjectModel(CartItem)
    private cartItemEntity: typeof CartItem,
  ) {}

  async findAll(): Promise<CartItem[]> {
    const cartItems = await this.cartItemEntity.findAll();
    return cartItems;
  }

  async findOne(id: number): Promise<CartItem> {
    const cartItem = await this.cartItemEntity.findOne({
      where: {
        id,
      },
    });
    return cartItem;
  }

  async create(cartItemObj: Partial<CartItem>): Promise<CartItem> {
    const cartItem = new CartItem(cartItemObj);
    await cartItem.save();
    return cartItem;
  }

  async update(id: number, cartItemObj: Partial<CartItem>): Promise<CartItem> {
    const cartItem = await this.findOne(id);
    await cartItem.update(cartItemObj);
    return cartItem;
  }

  async remove(id: number): Promise<void> {
    const cartItem = await this.findOne(id);
    await cartItem.destroy();
  }
}
