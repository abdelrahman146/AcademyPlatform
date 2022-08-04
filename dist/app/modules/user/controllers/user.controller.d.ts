/// <reference types="multer" />
import { LoggedUser } from 'src/app/modules/auth/types/loggedUser.type';
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
    update(user: LoggedUser, body: UpdateUserDto, avatar: Express.Multer.File): Promise<import("../user.entity").User>;
    updatePassword(user: LoggedUser, body: UpdatePasswordDto): Promise<import("../user.entity").User>;
    updateEmail(user: LoggedUser, body: UpdateEmailDto): Promise<import("../user.entity").User>;
    updateSlug(user: LoggedUser, body: UpdateSlugDto): Promise<import("../user.entity").User>;
}
