"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_controller_1 = require("./controllers/user.controller");
const user_entity_1 = require("./user.entity");
const user_service_1 = require("./user.service");
const profile_controller_1 = require("./controllers/profile.controller");
const validPassword_guard_1 = require("./guards/validPassword.guard");
const authorizedRoles_guard_1 = require("./guards/authorizedRoles.guard");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        controllers: [user_controller_1.UserController, profile_controller_1.ProfileController],
        providers: [user_service_1.UserService, validPassword_guard_1.ValidPasswordGuard, authorizedRoles_guard_1.AuthorizedRolesGuard],
        exports: [user_service_1.UserService, authorizedRoles_guard_1.AuthorizedRolesGuard, validPassword_guard_1.ValidPasswordGuard]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map