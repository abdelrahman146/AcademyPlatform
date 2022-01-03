import { ConfigService } from '@nestjs/config';
import { MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express';
export declare class UploadService implements MulterOptionsFactory {
    private configService;
    constructor(configService: ConfigService);
    createMulterOptions(): MulterModuleOptions;
}
