/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  Locker,
  TokenToLockerMapping,
  LockedDepositedAmountDataMap,
} from "./comdex/locker/v1beta1/locker";
import { Params } from "./comdex/locker/v1beta1/params";
import { Asset } from "./comdex/asset/v1beta1/asset";

export const protobufPackage = "comdex.locker.v1beta1";

export interface QueryLockerInfoRequest {
  id: string;
}

export interface QueryLockerInfoResponse {
  lockerInfo?: Locker;
}

export interface QueryLockersByProductToAssetIDRequest {
  productId: Long;
  assetId: Long;
}

export interface QueryLockersByProductToAssetIDResponse {
  lockerIds: string[];
}

export interface QueryLockerInfoByProductIDRequest {
  productId: Long;
}

export interface QueryLockerInfoByProductIDResponse {
  lockerIds: string[];
}

export interface QueryTotalDepositByProductAssetIDRequest {
  productId: Long;
  assetId: Long;
  owner: string;
}

export interface QueryTotalDepositByProductAssetIDResponse {
  totalDeposit: Long;
}

export interface QueryOwnerLockerByProductIDRequest {
  productId: Long;
  owner: string;
}

export interface QueryOwnerLockerByProductIDResponse {
  lockerIds: string[];
}

export interface QueryOwnerLockerOfAllProductRequest {
  owner: string;
}

export interface QueryOwnerLockerOfAllProductResponse {
  lockerIds: string[];
}

export interface QueryOwnerLockerByProductToAssetIDRequest {
  productId: Long;
  assetId: Long;
  owner: string;
}

export interface QueryOwnerLockerByProductToAssetIDResponse {
  lockerInfo: Locker[];
}

export interface QueryLockerCountByProductIDRequest {
  productId: Long;
}

export interface QueryLockerCountByProductIDResponse {
  totalCount: Long;
}

export interface QueryLockerCountByProductToAssetIDRequest {
  productId: Long;
  assetId: Long;
}

export interface QueryLockerCountByProductToAssetIDResponse {
  totalCount: Long;
}

export interface QueryWhiteListedAssetIDsByProductIDRequest {
  productId: Long;
}

export interface QueryWhiteListedAssetIDsByProductIDResponse {
  assetIds: Long[];
}

export interface QueryWhiteListedAssetByAllProductRequest {}

export interface QueryWhiteListedAssetByAllProductResponse {
  productToAllAsset: ProductToAllAsset[];
}

export interface ProductToAllAsset {
  productId: Long;
  assets: Asset[];
}

export interface QueryParamsRequest {}

export interface QueryParamsResponse {
  params?: Params;
}

export interface QueryLockerLookupTableByAppRequest {
  appId: Long;
}

export interface QueryLockerLookupTableByAppResponse {
  tokenToLockerMapping: TokenToLockerMapping[];
}

export interface QueryLockerLookupTableByAppAndAssetIdRequest {
  appId: Long;
  assetId: Long;
}

export interface QueryLockerLookupTableByAppAndAssetIdResponse {
  tokenToLockerMapping?: TokenToLockerMapping;
}

export interface QueryLockerTotalDepositedByAppRequest {
  appId: Long;
}

export interface QueryLockerTotalDepositedByAppResponse {
  lockedDepositedAmountDataMap: LockedDepositedAmountDataMap[];
}

function createBaseQueryLockerInfoRequest(): QueryLockerInfoRequest {
  return { id: "" };
}

export const QueryLockerInfoRequest = {
  encode(
    message: QueryLockerInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockerInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLockerInfoRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: QueryLockerInfoRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockerInfoRequest>, I>>(
    object: I
  ): QueryLockerInfoRequest {
    const message = createBaseQueryLockerInfoRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryLockerInfoResponse(): QueryLockerInfoResponse {
  return { lockerInfo: undefined };
}

export const QueryLockerInfoResponse = {
  encode(
    message: QueryLockerInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lockerInfo !== undefined) {
      Locker.encode(message.lockerInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockerInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockerInfo = Locker.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLockerInfoResponse {
    return {
      lockerInfo: isSet(object.lockerInfo)
        ? Locker.fromJSON(object.lockerInfo)
        : undefined,
    };
  },

  toJSON(message: QueryLockerInfoResponse): unknown {
    const obj: any = {};
    message.lockerInfo !== undefined &&
      (obj.lockerInfo = message.lockerInfo
        ? Locker.toJSON(message.lockerInfo)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockerInfoResponse>, I>>(
    object: I
  ): QueryLockerInfoResponse {
    const message = createBaseQueryLockerInfoResponse();
    message.lockerInfo =
      object.lockerInfo !== undefined && object.lockerInfo !== null
        ? Locker.fromPartial(object.lockerInfo)
        : undefined;
    return message;
  },
};

function createBaseQueryLockersByProductToAssetIDRequest(): QueryLockersByProductToAssetIDRequest {
  return { productId: Long.UZERO, assetId: Long.UZERO };
}

export const QueryLockersByProductToAssetIDRequest = {
  encode(
    message: QueryLockersByProductToAssetIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.productId.isZero()) {
      writer.uint32(8).uint64(message.productId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockersByProductToAssetIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockersByProductToAssetIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.uint64() as Long;
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

  fromJSON(object: any): QueryLockersByProductToAssetIDRequest {
    return {
      productId: isSet(object.productId)
        ? Long.fromValue(object.productId)
        : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryLockersByProductToAssetIDRequest): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryLockersByProductToAssetIDRequest>, I>
  >(object: I): QueryLockersByProductToAssetIDRequest {
    const message = createBaseQueryLockersByProductToAssetIDRequest();
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? Long.fromValue(object.productId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryLockersByProductToAssetIDResponse(): QueryLockersByProductToAssetIDResponse {
  return { lockerIds: [] };
}

export const QueryLockersByProductToAssetIDResponse = {
  encode(
    message: QueryLockersByProductToAssetIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.lockerIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockersByProductToAssetIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockersByProductToAssetIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockerIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLockersByProductToAssetIDResponse {
    return {
      lockerIds: Array.isArray(object?.lockerIds)
        ? object.lockerIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: QueryLockersByProductToAssetIDResponse): unknown {
    const obj: any = {};
    if (message.lockerIds) {
      obj.lockerIds = message.lockerIds.map((e) => e);
    } else {
      obj.lockerIds = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryLockersByProductToAssetIDResponse>, I>
  >(object: I): QueryLockersByProductToAssetIDResponse {
    const message = createBaseQueryLockersByProductToAssetIDResponse();
    message.lockerIds = object.lockerIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryLockerInfoByProductIDRequest(): QueryLockerInfoByProductIDRequest {
  return { productId: Long.UZERO };
}

export const QueryLockerInfoByProductIDRequest = {
  encode(
    message: QueryLockerInfoByProductIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.productId.isZero()) {
      writer.uint32(8).uint64(message.productId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockerInfoByProductIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerInfoByProductIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLockerInfoByProductIDRequest {
    return {
      productId: isSet(object.productId)
        ? Long.fromValue(object.productId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryLockerInfoByProductIDRequest): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryLockerInfoByProductIDRequest>, I>
  >(object: I): QueryLockerInfoByProductIDRequest {
    const message = createBaseQueryLockerInfoByProductIDRequest();
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? Long.fromValue(object.productId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryLockerInfoByProductIDResponse(): QueryLockerInfoByProductIDResponse {
  return { lockerIds: [] };
}

export const QueryLockerInfoByProductIDResponse = {
  encode(
    message: QueryLockerInfoByProductIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.lockerIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockerInfoByProductIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerInfoByProductIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockerIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLockerInfoByProductIDResponse {
    return {
      lockerIds: Array.isArray(object?.lockerIds)
        ? object.lockerIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: QueryLockerInfoByProductIDResponse): unknown {
    const obj: any = {};
    if (message.lockerIds) {
      obj.lockerIds = message.lockerIds.map((e) => e);
    } else {
      obj.lockerIds = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryLockerInfoByProductIDResponse>, I>
  >(object: I): QueryLockerInfoByProductIDResponse {
    const message = createBaseQueryLockerInfoByProductIDResponse();
    message.lockerIds = object.lockerIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryTotalDepositByProductAssetIDRequest(): QueryTotalDepositByProductAssetIDRequest {
  return { productId: Long.UZERO, assetId: Long.UZERO, owner: "" };
}

export const QueryTotalDepositByProductAssetIDRequest = {
  encode(
    message: QueryTotalDepositByProductAssetIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.productId.isZero()) {
      writer.uint32(8).uint64(message.productId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalDepositByProductAssetIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDepositByProductAssetIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.uint64() as Long;
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalDepositByProductAssetIDRequest {
    return {
      productId: isSet(object.productId)
        ? Long.fromValue(object.productId)
        : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: QueryTotalDepositByProductAssetIDRequest): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryTotalDepositByProductAssetIDRequest>, I>
  >(object: I): QueryTotalDepositByProductAssetIDRequest {
    const message = createBaseQueryTotalDepositByProductAssetIDRequest();
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? Long.fromValue(object.productId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseQueryTotalDepositByProductAssetIDResponse(): QueryTotalDepositByProductAssetIDResponse {
  return { totalDeposit: Long.UZERO };
}

export const QueryTotalDepositByProductAssetIDResponse = {
  encode(
    message: QueryTotalDepositByProductAssetIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.totalDeposit.isZero()) {
      writer.uint32(8).uint64(message.totalDeposit);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalDepositByProductAssetIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDepositByProductAssetIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalDeposit = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalDepositByProductAssetIDResponse {
    return {
      totalDeposit: isSet(object.totalDeposit)
        ? Long.fromValue(object.totalDeposit)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryTotalDepositByProductAssetIDResponse): unknown {
    const obj: any = {};
    message.totalDeposit !== undefined &&
      (obj.totalDeposit = (message.totalDeposit || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryTotalDepositByProductAssetIDResponse>, I>
  >(object: I): QueryTotalDepositByProductAssetIDResponse {
    const message = createBaseQueryTotalDepositByProductAssetIDResponse();
    message.totalDeposit =
      object.totalDeposit !== undefined && object.totalDeposit !== null
        ? Long.fromValue(object.totalDeposit)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryOwnerLockerByProductIDRequest(): QueryOwnerLockerByProductIDRequest {
  return { productId: Long.UZERO, owner: "" };
}

export const QueryOwnerLockerByProductIDRequest = {
  encode(
    message: QueryOwnerLockerByProductIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.productId.isZero()) {
      writer.uint32(8).uint64(message.productId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOwnerLockerByProductIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerLockerByProductIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.uint64() as Long;
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerLockerByProductIDRequest {
    return {
      productId: isSet(object.productId)
        ? Long.fromValue(object.productId)
        : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: QueryOwnerLockerByProductIDRequest): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryOwnerLockerByProductIDRequest>, I>
  >(object: I): QueryOwnerLockerByProductIDRequest {
    const message = createBaseQueryOwnerLockerByProductIDRequest();
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? Long.fromValue(object.productId)
        : Long.UZERO;
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseQueryOwnerLockerByProductIDResponse(): QueryOwnerLockerByProductIDResponse {
  return { lockerIds: [] };
}

export const QueryOwnerLockerByProductIDResponse = {
  encode(
    message: QueryOwnerLockerByProductIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.lockerIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOwnerLockerByProductIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerLockerByProductIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockerIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerLockerByProductIDResponse {
    return {
      lockerIds: Array.isArray(object?.lockerIds)
        ? object.lockerIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: QueryOwnerLockerByProductIDResponse): unknown {
    const obj: any = {};
    if (message.lockerIds) {
      obj.lockerIds = message.lockerIds.map((e) => e);
    } else {
      obj.lockerIds = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryOwnerLockerByProductIDResponse>, I>
  >(object: I): QueryOwnerLockerByProductIDResponse {
    const message = createBaseQueryOwnerLockerByProductIDResponse();
    message.lockerIds = object.lockerIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryOwnerLockerOfAllProductRequest(): QueryOwnerLockerOfAllProductRequest {
  return { owner: "" };
}

export const QueryOwnerLockerOfAllProductRequest = {
  encode(
    message: QueryOwnerLockerOfAllProductRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOwnerLockerOfAllProductRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerLockerOfAllProductRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerLockerOfAllProductRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: QueryOwnerLockerOfAllProductRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryOwnerLockerOfAllProductRequest>, I>
  >(object: I): QueryOwnerLockerOfAllProductRequest {
    const message = createBaseQueryOwnerLockerOfAllProductRequest();
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseQueryOwnerLockerOfAllProductResponse(): QueryOwnerLockerOfAllProductResponse {
  return { lockerIds: [] };
}

export const QueryOwnerLockerOfAllProductResponse = {
  encode(
    message: QueryOwnerLockerOfAllProductResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.lockerIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOwnerLockerOfAllProductResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerLockerOfAllProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockerIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerLockerOfAllProductResponse {
    return {
      lockerIds: Array.isArray(object?.lockerIds)
        ? object.lockerIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: QueryOwnerLockerOfAllProductResponse): unknown {
    const obj: any = {};
    if (message.lockerIds) {
      obj.lockerIds = message.lockerIds.map((e) => e);
    } else {
      obj.lockerIds = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryOwnerLockerOfAllProductResponse>, I>
  >(object: I): QueryOwnerLockerOfAllProductResponse {
    const message = createBaseQueryOwnerLockerOfAllProductResponse();
    message.lockerIds = object.lockerIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryOwnerLockerByProductToAssetIDRequest(): QueryOwnerLockerByProductToAssetIDRequest {
  return { productId: Long.UZERO, assetId: Long.UZERO, owner: "" };
}

export const QueryOwnerLockerByProductToAssetIDRequest = {
  encode(
    message: QueryOwnerLockerByProductToAssetIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.productId.isZero()) {
      writer.uint32(8).uint64(message.productId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOwnerLockerByProductToAssetIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerLockerByProductToAssetIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.uint64() as Long;
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerLockerByProductToAssetIDRequest {
    return {
      productId: isSet(object.productId)
        ? Long.fromValue(object.productId)
        : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: QueryOwnerLockerByProductToAssetIDRequest): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryOwnerLockerByProductToAssetIDRequest>, I>
  >(object: I): QueryOwnerLockerByProductToAssetIDRequest {
    const message = createBaseQueryOwnerLockerByProductToAssetIDRequest();
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? Long.fromValue(object.productId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseQueryOwnerLockerByProductToAssetIDResponse(): QueryOwnerLockerByProductToAssetIDResponse {
  return { lockerInfo: [] };
}

export const QueryOwnerLockerByProductToAssetIDResponse = {
  encode(
    message: QueryOwnerLockerByProductToAssetIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.lockerInfo) {
      Locker.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOwnerLockerByProductToAssetIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerLockerByProductToAssetIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockerInfo.push(Locker.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerLockerByProductToAssetIDResponse {
    return {
      lockerInfo: Array.isArray(object?.lockerInfo)
        ? object.lockerInfo.map((e: any) => Locker.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryOwnerLockerByProductToAssetIDResponse): unknown {
    const obj: any = {};
    if (message.lockerInfo) {
      obj.lockerInfo = message.lockerInfo.map((e) =>
        e ? Locker.toJSON(e) : undefined
      );
    } else {
      obj.lockerInfo = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryOwnerLockerByProductToAssetIDResponse>, I>
  >(object: I): QueryOwnerLockerByProductToAssetIDResponse {
    const message = createBaseQueryOwnerLockerByProductToAssetIDResponse();
    message.lockerInfo =
      object.lockerInfo?.map((e) => Locker.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryLockerCountByProductIDRequest(): QueryLockerCountByProductIDRequest {
  return { productId: Long.UZERO };
}

export const QueryLockerCountByProductIDRequest = {
  encode(
    message: QueryLockerCountByProductIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.productId.isZero()) {
      writer.uint32(8).uint64(message.productId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockerCountByProductIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerCountByProductIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLockerCountByProductIDRequest {
    return {
      productId: isSet(object.productId)
        ? Long.fromValue(object.productId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryLockerCountByProductIDRequest): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryLockerCountByProductIDRequest>, I>
  >(object: I): QueryLockerCountByProductIDRequest {
    const message = createBaseQueryLockerCountByProductIDRequest();
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? Long.fromValue(object.productId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryLockerCountByProductIDResponse(): QueryLockerCountByProductIDResponse {
  return { totalCount: Long.UZERO };
}

export const QueryLockerCountByProductIDResponse = {
  encode(
    message: QueryLockerCountByProductIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.totalCount.isZero()) {
      writer.uint32(8).uint64(message.totalCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockerCountByProductIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerCountByProductIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCount = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLockerCountByProductIDResponse {
    return {
      totalCount: isSet(object.totalCount)
        ? Long.fromValue(object.totalCount)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryLockerCountByProductIDResponse): unknown {
    const obj: any = {};
    message.totalCount !== undefined &&
      (obj.totalCount = (message.totalCount || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryLockerCountByProductIDResponse>, I>
  >(object: I): QueryLockerCountByProductIDResponse {
    const message = createBaseQueryLockerCountByProductIDResponse();
    message.totalCount =
      object.totalCount !== undefined && object.totalCount !== null
        ? Long.fromValue(object.totalCount)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryLockerCountByProductToAssetIDRequest(): QueryLockerCountByProductToAssetIDRequest {
  return { productId: Long.UZERO, assetId: Long.UZERO };
}

export const QueryLockerCountByProductToAssetIDRequest = {
  encode(
    message: QueryLockerCountByProductToAssetIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.productId.isZero()) {
      writer.uint32(8).uint64(message.productId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockerCountByProductToAssetIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerCountByProductToAssetIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.uint64() as Long;
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

  fromJSON(object: any): QueryLockerCountByProductToAssetIDRequest {
    return {
      productId: isSet(object.productId)
        ? Long.fromValue(object.productId)
        : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryLockerCountByProductToAssetIDRequest): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryLockerCountByProductToAssetIDRequest>, I>
  >(object: I): QueryLockerCountByProductToAssetIDRequest {
    const message = createBaseQueryLockerCountByProductToAssetIDRequest();
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? Long.fromValue(object.productId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryLockerCountByProductToAssetIDResponse(): QueryLockerCountByProductToAssetIDResponse {
  return { totalCount: Long.UZERO };
}

export const QueryLockerCountByProductToAssetIDResponse = {
  encode(
    message: QueryLockerCountByProductToAssetIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.totalCount.isZero()) {
      writer.uint32(8).uint64(message.totalCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockerCountByProductToAssetIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerCountByProductToAssetIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCount = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLockerCountByProductToAssetIDResponse {
    return {
      totalCount: isSet(object.totalCount)
        ? Long.fromValue(object.totalCount)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryLockerCountByProductToAssetIDResponse): unknown {
    const obj: any = {};
    message.totalCount !== undefined &&
      (obj.totalCount = (message.totalCount || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryLockerCountByProductToAssetIDResponse>, I>
  >(object: I): QueryLockerCountByProductToAssetIDResponse {
    const message = createBaseQueryLockerCountByProductToAssetIDResponse();
    message.totalCount =
      object.totalCount !== undefined && object.totalCount !== null
        ? Long.fromValue(object.totalCount)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryWhiteListedAssetIDsByProductIDRequest(): QueryWhiteListedAssetIDsByProductIDRequest {
  return { productId: Long.UZERO };
}

export const QueryWhiteListedAssetIDsByProductIDRequest = {
  encode(
    message: QueryWhiteListedAssetIDsByProductIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.productId.isZero()) {
      writer.uint32(8).uint64(message.productId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryWhiteListedAssetIDsByProductIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhiteListedAssetIDsByProductIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryWhiteListedAssetIDsByProductIDRequest {
    return {
      productId: isSet(object.productId)
        ? Long.fromValue(object.productId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryWhiteListedAssetIDsByProductIDRequest): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryWhiteListedAssetIDsByProductIDRequest>, I>
  >(object: I): QueryWhiteListedAssetIDsByProductIDRequest {
    const message = createBaseQueryWhiteListedAssetIDsByProductIDRequest();
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? Long.fromValue(object.productId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryWhiteListedAssetIDsByProductIDResponse(): QueryWhiteListedAssetIDsByProductIDResponse {
  return { assetIds: [] };
}

export const QueryWhiteListedAssetIDsByProductIDResponse = {
  encode(
    message: QueryWhiteListedAssetIDsByProductIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.assetIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryWhiteListedAssetIDsByProductIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhiteListedAssetIDsByProductIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.assetIds.push(reader.uint64() as Long);
            }
          } else {
            message.assetIds.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryWhiteListedAssetIDsByProductIDResponse {
    return {
      assetIds: Array.isArray(object?.assetIds)
        ? object.assetIds.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: QueryWhiteListedAssetIDsByProductIDResponse): unknown {
    const obj: any = {};
    if (message.assetIds) {
      obj.assetIds = message.assetIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.assetIds = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryWhiteListedAssetIDsByProductIDResponse>, I>
  >(object: I): QueryWhiteListedAssetIDsByProductIDResponse {
    const message = createBaseQueryWhiteListedAssetIDsByProductIDResponse();
    message.assetIds = object.assetIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseQueryWhiteListedAssetByAllProductRequest(): QueryWhiteListedAssetByAllProductRequest {
  return {};
}

export const QueryWhiteListedAssetByAllProductRequest = {
  encode(
    _: QueryWhiteListedAssetByAllProductRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryWhiteListedAssetByAllProductRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhiteListedAssetByAllProductRequest();
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

  fromJSON(_: any): QueryWhiteListedAssetByAllProductRequest {
    return {};
  },

  toJSON(_: QueryWhiteListedAssetByAllProductRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryWhiteListedAssetByAllProductRequest>, I>
  >(_: I): QueryWhiteListedAssetByAllProductRequest {
    const message = createBaseQueryWhiteListedAssetByAllProductRequest();
    return message;
  },
};

function createBaseQueryWhiteListedAssetByAllProductResponse(): QueryWhiteListedAssetByAllProductResponse {
  return { productToAllAsset: [] };
}

export const QueryWhiteListedAssetByAllProductResponse = {
  encode(
    message: QueryWhiteListedAssetByAllProductResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.productToAllAsset) {
      ProductToAllAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryWhiteListedAssetByAllProductResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhiteListedAssetByAllProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productToAllAsset.push(
            ProductToAllAsset.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryWhiteListedAssetByAllProductResponse {
    return {
      productToAllAsset: Array.isArray(object?.productToAllAsset)
        ? object.productToAllAsset.map((e: any) =>
            ProductToAllAsset.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: QueryWhiteListedAssetByAllProductResponse): unknown {
    const obj: any = {};
    if (message.productToAllAsset) {
      obj.productToAllAsset = message.productToAllAsset.map((e) =>
        e ? ProductToAllAsset.toJSON(e) : undefined
      );
    } else {
      obj.productToAllAsset = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryWhiteListedAssetByAllProductResponse>, I>
  >(object: I): QueryWhiteListedAssetByAllProductResponse {
    const message = createBaseQueryWhiteListedAssetByAllProductResponse();
    message.productToAllAsset =
      object.productToAllAsset?.map((e) => ProductToAllAsset.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseProductToAllAsset(): ProductToAllAsset {
  return { productId: Long.UZERO, assets: [] };
}

export const ProductToAllAsset = {
  encode(
    message: ProductToAllAsset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.productId.isZero()) {
      writer.uint32(8).uint64(message.productId);
    }
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProductToAllAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductToAllAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.uint64() as Long;
          break;
        case 2:
          message.assets.push(Asset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProductToAllAsset {
    return {
      productId: isSet(object.productId)
        ? Long.fromValue(object.productId)
        : Long.UZERO,
      assets: Array.isArray(object?.assets)
        ? object.assets.map((e: any) => Asset.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProductToAllAsset): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    if (message.assets) {
      obj.assets = message.assets.map((e) => (e ? Asset.toJSON(e) : undefined));
    } else {
      obj.assets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProductToAllAsset>, I>>(
    object: I
  ): ProductToAllAsset {
    const message = createBaseProductToAllAsset();
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? Long.fromValue(object.productId)
        : Long.UZERO;
    message.assets = object.assets?.map((e) => Asset.fromPartial(e)) || [];
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

function createBaseQueryLockerLookupTableByAppRequest(): QueryLockerLookupTableByAppRequest {
  return { appId: Long.UZERO };
}

export const QueryLockerLookupTableByAppRequest = {
  encode(
    message: QueryLockerLookupTableByAppRequest,
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
  ): QueryLockerLookupTableByAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerLookupTableByAppRequest();
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

  fromJSON(object: any): QueryLockerLookupTableByAppRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryLockerLookupTableByAppRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryLockerLookupTableByAppRequest>, I>
  >(object: I): QueryLockerLookupTableByAppRequest {
    const message = createBaseQueryLockerLookupTableByAppRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryLockerLookupTableByAppResponse(): QueryLockerLookupTableByAppResponse {
  return { tokenToLockerMapping: [] };
}

export const QueryLockerLookupTableByAppResponse = {
  encode(
    message: QueryLockerLookupTableByAppResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tokenToLockerMapping) {
      TokenToLockerMapping.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockerLookupTableByAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerLookupTableByAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenToLockerMapping.push(
            TokenToLockerMapping.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLockerLookupTableByAppResponse {
    return {
      tokenToLockerMapping: Array.isArray(object?.tokenToLockerMapping)
        ? object.tokenToLockerMapping.map((e: any) =>
            TokenToLockerMapping.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: QueryLockerLookupTableByAppResponse): unknown {
    const obj: any = {};
    if (message.tokenToLockerMapping) {
      obj.tokenToLockerMapping = message.tokenToLockerMapping.map((e) =>
        e ? TokenToLockerMapping.toJSON(e) : undefined
      );
    } else {
      obj.tokenToLockerMapping = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryLockerLookupTableByAppResponse>, I>
  >(object: I): QueryLockerLookupTableByAppResponse {
    const message = createBaseQueryLockerLookupTableByAppResponse();
    message.tokenToLockerMapping =
      object.tokenToLockerMapping?.map((e) =>
        TokenToLockerMapping.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseQueryLockerLookupTableByAppAndAssetIdRequest(): QueryLockerLookupTableByAppAndAssetIdRequest {
  return { appId: Long.UZERO, assetId: Long.UZERO };
}

export const QueryLockerLookupTableByAppAndAssetIdRequest = {
  encode(
    message: QueryLockerLookupTableByAppAndAssetIdRequest,
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
  ): QueryLockerLookupTableByAppAndAssetIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerLookupTableByAppAndAssetIdRequest();
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

  fromJSON(object: any): QueryLockerLookupTableByAppAndAssetIdRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryLockerLookupTableByAppAndAssetIdRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryLockerLookupTableByAppAndAssetIdRequest>,
      I
    >
  >(object: I): QueryLockerLookupTableByAppAndAssetIdRequest {
    const message = createBaseQueryLockerLookupTableByAppAndAssetIdRequest();
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

function createBaseQueryLockerLookupTableByAppAndAssetIdResponse(): QueryLockerLookupTableByAppAndAssetIdResponse {
  return { tokenToLockerMapping: undefined };
}

export const QueryLockerLookupTableByAppAndAssetIdResponse = {
  encode(
    message: QueryLockerLookupTableByAppAndAssetIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenToLockerMapping !== undefined) {
      TokenToLockerMapping.encode(
        message.tokenToLockerMapping,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockerLookupTableByAppAndAssetIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerLookupTableByAppAndAssetIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenToLockerMapping = TokenToLockerMapping.decode(
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

  fromJSON(object: any): QueryLockerLookupTableByAppAndAssetIdResponse {
    return {
      tokenToLockerMapping: isSet(object.tokenToLockerMapping)
        ? TokenToLockerMapping.fromJSON(object.tokenToLockerMapping)
        : undefined,
    };
  },

  toJSON(message: QueryLockerLookupTableByAppAndAssetIdResponse): unknown {
    const obj: any = {};
    message.tokenToLockerMapping !== undefined &&
      (obj.tokenToLockerMapping = message.tokenToLockerMapping
        ? TokenToLockerMapping.toJSON(message.tokenToLockerMapping)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryLockerLookupTableByAppAndAssetIdResponse>,
      I
    >
  >(object: I): QueryLockerLookupTableByAppAndAssetIdResponse {
    const message = createBaseQueryLockerLookupTableByAppAndAssetIdResponse();
    message.tokenToLockerMapping =
      object.tokenToLockerMapping !== undefined &&
      object.tokenToLockerMapping !== null
        ? TokenToLockerMapping.fromPartial(object.tokenToLockerMapping)
        : undefined;
    return message;
  },
};

function createBaseQueryLockerTotalDepositedByAppRequest(): QueryLockerTotalDepositedByAppRequest {
  return { appId: Long.UZERO };
}

export const QueryLockerTotalDepositedByAppRequest = {
  encode(
    message: QueryLockerTotalDepositedByAppRequest,
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
  ): QueryLockerTotalDepositedByAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerTotalDepositedByAppRequest();
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

  fromJSON(object: any): QueryLockerTotalDepositedByAppRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryLockerTotalDepositedByAppRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryLockerTotalDepositedByAppRequest>, I>
  >(object: I): QueryLockerTotalDepositedByAppRequest {
    const message = createBaseQueryLockerTotalDepositedByAppRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryLockerTotalDepositedByAppResponse(): QueryLockerTotalDepositedByAppResponse {
  return { lockedDepositedAmountDataMap: [] };
}

export const QueryLockerTotalDepositedByAppResponse = {
  encode(
    message: QueryLockerTotalDepositedByAppResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.lockedDepositedAmountDataMap) {
      LockedDepositedAmountDataMap.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockerTotalDepositedByAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerTotalDepositedByAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockedDepositedAmountDataMap.push(
            LockedDepositedAmountDataMap.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLockerTotalDepositedByAppResponse {
    return {
      lockedDepositedAmountDataMap: Array.isArray(
        object?.lockedDepositedAmountDataMap
      )
        ? object.lockedDepositedAmountDataMap.map((e: any) =>
            LockedDepositedAmountDataMap.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: QueryLockerTotalDepositedByAppResponse): unknown {
    const obj: any = {};
    if (message.lockedDepositedAmountDataMap) {
      obj.lockedDepositedAmountDataMap =
        message.lockedDepositedAmountDataMap.map((e) =>
          e ? LockedDepositedAmountDataMap.toJSON(e) : undefined
        );
    } else {
      obj.lockedDepositedAmountDataMap = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryLockerTotalDepositedByAppResponse>, I>
  >(object: I): QueryLockerTotalDepositedByAppResponse {
    const message = createBaseQueryLockerTotalDepositedByAppResponse();
    message.lockedDepositedAmountDataMap =
      object.lockedDepositedAmountDataMap?.map((e) =>
        LockedDepositedAmountDataMap.fromPartial(e)
      ) || [];
    return message;
  },
};

export interface QueryService {
  QueryLockerInfo(
    request: QueryLockerInfoRequest
  ): Promise<QueryLockerInfoResponse>;
  QueryLockersByProductToAssetID(
    request: QueryLockersByProductToAssetIDRequest
  ): Promise<QueryLockersByProductToAssetIDResponse>;
  QueryLockerInfoByProductID(
    request: QueryLockerInfoByProductIDRequest
  ): Promise<QueryLockerInfoByProductIDResponse>;
  QueryTotalDepositByProductAssetID(
    request: QueryTotalDepositByProductAssetIDRequest
  ): Promise<QueryTotalDepositByProductAssetIDResponse>;
  QueryOwnerLockerByProductID(
    request: QueryOwnerLockerByProductIDRequest
  ): Promise<QueryOwnerLockerByProductIDResponse>;
  QueryOwnerLockerOfAllProduct(
    request: QueryOwnerLockerOfAllProductRequest
  ): Promise<QueryOwnerLockerOfAllProductResponse>;
  QueryOwnerLockerByProductToAssetID(
    request: QueryOwnerLockerByProductToAssetIDRequest
  ): Promise<QueryOwnerLockerByProductToAssetIDResponse>;
  QueryLockerCountByProductID(
    request: QueryLockerCountByProductIDRequest
  ): Promise<QueryLockerCountByProductIDResponse>;
  QueryLockerCountByProductToAssetID(
    request: QueryLockerCountByProductToAssetIDRequest
  ): Promise<QueryLockerCountByProductToAssetIDResponse>;
  QueryWhiteListedAssetIDsByProductID(
    request: QueryWhiteListedAssetIDsByProductIDRequest
  ): Promise<QueryWhiteListedAssetIDsByProductIDResponse>;
  QueryWhiteListedAssetByAllProduct(
    request: QueryWhiteListedAssetByAllProductRequest
  ): Promise<QueryWhiteListedAssetByAllProductResponse>;
  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  QueryLockerLookupTableByApp(
    request: QueryLockerLookupTableByAppRequest
  ): Promise<QueryLockerLookupTableByAppResponse>;
  QueryLockerLookupTableByAppAndAssetId(
    request: QueryLockerLookupTableByAppAndAssetIdRequest
  ): Promise<QueryLockerLookupTableByAppAndAssetIdResponse>;
  QueryLockerTotalDepositedByApp(
    request: QueryLockerTotalDepositedByAppRequest
  ): Promise<QueryLockerTotalDepositedByAppResponse>;
}

export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.QueryLockerInfo = this.QueryLockerInfo.bind(this);
    this.QueryLockersByProductToAssetID =
      this.QueryLockersByProductToAssetID.bind(this);
    this.QueryLockerInfoByProductID =
      this.QueryLockerInfoByProductID.bind(this);
    this.QueryTotalDepositByProductAssetID =
      this.QueryTotalDepositByProductAssetID.bind(this);
    this.QueryOwnerLockerByProductID =
      this.QueryOwnerLockerByProductID.bind(this);
    this.QueryOwnerLockerOfAllProduct =
      this.QueryOwnerLockerOfAllProduct.bind(this);
    this.QueryOwnerLockerByProductToAssetID =
      this.QueryOwnerLockerByProductToAssetID.bind(this);
    this.QueryLockerCountByProductID =
      this.QueryLockerCountByProductID.bind(this);
    this.QueryLockerCountByProductToAssetID =
      this.QueryLockerCountByProductToAssetID.bind(this);
    this.QueryWhiteListedAssetIDsByProductID =
      this.QueryWhiteListedAssetIDsByProductID.bind(this);
    this.QueryWhiteListedAssetByAllProduct =
      this.QueryWhiteListedAssetByAllProduct.bind(this);
    this.QueryParams = this.QueryParams.bind(this);
    this.QueryLockerLookupTableByApp =
      this.QueryLockerLookupTableByApp.bind(this);
    this.QueryLockerLookupTableByAppAndAssetId =
      this.QueryLockerLookupTableByAppAndAssetId.bind(this);
    this.QueryLockerTotalDepositedByApp =
      this.QueryLockerTotalDepositedByApp.bind(this);
  }
  QueryLockerInfo(
    request: QueryLockerInfoRequest
  ): Promise<QueryLockerInfoResponse> {
    const data = QueryLockerInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.QueryService",
      "QueryLockerInfo",
      data
    );
    return promise.then((data) =>
      QueryLockerInfoResponse.decode(new _m0.Reader(data))
    );
  }

  QueryLockersByProductToAssetID(
    request: QueryLockersByProductToAssetIDRequest
  ): Promise<QueryLockersByProductToAssetIDResponse> {
    const data = QueryLockersByProductToAssetIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.QueryService",
      "QueryLockersByProductToAssetID",
      data
    );
    return promise.then((data) =>
      QueryLockersByProductToAssetIDResponse.decode(new _m0.Reader(data))
    );
  }

  QueryLockerInfoByProductID(
    request: QueryLockerInfoByProductIDRequest
  ): Promise<QueryLockerInfoByProductIDResponse> {
    const data = QueryLockerInfoByProductIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.QueryService",
      "QueryLockerInfoByProductID",
      data
    );
    return promise.then((data) =>
      QueryLockerInfoByProductIDResponse.decode(new _m0.Reader(data))
    );
  }

  QueryTotalDepositByProductAssetID(
    request: QueryTotalDepositByProductAssetIDRequest
  ): Promise<QueryTotalDepositByProductAssetIDResponse> {
    const data =
      QueryTotalDepositByProductAssetIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.QueryService",
      "QueryTotalDepositByProductAssetID",
      data
    );
    return promise.then((data) =>
      QueryTotalDepositByProductAssetIDResponse.decode(new _m0.Reader(data))
    );
  }

  QueryOwnerLockerByProductID(
    request: QueryOwnerLockerByProductIDRequest
  ): Promise<QueryOwnerLockerByProductIDResponse> {
    const data = QueryOwnerLockerByProductIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.QueryService",
      "QueryOwnerLockerByProductID",
      data
    );
    return promise.then((data) =>
      QueryOwnerLockerByProductIDResponse.decode(new _m0.Reader(data))
    );
  }

  QueryOwnerLockerOfAllProduct(
    request: QueryOwnerLockerOfAllProductRequest
  ): Promise<QueryOwnerLockerOfAllProductResponse> {
    const data = QueryOwnerLockerOfAllProductRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.QueryService",
      "QueryOwnerLockerOfAllProduct",
      data
    );
    return promise.then((data) =>
      QueryOwnerLockerOfAllProductResponse.decode(new _m0.Reader(data))
    );
  }

  QueryOwnerLockerByProductToAssetID(
    request: QueryOwnerLockerByProductToAssetIDRequest
  ): Promise<QueryOwnerLockerByProductToAssetIDResponse> {
    const data =
      QueryOwnerLockerByProductToAssetIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.QueryService",
      "QueryOwnerLockerByProductToAssetID",
      data
    );
    return promise.then((data) =>
      QueryOwnerLockerByProductToAssetIDResponse.decode(new _m0.Reader(data))
    );
  }

  QueryLockerCountByProductID(
    request: QueryLockerCountByProductIDRequest
  ): Promise<QueryLockerCountByProductIDResponse> {
    const data = QueryLockerCountByProductIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.QueryService",
      "QueryLockerCountByProductID",
      data
    );
    return promise.then((data) =>
      QueryLockerCountByProductIDResponse.decode(new _m0.Reader(data))
    );
  }

  QueryLockerCountByProductToAssetID(
    request: QueryLockerCountByProductToAssetIDRequest
  ): Promise<QueryLockerCountByProductToAssetIDResponse> {
    const data =
      QueryLockerCountByProductToAssetIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.QueryService",
      "QueryLockerCountByProductToAssetID",
      data
    );
    return promise.then((data) =>
      QueryLockerCountByProductToAssetIDResponse.decode(new _m0.Reader(data))
    );
  }

  QueryWhiteListedAssetIDsByProductID(
    request: QueryWhiteListedAssetIDsByProductIDRequest
  ): Promise<QueryWhiteListedAssetIDsByProductIDResponse> {
    const data =
      QueryWhiteListedAssetIDsByProductIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.QueryService",
      "QueryWhiteListedAssetIDsByProductID",
      data
    );
    return promise.then((data) =>
      QueryWhiteListedAssetIDsByProductIDResponse.decode(new _m0.Reader(data))
    );
  }

  QueryWhiteListedAssetByAllProduct(
    request: QueryWhiteListedAssetByAllProductRequest
  ): Promise<QueryWhiteListedAssetByAllProductResponse> {
    const data =
      QueryWhiteListedAssetByAllProductRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.QueryService",
      "QueryWhiteListedAssetByAllProduct",
      data
    );
    return promise.then((data) =>
      QueryWhiteListedAssetByAllProductResponse.decode(new _m0.Reader(data))
    );
  }

  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.QueryService",
      "QueryParams",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryLockerLookupTableByApp(
    request: QueryLockerLookupTableByAppRequest
  ): Promise<QueryLockerLookupTableByAppResponse> {
    const data = QueryLockerLookupTableByAppRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.QueryService",
      "QueryLockerLookupTableByApp",
      data
    );
    return promise.then((data) =>
      QueryLockerLookupTableByAppResponse.decode(new _m0.Reader(data))
    );
  }

  QueryLockerLookupTableByAppAndAssetId(
    request: QueryLockerLookupTableByAppAndAssetIdRequest
  ): Promise<QueryLockerLookupTableByAppAndAssetIdResponse> {
    const data =
      QueryLockerLookupTableByAppAndAssetIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.QueryService",
      "QueryLockerLookupTableByAppAndAssetId",
      data
    );
    return promise.then((data) =>
      QueryLockerLookupTableByAppAndAssetIdResponse.decode(new _m0.Reader(data))
    );
  }

  QueryLockerTotalDepositedByApp(
    request: QueryLockerTotalDepositedByAppRequest
  ): Promise<QueryLockerTotalDepositedByAppResponse> {
    const data = QueryLockerTotalDepositedByAppRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.QueryService",
      "QueryLockerTotalDepositedByApp",
      data
    );
    return promise.then((data) =>
      QueryLockerTotalDepositedByAppResponse.decode(new _m0.Reader(data))
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
