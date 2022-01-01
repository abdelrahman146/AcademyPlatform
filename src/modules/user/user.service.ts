import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private userRepo: Repository<User>
    ) { }

    async create(userData: CreateUserDto) {
        const userWithSameEmail = await this.userRepo.findOne({ email: userData.email });
        if (userWithSameEmail) throw new ConflictException('Email Already Exists..');
        const user = this.userRepo.create(userData);
        return this.userRepo.save(user);
    }

    async findById(id: string) {
        const user = await this.userRepo.findOne(id);
        return user;
    }

    async findBySlug(slug: string) {
        const user = await this.userRepo.findOne({ slug });
        return user;
    }

    async findByEmail(email: string) {
        const user = await this.userRepo.findOne({ email });
        return user;
    }

    async update(id: string, userData: UpdateUserDto) {
        const user = await this.findById(id);
        if (!user) throw new NotFoundException('User Not Found ...');
        Object.assign(user, userData);
        return this.userRepo.save(user);
    }

    async updateSlug(id: string, slug: string) {
        const userWithSameSLug = await this.findBySlug(slug);
        if (userWithSameSLug) throw new ConflictException('Slug Already Exists..');
        const user = await this.findById(id);
        if (!user) throw new NotFoundException('User Not Found ...');
        user.slug = slug;
        return this.userRepo.save(user);
    }

    async updateEmail(id: string, email: string) {
        const userWithSameEmail = await this.findByEmail(email);
        if (userWithSameEmail) throw new ConflictException('Email Already Exists..');
        const user = await this.findById(id);
        if (!user) throw new NotFoundException('User Not Found ...');
        user.email = email;
        return this.userRepo.save(user);
    }

    async updatePassword(id: string, newpass: string) {
        const user = await this.findById(id);
        if (!user) throw new NotFoundException('User Not Found ...');
        user.password = newpass;
        return this.userRepo.save(user);
    }

}
