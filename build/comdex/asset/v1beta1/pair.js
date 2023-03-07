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
exports.AssetPair = exports.PairInfo = exports.Pair = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.asset.v1beta1";
function createBasePair() {
    return { id: long_1.default.UZERO, assetIn: long_1.default.UZERO, assetOut: long_1.default.UZERO };
}
exports.Pair = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.assetIn.isZero()) {
            writer.uint32(16).uint64(message.assetIn);
        }
        if (!message.assetOut.isZero()) {
            writer.uint32(24).uint64(message.assetOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePair();
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
            assetIn: isSet(object.assetIn)
                ? long_1.default.fromValue(object.assetIn)
                : long_1.default.UZERO,
            assetOut: isSet(object.assetOut)
                ? long_1.default.fromValue(object.assetOut)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.assetIn !== undefined &&
            (obj.assetIn = (message.assetIn || long_1.default.UZERO).toString());
        message.assetOut !== undefined &&
            (obj.assetOut = (message.assetOut || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePair();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.assetIn =
            object.assetIn !== undefined && object.assetIn !== null
                ? long_1.default.fromValue(object.assetIn)
                : long_1.default.UZERO;
        message.assetOut =
            object.assetOut !== undefined && object.assetOut !== null
                ? long_1.default.fromValue(object.assetOut)
                : long_1.default.UZERO;
        return message;
    },
};
function createBasePairInfo() {
    return {
        id: long_1.default.UZERO,
        assetIn: long_1.default.UZERO,
        denomIn: "",
        assetOut: long_1.default.UZERO,
        denomOut: "",
    };
}
exports.PairInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.assetIn.isZero()) {
            writer.uint32(16).uint64(message.assetIn);
        }
        if (message.denomIn !== "") {
            writer.uint32(26).string(message.denomIn);
        }
        if (!message.assetOut.isZero()) {
            writer.uint32(32).uint64(message.assetOut);
        }
        if (message.denomOut !== "") {
            writer.uint32(42).string(message.denomOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePairInfo();
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
                    message.denomIn = reader.string();
                    break;
                case 4:
                    message.assetOut = reader.uint64();
                    break;
                case 5:
                    message.denomOut = reader.string();
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
            assetIn: isSet(object.assetIn)
                ? long_1.default.fromValue(object.assetIn)
                : long_1.default.UZERO,
            denomIn: isSet(object.denomIn) ? String(object.denomIn) : "",
            assetOut: isSet(object.assetOut)
                ? long_1.default.fromValue(object.assetOut)
                : long_1.default.UZERO,
            denomOut: isSet(object.denomOut) ? String(object.denomOut) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.assetIn !== undefined &&
            (obj.assetIn = (message.assetIn || long_1.default.UZERO).toString());
        message.denomIn !== undefined && (obj.denomIn = message.denomIn);
        message.assetOut !== undefined &&
            (obj.assetOut = (message.assetOut || long_1.default.UZERO).toString());
        message.denomOut !== undefined && (obj.denomOut = message.denomOut);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePairInfo();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.assetIn =
            object.assetIn !== undefined && object.assetIn !== null
                ? long_1.default.fromValue(object.assetIn)
                : long_1.default.UZERO;
        message.denomIn = (_a = object.denomIn) !== null && _a !== void 0 ? _a : "";
        message.assetOut =
            object.assetOut !== undefined && object.assetOut !== null
                ? long_1.default.fromValue(object.assetOut)
                : long_1.default.UZERO;
        message.denomOut = (_b = object.denomOut) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseAssetPair() {
    return {
        id: long_1.default.UZERO,
        name: "",
        denom: "",
        decimals: "",
        isOnChain: false,
        isOraclePriceRequired: false,
        isCdpMintable: false,
        assetOut: long_1.default.UZERO,
    };
}
exports.AssetPair = {
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
        if (!message.assetOut.isZero()) {
            writer.uint32(64).uint64(message.assetOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetPair();
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
                case 8:
                    message.assetOut = reader.uint64();
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
            assetOut: isSet(object.assetOut)
                ? long_1.default.fromValue(object.assetOut)
                : long_1.default.UZERO,
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
        message.assetOut !== undefined &&
            (obj.assetOut = (message.assetOut || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseAssetPair();
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
        message.assetOut =
            object.assetOut !== undefined && object.assetOut !== null
                ? long_1.default.fromValue(object.assetOut)
                : long_1.default.UZERO;
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
//# sourceMappingURL=pair.js.map