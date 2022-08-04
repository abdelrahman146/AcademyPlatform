import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateLocalLogin(email: string, password: string): Promise<User>;
    createToken(user: User): Promise<{
        email: string;
        id: string;
        role: import("../user/types/userRole.type").UserRole;
        token: string;
    }>;
}
