import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SecurityService } from 'src/lib/utils/security/security.service';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private securityService: SecurityService
    ) { }

    async validateLocalLogin(email: string, password: string) {

        const user = await this.userService.findByEmail(email);
        if (!user) throw new NotFoundException('User Not Found...');
        if (!this.securityService.validatePassword(password, user.password)) throw new UnauthorizedException('Password is not valid');

        return user;
    }

    async createToken(user: User) {
        const payload = { email: user.email, sub: user.id, role: user.role };
        return {
            email: user.email,
            id: user.id,
            role: user.role,
            token: this.jwtService.sign(payload)
        };
    }
}
