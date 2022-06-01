/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "comdex.locking.v1beta1";

export interface MsgLockTokens {
  owner: string;
  duration?: Duration;
  coin?: Coin;
}

export interface MsgLockTokensResponse {}

export interface MsgBeginUnlockingTokens {
  owner: string;
  lockId: Long;
  coin?: Coin;
}

export interface MsgBeginUnlockingTokensResponse {}

function createBaseMsgLockTokens(): MsgLockTokens {
  return { owner: "", duration: undefined, coin: undefined };
}

export const MsgLockTokens = {
  encode(
    message: MsgLockTokens,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLockTokens {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration)
        ? Duration.fromJSON(object.duration)
        : undefined,
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: MsgLockTokens): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined &&
      (obj.duration = message.duration
        ? Duration.toJSON(message.duration)
        : undefined);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLockTokens>, I>>(
    object: I
  ): MsgLockTokens {
    const message = createBaseMsgLockTokens();
    message.owner = object.owner ?? "";
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Duration.fromPartial(object.duration)
        : undefined;
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    return message;
  },
};

function createBaseMsgLockTokensResponse(): MsgLockTokensResponse {
  return {};
}

export const MsgLockTokensResponse = {
  encode(
    _: MsgLockTokensResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLockTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockTokensResponse();
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

  fromJSON(_: any): MsgLockTokensResponse {
    return {};
  },

  toJSON(_: MsgLockTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLockTokensResponse>, I>>(
    _: I
  ): MsgLockTokensResponse {
    const message = createBaseMsgLockTokensResponse();
    return message;
  },
};

function createBaseMsgBeginUnlockingTokens(): MsgBeginUnlockingTokens {
  return { owner: "", lockId: Long.UZERO, coin: undefined };
}

export const MsgBeginUnlockingTokens = {
  encode(
    message: MsgBeginUnlockingTokens,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgBeginUnlockingTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlockingTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.lockId = reader.uint64() as Long;
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBeginUnlockingTokens {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      lockId: isSet(object.lockId)
        ? Long.fromString(object.lockId)
        : Long.UZERO,
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: MsgBeginUnlockingTokens): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.lockId !== undefined &&
      (obj.lockId = (message.lockId || Long.UZERO).toString());
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBeginUnlockingTokens>, I>>(
    object: I
  ): MsgBeginUnlockingTokens {
    const message = createBaseMsgBeginUnlockingTokens();
    message.owner = object.owner ?? "";
    message.lockId =
      object.lockId !== undefined && object.lockId !== null
        ? Long.fromValue(object.lockId)
        : Long.UZERO;
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    return message;
  },
};

function createBaseMsgBeginUnlockingTokensResponse(): MsgBeginUnlockingTokensResponse {
  return {};
}

export const MsgBeginUnlockingTokensResponse = {
  encode(
    _: MsgBeginUnlockingTokensResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgBeginUnlockingTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlockingTokensResponse();
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

  fromJSON(_: any): MsgBeginUnlockingTokensResponse {
    return {};
  },

  toJSON(_: MsgBeginUnlockingTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBeginUnlockingTokensResponse>, I>>(
    _: I
  ): MsgBeginUnlockingTokensResponse {
    const message = createBaseMsgBeginUnlockingTokensResponse();
    return message;
  },
};

export interface Msg {
  LockTokens(request: MsgLockTokens): Promise<MsgLockTokensResponse>;
  BeginUnlockTokens(
    request: MsgBeginUnlockingTokens
  ): Promise<MsgBeginUnlockingTokensResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.LockTokens = this.LockTokens.bind(this);
    this.BeginUnlockTokens = this.BeginUnlockTokens.bind(this);
  }
  LockTokens(request: MsgLockTokens): Promise<MsgLockTokensResponse> {
    const data = MsgLockTokens.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locking.v1beta1.Msg",
      "LockTokens",
      data
    );
    return promise.then((data) =>
      MsgLockTokensResponse.decode(new _m0.Reader(data))
    );
  }

  BeginUnlockTokens(
    request: MsgBeginUnlockingTokens
  ): Promise<MsgBeginUnlockingTokensResponse> {
    const data = MsgBeginUnlockingTokens.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locking.v1beta1.Msg",
      "BeginUnlockTokens",
      data
    );
    return promise.then((data) =>
      MsgBeginUnlockingTokensResponse.decode(new _m0.Reader(data))
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
