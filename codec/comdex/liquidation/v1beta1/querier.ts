/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  LockedVault,
  WhitelistedAppIds,
} from "../../../comdex/liquidation/v1beta1/locked_vault";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "../../../comdex/liquidation/v1beta1/params";

export const protobufPackage = "comdex.liquidation.v1beta1";

export interface QueryLockedVaultRequest {
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

export interface QueryParamsRequest {}

export interface QueryParamsResponse {
  params?: Params;
}

export interface QueryLockedVaultsHistoryRequest {
  pagination?: PageRequest;
}

export interface QueryLockedVaultsHistoryResponse {
  lockedVaultsHistory: LockedVault[];
  pagination?: PageResponse;
}

export interface QueryUserLockedVaultsRequest {
  userAddress: string;
  pagination?: PageRequest;
}

export interface QueryUserLockedVaultsResponse {
  userLockedVaults: LockedVault[];
  pagination?: PageResponse;
}

export interface QueryUserLockedVaultsHistoryRequest {
  userAddress: string;
  pagination?: PageRequest;
}

export interface QueryUserLockedVaultsHistoryResponse {
  userLockedVaultsHistory: LockedVault[];
  pagination?: PageResponse;
}

export interface QueryLockedVaultsPairRequest {
  PairId: Long;
  pagination?: PageRequest;
}

export interface QueryLockedVaultsPairResponse {
  lockedVaultsPair: LockedVault[];
  pagination?: PageResponse;
}

export interface QueryAppIdsRequest {}

export interface QueryAppIdsResponse {
  WhitelistedAppIds?: WhitelistedAppIds;
}

function createBaseQueryLockedVaultRequest(): QueryLockedVaultRequest {
  return { id: Long.UZERO };
}

export const QueryLockedVaultRequest = {
  encode(
    message: QueryLockedVaultRequest,
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
  ): QueryLockedVaultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedVaultRequest();
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

  fromJSON(object: any): QueryLockedVaultRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryLockedVaultRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockedVaultRequest>, I>>(
    object: I
  ): QueryLockedVaultRequest {
    const message = createBaseQueryLockedVaultRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryLockedVaultResponse(): QueryLockedVaultResponse {
  return { lockedVault: undefined };
}

export const QueryLockedVaultResponse = {
  encode(
    message: QueryLockedVaultResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lockedVault !== undefined) {
      LockedVault.encode(
        message.lockedVault,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockedVaultResponse {
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
    return {
      lockedVault: isSet(object.lockedVault)
        ? LockedVault.fromJSON(object.lockedVault)
        : undefined,
    };
  },

  toJSON(message: QueryLockedVaultResponse): unknown {
    const obj: any = {};
    message.lockedVault !== undefined &&
      (obj.lockedVault = message.lockedVault
        ? LockedVault.toJSON(message.lockedVault)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockedVaultResponse>, I>>(
    object: I
  ): QueryLockedVaultResponse {
    const message = createBaseQueryLockedVaultResponse();
    message.lockedVault =
      object.lockedVault !== undefined && object.lockedVault !== null
        ? LockedVault.fromPartial(object.lockedVault)
        : undefined;
    return message;
  },
};

function createBaseQueryLockedVaultsRequest(): QueryLockedVaultsRequest {
  return { pagination: undefined };
}

export const QueryLockedVaultsRequest = {
  encode(
    message: QueryLockedVaultsRequest,
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
  ): QueryLockedVaultsRequest {
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
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLockedVaultsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockedVaultsRequest>, I>>(
    object: I
  ): QueryLockedVaultsRequest {
    const message = createBaseQueryLockedVaultsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryLockedVaultsResponse(): QueryLockedVaultsResponse {
  return { lockedVaults: [], pagination: undefined };
}

export const QueryLockedVaultsResponse = {
  encode(
    message: QueryLockedVaultsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.lockedVaults) {
      LockedVault.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryLockedVaultsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedVaultsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockedVaults.push(
            LockedVault.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryLockedVaultsResponse {
    return {
      lockedVaults: Array.isArray(object?.lockedVaults)
        ? object.lockedVaults.map((e: any) => LockedVault.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLockedVaultsResponse): unknown {
    const obj: any = {};
    if (message.lockedVaults) {
      obj.lockedVaults = message.lockedVaults.map((e) =>
        e ? LockedVault.toJSON(e) : undefined
      );
    } else {
      obj.lockedVaults = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockedVaultsResponse>, I>>(
    object: I
  ): QueryLockedVaultsResponse {
    const message = createBaseQueryLockedVaultsResponse();
    message.lockedVaults =
      object.lockedVaults?.map((e) => LockedVault.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
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

function createBaseQueryLockedVaultsHistoryRequest(): QueryLockedVaultsHistoryRequest {
  return { pagination: undefined };
}

export const QueryLockedVaultsHistoryRequest = {
  encode(
    message: QueryLockedVaultsHistoryRequest,
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
  ): QueryLockedVaultsHistoryRequest {
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
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLockedVaultsHistoryRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockedVaultsHistoryRequest>, I>>(
    object: I
  ): QueryLockedVaultsHistoryRequest {
    const message = createBaseQueryLockedVaultsHistoryRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryLockedVaultsHistoryResponse(): QueryLockedVaultsHistoryResponse {
  return { lockedVaultsHistory: [], pagination: undefined };
}

export const QueryLockedVaultsHistoryResponse = {
  encode(
    message: QueryLockedVaultsHistoryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.lockedVaultsHistory) {
      LockedVault.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryLockedVaultsHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedVaultsHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockedVaultsHistory.push(
            LockedVault.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryLockedVaultsHistoryResponse {
    return {
      lockedVaultsHistory: Array.isArray(object?.lockedVaultsHistory)
        ? object.lockedVaultsHistory.map((e: any) => LockedVault.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLockedVaultsHistoryResponse): unknown {
    const obj: any = {};
    if (message.lockedVaultsHistory) {
      obj.lockedVaultsHistory = message.lockedVaultsHistory.map((e) =>
        e ? LockedVault.toJSON(e) : undefined
      );
    } else {
      obj.lockedVaultsHistory = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryLockedVaultsHistoryResponse>, I>
  >(object: I): QueryLockedVaultsHistoryResponse {
    const message = createBaseQueryLockedVaultsHistoryResponse();
    message.lockedVaultsHistory =
      object.lockedVaultsHistory?.map((e) => LockedVault.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryUserLockedVaultsRequest(): QueryUserLockedVaultsRequest {
  return { userAddress: "", pagination: undefined };
}

export const QueryUserLockedVaultsRequest = {
  encode(
    message: QueryUserLockedVaultsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserLockedVaultsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserLockedVaultsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
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

  fromJSON(object: any): QueryUserLockedVaultsRequest {
    return {
      userAddress: isSet(object.userAddress) ? String(object.userAddress) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryUserLockedVaultsRequest): unknown {
    const obj: any = {};
    message.userAddress !== undefined &&
      (obj.userAddress = message.userAddress);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUserLockedVaultsRequest>, I>>(
    object: I
  ): QueryUserLockedVaultsRequest {
    const message = createBaseQueryUserLockedVaultsRequest();
    message.userAddress = object.userAddress ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryUserLockedVaultsResponse(): QueryUserLockedVaultsResponse {
  return { userLockedVaults: [], pagination: undefined };
}

export const QueryUserLockedVaultsResponse = {
  encode(
    message: QueryUserLockedVaultsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.userLockedVaults) {
      LockedVault.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryUserLockedVaultsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserLockedVaultsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userLockedVaults.push(
            LockedVault.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryUserLockedVaultsResponse {
    return {
      userLockedVaults: Array.isArray(object?.userLockedVaults)
        ? object.userLockedVaults.map((e: any) => LockedVault.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryUserLockedVaultsResponse): unknown {
    const obj: any = {};
    if (message.userLockedVaults) {
      obj.userLockedVaults = message.userLockedVaults.map((e) =>
        e ? LockedVault.toJSON(e) : undefined
      );
    } else {
      obj.userLockedVaults = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUserLockedVaultsResponse>, I>>(
    object: I
  ): QueryUserLockedVaultsResponse {
    const message = createBaseQueryUserLockedVaultsResponse();
    message.userLockedVaults =
      object.userLockedVaults?.map((e) => LockedVault.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryUserLockedVaultsHistoryRequest(): QueryUserLockedVaultsHistoryRequest {
  return { userAddress: "", pagination: undefined };
}

export const QueryUserLockedVaultsHistoryRequest = {
  encode(
    message: QueryUserLockedVaultsHistoryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserLockedVaultsHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserLockedVaultsHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
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

  fromJSON(object: any): QueryUserLockedVaultsHistoryRequest {
    return {
      userAddress: isSet(object.userAddress) ? String(object.userAddress) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryUserLockedVaultsHistoryRequest): unknown {
    const obj: any = {};
    message.userAddress !== undefined &&
      (obj.userAddress = message.userAddress);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryUserLockedVaultsHistoryRequest>, I>
  >(object: I): QueryUserLockedVaultsHistoryRequest {
    const message = createBaseQueryUserLockedVaultsHistoryRequest();
    message.userAddress = object.userAddress ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryUserLockedVaultsHistoryResponse(): QueryUserLockedVaultsHistoryResponse {
  return { userLockedVaultsHistory: [], pagination: undefined };
}

export const QueryUserLockedVaultsHistoryResponse = {
  encode(
    message: QueryUserLockedVaultsHistoryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.userLockedVaultsHistory) {
      LockedVault.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryUserLockedVaultsHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserLockedVaultsHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userLockedVaultsHistory.push(
            LockedVault.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryUserLockedVaultsHistoryResponse {
    return {
      userLockedVaultsHistory: Array.isArray(object?.userLockedVaultsHistory)
        ? object.userLockedVaultsHistory.map((e: any) =>
            LockedVault.fromJSON(e)
          )
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryUserLockedVaultsHistoryResponse): unknown {
    const obj: any = {};
    if (message.userLockedVaultsHistory) {
      obj.userLockedVaultsHistory = message.userLockedVaultsHistory.map((e) =>
        e ? LockedVault.toJSON(e) : undefined
      );
    } else {
      obj.userLockedVaultsHistory = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryUserLockedVaultsHistoryResponse>, I>
  >(object: I): QueryUserLockedVaultsHistoryResponse {
    const message = createBaseQueryUserLockedVaultsHistoryResponse();
    message.userLockedVaultsHistory =
      object.userLockedVaultsHistory?.map((e) => LockedVault.fromPartial(e)) ||
      [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryLockedVaultsPairRequest(): QueryLockedVaultsPairRequest {
  return { PairId: Long.UZERO, pagination: undefined };
}

export const QueryLockedVaultsPairRequest = {
  encode(
    message: QueryLockedVaultsPairRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.PairId.isZero()) {
      writer.uint32(8).uint64(message.PairId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockedVaultsPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedVaultsPairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.PairId = reader.uint64() as Long;
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

  fromJSON(object: any): QueryLockedVaultsPairRequest {
    return {
      PairId: isSet(object.PairId) ? Long.fromValue(object.PairId) : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLockedVaultsPairRequest): unknown {
    const obj: any = {};
    message.PairId !== undefined &&
      (obj.PairId = (message.PairId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockedVaultsPairRequest>, I>>(
    object: I
  ): QueryLockedVaultsPairRequest {
    const message = createBaseQueryLockedVaultsPairRequest();
    message.PairId =
      object.PairId !== undefined && object.PairId !== null
        ? Long.fromValue(object.PairId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryLockedVaultsPairResponse(): QueryLockedVaultsPairResponse {
  return { lockedVaultsPair: [], pagination: undefined };
}

export const QueryLockedVaultsPairResponse = {
  encode(
    message: QueryLockedVaultsPairResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.lockedVaultsPair) {
      LockedVault.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryLockedVaultsPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedVaultsPairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockedVaultsPair.push(
            LockedVault.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryLockedVaultsPairResponse {
    return {
      lockedVaultsPair: Array.isArray(object?.lockedVaultsPair)
        ? object.lockedVaultsPair.map((e: any) => LockedVault.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLockedVaultsPairResponse): unknown {
    const obj: any = {};
    if (message.lockedVaultsPair) {
      obj.lockedVaultsPair = message.lockedVaultsPair.map((e) =>
        e ? LockedVault.toJSON(e) : undefined
      );
    } else {
      obj.lockedVaultsPair = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockedVaultsPairResponse>, I>>(
    object: I
  ): QueryLockedVaultsPairResponse {
    const message = createBaseQueryLockedVaultsPairResponse();
    message.lockedVaultsPair =
      object.lockedVaultsPair?.map((e) => LockedVault.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAppIdsRequest(): QueryAppIdsRequest {
  return {};
}

export const QueryAppIdsRequest = {
  encode(
    _: QueryAppIdsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppIdsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppIdsRequest();
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

  fromJSON(_: any): QueryAppIdsRequest {
    return {};
  },

  toJSON(_: QueryAppIdsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAppIdsRequest>, I>>(
    _: I
  ): QueryAppIdsRequest {
    const message = createBaseQueryAppIdsRequest();
    return message;
  },
};

function createBaseQueryAppIdsResponse(): QueryAppIdsResponse {
  return { WhitelistedAppIds: undefined };
}

export const QueryAppIdsResponse = {
  encode(
    message: QueryAppIdsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.WhitelistedAppIds !== undefined) {
      WhitelistedAppIds.encode(
        message.WhitelistedAppIds,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppIdsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppIdsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.WhitelistedAppIds = WhitelistedAppIds.decode(
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

  fromJSON(object: any): QueryAppIdsResponse {
    return {
      WhitelistedAppIds: isSet(object.WhitelistedAppIds)
        ? WhitelistedAppIds.fromJSON(object.WhitelistedAppIds)
        : undefined,
    };
  },

  toJSON(message: QueryAppIdsResponse): unknown {
    const obj: any = {};
    message.WhitelistedAppIds !== undefined &&
      (obj.WhitelistedAppIds = message.WhitelistedAppIds
        ? WhitelistedAppIds.toJSON(message.WhitelistedAppIds)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAppIdsResponse>, I>>(
    object: I
  ): QueryAppIdsResponse {
    const message = createBaseQueryAppIdsResponse();
    message.WhitelistedAppIds =
      object.WhitelistedAppIds !== undefined &&
      object.WhitelistedAppIds !== null
        ? WhitelistedAppIds.fromPartial(object.WhitelistedAppIds)
        : undefined;
    return message;
  },
};

export interface Query {
  QueryLockedVault(
    request: QueryLockedVaultRequest
  ): Promise<QueryLockedVaultResponse>;
  QueryLockedVaults(
    request: QueryLockedVaultsRequest
  ): Promise<QueryLockedVaultsResponse>;
  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  QueryLockedVaultsHistory(
    request: QueryLockedVaultsHistoryRequest
  ): Promise<QueryLockedVaultsHistoryResponse>;
  QueryUserLockedVaults(
    request: QueryUserLockedVaultsRequest
  ): Promise<QueryUserLockedVaultsResponse>;
  QueryUserLockedVaultsHistory(
    request: QueryUserLockedVaultsHistoryRequest
  ): Promise<QueryUserLockedVaultsHistoryResponse>;
  QueryLockedVaultsPair(
    request: QueryLockedVaultsPairRequest
  ): Promise<QueryLockedVaultsPairResponse>;
  QueryAppIds(request: QueryAppIdsRequest): Promise<QueryAppIdsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.QueryLockedVault = this.QueryLockedVault.bind(this);
    this.QueryLockedVaults = this.QueryLockedVaults.bind(this);
    this.QueryParams = this.QueryParams.bind(this);
    this.QueryLockedVaultsHistory = this.QueryLockedVaultsHistory.bind(this);
    this.QueryUserLockedVaults = this.QueryUserLockedVaults.bind(this);
    this.QueryUserLockedVaultsHistory =
      this.QueryUserLockedVaultsHistory.bind(this);
    this.QueryLockedVaultsPair = this.QueryLockedVaultsPair.bind(this);
    this.QueryAppIds = this.QueryAppIds.bind(this);
  }
  QueryLockedVault(
    request: QueryLockedVaultRequest
  ): Promise<QueryLockedVaultResponse> {
    const data = QueryLockedVaultRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidation.v1beta1.Query",
      "QueryLockedVault",
      data
    );
    return promise.then((data) =>
      QueryLockedVaultResponse.decode(new _m0.Reader(data))
    );
  }

  QueryLockedVaults(
    request: QueryLockedVaultsRequest
  ): Promise<QueryLockedVaultsResponse> {
    const data = QueryLockedVaultsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidation.v1beta1.Query",
      "QueryLockedVaults",
      data
    );
    return promise.then((data) =>
      QueryLockedVaultsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidation.v1beta1.Query",
      "QueryParams",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryLockedVaultsHistory(
    request: QueryLockedVaultsHistoryRequest
  ): Promise<QueryLockedVaultsHistoryResponse> {
    const data = QueryLockedVaultsHistoryRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidation.v1beta1.Query",
      "QueryLockedVaultsHistory",
      data
    );
    return promise.then((data) =>
      QueryLockedVaultsHistoryResponse.decode(new _m0.Reader(data))
    );
  }

  QueryUserLockedVaults(
    request: QueryUserLockedVaultsRequest
  ): Promise<QueryUserLockedVaultsResponse> {
    const data = QueryUserLockedVaultsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidation.v1beta1.Query",
      "QueryUserLockedVaults",
      data
    );
    return promise.then((data) =>
      QueryUserLockedVaultsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryUserLockedVaultsHistory(
    request: QueryUserLockedVaultsHistoryRequest
  ): Promise<QueryUserLockedVaultsHistoryResponse> {
    const data = QueryUserLockedVaultsHistoryRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidation.v1beta1.Query",
      "QueryUserLockedVaultsHistory",
      data
    );
    return promise.then((data) =>
      QueryUserLockedVaultsHistoryResponse.decode(new _m0.Reader(data))
    );
  }

  QueryLockedVaultsPair(
    request: QueryLockedVaultsPairRequest
  ): Promise<QueryLockedVaultsPairResponse> {
    const data = QueryLockedVaultsPairRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidation.v1beta1.Query",
      "QueryLockedVaultsPair",
      data
    );
    return promise.then((data) =>
      QueryLockedVaultsPairResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAppIds(request: QueryAppIdsRequest): Promise<QueryAppIdsResponse> {
    const data = QueryAppIdsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidation.v1beta1.Query",
      "QueryAppIds",
      data
    );
    return promise.then((data) =>
      QueryAppIdsResponse.decode(new _m0.Reader(data))
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
