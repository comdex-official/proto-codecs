/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DiscardData, FetchPriceResult } from "./fetch_price";
import { Params } from "./params";
import { MsgFetchPriceData } from "./tx";

export const protobufPackage = "comdex.bandoracle.v1beta1";

export interface QueryParamsRequest {
}

export interface QueryParamsResponse {
  params?: Params;
}

export interface QueryFetchPriceRequest {
  requestId: Long;
}

export interface QueryFetchPriceResponse {
  result?: FetchPriceResult;
}

export interface QueryLastFetchPriceIdRequest {
}

export interface QueryLastFetchPriceIdResponse {
  requestId: Long;
}

export interface QueryFetchPriceDataRequest {
}

export interface QueryFetchPriceDataResponse {
  msgFetchPriceData?: MsgFetchPriceData;
}

export interface QueryDiscardDataRequest {
}

export interface QueryDiscardDataResponse {
  discardData?: DiscardData;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryFetchPriceRequest(): QueryFetchPriceRequest {
  return { requestId: Long.ZERO };
}

export const QueryFetchPriceRequest = {
  encode(message: QueryFetchPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.requestId.isZero()) {
      writer.uint32(8).int64(message.requestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchPriceRequest {
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
    return { requestId: isSet(object.requestId) ? Long.fromValue(object.requestId) : Long.ZERO };
  },

  toJSON(message: QueryFetchPriceRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = (message.requestId || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFetchPriceRequest>, I>>(base?: I): QueryFetchPriceRequest {
    return QueryFetchPriceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryFetchPriceRequest>, I>>(object: I): QueryFetchPriceRequest {
    const message = createBaseQueryFetchPriceRequest();
    message.requestId = (object.requestId !== undefined && object.requestId !== null)
      ? Long.fromValue(object.requestId)
      : Long.ZERO;
    return message;
  },
};

function createBaseQueryFetchPriceResponse(): QueryFetchPriceResponse {
  return { result: undefined };
}

export const QueryFetchPriceResponse = {
  encode(message: QueryFetchPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      FetchPriceResult.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchPriceResponse {
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
    return { result: isSet(object.result) ? FetchPriceResult.fromJSON(object.result) : undefined };
  },

  toJSON(message: QueryFetchPriceResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result ? FetchPriceResult.toJSON(message.result) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFetchPriceResponse>, I>>(base?: I): QueryFetchPriceResponse {
    return QueryFetchPriceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryFetchPriceResponse>, I>>(object: I): QueryFetchPriceResponse {
    const message = createBaseQueryFetchPriceResponse();
    message.result = (object.result !== undefined && object.result !== null)
      ? FetchPriceResult.fromPartial(object.result)
      : undefined;
    return message;
  },
};

function createBaseQueryLastFetchPriceIdRequest(): QueryLastFetchPriceIdRequest {
  return {};
}

export const QueryLastFetchPriceIdRequest = {
  encode(_: QueryLastFetchPriceIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastFetchPriceIdRequest {
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

  create<I extends Exact<DeepPartial<QueryLastFetchPriceIdRequest>, I>>(base?: I): QueryLastFetchPriceIdRequest {
    return QueryLastFetchPriceIdRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastFetchPriceIdRequest>, I>>(_: I): QueryLastFetchPriceIdRequest {
    const message = createBaseQueryLastFetchPriceIdRequest();
    return message;
  },
};

function createBaseQueryLastFetchPriceIdResponse(): QueryLastFetchPriceIdResponse {
  return { requestId: Long.ZERO };
}

export const QueryLastFetchPriceIdResponse = {
  encode(message: QueryLastFetchPriceIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.requestId.isZero()) {
      writer.uint32(8).int64(message.requestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastFetchPriceIdResponse {
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
    return { requestId: isSet(object.requestId) ? Long.fromValue(object.requestId) : Long.ZERO };
  },

  toJSON(message: QueryLastFetchPriceIdResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = (message.requestId || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLastFetchPriceIdResponse>, I>>(base?: I): QueryLastFetchPriceIdResponse {
    return QueryLastFetchPriceIdResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastFetchPriceIdResponse>, I>>(
    object: I,
  ): QueryLastFetchPriceIdResponse {
    const message = createBaseQueryLastFetchPriceIdResponse();
    message.requestId = (object.requestId !== undefined && object.requestId !== null)
      ? Long.fromValue(object.requestId)
      : Long.ZERO;
    return message;
  },
};

function createBaseQueryFetchPriceDataRequest(): QueryFetchPriceDataRequest {
  return {};
}

export const QueryFetchPriceDataRequest = {
  encode(_: QueryFetchPriceDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchPriceDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFetchPriceDataRequest();
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

  fromJSON(_: any): QueryFetchPriceDataRequest {
    return {};
  },

  toJSON(_: QueryFetchPriceDataRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFetchPriceDataRequest>, I>>(base?: I): QueryFetchPriceDataRequest {
    return QueryFetchPriceDataRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryFetchPriceDataRequest>, I>>(_: I): QueryFetchPriceDataRequest {
    const message = createBaseQueryFetchPriceDataRequest();
    return message;
  },
};

function createBaseQueryFetchPriceDataResponse(): QueryFetchPriceDataResponse {
  return { msgFetchPriceData: undefined };
}

export const QueryFetchPriceDataResponse = {
  encode(message: QueryFetchPriceDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgFetchPriceData !== undefined) {
      MsgFetchPriceData.encode(message.msgFetchPriceData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchPriceDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFetchPriceDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgFetchPriceData = MsgFetchPriceData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFetchPriceDataResponse {
    return {
      msgFetchPriceData: isSet(object.msgFetchPriceData)
        ? MsgFetchPriceData.fromJSON(object.msgFetchPriceData)
        : undefined,
    };
  },

  toJSON(message: QueryFetchPriceDataResponse): unknown {
    const obj: any = {};
    message.msgFetchPriceData !== undefined && (obj.msgFetchPriceData = message.msgFetchPriceData
      ? MsgFetchPriceData.toJSON(message.msgFetchPriceData)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFetchPriceDataResponse>, I>>(base?: I): QueryFetchPriceDataResponse {
    return QueryFetchPriceDataResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryFetchPriceDataResponse>, I>>(object: I): QueryFetchPriceDataResponse {
    const message = createBaseQueryFetchPriceDataResponse();
    message.msgFetchPriceData = (object.msgFetchPriceData !== undefined && object.msgFetchPriceData !== null)
      ? MsgFetchPriceData.fromPartial(object.msgFetchPriceData)
      : undefined;
    return message;
  },
};

function createBaseQueryDiscardDataRequest(): QueryDiscardDataRequest {
  return {};
}

export const QueryDiscardDataRequest = {
  encode(_: QueryDiscardDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDiscardDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDiscardDataRequest();
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

  fromJSON(_: any): QueryDiscardDataRequest {
    return {};
  },

  toJSON(_: QueryDiscardDataRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDiscardDataRequest>, I>>(base?: I): QueryDiscardDataRequest {
    return QueryDiscardDataRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDiscardDataRequest>, I>>(_: I): QueryDiscardDataRequest {
    const message = createBaseQueryDiscardDataRequest();
    return message;
  },
};

function createBaseQueryDiscardDataResponse(): QueryDiscardDataResponse {
  return { discardData: undefined };
}

export const QueryDiscardDataResponse = {
  encode(message: QueryDiscardDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.discardData !== undefined) {
      DiscardData.encode(message.discardData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDiscardDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDiscardDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.discardData = DiscardData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDiscardDataResponse {
    return { discardData: isSet(object.discardData) ? DiscardData.fromJSON(object.discardData) : undefined };
  },

  toJSON(message: QueryDiscardDataResponse): unknown {
    const obj: any = {};
    message.discardData !== undefined &&
      (obj.discardData = message.discardData ? DiscardData.toJSON(message.discardData) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDiscardDataResponse>, I>>(base?: I): QueryDiscardDataResponse {
    return QueryDiscardDataResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDiscardDataResponse>, I>>(object: I): QueryDiscardDataResponse {
    const message = createBaseQueryDiscardDataResponse();
    message.discardData = (object.discardData !== undefined && object.discardData !== null)
      ? DiscardData.fromPartial(object.discardData)
      : undefined;
    return message;
  },
};

export interface Query {
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  FetchPriceResult(request: QueryFetchPriceRequest): Promise<QueryFetchPriceResponse>;
  LastFetchPriceID(request: QueryLastFetchPriceIdRequest): Promise<QueryLastFetchPriceIdResponse>;
  FetchPriceData(request: QueryFetchPriceDataRequest): Promise<QueryFetchPriceDataResponse>;
  DiscardData(request: QueryDiscardDataRequest): Promise<QueryDiscardDataResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "comdex.bandoracle.v1beta1.Query";
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.FetchPriceResult = this.FetchPriceResult.bind(this);
    this.LastFetchPriceID = this.LastFetchPriceID.bind(this);
    this.FetchPriceData = this.FetchPriceData.bind(this);
    this.DiscardData = this.DiscardData.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  FetchPriceResult(request: QueryFetchPriceRequest): Promise<QueryFetchPriceResponse> {
    const data = QueryFetchPriceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FetchPriceResult", data);
    return promise.then((data) => QueryFetchPriceResponse.decode(new _m0.Reader(data)));
  }

  LastFetchPriceID(request: QueryLastFetchPriceIdRequest): Promise<QueryLastFetchPriceIdResponse> {
    const data = QueryLastFetchPriceIdRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LastFetchPriceID", data);
    return promise.then((data) => QueryLastFetchPriceIdResponse.decode(new _m0.Reader(data)));
  }

  FetchPriceData(request: QueryFetchPriceDataRequest): Promise<QueryFetchPriceDataResponse> {
    const data = QueryFetchPriceDataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FetchPriceData", data);
    return promise.then((data) => QueryFetchPriceDataResponse.decode(new _m0.Reader(data)));
  }

  DiscardData(request: QueryDiscardDataRequest): Promise<QueryDiscardDataResponse> {
    const data = QueryDiscardDataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DiscardData", data);
    return promise.then((data) => QueryDiscardDataResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
