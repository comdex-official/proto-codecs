/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.liquidation.v1beta1";

export interface MsgLiquidateVaultRequest {
  from: string;
  appId: Long;
  vaultId: Long;
}

export interface MsgLiquidateVaultResponse {
}

export interface MsgLiquidateBorrowRequest {
  from: string;
  borrowId: Long;
}

export interface MsgLiquidateBorrowResponse {
}

function createBaseMsgLiquidateVaultRequest(): MsgLiquidateVaultRequest {
  return { from: "", appId: Long.UZERO, vaultId: Long.UZERO };
}

export const MsgLiquidateVaultRequest = {
  encode(message: MsgLiquidateVaultRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (!message.vaultId.isZero()) {
      writer.uint32(24).uint64(message.vaultId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateVaultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidateVaultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.appId = reader.uint64() as Long;
          break;
        case 3:
          message.vaultId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidateVaultRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      vaultId: isSet(object.vaultId) ? Long.fromValue(object.vaultId) : Long.UZERO,
    };
  },

  toJSON(message: MsgLiquidateVaultRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    message.vaultId !== undefined && (obj.vaultId = (message.vaultId || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgLiquidateVaultRequest>, I>>(base?: I): MsgLiquidateVaultRequest {
    return MsgLiquidateVaultRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgLiquidateVaultRequest>, I>>(object: I): MsgLiquidateVaultRequest {
    const message = createBaseMsgLiquidateVaultRequest();
    message.from = object.from ?? "";
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.vaultId = (object.vaultId !== undefined && object.vaultId !== null)
      ? Long.fromValue(object.vaultId)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgLiquidateVaultResponse(): MsgLiquidateVaultResponse {
  return {};
}

export const MsgLiquidateVaultResponse = {
  encode(_: MsgLiquidateVaultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidateVaultResponse();
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

  fromJSON(_: any): MsgLiquidateVaultResponse {
    return {};
  },

  toJSON(_: MsgLiquidateVaultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgLiquidateVaultResponse>, I>>(base?: I): MsgLiquidateVaultResponse {
    return MsgLiquidateVaultResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgLiquidateVaultResponse>, I>>(_: I): MsgLiquidateVaultResponse {
    const message = createBaseMsgLiquidateVaultResponse();
    return message;
  },
};

function createBaseMsgLiquidateBorrowRequest(): MsgLiquidateBorrowRequest {
  return { from: "", borrowId: Long.UZERO };
}

export const MsgLiquidateBorrowRequest = {
  encode(message: MsgLiquidateBorrowRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.borrowId.isZero()) {
      writer.uint32(16).uint64(message.borrowId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateBorrowRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidateBorrowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.borrowId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidateBorrowRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      borrowId: isSet(object.borrowId) ? Long.fromValue(object.borrowId) : Long.UZERO,
    };
  },

  toJSON(message: MsgLiquidateBorrowRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.borrowId !== undefined && (obj.borrowId = (message.borrowId || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgLiquidateBorrowRequest>, I>>(base?: I): MsgLiquidateBorrowRequest {
    return MsgLiquidateBorrowRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgLiquidateBorrowRequest>, I>>(object: I): MsgLiquidateBorrowRequest {
    const message = createBaseMsgLiquidateBorrowRequest();
    message.from = object.from ?? "";
    message.borrowId = (object.borrowId !== undefined && object.borrowId !== null)
      ? Long.fromValue(object.borrowId)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgLiquidateBorrowResponse(): MsgLiquidateBorrowResponse {
  return {};
}

export const MsgLiquidateBorrowResponse = {
  encode(_: MsgLiquidateBorrowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateBorrowResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidateBorrowResponse();
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

  fromJSON(_: any): MsgLiquidateBorrowResponse {
    return {};
  },

  toJSON(_: MsgLiquidateBorrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgLiquidateBorrowResponse>, I>>(base?: I): MsgLiquidateBorrowResponse {
    return MsgLiquidateBorrowResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgLiquidateBorrowResponse>, I>>(_: I): MsgLiquidateBorrowResponse {
    const message = createBaseMsgLiquidateBorrowResponse();
    return message;
  },
};

export interface Msg {
  MsgLiquidateVault(request: MsgLiquidateVaultRequest): Promise<MsgLiquidateVaultResponse>;
  MsgLiquidateBorrow(request: MsgLiquidateBorrowRequest): Promise<MsgLiquidateBorrowResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "comdex.liquidation.v1beta1.Msg";
    this.rpc = rpc;
    this.MsgLiquidateVault = this.MsgLiquidateVault.bind(this);
    this.MsgLiquidateBorrow = this.MsgLiquidateBorrow.bind(this);
  }
  MsgLiquidateVault(request: MsgLiquidateVaultRequest): Promise<MsgLiquidateVaultResponse> {
    const data = MsgLiquidateVaultRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgLiquidateVault", data);
    return promise.then((data) => MsgLiquidateVaultResponse.decode(new _m0.Reader(data)));
  }

  MsgLiquidateBorrow(request: MsgLiquidateBorrowRequest): Promise<MsgLiquidateBorrowResponse> {
    const data = MsgLiquidateBorrowRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgLiquidateBorrow", data);
    return promise.then((data) => MsgLiquidateBorrowResponse.decode(new _m0.Reader(data)));
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
