/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.auction.v1beta1";

export interface SurplusAuction {
  id: Long;
  outflowToken?: Coin;
  inflowToken?: Coin;
  activeBiddingId: Long;
  bidder: string;
  bid?: Coin;
  endTime?: Date;
  bidFactor: string;
  biddingIds: Long[];
  auctionStatus: Long;
  appId: Long;
  assetId: Long;
}

export interface DebtAuction {
  auctionId: Long;
  auctionedToken?: Coin;
  expectedUserToken?: Coin;
  expectedMintedToken?: Coin;
  endTime?: Date;
  activeBiddingId: Long;
  bidder: string;
  currentBidAmount?: Coin;
  auctionStatus: Long;
  appId: Long;
  assetId: Long;
}

export interface DutchAuction {
  auctionId: Long;
  outflowTokenInitAmount?: Coin;
  outflowTokenCurrentAmount?: Coin;
  inflowTokenTargetAmount?: Coin;
  inflowTokenCurrentAmount?: Coin;
  outflowTokenInitialPrice: string;
  outflowTokenCurrentPrice: string;
  outflowTokenEndPrice: string;
  inflowTokenCurrentPrice: string;
  endTime?: Date;
  auctionStatus: Long;
  inflowTokenAddress: string;
  outflowTokenAddress: string;
  startTime?: Date;
}

function createBaseSurplusAuction(): SurplusAuction {
  return {
    id: Long.UZERO,
    outflowToken: undefined,
    inflowToken: undefined,
    activeBiddingId: Long.UZERO,
    bidder: "",
    bid: undefined,
    endTime: undefined,
    bidFactor: "",
    biddingIds: [],
    auctionStatus: Long.UZERO,
    appId: Long.UZERO,
    assetId: Long.UZERO,
  };
}

export const SurplusAuction = {
  encode(
    message: SurplusAuction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.outflowToken !== undefined) {
      Coin.encode(message.outflowToken, writer.uint32(18).fork()).ldelim();
    }
    if (message.inflowToken !== undefined) {
      Coin.encode(message.inflowToken, writer.uint32(26).fork()).ldelim();
    }
    if (!message.activeBiddingId.isZero()) {
      writer.uint32(32).uint64(message.activeBiddingId);
    }
    if (message.bidder !== "") {
      writer.uint32(42).string(message.bidder);
    }
    if (message.bid !== undefined) {
      Coin.encode(message.bid, writer.uint32(50).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.bidFactor !== "") {
      writer.uint32(66).string(message.bidFactor);
    }
    writer.uint32(74).fork();
    for (const v of message.biddingIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (!message.auctionStatus.isZero()) {
      writer.uint32(80).uint64(message.auctionStatus);
    }
    if (!message.appId.isZero()) {
      writer.uint32(88).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(96).uint64(message.assetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SurplusAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSurplusAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.outflowToken = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.inflowToken = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.activeBiddingId = reader.uint64() as Long;
          break;
        case 5:
          message.bidder = reader.string();
          break;
        case 6:
          message.bid = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.bidFactor = reader.string();
          break;
        case 9:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.biddingIds.push(reader.uint64() as Long);
            }
          } else {
            message.biddingIds.push(reader.uint64() as Long);
          }
          break;
        case 10:
          message.auctionStatus = reader.uint64() as Long;
          break;
        case 11:
          message.appId = reader.uint64() as Long;
          break;
        case 12:
          message.assetId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SurplusAuction {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      outflowToken: isSet(object.outflowToken)
        ? Coin.fromJSON(object.outflowToken)
        : undefined,
      inflowToken: isSet(object.inflowToken)
        ? Coin.fromJSON(object.inflowToken)
        : undefined,
      activeBiddingId: isSet(object.activeBiddingId)
        ? Long.fromValue(object.activeBiddingId)
        : Long.UZERO,
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      bid: isSet(object.bid) ? Coin.fromJSON(object.bid) : undefined,
      endTime: isSet(object.endTime)
        ? fromJsonTimestamp(object.endTime)
        : undefined,
      bidFactor: isSet(object.bidFactor) ? String(object.bidFactor) : "",
      biddingIds: Array.isArray(object?.biddingIds)
        ? object.biddingIds.map((e: any) => Long.fromValue(e))
        : [],
      auctionStatus: isSet(object.auctionStatus)
        ? Long.fromValue(object.auctionStatus)
        : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
    };
  },

  toJSON(message: SurplusAuction): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.outflowToken !== undefined &&
      (obj.outflowToken = message.outflowToken
        ? Coin.toJSON(message.outflowToken)
        : undefined);
    message.inflowToken !== undefined &&
      (obj.inflowToken = message.inflowToken
        ? Coin.toJSON(message.inflowToken)
        : undefined);
    message.activeBiddingId !== undefined &&
      (obj.activeBiddingId = (
        message.activeBiddingId || Long.UZERO
      ).toString());
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.bid !== undefined &&
      (obj.bid = message.bid ? Coin.toJSON(message.bid) : undefined);
    message.endTime !== undefined &&
      (obj.endTime = message.endTime.toISOString());
    message.bidFactor !== undefined && (obj.bidFactor = message.bidFactor);
    if (message.biddingIds) {
      obj.biddingIds = message.biddingIds.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.biddingIds = [];
    }
    message.auctionStatus !== undefined &&
      (obj.auctionStatus = (message.auctionStatus || Long.UZERO).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SurplusAuction>, I>>(
    object: I
  ): SurplusAuction {
    const message = createBaseSurplusAuction();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.outflowToken =
      object.outflowToken !== undefined && object.outflowToken !== null
        ? Coin.fromPartial(object.outflowToken)
        : undefined;
    message.inflowToken =
      object.inflowToken !== undefined && object.inflowToken !== null
        ? Coin.fromPartial(object.inflowToken)
        : undefined;
    message.activeBiddingId =
      object.activeBiddingId !== undefined && object.activeBiddingId !== null
        ? Long.fromValue(object.activeBiddingId)
        : Long.UZERO;
    message.bidder = object.bidder ?? "";
    message.bid =
      object.bid !== undefined && object.bid !== null
        ? Coin.fromPartial(object.bid)
        : undefined;
    message.endTime = object.endTime ?? undefined;
    message.bidFactor = object.bidFactor ?? "";
    message.biddingIds = object.biddingIds?.map((e) => Long.fromValue(e)) || [];
    message.auctionStatus =
      object.auctionStatus !== undefined && object.auctionStatus !== null
        ? Long.fromValue(object.auctionStatus)
        : Long.UZERO;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    return message;
  },
};

function createBaseDebtAuction(): DebtAuction {
  return {
    auctionId: Long.UZERO,
    auctionedToken: undefined,
    expectedUserToken: undefined,
    expectedMintedToken: undefined,
    endTime: undefined,
    activeBiddingId: Long.UZERO,
    bidder: "",
    currentBidAmount: undefined,
    auctionStatus: Long.UZERO,
    appId: Long.UZERO,
    assetId: Long.UZERO,
  };
}

export const DebtAuction = {
  encode(
    message: DebtAuction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }
    if (message.auctionedToken !== undefined) {
      Coin.encode(message.auctionedToken, writer.uint32(18).fork()).ldelim();
    }
    if (message.expectedUserToken !== undefined) {
      Coin.encode(message.expectedUserToken, writer.uint32(26).fork()).ldelim();
    }
    if (message.expectedMintedToken !== undefined) {
      Coin.encode(
        message.expectedMintedToken,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (!message.activeBiddingId.isZero()) {
      writer.uint32(48).uint64(message.activeBiddingId);
    }
    if (message.bidder !== "") {
      writer.uint32(58).string(message.bidder);
    }
    if (message.currentBidAmount !== undefined) {
      Coin.encode(message.currentBidAmount, writer.uint32(66).fork()).ldelim();
    }
    if (!message.auctionStatus.isZero()) {
      writer.uint32(72).uint64(message.auctionStatus);
    }
    if (!message.appId.isZero()) {
      writer.uint32(80).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(88).uint64(message.assetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebtAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebtAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.uint64() as Long;
          break;
        case 2:
          message.auctionedToken = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.expectedUserToken = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.expectedMintedToken = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.activeBiddingId = reader.uint64() as Long;
          break;
        case 7:
          message.bidder = reader.string();
          break;
        case 8:
          message.currentBidAmount = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.auctionStatus = reader.uint64() as Long;
          break;
        case 10:
          message.appId = reader.uint64() as Long;
          break;
        case 11:
          message.assetId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DebtAuction {
    return {
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
      auctionedToken: isSet(object.auctionedToken)
        ? Coin.fromJSON(object.auctionedToken)
        : undefined,
      expectedUserToken: isSet(object.expectedUserToken)
        ? Coin.fromJSON(object.expectedUserToken)
        : undefined,
      expectedMintedToken: isSet(object.expectedMintedToken)
        ? Coin.fromJSON(object.expectedMintedToken)
        : undefined,
      endTime: isSet(object.endTime)
        ? fromJsonTimestamp(object.endTime)
        : undefined,
      activeBiddingId: isSet(object.activeBiddingId)
        ? Long.fromValue(object.activeBiddingId)
        : Long.UZERO,
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      currentBidAmount: isSet(object.currentBidAmount)
        ? Coin.fromJSON(object.currentBidAmount)
        : undefined,
      auctionStatus: isSet(object.auctionStatus)
        ? Long.fromValue(object.auctionStatus)
        : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
    };
  },

  toJSON(message: DebtAuction): unknown {
    const obj: any = {};
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.auctionedToken !== undefined &&
      (obj.auctionedToken = message.auctionedToken
        ? Coin.toJSON(message.auctionedToken)
        : undefined);
    message.expectedUserToken !== undefined &&
      (obj.expectedUserToken = message.expectedUserToken
        ? Coin.toJSON(message.expectedUserToken)
        : undefined);
    message.expectedMintedToken !== undefined &&
      (obj.expectedMintedToken = message.expectedMintedToken
        ? Coin.toJSON(message.expectedMintedToken)
        : undefined);
    message.endTime !== undefined &&
      (obj.endTime = message.endTime.toISOString());
    message.activeBiddingId !== undefined &&
      (obj.activeBiddingId = (
        message.activeBiddingId || Long.UZERO
      ).toString());
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.currentBidAmount !== undefined &&
      (obj.currentBidAmount = message.currentBidAmount
        ? Coin.toJSON(message.currentBidAmount)
        : undefined);
    message.auctionStatus !== undefined &&
      (obj.auctionStatus = (message.auctionStatus || Long.UZERO).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DebtAuction>, I>>(
    object: I
  ): DebtAuction {
    const message = createBaseDebtAuction();
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.auctionedToken =
      object.auctionedToken !== undefined && object.auctionedToken !== null
        ? Coin.fromPartial(object.auctionedToken)
        : undefined;
    message.expectedUserToken =
      object.expectedUserToken !== undefined &&
      object.expectedUserToken !== null
        ? Coin.fromPartial(object.expectedUserToken)
        : undefined;
    message.expectedMintedToken =
      object.expectedMintedToken !== undefined &&
      object.expectedMintedToken !== null
        ? Coin.fromPartial(object.expectedMintedToken)
        : undefined;
    message.endTime = object.endTime ?? undefined;
    message.activeBiddingId =
      object.activeBiddingId !== undefined && object.activeBiddingId !== null
        ? Long.fromValue(object.activeBiddingId)
        : Long.UZERO;
    message.bidder = object.bidder ?? "";
    message.currentBidAmount =
      object.currentBidAmount !== undefined && object.currentBidAmount !== null
        ? Coin.fromPartial(object.currentBidAmount)
        : undefined;
    message.auctionStatus =
      object.auctionStatus !== undefined && object.auctionStatus !== null
        ? Long.fromValue(object.auctionStatus)
        : Long.UZERO;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    return message;
  },
};

function createBaseDutchAuction(): DutchAuction {
  return {
    auctionId: Long.UZERO,
    outflowTokenInitAmount: undefined,
    outflowTokenCurrentAmount: undefined,
    inflowTokenTargetAmount: undefined,
    inflowTokenCurrentAmount: undefined,
    outflowTokenInitialPrice: "",
    outflowTokenCurrentPrice: "",
    outflowTokenEndPrice: "",
    inflowTokenCurrentPrice: "",
    endTime: undefined,
    auctionStatus: Long.UZERO,
    inflowTokenAddress: "",
    outflowTokenAddress: "",
    startTime: undefined,
  };
}

export const DutchAuction = {
  encode(
    message: DutchAuction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }
    if (message.outflowTokenInitAmount !== undefined) {
      Coin.encode(
        message.outflowTokenInitAmount,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.outflowTokenCurrentAmount !== undefined) {
      Coin.encode(
        message.outflowTokenCurrentAmount,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.inflowTokenTargetAmount !== undefined) {
      Coin.encode(
        message.inflowTokenTargetAmount,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.inflowTokenCurrentAmount !== undefined) {
      Coin.encode(
        message.inflowTokenCurrentAmount,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.outflowTokenInitialPrice !== "") {
      writer.uint32(50).string(message.outflowTokenInitialPrice);
    }
    if (message.outflowTokenCurrentPrice !== "") {
      writer.uint32(58).string(message.outflowTokenCurrentPrice);
    }
    if (message.outflowTokenEndPrice !== "") {
      writer.uint32(66).string(message.outflowTokenEndPrice);
    }
    if (message.inflowTokenCurrentPrice !== "") {
      writer.uint32(74).string(message.inflowTokenCurrentPrice);
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (!message.auctionStatus.isZero()) {
      writer.uint32(88).uint64(message.auctionStatus);
    }
    if (message.inflowTokenAddress !== "") {
      writer.uint32(98).string(message.inflowTokenAddress);
    }
    if (message.outflowTokenAddress !== "") {
      writer.uint32(106).string(message.outflowTokenAddress);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(114).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DutchAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDutchAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.uint64() as Long;
          break;
        case 2:
          message.outflowTokenInitAmount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.outflowTokenCurrentAmount = Coin.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.inflowTokenTargetAmount = Coin.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.inflowTokenCurrentAmount = Coin.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.outflowTokenInitialPrice = reader.string();
          break;
        case 7:
          message.outflowTokenCurrentPrice = reader.string();
          break;
        case 8:
          message.outflowTokenEndPrice = reader.string();
          break;
        case 9:
          message.inflowTokenCurrentPrice = reader.string();
          break;
        case 10:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.auctionStatus = reader.uint64() as Long;
          break;
        case 12:
          message.inflowTokenAddress = reader.string();
          break;
        case 13:
          message.outflowTokenAddress = reader.string();
          break;
        case 14:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DutchAuction {
    return {
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
      outflowTokenInitAmount: isSet(object.outflowTokenInitAmount)
        ? Coin.fromJSON(object.outflowTokenInitAmount)
        : undefined,
      outflowTokenCurrentAmount: isSet(object.outflowTokenCurrentAmount)
        ? Coin.fromJSON(object.outflowTokenCurrentAmount)
        : undefined,
      inflowTokenTargetAmount: isSet(object.inflowTokenTargetAmount)
        ? Coin.fromJSON(object.inflowTokenTargetAmount)
        : undefined,
      inflowTokenCurrentAmount: isSet(object.inflowTokenCurrentAmount)
        ? Coin.fromJSON(object.inflowTokenCurrentAmount)
        : undefined,
      outflowTokenInitialPrice: isSet(object.outflowTokenInitialPrice)
        ? String(object.outflowTokenInitialPrice)
        : "",
      outflowTokenCurrentPrice: isSet(object.outflowTokenCurrentPrice)
        ? String(object.outflowTokenCurrentPrice)
        : "",
      outflowTokenEndPrice: isSet(object.outflowTokenEndPrice)
        ? String(object.outflowTokenEndPrice)
        : "",
      inflowTokenCurrentPrice: isSet(object.inflowTokenCurrentPrice)
        ? String(object.inflowTokenCurrentPrice)
        : "",
      endTime: isSet(object.endTime)
        ? fromJsonTimestamp(object.endTime)
        : undefined,
      auctionStatus: isSet(object.auctionStatus)
        ? Long.fromValue(object.auctionStatus)
        : Long.UZERO,
      inflowTokenAddress: isSet(object.inflowTokenAddress)
        ? String(object.inflowTokenAddress)
        : "",
      outflowTokenAddress: isSet(object.outflowTokenAddress)
        ? String(object.outflowTokenAddress)
        : "",
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
    };
  },

  toJSON(message: DutchAuction): unknown {
    const obj: any = {};
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.outflowTokenInitAmount !== undefined &&
      (obj.outflowTokenInitAmount = message.outflowTokenInitAmount
        ? Coin.toJSON(message.outflowTokenInitAmount)
        : undefined);
    message.outflowTokenCurrentAmount !== undefined &&
      (obj.outflowTokenCurrentAmount = message.outflowTokenCurrentAmount
        ? Coin.toJSON(message.outflowTokenCurrentAmount)
        : undefined);
    message.inflowTokenTargetAmount !== undefined &&
      (obj.inflowTokenTargetAmount = message.inflowTokenTargetAmount
        ? Coin.toJSON(message.inflowTokenTargetAmount)
        : undefined);
    message.inflowTokenCurrentAmount !== undefined &&
      (obj.inflowTokenCurrentAmount = message.inflowTokenCurrentAmount
        ? Coin.toJSON(message.inflowTokenCurrentAmount)
        : undefined);
    message.outflowTokenInitialPrice !== undefined &&
      (obj.outflowTokenInitialPrice = message.outflowTokenInitialPrice);
    message.outflowTokenCurrentPrice !== undefined &&
      (obj.outflowTokenCurrentPrice = message.outflowTokenCurrentPrice);
    message.outflowTokenEndPrice !== undefined &&
      (obj.outflowTokenEndPrice = message.outflowTokenEndPrice);
    message.inflowTokenCurrentPrice !== undefined &&
      (obj.inflowTokenCurrentPrice = message.inflowTokenCurrentPrice);
    message.endTime !== undefined &&
      (obj.endTime = message.endTime.toISOString());
    message.auctionStatus !== undefined &&
      (obj.auctionStatus = (message.auctionStatus || Long.UZERO).toString());
    message.inflowTokenAddress !== undefined &&
      (obj.inflowTokenAddress = message.inflowTokenAddress);
    message.outflowTokenAddress !== undefined &&
      (obj.outflowTokenAddress = message.outflowTokenAddress);
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DutchAuction>, I>>(
    object: I
  ): DutchAuction {
    const message = createBaseDutchAuction();
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.outflowTokenInitAmount =
      object.outflowTokenInitAmount !== undefined &&
      object.outflowTokenInitAmount !== null
        ? Coin.fromPartial(object.outflowTokenInitAmount)
        : undefined;
    message.outflowTokenCurrentAmount =
      object.outflowTokenCurrentAmount !== undefined &&
      object.outflowTokenCurrentAmount !== null
        ? Coin.fromPartial(object.outflowTokenCurrentAmount)
        : undefined;
    message.inflowTokenTargetAmount =
      object.inflowTokenTargetAmount !== undefined &&
      object.inflowTokenTargetAmount !== null
        ? Coin.fromPartial(object.inflowTokenTargetAmount)
        : undefined;
    message.inflowTokenCurrentAmount =
      object.inflowTokenCurrentAmount !== undefined &&
      object.inflowTokenCurrentAmount !== null
        ? Coin.fromPartial(object.inflowTokenCurrentAmount)
        : undefined;
    message.outflowTokenInitialPrice = object.outflowTokenInitialPrice ?? "";
    message.outflowTokenCurrentPrice = object.outflowTokenCurrentPrice ?? "";
    message.outflowTokenEndPrice = object.outflowTokenEndPrice ?? "";
    message.inflowTokenCurrentPrice = object.inflowTokenCurrentPrice ?? "";
    message.endTime = object.endTime ?? undefined;
    message.auctionStatus =
      object.auctionStatus !== undefined && object.auctionStatus !== null
        ? Long.fromValue(object.auctionStatus)
        : Long.UZERO;
    message.inflowTokenAddress = object.inflowTokenAddress ?? "";
    message.outflowTokenAddress = object.outflowTokenAddress ?? "";
    message.startTime = object.startTime ?? undefined;
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
