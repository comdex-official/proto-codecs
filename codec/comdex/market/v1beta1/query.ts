/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { TimeWeightedAverage } from "../../../comdex/market/v1beta1/market";
import { Params } from "../../../comdex/market/v1beta1/params";

export const protobufPackage = "comdex.market.v1beta1";

export interface QueryMarketsRequest {
  pagination?: PageRequest;
}

export interface QueryMarketsResponse {
  timeWeightedAverage: TimeWeightedAverage[];
  pagination?: PageResponse;
}

export interface QueryMarketRequest {
  assetID: Long;
}

export interface QueryMarketResponse {
  timeWeightedAverage?: TimeWeightedAverage;
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
  return { timeWeightedAverage: [], pagination: undefined };
}

export const QueryMarketsResponse = {
  encode(
    message: QueryMarketsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.timeWeightedAverage) {
      TimeWeightedAverage.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.timeWeightedAverage.push(
            TimeWeightedAverage.decode(reader, reader.uint32())
          );
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
      timeWeightedAverage: Array.isArray(object?.timeWeightedAverage)
        ? object.timeWeightedAverage.map((e: any) =>
            TimeWeightedAverage.fromJSON(e)
          )
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryMarketsResponse): unknown {
    const obj: any = {};
    if (message.timeWeightedAverage) {
      obj.timeWeightedAverage = message.timeWeightedAverage.map((e) =>
        e ? TimeWeightedAverage.toJSON(e) : undefined
      );
    } else {
      obj.timeWeightedAverage = [];
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
    message.timeWeightedAverage =
      object.timeWeightedAverage?.map((e) =>
        TimeWeightedAverage.fromPartial(e)
      ) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryMarketRequest(): QueryMarketRequest {
  return { assetID: Long.UZERO };
}

export const QueryMarketRequest = {
  encode(
    message: QueryMarketRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.assetID.isZero()) {
      writer.uint32(8).uint64(message.assetID);
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
          message.assetID = reader.uint64() as Long;
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
      assetID: isSet(object.assetID)
        ? Long.fromValue(object.assetID)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryMarketRequest): unknown {
    const obj: any = {};
    message.assetID !== undefined &&
      (obj.assetID = (message.assetID || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMarketRequest>, I>>(
    object: I
  ): QueryMarketRequest {
    const message = createBaseQueryMarketRequest();
    message.assetID =
      object.assetID !== undefined && object.assetID !== null
        ? Long.fromValue(object.assetID)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryMarketResponse(): QueryMarketResponse {
  return { timeWeightedAverage: undefined };
}

export const QueryMarketResponse = {
  encode(
    message: QueryMarketResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timeWeightedAverage !== undefined) {
      TimeWeightedAverage.encode(
        message.timeWeightedAverage,
        writer.uint32(10).fork()
      ).ldelim();
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
          message.timeWeightedAverage = TimeWeightedAverage.decode(
            reader,
            reader.uint32()
          );
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
      timeWeightedAverage: isSet(object.timeWeightedAverage)
        ? TimeWeightedAverage.fromJSON(object.timeWeightedAverage)
        : undefined,
    };
  },

  toJSON(message: QueryMarketResponse): unknown {
    const obj: any = {};
    message.timeWeightedAverage !== undefined &&
      (obj.timeWeightedAverage = message.timeWeightedAverage
        ? TimeWeightedAverage.toJSON(message.timeWeightedAverage)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMarketResponse>, I>>(
    object: I
  ): QueryMarketResponse {
    const message = createBaseQueryMarketResponse();
    message.timeWeightedAverage =
      object.timeWeightedAverage !== undefined &&
      object.timeWeightedAverage !== null
        ? TimeWeightedAverage.fromPartial(object.timeWeightedAverage)
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

export interface Query {
  QueryMarkets(request: QueryMarketsRequest): Promise<QueryMarketsResponse>;
  QueryMarket(request: QueryMarketRequest): Promise<QueryMarketResponse>;
  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
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
      "comdex.market.v1beta1.Query",
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
      "comdex.market.v1beta1.Query",
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
      "comdex.market.v1beta1.Query",
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
