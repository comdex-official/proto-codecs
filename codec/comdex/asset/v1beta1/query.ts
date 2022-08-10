/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Asset } from "../../../comdex/asset/v1beta1/asset";
import { PairInfo } from "../../../comdex/asset/v1beta1/pair";
import { AppData } from "../../../comdex/asset/v1beta1/app";
import { ExtendedPairVault } from "../../../comdex/asset/v1beta1/extendedPairVault";

export const protobufPackage = "comdex.asset.v1beta1";

export interface QueryAssetsRequest {
  pagination?: PageRequest;
}

export interface QueryAssetsResponse {
  assets: Asset[];
  pagination?: PageResponse;
}

export interface QueryAssetRequest {
  id: Long;
}

export interface QueryAssetResponse {
  asset?: Asset;
}

export interface QueryPairsRequest {
  pagination?: PageRequest;
}

export interface QueryPairsResponse {
  pairsInfo: PairInfo[];
  pagination?: PageResponse;
}

export interface QueryPairRequest {
  id: Long;
}

export interface QueryPairResponse {
  pairInfo?: PairInfo;
}

export interface QueryAppRequest {
  id: Long;
}

export interface QueryAppResponse {
  app?: AppData;
}

export interface QueryGovTokenByAppRequest {
  appId: Long;
}

export interface QueryGovTokenByAppResponse {
  govAssetId: Long;
}

export interface QueryAppsRequest {
  pagination?: PageRequest;
}

export interface QueryAppsResponse {
  apps: AppData[];
  pagination?: PageResponse;
}

export interface QueryExtendedPairVaultRequest {
  id: Long;
}

export interface QueryExtendedPairVaultResponse {
  pairVault?: ExtendedPairVault;
}

export interface QueryAllExtendedPairVaultsRequest {
  pagination?: PageRequest;
}

export interface QueryAllExtendedPairVaultsResponse {
  pairVault: ExtendedPairVault[];
  pagination?: PageResponse;
}

export interface QueryAllExtendedPairVaultsByAppRequest {
  appId: Long;
  pagination?: PageRequest;
}

export interface QueryAllExtendedPairVaultsByAppResponse {
  extendedPair: ExtendedPairVault[];
  pagination?: PageResponse;
}

export interface QueryAllExtendedPairStableVaultsIDByAppRequest {
  appId: Long;
  pagination?: PageRequest;
}

export interface QueryAllExtendedPairStableVaultsIDByAppResponse {
  extendedPairsId: Long[];
  pagination?: PageResponse;
}

export interface QueryAllExtendedPairStableVaultsByAppRequest {
  appId: Long;
  pagination?: PageRequest;
}

export interface QueryAllExtendedPairStableVaultsByAppResponse {
  extendedPair: ExtendedPairVault[];
  pagination?: PageResponse;
}

function createBaseQueryAssetsRequest(): QueryAssetsRequest {
  return { pagination: undefined };
}

export const QueryAssetsRequest = {
  encode(
    message: QueryAssetsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetsRequest();
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

  fromJSON(object: any): QueryAssetsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAssetsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAssetsRequest>, I>>(
    object: I
  ): QueryAssetsRequest {
    const message = createBaseQueryAssetsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAssetsResponse(): QueryAssetsResponse {
  return { assets: [], pagination: undefined };
}

export const QueryAssetsResponse = {
  encode(
    message: QueryAssetsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(Asset.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAssetsResponse {
    return {
      assets: Array.isArray(object?.assets)
        ? object.assets.map((e: any) => Asset.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAssetsResponse): unknown {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map((e) => (e ? Asset.toJSON(e) : undefined));
    } else {
      obj.assets = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAssetsResponse>, I>>(
    object: I
  ): QueryAssetsResponse {
    const message = createBaseQueryAssetsResponse();
    message.assets = object.assets?.map((e) => Asset.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAssetRequest(): QueryAssetRequest {
  return { id: Long.UZERO };
}

export const QueryAssetRequest = {
  encode(
    message: QueryAssetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetRequest();
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

  fromJSON(object: any): QueryAssetRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryAssetRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAssetRequest>, I>>(
    object: I
  ): QueryAssetRequest {
    const message = createBaseQueryAssetRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryAssetResponse(): QueryAssetResponse {
  return { asset: undefined };
}

export const QueryAssetResponse = {
  encode(
    message: QueryAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAssetResponse {
    return {
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
    };
  },

  toJSON(message: QueryAssetResponse): unknown {
    const obj: any = {};
    message.asset !== undefined &&
      (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAssetResponse>, I>>(
    object: I
  ): QueryAssetResponse {
    const message = createBaseQueryAssetResponse();
    message.asset =
      object.asset !== undefined && object.asset !== null
        ? Asset.fromPartial(object.asset)
        : undefined;
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
  return { pairsInfo: [], pagination: undefined };
}

export const QueryPairsResponse = {
  encode(
    message: QueryPairsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pairsInfo) {
      PairInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.pairsInfo.push(PairInfo.decode(reader, reader.uint32()));
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
      pairsInfo: Array.isArray(object?.pairsInfo)
        ? object.pairsInfo.map((e: any) => PairInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryPairsResponse): unknown {
    const obj: any = {};
    if (message.pairsInfo) {
      obj.pairsInfo = message.pairsInfo.map((e) =>
        e ? PairInfo.toJSON(e) : undefined
      );
    } else {
      obj.pairsInfo = [];
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
    message.pairsInfo =
      object.pairsInfo?.map((e) => PairInfo.fromPartial(e)) || [];
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
  return { pairInfo: undefined };
}

export const QueryPairResponse = {
  encode(
    message: QueryPairResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pairInfo !== undefined) {
      PairInfo.encode(message.pairInfo, writer.uint32(10).fork()).ldelim();
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
          message.pairInfo = PairInfo.decode(reader, reader.uint32());
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
      pairInfo: isSet(object.pairInfo)
        ? PairInfo.fromJSON(object.pairInfo)
        : undefined,
    };
  },

  toJSON(message: QueryPairResponse): unknown {
    const obj: any = {};
    message.pairInfo !== undefined &&
      (obj.pairInfo = message.pairInfo
        ? PairInfo.toJSON(message.pairInfo)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPairResponse>, I>>(
    object: I
  ): QueryPairResponse {
    const message = createBaseQueryPairResponse();
    message.pairInfo =
      object.pairInfo !== undefined && object.pairInfo !== null
        ? PairInfo.fromPartial(object.pairInfo)
        : undefined;
    return message;
  },
};

function createBaseQueryAppRequest(): QueryAppRequest {
  return { id: Long.UZERO };
}

export const QueryAppRequest = {
  encode(
    message: QueryAppRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppRequest();
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

  fromJSON(object: any): QueryAppRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryAppRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAppRequest>, I>>(
    object: I
  ): QueryAppRequest {
    const message = createBaseQueryAppRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryAppResponse(): QueryAppResponse {
  return { app: undefined };
}

export const QueryAppResponse = {
  encode(
    message: QueryAppResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.app !== undefined) {
      AppData.encode(message.app, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.app = AppData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAppResponse {
    return {
      app: isSet(object.app) ? AppData.fromJSON(object.app) : undefined,
    };
  },

  toJSON(message: QueryAppResponse): unknown {
    const obj: any = {};
    message.app !== undefined &&
      (obj.app = message.app ? AppData.toJSON(message.app) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAppResponse>, I>>(
    object: I
  ): QueryAppResponse {
    const message = createBaseQueryAppResponse();
    message.app =
      object.app !== undefined && object.app !== null
        ? AppData.fromPartial(object.app)
        : undefined;
    return message;
  },
};

function createBaseQueryGovTokenByAppRequest(): QueryGovTokenByAppRequest {
  return { appId: Long.UZERO };
}

export const QueryGovTokenByAppRequest = {
  encode(
    message: QueryGovTokenByAppRequest,
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
  ): QueryGovTokenByAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGovTokenByAppRequest();
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

  fromJSON(object: any): QueryGovTokenByAppRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryGovTokenByAppRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGovTokenByAppRequest>, I>>(
    object: I
  ): QueryGovTokenByAppRequest {
    const message = createBaseQueryGovTokenByAppRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryGovTokenByAppResponse(): QueryGovTokenByAppResponse {
  return { govAssetId: Long.UZERO };
}

export const QueryGovTokenByAppResponse = {
  encode(
    message: QueryGovTokenByAppResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.govAssetId.isZero()) {
      writer.uint32(8).uint64(message.govAssetId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGovTokenByAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGovTokenByAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.govAssetId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGovTokenByAppResponse {
    return {
      govAssetId: isSet(object.govAssetId)
        ? Long.fromValue(object.govAssetId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryGovTokenByAppResponse): unknown {
    const obj: any = {};
    message.govAssetId !== undefined &&
      (obj.govAssetId = (message.govAssetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGovTokenByAppResponse>, I>>(
    object: I
  ): QueryGovTokenByAppResponse {
    const message = createBaseQueryGovTokenByAppResponse();
    message.govAssetId =
      object.govAssetId !== undefined && object.govAssetId !== null
        ? Long.fromValue(object.govAssetId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryAppsRequest(): QueryAppsRequest {
  return { pagination: undefined };
}

export const QueryAppsRequest = {
  encode(
    message: QueryAppsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppsRequest();
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

  fromJSON(object: any): QueryAppsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAppsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAppsRequest>, I>>(
    object: I
  ): QueryAppsRequest {
    const message = createBaseQueryAppsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAppsResponse(): QueryAppsResponse {
  return { apps: [], pagination: undefined };
}

export const QueryAppsResponse = {
  encode(
    message: QueryAppsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.apps) {
      AppData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apps.push(AppData.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAppsResponse {
    return {
      apps: Array.isArray(object?.apps)
        ? object.apps.map((e: any) => AppData.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAppsResponse): unknown {
    const obj: any = {};
    if (message.apps) {
      obj.apps = message.apps.map((e) => (e ? AppData.toJSON(e) : undefined));
    } else {
      obj.apps = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAppsResponse>, I>>(
    object: I
  ): QueryAppsResponse {
    const message = createBaseQueryAppsResponse();
    message.apps = object.apps?.map((e) => AppData.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryExtendedPairVaultRequest(): QueryExtendedPairVaultRequest {
  return { id: Long.UZERO };
}

export const QueryExtendedPairVaultRequest = {
  encode(
    message: QueryExtendedPairVaultRequest,
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
  ): QueryExtendedPairVaultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExtendedPairVaultRequest();
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

  fromJSON(object: any): QueryExtendedPairVaultRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryExtendedPairVaultRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryExtendedPairVaultRequest>, I>>(
    object: I
  ): QueryExtendedPairVaultRequest {
    const message = createBaseQueryExtendedPairVaultRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryExtendedPairVaultResponse(): QueryExtendedPairVaultResponse {
  return { pairVault: undefined };
}

export const QueryExtendedPairVaultResponse = {
  encode(
    message: QueryExtendedPairVaultResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pairVault !== undefined) {
      ExtendedPairVault.encode(
        message.pairVault,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryExtendedPairVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExtendedPairVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairVault = ExtendedPairVault.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryExtendedPairVaultResponse {
    return {
      pairVault: isSet(object.pairVault)
        ? ExtendedPairVault.fromJSON(object.pairVault)
        : undefined,
    };
  },

  toJSON(message: QueryExtendedPairVaultResponse): unknown {
    const obj: any = {};
    message.pairVault !== undefined &&
      (obj.pairVault = message.pairVault
        ? ExtendedPairVault.toJSON(message.pairVault)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryExtendedPairVaultResponse>, I>>(
    object: I
  ): QueryExtendedPairVaultResponse {
    const message = createBaseQueryExtendedPairVaultResponse();
    message.pairVault =
      object.pairVault !== undefined && object.pairVault !== null
        ? ExtendedPairVault.fromPartial(object.pairVault)
        : undefined;
    return message;
  },
};

function createBaseQueryAllExtendedPairVaultsRequest(): QueryAllExtendedPairVaultsRequest {
  return { pagination: undefined };
}

export const QueryAllExtendedPairVaultsRequest = {
  encode(
    message: QueryAllExtendedPairVaultsRequest,
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
  ): QueryAllExtendedPairVaultsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExtendedPairVaultsRequest();
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

  fromJSON(object: any): QueryAllExtendedPairVaultsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllExtendedPairVaultsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAllExtendedPairVaultsRequest>, I>
  >(object: I): QueryAllExtendedPairVaultsRequest {
    const message = createBaseQueryAllExtendedPairVaultsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllExtendedPairVaultsResponse(): QueryAllExtendedPairVaultsResponse {
  return { pairVault: [], pagination: undefined };
}

export const QueryAllExtendedPairVaultsResponse = {
  encode(
    message: QueryAllExtendedPairVaultsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pairVault) {
      ExtendedPairVault.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllExtendedPairVaultsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExtendedPairVaultsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairVault.push(
            ExtendedPairVault.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllExtendedPairVaultsResponse {
    return {
      pairVault: Array.isArray(object?.pairVault)
        ? object.pairVault.map((e: any) => ExtendedPairVault.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllExtendedPairVaultsResponse): unknown {
    const obj: any = {};
    if (message.pairVault) {
      obj.pairVault = message.pairVault.map((e) =>
        e ? ExtendedPairVault.toJSON(e) : undefined
      );
    } else {
      obj.pairVault = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAllExtendedPairVaultsResponse>, I>
  >(object: I): QueryAllExtendedPairVaultsResponse {
    const message = createBaseQueryAllExtendedPairVaultsResponse();
    message.pairVault =
      object.pairVault?.map((e) => ExtendedPairVault.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllExtendedPairVaultsByAppRequest(): QueryAllExtendedPairVaultsByAppRequest {
  return { appId: Long.UZERO, pagination: undefined };
}

export const QueryAllExtendedPairVaultsByAppRequest = {
  encode(
    message: QueryAllExtendedPairVaultsByAppRequest,
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
  ): QueryAllExtendedPairVaultsByAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExtendedPairVaultsByAppRequest();
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

  fromJSON(object: any): QueryAllExtendedPairVaultsByAppRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllExtendedPairVaultsByAppRequest): unknown {
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
    I extends Exact<DeepPartial<QueryAllExtendedPairVaultsByAppRequest>, I>
  >(object: I): QueryAllExtendedPairVaultsByAppRequest {
    const message = createBaseQueryAllExtendedPairVaultsByAppRequest();
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

function createBaseQueryAllExtendedPairVaultsByAppResponse(): QueryAllExtendedPairVaultsByAppResponse {
  return { extendedPair: [], pagination: undefined };
}

export const QueryAllExtendedPairVaultsByAppResponse = {
  encode(
    message: QueryAllExtendedPairVaultsByAppResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.extendedPair) {
      ExtendedPairVault.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllExtendedPairVaultsByAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExtendedPairVaultsByAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extendedPair.push(
            ExtendedPairVault.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllExtendedPairVaultsByAppResponse {
    return {
      extendedPair: Array.isArray(object?.extendedPair)
        ? object.extendedPair.map((e: any) => ExtendedPairVault.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllExtendedPairVaultsByAppResponse): unknown {
    const obj: any = {};
    if (message.extendedPair) {
      obj.extendedPair = message.extendedPair.map((e) =>
        e ? ExtendedPairVault.toJSON(e) : undefined
      );
    } else {
      obj.extendedPair = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAllExtendedPairVaultsByAppResponse>, I>
  >(object: I): QueryAllExtendedPairVaultsByAppResponse {
    const message = createBaseQueryAllExtendedPairVaultsByAppResponse();
    message.extendedPair =
      object.extendedPair?.map((e) => ExtendedPairVault.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllExtendedPairStableVaultsIDByAppRequest(): QueryAllExtendedPairStableVaultsIDByAppRequest {
  return { appId: Long.UZERO, pagination: undefined };
}

export const QueryAllExtendedPairStableVaultsIDByAppRequest = {
  encode(
    message: QueryAllExtendedPairStableVaultsIDByAppRequest,
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
  ): QueryAllExtendedPairStableVaultsIDByAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExtendedPairStableVaultsIDByAppRequest();
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

  fromJSON(object: any): QueryAllExtendedPairStableVaultsIDByAppRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllExtendedPairStableVaultsIDByAppRequest): unknown {
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
    I extends Exact<
      DeepPartial<QueryAllExtendedPairStableVaultsIDByAppRequest>,
      I
    >
  >(object: I): QueryAllExtendedPairStableVaultsIDByAppRequest {
    const message = createBaseQueryAllExtendedPairStableVaultsIDByAppRequest();
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

function createBaseQueryAllExtendedPairStableVaultsIDByAppResponse(): QueryAllExtendedPairStableVaultsIDByAppResponse {
  return { extendedPairsId: [], pagination: undefined };
}

export const QueryAllExtendedPairStableVaultsIDByAppResponse = {
  encode(
    message: QueryAllExtendedPairStableVaultsIDByAppResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.extendedPairsId) {
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
  ): QueryAllExtendedPairStableVaultsIDByAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExtendedPairStableVaultsIDByAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.extendedPairsId.push(reader.uint64() as Long);
            }
          } else {
            message.extendedPairsId.push(reader.uint64() as Long);
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

  fromJSON(object: any): QueryAllExtendedPairStableVaultsIDByAppResponse {
    return {
      extendedPairsId: Array.isArray(object?.extendedPairsId)
        ? object.extendedPairsId.map((e: any) => Long.fromValue(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllExtendedPairStableVaultsIDByAppResponse): unknown {
    const obj: any = {};
    if (message.extendedPairsId) {
      obj.extendedPairsId = message.extendedPairsId.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.extendedPairsId = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryAllExtendedPairStableVaultsIDByAppResponse>,
      I
    >
  >(object: I): QueryAllExtendedPairStableVaultsIDByAppResponse {
    const message = createBaseQueryAllExtendedPairStableVaultsIDByAppResponse();
    message.extendedPairsId =
      object.extendedPairsId?.map((e) => Long.fromValue(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllExtendedPairStableVaultsByAppRequest(): QueryAllExtendedPairStableVaultsByAppRequest {
  return { appId: Long.UZERO, pagination: undefined };
}

export const QueryAllExtendedPairStableVaultsByAppRequest = {
  encode(
    message: QueryAllExtendedPairStableVaultsByAppRequest,
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
  ): QueryAllExtendedPairStableVaultsByAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExtendedPairStableVaultsByAppRequest();
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

  fromJSON(object: any): QueryAllExtendedPairStableVaultsByAppRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllExtendedPairStableVaultsByAppRequest): unknown {
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
    I extends Exact<
      DeepPartial<QueryAllExtendedPairStableVaultsByAppRequest>,
      I
    >
  >(object: I): QueryAllExtendedPairStableVaultsByAppRequest {
    const message = createBaseQueryAllExtendedPairStableVaultsByAppRequest();
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

function createBaseQueryAllExtendedPairStableVaultsByAppResponse(): QueryAllExtendedPairStableVaultsByAppResponse {
  return { extendedPair: [], pagination: undefined };
}

export const QueryAllExtendedPairStableVaultsByAppResponse = {
  encode(
    message: QueryAllExtendedPairStableVaultsByAppResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.extendedPair) {
      ExtendedPairVault.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllExtendedPairStableVaultsByAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExtendedPairStableVaultsByAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extendedPair.push(
            ExtendedPairVault.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllExtendedPairStableVaultsByAppResponse {
    return {
      extendedPair: Array.isArray(object?.extendedPair)
        ? object.extendedPair.map((e: any) => ExtendedPairVault.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllExtendedPairStableVaultsByAppResponse): unknown {
    const obj: any = {};
    if (message.extendedPair) {
      obj.extendedPair = message.extendedPair.map((e) =>
        e ? ExtendedPairVault.toJSON(e) : undefined
      );
    } else {
      obj.extendedPair = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryAllExtendedPairStableVaultsByAppResponse>,
      I
    >
  >(object: I): QueryAllExtendedPairStableVaultsByAppResponse {
    const message = createBaseQueryAllExtendedPairStableVaultsByAppResponse();
    message.extendedPair =
      object.extendedPair?.map((e) => ExtendedPairVault.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

export interface Query {
  QueryAssets(request: QueryAssetsRequest): Promise<QueryAssetsResponse>;
  QueryAsset(request: QueryAssetRequest): Promise<QueryAssetResponse>;
  QueryPairs(request: QueryPairsRequest): Promise<QueryPairsResponse>;
  QueryPair(request: QueryPairRequest): Promise<QueryPairResponse>;
  QueryApps(request: QueryAppsRequest): Promise<QueryAppsResponse>;
  QueryApp(request: QueryAppRequest): Promise<QueryAppResponse>;
  QueryExtendedPairVault(
    request: QueryExtendedPairVaultRequest
  ): Promise<QueryExtendedPairVaultResponse>;
  QueryAllExtendedPairVaults(
    request: QueryAllExtendedPairVaultsRequest
  ): Promise<QueryAllExtendedPairVaultsResponse>;
  QueryAllExtendedPairVaultsByApp(
    request: QueryAllExtendedPairVaultsByAppRequest
  ): Promise<QueryAllExtendedPairVaultsByAppResponse>;
  QueryAllExtendedPairStableVaultsIDByApp(
    request: QueryAllExtendedPairStableVaultsIDByAppRequest
  ): Promise<QueryAllExtendedPairStableVaultsIDByAppResponse>;
  QueryGovTokenByApp(
    request: QueryGovTokenByAppRequest
  ): Promise<QueryGovTokenByAppResponse>;
  QueryAllExtendedPairStableVaultsByApp(
    request: QueryAllExtendedPairStableVaultsByAppRequest
  ): Promise<QueryAllExtendedPairStableVaultsByAppResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.QueryAssets = this.QueryAssets.bind(this);
    this.QueryAsset = this.QueryAsset.bind(this);
    this.QueryPairs = this.QueryPairs.bind(this);
    this.QueryPair = this.QueryPair.bind(this);
    this.QueryApps = this.QueryApps.bind(this);
    this.QueryApp = this.QueryApp.bind(this);
    this.QueryExtendedPairVault = this.QueryExtendedPairVault.bind(this);
    this.QueryAllExtendedPairVaults =
      this.QueryAllExtendedPairVaults.bind(this);
    this.QueryAllExtendedPairVaultsByApp =
      this.QueryAllExtendedPairVaultsByApp.bind(this);
    this.QueryAllExtendedPairStableVaultsIDByApp =
      this.QueryAllExtendedPairStableVaultsIDByApp.bind(this);
    this.QueryGovTokenByApp = this.QueryGovTokenByApp.bind(this);
    this.QueryAllExtendedPairStableVaultsByApp =
      this.QueryAllExtendedPairStableVaultsByApp.bind(this);
  }
  QueryAssets(request: QueryAssetsRequest): Promise<QueryAssetsResponse> {
    const data = QueryAssetsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.Query",
      "QueryAssets",
      data
    );
    return promise.then((data) =>
      QueryAssetsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAsset(request: QueryAssetRequest): Promise<QueryAssetResponse> {
    const data = QueryAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.Query",
      "QueryAsset",
      data
    );
    return promise.then((data) =>
      QueryAssetResponse.decode(new _m0.Reader(data))
    );
  }

  QueryPairs(request: QueryPairsRequest): Promise<QueryPairsResponse> {
    const data = QueryPairsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.Query",
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
      "comdex.asset.v1beta1.Query",
      "QueryPair",
      data
    );
    return promise.then((data) =>
      QueryPairResponse.decode(new _m0.Reader(data))
    );
  }

  QueryApps(request: QueryAppsRequest): Promise<QueryAppsResponse> {
    const data = QueryAppsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.Query",
      "QueryApps",
      data
    );
    return promise.then((data) =>
      QueryAppsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryApp(request: QueryAppRequest): Promise<QueryAppResponse> {
    const data = QueryAppRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.Query",
      "QueryApp",
      data
    );
    return promise.then((data) =>
      QueryAppResponse.decode(new _m0.Reader(data))
    );
  }

  QueryExtendedPairVault(
    request: QueryExtendedPairVaultRequest
  ): Promise<QueryExtendedPairVaultResponse> {
    const data = QueryExtendedPairVaultRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.Query",
      "QueryExtendedPairVault",
      data
    );
    return promise.then((data) =>
      QueryExtendedPairVaultResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAllExtendedPairVaults(
    request: QueryAllExtendedPairVaultsRequest
  ): Promise<QueryAllExtendedPairVaultsResponse> {
    const data = QueryAllExtendedPairVaultsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.Query",
      "QueryAllExtendedPairVaults",
      data
    );
    return promise.then((data) =>
      QueryAllExtendedPairVaultsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAllExtendedPairVaultsByApp(
    request: QueryAllExtendedPairVaultsByAppRequest
  ): Promise<QueryAllExtendedPairVaultsByAppResponse> {
    const data =
      QueryAllExtendedPairVaultsByAppRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.Query",
      "QueryAllExtendedPairVaultsByApp",
      data
    );
    return promise.then((data) =>
      QueryAllExtendedPairVaultsByAppResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAllExtendedPairStableVaultsIDByApp(
    request: QueryAllExtendedPairStableVaultsIDByAppRequest
  ): Promise<QueryAllExtendedPairStableVaultsIDByAppResponse> {
    const data =
      QueryAllExtendedPairStableVaultsIDByAppRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.Query",
      "QueryAllExtendedPairStableVaultsIDByApp",
      data
    );
    return promise.then((data) =>
      QueryAllExtendedPairStableVaultsIDByAppResponse.decode(
        new _m0.Reader(data)
      )
    );
  }

  QueryGovTokenByApp(
    request: QueryGovTokenByAppRequest
  ): Promise<QueryGovTokenByAppResponse> {
    const data = QueryGovTokenByAppRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.Query",
      "QueryGovTokenByApp",
      data
    );
    return promise.then((data) =>
      QueryGovTokenByAppResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAllExtendedPairStableVaultsByApp(
    request: QueryAllExtendedPairStableVaultsByAppRequest
  ): Promise<QueryAllExtendedPairStableVaultsByAppResponse> {
    const data =
      QueryAllExtendedPairStableVaultsByAppRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.Query",
      "QueryAllExtendedPairStableVaultsByApp",
      data
    );
    return promise.then((data) =>
      QueryAllExtendedPairStableVaultsByAppResponse.decode(new _m0.Reader(data))
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
