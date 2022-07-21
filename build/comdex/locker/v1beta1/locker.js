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
exports.LockerTotalRewardsByAssetAppWise = exports.LockedDepositedAmountDataMap = exports.LockerProductAssetMapping = exports.TokenToLockerMapping = exports.LockerLookupTable = exports.UserTxData = exports.AssetToLockerMapping = exports.LockerToAppMapping = exports.UserLockerAssetMapping = exports.Locker = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.locker.v1beta1";
function createBaseLocker() {
    return {
        lockerId: "",
        depositor: "",
        returnsAccumulated: "",
        netBalance: "",
        createdAt: undefined,
        assetDepositId: long_1.default.UZERO,
        isLocked: false,
        appId: long_1.default.UZERO,
    };
}
exports.Locker = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.lockerId !== "") {
            writer.uint32(10).string(message.lockerId);
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        if (message.returnsAccumulated !== "") {
            writer.uint32(26).string(message.returnsAccumulated);
        }
        if (message.netBalance !== "") {
            writer.uint32(34).string(message.netBalance);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        if (!message.assetDepositId.isZero()) {
            writer.uint32(48).uint64(message.assetDepositId);
        }
        if (message.isLocked === true) {
            writer.uint32(56).bool(message.isLocked);
        }
        if (!message.appId.isZero()) {
            writer.uint32(64).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLocker();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockerId = reader.string();
                    break;
                case 2:
                    message.depositor = reader.string();
                    break;
                case 3:
                    message.returnsAccumulated = reader.string();
                    break;
                case 4:
                    message.netBalance = reader.string();
                    break;
                case 5:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.assetDepositId = reader.uint64();
                    break;
                case 7:
                    message.isLocked = reader.bool();
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
            lockerId: isSet(object.lockerId) ? String(object.lockerId) : "",
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
            returnsAccumulated: isSet(object.returnsAccumulated)
                ? String(object.returnsAccumulated)
                : "",
            netBalance: isSet(object.netBalance) ? String(object.netBalance) : "",
            createdAt: isSet(object.createdAt)
                ? fromJsonTimestamp(object.createdAt)
                : undefined,
            assetDepositId: isSet(object.assetDepositId)
                ? long_1.default.fromValue(object.assetDepositId)
                : long_1.default.UZERO,
            isLocked: isSet(object.isLocked) ? Boolean(object.isLocked) : false,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lockerId !== undefined && (obj.lockerId = message.lockerId);
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.returnsAccumulated !== undefined &&
            (obj.returnsAccumulated = message.returnsAccumulated);
        message.netBalance !== undefined && (obj.netBalance = message.netBalance);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.assetDepositId !== undefined &&
            (obj.assetDepositId = (message.assetDepositId || long_1.default.UZERO).toString());
        message.isLocked !== undefined && (obj.isLocked = message.isLocked);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseLocker();
        message.lockerId = (_a = object.lockerId) !== null && _a !== void 0 ? _a : "";
        message.depositor = (_b = object.depositor) !== null && _b !== void 0 ? _b : "";
        message.returnsAccumulated = (_c = object.returnsAccumulated) !== null && _c !== void 0 ? _c : "";
        message.netBalance = (_d = object.netBalance) !== null && _d !== void 0 ? _d : "";
        message.createdAt = (_e = object.createdAt) !== null && _e !== void 0 ? _e : undefined;
        message.assetDepositId =
            object.assetDepositId !== undefined && object.assetDepositId !== null
                ? long_1.default.fromValue(object.assetDepositId)
                : long_1.default.UZERO;
        message.isLocked = (_f = object.isLocked) !== null && _f !== void 0 ? _f : false;
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseUserLockerAssetMapping() {
    return { owner: "", lockerAppMapping: [] };
}
exports.UserLockerAssetMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        for (const v of message.lockerAppMapping) {
            exports.LockerToAppMapping.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserLockerAssetMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.lockerAppMapping.push(exports.LockerToAppMapping.decode(reader, reader.uint32()));
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
            lockerAppMapping: Array.isArray(object === null || object === void 0 ? void 0 : object.lockerAppMapping)
                ? object.lockerAppMapping.map((e) => exports.LockerToAppMapping.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        if (message.lockerAppMapping) {
            obj.lockerAppMapping = message.lockerAppMapping.map((e) => e ? exports.LockerToAppMapping.toJSON(e) : undefined);
        }
        else {
            obj.lockerAppMapping = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserLockerAssetMapping();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.lockerAppMapping =
            ((_b = object.lockerAppMapping) === null || _b === void 0 ? void 0 : _b.map((e) => exports.LockerToAppMapping.fromPartial(e))) ||
                [];
        return message;
    },
};
function createBaseLockerToAppMapping() {
    return { appId: long_1.default.UZERO, userAssetLocker: [] };
}
exports.LockerToAppMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        for (const v of message.userAssetLocker) {
            exports.AssetToLockerMapping.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockerToAppMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.userAssetLocker.push(exports.AssetToLockerMapping.decode(reader, reader.uint32()));
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
            userAssetLocker: Array.isArray(object === null || object === void 0 ? void 0 : object.userAssetLocker)
                ? object.userAssetLocker.map((e) => exports.AssetToLockerMapping.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        if (message.userAssetLocker) {
            obj.userAssetLocker = message.userAssetLocker.map((e) => e ? exports.AssetToLockerMapping.toJSON(e) : undefined);
        }
        else {
            obj.userAssetLocker = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLockerToAppMapping();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.userAssetLocker =
            ((_a = object.userAssetLocker) === null || _a === void 0 ? void 0 : _a.map((e) => exports.AssetToLockerMapping.fromPartial(e))) ||
                [];
        return message;
    },
};
function createBaseAssetToLockerMapping() {
    return { assetId: long_1.default.UZERO, lockerId: "", userData: [] };
}
exports.AssetToLockerMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (message.lockerId !== "") {
            writer.uint32(18).string(message.lockerId);
        }
        for (const v of message.userData) {
            exports.UserTxData.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetToLockerMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint64();
                    break;
                case 2:
                    message.lockerId = reader.string();
                    break;
                case 3:
                    message.userData.push(exports.UserTxData.decode(reader, reader.uint32()));
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
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            lockerId: isSet(object.lockerId) ? String(object.lockerId) : "",
            userData: Array.isArray(object === null || object === void 0 ? void 0 : object.userData)
                ? object.userData.map((e) => exports.UserTxData.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.lockerId !== undefined && (obj.lockerId = message.lockerId);
        if (message.userData) {
            obj.userData = message.userData.map((e) => e ? exports.UserTxData.toJSON(e) : undefined);
        }
        else {
            obj.userData = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAssetToLockerMapping();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.lockerId = (_a = object.lockerId) !== null && _a !== void 0 ? _a : "";
        message.userData =
            ((_b = object.userData) === null || _b === void 0 ? void 0 : _b.map((e) => exports.UserTxData.fromPartial(e))) || [];
        return message;
    },
};
function createBaseUserTxData() {
    return { txType: "", amount: "", balance: "", txTime: undefined };
}
exports.UserTxData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.txType !== "") {
            writer.uint32(10).string(message.txType);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        if (message.balance !== "") {
            writer.uint32(26).string(message.balance);
        }
        if (message.txTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.txTime), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserTxData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txType = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                case 3:
                    message.balance = reader.string();
                    break;
                case 4:
                    message.txTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            txType: isSet(object.txType) ? String(object.txType) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            balance: isSet(object.balance) ? String(object.balance) : "",
            txTime: isSet(object.txTime)
                ? fromJsonTimestamp(object.txTime)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.txType !== undefined && (obj.txType = message.txType);
        message.amount !== undefined && (obj.amount = message.amount);
        message.balance !== undefined && (obj.balance = message.balance);
        message.txTime !== undefined && (obj.txTime = message.txTime.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseUserTxData();
        message.txType = (_a = object.txType) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        message.balance = (_c = object.balance) !== null && _c !== void 0 ? _c : "";
        message.txTime = (_d = object.txTime) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseLockerLookupTable() {
    return { appId: long_1.default.UZERO, lockers: [], counter: long_1.default.UZERO };
}
exports.LockerLookupTable = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        for (const v of message.lockers) {
            exports.TokenToLockerMapping.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (!message.counter.isZero()) {
            writer.uint32(24).uint64(message.counter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockerLookupTable();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.lockers.push(exports.TokenToLockerMapping.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.counter = reader.uint64();
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
            lockers: Array.isArray(object === null || object === void 0 ? void 0 : object.lockers)
                ? object.lockers.map((e) => exports.TokenToLockerMapping.fromJSON(e))
                : [],
            counter: isSet(object.counter)
                ? long_1.default.fromValue(object.counter)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        if (message.lockers) {
            obj.lockers = message.lockers.map((e) => e ? exports.TokenToLockerMapping.toJSON(e) : undefined);
        }
        else {
            obj.lockers = [];
        }
        message.counter !== undefined &&
            (obj.counter = (message.counter || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLockerLookupTable();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.lockers =
            ((_a = object.lockers) === null || _a === void 0 ? void 0 : _a.map((e) => exports.TokenToLockerMapping.fromPartial(e))) || [];
        message.counter =
            object.counter !== undefined && object.counter !== null
                ? long_1.default.fromValue(object.counter)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseTokenToLockerMapping() {
    return { assetId: long_1.default.UZERO, lockerIds: [], depositedAmount: "" };
}
exports.TokenToLockerMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        for (const v of message.lockerIds) {
            writer.uint32(18).string(v);
        }
        if (message.depositedAmount !== "") {
            writer.uint32(34).string(message.depositedAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenToLockerMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint64();
                    break;
                case 2:
                    message.lockerIds.push(reader.string());
                    break;
                case 4:
                    message.depositedAmount = reader.string();
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
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            lockerIds: Array.isArray(object === null || object === void 0 ? void 0 : object.lockerIds)
                ? object.lockerIds.map((e) => String(e))
                : [],
            depositedAmount: isSet(object.depositedAmount)
                ? String(object.depositedAmount)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        if (message.lockerIds) {
            obj.lockerIds = message.lockerIds.map((e) => e);
        }
        else {
            obj.lockerIds = [];
        }
        message.depositedAmount !== undefined &&
            (obj.depositedAmount = message.depositedAmount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTokenToLockerMapping();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.lockerIds = ((_a = object.lockerIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.depositedAmount = (_b = object.depositedAmount) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseLockerProductAssetMapping() {
    return { appId: long_1.default.UZERO, assetIds: [] };
}
exports.LockerProductAssetMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        writer.uint32(18).fork();
        for (const v of message.assetIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockerProductAssetMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.assetIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.assetIds.push(reader.uint64());
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            assetIds: Array.isArray(object === null || object === void 0 ? void 0 : object.assetIds)
                ? object.assetIds.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        if (message.assetIds) {
            obj.assetIds = message.assetIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.assetIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLockerProductAssetMapping();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetIds = ((_a = object.assetIds) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseLockedDepositedAmountDataMap() {
    return { assetId: long_1.default.UZERO, depositedAmount: "" };
}
exports.LockedDepositedAmountDataMap = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (message.depositedAmount !== "") {
            writer.uint32(18).string(message.depositedAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedDepositedAmountDataMap();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint64();
                    break;
                case 2:
                    message.depositedAmount = reader.string();
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
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            depositedAmount: isSet(object.depositedAmount)
                ? String(object.depositedAmount)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.depositedAmount !== undefined &&
            (obj.depositedAmount = message.depositedAmount);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLockedDepositedAmountDataMap();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.depositedAmount = (_a = object.depositedAmount) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseLockerTotalRewardsByAssetAppWise() {
    return { appId: long_1.default.UZERO, assetId: long_1.default.UZERO, totalRewards: "" };
}
exports.LockerTotalRewardsByAssetAppWise = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        if (message.totalRewards !== "") {
            writer.uint32(26).string(message.totalRewards);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockerTotalRewardsByAssetAppWise();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.assetId = reader.uint64();
                    break;
                case 3:
                    message.totalRewards = reader.string();
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
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            totalRewards: isSet(object.totalRewards)
                ? String(object.totalRewards)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.totalRewards !== undefined &&
            (obj.totalRewards = message.totalRewards);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLockerTotalRewardsByAssetAppWise();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.totalRewards = (_a = object.totalRewards) !== null && _a !== void 0 ? _a : "";
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
//# sourceMappingURL=locker.js.map