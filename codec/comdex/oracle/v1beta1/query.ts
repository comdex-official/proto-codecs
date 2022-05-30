/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
    PageRequest,
    PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Market } from "./oracle";
import { Params } from "./params";

export const protobufPackage = "comdex.oracle.v1beta1";

export interface QueryMarketsRequest {
    pagination?: PageRequest;
}

export interface QueryMarketsResponse {
    markets: Market[];
    pagination?: PageResponse;
}

export interface QueryMarketRequest {
    symbol: string;
}

export interface QueryMarketResponse {
    market?: Market;
}

export interface QueryParamsRequest {}

export interface QueryParamsResponse {
    params?: Params;
}

function createBaseQueryMarketsRequest(): QueryMarketsRequest {
    return { pagination: undefined };
}

export const QueryMarketsRequest = {
    encode(
        message: QueryMarketsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryMarketsRequest {
        return {
            pagination: isSet(object.pagination)
                ? PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },

    toJSON(message: QueryMarketsRequest): unknown {
        const obj: any = {};
        message.pagination !== undefined &&
        (obj.pagination = message.pagination
            ? PageRequest.toJSON(message.pagination)
            : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QueryMarketsRequest>, I>>(
        object: I
    ): QueryMarketsRequest {
        const message = createBaseQueryMarketsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};

function createBaseQueryMarketsResponse(): QueryMarketsResponse {
    return { markets: [], pagination: undefined };
}

export const QueryMarketsResponse = {
    encode(
        message: QueryMarketsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.markets) {
            Market.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(
                message.pagination,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): QueryMarketsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.markets.push(Market.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryMarketsResponse {
        return {
            markets: Array.isArray(object?.markets)
                ? object.markets.map((e: any) => Market.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },

    toJSON(message: QueryMarketsResponse): unknown {
        const obj: any = {};
        if (message.markets) {
            obj.markets = message.markets.map((e) =>
                e ? Market.toJSON(e) : undefined
            );
        } else {
            obj.markets = [];
        }
        message.pagination !== undefined &&
        (obj.pagination = message.pagination
            ? PageResponse.toJSON(message.pagination)
            : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QueryMarketsResponse>, I>>(
        object: I
    ): QueryMarketsResponse {
        const message = createBaseQueryMarketsResponse();
        message.markets = object.markets?.map((e) => Market.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};

function createBaseQueryMarketRequest(): QueryMarketRequest {
    return { symbol: "" };
}

export const QueryMarketRequest = {
    encode(
        message: QueryMarketRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.symbol !== "") {
            writer.uint32(10).string(message.symbol);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.symbol = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryMarketRequest {
        return {
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
        };
    },

    toJSON(message: QueryMarketRequest): unknown {
        const obj: any = {};
        message.symbol !== undefined && (obj.symbol = message.symbol);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QueryMarketRequest>, I>>(
        object: I
    ): QueryMarketRequest {
        const message = createBaseQueryMarketRequest();
        message.symbol = object.symbol ?? "";
        return message;
    },
};

function createBaseQueryMarketResponse(): QueryMarketResponse {
    return { market: undefined };
}

export const QueryMarketResponse = {
    encode(
        message: QueryMarketResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.market !== undefined) {
            Market.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = Market.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryMarketResponse {
        return {
            market: isSet(object.market) ? Market.fromJSON(object.market) : undefined,
        };
    },

    toJSON(message: QueryMarketResponse): unknown {
        const obj: any = {};
        message.market !== undefined &&
        (obj.market = message.market ? Market.toJSON(message.market) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QueryMarketResponse>, I>>(
        object: I
    ): QueryMarketResponse {
        const message = createBaseQueryMarketResponse();
        message.market =
            object.market !== undefined && object.market !== null
                ? Market.fromPartial(object.market)
                : undefined;
        return message;
    },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
    return {};
}

export const QueryParamsRequest = {
    encode(
        _: QueryParamsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
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

    fromJSON(_: any): QueryParamsRequest {
        return {};
    },

    toJSON(_: QueryParamsRequest): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
        _: I
    ): QueryParamsRequest {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
    return { params: undefined };
}

export const QueryParamsResponse = {
    encode(
        message: QueryParamsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryParamsResponse {
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
        };
    },

    toJSON(message: QueryParamsResponse): unknown {
        const obj: any = {};
        message.params !== undefined &&
        (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
        object: I
    ): QueryParamsResponse {
        const message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};

export interface QueryService {
    QueryMarkets(request: QueryMarketsRequest): Promise<QueryMarketsResponse>;
    QueryMarket(request: QueryMarketRequest): Promise<QueryMarketResponse>;
    QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryServiceClientImpl implements QueryService {
    private readonly rpc: Rpc;
    constructor(rpc: Rpc) {
        this.rpc = rpc;
        this.QueryMarkets = this.QueryMarkets.bind(this);
        this.QueryMarket = this.QueryMarket.bind(this);
        this.QueryParams = this.QueryParams.bind(this);
    }
    QueryMarkets(request: QueryMarketsRequest): Promise<QueryMarketsResponse> {
        const data = QueryMarketsRequest.encode(request).finish();
        const promise = this.rpc.request(
            "comdex.oracle.v1beta1.QueryService",
            "QueryMarkets",
            data
        );
        return promise.then((data) =>
            QueryMarketsResponse.decode(new _m0.Reader(data))
        );
    }

    QueryMarket(request: QueryMarketRequest): Promise<QueryMarketResponse> {
        const data = QueryMarketRequest.encode(request).finish();
        const promise = this.rpc.request(
            "comdex.oracle.v1beta1.QueryService",
            "QueryMarket",
            data
        );
        return promise.then((data) =>
            QueryMarketResponse.decode(new _m0.Reader(data))
        );
    }

    QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse> {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request(
            "comdex.oracle.v1beta1.QueryService",
            "QueryParams",
            data
        );
        return promise.then((data) =>
            QueryParamsResponse.decode(new _m0.Reader(data))
        );
    }
}

interface Rpc {
    request(
        service: string,
        method: string,
        data: Uint8Array
    ): Promise<Uint8Array>;
}

type Builtin =
    | Date
    | Function
    | Uint8Array
    | string
    | number
    | boolean
    | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Long
        ? string | number | Long
        : T extends Array<infer U>
            ? Array<DeepPartial<U>>
            : T extends ReadonlyArray<infer U>
                ? ReadonlyArray<DeepPartial<U>>
                : T extends {}
                    ? { [K in keyof T]?: DeepPartial<T[K]> }
                    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
    Exclude<keyof I, KeysOfUnion<P>>,
    never
    >;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}