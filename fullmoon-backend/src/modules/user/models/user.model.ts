import { Column, HasOne, Model, Table } from 'sequelize-typescript';
import { Cart } from './cart.model';
import { Wishlist } from './wishlist.model';

@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @HasOne(() => Cart)
  cart: Cart;

  @HasOne(() => Wishlist)
  wishlist: Wishlist;
}
