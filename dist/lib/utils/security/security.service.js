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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const crypto = require("crypto");
let SecurityService = class SecurityService {
    constructor(configService) {
        this.configService = configService;
    }
    hash(password, salt) {
        const hash = crypto.pbkdf2Sync(password, salt, 100, 64, 'sha512').toString('base64');
        return hash;
    }
    hashPassword(password) {
        const salt = crypto.randomBytes(16).toString('base64');
        const hash = this.hash(password, salt);
        return hash + '.' + salt;
    }
    validatePassword(password, hashedPassword) {
        const [hash, salt] = hashedPassword.split('.');
        password = this.hash(password, salt);
        return password === hash;
    }
};
SecurityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], SecurityService);
exports.SecurityService = SecurityService;
//# sourceMappingURL=security.service.js.map