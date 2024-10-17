/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.liquidation.v1beta1";

export interface LiquidationOffsetHolder {
  appId: Long;
  currentOffset: Long;
}

function createBaseLiquidationOffsetHolder(): LiquidationOffsetHolder {
  return { appId: Long.UZERO, currentOffset: Long.UZERO };
}

export const LiquidationOffsetHolder = {
  encode(message: LiquidationOffsetHolder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.currentOffset.isZero()) {
      writer.uint32(16).uint64(message.currentOffset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidationOffsetHolder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidationOffsetHolder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.currentOffset = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidationOffsetHolder {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      currentOffset: isSet(object.currentOffset) ? Long.fromValue(object.currentOffset) : Long.UZERO,
    };
  },

  toJSON(message: LiquidationOffsetHolder): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    message.currentOffset !== undefined && (obj.currentOffset = (message.currentOffset || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<LiquidationOffsetHolder>, I>>(base?: I): LiquidationOffsetHolder {
    return LiquidationOffsetHolder.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LiquidationOffsetHolder>, I>>(object: I): LiquidationOffsetHolder {
    const message = createBaseLiquidationOffsetHolder();
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.currentOffset = (object.currentOffset !== undefined && object.currentOffset !== null)
      ? Long.fromValue(object.currentOffset)
      : Long.UZERO;
    return message;
  },
};

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
