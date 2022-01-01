import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controllers/user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';
import { ProfileController } from './controllers/profile.controller';
import { ValidPasswordGuard } from './guards/validPassword.guard';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController, ProfileController],
  providers: [UserService, ValidPasswordGuard],
  exports: [UserService]
})
export class UserModule { }
