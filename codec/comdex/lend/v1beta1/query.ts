/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../comdex/lend/v1beta1/params";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import {
  LendAsset,
  ExtendedPair,
  AssetRatesStats,
  Pool,
  AssetToPairMapping,
  BorrowAsset,
} from "../../../comdex/lend/v1beta1/lend";

export const protobufPackage = "comdex.lend.v1beta1";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryLendsRequest {
  pagination?: PageRequest;
}

export interface QueryLendsResponse {
  lends: LendAsset[];
  pagination?: PageResponse;
}

export interface QueryLendRequest {
  id: Long;
}

export interface QueryLendResponse {
  lend?: LendAsset;
}

export interface QueryAllLendByOwnerRequest {
  owner: string;
  pagination?: PageRequest;
}

export interface QueryAllLendByOwnerResponse {
  lends: LendAsset[];
}

export interface QueryPairsRequest {
  pagination?: PageRequest;
}

export interface QueryPairsResponse {
  extendedPairs: ExtendedPair[];
  pagination?: PageResponse;
}

export interface QueryPairRequest {
  id: Long;
}

export interface QueryPairResponse {
  ExtendedPair?: ExtendedPair;
}

export interface QueryAssetRatesStatsRequest {
  pagination?: PageRequest;
}

export interface QueryAssetRatesStatsResponse {
  AssetRatesStats: AssetRatesStats[];
  pagination?: PageResponse;
}

export interface QueryAssetRatesStatRequest {
  id: Long;
}

export interface QueryAssetRatesStatResponse {
  AssetRatesStat?: AssetRatesStats;
}

export interface QueryPoolsRequest {
  pagination?: PageRequest;
}

export interface QueryPoolsResponse {
  pools: Pool[];
  pagination?: PageResponse;
}

export interface QueryPoolRequest {
  id: Long;
}

export interface QueryPoolResponse {
  Pool?: Pool;
}

export interface QueryAssetToPairMappingsRequest {
  pagination?: PageRequest;
}

export interface QueryAssetToPairMappingsResponse {
  assetToPairMappings: AssetToPairMapping[];
  pagination?: PageResponse;
}

export interface QueryAssetToPairMappingRequest {
  id: Long;
}

export interface QueryAssetToPairMappingResponse {
  AssetToPairMapping?: AssetToPairMapping;
}

export interface QueryBorrowsRequest {
  pagination?: PageRequest;
}

export interface QueryBorrowsResponse {
  borrows: BorrowAsset[];
  pagination?: PageResponse;
}

export interface QueryBorrowRequest {
  id: Long;
}

export interface QueryBorrowResponse {
  borrow?: BorrowAsset;
}

export interface QueryAllBorrowByOwnerRequest {
  owner: string;
  pagination?: PageRequest;
}

export interface QueryAllBorrowByOwnerResponse {
  borrows: BorrowAsset[];
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

function createBaseQueryLendsRequest(): QueryLendsRequest {
  return { pagination: undefined };
}

export const QueryLendsRequest = {
  encode(
    message: QueryLendsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLendsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLendsRequest();
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

  fromJSON(object: any): QueryLendsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLendsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLendsRequest>, I>>(
    object: I
  ): QueryLendsRequest {
    const message = createBaseQueryLendsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryLendsResponse(): QueryLendsResponse {
  return { lends: [], pagination: undefined };
}

export const QueryLendsResponse = {
  encode(
    message: QueryLendsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.lends) {
      LendAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLendsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLendsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lends.push(LendAsset.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryLendsResponse {
    return {
      lends: Array.isArray(object?.lends)
        ? object.lends.map((e: any) => LendAsset.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLendsResponse): unknown {
    const obj: any = {};
    if (message.lends) {
      obj.lends = message.lends.map((e) =>
        e ? LendAsset.toJSON(e) : undefined
      );
    } else {
      obj.lends = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLendsResponse>, I>>(
    object: I
  ): QueryLendsResponse {
    const message = createBaseQueryLendsResponse();
    message.lends = object.lends?.map((e) => LendAsset.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryLendRequest(): QueryLendRequest {
  return { id: Long.UZERO };
}

export const QueryLendRequest = {
  encode(
    message: QueryLendRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLendRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLendRequest();
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

  fromJSON(object: any): QueryLendRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryLendRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLendRequest>, I>>(
    object: I
  ): QueryLendRequest {
    const message = createBaseQueryLendRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryLendResponse(): QueryLendResponse {
  return { lend: undefined };
}

export const QueryLendResponse = {
  encode(
    message: QueryLendResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lend !== undefined) {
      LendAsset.encode(message.lend, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lend = LendAsset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLendResponse {
    return {
      lend: isSet(object.lend) ? LendAsset.fromJSON(object.lend) : undefined,
    };
  },

  toJSON(message: QueryLendResponse): unknown {
    const obj: any = {};
    message.lend !== undefined &&
      (obj.lend = message.lend ? LendAsset.toJSON(message.lend) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLendResponse>, I>>(
    object: I
  ): QueryLendResponse {
    const message = createBaseQueryLendResponse();
    message.lend =
      object.lend !== undefined && object.lend !== null
        ? LendAsset.fromPartial(object.lend)
        : undefined;
    return message;
  },
};

function createBaseQueryAllLendByOwnerRequest(): QueryAllLendByOwnerRequest {
  return { owner: "", pagination: undefined };
}

export const QueryAllLendByOwnerRequest = {
  encode(
    message: QueryAllLendByOwnerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllLendByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLendByOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
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

  fromJSON(object: any): QueryAllLendByOwnerRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllLendByOwnerRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllLendByOwnerRequest>, I>>(
    object: I
  ): QueryAllLendByOwnerRequest {
    const message = createBaseQueryAllLendByOwnerRequest();
    message.owner = object.owner ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllLendByOwnerResponse(): QueryAllLendByOwnerResponse {
  return { lends: [] };
}

export const QueryAllLendByOwnerResponse = {
  encode(
    message: QueryAllLendByOwnerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.lends) {
      LendAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllLendByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLendByOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lends.push(LendAsset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLendByOwnerResponse {
    return {
      lends: Array.isArray(object?.lends)
        ? object.lends.map((e: any) => LendAsset.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAllLendByOwnerResponse): unknown {
    const obj: any = {};
    if (message.lends) {
      obj.lends = message.lends.map((e) =>
        e ? LendAsset.toJSON(e) : undefined
      );
    } else {
      obj.lends = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllLendByOwnerResponse>, I>>(
    object: I
  ): QueryAllLendByOwnerResponse {
    const message = createBaseQueryAllLendByOwnerResponse();
    message.lends = object.lends?.map((e) => LendAsset.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryPairsRequest(): QueryPairsRequest {
  return { pagination: undefined };
}

export const QueryPairsRequest = {
  encode(
    message: QueryPairsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairsRequest();
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

  fromJSON(object: any): QueryPairsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryPairsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPairsRequest>, I>>(
    object: I
  ): QueryPairsRequest {
    const message = createBaseQueryPairsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryPairsResponse(): QueryPairsResponse {
  return { extendedPairs: [], pagination: undefined };
}

export const QueryPairsResponse = {
  encode(
    message: QueryPairsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.extendedPairs) {
      ExtendedPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extendedPairs.push(
            ExtendedPair.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryPairsResponse {
    return {
      extendedPairs: Array.isArray(object?.extendedPairs)
        ? object.extendedPairs.map((e: any) => ExtendedPair.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryPairsResponse): unknown {
    const obj: any = {};
    if (message.extendedPairs) {
      obj.extendedPairs = message.extendedPairs.map((e) =>
        e ? ExtendedPair.toJSON(e) : undefined
      );
    } else {
      obj.extendedPairs = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPairsResponse>, I>>(
    object: I
  ): QueryPairsResponse {
    const message = createBaseQueryPairsResponse();
    message.extendedPairs =
      object.extendedPairs?.map((e) => ExtendedPair.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryPairRequest(): QueryPairRequest {
  return { id: Long.UZERO };
}

export const QueryPairRequest = {
  encode(
    message: QueryPairRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairRequest();
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

  fromJSON(object: any): QueryPairRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryPairRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPairRequest>, I>>(
    object: I
  ): QueryPairRequest {
    const message = createBaseQueryPairRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryPairResponse(): QueryPairResponse {
  return { ExtendedPair: undefined };
}

export const QueryPairResponse = {
  encode(
    message: QueryPairResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ExtendedPair !== undefined) {
      ExtendedPair.encode(
        message.ExtendedPair,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ExtendedPair = ExtendedPair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPairResponse {
    return {
      ExtendedPair: isSet(object.ExtendedPair)
        ? ExtendedPair.fromJSON(object.ExtendedPair)
        : undefined,
    };
  },

  toJSON(message: QueryPairResponse): unknown {
    const obj: any = {};
    message.ExtendedPair !== undefined &&
      (obj.ExtendedPair = message.ExtendedPair
        ? ExtendedPair.toJSON(message.ExtendedPair)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPairResponse>, I>>(
    object: I
  ): QueryPairResponse {
    const message = createBaseQueryPairResponse();
    message.ExtendedPair =
      object.ExtendedPair !== undefined && object.ExtendedPair !== null
        ? ExtendedPair.fromPartial(object.ExtendedPair)
        : undefined;
    return message;
  },
};

function createBaseQueryAssetRatesStatsRequest(): QueryAssetRatesStatsRequest {
  return { pagination: undefined };
}

export const QueryAssetRatesStatsRequest = {
  encode(
    message: QueryAssetRatesStatsRequest,
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
  ): QueryAssetRatesStatsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetRatesStatsRequest();
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

  fromJSON(object: any): QueryAssetRatesStatsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAssetRatesStatsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAssetRatesStatsRequest>, I>>(
    object: I
  ): QueryAssetRatesStatsRequest {
    const message = createBaseQueryAssetRatesStatsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAssetRatesStatsResponse(): QueryAssetRatesStatsResponse {
  return { AssetRatesStats: [], pagination: undefined };
}

export const QueryAssetRatesStatsResponse = {
  encode(
    message: QueryAssetRatesStatsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.AssetRatesStats) {
      AssetRatesStats.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAssetRatesStatsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetRatesStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AssetRatesStats.push(
            AssetRatesStats.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAssetRatesStatsResponse {
    return {
      AssetRatesStats: Array.isArray(object?.AssetRatesStats)
        ? object.AssetRatesStats.map((e: any) => AssetRatesStats.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAssetRatesStatsResponse): unknown {
    const obj: any = {};
    if (message.AssetRatesStats) {
      obj.AssetRatesStats = message.AssetRatesStats.map((e) =>
        e ? AssetRatesStats.toJSON(e) : undefined
      );
    } else {
      obj.AssetRatesStats = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAssetRatesStatsResponse>, I>>(
    object: I
  ): QueryAssetRatesStatsResponse {
    const message = createBaseQueryAssetRatesStatsResponse();
    message.AssetRatesStats =
      object.AssetRatesStats?.map((e) => AssetRatesStats.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAssetRatesStatRequest(): QueryAssetRatesStatRequest {
  return { id: Long.UZERO };
}

export const QueryAssetRatesStatRequest = {
  encode(
    message: QueryAssetRatesStatRequest,
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
  ): QueryAssetRatesStatRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetRatesStatRequest();
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

  fromJSON(object: any): QueryAssetRatesStatRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryAssetRatesStatRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAssetRatesStatRequest>, I>>(
    object: I
  ): QueryAssetRatesStatRequest {
    const message = createBaseQueryAssetRatesStatRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryAssetRatesStatResponse(): QueryAssetRatesStatResponse {
  return { AssetRatesStat: undefined };
}

export const QueryAssetRatesStatResponse = {
  encode(
    message: QueryAssetRatesStatResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.AssetRatesStat !== undefined) {
      AssetRatesStats.encode(
        message.AssetRatesStat,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAssetRatesStatResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetRatesStatResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AssetRatesStat = AssetRatesStats.decode(
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

  fromJSON(object: any): QueryAssetRatesStatResponse {
    return {
      AssetRatesStat: isSet(object.AssetRatesStat)
        ? AssetRatesStats.fromJSON(object.AssetRatesStat)
        : undefined,
    };
  },

  toJSON(message: QueryAssetRatesStatResponse): unknown {
    const obj: any = {};
    message.AssetRatesStat !== undefined &&
      (obj.AssetRatesStat = message.AssetRatesStat
        ? AssetRatesStats.toJSON(message.AssetRatesStat)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAssetRatesStatResponse>, I>>(
    object: I
  ): QueryAssetRatesStatResponse {
    const message = createBaseQueryAssetRatesStatResponse();
    message.AssetRatesStat =
      object.AssetRatesStat !== undefined && object.AssetRatesStat !== null
        ? AssetRatesStats.fromPartial(object.AssetRatesStat)
        : undefined;
    return message;
  },
};

function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return { pagination: undefined };
}

export const QueryPoolsRequest = {
  encode(
    message: QueryPoolsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsRequest();
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

  fromJSON(object: any): QueryPoolsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryPoolsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolsRequest>, I>>(
    object: I
  ): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return { pools: [], pagination: undefined };
}

export const QueryPoolsResponse = {
  encode(
    message: QueryPoolsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Pool.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryPoolsResponse {
    return {
      pools: Array.isArray(object?.pools)
        ? object.pools.map((e: any) => Pool.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryPoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) => (e ? Pool.toJSON(e) : undefined));
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolsResponse>, I>>(
    object: I
  ): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map((e) => Pool.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryPoolRequest(): QueryPoolRequest {
  return { id: Long.UZERO };
}

export const QueryPoolRequest = {
  encode(
    message: QueryPoolRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
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

  fromJSON(object: any): QueryPoolRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryPoolRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolRequest>, I>>(
    object: I
  ): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryPoolResponse(): QueryPoolResponse {
  return { Pool: undefined };
}

export const QueryPoolResponse = {
  encode(
    message: QueryPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Pool !== undefined) {
      Pool.encode(message.Pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolResponse {
    return {
      Pool: isSet(object.Pool) ? Pool.fromJSON(object.Pool) : undefined,
    };
  },

  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    message.Pool !== undefined &&
      (obj.Pool = message.Pool ? Pool.toJSON(message.Pool) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolResponse>, I>>(
    object: I
  ): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.Pool =
      object.Pool !== undefined && object.Pool !== null
        ? Pool.fromPartial(object.Pool)
        : undefined;
    return message;
  },
};

function createBaseQueryAssetToPairMappingsRequest(): QueryAssetToPairMappingsRequest {
  return { pagination: undefined };
}

export const QueryAssetToPairMappingsRequest = {
  encode(
    message: QueryAssetToPairMappingsRequest,
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
  ): QueryAssetToPairMappingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetToPairMappingsRequest();
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

  fromJSON(object: any): QueryAssetToPairMappingsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAssetToPairMappingsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAssetToPairMappingsRequest>, I>>(
    object: I
  ): QueryAssetToPairMappingsRequest {
    const message = createBaseQueryAssetToPairMappingsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAssetToPairMappingsResponse(): QueryAssetToPairMappingsResponse {
  return { assetToPairMappings: [], pagination: undefined };
}

export const QueryAssetToPairMappingsResponse = {
  encode(
    message: QueryAssetToPairMappingsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.assetToPairMappings) {
      AssetToPairMapping.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAssetToPairMappingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetToPairMappingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetToPairMappings.push(
            AssetToPairMapping.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAssetToPairMappingsResponse {
    return {
      assetToPairMappings: Array.isArray(object?.assetToPairMappings)
        ? object.assetToPairMappings.map((e: any) =>
            AssetToPairMapping.fromJSON(e)
          )
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAssetToPairMappingsResponse): unknown {
    const obj: any = {};
    if (message.assetToPairMappings) {
      obj.assetToPairMappings = message.assetToPairMappings.map((e) =>
        e ? AssetToPairMapping.toJSON(e) : undefined
      );
    } else {
      obj.assetToPairMappings = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAssetToPairMappingsResponse>, I>
  >(object: I): QueryAssetToPairMappingsResponse {
    const message = createBaseQueryAssetToPairMappingsResponse();
    message.assetToPairMappings =
      object.assetToPairMappings?.map((e) =>
        AssetToPairMapping.fromPartial(e)
      ) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAssetToPairMappingRequest(): QueryAssetToPairMappingRequest {
  return { id: Long.UZERO };
}

export const QueryAssetToPairMappingRequest = {
  encode(
    message: QueryAssetToPairMappingRequest,
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
  ): QueryAssetToPairMappingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetToPairMappingRequest();
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

  fromJSON(object: any): QueryAssetToPairMappingRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryAssetToPairMappingRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAssetToPairMappingRequest>, I>>(
    object: I
  ): QueryAssetToPairMappingRequest {
    const message = createBaseQueryAssetToPairMappingRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryAssetToPairMappingResponse(): QueryAssetToPairMappingResponse {
  return { AssetToPairMapping: undefined };
}

export const QueryAssetToPairMappingResponse = {
  encode(
    message: QueryAssetToPairMappingResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.AssetToPairMapping !== undefined) {
      AssetToPairMapping.encode(
        message.AssetToPairMapping,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAssetToPairMappingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetToPairMappingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AssetToPairMapping = AssetToPairMapping.decode(
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

  fromJSON(object: any): QueryAssetToPairMappingResponse {
    return {
      AssetToPairMapping: isSet(object.AssetToPairMapping)
        ? AssetToPairMapping.fromJSON(object.AssetToPairMapping)
        : undefined,
    };
  },

  toJSON(message: QueryAssetToPairMappingResponse): unknown {
    const obj: any = {};
    message.AssetToPairMapping !== undefined &&
      (obj.AssetToPairMapping = message.AssetToPairMapping
        ? AssetToPairMapping.toJSON(message.AssetToPairMapping)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAssetToPairMappingResponse>, I>>(
    object: I
  ): QueryAssetToPairMappingResponse {
    const message = createBaseQueryAssetToPairMappingResponse();
    message.AssetToPairMapping =
      object.AssetToPairMapping !== undefined &&
      object.AssetToPairMapping !== null
        ? AssetToPairMapping.fromPartial(object.AssetToPairMapping)
        : undefined;
    return message;
  },
};

function createBaseQueryBorrowsRequest(): QueryBorrowsRequest {
  return { pagination: undefined };
}

export const QueryBorrowsRequest = {
  encode(
    message: QueryBorrowsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBorrowsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBorrowsRequest();
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

  fromJSON(object: any): QueryBorrowsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBorrowsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBorrowsRequest>, I>>(
    object: I
  ): QueryBorrowsRequest {
    const message = createBaseQueryBorrowsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryBorrowsResponse(): QueryBorrowsResponse {
  return { borrows: [], pagination: undefined };
}

export const QueryBorrowsResponse = {
  encode(
    message: QueryBorrowsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.borrows) {
      BorrowAsset.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryBorrowsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBorrowsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.borrows.push(BorrowAsset.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryBorrowsResponse {
    return {
      borrows: Array.isArray(object?.borrows)
        ? object.borrows.map((e: any) => BorrowAsset.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBorrowsResponse): unknown {
    const obj: any = {};
    if (message.borrows) {
      obj.borrows = message.borrows.map((e) =>
        e ? BorrowAsset.toJSON(e) : undefined
      );
    } else {
      obj.borrows = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBorrowsResponse>, I>>(
    object: I
  ): QueryBorrowsResponse {
    const message = createBaseQueryBorrowsResponse();
    message.borrows =
      object.borrows?.map((e) => BorrowAsset.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryBorrowRequest(): QueryBorrowRequest {
  return { id: Long.UZERO };
}

export const QueryBorrowRequest = {
  encode(
    message: QueryBorrowRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBorrowRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBorrowRequest();
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

  fromJSON(object: any): QueryBorrowRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryBorrowRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBorrowRequest>, I>>(
    object: I
  ): QueryBorrowRequest {
    const message = createBaseQueryBorrowRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryBorrowResponse(): QueryBorrowResponse {
  return { borrow: undefined };
}

export const QueryBorrowResponse = {
  encode(
    message: QueryBorrowResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.borrow !== undefined) {
      BorrowAsset.encode(message.borrow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBorrowResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBorrowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.borrow = BorrowAsset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBorrowResponse {
    return {
      borrow: isSet(object.borrow)
        ? BorrowAsset.fromJSON(object.borrow)
        : undefined,
    };
  },

  toJSON(message: QueryBorrowResponse): unknown {
    const obj: any = {};
    message.borrow !== undefined &&
      (obj.borrow = message.borrow
        ? BorrowAsset.toJSON(message.borrow)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBorrowResponse>, I>>(
    object: I
  ): QueryBorrowResponse {
    const message = createBaseQueryBorrowResponse();
    message.borrow =
      object.borrow !== undefined && object.borrow !== null
        ? BorrowAsset.fromPartial(object.borrow)
        : undefined;
    return message;
  },
};

function createBaseQueryAllBorrowByOwnerRequest(): QueryAllBorrowByOwnerRequest {
  return { owner: "", pagination: undefined };
}

export const QueryAllBorrowByOwnerRequest = {
  encode(
    message: QueryAllBorrowByOwnerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllBorrowByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBorrowByOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
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

  fromJSON(object: any): QueryAllBorrowByOwnerRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllBorrowByOwnerRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBorrowByOwnerRequest>, I>>(
    object: I
  ): QueryAllBorrowByOwnerRequest {
    const message = createBaseQueryAllBorrowByOwnerRequest();
    message.owner = object.owner ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllBorrowByOwnerResponse(): QueryAllBorrowByOwnerResponse {
  return { borrows: [] };
}

export const QueryAllBorrowByOwnerResponse = {
  encode(
    message: QueryAllBorrowByOwnerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.borrows) {
      BorrowAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllBorrowByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBorrowByOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.borrows.push(BorrowAsset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBorrowByOwnerResponse {
    return {
      borrows: Array.isArray(object?.borrows)
        ? object.borrows.map((e: any) => BorrowAsset.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAllBorrowByOwnerResponse): unknown {
    const obj: any = {};
    if (message.borrows) {
      obj.borrows = message.borrows.map((e) =>
        e ? BorrowAsset.toJSON(e) : undefined
      );
    } else {
      obj.borrows = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBorrowByOwnerResponse>, I>>(
    object: I
  ): QueryAllBorrowByOwnerResponse {
    const message = createBaseQueryAllBorrowByOwnerResponse();
    message.borrows =
      object.borrows?.map((e) => BorrowAsset.fromPartial(e)) || [];
    return message;
  },
};

export interface Query {
  QueryLends(request: QueryLendsRequest): Promise<QueryLendsResponse>;
  QueryLend(request: QueryLendRequest): Promise<QueryLendResponse>;
  QueryAllLendByOwner(
    request: QueryAllLendByOwnerRequest
  ): Promise<QueryAllLendByOwnerResponse>;
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  QueryPairs(request: QueryPairsRequest): Promise<QueryPairsResponse>;
  QueryPair(request: QueryPairRequest): Promise<QueryPairResponse>;
  QueryAssetRatesStats(
    request: QueryAssetRatesStatsRequest
  ): Promise<QueryAssetRatesStatsResponse>;
  QueryAssetRatesStat(
    request: QueryAssetRatesStatRequest
  ): Promise<QueryAssetRatesStatResponse>;
  QueryPools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
  QueryPool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
  QueryAssetToPairMappings(
    request: QueryAssetToPairMappingsRequest
  ): Promise<QueryAssetToPairMappingsResponse>;
  QueryAssetToPairMapping(
    request: QueryAssetToPairMappingRequest
  ): Promise<QueryAssetToPairMappingResponse>;
  QueryBorrows(request: QueryBorrowsRequest): Promise<QueryBorrowsResponse>;
  QueryBorrow(request: QueryBorrowRequest): Promise<QueryBorrowResponse>;
  QueryAllBorrowByOwner(
    request: QueryAllBorrowByOwnerRequest
  ): Promise<QueryAllBorrowByOwnerResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.QueryLends = this.QueryLends.bind(this);
    this.QueryLend = this.QueryLend.bind(this);
    this.QueryAllLendByOwner = this.QueryAllLendByOwner.bind(this);
    this.Params = this.Params.bind(this);
    this.QueryPairs = this.QueryPairs.bind(this);
    this.QueryPair = this.QueryPair.bind(this);
    this.QueryAssetRatesStats = this.QueryAssetRatesStats.bind(this);
    this.QueryAssetRatesStat = this.QueryAssetRatesStat.bind(this);
    this.QueryPools = this.QueryPools.bind(this);
    this.QueryPool = this.QueryPool.bind(this);
    this.QueryAssetToPairMappings = this.QueryAssetToPairMappings.bind(this);
    this.QueryAssetToPairMapping = this.QueryAssetToPairMapping.bind(this);
    this.QueryBorrows = this.QueryBorrows.bind(this);
    this.QueryBorrow = this.QueryBorrow.bind(this);
    this.QueryAllBorrowByOwner = this.QueryAllBorrowByOwner.bind(this);
  }
  QueryLends(request: QueryLendsRequest): Promise<QueryLendsResponse> {
    const data = QueryLendsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Query",
      "QueryLends",
      data
    );
    return promise.then((data) =>
      QueryLendsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryLend(request: QueryLendRequest): Promise<QueryLendResponse> {
    const data = QueryLendRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Query",
      "QueryLend",
      data
    );
    return promise.then((data) =>
      QueryLendResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAllLendByOwner(
    request: QueryAllLendByOwnerRequest
  ): Promise<QueryAllLendByOwnerResponse> {
    const data = QueryAllLendByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Query",
      "QueryAllLendByOwner",
      data
    );
    return promise.then((data) =>
      QueryAllLendByOwnerResponse.decode(new _m0.Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryPairs(request: QueryPairsRequest): Promise<QueryPairsResponse> {
    const data = QueryPairsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Query",
      "QueryPairs",
      data
    );
    return promise.then((data) =>
      QueryPairsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryPair(request: QueryPairRequest): Promise<QueryPairResponse> {
    const data = QueryPairRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Query",
      "QueryPair",
      data
    );
    return promise.then((data) =>
      QueryPairResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAssetRatesStats(
    request: QueryAssetRatesStatsRequest
  ): Promise<QueryAssetRatesStatsResponse> {
    const data = QueryAssetRatesStatsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Query",
      "QueryAssetRatesStats",
      data
    );
    return promise.then((data) =>
      QueryAssetRatesStatsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAssetRatesStat(
    request: QueryAssetRatesStatRequest
  ): Promise<QueryAssetRatesStatResponse> {
    const data = QueryAssetRatesStatRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Query",
      "QueryAssetRatesStat",
      data
    );
    return promise.then((data) =>
      QueryAssetRatesStatResponse.decode(new _m0.Reader(data))
    );
  }

  QueryPools(request: QueryPoolsRequest): Promise<QueryPoolsResponse> {
    const data = QueryPoolsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Query",
      "QueryPools",
      data
    );
    return promise.then((data) =>
      QueryPoolsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryPool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Query",
      "QueryPool",
      data
    );
    return promise.then((data) =>
      QueryPoolResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAssetToPairMappings(
    request: QueryAssetToPairMappingsRequest
  ): Promise<QueryAssetToPairMappingsResponse> {
    const data = QueryAssetToPairMappingsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Query",
      "QueryAssetToPairMappings",
      data
    );
    return promise.then((data) =>
      QueryAssetToPairMappingsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAssetToPairMapping(
    request: QueryAssetToPairMappingRequest
  ): Promise<QueryAssetToPairMappingResponse> {
    const data = QueryAssetToPairMappingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Query",
      "QueryAssetToPairMapping",
      data
    );
    return promise.then((data) =>
      QueryAssetToPairMappingResponse.decode(new _m0.Reader(data))
    );
  }

  QueryBorrows(request: QueryBorrowsRequest): Promise<QueryBorrowsResponse> {
    const data = QueryBorrowsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Query",
      "QueryBorrows",
      data
    );
    return promise.then((data) =>
      QueryBorrowsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryBorrow(request: QueryBorrowRequest): Promise<QueryBorrowResponse> {
    const data = QueryBorrowRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Query",
      "QueryBorrow",
      data
    );
    return promise.then((data) =>
      QueryBorrowResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAllBorrowByOwner(
    request: QueryAllBorrowByOwnerRequest
  ): Promise<QueryAllBorrowByOwnerResponse> {
    const data = QueryAllBorrowByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Query",
      "QueryAllBorrowByOwner",
      data
    );
    return promise.then((data) =>
      QueryAllBorrowByOwnerResponse.decode(new _m0.Reader(data))
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
