/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { LockedVault } from "codec/comdex/liquidation/v1beta1/locked_vault";
import {
  PageRequest,
  PageResponse,
} from "codec/cosmos/base/query/v1beta1/pagination";
import { Params } from "codec/comdex/liquidation/v1beta1/params";

export const protobufPackage = "comdex.liquidation.v1beta1";

export interface QueryLockedVaultRequest {
  id: Long;
}

export interface QueryLockedVaultResponse {
  lockedVault?: LockedVault;
}

export interface QueryLockedVaultsRequest {
  pagination?: PageRequest;
}

export interface QueryLockedVaultsResponse {
  lockedVaults: LockedVault[];
  pagination?: PageResponse;
}

export interface QueryParamsRequest {}

export interface QueryParamsResponse {
  params?: Params;
}

function createBaseQueryLockedVaultRequest(): QueryLockedVaultRequest {
  return { id: Long.UZERO };
}

export const QueryLockedVaultRequest = {
  encode(
    message: QueryLockedVaultRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockedVaultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedVaultRequest();
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

  fromJSON(object: any): QueryLockedVaultRequest {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryLockedVaultRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockedVaultRequest>, I>>(
    object: I
  ): QueryLockedVaultRequest {
    const message = createBaseQueryLockedVaultRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryLockedVaultResponse(): QueryLockedVaultResponse {
  return { lockedVault: undefined };
}

export const QueryLockedVaultResponse = {
  encode(
    message: QueryLockedVaultResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lockedVault !== undefined) {
      LockedVault.encode(
        message.lockedVault,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockedVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockedVault = LockedVault.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLockedVaultResponse {
    return {
      lockedVault: isSet(object.lockedVault)
        ? LockedVault.fromJSON(object.lockedVault)
        : undefined,
    };
  },

  toJSON(message: QueryLockedVaultResponse): unknown {
    const obj: any = {};
    message.lockedVault !== undefined &&
      (obj.lockedVault = message.lockedVault
        ? LockedVault.toJSON(message.lockedVault)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockedVaultResponse>, I>>(
    object: I
  ): QueryLockedVaultResponse {
    const message = createBaseQueryLockedVaultResponse();
    message.lockedVault =
      object.lockedVault !== undefined && object.lockedVault !== null
        ? LockedVault.fromPartial(object.lockedVault)
        : undefined;
    return message;
  },
};

function createBaseQueryLockedVaultsRequest(): QueryLockedVaultsRequest {
  return { pagination: undefined };
}

export const QueryLockedVaultsRequest = {
  encode(
    message: QueryLockedVaultsRequest,
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
  ): QueryLockedVaultsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedVaultsRequest();
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

  fromJSON(object: any): QueryLockedVaultsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLockedVaultsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockedVaultsRequest>, I>>(
    object: I
  ): QueryLockedVaultsRequest {
    const message = createBaseQueryLockedVaultsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryLockedVaultsResponse(): QueryLockedVaultsResponse {
  return { lockedVaults: [], pagination: undefined };
}

export const QueryLockedVaultsResponse = {
  encode(
    message: QueryLockedVaultsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.lockedVaults) {
      LockedVault.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryLockedVaultsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedVaultsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockedVaults.push(
            LockedVault.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryLockedVaultsResponse {
    return {
      lockedVaults: Array.isArray(object?.lockedVaults)
        ? object.lockedVaults.map((e: any) => LockedVault.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLockedVaultsResponse): unknown {
    const obj: any = {};
    if (message.lockedVaults) {
      obj.lockedVaults = message.lockedVaults.map((e) =>
        e ? LockedVault.toJSON(e) : undefined
      );
    } else {
      obj.lockedVaults = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockedVaultsResponse>, I>>(
    object: I
  ): QueryLockedVaultsResponse {
    const message = createBaseQueryLockedVaultsResponse();
    message.lockedVaults =
      object.lockedVaults?.map((e) => LockedVault.fromPartial(e)) || [];
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
  QueryLockedVault(
    request: QueryLockedVaultRequest
  ): Promise<QueryLockedVaultResponse>;
  QueryLockedVaults(
    request: QueryLockedVaultsRequest
  ): Promise<QueryLockedVaultsResponse>;
  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.QueryLockedVault = this.QueryLockedVault.bind(this);
    this.QueryLockedVaults = this.QueryLockedVaults.bind(this);
    this.QueryParams = this.QueryParams.bind(this);
  }
  QueryLockedVault(
    request: QueryLockedVaultRequest
  ): Promise<QueryLockedVaultResponse> {
    const data = QueryLockedVaultRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidation.v1beta1.QueryService",
      "QueryLockedVault",
      data
    );
    return promise.then((data) =>
      QueryLockedVaultResponse.decode(new _m0.Reader(data))
    );
  }

  QueryLockedVaults(
    request: QueryLockedVaultsRequest
  ): Promise<QueryLockedVaultsResponse> {
    const data = QueryLockedVaultsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidation.v1beta1.QueryService",
      "QueryLockedVaults",
      data
    );
    return promise.then((data) =>
      QueryLockedVaultsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidation.v1beta1.QueryService",
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
