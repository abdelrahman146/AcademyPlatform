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
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const multer_1 = require("multer");
const path_1 = require("path");
const pluralize_1 = require("pluralize");
let UploadService = class UploadService {
    constructor(configService) {
        this.configService = configService;
    }
    createMulterOptions() {
        const upload_dir = this.configService.get('APPCONFIG.UPLOADS_DIR');
        const date = new Date();
        const year = date.getFullYear().toString(36);
        const month = date.getFullYear().toString(36);
        return {
            storage: (0, multer_1.diskStorage)({
                filename: (req, file, cb) => {
                    try {
                        const filename = file.fieldname + '-' + year + '-' + month + '-' + Math.round(Math.random() * 1E16);
                        console.log(filename);
                        cb(null, filename);
                    }
                    catch (e) {
                        cb(e);
                    }
                },
                destination: (req, file, cb) => {
                    try {
                        const dest = (0, path_1.join)(upload_dir, (0, pluralize_1.default)(file.fieldname), year, month);
                        console.log(dest);
                        cb(null, dest);
                    }
                    catch (e) {
                        cb(e);
                    }
                },
            }),
        };
    }
};
UploadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], UploadService);
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map