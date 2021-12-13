import { AuthorizationContext } from '@nestjs-query/query-graphql';
import { UnauthorizedException } from '@nestjs/common';
import { UserContext } from 'src/modules/user/types/auth.types';
import { UserRole } from 'src/modules/user/types/user.types';

export function EnrolledReadTeacherUpdate(context: UserContext, authContext?: AuthorizationContext) {
  if (!authContext?.readonly && context.req.user.role != UserRole.teacher) {
    throw new UnauthorizedException();
  }
  if (!authContext?.readonly && context.req.user.role === UserRole.teacher) {
    return { teacherId: { eq: context.req.user.id } };
  } else {
    return {};
  }
}
