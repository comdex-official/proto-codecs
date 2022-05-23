"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryPoolBatchWithdrawMsgResponse = exports.QueryPoolBatchWithdrawMsgsResponse = exports.QueryPoolBatchWithdrawMsgRequest = exports.QueryPoolBatchWithdrawMsgsRequest = exports.QueryPoolBatchDepositMsgResponse = exports.QueryPoolBatchDepositMsgsResponse = exports.QueryPoolBatchDepositMsgRequest = exports.QueryPoolBatchDepositMsgsRequest = exports.QueryPoolBatchSwapMsgResponse = exports.QueryPoolBatchSwapMsgsResponse = exports.QueryPoolBatchSwapMsgRequest = exports.QueryPoolBatchSwapMsgsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryLiquidityPoolsResponse = exports.QueryLiquidityPoolsRequest = exports.QueryLiquidityPoolBatchResponse = exports.QueryLiquidityPoolBatchRequest = exports.QueryLiquidityPoolByReserveAccRequest = exports.QueryLiquidityPoolByPoolCoinDenomRequest = exports.QueryLiquidityPoolResponse = exports.QueryLiquidityPoolRequest = exports.QueryAllUsersPoolsContributionMsgResponse = exports.QueryAllUsersPoolsContributionMsgRequest = exports.QueryUserPoolsContributionMsgResponse = exports.QueryUserPoolsContributionMsgRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const userPoolData_1 = require("./userPoolData");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const liquidity_1 = require("./liquidity");
exports.protobufPackage = "comdex.liquidity.v1beta1";
function createBaseQueryUserPoolsContributionMsgRequest() {
    return { userAddress: "" };
}
exports.QueryUserPoolsContributionMsgRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userAddress !== "") {
            writer.uint32(10).string(message.userAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUserPoolsContributionMsgRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userAddress = reader.string();
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
            userAddress: isSet(object.userAddress) ? String(object.userAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.userAddress !== undefined &&
            (obj.userAddress = message.userAddress);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryUserPoolsContributionMsgRequest();
        message.userAddress = (_a = object.userAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryUserPoolsContributionMsgResponse() {
    return { userPoolData: undefined };
}
exports.QueryUserPoolsContributionMsgResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userPoolData !== undefined) {
            userPoolData_1.UserPoolsData.encode(message.userPoolData, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUserPoolsContributionMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userPoolData = userPoolData_1.UserPoolsData.decode(reader, reader.uint32());
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
            userPoolData: isSet(object.userPoolData)
                ? userPoolData_1.UserPoolsData.fromJSON(object.userPoolData)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userPoolData !== undefined &&
            (obj.userPoolData = message.userPoolData
                ? userPoolData_1.UserPoolsData.toJSON(message.userPoolData)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUserPoolsContributionMsgResponse();
        message.userPoolData =
            object.userPoolData !== undefined && object.userPoolData !== null
                ? userPoolData_1.UserPoolsData.fromPartial(object.userPoolData)
                : undefined;
        return message;
    },
};
function createBaseQueryAllUsersPoolsContributionMsgRequest() {
    return { pagination: undefined };
}
exports.QueryAllUsersPoolsContributionMsgRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllUsersPoolsContributionMsgRequest();
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
        const message = createBaseQueryAllUsersPoolsContributionMsgRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllUsersPoolsContributionMsgResponse() {
    return { userPoolData: [] };
}
exports.QueryAllUsersPoolsContributionMsgResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.userPoolData) {
            userPoolData_1.UserPoolsData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllUsersPoolsContributionMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userPoolData.push(userPoolData_1.UserPoolsData.decode(reader, reader.uint32()));
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
            userPoolData: Array.isArray(object === null || object === void 0 ? void 0 : object.userPoolData)
                ? object.userPoolData.map((e) => userPoolData_1.UserPoolsData.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userPoolData) {
            obj.userPoolData = message.userPoolData.map((e) => e ? userPoolData_1.UserPoolsData.toJSON(e) : undefined);
        }
        else {
            obj.userPoolData = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllUsersPoolsContributionMsgResponse();
        message.userPoolData =
            ((_a = object.userPoolData) === null || _a === void 0 ? void 0 : _a.map((e) => userPoolData_1.UserPoolsData.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryLiquidityPoolRequest() {
    return { poolId: long_1.default.UZERO };
}
exports.QueryLiquidityPoolRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidityPoolRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
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
            poolId: isSet(object.poolId)
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLiquidityPoolRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryLiquidityPoolResponse() {
    return { pool: undefined };
}
exports.QueryLiquidityPoolResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pool !== undefined) {
            liquidity_1.Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidityPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = liquidity_1.Pool.decode(reader, reader.uint32());
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
            pool: isSet(object.pool) ? liquidity_1.Pool.fromJSON(object.pool) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool !== undefined &&
            (obj.pool = message.pool ? liquidity_1.Pool.toJSON(message.pool) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLiquidityPoolResponse();
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? liquidity_1.Pool.fromPartial(object.pool)
                : undefined;
        return message;
    },
};
function createBaseQueryLiquidityPoolByPoolCoinDenomRequest() {
    return { poolCoinDenom: "" };
}
exports.QueryLiquidityPoolByPoolCoinDenomRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.poolCoinDenom !== "") {
            writer.uint32(10).string(message.poolCoinDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidityPoolByPoolCoinDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolCoinDenom = reader.string();
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
            poolCoinDenom: isSet(object.poolCoinDenom)
                ? String(object.poolCoinDenom)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolCoinDenom !== undefined &&
            (obj.poolCoinDenom = message.poolCoinDenom);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLiquidityPoolByPoolCoinDenomRequest();
        message.poolCoinDenom = (_a = object.poolCoinDenom) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryLiquidityPoolByReserveAccRequest() {
    return { reserveAcc: "" };
}
exports.QueryLiquidityPoolByReserveAccRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.reserveAcc !== "") {
            writer.uint32(10).string(message.reserveAcc);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidityPoolByReserveAccRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reserveAcc = reader.string();
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
            reserveAcc: isSet(object.reserveAcc) ? String(object.reserveAcc) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.reserveAcc !== undefined && (obj.reserveAcc = message.reserveAcc);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLiquidityPoolByReserveAccRequest();
        message.reserveAcc = (_a = object.reserveAcc) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryLiquidityPoolBatchRequest() {
    return { poolId: long_1.default.UZERO };
}
exports.QueryLiquidityPoolBatchRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidityPoolBatchRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
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
            poolId: isSet(object.poolId)
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLiquidityPoolBatchRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryLiquidityPoolBatchResponse() {
    return { batch: undefined };
}
exports.QueryLiquidityPoolBatchResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.batch !== undefined) {
            liquidity_1.PoolBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidityPoolBatchResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batch = liquidity_1.PoolBatch.decode(reader, reader.uint32());
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
            batch: isSet(object.batch) ? liquidity_1.PoolBatch.fromJSON(object.batch) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.batch !== undefined &&
            (obj.batch = message.batch ? liquidity_1.PoolBatch.toJSON(message.batch) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLiquidityPoolBatchResponse();
        message.batch =
            object.batch !== undefined && object.batch !== null
                ? liquidity_1.PoolBatch.fromPartial(object.batch)
                : undefined;
        return message;
    },
};
function createBaseQueryLiquidityPoolsRequest() {
    return { pagination: undefined };
}
exports.QueryLiquidityPoolsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidityPoolsRequest();
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
        const message = createBaseQueryLiquidityPoolsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryLiquidityPoolsResponse() {
    return { pools: [], pagination: undefined };
}
exports.QueryLiquidityPoolsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.pools) {
            liquidity_1.Pool.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidityPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(liquidity_1.Pool.decode(reader, reader.uint32()));
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
            pools: Array.isArray(object === null || object === void 0 ? void 0 : object.pools)
                ? object.pools.map((e) => liquidity_1.Pool.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map((e) => (e ? liquidity_1.Pool.toJSON(e) : undefined));
        }
        else {
            obj.pools = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLiquidityPoolsResponse();
        message.pools = ((_a = object.pools) === null || _a === void 0 ? void 0 : _a.map((e) => liquidity_1.Pool.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            liquidity_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = liquidity_1.Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? liquidity_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? liquidity_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? liquidity_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseQueryPoolBatchSwapMsgsRequest() {
    return { poolId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryPoolBatchSwapMsgsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchSwapMsgsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
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
            poolId: isSet(object.poolId)
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolBatchSwapMsgsRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryPoolBatchSwapMsgRequest() {
    return { poolId: long_1.default.UZERO, msgIndex: long_1.default.UZERO };
}
exports.QueryPoolBatchSwapMsgRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.msgIndex.isZero()) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchSwapMsgRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
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
            poolId: isSet(object.poolId)
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO,
            msgIndex: isSet(object.msgIndex)
                ? long_1.default.fromString(object.msgIndex)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.msgIndex !== undefined &&
            (obj.msgIndex = (message.msgIndex || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolBatchSwapMsgRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? long_1.default.fromValue(object.msgIndex)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryPoolBatchSwapMsgsResponse() {
    return { swaps: [], pagination: undefined };
}
exports.QueryPoolBatchSwapMsgsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.swaps) {
            liquidity_1.SwapMsgState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchSwapMsgsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swaps.push(liquidity_1.SwapMsgState.decode(reader, reader.uint32()));
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
            swaps: Array.isArray(object === null || object === void 0 ? void 0 : object.swaps)
                ? object.swaps.map((e) => liquidity_1.SwapMsgState.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.swaps) {
            obj.swaps = message.swaps.map((e) => e ? liquidity_1.SwapMsgState.toJSON(e) : undefined);
        }
        else {
            obj.swaps = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPoolBatchSwapMsgsResponse();
        message.swaps = ((_a = object.swaps) === null || _a === void 0 ? void 0 : _a.map((e) => liquidity_1.SwapMsgState.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryPoolBatchSwapMsgResponse() {
    return { swap: undefined };
}
exports.QueryPoolBatchSwapMsgResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.swap !== undefined) {
            liquidity_1.SwapMsgState.encode(message.swap, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchSwapMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swap = liquidity_1.SwapMsgState.decode(reader, reader.uint32());
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
            swap: isSet(object.swap) ? liquidity_1.SwapMsgState.fromJSON(object.swap) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.swap !== undefined &&
            (obj.swap = message.swap ? liquidity_1.SwapMsgState.toJSON(message.swap) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolBatchSwapMsgResponse();
        message.swap =
            object.swap !== undefined && object.swap !== null
                ? liquidity_1.SwapMsgState.fromPartial(object.swap)
                : undefined;
        return message;
    },
};
function createBaseQueryPoolBatchDepositMsgsRequest() {
    return { poolId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryPoolBatchDepositMsgsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchDepositMsgsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
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
            poolId: isSet(object.poolId)
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolBatchDepositMsgsRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryPoolBatchDepositMsgRequest() {
    return { poolId: long_1.default.UZERO, msgIndex: long_1.default.UZERO };
}
exports.QueryPoolBatchDepositMsgRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.msgIndex.isZero()) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchDepositMsgRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
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
            poolId: isSet(object.poolId)
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO,
            msgIndex: isSet(object.msgIndex)
                ? long_1.default.fromString(object.msgIndex)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.msgIndex !== undefined &&
            (obj.msgIndex = (message.msgIndex || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolBatchDepositMsgRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? long_1.default.fromValue(object.msgIndex)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryPoolBatchDepositMsgsResponse() {
    return { deposits: [], pagination: undefined };
}
exports.QueryPoolBatchDepositMsgsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.deposits) {
            liquidity_1.DepositMsgState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchDepositMsgsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposits.push(liquidity_1.DepositMsgState.decode(reader, reader.uint32()));
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
            deposits: Array.isArray(object === null || object === void 0 ? void 0 : object.deposits)
                ? object.deposits.map((e) => liquidity_1.DepositMsgState.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.deposits) {
            obj.deposits = message.deposits.map((e) => e ? liquidity_1.DepositMsgState.toJSON(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPoolBatchDepositMsgsResponse();
        message.deposits =
            ((_a = object.deposits) === null || _a === void 0 ? void 0 : _a.map((e) => liquidity_1.DepositMsgState.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryPoolBatchDepositMsgResponse() {
    return { deposit: undefined };
}
exports.QueryPoolBatchDepositMsgResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deposit !== undefined) {
            liquidity_1.DepositMsgState.encode(message.deposit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchDepositMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposit = liquidity_1.DepositMsgState.decode(reader, reader.uint32());
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
            deposit: isSet(object.deposit)
                ? liquidity_1.DepositMsgState.fromJSON(object.deposit)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.deposit !== undefined &&
            (obj.deposit = message.deposit
                ? liquidity_1.DepositMsgState.toJSON(message.deposit)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolBatchDepositMsgResponse();
        message.deposit =
            object.deposit !== undefined && object.deposit !== null
                ? liquidity_1.DepositMsgState.fromPartial(object.deposit)
                : undefined;
        return message;
    },
};
function createBaseQueryPoolBatchWithdrawMsgsRequest() {
    return { poolId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryPoolBatchWithdrawMsgsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchWithdrawMsgsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
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
            poolId: isSet(object.poolId)
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolBatchWithdrawMsgsRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryPoolBatchWithdrawMsgRequest() {
    return { poolId: long_1.default.UZERO, msgIndex: long_1.default.UZERO };
}
exports.QueryPoolBatchWithdrawMsgRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.msgIndex.isZero()) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchWithdrawMsgRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
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
            poolId: isSet(object.poolId)
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO,
            msgIndex: isSet(object.msgIndex)
                ? long_1.default.fromString(object.msgIndex)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.msgIndex !== undefined &&
            (obj.msgIndex = (message.msgIndex || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolBatchWithdrawMsgRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? long_1.default.fromValue(object.msgIndex)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryPoolBatchWithdrawMsgsResponse() {
    return { withdraws: [], pagination: undefined };
}
exports.QueryPoolBatchWithdrawMsgsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.withdraws) {
            liquidity_1.WithdrawMsgState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchWithdrawMsgsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdraws.push(liquidity_1.WithdrawMsgState.decode(reader, reader.uint32()));
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
            withdraws: Array.isArray(object === null || object === void 0 ? void 0 : object.withdraws)
                ? object.withdraws.map((e) => liquidity_1.WithdrawMsgState.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.withdraws) {
            obj.withdraws = message.withdraws.map((e) => e ? liquidity_1.WithdrawMsgState.toJSON(e) : undefined);
        }
        else {
            obj.withdraws = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPoolBatchWithdrawMsgsResponse();
        message.withdraws =
            ((_a = object.withdraws) === null || _a === void 0 ? void 0 : _a.map((e) => liquidity_1.WithdrawMsgState.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryPoolBatchWithdrawMsgResponse() {
    return { withdraw: undefined };
}
exports.QueryPoolBatchWithdrawMsgResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.withdraw !== undefined) {
            liquidity_1.WithdrawMsgState.encode(message.withdraw, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchWithdrawMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdraw = liquidity_1.WithdrawMsgState.decode(reader, reader.uint32());
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
            withdraw: isSet(object.withdraw)
                ? liquidity_1.WithdrawMsgState.fromJSON(object.withdraw)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.withdraw !== undefined &&
            (obj.withdraw = message.withdraw
                ? liquidity_1.WithdrawMsgState.toJSON(message.withdraw)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolBatchWithdrawMsgResponse();
        message.withdraw =
            object.withdraw !== undefined && object.withdraw !== null
                ? liquidity_1.WithdrawMsgState.fromPartial(object.withdraw)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.LiquidityPools = this.LiquidityPools.bind(this);
        this.LiquidityPool = this.LiquidityPool.bind(this);
        this.LiquidityPoolByPoolCoinDenom =
            this.LiquidityPoolByPoolCoinDenom.bind(this);
        this.LiquidityPoolByReserveAcc = this.LiquidityPoolByReserveAcc.bind(this);
        this.LiquidityPoolBatch = this.LiquidityPoolBatch.bind(this);
        this.PoolBatchSwapMsgs = this.PoolBatchSwapMsgs.bind(this);
        this.PoolBatchSwapMsg = this.PoolBatchSwapMsg.bind(this);
        this.PoolBatchDepositMsgs = this.PoolBatchDepositMsgs.bind(this);
        this.PoolBatchDepositMsg = this.PoolBatchDepositMsg.bind(this);
        this.PoolBatchWithdrawMsgs = this.PoolBatchWithdrawMsgs.bind(this);
        this.PoolBatchWithdrawMsg = this.PoolBatchWithdrawMsg.bind(this);
        this.Params = this.Params.bind(this);
        this.UserPoolsContribution = this.UserPoolsContribution.bind(this);
        this.AllUserPoolsContribution = this.AllUserPoolsContribution.bind(this);
    }
    LiquidityPools(request) {
        const data = exports.QueryLiquidityPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidity.v1beta1.Query", "LiquidityPools", data);
        return promise.then((data) => exports.QueryLiquidityPoolsResponse.decode(new minimal_1.default.Reader(data)));
    }
    LiquidityPool(request) {
        const data = exports.QueryLiquidityPoolRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidity.v1beta1.Query", "LiquidityPool", data);
        return promise.then((data) => exports.QueryLiquidityPoolResponse.decode(new minimal_1.default.Reader(data)));
    }
    LiquidityPoolByPoolCoinDenom(request) {
        const data = exports.QueryLiquidityPoolByPoolCoinDenomRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidity.v1beta1.Query", "LiquidityPoolByPoolCoinDenom", data);
        return promise.then((data) => exports.QueryLiquidityPoolResponse.decode(new minimal_1.default.Reader(data)));
    }
    LiquidityPoolByReserveAcc(request) {
        const data = exports.QueryLiquidityPoolByReserveAccRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidity.v1beta1.Query", "LiquidityPoolByReserveAcc", data);
        return promise.then((data) => exports.QueryLiquidityPoolResponse.decode(new minimal_1.default.Reader(data)));
    }
    LiquidityPoolBatch(request) {
        const data = exports.QueryLiquidityPoolBatchRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidity.v1beta1.Query", "LiquidityPoolBatch", data);
        return promise.then((data) => exports.QueryLiquidityPoolBatchResponse.decode(new minimal_1.default.Reader(data)));
    }
    PoolBatchSwapMsgs(request) {
        const data = exports.QueryPoolBatchSwapMsgsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidity.v1beta1.Query", "PoolBatchSwapMsgs", data);
        return promise.then((data) => exports.QueryPoolBatchSwapMsgsResponse.decode(new minimal_1.default.Reader(data)));
    }
    PoolBatchSwapMsg(request) {
        const data = exports.QueryPoolBatchSwapMsgRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidity.v1beta1.Query", "PoolBatchSwapMsg", data);
        return promise.then((data) => exports.QueryPoolBatchSwapMsgResponse.decode(new minimal_1.default.Reader(data)));
    }
    PoolBatchDepositMsgs(request) {
        const data = exports.QueryPoolBatchDepositMsgsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidity.v1beta1.Query", "PoolBatchDepositMsgs", data);
        return promise.then((data) => exports.QueryPoolBatchDepositMsgsResponse.decode(new minimal_1.default.Reader(data)));
    }
    PoolBatchDepositMsg(request) {
        const data = exports.QueryPoolBatchDepositMsgRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidity.v1beta1.Query", "PoolBatchDepositMsg", data);
        return promise.then((data) => exports.QueryPoolBatchDepositMsgResponse.decode(new minimal_1.default.Reader(data)));
    }
    PoolBatchWithdrawMsgs(request) {
        const data = exports.QueryPoolBatchWithdrawMsgsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidity.v1beta1.Query", "PoolBatchWithdrawMsgs", data);
        return promise.then((data) => exports.QueryPoolBatchWithdrawMsgsResponse.decode(new minimal_1.default.Reader(data)));
    }
    PoolBatchWithdrawMsg(request) {
        const data = exports.QueryPoolBatchWithdrawMsgRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidity.v1beta1.Query", "PoolBatchWithdrawMsg", data);
        return promise.then((data) => exports.QueryPoolBatchWithdrawMsgResponse.decode(new minimal_1.default.Reader(data)));
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidity.v1beta1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new minimal_1.default.Reader(data)));
    }
    UserPoolsContribution(request) {
        const data = exports.QueryUserPoolsContributionMsgRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidity.v1beta1.Query", "UserPoolsContribution", data);
        return promise.then((data) => exports.QueryUserPoolsContributionMsgResponse.decode(new minimal_1.default.Reader(data)));
    }
    AllUserPoolsContribution(request) {
        const data = exports.QueryAllUsersPoolsContributionMsgRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidity.v1beta1.Query", "AllUserPoolsContribution", data);
        return promise.then((data) => exports.QueryAllUsersPoolsContributionMsgResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map