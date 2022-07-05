/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.auction.v1beta1";

export interface SurplusAuction {
  auctionId: Long;
  sellToken?: Coin;
  buyToken?: Coin;
  activeBiddingId: Long;
  bidder: string;
  bid?: Coin;
  endTime?: Date;
  bidFactor: string;
  biddingIds: bidOwnerMapping[];
  auctionStatus: Long;
  appId: Long;
  assetId: Long;
  auctionMappingId: Long;
  assetInId: Long;
  assetOutId: Long;
  bidEndTime?: Date;
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
  biddingIds: bidOwnerMapping[];
  auctionMappingId: Long;
  bidFactor: string;
  assetInId: Long;
  assetOutId: Long;
  bidEndTime?: Date;
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
  startTime?: Date;
  biddingIds: bidOwnerMapping[];
  auctionMappingId: Long;
  appId: Long;
  assetInId: Long;
  assetOutId: Long;
  lockedVaultId: Long;
  vaultOwner: string;
  liquidationPenalty: string;
}

export interface bidOwnerMapping {
  bidId: Long;
  bidOwner: string;
}

export interface ProtocolStatistics {
  appId: Long;
  assetId: Long;
  loss: string;
}

export interface AuctionParams {
  appId: Long;
  auctionDurationSeconds: Long;
  buffer: string;
  cusp: string;
  step: string;
  priceFunctionType: Long;
  surplusId: Long;
  debtId: Long;
  dutchId: Long;
  bidDurationSeconds: Long;
}

function createBaseSurplusAuction(): SurplusAuction {
  return {
    auctionId: Long.UZERO,
    sellToken: undefined,
    buyToken: undefined,
    activeBiddingId: Long.UZERO,
    bidder: "",
    bid: undefined,
    endTime: undefined,
    bidFactor: "",
    biddingIds: [],
    auctionStatus: Long.UZERO,
    appId: Long.UZERO,
    assetId: Long.UZERO,
    auctionMappingId: Long.UZERO,
    assetInId: Long.UZERO,
    assetOutId: Long.UZERO,
    bidEndTime: undefined,
  };
}

export const SurplusAuction = {
  encode(
    message: SurplusAuction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }
    if (message.sellToken !== undefined) {
      Coin.encode(message.sellToken, writer.uint32(18).fork()).ldelim();
    }
    if (message.buyToken !== undefined) {
      Coin.encode(message.buyToken, writer.uint32(26).fork()).ldelim();
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
    for (const v of message.biddingIds) {
      bidOwnerMapping.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (!message.auctionStatus.isZero()) {
      writer.uint32(80).uint64(message.auctionStatus);
    }
    if (!message.appId.isZero()) {
      writer.uint32(88).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(96).uint64(message.assetId);
    }
    if (!message.auctionMappingId.isZero()) {
      writer.uint32(104).uint64(message.auctionMappingId);
    }
    if (!message.assetInId.isZero()) {
      writer.uint32(112).uint64(message.assetInId);
    }
    if (!message.assetOutId.isZero()) {
      writer.uint32(120).uint64(message.assetOutId);
    }
    if (message.bidEndTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.bidEndTime),
        writer.uint32(130).fork()
      ).ldelim();
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
          message.auctionId = reader.uint64() as Long;
          break;
        case 2:
          message.sellToken = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.buyToken = Coin.decode(reader, reader.uint32());
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
          message.biddingIds.push(
            bidOwnerMapping.decode(reader, reader.uint32())
          );
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
        case 13:
          message.auctionMappingId = reader.uint64() as Long;
          break;
        case 14:
          message.assetInId = reader.uint64() as Long;
          break;
        case 15:
          message.assetOutId = reader.uint64() as Long;
          break;
        case 16:
          message.bidEndTime = fromTimestamp(
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

  fromJSON(object: any): SurplusAuction {
    return {
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
      sellToken: isSet(object.sellToken)
        ? Coin.fromJSON(object.sellToken)
        : undefined,
      buyToken: isSet(object.buyToken)
        ? Coin.fromJSON(object.buyToken)
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
        ? object.biddingIds.map((e: any) => bidOwnerMapping.fromJSON(e))
        : [],
      auctionStatus: isSet(object.auctionStatus)
        ? Long.fromValue(object.auctionStatus)
        : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      auctionMappingId: isSet(object.auctionMappingId)
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO,
      assetInId: isSet(object.assetInId)
        ? Long.fromValue(object.assetInId)
        : Long.UZERO,
      assetOutId: isSet(object.assetOutId)
        ? Long.fromValue(object.assetOutId)
        : Long.UZERO,
      bidEndTime: isSet(object.bidEndTime)
        ? fromJsonTimestamp(object.bidEndTime)
        : undefined,
    };
  },

  toJSON(message: SurplusAuction): unknown {
    const obj: any = {};
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.sellToken !== undefined &&
      (obj.sellToken = message.sellToken
        ? Coin.toJSON(message.sellToken)
        : undefined);
    message.buyToken !== undefined &&
      (obj.buyToken = message.buyToken
        ? Coin.toJSON(message.buyToken)
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
        e ? bidOwnerMapping.toJSON(e) : undefined
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
    message.auctionMappingId !== undefined &&
      (obj.auctionMappingId = (
        message.auctionMappingId || Long.UZERO
      ).toString());
    message.assetInId !== undefined &&
      (obj.assetInId = (message.assetInId || Long.UZERO).toString());
    message.assetOutId !== undefined &&
      (obj.assetOutId = (message.assetOutId || Long.UZERO).toString());
    message.bidEndTime !== undefined &&
      (obj.bidEndTime = message.bidEndTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SurplusAuction>, I>>(
    object: I
  ): SurplusAuction {
    const message = createBaseSurplusAuction();
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.sellToken =
      object.sellToken !== undefined && object.sellToken !== null
        ? Coin.fromPartial(object.sellToken)
        : undefined;
    message.buyToken =
      object.buyToken !== undefined && object.buyToken !== null
        ? Coin.fromPartial(object.buyToken)
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
    message.biddingIds =
      object.biddingIds?.map((e) => bidOwnerMapping.fromPartial(e)) || [];
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
    message.auctionMappingId =
      object.auctionMappingId !== undefined && object.auctionMappingId !== null
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO;
    message.assetInId =
      object.assetInId !== undefined && object.assetInId !== null
        ? Long.fromValue(object.assetInId)
        : Long.UZERO;
    message.assetOutId =
      object.assetOutId !== undefined && object.assetOutId !== null
        ? Long.fromValue(object.assetOutId)
        : Long.UZERO;
    message.bidEndTime = object.bidEndTime ?? undefined;
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
    biddingIds: [],
    auctionMappingId: Long.UZERO,
    bidFactor: "",
    assetInId: Long.UZERO,
    assetOutId: Long.UZERO,
    bidEndTime: undefined,
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
    for (const v of message.biddingIds) {
      bidOwnerMapping.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (!message.auctionMappingId.isZero()) {
      writer.uint32(104).uint64(message.auctionMappingId);
    }
    if (message.bidFactor !== "") {
      writer.uint32(114).string(message.bidFactor);
    }
    if (!message.assetInId.isZero()) {
      writer.uint32(120).uint64(message.assetInId);
    }
    if (!message.assetOutId.isZero()) {
      writer.uint32(128).uint64(message.assetOutId);
    }
    if (message.bidEndTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.bidEndTime),
        writer.uint32(138).fork()
      ).ldelim();
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
        case 12:
          message.biddingIds.push(
            bidOwnerMapping.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.auctionMappingId = reader.uint64() as Long;
          break;
        case 14:
          message.bidFactor = reader.string();
          break;
        case 15:
          message.assetInId = reader.uint64() as Long;
          break;
        case 16:
          message.assetOutId = reader.uint64() as Long;
          break;
        case 17:
          message.bidEndTime = fromTimestamp(
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
      biddingIds: Array.isArray(object?.biddingIds)
        ? object.biddingIds.map((e: any) => bidOwnerMapping.fromJSON(e))
        : [],
      auctionMappingId: isSet(object.auctionMappingId)
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO,
      bidFactor: isSet(object.bidFactor) ? String(object.bidFactor) : "",
      assetInId: isSet(object.assetInId)
        ? Long.fromValue(object.assetInId)
        : Long.UZERO,
      assetOutId: isSet(object.assetOutId)
        ? Long.fromValue(object.assetOutId)
        : Long.UZERO,
      bidEndTime: isSet(object.bidEndTime)
        ? fromJsonTimestamp(object.bidEndTime)
        : undefined,
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
    if (message.biddingIds) {
      obj.biddingIds = message.biddingIds.map((e) =>
        e ? bidOwnerMapping.toJSON(e) : undefined
      );
    } else {
      obj.biddingIds = [];
    }
    message.auctionMappingId !== undefined &&
      (obj.auctionMappingId = (
        message.auctionMappingId || Long.UZERO
      ).toString());
    message.bidFactor !== undefined && (obj.bidFactor = message.bidFactor);
    message.assetInId !== undefined &&
      (obj.assetInId = (message.assetInId || Long.UZERO).toString());
    message.assetOutId !== undefined &&
      (obj.assetOutId = (message.assetOutId || Long.UZERO).toString());
    message.bidEndTime !== undefined &&
      (obj.bidEndTime = message.bidEndTime.toISOString());
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
    message.biddingIds =
      object.biddingIds?.map((e) => bidOwnerMapping.fromPartial(e)) || [];
    message.auctionMappingId =
      object.auctionMappingId !== undefined && object.auctionMappingId !== null
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO;
    message.bidFactor = object.bidFactor ?? "";
    message.assetInId =
      object.assetInId !== undefined && object.assetInId !== null
        ? Long.fromValue(object.assetInId)
        : Long.UZERO;
    message.assetOutId =
      object.assetOutId !== undefined && object.assetOutId !== null
        ? Long.fromValue(object.assetOutId)
        : Long.UZERO;
    message.bidEndTime = object.bidEndTime ?? undefined;
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
    startTime: undefined,
    biddingIds: [],
    auctionMappingId: Long.UZERO,
    appId: Long.UZERO,
    assetInId: Long.UZERO,
    assetOutId: Long.UZERO,
    lockedVaultId: Long.UZERO,
    vaultOwner: "",
    liquidationPenalty: "",
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
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(98).fork()
      ).ldelim();
    }
    for (const v of message.biddingIds) {
      bidOwnerMapping.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (!message.auctionMappingId.isZero()) {
      writer.uint32(112).uint64(message.auctionMappingId);
    }
    if (!message.appId.isZero()) {
      writer.uint32(120).uint64(message.appId);
    }
    if (!message.assetInId.isZero()) {
      writer.uint32(128).uint64(message.assetInId);
    }
    if (!message.assetOutId.isZero()) {
      writer.uint32(136).uint64(message.assetOutId);
    }
    if (!message.lockedVaultId.isZero()) {
      writer.uint32(144).uint64(message.lockedVaultId);
    }
    if (message.vaultOwner !== "") {
      writer.uint32(154).string(message.vaultOwner);
    }
    if (message.liquidationPenalty !== "") {
      writer.uint32(162).string(message.liquidationPenalty);
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
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.biddingIds.push(
            bidOwnerMapping.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.auctionMappingId = reader.uint64() as Long;
          break;
        case 15:
          message.appId = reader.uint64() as Long;
          break;
        case 16:
          message.assetInId = reader.uint64() as Long;
          break;
        case 17:
          message.assetOutId = reader.uint64() as Long;
          break;
        case 18:
          message.lockedVaultId = reader.uint64() as Long;
          break;
        case 19:
          message.vaultOwner = reader.string();
          break;
        case 20:
          message.liquidationPenalty = reader.string();
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
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
      biddingIds: Array.isArray(object?.biddingIds)
        ? object.biddingIds.map((e: any) => bidOwnerMapping.fromJSON(e))
        : [],
      auctionMappingId: isSet(object.auctionMappingId)
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetInId: isSet(object.assetInId)
        ? Long.fromValue(object.assetInId)
        : Long.UZERO,
      assetOutId: isSet(object.assetOutId)
        ? Long.fromValue(object.assetOutId)
        : Long.UZERO,
      lockedVaultId: isSet(object.lockedVaultId)
        ? Long.fromValue(object.lockedVaultId)
        : Long.UZERO,
      vaultOwner: isSet(object.vaultOwner) ? String(object.vaultOwner) : "",
      liquidationPenalty: isSet(object.liquidationPenalty)
        ? String(object.liquidationPenalty)
        : "",
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
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    if (message.biddingIds) {
      obj.biddingIds = message.biddingIds.map((e) =>
        e ? bidOwnerMapping.toJSON(e) : undefined
      );
    } else {
      obj.biddingIds = [];
    }
    message.auctionMappingId !== undefined &&
      (obj.auctionMappingId = (
        message.auctionMappingId || Long.UZERO
      ).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetInId !== undefined &&
      (obj.assetInId = (message.assetInId || Long.UZERO).toString());
    message.assetOutId !== undefined &&
      (obj.assetOutId = (message.assetOutId || Long.UZERO).toString());
    message.lockedVaultId !== undefined &&
      (obj.lockedVaultId = (message.lockedVaultId || Long.UZERO).toString());
    message.vaultOwner !== undefined && (obj.vaultOwner = message.vaultOwner);
    message.liquidationPenalty !== undefined &&
      (obj.liquidationPenalty = message.liquidationPenalty);
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
    message.startTime = object.startTime ?? undefined;
    message.biddingIds =
      object.biddingIds?.map((e) => bidOwnerMapping.fromPartial(e)) || [];
    message.auctionMappingId =
      object.auctionMappingId !== undefined && object.auctionMappingId !== null
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetInId =
      object.assetInId !== undefined && object.assetInId !== null
        ? Long.fromValue(object.assetInId)
        : Long.UZERO;
    message.assetOutId =
      object.assetOutId !== undefined && object.assetOutId !== null
        ? Long.fromValue(object.assetOutId)
        : Long.UZERO;
    message.lockedVaultId =
      object.lockedVaultId !== undefined && object.lockedVaultId !== null
        ? Long.fromValue(object.lockedVaultId)
        : Long.UZERO;
    message.vaultOwner = object.vaultOwner ?? "";
    message.liquidationPenalty = object.liquidationPenalty ?? "";
    return message;
  },
};

function createBasebidOwnerMapping(): bidOwnerMapping {
  return { bidId: Long.UZERO, bidOwner: "" };
}

export const bidOwnerMapping = {
  encode(
    message: bidOwnerMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.bidId.isZero()) {
      writer.uint32(8).uint64(message.bidId);
    }
    if (message.bidOwner !== "") {
      writer.uint32(18).string(message.bidOwner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): bidOwnerMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasebidOwnerMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidId = reader.uint64() as Long;
          break;
        case 2:
          message.bidOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): bidOwnerMapping {
    return {
      bidId: isSet(object.bidId) ? Long.fromValue(object.bidId) : Long.UZERO,
      bidOwner: isSet(object.bidOwner) ? String(object.bidOwner) : "",
    };
  },

  toJSON(message: bidOwnerMapping): unknown {
    const obj: any = {};
    message.bidId !== undefined &&
      (obj.bidId = (message.bidId || Long.UZERO).toString());
    message.bidOwner !== undefined && (obj.bidOwner = message.bidOwner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<bidOwnerMapping>, I>>(
    object: I
  ): bidOwnerMapping {
    const message = createBasebidOwnerMapping();
    message.bidId =
      object.bidId !== undefined && object.bidId !== null
        ? Long.fromValue(object.bidId)
        : Long.UZERO;
    message.bidOwner = object.bidOwner ?? "";
    return message;
  },
};

function createBaseProtocolStatistics(): ProtocolStatistics {
  return { appId: Long.UZERO, assetId: Long.UZERO, loss: "" };
}

export const ProtocolStatistics = {
  encode(
    message: ProtocolStatistics,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    if (message.loss !== "") {
      writer.uint32(26).string(message.loss);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtocolStatistics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtocolStatistics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        case 3:
          message.loss = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProtocolStatistics {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      loss: isSet(object.loss) ? String(object.loss) : "",
    };
  },

  toJSON(message: ProtocolStatistics): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.loss !== undefined && (obj.loss = message.loss);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProtocolStatistics>, I>>(
    object: I
  ): ProtocolStatistics {
    const message = createBaseProtocolStatistics();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.loss = object.loss ?? "";
    return message;
  },
};

function createBaseAuctionParams(): AuctionParams {
  return {
    appId: Long.UZERO,
    auctionDurationSeconds: Long.UZERO,
    buffer: "",
    cusp: "",
    step: "",
    priceFunctionType: Long.UZERO,
    surplusId: Long.UZERO,
    debtId: Long.UZERO,
    dutchId: Long.UZERO,
    bidDurationSeconds: Long.UZERO,
  };
}

export const AuctionParams = {
  encode(
    message: AuctionParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.auctionDurationSeconds.isZero()) {
      writer.uint32(16).uint64(message.auctionDurationSeconds);
    }
    if (message.buffer !== "") {
      writer.uint32(26).string(message.buffer);
    }
    if (message.cusp !== "") {
      writer.uint32(34).string(message.cusp);
    }
    if (message.step !== "") {
      writer.uint32(42).string(message.step);
    }
    if (!message.priceFunctionType.isZero()) {
      writer.uint32(48).uint64(message.priceFunctionType);
    }
    if (!message.surplusId.isZero()) {
      writer.uint32(56).uint64(message.surplusId);
    }
    if (!message.debtId.isZero()) {
      writer.uint32(64).uint64(message.debtId);
    }
    if (!message.dutchId.isZero()) {
      writer.uint32(72).uint64(message.dutchId);
    }
    if (!message.bidDurationSeconds.isZero()) {
      writer.uint32(80).uint64(message.bidDurationSeconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuctionParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuctionParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.auctionDurationSeconds = reader.uint64() as Long;
          break;
        case 3:
          message.buffer = reader.string();
          break;
        case 4:
          message.cusp = reader.string();
          break;
        case 5:
          message.step = reader.string();
          break;
        case 6:
          message.priceFunctionType = reader.uint64() as Long;
          break;
        case 7:
          message.surplusId = reader.uint64() as Long;
          break;
        case 8:
          message.debtId = reader.uint64() as Long;
          break;
        case 9:
          message.dutchId = reader.uint64() as Long;
          break;
        case 10:
          message.bidDurationSeconds = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuctionParams {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      auctionDurationSeconds: isSet(object.auctionDurationSeconds)
        ? Long.fromValue(object.auctionDurationSeconds)
        : Long.UZERO,
      buffer: isSet(object.buffer) ? String(object.buffer) : "",
      cusp: isSet(object.cusp) ? String(object.cusp) : "",
      step: isSet(object.step) ? String(object.step) : "",
      priceFunctionType: isSet(object.priceFunctionType)
        ? Long.fromValue(object.priceFunctionType)
        : Long.UZERO,
      surplusId: isSet(object.surplusId)
        ? Long.fromValue(object.surplusId)
        : Long.UZERO,
      debtId: isSet(object.debtId) ? Long.fromValue(object.debtId) : Long.UZERO,
      dutchId: isSet(object.dutchId)
        ? Long.fromValue(object.dutchId)
        : Long.UZERO,
      bidDurationSeconds: isSet(object.bidDurationSeconds)
        ? Long.fromValue(object.bidDurationSeconds)
        : Long.UZERO,
    };
  },

  toJSON(message: AuctionParams): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.auctionDurationSeconds !== undefined &&
      (obj.auctionDurationSeconds = (
        message.auctionDurationSeconds || Long.UZERO
      ).toString());
    message.buffer !== undefined && (obj.buffer = message.buffer);
    message.cusp !== undefined && (obj.cusp = message.cusp);
    message.step !== undefined && (obj.step = message.step);
    message.priceFunctionType !== undefined &&
      (obj.priceFunctionType = (
        message.priceFunctionType || Long.UZERO
      ).toString());
    message.surplusId !== undefined &&
      (obj.surplusId = (message.surplusId || Long.UZERO).toString());
    message.debtId !== undefined &&
      (obj.debtId = (message.debtId || Long.UZERO).toString());
    message.dutchId !== undefined &&
      (obj.dutchId = (message.dutchId || Long.UZERO).toString());
    message.bidDurationSeconds !== undefined &&
      (obj.bidDurationSeconds = (
        message.bidDurationSeconds || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuctionParams>, I>>(
    object: I
  ): AuctionParams {
    const message = createBaseAuctionParams();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.auctionDurationSeconds =
      object.auctionDurationSeconds !== undefined &&
      object.auctionDurationSeconds !== null
        ? Long.fromValue(object.auctionDurationSeconds)
        : Long.UZERO;
    message.buffer = object.buffer ?? "";
    message.cusp = object.cusp ?? "";
    message.step = object.step ?? "";
    message.priceFunctionType =
      object.priceFunctionType !== undefined &&
      object.priceFunctionType !== null
        ? Long.fromValue(object.priceFunctionType)
        : Long.UZERO;
    message.surplusId =
      object.surplusId !== undefined && object.surplusId !== null
        ? Long.fromValue(object.surplusId)
        : Long.UZERO;
    message.debtId =
      object.debtId !== undefined && object.debtId !== null
        ? Long.fromValue(object.debtId)
        : Long.UZERO;
    message.dutchId =
      object.dutchId !== undefined && object.dutchId !== null
        ? Long.fromValue(object.dutchId)
        : Long.UZERO;
    message.bidDurationSeconds =
      object.bidDurationSeconds !== undefined &&
      object.bidDurationSeconds !== null
        ? Long.fromValue(object.bidDurationSeconds)
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
