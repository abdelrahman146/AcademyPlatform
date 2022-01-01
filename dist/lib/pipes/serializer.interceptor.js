"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializeTo = void 0;
const class_transformer_1 = require("class-transformer");
const rxjs_1 = require("rxjs");
class SerializeTo {
    constructor(dto) {
        this.dto = dto;
    }
    intercept(context, next) {
        return next.handle().pipe((0, rxjs_1.map)((data) => (0, class_transformer_1.plainToInstance)(this.dto, data, { excludeExtraneousValues: true })));
    }
}
exports.SerializeTo = SerializeTo;
//# sourceMappingURL=serializer.interceptor.js.map