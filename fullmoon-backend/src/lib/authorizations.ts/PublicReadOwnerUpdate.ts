import { AuthorizationContext } from '@nestjs-query/query-graphql';
import { UserContext } from 'src/modules/user/types/auth.types';

export function PublicReadOwnerUpdate(context: UserContext, authContext?: AuthorizationContext) {
  if (context.req.user.role === 'admin') return {};
  if (!authContext?.readonly) return { id: { eq: context.req.user.id } };
  return {};
}
