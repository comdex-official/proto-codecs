"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asset = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.asset.v1beta1";
function createBaseAsset() {
    return {
        id: long_1.default.UZERO,
        name: "",
        denom: "",
        decimals: "",
        isOnChain: false,
        isOraclePriceRequired: false,
        isCdpMintable: false,
    };
}
exports.Asset = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        if (message.decimals !== "") {
            writer.uint32(34).string(message.decimals);
        }
        if (message.isOnChain === true) {
            writer.uint32(40).bool(message.isOnChain);
        }
        if (message.isOraclePriceRequired === true) {
            writer.uint32(48).bool(message.isOraclePriceRequired);
        }
        if (message.isCdpMintable === true) {
            writer.uint32(56).bool(message.isCdpMintable);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.decimals = reader.string();
                    break;
                case 5:
                    message.isOnChain = reader.bool();
                    break;
                case 6:
                    message.isOraclePriceRequired = reader.bool();
                    break;
                case 7:
                    message.isCdpMintable = reader.bool();
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
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
            name: isSet(object.name) ? String(object.name) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            decimals: isSet(object.decimals) ? String(object.decimals) : "",
            isOnChain: isSet(object.isOnChain) ? Boolean(object.isOnChain) : false,
            isOraclePriceRequired: isSet(object.isOraclePriceRequired)
                ? Boolean(object.isOraclePriceRequired)
                : false,
            isCdpMintable: isSet(object.isCdpMintable)
                ? Boolean(object.isCdpMintable)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.name !== undefined && (obj.name = message.name);
        message.denom !== undefined && (obj.denom = message.denom);
        message.decimals !== undefined && (obj.decimals = message.decimals);
        message.isOnChain !== undefined && (obj.isOnChain = message.isOnChain);
        message.isOraclePriceRequired !== undefined &&
            (obj.isOraclePriceRequired = message.isOraclePriceRequired);
        message.isCdpMintable !== undefined &&
            (obj.isCdpMintable = message.isCdpMintable);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseAsset();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        message.decimals = (_c = object.decimals) !== null && _c !== void 0 ? _c : "";
        message.isOnChain = (_d = object.isOnChain) !== null && _d !== void 0 ? _d : false;
        message.isOraclePriceRequired = (_e = object.isOraclePriceRequired) !== null && _e !== void 0 ? _e : false;
        message.isCdpMintable = (_f = object.isCdpMintable) !== null && _f !== void 0 ? _f : false;
        return message;
    },
};
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=asset.js.map