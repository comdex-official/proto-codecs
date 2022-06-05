/* eslint-disable */
import Long from "long";
import  _m0 from "protobufjs/minimal";
import { Params } from "../../../comdex/collector/v1beta1/params";
import {
  CollectorLookupTable,
  CollectorData,
  AssetIdToAuctionLookupTable,
  AssetIdToFeeCollected,
} from "../../../comdex/collector/v1beta1/collector";

export const protobufPackage = "comdex.collector.v1beta1";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryCollectorLookupByProductRequest {
  appId: Long;
}

export interface QueryCollectorLookupByProductResponse {
  collectorLookup: CollectorLookupTable[];
}

export interface QueryCollectorLookupByProductAndAssetRequest {
  appId: Long;
  assetId: Long;
}

export interface QueryCollectorLookupByProductAndAssetResponse {
  collectorLookup?: CollectorLookupTable;
}

export interface QueryCollectorDataByProductAndAssetRequest {
  appId: Long;
  assetId: Long;
}

export interface QueryCollectorDataByProductAndAssetResponse {
  collectorData?: CollectorData;
}

export interface QueryAuctionMappingForAppAndAssetRequest {
  appId: Long;
  assetId: Long;
}

export interface QueryAuctionMappingForAppAndAssetResponse {
  assetIdToAuctionLookupTable?: AssetIdToAuctionLookupTable;
}

export interface QueryNetFeeCollectedForAppAndAssetRequest {
  appId: Long;
  assetId: Long;
}

export interface QueryNetFeeCollectedForAppAndAssetResponse {
  assetIdToFeeCollected?: AssetIdToFeeCollected;
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

function createBaseQueryCollectorLookupByProductRequest(): QueryCollectorLookupByProductRequest {
  return { appId: Long.UZERO };
}

export const QueryCollectorLookupByProductRequest = {
  encode(
    message: QueryCollectorLookupByProductRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCollectorLookupByProductRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectorLookupByProductRequest();
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

  fromJSON(object: any): QueryCollectorLookupByProductRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryCollectorLookupByProductRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryCollectorLookupByProductRequest>, I>
  >(object: I): QueryCollectorLookupByProductRequest {
    const message = createBaseQueryCollectorLookupByProductRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryCollectorLookupByProductResponse(): QueryCollectorLookupByProductResponse {
  return { collectorLookup: [] };
}

export const QueryCollectorLookupByProductResponse = {
  encode(
    message: QueryCollectorLookupByProductResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.collectorLookup) {
      CollectorLookupTable.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCollectorLookupByProductResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectorLookupByProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectorLookup.push(
            CollectorLookupTable.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollectorLookupByProductResponse {
    return {
      collectorLookup: Array.isArray(object?.collectorLookup)
        ? object.collectorLookup.map((e: any) =>
            CollectorLookupTable.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: QueryCollectorLookupByProductResponse): unknown {
    const obj: any = {};
    if (message.collectorLookup) {
      obj.collectorLookup = message.collectorLookup.map((e) =>
        e ? CollectorLookupTable.toJSON(e) : undefined
      );
    } else {
      obj.collectorLookup = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryCollectorLookupByProductResponse>, I>
  >(object: I): QueryCollectorLookupByProductResponse {
    const message = createBaseQueryCollectorLookupByProductResponse();
    message.collectorLookup =
      object.collectorLookup?.map((e) => CollectorLookupTable.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseQueryCollectorLookupByProductAndAssetRequest(): QueryCollectorLookupByProductAndAssetRequest {
  return { appId: Long.UZERO, assetId: Long.UZERO };
}

export const QueryCollectorLookupByProductAndAssetRequest = {
  encode(
    message: QueryCollectorLookupByProductAndAssetRequest,
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
  ): QueryCollectorLookupByProductAndAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectorLookupByProductAndAssetRequest();
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

  fromJSON(object: any): QueryCollectorLookupByProductAndAssetRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryCollectorLookupByProductAndAssetRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryCollectorLookupByProductAndAssetRequest>,
      I
    >
  >(object: I): QueryCollectorLookupByProductAndAssetRequest {
    const message = createBaseQueryCollectorLookupByProductAndAssetRequest();
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

function createBaseQueryCollectorLookupByProductAndAssetResponse(): QueryCollectorLookupByProductAndAssetResponse {
  return { collectorLookup: undefined };
}

export const QueryCollectorLookupByProductAndAssetResponse = {
  encode(
    message: QueryCollectorLookupByProductAndAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectorLookup !== undefined) {
      CollectorLookupTable.encode(
        message.collectorLookup,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCollectorLookupByProductAndAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectorLookupByProductAndAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectorLookup = CollectorLookupTable.decode(
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

  fromJSON(object: any): QueryCollectorLookupByProductAndAssetResponse {
    return {
      collectorLookup: isSet(object.collectorLookup)
        ? CollectorLookupTable.fromJSON(object.collectorLookup)
        : undefined,
    };
  },

  toJSON(message: QueryCollectorLookupByProductAndAssetResponse): unknown {
    const obj: any = {};
    message.collectorLookup !== undefined &&
      (obj.collectorLookup = message.collectorLookup
        ? CollectorLookupTable.toJSON(message.collectorLookup)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryCollectorLookupByProductAndAssetResponse>,
      I
    >
  >(object: I): QueryCollectorLookupByProductAndAssetResponse {
    const message = createBaseQueryCollectorLookupByProductAndAssetResponse();
    message.collectorLookup =
      object.collectorLookup !== undefined && object.collectorLookup !== null
        ? CollectorLookupTable.fromPartial(object.collectorLookup)
        : undefined;
    return message;
  },
};

function createBaseQueryCollectorDataByProductAndAssetRequest(): QueryCollectorDataByProductAndAssetRequest {
  return { appId: Long.UZERO, assetId: Long.UZERO };
}

export const QueryCollectorDataByProductAndAssetRequest = {
  encode(
    message: QueryCollectorDataByProductAndAssetRequest,
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
  ): QueryCollectorDataByProductAndAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectorDataByProductAndAssetRequest();
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

  fromJSON(object: any): QueryCollectorDataByProductAndAssetRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryCollectorDataByProductAndAssetRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryCollectorDataByProductAndAssetRequest>, I>
  >(object: I): QueryCollectorDataByProductAndAssetRequest {
    const message = createBaseQueryCollectorDataByProductAndAssetRequest();
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

function createBaseQueryCollectorDataByProductAndAssetResponse(): QueryCollectorDataByProductAndAssetResponse {
  return { collectorData: undefined };
}

export const QueryCollectorDataByProductAndAssetResponse = {
  encode(
    message: QueryCollectorDataByProductAndAssetResponse,
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
  ): QueryCollectorDataByProductAndAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectorDataByProductAndAssetResponse();
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

  fromJSON(object: any): QueryCollectorDataByProductAndAssetResponse {
    return {
      collectorData: isSet(object.collectorData)
        ? CollectorData.fromJSON(object.collectorData)
        : undefined,
    };
  },

  toJSON(message: QueryCollectorDataByProductAndAssetResponse): unknown {
    const obj: any = {};
    message.collectorData !== undefined &&
      (obj.collectorData = message.collectorData
        ? CollectorData.toJSON(message.collectorData)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryCollectorDataByProductAndAssetResponse>, I>
  >(object: I): QueryCollectorDataByProductAndAssetResponse {
    const message = createBaseQueryCollectorDataByProductAndAssetResponse();
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
      AssetIdToAuctionLookupTable.encode(
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
            AssetIdToAuctionLookupTable.decode(reader, reader.uint32());
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
        ? AssetIdToAuctionLookupTable.fromJSON(
            object.assetIdToAuctionLookupTable
          )
        : undefined,
    };
  },

  toJSON(message: QueryAuctionMappingForAppAndAssetResponse): unknown {
    const obj: any = {};
    message.assetIdToAuctionLookupTable !== undefined &&
      (obj.assetIdToAuctionLookupTable = message.assetIdToAuctionLookupTable
        ? AssetIdToAuctionLookupTable.toJSON(
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
        ? AssetIdToAuctionLookupTable.fromPartial(
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
      AssetIdToFeeCollected.encode(
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
          message.assetIdToFeeCollected = AssetIdToFeeCollected.decode(
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
        ? AssetIdToFeeCollected.fromJSON(object.assetIdToFeeCollected)
        : undefined,
    };
  },

  toJSON(message: QueryNetFeeCollectedForAppAndAssetResponse): unknown {
    const obj: any = {};
    message.assetIdToFeeCollected !== undefined &&
      (obj.assetIdToFeeCollected = message.assetIdToFeeCollected
        ? AssetIdToFeeCollected.toJSON(message.assetIdToFeeCollected)
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
        ? AssetIdToFeeCollected.fromPartial(object.assetIdToFeeCollected)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  QueryCollectorLookupByProduct(
    request: QueryCollectorLookupByProductRequest
  ): Promise<QueryCollectorLookupByProductResponse>;
  QueryCollectorLookupByProductAndAsset(
    request: QueryCollectorLookupByProductAndAssetRequest
  ): Promise<QueryCollectorLookupByProductAndAssetResponse>;
  QueryCollectorDataByProductAndAsset(
    request: QueryCollectorDataByProductAndAssetRequest
  ): Promise<QueryCollectorDataByProductAndAssetResponse>;
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
    this.QueryCollectorLookupByProduct =
      this.QueryCollectorLookupByProduct.bind(this);
    this.QueryCollectorLookupByProductAndAsset =
      this.QueryCollectorLookupByProductAndAsset.bind(this);
    this.QueryCollectorDataByProductAndAsset =
      this.QueryCollectorDataByProductAndAsset.bind(this);
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

  QueryCollectorLookupByProduct(
    request: QueryCollectorLookupByProductRequest
  ): Promise<QueryCollectorLookupByProductResponse> {
    const data = QueryCollectorLookupByProductRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.collector.v1beta1.Query",
      "QueryCollectorLookupByProduct",
      data
    );
    return promise.then((data) =>
      QueryCollectorLookupByProductResponse.decode(new _m0.Reader(data))
    );
  }

  QueryCollectorLookupByProductAndAsset(
    request: QueryCollectorLookupByProductAndAssetRequest
  ): Promise<QueryCollectorLookupByProductAndAssetResponse> {
    const data =
      QueryCollectorLookupByProductAndAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.collector.v1beta1.Query",
      "QueryCollectorLookupByProductAndAsset",
      data
    );
    return promise.then((data) =>
      QueryCollectorLookupByProductAndAssetResponse.decode(new _m0.Reader(data))
    );
  }

  QueryCollectorDataByProductAndAsset(
    request: QueryCollectorDataByProductAndAssetRequest
  ): Promise<QueryCollectorDataByProductAndAssetResponse> {
    const data =
      QueryCollectorDataByProductAndAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.collector.v1beta1.Query",
      "QueryCollectorDataByProductAndAsset",
      data
    );
    return promise.then((data) =>
      QueryCollectorDataByProductAndAssetResponse.decode(new _m0.Reader(data))
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
