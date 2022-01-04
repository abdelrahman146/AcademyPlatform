"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = require("multer");
const path_1 = require("path");
const fs = require("fs");
const pluralize = require("pluralize");
exports.default = (configService) => {
    const uploads_dir = configService.get('APPCONFIG.UPLOADS_DIR');
    const date = new Date();
    const year = date.getFullYear().toString(36);
    const month = (date.getMonth() + 1).toString(36);
    return {
        storage: (0, multer_1.diskStorage)({
            filename: (req, file, cb) => {
                try {
                    const filename = file.fieldname + '-' + year + '-' + month + '-' +
                        Math.round(Math.random() * 1E16) + '.' + file.mimetype.split('/')[1];
                    console.log(filename);
                    cb(null, filename);
                }
                catch (e) {
                    cb(e);
                }
            },
            destination: (req, file, cb) => {
                try {
                    const dest = (0, path_1.join)(uploads_dir, pluralize(file.fieldname), year, month);
                    fs.mkdirSync(dest, { recursive: true });
                    console.log(dest);
                    cb(null, dest);
                }
                catch (e) {
                    cb(e);
                }
            },
        }),
    };
};
//# sourceMappingURL=multer.factory.js.map