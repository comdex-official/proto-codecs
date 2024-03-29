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
exports.MsgClientImpl = exports.ActivateExternalRewardsStableMintResponse = exports.ActivateExternalRewardsStableMint = exports.ActivateExternalRewardsLendResponse = exports.ActivateExternalRewardsLend = exports.ActivateExternalRewardsVaultResponse = exports.ActivateExternalRewardsVault = exports.ActivateExternalRewardsLockersResponse = exports.ActivateExternalRewardsLockers = exports.MsgRemoveWhitelistAppIdVaultResponse = exports.MsgWhitelistAppIdVaultResponse = exports.RemoveWhitelistAppIdVault = exports.WhitelistAppIdVault = exports.MsgRemoveWhitelistAssetResponse = exports.MsgWhitelistAssetResponse = exports.RemoveWhitelistAsset = exports.WhitelistAsset = exports.MsgCreateGaugeResponse = exports.MsgCreateGauge = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const duration_1 = require("../../../google/protobuf/duration");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const gauge_1 = require("../../../comdex/rewards/v1beta1/gauge");
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
        appId: long_1.default.UZERO,
    };
}
exports.MsgCreateGauge = {
    encode(message, writer = _m0.Writer.create()) {
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
        if (!message.appId.isZero()) {
            writer.uint32(64).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                case 8:
                    message.appId = reader.uint64();
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
                ? long_1.default.fromValue(object.gaugeTypeId)
                : long_1.default.UZERO,
            triggerDuration: isSet(object.triggerDuration)
                ? duration_1.Duration.fromJSON(object.triggerDuration)
                : undefined,
            depositAmount: isSet(object.depositAmount)
                ? coin_1.Coin.fromJSON(object.depositAmount)
                : undefined,
            totalTriggers: isSet(object.totalTriggers)
                ? long_1.default.fromValue(object.totalTriggers)
                : long_1.default.UZERO,
            startTime: isSet(object.startTime)
                ? fromJsonTimestamp(object.startTime)
                : undefined,
            liquidityMetaData: isSet(object.liquidityMetaData)
                ? gauge_1.LiquidtyGaugeMetaData.fromJSON(object.liquidityMetaData)
                : undefined,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
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
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
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
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgCreateGaugeResponse() {
    return {};
}
exports.MsgCreateGaugeResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return { appMappingId: long_1.default.UZERO, from: "", assetId: long_1.default.UZERO };
}
exports.WhitelistAsset = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO,
            from: isSet(object.from) ? String(object.from) : "",
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
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
        const message = createBaseWhitelistAsset();
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
function createBaseRemoveWhitelistAsset() {
    return { appMappingId: long_1.default.UZERO, from: "", assetId: long_1.default.UZERO };
}
exports.RemoveWhitelistAsset = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO,
            from: isSet(object.from) ? String(object.from) : "",
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
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
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appMappingId.isZero()) {
            writer.uint32(8).uint64(message.appMappingId);
        }
        if (message.from !== "") {
            writer.uint32(18).string(message.from);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                ? long_1.default.fromValue(object.appMappingId)
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
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appMappingId.isZero()) {
            writer.uint32(8).uint64(message.appMappingId);
        }
        if (message.from !== "") {
            writer.uint32(18).string(message.from);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                ? long_1.default.fromValue(object.appMappingId)
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
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            totalRewards: isSet(object.totalRewards)
                ? coin_1.Coin.fromJSON(object.totalRewards)
                : undefined,
            durationDays: isSet(object.durationDays)
                ? long_1.default.fromValue(object.durationDays)
                : long_1.default.ZERO,
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
            minLockupTimeSeconds: isSet(object.minLockupTimeSeconds)
                ? long_1.default.fromValue(object.minLockupTimeSeconds)
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
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO,
            extendedPairId: isSet(object.extendedPairId)
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO,
            totalRewards: isSet(object.totalRewards)
                ? coin_1.Coin.fromJSON(object.totalRewards)
                : undefined,
            durationDays: isSet(object.durationDays)
                ? long_1.default.fromValue(object.durationDays)
                : long_1.default.ZERO,
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
            minLockupTimeSeconds: isSet(object.minLockupTimeSeconds)
                ? long_1.default.fromValue(object.minLockupTimeSeconds)
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
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
function createBaseActivateExternalRewardsLend() {
    return {
        appMappingId: long_1.default.UZERO,
        cPoolId: long_1.default.UZERO,
        assetId: [],
        cSwapAppId: long_1.default.UZERO,
        cSwapMinLockAmount: long_1.default.UZERO,
        totalRewards: undefined,
        masterPoolId: long_1.default.ZERO,
        durationDays: long_1.default.ZERO,
        minLockupTimeSeconds: long_1.default.ZERO,
        depositor: "",
    };
}
exports.ActivateExternalRewardsLend = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appMappingId.isZero()) {
            writer.uint32(8).uint64(message.appMappingId);
        }
        if (!message.cPoolId.isZero()) {
            writer.uint32(16).uint64(message.cPoolId);
        }
        writer.uint32(26).fork();
        for (const v of message.assetId) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (!message.cSwapAppId.isZero()) {
            writer.uint32(32).uint64(message.cSwapAppId);
        }
        if (!message.cSwapMinLockAmount.isZero()) {
            writer.uint32(40).uint64(message.cSwapMinLockAmount);
        }
        if (message.totalRewards !== undefined) {
            coin_1.Coin.encode(message.totalRewards, writer.uint32(50).fork()).ldelim();
        }
        if (!message.masterPoolId.isZero()) {
            writer.uint32(56).int64(message.masterPoolId);
        }
        if (!message.durationDays.isZero()) {
            writer.uint32(64).int64(message.durationDays);
        }
        if (!message.minLockupTimeSeconds.isZero()) {
            writer.uint32(72).int64(message.minLockupTimeSeconds);
        }
        if (message.depositor !== "") {
            writer.uint32(82).string(message.depositor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActivateExternalRewardsLend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appMappingId = reader.uint64();
                    break;
                case 2:
                    message.cPoolId = reader.uint64();
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
                case 4:
                    message.cSwapAppId = reader.uint64();
                    break;
                case 5:
                    message.cSwapMinLockAmount = reader.uint64();
                    break;
                case 6:
                    message.totalRewards = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.masterPoolId = reader.int64();
                    break;
                case 8:
                    message.durationDays = reader.int64();
                    break;
                case 9:
                    message.minLockupTimeSeconds = reader.int64();
                    break;
                case 10:
                    message.depositor = reader.string();
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
            cPoolId: isSet(object.cPoolId)
                ? long_1.default.fromValue(object.cPoolId)
                : long_1.default.UZERO,
            assetId: Array.isArray(object === null || object === void 0 ? void 0 : object.assetId)
                ? object.assetId.map((e) => long_1.default.fromValue(e))
                : [],
            cSwapAppId: isSet(object.cSwapAppId)
                ? long_1.default.fromValue(object.cSwapAppId)
                : long_1.default.UZERO,
            cSwapMinLockAmount: isSet(object.cSwapMinLockAmount)
                ? long_1.default.fromValue(object.cSwapMinLockAmount)
                : long_1.default.UZERO,
            totalRewards: isSet(object.totalRewards)
                ? coin_1.Coin.fromJSON(object.totalRewards)
                : undefined,
            masterPoolId: isSet(object.masterPoolId)
                ? long_1.default.fromValue(object.masterPoolId)
                : long_1.default.ZERO,
            durationDays: isSet(object.durationDays)
                ? long_1.default.fromValue(object.durationDays)
                : long_1.default.ZERO,
            minLockupTimeSeconds: isSet(object.minLockupTimeSeconds)
                ? long_1.default.fromValue(object.minLockupTimeSeconds)
                : long_1.default.ZERO,
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        message.cPoolId !== undefined &&
            (obj.cPoolId = (message.cPoolId || long_1.default.UZERO).toString());
        if (message.assetId) {
            obj.assetId = message.assetId.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.assetId = [];
        }
        message.cSwapAppId !== undefined &&
            (obj.cSwapAppId = (message.cSwapAppId || long_1.default.UZERO).toString());
        message.cSwapMinLockAmount !== undefined &&
            (obj.cSwapMinLockAmount = (message.cSwapMinLockAmount || long_1.default.UZERO).toString());
        message.totalRewards !== undefined &&
            (obj.totalRewards = message.totalRewards
                ? coin_1.Coin.toJSON(message.totalRewards)
                : undefined);
        message.masterPoolId !== undefined &&
            (obj.masterPoolId = (message.masterPoolId || long_1.default.ZERO).toString());
        message.durationDays !== undefined &&
            (obj.durationDays = (message.durationDays || long_1.default.ZERO).toString());
        message.minLockupTimeSeconds !== undefined &&
            (obj.minLockupTimeSeconds = (message.minLockupTimeSeconds || long_1.default.ZERO).toString());
        message.depositor !== undefined && (obj.depositor = message.depositor);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseActivateExternalRewardsLend();
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.cPoolId =
            object.cPoolId !== undefined && object.cPoolId !== null
                ? long_1.default.fromValue(object.cPoolId)
                : long_1.default.UZERO;
        message.assetId = ((_a = object.assetId) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        message.cSwapAppId =
            object.cSwapAppId !== undefined && object.cSwapAppId !== null
                ? long_1.default.fromValue(object.cSwapAppId)
                : long_1.default.UZERO;
        message.cSwapMinLockAmount =
            object.cSwapMinLockAmount !== undefined &&
                object.cSwapMinLockAmount !== null
                ? long_1.default.fromValue(object.cSwapMinLockAmount)
                : long_1.default.UZERO;
        message.totalRewards =
            object.totalRewards !== undefined && object.totalRewards !== null
                ? coin_1.Coin.fromPartial(object.totalRewards)
                : undefined;
        message.masterPoolId =
            object.masterPoolId !== undefined && object.masterPoolId !== null
                ? long_1.default.fromValue(object.masterPoolId)
                : long_1.default.ZERO;
        message.durationDays =
            object.durationDays !== undefined && object.durationDays !== null
                ? long_1.default.fromValue(object.durationDays)
                : long_1.default.ZERO;
        message.minLockupTimeSeconds =
            object.minLockupTimeSeconds !== undefined &&
                object.minLockupTimeSeconds !== null
                ? long_1.default.fromValue(object.minLockupTimeSeconds)
                : long_1.default.ZERO;
        message.depositor = (_b = object.depositor) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseActivateExternalRewardsLendResponse() {
    return {};
}
exports.ActivateExternalRewardsLendResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActivateExternalRewardsLendResponse();
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
        const message = createBaseActivateExternalRewardsLendResponse();
        return message;
    },
};
function createBaseActivateExternalRewardsStableMint() {
    return {
        appId: long_1.default.UZERO,
        cswapAppId: long_1.default.UZERO,
        commodoAppId: long_1.default.UZERO,
        totalRewards: undefined,
        durationDays: long_1.default.ZERO,
        depositor: "",
        acceptedBlockHeight: long_1.default.ZERO,
    };
}
exports.ActivateExternalRewardsStableMint = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.cswapAppId.isZero()) {
            writer.uint32(16).uint64(message.cswapAppId);
        }
        if (!message.commodoAppId.isZero()) {
            writer.uint32(24).uint64(message.commodoAppId);
        }
        if (message.totalRewards !== undefined) {
            coin_1.Coin.encode(message.totalRewards, writer.uint32(34).fork()).ldelim();
        }
        if (!message.durationDays.isZero()) {
            writer.uint32(40).int64(message.durationDays);
        }
        if (message.depositor !== "") {
            writer.uint32(50).string(message.depositor);
        }
        if (!message.acceptedBlockHeight.isZero()) {
            writer.uint32(56).int64(message.acceptedBlockHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActivateExternalRewardsStableMint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.cswapAppId = reader.uint64();
                    break;
                case 3:
                    message.commodoAppId = reader.uint64();
                    break;
                case 4:
                    message.totalRewards = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.durationDays = reader.int64();
                    break;
                case 6:
                    message.depositor = reader.string();
                    break;
                case 7:
                    message.acceptedBlockHeight = reader.int64();
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
            cswapAppId: isSet(object.cswapAppId)
                ? long_1.default.fromValue(object.cswapAppId)
                : long_1.default.UZERO,
            commodoAppId: isSet(object.commodoAppId)
                ? long_1.default.fromValue(object.commodoAppId)
                : long_1.default.UZERO,
            totalRewards: isSet(object.totalRewards)
                ? coin_1.Coin.fromJSON(object.totalRewards)
                : undefined,
            durationDays: isSet(object.durationDays)
                ? long_1.default.fromValue(object.durationDays)
                : long_1.default.ZERO,
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
            acceptedBlockHeight: isSet(object.acceptedBlockHeight)
                ? long_1.default.fromValue(object.acceptedBlockHeight)
                : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.cswapAppId !== undefined &&
            (obj.cswapAppId = (message.cswapAppId || long_1.default.UZERO).toString());
        message.commodoAppId !== undefined &&
            (obj.commodoAppId = (message.commodoAppId || long_1.default.UZERO).toString());
        message.totalRewards !== undefined &&
            (obj.totalRewards = message.totalRewards
                ? coin_1.Coin.toJSON(message.totalRewards)
                : undefined);
        message.durationDays !== undefined &&
            (obj.durationDays = (message.durationDays || long_1.default.ZERO).toString());
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.acceptedBlockHeight !== undefined &&
            (obj.acceptedBlockHeight = (message.acceptedBlockHeight || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseActivateExternalRewardsStableMint();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.cswapAppId =
            object.cswapAppId !== undefined && object.cswapAppId !== null
                ? long_1.default.fromValue(object.cswapAppId)
                : long_1.default.UZERO;
        message.commodoAppId =
            object.commodoAppId !== undefined && object.commodoAppId !== null
                ? long_1.default.fromValue(object.commodoAppId)
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
        message.acceptedBlockHeight =
            object.acceptedBlockHeight !== undefined &&
                object.acceptedBlockHeight !== null
                ? long_1.default.fromValue(object.acceptedBlockHeight)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseActivateExternalRewardsStableMintResponse() {
    return {};
}
exports.ActivateExternalRewardsStableMintResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActivateExternalRewardsStableMintResponse();
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
        const message = createBaseActivateExternalRewardsStableMintResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateGauge = this.CreateGauge.bind(this);
        this.ExternalRewardsLockers = this.ExternalRewardsLockers.bind(this);
        this.ExternalRewardsVault = this.ExternalRewardsVault.bind(this);
        this.ExternalRewardsLend = this.ExternalRewardsLend.bind(this);
        this.ExternalRewardsStableMint = this.ExternalRewardsStableMint.bind(this);
    }
    CreateGauge(request) {
        const data = exports.MsgCreateGauge.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Msg", "CreateGauge", data);
        return promise.then((data) => exports.MsgCreateGaugeResponse.decode(new _m0.Reader(data)));
    }
    ExternalRewardsLockers(request) {
        const data = exports.ActivateExternalRewardsLockers.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Msg", "ExternalRewardsLockers", data);
        return promise.then((data) => exports.ActivateExternalRewardsLockersResponse.decode(new _m0.Reader(data)));
    }
    ExternalRewardsVault(request) {
        const data = exports.ActivateExternalRewardsVault.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Msg", "ExternalRewardsVault", data);
        return promise.then((data) => exports.ActivateExternalRewardsVaultResponse.decode(new _m0.Reader(data)));
    }
    ExternalRewardsLend(request) {
        const data = exports.ActivateExternalRewardsLend.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Msg", "ExternalRewardsLend", data);
        return promise.then((data) => exports.ActivateExternalRewardsLendResponse.decode(new _m0.Reader(data)));
    }
    ExternalRewardsStableMint(request) {
        const data = exports.ActivateExternalRewardsStableMint.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Msg", "ExternalRewardsStableMint", data);
        return promise.then((data) => exports.ActivateExternalRewardsStableMintResponse.decode(new _m0.Reader(data)));
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
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map