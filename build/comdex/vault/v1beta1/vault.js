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
exports.PairStatisticData = exports.StableMintVault = exports.MintedDataMap = exports.TvlLockedDataMap = exports.ExtendedPairVaultMapping = exports.AppExtendedPairVaultMapping = exports.ExtendedPairToVaultMapping = exports.VaultToAppMapping = exports.UserVaultAssetMapping = exports.Vault = exports.protobufPackage = void 0;
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
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
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
        return message;
    },
};
function createBaseUserVaultAssetMapping() {
    return { owner: "", userVaultApp: [] };
}
exports.UserVaultAssetMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        for (const v of message.userVaultApp) {
            exports.VaultToAppMapping.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserVaultAssetMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.userVaultApp.push(exports.VaultToAppMapping.decode(reader, reader.uint32()));
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
            userVaultApp: Array.isArray(object === null || object === void 0 ? void 0 : object.userVaultApp)
                ? object.userVaultApp.map((e) => exports.VaultToAppMapping.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        if (message.userVaultApp) {
            obj.userVaultApp = message.userVaultApp.map((e) => e ? exports.VaultToAppMapping.toJSON(e) : undefined);
        }
        else {
            obj.userVaultApp = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserVaultAssetMapping();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.userVaultApp =
            ((_b = object.userVaultApp) === null || _b === void 0 ? void 0 : _b.map((e) => exports.VaultToAppMapping.fromPartial(e))) || [];
        return message;
    },
};
function createBaseVaultToAppMapping() {
    return { appId: long_1.default.UZERO, userExtendedPairVault: [] };
}
exports.VaultToAppMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        for (const v of message.userExtendedPairVault) {
            exports.ExtendedPairToVaultMapping.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVaultToAppMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.userExtendedPairVault.push(exports.ExtendedPairToVaultMapping.decode(reader, reader.uint32()));
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
            userExtendedPairVault: Array.isArray(object === null || object === void 0 ? void 0 : object.userExtendedPairVault)
                ? object.userExtendedPairVault.map((e) => exports.ExtendedPairToVaultMapping.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        if (message.userExtendedPairVault) {
            obj.userExtendedPairVault = message.userExtendedPairVault.map((e) => e ? exports.ExtendedPairToVaultMapping.toJSON(e) : undefined);
        }
        else {
            obj.userExtendedPairVault = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseVaultToAppMapping();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.userExtendedPairVault =
            ((_a = object.userExtendedPairVault) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ExtendedPairToVaultMapping.fromPartial(e))) || [];
        return message;
    },
};
function createBaseExtendedPairToVaultMapping() {
    return { extendedPairId: long_1.default.UZERO, vaultId: long_1.default.UZERO };
}
exports.ExtendedPairToVaultMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.extendedPairId.isZero()) {
            writer.uint32(8).uint64(message.extendedPairId);
        }
        if (!message.vaultId.isZero()) {
            writer.uint32(16).uint64(message.vaultId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtendedPairToVaultMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extendedPairId = reader.uint64();
                    break;
                case 2:
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
        message.extendedPairId !== undefined &&
            (obj.extendedPairId = (message.extendedPairId || long_1.default.UZERO).toString());
        message.vaultId !== undefined &&
            (obj.vaultId = (message.vaultId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseExtendedPairToVaultMapping();
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
function createBaseAppExtendedPairVaultMapping() {
    return { appId: long_1.default.UZERO, counter: long_1.default.UZERO, extendedPairVaults: [] };
}
exports.AppExtendedPairVaultMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.counter.isZero()) {
            writer.uint32(16).uint64(message.counter);
        }
        for (const v of message.extendedPairVaults) {
            exports.ExtendedPairVaultMapping.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppExtendedPairVaultMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.counter = reader.uint64();
                    break;
                case 3:
                    message.extendedPairVaults.push(exports.ExtendedPairVaultMapping.decode(reader, reader.uint32()));
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
            counter: isSet(object.counter)
                ? long_1.default.fromValue(object.counter)
                : long_1.default.UZERO,
            extendedPairVaults: Array.isArray(object === null || object === void 0 ? void 0 : object.extendedPairVaults)
                ? object.extendedPairVaults.map((e) => exports.ExtendedPairVaultMapping.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.counter !== undefined &&
            (obj.counter = (message.counter || long_1.default.UZERO).toString());
        if (message.extendedPairVaults) {
            obj.extendedPairVaults = message.extendedPairVaults.map((e) => e ? exports.ExtendedPairVaultMapping.toJSON(e) : undefined);
        }
        else {
            obj.extendedPairVaults = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAppExtendedPairVaultMapping();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.counter =
            object.counter !== undefined && object.counter !== null
                ? long_1.default.fromValue(object.counter)
                : long_1.default.UZERO;
        message.extendedPairVaults =
            ((_a = object.extendedPairVaults) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ExtendedPairVaultMapping.fromPartial(e))) || [];
        return message;
    },
};
function createBaseExtendedPairVaultMapping() {
    return {
        extendedPairId: long_1.default.UZERO,
        vaultIds: [],
        tokenMintedAmount: "",
        collateralLockedAmount: "",
    };
}
exports.ExtendedPairVaultMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.extendedPairId.isZero()) {
            writer.uint32(8).uint64(message.extendedPairId);
        }
        writer.uint32(18).fork();
        for (const v of message.vaultIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.tokenMintedAmount !== "") {
            writer.uint32(26).string(message.tokenMintedAmount);
        }
        if (message.collateralLockedAmount !== "") {
            writer.uint32(34).string(message.collateralLockedAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtendedPairVaultMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extendedPairId = reader.uint64();
                    break;
                case 2:
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
                case 3:
                    message.tokenMintedAmount = reader.string();
                    break;
                case 4:
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
        const message = createBaseExtendedPairVaultMapping();
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