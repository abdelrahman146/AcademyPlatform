"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMulterOptions = void 0;
const multer_1 = require("multer");
const path_1 = require("path");
const pluralize = require("pluralize");
const fs = require("fs");
function createMulterOptions(upload_dir, localOptions = {}) {
    const date = new Date();
    const year = date.getFullYear().toString(36);
    const month = (date.getMonth() + 1).toString(36);
    const multerOptions = {
        storage: (0, multer_1.diskStorage)({
            filename: (req, file, cb) => {
                try {
                    const filename = file.fieldname + '-' + year + '-' + month + '-' +
                        Math.round(Math.random() * 1E16) + '.' + file.mimetype.split('/')[1];
                    cb(null, filename);
                }
                catch (e) {
                    cb(e);
                }
            },
            destination: (req, file, cb) => {
                try {
                    const dest = (0, path_1.join)(upload_dir, pluralize(file.fieldname), year, month);
                    fs.mkdirSync(dest, { recursive: true });
                    cb(null, dest);
                }
                catch (e) {
                    cb(e);
                }
            },
        }),
    };
    return Object.assign(multerOptions, localOptions);
}
exports.createMulterOptions = createMulterOptions;
//# sourceMappingURL=multer-options.js.map