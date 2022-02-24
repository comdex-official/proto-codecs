/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.auction.v1beta1";

export interface Params {
  liquidationPaneltyPercent: Long;
  auctionDiscountPercent: Long;
  auctionDurationHours: Long;
}

function createBaseParams(): Params {
  return {
    liquidationPaneltyPercent: Long.UZERO,
    auctionDiscountPercent: Long.UZERO,
    auctionDurationHours: Long.UZERO,
  };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.liquidationPaneltyPercent.isZero()) {
      writer.uint32(8).uint64(message.liquidationPaneltyPercent);
    }
    if (!message.auctionDiscountPercent.isZero()) {
      writer.uint32(16).uint64(message.auctionDiscountPercent);
    }
    if (!message.auctionDurationHours.isZero()) {
      writer.uint32(24).uint64(message.auctionDurationHours);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidationPaneltyPercent = reader.uint64() as Long;
          break;
        case 2:
          message.auctionDiscountPercent = reader.uint64() as Long;
          break;
        case 3:
          message.auctionDurationHours = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      liquidationPaneltyPercent: isSet(object.liquidationPaneltyPercent)
        ? Long.fromString(object.liquidationPaneltyPercent)
        : Long.UZERO,
      auctionDiscountPercent: isSet(object.auctionDiscountPercent)
        ? Long.fromString(object.auctionDiscountPercent)
        : Long.UZERO,
      auctionDurationHours: isSet(object.auctionDurationHours)
        ? Long.fromString(object.auctionDurationHours)
        : Long.UZERO,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.liquidationPaneltyPercent !== undefined &&
      (obj.liquidationPaneltyPercent = (
        message.liquidationPaneltyPercent || Long.UZERO
      ).toString());
    message.auctionDiscountPercent !== undefined &&
      (obj.auctionDiscountPercent = (
        message.auctionDiscountPercent || Long.UZERO
      ).toString());
    message.auctionDurationHours !== undefined &&
      (obj.auctionDurationHours = (
        message.auctionDurationHours || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.liquidationPaneltyPercent =
      object.liquidationPaneltyPercent !== undefined &&
      object.liquidationPaneltyPercent !== null
        ? Long.fromValue(object.liquidationPaneltyPercent)
        : Long.UZERO;
    message.auctionDiscountPercent =
      object.auctionDiscountPercent !== undefined &&
      object.auctionDiscountPercent !== null
        ? Long.fromValue(object.auctionDiscountPercent)
        : Long.UZERO;
    message.auctionDurationHours =
      object.auctionDurationHours !== undefined &&
      object.auctionDurationHours !== null
        ? Long.fromValue(object.auctionDurationHours)
        : Long.UZERO;
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
