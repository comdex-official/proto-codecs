/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.auction.v1beta1";

export interface SurplusBiddings {
  biddingId: Long;
  auctionId: Long;
  auctionStatus: string;
  auctionedCollateral?: Coin;
  bidder: string;
  bid?: Coin;
  biddingTimestamp?: Date;
  biddingStatus: string;
  auctionMappingId: Long;
  appId: Long;
}

export interface DebtBiddings {
  biddingId: Long;
  auctionId: Long;
  auctionStatus: string;
  outflowTokens?: Coin;
  bidder: string;
  bid?: Coin;
  biddingTimestamp?: Date;
  biddingStatus: string;
  auctionMappingId: Long;
  appId: Long;
}

export interface DutchBiddings {
  biddingId: Long;
  auctionId: Long;
  auctionStatus: string;
  outflowTokenAmount?: Coin;
  inflowTokenAmount?: Coin;
  bidder: string;
  biddingTimestamp?: Date;
  biddingStatus: string;
  auctionMappingId: Long;
  appId: Long;
}

function createBaseSurplusBiddings(): SurplusBiddings {
  return {
    biddingId: Long.UZERO,
    auctionId: Long.UZERO,
    auctionStatus: "",
    auctionedCollateral: undefined,
    bidder: "",
    bid: undefined,
    biddingTimestamp: undefined,
    biddingStatus: "",
    auctionMappingId: Long.UZERO,
    appId: Long.UZERO,
  };
}

export const SurplusBiddings = {
  encode(
    message: SurplusBiddings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.biddingId.isZero()) {
      writer.uint32(8).uint64(message.biddingId);
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
    if (!message.auctionMappingId.isZero()) {
      writer.uint32(72).uint64(message.auctionMappingId);
    }
    if (!message.appId.isZero()) {
      writer.uint32(80).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SurplusBiddings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSurplusBiddings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.biddingId = reader.uint64() as Long;
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
        case 9:
          message.auctionMappingId = reader.uint64() as Long;
          break;
        case 10:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SurplusBiddings {
    return {
      biddingId: isSet(object.biddingId)
        ? Long.fromValue(object.biddingId)
        : Long.UZERO,
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
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
      auctionMappingId: isSet(object.auctionMappingId)
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: SurplusBiddings): unknown {
    const obj: any = {};
    message.biddingId !== undefined &&
      (obj.biddingId = (message.biddingId || Long.UZERO).toString());
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
    message.auctionMappingId !== undefined &&
      (obj.auctionMappingId = (
        message.auctionMappingId || Long.UZERO
      ).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SurplusBiddings>, I>>(
    object: I
  ): SurplusBiddings {
    const message = createBaseSurplusBiddings();
    message.biddingId =
      object.biddingId !== undefined && object.biddingId !== null
        ? Long.fromValue(object.biddingId)
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
    message.auctionMappingId =
      object.auctionMappingId !== undefined && object.auctionMappingId !== null
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseDebtBiddings(): DebtBiddings {
  return {
    biddingId: Long.UZERO,
    auctionId: Long.UZERO,
    auctionStatus: "",
    outflowTokens: undefined,
    bidder: "",
    bid: undefined,
    biddingTimestamp: undefined,
    biddingStatus: "",
    auctionMappingId: Long.UZERO,
    appId: Long.UZERO,
  };
}

export const DebtBiddings = {
  encode(
    message: DebtBiddings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.biddingId.isZero()) {
      writer.uint32(8).uint64(message.biddingId);
    }
    if (!message.auctionId.isZero()) {
      writer.uint32(16).uint64(message.auctionId);
    }
    if (message.auctionStatus !== "") {
      writer.uint32(26).string(message.auctionStatus);
    }
    if (message.outflowTokens !== undefined) {
      Coin.encode(message.outflowTokens, writer.uint32(34).fork()).ldelim();
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
    if (!message.auctionMappingId.isZero()) {
      writer.uint32(72).uint64(message.auctionMappingId);
    }
    if (!message.appId.isZero()) {
      writer.uint32(80).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebtBiddings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebtBiddings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.biddingId = reader.uint64() as Long;
          break;
        case 2:
          message.auctionId = reader.uint64() as Long;
          break;
        case 3:
          message.auctionStatus = reader.string();
          break;
        case 4:
          message.outflowTokens = Coin.decode(reader, reader.uint32());
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
        case 9:
          message.auctionMappingId = reader.uint64() as Long;
          break;
        case 10:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DebtBiddings {
    return {
      biddingId: isSet(object.biddingId)
        ? Long.fromValue(object.biddingId)
        : Long.UZERO,
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
      auctionStatus: isSet(object.auctionStatus)
        ? String(object.auctionStatus)
        : "",
      outflowTokens: isSet(object.outflowTokens)
        ? Coin.fromJSON(object.outflowTokens)
        : undefined,
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      bid: isSet(object.bid) ? Coin.fromJSON(object.bid) : undefined,
      biddingTimestamp: isSet(object.biddingTimestamp)
        ? fromJsonTimestamp(object.biddingTimestamp)
        : undefined,
      biddingStatus: isSet(object.biddingStatus)
        ? String(object.biddingStatus)
        : "",
      auctionMappingId: isSet(object.auctionMappingId)
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: DebtBiddings): unknown {
    const obj: any = {};
    message.biddingId !== undefined &&
      (obj.biddingId = (message.biddingId || Long.UZERO).toString());
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.auctionStatus !== undefined &&
      (obj.auctionStatus = message.auctionStatus);
    message.outflowTokens !== undefined &&
      (obj.outflowTokens = message.outflowTokens
        ? Coin.toJSON(message.outflowTokens)
        : undefined);
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.bid !== undefined &&
      (obj.bid = message.bid ? Coin.toJSON(message.bid) : undefined);
    message.biddingTimestamp !== undefined &&
      (obj.biddingTimestamp = message.biddingTimestamp.toISOString());
    message.biddingStatus !== undefined &&
      (obj.biddingStatus = message.biddingStatus);
    message.auctionMappingId !== undefined &&
      (obj.auctionMappingId = (
        message.auctionMappingId || Long.UZERO
      ).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DebtBiddings>, I>>(
    object: I
  ): DebtBiddings {
    const message = createBaseDebtBiddings();
    message.biddingId =
      object.biddingId !== undefined && object.biddingId !== null
        ? Long.fromValue(object.biddingId)
        : Long.UZERO;
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.auctionStatus = object.auctionStatus ?? "";
    message.outflowTokens =
      object.outflowTokens !== undefined && object.outflowTokens !== null
        ? Coin.fromPartial(object.outflowTokens)
        : undefined;
    message.bidder = object.bidder ?? "";
    message.bid =
      object.bid !== undefined && object.bid !== null
        ? Coin.fromPartial(object.bid)
        : undefined;
    message.biddingTimestamp = object.biddingTimestamp ?? undefined;
    message.biddingStatus = object.biddingStatus ?? "";
    message.auctionMappingId =
      object.auctionMappingId !== undefined && object.auctionMappingId !== null
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseDutchBiddings(): DutchBiddings {
  return {
    biddingId: Long.UZERO,
    auctionId: Long.UZERO,
    auctionStatus: "",
    outflowTokenAmount: undefined,
    inflowTokenAmount: undefined,
    bidder: "",
    biddingTimestamp: undefined,
    biddingStatus: "",
    auctionMappingId: Long.UZERO,
    appId: Long.UZERO,
  };
}

export const DutchBiddings = {
  encode(
    message: DutchBiddings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.biddingId.isZero()) {
      writer.uint32(8).uint64(message.biddingId);
    }
    if (!message.auctionId.isZero()) {
      writer.uint32(16).uint64(message.auctionId);
    }
    if (message.auctionStatus !== "") {
      writer.uint32(26).string(message.auctionStatus);
    }
    if (message.outflowTokenAmount !== undefined) {
      Coin.encode(
        message.outflowTokenAmount,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.inflowTokenAmount !== undefined) {
      Coin.encode(message.inflowTokenAmount, writer.uint32(42).fork()).ldelim();
    }
    if (message.bidder !== "") {
      writer.uint32(50).string(message.bidder);
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
    if (!message.auctionMappingId.isZero()) {
      writer.uint32(72).uint64(message.auctionMappingId);
    }
    if (!message.appId.isZero()) {
      writer.uint32(80).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DutchBiddings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDutchBiddings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.biddingId = reader.uint64() as Long;
          break;
        case 2:
          message.auctionId = reader.uint64() as Long;
          break;
        case 3:
          message.auctionStatus = reader.string();
          break;
        case 4:
          message.outflowTokenAmount = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.inflowTokenAmount = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.bidder = reader.string();
          break;
        case 7:
          message.biddingTimestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.biddingStatus = reader.string();
          break;
        case 9:
          message.auctionMappingId = reader.uint64() as Long;
          break;
        case 10:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DutchBiddings {
    return {
      biddingId: isSet(object.biddingId)
        ? Long.fromValue(object.biddingId)
        : Long.UZERO,
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
      auctionStatus: isSet(object.auctionStatus)
        ? String(object.auctionStatus)
        : "",
      outflowTokenAmount: isSet(object.outflowTokenAmount)
        ? Coin.fromJSON(object.outflowTokenAmount)
        : undefined,
      inflowTokenAmount: isSet(object.inflowTokenAmount)
        ? Coin.fromJSON(object.inflowTokenAmount)
        : undefined,
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      biddingTimestamp: isSet(object.biddingTimestamp)
        ? fromJsonTimestamp(object.biddingTimestamp)
        : undefined,
      biddingStatus: isSet(object.biddingStatus)
        ? String(object.biddingStatus)
        : "",
      auctionMappingId: isSet(object.auctionMappingId)
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: DutchBiddings): unknown {
    const obj: any = {};
    message.biddingId !== undefined &&
      (obj.biddingId = (message.biddingId || Long.UZERO).toString());
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.auctionStatus !== undefined &&
      (obj.auctionStatus = message.auctionStatus);
    message.outflowTokenAmount !== undefined &&
      (obj.outflowTokenAmount = message.outflowTokenAmount
        ? Coin.toJSON(message.outflowTokenAmount)
        : undefined);
    message.inflowTokenAmount !== undefined &&
      (obj.inflowTokenAmount = message.inflowTokenAmount
        ? Coin.toJSON(message.inflowTokenAmount)
        : undefined);
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.biddingTimestamp !== undefined &&
      (obj.biddingTimestamp = message.biddingTimestamp.toISOString());
    message.biddingStatus !== undefined &&
      (obj.biddingStatus = message.biddingStatus);
    message.auctionMappingId !== undefined &&
      (obj.auctionMappingId = (
        message.auctionMappingId || Long.UZERO
      ).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DutchBiddings>, I>>(
    object: I
  ): DutchBiddings {
    const message = createBaseDutchBiddings();
    message.biddingId =
      object.biddingId !== undefined && object.biddingId !== null
        ? Long.fromValue(object.biddingId)
        : Long.UZERO;
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.auctionStatus = object.auctionStatus ?? "";
    message.outflowTokenAmount =
      object.outflowTokenAmount !== undefined &&
      object.outflowTokenAmount !== null
        ? Coin.fromPartial(object.outflowTokenAmount)
        : undefined;
    message.inflowTokenAmount =
      object.inflowTokenAmount !== undefined &&
      object.inflowTokenAmount !== null
        ? Coin.fromPartial(object.inflowTokenAmount)
        : undefined;
    message.bidder = object.bidder ?? "";
    message.biddingTimestamp = object.biddingTimestamp ?? undefined;
    message.biddingStatus = object.biddingStatus ?? "";
    message.auctionMappingId =
      object.auctionMappingId !== undefined && object.auctionMappingId !== null
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
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
