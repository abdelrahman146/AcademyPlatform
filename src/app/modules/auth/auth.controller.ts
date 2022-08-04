import { Req, Res, Controller, Post, UseGuards, Delete } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { User } from '../user/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
        private configService: ConfigService
    ) { }

    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async localLogin(@Req() req: Request, @Res({ passthrough: true }) res: Response) {

        const payload = await this.authService.createToken(req.user as User);
        res.cookie(this.configService.get<string>('APPCONFIG.COOKIE_TOKEN'), payload.token, {
            httpOnly: true,
            domain: this.configService.get<string>('APPCONFIG.HOST')
        });

        return payload;
    }

    @Delete('/logout')
    async logout(@Res({ passthrough: true }) res: Response) {
        res.cookie(this.configService.get<string>('APPCONFIG.COOKIE_TOKEN'), '', { maxAge: 1 });
        return { success: true };
    }

}


