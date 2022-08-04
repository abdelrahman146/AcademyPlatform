import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(user: CreateUserDto): Promise<import("./user.entity").User>;
    update(id: string, user: UpdateUserDto): Promise<import("./user.entity").User>;
    delete(id: string): Promise<import("./user.entity").User[]>;
}
