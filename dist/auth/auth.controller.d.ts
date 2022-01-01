import { CreateUserDto } from 'src/user/dtos/create-user.dto';
import { UserService } from 'src/user/user.service';
export declare class AuthController {
    private userService;
    constructor(userService: UserService);
    createUser(user: CreateUserDto): Promise<import("../user/user.entity").User>;
}
