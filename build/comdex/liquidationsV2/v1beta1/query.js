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
exports.QueryClientImpl = exports.QueryAppReserveFundsTxDataResponse = exports.QueryAppReserveFundsTxDataRequest = exports.QueryLockedVaultsHistoryResponse = exports.QueryLockedVaultsHistoryRequest = exports.QueryLiquidationWhiteListingsResponse = exports.QueryLiquidationWhiteListingsRequest = exports.QueryLiquidationWhiteListingResponse = exports.QueryLiquidationWhiteListingRequest = exports.QueryLockedVaultsResponse = exports.QueryLockedVaultsRequest = exports.QueryLockedVaultResponse = exports.QueryLockedVaultRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const params_1 = require("../../../comdex/liquidationsV2/v1beta1/params");
const liquidate_1 = require("../../../comdex/liquidationsV2/v1beta1/liquidate");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
exports.protobufPackage = "comdex.liquidationsV2.v1beta1";
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
function createBaseQueryLockedVaultRequest() {
    return { appId: long_1.default.UZERO, id: long_1.default.UZERO };
}
exports.QueryLockedVaultRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.id.isZero()) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockedVaultRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.id = reader.uint64();
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
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockedVaultRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryLockedVaultResponse() {
    return { lockedVault: undefined };
}
exports.QueryLockedVaultResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.lockedVault !== undefined) {
            liquidate_1.LockedVault.encode(message.lockedVault, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockedVaultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockedVault = liquidate_1.LockedVault.decode(reader, reader.uint32());
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
            lockedVault: isSet(object.lockedVault)
                ? liquidate_1.LockedVault.fromJSON(object.lockedVault)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lockedVault !== undefined &&
            (obj.lockedVault = message.lockedVault
                ? liquidate_1.LockedVault.toJSON(message.lockedVault)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockedVaultResponse();
        message.lockedVault =
            object.lockedVault !== undefined && object.lockedVault !== null
                ? liquidate_1.LockedVault.fromPartial(object.lockedVault)
                : undefined;
        return message;
    },
};
function createBaseQueryLockedVaultsRequest() {
    return { pagination: undefined };
}
exports.QueryLockedVaultsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockedVaultsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockedVaultsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryLockedVaultsResponse() {
    return { lockedVaults: [], pagination: undefined };
}
exports.QueryLockedVaultsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.lockedVaults) {
            liquidate_1.LockedVault.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockedVaultsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockedVaults.push(liquidate_1.LockedVault.decode(reader, reader.uint32()));
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
            lockedVaults: Array.isArray(object === null || object === void 0 ? void 0 : object.lockedVaults)
                ? object.lockedVaults.map((e) => liquidate_1.LockedVault.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lockedVaults) {
            obj.lockedVaults = message.lockedVaults.map((e) => e ? liquidate_1.LockedVault.toJSON(e) : undefined);
        }
        else {
            obj.lockedVaults = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLockedVaultsResponse();
        message.lockedVaults =
            ((_a = object.lockedVaults) === null || _a === void 0 ? void 0 : _a.map((e) => liquidate_1.LockedVault.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryLiquidationWhiteListingRequest() {
    return { appId: long_1.default.UZERO };
}
exports.QueryLiquidationWhiteListingRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidationWhiteListingRequest();
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
        const message = createBaseQueryLiquidationWhiteListingRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryLiquidationWhiteListingResponse() {
    return { liquidationWhiteListing: undefined };
}
exports.QueryLiquidationWhiteListingResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.liquidationWhiteListing !== undefined) {
            liquidate_1.LiquidationWhiteListing.encode(message.liquidationWhiteListing, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidationWhiteListingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidationWhiteListing = liquidate_1.LiquidationWhiteListing.decode(reader, reader.uint32());
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
            liquidationWhiteListing: isSet(object.liquidationWhiteListing)
                ? liquidate_1.LiquidationWhiteListing.fromJSON(object.liquidationWhiteListing)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.liquidationWhiteListing !== undefined &&
            (obj.liquidationWhiteListing = message.liquidationWhiteListing
                ? liquidate_1.LiquidationWhiteListing.toJSON(message.liquidationWhiteListing)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLiquidationWhiteListingResponse();
        message.liquidationWhiteListing =
            object.liquidationWhiteListing !== undefined &&
                object.liquidationWhiteListing !== null
                ? liquidate_1.LiquidationWhiteListing.fromPartial(object.liquidationWhiteListing)
                : undefined;
        return message;
    },
};
function createBaseQueryLiquidationWhiteListingsRequest() {
    return { pagination: undefined };
}
exports.QueryLiquidationWhiteListingsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidationWhiteListingsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLiquidationWhiteListingsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryLiquidationWhiteListingsResponse() {
    return { liquidationWhiteListings: [], pagination: undefined };
}
exports.QueryLiquidationWhiteListingsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.liquidationWhiteListings) {
            liquidate_1.LiquidationWhiteListing.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidationWhiteListingsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidationWhiteListings.push(liquidate_1.LiquidationWhiteListing.decode(reader, reader.uint32()));
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
            liquidationWhiteListings: Array.isArray(object === null || object === void 0 ? void 0 : object.liquidationWhiteListings)
                ? object.liquidationWhiteListings.map((e) => liquidate_1.LiquidationWhiteListing.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.liquidationWhiteListings) {
            obj.liquidationWhiteListings = message.liquidationWhiteListings.map((e) => e ? liquidate_1.LiquidationWhiteListing.toJSON(e) : undefined);
        }
        else {
            obj.liquidationWhiteListings = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLiquidationWhiteListingsResponse();
        message.liquidationWhiteListings =
            ((_a = object.liquidationWhiteListings) === null || _a === void 0 ? void 0 : _a.map((e) => liquidate_1.LiquidationWhiteListing.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryLockedVaultsHistoryRequest() {
    return { pagination: undefined };
}
exports.QueryLockedVaultsHistoryRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockedVaultsHistoryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockedVaultsHistoryRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryLockedVaultsHistoryResponse() {
    return { lockedVaultsHistory: [], pagination: undefined };
}
exports.QueryLockedVaultsHistoryResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.lockedVaultsHistory) {
            liquidate_1.LockedVault.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockedVaultsHistoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockedVaultsHistory.push(liquidate_1.LockedVault.decode(reader, reader.uint32()));
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
            lockedVaultsHistory: Array.isArray(object === null || object === void 0 ? void 0 : object.lockedVaultsHistory)
                ? object.lockedVaultsHistory.map((e) => liquidate_1.LockedVault.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lockedVaultsHistory) {
            obj.lockedVaultsHistory = message.lockedVaultsHistory.map((e) => e ? liquidate_1.LockedVault.toJSON(e) : undefined);
        }
        else {
            obj.lockedVaultsHistory = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLockedVaultsHistoryResponse();
        message.lockedVaultsHistory =
            ((_a = object.lockedVaultsHistory) === null || _a === void 0 ? void 0 : _a.map((e) => liquidate_1.LockedVault.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAppReserveFundsTxDataRequest() {
    return { appId: long_1.default.UZERO };
}
exports.QueryAppReserveFundsTxDataRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppReserveFundsTxDataRequest();
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
        const message = createBaseQueryAppReserveFundsTxDataRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryAppReserveFundsTxDataResponse() {
    return { appReserveFundsTxData: undefined };
}
exports.QueryAppReserveFundsTxDataResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.appReserveFundsTxData !== undefined) {
            liquidate_1.AppReserveFundsTxData.encode(message.appReserveFundsTxData, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppReserveFundsTxDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appReserveFundsTxData = liquidate_1.AppReserveFundsTxData.decode(reader, reader.uint32());
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
            appReserveFundsTxData: isSet(object.appReserveFundsTxData)
                ? liquidate_1.AppReserveFundsTxData.fromJSON(object.appReserveFundsTxData)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appReserveFundsTxData !== undefined &&
            (obj.appReserveFundsTxData = message.appReserveFundsTxData
                ? liquidate_1.AppReserveFundsTxData.toJSON(message.appReserveFundsTxData)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAppReserveFundsTxDataResponse();
        message.appReserveFundsTxData =
            object.appReserveFundsTxData !== undefined &&
                object.appReserveFundsTxData !== null
                ? liquidate_1.AppReserveFundsTxData.fromPartial(object.appReserveFundsTxData)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.QueryLockedVault = this.QueryLockedVault.bind(this);
        this.QueryLockedVaults = this.QueryLockedVaults.bind(this);
        this.QueryLiquidationWhiteListing =
            this.QueryLiquidationWhiteListing.bind(this);
        this.QueryLiquidationWhiteListings =
            this.QueryLiquidationWhiteListings.bind(this);
        this.QueryLockedVaultsHistory = this.QueryLockedVaultsHistory.bind(this);
        this.QueryAppReserveFundsTxData =
            this.QueryAppReserveFundsTxData.bind(this);
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidationsV2.v1beta1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    QueryLockedVault(request) {
        const data = exports.QueryLockedVaultRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidationsV2.v1beta1.Query", "QueryLockedVault", data);
        return promise.then((data) => exports.QueryLockedVaultResponse.decode(new _m0.Reader(data)));
    }
    QueryLockedVaults(request) {
        const data = exports.QueryLockedVaultsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidationsV2.v1beta1.Query", "QueryLockedVaults", data);
        return promise.then((data) => exports.QueryLockedVaultsResponse.decode(new _m0.Reader(data)));
    }
    QueryLiquidationWhiteListing(request) {
        const data = exports.QueryLiquidationWhiteListingRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidationsV2.v1beta1.Query", "QueryLiquidationWhiteListing", data);
        return promise.then((data) => exports.QueryLiquidationWhiteListingResponse.decode(new _m0.Reader(data)));
    }
    QueryLiquidationWhiteListings(request) {
        const data = exports.QueryLiquidationWhiteListingsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidationsV2.v1beta1.Query", "QueryLiquidationWhiteListings", data);
        return promise.then((data) => exports.QueryLiquidationWhiteListingsResponse.decode(new _m0.Reader(data)));
    }
    QueryLockedVaultsHistory(request) {
        const data = exports.QueryLockedVaultsHistoryRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidationsV2.v1beta1.Query", "QueryLockedVaultsHistory", data);
        return promise.then((data) => exports.QueryLockedVaultsHistoryResponse.decode(new _m0.Reader(data)));
    }
    QueryAppReserveFundsTxData(request) {
        const data = exports.QueryAppReserveFundsTxDataRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidationsV2.v1beta1.Query", "QueryAppReserveFundsTxData", data);
        return promise.then((data) => exports.QueryAppReserveFundsTxDataResponse.decode(new _m0.Reader(data)));
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