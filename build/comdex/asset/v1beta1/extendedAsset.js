"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedAsset = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.asset.v1beta1";
function createBaseExtendedAsset() {
    return {
        id: long_1.default.UZERO,
        assetId: long_1.default.UZERO,
        collateralWeight: "",
        liquidationThreshold: "",
        rate: "",
        isBridgedAsset: false,
    };
}
exports.ExtendedAsset = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        if (message.collateralWeight !== "") {
            writer.uint32(26).string(message.collateralWeight);
        }
        if (message.liquidationThreshold !== "") {
            writer.uint32(34).string(message.liquidationThreshold);
        }
        if (message.rate !== "") {
            writer.uint32(42).string(message.rate);
        }
        if (message.isBridgedAsset === true) {
            writer.uint32(48).bool(message.isBridgedAsset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtendedAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.assetId = reader.uint64();
                    break;
                case 3:
                    message.collateralWeight = reader.string();
                    break;
                case 4:
                    message.liquidationThreshold = reader.string();
                    break;
                case 5:
                    message.rate = reader.string();
                    break;
                case 6:
                    message.isBridgedAsset = reader.bool();
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
            assetId: isSet(object.assetId)
                ? long_1.default.fromString(object.assetId)
                : long_1.default.UZERO,
            collateralWeight: isSet(object.collateralWeight)
                ? String(object.collateralWeight)
                : "",
            liquidationThreshold: isSet(object.liquidationThreshold)
                ? String(object.liquidationThreshold)
                : "",
            rate: isSet(object.rate) ? String(object.rate) : "",
            isBridgedAsset: isSet(object.isBridgedAsset)
                ? Boolean(object.isBridgedAsset)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.collateralWeight !== undefined &&
            (obj.collateralWeight = message.collateralWeight);
        message.liquidationThreshold !== undefined &&
            (obj.liquidationThreshold = message.liquidationThreshold);
        message.rate !== undefined && (obj.rate = message.rate);
        message.isBridgedAsset !== undefined &&
            (obj.isBridgedAsset = message.isBridgedAsset);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseExtendedAsset();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.collateralWeight = (_a = object.collateralWeight) !== null && _a !== void 0 ? _a : "";
        message.liquidationThreshold = (_b = object.liquidationThreshold) !== null && _b !== void 0 ? _b : "";
        message.rate = (_c = object.rate) !== null && _c !== void 0 ? _c : "";
        message.isBridgedAsset = (_d = object.isBridgedAsset) !== null && _d !== void 0 ? _d : false;
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
//# sourceMappingURL=extendedAsset.js.map