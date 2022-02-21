"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Market = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.oracle.v1beta1";
function createBaseMarket() {
    return { symbol: "", scriptId: long_1.default.UZERO, rates: long_1.default.UZERO };
}
exports.Market = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.symbol !== "") {
            writer.uint32(10).string(message.symbol);
        }
        if (!message.scriptId.isZero()) {
            writer.uint32(16).uint64(message.scriptId);
        }
        if (!message.rates.isZero()) {
            writer.uint32(24).uint64(message.rates);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.symbol = reader.string();
                    break;
                case 2:
                    message.scriptId = reader.uint64();
                    break;
                case 3:
                    message.rates = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            scriptId: isSet(object.scriptId)
                ? long_1.default.fromString(object.scriptId)
                : long_1.default.UZERO,
            rates: isSet(object.rates) ? long_1.default.fromString(object.rates) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.scriptId !== undefined &&
            (obj.scriptId = (message.scriptId || long_1.default.UZERO).toString());
        message.rates !== undefined &&
            (obj.rates = (message.rates || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMarket();
        message.symbol = (_a = object.symbol) !== null && _a !== void 0 ? _a : "";
        message.scriptId =
            object.scriptId !== undefined && object.scriptId !== null
                ? long_1.default.fromValue(object.scriptId)
                : long_1.default.UZERO;
        message.rates =
            object.rates !== undefined && object.rates !== null
                ? long_1.default.fromValue(object.rates)
                : long_1.default.UZERO;
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=oracle.js.map