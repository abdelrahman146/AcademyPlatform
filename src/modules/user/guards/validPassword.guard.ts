import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { UserService } from "../user.service";

@Injectable()
export class ValidPasswordGuard implements CanActivate {

    constructor(
        private userService: UserService
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const { password } = context.switchToHttp().getRequest().body;
        const { id } = context.switchToHttp().getRequest().params;
        const user = await this.userService.findById(id);
        return password && password === user.password;
    }

}