import { UserContext } from 'src/modules/user/types/auth.types';

export function PrivateReadOwnerUpdate(context: UserContext) {
  if (context.req.user.role === 'admin') return {};
  return { id: { eq: context.req.user.id } };
}
