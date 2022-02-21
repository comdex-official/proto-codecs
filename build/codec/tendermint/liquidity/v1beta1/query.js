"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryPoolBatchWithdrawMsgResponse = exports.QueryPoolBatchWithdrawMsgsResponse = exports.QueryPoolBatchWithdrawMsgRequest = exports.QueryPoolBatchWithdrawMsgsRequest = exports.QueryPoolBatchDepositMsgResponse = exports.QueryPoolBatchDepositMsgsResponse = exports.QueryPoolBatchDepositMsgRequest = exports.QueryPoolBatchDepositMsgsRequest = exports.QueryPoolBatchSwapMsgResponse = exports.QueryPoolBatchSwapMsgsResponse = exports.QueryPoolBatchSwapMsgRequest = exports.QueryPoolBatchSwapMsgsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryLiquidityPoolsResponse = exports.QueryLiquidityPoolsRequest = exports.QueryLiquidityPoolBatchResponse = exports.QueryLiquidityPoolBatchRequest = exports.QueryLiquidityPoolByReserveAccRequest = exports.QueryLiquidityPoolByPoolCoinDenomRequest = exports.QueryLiquidityPoolResponse = exports.QueryLiquidityPoolRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const liquidity_1 = require("../../../tendermint/liquidity/v1beta1/liquidity");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
exports.protobufPackage = "tendermint.liquidity.v1beta1";
const baseQueryLiquidityPoolRequest = { poolId: long_1.default.UZERO };
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
        const message = {
            ...baseQueryLiquidityPoolRequest,
        };
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
        const message = {
            ...baseQueryLiquidityPoolRequest,
        };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = long_1.default.fromString(object.poolId);
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLiquidityPoolRequest,
        };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        return message;
    },
};
const baseQueryLiquidityPoolResponse = {};
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
        const message = {
            ...baseQueryLiquidityPoolResponse,
        };
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
        const message = {
            ...baseQueryLiquidityPoolResponse,
        };
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = liquidity_1.Pool.fromJSON(object.pool);
        }
        else {
            message.pool = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pool !== undefined &&
            (obj.pool = message.pool ? liquidity_1.Pool.toJSON(message.pool) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLiquidityPoolResponse,
        };
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = liquidity_1.Pool.fromPartial(object.pool);
        }
        else {
            message.pool = undefined;
        }
        return message;
    },
};
const baseQueryLiquidityPoolByPoolCoinDenomRequest = {
    poolCoinDenom: "",
};
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
        const message = {
            ...baseQueryLiquidityPoolByPoolCoinDenomRequest,
        };
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
        const message = {
            ...baseQueryLiquidityPoolByPoolCoinDenomRequest,
        };
        if (object.poolCoinDenom !== undefined && object.poolCoinDenom !== null) {
            message.poolCoinDenom = String(object.poolCoinDenom);
        }
        else {
            message.poolCoinDenom = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolCoinDenom !== undefined &&
            (obj.poolCoinDenom = message.poolCoinDenom);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLiquidityPoolByPoolCoinDenomRequest,
        };
        if (object.poolCoinDenom !== undefined && object.poolCoinDenom !== null) {
            message.poolCoinDenom = object.poolCoinDenom;
        }
        else {
            message.poolCoinDenom = "";
        }
        return message;
    },
};
const baseQueryLiquidityPoolByReserveAccRequest = { reserveAcc: "" };
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
        const message = {
            ...baseQueryLiquidityPoolByReserveAccRequest,
        };
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
        const message = {
            ...baseQueryLiquidityPoolByReserveAccRequest,
        };
        if (object.reserveAcc !== undefined && object.reserveAcc !== null) {
            message.reserveAcc = String(object.reserveAcc);
        }
        else {
            message.reserveAcc = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.reserveAcc !== undefined && (obj.reserveAcc = message.reserveAcc);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLiquidityPoolByReserveAccRequest,
        };
        if (object.reserveAcc !== undefined && object.reserveAcc !== null) {
            message.reserveAcc = object.reserveAcc;
        }
        else {
            message.reserveAcc = "";
        }
        return message;
    },
};
const baseQueryLiquidityPoolBatchRequest = { poolId: long_1.default.UZERO };
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
        const message = {
            ...baseQueryLiquidityPoolBatchRequest,
        };
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
        const message = {
            ...baseQueryLiquidityPoolBatchRequest,
        };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = long_1.default.fromString(object.poolId);
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLiquidityPoolBatchRequest,
        };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        return message;
    },
};
const baseQueryLiquidityPoolBatchResponse = {};
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
        const message = {
            ...baseQueryLiquidityPoolBatchResponse,
        };
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
        const message = {
            ...baseQueryLiquidityPoolBatchResponse,
        };
        if (object.batch !== undefined && object.batch !== null) {
            message.batch = liquidity_1.PoolBatch.fromJSON(object.batch);
        }
        else {
            message.batch = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.batch !== undefined &&
            (obj.batch = message.batch ? liquidity_1.PoolBatch.toJSON(message.batch) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLiquidityPoolBatchResponse,
        };
        if (object.batch !== undefined && object.batch !== null) {
            message.batch = liquidity_1.PoolBatch.fromPartial(object.batch);
        }
        else {
            message.batch = undefined;
        }
        return message;
    },
};
const baseQueryLiquidityPoolsRequest = {};
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
        const message = {
            ...baseQueryLiquidityPoolsRequest,
        };
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
        const message = {
            ...baseQueryLiquidityPoolsRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
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
        const message = {
            ...baseQueryLiquidityPoolsRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryLiquidityPoolsResponse = {};
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
        const message = {
            ...baseQueryLiquidityPoolsResponse,
        };
        message.pools = [];
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
        const message = {
            ...baseQueryLiquidityPoolsResponse,
        };
        message.pools = [];
        if (object.pools !== undefined && object.pools !== null) {
            for (const e of object.pools) {
                message.pools.push(liquidity_1.Pool.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
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
        const message = {
            ...baseQueryLiquidityPoolsResponse,
        };
        message.pools = [];
        if (object.pools !== undefined && object.pools !== null) {
            for (const e of object.pools) {
                message.pools.push(liquidity_1.Pool.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryParamsRequest = {};
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsRequest };
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
        const message = { ...baseQueryParamsRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    },
};
const baseQueryParamsResponse = {};
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
        const message = { ...baseQueryParamsResponse };
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
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = liquidity_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? liquidity_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = liquidity_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
const baseQueryPoolBatchSwapMsgsRequest = { poolId: long_1.default.UZERO };
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
        const message = {
            ...baseQueryPoolBatchSwapMsgsRequest,
        };
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
        const message = {
            ...baseQueryPoolBatchSwapMsgsRequest,
        };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = long_1.default.fromString(object.poolId);
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
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
        const message = {
            ...baseQueryPoolBatchSwapMsgsRequest,
        };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryPoolBatchSwapMsgRequest = {
    poolId: long_1.default.UZERO,
    msgIndex: long_1.default.UZERO,
};
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
        const message = {
            ...baseQueryPoolBatchSwapMsgRequest,
        };
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
        const message = {
            ...baseQueryPoolBatchSwapMsgRequest,
        };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = long_1.default.fromString(object.poolId);
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.msgIndex !== undefined && object.msgIndex !== null) {
            message.msgIndex = long_1.default.fromString(object.msgIndex);
        }
        else {
            message.msgIndex = long_1.default.UZERO;
        }
        return message;
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
        const message = {
            ...baseQueryPoolBatchSwapMsgRequest,
        };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.msgIndex !== undefined && object.msgIndex !== null) {
            message.msgIndex = object.msgIndex;
        }
        else {
            message.msgIndex = long_1.default.UZERO;
        }
        return message;
    },
};
const baseQueryPoolBatchSwapMsgsResponse = {};
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
        const message = {
            ...baseQueryPoolBatchSwapMsgsResponse,
        };
        message.swaps = [];
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
        const message = {
            ...baseQueryPoolBatchSwapMsgsResponse,
        };
        message.swaps = [];
        if (object.swaps !== undefined && object.swaps !== null) {
            for (const e of object.swaps) {
                message.swaps.push(liquidity_1.SwapMsgState.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
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
        const message = {
            ...baseQueryPoolBatchSwapMsgsResponse,
        };
        message.swaps = [];
        if (object.swaps !== undefined && object.swaps !== null) {
            for (const e of object.swaps) {
                message.swaps.push(liquidity_1.SwapMsgState.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryPoolBatchSwapMsgResponse = {};
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
        const message = {
            ...baseQueryPoolBatchSwapMsgResponse,
        };
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
        const message = {
            ...baseQueryPoolBatchSwapMsgResponse,
        };
        if (object.swap !== undefined && object.swap !== null) {
            message.swap = liquidity_1.SwapMsgState.fromJSON(object.swap);
        }
        else {
            message.swap = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.swap !== undefined &&
            (obj.swap = message.swap ? liquidity_1.SwapMsgState.toJSON(message.swap) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryPoolBatchSwapMsgResponse,
        };
        if (object.swap !== undefined && object.swap !== null) {
            message.swap = liquidity_1.SwapMsgState.fromPartial(object.swap);
        }
        else {
            message.swap = undefined;
        }
        return message;
    },
};
const baseQueryPoolBatchDepositMsgsRequest = { poolId: long_1.default.UZERO };
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
        const message = {
            ...baseQueryPoolBatchDepositMsgsRequest,
        };
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
        const message = {
            ...baseQueryPoolBatchDepositMsgsRequest,
        };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = long_1.default.fromString(object.poolId);
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
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
        const message = {
            ...baseQueryPoolBatchDepositMsgsRequest,
        };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryPoolBatchDepositMsgRequest = {
    poolId: long_1.default.UZERO,
    msgIndex: long_1.default.UZERO,
};
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
        const message = {
            ...baseQueryPoolBatchDepositMsgRequest,
        };
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
        const message = {
            ...baseQueryPoolBatchDepositMsgRequest,
        };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = long_1.default.fromString(object.poolId);
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.msgIndex !== undefined && object.msgIndex !== null) {
            message.msgIndex = long_1.default.fromString(object.msgIndex);
        }
        else {
            message.msgIndex = long_1.default.UZERO;
        }
        return message;
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
        const message = {
            ...baseQueryPoolBatchDepositMsgRequest,
        };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.msgIndex !== undefined && object.msgIndex !== null) {
            message.msgIndex = object.msgIndex;
        }
        else {
            message.msgIndex = long_1.default.UZERO;
        }
        return message;
    },
};
const baseQueryPoolBatchDepositMsgsResponse = {};
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
        const message = {
            ...baseQueryPoolBatchDepositMsgsResponse,
        };
        message.deposits = [];
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
        const message = {
            ...baseQueryPoolBatchDepositMsgsResponse,
        };
        message.deposits = [];
        if (object.deposits !== undefined && object.deposits !== null) {
            for (const e of object.deposits) {
                message.deposits.push(liquidity_1.DepositMsgState.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
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
        const message = {
            ...baseQueryPoolBatchDepositMsgsResponse,
        };
        message.deposits = [];
        if (object.deposits !== undefined && object.deposits !== null) {
            for (const e of object.deposits) {
                message.deposits.push(liquidity_1.DepositMsgState.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryPoolBatchDepositMsgResponse = {};
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
        const message = {
            ...baseQueryPoolBatchDepositMsgResponse,
        };
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
        const message = {
            ...baseQueryPoolBatchDepositMsgResponse,
        };
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = liquidity_1.DepositMsgState.fromJSON(object.deposit);
        }
        else {
            message.deposit = undefined;
        }
        return message;
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
        const message = {
            ...baseQueryPoolBatchDepositMsgResponse,
        };
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = liquidity_1.DepositMsgState.fromPartial(object.deposit);
        }
        else {
            message.deposit = undefined;
        }
        return message;
    },
};
const baseQueryPoolBatchWithdrawMsgsRequest = { poolId: long_1.default.UZERO };
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
        const message = {
            ...baseQueryPoolBatchWithdrawMsgsRequest,
        };
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
        const message = {
            ...baseQueryPoolBatchWithdrawMsgsRequest,
        };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = long_1.default.fromString(object.poolId);
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
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
        const message = {
            ...baseQueryPoolBatchWithdrawMsgsRequest,
        };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryPoolBatchWithdrawMsgRequest = {
    poolId: long_1.default.UZERO,
    msgIndex: long_1.default.UZERO,
};
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
        const message = {
            ...baseQueryPoolBatchWithdrawMsgRequest,
        };
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
        const message = {
            ...baseQueryPoolBatchWithdrawMsgRequest,
        };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = long_1.default.fromString(object.poolId);
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.msgIndex !== undefined && object.msgIndex !== null) {
            message.msgIndex = long_1.default.fromString(object.msgIndex);
        }
        else {
            message.msgIndex = long_1.default.UZERO;
        }
        return message;
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
        const message = {
            ...baseQueryPoolBatchWithdrawMsgRequest,
        };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.msgIndex !== undefined && object.msgIndex !== null) {
            message.msgIndex = object.msgIndex;
        }
        else {
            message.msgIndex = long_1.default.UZERO;
        }
        return message;
    },
};
const baseQueryPoolBatchWithdrawMsgsResponse = {};
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
        const message = {
            ...baseQueryPoolBatchWithdrawMsgsResponse,
        };
        message.withdraws = [];
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
        const message = {
            ...baseQueryPoolBatchWithdrawMsgsResponse,
        };
        message.withdraws = [];
        if (object.withdraws !== undefined && object.withdraws !== null) {
            for (const e of object.withdraws) {
                message.withdraws.push(liquidity_1.WithdrawMsgState.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
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
        const message = {
            ...baseQueryPoolBatchWithdrawMsgsResponse,
        };
        message.withdraws = [];
        if (object.withdraws !== undefined && object.withdraws !== null) {
            for (const e of object.withdraws) {
                message.withdraws.push(liquidity_1.WithdrawMsgState.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryPoolBatchWithdrawMsgResponse = {};
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
        const message = {
            ...baseQueryPoolBatchWithdrawMsgResponse,
        };
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
        const message = {
            ...baseQueryPoolBatchWithdrawMsgResponse,
        };
        if (object.withdraw !== undefined && object.withdraw !== null) {
            message.withdraw = liquidity_1.WithdrawMsgState.fromJSON(object.withdraw);
        }
        else {
            message.withdraw = undefined;
        }
        return message;
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
        const message = {
            ...baseQueryPoolBatchWithdrawMsgResponse,
        };
        if (object.withdraw !== undefined && object.withdraw !== null) {
            message.withdraw = liquidity_1.WithdrawMsgState.fromPartial(object.withdraw);
        }
        else {
            message.withdraw = undefined;
        }
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
    }
    LiquidityPools(request) {
        const data = exports.QueryLiquidityPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "LiquidityPools", data);
        return promise.then((data) => exports.QueryLiquidityPoolsResponse.decode(new minimal_1.default.Reader(data)));
    }
    LiquidityPool(request) {
        const data = exports.QueryLiquidityPoolRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "LiquidityPool", data);
        return promise.then((data) => exports.QueryLiquidityPoolResponse.decode(new minimal_1.default.Reader(data)));
    }
    LiquidityPoolByPoolCoinDenom(request) {
        const data = exports.QueryLiquidityPoolByPoolCoinDenomRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "LiquidityPoolByPoolCoinDenom", data);
        return promise.then((data) => exports.QueryLiquidityPoolResponse.decode(new minimal_1.default.Reader(data)));
    }
    LiquidityPoolByReserveAcc(request) {
        const data = exports.QueryLiquidityPoolByReserveAccRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "LiquidityPoolByReserveAcc", data);
        return promise.then((data) => exports.QueryLiquidityPoolResponse.decode(new minimal_1.default.Reader(data)));
    }
    LiquidityPoolBatch(request) {
        const data = exports.QueryLiquidityPoolBatchRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "LiquidityPoolBatch", data);
        return promise.then((data) => exports.QueryLiquidityPoolBatchResponse.decode(new minimal_1.default.Reader(data)));
    }
    PoolBatchSwapMsgs(request) {
        const data = exports.QueryPoolBatchSwapMsgsRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "PoolBatchSwapMsgs", data);
        return promise.then((data) => exports.QueryPoolBatchSwapMsgsResponse.decode(new minimal_1.default.Reader(data)));
    }
    PoolBatchSwapMsg(request) {
        const data = exports.QueryPoolBatchSwapMsgRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "PoolBatchSwapMsg", data);
        return promise.then((data) => exports.QueryPoolBatchSwapMsgResponse.decode(new minimal_1.default.Reader(data)));
    }
    PoolBatchDepositMsgs(request) {
        const data = exports.QueryPoolBatchDepositMsgsRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "PoolBatchDepositMsgs", data);
        return promise.then((data) => exports.QueryPoolBatchDepositMsgsResponse.decode(new minimal_1.default.Reader(data)));
    }
    PoolBatchDepositMsg(request) {
        const data = exports.QueryPoolBatchDepositMsgRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "PoolBatchDepositMsg", data);
        return promise.then((data) => exports.QueryPoolBatchDepositMsgResponse.decode(new minimal_1.default.Reader(data)));
    }
    PoolBatchWithdrawMsgs(request) {
        const data = exports.QueryPoolBatchWithdrawMsgsRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "PoolBatchWithdrawMsgs", data);
        return promise.then((data) => exports.QueryPoolBatchWithdrawMsgsResponse.decode(new minimal_1.default.Reader(data)));
    }
    PoolBatchWithdrawMsg(request) {
        const data = exports.QueryPoolBatchWithdrawMsgRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "PoolBatchWithdrawMsg", data);
        return promise.then((data) => exports.QueryPoolBatchWithdrawMsgResponse.decode(new minimal_1.default.Reader(data)));
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=query.js.map