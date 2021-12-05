import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { LoginDTO } from 'src/modules/auth/dtos/login.dto';
import { CartItemEntity } from '../entities/cartitem.entity';
import { UserEntity } from '../entities/user.entity';
import { WishlistItemEntity } from '../entities/wishlistitem.entity';
import { Payload } from '../types/user.types';
import Encryptor from 'src/lib/encryption';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserEntity)
    private userEntity: typeof UserEntity,
  ) {}

  async findOneByPayload(payload: Payload) {
    const { email } = payload;
    const user = await this.userEntity.findOne({
      where: {
        email,
      },
      include: [CartItemEntity, WishlistItemEntity],
    });
    return user;
  }
  async findByLogin(UserDTO: LoginDTO) {
    const { email, password } = UserDTO;
    const user = await this.userEntity.findOne({
      where: {
        email,
      },
      include: [CartItemEntity, WishlistItemEntity],
    });
    if (!user) {
      throw new HttpException('user doesnt exists', HttpStatus.BAD_REQUEST);
    }
    if (await Encryptor.validate(password, user.password)) {
      return user;
    } else {
      throw new HttpException('invalid credential', HttpStatus.BAD_REQUEST);
    }
  }
}
