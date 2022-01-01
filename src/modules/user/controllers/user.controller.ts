import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { SerializeTo } from 'src/lib/pipes/serializer.interceptor';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateEmailDto } from '../dtos/update-email.dto';
import { UpdatePasswordDto } from '../dtos/update-password.dto';
import { UpdateSlugDto } from '../dtos/update-slug.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UserDto } from '../dtos/user.dto';
import { ValidPasswordGuard } from '../guards/validPassword.guard';
import { UserService } from '../user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) { }

    @Post('/signup')
    @UseInterceptors(new SerializeTo(UserDto))
    create(@Body() user: CreateUserDto) {
        return this.userService.create(user);
    }

    @Patch('/update/info/:id')
    @UseInterceptors(new SerializeTo(UserDto))
    update(@Param('id') id: string, @Body() user: UpdateUserDto) {
        return this.userService.update(id, user);
    }

    @Patch('/update/password/:id')
    @UseInterceptors(new SerializeTo(UserDto))
    @UseGuards(ValidPasswordGuard)
    updatePassword(@Param('id') id: string, @Body() body: UpdatePasswordDto) {
        return this.userService.updatePassword(id, body.newpass);
    }

    @Patch('/update/email/:id')
    @UseInterceptors(new SerializeTo(UserDto))
    @UseGuards(ValidPasswordGuard)
    updateEmail(@Param('id') id: string, @Body() body: UpdateEmailDto) {
        return this.userService.updateEmail(id, body.newEmail);
    }

    @Patch('/update/slug/:id')
    @UseInterceptors(new SerializeTo(UserDto))
    updateSlug(@Param('id') id: string, @Body() body: UpdateSlugDto) {
        return this.userService.updateSlug(id, body.slug);
    }

}
