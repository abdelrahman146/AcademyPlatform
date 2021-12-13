import { AuthorizationContext, OperationGroup } from '@nestjs-query/query-graphql';
import { UnauthorizedException } from '@nestjs/common';
import { UserContext } from 'src/modules/user/types/auth.types';
import { UserRole } from 'src/modules/user/types/user.types';

export function PublicReadTeacherUpdate(context: UserContext, authContext?: AuthorizationContext) {
  if (context.req.user.role === UserRole.admin) return {};
  if (authContext?.operationGroup === OperationGroup.CREATE && context.req.user.role !== UserRole.teacher)
    throw new UnauthorizedException();
  if (!authContext?.readonly) return { id: { eq: context.req.user.id } };
  return {};
}
