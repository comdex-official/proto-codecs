"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.ActivateExternalRewardsVaultResponse = exports.ActivateExternalRewardsVault = exports.ActivateExternalRewardsLockersResponse = exports.ActivateExternalRewardsLockers = exports.MsgRemoveWhitelistAppIdVaultResponse = exports.MsgWhitelistAppIdVaultResponse = exports.RemoveWhitelistAppIdVault = exports.WhitelistAppIdVault = exports.MsgRemoveWhitelistAssetResponse = exports.MsgWhitelistAssetResponse = exports.RemoveWhitelistAsset = exports.WhitelistAsset = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "comdex.rewards.v1beta1";
function createBaseWhitelistAsset() {
    return { appMappingId: long_1.default.UZERO, from: "", assetId: [] };
}
exports.WhitelistAsset = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appMappingId.isZero()) {
            writer.uint32(8).uint64(message.appMappingId);
        }
        if (message.from !== "") {
            writer.uint32(18).string(message.from);
        }
        writer.uint32(26).fork();
        for (const v of message.assetId) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWhitelistAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appMappingId = reader.uint64();
                    break;
                case 2:
                    message.from = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.assetId.push(reader.uint64());
                        }
                    }
                    else {
                        message.assetId.push(reader.uint64());
                    }
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
                ? long_1.default.fromString(object.appMappingId)
                : long_1.default.UZERO,
            from: isSet(object.from) ? String(object.from) : "",
            assetId: Array.isArray(object === null || object === void 0 ? void 0 : object.assetId)
                ? object.assetId.map((e) => long_1.default.fromString(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        message.from !== undefined && (obj.from = message.from);
        if (message.assetId) {
            obj.assetId = message.assetId.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.assetId = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseWhitelistAsset();
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.assetId = ((_b = object.assetId) === null || _b === void 0 ? void 0 : _b.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseRemoveWhitelistAsset() {
    return { appMappingId: long_1.default.UZERO, from: "", assetId: long_1.default.UZERO };
}
exports.RemoveWhitelistAsset = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appMappingId.isZero()) {
            writer.uint32(8).uint64(message.appMappingId);
        }
        if (message.from !== "") {
            writer.uint32(18).string(message.from);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(24).uint64(message.assetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveWhitelistAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appMappingId = reader.uint64();
                    break;
                case 2:
                    message.from = reader.string();
                    break;
                case 3:
                    message.assetId = reader.uint64();
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
                ? long_1.default.fromString(object.appMappingId)
                : long_1.default.UZERO,
            from: isSet(object.from) ? String(object.from) : "",
            assetId: isSet(object.assetId)
                ? long_1.default.fromString(object.assetId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        message.from !== undefined && (obj.from = message.from);
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRemoveWhitelistAsset();
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgWhitelistAssetResponse() {
    return {};
}
exports.MsgWhitelistAssetResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWhitelistAssetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgWhitelistAssetResponse();
        return message;
    },
};
function createBaseMsgRemoveWhitelistAssetResponse() {
    return {};
}
exports.MsgRemoveWhitelistAssetResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveWhitelistAssetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgRemoveWhitelistAssetResponse();
        return message;
    },
};
function createBaseWhitelistAppIdVault() {
    return { appMappingId: long_1.default.UZERO, from: "" };
}
exports.WhitelistAppIdVault = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appMappingId.isZero()) {
            writer.uint32(8).uint64(message.appMappingId);
        }
        if (message.from !== "") {
            writer.uint32(18).string(message.from);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWhitelistAppIdVault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appMappingId = reader.uint64();
                    break;
                case 2:
                    message.from = reader.string();
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
                ? long_1.default.fromString(object.appMappingId)
                : long_1.default.UZERO,
            from: isSet(object.from) ? String(object.from) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        message.from !== undefined && (obj.from = message.from);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseWhitelistAppIdVault();
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseRemoveWhitelistAppIdVault() {
    return { appMappingId: long_1.default.UZERO, from: "" };
}
exports.RemoveWhitelistAppIdVault = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appMappingId.isZero()) {
            writer.uint32(8).uint64(message.appMappingId);
        }
        if (message.from !== "") {
            writer.uint32(18).string(message.from);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveWhitelistAppIdVault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appMappingId = reader.uint64();
                    break;
                case 2:
                    message.from = reader.string();
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
                ? long_1.default.fromString(object.appMappingId)
                : long_1.default.UZERO,
            from: isSet(object.from) ? String(object.from) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        message.from !== undefined && (obj.from = message.from);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRemoveWhitelistAppIdVault();
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgWhitelistAppIdVaultResponse() {
    return {};
}
exports.MsgWhitelistAppIdVaultResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWhitelistAppIdVaultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgWhitelistAppIdVaultResponse();
        return message;
    },
};
function createBaseMsgRemoveWhitelistAppIdVaultResponse() {
    return {};
}
exports.MsgRemoveWhitelistAppIdVaultResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveWhitelistAppIdVaultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgRemoveWhitelistAppIdVaultResponse();
        return message;
    },
};
function createBaseActivateExternalRewardsLockers() {
    return {
        appMappingId: long_1.default.UZERO,
        assetId: long_1.default.UZERO,
        totalRewards: undefined,
        durationDays: long_1.default.ZERO,
        depositor: "",
        minLockupTimeSeconds: long_1.default.ZERO,
    };
}
exports.ActivateExternalRewardsLockers = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appMappingId.isZero()) {
            writer.uint32(8).uint64(message.appMappingId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        if (message.totalRewards !== undefined) {
            coin_1.Coin.encode(message.totalRewards, writer.uint32(26).fork()).ldelim();
        }
        if (!message.durationDays.isZero()) {
            writer.uint32(32).int64(message.durationDays);
        }
        if (message.depositor !== "") {
            writer.uint32(42).string(message.depositor);
        }
        if (!message.minLockupTimeSeconds.isZero()) {
            writer.uint32(48).int64(message.minLockupTimeSeconds);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActivateExternalRewardsLockers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appMappingId = reader.uint64();
                    break;
                case 2:
                    message.assetId = reader.uint64();
                    break;
                case 3:
                    message.totalRewards = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.durationDays = reader.int64();
                    break;
                case 5:
                    message.depositor = reader.string();
                    break;
                case 6:
                    message.minLockupTimeSeconds = reader.int64();
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
                ? long_1.default.fromString(object.appMappingId)
                : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromString(object.assetId)
                : long_1.default.UZERO,
            totalRewards: isSet(object.totalRewards)
                ? coin_1.Coin.fromJSON(object.totalRewards)
                : undefined,
            durationDays: isSet(object.durationDays)
                ? long_1.default.fromString(object.durationDays)
                : long_1.default.ZERO,
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
            minLockupTimeSeconds: isSet(object.minLockupTimeSeconds)
                ? long_1.default.fromString(object.minLockupTimeSeconds)
                : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.totalRewards !== undefined &&
            (obj.totalRewards = message.totalRewards
                ? coin_1.Coin.toJSON(message.totalRewards)
                : undefined);
        message.durationDays !== undefined &&
            (obj.durationDays = (message.durationDays || long_1.default.ZERO).toString());
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.minLockupTimeSeconds !== undefined &&
            (obj.minLockupTimeSeconds = (message.minLockupTimeSeconds || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseActivateExternalRewardsLockers();
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.totalRewards =
            object.totalRewards !== undefined && object.totalRewards !== null
                ? coin_1.Coin.fromPartial(object.totalRewards)
                : undefined;
        message.durationDays =
            object.durationDays !== undefined && object.durationDays !== null
                ? long_1.default.fromValue(object.durationDays)
                : long_1.default.ZERO;
        message.depositor = (_a = object.depositor) !== null && _a !== void 0 ? _a : "";
        message.minLockupTimeSeconds =
            object.minLockupTimeSeconds !== undefined &&
                object.minLockupTimeSeconds !== null
                ? long_1.default.fromValue(object.minLockupTimeSeconds)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseActivateExternalRewardsLockersResponse() {
    return {};
}
exports.ActivateExternalRewardsLockersResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActivateExternalRewardsLockersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseActivateExternalRewardsLockersResponse();
        return message;
    },
};
function createBaseActivateExternalRewardsVault() {
    return {
        appMappingId: long_1.default.UZERO,
        extendedPairId: long_1.default.UZERO,
        totalRewards: undefined,
        durationDays: long_1.default.ZERO,
        depositor: "",
        minLockupTimeSeconds: long_1.default.ZERO,
    };
}
exports.ActivateExternalRewardsVault = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appMappingId.isZero()) {
            writer.uint32(8).uint64(message.appMappingId);
        }
        if (!message.extendedPairId.isZero()) {
            writer.uint32(16).uint64(message.extendedPairId);
        }
        if (message.totalRewards !== undefined) {
            coin_1.Coin.encode(message.totalRewards, writer.uint32(26).fork()).ldelim();
        }
        if (!message.durationDays.isZero()) {
            writer.uint32(32).int64(message.durationDays);
        }
        if (message.depositor !== "") {
            writer.uint32(42).string(message.depositor);
        }
        if (!message.minLockupTimeSeconds.isZero()) {
            writer.uint32(48).int64(message.minLockupTimeSeconds);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActivateExternalRewardsVault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appMappingId = reader.uint64();
                    break;
                case 2:
                    message.extendedPairId = reader.uint64();
                    break;
                case 3:
                    message.totalRewards = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.durationDays = reader.int64();
                    break;
                case 5:
                    message.depositor = reader.string();
                    break;
                case 6:
                    message.minLockupTimeSeconds = reader.int64();
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
                ? long_1.default.fromString(object.appMappingId)
                : long_1.default.UZERO,
            extendedPairId: isSet(object.extendedPairId)
                ? long_1.default.fromString(object.extendedPairId)
                : long_1.default.UZERO,
            totalRewards: isSet(object.totalRewards)
                ? coin_1.Coin.fromJSON(object.totalRewards)
                : undefined,
            durationDays: isSet(object.durationDays)
                ? long_1.default.fromString(object.durationDays)
                : long_1.default.ZERO,
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
            minLockupTimeSeconds: isSet(object.minLockupTimeSeconds)
                ? long_1.default.fromString(object.minLockupTimeSeconds)
                : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        message.extendedPairId !== undefined &&
            (obj.extendedPairId = (message.extendedPairId || long_1.default.UZERO).toString());
        message.totalRewards !== undefined &&
            (obj.totalRewards = message.totalRewards
                ? coin_1.Coin.toJSON(message.totalRewards)
                : undefined);
        message.durationDays !== undefined &&
            (obj.durationDays = (message.durationDays || long_1.default.ZERO).toString());
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.minLockupTimeSeconds !== undefined &&
            (obj.minLockupTimeSeconds = (message.minLockupTimeSeconds || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseActivateExternalRewardsVault();
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.extendedPairId =
            object.extendedPairId !== undefined && object.extendedPairId !== null
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO;
        message.totalRewards =
            object.totalRewards !== undefined && object.totalRewards !== null
                ? coin_1.Coin.fromPartial(object.totalRewards)
                : undefined;
        message.durationDays =
            object.durationDays !== undefined && object.durationDays !== null
                ? long_1.default.fromValue(object.durationDays)
                : long_1.default.ZERO;
        message.depositor = (_a = object.depositor) !== null && _a !== void 0 ? _a : "";
        message.minLockupTimeSeconds =
            object.minLockupTimeSeconds !== undefined &&
                object.minLockupTimeSeconds !== null
                ? long_1.default.fromValue(object.minLockupTimeSeconds)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseActivateExternalRewardsVaultResponse() {
    return {};
}
exports.ActivateExternalRewardsVaultResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActivateExternalRewardsVaultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseActivateExternalRewardsVaultResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Whitelist = this.Whitelist.bind(this);
        this.RemoveWhitelist = this.RemoveWhitelist.bind(this);
        this.WhitelistAppVault = this.WhitelistAppVault.bind(this);
        this.RemoveWhitelistAppVault = this.RemoveWhitelistAppVault.bind(this);
        this.ExternalRewardsLockers = this.ExternalRewardsLockers.bind(this);
        this.ExternalRewardsVault = this.ExternalRewardsVault.bind(this);
    }
    Whitelist(request) {
        const data = exports.WhitelistAsset.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Msg", "Whitelist", data);
        return promise.then((data) => exports.MsgWhitelistAssetResponse.decode(new minimal_1.default.Reader(data)));
    }
    RemoveWhitelist(request) {
        const data = exports.RemoveWhitelistAsset.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Msg", "RemoveWhitelist", data);
        return promise.then((data) => exports.MsgRemoveWhitelistAssetResponse.decode(new minimal_1.default.Reader(data)));
    }
    WhitelistAppVault(request) {
        const data = exports.WhitelistAppIdVault.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Msg", "WhitelistAppVault", data);
        return promise.then((data) => exports.MsgWhitelistAppIdVaultResponse.decode(new minimal_1.default.Reader(data)));
    }
    RemoveWhitelistAppVault(request) {
        const data = exports.RemoveWhitelistAppIdVault.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Msg", "RemoveWhitelistAppVault", data);
        return promise.then((data) => exports.MsgRemoveWhitelistAppIdVaultResponse.decode(new minimal_1.default.Reader(data)));
    }
    ExternalRewardsLockers(request) {
        const data = exports.ActivateExternalRewardsLockers.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Msg", "ExternalRewardsLockers", data);
        return promise.then((data) => exports.ActivateExternalRewardsLockersResponse.decode(new minimal_1.default.Reader(data)));
    }
    ExternalRewardsVault(request) {
        const data = exports.ActivateExternalRewardsVault.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Msg", "ExternalRewardsVault", data);
        return promise.then((data) => exports.ActivateExternalRewardsVaultResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map