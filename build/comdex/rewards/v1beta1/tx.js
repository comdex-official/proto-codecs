"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.ActivateExternalRewardsVaultResponse = exports.ActivateExternalRewardsVault = exports.ActivateExternalRewardsLockersResponse = exports.ActivateExternalRewardsLockers = exports.MsgRemoveWhitelistAppIdVaultResponse = exports.MsgWhitelistAppIdVaultResponse = exports.RemoveWhitelistAppIdVault = exports.WhitelistAppIdVault = exports.MsgRemoveWhitelistAssetResponse = exports.MsgWhitelistAssetResponse = exports.RemoveWhitelistAsset = exports.WhitelistAsset = exports.MsgCreateGaugeResponse = exports.MsgCreateGauge = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const gauge_1 = require("./gauge");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const duration_1 = require("../../../google/protobuf/duration");
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.rewards.v1beta1";
function createBaseMsgCreateGauge() {
    return {
        from: "",
        gaugeTypeId: long_1.default.UZERO,
        triggerDuration: undefined,
        depositAmount: undefined,
        totalTriggers: long_1.default.UZERO,
        startTime: undefined,
        liquidityMetaData: undefined,
    };
}
exports.MsgCreateGauge = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.gaugeTypeId.isZero()) {
            writer.uint32(16).uint64(message.gaugeTypeId);
        }
        if (message.triggerDuration !== undefined) {
            duration_1.Duration.encode(message.triggerDuration, writer.uint32(26).fork()).ldelim();
        }
        if (message.depositAmount !== undefined) {
            coin_1.Coin.encode(message.depositAmount, writer.uint32(34).fork()).ldelim();
        }
        if (!message.totalTriggers.isZero()) {
            writer.uint32(40).uint64(message.totalTriggers);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startTime), writer.uint32(50).fork()).ldelim();
        }
        if (message.liquidityMetaData !== undefined) {
            gauge_1.LiquidtyGaugeMetaData.encode(message.liquidityMetaData, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGauge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.gaugeTypeId = reader.uint64();
                    break;
                case 3:
                    message.triggerDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.depositAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.totalTriggers = reader.uint64();
                    break;
                case 6:
                    message.startTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.liquidityMetaData = gauge_1.LiquidtyGaugeMetaData.decode(reader, reader.uint32());
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
            from: isSet(object.from) ? String(object.from) : "",
            gaugeTypeId: isSet(object.gaugeTypeId)
                ? long_1.default.fromString(object.gaugeTypeId)
                : long_1.default.UZERO,
            triggerDuration: isSet(object.triggerDuration)
                ? duration_1.Duration.fromJSON(object.triggerDuration)
                : undefined,
            depositAmount: isSet(object.depositAmount)
                ? coin_1.Coin.fromJSON(object.depositAmount)
                : undefined,
            totalTriggers: isSet(object.totalTriggers)
                ? long_1.default.fromString(object.totalTriggers)
                : long_1.default.UZERO,
            startTime: isSet(object.startTime)
                ? fromJsonTimestamp(object.startTime)
                : undefined,
            liquidityMetaData: isSet(object.liquidityMetaData)
                ? gauge_1.LiquidtyGaugeMetaData.fromJSON(object.liquidityMetaData)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.gaugeTypeId !== undefined &&
            (obj.gaugeTypeId = (message.gaugeTypeId || long_1.default.UZERO).toString());
        message.triggerDuration !== undefined &&
            (obj.triggerDuration = message.triggerDuration
                ? duration_1.Duration.toJSON(message.triggerDuration)
                : undefined);
        message.depositAmount !== undefined &&
            (obj.depositAmount = message.depositAmount
                ? coin_1.Coin.toJSON(message.depositAmount)
                : undefined);
        message.totalTriggers !== undefined &&
            (obj.totalTriggers = (message.totalTriggers || long_1.default.UZERO).toString());
        message.startTime !== undefined &&
            (obj.startTime = message.startTime.toISOString());
        message.liquidityMetaData !== undefined &&
            (obj.liquidityMetaData = message.liquidityMetaData
                ? gauge_1.LiquidtyGaugeMetaData.toJSON(message.liquidityMetaData)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgCreateGauge();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.gaugeTypeId =
            object.gaugeTypeId !== undefined && object.gaugeTypeId !== null
                ? long_1.default.fromValue(object.gaugeTypeId)
                : long_1.default.UZERO;
        message.triggerDuration =
            object.triggerDuration !== undefined && object.triggerDuration !== null
                ? duration_1.Duration.fromPartial(object.triggerDuration)
                : undefined;
        message.depositAmount =
            object.depositAmount !== undefined && object.depositAmount !== null
                ? coin_1.Coin.fromPartial(object.depositAmount)
                : undefined;
        message.totalTriggers =
            object.totalTriggers !== undefined && object.totalTriggers !== null
                ? long_1.default.fromValue(object.totalTriggers)
                : long_1.default.UZERO;
        message.startTime = (_b = object.startTime) !== null && _b !== void 0 ? _b : undefined;
        message.liquidityMetaData =
            object.liquidityMetaData !== undefined &&
                object.liquidityMetaData !== null
                ? gauge_1.LiquidtyGaugeMetaData.fromPartial(object.liquidityMetaData)
                : undefined;
        return message;
    },
};
function createBaseMsgCreateGaugeResponse() {
    return {};
}
exports.MsgCreateGaugeResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGaugeResponse();
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
        const message = createBaseMsgCreateGaugeResponse();
        return message;
    },
};
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
        this.CreateGauge = this.CreateGauge.bind(this);
        this.Whitelist = this.Whitelist.bind(this);
        this.RemoveWhitelist = this.RemoveWhitelist.bind(this);
        this.WhitelistAppVault = this.WhitelistAppVault.bind(this);
        this.RemoveWhitelistAppVault = this.RemoveWhitelistAppVault.bind(this);
        this.ExternalRewardsLockers = this.ExternalRewardsLockers.bind(this);
        this.ExternalRewardsVault = this.ExternalRewardsVault.bind(this);
    }
    CreateGauge(request) {
        const data = exports.MsgCreateGauge.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Msg", "CreateGauge", data);
        return promise.then((data) => exports.MsgCreateGaugeResponse.decode(new minimal_1.default.Reader(data)));
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
//# sourceMappingURL=tx.js.map