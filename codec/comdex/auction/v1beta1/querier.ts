/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CollateralAuction } from "codec/comdex/auction/v1beta1/auction";
import {
  PageRequest,
  PageResponse,
} from "codec/cosmos/base/query/v1beta1/pagination";
import { Params } from "codec/comdex/auction/v1beta1/params";

export const protobufPackage = "comdex.auction.v1beta1";

export interface QueryAuctionRequest {
  id: Long;
}

export interface QueryAuctionResponse {
  auction?: CollateralAuction;
}

export interface QueryAuctionsRequest {
  pagination?: PageRequest;
}

export interface QueryAuctionsResponse {
  auctions: CollateralAuction[];
  pagination?: PageResponse;
}

export interface QueryParamsRequest {}

export interface QueryParamsResponse {
  params?: Params;
}

function createBaseQueryAuctionRequest(): QueryAuctionRequest {
  return { id: Long.UZERO };
}

export const QueryAuctionRequest = {
  encode(
    message: QueryAuctionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAuctionRequest {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryAuctionRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAuctionRequest>, I>>(
    object: I
  ): QueryAuctionRequest {
    const message = createBaseQueryAuctionRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryAuctionResponse(): QueryAuctionResponse {
  return { auction: undefined };
}

export const QueryAuctionResponse = {
  encode(
    message: QueryAuctionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.auction !== undefined) {
      CollateralAuction.encode(
        message.auction,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAuctionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auction = CollateralAuction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAuctionResponse {
    return {
      auction: isSet(object.auction)
        ? CollateralAuction.fromJSON(object.auction)
        : undefined,
    };
  },

  toJSON(message: QueryAuctionResponse): unknown {
    const obj: any = {};
    message.auction !== undefined &&
      (obj.auction = message.auction
        ? CollateralAuction.toJSON(message.auction)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAuctionResponse>, I>>(
    object: I
  ): QueryAuctionResponse {
    const message = createBaseQueryAuctionResponse();
    message.auction =
      object.auction !== undefined && object.auction !== null
        ? CollateralAuction.fromPartial(object.auction)
        : undefined;
    return message;
  },
};

function createBaseQueryAuctionsRequest(): QueryAuctionsRequest {
  return { pagination: undefined };
}

export const QueryAuctionsRequest = {
  encode(
    message: QueryAuctionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAuctionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsRequest();
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

  fromJSON(object: any): QueryAuctionsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAuctionsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAuctionsRequest>, I>>(
    object: I
  ): QueryAuctionsRequest {
    const message = createBaseQueryAuctionsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAuctionsResponse(): QueryAuctionsResponse {
  return { auctions: [], pagination: undefined };
}

export const QueryAuctionsResponse = {
  encode(
    message: QueryAuctionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.auctions) {
      CollateralAuction.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAuctionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctions.push(
            CollateralAuction.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAuctionsResponse {
    return {
      auctions: Array.isArray(object?.auctions)
        ? object.auctions.map((e: any) => CollateralAuction.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAuctionsResponse): unknown {
    const obj: any = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map((e) =>
        e ? CollateralAuction.toJSON(e) : undefined
      );
    } else {
      obj.auctions = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAuctionsResponse>, I>>(
    object: I
  ): QueryAuctionsResponse {
    const message = createBaseQueryAuctionsResponse();
    message.auctions =
      object.auctions?.map((e) => CollateralAuction.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
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
  QueryAuction(request: QueryAuctionRequest): Promise<QueryAuctionResponse>;
  QueryAuctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse>;
  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.QueryAuction = this.QueryAuction.bind(this);
    this.QueryAuctions = this.QueryAuctions.bind(this);
    this.QueryParams = this.QueryParams.bind(this);
  }
  QueryAuction(request: QueryAuctionRequest): Promise<QueryAuctionResponse> {
    const data = QueryAuctionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.QueryService",
      "QueryAuction",
      data
    );
    return promise.then((data) =>
      QueryAuctionResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAuctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse> {
    const data = QueryAuctionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.QueryService",
      "QueryAuctions",
      data
    );
    return promise.then((data) =>
      QueryAuctionsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.QueryService",
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
