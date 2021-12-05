import { Encrypt } from './encrypt.interface';
import bcrypt from 'bcrypt';
export class Bcrypt implements Encrypt {
  constructor(private saltRounds: number) {}
  async hash(text: string): Promise<string> {
    try {
      return await bcrypt.hash(text, this.saltRounds);
    } catch (e) {
      throw new Error(e);
    }
  }
  async validate(text: string, hash: string): Promise<boolean> {
    try {
      return await bcrypt.compare(text, hash);
    } catch (e) {
      throw new Error(e);
    }
  }
}
