import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [UserModule],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
