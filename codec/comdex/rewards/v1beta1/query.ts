/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo } from "./epochs";
import { Gauge } from "./gauge";
import { Params } from "./params";
import {
  EpochTime,
  InternalRewards,
  LendExternalRewards,
  LockerExternalRewards,
  StableVaultExternalRewards,
  VaultExternalRewards,
} from "./rewards";

export const protobufPackage = "comdex.rewards.v1beta1";

/** PARAMS */
export interface QueryParamsRequest {
}

export interface QueryParamsResponse {
  params?: Params;
}

/** ALL EPOCHES */
export interface QueryAllEpochsInfoRequest {
  pagination?: PageRequest;
}

export interface QueryAllEpochsInfoResponse {
  epochs: EpochInfo[];
  pagination?: PageResponse;
}

/** EPOCH BY DURATION */
export interface QueryEpochInfoByDurationRequest {
  durationSeconds: Long;
}

export interface QueryEpochInfoByDurationResponse {
  epoch?: EpochInfo;
}

/** ALL GAUGES */
export interface QueryAllGaugesRequest {
  pagination?: PageRequest;
}

export interface QueryAllGaugesResponse {
  gauges: Gauge[];
  pagination?: PageResponse;
}

/** GAUGE BY ID */
export interface QueryGaugeByIdRequest {
  gaugeId: Long;
}

export interface QueryGaugeByIdResponse {
  gauge?: Gauge;
}

/** GAUGE BY TRIIGER DURATION */
export interface QueryGaugesByDurationRequest {
  durationSeconds: Long;
}

export interface QueryGaugeByDurationResponse {
  gauges: Gauge[];
}

export interface QueryRewardsRequest {
  pagination?: PageRequest;
}

export interface QueryRewardsResponse {
  rewards: InternalRewards[];
  pagination?: PageResponse;
}

export interface QueryRewardRequest {
  id: Long;
}

export interface QueryRewardResponse {
  reward: InternalRewards[];
}

export interface QueryExternalRewardsLockersRequest {
  pagination?: PageRequest;
}

export interface QueryExternalRewardsLockersResponse {
  lockerExternalRewards: LockerExternalRewards[];
  pagination?: PageResponse;
}

export interface QueryExternalRewardVaultsRequest {
  pagination?: PageRequest;
}

export interface QueryExternalRewardVaultsResponse {
  vaultExternalRewards: VaultExternalRewards[];
  pagination?: PageResponse;
}

export interface QueryWhitelistedAppIdsVaultRequest {
  pagination?: PageRequest;
}

export interface QueryWhitelistedAppIdsVaultResponse {
  whitelistedAppIdsVault: Long[];
  pagination?: PageResponse;
}

export interface QueryExternalRewardLendsRequest {
  pagination?: PageRequest;
}

export interface QueryExternalRewardLendsResponse {
  lendExternalRewards: LendExternalRewards[];
  pagination?: PageResponse;
}

export interface QueryExternalRewardStableMintRequest {
  pagination?: PageRequest;
}

export interface QueryExternalRewardStableMintResponse {
  stableMintExternalRewards: StableVaultExternalRewards[];
  pagination?: PageResponse;
}

export interface QueryEpochTimeRequest {
  pagination?: PageRequest;
}

export interface QueryEpochTimeResponse {
  epochTime: EpochTime[];
  pagination?: PageResponse;
}

export interface QueryExtLendRewardsAPRRequest {
  assetId: Long;
  cPoolId: Long;
}

export interface QueryExtLendRewardsAPRResponse {
  apr: string;
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

function createBaseQueryAllEpochsInfoRequest(): QueryAllEpochsInfoRequest {
  return { pagination: undefined };
}

export const QueryAllEpochsInfoRequest = {
  encode(message: QueryAllEpochsInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochsInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochsInfoRequest();
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

  fromJSON(object: any): QueryAllEpochsInfoRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllEpochsInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllEpochsInfoRequest>, I>>(base?: I): QueryAllEpochsInfoRequest {
    return QueryAllEpochsInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllEpochsInfoRequest>, I>>(object: I): QueryAllEpochsInfoRequest {
    const message = createBaseQueryAllEpochsInfoRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllEpochsInfoResponse(): QueryAllEpochsInfoResponse {
  return { epochs: [], pagination: undefined };
}

export const QueryAllEpochsInfoResponse = {
  encode(message: QueryAllEpochsInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochsInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochsInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllEpochsInfoResponse {
    return {
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllEpochsInfoResponse): unknown {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map((e) => e ? EpochInfo.toJSON(e) : undefined);
    } else {
      obj.epochs = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllEpochsInfoResponse>, I>>(base?: I): QueryAllEpochsInfoResponse {
    return QueryAllEpochsInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllEpochsInfoResponse>, I>>(object: I): QueryAllEpochsInfoResponse {
    const message = createBaseQueryAllEpochsInfoResponse();
    message.epochs = object.epochs?.map((e) => EpochInfo.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryEpochInfoByDurationRequest(): QueryEpochInfoByDurationRequest {
  return { durationSeconds: Long.UZERO };
}

export const QueryEpochInfoByDurationRequest = {
  encode(message: QueryEpochInfoByDurationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.durationSeconds.isZero()) {
      writer.uint32(8).uint64(message.durationSeconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochInfoByDurationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochInfoByDurationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.durationSeconds = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEpochInfoByDurationRequest {
    return { durationSeconds: isSet(object.durationSeconds) ? Long.fromValue(object.durationSeconds) : Long.UZERO };
  },

  toJSON(message: QueryEpochInfoByDurationRequest): unknown {
    const obj: any = {};
    message.durationSeconds !== undefined && (obj.durationSeconds = (message.durationSeconds || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryEpochInfoByDurationRequest>, I>>(base?: I): QueryEpochInfoByDurationRequest {
    return QueryEpochInfoByDurationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryEpochInfoByDurationRequest>, I>>(
    object: I,
  ): QueryEpochInfoByDurationRequest {
    const message = createBaseQueryEpochInfoByDurationRequest();
    message.durationSeconds = (object.durationSeconds !== undefined && object.durationSeconds !== null)
      ? Long.fromValue(object.durationSeconds)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryEpochInfoByDurationResponse(): QueryEpochInfoByDurationResponse {
  return { epoch: undefined };
}

export const QueryEpochInfoByDurationResponse = {
  encode(message: QueryEpochInfoByDurationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epoch !== undefined) {
      EpochInfo.encode(message.epoch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochInfoByDurationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochInfoByDurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = EpochInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEpochInfoByDurationResponse {
    return { epoch: isSet(object.epoch) ? EpochInfo.fromJSON(object.epoch) : undefined };
  },

  toJSON(message: QueryEpochInfoByDurationResponse): unknown {
    const obj: any = {};
    message.epoch !== undefined && (obj.epoch = message.epoch ? EpochInfo.toJSON(message.epoch) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryEpochInfoByDurationResponse>, I>>(
    base?: I,
  ): QueryEpochInfoByDurationResponse {
    return QueryEpochInfoByDurationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryEpochInfoByDurationResponse>, I>>(
    object: I,
  ): QueryEpochInfoByDurationResponse {
    const message = createBaseQueryEpochInfoByDurationResponse();
    message.epoch = (object.epoch !== undefined && object.epoch !== null)
      ? EpochInfo.fromPartial(object.epoch)
      : undefined;
    return message;
  },
};

function createBaseQueryAllGaugesRequest(): QueryAllGaugesRequest {
  return { pagination: undefined };
}

export const QueryAllGaugesRequest = {
  encode(message: QueryAllGaugesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllGaugesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGaugesRequest();
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

  fromJSON(object: any): QueryAllGaugesRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllGaugesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllGaugesRequest>, I>>(base?: I): QueryAllGaugesRequest {
    return QueryAllGaugesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllGaugesRequest>, I>>(object: I): QueryAllGaugesRequest {
    const message = createBaseQueryAllGaugesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllGaugesResponse(): QueryAllGaugesResponse {
  return { gauges: [], pagination: undefined };
}

export const QueryAllGaugesResponse = {
  encode(message: QueryAllGaugesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.gauges) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllGaugesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGaugesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gauges.push(Gauge.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllGaugesResponse {
    return {
      gauges: Array.isArray(object?.gauges) ? object.gauges.map((e: any) => Gauge.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllGaugesResponse): unknown {
    const obj: any = {};
    if (message.gauges) {
      obj.gauges = message.gauges.map((e) => e ? Gauge.toJSON(e) : undefined);
    } else {
      obj.gauges = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllGaugesResponse>, I>>(base?: I): QueryAllGaugesResponse {
    return QueryAllGaugesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllGaugesResponse>, I>>(object: I): QueryAllGaugesResponse {
    const message = createBaseQueryAllGaugesResponse();
    message.gauges = object.gauges?.map((e) => Gauge.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGaugeByIdRequest(): QueryGaugeByIdRequest {
  return { gaugeId: Long.UZERO };
}

export const QueryGaugeByIdRequest = {
  encode(message: QueryGaugeByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.gaugeId.isZero()) {
      writer.uint32(8).uint64(message.gaugeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGaugeByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gaugeId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGaugeByIdRequest {
    return { gaugeId: isSet(object.gaugeId) ? Long.fromValue(object.gaugeId) : Long.UZERO };
  },

  toJSON(message: QueryGaugeByIdRequest): unknown {
    const obj: any = {};
    message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGaugeByIdRequest>, I>>(base?: I): QueryGaugeByIdRequest {
    return QueryGaugeByIdRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGaugeByIdRequest>, I>>(object: I): QueryGaugeByIdRequest {
    const message = createBaseQueryGaugeByIdRequest();
    message.gaugeId = (object.gaugeId !== undefined && object.gaugeId !== null)
      ? Long.fromValue(object.gaugeId)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryGaugeByIdResponse(): QueryGaugeByIdResponse {
  return { gauge: undefined };
}

export const QueryGaugeByIdResponse = {
  encode(message: QueryGaugeByIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gauge !== undefined) {
      Gauge.encode(message.gauge, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeByIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGaugeByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gauge = Gauge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGaugeByIdResponse {
    return { gauge: isSet(object.gauge) ? Gauge.fromJSON(object.gauge) : undefined };
  },

  toJSON(message: QueryGaugeByIdResponse): unknown {
    const obj: any = {};
    message.gauge !== undefined && (obj.gauge = message.gauge ? Gauge.toJSON(message.gauge) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGaugeByIdResponse>, I>>(base?: I): QueryGaugeByIdResponse {
    return QueryGaugeByIdResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGaugeByIdResponse>, I>>(object: I): QueryGaugeByIdResponse {
    const message = createBaseQueryGaugeByIdResponse();
    message.gauge = (object.gauge !== undefined && object.gauge !== null) ? Gauge.fromPartial(object.gauge) : undefined;
    return message;
  },
};

function createBaseQueryGaugesByDurationRequest(): QueryGaugesByDurationRequest {
  return { durationSeconds: Long.UZERO };
}

export const QueryGaugesByDurationRequest = {
  encode(message: QueryGaugesByDurationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.durationSeconds.isZero()) {
      writer.uint32(8).uint64(message.durationSeconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugesByDurationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGaugesByDurationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.durationSeconds = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGaugesByDurationRequest {
    return { durationSeconds: isSet(object.durationSeconds) ? Long.fromValue(object.durationSeconds) : Long.UZERO };
  },

  toJSON(message: QueryGaugesByDurationRequest): unknown {
    const obj: any = {};
    message.durationSeconds !== undefined && (obj.durationSeconds = (message.durationSeconds || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGaugesByDurationRequest>, I>>(base?: I): QueryGaugesByDurationRequest {
    return QueryGaugesByDurationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGaugesByDurationRequest>, I>>(object: I): QueryGaugesByDurationRequest {
    const message = createBaseQueryGaugesByDurationRequest();
    message.durationSeconds = (object.durationSeconds !== undefined && object.durationSeconds !== null)
      ? Long.fromValue(object.durationSeconds)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryGaugeByDurationResponse(): QueryGaugeByDurationResponse {
  return { gauges: [] };
}

export const QueryGaugeByDurationResponse = {
  encode(message: QueryGaugeByDurationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.gauges) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeByDurationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGaugeByDurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gauges.push(Gauge.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGaugeByDurationResponse {
    return { gauges: Array.isArray(object?.gauges) ? object.gauges.map((e: any) => Gauge.fromJSON(e)) : [] };
  },

  toJSON(message: QueryGaugeByDurationResponse): unknown {
    const obj: any = {};
    if (message.gauges) {
      obj.gauges = message.gauges.map((e) => e ? Gauge.toJSON(e) : undefined);
    } else {
      obj.gauges = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGaugeByDurationResponse>, I>>(base?: I): QueryGaugeByDurationResponse {
    return QueryGaugeByDurationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGaugeByDurationResponse>, I>>(object: I): QueryGaugeByDurationResponse {
    const message = createBaseQueryGaugeByDurationResponse();
    message.gauges = object.gauges?.map((e) => Gauge.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryRewardsRequest(): QueryRewardsRequest {
  return { pagination: undefined };
}

export const QueryRewardsRequest = {
  encode(message: QueryRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsRequest();
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

  fromJSON(object: any): QueryRewardsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryRewardsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRewardsRequest>, I>>(base?: I): QueryRewardsRequest {
    return QueryRewardsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRewardsRequest>, I>>(object: I): QueryRewardsRequest {
    const message = createBaseQueryRewardsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRewardsResponse(): QueryRewardsResponse {
  return { rewards: [], pagination: undefined };
}

export const QueryRewardsResponse = {
  encode(message: QueryRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      InternalRewards.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(InternalRewards.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryRewardsResponse {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => InternalRewards.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => e ? InternalRewards.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRewardsResponse>, I>>(base?: I): QueryRewardsResponse {
    return QueryRewardsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRewardsResponse>, I>>(object: I): QueryRewardsResponse {
    const message = createBaseQueryRewardsResponse();
    message.rewards = object.rewards?.map((e) => InternalRewards.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRewardRequest(): QueryRewardRequest {
  return { id: Long.UZERO };
}

export const QueryRewardRequest = {
  encode(message: QueryRewardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardRequest();
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

  fromJSON(object: any): QueryRewardRequest {
    return { id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: QueryRewardRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRewardRequest>, I>>(base?: I): QueryRewardRequest {
    return QueryRewardRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRewardRequest>, I>>(object: I): QueryRewardRequest {
    const message = createBaseQueryRewardRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseQueryRewardResponse(): QueryRewardResponse {
  return { reward: [] };
}

export const QueryRewardResponse = {
  encode(message: QueryRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.reward) {
      InternalRewards.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reward.push(InternalRewards.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRewardResponse {
    return { reward: Array.isArray(object?.reward) ? object.reward.map((e: any) => InternalRewards.fromJSON(e)) : [] };
  },

  toJSON(message: QueryRewardResponse): unknown {
    const obj: any = {};
    if (message.reward) {
      obj.reward = message.reward.map((e) => e ? InternalRewards.toJSON(e) : undefined);
    } else {
      obj.reward = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRewardResponse>, I>>(base?: I): QueryRewardResponse {
    return QueryRewardResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRewardResponse>, I>>(object: I): QueryRewardResponse {
    const message = createBaseQueryRewardResponse();
    message.reward = object.reward?.map((e) => InternalRewards.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryExternalRewardsLockersRequest(): QueryExternalRewardsLockersRequest {
  return { pagination: undefined };
}

export const QueryExternalRewardsLockersRequest = {
  encode(message: QueryExternalRewardsLockersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalRewardsLockersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExternalRewardsLockersRequest();
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

  fromJSON(object: any): QueryExternalRewardsLockersRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryExternalRewardsLockersRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryExternalRewardsLockersRequest>, I>>(
    base?: I,
  ): QueryExternalRewardsLockersRequest {
    return QueryExternalRewardsLockersRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryExternalRewardsLockersRequest>, I>>(
    object: I,
  ): QueryExternalRewardsLockersRequest {
    const message = createBaseQueryExternalRewardsLockersRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryExternalRewardsLockersResponse(): QueryExternalRewardsLockersResponse {
  return { lockerExternalRewards: [], pagination: undefined };
}

export const QueryExternalRewardsLockersResponse = {
  encode(message: QueryExternalRewardsLockersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lockerExternalRewards) {
      LockerExternalRewards.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalRewardsLockersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExternalRewardsLockersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockerExternalRewards.push(LockerExternalRewards.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryExternalRewardsLockersResponse {
    return {
      lockerExternalRewards: Array.isArray(object?.lockerExternalRewards)
        ? object.lockerExternalRewards.map((e: any) => LockerExternalRewards.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryExternalRewardsLockersResponse): unknown {
    const obj: any = {};
    if (message.lockerExternalRewards) {
      obj.lockerExternalRewards = message.lockerExternalRewards.map((e) =>
        e ? LockerExternalRewards.toJSON(e) : undefined
      );
    } else {
      obj.lockerExternalRewards = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryExternalRewardsLockersResponse>, I>>(
    base?: I,
  ): QueryExternalRewardsLockersResponse {
    return QueryExternalRewardsLockersResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryExternalRewardsLockersResponse>, I>>(
    object: I,
  ): QueryExternalRewardsLockersResponse {
    const message = createBaseQueryExternalRewardsLockersResponse();
    message.lockerExternalRewards = object.lockerExternalRewards?.map((e) => LockerExternalRewards.fromPartial(e)) ||
      [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryExternalRewardVaultsRequest(): QueryExternalRewardVaultsRequest {
  return { pagination: undefined };
}

export const QueryExternalRewardVaultsRequest = {
  encode(message: QueryExternalRewardVaultsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalRewardVaultsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExternalRewardVaultsRequest();
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

  fromJSON(object: any): QueryExternalRewardVaultsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryExternalRewardVaultsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryExternalRewardVaultsRequest>, I>>(
    base?: I,
  ): QueryExternalRewardVaultsRequest {
    return QueryExternalRewardVaultsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryExternalRewardVaultsRequest>, I>>(
    object: I,
  ): QueryExternalRewardVaultsRequest {
    const message = createBaseQueryExternalRewardVaultsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryExternalRewardVaultsResponse(): QueryExternalRewardVaultsResponse {
  return { vaultExternalRewards: [], pagination: undefined };
}

export const QueryExternalRewardVaultsResponse = {
  encode(message: QueryExternalRewardVaultsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.vaultExternalRewards) {
      VaultExternalRewards.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalRewardVaultsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExternalRewardVaultsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultExternalRewards.push(VaultExternalRewards.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryExternalRewardVaultsResponse {
    return {
      vaultExternalRewards: Array.isArray(object?.vaultExternalRewards)
        ? object.vaultExternalRewards.map((e: any) => VaultExternalRewards.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryExternalRewardVaultsResponse): unknown {
    const obj: any = {};
    if (message.vaultExternalRewards) {
      obj.vaultExternalRewards = message.vaultExternalRewards.map((e) =>
        e ? VaultExternalRewards.toJSON(e) : undefined
      );
    } else {
      obj.vaultExternalRewards = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryExternalRewardVaultsResponse>, I>>(
    base?: I,
  ): QueryExternalRewardVaultsResponse {
    return QueryExternalRewardVaultsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryExternalRewardVaultsResponse>, I>>(
    object: I,
  ): QueryExternalRewardVaultsResponse {
    const message = createBaseQueryExternalRewardVaultsResponse();
    message.vaultExternalRewards = object.vaultExternalRewards?.map((e) => VaultExternalRewards.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryWhitelistedAppIdsVaultRequest(): QueryWhitelistedAppIdsVaultRequest {
  return { pagination: undefined };
}

export const QueryWhitelistedAppIdsVaultRequest = {
  encode(message: QueryWhitelistedAppIdsVaultRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhitelistedAppIdsVaultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhitelistedAppIdsVaultRequest();
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

  fromJSON(object: any): QueryWhitelistedAppIdsVaultRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryWhitelistedAppIdsVaultRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryWhitelistedAppIdsVaultRequest>, I>>(
    base?: I,
  ): QueryWhitelistedAppIdsVaultRequest {
    return QueryWhitelistedAppIdsVaultRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryWhitelistedAppIdsVaultRequest>, I>>(
    object: I,
  ): QueryWhitelistedAppIdsVaultRequest {
    const message = createBaseQueryWhitelistedAppIdsVaultRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryWhitelistedAppIdsVaultResponse(): QueryWhitelistedAppIdsVaultResponse {
  return { whitelistedAppIdsVault: [], pagination: undefined };
}

export const QueryWhitelistedAppIdsVaultResponse = {
  encode(message: QueryWhitelistedAppIdsVaultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.whitelistedAppIdsVault) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhitelistedAppIdsVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWhitelistedAppIdsVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.whitelistedAppIdsVault.push(reader.uint64() as Long);
            }
          } else {
            message.whitelistedAppIdsVault.push(reader.uint64() as Long);
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

  fromJSON(object: any): QueryWhitelistedAppIdsVaultResponse {
    return {
      whitelistedAppIdsVault: Array.isArray(object?.whitelistedAppIdsVault)
        ? object.whitelistedAppIdsVault.map((e: any) => Long.fromValue(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryWhitelistedAppIdsVaultResponse): unknown {
    const obj: any = {};
    if (message.whitelistedAppIdsVault) {
      obj.whitelistedAppIdsVault = message.whitelistedAppIdsVault.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.whitelistedAppIdsVault = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryWhitelistedAppIdsVaultResponse>, I>>(
    base?: I,
  ): QueryWhitelistedAppIdsVaultResponse {
    return QueryWhitelistedAppIdsVaultResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryWhitelistedAppIdsVaultResponse>, I>>(
    object: I,
  ): QueryWhitelistedAppIdsVaultResponse {
    const message = createBaseQueryWhitelistedAppIdsVaultResponse();
    message.whitelistedAppIdsVault = object.whitelistedAppIdsVault?.map((e) => Long.fromValue(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryExternalRewardLendsRequest(): QueryExternalRewardLendsRequest {
  return { pagination: undefined };
}

export const QueryExternalRewardLendsRequest = {
  encode(message: QueryExternalRewardLendsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalRewardLendsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExternalRewardLendsRequest();
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

  fromJSON(object: any): QueryExternalRewardLendsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryExternalRewardLendsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryExternalRewardLendsRequest>, I>>(base?: I): QueryExternalRewardLendsRequest {
    return QueryExternalRewardLendsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryExternalRewardLendsRequest>, I>>(
    object: I,
  ): QueryExternalRewardLendsRequest {
    const message = createBaseQueryExternalRewardLendsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryExternalRewardLendsResponse(): QueryExternalRewardLendsResponse {
  return { lendExternalRewards: [], pagination: undefined };
}

export const QueryExternalRewardLendsResponse = {
  encode(message: QueryExternalRewardLendsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lendExternalRewards) {
      LendExternalRewards.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalRewardLendsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExternalRewardLendsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lendExternalRewards.push(LendExternalRewards.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryExternalRewardLendsResponse {
    return {
      lendExternalRewards: Array.isArray(object?.lendExternalRewards)
        ? object.lendExternalRewards.map((e: any) => LendExternalRewards.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryExternalRewardLendsResponse): unknown {
    const obj: any = {};
    if (message.lendExternalRewards) {
      obj.lendExternalRewards = message.lendExternalRewards.map((e) => e ? LendExternalRewards.toJSON(e) : undefined);
    } else {
      obj.lendExternalRewards = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryExternalRewardLendsResponse>, I>>(
    base?: I,
  ): QueryExternalRewardLendsResponse {
    return QueryExternalRewardLendsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryExternalRewardLendsResponse>, I>>(
    object: I,
  ): QueryExternalRewardLendsResponse {
    const message = createBaseQueryExternalRewardLendsResponse();
    message.lendExternalRewards = object.lendExternalRewards?.map((e) => LendExternalRewards.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryExternalRewardStableMintRequest(): QueryExternalRewardStableMintRequest {
  return { pagination: undefined };
}

export const QueryExternalRewardStableMintRequest = {
  encode(message: QueryExternalRewardStableMintRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalRewardStableMintRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExternalRewardStableMintRequest();
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

  fromJSON(object: any): QueryExternalRewardStableMintRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryExternalRewardStableMintRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryExternalRewardStableMintRequest>, I>>(
    base?: I,
  ): QueryExternalRewardStableMintRequest {
    return QueryExternalRewardStableMintRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryExternalRewardStableMintRequest>, I>>(
    object: I,
  ): QueryExternalRewardStableMintRequest {
    const message = createBaseQueryExternalRewardStableMintRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryExternalRewardStableMintResponse(): QueryExternalRewardStableMintResponse {
  return { stableMintExternalRewards: [], pagination: undefined };
}

export const QueryExternalRewardStableMintResponse = {
  encode(message: QueryExternalRewardStableMintResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stableMintExternalRewards) {
      StableVaultExternalRewards.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalRewardStableMintResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExternalRewardStableMintResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stableMintExternalRewards.push(StableVaultExternalRewards.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryExternalRewardStableMintResponse {
    return {
      stableMintExternalRewards: Array.isArray(object?.stableMintExternalRewards)
        ? object.stableMintExternalRewards.map((e: any) => StableVaultExternalRewards.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryExternalRewardStableMintResponse): unknown {
    const obj: any = {};
    if (message.stableMintExternalRewards) {
      obj.stableMintExternalRewards = message.stableMintExternalRewards.map((e) =>
        e ? StableVaultExternalRewards.toJSON(e) : undefined
      );
    } else {
      obj.stableMintExternalRewards = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryExternalRewardStableMintResponse>, I>>(
    base?: I,
  ): QueryExternalRewardStableMintResponse {
    return QueryExternalRewardStableMintResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryExternalRewardStableMintResponse>, I>>(
    object: I,
  ): QueryExternalRewardStableMintResponse {
    const message = createBaseQueryExternalRewardStableMintResponse();
    message.stableMintExternalRewards =
      object.stableMintExternalRewards?.map((e) => StableVaultExternalRewards.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryEpochTimeRequest(): QueryEpochTimeRequest {
  return { pagination: undefined };
}

export const QueryEpochTimeRequest = {
  encode(message: QueryEpochTimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochTimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochTimeRequest();
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

  fromJSON(object: any): QueryEpochTimeRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryEpochTimeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryEpochTimeRequest>, I>>(base?: I): QueryEpochTimeRequest {
    return QueryEpochTimeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryEpochTimeRequest>, I>>(object: I): QueryEpochTimeRequest {
    const message = createBaseQueryEpochTimeRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryEpochTimeResponse(): QueryEpochTimeResponse {
  return { epochTime: [], pagination: undefined };
}

export const QueryEpochTimeResponse = {
  encode(message: QueryEpochTimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.epochTime) {
      EpochTime.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochTimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochTimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochTime.push(EpochTime.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryEpochTimeResponse {
    return {
      epochTime: Array.isArray(object?.epochTime) ? object.epochTime.map((e: any) => EpochTime.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryEpochTimeResponse): unknown {
    const obj: any = {};
    if (message.epochTime) {
      obj.epochTime = message.epochTime.map((e) => e ? EpochTime.toJSON(e) : undefined);
    } else {
      obj.epochTime = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryEpochTimeResponse>, I>>(base?: I): QueryEpochTimeResponse {
    return QueryEpochTimeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryEpochTimeResponse>, I>>(object: I): QueryEpochTimeResponse {
    const message = createBaseQueryEpochTimeResponse();
    message.epochTime = object.epochTime?.map((e) => EpochTime.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryExtLendRewardsAPRRequest(): QueryExtLendRewardsAPRRequest {
  return { assetId: Long.UZERO, cPoolId: Long.UZERO };
}

export const QueryExtLendRewardsAPRRequest = {
  encode(message: QueryExtLendRewardsAPRRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.assetId.isZero()) {
      writer.uint32(8).uint64(message.assetId);
    }
    if (!message.cPoolId.isZero()) {
      writer.uint32(16).uint64(message.cPoolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExtLendRewardsAPRRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExtLendRewardsAPRRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.uint64() as Long;
          break;
        case 2:
          message.cPoolId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryExtLendRewardsAPRRequest {
    return {
      assetId: isSet(object.assetId) ? Long.fromValue(object.assetId) : Long.UZERO,
      cPoolId: isSet(object.cPoolId) ? Long.fromValue(object.cPoolId) : Long.UZERO,
    };
  },

  toJSON(message: QueryExtLendRewardsAPRRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.cPoolId !== undefined && (obj.cPoolId = (message.cPoolId || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryExtLendRewardsAPRRequest>, I>>(base?: I): QueryExtLendRewardsAPRRequest {
    return QueryExtLendRewardsAPRRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryExtLendRewardsAPRRequest>, I>>(
    object: I,
  ): QueryExtLendRewardsAPRRequest {
    const message = createBaseQueryExtLendRewardsAPRRequest();
    message.assetId = (object.assetId !== undefined && object.assetId !== null)
      ? Long.fromValue(object.assetId)
      : Long.UZERO;
    message.cPoolId = (object.cPoolId !== undefined && object.cPoolId !== null)
      ? Long.fromValue(object.cPoolId)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryExtLendRewardsAPRResponse(): QueryExtLendRewardsAPRResponse {
  return { apr: "" };
}

export const QueryExtLendRewardsAPRResponse = {
  encode(message: QueryExtLendRewardsAPRResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apr !== "") {
      writer.uint32(10).string(message.apr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExtLendRewardsAPRResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExtLendRewardsAPRResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryExtLendRewardsAPRResponse {
    return { apr: isSet(object.apr) ? String(object.apr) : "" };
  },

  toJSON(message: QueryExtLendRewardsAPRResponse): unknown {
    const obj: any = {};
    message.apr !== undefined && (obj.apr = message.apr);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryExtLendRewardsAPRResponse>, I>>(base?: I): QueryExtLendRewardsAPRResponse {
    return QueryExtLendRewardsAPRResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryExtLendRewardsAPRResponse>, I>>(
    object: I,
  ): QueryExtLendRewardsAPRResponse {
    const message = createBaseQueryExtLendRewardsAPRResponse();
    message.apr = object.apr ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  QueryAllEpochsInfo(request: QueryAllEpochsInfoRequest): Promise<QueryAllEpochsInfoResponse>;
  QueryEpochInfoByDuration(request: QueryEpochInfoByDurationRequest): Promise<QueryEpochInfoByDurationResponse>;
  QueryAllGauges(request: QueryAllGaugesRequest): Promise<QueryAllGaugesResponse>;
  QueryGaugeByID(request: QueryGaugeByIdRequest): Promise<QueryGaugeByIdResponse>;
  QueryGaugeByDuration(request: QueryGaugesByDurationRequest): Promise<QueryGaugeByDurationResponse>;
  QueryRewards(request: QueryRewardsRequest): Promise<QueryRewardsResponse>;
  QueryReward(request: QueryRewardRequest): Promise<QueryRewardResponse>;
  QueryExternalRewardsLockers(
    request: QueryExternalRewardsLockersRequest,
  ): Promise<QueryExternalRewardsLockersResponse>;
  QueryExternalRewardVaults(request: QueryExternalRewardVaultsRequest): Promise<QueryExternalRewardVaultsResponse>;
  QueryWhitelistedAppIdsVault(
    request: QueryWhitelistedAppIdsVaultRequest,
  ): Promise<QueryWhitelistedAppIdsVaultResponse>;
  QueryExternalRewardLends(request: QueryExternalRewardLendsRequest): Promise<QueryExternalRewardLendsResponse>;
  QueryExternalRewardStableMint(
    request: QueryExternalRewardStableMintRequest,
  ): Promise<QueryExternalRewardStableMintResponse>;
  QueryEpochTime(request: QueryEpochTimeRequest): Promise<QueryEpochTimeResponse>;
  QueryExtLendRewardsAPR(request: QueryExtLendRewardsAPRRequest): Promise<QueryExtLendRewardsAPRResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "comdex.rewards.v1beta1.Query";
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.QueryAllEpochsInfo = this.QueryAllEpochsInfo.bind(this);
    this.QueryEpochInfoByDuration = this.QueryEpochInfoByDuration.bind(this);
    this.QueryAllGauges = this.QueryAllGauges.bind(this);
    this.QueryGaugeByID = this.QueryGaugeByID.bind(this);
    this.QueryGaugeByDuration = this.QueryGaugeByDuration.bind(this);
    this.QueryRewards = this.QueryRewards.bind(this);
    this.QueryReward = this.QueryReward.bind(this);
    this.QueryExternalRewardsLockers = this.QueryExternalRewardsLockers.bind(this);
    this.QueryExternalRewardVaults = this.QueryExternalRewardVaults.bind(this);
    this.QueryWhitelistedAppIdsVault = this.QueryWhitelistedAppIdsVault.bind(this);
    this.QueryExternalRewardLends = this.QueryExternalRewardLends.bind(this);
    this.QueryExternalRewardStableMint = this.QueryExternalRewardStableMint.bind(this);
    this.QueryEpochTime = this.QueryEpochTime.bind(this);
    this.QueryExtLendRewardsAPR = this.QueryExtLendRewardsAPR.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  QueryAllEpochsInfo(request: QueryAllEpochsInfoRequest): Promise<QueryAllEpochsInfoResponse> {
    const data = QueryAllEpochsInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryAllEpochsInfo", data);
    return promise.then((data) => QueryAllEpochsInfoResponse.decode(new _m0.Reader(data)));
  }

  QueryEpochInfoByDuration(request: QueryEpochInfoByDurationRequest): Promise<QueryEpochInfoByDurationResponse> {
    const data = QueryEpochInfoByDurationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryEpochInfoByDuration", data);
    return promise.then((data) => QueryEpochInfoByDurationResponse.decode(new _m0.Reader(data)));
  }

  QueryAllGauges(request: QueryAllGaugesRequest): Promise<QueryAllGaugesResponse> {
    const data = QueryAllGaugesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryAllGauges", data);
    return promise.then((data) => QueryAllGaugesResponse.decode(new _m0.Reader(data)));
  }

  QueryGaugeByID(request: QueryGaugeByIdRequest): Promise<QueryGaugeByIdResponse> {
    const data = QueryGaugeByIdRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryGaugeByID", data);
    return promise.then((data) => QueryGaugeByIdResponse.decode(new _m0.Reader(data)));
  }

  QueryGaugeByDuration(request: QueryGaugesByDurationRequest): Promise<QueryGaugeByDurationResponse> {
    const data = QueryGaugesByDurationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryGaugeByDuration", data);
    return promise.then((data) => QueryGaugeByDurationResponse.decode(new _m0.Reader(data)));
  }

  QueryRewards(request: QueryRewardsRequest): Promise<QueryRewardsResponse> {
    const data = QueryRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryRewards", data);
    return promise.then((data) => QueryRewardsResponse.decode(new _m0.Reader(data)));
  }

  QueryReward(request: QueryRewardRequest): Promise<QueryRewardResponse> {
    const data = QueryRewardRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryReward", data);
    return promise.then((data) => QueryRewardResponse.decode(new _m0.Reader(data)));
  }

  QueryExternalRewardsLockers(
    request: QueryExternalRewardsLockersRequest,
  ): Promise<QueryExternalRewardsLockersResponse> {
    const data = QueryExternalRewardsLockersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryExternalRewardsLockers", data);
    return promise.then((data) => QueryExternalRewardsLockersResponse.decode(new _m0.Reader(data)));
  }

  QueryExternalRewardVaults(request: QueryExternalRewardVaultsRequest): Promise<QueryExternalRewardVaultsResponse> {
    const data = QueryExternalRewardVaultsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryExternalRewardVaults", data);
    return promise.then((data) => QueryExternalRewardVaultsResponse.decode(new _m0.Reader(data)));
  }

  QueryWhitelistedAppIdsVault(
    request: QueryWhitelistedAppIdsVaultRequest,
  ): Promise<QueryWhitelistedAppIdsVaultResponse> {
    const data = QueryWhitelistedAppIdsVaultRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryWhitelistedAppIdsVault", data);
    return promise.then((data) => QueryWhitelistedAppIdsVaultResponse.decode(new _m0.Reader(data)));
  }

  QueryExternalRewardLends(request: QueryExternalRewardLendsRequest): Promise<QueryExternalRewardLendsResponse> {
    const data = QueryExternalRewardLendsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryExternalRewardLends", data);
    return promise.then((data) => QueryExternalRewardLendsResponse.decode(new _m0.Reader(data)));
  }

  QueryExternalRewardStableMint(
    request: QueryExternalRewardStableMintRequest,
  ): Promise<QueryExternalRewardStableMintResponse> {
    const data = QueryExternalRewardStableMintRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryExternalRewardStableMint", data);
    return promise.then((data) => QueryExternalRewardStableMintResponse.decode(new _m0.Reader(data)));
  }

  QueryEpochTime(request: QueryEpochTimeRequest): Promise<QueryEpochTimeResponse> {
    const data = QueryEpochTimeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryEpochTime", data);
    return promise.then((data) => QueryEpochTimeResponse.decode(new _m0.Reader(data)));
  }

  QueryExtLendRewardsAPR(request: QueryExtLendRewardsAPRRequest): Promise<QueryExtLendRewardsAPRResponse> {
    const data = QueryExtLendRewardsAPRRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryExtLendRewardsAPR", data);
    return promise.then((data) => QueryExtLendRewardsAPRResponse.decode(new _m0.Reader(data)));
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
