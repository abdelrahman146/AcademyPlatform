import { Controller, Get, NotFoundException, Param, Res } from '@nestjs/common';
import { StaticsService } from './statics.service';
import { Response } from 'express';


@Controller('statics')
export class StaticsController {
    constructor(
        private staticsService: StaticsService
    ) { }

    @Get('/avatar/:name')
    getUserAvatar(@Param('name') name: string, @Res() res: Response) {
        const path = this.staticsService.findUserAvatar(name);
        if (path) {
            res.status(200).sendFile(path);
        } else {
            throw new NotFoundException('File Not Found ...');
        }
    }
}
