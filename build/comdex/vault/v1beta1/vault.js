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
exports.PairStatisticData = exports.StableMintVault = exports.MintedDataMap = exports.TvlLockedDataMap = exports.AppExtendedPairVaultMappingData = exports.OwnerAppExtendedPairVaultMappingData = exports.Vault = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.vault.v1beta1";
function createBaseVault() {
    return {
        id: long_1.default.UZERO,
        appId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        owner: "",
        amountIn: "",
        amountOut: "",
        createdAt: undefined,
        interestAccumulated: "",
        closingFeeAccumulated: "",
        blockHeight: long_1.default.ZERO,
        blockTime: undefined,
    };
}
exports.Vault = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(24).uint64(message.extendedPairVaultId);
        }
        if (message.owner !== "") {
            writer.uint32(34).string(message.owner);
        }
        if (message.amountIn !== "") {
            writer.uint32(42).string(message.amountIn);
        }
        if (message.amountOut !== "") {
            writer.uint32(50).string(message.amountOut);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.interestAccumulated !== "") {
            writer.uint32(66).string(message.interestAccumulated);
        }
        if (message.closingFeeAccumulated !== "") {
            writer.uint32(74).string(message.closingFeeAccumulated);
        }
        if (!message.blockHeight.isZero()) {
            writer.uint32(80).int64(message.blockHeight);
        }
        if (message.blockTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVault();
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
                    message.extendedPairVaultId = reader.uint64();
                    break;
                case 4:
                    message.owner = reader.string();
                    break;
                case 5:
                    message.amountIn = reader.string();
                    break;
                case 6:
                    message.amountOut = reader.string();
                    break;
                case 7:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.interestAccumulated = reader.string();
                    break;
                case 9:
                    message.closingFeeAccumulated = reader.string();
                    break;
                case 10:
                    message.blockHeight = reader.int64();
                    break;
                case 11:
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
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO,
            owner: isSet(object.owner) ? String(object.owner) : "",
            amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
            amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
            createdAt: isSet(object.createdAt)
                ? fromJsonTimestamp(object.createdAt)
                : undefined,
            interestAccumulated: isSet(object.interestAccumulated)
                ? String(object.interestAccumulated)
                : "",
            closingFeeAccumulated: isSet(object.closingFeeAccumulated)
                ? String(object.closingFeeAccumulated)
                : "",
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
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.amountIn !== undefined && (obj.amountIn = message.amountIn);
        message.amountOut !== undefined && (obj.amountOut = message.amountOut);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.interestAccumulated !== undefined &&
            (obj.interestAccumulated = message.interestAccumulated);
        message.closingFeeAccumulated !== undefined &&
            (obj.closingFeeAccumulated = message.closingFeeAccumulated);
        message.blockHeight !== undefined &&
            (obj.blockHeight = (message.blockHeight || long_1.default.ZERO).toString());
        message.blockTime !== undefined &&
            (obj.blockTime = message.blockTime.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseVault();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.amountIn = (_b = object.amountIn) !== null && _b !== void 0 ? _b : "";
        message.amountOut = (_c = object.amountOut) !== null && _c !== void 0 ? _c : "";
        message.createdAt = (_d = object.createdAt) !== null && _d !== void 0 ? _d : undefined;
        message.interestAccumulated = (_e = object.interestAccumulated) !== null && _e !== void 0 ? _e : "";
        message.closingFeeAccumulated = (_f = object.closingFeeAccumulated) !== null && _f !== void 0 ? _f : "";
        message.blockHeight =
            object.blockHeight !== undefined && object.blockHeight !== null
                ? long_1.default.fromValue(object.blockHeight)
                : long_1.default.ZERO;
        message.blockTime = (_g = object.blockTime) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
function createBaseOwnerAppExtendedPairVaultMappingData() {
    return {
        owner: "",
        appId: long_1.default.UZERO,
        extendedPairId: long_1.default.UZERO,
        vaultId: long_1.default.UZERO,
    };
}
exports.OwnerAppExtendedPairVaultMappingData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (!message.extendedPairId.isZero()) {
            writer.uint32(24).uint64(message.extendedPairId);
        }
        if (!message.vaultId.isZero()) {
            writer.uint32(32).uint64(message.vaultId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOwnerAppExtendedPairVaultMappingData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.appId = reader.uint64();
                    break;
                case 3:
                    message.extendedPairId = reader.uint64();
                    break;
                case 4:
                    message.vaultId = reader.uint64();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            extendedPairId: isSet(object.extendedPairId)
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO,
            vaultId: isSet(object.vaultId)
                ? long_1.default.fromValue(object.vaultId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.extendedPairId !== undefined &&
            (obj.extendedPairId = (message.extendedPairId || long_1.default.UZERO).toString());
        message.vaultId !== undefined &&
            (obj.vaultId = (message.vaultId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOwnerAppExtendedPairVaultMappingData();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.extendedPairId =
            object.extendedPairId !== undefined && object.extendedPairId !== null
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO;
        message.vaultId =
            object.vaultId !== undefined && object.vaultId !== null
                ? long_1.default.fromValue(object.vaultId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseAppExtendedPairVaultMappingData() {
    return {
        appId: long_1.default.UZERO,
        extendedPairId: long_1.default.UZERO,
        vaultIds: [],
        tokenMintedAmount: "",
        collateralLockedAmount: "",
    };
}
exports.AppExtendedPairVaultMappingData = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.extendedPairId.isZero()) {
            writer.uint32(16).uint64(message.extendedPairId);
        }
        writer.uint32(26).fork();
        for (const v of message.vaultIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.tokenMintedAmount !== "") {
            writer.uint32(34).string(message.tokenMintedAmount);
        }
        if (message.collateralLockedAmount !== "") {
            writer.uint32(42).string(message.collateralLockedAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppExtendedPairVaultMappingData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.extendedPairId = reader.uint64();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.vaultIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.vaultIds.push(reader.uint64());
                    }
                    break;
                case 4:
                    message.tokenMintedAmount = reader.string();
                    break;
                case 5:
                    message.collateralLockedAmount = reader.string();
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            extendedPairId: isSet(object.extendedPairId)
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO,
            vaultIds: Array.isArray(object === null || object === void 0 ? void 0 : object.vaultIds)
                ? object.vaultIds.map((e) => long_1.default.fromValue(e))
                : [],
            tokenMintedAmount: isSet(object.tokenMintedAmount)
                ? String(object.tokenMintedAmount)
                : "",
            collateralLockedAmount: isSet(object.collateralLockedAmount)
                ? String(object.collateralLockedAmount)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.extendedPairId !== undefined &&
            (obj.extendedPairId = (message.extendedPairId || long_1.default.UZERO).toString());
        if (message.vaultIds) {
            obj.vaultIds = message.vaultIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.vaultIds = [];
        }
        message.tokenMintedAmount !== undefined &&
            (obj.tokenMintedAmount = message.tokenMintedAmount);
        message.collateralLockedAmount !== undefined &&
            (obj.collateralLockedAmount = message.collateralLockedAmount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAppExtendedPairVaultMappingData();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.extendedPairId =
            object.extendedPairId !== undefined && object.extendedPairId !== null
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO;
        message.vaultIds = ((_a = object.vaultIds) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        message.tokenMintedAmount = (_b = object.tokenMintedAmount) !== null && _b !== void 0 ? _b : "";
        message.collateralLockedAmount = (_c = object.collateralLockedAmount) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseTvlLockedDataMap() {
    return { assetDenom: "", collateralLockedAmount: "" };
}
exports.TvlLockedDataMap = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.assetDenom !== "") {
            writer.uint32(10).string(message.assetDenom);
        }
        if (message.collateralLockedAmount !== "") {
            writer.uint32(18).string(message.collateralLockedAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTvlLockedDataMap();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetDenom = reader.string();
                    break;
                case 2:
                    message.collateralLockedAmount = reader.string();
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
            assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : "",
            collateralLockedAmount: isSet(object.collateralLockedAmount)
                ? String(object.collateralLockedAmount)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
        message.collateralLockedAmount !== undefined &&
            (obj.collateralLockedAmount = message.collateralLockedAmount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTvlLockedDataMap();
        message.assetDenom = (_a = object.assetDenom) !== null && _a !== void 0 ? _a : "";
        message.collateralLockedAmount = (_b = object.collateralLockedAmount) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMintedDataMap() {
    return { assetDenom: "", mintedAmount: "" };
}
exports.MintedDataMap = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.assetDenom !== "") {
            writer.uint32(10).string(message.assetDenom);
        }
        if (message.mintedAmount !== "") {
            writer.uint32(18).string(message.mintedAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMintedDataMap();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetDenom = reader.string();
                    break;
                case 2:
                    message.mintedAmount = reader.string();
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
            assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : "",
            mintedAmount: isSet(object.mintedAmount)
                ? String(object.mintedAmount)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
        message.mintedAmount !== undefined &&
            (obj.mintedAmount = message.mintedAmount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMintedDataMap();
        message.assetDenom = (_a = object.assetDenom) !== null && _a !== void 0 ? _a : "";
        message.mintedAmount = (_b = object.mintedAmount) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseStableMintVault() {
    return {
        id: long_1.default.UZERO,
        amountIn: "",
        amountOut: "",
        appId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        createdAt: undefined,
    };
}
exports.StableMintVault = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.amountIn !== "") {
            writer.uint32(18).string(message.amountIn);
        }
        if (message.amountOut !== "") {
            writer.uint32(26).string(message.amountOut);
        }
        if (!message.appId.isZero()) {
            writer.uint32(32).uint64(message.appId);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(40).uint64(message.extendedPairVaultId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStableMintVault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.amountIn = reader.string();
                    break;
                case 3:
                    message.amountOut = reader.string();
                    break;
                case 4:
                    message.appId = reader.uint64();
                    break;
                case 5:
                    message.extendedPairVaultId = reader.uint64();
                    break;
                case 6:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
            amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO,
            createdAt: isSet(object.createdAt)
                ? fromJsonTimestamp(object.createdAt)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.amountIn !== undefined && (obj.amountIn = message.amountIn);
        message.amountOut !== undefined && (obj.amountOut = message.amountOut);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseStableMintVault();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.amountIn = (_a = object.amountIn) !== null && _a !== void 0 ? _a : "";
        message.amountOut = (_b = object.amountOut) !== null && _b !== void 0 ? _b : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBasePairStatisticData() {
    return {
        assetInDenom: "",
        assetOutDenom: "",
        collateralAmount: "",
        mintedAmount: "",
        extendedPairVaultId: long_1.default.UZERO,
    };
}
exports.PairStatisticData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.assetInDenom !== "") {
            writer.uint32(10).string(message.assetInDenom);
        }
        if (message.assetOutDenom !== "") {
            writer.uint32(18).string(message.assetOutDenom);
        }
        if (message.collateralAmount !== "") {
            writer.uint32(26).string(message.collateralAmount);
        }
        if (message.mintedAmount !== "") {
            writer.uint32(34).string(message.mintedAmount);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(40).uint64(message.extendedPairVaultId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePairStatisticData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetInDenom = reader.string();
                    break;
                case 2:
                    message.assetOutDenom = reader.string();
                    break;
                case 3:
                    message.collateralAmount = reader.string();
                    break;
                case 4:
                    message.mintedAmount = reader.string();
                    break;
                case 5:
                    message.extendedPairVaultId = reader.uint64();
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
            assetInDenom: isSet(object.assetInDenom)
                ? String(object.assetInDenom)
                : "",
            assetOutDenom: isSet(object.assetOutDenom)
                ? String(object.assetOutDenom)
                : "",
            collateralAmount: isSet(object.collateralAmount)
                ? String(object.collateralAmount)
                : "",
            mintedAmount: isSet(object.mintedAmount)
                ? String(object.mintedAmount)
                : "",
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetInDenom !== undefined &&
            (obj.assetInDenom = message.assetInDenom);
        message.assetOutDenom !== undefined &&
            (obj.assetOutDenom = message.assetOutDenom);
        message.collateralAmount !== undefined &&
            (obj.collateralAmount = message.collateralAmount);
        message.mintedAmount !== undefined &&
            (obj.mintedAmount = message.mintedAmount);
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBasePairStatisticData();
        message.assetInDenom = (_a = object.assetInDenom) !== null && _a !== void 0 ? _a : "";
        message.assetOutDenom = (_b = object.assetOutDenom) !== null && _b !== void 0 ? _b : "";
        message.collateralAmount = (_c = object.collateralAmount) !== null && _c !== void 0 ? _c : "";
        message.mintedAmount = (_d = object.mintedAmount) !== null && _d !== void 0 ? _d : "";
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
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
//# sourceMappingURL=vault.js.map