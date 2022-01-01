import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateEmailDto } from '../dtos/update-email.dto';
import { UpdatePasswordDto } from '../dtos/update-password.dto';
import { UpdateSlugDto } from '../dtos/update-slug.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UserService } from '../user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(user: CreateUserDto): Promise<import("../user.entity").User>;
    update(id: string, user: UpdateUserDto): Promise<import("../user.entity").User>;
    updatePassword(id: string, body: UpdatePasswordDto): Promise<import("../user.entity").User>;
    updateEmail(id: string, body: UpdateEmailDto): Promise<import("../user.entity").User>;
    updateSlug(id: string, body: UpdateSlugDto): Promise<import("../user.entity").User>;
}
