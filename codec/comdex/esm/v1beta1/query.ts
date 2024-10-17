/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  AssetToAmount,
  CurrentDepositStats,
  DataAfterCoolOff,
  ESMStatus,
  ESMTriggerParams,
  UsersDepositMapping,
} from "./esm";
import { Params } from "./params";

export const protobufPackage = "comdex.esm.v1beta1";

export interface QueryParamsRequest {
}

export interface QueryParamsResponse {
  params?: Params;
}

export interface QueryESMTriggerParamsRequest {
  id: Long;
}

export interface QueryESMTriggerParamsResponse {
  esmTriggerParams?: ESMTriggerParams;
}

export interface QueryESMStatusRequest {
  id: Long;
}

export interface QueryESMStatusResponse {
  esmStatus?: ESMStatus;
}

export interface QueryCurrentDepositStatsRequest {
  id: Long;
}

export interface QueryCurrentDepositStatsResponse {
  currentDepositStats?: CurrentDepositStats;
}

export interface QueryUsersDepositMappingRequest {
  id: Long;
  depositor: string;
}

export interface QueryUsersDepositMappingResponse {
  usersDepositMapping?: UsersDepositMapping;
}

export interface QueryDataAfterCoolOffRequest {
  id: Long;
}

export interface QueryDataAfterCoolOffResponse {
  dataAfterCoolOff?: DataAfterCoolOff;
}

export interface QuerySnapshotPriceRequest {
  appId: Long;
  assetId: Long;
}

export interface QuerySnapshotPriceResponse {
  price: Long;
}

export interface QueryAssetDataAfterCoolOffRequest {
  appId: Long;
}

export interface QueryAssetDataAfterCoolOffResponse {
  assetToAmount: AssetToAmount[];
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

function createBaseQueryESMTriggerParamsRequest(): QueryESMTriggerParamsRequest {
  return { id: Long.UZERO };
}

export const QueryESMTriggerParamsRequest = {
  encode(message: QueryESMTriggerParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryESMTriggerParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryESMTriggerParamsRequest();
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

  fromJSON(object: any): QueryESMTriggerParamsRequest {
    return { id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: QueryESMTriggerParamsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryESMTriggerParamsRequest>, I>>(base?: I): QueryESMTriggerParamsRequest {
    return QueryESMTriggerParamsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryESMTriggerParamsRequest>, I>>(object: I): QueryESMTriggerParamsRequest {
    const message = createBaseQueryESMTriggerParamsRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseQueryESMTriggerParamsResponse(): QueryESMTriggerParamsResponse {
  return { esmTriggerParams: undefined };
}

export const QueryESMTriggerParamsResponse = {
  encode(message: QueryESMTriggerParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.esmTriggerParams !== undefined) {
      ESMTriggerParams.encode(message.esmTriggerParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryESMTriggerParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryESMTriggerParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.esmTriggerParams = ESMTriggerParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryESMTriggerParamsResponse {
    return {
      esmTriggerParams: isSet(object.esmTriggerParams) ? ESMTriggerParams.fromJSON(object.esmTriggerParams) : undefined,
    };
  },

  toJSON(message: QueryESMTriggerParamsResponse): unknown {
    const obj: any = {};
    message.esmTriggerParams !== undefined &&
      (obj.esmTriggerParams = message.esmTriggerParams ? ESMTriggerParams.toJSON(message.esmTriggerParams) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryESMTriggerParamsResponse>, I>>(base?: I): QueryESMTriggerParamsResponse {
    return QueryESMTriggerParamsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryESMTriggerParamsResponse>, I>>(
    object: I,
  ): QueryESMTriggerParamsResponse {
    const message = createBaseQueryESMTriggerParamsResponse();
    message.esmTriggerParams = (object.esmTriggerParams !== undefined && object.esmTriggerParams !== null)
      ? ESMTriggerParams.fromPartial(object.esmTriggerParams)
      : undefined;
    return message;
  },
};

function createBaseQueryESMStatusRequest(): QueryESMStatusRequest {
  return { id: Long.UZERO };
}

export const QueryESMStatusRequest = {
  encode(message: QueryESMStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryESMStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryESMStatusRequest();
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

  fromJSON(object: any): QueryESMStatusRequest {
    return { id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: QueryESMStatusRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryESMStatusRequest>, I>>(base?: I): QueryESMStatusRequest {
    return QueryESMStatusRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryESMStatusRequest>, I>>(object: I): QueryESMStatusRequest {
    const message = createBaseQueryESMStatusRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseQueryESMStatusResponse(): QueryESMStatusResponse {
  return { esmStatus: undefined };
}

export const QueryESMStatusResponse = {
  encode(message: QueryESMStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.esmStatus !== undefined) {
      ESMStatus.encode(message.esmStatus, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryESMStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryESMStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.esmStatus = ESMStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryESMStatusResponse {
    return { esmStatus: isSet(object.esmStatus) ? ESMStatus.fromJSON(object.esmStatus) : undefined };
  },

  toJSON(message: QueryESMStatusResponse): unknown {
    const obj: any = {};
    message.esmStatus !== undefined &&
      (obj.esmStatus = message.esmStatus ? ESMStatus.toJSON(message.esmStatus) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryESMStatusResponse>, I>>(base?: I): QueryESMStatusResponse {
    return QueryESMStatusResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryESMStatusResponse>, I>>(object: I): QueryESMStatusResponse {
    const message = createBaseQueryESMStatusResponse();
    message.esmStatus = (object.esmStatus !== undefined && object.esmStatus !== null)
      ? ESMStatus.fromPartial(object.esmStatus)
      : undefined;
    return message;
  },
};

function createBaseQueryCurrentDepositStatsRequest(): QueryCurrentDepositStatsRequest {
  return { id: Long.UZERO };
}

export const QueryCurrentDepositStatsRequest = {
  encode(message: QueryCurrentDepositStatsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentDepositStatsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentDepositStatsRequest();
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

  fromJSON(object: any): QueryCurrentDepositStatsRequest {
    return { id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: QueryCurrentDepositStatsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCurrentDepositStatsRequest>, I>>(base?: I): QueryCurrentDepositStatsRequest {
    return QueryCurrentDepositStatsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryCurrentDepositStatsRequest>, I>>(
    object: I,
  ): QueryCurrentDepositStatsRequest {
    const message = createBaseQueryCurrentDepositStatsRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseQueryCurrentDepositStatsResponse(): QueryCurrentDepositStatsResponse {
  return { currentDepositStats: undefined };
}

export const QueryCurrentDepositStatsResponse = {
  encode(message: QueryCurrentDepositStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currentDepositStats !== undefined) {
      CurrentDepositStats.encode(message.currentDepositStats, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentDepositStatsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentDepositStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentDepositStats = CurrentDepositStats.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCurrentDepositStatsResponse {
    return {
      currentDepositStats: isSet(object.currentDepositStats)
        ? CurrentDepositStats.fromJSON(object.currentDepositStats)
        : undefined,
    };
  },

  toJSON(message: QueryCurrentDepositStatsResponse): unknown {
    const obj: any = {};
    message.currentDepositStats !== undefined && (obj.currentDepositStats = message.currentDepositStats
      ? CurrentDepositStats.toJSON(message.currentDepositStats)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCurrentDepositStatsResponse>, I>>(
    base?: I,
  ): QueryCurrentDepositStatsResponse {
    return QueryCurrentDepositStatsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryCurrentDepositStatsResponse>, I>>(
    object: I,
  ): QueryCurrentDepositStatsResponse {
    const message = createBaseQueryCurrentDepositStatsResponse();
    message.currentDepositStats = (object.currentDepositStats !== undefined && object.currentDepositStats !== null)
      ? CurrentDepositStats.fromPartial(object.currentDepositStats)
      : undefined;
    return message;
  },
};

function createBaseQueryUsersDepositMappingRequest(): QueryUsersDepositMappingRequest {
  return { id: Long.UZERO, depositor: "" };
}

export const QueryUsersDepositMappingRequest = {
  encode(message: QueryUsersDepositMappingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUsersDepositMappingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUsersDepositMappingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUsersDepositMappingRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
    };
  },

  toJSON(message: QueryUsersDepositMappingRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryUsersDepositMappingRequest>, I>>(base?: I): QueryUsersDepositMappingRequest {
    return QueryUsersDepositMappingRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryUsersDepositMappingRequest>, I>>(
    object: I,
  ): QueryUsersDepositMappingRequest {
    const message = createBaseQueryUsersDepositMappingRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.depositor = object.depositor ?? "";
    return message;
  },
};

function createBaseQueryUsersDepositMappingResponse(): QueryUsersDepositMappingResponse {
  return { usersDepositMapping: undefined };
}

export const QueryUsersDepositMappingResponse = {
  encode(message: QueryUsersDepositMappingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.usersDepositMapping !== undefined) {
      UsersDepositMapping.encode(message.usersDepositMapping, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUsersDepositMappingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUsersDepositMappingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.usersDepositMapping = UsersDepositMapping.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUsersDepositMappingResponse {
    return {
      usersDepositMapping: isSet(object.usersDepositMapping)
        ? UsersDepositMapping.fromJSON(object.usersDepositMapping)
        : undefined,
    };
  },

  toJSON(message: QueryUsersDepositMappingResponse): unknown {
    const obj: any = {};
    message.usersDepositMapping !== undefined && (obj.usersDepositMapping = message.usersDepositMapping
      ? UsersDepositMapping.toJSON(message.usersDepositMapping)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryUsersDepositMappingResponse>, I>>(
    base?: I,
  ): QueryUsersDepositMappingResponse {
    return QueryUsersDepositMappingResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryUsersDepositMappingResponse>, I>>(
    object: I,
  ): QueryUsersDepositMappingResponse {
    const message = createBaseQueryUsersDepositMappingResponse();
    message.usersDepositMapping = (object.usersDepositMapping !== undefined && object.usersDepositMapping !== null)
      ? UsersDepositMapping.fromPartial(object.usersDepositMapping)
      : undefined;
    return message;
  },
};

function createBaseQueryDataAfterCoolOffRequest(): QueryDataAfterCoolOffRequest {
  return { id: Long.UZERO };
}

export const QueryDataAfterCoolOffRequest = {
  encode(message: QueryDataAfterCoolOffRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDataAfterCoolOffRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDataAfterCoolOffRequest();
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

  fromJSON(object: any): QueryDataAfterCoolOffRequest {
    return { id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: QueryDataAfterCoolOffRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDataAfterCoolOffRequest>, I>>(base?: I): QueryDataAfterCoolOffRequest {
    return QueryDataAfterCoolOffRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDataAfterCoolOffRequest>, I>>(object: I): QueryDataAfterCoolOffRequest {
    const message = createBaseQueryDataAfterCoolOffRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseQueryDataAfterCoolOffResponse(): QueryDataAfterCoolOffResponse {
  return { dataAfterCoolOff: undefined };
}

export const QueryDataAfterCoolOffResponse = {
  encode(message: QueryDataAfterCoolOffResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataAfterCoolOff !== undefined) {
      DataAfterCoolOff.encode(message.dataAfterCoolOff, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDataAfterCoolOffResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDataAfterCoolOffResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dataAfterCoolOff = DataAfterCoolOff.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDataAfterCoolOffResponse {
    return {
      dataAfterCoolOff: isSet(object.dataAfterCoolOff) ? DataAfterCoolOff.fromJSON(object.dataAfterCoolOff) : undefined,
    };
  },

  toJSON(message: QueryDataAfterCoolOffResponse): unknown {
    const obj: any = {};
    message.dataAfterCoolOff !== undefined &&
      (obj.dataAfterCoolOff = message.dataAfterCoolOff ? DataAfterCoolOff.toJSON(message.dataAfterCoolOff) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDataAfterCoolOffResponse>, I>>(base?: I): QueryDataAfterCoolOffResponse {
    return QueryDataAfterCoolOffResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDataAfterCoolOffResponse>, I>>(
    object: I,
  ): QueryDataAfterCoolOffResponse {
    const message = createBaseQueryDataAfterCoolOffResponse();
    message.dataAfterCoolOff = (object.dataAfterCoolOff !== undefined && object.dataAfterCoolOff !== null)
      ? DataAfterCoolOff.fromPartial(object.dataAfterCoolOff)
      : undefined;
    return message;
  },
};

function createBaseQuerySnapshotPriceRequest(): QuerySnapshotPriceRequest {
  return { appId: Long.UZERO, assetId: Long.UZERO };
}

export const QuerySnapshotPriceRequest = {
  encode(message: QuerySnapshotPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySnapshotPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySnapshotPriceRequest();
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

  fromJSON(object: any): QuerySnapshotPriceRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId) ? Long.fromValue(object.assetId) : Long.UZERO,
    };
  },

  toJSON(message: QuerySnapshotPriceRequest): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined && (obj.assetId = (message.assetId || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QuerySnapshotPriceRequest>, I>>(base?: I): QuerySnapshotPriceRequest {
    return QuerySnapshotPriceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuerySnapshotPriceRequest>, I>>(object: I): QuerySnapshotPriceRequest {
    const message = createBaseQuerySnapshotPriceRequest();
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.assetId = (object.assetId !== undefined && object.assetId !== null)
      ? Long.fromValue(object.assetId)
      : Long.UZERO;
    return message;
  },
};

function createBaseQuerySnapshotPriceResponse(): QuerySnapshotPriceResponse {
  return { price: Long.UZERO };
}

export const QuerySnapshotPriceResponse = {
  encode(message: QuerySnapshotPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.price.isZero()) {
      writer.uint32(8).uint64(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySnapshotPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySnapshotPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySnapshotPriceResponse {
    return { price: isSet(object.price) ? Long.fromValue(object.price) : Long.UZERO };
  },

  toJSON(message: QuerySnapshotPriceResponse): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = (message.price || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QuerySnapshotPriceResponse>, I>>(base?: I): QuerySnapshotPriceResponse {
    return QuerySnapshotPriceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuerySnapshotPriceResponse>, I>>(object: I): QuerySnapshotPriceResponse {
    const message = createBaseQuerySnapshotPriceResponse();
    message.price = (object.price !== undefined && object.price !== null) ? Long.fromValue(object.price) : Long.UZERO;
    return message;
  },
};

function createBaseQueryAssetDataAfterCoolOffRequest(): QueryAssetDataAfterCoolOffRequest {
  return { appId: Long.UZERO };
}

export const QueryAssetDataAfterCoolOffRequest = {
  encode(message: QueryAssetDataAfterCoolOffRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetDataAfterCoolOffRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetDataAfterCoolOffRequest();
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

  fromJSON(object: any): QueryAssetDataAfterCoolOffRequest {
    return { appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO };
  },

  toJSON(message: QueryAssetDataAfterCoolOffRequest): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAssetDataAfterCoolOffRequest>, I>>(
    base?: I,
  ): QueryAssetDataAfterCoolOffRequest {
    return QueryAssetDataAfterCoolOffRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAssetDataAfterCoolOffRequest>, I>>(
    object: I,
  ): QueryAssetDataAfterCoolOffRequest {
    const message = createBaseQueryAssetDataAfterCoolOffRequest();
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    return message;
  },
};

function createBaseQueryAssetDataAfterCoolOffResponse(): QueryAssetDataAfterCoolOffResponse {
  return { assetToAmount: [] };
}

export const QueryAssetDataAfterCoolOffResponse = {
  encode(message: QueryAssetDataAfterCoolOffResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assetToAmount) {
      AssetToAmount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetDataAfterCoolOffResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetDataAfterCoolOffResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetToAmount.push(AssetToAmount.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAssetDataAfterCoolOffResponse {
    return {
      assetToAmount: Array.isArray(object?.assetToAmount)
        ? object.assetToAmount.map((e: any) => AssetToAmount.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAssetDataAfterCoolOffResponse): unknown {
    const obj: any = {};
    if (message.assetToAmount) {
      obj.assetToAmount = message.assetToAmount.map((e) => e ? AssetToAmount.toJSON(e) : undefined);
    } else {
      obj.assetToAmount = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAssetDataAfterCoolOffResponse>, I>>(
    base?: I,
  ): QueryAssetDataAfterCoolOffResponse {
    return QueryAssetDataAfterCoolOffResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAssetDataAfterCoolOffResponse>, I>>(
    object: I,
  ): QueryAssetDataAfterCoolOffResponse {
    const message = createBaseQueryAssetDataAfterCoolOffResponse();
    message.assetToAmount = object.assetToAmount?.map((e) => AssetToAmount.fromPartial(e)) || [];
    return message;
  },
};

export interface Query {
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  QueryESMTriggerParams(request: QueryESMTriggerParamsRequest): Promise<QueryESMTriggerParamsResponse>;
  QueryESMStatus(request: QueryESMStatusRequest): Promise<QueryESMStatusResponse>;
  QueryCurrentDepositStats(request: QueryCurrentDepositStatsRequest): Promise<QueryCurrentDepositStatsResponse>;
  QueryUsersDepositMapping(request: QueryUsersDepositMappingRequest): Promise<QueryUsersDepositMappingResponse>;
  QueryDataAfterCoolOff(request: QueryDataAfterCoolOffRequest): Promise<QueryDataAfterCoolOffResponse>;
  QuerySnapshotPrice(request: QuerySnapshotPriceRequest): Promise<QuerySnapshotPriceResponse>;
  QueryAssetDataAfterCoolOff(request: QueryAssetDataAfterCoolOffRequest): Promise<QueryAssetDataAfterCoolOffResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "comdex.esm.v1beta1.Query";
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.QueryESMTriggerParams = this.QueryESMTriggerParams.bind(this);
    this.QueryESMStatus = this.QueryESMStatus.bind(this);
    this.QueryCurrentDepositStats = this.QueryCurrentDepositStats.bind(this);
    this.QueryUsersDepositMapping = this.QueryUsersDepositMapping.bind(this);
    this.QueryDataAfterCoolOff = this.QueryDataAfterCoolOff.bind(this);
    this.QuerySnapshotPrice = this.QuerySnapshotPrice.bind(this);
    this.QueryAssetDataAfterCoolOff = this.QueryAssetDataAfterCoolOff.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  QueryESMTriggerParams(request: QueryESMTriggerParamsRequest): Promise<QueryESMTriggerParamsResponse> {
    const data = QueryESMTriggerParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryESMTriggerParams", data);
    return promise.then((data) => QueryESMTriggerParamsResponse.decode(new _m0.Reader(data)));
  }

  QueryESMStatus(request: QueryESMStatusRequest): Promise<QueryESMStatusResponse> {
    const data = QueryESMStatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryESMStatus", data);
    return promise.then((data) => QueryESMStatusResponse.decode(new _m0.Reader(data)));
  }

  QueryCurrentDepositStats(request: QueryCurrentDepositStatsRequest): Promise<QueryCurrentDepositStatsResponse> {
    const data = QueryCurrentDepositStatsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryCurrentDepositStats", data);
    return promise.then((data) => QueryCurrentDepositStatsResponse.decode(new _m0.Reader(data)));
  }

  QueryUsersDepositMapping(request: QueryUsersDepositMappingRequest): Promise<QueryUsersDepositMappingResponse> {
    const data = QueryUsersDepositMappingRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryUsersDepositMapping", data);
    return promise.then((data) => QueryUsersDepositMappingResponse.decode(new _m0.Reader(data)));
  }

  QueryDataAfterCoolOff(request: QueryDataAfterCoolOffRequest): Promise<QueryDataAfterCoolOffResponse> {
    const data = QueryDataAfterCoolOffRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryDataAfterCoolOff", data);
    return promise.then((data) => QueryDataAfterCoolOffResponse.decode(new _m0.Reader(data)));
  }

  QuerySnapshotPrice(request: QuerySnapshotPriceRequest): Promise<QuerySnapshotPriceResponse> {
    const data = QuerySnapshotPriceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuerySnapshotPrice", data);
    return promise.then((data) => QuerySnapshotPriceResponse.decode(new _m0.Reader(data)));
  }

  QueryAssetDataAfterCoolOff(request: QueryAssetDataAfterCoolOffRequest): Promise<QueryAssetDataAfterCoolOffResponse> {
    const data = QueryAssetDataAfterCoolOffRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryAssetDataAfterCoolOff", data);
    return promise.then((data) => QueryAssetDataAfterCoolOffResponse.decode(new _m0.Reader(data)));
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
