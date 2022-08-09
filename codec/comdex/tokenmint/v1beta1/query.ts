/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenMint, MintedTokens } from "../../../comdex/tokenmint/v1beta1/mint";

export const protobufPackage = "comdex.tokenmint.v1beta1";

export interface QueryAllTokenMintedForAllAppsRequest {
  pagination?: PageRequest;
}

export interface QueryAllTokenMintedForAllAppsResponse {
  tokenMint: TokenMint[];
  pagination?: PageResponse;
}

export interface QueryTokenMintedByAppRequest {
  appId: Long;
  pagination?: PageRequest;
}

export interface QueryTokenMintedByAppResponse {
  tokenMint?: TokenMint;
  pagination?: PageResponse;
}

export interface QueryTokenMintedByAppAndAssetRequest {
  appId: Long;
  assetId: Long;
  pagination?: PageRequest;
}

export interface QueryTokenMintedByAppAndAssetResponse {
  mintedTokens?: MintedTokens;
  pagination?: PageResponse;
}

function createBaseQueryAllTokenMintedForAllAppsRequest(): QueryAllTokenMintedForAllAppsRequest {
  return { pagination: undefined };
}

export const QueryAllTokenMintedForAllAppsRequest = {
  encode(
    message: QueryAllTokenMintedForAllAppsRequest,
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
  ): QueryAllTokenMintedForAllAppsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenMintedForAllAppsRequest();
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

  fromJSON(object: any): QueryAllTokenMintedForAllAppsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllTokenMintedForAllAppsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAllTokenMintedForAllAppsRequest>, I>
  >(object: I): QueryAllTokenMintedForAllAppsRequest {
    const message = createBaseQueryAllTokenMintedForAllAppsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllTokenMintedForAllAppsResponse(): QueryAllTokenMintedForAllAppsResponse {
  return { tokenMint: [], pagination: undefined };
}

export const QueryAllTokenMintedForAllAppsResponse = {
  encode(
    message: QueryAllTokenMintedForAllAppsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tokenMint) {
      TokenMint.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllTokenMintedForAllAppsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenMintedForAllAppsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenMint.push(TokenMint.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllTokenMintedForAllAppsResponse {
    return {
      tokenMint: Array.isArray(object?.tokenMint)
        ? object.tokenMint.map((e: any) => TokenMint.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllTokenMintedForAllAppsResponse): unknown {
    const obj: any = {};
    if (message.tokenMint) {
      obj.tokenMint = message.tokenMint.map((e) =>
        e ? TokenMint.toJSON(e) : undefined
      );
    } else {
      obj.tokenMint = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAllTokenMintedForAllAppsResponse>, I>
  >(object: I): QueryAllTokenMintedForAllAppsResponse {
    const message = createBaseQueryAllTokenMintedForAllAppsResponse();
    message.tokenMint =
      object.tokenMint?.map((e) => TokenMint.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryTokenMintedByAppRequest(): QueryTokenMintedByAppRequest {
  return { appId: Long.UZERO, pagination: undefined };
}

export const QueryTokenMintedByAppRequest = {
  encode(
    message: QueryTokenMintedByAppRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenMintedByAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenMintedByAppRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenMintedByAppRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTokenMintedByAppRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenMintedByAppRequest>, I>>(
    object: I
  ): QueryTokenMintedByAppRequest {
    const message = createBaseQueryTokenMintedByAppRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryTokenMintedByAppResponse(): QueryTokenMintedByAppResponse {
  return { tokenMint: undefined, pagination: undefined };
}

export const QueryTokenMintedByAppResponse = {
  encode(
    message: QueryTokenMintedByAppResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenMint !== undefined) {
      TokenMint.encode(message.tokenMint, writer.uint32(10).fork()).ldelim();
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
  ): QueryTokenMintedByAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenMintedByAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenMint = TokenMint.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryTokenMintedByAppResponse {
    return {
      tokenMint: isSet(object.tokenMint)
        ? TokenMint.fromJSON(object.tokenMint)
        : undefined,
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTokenMintedByAppResponse): unknown {
    const obj: any = {};
    message.tokenMint !== undefined &&
      (obj.tokenMint = message.tokenMint
        ? TokenMint.toJSON(message.tokenMint)
        : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenMintedByAppResponse>, I>>(
    object: I
  ): QueryTokenMintedByAppResponse {
    const message = createBaseQueryTokenMintedByAppResponse();
    message.tokenMint =
      object.tokenMint !== undefined && object.tokenMint !== null
        ? TokenMint.fromPartial(object.tokenMint)
        : undefined;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryTokenMintedByAppAndAssetRequest(): QueryTokenMintedByAppAndAssetRequest {
  return { appId: Long.UZERO, assetId: Long.UZERO, pagination: undefined };
}

export const QueryTokenMintedByAppAndAssetRequest = {
  encode(
    message: QueryTokenMintedByAppAndAssetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenMintedByAppAndAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenMintedByAppAndAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenMintedByAppAndAssetRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTokenMintedByAppAndAssetRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryTokenMintedByAppAndAssetRequest>, I>
  >(object: I): QueryTokenMintedByAppAndAssetRequest {
    const message = createBaseQueryTokenMintedByAppAndAssetRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryTokenMintedByAppAndAssetResponse(): QueryTokenMintedByAppAndAssetResponse {
  return { mintedTokens: undefined, pagination: undefined };
}

export const QueryTokenMintedByAppAndAssetResponse = {
  encode(
    message: QueryTokenMintedByAppAndAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mintedTokens !== undefined) {
      MintedTokens.encode(
        message.mintedTokens,
        writer.uint32(10).fork()
      ).ldelim();
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
  ): QueryTokenMintedByAppAndAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenMintedByAppAndAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintedTokens = MintedTokens.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryTokenMintedByAppAndAssetResponse {
    return {
      mintedTokens: isSet(object.mintedTokens)
        ? MintedTokens.fromJSON(object.mintedTokens)
        : undefined,
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTokenMintedByAppAndAssetResponse): unknown {
    const obj: any = {};
    message.mintedTokens !== undefined &&
      (obj.mintedTokens = message.mintedTokens
        ? MintedTokens.toJSON(message.mintedTokens)
        : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryTokenMintedByAppAndAssetResponse>, I>
  >(object: I): QueryTokenMintedByAppAndAssetResponse {
    const message = createBaseQueryTokenMintedByAppAndAssetResponse();
    message.mintedTokens =
      object.mintedTokens !== undefined && object.mintedTokens !== null
        ? MintedTokens.fromPartial(object.mintedTokens)
        : undefined;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

export interface Query {
  QueryAllTokenMintedForAllApps(
    request: QueryAllTokenMintedForAllAppsRequest
  ): Promise<QueryAllTokenMintedForAllAppsResponse>;
  QueryTokenMintedByApp(
    request: QueryTokenMintedByAppRequest
  ): Promise<QueryTokenMintedByAppResponse>;
  QueryTokenMintedByAppAndAsset(
    request: QueryTokenMintedByAppAndAssetRequest
  ): Promise<QueryTokenMintedByAppAndAssetResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.QueryAllTokenMintedForAllApps =
      this.QueryAllTokenMintedForAllApps.bind(this);
    this.QueryTokenMintedByApp = this.QueryTokenMintedByApp.bind(this);
    this.QueryTokenMintedByAppAndAsset =
      this.QueryTokenMintedByAppAndAsset.bind(this);
  }
  QueryAllTokenMintedForAllApps(
    request: QueryAllTokenMintedForAllAppsRequest
  ): Promise<QueryAllTokenMintedForAllAppsResponse> {
    const data = QueryAllTokenMintedForAllAppsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.tokenmint.v1beta1.Query",
      "QueryAllTokenMintedForAllApps",
      data
    );
    return promise.then((data) =>
      QueryAllTokenMintedForAllAppsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryTokenMintedByApp(
    request: QueryTokenMintedByAppRequest
  ): Promise<QueryTokenMintedByAppResponse> {
    const data = QueryTokenMintedByAppRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.tokenmint.v1beta1.Query",
      "QueryTokenMintedByApp",
      data
    );
    return promise.then((data) =>
      QueryTokenMintedByAppResponse.decode(new _m0.Reader(data))
    );
  }

  QueryTokenMintedByAppAndAsset(
    request: QueryTokenMintedByAppAndAssetRequest
  ): Promise<QueryTokenMintedByAppAndAssetResponse> {
    const data = QueryTokenMintedByAppAndAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.tokenmint.v1beta1.Query",
      "QueryTokenMintedByAppAndAsset",
      data
    );
    return promise.then((data) =>
      QueryTokenMintedByAppAndAssetResponse.decode(new _m0.Reader(data))
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
