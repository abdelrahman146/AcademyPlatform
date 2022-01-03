import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import * as pluralize from 'pluralize';
import * as fs from 'fs';

@Injectable()
export class StaticsService {

    constructor(
        private configService: ConfigService
    ) { }

    findUserAvatar(name: string) {
        const [field, year, month] = name.split('-');
        const uploads_dir = this.configService.get<string>('APPCONFIG.UPLOADS_DIR');
        const path = join(uploads_dir, pluralize(field), year, month, name);

        return fs.existsSync(path) && path;
    }
}
