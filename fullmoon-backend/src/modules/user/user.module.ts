import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { CartItemDTO } from './dtos/cartitem.dto';
import { EnrollmentDTO } from './dtos/enrollment.dto';
import { UserDTO } from './dtos/user.dto';
import { WishlistItemDTO } from './dtos/wishlistitem.dto';

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
        { DTOClass: UserDTO, EntityClass: UserEntity },
        { DTOClass: WishlistItemDTO, EntityClass: WishlistItemEntity },
        { DTOClass: CartItemDTO, EntityClass: CartItemEntity },
        { DTOClass: EnrollmentDTO, EntityClass: EnrollmentEntity },
      ],
    }),
  ],
  providers: [],
})
export class UserModule {}
