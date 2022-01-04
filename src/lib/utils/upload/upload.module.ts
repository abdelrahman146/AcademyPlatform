import { Global, Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import multerFactory from './multer.factory';

@Global()
@Module({
    imports: [
        MulterModule.registerAsync({
            useFactory: multerFactory,
            inject: [ConfigService]
        })
    ],
    exports: [MulterModule]
})

export class UploadModule { }
