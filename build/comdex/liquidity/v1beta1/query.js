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
exports.QueryClientImpl = exports.QueryAllFarmedPoolCoinsResponse = exports.QueryAllFarmedPoolCoinsRequest = exports.TotalActiveAndQueuedPoolCoins = exports.OrderBookTickResponse = exports.OrderBookResponse = exports.OrderBookPairResponse = exports.QueryOrderBooksResponse = exports.QueryOrderBooksRequest = exports.QueryFarmedPoolCoinResponse = exports.QueryFarmedPoolCoinRequest = exports.QueryPoolIncentivesResponse = exports.PoolIncentive = exports.QueryPoolsIncentivesRequest = exports.QueryDeserializePoolCoinResponse = exports.QueryDeserializePoolCoinRequest = exports.QueryFarmerResponse = exports.QueuedPoolCoin = exports.QueryFarmerRequest = exports.PoolBalances = exports.PoolResponse = exports.QueryOrdersByOrdererRequest = exports.QueryOrderResponse = exports.QueryOrderRequest = exports.QueryOrdersResponse = exports.QueryOrdersRequest = exports.QueryWithdrawRequestResponse = exports.QueryWithdrawRequestRequest = exports.QueryWithdrawRequestsResponse = exports.QueryWithdrawRequestsRequest = exports.QueryDepositRequestResponse = exports.QueryDepositRequestRequest = exports.QueryDepositRequestsResponse = exports.QueryDepositRequestsRequest = exports.QueryPairResponse = exports.QueryPairRequest = exports.QueryPairsResponse = exports.QueryPairsRequest = exports.QueryPoolByPoolCoinDenomRequest = exports.QueryPoolByReserveAddressRequest = exports.QueryPoolResponse = exports.QueryPoolRequest = exports.QueryPoolsResponse = exports.QueryPoolsRequest = exports.QueryGenericParamsResponse = exports.QueryGenericParamsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const params_1 = require("../../../comdex/liquidity/v1beta1/params");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const duration_1 = require("../../../google/protobuf/duration");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const liquidity_1 = require("./liquidity");
exports.protobufPackage = "comdex.liquidity.v1beta1";
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
    create(base) {
        return exports.QueryParamsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
        return { params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? params_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryGenericParamsRequest() {
    return { appId: long_1.default.UZERO };
}
exports.QueryGenericParamsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGenericParamsRequest();
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
        return { appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.QueryGenericParamsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryGenericParamsRequest();
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryGenericParamsResponse() {
    return { params: undefined };
}
exports.QueryGenericParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.GenericParams.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGenericParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.GenericParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { params: isSet(object.params) ? params_1.GenericParams.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.GenericParams.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryGenericParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryGenericParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? params_1.GenericParams.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryPoolsRequest() {
    return { pairId: long_1.default.UZERO, disabled: "", pagination: undefined, appId: long_1.default.UZERO };
}
exports.QueryPoolsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.pairId.isZero()) {
            writer.uint32(8).uint64(message.pairId);
        }
        if (message.disabled !== "") {
            writer.uint32(18).string(message.disabled);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        if (!message.appId.isZero()) {
            writer.uint32(32).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairId = reader.uint64();
                    break;
                case 2:
                    message.disabled = reader.string();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 4:
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
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            disabled: isSet(object.disabled) ? String(object.disabled) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pairId !== undefined && (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.disabled !== undefined && (obj.disabled = message.disabled);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.QueryPoolsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPoolsRequest();
        message.pairId = (object.pairId !== undefined && object.pairId !== null)
            ? long_1.default.fromValue(object.pairId)
            : long_1.default.UZERO;
        message.disabled = (_a = object.disabled) !== null && _a !== void 0 ? _a : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryPoolsResponse() {
    return { pools: [], pagination: undefined };
}
exports.QueryPoolsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pools) {
            exports.PoolResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(exports.PoolResponse.decode(reader, reader.uint32()));
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
            pools: Array.isArray(object === null || object === void 0 ? void 0 : object.pools) ? object.pools.map((e) => exports.PoolResponse.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map((e) => e ? exports.PoolResponse.toJSON(e) : undefined);
        }
        else {
            obj.pools = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryPoolsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPoolsResponse();
        message.pools = ((_a = object.pools) === null || _a === void 0 ? void 0 : _a.map((e) => exports.PoolResponse.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryPoolRequest() {
    return { poolId: long_1.default.UZERO, appId: long_1.default.UZERO };
}
exports.QueryPoolRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.QueryPoolRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryPoolRequest();
        message.poolId = (object.poolId !== undefined && object.poolId !== null)
            ? long_1.default.fromValue(object.poolId)
            : long_1.default.UZERO;
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryPoolResponse() {
    return { pool: undefined };
}
exports.QueryPoolResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pool !== undefined) {
            exports.PoolResponse.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = exports.PoolResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { pool: isSet(object.pool) ? exports.PoolResponse.fromJSON(object.pool) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.pool !== undefined && (obj.pool = message.pool ? exports.PoolResponse.toJSON(message.pool) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryPoolResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryPoolResponse();
        message.pool = (object.pool !== undefined && object.pool !== null)
            ? exports.PoolResponse.fromPartial(object.pool)
            : undefined;
        return message;
    },
};
function createBaseQueryPoolByReserveAddressRequest() {
    return { reserveAddress: "", appId: long_1.default.UZERO };
}
exports.QueryPoolByReserveAddressRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.reserveAddress !== "") {
            writer.uint32(10).string(message.reserveAddress);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolByReserveAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reserveAddress = reader.string();
                    break;
                case 2:
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
            reserveAddress: isSet(object.reserveAddress) ? String(object.reserveAddress) : "",
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.reserveAddress !== undefined && (obj.reserveAddress = message.reserveAddress);
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.QueryPoolByReserveAddressRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPoolByReserveAddressRequest();
        message.reserveAddress = (_a = object.reserveAddress) !== null && _a !== void 0 ? _a : "";
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryPoolByPoolCoinDenomRequest() {
    return { poolCoinDenom: "", appId: long_1.default.UZERO };
}
exports.QueryPoolByPoolCoinDenomRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.poolCoinDenom !== "") {
            writer.uint32(10).string(message.poolCoinDenom);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolByPoolCoinDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolCoinDenom = reader.string();
                    break;
                case 2:
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
            poolCoinDenom: isSet(object.poolCoinDenom) ? String(object.poolCoinDenom) : "",
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolCoinDenom !== undefined && (obj.poolCoinDenom = message.poolCoinDenom);
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.QueryPoolByPoolCoinDenomRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPoolByPoolCoinDenomRequest();
        message.poolCoinDenom = (_a = object.poolCoinDenom) !== null && _a !== void 0 ? _a : "";
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryPairsRequest() {
    return { denoms: [], pagination: undefined, appId: long_1.default.UZERO };
}
exports.QueryPairsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.denoms) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (!message.appId.isZero()) {
            writer.uint32(24).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPairsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denoms.push(reader.string());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 3:
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
            denoms: Array.isArray(object === null || object === void 0 ? void 0 : object.denoms) ? object.denoms.map((e) => String(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denoms) {
            obj.denoms = message.denoms.map((e) => e);
        }
        else {
            obj.denoms = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.QueryPairsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPairsRequest();
        message.denoms = ((_a = object.denoms) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryPairsResponse() {
    return { pairs: [], pagination: undefined };
}
exports.QueryPairsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pairs) {
            liquidity_1.Pair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPairsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairs.push(liquidity_1.Pair.decode(reader, reader.uint32()));
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
            pairs: Array.isArray(object === null || object === void 0 ? void 0 : object.pairs) ? object.pairs.map((e) => liquidity_1.Pair.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map((e) => e ? liquidity_1.Pair.toJSON(e) : undefined);
        }
        else {
            obj.pairs = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryPairsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPairsResponse();
        message.pairs = ((_a = object.pairs) === null || _a === void 0 ? void 0 : _a.map((e) => liquidity_1.Pair.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryPairRequest() {
    return { pairId: long_1.default.UZERO, appId: long_1.default.UZERO };
}
exports.QueryPairRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.pairId.isZero()) {
            writer.uint32(8).uint64(message.pairId);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPairRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairId = reader.uint64();
                    break;
                case 2:
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
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pairId !== undefined && (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.QueryPairRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryPairRequest();
        message.pairId = (object.pairId !== undefined && object.pairId !== null)
            ? long_1.default.fromValue(object.pairId)
            : long_1.default.UZERO;
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryPairResponse() {
    return { pair: undefined };
}
exports.QueryPairResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pair !== undefined) {
            liquidity_1.Pair.encode(message.pair, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPairResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pair = liquidity_1.Pair.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { pair: isSet(object.pair) ? liquidity_1.Pair.fromJSON(object.pair) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.pair !== undefined && (obj.pair = message.pair ? liquidity_1.Pair.toJSON(message.pair) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryPairResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryPairResponse();
        message.pair = (object.pair !== undefined && object.pair !== null) ? liquidity_1.Pair.fromPartial(object.pair) : undefined;
        return message;
    },
};
function createBaseQueryDepositRequestsRequest() {
    return { poolId: long_1.default.UZERO, appId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryDepositRequestsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositRequestsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.appId = reader.uint64();
                    break;
                case 3:
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryDepositRequestsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryDepositRequestsRequest();
        message.poolId = (object.poolId !== undefined && object.poolId !== null)
            ? long_1.default.fromValue(object.poolId)
            : long_1.default.UZERO;
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryDepositRequestsResponse() {
    return { depositRequests: [], pagination: undefined };
}
exports.QueryDepositRequestsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.depositRequests) {
            liquidity_1.DepositRequest.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositRequestsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositRequests.push(liquidity_1.DepositRequest.decode(reader, reader.uint32()));
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
            depositRequests: Array.isArray(object === null || object === void 0 ? void 0 : object.depositRequests)
                ? object.depositRequests.map((e) => liquidity_1.DepositRequest.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.depositRequests) {
            obj.depositRequests = message.depositRequests.map((e) => e ? liquidity_1.DepositRequest.toJSON(e) : undefined);
        }
        else {
            obj.depositRequests = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryDepositRequestsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDepositRequestsResponse();
        message.depositRequests = ((_a = object.depositRequests) === null || _a === void 0 ? void 0 : _a.map((e) => liquidity_1.DepositRequest.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryDepositRequestRequest() {
    return { poolId: long_1.default.UZERO, id: long_1.default.UZERO, appId: long_1.default.UZERO };
}
exports.QueryDepositRequestRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.id.isZero()) {
            writer.uint32(16).uint64(message.id);
        }
        if (!message.appId.isZero()) {
            writer.uint32(24).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositRequestRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.QueryDepositRequestRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryDepositRequestRequest();
        message.poolId = (object.poolId !== undefined && object.poolId !== null)
            ? long_1.default.fromValue(object.poolId)
            : long_1.default.UZERO;
        message.id = (object.id !== undefined && object.id !== null) ? long_1.default.fromValue(object.id) : long_1.default.UZERO;
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryDepositRequestResponse() {
    return { depositRequest: undefined };
}
exports.QueryDepositRequestResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositRequest !== undefined) {
            liquidity_1.DepositRequest.encode(message.depositRequest, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositRequestResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositRequest = liquidity_1.DepositRequest.decode(reader, reader.uint32());
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
            depositRequest: isSet(object.depositRequest) ? liquidity_1.DepositRequest.fromJSON(object.depositRequest) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.depositRequest !== undefined &&
            (obj.depositRequest = message.depositRequest ? liquidity_1.DepositRequest.toJSON(message.depositRequest) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryDepositRequestResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryDepositRequestResponse();
        message.depositRequest = (object.depositRequest !== undefined && object.depositRequest !== null)
            ? liquidity_1.DepositRequest.fromPartial(object.depositRequest)
            : undefined;
        return message;
    },
};
function createBaseQueryWithdrawRequestsRequest() {
    return { poolId: long_1.default.UZERO, pagination: undefined, appId: long_1.default.UZERO };
}
exports.QueryWithdrawRequestsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (!message.appId.isZero()) {
            writer.uint32(24).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWithdrawRequestsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 3:
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.QueryWithdrawRequestsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryWithdrawRequestsRequest();
        message.poolId = (object.poolId !== undefined && object.poolId !== null)
            ? long_1.default.fromValue(object.poolId)
            : long_1.default.UZERO;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryWithdrawRequestsResponse() {
    return { withdrawRequests: [], pagination: undefined };
}
exports.QueryWithdrawRequestsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.withdrawRequests) {
            liquidity_1.WithdrawRequest.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWithdrawRequestsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdrawRequests.push(liquidity_1.WithdrawRequest.decode(reader, reader.uint32()));
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
            withdrawRequests: Array.isArray(object === null || object === void 0 ? void 0 : object.withdrawRequests)
                ? object.withdrawRequests.map((e) => liquidity_1.WithdrawRequest.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.withdrawRequests) {
            obj.withdrawRequests = message.withdrawRequests.map((e) => e ? liquidity_1.WithdrawRequest.toJSON(e) : undefined);
        }
        else {
            obj.withdrawRequests = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryWithdrawRequestsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryWithdrawRequestsResponse();
        message.withdrawRequests = ((_a = object.withdrawRequests) === null || _a === void 0 ? void 0 : _a.map((e) => liquidity_1.WithdrawRequest.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryWithdrawRequestRequest() {
    return { poolId: long_1.default.UZERO, id: long_1.default.UZERO, appId: long_1.default.UZERO };
}
exports.QueryWithdrawRequestRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.id.isZero()) {
            writer.uint32(16).uint64(message.id);
        }
        if (!message.appId.isZero()) {
            writer.uint32(24).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWithdrawRequestRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.QueryWithdrawRequestRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryWithdrawRequestRequest();
        message.poolId = (object.poolId !== undefined && object.poolId !== null)
            ? long_1.default.fromValue(object.poolId)
            : long_1.default.UZERO;
        message.id = (object.id !== undefined && object.id !== null) ? long_1.default.fromValue(object.id) : long_1.default.UZERO;
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryWithdrawRequestResponse() {
    return { withdrawRequest: undefined };
}
exports.QueryWithdrawRequestResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.withdrawRequest !== undefined) {
            liquidity_1.WithdrawRequest.encode(message.withdrawRequest, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWithdrawRequestResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdrawRequest = liquidity_1.WithdrawRequest.decode(reader, reader.uint32());
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
            withdrawRequest: isSet(object.withdrawRequest) ? liquidity_1.WithdrawRequest.fromJSON(object.withdrawRequest) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.withdrawRequest !== undefined &&
            (obj.withdrawRequest = message.withdrawRequest ? liquidity_1.WithdrawRequest.toJSON(message.withdrawRequest) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryWithdrawRequestResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryWithdrawRequestResponse();
        message.withdrawRequest = (object.withdrawRequest !== undefined && object.withdrawRequest !== null)
            ? liquidity_1.WithdrawRequest.fromPartial(object.withdrawRequest)
            : undefined;
        return message;
    },
};
function createBaseQueryOrdersRequest() {
    return { pairId: long_1.default.UZERO, pagination: undefined, appId: long_1.default.UZERO };
}
exports.QueryOrdersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.pairId.isZero()) {
            writer.uint32(8).uint64(message.pairId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (!message.appId.isZero()) {
            writer.uint32(24).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrdersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 3:
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
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pairId !== undefined && (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.QueryOrdersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryOrdersRequest();
        message.pairId = (object.pairId !== undefined && object.pairId !== null)
            ? long_1.default.fromValue(object.pairId)
            : long_1.default.UZERO;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryOrdersResponse() {
    return { orders: [], pagination: undefined };
}
exports.QueryOrdersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orders) {
            liquidity_1.Order.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(liquidity_1.Order.decode(reader, reader.uint32()));
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
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders) ? object.orders.map((e) => liquidity_1.Order.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? liquidity_1.Order.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOrdersResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map((e) => liquidity_1.Order.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryOrderRequest() {
    return { pairId: long_1.default.UZERO, id: long_1.default.UZERO, appId: long_1.default.UZERO };
}
exports.QueryOrderRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.pairId.isZero()) {
            writer.uint32(8).uint64(message.pairId);
        }
        if (!message.id.isZero()) {
            writer.uint32(16).uint64(message.id);
        }
        if (!message.appId.isZero()) {
            writer.uint32(24).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairId = reader.uint64();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
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
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pairId !== undefined && (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.QueryOrderRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryOrderRequest();
        message.pairId = (object.pairId !== undefined && object.pairId !== null)
            ? long_1.default.fromValue(object.pairId)
            : long_1.default.UZERO;
        message.id = (object.id !== undefined && object.id !== null) ? long_1.default.fromValue(object.id) : long_1.default.UZERO;
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryOrderResponse() {
    return { order: undefined };
}
exports.QueryOrderResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.order !== undefined) {
            liquidity_1.Order.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = liquidity_1.Order.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { order: isSet(object.order) ? liquidity_1.Order.fromJSON(object.order) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.order !== undefined && (obj.order = message.order ? liquidity_1.Order.toJSON(message.order) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryOrderResponse();
        message.order = (object.order !== undefined && object.order !== null) ? liquidity_1.Order.fromPartial(object.order) : undefined;
        return message;
    },
};
function createBaseQueryOrdersByOrdererRequest() {
    return { orderer: "", pairId: long_1.default.UZERO, pagination: undefined, appId: long_1.default.UZERO };
}
exports.QueryOrdersByOrdererRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderer !== "") {
            writer.uint32(10).string(message.orderer);
        }
        if (!message.pairId.isZero()) {
            writer.uint32(16).uint64(message.pairId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        if (!message.appId.isZero()) {
            writer.uint32(32).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrdersByOrdererRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderer = reader.string();
                    break;
                case 2:
                    message.pairId = reader.uint64();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 4:
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
            orderer: isSet(object.orderer) ? String(object.orderer) : "",
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderer !== undefined && (obj.orderer = message.orderer);
        message.pairId !== undefined && (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.QueryOrdersByOrdererRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOrdersByOrdererRequest();
        message.orderer = (_a = object.orderer) !== null && _a !== void 0 ? _a : "";
        message.pairId = (object.pairId !== undefined && object.pairId !== null)
            ? long_1.default.fromValue(object.pairId)
            : long_1.default.UZERO;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBasePoolResponse() {
    return {
        id: long_1.default.UZERO,
        pairId: long_1.default.UZERO,
        reserveAddress: "",
        poolCoinDenom: "",
        balances: undefined,
        lastDepositRequestId: long_1.default.UZERO,
        lastWithdrawRequestId: long_1.default.UZERO,
        appId: long_1.default.UZERO,
        type: 0,
        creator: "",
        poolCoinSupply: "",
        minPrice: "",
        maxPrice: "",
        price: "",
        disabled: false,
        farmCoin: undefined,
    };
}
exports.PoolResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.pairId.isZero()) {
            writer.uint32(16).uint64(message.pairId);
        }
        if (message.reserveAddress !== "") {
            writer.uint32(26).string(message.reserveAddress);
        }
        if (message.poolCoinDenom !== "") {
            writer.uint32(34).string(message.poolCoinDenom);
        }
        if (message.balances !== undefined) {
            exports.PoolBalances.encode(message.balances, writer.uint32(42).fork()).ldelim();
        }
        if (!message.lastDepositRequestId.isZero()) {
            writer.uint32(48).uint64(message.lastDepositRequestId);
        }
        if (!message.lastWithdrawRequestId.isZero()) {
            writer.uint32(56).uint64(message.lastWithdrawRequestId);
        }
        if (!message.appId.isZero()) {
            writer.uint32(64).uint64(message.appId);
        }
        if (message.type !== 0) {
            writer.uint32(72).int32(message.type);
        }
        if (message.creator !== "") {
            writer.uint32(82).string(message.creator);
        }
        if (message.poolCoinSupply !== "") {
            writer.uint32(90).string(message.poolCoinSupply);
        }
        if (message.minPrice !== "") {
            writer.uint32(98).string(message.minPrice);
        }
        if (message.maxPrice !== "") {
            writer.uint32(106).string(message.maxPrice);
        }
        if (message.price !== "") {
            writer.uint32(114).string(message.price);
        }
        if (message.disabled === true) {
            writer.uint32(120).bool(message.disabled);
        }
        if (message.farmCoin !== undefined) {
            liquidity_1.FarmCoin.encode(message.farmCoin, writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.pairId = reader.uint64();
                    break;
                case 3:
                    message.reserveAddress = reader.string();
                    break;
                case 4:
                    message.poolCoinDenom = reader.string();
                    break;
                case 5:
                    message.balances = exports.PoolBalances.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.lastDepositRequestId = reader.uint64();
                    break;
                case 7:
                    message.lastWithdrawRequestId = reader.uint64();
                    break;
                case 8:
                    message.appId = reader.uint64();
                    break;
                case 9:
                    message.type = reader.int32();
                    break;
                case 10:
                    message.creator = reader.string();
                    break;
                case 11:
                    message.poolCoinSupply = reader.string();
                    break;
                case 12:
                    message.minPrice = reader.string();
                    break;
                case 13:
                    message.maxPrice = reader.string();
                    break;
                case 14:
                    message.price = reader.string();
                    break;
                case 15:
                    message.disabled = reader.bool();
                    break;
                case 16:
                    message.farmCoin = liquidity_1.FarmCoin.decode(reader, reader.uint32());
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
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            reserveAddress: isSet(object.reserveAddress) ? String(object.reserveAddress) : "",
            poolCoinDenom: isSet(object.poolCoinDenom) ? String(object.poolCoinDenom) : "",
            balances: isSet(object.balances) ? exports.PoolBalances.fromJSON(object.balances) : undefined,
            lastDepositRequestId: isSet(object.lastDepositRequestId)
                ? long_1.default.fromValue(object.lastDepositRequestId)
                : long_1.default.UZERO,
            lastWithdrawRequestId: isSet(object.lastWithdrawRequestId)
                ? long_1.default.fromValue(object.lastWithdrawRequestId)
                : long_1.default.UZERO,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            type: isSet(object.type) ? (0, liquidity_1.poolTypeFromJSON)(object.type) : 0,
            creator: isSet(object.creator) ? String(object.creator) : "",
            poolCoinSupply: isSet(object.poolCoinSupply) ? String(object.poolCoinSupply) : "",
            minPrice: isSet(object.minPrice) ? String(object.minPrice) : "",
            maxPrice: isSet(object.maxPrice) ? String(object.maxPrice) : "",
            price: isSet(object.price) ? String(object.price) : "",
            disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
            farmCoin: isSet(object.farmCoin) ? liquidity_1.FarmCoin.fromJSON(object.farmCoin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        message.pairId !== undefined && (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.reserveAddress !== undefined && (obj.reserveAddress = message.reserveAddress);
        message.poolCoinDenom !== undefined && (obj.poolCoinDenom = message.poolCoinDenom);
        message.balances !== undefined &&
            (obj.balances = message.balances ? exports.PoolBalances.toJSON(message.balances) : undefined);
        message.lastDepositRequestId !== undefined &&
            (obj.lastDepositRequestId = (message.lastDepositRequestId || long_1.default.UZERO).toString());
        message.lastWithdrawRequestId !== undefined &&
            (obj.lastWithdrawRequestId = (message.lastWithdrawRequestId || long_1.default.UZERO).toString());
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.type !== undefined && (obj.type = (0, liquidity_1.poolTypeToJSON)(message.type));
        message.creator !== undefined && (obj.creator = message.creator);
        message.poolCoinSupply !== undefined && (obj.poolCoinSupply = message.poolCoinSupply);
        message.minPrice !== undefined && (obj.minPrice = message.minPrice);
        message.maxPrice !== undefined && (obj.maxPrice = message.maxPrice);
        message.price !== undefined && (obj.price = message.price);
        message.disabled !== undefined && (obj.disabled = message.disabled);
        message.farmCoin !== undefined && (obj.farmCoin = message.farmCoin ? liquidity_1.FarmCoin.toJSON(message.farmCoin) : undefined);
        return obj;
    },
    create(base) {
        return exports.PoolResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBasePoolResponse();
        message.id = (object.id !== undefined && object.id !== null) ? long_1.default.fromValue(object.id) : long_1.default.UZERO;
        message.pairId = (object.pairId !== undefined && object.pairId !== null)
            ? long_1.default.fromValue(object.pairId)
            : long_1.default.UZERO;
        message.reserveAddress = (_a = object.reserveAddress) !== null && _a !== void 0 ? _a : "";
        message.poolCoinDenom = (_b = object.poolCoinDenom) !== null && _b !== void 0 ? _b : "";
        message.balances = (object.balances !== undefined && object.balances !== null)
            ? exports.PoolBalances.fromPartial(object.balances)
            : undefined;
        message.lastDepositRequestId = (object.lastDepositRequestId !== undefined && object.lastDepositRequestId !== null)
            ? long_1.default.fromValue(object.lastDepositRequestId)
            : long_1.default.UZERO;
        message.lastWithdrawRequestId =
            (object.lastWithdrawRequestId !== undefined && object.lastWithdrawRequestId !== null)
                ? long_1.default.fromValue(object.lastWithdrawRequestId)
                : long_1.default.UZERO;
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : 0;
        message.creator = (_d = object.creator) !== null && _d !== void 0 ? _d : "";
        message.poolCoinSupply = (_e = object.poolCoinSupply) !== null && _e !== void 0 ? _e : "";
        message.minPrice = (_f = object.minPrice) !== null && _f !== void 0 ? _f : "";
        message.maxPrice = (_g = object.maxPrice) !== null && _g !== void 0 ? _g : "";
        message.price = (_h = object.price) !== null && _h !== void 0 ? _h : "";
        message.disabled = (_j = object.disabled) !== null && _j !== void 0 ? _j : false;
        message.farmCoin = (object.farmCoin !== undefined && object.farmCoin !== null)
            ? liquidity_1.FarmCoin.fromPartial(object.farmCoin)
            : undefined;
        return message;
    },
};
function createBasePoolBalances() {
    return { baseCoin: undefined, quoteCoin: undefined };
}
exports.PoolBalances = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.baseCoin !== undefined) {
            coin_1.Coin.encode(message.baseCoin, writer.uint32(10).fork()).ldelim();
        }
        if (message.quoteCoin !== undefined) {
            coin_1.Coin.encode(message.quoteCoin, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolBalances();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.quoteCoin = coin_1.Coin.decode(reader, reader.uint32());
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
            baseCoin: isSet(object.baseCoin) ? coin_1.Coin.fromJSON(object.baseCoin) : undefined,
            quoteCoin: isSet(object.quoteCoin) ? coin_1.Coin.fromJSON(object.quoteCoin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.baseCoin !== undefined && (obj.baseCoin = message.baseCoin ? coin_1.Coin.toJSON(message.baseCoin) : undefined);
        message.quoteCoin !== undefined && (obj.quoteCoin = message.quoteCoin ? coin_1.Coin.toJSON(message.quoteCoin) : undefined);
        return obj;
    },
    create(base) {
        return exports.PoolBalances.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBasePoolBalances();
        message.baseCoin = (object.baseCoin !== undefined && object.baseCoin !== null)
            ? coin_1.Coin.fromPartial(object.baseCoin)
            : undefined;
        message.quoteCoin = (object.quoteCoin !== undefined && object.quoteCoin !== null)
            ? coin_1.Coin.fromPartial(object.quoteCoin)
            : undefined;
        return message;
    },
};
function createBaseQueryFarmerRequest() {
    return { appId: long_1.default.UZERO, poolId: long_1.default.UZERO, farmer: "" };
}
exports.QueryFarmerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.farmer !== "") {
            writer.uint32(26).string(message.farmer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFarmerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.farmer = reader.string();
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            farmer: isSet(object.farmer) ? String(object.farmer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.poolId !== undefined && (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.farmer !== undefined && (obj.farmer = message.farmer);
        return obj;
    },
    create(base) {
        return exports.QueryFarmerRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryFarmerRequest();
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        message.poolId = (object.poolId !== undefined && object.poolId !== null)
            ? long_1.default.fromValue(object.poolId)
            : long_1.default.UZERO;
        message.farmer = (_a = object.farmer) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueuedPoolCoin() {
    return { poolCoin: undefined, dequeAt: undefined };
}
exports.QueuedPoolCoin = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.poolCoin !== undefined) {
            coin_1.Coin.encode(message.poolCoin, writer.uint32(10).fork()).ldelim();
        }
        if (message.dequeAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.dequeAt), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueuedPoolCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.dequeAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            poolCoin: isSet(object.poolCoin) ? coin_1.Coin.fromJSON(object.poolCoin) : undefined,
            dequeAt: isSet(object.dequeAt) ? fromJsonTimestamp(object.dequeAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolCoin !== undefined && (obj.poolCoin = message.poolCoin ? coin_1.Coin.toJSON(message.poolCoin) : undefined);
        message.dequeAt !== undefined && (obj.dequeAt = message.dequeAt.toISOString());
        return obj;
    },
    create(base) {
        return exports.QueuedPoolCoin.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueuedPoolCoin();
        message.poolCoin = (object.poolCoin !== undefined && object.poolCoin !== null)
            ? coin_1.Coin.fromPartial(object.poolCoin)
            : undefined;
        message.dequeAt = (_a = object.dequeAt) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseQueryFarmerResponse() {
    return { activePoolCoin: undefined, queuedPoolCoin: [] };
}
exports.QueryFarmerResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.activePoolCoin !== undefined) {
            coin_1.Coin.encode(message.activePoolCoin, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.queuedPoolCoin) {
            exports.QueuedPoolCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFarmerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.activePoolCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.queuedPoolCoin.push(exports.QueuedPoolCoin.decode(reader, reader.uint32()));
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
            activePoolCoin: isSet(object.activePoolCoin) ? coin_1.Coin.fromJSON(object.activePoolCoin) : undefined,
            queuedPoolCoin: Array.isArray(object === null || object === void 0 ? void 0 : object.queuedPoolCoin)
                ? object.queuedPoolCoin.map((e) => exports.QueuedPoolCoin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.activePoolCoin !== undefined &&
            (obj.activePoolCoin = message.activePoolCoin ? coin_1.Coin.toJSON(message.activePoolCoin) : undefined);
        if (message.queuedPoolCoin) {
            obj.queuedPoolCoin = message.queuedPoolCoin.map((e) => e ? exports.QueuedPoolCoin.toJSON(e) : undefined);
        }
        else {
            obj.queuedPoolCoin = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryFarmerResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryFarmerResponse();
        message.activePoolCoin = (object.activePoolCoin !== undefined && object.activePoolCoin !== null)
            ? coin_1.Coin.fromPartial(object.activePoolCoin)
            : undefined;
        message.queuedPoolCoin = ((_a = object.queuedPoolCoin) === null || _a === void 0 ? void 0 : _a.map((e) => exports.QueuedPoolCoin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryDeserializePoolCoinRequest() {
    return { poolId: long_1.default.UZERO, poolCoinAmount: long_1.default.UZERO, appId: long_1.default.UZERO };
}
exports.QueryDeserializePoolCoinRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.poolCoinAmount.isZero()) {
            writer.uint32(16).uint64(message.poolCoinAmount);
        }
        if (!message.appId.isZero()) {
            writer.uint32(24).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeserializePoolCoinRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.poolCoinAmount = reader.uint64();
                    break;
                case 3:
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            poolCoinAmount: isSet(object.poolCoinAmount) ? long_1.default.fromValue(object.poolCoinAmount) : long_1.default.UZERO,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.poolCoinAmount !== undefined && (obj.poolCoinAmount = (message.poolCoinAmount || long_1.default.UZERO).toString());
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.QueryDeserializePoolCoinRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryDeserializePoolCoinRequest();
        message.poolId = (object.poolId !== undefined && object.poolId !== null)
            ? long_1.default.fromValue(object.poolId)
            : long_1.default.UZERO;
        message.poolCoinAmount = (object.poolCoinAmount !== undefined && object.poolCoinAmount !== null)
            ? long_1.default.fromValue(object.poolCoinAmount)
            : long_1.default.UZERO;
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryDeserializePoolCoinResponse() {
    return { coins: [] };
}
exports.QueryDeserializePoolCoinResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeserializePoolCoinResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryDeserializePoolCoinResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDeserializePoolCoinResponse();
        message.coins = ((_a = object.coins) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryPoolsIncentivesRequest() {
    return { appId: long_1.default.UZERO };
}
exports.QueryPoolsIncentivesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsIncentivesRequest();
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
        return { appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.QueryPoolsIncentivesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryPoolsIncentivesRequest();
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBasePoolIncentive() {
    return {
        poolId: long_1.default.UZERO,
        masterPool: false,
        childPoolIds: [],
        totalRewards: undefined,
        distributedRewards: undefined,
        totalEpochs: long_1.default.UZERO,
        filledEpochs: long_1.default.UZERO,
        epochDuration: undefined,
        nextDistribution: undefined,
        isSwapFee: false,
        appId: long_1.default.UZERO,
    };
}
exports.PoolIncentive = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.masterPool === true) {
            writer.uint32(16).bool(message.masterPool);
        }
        writer.uint32(26).fork();
        for (const v of message.childPoolIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.totalRewards !== undefined) {
            coin_1.Coin.encode(message.totalRewards, writer.uint32(34).fork()).ldelim();
        }
        if (message.distributedRewards !== undefined) {
            coin_1.Coin.encode(message.distributedRewards, writer.uint32(42).fork()).ldelim();
        }
        if (!message.totalEpochs.isZero()) {
            writer.uint32(48).uint64(message.totalEpochs);
        }
        if (!message.filledEpochs.isZero()) {
            writer.uint32(56).uint64(message.filledEpochs);
        }
        if (message.epochDuration !== undefined) {
            duration_1.Duration.encode(message.epochDuration, writer.uint32(66).fork()).ldelim();
        }
        if (message.nextDistribution !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.nextDistribution), writer.uint32(74).fork()).ldelim();
        }
        if (message.isSwapFee === true) {
            writer.uint32(80).bool(message.isSwapFee);
        }
        if (!message.appId.isZero()) {
            writer.uint32(88).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolIncentive();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.masterPool = reader.bool();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.childPoolIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.childPoolIds.push(reader.uint64());
                    }
                    break;
                case 4:
                    message.totalRewards = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.distributedRewards = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.totalEpochs = reader.uint64();
                    break;
                case 7:
                    message.filledEpochs = reader.uint64();
                    break;
                case 8:
                    message.epochDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.nextDistribution = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.isSwapFee = reader.bool();
                    break;
                case 11:
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            masterPool: isSet(object.masterPool) ? Boolean(object.masterPool) : false,
            childPoolIds: Array.isArray(object === null || object === void 0 ? void 0 : object.childPoolIds) ? object.childPoolIds.map((e) => long_1.default.fromValue(e)) : [],
            totalRewards: isSet(object.totalRewards) ? coin_1.Coin.fromJSON(object.totalRewards) : undefined,
            distributedRewards: isSet(object.distributedRewards) ? coin_1.Coin.fromJSON(object.distributedRewards) : undefined,
            totalEpochs: isSet(object.totalEpochs) ? long_1.default.fromValue(object.totalEpochs) : long_1.default.UZERO,
            filledEpochs: isSet(object.filledEpochs) ? long_1.default.fromValue(object.filledEpochs) : long_1.default.UZERO,
            epochDuration: isSet(object.epochDuration) ? duration_1.Duration.fromJSON(object.epochDuration) : undefined,
            nextDistribution: isSet(object.nextDistribution) ? fromJsonTimestamp(object.nextDistribution) : undefined,
            isSwapFee: isSet(object.isSwapFee) ? Boolean(object.isSwapFee) : false,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.masterPool !== undefined && (obj.masterPool = message.masterPool);
        if (message.childPoolIds) {
            obj.childPoolIds = message.childPoolIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.childPoolIds = [];
        }
        message.totalRewards !== undefined &&
            (obj.totalRewards = message.totalRewards ? coin_1.Coin.toJSON(message.totalRewards) : undefined);
        message.distributedRewards !== undefined &&
            (obj.distributedRewards = message.distributedRewards ? coin_1.Coin.toJSON(message.distributedRewards) : undefined);
        message.totalEpochs !== undefined && (obj.totalEpochs = (message.totalEpochs || long_1.default.UZERO).toString());
        message.filledEpochs !== undefined && (obj.filledEpochs = (message.filledEpochs || long_1.default.UZERO).toString());
        message.epochDuration !== undefined &&
            (obj.epochDuration = message.epochDuration ? duration_1.Duration.toJSON(message.epochDuration) : undefined);
        message.nextDistribution !== undefined && (obj.nextDistribution = message.nextDistribution.toISOString());
        message.isSwapFee !== undefined && (obj.isSwapFee = message.isSwapFee);
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.PoolIncentive.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBasePoolIncentive();
        message.poolId = (object.poolId !== undefined && object.poolId !== null)
            ? long_1.default.fromValue(object.poolId)
            : long_1.default.UZERO;
        message.masterPool = (_a = object.masterPool) !== null && _a !== void 0 ? _a : false;
        message.childPoolIds = ((_b = object.childPoolIds) === null || _b === void 0 ? void 0 : _b.map((e) => long_1.default.fromValue(e))) || [];
        message.totalRewards = (object.totalRewards !== undefined && object.totalRewards !== null)
            ? coin_1.Coin.fromPartial(object.totalRewards)
            : undefined;
        message.distributedRewards = (object.distributedRewards !== undefined && object.distributedRewards !== null)
            ? coin_1.Coin.fromPartial(object.distributedRewards)
            : undefined;
        message.totalEpochs = (object.totalEpochs !== undefined && object.totalEpochs !== null)
            ? long_1.default.fromValue(object.totalEpochs)
            : long_1.default.UZERO;
        message.filledEpochs = (object.filledEpochs !== undefined && object.filledEpochs !== null)
            ? long_1.default.fromValue(object.filledEpochs)
            : long_1.default.UZERO;
        message.epochDuration = (object.epochDuration !== undefined && object.epochDuration !== null)
            ? duration_1.Duration.fromPartial(object.epochDuration)
            : undefined;
        message.nextDistribution = (_c = object.nextDistribution) !== null && _c !== void 0 ? _c : undefined;
        message.isSwapFee = (_d = object.isSwapFee) !== null && _d !== void 0 ? _d : false;
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryPoolIncentivesResponse() {
    return { poolIncentives: [] };
}
exports.QueryPoolIncentivesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.poolIncentives) {
            exports.PoolIncentive.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolIncentivesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolIncentives.push(exports.PoolIncentive.decode(reader, reader.uint32()));
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
            poolIncentives: Array.isArray(object === null || object === void 0 ? void 0 : object.poolIncentives)
                ? object.poolIncentives.map((e) => exports.PoolIncentive.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.poolIncentives) {
            obj.poolIncentives = message.poolIncentives.map((e) => e ? exports.PoolIncentive.toJSON(e) : undefined);
        }
        else {
            obj.poolIncentives = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryPoolIncentivesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPoolIncentivesResponse();
        message.poolIncentives = ((_a = object.poolIncentives) === null || _a === void 0 ? void 0 : _a.map((e) => exports.PoolIncentive.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryFarmedPoolCoinRequest() {
    return { poolId: long_1.default.UZERO, appId: long_1.default.UZERO };
}
exports.QueryFarmedPoolCoinRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFarmedPoolCoinRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.QueryFarmedPoolCoinRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryFarmedPoolCoinRequest();
        message.poolId = (object.poolId !== undefined && object.poolId !== null)
            ? long_1.default.fromValue(object.poolId)
            : long_1.default.UZERO;
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryFarmedPoolCoinResponse() {
    return { coin: undefined };
}
exports.QueryFarmedPoolCoinResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFarmedPoolCoinResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { coin: isSet(object.coin) ? coin_1.Coin.fromJSON(object.coin) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.coin !== undefined && (obj.coin = message.coin ? coin_1.Coin.toJSON(message.coin) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryFarmedPoolCoinResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryFarmedPoolCoinResponse();
        message.coin = (object.coin !== undefined && object.coin !== null) ? coin_1.Coin.fromPartial(object.coin) : undefined;
        return message;
    },
};
function createBaseQueryOrderBooksRequest() {
    return { appId: long_1.default.UZERO, pairIds: [], priceUnitPowers: [], numTicks: 0 };
}
exports.QueryOrderBooksRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        writer.uint32(18).fork();
        for (const v of message.pairIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        writer.uint32(26).fork();
        for (const v of message.priceUnitPowers) {
            writer.uint32(v);
        }
        writer.ldelim();
        if (message.numTicks !== 0) {
            writer.uint32(32).uint32(message.numTicks);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrderBooksRequest();
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
                            message.pairIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.pairIds.push(reader.uint64());
                    }
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.priceUnitPowers.push(reader.uint32());
                        }
                    }
                    else {
                        message.priceUnitPowers.push(reader.uint32());
                    }
                    break;
                case 4:
                    message.numTicks = reader.uint32();
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
            pairIds: Array.isArray(object === null || object === void 0 ? void 0 : object.pairIds) ? object.pairIds.map((e) => long_1.default.fromValue(e)) : [],
            priceUnitPowers: Array.isArray(object === null || object === void 0 ? void 0 : object.priceUnitPowers) ? object.priceUnitPowers.map((e) => Number(e)) : [],
            numTicks: isSet(object.numTicks) ? Number(object.numTicks) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        if (message.pairIds) {
            obj.pairIds = message.pairIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.pairIds = [];
        }
        if (message.priceUnitPowers) {
            obj.priceUnitPowers = message.priceUnitPowers.map((e) => Math.round(e));
        }
        else {
            obj.priceUnitPowers = [];
        }
        message.numTicks !== undefined && (obj.numTicks = Math.round(message.numTicks));
        return obj;
    },
    create(base) {
        return exports.QueryOrderBooksRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryOrderBooksRequest();
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        message.pairIds = ((_a = object.pairIds) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        message.priceUnitPowers = ((_b = object.priceUnitPowers) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.numTicks = (_c = object.numTicks) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseQueryOrderBooksResponse() {
    return { pairs: [] };
}
exports.QueryOrderBooksResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pairs) {
            exports.OrderBookPairResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrderBooksResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.pairs.push(exports.OrderBookPairResponse.decode(reader, reader.uint32()));
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
            pairs: Array.isArray(object === null || object === void 0 ? void 0 : object.pairs) ? object.pairs.map((e) => exports.OrderBookPairResponse.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map((e) => e ? exports.OrderBookPairResponse.toJSON(e) : undefined);
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryOrderBooksResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOrderBooksResponse();
        message.pairs = ((_a = object.pairs) === null || _a === void 0 ? void 0 : _a.map((e) => exports.OrderBookPairResponse.fromPartial(e))) || [];
        return message;
    },
};
function createBaseOrderBookPairResponse() {
    return { pairId: long_1.default.UZERO, basePrice: "", orderBooks: [] };
}
exports.OrderBookPairResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.pairId.isZero()) {
            writer.uint32(8).uint64(message.pairId);
        }
        if (message.basePrice !== "") {
            writer.uint32(18).string(message.basePrice);
        }
        for (const v of message.orderBooks) {
            exports.OrderBookResponse.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderBookPairResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairId = reader.uint64();
                    break;
                case 2:
                    message.basePrice = reader.string();
                    break;
                case 3:
                    message.orderBooks.push(exports.OrderBookResponse.decode(reader, reader.uint32()));
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
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            basePrice: isSet(object.basePrice) ? String(object.basePrice) : "",
            orderBooks: Array.isArray(object === null || object === void 0 ? void 0 : object.orderBooks)
                ? object.orderBooks.map((e) => exports.OrderBookResponse.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.pairId !== undefined && (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.basePrice !== undefined && (obj.basePrice = message.basePrice);
        if (message.orderBooks) {
            obj.orderBooks = message.orderBooks.map((e) => e ? exports.OrderBookResponse.toJSON(e) : undefined);
        }
        else {
            obj.orderBooks = [];
        }
        return obj;
    },
    create(base) {
        return exports.OrderBookPairResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOrderBookPairResponse();
        message.pairId = (object.pairId !== undefined && object.pairId !== null)
            ? long_1.default.fromValue(object.pairId)
            : long_1.default.UZERO;
        message.basePrice = (_a = object.basePrice) !== null && _a !== void 0 ? _a : "";
        message.orderBooks = ((_b = object.orderBooks) === null || _b === void 0 ? void 0 : _b.map((e) => exports.OrderBookResponse.fromPartial(e))) || [];
        return message;
    },
};
function createBaseOrderBookResponse() {
    return { priceUnit: "", sells: [], buys: [] };
}
exports.OrderBookResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.priceUnit !== "") {
            writer.uint32(10).string(message.priceUnit);
        }
        for (const v of message.sells) {
            exports.OrderBookTickResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.buys) {
            exports.OrderBookTickResponse.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderBookResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceUnit = reader.string();
                    break;
                case 2:
                    message.sells.push(exports.OrderBookTickResponse.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.buys.push(exports.OrderBookTickResponse.decode(reader, reader.uint32()));
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
            priceUnit: isSet(object.priceUnit) ? String(object.priceUnit) : "",
            sells: Array.isArray(object === null || object === void 0 ? void 0 : object.sells) ? object.sells.map((e) => exports.OrderBookTickResponse.fromJSON(e)) : [],
            buys: Array.isArray(object === null || object === void 0 ? void 0 : object.buys) ? object.buys.map((e) => exports.OrderBookTickResponse.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.priceUnit !== undefined && (obj.priceUnit = message.priceUnit);
        if (message.sells) {
            obj.sells = message.sells.map((e) => e ? exports.OrderBookTickResponse.toJSON(e) : undefined);
        }
        else {
            obj.sells = [];
        }
        if (message.buys) {
            obj.buys = message.buys.map((e) => e ? exports.OrderBookTickResponse.toJSON(e) : undefined);
        }
        else {
            obj.buys = [];
        }
        return obj;
    },
    create(base) {
        return exports.OrderBookResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseOrderBookResponse();
        message.priceUnit = (_a = object.priceUnit) !== null && _a !== void 0 ? _a : "";
        message.sells = ((_b = object.sells) === null || _b === void 0 ? void 0 : _b.map((e) => exports.OrderBookTickResponse.fromPartial(e))) || [];
        message.buys = ((_c = object.buys) === null || _c === void 0 ? void 0 : _c.map((e) => exports.OrderBookTickResponse.fromPartial(e))) || [];
        return message;
    },
};
function createBaseOrderBookTickResponse() {
    return { price: "", userOrderAmount: "", poolOrderAmount: "" };
}
exports.OrderBookTickResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(message.price);
        }
        if (message.userOrderAmount !== "") {
            writer.uint32(18).string(message.userOrderAmount);
        }
        if (message.poolOrderAmount !== "") {
            writer.uint32(26).string(message.poolOrderAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderBookTickResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = reader.string();
                    break;
                case 2:
                    message.userOrderAmount = reader.string();
                    break;
                case 3:
                    message.poolOrderAmount = reader.string();
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
            price: isSet(object.price) ? String(object.price) : "",
            userOrderAmount: isSet(object.userOrderAmount) ? String(object.userOrderAmount) : "",
            poolOrderAmount: isSet(object.poolOrderAmount) ? String(object.poolOrderAmount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.price !== undefined && (obj.price = message.price);
        message.userOrderAmount !== undefined && (obj.userOrderAmount = message.userOrderAmount);
        message.poolOrderAmount !== undefined && (obj.poolOrderAmount = message.poolOrderAmount);
        return obj;
    },
    create(base) {
        return exports.OrderBookTickResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseOrderBookTickResponse();
        message.price = (_a = object.price) !== null && _a !== void 0 ? _a : "";
        message.userOrderAmount = (_b = object.userOrderAmount) !== null && _b !== void 0 ? _b : "";
        message.poolOrderAmount = (_c = object.poolOrderAmount) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseTotalActiveAndQueuedPoolCoins() {
    return { poolId: long_1.default.UZERO, totalActivePoolCoin: undefined, totalQueuedPoolCoin: undefined };
}
exports.TotalActiveAndQueuedPoolCoins = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.totalActivePoolCoin !== undefined) {
            coin_1.Coin.encode(message.totalActivePoolCoin, writer.uint32(18).fork()).ldelim();
        }
        if (message.totalQueuedPoolCoin !== undefined) {
            coin_1.Coin.encode(message.totalQueuedPoolCoin, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalActiveAndQueuedPoolCoins();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.totalActivePoolCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.totalQueuedPoolCoin = coin_1.Coin.decode(reader, reader.uint32());
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            totalActivePoolCoin: isSet(object.totalActivePoolCoin) ? coin_1.Coin.fromJSON(object.totalActivePoolCoin) : undefined,
            totalQueuedPoolCoin: isSet(object.totalQueuedPoolCoin) ? coin_1.Coin.fromJSON(object.totalQueuedPoolCoin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.totalActivePoolCoin !== undefined &&
            (obj.totalActivePoolCoin = message.totalActivePoolCoin ? coin_1.Coin.toJSON(message.totalActivePoolCoin) : undefined);
        message.totalQueuedPoolCoin !== undefined &&
            (obj.totalQueuedPoolCoin = message.totalQueuedPoolCoin ? coin_1.Coin.toJSON(message.totalQueuedPoolCoin) : undefined);
        return obj;
    },
    create(base) {
        return exports.TotalActiveAndQueuedPoolCoins.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseTotalActiveAndQueuedPoolCoins();
        message.poolId = (object.poolId !== undefined && object.poolId !== null)
            ? long_1.default.fromValue(object.poolId)
            : long_1.default.UZERO;
        message.totalActivePoolCoin = (object.totalActivePoolCoin !== undefined && object.totalActivePoolCoin !== null)
            ? coin_1.Coin.fromPartial(object.totalActivePoolCoin)
            : undefined;
        message.totalQueuedPoolCoin = (object.totalQueuedPoolCoin !== undefined && object.totalQueuedPoolCoin !== null)
            ? coin_1.Coin.fromPartial(object.totalQueuedPoolCoin)
            : undefined;
        return message;
    },
};
function createBaseQueryAllFarmedPoolCoinsRequest() {
    return { appId: long_1.default.UZERO };
}
exports.QueryAllFarmedPoolCoinsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllFarmedPoolCoinsRequest();
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
        return { appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.QueryAllFarmedPoolCoinsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllFarmedPoolCoinsRequest();
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryAllFarmedPoolCoinsResponse() {
    return { appId: long_1.default.UZERO, totalActiveAndQueuedCoins: [] };
}
exports.QueryAllFarmedPoolCoinsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        for (const v of message.totalActiveAndQueuedCoins) {
            exports.TotalActiveAndQueuedPoolCoins.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllFarmedPoolCoinsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.totalActiveAndQueuedCoins.push(exports.TotalActiveAndQueuedPoolCoins.decode(reader, reader.uint32()));
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
            totalActiveAndQueuedCoins: Array.isArray(object === null || object === void 0 ? void 0 : object.totalActiveAndQueuedCoins)
                ? object.totalActiveAndQueuedCoins.map((e) => exports.TotalActiveAndQueuedPoolCoins.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        if (message.totalActiveAndQueuedCoins) {
            obj.totalActiveAndQueuedCoins = message.totalActiveAndQueuedCoins.map((e) => e ? exports.TotalActiveAndQueuedPoolCoins.toJSON(e) : undefined);
        }
        else {
            obj.totalActiveAndQueuedCoins = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryAllFarmedPoolCoinsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllFarmedPoolCoinsResponse();
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        message.totalActiveAndQueuedCoins =
            ((_a = object.totalActiveAndQueuedCoins) === null || _a === void 0 ? void 0 : _a.map((e) => exports.TotalActiveAndQueuedPoolCoins.fromPartial(e))) || [];
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "comdex.liquidity.v1beta1.Query";
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.GenericParams = this.GenericParams.bind(this);
        this.Pools = this.Pools.bind(this);
        this.Pool = this.Pool.bind(this);
        this.PoolByReserveAddress = this.PoolByReserveAddress.bind(this);
        this.PoolByPoolCoinDenom = this.PoolByPoolCoinDenom.bind(this);
        this.Pairs = this.Pairs.bind(this);
        this.Pair = this.Pair.bind(this);
        this.DepositRequests = this.DepositRequests.bind(this);
        this.DepositRequest = this.DepositRequest.bind(this);
        this.WithdrawRequests = this.WithdrawRequests.bind(this);
        this.WithdrawRequest = this.WithdrawRequest.bind(this);
        this.Orders = this.Orders.bind(this);
        this.Order = this.Order.bind(this);
        this.OrdersByOrderer = this.OrdersByOrderer.bind(this);
        this.Farmer = this.Farmer.bind(this);
        this.DeserializePoolCoin = this.DeserializePoolCoin.bind(this);
        this.PoolIncentives = this.PoolIncentives.bind(this);
        this.FarmedPoolCoin = this.FarmedPoolCoin.bind(this);
        this.TotalActiveAndQueuedPoolCoin = this.TotalActiveAndQueuedPoolCoin.bind(this);
        this.OrderBooks = this.OrderBooks.bind(this);
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    GenericParams(request) {
        const data = exports.QueryGenericParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GenericParams", data);
        return promise.then((data) => exports.QueryGenericParamsResponse.decode(new _m0.Reader(data)));
    }
    Pools(request) {
        const data = exports.QueryPoolsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Pools", data);
        return promise.then((data) => exports.QueryPoolsResponse.decode(new _m0.Reader(data)));
    }
    Pool(request) {
        const data = exports.QueryPoolRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Pool", data);
        return promise.then((data) => exports.QueryPoolResponse.decode(new _m0.Reader(data)));
    }
    PoolByReserveAddress(request) {
        const data = exports.QueryPoolByReserveAddressRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "PoolByReserveAddress", data);
        return promise.then((data) => exports.QueryPoolResponse.decode(new _m0.Reader(data)));
    }
    PoolByPoolCoinDenom(request) {
        const data = exports.QueryPoolByPoolCoinDenomRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "PoolByPoolCoinDenom", data);
        return promise.then((data) => exports.QueryPoolResponse.decode(new _m0.Reader(data)));
    }
    Pairs(request) {
        const data = exports.QueryPairsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Pairs", data);
        return promise.then((data) => exports.QueryPairsResponse.decode(new _m0.Reader(data)));
    }
    Pair(request) {
        const data = exports.QueryPairRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Pair", data);
        return promise.then((data) => exports.QueryPairResponse.decode(new _m0.Reader(data)));
    }
    DepositRequests(request) {
        const data = exports.QueryDepositRequestsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DepositRequests", data);
        return promise.then((data) => exports.QueryDepositRequestsResponse.decode(new _m0.Reader(data)));
    }
    DepositRequest(request) {
        const data = exports.QueryDepositRequestRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DepositRequest", data);
        return promise.then((data) => exports.QueryDepositRequestResponse.decode(new _m0.Reader(data)));
    }
    WithdrawRequests(request) {
        const data = exports.QueryWithdrawRequestsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "WithdrawRequests", data);
        return promise.then((data) => exports.QueryWithdrawRequestsResponse.decode(new _m0.Reader(data)));
    }
    WithdrawRequest(request) {
        const data = exports.QueryWithdrawRequestRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "WithdrawRequest", data);
        return promise.then((data) => exports.QueryWithdrawRequestResponse.decode(new _m0.Reader(data)));
    }
    Orders(request) {
        const data = exports.QueryOrdersRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Orders", data);
        return promise.then((data) => exports.QueryOrdersResponse.decode(new _m0.Reader(data)));
    }
    Order(request) {
        const data = exports.QueryOrderRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Order", data);
        return promise.then((data) => exports.QueryOrderResponse.decode(new _m0.Reader(data)));
    }
    OrdersByOrderer(request) {
        const data = exports.QueryOrdersByOrdererRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "OrdersByOrderer", data);
        return promise.then((data) => exports.QueryOrdersResponse.decode(new _m0.Reader(data)));
    }
    Farmer(request) {
        const data = exports.QueryFarmerRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Farmer", data);
        return promise.then((data) => exports.QueryFarmerResponse.decode(new _m0.Reader(data)));
    }
    DeserializePoolCoin(request) {
        const data = exports.QueryDeserializePoolCoinRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeserializePoolCoin", data);
        return promise.then((data) => exports.QueryDeserializePoolCoinResponse.decode(new _m0.Reader(data)));
    }
    PoolIncentives(request) {
        const data = exports.QueryPoolsIncentivesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "PoolIncentives", data);
        return promise.then((data) => exports.QueryPoolIncentivesResponse.decode(new _m0.Reader(data)));
    }
    FarmedPoolCoin(request) {
        const data = exports.QueryFarmedPoolCoinRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "FarmedPoolCoin", data);
        return promise.then((data) => exports.QueryFarmedPoolCoinResponse.decode(new _m0.Reader(data)));
    }
    TotalActiveAndQueuedPoolCoin(request) {
        const data = exports.QueryAllFarmedPoolCoinsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "TotalActiveAndQueuedPoolCoin", data);
        return promise.then((data) => exports.QueryAllFarmedPoolCoinsResponse.decode(new _m0.Reader(data)));
    }
    OrderBooks(request) {
        const data = exports.QueryOrderBooksRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "OrderBooks", data);
        return promise.then((data) => exports.QueryOrderBooksResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
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
//# sourceMappingURL=query.js.map