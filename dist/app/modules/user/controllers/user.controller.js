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
const passport_1 = require("@nestjs/passport");
const serializer_interceptor_1 = require("../../../../lib/pipes/serializer.interceptor");
const currentUser_decorator_1 = require("../../auth/decorators/currentUser.decorator");
const create_user_dto_1 = require("../dtos/create-user.dto");
const update_email_dto_1 = require("../dtos/update-email.dto");
const update_password_dto_1 = require("../dtos/update-password.dto");
const update_slug_dto_1 = require("../dtos/update-slug.dto");
const update_user_dto_1 = require("../dtos/update-user.dto");
const user_dto_1 = require("../dtos/user.dto");
const validPassword_guard_1 = require("../guards/validPassword.guard");
const user_service_1 = require("../user.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_options_1 = require("../../../../lib/utils/upload/multer-options");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    create(user) {
        return this.userService.create(user);
    }
    update(user, body, avatar) {
        if (avatar)
            body.avatar = avatar.filename;
        return this.userService.update(user.id, body);
    }
    updatePassword(user, body) {
        return this.userService.updatePassword(user.id, body.newpass);
    }
    updateEmail(user, body) {
        return this.userService.updateEmail(user.id, body.newEmail);
    }
    updateSlug(user, body) {
        return this.userService.updateSlug(user.id, body.slug);
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
    (0, common_1.Patch)('/update/info'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar', (0, multer_options_1.createMulterOptions)('uploads', {
        fileFilter: (req, file, cb) => {
            if (['png', 'jpg', 'jpeg'].includes(file.mimetype.split('/')[1])) {
                cb(null, true);
            }
            else {
                cb(new common_1.NotAcceptableException('File is not Valid'), false);
            }
        }
    })), new serializer_interceptor_1.SerializeTo(user_dto_1.UserDto)),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, currentUser_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_user_dto_1.UpdateUserDto, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('/update/password'),
    (0, common_1.UseInterceptors)(new serializer_interceptor_1.SerializeTo(user_dto_1.UserDto)),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), validPassword_guard_1.ValidPasswordGuard),
    __param(0, (0, currentUser_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_password_dto_1.UpdatePasswordDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updatePassword", null);
__decorate([
    (0, common_1.Patch)('/update/email'),
    (0, common_1.UseInterceptors)(new serializer_interceptor_1.SerializeTo(user_dto_1.UserDto)),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), validPassword_guard_1.ValidPasswordGuard),
    __param(0, (0, currentUser_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_email_dto_1.UpdateEmailDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateEmail", null);
__decorate([
    (0, common_1.Patch)('/update/slug'),
    (0, common_1.UseInterceptors)(new serializer_interceptor_1.SerializeTo(user_dto_1.UserDto)),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, currentUser_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_slug_dto_1.UpdateSlugDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateSlug", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map