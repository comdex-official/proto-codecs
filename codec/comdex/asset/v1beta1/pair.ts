/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.asset.v1beta1";

export interface Pair {
  id: Long;
  assetIn: Long;
  assetOut: Long;
  liquidationRatio: string;
}

const basePair: object = {
  id: Long.UZERO,
  assetIn: Long.UZERO,
  assetOut: Long.UZERO,
  liquidationRatio: "",
};

export const Pair = {
  encode(message: Pair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.assetIn.isZero()) {
      writer.uint32(16).uint64(message.assetIn);
    }
    if (!message.assetOut.isZero()) {
      writer.uint32(24).uint64(message.assetOut);
    }
    if (message.liquidationRatio !== "") {
      writer.uint32(34).string(message.liquidationRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePair } as Pair;
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
          message.assetOut = reader.uint64() as Long;
          break;
        case 4:
          message.liquidationRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pair {
    const message = { ...basePair } as Pair;
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    } else {
      message.id = Long.UZERO;
    }
    if (object.assetIn !== undefined && object.assetIn !== null) {
      message.assetIn = Long.fromString(object.assetIn);
    } else {
      message.assetIn = Long.UZERO;
    }
    if (object.assetOut !== undefined && object.assetOut !== null) {
      message.assetOut = Long.fromString(object.assetOut);
    } else {
      message.assetOut = Long.UZERO;
    }
    if (
      object.liquidationRatio !== undefined &&
      object.liquidationRatio !== null
    ) {
      message.liquidationRatio = String(object.liquidationRatio);
    } else {
      message.liquidationRatio = "";
    }
    return message;
  },

  toJSON(message: Pair): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.assetIn !== undefined &&
      (obj.assetIn = (message.assetIn || Long.UZERO).toString());
    message.assetOut !== undefined &&
      (obj.assetOut = (message.assetOut || Long.UZERO).toString());
    message.liquidationRatio !== undefined &&
      (obj.liquidationRatio = message.liquidationRatio);
    return obj;
  },

  fromPartial(object: DeepPartial<Pair>): Pair {
    const message = { ...basePair } as Pair;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long;
    } else {
      message.id = Long.UZERO;
    }
    if (object.assetIn !== undefined && object.assetIn !== null) {
      message.assetIn = object.assetIn as Long;
    } else {
      message.assetIn = Long.UZERO;
    }
    if (object.assetOut !== undefined && object.assetOut !== null) {
      message.assetOut = object.assetOut as Long;
    } else {
      message.assetOut = Long.UZERO;
    }
    if (
      object.liquidationRatio !== undefined &&
      object.liquidationRatio !== null
    ) {
      message.liquidationRatio = object.liquidationRatio;
    } else {
      message.liquidationRatio = "";
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
