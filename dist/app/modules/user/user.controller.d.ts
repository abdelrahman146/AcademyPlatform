import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(body: {
        name: string;
        email: string;
    }): import("./user.service").User | {
        success: boolean;
    };
    getAll(): {
        [id: number]: import("./user.service").User;
    };
    getUser(id: number): import("./user.service").User;
    updateUser(id: number, body: {
        name?: string;
        email?: string;
    }): import("./user.service").User;
    deleteUser(id: number): {
        success: boolean;
    };
}
