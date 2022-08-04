import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SecurityService } from 'src/lib/utils/security/security.service';
export declare class AuthService {
    private userService;
    private jwtService;
    private securityService;
    constructor(userService: UserService, jwtService: JwtService, securityService: SecurityService);
    validateLocalLogin(email: string, password: string): Promise<User>;
    createToken(user: User): Promise<{
        email: string;
        id: string;
        role: import("../user/types/userRole.type").UserRole;
        token: string;
    }>;
}
