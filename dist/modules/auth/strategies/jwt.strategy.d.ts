import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Payload } from '../types/payload.type';
import { LoggedUser } from '../types/loggedUser.type';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    constructor(configService: ConfigService);
    validate(payload: Payload): LoggedUser;
}
export {};
