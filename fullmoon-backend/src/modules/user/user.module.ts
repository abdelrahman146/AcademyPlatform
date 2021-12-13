import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql.jwt.guard';
import { CartItemCreateInputDTO } from './dtos/cartitem/cartitem.create.dto';
import { CartItemDTO } from './dtos/cartitem/cartitem.dto';
import { EnrollmentCreateInputDTO } from './dtos/enrollment/enrollment.create.dto';
import { EnrollmentDTO } from './dtos/enrollment/enrollment.dto';
import { EnrollmentUpdateInputDTO } from './dtos/enrollment/enrollment.update';
import { UserCreateInputDTO } from './dtos/user/user.create.dto';
import { UserDTO } from './dtos/user/user.dto';
import { UserUpdateInputDTO } from './dtos/user/user.update.dto';
import { WishlistItemCreateInputDTO } from './dtos/wishlistitem/wishlistitem.create.dto';
import { WishlistItemDTO } from './dtos/wishlistitem/wishlistitem.dto';

// Models
import { CartItemEntity } from './entities/cartitem.entity';
import { EnrollmentEntity } from './entities/enrollment.entity';
import { UserEntity } from './entities/user.entity';
import { WishlistItemEntity } from './entities/wishlistitem.entity';
import { UserService } from './services/user.service';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([UserEntity, WishlistItemEntity, CartItemEntity, EnrollmentEntity])],
      resolvers: [
        {
          DTOClass: UserDTO,
          EntityClass: UserEntity,
          CreateDTOClass: UserCreateInputDTO,
          UpdateDTOClass: UserUpdateInputDTO,
          guards: [GqlAuthGuard],
        },
        {
          DTOClass: WishlistItemDTO,
          EntityClass: WishlistItemEntity,
          CreateDTOClass: WishlistItemCreateInputDTO,
          update: { disabled: true },
          guards: [GqlAuthGuard],
        },
        {
          DTOClass: CartItemDTO,
          EntityClass: CartItemEntity,
          CreateDTOClass: CartItemCreateInputDTO,
          update: { disabled: true },
          guards: [GqlAuthGuard],
        },
        {
          DTOClass: EnrollmentDTO,
          EntityClass: EnrollmentEntity,
          CreateDTOClass: EnrollmentCreateInputDTO,
          UpdateDTOClass: EnrollmentUpdateInputDTO,
          guards: [GqlAuthGuard],
        },
      ],
    }),
  ],
  exports: [UserService],
  providers: [UserService],
})
export class UserModule {}
