/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { AppReserveFundsTxData, LiquidationWhiteListing, LockedVault } from "./liquidate";
import { Params } from "./params";

export const protobufPackage = "comdex.liquidationsV2.v1beta1";

export interface QueryParamsRequest {
}

export interface QueryParamsResponse {
  params?: Params;
}

export interface QueryLockedVaultRequest {
  appId: Long;
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

export interface QueryLiquidationWhiteListingRequest {
  appId: Long;
}

export interface QueryLiquidationWhiteListingResponse {
  liquidationWhiteListing?: LiquidationWhiteListing;
}

export interface QueryLiquidationWhiteListingsRequest {
  pagination?: PageRequest;
}

export interface QueryLiquidationWhiteListingsResponse {
  liquidationWhiteListings: LiquidationWhiteListing[];
  pagination?: PageResponse;
}

export interface QueryLockedVaultsHistoryRequest {
  pagination?: PageRequest;
}

export interface QueryLockedVaultsHistoryResponse {
  lockedVaultsHistory: LockedVault[];
  pagination?: PageResponse;
}

export interface QueryAppReserveFundsTxDataRequest {
  appId: Long;
}

export interface QueryAppReserveFundsTxDataResponse {
  appReserveFundsTxData?: AppReserveFundsTxData;
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

function createBaseQueryLockedVaultRequest(): QueryLockedVaultRequest {
  return { appId: Long.UZERO, id: Long.UZERO };
}

export const QueryLockedVaultRequest = {
  encode(message: QueryLockedVaultRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockedVaultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedVaultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
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
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryLockedVaultRequest): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLockedVaultRequest>, I>>(base?: I): QueryLockedVaultRequest {
    return QueryLockedVaultRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockedVaultRequest>, I>>(object: I): QueryLockedVaultRequest {
    const message = createBaseQueryLockedVaultRequest();
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseQueryLockedVaultResponse(): QueryLockedVaultResponse {
  return { lockedVault: undefined };
}

export const QueryLockedVaultResponse = {
  encode(message: QueryLockedVaultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lockedVault !== undefined) {
      LockedVault.encode(message.lockedVault, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockedVaultResponse {
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
    return { lockedVault: isSet(object.lockedVault) ? LockedVault.fromJSON(object.lockedVault) : undefined };
  },

  toJSON(message: QueryLockedVaultResponse): unknown {
    const obj: any = {};
    message.lockedVault !== undefined &&
      (obj.lockedVault = message.lockedVault ? LockedVault.toJSON(message.lockedVault) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLockedVaultResponse>, I>>(base?: I): QueryLockedVaultResponse {
    return QueryLockedVaultResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockedVaultResponse>, I>>(object: I): QueryLockedVaultResponse {
    const message = createBaseQueryLockedVaultResponse();
    message.lockedVault = (object.lockedVault !== undefined && object.lockedVault !== null)
      ? LockedVault.fromPartial(object.lockedVault)
      : undefined;
    return message;
  },
};

function createBaseQueryLockedVaultsRequest(): QueryLockedVaultsRequest {
  return { pagination: undefined };
}

export const QueryLockedVaultsRequest = {
  encode(message: QueryLockedVaultsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockedVaultsRequest {
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
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryLockedVaultsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLockedVaultsRequest>, I>>(base?: I): QueryLockedVaultsRequest {
    return QueryLockedVaultsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockedVaultsRequest>, I>>(object: I): QueryLockedVaultsRequest {
    const message = createBaseQueryLockedVaultsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryLockedVaultsResponse(): QueryLockedVaultsResponse {
  return { lockedVaults: [], pagination: undefined };
}

export const QueryLockedVaultsResponse = {
  encode(message: QueryLockedVaultsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lockedVaults) {
      LockedVault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockedVaultsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedVaultsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockedVaults.push(LockedVault.decode(reader, reader.uint32()));
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
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryLockedVaultsResponse): unknown {
    const obj: any = {};
    if (message.lockedVaults) {
      obj.lockedVaults = message.lockedVaults.map((e) => e ? LockedVault.toJSON(e) : undefined);
    } else {
      obj.lockedVaults = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLockedVaultsResponse>, I>>(base?: I): QueryLockedVaultsResponse {
    return QueryLockedVaultsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockedVaultsResponse>, I>>(object: I): QueryLockedVaultsResponse {
    const message = createBaseQueryLockedVaultsResponse();
    message.lockedVaults = object.lockedVaults?.map((e) => LockedVault.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryLiquidationWhiteListingRequest(): QueryLiquidationWhiteListingRequest {
  return { appId: Long.UZERO };
}

export const QueryLiquidationWhiteListingRequest = {
  encode(message: QueryLiquidationWhiteListingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidationWhiteListingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidationWhiteListingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLiquidationWhiteListingRequest {
    return { appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO };
  },

  toJSON(message: QueryLiquidationWhiteListingRequest): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLiquidationWhiteListingRequest>, I>>(
    base?: I,
  ): QueryLiquidationWhiteListingRequest {
    return QueryLiquidationWhiteListingRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLiquidationWhiteListingRequest>, I>>(
    object: I,
  ): QueryLiquidationWhiteListingRequest {
    const message = createBaseQueryLiquidationWhiteListingRequest();
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    return message;
  },
};

function createBaseQueryLiquidationWhiteListingResponse(): QueryLiquidationWhiteListingResponse {
  return { liquidationWhiteListing: undefined };
}

export const QueryLiquidationWhiteListingResponse = {
  encode(message: QueryLiquidationWhiteListingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidationWhiteListing !== undefined) {
      LiquidationWhiteListing.encode(message.liquidationWhiteListing, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidationWhiteListingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidationWhiteListingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidationWhiteListing = LiquidationWhiteListing.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLiquidationWhiteListingResponse {
    return {
      liquidationWhiteListing: isSet(object.liquidationWhiteListing)
        ? LiquidationWhiteListing.fromJSON(object.liquidationWhiteListing)
        : undefined,
    };
  },

  toJSON(message: QueryLiquidationWhiteListingResponse): unknown {
    const obj: any = {};
    message.liquidationWhiteListing !== undefined && (obj.liquidationWhiteListing = message.liquidationWhiteListing
      ? LiquidationWhiteListing.toJSON(message.liquidationWhiteListing)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLiquidationWhiteListingResponse>, I>>(
    base?: I,
  ): QueryLiquidationWhiteListingResponse {
    return QueryLiquidationWhiteListingResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLiquidationWhiteListingResponse>, I>>(
    object: I,
  ): QueryLiquidationWhiteListingResponse {
    const message = createBaseQueryLiquidationWhiteListingResponse();
    message.liquidationWhiteListing =
      (object.liquidationWhiteListing !== undefined && object.liquidationWhiteListing !== null)
        ? LiquidationWhiteListing.fromPartial(object.liquidationWhiteListing)
        : undefined;
    return message;
  },
};

function createBaseQueryLiquidationWhiteListingsRequest(): QueryLiquidationWhiteListingsRequest {
  return { pagination: undefined };
}

export const QueryLiquidationWhiteListingsRequest = {
  encode(message: QueryLiquidationWhiteListingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidationWhiteListingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidationWhiteListingsRequest();
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

  fromJSON(object: any): QueryLiquidationWhiteListingsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryLiquidationWhiteListingsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLiquidationWhiteListingsRequest>, I>>(
    base?: I,
  ): QueryLiquidationWhiteListingsRequest {
    return QueryLiquidationWhiteListingsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLiquidationWhiteListingsRequest>, I>>(
    object: I,
  ): QueryLiquidationWhiteListingsRequest {
    const message = createBaseQueryLiquidationWhiteListingsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryLiquidationWhiteListingsResponse(): QueryLiquidationWhiteListingsResponse {
  return { liquidationWhiteListings: [], pagination: undefined };
}

export const QueryLiquidationWhiteListingsResponse = {
  encode(message: QueryLiquidationWhiteListingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.liquidationWhiteListings) {
      LiquidationWhiteListing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidationWhiteListingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidationWhiteListingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidationWhiteListings.push(LiquidationWhiteListing.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryLiquidationWhiteListingsResponse {
    return {
      liquidationWhiteListings: Array.isArray(object?.liquidationWhiteListings)
        ? object.liquidationWhiteListings.map((e: any) => LiquidationWhiteListing.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryLiquidationWhiteListingsResponse): unknown {
    const obj: any = {};
    if (message.liquidationWhiteListings) {
      obj.liquidationWhiteListings = message.liquidationWhiteListings.map((e) =>
        e ? LiquidationWhiteListing.toJSON(e) : undefined
      );
    } else {
      obj.liquidationWhiteListings = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLiquidationWhiteListingsResponse>, I>>(
    base?: I,
  ): QueryLiquidationWhiteListingsResponse {
    return QueryLiquidationWhiteListingsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLiquidationWhiteListingsResponse>, I>>(
    object: I,
  ): QueryLiquidationWhiteListingsResponse {
    const message = createBaseQueryLiquidationWhiteListingsResponse();
    message.liquidationWhiteListings =
      object.liquidationWhiteListings?.map((e) => LiquidationWhiteListing.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryLockedVaultsHistoryRequest(): QueryLockedVaultsHistoryRequest {
  return { pagination: undefined };
}

export const QueryLockedVaultsHistoryRequest = {
  encode(message: QueryLockedVaultsHistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockedVaultsHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedVaultsHistoryRequest();
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

  fromJSON(object: any): QueryLockedVaultsHistoryRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryLockedVaultsHistoryRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLockedVaultsHistoryRequest>, I>>(base?: I): QueryLockedVaultsHistoryRequest {
    return QueryLockedVaultsHistoryRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockedVaultsHistoryRequest>, I>>(
    object: I,
  ): QueryLockedVaultsHistoryRequest {
    const message = createBaseQueryLockedVaultsHistoryRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryLockedVaultsHistoryResponse(): QueryLockedVaultsHistoryResponse {
  return { lockedVaultsHistory: [], pagination: undefined };
}

export const QueryLockedVaultsHistoryResponse = {
  encode(message: QueryLockedVaultsHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lockedVaultsHistory) {
      LockedVault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockedVaultsHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedVaultsHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockedVaultsHistory.push(LockedVault.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryLockedVaultsHistoryResponse {
    return {
      lockedVaultsHistory: Array.isArray(object?.lockedVaultsHistory)
        ? object.lockedVaultsHistory.map((e: any) => LockedVault.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryLockedVaultsHistoryResponse): unknown {
    const obj: any = {};
    if (message.lockedVaultsHistory) {
      obj.lockedVaultsHistory = message.lockedVaultsHistory.map((e) => e ? LockedVault.toJSON(e) : undefined);
    } else {
      obj.lockedVaultsHistory = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLockedVaultsHistoryResponse>, I>>(
    base?: I,
  ): QueryLockedVaultsHistoryResponse {
    return QueryLockedVaultsHistoryResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockedVaultsHistoryResponse>, I>>(
    object: I,
  ): QueryLockedVaultsHistoryResponse {
    const message = createBaseQueryLockedVaultsHistoryResponse();
    message.lockedVaultsHistory = object.lockedVaultsHistory?.map((e) => LockedVault.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAppReserveFundsTxDataRequest(): QueryAppReserveFundsTxDataRequest {
  return { appId: Long.UZERO };
}

export const QueryAppReserveFundsTxDataRequest = {
  encode(message: QueryAppReserveFundsTxDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppReserveFundsTxDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppReserveFundsTxDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAppReserveFundsTxDataRequest {
    return { appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO };
  },

  toJSON(message: QueryAppReserveFundsTxDataRequest): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAppReserveFundsTxDataRequest>, I>>(
    base?: I,
  ): QueryAppReserveFundsTxDataRequest {
    return QueryAppReserveFundsTxDataRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAppReserveFundsTxDataRequest>, I>>(
    object: I,
  ): QueryAppReserveFundsTxDataRequest {
    const message = createBaseQueryAppReserveFundsTxDataRequest();
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    return message;
  },
};

function createBaseQueryAppReserveFundsTxDataResponse(): QueryAppReserveFundsTxDataResponse {
  return { appReserveFundsTxData: undefined };
}

export const QueryAppReserveFundsTxDataResponse = {
  encode(message: QueryAppReserveFundsTxDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appReserveFundsTxData !== undefined) {
      AppReserveFundsTxData.encode(message.appReserveFundsTxData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppReserveFundsTxDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppReserveFundsTxDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appReserveFundsTxData = AppReserveFundsTxData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAppReserveFundsTxDataResponse {
    return {
      appReserveFundsTxData: isSet(object.appReserveFundsTxData)
        ? AppReserveFundsTxData.fromJSON(object.appReserveFundsTxData)
        : undefined,
    };
  },

  toJSON(message: QueryAppReserveFundsTxDataResponse): unknown {
    const obj: any = {};
    message.appReserveFundsTxData !== undefined && (obj.appReserveFundsTxData = message.appReserveFundsTxData
      ? AppReserveFundsTxData.toJSON(message.appReserveFundsTxData)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAppReserveFundsTxDataResponse>, I>>(
    base?: I,
  ): QueryAppReserveFundsTxDataResponse {
    return QueryAppReserveFundsTxDataResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAppReserveFundsTxDataResponse>, I>>(
    object: I,
  ): QueryAppReserveFundsTxDataResponse {
    const message = createBaseQueryAppReserveFundsTxDataResponse();
    message.appReserveFundsTxData =
      (object.appReserveFundsTxData !== undefined && object.appReserveFundsTxData !== null)
        ? AppReserveFundsTxData.fromPartial(object.appReserveFundsTxData)
        : undefined;
    return message;
  },
};

export interface Query {
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  QueryLockedVault(request: QueryLockedVaultRequest): Promise<QueryLockedVaultResponse>;
  QueryLockedVaults(request: QueryLockedVaultsRequest): Promise<QueryLockedVaultsResponse>;
  QueryLiquidationWhiteListing(
    request: QueryLiquidationWhiteListingRequest,
  ): Promise<QueryLiquidationWhiteListingResponse>;
  QueryLiquidationWhiteListings(
    request: QueryLiquidationWhiteListingsRequest,
  ): Promise<QueryLiquidationWhiteListingsResponse>;
  QueryLockedVaultsHistory(request: QueryLockedVaultsHistoryRequest): Promise<QueryLockedVaultsHistoryResponse>;
  QueryAppReserveFundsTxData(request: QueryAppReserveFundsTxDataRequest): Promise<QueryAppReserveFundsTxDataResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "comdex.liquidationsV2.v1beta1.Query";
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.QueryLockedVault = this.QueryLockedVault.bind(this);
    this.QueryLockedVaults = this.QueryLockedVaults.bind(this);
    this.QueryLiquidationWhiteListing = this.QueryLiquidationWhiteListing.bind(this);
    this.QueryLiquidationWhiteListings = this.QueryLiquidationWhiteListings.bind(this);
    this.QueryLockedVaultsHistory = this.QueryLockedVaultsHistory.bind(this);
    this.QueryAppReserveFundsTxData = this.QueryAppReserveFundsTxData.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  QueryLockedVault(request: QueryLockedVaultRequest): Promise<QueryLockedVaultResponse> {
    const data = QueryLockedVaultRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryLockedVault", data);
    return promise.then((data) => QueryLockedVaultResponse.decode(new _m0.Reader(data)));
  }

  QueryLockedVaults(request: QueryLockedVaultsRequest): Promise<QueryLockedVaultsResponse> {
    const data = QueryLockedVaultsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryLockedVaults", data);
    return promise.then((data) => QueryLockedVaultsResponse.decode(new _m0.Reader(data)));
  }

  QueryLiquidationWhiteListing(
    request: QueryLiquidationWhiteListingRequest,
  ): Promise<QueryLiquidationWhiteListingResponse> {
    const data = QueryLiquidationWhiteListingRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryLiquidationWhiteListing", data);
    return promise.then((data) => QueryLiquidationWhiteListingResponse.decode(new _m0.Reader(data)));
  }

  QueryLiquidationWhiteListings(
    request: QueryLiquidationWhiteListingsRequest,
  ): Promise<QueryLiquidationWhiteListingsResponse> {
    const data = QueryLiquidationWhiteListingsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryLiquidationWhiteListings", data);
    return promise.then((data) => QueryLiquidationWhiteListingsResponse.decode(new _m0.Reader(data)));
  }

  QueryLockedVaultsHistory(request: QueryLockedVaultsHistoryRequest): Promise<QueryLockedVaultsHistoryResponse> {
    const data = QueryLockedVaultsHistoryRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryLockedVaultsHistory", data);
    return promise.then((data) => QueryLockedVaultsHistoryResponse.decode(new _m0.Reader(data)));
  }

  QueryAppReserveFundsTxData(request: QueryAppReserveFundsTxDataRequest): Promise<QueryAppReserveFundsTxDataResponse> {
    const data = QueryAppReserveFundsTxDataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryAppReserveFundsTxData", data);
    return promise.then((data) => QueryAppReserveFundsTxDataResponse.decode(new _m0.Reader(data)));
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
