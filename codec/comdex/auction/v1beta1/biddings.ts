/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.auction.v1beta1";

export interface Biddings {
  id: Long;
  auctionId: Long;
  auctionStatus: string;
  auctionedCollateral?: Coin;
  bidder: string;
  bid?: Coin;
  biddingTimestamp?: Date;
  biddingStatus: string;
}

export interface UserBiddings {
  id: Long;
  bidder: string;
  biddingIds: Long[];
}

function createBaseBiddings(): Biddings {
  return {
    id: Long.UZERO,
    auctionId: Long.UZERO,
    auctionStatus: "",
    auctionedCollateral: undefined,
    bidder: "",
    bid: undefined,
    biddingTimestamp: undefined,
    biddingStatus: "",
  };
}

export const Biddings = {
  encode(
    message: Biddings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.auctionId.isZero()) {
      writer.uint32(16).uint64(message.auctionId);
    }
    if (message.auctionStatus !== "") {
      writer.uint32(26).string(message.auctionStatus);
    }
    if (message.auctionedCollateral !== undefined) {
      Coin.encode(
        message.auctionedCollateral,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.bidder !== "") {
      writer.uint32(42).string(message.bidder);
    }
    if (message.bid !== undefined) {
      Coin.encode(message.bid, writer.uint32(50).fork()).ldelim();
    }
    if (message.biddingTimestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.biddingTimestamp),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.biddingStatus !== "") {
      writer.uint32(66).string(message.biddingStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Biddings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBiddings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.auctionId = reader.uint64() as Long;
          break;
        case 3:
          message.auctionStatus = reader.string();
          break;
        case 4:
          message.auctionedCollateral = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.bidder = reader.string();
          break;
        case 6:
          message.bid = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.biddingTimestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.biddingStatus = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Biddings {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      auctionId: isSet(object.auctionId)
        ? Long.fromString(object.auctionId)
        : Long.UZERO,
      auctionStatus: isSet(object.auctionStatus)
        ? String(object.auctionStatus)
        : "",
      auctionedCollateral: isSet(object.auctionedCollateral)
        ? Coin.fromJSON(object.auctionedCollateral)
        : undefined,
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      bid: isSet(object.bid) ? Coin.fromJSON(object.bid) : undefined,
      biddingTimestamp: isSet(object.biddingTimestamp)
        ? fromJsonTimestamp(object.biddingTimestamp)
        : undefined,
      biddingStatus: isSet(object.biddingStatus)
        ? String(object.biddingStatus)
        : "",
    };
  },

  toJSON(message: Biddings): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.auctionStatus !== undefined &&
      (obj.auctionStatus = message.auctionStatus);
    message.auctionedCollateral !== undefined &&
      (obj.auctionedCollateral = message.auctionedCollateral
        ? Coin.toJSON(message.auctionedCollateral)
        : undefined);
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.bid !== undefined &&
      (obj.bid = message.bid ? Coin.toJSON(message.bid) : undefined);
    message.biddingTimestamp !== undefined &&
      (obj.biddingTimestamp = message.biddingTimestamp.toISOString());
    message.biddingStatus !== undefined &&
      (obj.biddingStatus = message.biddingStatus);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Biddings>, I>>(object: I): Biddings {
    const message = createBaseBiddings();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.auctionStatus = object.auctionStatus ?? "";
    message.auctionedCollateral =
      object.auctionedCollateral !== undefined &&
      object.auctionedCollateral !== null
        ? Coin.fromPartial(object.auctionedCollateral)
        : undefined;
    message.bidder = object.bidder ?? "";
    message.bid =
      object.bid !== undefined && object.bid !== null
        ? Coin.fromPartial(object.bid)
        : undefined;
    message.biddingTimestamp = object.biddingTimestamp ?? undefined;
    message.biddingStatus = object.biddingStatus ?? "";
    return message;
  },
};

function createBaseUserBiddings(): UserBiddings {
  return { id: Long.UZERO, bidder: "", biddingIds: [] };
}

export const UserBiddings = {
  encode(
    message: UserBiddings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.bidder !== "") {
      writer.uint32(18).string(message.bidder);
    }
    writer.uint32(26).fork();
    for (const v of message.biddingIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserBiddings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserBiddings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.bidder = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.biddingIds.push(reader.uint64() as Long);
            }
          } else {
            message.biddingIds.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserBiddings {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      biddingIds: Array.isArray(object?.biddingIds)
        ? object.biddingIds.map((e: any) => Long.fromString(e))
        : [],
    };
  },

  toJSON(message: UserBiddings): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.bidder !== undefined && (obj.bidder = message.bidder);
    if (message.biddingIds) {
      obj.biddingIds = message.biddingIds.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.biddingIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserBiddings>, I>>(
    object: I
  ): UserBiddings {
    const message = createBaseUserBiddings();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.bidder = object.bidder ?? "";
    message.biddingIds = object.biddingIds?.map((e) => Long.fromValue(e)) || [];
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
