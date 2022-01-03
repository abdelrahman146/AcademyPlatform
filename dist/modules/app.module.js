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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const user_entity_1 = require("./user/user.entity");
const user_module_1 = require("./user/user.module");
const config_1 = require("@nestjs/config");
const configLoader_1 = require("../config/configLoader");
const cookieParser = require("cookie-parser");
let AppModule = class AppModule {
    constructor(configService) {
        this.configService = configService;
    }
    configure(consumer) {
        consumer.apply(cookieParser(this.configService.get("APPCONFIG.COOKIE_SECRET"))).forRoutes("*");
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [configLoader_1.default],
                isGlobal: true
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'devdb.sqlite',
                entities: [user_entity_1.User],
                synchronize: true,
            }),
            user_module_1.UserModule, auth_module_1.AuthModule
        ],
        providers: [
            {
                provide: core_1.APP_PIPE,
                useValue: new common_1.ValidationPipe({
                    whitelist: true
                })
            }
        ]
    }),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map