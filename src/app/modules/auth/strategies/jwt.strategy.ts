import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { Payload } from '../types/payload.type';
import { LoggedUser } from '../types/loggedUser.type';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        private configService: ConfigService
    ) {
        super({
            jwtFromRequest: (req: Request) => {
                if (!req || !req.cookies) return null;
                return req.cookies[this.configService.get<string>('APPCONFIG.COOKIE_TOKEN')];
            },
            ignoreExpiration: false,
            secretOrKey: configService.get('APPCONFIG.JWT_SECRET')
        });
    }

    validate(payload: Payload): LoggedUser {
        return {
            email: payload.email,
            id: payload.sub,
            role: payload.role,
        };
    }
}