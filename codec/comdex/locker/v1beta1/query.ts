/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  Locker,
  LockerLookupTableData,
  LockerTotalRewardsByAssetAppWise,
  UserTxData,
  LockedDepositedAmountDataMap,
} from "../../../comdex/locker/v1beta1/locker";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "../../../comdex/locker/v1beta1/params";
import { Asset } from "../../../comdex/asset/v1beta1/asset";

export const protobufPackage = "comdex.locker.v1beta1";

export interface QueryLockerInfoRequest {
  id: Long;
}

export interface QueryLockerInfoResponse {
  lockerInfo?: Locker;
}

export interface QueryLockersByAppToAssetIDRequest {
  appId: Long;
  assetId: Long;
  pagination?: PageRequest;
}

export interface QueryLockersByAppToAssetIDResponse {
  lockerIds: Long[];
  pagination?: PageResponse;
}

export interface QueryLockerInfoByAppIDRequest {
  appId: Long;
  pagination?: PageRequest;
}

export interface QueryLockerInfoByAppIDResponse {
  lockerIds: Long[];
  pagination?: PageResponse;
}

export interface QueryTotalDepositByAppAndAssetIDRequest {
  appId: Long;
  assetId: Long;
}

export interface QueryTotalDepositByAppAndAssetIDResponse {
  totalDeposit: Long;
}

export interface QueryOwnerLockerByAppIDbyOwnerRequest {
  appId: Long;
  owner: string;
  pagination?: PageRequest;
}

export interface QueryOwnerLockerByAppIDbyOwnerResponse {
  lockerIds: Long[];
  pagination?: PageResponse;
}

export interface QueryOwnerLockerOfAllAppsByOwnerRequest {
  owner: string;
  pagination?: PageRequest;
}

export interface QueryOwnerLockerOfAllAppsByOwnerResponse {
  lockerIds: Long[];
  pagination?: PageResponse;
}

export interface QueryOwnerTxDetailsLockerOfAppByOwnerByAssetRequest {
  appId: Long;
  owner: string;
  assetId: Long;
  pagination?: PageRequest;
}

export interface QueryOwnerTxDetailsLockerOfAppByOwnerByAssetResponse {
  userTxData: UserTxData[];
  pagination?: PageResponse;
}

export interface QueryOwnerLockerByAppToAssetIDbyOwnerRequest {
  appId: Long;
  assetId: Long;
  owner: string;
}

export interface QueryOwnerLockerByAppToAssetIDbyOwnerResponse {
  lockerInfo?: Locker;
  pagination?: PageResponse;
}

export interface QueryLockerByAppByOwnerRequest {
  appId: Long;
  owner: string;
  pagination?: PageRequest;
}

export interface QueryLockerByAppByOwnerResponse {
  lockerInfo: Locker[];
  pagination?: PageResponse;
}

export interface QueryLockerCountByAppIDRequest {
  appId: Long;
}

export interface QueryLockerCountByAppIDResponse {
  totalCount: Long;
}

export interface QueryLockerCountByAppToAssetIDRequest {
  appId: Long;
  assetId: Long;
}

export interface QueryLockerCountByAppToAssetIDResponse {
  totalCount: Long;
  pagination?: PageRequest;
}

export interface QueryWhiteListedAssetIDsByAppIDRequest {
  appId: Long;
  pagination?: PageRequest;
}

export interface QueryWhiteListedAssetIDsByAppIDResponse {
  assetIds: Long[];
  pagination?: PageResponse;
}

export interface QueryWhiteListedAssetByAllAppsRequest {
  pagination?: PageRequest;
}

export interface QueryWhiteListedAssetByAllAppsResponse {
  productToAllAsset: AppToAllAsset[];
  pagination?: PageResponse;
}

export interface AppToAllAsset {
  appId: Long;
  assets: Asset[];
}

export interface QueryParamsRequest {}

export interface QueryParamsResponse {
  params?: Params;
}

export interface QueryLockerLookupTableByAppRequest {
  appId: Long;
  pagination?: PageRequest;
}

export interface QueryLockerLookupTableByAppResponse {
  tokenToLockerMapping: LockerLookupTableData[];
  pagination?: PageResponse;
}

export interface QueryLockerLookupTableByAppAndAssetIDRequest {
  appId: Long;
  assetId: Long;
}

export interface QueryLockerLookupTableByAppAndAssetIDResponse {
  tokenToLockerMapping?: LockerLookupTableData;
}

export interface QueryLockerTotalDepositedByAppRequest {
  appId: Long;
  pagination?: PageRequest;
}

export interface QueryLockerTotalDepositedByAppResponse {
  lockedDepositedAmountDataMap: LockedDepositedAmountDataMap[];
  pagination?: PageResponse;
}

export interface QueryLockerTotalRewardsByAssetAppWiseRequest {
  appId: Long;
  assetId: Long;
}

export interface QueryLockerTotalRewardsByAssetAppWiseResponse {
  totalRewards?: LockerTotalRewardsByAssetAppWise;
}

function createBaseQueryLockerInfoRequest(): QueryLockerInfoRequest {
  return { id: Long.UZERO };
}

export const QueryLockerInfoRequest = {
  encode(
    message: QueryLockerInfoRequest,
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
  ): QueryLockerInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerInfoRequest();
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

  fromJSON(object: any): QueryLockerInfoRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryLockerInfoRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockerInfoRequest>, I>>(
    object: I
  ): QueryLockerInfoRequest {
    const message = createBaseQueryLockerInfoRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
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

function createBaseQueryLockersByAppToAssetIDRequest(): QueryLockersByAppToAssetIDRequest {
  return { appId: Long.UZERO, assetId: Long.UZERO, pagination: undefined };
}

export const QueryLockersByAppToAssetIDRequest = {
  encode(
    message: QueryLockersByAppToAssetIDRequest,
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
  ): QueryLockersByAppToAssetIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockersByAppToAssetIDRequest();
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

  fromJSON(object: any): QueryLockersByAppToAssetIDRequest {
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

  toJSON(message: QueryLockersByAppToAssetIDRequest): unknown {
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
    I extends Exact<DeepPartial<QueryLockersByAppToAssetIDRequest>, I>
  >(object: I): QueryLockersByAppToAssetIDRequest {
    const message = createBaseQueryLockersByAppToAssetIDRequest();
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

function createBaseQueryLockersByAppToAssetIDResponse(): QueryLockersByAppToAssetIDResponse {
  return { lockerIds: [], pagination: undefined };
}

export const QueryLockersByAppToAssetIDResponse = {
  encode(
    message: QueryLockersByAppToAssetIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.lockerIds) {
      writer.uint64(v);
    }
    writer.ldelim();
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
  ): QueryLockersByAppToAssetIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockersByAppToAssetIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lockerIds.push(reader.uint64() as Long);
            }
          } else {
            message.lockerIds.push(reader.uint64() as Long);
          }
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

  fromJSON(object: any): QueryLockersByAppToAssetIDResponse {
    return {
      lockerIds: Array.isArray(object?.lockerIds)
        ? object.lockerIds.map((e: any) => Long.fromValue(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLockersByAppToAssetIDResponse): unknown {
    const obj: any = {};
    if (message.lockerIds) {
      obj.lockerIds = message.lockerIds.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.lockerIds = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryLockersByAppToAssetIDResponse>, I>
  >(object: I): QueryLockersByAppToAssetIDResponse {
    const message = createBaseQueryLockersByAppToAssetIDResponse();
    message.lockerIds = object.lockerIds?.map((e) => Long.fromValue(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryLockerInfoByAppIDRequest(): QueryLockerInfoByAppIDRequest {
  return { appId: Long.UZERO, pagination: undefined };
}

export const QueryLockerInfoByAppIDRequest = {
  encode(
    message: QueryLockerInfoByAppIDRequest,
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
  ): QueryLockerInfoByAppIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerInfoByAppIDRequest();
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

  fromJSON(object: any): QueryLockerInfoByAppIDRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLockerInfoByAppIDRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockerInfoByAppIDRequest>, I>>(
    object: I
  ): QueryLockerInfoByAppIDRequest {
    const message = createBaseQueryLockerInfoByAppIDRequest();
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

function createBaseQueryLockerInfoByAppIDResponse(): QueryLockerInfoByAppIDResponse {
  return { lockerIds: [], pagination: undefined };
}

export const QueryLockerInfoByAppIDResponse = {
  encode(
    message: QueryLockerInfoByAppIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.lockerIds) {
      writer.uint64(v);
    }
    writer.ldelim();
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
  ): QueryLockerInfoByAppIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerInfoByAppIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lockerIds.push(reader.uint64() as Long);
            }
          } else {
            message.lockerIds.push(reader.uint64() as Long);
          }
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

  fromJSON(object: any): QueryLockerInfoByAppIDResponse {
    return {
      lockerIds: Array.isArray(object?.lockerIds)
        ? object.lockerIds.map((e: any) => Long.fromValue(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLockerInfoByAppIDResponse): unknown {
    const obj: any = {};
    if (message.lockerIds) {
      obj.lockerIds = message.lockerIds.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.lockerIds = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockerInfoByAppIDResponse>, I>>(
    object: I
  ): QueryLockerInfoByAppIDResponse {
    const message = createBaseQueryLockerInfoByAppIDResponse();
    message.lockerIds = object.lockerIds?.map((e) => Long.fromValue(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryTotalDepositByAppAndAssetIDRequest(): QueryTotalDepositByAppAndAssetIDRequest {
  return { appId: Long.UZERO, assetId: Long.UZERO };
}

export const QueryTotalDepositByAppAndAssetIDRequest = {
  encode(
    message: QueryTotalDepositByAppAndAssetIDRequest,
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
  ): QueryTotalDepositByAppAndAssetIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDepositByAppAndAssetIDRequest();
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

  fromJSON(object: any): QueryTotalDepositByAppAndAssetIDRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryTotalDepositByAppAndAssetIDRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryTotalDepositByAppAndAssetIDRequest>, I>
  >(object: I): QueryTotalDepositByAppAndAssetIDRequest {
    const message = createBaseQueryTotalDepositByAppAndAssetIDRequest();
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

function createBaseQueryTotalDepositByAppAndAssetIDResponse(): QueryTotalDepositByAppAndAssetIDResponse {
  return { totalDeposit: Long.UZERO };
}

export const QueryTotalDepositByAppAndAssetIDResponse = {
  encode(
    message: QueryTotalDepositByAppAndAssetIDResponse,
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
  ): QueryTotalDepositByAppAndAssetIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDepositByAppAndAssetIDResponse();
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

  fromJSON(object: any): QueryTotalDepositByAppAndAssetIDResponse {
    return {
      totalDeposit: isSet(object.totalDeposit)
        ? Long.fromValue(object.totalDeposit)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryTotalDepositByAppAndAssetIDResponse): unknown {
    const obj: any = {};
    message.totalDeposit !== undefined &&
      (obj.totalDeposit = (message.totalDeposit || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryTotalDepositByAppAndAssetIDResponse>, I>
  >(object: I): QueryTotalDepositByAppAndAssetIDResponse {
    const message = createBaseQueryTotalDepositByAppAndAssetIDResponse();
    message.totalDeposit =
      object.totalDeposit !== undefined && object.totalDeposit !== null
        ? Long.fromValue(object.totalDeposit)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryOwnerLockerByAppIDbyOwnerRequest(): QueryOwnerLockerByAppIDbyOwnerRequest {
  return { appId: Long.UZERO, owner: "", pagination: undefined };
}

export const QueryOwnerLockerByAppIDbyOwnerRequest = {
  encode(
    message: QueryOwnerLockerByAppIDbyOwnerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOwnerLockerByAppIDbyOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerLockerByAppIDbyOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.owner = reader.string();
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

  fromJSON(object: any): QueryOwnerLockerByAppIDbyOwnerRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryOwnerLockerByAppIDbyOwnerRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryOwnerLockerByAppIDbyOwnerRequest>, I>
  >(object: I): QueryOwnerLockerByAppIDbyOwnerRequest {
    const message = createBaseQueryOwnerLockerByAppIDbyOwnerRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.owner = object.owner ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryOwnerLockerByAppIDbyOwnerResponse(): QueryOwnerLockerByAppIDbyOwnerResponse {
  return { lockerIds: [], pagination: undefined };
}

export const QueryOwnerLockerByAppIDbyOwnerResponse = {
  encode(
    message: QueryOwnerLockerByAppIDbyOwnerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.lockerIds) {
      writer.uint64(v);
    }
    writer.ldelim();
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
  ): QueryOwnerLockerByAppIDbyOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerLockerByAppIDbyOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lockerIds.push(reader.uint64() as Long);
            }
          } else {
            message.lockerIds.push(reader.uint64() as Long);
          }
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

  fromJSON(object: any): QueryOwnerLockerByAppIDbyOwnerResponse {
    return {
      lockerIds: Array.isArray(object?.lockerIds)
        ? object.lockerIds.map((e: any) => Long.fromValue(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryOwnerLockerByAppIDbyOwnerResponse): unknown {
    const obj: any = {};
    if (message.lockerIds) {
      obj.lockerIds = message.lockerIds.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.lockerIds = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryOwnerLockerByAppIDbyOwnerResponse>, I>
  >(object: I): QueryOwnerLockerByAppIDbyOwnerResponse {
    const message = createBaseQueryOwnerLockerByAppIDbyOwnerResponse();
    message.lockerIds = object.lockerIds?.map((e) => Long.fromValue(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryOwnerLockerOfAllAppsByOwnerRequest(): QueryOwnerLockerOfAllAppsByOwnerRequest {
  return { owner: "", pagination: undefined };
}

export const QueryOwnerLockerOfAllAppsByOwnerRequest = {
  encode(
    message: QueryOwnerLockerOfAllAppsByOwnerRequest,
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
  ): QueryOwnerLockerOfAllAppsByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerLockerOfAllAppsByOwnerRequest();
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

  fromJSON(object: any): QueryOwnerLockerOfAllAppsByOwnerRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryOwnerLockerOfAllAppsByOwnerRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryOwnerLockerOfAllAppsByOwnerRequest>, I>
  >(object: I): QueryOwnerLockerOfAllAppsByOwnerRequest {
    const message = createBaseQueryOwnerLockerOfAllAppsByOwnerRequest();
    message.owner = object.owner ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryOwnerLockerOfAllAppsByOwnerResponse(): QueryOwnerLockerOfAllAppsByOwnerResponse {
  return { lockerIds: [], pagination: undefined };
}

export const QueryOwnerLockerOfAllAppsByOwnerResponse = {
  encode(
    message: QueryOwnerLockerOfAllAppsByOwnerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.lockerIds) {
      writer.uint64(v);
    }
    writer.ldelim();
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
  ): QueryOwnerLockerOfAllAppsByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerLockerOfAllAppsByOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lockerIds.push(reader.uint64() as Long);
            }
          } else {
            message.lockerIds.push(reader.uint64() as Long);
          }
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

  fromJSON(object: any): QueryOwnerLockerOfAllAppsByOwnerResponse {
    return {
      lockerIds: Array.isArray(object?.lockerIds)
        ? object.lockerIds.map((e: any) => Long.fromValue(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryOwnerLockerOfAllAppsByOwnerResponse): unknown {
    const obj: any = {};
    if (message.lockerIds) {
      obj.lockerIds = message.lockerIds.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.lockerIds = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryOwnerLockerOfAllAppsByOwnerResponse>, I>
  >(object: I): QueryOwnerLockerOfAllAppsByOwnerResponse {
    const message = createBaseQueryOwnerLockerOfAllAppsByOwnerResponse();
    message.lockerIds = object.lockerIds?.map((e) => Long.fromValue(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryOwnerTxDetailsLockerOfAppByOwnerByAssetRequest(): QueryOwnerTxDetailsLockerOfAppByOwnerByAssetRequest {
  return {
    appId: Long.UZERO,
    owner: "",
    assetId: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryOwnerTxDetailsLockerOfAppByOwnerByAssetRequest = {
  encode(
    message: QueryOwnerTxDetailsLockerOfAppByOwnerByAssetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
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
  ): QueryOwnerTxDetailsLockerOfAppByOwnerByAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseQueryOwnerTxDetailsLockerOfAppByOwnerByAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
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

  fromJSON(object: any): QueryOwnerTxDetailsLockerOfAppByOwnerByAssetRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
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
    message: QueryOwnerTxDetailsLockerOfAppByOwnerByAssetRequest
  ): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
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
      DeepPartial<QueryOwnerTxDetailsLockerOfAppByOwnerByAssetRequest>,
      I
    >
  >(object: I): QueryOwnerTxDetailsLockerOfAppByOwnerByAssetRequest {
    const message =
      createBaseQueryOwnerTxDetailsLockerOfAppByOwnerByAssetRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
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

function createBaseQueryOwnerTxDetailsLockerOfAppByOwnerByAssetResponse(): QueryOwnerTxDetailsLockerOfAppByOwnerByAssetResponse {
  return { userTxData: [], pagination: undefined };
}

export const QueryOwnerTxDetailsLockerOfAppByOwnerByAssetResponse = {
  encode(
    message: QueryOwnerTxDetailsLockerOfAppByOwnerByAssetResponse,
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
  ): QueryOwnerTxDetailsLockerOfAppByOwnerByAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseQueryOwnerTxDetailsLockerOfAppByOwnerByAssetResponse();
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

  fromJSON(object: any): QueryOwnerTxDetailsLockerOfAppByOwnerByAssetResponse {
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
    message: QueryOwnerTxDetailsLockerOfAppByOwnerByAssetResponse
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
      DeepPartial<QueryOwnerTxDetailsLockerOfAppByOwnerByAssetResponse>,
      I
    >
  >(object: I): QueryOwnerTxDetailsLockerOfAppByOwnerByAssetResponse {
    const message =
      createBaseQueryOwnerTxDetailsLockerOfAppByOwnerByAssetResponse();
    message.userTxData =
      object.userTxData?.map((e) => UserTxData.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryOwnerLockerByAppToAssetIDbyOwnerRequest(): QueryOwnerLockerByAppToAssetIDbyOwnerRequest {
  return { appId: Long.UZERO, assetId: Long.UZERO, owner: "" };
}

export const QueryOwnerLockerByAppToAssetIDbyOwnerRequest = {
  encode(
    message: QueryOwnerLockerByAppToAssetIDbyOwnerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
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
  ): QueryOwnerLockerByAppToAssetIDbyOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerLockerByAppToAssetIDbyOwnerRequest();
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
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerLockerByAppToAssetIDbyOwnerRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: QueryOwnerLockerByAppToAssetIDbyOwnerRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryOwnerLockerByAppToAssetIDbyOwnerRequest>,
      I
    >
  >(object: I): QueryOwnerLockerByAppToAssetIDbyOwnerRequest {
    const message = createBaseQueryOwnerLockerByAppToAssetIDbyOwnerRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseQueryOwnerLockerByAppToAssetIDbyOwnerResponse(): QueryOwnerLockerByAppToAssetIDbyOwnerResponse {
  return { lockerInfo: undefined, pagination: undefined };
}

export const QueryOwnerLockerByAppToAssetIDbyOwnerResponse = {
  encode(
    message: QueryOwnerLockerByAppToAssetIDbyOwnerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lockerInfo !== undefined) {
      Locker.encode(message.lockerInfo, writer.uint32(10).fork()).ldelim();
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
  ): QueryOwnerLockerByAppToAssetIDbyOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerLockerByAppToAssetIDbyOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockerInfo = Locker.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryOwnerLockerByAppToAssetIDbyOwnerResponse {
    return {
      lockerInfo: isSet(object.lockerInfo)
        ? Locker.fromJSON(object.lockerInfo)
        : undefined,
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryOwnerLockerByAppToAssetIDbyOwnerResponse): unknown {
    const obj: any = {};
    message.lockerInfo !== undefined &&
      (obj.lockerInfo = message.lockerInfo
        ? Locker.toJSON(message.lockerInfo)
        : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryOwnerLockerByAppToAssetIDbyOwnerResponse>,
      I
    >
  >(object: I): QueryOwnerLockerByAppToAssetIDbyOwnerResponse {
    const message = createBaseQueryOwnerLockerByAppToAssetIDbyOwnerResponse();
    message.lockerInfo =
      object.lockerInfo !== undefined && object.lockerInfo !== null
        ? Locker.fromPartial(object.lockerInfo)
        : undefined;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryLockerByAppByOwnerRequest(): QueryLockerByAppByOwnerRequest {
  return { appId: Long.UZERO, owner: "", pagination: undefined };
}

export const QueryLockerByAppByOwnerRequest = {
  encode(
    message: QueryLockerByAppByOwnerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockerByAppByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerByAppByOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.owner = reader.string();
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

  fromJSON(object: any): QueryLockerByAppByOwnerRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLockerByAppByOwnerRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockerByAppByOwnerRequest>, I>>(
    object: I
  ): QueryLockerByAppByOwnerRequest {
    const message = createBaseQueryLockerByAppByOwnerRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.owner = object.owner ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryLockerByAppByOwnerResponse(): QueryLockerByAppByOwnerResponse {
  return { lockerInfo: [], pagination: undefined };
}

export const QueryLockerByAppByOwnerResponse = {
  encode(
    message: QueryLockerByAppByOwnerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.lockerInfo) {
      Locker.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryLockerByAppByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerByAppByOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockerInfo.push(Locker.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryLockerByAppByOwnerResponse {
    return {
      lockerInfo: Array.isArray(object?.lockerInfo)
        ? object.lockerInfo.map((e: any) => Locker.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLockerByAppByOwnerResponse): unknown {
    const obj: any = {};
    if (message.lockerInfo) {
      obj.lockerInfo = message.lockerInfo.map((e) =>
        e ? Locker.toJSON(e) : undefined
      );
    } else {
      obj.lockerInfo = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockerByAppByOwnerResponse>, I>>(
    object: I
  ): QueryLockerByAppByOwnerResponse {
    const message = createBaseQueryLockerByAppByOwnerResponse();
    message.lockerInfo =
      object.lockerInfo?.map((e) => Locker.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryLockerCountByAppIDRequest(): QueryLockerCountByAppIDRequest {
  return { appId: Long.UZERO };
}

export const QueryLockerCountByAppIDRequest = {
  encode(
    message: QueryLockerCountByAppIDRequest,
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
  ): QueryLockerCountByAppIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerCountByAppIDRequest();
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

  fromJSON(object: any): QueryLockerCountByAppIDRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryLockerCountByAppIDRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockerCountByAppIDRequest>, I>>(
    object: I
  ): QueryLockerCountByAppIDRequest {
    const message = createBaseQueryLockerCountByAppIDRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryLockerCountByAppIDResponse(): QueryLockerCountByAppIDResponse {
  return { totalCount: Long.UZERO };
}

export const QueryLockerCountByAppIDResponse = {
  encode(
    message: QueryLockerCountByAppIDResponse,
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
  ): QueryLockerCountByAppIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerCountByAppIDResponse();
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

  fromJSON(object: any): QueryLockerCountByAppIDResponse {
    return {
      totalCount: isSet(object.totalCount)
        ? Long.fromValue(object.totalCount)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryLockerCountByAppIDResponse): unknown {
    const obj: any = {};
    message.totalCount !== undefined &&
      (obj.totalCount = (message.totalCount || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockerCountByAppIDResponse>, I>>(
    object: I
  ): QueryLockerCountByAppIDResponse {
    const message = createBaseQueryLockerCountByAppIDResponse();
    message.totalCount =
      object.totalCount !== undefined && object.totalCount !== null
        ? Long.fromValue(object.totalCount)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryLockerCountByAppToAssetIDRequest(): QueryLockerCountByAppToAssetIDRequest {
  return { appId: Long.UZERO, assetId: Long.UZERO };
}

export const QueryLockerCountByAppToAssetIDRequest = {
  encode(
    message: QueryLockerCountByAppToAssetIDRequest,
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
  ): QueryLockerCountByAppToAssetIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerCountByAppToAssetIDRequest();
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

  fromJSON(object: any): QueryLockerCountByAppToAssetIDRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryLockerCountByAppToAssetIDRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryLockerCountByAppToAssetIDRequest>, I>
  >(object: I): QueryLockerCountByAppToAssetIDRequest {
    const message = createBaseQueryLockerCountByAppToAssetIDRequest();
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

function createBaseQueryLockerCountByAppToAssetIDResponse(): QueryLockerCountByAppToAssetIDResponse {
  return { totalCount: Long.UZERO, pagination: undefined };
}

export const QueryLockerCountByAppToAssetIDResponse = {
  encode(
    message: QueryLockerCountByAppToAssetIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.totalCount.isZero()) {
      writer.uint32(8).uint64(message.totalCount);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockerCountByAppToAssetIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerCountByAppToAssetIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCount = reader.uint64() as Long;
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

  fromJSON(object: any): QueryLockerCountByAppToAssetIDResponse {
    return {
      totalCount: isSet(object.totalCount)
        ? Long.fromValue(object.totalCount)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLockerCountByAppToAssetIDResponse): unknown {
    const obj: any = {};
    message.totalCount !== undefined &&
      (obj.totalCount = (message.totalCount || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryLockerCountByAppToAssetIDResponse>, I>
  >(object: I): QueryLockerCountByAppToAssetIDResponse {
    const message = createBaseQueryLockerCountByAppToAssetIDResponse();
    message.totalCount =
      object.totalCount !== undefined && object.totalCount !== null
        ? Long.fromValue(object.totalCount)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryWhiteListedAssetIDsByAppIDRequest(): QueryWhiteListedAssetIDsByAppIDRequest {
  return { appId: Long.UZERO, pagination: undefined };
}

export const QueryWhiteListedAssetIDsByAppIDRequest = {
  encode(
    message: QueryWhiteListedAssetIDsByAppIDRequest,
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
  ): QueryWhiteListedAssetIDsByAppIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhiteListedAssetIDsByAppIDRequest();
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

  fromJSON(object: any): QueryWhiteListedAssetIDsByAppIDRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryWhiteListedAssetIDsByAppIDRequest): unknown {
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
    I extends Exact<DeepPartial<QueryWhiteListedAssetIDsByAppIDRequest>, I>
  >(object: I): QueryWhiteListedAssetIDsByAppIDRequest {
    const message = createBaseQueryWhiteListedAssetIDsByAppIDRequest();
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

function createBaseQueryWhiteListedAssetIDsByAppIDResponse(): QueryWhiteListedAssetIDsByAppIDResponse {
  return { assetIds: [], pagination: undefined };
}

export const QueryWhiteListedAssetIDsByAppIDResponse = {
  encode(
    message: QueryWhiteListedAssetIDsByAppIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.assetIds) {
      writer.uint64(v);
    }
    writer.ldelim();
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
  ): QueryWhiteListedAssetIDsByAppIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhiteListedAssetIDsByAppIDResponse();
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

  fromJSON(object: any): QueryWhiteListedAssetIDsByAppIDResponse {
    return {
      assetIds: Array.isArray(object?.assetIds)
        ? object.assetIds.map((e: any) => Long.fromValue(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryWhiteListedAssetIDsByAppIDResponse): unknown {
    const obj: any = {};
    if (message.assetIds) {
      obj.assetIds = message.assetIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.assetIds = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryWhiteListedAssetIDsByAppIDResponse>, I>
  >(object: I): QueryWhiteListedAssetIDsByAppIDResponse {
    const message = createBaseQueryWhiteListedAssetIDsByAppIDResponse();
    message.assetIds = object.assetIds?.map((e) => Long.fromValue(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryWhiteListedAssetByAllAppsRequest(): QueryWhiteListedAssetByAllAppsRequest {
  return { pagination: undefined };
}

export const QueryWhiteListedAssetByAllAppsRequest = {
  encode(
    message: QueryWhiteListedAssetByAllAppsRequest,
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
  ): QueryWhiteListedAssetByAllAppsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhiteListedAssetByAllAppsRequest();
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

  fromJSON(object: any): QueryWhiteListedAssetByAllAppsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryWhiteListedAssetByAllAppsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryWhiteListedAssetByAllAppsRequest>, I>
  >(object: I): QueryWhiteListedAssetByAllAppsRequest {
    const message = createBaseQueryWhiteListedAssetByAllAppsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryWhiteListedAssetByAllAppsResponse(): QueryWhiteListedAssetByAllAppsResponse {
  return { productToAllAsset: [], pagination: undefined };
}

export const QueryWhiteListedAssetByAllAppsResponse = {
  encode(
    message: QueryWhiteListedAssetByAllAppsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.productToAllAsset) {
      AppToAllAsset.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryWhiteListedAssetByAllAppsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhiteListedAssetByAllAppsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productToAllAsset.push(
            AppToAllAsset.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryWhiteListedAssetByAllAppsResponse {
    return {
      productToAllAsset: Array.isArray(object?.productToAllAsset)
        ? object.productToAllAsset.map((e: any) => AppToAllAsset.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryWhiteListedAssetByAllAppsResponse): unknown {
    const obj: any = {};
    if (message.productToAllAsset) {
      obj.productToAllAsset = message.productToAllAsset.map((e) =>
        e ? AppToAllAsset.toJSON(e) : undefined
      );
    } else {
      obj.productToAllAsset = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryWhiteListedAssetByAllAppsResponse>, I>
  >(object: I): QueryWhiteListedAssetByAllAppsResponse {
    const message = createBaseQueryWhiteListedAssetByAllAppsResponse();
    message.productToAllAsset =
      object.productToAllAsset?.map((e) => AppToAllAsset.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseAppToAllAsset(): AppToAllAsset {
  return { appId: Long.UZERO, assets: [] };
}

export const AppToAllAsset = {
  encode(
    message: AppToAllAsset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppToAllAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppToAllAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
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

  fromJSON(object: any): AppToAllAsset {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assets: Array.isArray(object?.assets)
        ? object.assets.map((e: any) => Asset.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AppToAllAsset): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    if (message.assets) {
      obj.assets = message.assets.map((e) => (e ? Asset.toJSON(e) : undefined));
    } else {
      obj.assets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AppToAllAsset>, I>>(
    object: I
  ): AppToAllAsset {
    const message = createBaseAppToAllAsset();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
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
  return { appId: Long.UZERO, pagination: undefined };
}

export const QueryLockerLookupTableByAppRequest = {
  encode(
    message: QueryLockerLookupTableByAppRequest,
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

  fromJSON(object: any): QueryLockerLookupTableByAppRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLockerLookupTableByAppRequest): unknown {
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
    I extends Exact<DeepPartial<QueryLockerLookupTableByAppRequest>, I>
  >(object: I): QueryLockerLookupTableByAppRequest {
    const message = createBaseQueryLockerLookupTableByAppRequest();
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

function createBaseQueryLockerLookupTableByAppResponse(): QueryLockerLookupTableByAppResponse {
  return { tokenToLockerMapping: [], pagination: undefined };
}

export const QueryLockerLookupTableByAppResponse = {
  encode(
    message: QueryLockerLookupTableByAppResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tokenToLockerMapping) {
      LockerLookupTableData.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryLockerLookupTableByAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerLookupTableByAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenToLockerMapping.push(
            LockerLookupTableData.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryLockerLookupTableByAppResponse {
    return {
      tokenToLockerMapping: Array.isArray(object?.tokenToLockerMapping)
        ? object.tokenToLockerMapping.map((e: any) =>
            LockerLookupTableData.fromJSON(e)
          )
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLockerLookupTableByAppResponse): unknown {
    const obj: any = {};
    if (message.tokenToLockerMapping) {
      obj.tokenToLockerMapping = message.tokenToLockerMapping.map((e) =>
        e ? LockerLookupTableData.toJSON(e) : undefined
      );
    } else {
      obj.tokenToLockerMapping = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryLockerLookupTableByAppResponse>, I>
  >(object: I): QueryLockerLookupTableByAppResponse {
    const message = createBaseQueryLockerLookupTableByAppResponse();
    message.tokenToLockerMapping =
      object.tokenToLockerMapping?.map((e) =>
        LockerLookupTableData.fromPartial(e)
      ) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryLockerLookupTableByAppAndAssetIDRequest(): QueryLockerLookupTableByAppAndAssetIDRequest {
  return { appId: Long.UZERO, assetId: Long.UZERO };
}

export const QueryLockerLookupTableByAppAndAssetIDRequest = {
  encode(
    message: QueryLockerLookupTableByAppAndAssetIDRequest,
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
  ): QueryLockerLookupTableByAppAndAssetIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerLookupTableByAppAndAssetIDRequest();
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

  fromJSON(object: any): QueryLockerLookupTableByAppAndAssetIDRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryLockerLookupTableByAppAndAssetIDRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryLockerLookupTableByAppAndAssetIDRequest>,
      I
    >
  >(object: I): QueryLockerLookupTableByAppAndAssetIDRequest {
    const message = createBaseQueryLockerLookupTableByAppAndAssetIDRequest();
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

function createBaseQueryLockerLookupTableByAppAndAssetIDResponse(): QueryLockerLookupTableByAppAndAssetIDResponse {
  return { tokenToLockerMapping: undefined };
}

export const QueryLockerLookupTableByAppAndAssetIDResponse = {
  encode(
    message: QueryLockerLookupTableByAppAndAssetIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenToLockerMapping !== undefined) {
      LockerLookupTableData.encode(
        message.tokenToLockerMapping,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockerLookupTableByAppAndAssetIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerLookupTableByAppAndAssetIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenToLockerMapping = LockerLookupTableData.decode(
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

  fromJSON(object: any): QueryLockerLookupTableByAppAndAssetIDResponse {
    return {
      tokenToLockerMapping: isSet(object.tokenToLockerMapping)
        ? LockerLookupTableData.fromJSON(object.tokenToLockerMapping)
        : undefined,
    };
  },

  toJSON(message: QueryLockerLookupTableByAppAndAssetIDResponse): unknown {
    const obj: any = {};
    message.tokenToLockerMapping !== undefined &&
      (obj.tokenToLockerMapping = message.tokenToLockerMapping
        ? LockerLookupTableData.toJSON(message.tokenToLockerMapping)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryLockerLookupTableByAppAndAssetIDResponse>,
      I
    >
  >(object: I): QueryLockerLookupTableByAppAndAssetIDResponse {
    const message = createBaseQueryLockerLookupTableByAppAndAssetIDResponse();
    message.tokenToLockerMapping =
      object.tokenToLockerMapping !== undefined &&
      object.tokenToLockerMapping !== null
        ? LockerLookupTableData.fromPartial(object.tokenToLockerMapping)
        : undefined;
    return message;
  },
};

function createBaseQueryLockerTotalDepositedByAppRequest(): QueryLockerTotalDepositedByAppRequest {
  return { appId: Long.UZERO, pagination: undefined };
}

export const QueryLockerTotalDepositedByAppRequest = {
  encode(
    message: QueryLockerTotalDepositedByAppRequest,
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

  fromJSON(object: any): QueryLockerTotalDepositedByAppRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLockerTotalDepositedByAppRequest): unknown {
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
    I extends Exact<DeepPartial<QueryLockerTotalDepositedByAppRequest>, I>
  >(object: I): QueryLockerTotalDepositedByAppRequest {
    const message = createBaseQueryLockerTotalDepositedByAppRequest();
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

function createBaseQueryLockerTotalDepositedByAppResponse(): QueryLockerTotalDepositedByAppResponse {
  return { lockedDepositedAmountDataMap: [], pagination: undefined };
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

  fromJSON(object: any): QueryLockerTotalDepositedByAppResponse {
    return {
      lockedDepositedAmountDataMap: Array.isArray(
        object?.lockedDepositedAmountDataMap
      )
        ? object.lockedDepositedAmountDataMap.map((e: any) =>
            LockedDepositedAmountDataMap.fromJSON(e)
          )
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
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
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
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
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryLockerTotalRewardsByAssetAppWiseRequest(): QueryLockerTotalRewardsByAssetAppWiseRequest {
  return { appId: Long.UZERO, assetId: Long.UZERO };
}

export const QueryLockerTotalRewardsByAssetAppWiseRequest = {
  encode(
    message: QueryLockerTotalRewardsByAssetAppWiseRequest,
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
  ): QueryLockerTotalRewardsByAssetAppWiseRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerTotalRewardsByAssetAppWiseRequest();
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

  fromJSON(object: any): QueryLockerTotalRewardsByAssetAppWiseRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryLockerTotalRewardsByAssetAppWiseRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryLockerTotalRewardsByAssetAppWiseRequest>,
      I
    >
  >(object: I): QueryLockerTotalRewardsByAssetAppWiseRequest {
    const message = createBaseQueryLockerTotalRewardsByAssetAppWiseRequest();
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

function createBaseQueryLockerTotalRewardsByAssetAppWiseResponse(): QueryLockerTotalRewardsByAssetAppWiseResponse {
  return { totalRewards: undefined };
}

export const QueryLockerTotalRewardsByAssetAppWiseResponse = {
  encode(
    message: QueryLockerTotalRewardsByAssetAppWiseResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.totalRewards !== undefined) {
      LockerTotalRewardsByAssetAppWise.encode(
        message.totalRewards,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockerTotalRewardsByAssetAppWiseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockerTotalRewardsByAssetAppWiseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalRewards = LockerTotalRewardsByAssetAppWise.decode(
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

  fromJSON(object: any): QueryLockerTotalRewardsByAssetAppWiseResponse {
    return {
      totalRewards: isSet(object.totalRewards)
        ? LockerTotalRewardsByAssetAppWise.fromJSON(object.totalRewards)
        : undefined,
    };
  },

  toJSON(message: QueryLockerTotalRewardsByAssetAppWiseResponse): unknown {
    const obj: any = {};
    message.totalRewards !== undefined &&
      (obj.totalRewards = message.totalRewards
        ? LockerTotalRewardsByAssetAppWise.toJSON(message.totalRewards)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryLockerTotalRewardsByAssetAppWiseResponse>,
      I
    >
  >(object: I): QueryLockerTotalRewardsByAssetAppWiseResponse {
    const message = createBaseQueryLockerTotalRewardsByAssetAppWiseResponse();
    message.totalRewards =
      object.totalRewards !== undefined && object.totalRewards !== null
        ? LockerTotalRewardsByAssetAppWise.fromPartial(object.totalRewards)
        : undefined;
    return message;
  },
};

export interface Query {
  QueryLockerInfo(
    request: QueryLockerInfoRequest
  ): Promise<QueryLockerInfoResponse>;
  QueryLockersByAppToAssetID(
    request: QueryLockersByAppToAssetIDRequest
  ): Promise<QueryLockersByAppToAssetIDResponse>;
  QueryLockerInfoByAppID(
    request: QueryLockerInfoByAppIDRequest
  ): Promise<QueryLockerInfoByAppIDResponse>;
  QueryTotalDepositByAppAndAssetID(
    request: QueryTotalDepositByAppAndAssetIDRequest
  ): Promise<QueryTotalDepositByAppAndAssetIDResponse>;
  QueryOwnerLockerByAppIDbyOwner(
    request: QueryOwnerLockerByAppIDbyOwnerRequest
  ): Promise<QueryOwnerLockerByAppIDbyOwnerResponse>;
  QueryOwnerLockerOfAllAppsByOwner(
    request: QueryOwnerLockerOfAllAppsByOwnerRequest
  ): Promise<QueryOwnerLockerOfAllAppsByOwnerResponse>;
  QueryOwnerTxDetailsLockerOfAppByOwnerByAsset(
    request: QueryOwnerTxDetailsLockerOfAppByOwnerByAssetRequest
  ): Promise<QueryOwnerTxDetailsLockerOfAppByOwnerByAssetResponse>;
  QueryOwnerLockerByAppToAssetIDbyOwner(
    request: QueryOwnerLockerByAppToAssetIDbyOwnerRequest
  ): Promise<QueryOwnerLockerByAppToAssetIDbyOwnerResponse>;
  QueryLockerByAppByOwner(
    request: QueryLockerByAppByOwnerRequest
  ): Promise<QueryLockerByAppByOwnerResponse>;
  QueryLockerCountByAppID(
    request: QueryLockerCountByAppIDRequest
  ): Promise<QueryLockerCountByAppIDResponse>;
  QueryLockerCountByAppToAssetID(
    request: QueryLockerCountByAppToAssetIDRequest
  ): Promise<QueryLockerCountByAppToAssetIDResponse>;
  QueryWhiteListedAssetIDsByAppID(
    request: QueryWhiteListedAssetIDsByAppIDRequest
  ): Promise<QueryWhiteListedAssetIDsByAppIDResponse>;
  QueryWhiteListedAssetByAllApps(
    request: QueryWhiteListedAssetByAllAppsRequest
  ): Promise<QueryWhiteListedAssetByAllAppsResponse>;
  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  QueryLockerLookupTableByApp(
    request: QueryLockerLookupTableByAppRequest
  ): Promise<QueryLockerLookupTableByAppResponse>;
  QueryLockerLookupTableByAppAndAssetID(
    request: QueryLockerLookupTableByAppAndAssetIDRequest
  ): Promise<QueryLockerLookupTableByAppAndAssetIDResponse>;
  QueryLockerTotalRewardsByAssetAppWise(
    request: QueryLockerTotalRewardsByAssetAppWiseRequest
  ): Promise<QueryLockerTotalRewardsByAssetAppWiseResponse>;
  QueryLockerTotalDepositedByApp(
    request: QueryLockerTotalDepositedByAppRequest
  ): Promise<QueryLockerTotalDepositedByAppResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.QueryLockerInfo = this.QueryLockerInfo.bind(this);
    this.QueryLockersByAppToAssetID =
      this.QueryLockersByAppToAssetID.bind(this);
    this.QueryLockerInfoByAppID = this.QueryLockerInfoByAppID.bind(this);
    this.QueryTotalDepositByAppAndAssetID =
      this.QueryTotalDepositByAppAndAssetID.bind(this);
    this.QueryOwnerLockerByAppIDbyOwner =
      this.QueryOwnerLockerByAppIDbyOwner.bind(this);
    this.QueryOwnerLockerOfAllAppsByOwner =
      this.QueryOwnerLockerOfAllAppsByOwner.bind(this);
    this.QueryOwnerTxDetailsLockerOfAppByOwnerByAsset =
      this.QueryOwnerTxDetailsLockerOfAppByOwnerByAsset.bind(this);
    this.QueryOwnerLockerByAppToAssetIDbyOwner =
      this.QueryOwnerLockerByAppToAssetIDbyOwner.bind(this);
    this.QueryLockerByAppByOwner = this.QueryLockerByAppByOwner.bind(this);
    this.QueryLockerCountByAppID = this.QueryLockerCountByAppID.bind(this);
    this.QueryLockerCountByAppToAssetID =
      this.QueryLockerCountByAppToAssetID.bind(this);
    this.QueryWhiteListedAssetIDsByAppID =
      this.QueryWhiteListedAssetIDsByAppID.bind(this);
    this.QueryWhiteListedAssetByAllApps =
      this.QueryWhiteListedAssetByAllApps.bind(this);
    this.QueryParams = this.QueryParams.bind(this);
    this.QueryLockerLookupTableByApp =
      this.QueryLockerLookupTableByApp.bind(this);
    this.QueryLockerLookupTableByAppAndAssetID =
      this.QueryLockerLookupTableByAppAndAssetID.bind(this);
    this.QueryLockerTotalRewardsByAssetAppWise =
      this.QueryLockerTotalRewardsByAssetAppWise.bind(this);
    this.QueryLockerTotalDepositedByApp =
      this.QueryLockerTotalDepositedByApp.bind(this);
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

  QueryLockersByAppToAssetID(
    request: QueryLockersByAppToAssetIDRequest
  ): Promise<QueryLockersByAppToAssetIDResponse> {
    const data = QueryLockersByAppToAssetIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Query",
      "QueryLockersByAppToAssetID",
      data
    );
    return promise.then((data) =>
      QueryLockersByAppToAssetIDResponse.decode(new _m0.Reader(data))
    );
  }

  QueryLockerInfoByAppID(
    request: QueryLockerInfoByAppIDRequest
  ): Promise<QueryLockerInfoByAppIDResponse> {
    const data = QueryLockerInfoByAppIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Query",
      "QueryLockerInfoByAppID",
      data
    );
    return promise.then((data) =>
      QueryLockerInfoByAppIDResponse.decode(new _m0.Reader(data))
    );
  }

  QueryTotalDepositByAppAndAssetID(
    request: QueryTotalDepositByAppAndAssetIDRequest
  ): Promise<QueryTotalDepositByAppAndAssetIDResponse> {
    const data =
      QueryTotalDepositByAppAndAssetIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Query",
      "QueryTotalDepositByAppAndAssetID",
      data
    );
    return promise.then((data) =>
      QueryTotalDepositByAppAndAssetIDResponse.decode(new _m0.Reader(data))
    );
  }

  QueryOwnerLockerByAppIDbyOwner(
    request: QueryOwnerLockerByAppIDbyOwnerRequest
  ): Promise<QueryOwnerLockerByAppIDbyOwnerResponse> {
    const data = QueryOwnerLockerByAppIDbyOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Query",
      "QueryOwnerLockerByAppIDbyOwner",
      data
    );
    return promise.then((data) =>
      QueryOwnerLockerByAppIDbyOwnerResponse.decode(new _m0.Reader(data))
    );
  }

  QueryOwnerLockerOfAllAppsByOwner(
    request: QueryOwnerLockerOfAllAppsByOwnerRequest
  ): Promise<QueryOwnerLockerOfAllAppsByOwnerResponse> {
    const data =
      QueryOwnerLockerOfAllAppsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Query",
      "QueryOwnerLockerOfAllAppsByOwner",
      data
    );
    return promise.then((data) =>
      QueryOwnerLockerOfAllAppsByOwnerResponse.decode(new _m0.Reader(data))
    );
  }

  QueryOwnerTxDetailsLockerOfAppByOwnerByAsset(
    request: QueryOwnerTxDetailsLockerOfAppByOwnerByAssetRequest
  ): Promise<QueryOwnerTxDetailsLockerOfAppByOwnerByAssetResponse> {
    const data =
      QueryOwnerTxDetailsLockerOfAppByOwnerByAssetRequest.encode(
        request
      ).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Query",
      "QueryOwnerTxDetailsLockerOfAppByOwnerByAsset",
      data
    );
    return promise.then((data) =>
      QueryOwnerTxDetailsLockerOfAppByOwnerByAssetResponse.decode(
        new _m0.Reader(data)
      )
    );
  }

  QueryOwnerLockerByAppToAssetIDbyOwner(
    request: QueryOwnerLockerByAppToAssetIDbyOwnerRequest
  ): Promise<QueryOwnerLockerByAppToAssetIDbyOwnerResponse> {
    const data =
      QueryOwnerLockerByAppToAssetIDbyOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Query",
      "QueryOwnerLockerByAppToAssetIDbyOwner",
      data
    );
    return promise.then((data) =>
      QueryOwnerLockerByAppToAssetIDbyOwnerResponse.decode(new _m0.Reader(data))
    );
  }

  QueryLockerByAppByOwner(
    request: QueryLockerByAppByOwnerRequest
  ): Promise<QueryLockerByAppByOwnerResponse> {
    const data = QueryLockerByAppByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Query",
      "QueryLockerByAppByOwner",
      data
    );
    return promise.then((data) =>
      QueryLockerByAppByOwnerResponse.decode(new _m0.Reader(data))
    );
  }

  QueryLockerCountByAppID(
    request: QueryLockerCountByAppIDRequest
  ): Promise<QueryLockerCountByAppIDResponse> {
    const data = QueryLockerCountByAppIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Query",
      "QueryLockerCountByAppID",
      data
    );
    return promise.then((data) =>
      QueryLockerCountByAppIDResponse.decode(new _m0.Reader(data))
    );
  }

  QueryLockerCountByAppToAssetID(
    request: QueryLockerCountByAppToAssetIDRequest
  ): Promise<QueryLockerCountByAppToAssetIDResponse> {
    const data = QueryLockerCountByAppToAssetIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Query",
      "QueryLockerCountByAppToAssetID",
      data
    );
    return promise.then((data) =>
      QueryLockerCountByAppToAssetIDResponse.decode(new _m0.Reader(data))
    );
  }

  QueryWhiteListedAssetIDsByAppID(
    request: QueryWhiteListedAssetIDsByAppIDRequest
  ): Promise<QueryWhiteListedAssetIDsByAppIDResponse> {
    const data =
      QueryWhiteListedAssetIDsByAppIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Query",
      "QueryWhiteListedAssetIDsByAppID",
      data
    );
    return promise.then((data) =>
      QueryWhiteListedAssetIDsByAppIDResponse.decode(new _m0.Reader(data))
    );
  }

  QueryWhiteListedAssetByAllApps(
    request: QueryWhiteListedAssetByAllAppsRequest
  ): Promise<QueryWhiteListedAssetByAllAppsResponse> {
    const data = QueryWhiteListedAssetByAllAppsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Query",
      "QueryWhiteListedAssetByAllApps",
      data
    );
    return promise.then((data) =>
      QueryWhiteListedAssetByAllAppsResponse.decode(new _m0.Reader(data))
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

  QueryLockerLookupTableByAppAndAssetID(
    request: QueryLockerLookupTableByAppAndAssetIDRequest
  ): Promise<QueryLockerLookupTableByAppAndAssetIDResponse> {
    const data =
      QueryLockerLookupTableByAppAndAssetIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Query",
      "QueryLockerLookupTableByAppAndAssetID",
      data
    );
    return promise.then((data) =>
      QueryLockerLookupTableByAppAndAssetIDResponse.decode(new _m0.Reader(data))
    );
  }

  QueryLockerTotalRewardsByAssetAppWise(
    request: QueryLockerTotalRewardsByAssetAppWiseRequest
  ): Promise<QueryLockerTotalRewardsByAssetAppWiseResponse> {
    const data =
      QueryLockerTotalRewardsByAssetAppWiseRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Query",
      "QueryLockerTotalRewardsByAssetAppWise",
      data
    );
    return promise.then((data) =>
      QueryLockerTotalRewardsByAssetAppWiseResponse.decode(new _m0.Reader(data))
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
