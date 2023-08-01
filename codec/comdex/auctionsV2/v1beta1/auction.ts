/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { LockedVault } from "../../../comdex/liquidationsV2/v1beta1/liquidate";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.auctionsV2.v1beta1";

export interface AuctionHistorical {
  auctionId: Long;
  auctionHistorical?: Auction;
  lockedVault?: LockedVault;
}

export interface Auction {
  auctionId: Long;
  collateralToken?: Coin;
  debtToken?: Coin;
  activeBiddingId: Long;
  biddingIds: bidOwnerMapping[];
  /** price indicator only for dutch auctions */
  collateralTokenAuctionPrice: string;
  collateralTokenOraclePrice: string;
  debtTokenOraclePrice: string;
  lockedVaultId: Long;
  startTime?: Date;
  endTime?: Date;
  appId: Long;
  auctionType: boolean;
  collateralAssetId: Long;
  debtAssetId: Long;
  bonusAmount: string;
  collateralTokenInitialPrice: string;
}

export interface bidOwnerMapping {
  bidId: Long;
  bidOwner: string;
}

export interface LimitBidProtocolData {
  collateralAssetId: Long;
  debtAssetId: Long;
  bidValue: string;
  maxDiscount: string;
}

function createBaseAuctionHistorical(): AuctionHistorical {
  return {
    auctionId: Long.UZERO,
    auctionHistorical: undefined,
    lockedVault: undefined,
  };
}

export const AuctionHistorical = {
  encode(
    message: AuctionHistorical,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }
    if (message.auctionHistorical !== undefined) {
      Auction.encode(
        message.auctionHistorical,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.lockedVault !== undefined) {
      LockedVault.encode(
        message.lockedVault,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuctionHistorical {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuctionHistorical();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.uint64() as Long;
          break;
        case 2:
          message.auctionHistorical = Auction.decode(reader, reader.uint32());
          break;
        case 3:
          message.lockedVault = LockedVault.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuctionHistorical {
    return {
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
      auctionHistorical: isSet(object.auctionHistorical)
        ? Auction.fromJSON(object.auctionHistorical)
        : undefined,
      lockedVault: isSet(object.lockedVault)
        ? LockedVault.fromJSON(object.lockedVault)
        : undefined,
    };
  },

  toJSON(message: AuctionHistorical): unknown {
    const obj: any = {};
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.auctionHistorical !== undefined &&
      (obj.auctionHistorical = message.auctionHistorical
        ? Auction.toJSON(message.auctionHistorical)
        : undefined);
    message.lockedVault !== undefined &&
      (obj.lockedVault = message.lockedVault
        ? LockedVault.toJSON(message.lockedVault)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuctionHistorical>, I>>(
    object: I
  ): AuctionHistorical {
    const message = createBaseAuctionHistorical();
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.auctionHistorical =
      object.auctionHistorical !== undefined &&
      object.auctionHistorical !== null
        ? Auction.fromPartial(object.auctionHistorical)
        : undefined;
    message.lockedVault =
      object.lockedVault !== undefined && object.lockedVault !== null
        ? LockedVault.fromPartial(object.lockedVault)
        : undefined;
    return message;
  },
};

function createBaseAuction(): Auction {
  return {
    auctionId: Long.UZERO,
    collateralToken: undefined,
    debtToken: undefined,
    activeBiddingId: Long.UZERO,
    biddingIds: [],
    collateralTokenAuctionPrice: "",
    collateralTokenOraclePrice: "",
    debtTokenOraclePrice: "",
    lockedVaultId: Long.UZERO,
    startTime: undefined,
    endTime: undefined,
    appId: Long.UZERO,
    auctionType: false,
    collateralAssetId: Long.UZERO,
    debtAssetId: Long.UZERO,
    bonusAmount: "",
    collateralTokenInitialPrice: "",
  };
}

export const Auction = {
  encode(
    message: Auction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }
    if (message.collateralToken !== undefined) {
      Coin.encode(message.collateralToken, writer.uint32(18).fork()).ldelim();
    }
    if (message.debtToken !== undefined) {
      Coin.encode(message.debtToken, writer.uint32(26).fork()).ldelim();
    }
    if (!message.activeBiddingId.isZero()) {
      writer.uint32(32).uint64(message.activeBiddingId);
    }
    for (const v of message.biddingIds) {
      bidOwnerMapping.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.collateralTokenAuctionPrice !== "") {
      writer.uint32(58).string(message.collateralTokenAuctionPrice);
    }
    if (message.collateralTokenOraclePrice !== "") {
      writer.uint32(66).string(message.collateralTokenOraclePrice);
    }
    if (message.debtTokenOraclePrice !== "") {
      writer.uint32(74).string(message.debtTokenOraclePrice);
    }
    if (!message.lockedVaultId.isZero()) {
      writer.uint32(80).uint64(message.lockedVaultId);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (!message.appId.isZero()) {
      writer.uint32(104).uint64(message.appId);
    }
    if (message.auctionType === true) {
      writer.uint32(112).bool(message.auctionType);
    }
    if (!message.collateralAssetId.isZero()) {
      writer.uint32(120).uint64(message.collateralAssetId);
    }
    if (!message.debtAssetId.isZero()) {
      writer.uint32(128).uint64(message.debtAssetId);
    }
    if (message.bonusAmount !== "") {
      writer.uint32(138).string(message.bonusAmount);
    }
    if (message.collateralTokenInitialPrice !== "") {
      writer.uint32(146).string(message.collateralTokenInitialPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Auction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.uint64() as Long;
          break;
        case 2:
          message.collateralToken = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.debtToken = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.activeBiddingId = reader.uint64() as Long;
          break;
        case 5:
          message.biddingIds.push(
            bidOwnerMapping.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.collateralTokenAuctionPrice = reader.string();
          break;
        case 8:
          message.collateralTokenOraclePrice = reader.string();
          break;
        case 9:
          message.debtTokenOraclePrice = reader.string();
          break;
        case 10:
          message.lockedVaultId = reader.uint64() as Long;
          break;
        case 11:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.appId = reader.uint64() as Long;
          break;
        case 14:
          message.auctionType = reader.bool();
          break;
        case 15:
          message.collateralAssetId = reader.uint64() as Long;
          break;
        case 16:
          message.debtAssetId = reader.uint64() as Long;
          break;
        case 17:
          message.bonusAmount = reader.string();
          break;
        case 18:
          message.collateralTokenInitialPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Auction {
    return {
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
      collateralToken: isSet(object.collateralToken)
        ? Coin.fromJSON(object.collateralToken)
        : undefined,
      debtToken: isSet(object.debtToken)
        ? Coin.fromJSON(object.debtToken)
        : undefined,
      activeBiddingId: isSet(object.activeBiddingId)
        ? Long.fromValue(object.activeBiddingId)
        : Long.UZERO,
      biddingIds: Array.isArray(object?.biddingIds)
        ? object.biddingIds.map((e: any) => bidOwnerMapping.fromJSON(e))
        : [],
      collateralTokenAuctionPrice: isSet(object.collateralTokenAuctionPrice)
        ? String(object.collateralTokenAuctionPrice)
        : "",
      collateralTokenOraclePrice: isSet(object.collateralTokenOraclePrice)
        ? String(object.collateralTokenOraclePrice)
        : "",
      debtTokenOraclePrice: isSet(object.debtTokenOraclePrice)
        ? String(object.debtTokenOraclePrice)
        : "",
      lockedVaultId: isSet(object.lockedVaultId)
        ? Long.fromValue(object.lockedVaultId)
        : Long.UZERO,
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
      endTime: isSet(object.endTime)
        ? fromJsonTimestamp(object.endTime)
        : undefined,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      auctionType: isSet(object.auctionType)
        ? Boolean(object.auctionType)
        : false,
      collateralAssetId: isSet(object.collateralAssetId)
        ? Long.fromValue(object.collateralAssetId)
        : Long.UZERO,
      debtAssetId: isSet(object.debtAssetId)
        ? Long.fromValue(object.debtAssetId)
        : Long.UZERO,
      bonusAmount: isSet(object.bonusAmount) ? String(object.bonusAmount) : "",
      collateralTokenInitialPrice: isSet(object.collateralTokenInitialPrice)
        ? String(object.collateralTokenInitialPrice)
        : "",
    };
  },

  toJSON(message: Auction): unknown {
    const obj: any = {};
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.collateralToken !== undefined &&
      (obj.collateralToken = message.collateralToken
        ? Coin.toJSON(message.collateralToken)
        : undefined);
    message.debtToken !== undefined &&
      (obj.debtToken = message.debtToken
        ? Coin.toJSON(message.debtToken)
        : undefined);
    message.activeBiddingId !== undefined &&
      (obj.activeBiddingId = (
        message.activeBiddingId || Long.UZERO
      ).toString());
    if (message.biddingIds) {
      obj.biddingIds = message.biddingIds.map((e) =>
        e ? bidOwnerMapping.toJSON(e) : undefined
      );
    } else {
      obj.biddingIds = [];
    }
    message.collateralTokenAuctionPrice !== undefined &&
      (obj.collateralTokenAuctionPrice = message.collateralTokenAuctionPrice);
    message.collateralTokenOraclePrice !== undefined &&
      (obj.collateralTokenOraclePrice = message.collateralTokenOraclePrice);
    message.debtTokenOraclePrice !== undefined &&
      (obj.debtTokenOraclePrice = message.debtTokenOraclePrice);
    message.lockedVaultId !== undefined &&
      (obj.lockedVaultId = (message.lockedVaultId || Long.UZERO).toString());
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined &&
      (obj.endTime = message.endTime.toISOString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.auctionType !== undefined &&
      (obj.auctionType = message.auctionType);
    message.collateralAssetId !== undefined &&
      (obj.collateralAssetId = (
        message.collateralAssetId || Long.UZERO
      ).toString());
    message.debtAssetId !== undefined &&
      (obj.debtAssetId = (message.debtAssetId || Long.UZERO).toString());
    message.bonusAmount !== undefined &&
      (obj.bonusAmount = message.bonusAmount);
    message.collateralTokenInitialPrice !== undefined &&
      (obj.collateralTokenInitialPrice = message.collateralTokenInitialPrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Auction>, I>>(object: I): Auction {
    const message = createBaseAuction();
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.collateralToken =
      object.collateralToken !== undefined && object.collateralToken !== null
        ? Coin.fromPartial(object.collateralToken)
        : undefined;
    message.debtToken =
      object.debtToken !== undefined && object.debtToken !== null
        ? Coin.fromPartial(object.debtToken)
        : undefined;
    message.activeBiddingId =
      object.activeBiddingId !== undefined && object.activeBiddingId !== null
        ? Long.fromValue(object.activeBiddingId)
        : Long.UZERO;
    message.biddingIds =
      object.biddingIds?.map((e) => bidOwnerMapping.fromPartial(e)) || [];
    message.collateralTokenAuctionPrice =
      object.collateralTokenAuctionPrice ?? "";
    message.collateralTokenOraclePrice =
      object.collateralTokenOraclePrice ?? "";
    message.debtTokenOraclePrice = object.debtTokenOraclePrice ?? "";
    message.lockedVaultId =
      object.lockedVaultId !== undefined && object.lockedVaultId !== null
        ? Long.fromValue(object.lockedVaultId)
        : Long.UZERO;
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.auctionType = object.auctionType ?? false;
    message.collateralAssetId =
      object.collateralAssetId !== undefined &&
      object.collateralAssetId !== null
        ? Long.fromValue(object.collateralAssetId)
        : Long.UZERO;
    message.debtAssetId =
      object.debtAssetId !== undefined && object.debtAssetId !== null
        ? Long.fromValue(object.debtAssetId)
        : Long.UZERO;
    message.bonusAmount = object.bonusAmount ?? "";
    message.collateralTokenInitialPrice =
      object.collateralTokenInitialPrice ?? "";
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

function createBaseLimitBidProtocolData(): LimitBidProtocolData {
  return {
    collateralAssetId: Long.UZERO,
    debtAssetId: Long.UZERO,
    bidValue: "",
    maxDiscount: "",
  };
}

export const LimitBidProtocolData = {
  encode(
    message: LimitBidProtocolData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.collateralAssetId.isZero()) {
      writer.uint32(8).uint64(message.collateralAssetId);
    }
    if (!message.debtAssetId.isZero()) {
      writer.uint32(16).uint64(message.debtAssetId);
    }
    if (message.bidValue !== "") {
      writer.uint32(26).string(message.bidValue);
    }
    if (message.maxDiscount !== "") {
      writer.uint32(34).string(message.maxDiscount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LimitBidProtocolData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLimitBidProtocolData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralAssetId = reader.uint64() as Long;
          break;
        case 2:
          message.debtAssetId = reader.uint64() as Long;
          break;
        case 3:
          message.bidValue = reader.string();
          break;
        case 4:
          message.maxDiscount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LimitBidProtocolData {
    return {
      collateralAssetId: isSet(object.collateralAssetId)
        ? Long.fromValue(object.collateralAssetId)
        : Long.UZERO,
      debtAssetId: isSet(object.debtAssetId)
        ? Long.fromValue(object.debtAssetId)
        : Long.UZERO,
      bidValue: isSet(object.bidValue) ? String(object.bidValue) : "",
      maxDiscount: isSet(object.maxDiscount) ? String(object.maxDiscount) : "",
    };
  },

  toJSON(message: LimitBidProtocolData): unknown {
    const obj: any = {};
    message.collateralAssetId !== undefined &&
      (obj.collateralAssetId = (
        message.collateralAssetId || Long.UZERO
      ).toString());
    message.debtAssetId !== undefined &&
      (obj.debtAssetId = (message.debtAssetId || Long.UZERO).toString());
    message.bidValue !== undefined && (obj.bidValue = message.bidValue);
    message.maxDiscount !== undefined &&
      (obj.maxDiscount = message.maxDiscount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LimitBidProtocolData>, I>>(
    object: I
  ): LimitBidProtocolData {
    const message = createBaseLimitBidProtocolData();
    message.collateralAssetId =
      object.collateralAssetId !== undefined &&
      object.collateralAssetId !== null
        ? Long.fromValue(object.collateralAssetId)
        : Long.UZERO;
    message.debtAssetId =
      object.debtAssetId !== undefined && object.debtAssetId !== null
        ? Long.fromValue(object.debtAssetId)
        : Long.UZERO;
    message.bidValue = object.bidValue ?? "";
    message.maxDiscount = object.maxDiscount ?? "";
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
