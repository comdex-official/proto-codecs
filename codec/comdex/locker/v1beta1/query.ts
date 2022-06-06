/* eslint-disable */
import Long from "long";
import  _m0 from "protobufjs/minimal";
import {
  Locker,
  TokenToLockerMapping,
  UserTxData,
  LockedDepositedAmountDataMap,
} from "../../../comdex/locker/v1beta1/locker";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "../../../comdex/locker/v1beta1/params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Asset } from "../../../comdex/asset/v1beta1/asset";

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
}

export interface QueryTotalDepositByProductAssetIDResponse {
  totalDeposit: Long;
}

export interface QueryOwnerLockerByProductIDbyOwnerRequest {
  productId: Long;
  owner: string;
}

export interface QueryOwnerLockerByProductIDbyOwnerResponse {
  lockerIds: string[];
}

export interface QueryOwnerLockerOfAllProductByOwnerRequest {
  owner: string;
}

export interface QueryOwnerLockerOfAllProductByOwnerResponse {
  lockerIds: string[];
}

export interface QueryOwnerTxDetailsLockerOfProductByOwnerByAssetRequest {
  productId: Long;
  owner: string;
  assetId: Long;
  pagination?: PageRequest;
}

export interface QueryOwnerTxDetailsLockerOfProductByOwnerByAssetResponse {
  userTxData: UserTxData[];
  pagination?: PageResponse;
}

export interface QueryOwnerLockerByProductToAssetIDbyOwnerRequest {
  productId: Long;
  assetId: Long;
  owner: string;
}

export interface QueryOwnerLockerByProductToAssetIDbyOwnerResponse {
  lockerInfo: Locker[];
}

export interface QueryLockerByProductByOwnerRequest {
  productId: Long;
  owner: string;
}

export interface QueryLockerByProductByOwnerResponse {
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

export interface QueryStateRequest {
  address: string;
  denom: string;
  height: string;
  target: string;
}

export interface QueryStateResponse {
  amount?: Coin;
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
  return { productId: Long.UZERO, assetId: Long.UZERO };
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
    };
  },

  toJSON(message: QueryTotalDepositByProductAssetIDRequest): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
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

function createBaseQueryOwnerLockerByProductIDbyOwnerRequest(): QueryOwnerLockerByProductIDbyOwnerRequest {
  return { productId: Long.UZERO, owner: "" };
}

export const QueryOwnerLockerByProductIDbyOwnerRequest = {
  encode(
    message: QueryOwnerLockerByProductIDbyOwnerRequest,
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
  ): QueryOwnerLockerByProductIDbyOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerLockerByProductIDbyOwnerRequest();
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

  fromJSON(object: any): QueryOwnerLockerByProductIDbyOwnerRequest {
    return {
      productId: isSet(object.productId)
        ? Long.fromValue(object.productId)
        : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: QueryOwnerLockerByProductIDbyOwnerRequest): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryOwnerLockerByProductIDbyOwnerRequest>, I>
  >(object: I): QueryOwnerLockerByProductIDbyOwnerRequest {
    const message = createBaseQueryOwnerLockerByProductIDbyOwnerRequest();
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? Long.fromValue(object.productId)
        : Long.UZERO;
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseQueryOwnerLockerByProductIDbyOwnerResponse(): QueryOwnerLockerByProductIDbyOwnerResponse {
  return { lockerIds: [] };
}

export const QueryOwnerLockerByProductIDbyOwnerResponse = {
  encode(
    message: QueryOwnerLockerByProductIDbyOwnerResponse,
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
  ): QueryOwnerLockerByProductIDbyOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerLockerByProductIDbyOwnerResponse();
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

  fromJSON(object: any): QueryOwnerLockerByProductIDbyOwnerResponse {
    return {
      lockerIds: Array.isArray(object?.lockerIds)
        ? object.lockerIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: QueryOwnerLockerByProductIDbyOwnerResponse): unknown {
    const obj: any = {};
    if (message.lockerIds) {
      obj.lockerIds = message.lockerIds.map((e) => e);
    } else {
      obj.lockerIds = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryOwnerLockerByProductIDbyOwnerResponse>, I>
  >(object: I): QueryOwnerLockerByProductIDbyOwnerResponse {
    const message = createBaseQueryOwnerLockerByProductIDbyOwnerResponse();
    message.lockerIds = object.lockerIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryOwnerLockerOfAllProductByOwnerRequest(): QueryOwnerLockerOfAllProductByOwnerRequest {
  return { owner: "" };
}

export const QueryOwnerLockerOfAllProductByOwnerRequest = {
  encode(
    message: QueryOwnerLockerOfAllProductByOwnerRequest,
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
  ): QueryOwnerLockerOfAllProductByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerLockerOfAllProductByOwnerRequest();
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

  fromJSON(object: any): QueryOwnerLockerOfAllProductByOwnerRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: QueryOwnerLockerOfAllProductByOwnerRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryOwnerLockerOfAllProductByOwnerRequest>, I>
  >(object: I): QueryOwnerLockerOfAllProductByOwnerRequest {
    const message = createBaseQueryOwnerLockerOfAllProductByOwnerRequest();
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseQueryOwnerLockerOfAllProductByOwnerResponse(): QueryOwnerLockerOfAllProductByOwnerResponse {
  return { lockerIds: [] };
}

export const QueryOwnerLockerOfAllProductByOwnerResponse = {
  encode(
    message: QueryOwnerLockerOfAllProductByOwnerResponse,
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
  ): QueryOwnerLockerOfAllProductByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerLockerOfAllProductByOwnerResponse();
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

  fromJSON(object: any): QueryOwnerLockerOfAllProductByOwnerResponse {
    return {
      lockerIds: Array.isArray(object?.lockerIds)
        ? object.lockerIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: QueryOwnerLockerOfAllProductByOwnerResponse): unknown {
    const obj: any = {};
    if (message.lockerIds) {
      obj.lockerIds = message.lockerIds.map((e) => e);
    } else {
      obj.lockerIds = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryOwnerLockerOfAllProductByOwnerResponse>, I>
  >(object: I): QueryOwnerLockerOfAllProductByOwnerResponse {
    const message = createBaseQueryOwnerLockerOfAllProductByOwnerResponse();
    message.lockerIds = object.lockerIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryOwnerTxDetailsLockerOfProductByOwnerByAssetRequest(): QueryOwnerTxDetailsLockerOfProductByOwnerByAssetRequest {
  return {
    productId: Long.UZERO,
    owner: "",
    assetId: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryOwnerTxDetailsLockerOfProductByOwnerByAssetRequest = {
  encode(
    message: QueryOwnerTxDetailsLockerOfProductByOwnerByAssetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.productId.isZero()) {
      writer.uint32(8).uint64(message.productId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(24).uint64(message.assetId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOwnerTxDetailsLockerOfProductByOwnerByAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseQueryOwnerTxDetailsLockerOfProductByOwnerByAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.uint64() as Long;
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.assetId = reader.uint64() as Long;
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(
    object: any
  ): QueryOwnerTxDetailsLockerOfProductByOwnerByAssetRequest {
    return {
      productId: isSet(object.productId)
        ? Long.fromValue(object.productId)
        : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(
    message: QueryOwnerTxDetailsLockerOfProductByOwnerByAssetRequest
  ): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryOwnerTxDetailsLockerOfProductByOwnerByAssetRequest>,
      I
    >
  >(object: I): QueryOwnerTxDetailsLockerOfProductByOwnerByAssetRequest {
    const message =
      createBaseQueryOwnerTxDetailsLockerOfProductByOwnerByAssetRequest();
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? Long.fromValue(object.productId)
        : Long.UZERO;
    message.owner = object.owner ?? "";
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

function createBaseQueryOwnerTxDetailsLockerOfProductByOwnerByAssetResponse(): QueryOwnerTxDetailsLockerOfProductByOwnerByAssetResponse {
  return { userTxData: [], pagination: undefined };
}

export const QueryOwnerTxDetailsLockerOfProductByOwnerByAssetResponse = {
  encode(
    message: QueryOwnerTxDetailsLockerOfProductByOwnerByAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.userTxData) {
      UserTxData.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryOwnerTxDetailsLockerOfProductByOwnerByAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseQueryOwnerTxDetailsLockerOfProductByOwnerByAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userTxData.push(UserTxData.decode(reader, reader.uint32()));
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

  fromJSON(
    object: any
  ): QueryOwnerTxDetailsLockerOfProductByOwnerByAssetResponse {
    return {
      userTxData: Array.isArray(object?.userTxData)
        ? object.userTxData.map((e: any) => UserTxData.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(
    message: QueryOwnerTxDetailsLockerOfProductByOwnerByAssetResponse
  ): unknown {
    const obj: any = {};
    if (message.userTxData) {
      obj.userTxData = message.userTxData.map((e) =>
        e ? UserTxData.toJSON(e) : undefined
      );
    } else {
      obj.userTxData = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryOwnerTxDetailsLockerOfProductByOwnerByAssetResponse>,
      I
    >
  >(object: I): QueryOwnerTxDetailsLockerOfProductByOwnerByAssetResponse {
    const message =
      createBaseQueryOwnerTxDetailsLockerOfProductByOwnerByAssetResponse();
    message.userTxData =
      object.userTxData?.map((e) => UserTxData.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryOwnerLockerByProductToAssetIDbyOwnerRequest(): QueryOwnerLockerByProductToAssetIDbyOwnerRequest {
  return { productId: Long.UZERO, assetId: Long.UZERO, owner: "" };
}

export const QueryOwnerLockerByProductToAssetIDbyOwnerRequest = {
  encode(
    message: QueryOwnerLockerByProductToAssetIDbyOwnerRequest,
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
  ): QueryOwnerLockerByProductToAssetIDbyOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseQueryOwnerLockerByProductToAssetIDbyOwnerRequest();
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

  fromJSON(object: any): QueryOwnerLockerByProductToAssetIDbyOwnerRequest {
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

  toJSON(message: QueryOwnerLockerByProductToAssetIDbyOwnerRequest): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryOwnerLockerByProductToAssetIDbyOwnerRequest>,
      I
    >
  >(object: I): QueryOwnerLockerByProductToAssetIDbyOwnerRequest {
    const message =
      createBaseQueryOwnerLockerByProductToAssetIDbyOwnerRequest();
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

function createBaseQueryOwnerLockerByProductToAssetIDbyOwnerResponse(): QueryOwnerLockerByProductToAssetIDbyOwnerResponse {
  return { lockerInfo: [] };
}

export const QueryOwnerLockerByProductToAssetIDbyOwnerResponse = {
  encode(
    message: QueryOwnerLockerByProductToAssetIDbyOwnerResponse,
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
  ): QueryOwnerLockerByProductToAssetIDbyOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseQueryOwnerLockerByProductToAssetIDbyOwnerResponse();
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

  fromJSON(object: any): QueryOwnerLockerByProductToAssetIDbyOwnerResponse {
    return {
      lockerInfo: Array.isArray(object?.lockerInfo)
        ? object.lockerInfo.map((e: any) => Locker.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryOwnerLockerByProductToAssetIDbyOwnerResponse): unknown {
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
    I extends Exact<
      DeepPartial<QueryOwnerLockerByProductToAssetIDbyOwnerResponse>,
      I
    >
  >(object: I): QueryOwnerLockerByProductToAssetIDbyOwnerResponse {
    const message =
      createBaseQueryOwnerLockerByProductToAssetIDbyOwnerResponse();
    message.lockerInfo =
      object.lockerInfo?.map((e) => Locker.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryLockerByProductByOwnerRequest(): QueryLockerByProductByOwnerRequest {
  return { productId: Long.UZERO, owner: "" };
}

export const QueryLockerByProductByOwnerRequest = {
  encode(
    message: QueryLockerByProductByOwnerRequest,
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
  ): QueryLockerByProductByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerByProductByOwnerRequest();
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

  fromJSON(object: any): QueryLockerByProductByOwnerRequest {
    return {
      productId: isSet(object.productId)
        ? Long.fromValue(object.productId)
        : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: QueryLockerByProductByOwnerRequest): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryLockerByProductByOwnerRequest>, I>
  >(object: I): QueryLockerByProductByOwnerRequest {
    const message = createBaseQueryLockerByProductByOwnerRequest();
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? Long.fromValue(object.productId)
        : Long.UZERO;
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseQueryLockerByProductByOwnerResponse(): QueryLockerByProductByOwnerResponse {
  return { lockerInfo: [] };
}

export const QueryLockerByProductByOwnerResponse = {
  encode(
    message: QueryLockerByProductByOwnerResponse,
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
  ): QueryLockerByProductByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerByProductByOwnerResponse();
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

  fromJSON(object: any): QueryLockerByProductByOwnerResponse {
    return {
      lockerInfo: Array.isArray(object?.lockerInfo)
        ? object.lockerInfo.map((e: any) => Locker.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryLockerByProductByOwnerResponse): unknown {
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
    I extends Exact<DeepPartial<QueryLockerByProductByOwnerResponse>, I>
  >(object: I): QueryLockerByProductByOwnerResponse {
    const message = createBaseQueryLockerByProductByOwnerResponse();
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

function createBaseQueryStateRequest(): QueryStateRequest {
  return { address: "", denom: "", height: "", target: "" };
}

export const QueryStateRequest = {
  encode(
    message: QueryStateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.height !== "") {
      writer.uint32(26).string(message.height);
    }
    if (message.target !== "") {
      writer.uint32(34).string(message.target);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.height = reader.string();
          break;
        case 4:
          message.target = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStateRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      height: isSet(object.height) ? String(object.height) : "",
      target: isSet(object.target) ? String(object.target) : "",
    };
  },

  toJSON(message: QueryStateRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    message.height !== undefined && (obj.height = message.height);
    message.target !== undefined && (obj.target = message.target);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStateRequest>, I>>(
    object: I
  ): QueryStateRequest {
    const message = createBaseQueryStateRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    message.height = object.height ?? "";
    message.target = object.target ?? "";
    return message;
  },
};

function createBaseQueryStateResponse(): QueryStateResponse {
  return { amount: undefined };
}

export const QueryStateResponse = {
  encode(
    message: QueryStateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStateResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: QueryStateResponse): unknown {
    const obj: any = {};
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStateResponse>, I>>(
    object: I
  ): QueryStateResponse {
    const message = createBaseQueryStateResponse();
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

export interface Query {
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
  QueryOwnerLockerByProductIDbyOwner(
    request: QueryOwnerLockerByProductIDbyOwnerRequest
  ): Promise<QueryOwnerLockerByProductIDbyOwnerResponse>;
  QueryOwnerLockerOfAllProductByOwner(
    request: QueryOwnerLockerOfAllProductByOwnerRequest
  ): Promise<QueryOwnerLockerOfAllProductByOwnerResponse>;
  QueryOwnerTxDetailsLockerOfProductByOwnerByAsset(
    request: QueryOwnerTxDetailsLockerOfProductByOwnerByAssetRequest
  ): Promise<QueryOwnerTxDetailsLockerOfProductByOwnerByAssetResponse>;
  QueryOwnerLockerByProductToAssetIDbyOwner(
    request: QueryOwnerLockerByProductToAssetIDbyOwnerRequest
  ): Promise<QueryOwnerLockerByProductToAssetIDbyOwnerResponse>;
  QueryLockerByProductByOwner(
    request: QueryLockerByProductByOwnerRequest
  ): Promise<QueryLockerByProductByOwnerResponse>;
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
  QueryState(request: QueryStateRequest): Promise<QueryStateResponse>;
}

export class QueryClientImpl implements Query {
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
    this.QueryOwnerLockerByProductIDbyOwner =
      this.QueryOwnerLockerByProductIDbyOwner.bind(this);
    this.QueryOwnerLockerOfAllProductByOwner =
      this.QueryOwnerLockerOfAllProductByOwner.bind(this);
    this.QueryOwnerTxDetailsLockerOfProductByOwnerByAsset =
      this.QueryOwnerTxDetailsLockerOfProductByOwnerByAsset.bind(this);
    this.QueryOwnerLockerByProductToAssetIDbyOwner =
      this.QueryOwnerLockerByProductToAssetIDbyOwner.bind(this);
    this.QueryLockerByProductByOwner =
      this.QueryLockerByProductByOwner.bind(this);
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
    this.QueryState = this.QueryState.bind(this);
  }
  QueryLockerInfo(
    request: QueryLockerInfoRequest
  ): Promise<QueryLockerInfoResponse> {
    const data = QueryLockerInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Query",
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
      "comdex.locker.v1beta1.Query",
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
      "comdex.locker.v1beta1.Query",
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
      "comdex.locker.v1beta1.Query",
      "QueryTotalDepositByProductAssetID",
      data
    );
    return promise.then((data) =>
      QueryTotalDepositByProductAssetIDResponse.decode(new _m0.Reader(data))
    );
  }

  QueryOwnerLockerByProductIDbyOwner(
    request: QueryOwnerLockerByProductIDbyOwnerRequest
  ): Promise<QueryOwnerLockerByProductIDbyOwnerResponse> {
    const data =
      QueryOwnerLockerByProductIDbyOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Query",
      "QueryOwnerLockerByProductIDbyOwner",
      data
    );
    return promise.then((data) =>
      QueryOwnerLockerByProductIDbyOwnerResponse.decode(new _m0.Reader(data))
    );
  }

  QueryOwnerLockerOfAllProductByOwner(
    request: QueryOwnerLockerOfAllProductByOwnerRequest
  ): Promise<QueryOwnerLockerOfAllProductByOwnerResponse> {
    const data =
      QueryOwnerLockerOfAllProductByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Query",
      "QueryOwnerLockerOfAllProductByOwner",
      data
    );
    return promise.then((data) =>
      QueryOwnerLockerOfAllProductByOwnerResponse.decode(new _m0.Reader(data))
    );
  }

  QueryOwnerTxDetailsLockerOfProductByOwnerByAsset(
    request: QueryOwnerTxDetailsLockerOfProductByOwnerByAssetRequest
  ): Promise<QueryOwnerTxDetailsLockerOfProductByOwnerByAssetResponse> {
    const data =
      QueryOwnerTxDetailsLockerOfProductByOwnerByAssetRequest.encode(
        request
      ).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Query",
      "QueryOwnerTxDetailsLockerOfProductByOwnerByAsset",
      data
    );
    return promise.then((data) =>
      QueryOwnerTxDetailsLockerOfProductByOwnerByAssetResponse.decode(
        new _m0.Reader(data)
      )
    );
  }

  QueryOwnerLockerByProductToAssetIDbyOwner(
    request: QueryOwnerLockerByProductToAssetIDbyOwnerRequest
  ): Promise<QueryOwnerLockerByProductToAssetIDbyOwnerResponse> {
    const data =
      QueryOwnerLockerByProductToAssetIDbyOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Query",
      "QueryOwnerLockerByProductToAssetIDbyOwner",
      data
    );
    return promise.then((data) =>
      QueryOwnerLockerByProductToAssetIDbyOwnerResponse.decode(
        new _m0.Reader(data)
      )
    );
  }

  QueryLockerByProductByOwner(
    request: QueryLockerByProductByOwnerRequest
  ): Promise<QueryLockerByProductByOwnerResponse> {
    const data = QueryLockerByProductByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Query",
      "QueryLockerByProductByOwner",
      data
    );
    return promise.then((data) =>
      QueryLockerByProductByOwnerResponse.decode(new _m0.Reader(data))
    );
  }

  QueryLockerCountByProductID(
    request: QueryLockerCountByProductIDRequest
  ): Promise<QueryLockerCountByProductIDResponse> {
    const data = QueryLockerCountByProductIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Query",
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
      "comdex.locker.v1beta1.Query",
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
      "comdex.locker.v1beta1.Query",
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
      "comdex.locker.v1beta1.Query",
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
      "comdex.locker.v1beta1.Query",
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
      "comdex.locker.v1beta1.Query",
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
      "comdex.locker.v1beta1.Query",
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
      "comdex.locker.v1beta1.Query",
      "QueryLockerTotalDepositedByApp",
      data
    );
    return promise.then((data) =>
      QueryLockerTotalDepositedByAppResponse.decode(new _m0.Reader(data))
    );
  }

  QueryState(request: QueryStateRequest): Promise<QueryStateResponse> {
    const data = QueryStateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Query",
      "QueryState",
      data
    );
    return promise.then((data) =>
      QueryStateResponse.decode(new _m0.Reader(data))
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
