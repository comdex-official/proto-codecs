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
exports.ExtendedPairVault = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.asset.v1beta1";
function createBaseExtendedPairVault() {
    return {
        id: long_1.default.UZERO,
        appId: long_1.default.UZERO,
        pairId: long_1.default.UZERO,
        stabilityFee: "",
        closingFee: "",
        liquidationPenalty: "",
        drawDownFee: "",
        isVaultActive: false,
        debtCeiling: "",
        debtFloor: "",
        isStableMintVault: false,
        minCr: "",
        pairName: "",
        assetOutOraclePrice: false,
        assetOutPrice: long_1.default.UZERO,
        minUsdValueLeft: long_1.default.UZERO,
        blockHeight: long_1.default.ZERO,
        blockTime: undefined,
    };
}
exports.ExtendedPairVault = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (!message.pairId.isZero()) {
            writer.uint32(24).uint64(message.pairId);
        }
        if (message.stabilityFee !== "") {
            writer.uint32(34).string(message.stabilityFee);
        }
        if (message.closingFee !== "") {
            writer.uint32(42).string(message.closingFee);
        }
        if (message.liquidationPenalty !== "") {
            writer.uint32(50).string(message.liquidationPenalty);
        }
        if (message.drawDownFee !== "") {
            writer.uint32(58).string(message.drawDownFee);
        }
        if (message.isVaultActive === true) {
            writer.uint32(64).bool(message.isVaultActive);
        }
        if (message.debtCeiling !== "") {
            writer.uint32(74).string(message.debtCeiling);
        }
        if (message.debtFloor !== "") {
            writer.uint32(82).string(message.debtFloor);
        }
        if (message.isStableMintVault === true) {
            writer.uint32(88).bool(message.isStableMintVault);
        }
        if (message.minCr !== "") {
            writer.uint32(98).string(message.minCr);
        }
        if (message.pairName !== "") {
            writer.uint32(106).string(message.pairName);
        }
        if (message.assetOutOraclePrice === true) {
            writer.uint32(112).bool(message.assetOutOraclePrice);
        }
        if (!message.assetOutPrice.isZero()) {
            writer.uint32(120).uint64(message.assetOutPrice);
        }
        if (!message.minUsdValueLeft.isZero()) {
            writer.uint32(128).uint64(message.minUsdValueLeft);
        }
        if (!message.blockHeight.isZero()) {
            writer.uint32(136).int64(message.blockHeight);
        }
        if (message.blockTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(146).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtendedPairVault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.appId = reader.uint64();
                    break;
                case 3:
                    message.pairId = reader.uint64();
                    break;
                case 4:
                    message.stabilityFee = reader.string();
                    break;
                case 5:
                    message.closingFee = reader.string();
                    break;
                case 6:
                    message.liquidationPenalty = reader.string();
                    break;
                case 7:
                    message.drawDownFee = reader.string();
                    break;
                case 8:
                    message.isVaultActive = reader.bool();
                    break;
                case 9:
                    message.debtCeiling = reader.string();
                    break;
                case 10:
                    message.debtFloor = reader.string();
                    break;
                case 11:
                    message.isStableMintVault = reader.bool();
                    break;
                case 12:
                    message.minCr = reader.string();
                    break;
                case 13:
                    message.pairName = reader.string();
                    break;
                case 14:
                    message.assetOutOraclePrice = reader.bool();
                    break;
                case 15:
                    message.assetOutPrice = reader.uint64();
                    break;
                case 16:
                    message.minUsdValueLeft = reader.uint64();
                    break;
                case 17:
                    message.blockHeight = reader.int64();
                    break;
                case 18:
                    message.blockTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            stabilityFee: isSet(object.stabilityFee)
                ? String(object.stabilityFee)
                : "",
            closingFee: isSet(object.closingFee) ? String(object.closingFee) : "",
            liquidationPenalty: isSet(object.liquidationPenalty)
                ? String(object.liquidationPenalty)
                : "",
            drawDownFee: isSet(object.drawDownFee) ? String(object.drawDownFee) : "",
            isVaultActive: isSet(object.isVaultActive)
                ? Boolean(object.isVaultActive)
                : false,
            debtCeiling: isSet(object.debtCeiling) ? String(object.debtCeiling) : "",
            debtFloor: isSet(object.debtFloor) ? String(object.debtFloor) : "",
            isStableMintVault: isSet(object.isStableMintVault)
                ? Boolean(object.isStableMintVault)
                : false,
            minCr: isSet(object.minCr) ? String(object.minCr) : "",
            pairName: isSet(object.pairName) ? String(object.pairName) : "",
            assetOutOraclePrice: isSet(object.assetOutOraclePrice)
                ? Boolean(object.assetOutOraclePrice)
                : false,
            assetOutPrice: isSet(object.assetOutPrice)
                ? long_1.default.fromValue(object.assetOutPrice)
                : long_1.default.UZERO,
            minUsdValueLeft: isSet(object.minUsdValueLeft)
                ? long_1.default.fromValue(object.minUsdValueLeft)
                : long_1.default.UZERO,
            blockHeight: isSet(object.blockHeight)
                ? long_1.default.fromValue(object.blockHeight)
                : long_1.default.ZERO,
            blockTime: isSet(object.blockTime)
                ? fromJsonTimestamp(object.blockTime)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.pairId !== undefined &&
            (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.stabilityFee !== undefined &&
            (obj.stabilityFee = message.stabilityFee);
        message.closingFee !== undefined && (obj.closingFee = message.closingFee);
        message.liquidationPenalty !== undefined &&
            (obj.liquidationPenalty = message.liquidationPenalty);
        message.drawDownFee !== undefined &&
            (obj.drawDownFee = message.drawDownFee);
        message.isVaultActive !== undefined &&
            (obj.isVaultActive = message.isVaultActive);
        message.debtCeiling !== undefined &&
            (obj.debtCeiling = message.debtCeiling);
        message.debtFloor !== undefined && (obj.debtFloor = message.debtFloor);
        message.isStableMintVault !== undefined &&
            (obj.isStableMintVault = message.isStableMintVault);
        message.minCr !== undefined && (obj.minCr = message.minCr);
        message.pairName !== undefined && (obj.pairName = message.pairName);
        message.assetOutOraclePrice !== undefined &&
            (obj.assetOutOraclePrice = message.assetOutOraclePrice);
        message.assetOutPrice !== undefined &&
            (obj.assetOutPrice = (message.assetOutPrice || long_1.default.UZERO).toString());
        message.minUsdValueLeft !== undefined &&
            (obj.minUsdValueLeft = (message.minUsdValueLeft || long_1.default.UZERO).toString());
        message.blockHeight !== undefined &&
            (obj.blockHeight = (message.blockHeight || long_1.default.ZERO).toString());
        message.blockTime !== undefined &&
            (obj.blockTime = message.blockTime.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = createBaseExtendedPairVault();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.pairId =
            object.pairId !== undefined && object.pairId !== null
                ? long_1.default.fromValue(object.pairId)
                : long_1.default.UZERO;
        message.stabilityFee = (_a = object.stabilityFee) !== null && _a !== void 0 ? _a : "";
        message.closingFee = (_b = object.closingFee) !== null && _b !== void 0 ? _b : "";
        message.liquidationPenalty = (_c = object.liquidationPenalty) !== null && _c !== void 0 ? _c : "";
        message.drawDownFee = (_d = object.drawDownFee) !== null && _d !== void 0 ? _d : "";
        message.isVaultActive = (_e = object.isVaultActive) !== null && _e !== void 0 ? _e : false;
        message.debtCeiling = (_f = object.debtCeiling) !== null && _f !== void 0 ? _f : "";
        message.debtFloor = (_g = object.debtFloor) !== null && _g !== void 0 ? _g : "";
        message.isStableMintVault = (_h = object.isStableMintVault) !== null && _h !== void 0 ? _h : false;
        message.minCr = (_j = object.minCr) !== null && _j !== void 0 ? _j : "";
        message.pairName = (_k = object.pairName) !== null && _k !== void 0 ? _k : "";
        message.assetOutOraclePrice = (_l = object.assetOutOraclePrice) !== null && _l !== void 0 ? _l : false;
        message.assetOutPrice =
            object.assetOutPrice !== undefined && object.assetOutPrice !== null
                ? long_1.default.fromValue(object.assetOutPrice)
                : long_1.default.UZERO;
        message.minUsdValueLeft =
            object.minUsdValueLeft !== undefined && object.minUsdValueLeft !== null
                ? long_1.default.fromValue(object.minUsdValueLeft)
                : long_1.default.UZERO;
        message.blockHeight =
            object.blockHeight !== undefined && object.blockHeight !== null
                ? long_1.default.fromValue(object.blockHeight)
                : long_1.default.ZERO;
        message.blockTime = (_m = object.blockTime) !== null && _m !== void 0 ? _m : undefined;
        return message;
    },
};
function toTimestamp(date) {
    const seconds = numberToLong(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds.toNumber() * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function numberToLong(number) {
    return long_1.default.fromNumber(number);
}
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=extendedPairVault.js.map