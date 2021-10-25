/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.vault.v1beta1";

export interface Vault {
  id: Long;
  pairId: Long;
  owner: string;
  amountIn: string;
  amountOut: string;
}

const baseVault: object = {
  id: Long.UZERO,
  pairId: Long.UZERO,
  owner: "",
  amountIn: "",
  amountOut: "",
};

export const Vault = {
  encode(message: Vault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.amountIn !== "") {
      writer.uint32(34).string(message.amountIn);
    }
    if (message.amountOut !== "") {
      writer.uint32(42).string(message.amountOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVault } as Vault;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.pairId = reader.uint64() as Long;
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.amountIn = reader.string();
          break;
        case 5:
          message.amountOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vault {
    const message = { ...baseVault } as Vault;
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    } else {
      message.id = Long.UZERO;
    }
    if (object.pairId !== undefined && object.pairId !== null) {
      message.pairId = Long.fromString(object.pairId);
    } else {
      message.pairId = Long.UZERO;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.amountIn !== undefined && object.amountIn !== null) {
      message.amountIn = String(object.amountIn);
    } else {
      message.amountIn = "";
    }
    if (object.amountOut !== undefined && object.amountOut !== null) {
      message.amountOut = String(object.amountOut);
    } else {
      message.amountOut = "";
    }
    return message;
  },

  toJSON(message: Vault): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut);
    return obj;
  },

  fromPartial(object: DeepPartial<Vault>): Vault {
    const message = { ...baseVault } as Vault;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long;
    } else {
      message.id = Long.UZERO;
    }
    if (object.pairId !== undefined && object.pairId !== null) {
      message.pairId = object.pairId as Long;
    } else {
      message.pairId = Long.UZERO;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.amountIn !== undefined && object.amountIn !== null) {
      message.amountIn = object.amountIn;
    } else {
      message.amountIn = "";
    }
    if (object.amountOut !== undefined && object.amountOut !== null) {
      message.amountOut = object.amountOut;
    } else {
      message.amountOut = "";
    }
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
