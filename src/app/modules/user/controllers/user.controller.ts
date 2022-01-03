import { Body, Controller, NotAcceptableException, Patch, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SerializeTo } from 'src/lib/pipes/serializer.interceptor';
import { CurrentUser } from 'src/app/modules/auth/decorators/currentUser.decorator';
import { LoggedUser } from 'src/app/modules/auth/types/loggedUser.type';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateEmailDto } from '../dtos/update-email.dto';
import { UpdatePasswordDto } from '../dtos/update-password.dto';
import { UpdateSlugDto } from '../dtos/update-slug.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UserDto } from '../dtos/user.dto';
import { ValidPasswordGuard } from '../guards/validPassword.guard';
import { UserService } from '../user.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { createMulterOptions } from 'src/lib/utils/upload/multer-options';

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

    @Patch('/update/info')
    @UseInterceptors(FileInterceptor('avatar', createMulterOptions('uploads', {
        fileFilter: (req: Request, file: Express.Multer.File, cb) => {

            if (['png', 'jpg', 'jpeg'].includes(file.mimetype.split('/')[1])) {
                cb(null, true);
            } else {
                cb(new NotAcceptableException('File is not Valid'), false);
            }

        }
    })), new SerializeTo(UserDto))
    @UseGuards(AuthGuard('jwt'))
    update(@CurrentUser() user: LoggedUser, @Body() body: UpdateUserDto, @UploadedFile() avatar: Express.Multer.File) {
        if (avatar) body.avatar = avatar.filename;
        return this.userService.update(user.id, body);
    }

    @Patch('/update/password')
    @UseInterceptors(new SerializeTo(UserDto))
    @UseGuards(AuthGuard('jwt'), ValidPasswordGuard)
    updatePassword(@CurrentUser() user: LoggedUser, @Body() body: UpdatePasswordDto) {
        return this.userService.updatePassword(user.id, body.newpass);
    }

    @Patch('/update/email')
    @UseInterceptors(new SerializeTo(UserDto))
    @UseGuards(AuthGuard('jwt'), ValidPasswordGuard)
    updateEmail(@CurrentUser() user: LoggedUser, @Body() body: UpdateEmailDto) {
        return this.userService.updateEmail(user.id, body.newEmail);
    }

    @Patch('/update/slug')
    @UseInterceptors(new SerializeTo(UserDto))
    @UseGuards(AuthGuard('jwt'))
    updateSlug(@CurrentUser() user: LoggedUser, @Body() body: UpdateSlugDto) {
        return this.userService.updateSlug(user.id, body.slug);
    }

}

