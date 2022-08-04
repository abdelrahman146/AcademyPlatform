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
exports.StaticsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const path_1 = require("path");
const pluralize = require("pluralize");
const fs = require("fs");
let StaticsService = class StaticsService {
    constructor(configService) {
        this.configService = configService;
    }
    findUserAvatar(name) {
        const [field, year, month] = name.split('-');
        const uploads_dir = this.configService.get('APPCONFIG.UPLOADS_DIR');
        const path = (0, path_1.join)(uploads_dir, pluralize(field), year, month, name);
        return fs.existsSync(path) && path;
    }
};
StaticsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], StaticsService);
exports.StaticsService = StaticsService;
//# sourceMappingURL=statics.service.js.map