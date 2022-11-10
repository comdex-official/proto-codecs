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
exports.TimeWeightedAverage = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.market.v1beta1";
function createBaseTimeWeightedAverage() {
    return {
        assetId: long_1.default.UZERO,
        scriptId: long_1.default.UZERO,
        twa: long_1.default.UZERO,
        currentIndex: long_1.default.UZERO,
        isPriceActive: false,
        priceValue: [],
        discardedHeightDiff: long_1.default.ZERO,
    };
}
exports.TimeWeightedAverage = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (!message.scriptId.isZero()) {
            writer.uint32(16).uint64(message.scriptId);
        }
        if (!message.twa.isZero()) {
            writer.uint32(24).uint64(message.twa);
        }
        if (!message.currentIndex.isZero()) {
            writer.uint32(32).uint64(message.currentIndex);
        }
        if (message.isPriceActive === true) {
            writer.uint32(40).bool(message.isPriceActive);
        }
        writer.uint32(50).fork();
        for (const v of message.priceValue) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (!message.discardedHeightDiff.isZero()) {
            writer.uint32(56).int64(message.discardedHeightDiff);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimeWeightedAverage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint64();
                    break;
                case 2:
                    message.scriptId = reader.uint64();
                    break;
                case 3:
                    message.twa = reader.uint64();
                    break;
                case 4:
                    message.currentIndex = reader.uint64();
                    break;
                case 5:
                    message.isPriceActive = reader.bool();
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.priceValue.push(reader.uint64());
                        }
                    }
                    else {
                        message.priceValue.push(reader.uint64());
                    }
                    break;
                case 7:
                    message.discardedHeightDiff = reader.int64();
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
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            scriptId: isSet(object.scriptId)
                ? long_1.default.fromValue(object.scriptId)
                : long_1.default.UZERO,
            twa: isSet(object.twa) ? long_1.default.fromValue(object.twa) : long_1.default.UZERO,
            currentIndex: isSet(object.currentIndex)
                ? long_1.default.fromValue(object.currentIndex)
                : long_1.default.UZERO,
            isPriceActive: isSet(object.isPriceActive)
                ? Boolean(object.isPriceActive)
                : false,
            priceValue: Array.isArray(object === null || object === void 0 ? void 0 : object.priceValue)
                ? object.priceValue.map((e) => long_1.default.fromValue(e))
                : [],
            discardedHeightDiff: isSet(object.discardedHeightDiff)
                ? long_1.default.fromValue(object.discardedHeightDiff)
                : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.scriptId !== undefined &&
            (obj.scriptId = (message.scriptId || long_1.default.UZERO).toString());
        message.twa !== undefined &&
            (obj.twa = (message.twa || long_1.default.UZERO).toString());
        message.currentIndex !== undefined &&
            (obj.currentIndex = (message.currentIndex || long_1.default.UZERO).toString());
        message.isPriceActive !== undefined &&
            (obj.isPriceActive = message.isPriceActive);
        if (message.priceValue) {
            obj.priceValue = message.priceValue.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.priceValue = [];
        }
        message.discardedHeightDiff !== undefined &&
            (obj.discardedHeightDiff = (message.discardedHeightDiff || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTimeWeightedAverage();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.scriptId =
            object.scriptId !== undefined && object.scriptId !== null
                ? long_1.default.fromValue(object.scriptId)
                : long_1.default.UZERO;
        message.twa =
            object.twa !== undefined && object.twa !== null
                ? long_1.default.fromValue(object.twa)
                : long_1.default.UZERO;
        message.currentIndex =
            object.currentIndex !== undefined && object.currentIndex !== null
                ? long_1.default.fromValue(object.currentIndex)
                : long_1.default.UZERO;
        message.isPriceActive = (_a = object.isPriceActive) !== null && _a !== void 0 ? _a : false;
        message.priceValue = ((_b = object.priceValue) === null || _b === void 0 ? void 0 : _b.map((e) => long_1.default.fromValue(e))) || [];
        message.discardedHeightDiff =
            object.discardedHeightDiff !== undefined &&
                object.discardedHeightDiff !== null
                ? long_1.default.fromValue(object.discardedHeightDiff)
                : long_1.default.ZERO;
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
//# sourceMappingURL=market.js.map