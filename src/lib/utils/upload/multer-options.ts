import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import e from "express";
import { diskStorage } from "multer";
import { join } from "path";
import * as pluralize from "pluralize";
import * as fs from 'fs';

export function createMulterOptions(upload_dir, localOptions: MulterOptions = {}): MulterOptions {
    const date = new Date();
    const year = date.getFullYear().toString(36);
    const month = (date.getMonth() + 1).toString(36);
    const multerOptions = {
        storage: diskStorage({
            filename: (req: e.Request, file: Express.Multer.File, cb: (error: Error, filename?: string) => void) => {
                try {
                    const filename = file.fieldname + '-' + year + '-' + month + '-' +
                        Math.round(Math.random() * 1E16) + '.' + file.mimetype.split('/')[1];
                    cb(null, filename);
                } catch (e) {
                    cb(e);
                }
            },
            destination: (req: e.Request, file: Express.Multer.File, cb: (error: Error, filename?: string) => void) => {
                try {
                    const dest = join(upload_dir, pluralize(file.fieldname), year, month);
                    fs.mkdirSync(dest, { recursive: true });
                    cb(null, dest);
                } catch (e) {
                    cb(e);
                }
            },
        }),
    };
    return Object.assign(multerOptions, localOptions);
}