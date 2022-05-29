/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Asset } from "./comdex/asset/v1beta1/asset";
import { Params } from "./comdex/asset/v1beta1/params";
import { AppMapping } from "./comdex/asset/v1beta1/appMapping";
import { ExtendedPairVault } from "./comdex/asset/v1beta1/extendedPairVault";

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

export interface PairInfo {
  id: Long;
  assetIn: Long;
  denomIn: string;
  assetOut: Long;
  denomOut: string;
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

export interface QueryParamsRequest {}

export interface QueryParamsResponse {
  params?: Params;
}

export interface QueryAppRequest {
  id: Long;
}

export interface QueryAppResponse {
  app?: AppMapping;
}

export interface QueryTokenGovRequest {
  appId: Long;
}

export interface QueryTokenGovResponse {
  govAssetId: Long;
}

export interface QueryAppsRequest {}

export interface QueryAppsResponse {
  apps: AppMapping[];
}

export interface QueryPairVaultRequest {
  id: Long;
}

export interface QueryPairVaultResponse {
  pairVault?: ExtendedPairVault;
}

export interface QueryPairVaultsRequest {}

export interface QueryPairVaultsResponse {
  pairVault: ExtendedPairVault[];
}

export interface QueryProductToExtendedPairRequest {
  productId: Long;
}

export interface QueryProductToExtendedPairResponse {
  extendedPair: ExtendedPairVault[];
}

export interface QueryExtendedPairPsmPairWiseRequest {
  productId: Long;
}

export interface QueryExtendedPairPsmPairWiseResponse {
  extendedPairsId: Long[];
}

export interface QueryExtendedPairDataPsmPairWiseRequest {
  appId: Long;
}

export interface QueryExtendedPairDataPsmPairWiseResponse {
  extendedPair: ExtendedPairVault[];
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

function createBasePairInfo(): PairInfo {
  return {
    id: Long.UZERO,
    assetIn: Long.UZERO,
    denomIn: "",
    assetOut: Long.UZERO,
    denomOut: "",
  };
}

export const PairInfo = {
  encode(
    message: PairInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.assetIn.isZero()) {
      writer.uint32(16).uint64(message.assetIn);
    }
    if (message.denomIn !== "") {
      writer.uint32(26).string(message.denomIn);
    }
    if (!message.assetOut.isZero()) {
      writer.uint32(32).uint64(message.assetOut);
    }
    if (message.denomOut !== "") {
      writer.uint32(42).string(message.denomOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PairInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePairInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.assetIn = reader.uint64() as Long;
          break;
        case 3:
          message.denomIn = reader.string();
          break;
        case 4:
          message.assetOut = reader.uint64() as Long;
          break;
        case 5:
          message.denomOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PairInfo {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      assetIn: isSet(object.assetIn)
        ? Long.fromValue(object.assetIn)
        : Long.UZERO,
      denomIn: isSet(object.denomIn) ? String(object.denomIn) : "",
      assetOut: isSet(object.assetOut)
        ? Long.fromValue(object.assetOut)
        : Long.UZERO,
      denomOut: isSet(object.denomOut) ? String(object.denomOut) : "",
    };
  },

  toJSON(message: PairInfo): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.assetIn !== undefined &&
      (obj.assetIn = (message.assetIn || Long.UZERO).toString());
    message.denomIn !== undefined && (obj.denomIn = message.denomIn);
    message.assetOut !== undefined &&
      (obj.assetOut = (message.assetOut || Long.UZERO).toString());
    message.denomOut !== undefined && (obj.denomOut = message.denomOut);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PairInfo>, I>>(object: I): PairInfo {
    const message = createBasePairInfo();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.assetIn =
      object.assetIn !== undefined && object.assetIn !== null
        ? Long.fromValue(object.assetIn)
        : Long.UZERO;
    message.denomIn = object.denomIn ?? "";
    message.assetOut =
      object.assetOut !== undefined && object.assetOut !== null
        ? Long.fromValue(object.assetOut)
        : Long.UZERO;
    message.denomOut = object.denomOut ?? "";
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
      AppMapping.encode(message.app, writer.uint32(10).fork()).ldelim();
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
          message.app = AppMapping.decode(reader, reader.uint32());
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
      app: isSet(object.app) ? AppMapping.fromJSON(object.app) : undefined,
    };
  },

  toJSON(message: QueryAppResponse): unknown {
    const obj: any = {};
    message.app !== undefined &&
      (obj.app = message.app ? AppMapping.toJSON(message.app) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAppResponse>, I>>(
    object: I
  ): QueryAppResponse {
    const message = createBaseQueryAppResponse();
    message.app =
      object.app !== undefined && object.app !== null
        ? AppMapping.fromPartial(object.app)
        : undefined;
    return message;
  },
};

function createBaseQueryTokenGovRequest(): QueryTokenGovRequest {
  return { appId: Long.UZERO };
}

export const QueryTokenGovRequest = {
  encode(
    message: QueryTokenGovRequest,
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
  ): QueryTokenGovRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenGovRequest();
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

  fromJSON(object: any): QueryTokenGovRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryTokenGovRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenGovRequest>, I>>(
    object: I
  ): QueryTokenGovRequest {
    const message = createBaseQueryTokenGovRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryTokenGovResponse(): QueryTokenGovResponse {
  return { govAssetId: Long.UZERO };
}

export const QueryTokenGovResponse = {
  encode(
    message: QueryTokenGovResponse,
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
  ): QueryTokenGovResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenGovResponse();
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

  fromJSON(object: any): QueryTokenGovResponse {
    return {
      govAssetId: isSet(object.govAssetId)
        ? Long.fromValue(object.govAssetId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryTokenGovResponse): unknown {
    const obj: any = {};
    message.govAssetId !== undefined &&
      (obj.govAssetId = (message.govAssetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenGovResponse>, I>>(
    object: I
  ): QueryTokenGovResponse {
    const message = createBaseQueryTokenGovResponse();
    message.govAssetId =
      object.govAssetId !== undefined && object.govAssetId !== null
        ? Long.fromValue(object.govAssetId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryAppsRequest(): QueryAppsRequest {
  return {};
}

export const QueryAppsRequest = {
  encode(
    _: QueryAppsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppsRequest();
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

  fromJSON(_: any): QueryAppsRequest {
    return {};
  },

  toJSON(_: QueryAppsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAppsRequest>, I>>(
    _: I
  ): QueryAppsRequest {
    const message = createBaseQueryAppsRequest();
    return message;
  },
};

function createBaseQueryAppsResponse(): QueryAppsResponse {
  return { apps: [] };
}

export const QueryAppsResponse = {
  encode(
    message: QueryAppsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.apps) {
      AppMapping.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.apps.push(AppMapping.decode(reader, reader.uint32()));
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
        ? object.apps.map((e: any) => AppMapping.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAppsResponse): unknown {
    const obj: any = {};
    if (message.apps) {
      obj.apps = message.apps.map((e) =>
        e ? AppMapping.toJSON(e) : undefined
      );
    } else {
      obj.apps = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAppsResponse>, I>>(
    object: I
  ): QueryAppsResponse {
    const message = createBaseQueryAppsResponse();
    message.apps = object.apps?.map((e) => AppMapping.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryPairVaultRequest(): QueryPairVaultRequest {
  return { id: Long.UZERO };
}

export const QueryPairVaultRequest = {
  encode(
    message: QueryPairVaultRequest,
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
  ): QueryPairVaultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairVaultRequest();
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

  fromJSON(object: any): QueryPairVaultRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryPairVaultRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPairVaultRequest>, I>>(
    object: I
  ): QueryPairVaultRequest {
    const message = createBaseQueryPairVaultRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryPairVaultResponse(): QueryPairVaultResponse {
  return { pairVault: undefined };
}

export const QueryPairVaultResponse = {
  encode(
    message: QueryPairVaultResponse,
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
  ): QueryPairVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairVaultResponse();
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

  fromJSON(object: any): QueryPairVaultResponse {
    return {
      pairVault: isSet(object.pairVault)
        ? ExtendedPairVault.fromJSON(object.pairVault)
        : undefined,
    };
  },

  toJSON(message: QueryPairVaultResponse): unknown {
    const obj: any = {};
    message.pairVault !== undefined &&
      (obj.pairVault = message.pairVault
        ? ExtendedPairVault.toJSON(message.pairVault)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPairVaultResponse>, I>>(
    object: I
  ): QueryPairVaultResponse {
    const message = createBaseQueryPairVaultResponse();
    message.pairVault =
      object.pairVault !== undefined && object.pairVault !== null
        ? ExtendedPairVault.fromPartial(object.pairVault)
        : undefined;
    return message;
  },
};

function createBaseQueryPairVaultsRequest(): QueryPairVaultsRequest {
  return {};
}

export const QueryPairVaultsRequest = {
  encode(
    _: QueryPairVaultsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPairVaultsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairVaultsRequest();
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

  fromJSON(_: any): QueryPairVaultsRequest {
    return {};
  },

  toJSON(_: QueryPairVaultsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPairVaultsRequest>, I>>(
    _: I
  ): QueryPairVaultsRequest {
    const message = createBaseQueryPairVaultsRequest();
    return message;
  },
};

function createBaseQueryPairVaultsResponse(): QueryPairVaultsResponse {
  return { pairVault: [] };
}

export const QueryPairVaultsResponse = {
  encode(
    message: QueryPairVaultsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pairVault) {
      ExtendedPairVault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPairVaultsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairVaultsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairVault.push(
            ExtendedPairVault.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPairVaultsResponse {
    return {
      pairVault: Array.isArray(object?.pairVault)
        ? object.pairVault.map((e: any) => ExtendedPairVault.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryPairVaultsResponse): unknown {
    const obj: any = {};
    if (message.pairVault) {
      obj.pairVault = message.pairVault.map((e) =>
        e ? ExtendedPairVault.toJSON(e) : undefined
      );
    } else {
      obj.pairVault = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPairVaultsResponse>, I>>(
    object: I
  ): QueryPairVaultsResponse {
    const message = createBaseQueryPairVaultsResponse();
    message.pairVault =
      object.pairVault?.map((e) => ExtendedPairVault.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryProductToExtendedPairRequest(): QueryProductToExtendedPairRequest {
  return { productId: Long.UZERO };
}

export const QueryProductToExtendedPairRequest = {
  encode(
    message: QueryProductToExtendedPairRequest,
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
  ): QueryProductToExtendedPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProductToExtendedPairRequest();
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

  fromJSON(object: any): QueryProductToExtendedPairRequest {
    return {
      productId: isSet(object.productId)
        ? Long.fromValue(object.productId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryProductToExtendedPairRequest): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryProductToExtendedPairRequest>, I>
  >(object: I): QueryProductToExtendedPairRequest {
    const message = createBaseQueryProductToExtendedPairRequest();
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? Long.fromValue(object.productId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryProductToExtendedPairResponse(): QueryProductToExtendedPairResponse {
  return { extendedPair: [] };
}

export const QueryProductToExtendedPairResponse = {
  encode(
    message: QueryProductToExtendedPairResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.extendedPair) {
      ExtendedPairVault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProductToExtendedPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProductToExtendedPairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extendedPair.push(
            ExtendedPairVault.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProductToExtendedPairResponse {
    return {
      extendedPair: Array.isArray(object?.extendedPair)
        ? object.extendedPair.map((e: any) => ExtendedPairVault.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryProductToExtendedPairResponse): unknown {
    const obj: any = {};
    if (message.extendedPair) {
      obj.extendedPair = message.extendedPair.map((e) =>
        e ? ExtendedPairVault.toJSON(e) : undefined
      );
    } else {
      obj.extendedPair = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryProductToExtendedPairResponse>, I>
  >(object: I): QueryProductToExtendedPairResponse {
    const message = createBaseQueryProductToExtendedPairResponse();
    message.extendedPair =
      object.extendedPair?.map((e) => ExtendedPairVault.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryExtendedPairPsmPairWiseRequest(): QueryExtendedPairPsmPairWiseRequest {
  return { productId: Long.UZERO };
}

export const QueryExtendedPairPsmPairWiseRequest = {
  encode(
    message: QueryExtendedPairPsmPairWiseRequest,
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
  ): QueryExtendedPairPsmPairWiseRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExtendedPairPsmPairWiseRequest();
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

  fromJSON(object: any): QueryExtendedPairPsmPairWiseRequest {
    return {
      productId: isSet(object.productId)
        ? Long.fromValue(object.productId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryExtendedPairPsmPairWiseRequest): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryExtendedPairPsmPairWiseRequest>, I>
  >(object: I): QueryExtendedPairPsmPairWiseRequest {
    const message = createBaseQueryExtendedPairPsmPairWiseRequest();
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? Long.fromValue(object.productId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryExtendedPairPsmPairWiseResponse(): QueryExtendedPairPsmPairWiseResponse {
  return { extendedPairsId: [] };
}

export const QueryExtendedPairPsmPairWiseResponse = {
  encode(
    message: QueryExtendedPairPsmPairWiseResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.extendedPairsId) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryExtendedPairPsmPairWiseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExtendedPairPsmPairWiseResponse();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryExtendedPairPsmPairWiseResponse {
    return {
      extendedPairsId: Array.isArray(object?.extendedPairsId)
        ? object.extendedPairsId.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: QueryExtendedPairPsmPairWiseResponse): unknown {
    const obj: any = {};
    if (message.extendedPairsId) {
      obj.extendedPairsId = message.extendedPairsId.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.extendedPairsId = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryExtendedPairPsmPairWiseResponse>, I>
  >(object: I): QueryExtendedPairPsmPairWiseResponse {
    const message = createBaseQueryExtendedPairPsmPairWiseResponse();
    message.extendedPairsId =
      object.extendedPairsId?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseQueryExtendedPairDataPsmPairWiseRequest(): QueryExtendedPairDataPsmPairWiseRequest {
  return { appId: Long.UZERO };
}

export const QueryExtendedPairDataPsmPairWiseRequest = {
  encode(
    message: QueryExtendedPairDataPsmPairWiseRequest,
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
  ): QueryExtendedPairDataPsmPairWiseRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExtendedPairDataPsmPairWiseRequest();
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

  fromJSON(object: any): QueryExtendedPairDataPsmPairWiseRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryExtendedPairDataPsmPairWiseRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryExtendedPairDataPsmPairWiseRequest>, I>
  >(object: I): QueryExtendedPairDataPsmPairWiseRequest {
    const message = createBaseQueryExtendedPairDataPsmPairWiseRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryExtendedPairDataPsmPairWiseResponse(): QueryExtendedPairDataPsmPairWiseResponse {
  return { extendedPair: [] };
}

export const QueryExtendedPairDataPsmPairWiseResponse = {
  encode(
    message: QueryExtendedPairDataPsmPairWiseResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.extendedPair) {
      ExtendedPairVault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryExtendedPairDataPsmPairWiseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExtendedPairDataPsmPairWiseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extendedPair.push(
            ExtendedPairVault.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryExtendedPairDataPsmPairWiseResponse {
    return {
      extendedPair: Array.isArray(object?.extendedPair)
        ? object.extendedPair.map((e: any) => ExtendedPairVault.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryExtendedPairDataPsmPairWiseResponse): unknown {
    const obj: any = {};
    if (message.extendedPair) {
      obj.extendedPair = message.extendedPair.map((e) =>
        e ? ExtendedPairVault.toJSON(e) : undefined
      );
    } else {
      obj.extendedPair = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryExtendedPairDataPsmPairWiseResponse>, I>
  >(object: I): QueryExtendedPairDataPsmPairWiseResponse {
    const message = createBaseQueryExtendedPairDataPsmPairWiseResponse();
    message.extendedPair =
      object.extendedPair?.map((e) => ExtendedPairVault.fromPartial(e)) || [];
    return message;
  },
};

export interface QueryService {
  QueryAssets(request: QueryAssetsRequest): Promise<QueryAssetsResponse>;
  QueryAsset(request: QueryAssetRequest): Promise<QueryAssetResponse>;
  QueryPairs(request: QueryPairsRequest): Promise<QueryPairsResponse>;
  QueryPair(request: QueryPairRequest): Promise<QueryPairResponse>;
  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  QueryAppsMapings(request: QueryAppsRequest): Promise<QueryAppsResponse>;
  QueryAppMapings(request: QueryAppRequest): Promise<QueryAppResponse>;
  QueryPairVault(
    request: QueryPairVaultRequest
  ): Promise<QueryPairVaultResponse>;
  QueryPairVaults(
    request: QueryPairVaultsRequest
  ): Promise<QueryPairVaultsResponse>;
  QueryProductToExtendedPair(
    request: QueryProductToExtendedPairRequest
  ): Promise<QueryProductToExtendedPairResponse>;
  QueryExtendedPairPsmPairWise(
    request: QueryExtendedPairPsmPairWiseRequest
  ): Promise<QueryExtendedPairPsmPairWiseResponse>;
  QueryTokenGov(request: QueryTokenGovRequest): Promise<QueryTokenGovResponse>;
  QueryExtendedPairDataPsmPairWise(
    request: QueryExtendedPairDataPsmPairWiseRequest
  ): Promise<QueryExtendedPairDataPsmPairWiseResponse>;
}

export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.QueryAssets = this.QueryAssets.bind(this);
    this.QueryAsset = this.QueryAsset.bind(this);
    this.QueryPairs = this.QueryPairs.bind(this);
    this.QueryPair = this.QueryPair.bind(this);
    this.QueryParams = this.QueryParams.bind(this);
    this.QueryAppsMapings = this.QueryAppsMapings.bind(this);
    this.QueryAppMapings = this.QueryAppMapings.bind(this);
    this.QueryPairVault = this.QueryPairVault.bind(this);
    this.QueryPairVaults = this.QueryPairVaults.bind(this);
    this.QueryProductToExtendedPair =
      this.QueryProductToExtendedPair.bind(this);
    this.QueryExtendedPairPsmPairWise =
      this.QueryExtendedPairPsmPairWise.bind(this);
    this.QueryTokenGov = this.QueryTokenGov.bind(this);
    this.QueryExtendedPairDataPsmPairWise =
      this.QueryExtendedPairDataPsmPairWise.bind(this);
  }
  QueryAssets(request: QueryAssetsRequest): Promise<QueryAssetsResponse> {
    const data = QueryAssetsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.QueryService",
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
      "comdex.asset.v1beta1.QueryService",
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
      "comdex.asset.v1beta1.QueryService",
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
      "comdex.asset.v1beta1.QueryService",
      "QueryPair",
      data
    );
    return promise.then((data) =>
      QueryPairResponse.decode(new _m0.Reader(data))
    );
  }

  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.QueryService",
      "QueryParams",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAppsMapings(request: QueryAppsRequest): Promise<QueryAppsResponse> {
    const data = QueryAppsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.QueryService",
      "QueryAppsMapings",
      data
    );
    return promise.then((data) =>
      QueryAppsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAppMapings(request: QueryAppRequest): Promise<QueryAppResponse> {
    const data = QueryAppRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.QueryService",
      "QueryAppMapings",
      data
    );
    return promise.then((data) =>
      QueryAppResponse.decode(new _m0.Reader(data))
    );
  }

  QueryPairVault(
    request: QueryPairVaultRequest
  ): Promise<QueryPairVaultResponse> {
    const data = QueryPairVaultRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.QueryService",
      "QueryPairVault",
      data
    );
    return promise.then((data) =>
      QueryPairVaultResponse.decode(new _m0.Reader(data))
    );
  }

  QueryPairVaults(
    request: QueryPairVaultsRequest
  ): Promise<QueryPairVaultsResponse> {
    const data = QueryPairVaultsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.QueryService",
      "QueryPairVaults",
      data
    );
    return promise.then((data) =>
      QueryPairVaultsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryProductToExtendedPair(
    request: QueryProductToExtendedPairRequest
  ): Promise<QueryProductToExtendedPairResponse> {
    const data = QueryProductToExtendedPairRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.QueryService",
      "QueryProductToExtendedPair",
      data
    );
    return promise.then((data) =>
      QueryProductToExtendedPairResponse.decode(new _m0.Reader(data))
    );
  }

  QueryExtendedPairPsmPairWise(
    request: QueryExtendedPairPsmPairWiseRequest
  ): Promise<QueryExtendedPairPsmPairWiseResponse> {
    const data = QueryExtendedPairPsmPairWiseRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.QueryService",
      "QueryExtendedPairPsmPairWise",
      data
    );
    return promise.then((data) =>
      QueryExtendedPairPsmPairWiseResponse.decode(new _m0.Reader(data))
    );
  }

  QueryTokenGov(request: QueryTokenGovRequest): Promise<QueryTokenGovResponse> {
    const data = QueryTokenGovRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.QueryService",
      "QueryTokenGov",
      data
    );
    return promise.then((data) =>
      QueryTokenGovResponse.decode(new _m0.Reader(data))
    );
  }

  QueryExtendedPairDataPsmPairWise(
    request: QueryExtendedPairDataPsmPairWiseRequest
  ): Promise<QueryExtendedPairDataPsmPairWiseResponse> {
    const data =
      QueryExtendedPairDataPsmPairWiseRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.QueryService",
      "QueryExtendedPairDataPsmPairWise",
      data
    );
    return promise.then((data) =>
      QueryExtendedPairDataPsmPairWiseResponse.decode(new _m0.Reader(data))
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
