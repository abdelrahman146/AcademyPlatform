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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const serializer_interceptor_1 = require("../../../lib/pipes/serializer.interceptor");
const create_user_dto_1 = require("../dtos/create-user.dto");
const update_email_dto_1 = require("../dtos/update-email.dto");
const update_password_dto_1 = require("../dtos/update-password.dto");
const update_slug_dto_1 = require("../dtos/update-slug.dto");
const update_user_dto_1 = require("../dtos/update-user.dto");
const user_dto_1 = require("../dtos/user.dto");
const validPassword_guard_1 = require("../guards/validPassword.guard");
const user_service_1 = require("../user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    create(user) {
        return this.userService.create(user);
    }
    update(id, user) {
        return this.userService.update(id, user);
    }
    updatePassword(id, body) {
        return this.userService.updatePassword(id, body.newpass);
    }
    updateEmail(id, body) {
        return this.userService.updateEmail(id, body.newEmail);
    }
    updateSlug(id, body) {
        return this.userService.updateSlug(id, body.slug);
    }
};
__decorate([
    (0, common_1.Post)('/signup'),
    (0, common_1.UseInterceptors)(new serializer_interceptor_1.SerializeTo(user_dto_1.UserDto)),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('/update/info/:id'),
    (0, common_1.UseInterceptors)(new serializer_interceptor_1.SerializeTo(user_dto_1.UserDto)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('/update/password/:id'),
    (0, common_1.UseInterceptors)(new serializer_interceptor_1.SerializeTo(user_dto_1.UserDto)),
    (0, common_1.UseGuards)(validPassword_guard_1.ValidPasswordGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_password_dto_1.UpdatePasswordDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updatePassword", null);
__decorate([
    (0, common_1.Patch)('/update/email/:id'),
    (0, common_1.UseInterceptors)(new serializer_interceptor_1.SerializeTo(user_dto_1.UserDto)),
    (0, common_1.UseGuards)(validPassword_guard_1.ValidPasswordGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_email_dto_1.UpdateEmailDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateEmail", null);
__decorate([
    (0, common_1.Patch)('/update/slug/:id'),
    (0, common_1.UseInterceptors)(new serializer_interceptor_1.SerializeTo(user_dto_1.UserDto)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_slug_dto_1.UpdateSlugDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateSlug", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map