import { AuthorizationContext } from '@nestjs-query/query-graphql';
import { UnauthorizedException } from '@nestjs/common';
import { UserContext } from 'src/modules/user/types/auth.types';

export function PublicReadAdminUpdate(context: UserContext, authContext?: AuthorizationContext) {
  if (context.req.user.role === 'admin') return {};
  if (!authContext?.readonly) throw new UnauthorizedException();
  return {};
}
