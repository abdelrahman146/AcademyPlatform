
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { LoggedUser } from '../types/loggedUser.type';

export const CurrentUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return request.user as LoggedUser;
    },
);