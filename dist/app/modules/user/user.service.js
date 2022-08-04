"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const security_service_1 = require("../../../lib/utils/security/security.service");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UserService = class UserService {
    constructor(securityService, userRepo) {
        this.securityService = securityService;
        this.userRepo = userRepo;
    }
    async create(userData) {
        const userWithSameEmail = await this.userRepo.findOne({ email: userData.email });
        if (userWithSameEmail)
            throw new common_1.ConflictException('Email Already Exists..');
        userData.password = this.securityService.hashPassword(userData.password);
        const user = this.userRepo.create(userData);
        return this.userRepo.save(user);
    }
    async findById(id) {
        const user = await this.userRepo.findOne(id);
        return user;
    }
    async findBySlug(slug) {
        const user = await this.userRepo.findOne({ slug });
        return user;
    }
    async findByEmail(email) {
        const user = await this.userRepo.findOne({ email });
        return user;
    }
    async update(id, userData) {
        const user = await this.findById(id);
        if (!user)
            throw new common_1.NotFoundException('User Not Found ...');
        Object.assign(user, userData);
        return this.userRepo.save(user);
    }
    async updateSlug(id, slug) {
        const userWithSameSLug = await this.findBySlug(slug);
        if (userWithSameSLug)
            throw new common_1.ConflictException('Slug Already Exists..');
        const user = await this.findById(id);
        if (!user)
            throw new common_1.NotFoundException('User Not Found ...');
        user.slug = slug;
        return this.userRepo.save(user);
    }
    async updateEmail(id, email) {
        const userWithSameEmail = await this.findByEmail(email);
        if (userWithSameEmail)
            throw new common_1.ConflictException('Email Already Exists..');
        const user = await this.findById(id);
        if (!user)
            throw new common_1.NotFoundException('User Not Found ...');
        user.email = email;
        return this.userRepo.save(user);
    }
    async updatePassword(id, newpass) {
        const user = await this.findById(id);
        if (!user)
            throw new common_1.NotFoundException('User Not Found ...');
        user.password = this.securityService.hashPassword(newpass);
        return this.userRepo.save(user);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [security_service_1.SecurityService,
        typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map