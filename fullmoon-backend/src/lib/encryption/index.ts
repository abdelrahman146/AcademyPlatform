import { Bcrypt } from './bcrypt';

export default new Bcrypt(+process.env.SALT_ROUNDS);
