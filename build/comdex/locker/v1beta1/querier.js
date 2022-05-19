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
exports.QueryServiceClientImpl = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.ProductToAllAsset = exports.QueryWhiteListedAssetByAllProductResponse = exports.QueryWhiteListedAssetByAllProductRequest = exports.QueryWhiteListedAssetIDsByProductIDResponse = exports.QueryWhiteListedAssetIDsByProductIDRequest = exports.QueryLockerCountByProductToAssetIDResponse = exports.QueryLockerCountByProductToAssetIDRequest = exports.QueryLockerCountByProductIDResponse = exports.QueryLockerCountByProductIDRequest = exports.QueryOwnerLockerByProductToAssetIDResponse = exports.QueryOwnerLockerByProductToAssetIDRequest = exports.QueryOwnerLockerByProductIDResponse = exports.QueryOwnerLockerByProductIDRequest = exports.QueryTotalDepositByProductAssetIDResponse = exports.QueryTotalDepositByProductAssetIDRequest = exports.QueryTotalDepositByAssetIDResponse = exports.QueryTotalDepositByAssetIDRequest = exports.QueryLockerInfoByProductIDResponse = exports.QueryLockerInfoByProductIDRequest = exports.QueryLockersByProductToAssetIDResponse = exports.QueryLockersByProductToAssetIDRequest = exports.QueryLockerInfoResponse = exports.QueryLockerInfoRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const locker_1 = require("./comdex/locker/v1beta1/locker");
const params_1 = require("./comdex/locker/v1beta1/params");
const asset_1 = require("./comdex/asset/v1beta1/asset");
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
function createBaseQueryLockersByProductToAssetIDRequest() {
    return { productId: long_1.default.UZERO, assetId: long_1.default.UZERO };
}
exports.QueryLockersByProductToAssetIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.productId.isZero()) {
            writer.uint32(8).uint64(message.productId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockersByProductToAssetIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productId = reader.uint64();
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
            productId: isSet(object.productId)
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.productId !== undefined &&
            (obj.productId = (message.productId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockersByProductToAssetIDRequest();
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryLockersByProductToAssetIDResponse() {
    return { lockerInfo: [] };
}
exports.QueryLockersByProductToAssetIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.lockerInfo) {
            locker_1.Locker.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockersByProductToAssetIDResponse();
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
        const message = createBaseQueryLockersByProductToAssetIDResponse();
        message.lockerInfo =
            ((_a = object.lockerInfo) === null || _a === void 0 ? void 0 : _a.map((e) => locker_1.Locker.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLockerInfoByProductIDRequest() {
    return { productId: long_1.default.UZERO };
}
exports.QueryLockerInfoByProductIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.productId.isZero()) {
            writer.uint32(8).uint64(message.productId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerInfoByProductIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productId = reader.uint64();
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
            productId: isSet(object.productId)
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.productId !== undefined &&
            (obj.productId = (message.productId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockerInfoByProductIDRequest();
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryLockerInfoByProductIDResponse() {
    return { lockerInfo: [] };
}
exports.QueryLockerInfoByProductIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.lockerInfo) {
            locker_1.Locker.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerInfoByProductIDResponse();
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
        const message = createBaseQueryLockerInfoByProductIDResponse();
        message.lockerInfo =
            ((_a = object.lockerInfo) === null || _a === void 0 ? void 0 : _a.map((e) => locker_1.Locker.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryTotalDepositByAssetIDRequest() {
    return { assetId: long_1.default.UZERO };
}
exports.QueryTotalDepositByAssetIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDepositByAssetIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalDepositByAssetIDRequest();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryTotalDepositByAssetIDResponse() {
    return { totalDeposit: long_1.default.UZERO };
}
exports.QueryTotalDepositByAssetIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.totalDeposit.isZero()) {
            writer.uint32(8).uint64(message.totalDeposit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDepositByAssetIDResponse();
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
        const message = createBaseQueryTotalDepositByAssetIDResponse();
        message.totalDeposit =
            object.totalDeposit !== undefined && object.totalDeposit !== null
                ? long_1.default.fromValue(object.totalDeposit)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryTotalDepositByProductAssetIDRequest() {
    return { productId: long_1.default.UZERO, assetId: long_1.default.UZERO, owner: "" };
}
exports.QueryTotalDepositByProductAssetIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.productId.isZero()) {
            writer.uint32(8).uint64(message.productId);
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
        const message = createBaseQueryTotalDepositByProductAssetIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productId = reader.uint64();
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
            productId: isSet(object.productId)
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            owner: isSet(object.owner) ? String(object.owner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.productId !== undefined &&
            (obj.productId = (message.productId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryTotalDepositByProductAssetIDRequest();
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryTotalDepositByProductAssetIDResponse() {
    return { totalDeposit: long_1.default.UZERO };
}
exports.QueryTotalDepositByProductAssetIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.totalDeposit.isZero()) {
            writer.uint32(8).uint64(message.totalDeposit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDepositByProductAssetIDResponse();
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
        const message = createBaseQueryTotalDepositByProductAssetIDResponse();
        message.totalDeposit =
            object.totalDeposit !== undefined && object.totalDeposit !== null
                ? long_1.default.fromValue(object.totalDeposit)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryOwnerLockerByProductIDRequest() {
    return { productId: long_1.default.UZERO, owner: "" };
}
exports.QueryOwnerLockerByProductIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.productId.isZero()) {
            writer.uint32(8).uint64(message.productId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerLockerByProductIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productId = reader.uint64();
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
            productId: isSet(object.productId)
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO,
            owner: isSet(object.owner) ? String(object.owner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.productId !== undefined &&
            (obj.productId = (message.productId || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOwnerLockerByProductIDRequest();
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryOwnerLockerByProductIDResponse() {
    return { lockerInfo: [] };
}
exports.QueryOwnerLockerByProductIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.lockerInfo) {
            locker_1.Locker.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerLockerByProductIDResponse();
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
        const message = createBaseQueryOwnerLockerByProductIDResponse();
        message.lockerInfo =
            ((_a = object.lockerInfo) === null || _a === void 0 ? void 0 : _a.map((e) => locker_1.Locker.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryOwnerLockerByProductToAssetIDRequest() {
    return { productId: long_1.default.UZERO, assetId: long_1.default.UZERO, owner: "" };
}
exports.QueryOwnerLockerByProductToAssetIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.productId.isZero()) {
            writer.uint32(8).uint64(message.productId);
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
        const message = createBaseQueryOwnerLockerByProductToAssetIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productId = reader.uint64();
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
            productId: isSet(object.productId)
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            owner: isSet(object.owner) ? String(object.owner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.productId !== undefined &&
            (obj.productId = (message.productId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOwnerLockerByProductToAssetIDRequest();
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryOwnerLockerByProductToAssetIDResponse() {
    return { lockerInfo: [] };
}
exports.QueryOwnerLockerByProductToAssetIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.lockerInfo) {
            locker_1.Locker.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerLockerByProductToAssetIDResponse();
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
        const message = createBaseQueryOwnerLockerByProductToAssetIDResponse();
        message.lockerInfo =
            ((_a = object.lockerInfo) === null || _a === void 0 ? void 0 : _a.map((e) => locker_1.Locker.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLockerCountByProductIDRequest() {
    return { productId: long_1.default.UZERO };
}
exports.QueryLockerCountByProductIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.productId.isZero()) {
            writer.uint32(8).uint64(message.productId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerCountByProductIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productId = reader.uint64();
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
            productId: isSet(object.productId)
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.productId !== undefined &&
            (obj.productId = (message.productId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockerCountByProductIDRequest();
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryLockerCountByProductIDResponse() {
    return { totalCount: long_1.default.UZERO };
}
exports.QueryLockerCountByProductIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.totalCount.isZero()) {
            writer.uint32(8).uint64(message.totalCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerCountByProductIDResponse();
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
        const message = createBaseQueryLockerCountByProductIDResponse();
        message.totalCount =
            object.totalCount !== undefined && object.totalCount !== null
                ? long_1.default.fromValue(object.totalCount)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryLockerCountByProductToAssetIDRequest() {
    return { productId: long_1.default.UZERO, assetId: long_1.default.UZERO };
}
exports.QueryLockerCountByProductToAssetIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.productId.isZero()) {
            writer.uint32(8).uint64(message.productId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerCountByProductToAssetIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productId = reader.uint64();
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
            productId: isSet(object.productId)
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.productId !== undefined &&
            (obj.productId = (message.productId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockerCountByProductToAssetIDRequest();
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryLockerCountByProductToAssetIDResponse() {
    return { totalCount: long_1.default.UZERO };
}
exports.QueryLockerCountByProductToAssetIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.totalCount.isZero()) {
            writer.uint32(8).uint64(message.totalCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockerCountByProductToAssetIDResponse();
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
        const message = createBaseQueryLockerCountByProductToAssetIDResponse();
        message.totalCount =
            object.totalCount !== undefined && object.totalCount !== null
                ? long_1.default.fromValue(object.totalCount)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryWhiteListedAssetIDsByProductIDRequest() {
    return { productId: long_1.default.UZERO };
}
exports.QueryWhiteListedAssetIDsByProductIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.productId.isZero()) {
            writer.uint32(8).uint64(message.productId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhiteListedAssetIDsByProductIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productId = reader.uint64();
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
            productId: isSet(object.productId)
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.productId !== undefined &&
            (obj.productId = (message.productId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryWhiteListedAssetIDsByProductIDRequest();
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryWhiteListedAssetIDsByProductIDResponse() {
    return { assetIds: [] };
}
exports.QueryWhiteListedAssetIDsByProductIDResponse = {
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
        const message = createBaseQueryWhiteListedAssetIDsByProductIDResponse();
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
        const message = createBaseQueryWhiteListedAssetIDsByProductIDResponse();
        message.assetIds = ((_a = object.assetIds) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseQueryWhiteListedAssetByAllProductRequest() {
    return {};
}
exports.QueryWhiteListedAssetByAllProductRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhiteListedAssetByAllProductRequest();
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
        const message = createBaseQueryWhiteListedAssetByAllProductRequest();
        return message;
    },
};
function createBaseQueryWhiteListedAssetByAllProductResponse() {
    return { productToAllAsset: [] };
}
exports.QueryWhiteListedAssetByAllProductResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.productToAllAsset) {
            exports.ProductToAllAsset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhiteListedAssetByAllProductResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productToAllAsset.push(exports.ProductToAllAsset.decode(reader, reader.uint32()));
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
                ? object.productToAllAsset.map((e) => exports.ProductToAllAsset.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.productToAllAsset) {
            obj.productToAllAsset = message.productToAllAsset.map((e) => e ? exports.ProductToAllAsset.toJSON(e) : undefined);
        }
        else {
            obj.productToAllAsset = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryWhiteListedAssetByAllProductResponse();
        message.productToAllAsset =
            ((_a = object.productToAllAsset) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ProductToAllAsset.fromPartial(e))) ||
                [];
        return message;
    },
};
function createBaseProductToAllAsset() {
    return { productId: long_1.default.UZERO, assets: [] };
}
exports.ProductToAllAsset = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.productId.isZero()) {
            writer.uint32(8).uint64(message.productId);
        }
        for (const v of message.assets) {
            asset_1.Asset.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProductToAllAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productId = reader.uint64();
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
            productId: isSet(object.productId)
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO,
            assets: Array.isArray(object === null || object === void 0 ? void 0 : object.assets)
                ? object.assets.map((e) => asset_1.Asset.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.productId !== undefined &&
            (obj.productId = (message.productId || long_1.default.UZERO).toString());
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
        const message = createBaseProductToAllAsset();
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? long_1.default.fromValue(object.productId)
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
class QueryServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.QueryLockerInfo = this.QueryLockerInfo.bind(this);
        this.QueryLockersByProductToAssetID =
            this.QueryLockersByProductToAssetID.bind(this);
        this.QueryLockerInfoByProductID =
            this.QueryLockerInfoByProductID.bind(this);
        this.QueryTotalDepositByAssetID =
            this.QueryTotalDepositByAssetID.bind(this);
        this.QueryTotalDepositByProductAssetID =
            this.QueryTotalDepositByProductAssetID.bind(this);
        this.QueryOwnerLockerByProductID =
            this.QueryOwnerLockerByProductID.bind(this);
        this.QueryOwnerLockerByProductToAssetID =
            this.QueryOwnerLockerByProductToAssetID.bind(this);
        this.QueryLockerCountByProductID =
            this.QueryLockerCountByProductID.bind(this);
        this.QueryLockerCountByProductToAssetID =
            this.QueryLockerCountByProductToAssetID.bind(this);
        this.QueryWhiteListedAssetIDsByProductID =
            this.QueryWhiteListedAssetIDsByProductID.bind(this);
        this.QueryWhiteListedAssetByAllProduct =
            this.QueryWhiteListedAssetByAllProduct.bind(this);
        this.QueryParams = this.QueryParams.bind(this);
    }
    QueryLockerInfo(request) {
        const data = exports.QueryLockerInfoRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.QueryService", "QueryLockerInfo", data);
        return promise.then((data) => exports.QueryLockerInfoResponse.decode(new _m0.Reader(data)));
    }
    QueryLockersByProductToAssetID(request) {
        const data = exports.QueryLockersByProductToAssetIDRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.QueryService", "QueryLockersByProductToAssetID", data);
        return promise.then((data) => exports.QueryLockersByProductToAssetIDResponse.decode(new _m0.Reader(data)));
    }
    QueryLockerInfoByProductID(request) {
        const data = exports.QueryLockerInfoByProductIDRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.QueryService", "QueryLockerInfoByProductID", data);
        return promise.then((data) => exports.QueryLockerInfoByProductIDResponse.decode(new _m0.Reader(data)));
    }
    QueryTotalDepositByAssetID(request) {
        const data = exports.QueryTotalDepositByAssetIDRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.QueryService", "QueryTotalDepositByAssetID", data);
        return promise.then((data) => exports.QueryTotalDepositByAssetIDResponse.decode(new _m0.Reader(data)));
    }
    QueryTotalDepositByProductAssetID(request) {
        const data = exports.QueryTotalDepositByProductAssetIDRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.QueryService", "QueryTotalDepositByProductAssetID", data);
        return promise.then((data) => exports.QueryTotalDepositByProductAssetIDResponse.decode(new _m0.Reader(data)));
    }
    QueryOwnerLockerByProductID(request) {
        const data = exports.QueryOwnerLockerByProductIDRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.QueryService", "QueryOwnerLockerByProductID", data);
        return promise.then((data) => exports.QueryOwnerLockerByProductIDResponse.decode(new _m0.Reader(data)));
    }
    QueryOwnerLockerByProductToAssetID(request) {
        const data = exports.QueryOwnerLockerByProductToAssetIDRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.QueryService", "QueryOwnerLockerByProductToAssetID", data);
        return promise.then((data) => exports.QueryOwnerLockerByProductToAssetIDResponse.decode(new _m0.Reader(data)));
    }
    QueryLockerCountByProductID(request) {
        const data = exports.QueryLockerCountByProductIDRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.QueryService", "QueryLockerCountByProductID", data);
        return promise.then((data) => exports.QueryLockerCountByProductIDResponse.decode(new _m0.Reader(data)));
    }
    QueryLockerCountByProductToAssetID(request) {
        const data = exports.QueryLockerCountByProductToAssetIDRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.QueryService", "QueryLockerCountByProductToAssetID", data);
        return promise.then((data) => exports.QueryLockerCountByProductToAssetIDResponse.decode(new _m0.Reader(data)));
    }
    QueryWhiteListedAssetIDsByProductID(request) {
        const data = exports.QueryWhiteListedAssetIDsByProductIDRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.QueryService", "QueryWhiteListedAssetIDsByProductID", data);
        return promise.then((data) => exports.QueryWhiteListedAssetIDsByProductIDResponse.decode(new _m0.Reader(data)));
    }
    QueryWhiteListedAssetByAllProduct(request) {
        const data = exports.QueryWhiteListedAssetByAllProductRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.QueryService", "QueryWhiteListedAssetByAllProduct", data);
        return promise.then((data) => exports.QueryWhiteListedAssetByAllProductResponse.decode(new _m0.Reader(data)));
    }
    QueryParams(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.QueryService", "QueryParams", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryServiceClientImpl = QueryServiceClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=querier.js.map