import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';


@Injectable()
export class SecurityService {

    constructor(
        private configService: ConfigService
    ) { }

    private hash(password: string, salt: string) {

        const hash = crypto.pbkdf2Sync(password, salt, 100, 64, 'sha512').toString('base64');

        return hash;
    }

    hashPassword(password: string): string {

        const salt = crypto.randomBytes(16).toString('base64');
        const hash = this.hash(password, salt);

        return hash + '.' + salt;
    }

    validatePassword(password: string, hashedPassword: string): boolean {

        const [hash, salt] = hashedPassword.split('.');
        password = this.hash(password, salt);

        return password === hash;
    }
}
