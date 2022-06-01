"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedPairVault = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.asset.v1beta1";
function createBaseExtendedPairVault() {
    return {
        id: long_1.default.UZERO,
        appMappingId: long_1.default.UZERO,
        pairId: long_1.default.UZERO,
        liquidationRatio: "",
        stabilityFee: "",
        closingFee: "",
        liquidationPenalty: "",
        drawDownFee: "",
        isVaultActive: false,
        debtCeiling: "",
        debtFloor: "",
        isPsmPair: false,
        minCr: "",
        pairName: "",
        assetOutOraclePrice: false,
        assetOutPrice: long_1.default.UZERO,
    };
}
exports.ExtendedPairVault = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        if (message.stabilityFee !== "") {
            writer.uint32(42).string(message.stabilityFee);
        }
        if (message.closingFee !== "") {
            writer.uint32(50).string(message.closingFee);
        }
        if (message.liquidationPenalty !== "") {
            writer.uint32(58).string(message.liquidationPenalty);
        }
        if (message.drawDownFee !== "") {
            writer.uint32(66).string(message.drawDownFee);
        }
        if (message.isVaultActive === true) {
            writer.uint32(72).bool(message.isVaultActive);
        }
        if (message.debtCeiling !== "") {
            writer.uint32(82).string(message.debtCeiling);
        }
        if (message.debtFloor !== "") {
            writer.uint32(90).string(message.debtFloor);
        }
        if (message.isPsmPair === true) {
            writer.uint32(96).bool(message.isPsmPair);
        }
        if (message.minCr !== "") {
            writer.uint32(106).string(message.minCr);
        }
        if (message.pairName !== "") {
            writer.uint32(114).string(message.pairName);
        }
        if (message.assetOutOraclePrice === true) {
            writer.uint32(120).bool(message.assetOutOraclePrice);
        }
        if (!message.assetOutPrice.isZero()) {
            writer.uint32(128).uint64(message.assetOutPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.stabilityFee = reader.string();
                    break;
                case 6:
                    message.closingFee = reader.string();
                    break;
                case 7:
                    message.liquidationPenalty = reader.string();
                    break;
                case 8:
                    message.drawDownFee = reader.string();
                    break;
                case 9:
                    message.isVaultActive = reader.bool();
                    break;
                case 10:
                    message.debtCeiling = reader.string();
                    break;
                case 11:
                    message.debtFloor = reader.string();
                    break;
                case 12:
                    message.isPsmPair = reader.bool();
                    break;
                case 13:
                    message.minCr = reader.string();
                    break;
                case 14:
                    message.pairName = reader.string();
                    break;
                case 15:
                    message.assetOutOraclePrice = reader.bool();
                    break;
                case 16:
                    message.assetOutPrice = reader.uint64();
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
            isPsmPair: isSet(object.isPsmPair) ? Boolean(object.isPsmPair) : false,
            minCr: isSet(object.minCr) ? String(object.minCr) : "",
            pairName: isSet(object.pairName) ? String(object.pairName) : "",
            assetOutOraclePrice: isSet(object.assetOutOraclePrice)
                ? Boolean(object.assetOutOraclePrice)
                : false,
            assetOutPrice: isSet(object.assetOutPrice)
                ? long_1.default.fromValue(object.assetOutPrice)
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
        message.isPsmPair !== undefined && (obj.isPsmPair = message.isPsmPair);
        message.minCr !== undefined && (obj.minCr = message.minCr);
        message.pairName !== undefined && (obj.pairName = message.pairName);
        message.assetOutOraclePrice !== undefined &&
            (obj.assetOutOraclePrice = message.assetOutOraclePrice);
        message.assetOutPrice !== undefined &&
            (obj.assetOutPrice = (message.assetOutPrice || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
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
        message.stabilityFee = (_b = object.stabilityFee) !== null && _b !== void 0 ? _b : "";
        message.closingFee = (_c = object.closingFee) !== null && _c !== void 0 ? _c : "";
        message.liquidationPenalty = (_d = object.liquidationPenalty) !== null && _d !== void 0 ? _d : "";
        message.drawDownFee = (_e = object.drawDownFee) !== null && _e !== void 0 ? _e : "";
        message.isVaultActive = (_f = object.isVaultActive) !== null && _f !== void 0 ? _f : false;
        message.debtCeiling = (_g = object.debtCeiling) !== null && _g !== void 0 ? _g : "";
        message.debtFloor = (_h = object.debtFloor) !== null && _h !== void 0 ? _h : "";
        message.isPsmPair = (_j = object.isPsmPair) !== null && _j !== void 0 ? _j : false;
        message.minCr = (_k = object.minCr) !== null && _k !== void 0 ? _k : "";
        message.pairName = (_l = object.pairName) !== null && _l !== void 0 ? _l : "";
        message.assetOutOraclePrice = (_m = object.assetOutOraclePrice) !== null && _m !== void 0 ? _m : false;
        message.assetOutPrice =
            object.assetOutPrice !== undefined && object.assetOutPrice !== null
                ? long_1.default.fromValue(object.assetOutPrice)
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
//# sourceMappingURL=extendedPairVault.js.map