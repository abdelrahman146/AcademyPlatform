import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { User } from './user.entity';
export declare class UserService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    create(userData: CreateUserDto): Promise<User>;
    findById(id: string): Promise<User>;
    update(id: string, userData: UpdateUserDto): Promise<User>;
    delete(id: string): Promise<User[]>;
}
