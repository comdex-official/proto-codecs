/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { Lock, Unlocking } from "./lock";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "comdex.locking.v1beta1";

export interface QueryParamsRequest {}

export interface QueryParamsResponse {
  params?: Params;
}

export interface QueryLockByIdRequest {
  id: Long;
}

export interface QueryLockByIdResponse {
  lock?: Lock;
}

export interface QueryLocksByOwnerRequest {
  owner: string;
}

export interface QueryLocksByOwnerResponse {
  locks: Lock[];
}

export interface QueryAllLocksRequest {
  pagination?: PageRequest;
}

export interface QueryAllLocksResponse {
  locks: Lock[];
  pagination?: PageResponse;
}

export interface QueryUnlockingByIdRequest {
  id: Long;
}

export interface QueryUnlockingByIdResponse {
  unlocking?: Unlocking;
}

export interface QueryUnlockingsByOwnerRequest {
  owner: string;
}

export interface QueryUnlockingsByOwnerResponse {
  unlockings: Unlocking[];
}

export interface QueryAllUnlockingsRequest {
  pagination?: PageRequest;
}

export interface QueryAllUnlockingsResponse {
  unlockings: Unlocking[];
  pagination?: PageResponse;
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

function createBaseQueryLockByIdRequest(): QueryLockByIdRequest {
  return { id: Long.UZERO };
}

export const QueryLockByIdRequest = {
  encode(
    message: QueryLockByIdRequest,
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
  ): QueryLockByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockByIdRequest();
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

  fromJSON(object: any): QueryLockByIdRequest {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryLockByIdRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockByIdRequest>, I>>(
    object: I
  ): QueryLockByIdRequest {
    const message = createBaseQueryLockByIdRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryLockByIdResponse(): QueryLockByIdResponse {
  return { lock: undefined };
}

export const QueryLockByIdResponse = {
  encode(
    message: QueryLockByIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lock !== undefined) {
      Lock.encode(message.lock, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLockByIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lock = Lock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLockByIdResponse {
    return {
      lock: isSet(object.lock) ? Lock.fromJSON(object.lock) : undefined,
    };
  },

  toJSON(message: QueryLockByIdResponse): unknown {
    const obj: any = {};
    message.lock !== undefined &&
      (obj.lock = message.lock ? Lock.toJSON(message.lock) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockByIdResponse>, I>>(
    object: I
  ): QueryLockByIdResponse {
    const message = createBaseQueryLockByIdResponse();
    message.lock =
      object.lock !== undefined && object.lock !== null
        ? Lock.fromPartial(object.lock)
        : undefined;
    return message;
  },
};

function createBaseQueryLocksByOwnerRequest(): QueryLocksByOwnerRequest {
  return { owner: "" };
}

export const QueryLocksByOwnerRequest = {
  encode(
    message: QueryLocksByOwnerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLocksByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLocksByOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLocksByOwnerRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: QueryLocksByOwnerRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLocksByOwnerRequest>, I>>(
    object: I
  ): QueryLocksByOwnerRequest {
    const message = createBaseQueryLocksByOwnerRequest();
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseQueryLocksByOwnerResponse(): QueryLocksByOwnerResponse {
  return { locks: [] };
}

export const QueryLocksByOwnerResponse = {
  encode(
    message: QueryLocksByOwnerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.locks) {
      Lock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLocksByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLocksByOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(Lock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLocksByOwnerResponse {
    return {
      locks: Array.isArray(object?.locks)
        ? object.locks.map((e: any) => Lock.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryLocksByOwnerResponse): unknown {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map((e) => (e ? Lock.toJSON(e) : undefined));
    } else {
      obj.locks = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLocksByOwnerResponse>, I>>(
    object: I
  ): QueryLocksByOwnerResponse {
    const message = createBaseQueryLocksByOwnerResponse();
    message.locks = object.locks?.map((e) => Lock.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAllLocksRequest(): QueryAllLocksRequest {
  return { pagination: undefined };
}

export const QueryAllLocksRequest = {
  encode(
    message: QueryAllLocksRequest,
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
  ): QueryAllLocksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLocksRequest();
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

  fromJSON(object: any): QueryAllLocksRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllLocksRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllLocksRequest>, I>>(
    object: I
  ): QueryAllLocksRequest {
    const message = createBaseQueryAllLocksRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllLocksResponse(): QueryAllLocksResponse {
  return { locks: [], pagination: undefined };
}

export const QueryAllLocksResponse = {
  encode(
    message: QueryAllLocksResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.locks) {
      Lock.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllLocksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLocksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(Lock.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllLocksResponse {
    return {
      locks: Array.isArray(object?.locks)
        ? object.locks.map((e: any) => Lock.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllLocksResponse): unknown {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map((e) => (e ? Lock.toJSON(e) : undefined));
    } else {
      obj.locks = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllLocksResponse>, I>>(
    object: I
  ): QueryAllLocksResponse {
    const message = createBaseQueryAllLocksResponse();
    message.locks = object.locks?.map((e) => Lock.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryUnlockingByIdRequest(): QueryUnlockingByIdRequest {
  return { id: Long.UZERO };
}

export const QueryUnlockingByIdRequest = {
  encode(
    message: QueryUnlockingByIdRequest,
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
  ): QueryUnlockingByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnlockingByIdRequest();
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

  fromJSON(object: any): QueryUnlockingByIdRequest {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryUnlockingByIdRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUnlockingByIdRequest>, I>>(
    object: I
  ): QueryUnlockingByIdRequest {
    const message = createBaseQueryUnlockingByIdRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryUnlockingByIdResponse(): QueryUnlockingByIdResponse {
  return { unlocking: undefined };
}

export const QueryUnlockingByIdResponse = {
  encode(
    message: QueryUnlockingByIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.unlocking !== undefined) {
      Unlocking.encode(message.unlocking, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUnlockingByIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnlockingByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unlocking = Unlocking.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnlockingByIdResponse {
    return {
      unlocking: isSet(object.unlocking)
        ? Unlocking.fromJSON(object.unlocking)
        : undefined,
    };
  },

  toJSON(message: QueryUnlockingByIdResponse): unknown {
    const obj: any = {};
    message.unlocking !== undefined &&
      (obj.unlocking = message.unlocking
        ? Unlocking.toJSON(message.unlocking)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUnlockingByIdResponse>, I>>(
    object: I
  ): QueryUnlockingByIdResponse {
    const message = createBaseQueryUnlockingByIdResponse();
    message.unlocking =
      object.unlocking !== undefined && object.unlocking !== null
        ? Unlocking.fromPartial(object.unlocking)
        : undefined;
    return message;
  },
};

function createBaseQueryUnlockingsByOwnerRequest(): QueryUnlockingsByOwnerRequest {
  return { owner: "" };
}

export const QueryUnlockingsByOwnerRequest = {
  encode(
    message: QueryUnlockingsByOwnerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUnlockingsByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnlockingsByOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnlockingsByOwnerRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: QueryUnlockingsByOwnerRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUnlockingsByOwnerRequest>, I>>(
    object: I
  ): QueryUnlockingsByOwnerRequest {
    const message = createBaseQueryUnlockingsByOwnerRequest();
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseQueryUnlockingsByOwnerResponse(): QueryUnlockingsByOwnerResponse {
  return { unlockings: [] };
}

export const QueryUnlockingsByOwnerResponse = {
  encode(
    message: QueryUnlockingsByOwnerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.unlockings) {
      Unlocking.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUnlockingsByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnlockingsByOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unlockings.push(Unlocking.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnlockingsByOwnerResponse {
    return {
      unlockings: Array.isArray(object?.unlockings)
        ? object.unlockings.map((e: any) => Unlocking.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryUnlockingsByOwnerResponse): unknown {
    const obj: any = {};
    if (message.unlockings) {
      obj.unlockings = message.unlockings.map((e) =>
        e ? Unlocking.toJSON(e) : undefined
      );
    } else {
      obj.unlockings = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUnlockingsByOwnerResponse>, I>>(
    object: I
  ): QueryUnlockingsByOwnerResponse {
    const message = createBaseQueryUnlockingsByOwnerResponse();
    message.unlockings =
      object.unlockings?.map((e) => Unlocking.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAllUnlockingsRequest(): QueryAllUnlockingsRequest {
  return { pagination: undefined };
}

export const QueryAllUnlockingsRequest = {
  encode(
    message: QueryAllUnlockingsRequest,
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
  ): QueryAllUnlockingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUnlockingsRequest();
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

  fromJSON(object: any): QueryAllUnlockingsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllUnlockingsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllUnlockingsRequest>, I>>(
    object: I
  ): QueryAllUnlockingsRequest {
    const message = createBaseQueryAllUnlockingsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllUnlockingsResponse(): QueryAllUnlockingsResponse {
  return { unlockings: [], pagination: undefined };
}

export const QueryAllUnlockingsResponse = {
  encode(
    message: QueryAllUnlockingsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.unlockings) {
      Unlocking.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllUnlockingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUnlockingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unlockings.push(Unlocking.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllUnlockingsResponse {
    return {
      unlockings: Array.isArray(object?.unlockings)
        ? object.unlockings.map((e: any) => Unlocking.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllUnlockingsResponse): unknown {
    const obj: any = {};
    if (message.unlockings) {
      obj.unlockings = message.unlockings.map((e) =>
        e ? Unlocking.toJSON(e) : undefined
      );
    } else {
      obj.unlockings = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllUnlockingsResponse>, I>>(
    object: I
  ): QueryAllUnlockingsResponse {
    const message = createBaseQueryAllUnlockingsResponse();
    message.unlockings =
      object.unlockings?.map((e) => Unlocking.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

export interface Query {
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  QueryLockByID(request: QueryLockByIdRequest): Promise<QueryLockByIdResponse>;
  QueryLocksByOwner(
    request: QueryLocksByOwnerRequest
  ): Promise<QueryLocksByOwnerResponse>;
  QueryAllLocks(request: QueryAllLocksRequest): Promise<QueryAllLocksResponse>;
  QueryUnlockingByID(
    request: QueryUnlockingByIdRequest
  ): Promise<QueryUnlockingByIdResponse>;
  QueryUnlockingsByOwner(
    request: QueryUnlockingsByOwnerRequest
  ): Promise<QueryUnlockingsByOwnerResponse>;
  QueryAllUnlockings(
    request: QueryAllUnlockingsRequest
  ): Promise<QueryAllUnlockingsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.QueryLockByID = this.QueryLockByID.bind(this);
    this.QueryLocksByOwner = this.QueryLocksByOwner.bind(this);
    this.QueryAllLocks = this.QueryAllLocks.bind(this);
    this.QueryUnlockingByID = this.QueryUnlockingByID.bind(this);
    this.QueryUnlockingsByOwner = this.QueryUnlockingsByOwner.bind(this);
    this.QueryAllUnlockings = this.QueryAllUnlockings.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locking.v1beta1.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryLockByID(request: QueryLockByIdRequest): Promise<QueryLockByIdResponse> {
    const data = QueryLockByIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locking.v1beta1.Query",
      "QueryLockByID",
      data
    );
    return promise.then((data) =>
      QueryLockByIdResponse.decode(new _m0.Reader(data))
    );
  }

  QueryLocksByOwner(
    request: QueryLocksByOwnerRequest
  ): Promise<QueryLocksByOwnerResponse> {
    const data = QueryLocksByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locking.v1beta1.Query",
      "QueryLocksByOwner",
      data
    );
    return promise.then((data) =>
      QueryLocksByOwnerResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAllLocks(request: QueryAllLocksRequest): Promise<QueryAllLocksResponse> {
    const data = QueryAllLocksRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locking.v1beta1.Query",
      "QueryAllLocks",
      data
    );
    return promise.then((data) =>
      QueryAllLocksResponse.decode(new _m0.Reader(data))
    );
  }

  QueryUnlockingByID(
    request: QueryUnlockingByIdRequest
  ): Promise<QueryUnlockingByIdResponse> {
    const data = QueryUnlockingByIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locking.v1beta1.Query",
      "QueryUnlockingByID",
      data
    );
    return promise.then((data) =>
      QueryUnlockingByIdResponse.decode(new _m0.Reader(data))
    );
  }

  QueryUnlockingsByOwner(
    request: QueryUnlockingsByOwnerRequest
  ): Promise<QueryUnlockingsByOwnerResponse> {
    const data = QueryUnlockingsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locking.v1beta1.Query",
      "QueryUnlockingsByOwner",
      data
    );
    return promise.then((data) =>
      QueryUnlockingsByOwnerResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAllUnlockings(
    request: QueryAllUnlockingsRequest
  ): Promise<QueryAllUnlockingsResponse> {
    const data = QueryAllUnlockingsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locking.v1beta1.Query",
      "QueryAllUnlockings",
      data
    );
    return promise.then((data) =>
      QueryAllUnlockingsResponse.decode(new _m0.Reader(data))
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
