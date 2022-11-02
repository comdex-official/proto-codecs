/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.lend.v1beta1";

export interface LendAsset {
  lendingId: Long;
  assetId: Long;
  poolId: Long;
  owner: string;
  amountIn?: Coin;
  lendingTime?: Date;
  availableToBorrow: string;
  appId: Long;
  globalIndex: string;
  lastInteractionTime?: Date;
  cpoolName: string;
}

export interface BorrowAsset {
  borrowingId: Long;
  lendingId: Long;
  isStableBorrow: boolean;
  pairId: Long;
  amountIn?: Coin;
  amountOut?: Coin;
  bridgedAssetAmount?: Coin;
  borrowingTime?: Date;
  stableBorrowRate: string;
  interestAccumulated: string;
  globalIndex: string;
  reserveGlobalIndex: string;
  lastInteractionTime?: Date;
  cpoolName: string;
  isLiquidated: boolean;
}

export interface Pool {
  poolId: Long;
  moduleName: string;
  cpoolName: string;
  reserveFunds: Long;
  assetData: AssetDataPoolMapping[];
}

export interface UserAssetLendBorrowMapping {
  owner: string;
  /** to check if poool id is needed */
  lendId: Long;
  poolId: Long;
  borrowId: Long[];
}

export interface AssetDataPoolMapping {
  assetId: Long;
  /** 1 for main_asset, 2 for 1st transit_asset, 3 for 2nd transit_asset */
  assetTransitType: Long;
  supplyCap: Long;
}

export interface ExtendedPair {
  id: Long;
  assetIn: Long;
  assetOut: Long;
  isInterPool: boolean;
  assetOutPoolId: Long;
  minUsdValueLeft: Long;
}

export interface AssetToPairMapping {
  poolId: Long;
  assetId: Long;
  pairId: Long[];
}

/** AssetStats */
export interface PoolAssetLBMapping {
  poolId: Long;
  assetId: Long;
  lendIds: Long[];
  borrowIds: Long[];
  totalBorrowed: string;
  totalStableBorrowed: string;
  totalLend: string;
  totalInterestAccumulated: string;
  lendApr: string;
  borrowApr: string;
  stableBorrowApr: string;
  utilisationRatio: string;
}

/** AssetRatesStats */
export interface AssetRatesParams {
  assetId: Long;
  uOptimal: string;
  base: string;
  slope1: string;
  slope2: string;
  enableStableBorrow: boolean;
  stableBase: string;
  stableSlope1: string;
  stableSlope2: string;
  ltv: string;
  liquidationThreshold: string;
  liquidationPenalty: string;
  liquidationBonus: string;
  reserveFactor: string;
  cAssetId: Long;
}

/** BalanceStats */
export interface ReserveBuybackAssetData {
  assetId: Long;
  reserveAmount: string;
  buybackAmount: string;
}

export interface AuctionParams {
  appId: Long;
  auctionDurationSeconds: Long;
  buffer: string;
  cusp: string;
  step: string;
  priceFunctionType: Long;
  dutchId: Long;
  bidDurationSeconds: Long;
}

export interface BorrowInterestTracker {
  borrowingId: Long;
  reservePoolInterest: string;
}

export interface LendRewardsTracker {
  lendingId: Long;
  rewardsAccumulated: string;
}

export interface ModuleBalance {
  poolId: Long;
  moduleBalanceStats: ModuleBalanceStats[];
}

export interface ModuleBalanceStats {
  assetId: Long;
  balance?: Coin;
}

function createBaseLendAsset(): LendAsset {
  return {
    lendingId: Long.UZERO,
    assetId: Long.UZERO,
    poolId: Long.UZERO,
    owner: "",
    amountIn: undefined,
    lendingTime: undefined,
    availableToBorrow: "",
    appId: Long.UZERO,
    globalIndex: "",
    lastInteractionTime: undefined,
    cpoolName: "",
  };
}

export const LendAsset = {
  encode(
    message: LendAsset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.lendingId.isZero()) {
      writer.uint32(8).uint64(message.lendingId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(42).fork()).ldelim();
    }
    if (message.lendingTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lendingTime),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.availableToBorrow !== "") {
      writer.uint32(58).string(message.availableToBorrow);
    }
    if (!message.appId.isZero()) {
      writer.uint32(64).uint64(message.appId);
    }
    if (message.globalIndex !== "") {
      writer.uint32(74).string(message.globalIndex);
    }
    if (message.lastInteractionTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastInteractionTime),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.cpoolName !== "") {
      writer.uint32(90).string(message.cpoolName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LendAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLendAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lendingId = reader.uint64() as Long;
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        case 3:
          message.poolId = reader.uint64() as Long;
          break;
        case 4:
          message.owner = reader.string();
          break;
        case 5:
          message.amountIn = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.lendingTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.availableToBorrow = reader.string();
          break;
        case 8:
          message.appId = reader.uint64() as Long;
          break;
        case 9:
          message.globalIndex = reader.string();
          break;
        case 10:
          message.lastInteractionTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.cpoolName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LendAsset {
    return {
      lendingId: isSet(object.lendingId)
        ? Long.fromValue(object.lendingId)
        : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      amountIn: isSet(object.amountIn)
        ? Coin.fromJSON(object.amountIn)
        : undefined,
      lendingTime: isSet(object.lendingTime)
        ? fromJsonTimestamp(object.lendingTime)
        : undefined,
      availableToBorrow: isSet(object.availableToBorrow)
        ? String(object.availableToBorrow)
        : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      globalIndex: isSet(object.globalIndex) ? String(object.globalIndex) : "",
      lastInteractionTime: isSet(object.lastInteractionTime)
        ? fromJsonTimestamp(object.lastInteractionTime)
        : undefined,
      cpoolName: isSet(object.cpoolName) ? String(object.cpoolName) : "",
    };
  },

  toJSON(message: LendAsset): unknown {
    const obj: any = {};
    message.lendingId !== undefined &&
      (obj.lendingId = (message.lendingId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.amountIn !== undefined &&
      (obj.amountIn = message.amountIn
        ? Coin.toJSON(message.amountIn)
        : undefined);
    message.lendingTime !== undefined &&
      (obj.lendingTime = message.lendingTime.toISOString());
    message.availableToBorrow !== undefined &&
      (obj.availableToBorrow = message.availableToBorrow);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.globalIndex !== undefined &&
      (obj.globalIndex = message.globalIndex);
    message.lastInteractionTime !== undefined &&
      (obj.lastInteractionTime = message.lastInteractionTime.toISOString());
    message.cpoolName !== undefined && (obj.cpoolName = message.cpoolName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LendAsset>, I>>(
    object: I
  ): LendAsset {
    const message = createBaseLendAsset();
    message.lendingId =
      object.lendingId !== undefined && object.lendingId !== null
        ? Long.fromValue(object.lendingId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.owner = object.owner ?? "";
    message.amountIn =
      object.amountIn !== undefined && object.amountIn !== null
        ? Coin.fromPartial(object.amountIn)
        : undefined;
    message.lendingTime = object.lendingTime ?? undefined;
    message.availableToBorrow = object.availableToBorrow ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.globalIndex = object.globalIndex ?? "";
    message.lastInteractionTime = object.lastInteractionTime ?? undefined;
    message.cpoolName = object.cpoolName ?? "";
    return message;
  },
};

function createBaseBorrowAsset(): BorrowAsset {
  return {
    borrowingId: Long.UZERO,
    lendingId: Long.UZERO,
    isStableBorrow: false,
    pairId: Long.UZERO,
    amountIn: undefined,
    amountOut: undefined,
    bridgedAssetAmount: undefined,
    borrowingTime: undefined,
    stableBorrowRate: "",
    interestAccumulated: "",
    globalIndex: "",
    reserveGlobalIndex: "",
    lastInteractionTime: undefined,
    cpoolName: "",
    isLiquidated: false,
  };
}

export const BorrowAsset = {
  encode(
    message: BorrowAsset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.borrowingId.isZero()) {
      writer.uint32(8).uint64(message.borrowingId);
    }
    if (!message.lendingId.isZero()) {
      writer.uint32(16).uint64(message.lendingId);
    }
    if (message.isStableBorrow === true) {
      writer.uint32(24).bool(message.isStableBorrow);
    }
    if (!message.pairId.isZero()) {
      writer.uint32(32).uint64(message.pairId);
    }
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(42).fork()).ldelim();
    }
    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(50).fork()).ldelim();
    }
    if (message.bridgedAssetAmount !== undefined) {
      Coin.encode(
        message.bridgedAssetAmount,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.borrowingTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.borrowingTime),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.stableBorrowRate !== "") {
      writer.uint32(74).string(message.stableBorrowRate);
    }
    if (message.interestAccumulated !== "") {
      writer.uint32(82).string(message.interestAccumulated);
    }
    if (message.globalIndex !== "") {
      writer.uint32(90).string(message.globalIndex);
    }
    if (message.reserveGlobalIndex !== "") {
      writer.uint32(98).string(message.reserveGlobalIndex);
    }
    if (message.lastInteractionTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastInteractionTime),
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.cpoolName !== "") {
      writer.uint32(114).string(message.cpoolName);
    }
    if (message.isLiquidated === true) {
      writer.uint32(120).bool(message.isLiquidated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BorrowAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBorrowAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.borrowingId = reader.uint64() as Long;
          break;
        case 2:
          message.lendingId = reader.uint64() as Long;
          break;
        case 3:
          message.isStableBorrow = reader.bool();
          break;
        case 4:
          message.pairId = reader.uint64() as Long;
          break;
        case 5:
          message.amountIn = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.amountOut = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.bridgedAssetAmount = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.borrowingTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.stableBorrowRate = reader.string();
          break;
        case 10:
          message.interestAccumulated = reader.string();
          break;
        case 11:
          message.globalIndex = reader.string();
          break;
        case 12:
          message.reserveGlobalIndex = reader.string();
          break;
        case 13:
          message.lastInteractionTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.cpoolName = reader.string();
          break;
        case 15:
          message.isLiquidated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BorrowAsset {
    return {
      borrowingId: isSet(object.borrowingId)
        ? Long.fromValue(object.borrowingId)
        : Long.UZERO,
      lendingId: isSet(object.lendingId)
        ? Long.fromValue(object.lendingId)
        : Long.UZERO,
      isStableBorrow: isSet(object.isStableBorrow)
        ? Boolean(object.isStableBorrow)
        : false,
      pairId: isSet(object.pairId) ? Long.fromValue(object.pairId) : Long.UZERO,
      amountIn: isSet(object.amountIn)
        ? Coin.fromJSON(object.amountIn)
        : undefined,
      amountOut: isSet(object.amountOut)
        ? Coin.fromJSON(object.amountOut)
        : undefined,
      bridgedAssetAmount: isSet(object.bridgedAssetAmount)
        ? Coin.fromJSON(object.bridgedAssetAmount)
        : undefined,
      borrowingTime: isSet(object.borrowingTime)
        ? fromJsonTimestamp(object.borrowingTime)
        : undefined,
      stableBorrowRate: isSet(object.stableBorrowRate)
        ? String(object.stableBorrowRate)
        : "",
      interestAccumulated: isSet(object.interestAccumulated)
        ? String(object.interestAccumulated)
        : "",
      globalIndex: isSet(object.globalIndex) ? String(object.globalIndex) : "",
      reserveGlobalIndex: isSet(object.reserveGlobalIndex)
        ? String(object.reserveGlobalIndex)
        : "",
      lastInteractionTime: isSet(object.lastInteractionTime)
        ? fromJsonTimestamp(object.lastInteractionTime)
        : undefined,
      cpoolName: isSet(object.cpoolName) ? String(object.cpoolName) : "",
      isLiquidated: isSet(object.isLiquidated)
        ? Boolean(object.isLiquidated)
        : false,
    };
  },

  toJSON(message: BorrowAsset): unknown {
    const obj: any = {};
    message.borrowingId !== undefined &&
      (obj.borrowingId = (message.borrowingId || Long.UZERO).toString());
    message.lendingId !== undefined &&
      (obj.lendingId = (message.lendingId || Long.UZERO).toString());
    message.isStableBorrow !== undefined &&
      (obj.isStableBorrow = message.isStableBorrow);
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.amountIn !== undefined &&
      (obj.amountIn = message.amountIn
        ? Coin.toJSON(message.amountIn)
        : undefined);
    message.amountOut !== undefined &&
      (obj.amountOut = message.amountOut
        ? Coin.toJSON(message.amountOut)
        : undefined);
    message.bridgedAssetAmount !== undefined &&
      (obj.bridgedAssetAmount = message.bridgedAssetAmount
        ? Coin.toJSON(message.bridgedAssetAmount)
        : undefined);
    message.borrowingTime !== undefined &&
      (obj.borrowingTime = message.borrowingTime.toISOString());
    message.stableBorrowRate !== undefined &&
      (obj.stableBorrowRate = message.stableBorrowRate);
    message.interestAccumulated !== undefined &&
      (obj.interestAccumulated = message.interestAccumulated);
    message.globalIndex !== undefined &&
      (obj.globalIndex = message.globalIndex);
    message.reserveGlobalIndex !== undefined &&
      (obj.reserveGlobalIndex = message.reserveGlobalIndex);
    message.lastInteractionTime !== undefined &&
      (obj.lastInteractionTime = message.lastInteractionTime.toISOString());
    message.cpoolName !== undefined && (obj.cpoolName = message.cpoolName);
    message.isLiquidated !== undefined &&
      (obj.isLiquidated = message.isLiquidated);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BorrowAsset>, I>>(
    object: I
  ): BorrowAsset {
    const message = createBaseBorrowAsset();
    message.borrowingId =
      object.borrowingId !== undefined && object.borrowingId !== null
        ? Long.fromValue(object.borrowingId)
        : Long.UZERO;
    message.lendingId =
      object.lendingId !== undefined && object.lendingId !== null
        ? Long.fromValue(object.lendingId)
        : Long.UZERO;
    message.isStableBorrow = object.isStableBorrow ?? false;
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.amountIn =
      object.amountIn !== undefined && object.amountIn !== null
        ? Coin.fromPartial(object.amountIn)
        : undefined;
    message.amountOut =
      object.amountOut !== undefined && object.amountOut !== null
        ? Coin.fromPartial(object.amountOut)
        : undefined;
    message.bridgedAssetAmount =
      object.bridgedAssetAmount !== undefined &&
      object.bridgedAssetAmount !== null
        ? Coin.fromPartial(object.bridgedAssetAmount)
        : undefined;
    message.borrowingTime = object.borrowingTime ?? undefined;
    message.stableBorrowRate = object.stableBorrowRate ?? "";
    message.interestAccumulated = object.interestAccumulated ?? "";
    message.globalIndex = object.globalIndex ?? "";
    message.reserveGlobalIndex = object.reserveGlobalIndex ?? "";
    message.lastInteractionTime = object.lastInteractionTime ?? undefined;
    message.cpoolName = object.cpoolName ?? "";
    message.isLiquidated = object.isLiquidated ?? false;
    return message;
  },
};

function createBasePool(): Pool {
  return {
    poolId: Long.UZERO,
    moduleName: "",
    cpoolName: "",
    reserveFunds: Long.UZERO,
    assetData: [],
  };
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.moduleName !== "") {
      writer.uint32(18).string(message.moduleName);
    }
    if (message.cpoolName !== "") {
      writer.uint32(26).string(message.cpoolName);
    }
    if (!message.reserveFunds.isZero()) {
      writer.uint32(32).uint64(message.reserveFunds);
    }
    for (const v of message.assetData) {
      AssetDataPoolMapping.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.moduleName = reader.string();
          break;
        case 3:
          message.cpoolName = reader.string();
          break;
        case 4:
          message.reserveFunds = reader.uint64() as Long;
          break;
        case 5:
          message.assetData.push(
            AssetDataPoolMapping.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pool {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
      cpoolName: isSet(object.cpoolName) ? String(object.cpoolName) : "",
      reserveFunds: isSet(object.reserveFunds)
        ? Long.fromValue(object.reserveFunds)
        : Long.UZERO,
      assetData: Array.isArray(object?.assetData)
        ? object.assetData.map((e: any) => AssetDataPoolMapping.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.cpoolName !== undefined && (obj.cpoolName = message.cpoolName);
    message.reserveFunds !== undefined &&
      (obj.reserveFunds = (message.reserveFunds || Long.UZERO).toString());
    if (message.assetData) {
      obj.assetData = message.assetData.map((e) =>
        e ? AssetDataPoolMapping.toJSON(e) : undefined
      );
    } else {
      obj.assetData = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = createBasePool();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.moduleName = object.moduleName ?? "";
    message.cpoolName = object.cpoolName ?? "";
    message.reserveFunds =
      object.reserveFunds !== undefined && object.reserveFunds !== null
        ? Long.fromValue(object.reserveFunds)
        : Long.UZERO;
    message.assetData =
      object.assetData?.map((e) => AssetDataPoolMapping.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUserAssetLendBorrowMapping(): UserAssetLendBorrowMapping {
  return { owner: "", lendId: Long.UZERO, poolId: Long.UZERO, borrowId: [] };
}

export const UserAssetLendBorrowMapping = {
  encode(
    message: UserAssetLendBorrowMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.lendId.isZero()) {
      writer.uint32(16).uint64(message.lendId);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(24).uint64(message.poolId);
    }
    writer.uint32(34).fork();
    for (const v of message.borrowId) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UserAssetLendBorrowMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserAssetLendBorrowMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.lendId = reader.uint64() as Long;
          break;
        case 3:
          message.poolId = reader.uint64() as Long;
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.borrowId.push(reader.uint64() as Long);
            }
          } else {
            message.borrowId.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserAssetLendBorrowMapping {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      lendId: isSet(object.lendId) ? Long.fromValue(object.lendId) : Long.UZERO,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      borrowId: Array.isArray(object?.borrowId)
        ? object.borrowId.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: UserAssetLendBorrowMapping): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.lendId !== undefined &&
      (obj.lendId = (message.lendId || Long.UZERO).toString());
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.borrowId) {
      obj.borrowId = message.borrowId.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.borrowId = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserAssetLendBorrowMapping>, I>>(
    object: I
  ): UserAssetLendBorrowMapping {
    const message = createBaseUserAssetLendBorrowMapping();
    message.owner = object.owner ?? "";
    message.lendId =
      object.lendId !== undefined && object.lendId !== null
        ? Long.fromValue(object.lendId)
        : Long.UZERO;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.borrowId = object.borrowId?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseAssetDataPoolMapping(): AssetDataPoolMapping {
  return {
    assetId: Long.UZERO,
    assetTransitType: Long.UZERO,
    supplyCap: Long.UZERO,
  };
}

export const AssetDataPoolMapping = {
  encode(
    message: AssetDataPoolMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.assetId.isZero()) {
      writer.uint32(8).uint64(message.assetId);
    }
    if (!message.assetTransitType.isZero()) {
      writer.uint32(16).uint64(message.assetTransitType);
    }
    if (!message.supplyCap.isZero()) {
      writer.uint32(24).uint64(message.supplyCap);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AssetDataPoolMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetDataPoolMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.uint64() as Long;
          break;
        case 2:
          message.assetTransitType = reader.uint64() as Long;
          break;
        case 3:
          message.supplyCap = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetDataPoolMapping {
    return {
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      assetTransitType: isSet(object.assetTransitType)
        ? Long.fromValue(object.assetTransitType)
        : Long.UZERO,
      supplyCap: isSet(object.supplyCap)
        ? Long.fromValue(object.supplyCap)
        : Long.UZERO,
    };
  },

  toJSON(message: AssetDataPoolMapping): unknown {
    const obj: any = {};
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.assetTransitType !== undefined &&
      (obj.assetTransitType = (
        message.assetTransitType || Long.UZERO
      ).toString());
    message.supplyCap !== undefined &&
      (obj.supplyCap = (message.supplyCap || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetDataPoolMapping>, I>>(
    object: I
  ): AssetDataPoolMapping {
    const message = createBaseAssetDataPoolMapping();
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.assetTransitType =
      object.assetTransitType !== undefined && object.assetTransitType !== null
        ? Long.fromValue(object.assetTransitType)
        : Long.UZERO;
    message.supplyCap =
      object.supplyCap !== undefined && object.supplyCap !== null
        ? Long.fromValue(object.supplyCap)
        : Long.UZERO;
    return message;
  },
};

function createBaseExtendedPair(): ExtendedPair {
  return {
    id: Long.UZERO,
    assetIn: Long.UZERO,
    assetOut: Long.UZERO,
    isInterPool: false,
    assetOutPoolId: Long.UZERO,
    minUsdValueLeft: Long.UZERO,
  };
}

export const ExtendedPair = {
  encode(
    message: ExtendedPair,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.assetIn.isZero()) {
      writer.uint32(16).uint64(message.assetIn);
    }
    if (!message.assetOut.isZero()) {
      writer.uint32(24).uint64(message.assetOut);
    }
    if (message.isInterPool === true) {
      writer.uint32(32).bool(message.isInterPool);
    }
    if (!message.assetOutPoolId.isZero()) {
      writer.uint32(40).uint64(message.assetOutPoolId);
    }
    if (!message.minUsdValueLeft.isZero()) {
      writer.uint32(48).uint64(message.minUsdValueLeft);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.assetIn = reader.uint64() as Long;
          break;
        case 3:
          message.assetOut = reader.uint64() as Long;
          break;
        case 4:
          message.isInterPool = reader.bool();
          break;
        case 5:
          message.assetOutPoolId = reader.uint64() as Long;
          break;
        case 6:
          message.minUsdValueLeft = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExtendedPair {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      assetIn: isSet(object.assetIn)
        ? Long.fromValue(object.assetIn)
        : Long.UZERO,
      assetOut: isSet(object.assetOut)
        ? Long.fromValue(object.assetOut)
        : Long.UZERO,
      isInterPool: isSet(object.isInterPool)
        ? Boolean(object.isInterPool)
        : false,
      assetOutPoolId: isSet(object.assetOutPoolId)
        ? Long.fromValue(object.assetOutPoolId)
        : Long.UZERO,
      minUsdValueLeft: isSet(object.minUsdValueLeft)
        ? Long.fromValue(object.minUsdValueLeft)
        : Long.UZERO,
    };
  },

  toJSON(message: ExtendedPair): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.assetIn !== undefined &&
      (obj.assetIn = (message.assetIn || Long.UZERO).toString());
    message.assetOut !== undefined &&
      (obj.assetOut = (message.assetOut || Long.UZERO).toString());
    message.isInterPool !== undefined &&
      (obj.isInterPool = message.isInterPool);
    message.assetOutPoolId !== undefined &&
      (obj.assetOutPoolId = (message.assetOutPoolId || Long.UZERO).toString());
    message.minUsdValueLeft !== undefined &&
      (obj.minUsdValueLeft = (
        message.minUsdValueLeft || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExtendedPair>, I>>(
    object: I
  ): ExtendedPair {
    const message = createBaseExtendedPair();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.assetIn =
      object.assetIn !== undefined && object.assetIn !== null
        ? Long.fromValue(object.assetIn)
        : Long.UZERO;
    message.assetOut =
      object.assetOut !== undefined && object.assetOut !== null
        ? Long.fromValue(object.assetOut)
        : Long.UZERO;
    message.isInterPool = object.isInterPool ?? false;
    message.assetOutPoolId =
      object.assetOutPoolId !== undefined && object.assetOutPoolId !== null
        ? Long.fromValue(object.assetOutPoolId)
        : Long.UZERO;
    message.minUsdValueLeft =
      object.minUsdValueLeft !== undefined && object.minUsdValueLeft !== null
        ? Long.fromValue(object.minUsdValueLeft)
        : Long.UZERO;
    return message;
  },
};

function createBaseAssetToPairMapping(): AssetToPairMapping {
  return { poolId: Long.UZERO, assetId: Long.UZERO, pairId: [] };
}

export const AssetToPairMapping = {
  encode(
    message: AssetToPairMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    writer.uint32(26).fork();
    for (const v of message.pairId) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetToPairMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetToPairMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pairId.push(reader.uint64() as Long);
            }
          } else {
            message.pairId.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetToPairMapping {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      pairId: Array.isArray(object?.pairId)
        ? object.pairId.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: AssetToPairMapping): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    if (message.pairId) {
      obj.pairId = message.pairId.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.pairId = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetToPairMapping>, I>>(
    object: I
  ): AssetToPairMapping {
    const message = createBaseAssetToPairMapping();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.pairId = object.pairId?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBasePoolAssetLBMapping(): PoolAssetLBMapping {
  return {
    poolId: Long.UZERO,
    assetId: Long.UZERO,
    lendIds: [],
    borrowIds: [],
    totalBorrowed: "",
    totalStableBorrowed: "",
    totalLend: "",
    totalInterestAccumulated: "",
    lendApr: "",
    borrowApr: "",
    stableBorrowApr: "",
    utilisationRatio: "",
  };
}

export const PoolAssetLBMapping = {
  encode(
    message: PoolAssetLBMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    writer.uint32(26).fork();
    for (const v of message.lendIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.borrowIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.totalBorrowed !== "") {
      writer.uint32(42).string(message.totalBorrowed);
    }
    if (message.totalStableBorrowed !== "") {
      writer.uint32(50).string(message.totalStableBorrowed);
    }
    if (message.totalLend !== "") {
      writer.uint32(58).string(message.totalLend);
    }
    if (message.totalInterestAccumulated !== "") {
      writer.uint32(66).string(message.totalInterestAccumulated);
    }
    if (message.lendApr !== "") {
      writer.uint32(74).string(message.lendApr);
    }
    if (message.borrowApr !== "") {
      writer.uint32(82).string(message.borrowApr);
    }
    if (message.stableBorrowApr !== "") {
      writer.uint32(90).string(message.stableBorrowApr);
    }
    if (message.utilisationRatio !== "") {
      writer.uint32(98).string(message.utilisationRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolAssetLBMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolAssetLBMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lendIds.push(reader.uint64() as Long);
            }
          } else {
            message.lendIds.push(reader.uint64() as Long);
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.borrowIds.push(reader.uint64() as Long);
            }
          } else {
            message.borrowIds.push(reader.uint64() as Long);
          }
          break;
        case 5:
          message.totalBorrowed = reader.string();
          break;
        case 6:
          message.totalStableBorrowed = reader.string();
          break;
        case 7:
          message.totalLend = reader.string();
          break;
        case 8:
          message.totalInterestAccumulated = reader.string();
          break;
        case 9:
          message.lendApr = reader.string();
          break;
        case 10:
          message.borrowApr = reader.string();
          break;
        case 11:
          message.stableBorrowApr = reader.string();
          break;
        case 12:
          message.utilisationRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolAssetLBMapping {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      lendIds: Array.isArray(object?.lendIds)
        ? object.lendIds.map((e: any) => Long.fromValue(e))
        : [],
      borrowIds: Array.isArray(object?.borrowIds)
        ? object.borrowIds.map((e: any) => Long.fromValue(e))
        : [],
      totalBorrowed: isSet(object.totalBorrowed)
        ? String(object.totalBorrowed)
        : "",
      totalStableBorrowed: isSet(object.totalStableBorrowed)
        ? String(object.totalStableBorrowed)
        : "",
      totalLend: isSet(object.totalLend) ? String(object.totalLend) : "",
      totalInterestAccumulated: isSet(object.totalInterestAccumulated)
        ? String(object.totalInterestAccumulated)
        : "",
      lendApr: isSet(object.lendApr) ? String(object.lendApr) : "",
      borrowApr: isSet(object.borrowApr) ? String(object.borrowApr) : "",
      stableBorrowApr: isSet(object.stableBorrowApr)
        ? String(object.stableBorrowApr)
        : "",
      utilisationRatio: isSet(object.utilisationRatio)
        ? String(object.utilisationRatio)
        : "",
    };
  },

  toJSON(message: PoolAssetLBMapping): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    if (message.lendIds) {
      obj.lendIds = message.lendIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.lendIds = [];
    }
    if (message.borrowIds) {
      obj.borrowIds = message.borrowIds.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.borrowIds = [];
    }
    message.totalBorrowed !== undefined &&
      (obj.totalBorrowed = message.totalBorrowed);
    message.totalStableBorrowed !== undefined &&
      (obj.totalStableBorrowed = message.totalStableBorrowed);
    message.totalLend !== undefined && (obj.totalLend = message.totalLend);
    message.totalInterestAccumulated !== undefined &&
      (obj.totalInterestAccumulated = message.totalInterestAccumulated);
    message.lendApr !== undefined && (obj.lendApr = message.lendApr);
    message.borrowApr !== undefined && (obj.borrowApr = message.borrowApr);
    message.stableBorrowApr !== undefined &&
      (obj.stableBorrowApr = message.stableBorrowApr);
    message.utilisationRatio !== undefined &&
      (obj.utilisationRatio = message.utilisationRatio);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolAssetLBMapping>, I>>(
    object: I
  ): PoolAssetLBMapping {
    const message = createBasePoolAssetLBMapping();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.lendIds = object.lendIds?.map((e) => Long.fromValue(e)) || [];
    message.borrowIds = object.borrowIds?.map((e) => Long.fromValue(e)) || [];
    message.totalBorrowed = object.totalBorrowed ?? "";
    message.totalStableBorrowed = object.totalStableBorrowed ?? "";
    message.totalLend = object.totalLend ?? "";
    message.totalInterestAccumulated = object.totalInterestAccumulated ?? "";
    message.lendApr = object.lendApr ?? "";
    message.borrowApr = object.borrowApr ?? "";
    message.stableBorrowApr = object.stableBorrowApr ?? "";
    message.utilisationRatio = object.utilisationRatio ?? "";
    return message;
  },
};

function createBaseAssetRatesParams(): AssetRatesParams {
  return {
    assetId: Long.UZERO,
    uOptimal: "",
    base: "",
    slope1: "",
    slope2: "",
    enableStableBorrow: false,
    stableBase: "",
    stableSlope1: "",
    stableSlope2: "",
    ltv: "",
    liquidationThreshold: "",
    liquidationPenalty: "",
    liquidationBonus: "",
    reserveFactor: "",
    cAssetId: Long.UZERO,
  };
}

export const AssetRatesParams = {
  encode(
    message: AssetRatesParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.assetId.isZero()) {
      writer.uint32(8).uint64(message.assetId);
    }
    if (message.uOptimal !== "") {
      writer.uint32(18).string(message.uOptimal);
    }
    if (message.base !== "") {
      writer.uint32(26).string(message.base);
    }
    if (message.slope1 !== "") {
      writer.uint32(34).string(message.slope1);
    }
    if (message.slope2 !== "") {
      writer.uint32(42).string(message.slope2);
    }
    if (message.enableStableBorrow === true) {
      writer.uint32(48).bool(message.enableStableBorrow);
    }
    if (message.stableBase !== "") {
      writer.uint32(58).string(message.stableBase);
    }
    if (message.stableSlope1 !== "") {
      writer.uint32(66).string(message.stableSlope1);
    }
    if (message.stableSlope2 !== "") {
      writer.uint32(74).string(message.stableSlope2);
    }
    if (message.ltv !== "") {
      writer.uint32(82).string(message.ltv);
    }
    if (message.liquidationThreshold !== "") {
      writer.uint32(90).string(message.liquidationThreshold);
    }
    if (message.liquidationPenalty !== "") {
      writer.uint32(98).string(message.liquidationPenalty);
    }
    if (message.liquidationBonus !== "") {
      writer.uint32(106).string(message.liquidationBonus);
    }
    if (message.reserveFactor !== "") {
      writer.uint32(114).string(message.reserveFactor);
    }
    if (!message.cAssetId.isZero()) {
      writer.uint32(120).uint64(message.cAssetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetRatesParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetRatesParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.uint64() as Long;
          break;
        case 2:
          message.uOptimal = reader.string();
          break;
        case 3:
          message.base = reader.string();
          break;
        case 4:
          message.slope1 = reader.string();
          break;
        case 5:
          message.slope2 = reader.string();
          break;
        case 6:
          message.enableStableBorrow = reader.bool();
          break;
        case 7:
          message.stableBase = reader.string();
          break;
        case 8:
          message.stableSlope1 = reader.string();
          break;
        case 9:
          message.stableSlope2 = reader.string();
          break;
        case 10:
          message.ltv = reader.string();
          break;
        case 11:
          message.liquidationThreshold = reader.string();
          break;
        case 12:
          message.liquidationPenalty = reader.string();
          break;
        case 13:
          message.liquidationBonus = reader.string();
          break;
        case 14:
          message.reserveFactor = reader.string();
          break;
        case 15:
          message.cAssetId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetRatesParams {
    return {
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      uOptimal: isSet(object.uOptimal) ? String(object.uOptimal) : "",
      base: isSet(object.base) ? String(object.base) : "",
      slope1: isSet(object.slope1) ? String(object.slope1) : "",
      slope2: isSet(object.slope2) ? String(object.slope2) : "",
      enableStableBorrow: isSet(object.enableStableBorrow)
        ? Boolean(object.enableStableBorrow)
        : false,
      stableBase: isSet(object.stableBase) ? String(object.stableBase) : "",
      stableSlope1: isSet(object.stableSlope1)
        ? String(object.stableSlope1)
        : "",
      stableSlope2: isSet(object.stableSlope2)
        ? String(object.stableSlope2)
        : "",
      ltv: isSet(object.ltv) ? String(object.ltv) : "",
      liquidationThreshold: isSet(object.liquidationThreshold)
        ? String(object.liquidationThreshold)
        : "",
      liquidationPenalty: isSet(object.liquidationPenalty)
        ? String(object.liquidationPenalty)
        : "",
      liquidationBonus: isSet(object.liquidationBonus)
        ? String(object.liquidationBonus)
        : "",
      reserveFactor: isSet(object.reserveFactor)
        ? String(object.reserveFactor)
        : "",
      cAssetId: isSet(object.cAssetId)
        ? Long.fromValue(object.cAssetId)
        : Long.UZERO,
    };
  },

  toJSON(message: AssetRatesParams): unknown {
    const obj: any = {};
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.uOptimal !== undefined && (obj.uOptimal = message.uOptimal);
    message.base !== undefined && (obj.base = message.base);
    message.slope1 !== undefined && (obj.slope1 = message.slope1);
    message.slope2 !== undefined && (obj.slope2 = message.slope2);
    message.enableStableBorrow !== undefined &&
      (obj.enableStableBorrow = message.enableStableBorrow);
    message.stableBase !== undefined && (obj.stableBase = message.stableBase);
    message.stableSlope1 !== undefined &&
      (obj.stableSlope1 = message.stableSlope1);
    message.stableSlope2 !== undefined &&
      (obj.stableSlope2 = message.stableSlope2);
    message.ltv !== undefined && (obj.ltv = message.ltv);
    message.liquidationThreshold !== undefined &&
      (obj.liquidationThreshold = message.liquidationThreshold);
    message.liquidationPenalty !== undefined &&
      (obj.liquidationPenalty = message.liquidationPenalty);
    message.liquidationBonus !== undefined &&
      (obj.liquidationBonus = message.liquidationBonus);
    message.reserveFactor !== undefined &&
      (obj.reserveFactor = message.reserveFactor);
    message.cAssetId !== undefined &&
      (obj.cAssetId = (message.cAssetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetRatesParams>, I>>(
    object: I
  ): AssetRatesParams {
    const message = createBaseAssetRatesParams();
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.uOptimal = object.uOptimal ?? "";
    message.base = object.base ?? "";
    message.slope1 = object.slope1 ?? "";
    message.slope2 = object.slope2 ?? "";
    message.enableStableBorrow = object.enableStableBorrow ?? false;
    message.stableBase = object.stableBase ?? "";
    message.stableSlope1 = object.stableSlope1 ?? "";
    message.stableSlope2 = object.stableSlope2 ?? "";
    message.ltv = object.ltv ?? "";
    message.liquidationThreshold = object.liquidationThreshold ?? "";
    message.liquidationPenalty = object.liquidationPenalty ?? "";
    message.liquidationBonus = object.liquidationBonus ?? "";
    message.reserveFactor = object.reserveFactor ?? "";
    message.cAssetId =
      object.cAssetId !== undefined && object.cAssetId !== null
        ? Long.fromValue(object.cAssetId)
        : Long.UZERO;
    return message;
  },
};

function createBaseReserveBuybackAssetData(): ReserveBuybackAssetData {
  return { assetId: Long.UZERO, reserveAmount: "", buybackAmount: "" };
}

export const ReserveBuybackAssetData = {
  encode(
    message: ReserveBuybackAssetData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.assetId.isZero()) {
      writer.uint32(8).uint64(message.assetId);
    }
    if (message.reserveAmount !== "") {
      writer.uint32(18).string(message.reserveAmount);
    }
    if (message.buybackAmount !== "") {
      writer.uint32(26).string(message.buybackAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ReserveBuybackAssetData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReserveBuybackAssetData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.uint64() as Long;
          break;
        case 2:
          message.reserveAmount = reader.string();
          break;
        case 3:
          message.buybackAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReserveBuybackAssetData {
    return {
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      reserveAmount: isSet(object.reserveAmount)
        ? String(object.reserveAmount)
        : "",
      buybackAmount: isSet(object.buybackAmount)
        ? String(object.buybackAmount)
        : "",
    };
  },

  toJSON(message: ReserveBuybackAssetData): unknown {
    const obj: any = {};
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.reserveAmount !== undefined &&
      (obj.reserveAmount = message.reserveAmount);
    message.buybackAmount !== undefined &&
      (obj.buybackAmount = message.buybackAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReserveBuybackAssetData>, I>>(
    object: I
  ): ReserveBuybackAssetData {
    const message = createBaseReserveBuybackAssetData();
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.reserveAmount = object.reserveAmount ?? "";
    message.buybackAmount = object.buybackAmount ?? "";
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
    if (!message.dutchId.isZero()) {
      writer.uint32(56).uint64(message.dutchId);
    }
    if (!message.bidDurationSeconds.isZero()) {
      writer.uint32(64).uint64(message.bidDurationSeconds);
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
          message.dutchId = reader.uint64() as Long;
          break;
        case 8:
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

function createBaseBorrowInterestTracker(): BorrowInterestTracker {
  return { borrowingId: Long.UZERO, reservePoolInterest: "" };
}

export const BorrowInterestTracker = {
  encode(
    message: BorrowInterestTracker,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.borrowingId.isZero()) {
      writer.uint32(8).uint64(message.borrowingId);
    }
    if (message.reservePoolInterest !== "") {
      writer.uint32(26).string(message.reservePoolInterest);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BorrowInterestTracker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBorrowInterestTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.borrowingId = reader.uint64() as Long;
          break;
        case 3:
          message.reservePoolInterest = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BorrowInterestTracker {
    return {
      borrowingId: isSet(object.borrowingId)
        ? Long.fromValue(object.borrowingId)
        : Long.UZERO,
      reservePoolInterest: isSet(object.reservePoolInterest)
        ? String(object.reservePoolInterest)
        : "",
    };
  },

  toJSON(message: BorrowInterestTracker): unknown {
    const obj: any = {};
    message.borrowingId !== undefined &&
      (obj.borrowingId = (message.borrowingId || Long.UZERO).toString());
    message.reservePoolInterest !== undefined &&
      (obj.reservePoolInterest = message.reservePoolInterest);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BorrowInterestTracker>, I>>(
    object: I
  ): BorrowInterestTracker {
    const message = createBaseBorrowInterestTracker();
    message.borrowingId =
      object.borrowingId !== undefined && object.borrowingId !== null
        ? Long.fromValue(object.borrowingId)
        : Long.UZERO;
    message.reservePoolInterest = object.reservePoolInterest ?? "";
    return message;
  },
};

function createBaseLendRewardsTracker(): LendRewardsTracker {
  return { lendingId: Long.UZERO, rewardsAccumulated: "" };
}

export const LendRewardsTracker = {
  encode(
    message: LendRewardsTracker,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.lendingId.isZero()) {
      writer.uint32(8).uint64(message.lendingId);
    }
    if (message.rewardsAccumulated !== "") {
      writer.uint32(18).string(message.rewardsAccumulated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LendRewardsTracker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLendRewardsTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lendingId = reader.uint64() as Long;
          break;
        case 2:
          message.rewardsAccumulated = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LendRewardsTracker {
    return {
      lendingId: isSet(object.lendingId)
        ? Long.fromValue(object.lendingId)
        : Long.UZERO,
      rewardsAccumulated: isSet(object.rewardsAccumulated)
        ? String(object.rewardsAccumulated)
        : "",
    };
  },

  toJSON(message: LendRewardsTracker): unknown {
    const obj: any = {};
    message.lendingId !== undefined &&
      (obj.lendingId = (message.lendingId || Long.UZERO).toString());
    message.rewardsAccumulated !== undefined &&
      (obj.rewardsAccumulated = message.rewardsAccumulated);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LendRewardsTracker>, I>>(
    object: I
  ): LendRewardsTracker {
    const message = createBaseLendRewardsTracker();
    message.lendingId =
      object.lendingId !== undefined && object.lendingId !== null
        ? Long.fromValue(object.lendingId)
        : Long.UZERO;
    message.rewardsAccumulated = object.rewardsAccumulated ?? "";
    return message;
  },
};

function createBaseModuleBalance(): ModuleBalance {
  return { poolId: Long.UZERO, moduleBalanceStats: [] };
}

export const ModuleBalance = {
  encode(
    message: ModuleBalance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.moduleBalanceStats) {
      ModuleBalanceStats.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.moduleBalanceStats.push(
            ModuleBalanceStats.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModuleBalance {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      moduleBalanceStats: Array.isArray(object?.moduleBalanceStats)
        ? object.moduleBalanceStats.map((e: any) =>
            ModuleBalanceStats.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: ModuleBalance): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.moduleBalanceStats) {
      obj.moduleBalanceStats = message.moduleBalanceStats.map((e) =>
        e ? ModuleBalanceStats.toJSON(e) : undefined
      );
    } else {
      obj.moduleBalanceStats = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModuleBalance>, I>>(
    object: I
  ): ModuleBalance {
    const message = createBaseModuleBalance();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.moduleBalanceStats =
      object.moduleBalanceStats?.map((e) =>
        ModuleBalanceStats.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseModuleBalanceStats(): ModuleBalanceStats {
  return { assetId: Long.UZERO, balance: undefined };
}

export const ModuleBalanceStats = {
  encode(
    message: ModuleBalanceStats,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.assetId.isZero()) {
      writer.uint32(8).uint64(message.assetId);
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleBalanceStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleBalanceStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.uint64() as Long;
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModuleBalanceStats {
    return {
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      balance: isSet(object.balance)
        ? Coin.fromJSON(object.balance)
        : undefined,
    };
  },

  toJSON(message: ModuleBalanceStats): unknown {
    const obj: any = {};
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.balance !== undefined &&
      (obj.balance = message.balance
        ? Coin.toJSON(message.balance)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModuleBalanceStats>, I>>(
    object: I
  ): ModuleBalanceStats {
    const message = createBaseModuleBalanceStats();
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? Coin.fromPartial(object.balance)
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
