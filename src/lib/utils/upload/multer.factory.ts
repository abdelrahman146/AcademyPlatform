import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { diskStorage } from 'multer';
import { join } from 'path';
import * as fs from 'fs';
import * as pluralize from 'pluralize';
import e from 'express';
import { ConfigService } from '@nestjs/config';

export default (configService: ConfigService): MulterOptions => {

    const uploads_dir = configService.get('APPCONFIG.UPLOADS_DIR');
    const date = new Date();
    const year = date.getFullYear().toString(36);
    const month = (date.getMonth() + 1).toString(36);

    return {
        storage: diskStorage({
            filename: (req: e.Request, file: Express.Multer.File, cb: (error: Error, filename?: string) => void) => {
                try {
                    const filename = file.fieldname + '-' + year + '-' + month + '-' +
                        Math.round(Math.random() * 1E16) + '.' + file.mimetype.split('/')[1];
                    console.log(filename);
                    cb(null, filename);
                } catch (e) {
                    cb(e);
                }
            },
            destination: (req: e.Request, file: Express.Multer.File, cb: (error: Error, filename?: string) => void) => {
                try {
                    const dest = join(uploads_dir, pluralize(file.fieldname), year, month);
                    fs.mkdirSync(dest, { recursive: true });
                    console.log(dest);
                    cb(null, dest);
                } catch (e) {
                    cb(e);
                }
            },
        }),
    };

};