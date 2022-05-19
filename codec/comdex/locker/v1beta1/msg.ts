/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.locker.v1beta1";

export interface MsgCreateLockerRequest {
  depositor: string;
  amount: string;
  assetId: Long;
  appMappingId: Long;
}

export interface MsgCreateLockerResponse {}

export interface MsgAddWhiteListedAssetRequest {
  from: string;
  appMappingId: Long;
  assetId: Long;
}

export interface MsgAddWhiteListedAssetResponse {}

export interface MsgDepositAssetRequest {
  depositor: string;
  lockerId: string;
  amount: string;
  assetId: Long;
  appMappingId: Long;
}

export interface MsgDepositAssetResponse {}

export interface MsgWithdrawAssetRequest {
  depositor: string;
  lockerId: string;
  amount: string;
  assetId: Long;
  appMappingId: Long;
}

export interface MsgWithdrawAssetResponse {}

function createBaseMsgCreateLockerRequest(): MsgCreateLockerRequest {
  return {
    depositor: "",
    amount: "",
    assetId: Long.UZERO,
    appMappingId: Long.UZERO,
  };
}

export const MsgCreateLockerRequest = {
  encode(
    message: MsgCreateLockerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(24).uint64(message.assetId);
    }
    if (!message.appMappingId.isZero()) {
      writer.uint32(32).uint64(message.appMappingId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateLockerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLockerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.assetId = reader.uint64() as Long;
          break;
        case 4:
          message.appMappingId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateLockerRequest {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      appMappingId: isSet(object.appMappingId)
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgCreateLockerRequest): unknown {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.amount !== undefined && (obj.amount = message.amount);
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateLockerRequest>, I>>(
    object: I
  ): MsgCreateLockerRequest {
    const message = createBaseMsgCreateLockerRequest();
    message.depositor = object.depositor ?? "";
    message.amount = object.amount ?? "";
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgCreateLockerResponse(): MsgCreateLockerResponse {
  return {};
}

export const MsgCreateLockerResponse = {
  encode(
    _: MsgCreateLockerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateLockerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLockerResponse();
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

  fromJSON(_: any): MsgCreateLockerResponse {
    return {};
  },

  toJSON(_: MsgCreateLockerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateLockerResponse>, I>>(
    _: I
  ): MsgCreateLockerResponse {
    const message = createBaseMsgCreateLockerResponse();
    return message;
  },
};

function createBaseMsgAddWhiteListedAssetRequest(): MsgAddWhiteListedAssetRequest {
  return { from: "", appMappingId: Long.UZERO, assetId: Long.UZERO };
}

export const MsgAddWhiteListedAssetRequest = {
  encode(
    message: MsgAddWhiteListedAssetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.appMappingId.isZero()) {
      writer.uint32(16).uint64(message.appMappingId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(24).uint64(message.assetId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddWhiteListedAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddWhiteListedAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.appMappingId = reader.uint64() as Long;
          break;
        case 3:
          message.assetId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddWhiteListedAssetRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      appMappingId: isSet(object.appMappingId)
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgAddWhiteListedAssetRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddWhiteListedAssetRequest>, I>>(
    object: I
  ): MsgAddWhiteListedAssetRequest {
    const message = createBaseMsgAddWhiteListedAssetRequest();
    message.from = object.from ?? "";
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgAddWhiteListedAssetResponse(): MsgAddWhiteListedAssetResponse {
  return {};
}

export const MsgAddWhiteListedAssetResponse = {
  encode(
    _: MsgAddWhiteListedAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddWhiteListedAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddWhiteListedAssetResponse();
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

  fromJSON(_: any): MsgAddWhiteListedAssetResponse {
    return {};
  },

  toJSON(_: MsgAddWhiteListedAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddWhiteListedAssetResponse>, I>>(
    _: I
  ): MsgAddWhiteListedAssetResponse {
    const message = createBaseMsgAddWhiteListedAssetResponse();
    return message;
  },
};

function createBaseMsgDepositAssetRequest(): MsgDepositAssetRequest {
  return {
    depositor: "",
    lockerId: "",
    amount: "",
    assetId: Long.UZERO,
    appMappingId: Long.UZERO,
  };
}

export const MsgDepositAssetRequest = {
  encode(
    message: MsgDepositAssetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    if (message.lockerId !== "") {
      writer.uint32(18).string(message.lockerId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(32).uint64(message.assetId);
    }
    if (!message.appMappingId.isZero()) {
      writer.uint32(40).uint64(message.appMappingId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDepositAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;
        case 2:
          message.lockerId = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.assetId = reader.uint64() as Long;
          break;
        case 5:
          message.appMappingId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDepositAssetRequest {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      lockerId: isSet(object.lockerId) ? String(object.lockerId) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      appMappingId: isSet(object.appMappingId)
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgDepositAssetRequest): unknown {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.lockerId !== undefined && (obj.lockerId = message.lockerId);
    message.amount !== undefined && (obj.amount = message.amount);
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositAssetRequest>, I>>(
    object: I
  ): MsgDepositAssetRequest {
    const message = createBaseMsgDepositAssetRequest();
    message.depositor = object.depositor ?? "";
    message.lockerId = object.lockerId ?? "";
    message.amount = object.amount ?? "";
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgDepositAssetResponse(): MsgDepositAssetResponse {
  return {};
}

export const MsgDepositAssetResponse = {
  encode(
    _: MsgDepositAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDepositAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositAssetResponse();
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

  fromJSON(_: any): MsgDepositAssetResponse {
    return {};
  },

  toJSON(_: MsgDepositAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositAssetResponse>, I>>(
    _: I
  ): MsgDepositAssetResponse {
    const message = createBaseMsgDepositAssetResponse();
    return message;
  },
};

function createBaseMsgWithdrawAssetRequest(): MsgWithdrawAssetRequest {
  return {
    depositor: "",
    lockerId: "",
    amount: "",
    assetId: Long.UZERO,
    appMappingId: Long.UZERO,
  };
}

export const MsgWithdrawAssetRequest = {
  encode(
    message: MsgWithdrawAssetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    if (message.lockerId !== "") {
      writer.uint32(18).string(message.lockerId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(32).uint64(message.assetId);
    }
    if (!message.appMappingId.isZero()) {
      writer.uint32(40).uint64(message.appMappingId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;
        case 2:
          message.lockerId = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.assetId = reader.uint64() as Long;
          break;
        case 5:
          message.appMappingId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawAssetRequest {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      lockerId: isSet(object.lockerId) ? String(object.lockerId) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      appMappingId: isSet(object.appMappingId)
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgWithdrawAssetRequest): unknown {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.lockerId !== undefined && (obj.lockerId = message.lockerId);
    message.amount !== undefined && (obj.amount = message.amount);
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawAssetRequest>, I>>(
    object: I
  ): MsgWithdrawAssetRequest {
    const message = createBaseMsgWithdrawAssetRequest();
    message.depositor = object.depositor ?? "";
    message.lockerId = object.lockerId ?? "";
    message.amount = object.amount ?? "";
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgWithdrawAssetResponse(): MsgWithdrawAssetResponse {
  return {};
}

export const MsgWithdrawAssetResponse = {
  encode(
    _: MsgWithdrawAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAssetResponse();
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

  fromJSON(_: any): MsgWithdrawAssetResponse {
    return {};
  },

  toJSON(_: MsgWithdrawAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawAssetResponse>, I>>(
    _: I
  ): MsgWithdrawAssetResponse {
    const message = createBaseMsgWithdrawAssetResponse();
    return message;
  },
};

/** For CLI Command & Proposals */
export interface MsgService {
  MsgAddWhiteListedAsset(
    request: MsgAddWhiteListedAssetRequest
  ): Promise<MsgAddWhiteListedAssetResponse>;
  MsgCreateLocker(
    request: MsgCreateLockerRequest
  ): Promise<MsgCreateLockerResponse>;
  MsgDepositAsset(
    request: MsgDepositAssetRequest
  ): Promise<MsgDepositAssetResponse>;
  MsgWithdrawAsset(
    request: MsgWithdrawAssetRequest
  ): Promise<MsgWithdrawAssetResponse>;
}

export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MsgAddWhiteListedAsset = this.MsgAddWhiteListedAsset.bind(this);
    this.MsgCreateLocker = this.MsgCreateLocker.bind(this);
    this.MsgDepositAsset = this.MsgDepositAsset.bind(this);
    this.MsgWithdrawAsset = this.MsgWithdrawAsset.bind(this);
  }
  MsgAddWhiteListedAsset(
    request: MsgAddWhiteListedAssetRequest
  ): Promise<MsgAddWhiteListedAssetResponse> {
    const data = MsgAddWhiteListedAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.MsgService",
      "MsgAddWhiteListedAsset",
      data
    );
    return promise.then((data) =>
      MsgAddWhiteListedAssetResponse.decode(new _m0.Reader(data))
    );
  }

  MsgCreateLocker(
    request: MsgCreateLockerRequest
  ): Promise<MsgCreateLockerResponse> {
    const data = MsgCreateLockerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.MsgService",
      "MsgCreateLocker",
      data
    );
    return promise.then((data) =>
      MsgCreateLockerResponse.decode(new _m0.Reader(data))
    );
  }

  MsgDepositAsset(
    request: MsgDepositAssetRequest
  ): Promise<MsgDepositAssetResponse> {
    const data = MsgDepositAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.MsgService",
      "MsgDepositAsset",
      data
    );
    return promise.then((data) =>
      MsgDepositAssetResponse.decode(new _m0.Reader(data))
    );
  }

  MsgWithdrawAsset(
    request: MsgWithdrawAssetRequest
  ): Promise<MsgWithdrawAssetResponse> {
    const data = MsgWithdrawAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.MsgService",
      "MsgWithdrawAsset",
      data
    );
    return promise.then((data) =>
      MsgWithdrawAssetResponse.decode(new _m0.Reader(data))
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
