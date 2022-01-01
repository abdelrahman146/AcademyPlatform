import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/modules/user/dtos/create-user.dto';
import { UserService } from 'src/modules/user/user.service';

@Controller('auth')
export class AuthController {

    constructor(
        private userService: UserService
    ) { }

}
