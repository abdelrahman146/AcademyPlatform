import { Controller, Get, Param, UseInterceptors, UseGuards } from '@nestjs/common';
import { SerializeTo } from 'src/lib/pipes/serializer.interceptor';
import { ProfileDto } from '../dtos/profile.dto';
import { UserService } from '../user.service';

@Controller('profile')
export class ProfileController {

    constructor(
        private userService: UserService
    ) { }

    @Get('/:slug')
    @UseInterceptors(new SerializeTo(ProfileDto))
    getUser(@Param('slug') slug: string) {
        return this.userService.findBySlug(slug);
    }
}
