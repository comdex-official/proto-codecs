/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenMint, MintedTokens } from "./mint";

export const protobufPackage = "comdex.tokenmint.v1beta1";

export interface QueryAllTokenMintedForAllProductsRequest {
  pagination?: PageRequest;
}

export interface QueryAllTokenMintedForAllProductsResponse {
  tokenMint: TokenMint[];
  pagination?: PageResponse;
}

export interface QueryTokenMintedByProductRequest {
  appId: Long;
  pagination?: PageRequest;
}

export interface QueryTokenMintedByProductResponse {
  tokenMint?: TokenMint;
  pagination?: PageResponse;
}

export interface QueryTokenMintedByProductAndAssetRequest {
  appId: Long;
  assetId: Long;
  pagination?: PageRequest;
}

export interface QueryTokenMintedByProductAndAssetResponse {
  mintedTokens?: MintedTokens;
  pagination?: PageResponse;
}

function createBaseQueryAllTokenMintedForAllProductsRequest(): QueryAllTokenMintedForAllProductsRequest {
  return { pagination: undefined };
}

export const QueryAllTokenMintedForAllProductsRequest = {
  encode(
    message: QueryAllTokenMintedForAllProductsRequest,
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
  ): QueryAllTokenMintedForAllProductsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenMintedForAllProductsRequest();
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

  fromJSON(object: any): QueryAllTokenMintedForAllProductsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllTokenMintedForAllProductsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAllTokenMintedForAllProductsRequest>, I>
  >(object: I): QueryAllTokenMintedForAllProductsRequest {
    const message = createBaseQueryAllTokenMintedForAllProductsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllTokenMintedForAllProductsResponse(): QueryAllTokenMintedForAllProductsResponse {
  return { tokenMint: [], pagination: undefined };
}

export const QueryAllTokenMintedForAllProductsResponse = {
  encode(
    message: QueryAllTokenMintedForAllProductsResponse,
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
  ): QueryAllTokenMintedForAllProductsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenMintedForAllProductsResponse();
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

  fromJSON(object: any): QueryAllTokenMintedForAllProductsResponse {
    return {
      tokenMint: Array.isArray(object?.tokenMint)
        ? object.tokenMint.map((e: any) => TokenMint.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllTokenMintedForAllProductsResponse): unknown {
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
    I extends Exact<DeepPartial<QueryAllTokenMintedForAllProductsResponse>, I>
  >(object: I): QueryAllTokenMintedForAllProductsResponse {
    const message = createBaseQueryAllTokenMintedForAllProductsResponse();
    message.tokenMint =
      object.tokenMint?.map((e) => TokenMint.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryTokenMintedByProductRequest(): QueryTokenMintedByProductRequest {
  return { appId: Long.UZERO, pagination: undefined };
}

export const QueryTokenMintedByProductRequest = {
  encode(
    message: QueryTokenMintedByProductRequest,
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
  ): QueryTokenMintedByProductRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenMintedByProductRequest();
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

  fromJSON(object: any): QueryTokenMintedByProductRequest {
    return {
      appId: isSet(object.appId) ? Long.fromString(object.appId) : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTokenMintedByProductRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryTokenMintedByProductRequest>, I>
  >(object: I): QueryTokenMintedByProductRequest {
    const message = createBaseQueryTokenMintedByProductRequest();
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

function createBaseQueryTokenMintedByProductResponse(): QueryTokenMintedByProductResponse {
  return { tokenMint: undefined, pagination: undefined };
}

export const QueryTokenMintedByProductResponse = {
  encode(
    message: QueryTokenMintedByProductResponse,
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
  ): QueryTokenMintedByProductResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenMintedByProductResponse();
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

  fromJSON(object: any): QueryTokenMintedByProductResponse {
    return {
      tokenMint: isSet(object.tokenMint)
        ? TokenMint.fromJSON(object.tokenMint)
        : undefined,
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTokenMintedByProductResponse): unknown {
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

  fromPartial<
    I extends Exact<DeepPartial<QueryTokenMintedByProductResponse>, I>
  >(object: I): QueryTokenMintedByProductResponse {
    const message = createBaseQueryTokenMintedByProductResponse();
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

function createBaseQueryTokenMintedByProductAndAssetRequest(): QueryTokenMintedByProductAndAssetRequest {
  return { appId: Long.UZERO, assetId: Long.UZERO, pagination: undefined };
}

export const QueryTokenMintedByProductAndAssetRequest = {
  encode(
    message: QueryTokenMintedByProductAndAssetRequest,
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
  ): QueryTokenMintedByProductAndAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenMintedByProductAndAssetRequest();
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

  fromJSON(object: any): QueryTokenMintedByProductAndAssetRequest {
    return {
      appId: isSet(object.appId) ? Long.fromString(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromString(object.assetId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTokenMintedByProductAndAssetRequest): unknown {
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
    I extends Exact<DeepPartial<QueryTokenMintedByProductAndAssetRequest>, I>
  >(object: I): QueryTokenMintedByProductAndAssetRequest {
    const message = createBaseQueryTokenMintedByProductAndAssetRequest();
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

function createBaseQueryTokenMintedByProductAndAssetResponse(): QueryTokenMintedByProductAndAssetResponse {
  return { mintedTokens: undefined, pagination: undefined };
}

export const QueryTokenMintedByProductAndAssetResponse = {
  encode(
    message: QueryTokenMintedByProductAndAssetResponse,
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
  ): QueryTokenMintedByProductAndAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenMintedByProductAndAssetResponse();
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

  fromJSON(object: any): QueryTokenMintedByProductAndAssetResponse {
    return {
      mintedTokens: isSet(object.mintedTokens)
        ? MintedTokens.fromJSON(object.mintedTokens)
        : undefined,
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTokenMintedByProductAndAssetResponse): unknown {
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
    I extends Exact<DeepPartial<QueryTokenMintedByProductAndAssetResponse>, I>
  >(object: I): QueryTokenMintedByProductAndAssetResponse {
    const message = createBaseQueryTokenMintedByProductAndAssetResponse();
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
  QueryAllTokenMintedForAllProducts(
    request: QueryAllTokenMintedForAllProductsRequest
  ): Promise<QueryAllTokenMintedForAllProductsResponse>;
  QueryTokenMintedByProduct(
    request: QueryTokenMintedByProductRequest
  ): Promise<QueryTokenMintedByProductResponse>;
  QueryTokenMintedByProductAndAsset(
    request: QueryTokenMintedByProductAndAssetRequest
  ): Promise<QueryTokenMintedByProductAndAssetResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.QueryAllTokenMintedForAllProducts =
      this.QueryAllTokenMintedForAllProducts.bind(this);
    this.QueryTokenMintedByProduct = this.QueryTokenMintedByProduct.bind(this);
    this.QueryTokenMintedByProductAndAsset =
      this.QueryTokenMintedByProductAndAsset.bind(this);
  }
  QueryAllTokenMintedForAllProducts(
    request: QueryAllTokenMintedForAllProductsRequest
  ): Promise<QueryAllTokenMintedForAllProductsResponse> {
    const data =
      QueryAllTokenMintedForAllProductsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.tokenmint.v1beta1.Query",
      "QueryAllTokenMintedForAllProducts",
      data
    );
    return promise.then((data) =>
      QueryAllTokenMintedForAllProductsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryTokenMintedByProduct(
    request: QueryTokenMintedByProductRequest
  ): Promise<QueryTokenMintedByProductResponse> {
    const data = QueryTokenMintedByProductRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.tokenmint.v1beta1.Query",
      "QueryTokenMintedByProduct",
      data
    );
    return promise.then((data) =>
      QueryTokenMintedByProductResponse.decode(new _m0.Reader(data))
    );
  }

  QueryTokenMintedByProductAndAsset(
    request: QueryTokenMintedByProductAndAssetRequest
  ): Promise<QueryTokenMintedByProductAndAssetResponse> {
    const data =
      QueryTokenMintedByProductAndAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.tokenmint.v1beta1.Query",
      "QueryTokenMintedByProductAndAsset",
      data
    );
    return promise.then((data) =>
      QueryTokenMintedByProductAndAssetResponse.decode(new _m0.Reader(data))
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
