"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.protobufPackage = "comdex.asset.v1beta1";
function createBaseExtendedPairVault() {
    return {
        id: long_1.default.UZERO,
        appMappingId: long_1.default.UZERO,
        pairId: long_1.default.UZERO,
        liquidationRatio: "",
        unliquidationRatio: "",
        stabilityFee: "",
        closingFee: "",
        liquidationPenalty: "",
        creationFee: "",
        isVaultActive: false,
        debtCeiling: "",
        debtFloor: "",
        isPsmPair: false,
        minCr: "",
        pairName: "",
        assetOutOraclePrice: false,
        asssetOutPrice: long_1.default.UZERO,
    };
}
exports.ExtendedPairVault = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.appMappingId.isZero()) {
            writer.uint32(16).uint64(message.appMappingId);
        }
        if (!message.pairId.isZero()) {
            writer.uint32(24).uint64(message.pairId);
        }
        if (message.liquidationRatio !== "") {
            writer.uint32(34).string(message.liquidationRatio);
        }
        if (message.unliquidationRatio !== "") {
            writer.uint32(42).string(message.unliquidationRatio);
        }
        if (message.stabilityFee !== "") {
            writer.uint32(50).string(message.stabilityFee);
        }
        if (message.closingFee !== "") {
            writer.uint32(58).string(message.closingFee);
        }
        if (message.liquidationPenalty !== "") {
            writer.uint32(66).string(message.liquidationPenalty);
        }
        if (message.creationFee !== "") {
            writer.uint32(74).string(message.creationFee);
        }
        if (message.isVaultActive === true) {
            writer.uint32(80).bool(message.isVaultActive);
        }
        if (message.debtCeiling !== "") {
            writer.uint32(90).string(message.debtCeiling);
        }
        if (message.debtFloor !== "") {
            writer.uint32(98).string(message.debtFloor);
        }
        if (message.isPsmPair === true) {
            writer.uint32(104).bool(message.isPsmPair);
        }
        if (message.minCr !== "") {
            writer.uint32(114).string(message.minCr);
        }
        if (message.pairName !== "") {
            writer.uint32(122).string(message.pairName);
        }
        if (message.assetOutOraclePrice === true) {
            writer.uint32(128).bool(message.assetOutOraclePrice);
        }
        if (!message.asssetOutPrice.isZero()) {
            writer.uint32(136).uint64(message.asssetOutPrice);
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
                    message.appMappingId = reader.uint64();
                    break;
                case 3:
                    message.pairId = reader.uint64();
                    break;
                case 4:
                    message.liquidationRatio = reader.string();
                    break;
                case 5:
                    message.unliquidationRatio = reader.string();
                    break;
                case 6:
                    message.stabilityFee = reader.string();
                    break;
                case 7:
                    message.closingFee = reader.string();
                    break;
                case 8:
                    message.liquidationPenalty = reader.string();
                    break;
                case 9:
                    message.creationFee = reader.string();
                    break;
                case 10:
                    message.isVaultActive = reader.bool();
                    break;
                case 11:
                    message.debtCeiling = reader.string();
                    break;
                case 12:
                    message.debtFloor = reader.string();
                    break;
                case 13:
                    message.isPsmPair = reader.bool();
                    break;
                case 14:
                    message.minCr = reader.string();
                    break;
                case 15:
                    message.pairName = reader.string();
                    break;
                case 16:
                    message.assetOutOraclePrice = reader.bool();
                    break;
                case 17:
                    message.asssetOutPrice = reader.uint64();
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
            appMappingId: isSet(object.appMappingId)
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO,
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            liquidationRatio: isSet(object.liquidationRatio)
                ? String(object.liquidationRatio)
                : "",
            unliquidationRatio: isSet(object.unliquidationRatio)
                ? String(object.unliquidationRatio)
                : "",
            stabilityFee: isSet(object.stabilityFee)
                ? String(object.stabilityFee)
                : "",
            closingFee: isSet(object.closingFee) ? String(object.closingFee) : "",
            liquidationPenalty: isSet(object.liquidationPenalty)
                ? String(object.liquidationPenalty)
                : "",
            creationFee: isSet(object.creationFee) ? String(object.creationFee) : "",
            isVaultActive: isSet(object.isVaultActive)
                ? Boolean(object.isVaultActive)
                : false,
            debtCeiling: isSet(object.debtCeiling) ? String(object.debtCeiling) : "",
            debtFloor: isSet(object.debtFloor) ? String(object.debtFloor) : "",
            isPsmPair: isSet(object.isPsmPair) ? Boolean(object.isPsmPair) : false,
            minCr: isSet(object.minCr) ? String(object.minCr) : "",
            pairName: isSet(object.pairName) ? String(object.pairName) : "",
            assetOutOraclePrice: isSet(object.assetOutOraclePrice)
                ? Boolean(object.assetOutOraclePrice)
                : false,
            asssetOutPrice: isSet(object.asssetOutPrice)
                ? long_1.default.fromValue(object.asssetOutPrice)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        message.pairId !== undefined &&
            (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.liquidationRatio !== undefined &&
            (obj.liquidationRatio = message.liquidationRatio);
        message.unliquidationRatio !== undefined &&
            (obj.unliquidationRatio = message.unliquidationRatio);
        message.stabilityFee !== undefined &&
            (obj.stabilityFee = message.stabilityFee);
        message.closingFee !== undefined && (obj.closingFee = message.closingFee);
        message.liquidationPenalty !== undefined &&
            (obj.liquidationPenalty = message.liquidationPenalty);
        message.creationFee !== undefined &&
            (obj.creationFee = message.creationFee);
        message.isVaultActive !== undefined &&
            (obj.isVaultActive = message.isVaultActive);
        message.debtCeiling !== undefined &&
            (obj.debtCeiling = message.debtCeiling);
        message.debtFloor !== undefined && (obj.debtFloor = message.debtFloor);
        message.isPsmPair !== undefined && (obj.isPsmPair = message.isPsmPair);
        message.minCr !== undefined && (obj.minCr = message.minCr);
        message.pairName !== undefined && (obj.pairName = message.pairName);
        message.assetOutOraclePrice !== undefined &&
            (obj.assetOutOraclePrice = message.assetOutOraclePrice);
        message.asssetOutPrice !== undefined &&
            (obj.asssetOutPrice = (message.asssetOutPrice || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = createBaseExtendedPairVault();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.pairId =
            object.pairId !== undefined && object.pairId !== null
                ? long_1.default.fromValue(object.pairId)
                : long_1.default.UZERO;
        message.liquidationRatio = (_a = object.liquidationRatio) !== null && _a !== void 0 ? _a : "";
        message.unliquidationRatio = (_b = object.unliquidationRatio) !== null && _b !== void 0 ? _b : "";
        message.stabilityFee = (_c = object.stabilityFee) !== null && _c !== void 0 ? _c : "";
        message.closingFee = (_d = object.closingFee) !== null && _d !== void 0 ? _d : "";
        message.liquidationPenalty = (_e = object.liquidationPenalty) !== null && _e !== void 0 ? _e : "";
        message.creationFee = (_f = object.creationFee) !== null && _f !== void 0 ? _f : "";
        message.isVaultActive = (_g = object.isVaultActive) !== null && _g !== void 0 ? _g : false;
        message.debtCeiling = (_h = object.debtCeiling) !== null && _h !== void 0 ? _h : "";
        message.debtFloor = (_j = object.debtFloor) !== null && _j !== void 0 ? _j : "";
        message.isPsmPair = (_k = object.isPsmPair) !== null && _k !== void 0 ? _k : false;
        message.minCr = (_l = object.minCr) !== null && _l !== void 0 ? _l : "";
        message.pairName = (_m = object.pairName) !== null && _m !== void 0 ? _m : "";
        message.assetOutOraclePrice = (_o = object.assetOutOraclePrice) !== null && _o !== void 0 ? _o : false;
        message.asssetOutPrice =
            object.asssetOutPrice !== undefined && object.asssetOutPrice !== null
                ? long_1.default.fromValue(object.asssetOutPrice)
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
//# sourceMappingURL=extendedPairVault.js.map