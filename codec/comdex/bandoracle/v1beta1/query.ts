/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { FetchPriceResult } from "./fetch_price";

export const protobufPackage = "comdex.bandoracle.v1beta1";

export interface QueryParamsRequest {}

export interface QueryParamsResponse {
  params?: Params;
}

export interface QueryFetchPriceRequest {
  requestId: Long;
}

export interface QueryFetchPriceResponse {
  result?: FetchPriceResult;
}

export interface QueryLastFetchPriceIdRequest {}

export interface QueryLastFetchPriceIdResponse {
  requestId: Long;
}

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

function createBaseQueryFetchPriceRequest(): QueryFetchPriceRequest {
  return { requestId: Long.ZERO };
}

export const QueryFetchPriceRequest = {
  encode(
    message: QueryFetchPriceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.requestId.isZero()) {
      writer.uint32(8).int64(message.requestId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFetchPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFetchPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFetchPriceRequest {
    return {
      requestId: isSet(object.requestId)
        ? Long.fromString(object.requestId)
        : Long.ZERO,
    };
  },

  toJSON(message: QueryFetchPriceRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined &&
      (obj.requestId = (message.requestId || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFetchPriceRequest>, I>>(
    object: I
  ): QueryFetchPriceRequest {
    const message = createBaseQueryFetchPriceRequest();
    message.requestId =
      object.requestId !== undefined && object.requestId !== null
        ? Long.fromValue(object.requestId)
        : Long.ZERO;
    return message;
  },
};

function createBaseQueryFetchPriceResponse(): QueryFetchPriceResponse {
  return { result: undefined };
}

export const QueryFetchPriceResponse = {
  encode(
    message: QueryFetchPriceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.result !== undefined) {
      FetchPriceResult.encode(
        message.result,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFetchPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFetchPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = FetchPriceResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFetchPriceResponse {
    return {
      result: isSet(object.result)
        ? FetchPriceResult.fromJSON(object.result)
        : undefined,
    };
  },

  toJSON(message: QueryFetchPriceResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = message.result
        ? FetchPriceResult.toJSON(message.result)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFetchPriceResponse>, I>>(
    object: I
  ): QueryFetchPriceResponse {
    const message = createBaseQueryFetchPriceResponse();
    message.result =
      object.result !== undefined && object.result !== null
        ? FetchPriceResult.fromPartial(object.result)
        : undefined;
    return message;
  },
};

function createBaseQueryLastFetchPriceIdRequest(): QueryLastFetchPriceIdRequest {
  return {};
}

export const QueryLastFetchPriceIdRequest = {
  encode(
    _: QueryLastFetchPriceIdRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLastFetchPriceIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastFetchPriceIdRequest();
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

  fromJSON(_: any): QueryLastFetchPriceIdRequest {
    return {};
  },

  toJSON(_: QueryLastFetchPriceIdRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastFetchPriceIdRequest>, I>>(
    _: I
  ): QueryLastFetchPriceIdRequest {
    const message = createBaseQueryLastFetchPriceIdRequest();
    return message;
  },
};

function createBaseQueryLastFetchPriceIdResponse(): QueryLastFetchPriceIdResponse {
  return { requestId: Long.ZERO };
}

export const QueryLastFetchPriceIdResponse = {
  encode(
    message: QueryLastFetchPriceIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.requestId.isZero()) {
      writer.uint32(8).int64(message.requestId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLastFetchPriceIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastFetchPriceIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLastFetchPriceIdResponse {
    return {
      requestId: isSet(object.requestId)
        ? Long.fromString(object.requestId)
        : Long.ZERO,
    };
  },

  toJSON(message: QueryLastFetchPriceIdResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined &&
      (obj.requestId = (message.requestId || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastFetchPriceIdResponse>, I>>(
    object: I
  ): QueryLastFetchPriceIdResponse {
    const message = createBaseQueryLastFetchPriceIdResponse();
    message.requestId =
      object.requestId !== undefined && object.requestId !== null
        ? Long.fromValue(object.requestId)
        : Long.ZERO;
    return message;
  },
};

export interface Query {
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  FetchPriceResult(
    request: QueryFetchPriceRequest
  ): Promise<QueryFetchPriceResponse>;
  LastFetchPriceId(
    request: QueryLastFetchPriceIdRequest
  ): Promise<QueryLastFetchPriceIdResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.FetchPriceResult = this.FetchPriceResult.bind(this);
    this.LastFetchPriceId = this.LastFetchPriceId.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.bandoracle.v1beta1.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  FetchPriceResult(
    request: QueryFetchPriceRequest
  ): Promise<QueryFetchPriceResponse> {
    const data = QueryFetchPriceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.bandoracle.v1beta1.Query",
      "FetchPriceResult",
      data
    );
    return promise.then((data) =>
      QueryFetchPriceResponse.decode(new _m0.Reader(data))
    );
  }

  LastFetchPriceId(
    request: QueryLastFetchPriceIdRequest
  ): Promise<QueryLastFetchPriceIdResponse> {
    const data = QueryLastFetchPriceIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.bandoracle.v1beta1.Query",
      "LastFetchPriceId",
      data
    );
    return promise.then((data) =>
      QueryLastFetchPriceIdResponse.decode(new _m0.Reader(data))
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
