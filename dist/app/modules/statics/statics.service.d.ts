import { ConfigService } from '@nestjs/config';
export declare class StaticsService {
    private configService;
    constructor(configService: ConfigService);
    findUserAvatar(name: string): string;
}
