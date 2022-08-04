import { StaticsService } from './statics.service';
import { Response } from 'express';
export declare class StaticsController {
    private staticsService;
    constructor(staticsService: StaticsService);
    getUserAvatar(name: string, res: Response): void;
}
