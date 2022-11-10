/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.market.v1beta1";

export interface TimeWeightedAverage {
  assetId: Long;
  scriptId: Long;
  twa: Long;
  currentIndex: Long;
  isPriceActive: boolean;
  priceValue: Long[];
  discardedHeightDiff: Long;
}

function createBaseTimeWeightedAverage(): TimeWeightedAverage {
  return {
    assetId: Long.UZERO,
    scriptId: Long.UZERO,
    twa: Long.UZERO,
    currentIndex: Long.UZERO,
    isPriceActive: false,
    priceValue: [],
    discardedHeightDiff: Long.ZERO,
  };
}

export const TimeWeightedAverage = {
  encode(
    message: TimeWeightedAverage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.assetId.isZero()) {
      writer.uint32(8).uint64(message.assetId);
    }
    if (!message.scriptId.isZero()) {
      writer.uint32(16).uint64(message.scriptId);
    }
    if (!message.twa.isZero()) {
      writer.uint32(24).uint64(message.twa);
    }
    if (!message.currentIndex.isZero()) {
      writer.uint32(32).uint64(message.currentIndex);
    }
    if (message.isPriceActive === true) {
      writer.uint32(40).bool(message.isPriceActive);
    }
    writer.uint32(50).fork();
    for (const v of message.priceValue) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (!message.discardedHeightDiff.isZero()) {
      writer.uint32(56).int64(message.discardedHeightDiff);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimeWeightedAverage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeWeightedAverage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.uint64() as Long;
          break;
        case 2:
          message.scriptId = reader.uint64() as Long;
          break;
        case 3:
          message.twa = reader.uint64() as Long;
          break;
        case 4:
          message.currentIndex = reader.uint64() as Long;
          break;
        case 5:
          message.isPriceActive = reader.bool();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.priceValue.push(reader.uint64() as Long);
            }
          } else {
            message.priceValue.push(reader.uint64() as Long);
          }
          break;
        case 7:
          message.discardedHeightDiff = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimeWeightedAverage {
    return {
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      scriptId: isSet(object.scriptId)
        ? Long.fromValue(object.scriptId)
        : Long.UZERO,
      twa: isSet(object.twa) ? Long.fromValue(object.twa) : Long.UZERO,
      currentIndex: isSet(object.currentIndex)
        ? Long.fromValue(object.currentIndex)
        : Long.UZERO,
      isPriceActive: isSet(object.isPriceActive)
        ? Boolean(object.isPriceActive)
        : false,
      priceValue: Array.isArray(object?.priceValue)
        ? object.priceValue.map((e: any) => Long.fromValue(e))
        : [],
      discardedHeightDiff: isSet(object.discardedHeightDiff)
        ? Long.fromValue(object.discardedHeightDiff)
        : Long.ZERO,
    };
  },

  toJSON(message: TimeWeightedAverage): unknown {
    const obj: any = {};
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.scriptId !== undefined &&
      (obj.scriptId = (message.scriptId || Long.UZERO).toString());
    message.twa !== undefined &&
      (obj.twa = (message.twa || Long.UZERO).toString());
    message.currentIndex !== undefined &&
      (obj.currentIndex = (message.currentIndex || Long.UZERO).toString());
    message.isPriceActive !== undefined &&
      (obj.isPriceActive = message.isPriceActive);
    if (message.priceValue) {
      obj.priceValue = message.priceValue.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.priceValue = [];
    }
    message.discardedHeightDiff !== undefined &&
      (obj.discardedHeightDiff = (
        message.discardedHeightDiff || Long.ZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TimeWeightedAverage>, I>>(
    object: I
  ): TimeWeightedAverage {
    const message = createBaseTimeWeightedAverage();
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.scriptId =
      object.scriptId !== undefined && object.scriptId !== null
        ? Long.fromValue(object.scriptId)
        : Long.UZERO;
    message.twa =
      object.twa !== undefined && object.twa !== null
        ? Long.fromValue(object.twa)
        : Long.UZERO;
    message.currentIndex =
      object.currentIndex !== undefined && object.currentIndex !== null
        ? Long.fromValue(object.currentIndex)
        : Long.UZERO;
    message.isPriceActive = object.isPriceActive ?? false;
    message.priceValue = object.priceValue?.map((e) => Long.fromValue(e)) || [];
    message.discardedHeightDiff =
      object.discardedHeightDiff !== undefined &&
      object.discardedHeightDiff !== null
        ? Long.fromValue(object.discardedHeightDiff)
        : Long.ZERO;
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
