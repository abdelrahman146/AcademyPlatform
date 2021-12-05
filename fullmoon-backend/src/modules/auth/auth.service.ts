import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { sign } from 'jsonwebtoken';
import { UserEntity } from '../user/entities/user.entity';
import { UserService } from '../user/services/user.service';
import { Payload } from '../user/types/user.types';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService, private jwtService: JwtService) {}

  async validateUser(payload: Payload): Promise<Partial<UserEntity> | null> {
    return await this.usersService.findOneByPayload(payload);
  }

  async signPayload(payload: Payload) {
    return sign(payload, process.env.SECRET_KEY, { expiresIn: '7d' });
  }
}
