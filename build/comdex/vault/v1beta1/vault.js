"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StableMintVault = exports.TvlLockedDataMap = exports.ExtendedPairVaultMapping = exports.AppExtendedPairVaultMapping = exports.ExtendedPairToVaultMapping = exports.VaultToAppMapping = exports.UserVaultAssetMapping = exports.Vault = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.vault.v1beta1";
function createBaseVault() {
    return {
        id: "",
        appMappingId: long_1.default.UZERO,
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (!message.appMappingId.isZero()) {
            writer.uint32(16).uint64(message.appMappingId);
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.appMappingId = reader.uint64();
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
            id: isSet(object.id) ? String(object.id) : "",
            appMappingId: isSet(object.appMappingId)
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO,
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
        message.id !== undefined && (obj.id = message.id);
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
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
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseVault();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.owner = (_b = object.owner) !== null && _b !== void 0 ? _b : "";
        message.amountIn = (_c = object.amountIn) !== null && _c !== void 0 ? _c : "";
        message.amountOut = (_d = object.amountOut) !== null && _d !== void 0 ? _d : "";
        message.createdAt = (_e = object.createdAt) !== null && _e !== void 0 ? _e : undefined;
        message.interestAccumulated = (_f = object.interestAccumulated) !== null && _f !== void 0 ? _f : "";
        message.closingFeeAccumulated = (_g = object.closingFeeAccumulated) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseUserVaultAssetMapping() {
    return { owner: "", userVaultApp: [] };
}
exports.UserVaultAssetMapping = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        for (const v of message.userVaultApp) {
            exports.VaultToAppMapping.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    return { appMappingId: long_1.default.UZERO, userExtendedPairVault: [] };
}
exports.VaultToAppMapping = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appMappingId.isZero()) {
            writer.uint32(8).uint64(message.appMappingId);
        }
        for (const v of message.userExtendedPairVault) {
            exports.ExtendedPairToVaultMapping.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVaultToAppMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appMappingId = reader.uint64();
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
            appMappingId: isSet(object.appMappingId)
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO,
            userExtendedPairVault: Array.isArray(object === null || object === void 0 ? void 0 : object.userExtendedPairVault)
                ? object.userExtendedPairVault.map((e) => exports.ExtendedPairToVaultMapping.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
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
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.userExtendedPairVault =
            ((_a = object.userExtendedPairVault) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ExtendedPairToVaultMapping.fromPartial(e))) || [];
        return message;
    },
};
function createBaseExtendedPairToVaultMapping() {
    return { extendedPairId: long_1.default.UZERO, vaultId: "" };
}
exports.ExtendedPairToVaultMapping = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.extendedPairId.isZero()) {
            writer.uint32(8).uint64(message.extendedPairId);
        }
        if (message.vaultId !== "") {
            writer.uint32(18).string(message.vaultId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtendedPairToVaultMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extendedPairId = reader.uint64();
                    break;
                case 2:
                    message.vaultId = reader.string();
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
            vaultId: isSet(object.vaultId) ? String(object.vaultId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.extendedPairId !== undefined &&
            (obj.extendedPairId = (message.extendedPairId || long_1.default.UZERO).toString());
        message.vaultId !== undefined && (obj.vaultId = message.vaultId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseExtendedPairToVaultMapping();
        message.extendedPairId =
            object.extendedPairId !== undefined && object.extendedPairId !== null
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO;
        message.vaultId = (_a = object.vaultId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAppExtendedPairVaultMapping() {
    return {
        appMappingId: long_1.default.UZERO,
        counter: long_1.default.UZERO,
        extendedPairVaults: [],
    };
}
exports.AppExtendedPairVaultMapping = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appMappingId.isZero()) {
            writer.uint32(8).uint64(message.appMappingId);
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppExtendedPairVaultMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appMappingId = reader.uint64();
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
            appMappingId: isSet(object.appMappingId)
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO,
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
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
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
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.extendedPairId.isZero()) {
            writer.uint32(8).uint64(message.extendedPairId);
        }
        for (const v of message.vaultIds) {
            writer.uint32(18).string(v);
        }
        if (message.tokenMintedAmount !== "") {
            writer.uint32(26).string(message.tokenMintedAmount);
        }
        if (message.collateralLockedAmount !== "") {
            writer.uint32(34).string(message.collateralLockedAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtendedPairVaultMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extendedPairId = reader.uint64();
                    break;
                case 2:
                    message.vaultIds.push(reader.string());
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
                ? object.vaultIds.map((e) => String(e))
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
            obj.vaultIds = message.vaultIds.map((e) => e);
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
        message.vaultIds = ((_a = object.vaultIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.tokenMintedAmount = (_b = object.tokenMintedAmount) !== null && _b !== void 0 ? _b : "";
        message.collateralLockedAmount = (_c = object.collateralLockedAmount) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseTvlLockedDataMap() {
    return { assetDenom: "", collateralLockedAmount: "" };
}
exports.TvlLockedDataMap = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.assetDenom !== "") {
            writer.uint32(10).string(message.assetDenom);
        }
        if (message.collateralLockedAmount !== "") {
            writer.uint32(18).string(message.collateralLockedAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
function createBaseStableMintVault() {
    return {
        id: "",
        amountIn: "",
        amountOut: "",
        appMappingId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        createdAt: undefined,
    };
}
exports.StableMintVault = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.amountIn !== "") {
            writer.uint32(18).string(message.amountIn);
        }
        if (message.amountOut !== "") {
            writer.uint32(26).string(message.amountOut);
        }
        if (!message.appMappingId.isZero()) {
            writer.uint32(32).uint64(message.appMappingId);
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStableMintVault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.amountIn = reader.string();
                    break;
                case 3:
                    message.amountOut = reader.string();
                    break;
                case 4:
                    message.appMappingId = reader.uint64();
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
            id: isSet(object.id) ? String(object.id) : "",
            amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
            amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
            appMappingId: isSet(object.appMappingId)
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO,
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
        message.id !== undefined && (obj.id = message.id);
        message.amountIn !== undefined && (obj.amountIn = message.amountIn);
        message.amountOut !== undefined && (obj.amountOut = message.amountOut);
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseStableMintVault();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.amountIn = (_b = object.amountIn) !== null && _b !== void 0 ? _b : "";
        message.amountOut = (_c = object.amountOut) !== null && _c !== void 0 ? _c : "";
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.createdAt = (_d = object.createdAt) !== null && _d !== void 0 ? _d : undefined;
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=vault.js.map