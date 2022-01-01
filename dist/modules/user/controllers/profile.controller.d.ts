import { UserService } from '../user.service';
export declare class ProfileController {
    private userService;
    constructor(userService: UserService);
    getUser(slug: string): Promise<import("../user.entity").User>;
}
