import { CanActivate, ExecutionContext } from "@nestjs/common";
import { SecurityService } from "src/lib/utils/security/security.service";
import { UserService } from "../user.service";
export declare class ValidPasswordGuard implements CanActivate {
    private securityService;
    private userService;
    constructor(securityService: SecurityService, userService: UserService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
