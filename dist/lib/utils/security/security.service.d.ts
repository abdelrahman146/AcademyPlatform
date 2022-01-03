import { ConfigService } from '@nestjs/config';
export declare class SecurityService {
    private configService;
    constructor(configService: ConfigService);
    private hash;
    hashPassword(password: string): string;
    validatePassword(password: string, hashedPassword: string): boolean;
}
