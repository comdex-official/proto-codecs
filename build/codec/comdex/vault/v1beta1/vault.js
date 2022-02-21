"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vault = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.vault.v1beta1";
const baseVault = {
    id: long_1.default.UZERO,
    pairId: long_1.default.UZERO,
    owner: "",
    amountIn: "",
    amountOut: "",
};
exports.Vault = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.pairId.isZero()) {
            writer.uint32(16).uint64(message.pairId);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        if (message.amountIn !== "") {
            writer.uint32(34).string(message.amountIn);
        }
        if (message.amountOut !== "") {
            writer.uint32(42).string(message.amountOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVault };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.pairId = reader.uint64();
                    break;
                case 3:
                    message.owner = reader.string();
                    break;
                case 4:
                    message.amountIn = reader.string();
                    break;
                case 5:
                    message.amountOut = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseVault };
        if (object.id !== undefined && object.id !== null) {
            message.id = long_1.default.fromString(object.id);
        }
        else {
            message.id = long_1.default.UZERO;
        }
        if (object.pairId !== undefined && object.pairId !== null) {
            message.pairId = long_1.default.fromString(object.pairId);
        }
        else {
            message.pairId = long_1.default.UZERO;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.amountIn !== undefined && object.amountIn !== null) {
            message.amountIn = String(object.amountIn);
        }
        else {
            message.amountIn = "";
        }
        if (object.amountOut !== undefined && object.amountOut !== null) {
            message.amountOut = String(object.amountOut);
        }
        else {
            message.amountOut = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.pairId !== undefined &&
            (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.amountIn !== undefined && (obj.amountIn = message.amountIn);
        message.amountOut !== undefined && (obj.amountOut = message.amountOut);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseVault };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = long_1.default.UZERO;
        }
        if (object.pairId !== undefined && object.pairId !== null) {
            message.pairId = object.pairId;
        }
        else {
            message.pairId = long_1.default.UZERO;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.amountIn !== undefined && object.amountIn !== null) {
            message.amountIn = object.amountIn;
        }
        else {
            message.amountIn = "";
        }
        if (object.amountOut !== undefined && object.amountOut !== null) {
            message.amountOut = object.amountOut;
        }
        else {
            message.amountOut = "";
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=vault.js.map