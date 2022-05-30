"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asset = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.asset.v1beta1";
function createBaseAsset() {
    return {
        id: long_1.default.UZERO,
        name: "",
        denom: "",
        decimals: long_1.default.ZERO,
        isOnchain: false,
    };
}
exports.Asset = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        if (!message.decimals.isZero()) {
            writer.uint32(32).int64(message.decimals);
        }
        if (message.isOnchain === true) {
            writer.uint32(40).bool(message.isOnchain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                case 4:
                    message.decimals = reader.int64();
                    break;
                case 5:
                    message.isOnchain = reader.bool();
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
            id: isSet(object.id) ? long_1.default.fromString(object.id) : long_1.default.UZERO,
            name: isSet(object.name) ? String(object.name) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            decimals: isSet(object.decimals)
                ? long_1.default.fromString(object.decimals)
                : long_1.default.ZERO,
            isOnchain: isSet(object.isOnchain) ? Boolean(object.isOnchain) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.name !== undefined && (obj.name = message.name);
        message.denom !== undefined && (obj.denom = message.denom);
        message.decimals !== undefined &&
            (obj.decimals = (message.decimals || long_1.default.ZERO).toString());
        message.isOnchain !== undefined && (obj.isOnchain = message.isOnchain);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAsset();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        message.decimals =
            object.decimals !== undefined && object.decimals !== null
                ? long_1.default.fromValue(object.decimals)
                : long_1.default.ZERO;
        message.isOnchain = (_c = object.isOnchain) !== null && _c !== void 0 ? _c : false;
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
//# sourceMappingURL=asset.js.map