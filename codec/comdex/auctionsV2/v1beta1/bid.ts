/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.auctionsV2.v1beta1";

export interface Bid {
  biddingId: Long;
  auctionId: Long;
  collateralTokenAmount?: Coin;
  debtTokenAmount?: Coin;
  bidderAddress: string;
  biddingTimestamp?: Date;
  appId: Long;
  bidType: string;
}

export interface LimitOrderBid {
  limitOrderBiddingId: Long;
  bidderAddress: string;
  collateralTokenId: Long;
  premiumDiscount: string;
  debtTokenId: Long;
  debtToken?: Coin;
  biddingId: Long[];
}

export interface AuctionParams {
  auctionDurationSeconds: Long;
  step: string;
  withdrawalFee: string;
  closingFee: string;
  minUsdValueLeft: Long;
  bidFactor: string;
  /** For external apps */
  liquidationPenalty: string;
  auctionBonus: string;
}

export interface LimitOrderBidsForUser {
  bidderAddress: string;
  limitOrderBidKey: LimitOrderUserKey[];
}

export interface LimitOrderUserKey {
  debtTokenId: Long;
  collateralTokenId: Long;
  premiumDiscount: string;
  limitOrderBiddingId: Long;
}

export interface AuctionFeesCollectionFromLimitBidTx {
  assetId: Long;
  amount: string;
}

function createBaseBid(): Bid {
  return {
    biddingId: Long.UZERO,
    auctionId: Long.UZERO,
    collateralTokenAmount: undefined,
    debtTokenAmount: undefined,
    bidderAddress: "",
    biddingTimestamp: undefined,
    appId: Long.UZERO,
    bidType: "",
  };
}

export const Bid = {
  encode(message: Bid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.biddingId.isZero()) {
      writer.uint32(8).uint64(message.biddingId);
    }
    if (!message.auctionId.isZero()) {
      writer.uint32(16).uint64(message.auctionId);
    }
    if (message.collateralTokenAmount !== undefined) {
      Coin.encode(message.collateralTokenAmount, writer.uint32(26).fork()).ldelim();
    }
    if (message.debtTokenAmount !== undefined) {
      Coin.encode(message.debtTokenAmount, writer.uint32(34).fork()).ldelim();
    }
    if (message.bidderAddress !== "") {
      writer.uint32(42).string(message.bidderAddress);
    }
    if (message.biddingTimestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.biddingTimestamp), writer.uint32(50).fork()).ldelim();
    }
    if (!message.appId.isZero()) {
      writer.uint32(56).uint64(message.appId);
    }
    if (message.bidType !== "") {
      writer.uint32(66).string(message.bidType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBid();
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
          message.collateralTokenAmount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.debtTokenAmount = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.bidderAddress = reader.string();
          break;
        case 6:
          message.biddingTimestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.appId = reader.uint64() as Long;
          break;
        case 8:
          message.bidType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Bid {
    return {
      biddingId: isSet(object.biddingId) ? Long.fromValue(object.biddingId) : Long.UZERO,
      auctionId: isSet(object.auctionId) ? Long.fromValue(object.auctionId) : Long.UZERO,
      collateralTokenAmount: isSet(object.collateralTokenAmount)
        ? Coin.fromJSON(object.collateralTokenAmount)
        : undefined,
      debtTokenAmount: isSet(object.debtTokenAmount) ? Coin.fromJSON(object.debtTokenAmount) : undefined,
      bidderAddress: isSet(object.bidderAddress) ? String(object.bidderAddress) : "",
      biddingTimestamp: isSet(object.biddingTimestamp) ? fromJsonTimestamp(object.biddingTimestamp) : undefined,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      bidType: isSet(object.bidType) ? String(object.bidType) : "",
    };
  },

  toJSON(message: Bid): unknown {
    const obj: any = {};
    message.biddingId !== undefined && (obj.biddingId = (message.biddingId || Long.UZERO).toString());
    message.auctionId !== undefined && (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.collateralTokenAmount !== undefined && (obj.collateralTokenAmount = message.collateralTokenAmount
      ? Coin.toJSON(message.collateralTokenAmount)
      : undefined);
    message.debtTokenAmount !== undefined &&
      (obj.debtTokenAmount = message.debtTokenAmount ? Coin.toJSON(message.debtTokenAmount) : undefined);
    message.bidderAddress !== undefined && (obj.bidderAddress = message.bidderAddress);
    message.biddingTimestamp !== undefined && (obj.biddingTimestamp = message.biddingTimestamp.toISOString());
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    message.bidType !== undefined && (obj.bidType = message.bidType);
    return obj;
  },

  create<I extends Exact<DeepPartial<Bid>, I>>(base?: I): Bid {
    return Bid.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Bid>, I>>(object: I): Bid {
    const message = createBaseBid();
    message.biddingId = (object.biddingId !== undefined && object.biddingId !== null)
      ? Long.fromValue(object.biddingId)
      : Long.UZERO;
    message.auctionId = (object.auctionId !== undefined && object.auctionId !== null)
      ? Long.fromValue(object.auctionId)
      : Long.UZERO;
    message.collateralTokenAmount =
      (object.collateralTokenAmount !== undefined && object.collateralTokenAmount !== null)
        ? Coin.fromPartial(object.collateralTokenAmount)
        : undefined;
    message.debtTokenAmount = (object.debtTokenAmount !== undefined && object.debtTokenAmount !== null)
      ? Coin.fromPartial(object.debtTokenAmount)
      : undefined;
    message.bidderAddress = object.bidderAddress ?? "";
    message.biddingTimestamp = object.biddingTimestamp ?? undefined;
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.bidType = object.bidType ?? "";
    return message;
  },
};

function createBaseLimitOrderBid(): LimitOrderBid {
  return {
    limitOrderBiddingId: Long.UZERO,
    bidderAddress: "",
    collateralTokenId: Long.UZERO,
    premiumDiscount: "",
    debtTokenId: Long.UZERO,
    debtToken: undefined,
    biddingId: [],
  };
}

export const LimitOrderBid = {
  encode(message: LimitOrderBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.limitOrderBiddingId.isZero()) {
      writer.uint32(8).uint64(message.limitOrderBiddingId);
    }
    if (message.bidderAddress !== "") {
      writer.uint32(18).string(message.bidderAddress);
    }
    if (!message.collateralTokenId.isZero()) {
      writer.uint32(24).uint64(message.collateralTokenId);
    }
    if (message.premiumDiscount !== "") {
      writer.uint32(34).string(message.premiumDiscount);
    }
    if (!message.debtTokenId.isZero()) {
      writer.uint32(40).uint64(message.debtTokenId);
    }
    if (message.debtToken !== undefined) {
      Coin.encode(message.debtToken, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).fork();
    for (const v of message.biddingId) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LimitOrderBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLimitOrderBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limitOrderBiddingId = reader.uint64() as Long;
          break;
        case 2:
          message.bidderAddress = reader.string();
          break;
        case 3:
          message.collateralTokenId = reader.uint64() as Long;
          break;
        case 4:
          message.premiumDiscount = reader.string();
          break;
        case 5:
          message.debtTokenId = reader.uint64() as Long;
          break;
        case 6:
          message.debtToken = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.biddingId.push(reader.uint64() as Long);
            }
          } else {
            message.biddingId.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LimitOrderBid {
    return {
      limitOrderBiddingId: isSet(object.limitOrderBiddingId) ? Long.fromValue(object.limitOrderBiddingId) : Long.UZERO,
      bidderAddress: isSet(object.bidderAddress) ? String(object.bidderAddress) : "",
      collateralTokenId: isSet(object.collateralTokenId) ? Long.fromValue(object.collateralTokenId) : Long.UZERO,
      premiumDiscount: isSet(object.premiumDiscount) ? String(object.premiumDiscount) : "",
      debtTokenId: isSet(object.debtTokenId) ? Long.fromValue(object.debtTokenId) : Long.UZERO,
      debtToken: isSet(object.debtToken) ? Coin.fromJSON(object.debtToken) : undefined,
      biddingId: Array.isArray(object?.biddingId) ? object.biddingId.map((e: any) => Long.fromValue(e)) : [],
    };
  },

  toJSON(message: LimitOrderBid): unknown {
    const obj: any = {};
    message.limitOrderBiddingId !== undefined &&
      (obj.limitOrderBiddingId = (message.limitOrderBiddingId || Long.UZERO).toString());
    message.bidderAddress !== undefined && (obj.bidderAddress = message.bidderAddress);
    message.collateralTokenId !== undefined &&
      (obj.collateralTokenId = (message.collateralTokenId || Long.UZERO).toString());
    message.premiumDiscount !== undefined && (obj.premiumDiscount = message.premiumDiscount);
    message.debtTokenId !== undefined && (obj.debtTokenId = (message.debtTokenId || Long.UZERO).toString());
    message.debtToken !== undefined && (obj.debtToken = message.debtToken ? Coin.toJSON(message.debtToken) : undefined);
    if (message.biddingId) {
      obj.biddingId = message.biddingId.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.biddingId = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LimitOrderBid>, I>>(base?: I): LimitOrderBid {
    return LimitOrderBid.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LimitOrderBid>, I>>(object: I): LimitOrderBid {
    const message = createBaseLimitOrderBid();
    message.limitOrderBiddingId = (object.limitOrderBiddingId !== undefined && object.limitOrderBiddingId !== null)
      ? Long.fromValue(object.limitOrderBiddingId)
      : Long.UZERO;
    message.bidderAddress = object.bidderAddress ?? "";
    message.collateralTokenId = (object.collateralTokenId !== undefined && object.collateralTokenId !== null)
      ? Long.fromValue(object.collateralTokenId)
      : Long.UZERO;
    message.premiumDiscount = object.premiumDiscount ?? "";
    message.debtTokenId = (object.debtTokenId !== undefined && object.debtTokenId !== null)
      ? Long.fromValue(object.debtTokenId)
      : Long.UZERO;
    message.debtToken = (object.debtToken !== undefined && object.debtToken !== null)
      ? Coin.fromPartial(object.debtToken)
      : undefined;
    message.biddingId = object.biddingId?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseAuctionParams(): AuctionParams {
  return {
    auctionDurationSeconds: Long.UZERO,
    step: "",
    withdrawalFee: "",
    closingFee: "",
    minUsdValueLeft: Long.UZERO,
    bidFactor: "",
    liquidationPenalty: "",
    auctionBonus: "",
  };
}

export const AuctionParams = {
  encode(message: AuctionParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionDurationSeconds.isZero()) {
      writer.uint32(8).uint64(message.auctionDurationSeconds);
    }
    if (message.step !== "") {
      writer.uint32(18).string(message.step);
    }
    if (message.withdrawalFee !== "") {
      writer.uint32(26).string(message.withdrawalFee);
    }
    if (message.closingFee !== "") {
      writer.uint32(34).string(message.closingFee);
    }
    if (!message.minUsdValueLeft.isZero()) {
      writer.uint32(40).uint64(message.minUsdValueLeft);
    }
    if (message.bidFactor !== "") {
      writer.uint32(50).string(message.bidFactor);
    }
    if (message.liquidationPenalty !== "") {
      writer.uint32(58).string(message.liquidationPenalty);
    }
    if (message.auctionBonus !== "") {
      writer.uint32(66).string(message.auctionBonus);
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
          message.auctionDurationSeconds = reader.uint64() as Long;
          break;
        case 2:
          message.step = reader.string();
          break;
        case 3:
          message.withdrawalFee = reader.string();
          break;
        case 4:
          message.closingFee = reader.string();
          break;
        case 5:
          message.minUsdValueLeft = reader.uint64() as Long;
          break;
        case 6:
          message.bidFactor = reader.string();
          break;
        case 7:
          message.liquidationPenalty = reader.string();
          break;
        case 8:
          message.auctionBonus = reader.string();
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
      auctionDurationSeconds: isSet(object.auctionDurationSeconds)
        ? Long.fromValue(object.auctionDurationSeconds)
        : Long.UZERO,
      step: isSet(object.step) ? String(object.step) : "",
      withdrawalFee: isSet(object.withdrawalFee) ? String(object.withdrawalFee) : "",
      closingFee: isSet(object.closingFee) ? String(object.closingFee) : "",
      minUsdValueLeft: isSet(object.minUsdValueLeft) ? Long.fromValue(object.minUsdValueLeft) : Long.UZERO,
      bidFactor: isSet(object.bidFactor) ? String(object.bidFactor) : "",
      liquidationPenalty: isSet(object.liquidationPenalty) ? String(object.liquidationPenalty) : "",
      auctionBonus: isSet(object.auctionBonus) ? String(object.auctionBonus) : "",
    };
  },

  toJSON(message: AuctionParams): unknown {
    const obj: any = {};
    message.auctionDurationSeconds !== undefined &&
      (obj.auctionDurationSeconds = (message.auctionDurationSeconds || Long.UZERO).toString());
    message.step !== undefined && (obj.step = message.step);
    message.withdrawalFee !== undefined && (obj.withdrawalFee = message.withdrawalFee);
    message.closingFee !== undefined && (obj.closingFee = message.closingFee);
    message.minUsdValueLeft !== undefined && (obj.minUsdValueLeft = (message.minUsdValueLeft || Long.UZERO).toString());
    message.bidFactor !== undefined && (obj.bidFactor = message.bidFactor);
    message.liquidationPenalty !== undefined && (obj.liquidationPenalty = message.liquidationPenalty);
    message.auctionBonus !== undefined && (obj.auctionBonus = message.auctionBonus);
    return obj;
  },

  create<I extends Exact<DeepPartial<AuctionParams>, I>>(base?: I): AuctionParams {
    return AuctionParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AuctionParams>, I>>(object: I): AuctionParams {
    const message = createBaseAuctionParams();
    message.auctionDurationSeconds =
      (object.auctionDurationSeconds !== undefined && object.auctionDurationSeconds !== null)
        ? Long.fromValue(object.auctionDurationSeconds)
        : Long.UZERO;
    message.step = object.step ?? "";
    message.withdrawalFee = object.withdrawalFee ?? "";
    message.closingFee = object.closingFee ?? "";
    message.minUsdValueLeft = (object.minUsdValueLeft !== undefined && object.minUsdValueLeft !== null)
      ? Long.fromValue(object.minUsdValueLeft)
      : Long.UZERO;
    message.bidFactor = object.bidFactor ?? "";
    message.liquidationPenalty = object.liquidationPenalty ?? "";
    message.auctionBonus = object.auctionBonus ?? "";
    return message;
  },
};

function createBaseLimitOrderBidsForUser(): LimitOrderBidsForUser {
  return { bidderAddress: "", limitOrderBidKey: [] };
}

export const LimitOrderBidsForUser = {
  encode(message: LimitOrderBidsForUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidderAddress !== "") {
      writer.uint32(10).string(message.bidderAddress);
    }
    for (const v of message.limitOrderBidKey) {
      LimitOrderUserKey.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LimitOrderBidsForUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLimitOrderBidsForUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidderAddress = reader.string();
          break;
        case 2:
          message.limitOrderBidKey.push(LimitOrderUserKey.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LimitOrderBidsForUser {
    return {
      bidderAddress: isSet(object.bidderAddress) ? String(object.bidderAddress) : "",
      limitOrderBidKey: Array.isArray(object?.limitOrderBidKey)
        ? object.limitOrderBidKey.map((e: any) => LimitOrderUserKey.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LimitOrderBidsForUser): unknown {
    const obj: any = {};
    message.bidderAddress !== undefined && (obj.bidderAddress = message.bidderAddress);
    if (message.limitOrderBidKey) {
      obj.limitOrderBidKey = message.limitOrderBidKey.map((e) => e ? LimitOrderUserKey.toJSON(e) : undefined);
    } else {
      obj.limitOrderBidKey = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LimitOrderBidsForUser>, I>>(base?: I): LimitOrderBidsForUser {
    return LimitOrderBidsForUser.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LimitOrderBidsForUser>, I>>(object: I): LimitOrderBidsForUser {
    const message = createBaseLimitOrderBidsForUser();
    message.bidderAddress = object.bidderAddress ?? "";
    message.limitOrderBidKey = object.limitOrderBidKey?.map((e) => LimitOrderUserKey.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLimitOrderUserKey(): LimitOrderUserKey {
  return {
    debtTokenId: Long.UZERO,
    collateralTokenId: Long.UZERO,
    premiumDiscount: "",
    limitOrderBiddingId: Long.UZERO,
  };
}

export const LimitOrderUserKey = {
  encode(message: LimitOrderUserKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.debtTokenId.isZero()) {
      writer.uint32(8).uint64(message.debtTokenId);
    }
    if (!message.collateralTokenId.isZero()) {
      writer.uint32(16).uint64(message.collateralTokenId);
    }
    if (message.premiumDiscount !== "") {
      writer.uint32(26).string(message.premiumDiscount);
    }
    if (!message.limitOrderBiddingId.isZero()) {
      writer.uint32(32).uint64(message.limitOrderBiddingId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LimitOrderUserKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLimitOrderUserKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.debtTokenId = reader.uint64() as Long;
          break;
        case 2:
          message.collateralTokenId = reader.uint64() as Long;
          break;
        case 3:
          message.premiumDiscount = reader.string();
          break;
        case 4:
          message.limitOrderBiddingId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LimitOrderUserKey {
    return {
      debtTokenId: isSet(object.debtTokenId) ? Long.fromValue(object.debtTokenId) : Long.UZERO,
      collateralTokenId: isSet(object.collateralTokenId) ? Long.fromValue(object.collateralTokenId) : Long.UZERO,
      premiumDiscount: isSet(object.premiumDiscount) ? String(object.premiumDiscount) : "",
      limitOrderBiddingId: isSet(object.limitOrderBiddingId) ? Long.fromValue(object.limitOrderBiddingId) : Long.UZERO,
    };
  },

  toJSON(message: LimitOrderUserKey): unknown {
    const obj: any = {};
    message.debtTokenId !== undefined && (obj.debtTokenId = (message.debtTokenId || Long.UZERO).toString());
    message.collateralTokenId !== undefined &&
      (obj.collateralTokenId = (message.collateralTokenId || Long.UZERO).toString());
    message.premiumDiscount !== undefined && (obj.premiumDiscount = message.premiumDiscount);
    message.limitOrderBiddingId !== undefined &&
      (obj.limitOrderBiddingId = (message.limitOrderBiddingId || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<LimitOrderUserKey>, I>>(base?: I): LimitOrderUserKey {
    return LimitOrderUserKey.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LimitOrderUserKey>, I>>(object: I): LimitOrderUserKey {
    const message = createBaseLimitOrderUserKey();
    message.debtTokenId = (object.debtTokenId !== undefined && object.debtTokenId !== null)
      ? Long.fromValue(object.debtTokenId)
      : Long.UZERO;
    message.collateralTokenId = (object.collateralTokenId !== undefined && object.collateralTokenId !== null)
      ? Long.fromValue(object.collateralTokenId)
      : Long.UZERO;
    message.premiumDiscount = object.premiumDiscount ?? "";
    message.limitOrderBiddingId = (object.limitOrderBiddingId !== undefined && object.limitOrderBiddingId !== null)
      ? Long.fromValue(object.limitOrderBiddingId)
      : Long.UZERO;
    return message;
  },
};

function createBaseAuctionFeesCollectionFromLimitBidTx(): AuctionFeesCollectionFromLimitBidTx {
  return { assetId: Long.UZERO, amount: "" };
}

export const AuctionFeesCollectionFromLimitBidTx = {
  encode(message: AuctionFeesCollectionFromLimitBidTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.assetId.isZero()) {
      writer.uint32(8).uint64(message.assetId);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuctionFeesCollectionFromLimitBidTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuctionFeesCollectionFromLimitBidTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.uint64() as Long;
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuctionFeesCollectionFromLimitBidTx {
    return {
      assetId: isSet(object.assetId) ? Long.fromValue(object.assetId) : Long.UZERO,
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: AuctionFeesCollectionFromLimitBidTx): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create<I extends Exact<DeepPartial<AuctionFeesCollectionFromLimitBidTx>, I>>(
    base?: I,
  ): AuctionFeesCollectionFromLimitBidTx {
    return AuctionFeesCollectionFromLimitBidTx.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AuctionFeesCollectionFromLimitBidTx>, I>>(
    object: I,
  ): AuctionFeesCollectionFromLimitBidTx {
    const message = createBaseAuctionFeesCollectionFromLimitBidTx();
    message.assetId = (object.assetId !== undefined && object.assetId !== null)
      ? Long.fromValue(object.assetId)
      : Long.UZERO;
    message.amount = object.amount ?? "";
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
