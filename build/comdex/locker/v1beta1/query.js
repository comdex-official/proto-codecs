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
exports.QueryClientImpl = exports.QueryStateResponse = exports.QueryStateRequest = exports.QueryLockerTotalRewardsByAssetAppWiseResponse = exports.QueryLockerTotalRewardsByAssetAppWiseRequest = exports.QueryLockerTotalDepositedByAppResponse = exports.QueryLockerTotalDepositedByAppRequest = exports.QueryLockerLookupTableByAppAndAssetIDResponse = exports.QueryLockerLookupTableByAppAndAssetIDRequest = exports.QueryLockerLookupTableByAppResponse = exports.QueryLockerLookupTableByAppRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.AppToAllAsset = exports.QueryWhiteListedAssetByAllAppsResponse = exports.QueryWhiteListedAssetByAllAppsRequest = exports.QueryWhiteListedAssetIDsByAppIDResponse = exports.QueryWhiteListedAssetIDsByAppIDRequest = exports.QueryLockerCountByAppToAssetIDResponse = exports.QueryLockerCountByAppToAssetIDRequest = exports.QueryLockerCountByAppIDResponse = exports.QueryLockerCountByAppIDRequest = exports.QueryLockerByAppByOwnerResponse = exports.QueryLockerByAppByOwnerRequest = exports.QueryOwnerLockerByAppToAssetIDbyOwnerResponse = exports.QueryOwnerLockerByAppToAssetIDbyOwnerRequest = exports.QueryOwnerTxDetailsLockerOfAppByOwnerByAssetResponse = exports.QueryOwnerTxDetailsLockerOfAppByOwnerByAssetRequest = exports.QueryOwnerLockerOfAllAppsByOwnerResponse = exports.QueryOwnerLockerOfAllAppsByOwnerRequest = exports.QueryOwnerLockerByAppIDbyOwnerResponse = exports.QueryOwnerLockerByAppIDbyOwnerRequest = exports.QueryTotalDepositByAppAndAssetIDResponse = exports.QueryTotalDepositByAppAndAssetIDRequest = exports.QueryLockerInfoByAppIDResponse = exports.QueryLockerInfoByAppIDRequest = exports.QueryLockersByAppToAssetIDResponse = exports.QueryLockersByAppToAssetIDRequest = exports.QueryLockerInfoResponse = exports.QueryLockerInfoRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const locker_1 = require("../../../comdex/locker/v1beta1/locker");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const params_1 = require("../../../comdex/locker/v1beta1/params");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const asset_1 = require("../../../comdex/asset/v1beta1/asset");
exports.protobufPackage = "comdex.locker.v1beta1";
function createBaseQueryLockerInfoRequest() {
    return { id: "" };
}
exports.QueryLockerInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLockerInfoRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryLockerInfoResponse() {
    return { lockerInfo: undefined };
}
exports.QueryLockerInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.lockerInfo !== undefined) {
            locker_1.Locker.encode(message.lockerInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockerInfo = locker_1.Locker.decode(reader, reader.uint32());
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
            lockerInfo: isSet(object.lockerInfo)
                ? locker_1.Locker.fromJSON(object.lockerInfo)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lockerInfo !== undefined &&
            (obj.lockerInfo = message.lockerInfo
                ? locker_1.Locker.toJSON(message.lockerInfo)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockerInfoResponse();
        message.lockerInfo =
            object.lockerInfo !== undefined && object.lockerInfo !== null
                ? locker_1.Locker.fromPartial(object.lockerInfo)
                : undefined;
        return message;
    },
};
function createBaseQueryLockersByAppToAssetIDRequest() {
    return { appId: long_1.default.UZERO, assetId: long_1.default.UZERO };
}
exports.QueryLockersByAppToAssetIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockersByAppToAssetIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockersByAppToAssetIDRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryLockersByAppToAssetIDResponse() {
    return { lockerIds: [] };
}
exports.QueryLockersByAppToAssetIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.lockerIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockersByAppToAssetIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockerIds.push(reader.string());
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
            lockerIds: Array.isArray(object === null || object === void 0 ? void 0 : object.lockerIds)
                ? object.lockerIds.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lockerIds) {
            obj.lockerIds = message.lockerIds.map((e) => e);
        }
        else {
            obj.lockerIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLockersByAppToAssetIDResponse();
        message.lockerIds = ((_a = object.lockerIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryLockerInfoByAppIDRequest() {
    return { appId: long_1.default.UZERO };
}
exports.QueryLockerInfoByAppIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerInfoByAppIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockerInfoByAppIDRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryLockerInfoByAppIDResponse() {
    return { lockerIds: [] };
}
exports.QueryLockerInfoByAppIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.lockerIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerInfoByAppIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockerIds.push(reader.string());
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
            lockerIds: Array.isArray(object === null || object === void 0 ? void 0 : object.lockerIds)
                ? object.lockerIds.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lockerIds) {
            obj.lockerIds = message.lockerIds.map((e) => e);
        }
        else {
            obj.lockerIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLockerInfoByAppIDResponse();
        message.lockerIds = ((_a = object.lockerIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryTotalDepositByAppAndAssetIDRequest() {
    return { appId: long_1.default.UZERO, assetId: long_1.default.UZERO };
}
exports.QueryTotalDepositByAppAndAssetIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDepositByAppAndAssetIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalDepositByAppAndAssetIDRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryTotalDepositByAppAndAssetIDResponse() {
    return { totalDeposit: long_1.default.UZERO };
}
exports.QueryTotalDepositByAppAndAssetIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.totalDeposit.isZero()) {
            writer.uint32(8).uint64(message.totalDeposit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDepositByAppAndAssetIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalDeposit = reader.uint64();
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
            totalDeposit: isSet(object.totalDeposit)
                ? long_1.default.fromValue(object.totalDeposit)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.totalDeposit !== undefined &&
            (obj.totalDeposit = (message.totalDeposit || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalDepositByAppAndAssetIDResponse();
        message.totalDeposit =
            object.totalDeposit !== undefined && object.totalDeposit !== null
                ? long_1.default.fromValue(object.totalDeposit)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryOwnerLockerByAppIDbyOwnerRequest() {
    return { appId: long_1.default.UZERO, owner: "" };
}
exports.QueryOwnerLockerByAppIDbyOwnerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerLockerByAppIDbyOwnerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.owner = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOwnerLockerByAppIDbyOwnerRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryOwnerLockerByAppIDbyOwnerResponse() {
    return { lockerIds: [] };
}
exports.QueryOwnerLockerByAppIDbyOwnerResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.lockerIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerLockerByAppIDbyOwnerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockerIds.push(reader.string());
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
            lockerIds: Array.isArray(object === null || object === void 0 ? void 0 : object.lockerIds)
                ? object.lockerIds.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lockerIds) {
            obj.lockerIds = message.lockerIds.map((e) => e);
        }
        else {
            obj.lockerIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOwnerLockerByAppIDbyOwnerResponse();
        message.lockerIds = ((_a = object.lockerIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryOwnerLockerOfAllAppsByOwnerRequest() {
    return { owner: "" };
}
exports.QueryOwnerLockerOfAllAppsByOwnerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerLockerOfAllAppsByOwnerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.owner = reader.string();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOwnerLockerOfAllAppsByOwnerRequest();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryOwnerLockerOfAllAppsByOwnerResponse() {
    return { lockerIds: [] };
}
exports.QueryOwnerLockerOfAllAppsByOwnerResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.lockerIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerLockerOfAllAppsByOwnerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockerIds.push(reader.string());
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
            lockerIds: Array.isArray(object === null || object === void 0 ? void 0 : object.lockerIds)
                ? object.lockerIds.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lockerIds) {
            obj.lockerIds = message.lockerIds.map((e) => e);
        }
        else {
            obj.lockerIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOwnerLockerOfAllAppsByOwnerResponse();
        message.lockerIds = ((_a = object.lockerIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryOwnerTxDetailsLockerOfAppByOwnerByAssetRequest() {
    return {
        appId: long_1.default.UZERO,
        owner: "",
        assetId: long_1.default.UZERO,
        pagination: undefined,
    };
}
exports.QueryOwnerTxDetailsLockerOfAppByOwnerByAssetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(24).uint64(message.assetId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerTxDetailsLockerOfAppByOwnerByAssetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.assetId = reader.uint64();
                    break;
                case 4:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOwnerTxDetailsLockerOfAppByOwnerByAssetRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryOwnerTxDetailsLockerOfAppByOwnerByAssetResponse() {
    return { userTxData: [], pagination: undefined };
}
exports.QueryOwnerTxDetailsLockerOfAppByOwnerByAssetResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.userTxData) {
            locker_1.UserTxData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerTxDetailsLockerOfAppByOwnerByAssetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userTxData.push(locker_1.UserTxData.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            userTxData: Array.isArray(object === null || object === void 0 ? void 0 : object.userTxData)
                ? object.userTxData.map((e) => locker_1.UserTxData.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userTxData) {
            obj.userTxData = message.userTxData.map((e) => e ? locker_1.UserTxData.toJSON(e) : undefined);
        }
        else {
            obj.userTxData = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOwnerTxDetailsLockerOfAppByOwnerByAssetResponse();
        message.userTxData =
            ((_a = object.userTxData) === null || _a === void 0 ? void 0 : _a.map((e) => locker_1.UserTxData.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryOwnerLockerByAppToAssetIDbyOwnerRequest() {
    return { appId: long_1.default.UZERO, assetId: long_1.default.UZERO, owner: "" };
}
exports.QueryOwnerLockerByAppToAssetIDbyOwnerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerLockerByAppToAssetIDbyOwnerRequest();
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
                    message.owner = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOwnerLockerByAppToAssetIDbyOwnerRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryOwnerLockerByAppToAssetIDbyOwnerResponse() {
    return { lockerInfo: [] };
}
exports.QueryOwnerLockerByAppToAssetIDbyOwnerResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.lockerInfo) {
            locker_1.Locker.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerLockerByAppToAssetIDbyOwnerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockerInfo.push(locker_1.Locker.decode(reader, reader.uint32()));
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
            lockerInfo: Array.isArray(object === null || object === void 0 ? void 0 : object.lockerInfo)
                ? object.lockerInfo.map((e) => locker_1.Locker.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lockerInfo) {
            obj.lockerInfo = message.lockerInfo.map((e) => e ? locker_1.Locker.toJSON(e) : undefined);
        }
        else {
            obj.lockerInfo = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOwnerLockerByAppToAssetIDbyOwnerResponse();
        message.lockerInfo =
            ((_a = object.lockerInfo) === null || _a === void 0 ? void 0 : _a.map((e) => locker_1.Locker.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLockerByAppByOwnerRequest() {
    return { appId: long_1.default.UZERO, owner: "" };
}
exports.QueryLockerByAppByOwnerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerByAppByOwnerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.owner = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLockerByAppByOwnerRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryLockerByAppByOwnerResponse() {
    return { lockerInfo: [] };
}
exports.QueryLockerByAppByOwnerResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.lockerInfo) {
            locker_1.Locker.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerByAppByOwnerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockerInfo.push(locker_1.Locker.decode(reader, reader.uint32()));
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
            lockerInfo: Array.isArray(object === null || object === void 0 ? void 0 : object.lockerInfo)
                ? object.lockerInfo.map((e) => locker_1.Locker.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lockerInfo) {
            obj.lockerInfo = message.lockerInfo.map((e) => e ? locker_1.Locker.toJSON(e) : undefined);
        }
        else {
            obj.lockerInfo = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLockerByAppByOwnerResponse();
        message.lockerInfo =
            ((_a = object.lockerInfo) === null || _a === void 0 ? void 0 : _a.map((e) => locker_1.Locker.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLockerCountByAppIDRequest() {
    return { appId: long_1.default.UZERO };
}
exports.QueryLockerCountByAppIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerCountByAppIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockerCountByAppIDRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryLockerCountByAppIDResponse() {
    return { totalCount: long_1.default.UZERO };
}
exports.QueryLockerCountByAppIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.totalCount.isZero()) {
            writer.uint32(8).uint64(message.totalCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerCountByAppIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalCount = reader.uint64();
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
            totalCount: isSet(object.totalCount)
                ? long_1.default.fromValue(object.totalCount)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.totalCount !== undefined &&
            (obj.totalCount = (message.totalCount || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockerCountByAppIDResponse();
        message.totalCount =
            object.totalCount !== undefined && object.totalCount !== null
                ? long_1.default.fromValue(object.totalCount)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryLockerCountByAppToAssetIDRequest() {
    return { appId: long_1.default.UZERO, assetId: long_1.default.UZERO };
}
exports.QueryLockerCountByAppToAssetIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerCountByAppToAssetIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockerCountByAppToAssetIDRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryLockerCountByAppToAssetIDResponse() {
    return { totalCount: long_1.default.UZERO };
}
exports.QueryLockerCountByAppToAssetIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.totalCount.isZero()) {
            writer.uint32(8).uint64(message.totalCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerCountByAppToAssetIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalCount = reader.uint64();
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
            totalCount: isSet(object.totalCount)
                ? long_1.default.fromValue(object.totalCount)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.totalCount !== undefined &&
            (obj.totalCount = (message.totalCount || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockerCountByAppToAssetIDResponse();
        message.totalCount =
            object.totalCount !== undefined && object.totalCount !== null
                ? long_1.default.fromValue(object.totalCount)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryWhiteListedAssetIDsByAppIDRequest() {
    return { appId: long_1.default.UZERO };
}
exports.QueryWhiteListedAssetIDsByAppIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhiteListedAssetIDsByAppIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryWhiteListedAssetIDsByAppIDRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryWhiteListedAssetIDsByAppIDResponse() {
    return { assetIds: [] };
}
exports.QueryWhiteListedAssetIDsByAppIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.assetIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhiteListedAssetIDsByAppIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            assetIds: Array.isArray(object === null || object === void 0 ? void 0 : object.assetIds)
                ? object.assetIds.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
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
        const message = createBaseQueryWhiteListedAssetIDsByAppIDResponse();
        message.assetIds = ((_a = object.assetIds) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseQueryWhiteListedAssetByAllAppsRequest() {
    return {};
}
exports.QueryWhiteListedAssetByAllAppsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhiteListedAssetByAllAppsRequest();
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
        const message = createBaseQueryWhiteListedAssetByAllAppsRequest();
        return message;
    },
};
function createBaseQueryWhiteListedAssetByAllAppsResponse() {
    return { productToAllAsset: [] };
}
exports.QueryWhiteListedAssetByAllAppsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.productToAllAsset) {
            exports.AppToAllAsset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhiteListedAssetByAllAppsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productToAllAsset.push(exports.AppToAllAsset.decode(reader, reader.uint32()));
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
            productToAllAsset: Array.isArray(object === null || object === void 0 ? void 0 : object.productToAllAsset)
                ? object.productToAllAsset.map((e) => exports.AppToAllAsset.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.productToAllAsset) {
            obj.productToAllAsset = message.productToAllAsset.map((e) => e ? exports.AppToAllAsset.toJSON(e) : undefined);
        }
        else {
            obj.productToAllAsset = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryWhiteListedAssetByAllAppsResponse();
        message.productToAllAsset =
            ((_a = object.productToAllAsset) === null || _a === void 0 ? void 0 : _a.map((e) => exports.AppToAllAsset.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAppToAllAsset() {
    return { appId: long_1.default.UZERO, assets: [] };
}
exports.AppToAllAsset = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        for (const v of message.assets) {
            asset_1.Asset.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppToAllAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.assets.push(asset_1.Asset.decode(reader, reader.uint32()));
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
            assets: Array.isArray(object === null || object === void 0 ? void 0 : object.assets)
                ? object.assets.map((e) => asset_1.Asset.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        if (message.assets) {
            obj.assets = message.assets.map((e) => (e ? asset_1.Asset.toJSON(e) : undefined));
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAppToAllAsset();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assets = ((_a = object.assets) === null || _a === void 0 ? void 0 : _a.map((e) => asset_1.Asset.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
exports.QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseQueryLockerLookupTableByAppRequest() {
    return { appId: long_1.default.UZERO };
}
exports.QueryLockerLookupTableByAppRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerLookupTableByAppRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockerLookupTableByAppRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryLockerLookupTableByAppResponse() {
    return { tokenToLockerMapping: [] };
}
exports.QueryLockerLookupTableByAppResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.tokenToLockerMapping) {
            locker_1.TokenToLockerMapping.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerLookupTableByAppResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenToLockerMapping.push(locker_1.TokenToLockerMapping.decode(reader, reader.uint32()));
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
            tokenToLockerMapping: Array.isArray(object === null || object === void 0 ? void 0 : object.tokenToLockerMapping)
                ? object.tokenToLockerMapping.map((e) => locker_1.TokenToLockerMapping.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tokenToLockerMapping) {
            obj.tokenToLockerMapping = message.tokenToLockerMapping.map((e) => e ? locker_1.TokenToLockerMapping.toJSON(e) : undefined);
        }
        else {
            obj.tokenToLockerMapping = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLockerLookupTableByAppResponse();
        message.tokenToLockerMapping =
            ((_a = object.tokenToLockerMapping) === null || _a === void 0 ? void 0 : _a.map((e) => locker_1.TokenToLockerMapping.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLockerLookupTableByAppAndAssetIDRequest() {
    return { appId: long_1.default.UZERO, assetId: long_1.default.UZERO };
}
exports.QueryLockerLookupTableByAppAndAssetIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerLookupTableByAppAndAssetIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockerLookupTableByAppAndAssetIDRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryLockerLookupTableByAppAndAssetIDResponse() {
    return { tokenToLockerMapping: undefined };
}
exports.QueryLockerLookupTableByAppAndAssetIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tokenToLockerMapping !== undefined) {
            locker_1.TokenToLockerMapping.encode(message.tokenToLockerMapping, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerLookupTableByAppAndAssetIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenToLockerMapping = locker_1.TokenToLockerMapping.decode(reader, reader.uint32());
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
            tokenToLockerMapping: isSet(object.tokenToLockerMapping)
                ? locker_1.TokenToLockerMapping.fromJSON(object.tokenToLockerMapping)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.tokenToLockerMapping !== undefined &&
            (obj.tokenToLockerMapping = message.tokenToLockerMapping
                ? locker_1.TokenToLockerMapping.toJSON(message.tokenToLockerMapping)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockerLookupTableByAppAndAssetIDResponse();
        message.tokenToLockerMapping =
            object.tokenToLockerMapping !== undefined &&
                object.tokenToLockerMapping !== null
                ? locker_1.TokenToLockerMapping.fromPartial(object.tokenToLockerMapping)
                : undefined;
        return message;
    },
};
function createBaseQueryLockerTotalDepositedByAppRequest() {
    return { appId: long_1.default.UZERO };
}
exports.QueryLockerTotalDepositedByAppRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerTotalDepositedByAppRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockerTotalDepositedByAppRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryLockerTotalDepositedByAppResponse() {
    return { lockedDepositedAmountDataMap: [] };
}
exports.QueryLockerTotalDepositedByAppResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.lockedDepositedAmountDataMap) {
            locker_1.LockedDepositedAmountDataMap.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerTotalDepositedByAppResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockedDepositedAmountDataMap.push(locker_1.LockedDepositedAmountDataMap.decode(reader, reader.uint32()));
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
            lockedDepositedAmountDataMap: Array.isArray(object === null || object === void 0 ? void 0 : object.lockedDepositedAmountDataMap)
                ? object.lockedDepositedAmountDataMap.map((e) => locker_1.LockedDepositedAmountDataMap.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lockedDepositedAmountDataMap) {
            obj.lockedDepositedAmountDataMap =
                message.lockedDepositedAmountDataMap.map((e) => e ? locker_1.LockedDepositedAmountDataMap.toJSON(e) : undefined);
        }
        else {
            obj.lockedDepositedAmountDataMap = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLockerTotalDepositedByAppResponse();
        message.lockedDepositedAmountDataMap =
            ((_a = object.lockedDepositedAmountDataMap) === null || _a === void 0 ? void 0 : _a.map((e) => locker_1.LockedDepositedAmountDataMap.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLockerTotalRewardsByAssetAppWiseRequest() {
    return { appId: long_1.default.UZERO, assetId: long_1.default.UZERO };
}
exports.QueryLockerTotalRewardsByAssetAppWiseRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerTotalRewardsByAssetAppWiseRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockerTotalRewardsByAssetAppWiseRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryLockerTotalRewardsByAssetAppWiseResponse() {
    return { totalRewards: undefined };
}
exports.QueryLockerTotalRewardsByAssetAppWiseResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.totalRewards !== undefined) {
            locker_1.LockerTotalRewardsByAssetAppWise.encode(message.totalRewards, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerTotalRewardsByAssetAppWiseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalRewards = locker_1.LockerTotalRewardsByAssetAppWise.decode(reader, reader.uint32());
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
            totalRewards: isSet(object.totalRewards)
                ? locker_1.LockerTotalRewardsByAssetAppWise.fromJSON(object.totalRewards)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.totalRewards !== undefined &&
            (obj.totalRewards = message.totalRewards
                ? locker_1.LockerTotalRewardsByAssetAppWise.toJSON(message.totalRewards)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockerTotalRewardsByAssetAppWiseResponse();
        message.totalRewards =
            object.totalRewards !== undefined && object.totalRewards !== null
                ? locker_1.LockerTotalRewardsByAssetAppWise.fromPartial(object.totalRewards)
                : undefined;
        return message;
    },
};
function createBaseQueryStateRequest() {
    return { address: "", denom: "", height: "", target: "" };
}
exports.QueryStateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.height !== "") {
            writer.uint32(26).string(message.height);
        }
        if (message.target !== "") {
            writer.uint32(34).string(message.target);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.height = reader.string();
                    break;
                case 4:
                    message.target = reader.string();
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
            address: isSet(object.address) ? String(object.address) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            height: isSet(object.height) ? String(object.height) : "",
            target: isSet(object.target) ? String(object.target) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.denom !== undefined && (obj.denom = message.denom);
        message.height !== undefined && (obj.height = message.height);
        message.target !== undefined && (obj.target = message.target);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseQueryStateRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        message.height = (_c = object.height) !== null && _c !== void 0 ? _c : "";
        message.target = (_d = object.target) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseQueryStateResponse() {
    return { amount: undefined };
}
exports.QueryStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryStateResponse();
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? coin_1.Coin.fromPartial(object.amount)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.QueryLockerInfo = this.QueryLockerInfo.bind(this);
        this.QueryLockersByAppToAssetID =
            this.QueryLockersByAppToAssetID.bind(this);
        this.QueryLockerInfoByAppID = this.QueryLockerInfoByAppID.bind(this);
        this.QueryTotalDepositByAppAndAssetID =
            this.QueryTotalDepositByAppAndAssetID.bind(this);
        this.QueryOwnerLockerByAppIDbyOwner =
            this.QueryOwnerLockerByAppIDbyOwner.bind(this);
        this.QueryOwnerLockerOfAllAppsByOwner =
            this.QueryOwnerLockerOfAllAppsByOwner.bind(this);
        this.QueryOwnerTxDetailsLockerOfAppByOwnerByAsset =
            this.QueryOwnerTxDetailsLockerOfAppByOwnerByAsset.bind(this);
        this.QueryOwnerLockerByAppToAssetIDbyOwner =
            this.QueryOwnerLockerByAppToAssetIDbyOwner.bind(this);
        this.QueryLockerByAppByOwner = this.QueryLockerByAppByOwner.bind(this);
        this.QueryLockerCountByAppID = this.QueryLockerCountByAppID.bind(this);
        this.QueryLockerCountByAppToAssetID =
            this.QueryLockerCountByAppToAssetID.bind(this);
        this.QueryWhiteListedAssetIDsByAppID =
            this.QueryWhiteListedAssetIDsByAppID.bind(this);
        this.QueryWhiteListedAssetByAllApps =
            this.QueryWhiteListedAssetByAllApps.bind(this);
        this.QueryParams = this.QueryParams.bind(this);
        this.QueryLockerLookupTableByApp =
            this.QueryLockerLookupTableByApp.bind(this);
        this.QueryLockerLookupTableByAppAndAssetID =
            this.QueryLockerLookupTableByAppAndAssetID.bind(this);
        this.QueryLockerTotalRewardsByAssetAppWise =
            this.QueryLockerTotalRewardsByAssetAppWise.bind(this);
        this.QueryLockerTotalDepositedByApp =
            this.QueryLockerTotalDepositedByApp.bind(this);
        this.QueryState = this.QueryState.bind(this);
    }
    QueryLockerInfo(request) {
        const data = exports.QueryLockerInfoRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Query", "QueryLockerInfo", data);
        return promise.then((data) => exports.QueryLockerInfoResponse.decode(new _m0.Reader(data)));
    }
    QueryLockersByAppToAssetID(request) {
        const data = exports.QueryLockersByAppToAssetIDRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Query", "QueryLockersByAppToAssetID", data);
        return promise.then((data) => exports.QueryLockersByAppToAssetIDResponse.decode(new _m0.Reader(data)));
    }
    QueryLockerInfoByAppID(request) {
        const data = exports.QueryLockerInfoByAppIDRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Query", "QueryLockerInfoByAppID", data);
        return promise.then((data) => exports.QueryLockerInfoByAppIDResponse.decode(new _m0.Reader(data)));
    }
    QueryTotalDepositByAppAndAssetID(request) {
        const data = exports.QueryTotalDepositByAppAndAssetIDRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Query", "QueryTotalDepositByAppAndAssetID", data);
        return promise.then((data) => exports.QueryTotalDepositByAppAndAssetIDResponse.decode(new _m0.Reader(data)));
    }
    QueryOwnerLockerByAppIDbyOwner(request) {
        const data = exports.QueryOwnerLockerByAppIDbyOwnerRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Query", "QueryOwnerLockerByAppIDbyOwner", data);
        return promise.then((data) => exports.QueryOwnerLockerByAppIDbyOwnerResponse.decode(new _m0.Reader(data)));
    }
    QueryOwnerLockerOfAllAppsByOwner(request) {
        const data = exports.QueryOwnerLockerOfAllAppsByOwnerRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Query", "QueryOwnerLockerOfAllAppsByOwner", data);
        return promise.then((data) => exports.QueryOwnerLockerOfAllAppsByOwnerResponse.decode(new _m0.Reader(data)));
    }
    QueryOwnerTxDetailsLockerOfAppByOwnerByAsset(request) {
        const data = exports.QueryOwnerTxDetailsLockerOfAppByOwnerByAssetRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Query", "QueryOwnerTxDetailsLockerOfAppByOwnerByAsset", data);
        return promise.then((data) => exports.QueryOwnerTxDetailsLockerOfAppByOwnerByAssetResponse.decode(new _m0.Reader(data)));
    }
    QueryOwnerLockerByAppToAssetIDbyOwner(request) {
        const data = exports.QueryOwnerLockerByAppToAssetIDbyOwnerRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Query", "QueryOwnerLockerByAppToAssetIDbyOwner", data);
        return promise.then((data) => exports.QueryOwnerLockerByAppToAssetIDbyOwnerResponse.decode(new _m0.Reader(data)));
    }
    QueryLockerByAppByOwner(request) {
        const data = exports.QueryLockerByAppByOwnerRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Query", "QueryLockerByAppByOwner", data);
        return promise.then((data) => exports.QueryLockerByAppByOwnerResponse.decode(new _m0.Reader(data)));
    }
    QueryLockerCountByAppID(request) {
        const data = exports.QueryLockerCountByAppIDRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Query", "QueryLockerCountByAppID", data);
        return promise.then((data) => exports.QueryLockerCountByAppIDResponse.decode(new _m0.Reader(data)));
    }
    QueryLockerCountByAppToAssetID(request) {
        const data = exports.QueryLockerCountByAppToAssetIDRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Query", "QueryLockerCountByAppToAssetID", data);
        return promise.then((data) => exports.QueryLockerCountByAppToAssetIDResponse.decode(new _m0.Reader(data)));
    }
    QueryWhiteListedAssetIDsByAppID(request) {
        const data = exports.QueryWhiteListedAssetIDsByAppIDRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Query", "QueryWhiteListedAssetIDsByAppID", data);
        return promise.then((data) => exports.QueryWhiteListedAssetIDsByAppIDResponse.decode(new _m0.Reader(data)));
    }
    QueryWhiteListedAssetByAllApps(request) {
        const data = exports.QueryWhiteListedAssetByAllAppsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Query", "QueryWhiteListedAssetByAllApps", data);
        return promise.then((data) => exports.QueryWhiteListedAssetByAllAppsResponse.decode(new _m0.Reader(data)));
    }
    QueryParams(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Query", "QueryParams", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    QueryLockerLookupTableByApp(request) {
        const data = exports.QueryLockerLookupTableByAppRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Query", "QueryLockerLookupTableByApp", data);
        return promise.then((data) => exports.QueryLockerLookupTableByAppResponse.decode(new _m0.Reader(data)));
    }
    QueryLockerLookupTableByAppAndAssetID(request) {
        const data = exports.QueryLockerLookupTableByAppAndAssetIDRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Query", "QueryLockerLookupTableByAppAndAssetID", data);
        return promise.then((data) => exports.QueryLockerLookupTableByAppAndAssetIDResponse.decode(new _m0.Reader(data)));
    }
    QueryLockerTotalRewardsByAssetAppWise(request) {
        const data = exports.QueryLockerTotalRewardsByAssetAppWiseRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Query", "QueryLockerTotalRewardsByAssetAppWise", data);
        return promise.then((data) => exports.QueryLockerTotalRewardsByAssetAppWiseResponse.decode(new _m0.Reader(data)));
    }
    QueryLockerTotalDepositedByApp(request) {
        const data = exports.QueryLockerTotalDepositedByAppRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Query", "QueryLockerTotalDepositedByApp", data);
        return promise.then((data) => exports.QueryLockerTotalDepositedByAppResponse.decode(new _m0.Reader(data)));
    }
    QueryState(request) {
        const data = exports.QueryStateRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Query", "QueryState", data);
        return promise.then((data) => exports.QueryStateResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map