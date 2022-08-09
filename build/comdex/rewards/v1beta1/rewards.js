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
exports.EpochTime = exports.WhitelistedAppIdsVault = exports.VaultExternalRewards = exports.LockerExternalRewards = exports.InternalRewards = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.rewards.v1beta1";
function createBaseInternalRewards() {
    return { appMappingID: long_1.default.UZERO, assetID: [] };
}
exports.InternalRewards = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appMappingID.isZero()) {
            writer.uint32(8).uint64(message.appMappingID);
        }
        writer.uint32(18).fork();
        for (const v of message.assetID) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInternalRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appMappingID = reader.uint64();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.assetID.push(reader.uint64());
                        }
                    }
                    else {
                        message.assetID.push(reader.uint64());
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
            appMappingID: isSet(object.appMappingID)
                ? long_1.default.fromValue(object.appMappingID)
                : long_1.default.UZERO,
            assetID: Array.isArray(object === null || object === void 0 ? void 0 : object.assetID)
                ? object.assetID.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.appMappingID !== undefined &&
            (obj.appMappingID = (message.appMappingID || long_1.default.UZERO).toString());
        if (message.assetID) {
            obj.assetID = message.assetID.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.assetID = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseInternalRewards();
        message.appMappingID =
            object.appMappingID !== undefined && object.appMappingID !== null
                ? long_1.default.fromValue(object.appMappingID)
                : long_1.default.UZERO;
        message.assetID = ((_a = object.assetID) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseLockerExternalRewards() {
    return {
        id: long_1.default.UZERO,
        appMappingId: long_1.default.UZERO,
        assetId: long_1.default.UZERO,
        totalRewards: undefined,
        durationDays: long_1.default.ZERO,
        isActive: false,
        availableRewards: undefined,
        depositor: "",
        startTimestamp: undefined,
        endTimestamp: undefined,
        minLockupTimeSeconds: long_1.default.ZERO,
        epochId: long_1.default.UZERO,
    };
}
exports.LockerExternalRewards = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.appMappingId.isZero()) {
            writer.uint32(16).uint64(message.appMappingId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(24).uint64(message.assetId);
        }
        if (message.totalRewards !== undefined) {
            coin_1.Coin.encode(message.totalRewards, writer.uint32(34).fork()).ldelim();
        }
        if (!message.durationDays.isZero()) {
            writer.uint32(40).int64(message.durationDays);
        }
        if (message.isActive === true) {
            writer.uint32(48).bool(message.isActive);
        }
        if (message.availableRewards !== undefined) {
            coin_1.Coin.encode(message.availableRewards, writer.uint32(58).fork()).ldelim();
        }
        if (message.depositor !== "") {
            writer.uint32(66).string(message.depositor);
        }
        if (message.startTimestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startTimestamp), writer.uint32(74).fork()).ldelim();
        }
        if (message.endTimestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.endTimestamp), writer.uint32(82).fork()).ldelim();
        }
        if (!message.minLockupTimeSeconds.isZero()) {
            writer.uint32(88).int64(message.minLockupTimeSeconds);
        }
        if (!message.epochId.isZero()) {
            writer.uint32(96).uint64(message.epochId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockerExternalRewards();
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
                    message.assetId = reader.uint64();
                    break;
                case 4:
                    message.totalRewards = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.durationDays = reader.int64();
                    break;
                case 6:
                    message.isActive = reader.bool();
                    break;
                case 7:
                    message.availableRewards = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.depositor = reader.string();
                    break;
                case 9:
                    message.startTimestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.endTimestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.minLockupTimeSeconds = reader.int64();
                    break;
                case 12:
                    message.epochId = reader.uint64();
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
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            totalRewards: isSet(object.totalRewards)
                ? coin_1.Coin.fromJSON(object.totalRewards)
                : undefined,
            durationDays: isSet(object.durationDays)
                ? long_1.default.fromValue(object.durationDays)
                : long_1.default.ZERO,
            isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
            availableRewards: isSet(object.availableRewards)
                ? coin_1.Coin.fromJSON(object.availableRewards)
                : undefined,
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
            startTimestamp: isSet(object.startTimestamp)
                ? fromJsonTimestamp(object.startTimestamp)
                : undefined,
            endTimestamp: isSet(object.endTimestamp)
                ? fromJsonTimestamp(object.endTimestamp)
                : undefined,
            minLockupTimeSeconds: isSet(object.minLockupTimeSeconds)
                ? long_1.default.fromValue(object.minLockupTimeSeconds)
                : long_1.default.ZERO,
            epochId: isSet(object.epochId)
                ? long_1.default.fromValue(object.epochId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
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
        message.isActive !== undefined && (obj.isActive = message.isActive);
        message.availableRewards !== undefined &&
            (obj.availableRewards = message.availableRewards
                ? coin_1.Coin.toJSON(message.availableRewards)
                : undefined);
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.startTimestamp !== undefined &&
            (obj.startTimestamp = message.startTimestamp.toISOString());
        message.endTimestamp !== undefined &&
            (obj.endTimestamp = message.endTimestamp.toISOString());
        message.minLockupTimeSeconds !== undefined &&
            (obj.minLockupTimeSeconds = (message.minLockupTimeSeconds || long_1.default.ZERO).toString());
        message.epochId !== undefined &&
            (obj.epochId = (message.epochId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseLockerExternalRewards();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
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
        message.isActive = (_a = object.isActive) !== null && _a !== void 0 ? _a : false;
        message.availableRewards =
            object.availableRewards !== undefined && object.availableRewards !== null
                ? coin_1.Coin.fromPartial(object.availableRewards)
                : undefined;
        message.depositor = (_b = object.depositor) !== null && _b !== void 0 ? _b : "";
        message.startTimestamp = (_c = object.startTimestamp) !== null && _c !== void 0 ? _c : undefined;
        message.endTimestamp = (_d = object.endTimestamp) !== null && _d !== void 0 ? _d : undefined;
        message.minLockupTimeSeconds =
            object.minLockupTimeSeconds !== undefined &&
                object.minLockupTimeSeconds !== null
                ? long_1.default.fromValue(object.minLockupTimeSeconds)
                : long_1.default.ZERO;
        message.epochId =
            object.epochId !== undefined && object.epochId !== null
                ? long_1.default.fromValue(object.epochId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseVaultExternalRewards() {
    return {
        id: long_1.default.UZERO,
        appMappingId: long_1.default.UZERO,
        extendedPairId: long_1.default.UZERO,
        totalRewards: undefined,
        durationDays: long_1.default.ZERO,
        isActive: false,
        availableRewards: undefined,
        depositor: "",
        startTimestamp: undefined,
        endTimestamp: undefined,
        minLockupTimeSeconds: long_1.default.ZERO,
        epochId: long_1.default.UZERO,
    };
}
exports.VaultExternalRewards = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.appMappingId.isZero()) {
            writer.uint32(16).uint64(message.appMappingId);
        }
        if (!message.extendedPairId.isZero()) {
            writer.uint32(24).uint64(message.extendedPairId);
        }
        if (message.totalRewards !== undefined) {
            coin_1.Coin.encode(message.totalRewards, writer.uint32(34).fork()).ldelim();
        }
        if (!message.durationDays.isZero()) {
            writer.uint32(40).int64(message.durationDays);
        }
        if (message.isActive === true) {
            writer.uint32(48).bool(message.isActive);
        }
        if (message.availableRewards !== undefined) {
            coin_1.Coin.encode(message.availableRewards, writer.uint32(58).fork()).ldelim();
        }
        if (message.depositor !== "") {
            writer.uint32(66).string(message.depositor);
        }
        if (message.startTimestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startTimestamp), writer.uint32(74).fork()).ldelim();
        }
        if (message.endTimestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.endTimestamp), writer.uint32(82).fork()).ldelim();
        }
        if (!message.minLockupTimeSeconds.isZero()) {
            writer.uint32(88).int64(message.minLockupTimeSeconds);
        }
        if (!message.epochId.isZero()) {
            writer.uint32(96).uint64(message.epochId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVaultExternalRewards();
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
                    message.extendedPairId = reader.uint64();
                    break;
                case 4:
                    message.totalRewards = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.durationDays = reader.int64();
                    break;
                case 6:
                    message.isActive = reader.bool();
                    break;
                case 7:
                    message.availableRewards = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.depositor = reader.string();
                    break;
                case 9:
                    message.startTimestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.endTimestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.minLockupTimeSeconds = reader.int64();
                    break;
                case 12:
                    message.epochId = reader.uint64();
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
            extendedPairId: isSet(object.extendedPairId)
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO,
            totalRewards: isSet(object.totalRewards)
                ? coin_1.Coin.fromJSON(object.totalRewards)
                : undefined,
            durationDays: isSet(object.durationDays)
                ? long_1.default.fromValue(object.durationDays)
                : long_1.default.ZERO,
            isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
            availableRewards: isSet(object.availableRewards)
                ? coin_1.Coin.fromJSON(object.availableRewards)
                : undefined,
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
            startTimestamp: isSet(object.startTimestamp)
                ? fromJsonTimestamp(object.startTimestamp)
                : undefined,
            endTimestamp: isSet(object.endTimestamp)
                ? fromJsonTimestamp(object.endTimestamp)
                : undefined,
            minLockupTimeSeconds: isSet(object.minLockupTimeSeconds)
                ? long_1.default.fromValue(object.minLockupTimeSeconds)
                : long_1.default.ZERO,
            epochId: isSet(object.epochId)
                ? long_1.default.fromValue(object.epochId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
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
        message.isActive !== undefined && (obj.isActive = message.isActive);
        message.availableRewards !== undefined &&
            (obj.availableRewards = message.availableRewards
                ? coin_1.Coin.toJSON(message.availableRewards)
                : undefined);
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.startTimestamp !== undefined &&
            (obj.startTimestamp = message.startTimestamp.toISOString());
        message.endTimestamp !== undefined &&
            (obj.endTimestamp = message.endTimestamp.toISOString());
        message.minLockupTimeSeconds !== undefined &&
            (obj.minLockupTimeSeconds = (message.minLockupTimeSeconds || long_1.default.ZERO).toString());
        message.epochId !== undefined &&
            (obj.epochId = (message.epochId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseVaultExternalRewards();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
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
        message.isActive = (_a = object.isActive) !== null && _a !== void 0 ? _a : false;
        message.availableRewards =
            object.availableRewards !== undefined && object.availableRewards !== null
                ? coin_1.Coin.fromPartial(object.availableRewards)
                : undefined;
        message.depositor = (_b = object.depositor) !== null && _b !== void 0 ? _b : "";
        message.startTimestamp = (_c = object.startTimestamp) !== null && _c !== void 0 ? _c : undefined;
        message.endTimestamp = (_d = object.endTimestamp) !== null && _d !== void 0 ? _d : undefined;
        message.minLockupTimeSeconds =
            object.minLockupTimeSeconds !== undefined &&
                object.minLockupTimeSeconds !== null
                ? long_1.default.fromValue(object.minLockupTimeSeconds)
                : long_1.default.ZERO;
        message.epochId =
            object.epochId !== undefined && object.epochId !== null
                ? long_1.default.fromValue(object.epochId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseWhitelistedAppIdsVault() {
    return { whitelistedAppMappingIdsVaults: [] };
}
exports.WhitelistedAppIdsVault = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.whitelistedAppMappingIdsVaults) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWhitelistedAppIdsVault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.whitelistedAppMappingIdsVaults.push(reader.uint64());
                        }
                    }
                    else {
                        message.whitelistedAppMappingIdsVaults.push(reader.uint64());
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
            whitelistedAppMappingIdsVaults: Array.isArray(object === null || object === void 0 ? void 0 : object.whitelistedAppMappingIdsVaults)
                ? object.whitelistedAppMappingIdsVaults.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.whitelistedAppMappingIdsVaults) {
            obj.whitelistedAppMappingIdsVaults =
                message.whitelistedAppMappingIdsVaults.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.whitelistedAppMappingIdsVaults = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseWhitelistedAppIdsVault();
        message.whitelistedAppMappingIdsVaults =
            ((_a = object.whitelistedAppMappingIdsVaults) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) ||
                [];
        return message;
    },
};
function createBaseEpochTime() {
    return {
        id: long_1.default.UZERO,
        appMappingId: long_1.default.UZERO,
        startingTime: long_1.default.ZERO,
        count: long_1.default.UZERO,
    };
}
exports.EpochTime = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.appMappingId.isZero()) {
            writer.uint32(16).uint64(message.appMappingId);
        }
        if (!message.startingTime.isZero()) {
            writer.uint32(24).int64(message.startingTime);
        }
        if (!message.count.isZero()) {
            writer.uint32(32).uint64(message.count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEpochTime();
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
                    message.startingTime = reader.int64();
                    break;
                case 4:
                    message.count = reader.uint64();
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
            startingTime: isSet(object.startingTime)
                ? long_1.default.fromValue(object.startingTime)
                : long_1.default.ZERO,
            count: isSet(object.count) ? long_1.default.fromValue(object.count) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        message.startingTime !== undefined &&
            (obj.startingTime = (message.startingTime || long_1.default.ZERO).toString());
        message.count !== undefined &&
            (obj.count = (message.count || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEpochTime();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.startingTime =
            object.startingTime !== undefined && object.startingTime !== null
                ? long_1.default.fromValue(object.startingTime)
                : long_1.default.ZERO;
        message.count =
            object.count !== undefined && object.count !== null
                ? long_1.default.fromValue(object.count)
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
//# sourceMappingURL=rewards.js.map