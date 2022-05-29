/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.asset.v1beta1";

export interface ExtendedPairLiquidity {
  /** No need of this variable here though */
  pairId: Long;
  currentBatchId: Long;
  escrowAddress: string;
  lastOrderId: Long;
  lastPrice: string;
  quoteCoinDenom: string;
}

function createBaseExtendedPairLiquidity(): ExtendedPairLiquidity {
  return {
    pairId: Long.UZERO,
    currentBatchId: Long.UZERO,
    escrowAddress: "",
    lastOrderId: Long.UZERO,
    lastPrice: "",
    quoteCoinDenom: "",
  };
}

export const ExtendedPairLiquidity = {
  encode(
    message: ExtendedPairLiquidity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.pairId.isZero()) {
      writer.uint32(8).uint64(message.pairId);
    }
    if (!message.currentBatchId.isZero()) {
      writer.uint32(16).uint64(message.currentBatchId);
    }
    if (message.escrowAddress !== "") {
      writer.uint32(26).string(message.escrowAddress);
    }
    if (!message.lastOrderId.isZero()) {
      writer.uint32(32).uint64(message.lastOrderId);
    }
    if (message.lastPrice !== "") {
      writer.uint32(42).string(message.lastPrice);
    }
    if (message.quoteCoinDenom !== "") {
      writer.uint32(50).string(message.quoteCoinDenom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExtendedPairLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedPairLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.uint64() as Long;
          break;
        case 2:
          message.currentBatchId = reader.uint64() as Long;
          break;
        case 3:
          message.escrowAddress = reader.string();
          break;
        case 4:
          message.lastOrderId = reader.uint64() as Long;
          break;
        case 5:
          message.lastPrice = reader.string();
          break;
        case 6:
          message.quoteCoinDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExtendedPairLiquidity {
    return {
      pairId: isSet(object.pairId) ? Long.fromValue(object.pairId) : Long.UZERO,
      currentBatchId: isSet(object.currentBatchId)
        ? Long.fromValue(object.currentBatchId)
        : Long.UZERO,
      escrowAddress: isSet(object.escrowAddress)
        ? String(object.escrowAddress)
        : "",
      lastOrderId: isSet(object.lastOrderId)
        ? Long.fromValue(object.lastOrderId)
        : Long.UZERO,
      lastPrice: isSet(object.lastPrice) ? String(object.lastPrice) : "",
      quoteCoinDenom: isSet(object.quoteCoinDenom)
        ? String(object.quoteCoinDenom)
        : "",
    };
  },

  toJSON(message: ExtendedPairLiquidity): unknown {
    const obj: any = {};
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.currentBatchId !== undefined &&
      (obj.currentBatchId = (message.currentBatchId || Long.UZERO).toString());
    message.escrowAddress !== undefined &&
      (obj.escrowAddress = message.escrowAddress);
    message.lastOrderId !== undefined &&
      (obj.lastOrderId = (message.lastOrderId || Long.UZERO).toString());
    message.lastPrice !== undefined && (obj.lastPrice = message.lastPrice);
    message.quoteCoinDenom !== undefined &&
      (obj.quoteCoinDenom = message.quoteCoinDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExtendedPairLiquidity>, I>>(
    object: I
  ): ExtendedPairLiquidity {
    const message = createBaseExtendedPairLiquidity();
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.currentBatchId =
      object.currentBatchId !== undefined && object.currentBatchId !== null
        ? Long.fromValue(object.currentBatchId)
        : Long.UZERO;
    message.escrowAddress = object.escrowAddress ?? "";
    message.lastOrderId =
      object.lastOrderId !== undefined && object.lastOrderId !== null
        ? Long.fromValue(object.lastOrderId)
        : Long.UZERO;
    message.lastPrice = object.lastPrice ?? "";
    message.quoteCoinDenom = object.quoteCoinDenom ?? "";
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
