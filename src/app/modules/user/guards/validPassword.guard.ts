import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { SecurityService } from "src/lib/utils/security/security.service";
import { UserService } from "../user.service";

@Injectable()
export class ValidPasswordGuard implements CanActivate {

    constructor(
        private securityService: SecurityService,
        private userService: UserService
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {

        const { user, body } = context.switchToHttp().getRequest();
        const { password } = await this.userService.findById(user.id);

        return body && body.password && this.securityService.validatePassword(body.password, password);
    }

}