/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../comdex/collector/v1beta1/params";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import {
  CollectorLookupTableData,
  CollectorData,
  AppAssetIdToAuctionLookupTable,
  AppAssetIdToFeeCollectedData,
} from "../../../comdex/collector/v1beta1/collector";

export const protobufPackage = "comdex.collector.v1beta1";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryCollectorLookupByAppRequest {
  appId: Long;
  pagination?: PageRequest;
}

export interface QueryCollectorLookupByAppResponse {
  collectorLookup: CollectorLookupTableData[];
  pagination?: PageResponse;
}

export interface QueryCollectorLookupByAppAndAssetRequest {
  appId: Long;
  assetId: Long;
}

export interface QueryCollectorLookupByAppAndAssetResponse {
  collectorLookup?: CollectorLookupTableData;
}

export interface QueryCollectorDataByAppAndAssetRequest {
  appId: Long;
  assetId: Long;
}

export interface QueryCollectorDataByAppAndAssetResponse {
  collectorData?: CollectorData;
}

export interface QueryAuctionMappingForAppAndAssetRequest {
  appId: Long;
  assetId: Long;
}

export interface QueryAuctionMappingForAppAndAssetResponse {
  assetIdToAuctionLookupTable?: AppAssetIdToAuctionLookupTable;
}

export interface QueryNetFeeCollectedForAppAndAssetRequest {
  appId: Long;
  assetId: Long;
}

export interface QueryNetFeeCollectedForAppAndAssetResponse {
  assetIdToFeeCollected?: AppAssetIdToFeeCollectedData;
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

function createBaseQueryCollectorLookupByAppRequest(): QueryCollectorLookupByAppRequest {
  return { appId: Long.UZERO, pagination: undefined };
}

export const QueryCollectorLookupByAppRequest = {
  encode(
    message: QueryCollectorLookupByAppRequest,
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
  ): QueryCollectorLookupByAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectorLookupByAppRequest();
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

  fromJSON(object: any): QueryCollectorLookupByAppRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryCollectorLookupByAppRequest): unknown {
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
    I extends Exact<DeepPartial<QueryCollectorLookupByAppRequest>, I>
  >(object: I): QueryCollectorLookupByAppRequest {
    const message = createBaseQueryCollectorLookupByAppRequest();
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

function createBaseQueryCollectorLookupByAppResponse(): QueryCollectorLookupByAppResponse {
  return { collectorLookup: [], pagination: undefined };
}

export const QueryCollectorLookupByAppResponse = {
  encode(
    message: QueryCollectorLookupByAppResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.collectorLookup) {
      CollectorLookupTableData.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryCollectorLookupByAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectorLookupByAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectorLookup.push(
            CollectorLookupTableData.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryCollectorLookupByAppResponse {
    return {
      collectorLookup: Array.isArray(object?.collectorLookup)
        ? object.collectorLookup.map((e: any) =>
            CollectorLookupTableData.fromJSON(e)
          )
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryCollectorLookupByAppResponse): unknown {
    const obj: any = {};
    if (message.collectorLookup) {
      obj.collectorLookup = message.collectorLookup.map((e) =>
        e ? CollectorLookupTableData.toJSON(e) : undefined
      );
    } else {
      obj.collectorLookup = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryCollectorLookupByAppResponse>, I>
  >(object: I): QueryCollectorLookupByAppResponse {
    const message = createBaseQueryCollectorLookupByAppResponse();
    message.collectorLookup =
      object.collectorLookup?.map((e) =>
        CollectorLookupTableData.fromPartial(e)
      ) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryCollectorLookupByAppAndAssetRequest(): QueryCollectorLookupByAppAndAssetRequest {
  return { appId: Long.UZERO, assetId: Long.UZERO };
}

export const QueryCollectorLookupByAppAndAssetRequest = {
  encode(
    message: QueryCollectorLookupByAppAndAssetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCollectorLookupByAppAndAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectorLookupByAppAndAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollectorLookupByAppAndAssetRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryCollectorLookupByAppAndAssetRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryCollectorLookupByAppAndAssetRequest>, I>
  >(object: I): QueryCollectorLookupByAppAndAssetRequest {
    const message = createBaseQueryCollectorLookupByAppAndAssetRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryCollectorLookupByAppAndAssetResponse(): QueryCollectorLookupByAppAndAssetResponse {
  return { collectorLookup: undefined };
}

export const QueryCollectorLookupByAppAndAssetResponse = {
  encode(
    message: QueryCollectorLookupByAppAndAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectorLookup !== undefined) {
      CollectorLookupTableData.encode(
        message.collectorLookup,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCollectorLookupByAppAndAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectorLookupByAppAndAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectorLookup = CollectorLookupTableData.decode(
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

  fromJSON(object: any): QueryCollectorLookupByAppAndAssetResponse {
    return {
      collectorLookup: isSet(object.collectorLookup)
        ? CollectorLookupTableData.fromJSON(object.collectorLookup)
        : undefined,
    };
  },

  toJSON(message: QueryCollectorLookupByAppAndAssetResponse): unknown {
    const obj: any = {};
    message.collectorLookup !== undefined &&
      (obj.collectorLookup = message.collectorLookup
        ? CollectorLookupTableData.toJSON(message.collectorLookup)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryCollectorLookupByAppAndAssetResponse>, I>
  >(object: I): QueryCollectorLookupByAppAndAssetResponse {
    const message = createBaseQueryCollectorLookupByAppAndAssetResponse();
    message.collectorLookup =
      object.collectorLookup !== undefined && object.collectorLookup !== null
        ? CollectorLookupTableData.fromPartial(object.collectorLookup)
        : undefined;
    return message;
  },
};

function createBaseQueryCollectorDataByAppAndAssetRequest(): QueryCollectorDataByAppAndAssetRequest {
  return { appId: Long.UZERO, assetId: Long.UZERO };
}

export const QueryCollectorDataByAppAndAssetRequest = {
  encode(
    message: QueryCollectorDataByAppAndAssetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCollectorDataByAppAndAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectorDataByAppAndAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollectorDataByAppAndAssetRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryCollectorDataByAppAndAssetRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryCollectorDataByAppAndAssetRequest>, I>
  >(object: I): QueryCollectorDataByAppAndAssetRequest {
    const message = createBaseQueryCollectorDataByAppAndAssetRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryCollectorDataByAppAndAssetResponse(): QueryCollectorDataByAppAndAssetResponse {
  return { collectorData: undefined };
}

export const QueryCollectorDataByAppAndAssetResponse = {
  encode(
    message: QueryCollectorDataByAppAndAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectorData !== undefined) {
      CollectorData.encode(
        message.collectorData,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCollectorDataByAppAndAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectorDataByAppAndAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectorData = CollectorData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollectorDataByAppAndAssetResponse {
    return {
      collectorData: isSet(object.collectorData)
        ? CollectorData.fromJSON(object.collectorData)
        : undefined,
    };
  },

  toJSON(message: QueryCollectorDataByAppAndAssetResponse): unknown {
    const obj: any = {};
    message.collectorData !== undefined &&
      (obj.collectorData = message.collectorData
        ? CollectorData.toJSON(message.collectorData)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryCollectorDataByAppAndAssetResponse>, I>
  >(object: I): QueryCollectorDataByAppAndAssetResponse {
    const message = createBaseQueryCollectorDataByAppAndAssetResponse();
    message.collectorData =
      object.collectorData !== undefined && object.collectorData !== null
        ? CollectorData.fromPartial(object.collectorData)
        : undefined;
    return message;
  },
};

function createBaseQueryAuctionMappingForAppAndAssetRequest(): QueryAuctionMappingForAppAndAssetRequest {
  return { appId: Long.UZERO, assetId: Long.UZERO };
}

export const QueryAuctionMappingForAppAndAssetRequest = {
  encode(
    message: QueryAuctionMappingForAppAndAssetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAuctionMappingForAppAndAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionMappingForAppAndAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAuctionMappingForAppAndAssetRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryAuctionMappingForAppAndAssetRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAuctionMappingForAppAndAssetRequest>, I>
  >(object: I): QueryAuctionMappingForAppAndAssetRequest {
    const message = createBaseQueryAuctionMappingForAppAndAssetRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryAuctionMappingForAppAndAssetResponse(): QueryAuctionMappingForAppAndAssetResponse {
  return { assetIdToAuctionLookupTable: undefined };
}

export const QueryAuctionMappingForAppAndAssetResponse = {
  encode(
    message: QueryAuctionMappingForAppAndAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.assetIdToAuctionLookupTable !== undefined) {
      AppAssetIdToAuctionLookupTable.encode(
        message.assetIdToAuctionLookupTable,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAuctionMappingForAppAndAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionMappingForAppAndAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetIdToAuctionLookupTable =
            AppAssetIdToAuctionLookupTable.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAuctionMappingForAppAndAssetResponse {
    return {
      assetIdToAuctionLookupTable: isSet(object.assetIdToAuctionLookupTable)
        ? AppAssetIdToAuctionLookupTable.fromJSON(
            object.assetIdToAuctionLookupTable
          )
        : undefined,
    };
  },

  toJSON(message: QueryAuctionMappingForAppAndAssetResponse): unknown {
    const obj: any = {};
    message.assetIdToAuctionLookupTable !== undefined &&
      (obj.assetIdToAuctionLookupTable = message.assetIdToAuctionLookupTable
        ? AppAssetIdToAuctionLookupTable.toJSON(
            message.assetIdToAuctionLookupTable
          )
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAuctionMappingForAppAndAssetResponse>, I>
  >(object: I): QueryAuctionMappingForAppAndAssetResponse {
    const message = createBaseQueryAuctionMappingForAppAndAssetResponse();
    message.assetIdToAuctionLookupTable =
      object.assetIdToAuctionLookupTable !== undefined &&
      object.assetIdToAuctionLookupTable !== null
        ? AppAssetIdToAuctionLookupTable.fromPartial(
            object.assetIdToAuctionLookupTable
          )
        : undefined;
    return message;
  },
};

function createBaseQueryNetFeeCollectedForAppAndAssetRequest(): QueryNetFeeCollectedForAppAndAssetRequest {
  return { appId: Long.UZERO, assetId: Long.UZERO };
}

export const QueryNetFeeCollectedForAppAndAssetRequest = {
  encode(
    message: QueryNetFeeCollectedForAppAndAssetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryNetFeeCollectedForAppAndAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNetFeeCollectedForAppAndAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNetFeeCollectedForAppAndAssetRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryNetFeeCollectedForAppAndAssetRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryNetFeeCollectedForAppAndAssetRequest>, I>
  >(object: I): QueryNetFeeCollectedForAppAndAssetRequest {
    const message = createBaseQueryNetFeeCollectedForAppAndAssetRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryNetFeeCollectedForAppAndAssetResponse(): QueryNetFeeCollectedForAppAndAssetResponse {
  return { assetIdToFeeCollected: undefined };
}

export const QueryNetFeeCollectedForAppAndAssetResponse = {
  encode(
    message: QueryNetFeeCollectedForAppAndAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.assetIdToFeeCollected !== undefined) {
      AppAssetIdToFeeCollectedData.encode(
        message.assetIdToFeeCollected,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryNetFeeCollectedForAppAndAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNetFeeCollectedForAppAndAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetIdToFeeCollected = AppAssetIdToFeeCollectedData.decode(
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

  fromJSON(object: any): QueryNetFeeCollectedForAppAndAssetResponse {
    return {
      assetIdToFeeCollected: isSet(object.assetIdToFeeCollected)
        ? AppAssetIdToFeeCollectedData.fromJSON(object.assetIdToFeeCollected)
        : undefined,
    };
  },

  toJSON(message: QueryNetFeeCollectedForAppAndAssetResponse): unknown {
    const obj: any = {};
    message.assetIdToFeeCollected !== undefined &&
      (obj.assetIdToFeeCollected = message.assetIdToFeeCollected
        ? AppAssetIdToFeeCollectedData.toJSON(message.assetIdToFeeCollected)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryNetFeeCollectedForAppAndAssetResponse>, I>
  >(object: I): QueryNetFeeCollectedForAppAndAssetResponse {
    const message = createBaseQueryNetFeeCollectedForAppAndAssetResponse();
    message.assetIdToFeeCollected =
      object.assetIdToFeeCollected !== undefined &&
      object.assetIdToFeeCollected !== null
        ? AppAssetIdToFeeCollectedData.fromPartial(object.assetIdToFeeCollected)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  QueryCollectorLookupByApp(
    request: QueryCollectorLookupByAppRequest
  ): Promise<QueryCollectorLookupByAppResponse>;
  QueryCollectorLookupByAppAndAsset(
    request: QueryCollectorLookupByAppAndAssetRequest
  ): Promise<QueryCollectorLookupByAppAndAssetResponse>;
  QueryCollectorDataByAppAndAsset(
    request: QueryCollectorDataByAppAndAssetRequest
  ): Promise<QueryCollectorDataByAppAndAssetResponse>;
  QueryAuctionMappingForAppAndAsset(
    request: QueryAuctionMappingForAppAndAssetRequest
  ): Promise<QueryAuctionMappingForAppAndAssetResponse>;
  QueryNetFeeCollectedForAppAndAsset(
    request: QueryNetFeeCollectedForAppAndAssetRequest
  ): Promise<QueryNetFeeCollectedForAppAndAssetResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.QueryCollectorLookupByApp = this.QueryCollectorLookupByApp.bind(this);
    this.QueryCollectorLookupByAppAndAsset =
      this.QueryCollectorLookupByAppAndAsset.bind(this);
    this.QueryCollectorDataByAppAndAsset =
      this.QueryCollectorDataByAppAndAsset.bind(this);
    this.QueryAuctionMappingForAppAndAsset =
      this.QueryAuctionMappingForAppAndAsset.bind(this);
    this.QueryNetFeeCollectedForAppAndAsset =
      this.QueryNetFeeCollectedForAppAndAsset.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.collector.v1beta1.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryCollectorLookupByApp(
    request: QueryCollectorLookupByAppRequest
  ): Promise<QueryCollectorLookupByAppResponse> {
    const data = QueryCollectorLookupByAppRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.collector.v1beta1.Query",
      "QueryCollectorLookupByApp",
      data
    );
    return promise.then((data) =>
      QueryCollectorLookupByAppResponse.decode(new _m0.Reader(data))
    );
  }

  QueryCollectorLookupByAppAndAsset(
    request: QueryCollectorLookupByAppAndAssetRequest
  ): Promise<QueryCollectorLookupByAppAndAssetResponse> {
    const data =
      QueryCollectorLookupByAppAndAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.collector.v1beta1.Query",
      "QueryCollectorLookupByAppAndAsset",
      data
    );
    return promise.then((data) =>
      QueryCollectorLookupByAppAndAssetResponse.decode(new _m0.Reader(data))
    );
  }

  QueryCollectorDataByAppAndAsset(
    request: QueryCollectorDataByAppAndAssetRequest
  ): Promise<QueryCollectorDataByAppAndAssetResponse> {
    const data =
      QueryCollectorDataByAppAndAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.collector.v1beta1.Query",
      "QueryCollectorDataByAppAndAsset",
      data
    );
    return promise.then((data) =>
      QueryCollectorDataByAppAndAssetResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAuctionMappingForAppAndAsset(
    request: QueryAuctionMappingForAppAndAssetRequest
  ): Promise<QueryAuctionMappingForAppAndAssetResponse> {
    const data =
      QueryAuctionMappingForAppAndAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.collector.v1beta1.Query",
      "QueryAuctionMappingForAppAndAsset",
      data
    );
    return promise.then((data) =>
      QueryAuctionMappingForAppAndAssetResponse.decode(new _m0.Reader(data))
    );
  }

  QueryNetFeeCollectedForAppAndAsset(
    request: QueryNetFeeCollectedForAppAndAssetRequest
  ): Promise<QueryNetFeeCollectedForAppAndAssetResponse> {
    const data =
      QueryNetFeeCollectedForAppAndAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.collector.v1beta1.Query",
      "QueryNetFeeCollectedForAppAndAsset",
      data
    );
    return promise.then((data) =>
      QueryNetFeeCollectedForAppAndAssetResponse.decode(new _m0.Reader(data))
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
