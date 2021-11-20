import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { CartItemCreateInputDTO } from './dtos/cartitem/cartitem.create.dto';
import { CartItemDTO } from './dtos/cartitem/cartitem.read.dto';
import { EnrollmentDTO } from './dtos/enrollment/enrollment.read.dto';
import { UserCreateInputDTO } from './dtos/user/user.create.dto';
import { UserDTO } from './dtos/user/user.read.dto';
import { UserUpdateInputDTO } from './dtos/user/user.update.dto';
import { WishlistItemCreateInputDTO } from './dtos/wishlistitem/wishlistitem.create.dto';
import { WishlistItemDTO } from './dtos/wishlistitem/wishlistitem.read.dto';

// Models
import { CartItemEntity } from './entities/cartitem.entity';
import { EnrollmentEntity } from './entities/enrollment.entity';
import { UserEntity } from './entities/user.entity';
import { WishlistItemEntity } from './entities/wishlistitem.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([UserEntity, WishlistItemEntity, CartItemEntity, EnrollmentEntity])],
      resolvers: [
        { DTOClass: UserDTO, EntityClass: UserEntity, CreateDTOClass: UserCreateInputDTO, UpdateDTOClass: UserUpdateInputDTO },
        { DTOClass: WishlistItemDTO, EntityClass: WishlistItemEntity, CreateDTOClass: WishlistItemCreateInputDTO, update: { disabled: true } },
        { DTOClass: CartItemDTO, EntityClass: CartItemEntity, CreateDTOClass: CartItemCreateInputDTO, update: { disabled: true } },
        { DTOClass: EnrollmentDTO, EntityClass: EnrollmentEntity },
      ],
    }),
  ],
  providers: [],
})
export class UserModule {}
