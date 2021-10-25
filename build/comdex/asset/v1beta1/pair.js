"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pair = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.asset.v1beta1";
const basePair = {
    id: long_1.default.UZERO,
    assetIn: long_1.default.UZERO,
    assetOut: long_1.default.UZERO,
    liquidationRatio: "",
};
exports.Pair = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.assetIn.isZero()) {
            writer.uint32(16).uint64(message.assetIn);
        }
        if (!message.assetOut.isZero()) {
            writer.uint32(24).uint64(message.assetOut);
        }
        if (message.liquidationRatio !== "") {
            writer.uint32(34).string(message.liquidationRatio);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePair };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.assetIn = reader.uint64();
                    break;
                case 3:
                    message.assetOut = reader.uint64();
                    break;
                case 4:
                    message.liquidationRatio = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePair };
        if (object.id !== undefined && object.id !== null) {
            message.id = long_1.default.fromString(object.id);
        }
        else {
            message.id = long_1.default.UZERO;
        }
        if (object.assetIn !== undefined && object.assetIn !== null) {
            message.assetIn = long_1.default.fromString(object.assetIn);
        }
        else {
            message.assetIn = long_1.default.UZERO;
        }
        if (object.assetOut !== undefined && object.assetOut !== null) {
            message.assetOut = long_1.default.fromString(object.assetOut);
        }
        else {
            message.assetOut = long_1.default.UZERO;
        }
        if (object.liquidationRatio !== undefined &&
            object.liquidationRatio !== null) {
            message.liquidationRatio = String(object.liquidationRatio);
        }
        else {
            message.liquidationRatio = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.assetIn !== undefined &&
            (obj.assetIn = (message.assetIn || long_1.default.UZERO).toString());
        message.assetOut !== undefined &&
            (obj.assetOut = (message.assetOut || long_1.default.UZERO).toString());
        message.liquidationRatio !== undefined &&
            (obj.liquidationRatio = message.liquidationRatio);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePair };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = long_1.default.UZERO;
        }
        if (object.assetIn !== undefined && object.assetIn !== null) {
            message.assetIn = object.assetIn;
        }
        else {
            message.assetIn = long_1.default.UZERO;
        }
        if (object.assetOut !== undefined && object.assetOut !== null) {
            message.assetOut = object.assetOut;
        }
        else {
            message.assetOut = long_1.default.UZERO;
        }
        if (object.liquidationRatio !== undefined &&
            object.liquidationRatio !== null) {
            message.liquidationRatio = object.liquidationRatio;
        }
        else {
            message.liquidationRatio = "";
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=pair.js.map