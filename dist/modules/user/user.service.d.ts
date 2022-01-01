import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { User } from './user.entity';
export declare class UserService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    create(userData: CreateUserDto): Promise<User>;
    findById(id: string): Promise<User>;
    findBySlug(slug: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    update(id: string, userData: UpdateUserDto): Promise<User>;
    updateSlug(id: string, slug: string): Promise<User>;
    updateEmail(id: string, email: string): Promise<User>;
    updatePassword(id: string, newpass: string): Promise<User>;
}
