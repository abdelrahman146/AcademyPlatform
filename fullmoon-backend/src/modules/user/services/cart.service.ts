import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CartItemEntity } from '../entities/cartitem.entity';

@Injectable()
export class CartItemEntityService {
  constructor(
    @InjectModel(CartItemEntity)
    private cartItemEntity: typeof CartItemEntity,
  ) {}

  async findAll(): Promise<CartItemEntity[]> {
    const cartItems = await this.cartItemEntity.findAll();
    return cartItems;
  }

  async findOne(id: number): Promise<CartItemEntity> {
    const cartItem = await this.cartItemEntity.findOne({
      where: {
        id,
      },
    });
    return cartItem;
  }

  async create(cartItemObj: Partial<CartItemEntity>): Promise<CartItemEntity> {
    const cartItem = new CartItemEntity(cartItemObj);
    await cartItem.save();
    return cartItem;
  }

  async update(id: number, cartItemObj: Partial<CartItemEntity>): Promise<CartItemEntity> {
    const cartItem = await this.findOne(id);
    await cartItem.update(cartItemObj);
    return cartItem;
  }

  async remove(id: number): Promise<void> {
    const cartItem = await this.findOne(id);
    await cartItem.destroy();
  }
}
