"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatFilter = void 0;
function FormatFilter(file, formats) {
    return formats.includes(file.mimetype.split('/')[1]);
}
exports.FormatFilter = FormatFilter;
//# sourceMappingURL=file-format.filter.js.map