import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    private configService;
    constructor(authService: AuthService, configService: ConfigService);
    localLogin(req: Request, res: Response): Promise<{
        email: string;
        id: string;
        role: import("../user/types/userRole.type").UserRole;
        token: string;
    }>;
    logout(res: Response): Promise<{
        success: boolean;
    }>;
}
