/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "codec/cosmos/base/v1beta1/coin";
import { Pair } from "codec/comdex/asset/v1beta1/pair";
import { Timestamp } from "codec/google/protobuf/timestamp";

export const protobufPackage = "comdex.auction.v1beta1";

export interface CollateralAuction {
  id: Long;
  lockedVaultId: Long;
  auctionedCollateral?: Coin;
  discountQuantity?: Coin;
  bidder: string;
  bid?: Coin;
  minBid?: Coin;
  maxBid?: Coin;
  endTime?: Date;
  pair?: Pair;
}

function createBaseCollateralAuction(): CollateralAuction {
  return {
    id: Long.UZERO,
    lockedVaultId: Long.UZERO,
    auctionedCollateral: undefined,
    discountQuantity: undefined,
    bidder: "",
    bid: undefined,
    minBid: undefined,
    maxBid: undefined,
    endTime: undefined,
    pair: undefined,
  };
}

export const CollateralAuction = {
  encode(
    message: CollateralAuction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.lockedVaultId.isZero()) {
      writer.uint32(16).uint64(message.lockedVaultId);
    }
    if (message.auctionedCollateral !== undefined) {
      Coin.encode(
        message.auctionedCollateral,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.discountQuantity !== undefined) {
      Coin.encode(message.discountQuantity, writer.uint32(34).fork()).ldelim();
    }
    if (message.bidder !== "") {
      writer.uint32(42).string(message.bidder);
    }
    if (message.bid !== undefined) {
      Coin.encode(message.bid, writer.uint32(50).fork()).ldelim();
    }
    if (message.minBid !== undefined) {
      Coin.encode(message.minBid, writer.uint32(58).fork()).ldelim();
    }
    if (message.maxBid !== undefined) {
      Coin.encode(message.maxBid, writer.uint32(66).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.pair !== undefined) {
      Pair.encode(message.pair, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CollateralAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollateralAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.lockedVaultId = reader.uint64() as Long;
          break;
        case 3:
          message.auctionedCollateral = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.discountQuantity = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.bidder = reader.string();
          break;
        case 6:
          message.bid = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.minBid = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.maxBid = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.pair = Pair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollateralAuction {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      lockedVaultId: isSet(object.lockedVaultId)
        ? Long.fromString(object.lockedVaultId)
        : Long.UZERO,
      auctionedCollateral: isSet(object.auctionedCollateral)
        ? Coin.fromJSON(object.auctionedCollateral)
        : undefined,
      discountQuantity: isSet(object.discountQuantity)
        ? Coin.fromJSON(object.discountQuantity)
        : undefined,
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      bid: isSet(object.bid) ? Coin.fromJSON(object.bid) : undefined,
      minBid: isSet(object.minBid) ? Coin.fromJSON(object.minBid) : undefined,
      maxBid: isSet(object.maxBid) ? Coin.fromJSON(object.maxBid) : undefined,
      endTime: isSet(object.endTime)
        ? fromJsonTimestamp(object.endTime)
        : undefined,
      pair: isSet(object.pair) ? Pair.fromJSON(object.pair) : undefined,
    };
  },

  toJSON(message: CollateralAuction): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.lockedVaultId !== undefined &&
      (obj.lockedVaultId = (message.lockedVaultId || Long.UZERO).toString());
    message.auctionedCollateral !== undefined &&
      (obj.auctionedCollateral = message.auctionedCollateral
        ? Coin.toJSON(message.auctionedCollateral)
        : undefined);
    message.discountQuantity !== undefined &&
      (obj.discountQuantity = message.discountQuantity
        ? Coin.toJSON(message.discountQuantity)
        : undefined);
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.bid !== undefined &&
      (obj.bid = message.bid ? Coin.toJSON(message.bid) : undefined);
    message.minBid !== undefined &&
      (obj.minBid = message.minBid ? Coin.toJSON(message.minBid) : undefined);
    message.maxBid !== undefined &&
      (obj.maxBid = message.maxBid ? Coin.toJSON(message.maxBid) : undefined);
    message.endTime !== undefined &&
      (obj.endTime = message.endTime.toISOString());
    message.pair !== undefined &&
      (obj.pair = message.pair ? Pair.toJSON(message.pair) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CollateralAuction>, I>>(
    object: I
  ): CollateralAuction {
    const message = createBaseCollateralAuction();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.lockedVaultId =
      object.lockedVaultId !== undefined && object.lockedVaultId !== null
        ? Long.fromValue(object.lockedVaultId)
        : Long.UZERO;
    message.auctionedCollateral =
      object.auctionedCollateral !== undefined &&
      object.auctionedCollateral !== null
        ? Coin.fromPartial(object.auctionedCollateral)
        : undefined;
    message.discountQuantity =
      object.discountQuantity !== undefined && object.discountQuantity !== null
        ? Coin.fromPartial(object.discountQuantity)
        : undefined;
    message.bidder = object.bidder ?? "";
    message.bid =
      object.bid !== undefined && object.bid !== null
        ? Coin.fromPartial(object.bid)
        : undefined;
    message.minBid =
      object.minBid !== undefined && object.minBid !== null
        ? Coin.fromPartial(object.minBid)
        : undefined;
    message.maxBid =
      object.maxBid !== undefined && object.maxBid !== null
        ? Coin.fromPartial(object.maxBid)
        : undefined;
    message.endTime = object.endTime ?? undefined;
    message.pair =
      object.pair !== undefined && object.pair !== null
        ? Pair.fromPartial(object.pair)
        : undefined;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
