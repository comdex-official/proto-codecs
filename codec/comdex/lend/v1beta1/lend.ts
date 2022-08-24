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
  updatedAmountIn: string;
  availableToBorrow: string;
  rewardAccumulated: string;
  appId: Long;
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
  updatedAmountOut: string;
  interestAccumulated: string;
  cpoolName: string;
}

export interface Pool {
  poolId: Long;
  moduleName: string;
  mainAssetId: Long;
  firstBridgedAssetId: Long;
  secondBridgedAssetId: Long;
  cpoolName: string;
  reserveFunds: Long;
  assetData: AssetDataPoolMapping[];
}

export interface AssetDataPoolMapping {
  assetId: Long;
  isBridged: boolean;
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
  assetId: Long;
  poolId: Long;
  pairId: Long[];
}

export interface UserLendIdMapping {
  owner: string;
  lendIds: Long[];
}

export interface LendIdByOwnerAndPoolMapping {
  owner: string;
  poolId: Long;
  lendIds: Long[];
}

export interface BorrowIdByOwnerAndPoolMapping {
  owner: string;
  poolId: Long;
  borrowIds: Long[];
}

export interface UserBorrowIdMapping {
  owner: string;
  borrowIds: Long[];
}

export interface LendIdToBorrowIdMapping {
  lendingId: Long;
  borrowingId: Long[];
}

export interface AssetStats {
  poolId: Long;
  assetId: Long;
  totalBorrowed: string;
  totalStableBorrowed: string;
  totalLend: string;
  lendApr: string;
  borrowApr: string;
  stableBorrowApr: string;
  utilisationRatio: string;
}

export interface AssetRatesStats {
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

export interface LendMapping {
  lendIds: Long[];
}

export interface BorrowMapping {
  borrowIds: Long[];
}

export interface StableBorrowMapping {
  stableBorrowIds: Long[];
}

export interface ModuleBalance {
  poolId: Long;
  moduleBalanceStats: ModuleBalanceStats[];
}

export interface ModuleBalanceStats {
  assetId: Long;
  balance?: Coin;
}

export interface BalanceStats {
  assetId: Long;
  amount: string;
}

export interface DepositStats {
  balanceStats: BalanceStats[];
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

export interface ReservePoolRecordsForBorrow {
  borrowingId: Long;
  interestAccumulated: string;
}

export interface BorrowInterestTracker {
  borrowingId: Long;
  interestAccumulated: string;
}

export interface LendRewardsTracker {
  lendingId: Long;
  rewardsAccumulated: string;
}

export interface AssetRanking {
  assetId: Long;
  apr: string;
  amount: string;
}

export interface BorrowRanking {
  first?: AssetRanking;
  second?: AssetRanking;
  third?: AssetRanking;
}

export interface DepositRanking {
  first?: AssetRanking;
  second?: AssetRanking;
  third?: AssetRanking;
}

function createBaseLendAsset(): LendAsset {
  return {
    lendingId: Long.UZERO,
    assetId: Long.UZERO,
    poolId: Long.UZERO,
    owner: "",
    amountIn: undefined,
    lendingTime: undefined,
    updatedAmountIn: "",
    availableToBorrow: "",
    rewardAccumulated: "",
    appId: Long.UZERO,
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
    if (message.updatedAmountIn !== "") {
      writer.uint32(58).string(message.updatedAmountIn);
    }
    if (message.availableToBorrow !== "") {
      writer.uint32(66).string(message.availableToBorrow);
    }
    if (message.rewardAccumulated !== "") {
      writer.uint32(74).string(message.rewardAccumulated);
    }
    if (!message.appId.isZero()) {
      writer.uint32(80).uint64(message.appId);
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
          message.updatedAmountIn = reader.string();
          break;
        case 8:
          message.availableToBorrow = reader.string();
          break;
        case 9:
          message.rewardAccumulated = reader.string();
          break;
        case 10:
          message.appId = reader.uint64() as Long;
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
      updatedAmountIn: isSet(object.updatedAmountIn)
        ? String(object.updatedAmountIn)
        : "",
      availableToBorrow: isSet(object.availableToBorrow)
        ? String(object.availableToBorrow)
        : "",
      rewardAccumulated: isSet(object.rewardAccumulated)
        ? String(object.rewardAccumulated)
        : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
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
    message.updatedAmountIn !== undefined &&
      (obj.updatedAmountIn = message.updatedAmountIn);
    message.availableToBorrow !== undefined &&
      (obj.availableToBorrow = message.availableToBorrow);
    message.rewardAccumulated !== undefined &&
      (obj.rewardAccumulated = message.rewardAccumulated);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
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
    message.updatedAmountIn = object.updatedAmountIn ?? "";
    message.availableToBorrow = object.availableToBorrow ?? "";
    message.rewardAccumulated = object.rewardAccumulated ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
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
    updatedAmountOut: "",
    interestAccumulated: "",
    cpoolName: "",
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
    if (message.updatedAmountOut !== "") {
      writer.uint32(82).string(message.updatedAmountOut);
    }
    if (message.interestAccumulated !== "") {
      writer.uint32(90).string(message.interestAccumulated);
    }
    if (message.cpoolName !== "") {
      writer.uint32(98).string(message.cpoolName);
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
          message.updatedAmountOut = reader.string();
          break;
        case 11:
          message.interestAccumulated = reader.string();
          break;
        case 12:
          message.cpoolName = reader.string();
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
      updatedAmountOut: isSet(object.updatedAmountOut)
        ? String(object.updatedAmountOut)
        : "",
      interestAccumulated: isSet(object.interestAccumulated)
        ? String(object.interestAccumulated)
        : "",
      cpoolName: isSet(object.cpoolName) ? String(object.cpoolName) : "",
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
    message.updatedAmountOut !== undefined &&
      (obj.updatedAmountOut = message.updatedAmountOut);
    message.interestAccumulated !== undefined &&
      (obj.interestAccumulated = message.interestAccumulated);
    message.cpoolName !== undefined && (obj.cpoolName = message.cpoolName);
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
    message.updatedAmountOut = object.updatedAmountOut ?? "";
    message.interestAccumulated = object.interestAccumulated ?? "";
    message.cpoolName = object.cpoolName ?? "";
    return message;
  },
};

function createBasePool(): Pool {
  return {
    poolId: Long.UZERO,
    moduleName: "",
    mainAssetId: Long.UZERO,
    firstBridgedAssetId: Long.UZERO,
    secondBridgedAssetId: Long.UZERO,
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
    if (!message.mainAssetId.isZero()) {
      writer.uint32(24).uint64(message.mainAssetId);
    }
    if (!message.firstBridgedAssetId.isZero()) {
      writer.uint32(32).uint64(message.firstBridgedAssetId);
    }
    if (!message.secondBridgedAssetId.isZero()) {
      writer.uint32(40).uint64(message.secondBridgedAssetId);
    }
    if (message.cpoolName !== "") {
      writer.uint32(50).string(message.cpoolName);
    }
    if (!message.reserveFunds.isZero()) {
      writer.uint32(56).uint64(message.reserveFunds);
    }
    for (const v of message.assetData) {
      AssetDataPoolMapping.encode(v!, writer.uint32(66).fork()).ldelim();
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
          message.mainAssetId = reader.uint64() as Long;
          break;
        case 4:
          message.firstBridgedAssetId = reader.uint64() as Long;
          break;
        case 5:
          message.secondBridgedAssetId = reader.uint64() as Long;
          break;
        case 6:
          message.cpoolName = reader.string();
          break;
        case 7:
          message.reserveFunds = reader.uint64() as Long;
          break;
        case 8:
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
      mainAssetId: isSet(object.mainAssetId)
        ? Long.fromValue(object.mainAssetId)
        : Long.UZERO,
      firstBridgedAssetId: isSet(object.firstBridgedAssetId)
        ? Long.fromValue(object.firstBridgedAssetId)
        : Long.UZERO,
      secondBridgedAssetId: isSet(object.secondBridgedAssetId)
        ? Long.fromValue(object.secondBridgedAssetId)
        : Long.UZERO,
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
    message.mainAssetId !== undefined &&
      (obj.mainAssetId = (message.mainAssetId || Long.UZERO).toString());
    message.firstBridgedAssetId !== undefined &&
      (obj.firstBridgedAssetId = (
        message.firstBridgedAssetId || Long.UZERO
      ).toString());
    message.secondBridgedAssetId !== undefined &&
      (obj.secondBridgedAssetId = (
        message.secondBridgedAssetId || Long.UZERO
      ).toString());
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
    message.mainAssetId =
      object.mainAssetId !== undefined && object.mainAssetId !== null
        ? Long.fromValue(object.mainAssetId)
        : Long.UZERO;
    message.firstBridgedAssetId =
      object.firstBridgedAssetId !== undefined &&
      object.firstBridgedAssetId !== null
        ? Long.fromValue(object.firstBridgedAssetId)
        : Long.UZERO;
    message.secondBridgedAssetId =
      object.secondBridgedAssetId !== undefined &&
      object.secondBridgedAssetId !== null
        ? Long.fromValue(object.secondBridgedAssetId)
        : Long.UZERO;
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

function createBaseAssetDataPoolMapping(): AssetDataPoolMapping {
  return { assetId: Long.UZERO, isBridged: false };
}

export const AssetDataPoolMapping = {
  encode(
    message: AssetDataPoolMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.assetId.isZero()) {
      writer.uint32(8).uint64(message.assetId);
    }
    if (message.isBridged === true) {
      writer.uint32(16).bool(message.isBridged);
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
          message.isBridged = reader.bool();
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
      isBridged: isSet(object.isBridged) ? Boolean(object.isBridged) : false,
    };
  },

  toJSON(message: AssetDataPoolMapping): unknown {
    const obj: any = {};
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.isBridged !== undefined && (obj.isBridged = message.isBridged);
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
    message.isBridged = object.isBridged ?? false;
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
  return { assetId: Long.UZERO, poolId: Long.UZERO, pairId: [] };
}

export const AssetToPairMapping = {
  encode(
    message: AssetToPairMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.assetId.isZero()) {
      writer.uint32(8).uint64(message.assetId);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
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
          message.assetId = reader.uint64() as Long;
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
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
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      pairId: Array.isArray(object?.pairId)
        ? object.pairId.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: AssetToPairMapping): unknown {
    const obj: any = {};
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
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
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.pairId = object.pairId?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseUserLendIdMapping(): UserLendIdMapping {
  return { owner: "", lendIds: [] };
}

export const UserLendIdMapping = {
  encode(
    message: UserLendIdMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    writer.uint32(18).fork();
    for (const v of message.lendIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserLendIdMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserLendIdMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lendIds.push(reader.uint64() as Long);
            }
          } else {
            message.lendIds.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserLendIdMapping {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      lendIds: Array.isArray(object?.lendIds)
        ? object.lendIds.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: UserLendIdMapping): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.lendIds) {
      obj.lendIds = message.lendIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.lendIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserLendIdMapping>, I>>(
    object: I
  ): UserLendIdMapping {
    const message = createBaseUserLendIdMapping();
    message.owner = object.owner ?? "";
    message.lendIds = object.lendIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseLendIdByOwnerAndPoolMapping(): LendIdByOwnerAndPoolMapping {
  return { owner: "", poolId: Long.UZERO, lendIds: [] };
}

export const LendIdByOwnerAndPoolMapping = {
  encode(
    message: LendIdByOwnerAndPoolMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    writer.uint32(26).fork();
    for (const v of message.lendIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LendIdByOwnerAndPoolMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLendIdByOwnerAndPoolMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LendIdByOwnerAndPoolMapping {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      lendIds: Array.isArray(object?.lendIds)
        ? object.lendIds.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: LendIdByOwnerAndPoolMapping): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.lendIds) {
      obj.lendIds = message.lendIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.lendIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LendIdByOwnerAndPoolMapping>, I>>(
    object: I
  ): LendIdByOwnerAndPoolMapping {
    const message = createBaseLendIdByOwnerAndPoolMapping();
    message.owner = object.owner ?? "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.lendIds = object.lendIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseBorrowIdByOwnerAndPoolMapping(): BorrowIdByOwnerAndPoolMapping {
  return { owner: "", poolId: Long.UZERO, borrowIds: [] };
}

export const BorrowIdByOwnerAndPoolMapping = {
  encode(
    message: BorrowIdByOwnerAndPoolMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    writer.uint32(26).fork();
    for (const v of message.borrowIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BorrowIdByOwnerAndPoolMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBorrowIdByOwnerAndPoolMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.borrowIds.push(reader.uint64() as Long);
            }
          } else {
            message.borrowIds.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BorrowIdByOwnerAndPoolMapping {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      borrowIds: Array.isArray(object?.borrowIds)
        ? object.borrowIds.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: BorrowIdByOwnerAndPoolMapping): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.borrowIds) {
      obj.borrowIds = message.borrowIds.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.borrowIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BorrowIdByOwnerAndPoolMapping>, I>>(
    object: I
  ): BorrowIdByOwnerAndPoolMapping {
    const message = createBaseBorrowIdByOwnerAndPoolMapping();
    message.owner = object.owner ?? "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.borrowIds = object.borrowIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseUserBorrowIdMapping(): UserBorrowIdMapping {
  return { owner: "", borrowIds: [] };
}

export const UserBorrowIdMapping = {
  encode(
    message: UserBorrowIdMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    writer.uint32(18).fork();
    for (const v of message.borrowIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserBorrowIdMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserBorrowIdMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.borrowIds.push(reader.uint64() as Long);
            }
          } else {
            message.borrowIds.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserBorrowIdMapping {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      borrowIds: Array.isArray(object?.borrowIds)
        ? object.borrowIds.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: UserBorrowIdMapping): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.borrowIds) {
      obj.borrowIds = message.borrowIds.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.borrowIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserBorrowIdMapping>, I>>(
    object: I
  ): UserBorrowIdMapping {
    const message = createBaseUserBorrowIdMapping();
    message.owner = object.owner ?? "";
    message.borrowIds = object.borrowIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseLendIdToBorrowIdMapping(): LendIdToBorrowIdMapping {
  return { lendingId: Long.UZERO, borrowingId: [] };
}

export const LendIdToBorrowIdMapping = {
  encode(
    message: LendIdToBorrowIdMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.lendingId.isZero()) {
      writer.uint32(8).uint64(message.lendingId);
    }
    writer.uint32(18).fork();
    for (const v of message.borrowingId) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LendIdToBorrowIdMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLendIdToBorrowIdMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lendingId = reader.uint64() as Long;
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.borrowingId.push(reader.uint64() as Long);
            }
          } else {
            message.borrowingId.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LendIdToBorrowIdMapping {
    return {
      lendingId: isSet(object.lendingId)
        ? Long.fromValue(object.lendingId)
        : Long.UZERO,
      borrowingId: Array.isArray(object?.borrowingId)
        ? object.borrowingId.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: LendIdToBorrowIdMapping): unknown {
    const obj: any = {};
    message.lendingId !== undefined &&
      (obj.lendingId = (message.lendingId || Long.UZERO).toString());
    if (message.borrowingId) {
      obj.borrowingId = message.borrowingId.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.borrowingId = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LendIdToBorrowIdMapping>, I>>(
    object: I
  ): LendIdToBorrowIdMapping {
    const message = createBaseLendIdToBorrowIdMapping();
    message.lendingId =
      object.lendingId !== undefined && object.lendingId !== null
        ? Long.fromValue(object.lendingId)
        : Long.UZERO;
    message.borrowingId =
      object.borrowingId?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseAssetStats(): AssetStats {
  return {
    poolId: Long.UZERO,
    assetId: Long.UZERO,
    totalBorrowed: "",
    totalStableBorrowed: "",
    totalLend: "",
    lendApr: "",
    borrowApr: "",
    stableBorrowApr: "",
    utilisationRatio: "",
  };
}

export const AssetStats = {
  encode(
    message: AssetStats,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    if (message.totalBorrowed !== "") {
      writer.uint32(26).string(message.totalBorrowed);
    }
    if (message.totalStableBorrowed !== "") {
      writer.uint32(34).string(message.totalStableBorrowed);
    }
    if (message.totalLend !== "") {
      writer.uint32(42).string(message.totalLend);
    }
    if (message.lendApr !== "") {
      writer.uint32(50).string(message.lendApr);
    }
    if (message.borrowApr !== "") {
      writer.uint32(58).string(message.borrowApr);
    }
    if (message.stableBorrowApr !== "") {
      writer.uint32(66).string(message.stableBorrowApr);
    }
    if (message.utilisationRatio !== "") {
      writer.uint32(74).string(message.utilisationRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetStats();
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
          message.totalBorrowed = reader.string();
          break;
        case 4:
          message.totalStableBorrowed = reader.string();
          break;
        case 5:
          message.totalLend = reader.string();
          break;
        case 6:
          message.lendApr = reader.string();
          break;
        case 7:
          message.borrowApr = reader.string();
          break;
        case 8:
          message.stableBorrowApr = reader.string();
          break;
        case 9:
          message.utilisationRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetStats {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      totalBorrowed: isSet(object.totalBorrowed)
        ? String(object.totalBorrowed)
        : "",
      totalStableBorrowed: isSet(object.totalStableBorrowed)
        ? String(object.totalStableBorrowed)
        : "",
      totalLend: isSet(object.totalLend) ? String(object.totalLend) : "",
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

  toJSON(message: AssetStats): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.totalBorrowed !== undefined &&
      (obj.totalBorrowed = message.totalBorrowed);
    message.totalStableBorrowed !== undefined &&
      (obj.totalStableBorrowed = message.totalStableBorrowed);
    message.totalLend !== undefined && (obj.totalLend = message.totalLend);
    message.lendApr !== undefined && (obj.lendApr = message.lendApr);
    message.borrowApr !== undefined && (obj.borrowApr = message.borrowApr);
    message.stableBorrowApr !== undefined &&
      (obj.stableBorrowApr = message.stableBorrowApr);
    message.utilisationRatio !== undefined &&
      (obj.utilisationRatio = message.utilisationRatio);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetStats>, I>>(
    object: I
  ): AssetStats {
    const message = createBaseAssetStats();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.totalBorrowed = object.totalBorrowed ?? "";
    message.totalStableBorrowed = object.totalStableBorrowed ?? "";
    message.totalLend = object.totalLend ?? "";
    message.lendApr = object.lendApr ?? "";
    message.borrowApr = object.borrowApr ?? "";
    message.stableBorrowApr = object.stableBorrowApr ?? "";
    message.utilisationRatio = object.utilisationRatio ?? "";
    return message;
  },
};

function createBaseAssetRatesStats(): AssetRatesStats {
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

export const AssetRatesStats = {
  encode(
    message: AssetRatesStats,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetRatesStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetRatesStats();
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

  fromJSON(object: any): AssetRatesStats {
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

  toJSON(message: AssetRatesStats): unknown {
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

  fromPartial<I extends Exact<DeepPartial<AssetRatesStats>, I>>(
    object: I
  ): AssetRatesStats {
    const message = createBaseAssetRatesStats();
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

function createBaseLendMapping(): LendMapping {
  return { lendIds: [] };
}

export const LendMapping = {
  encode(
    message: LendMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.lendIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LendMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLendMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lendIds.push(reader.uint64() as Long);
            }
          } else {
            message.lendIds.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LendMapping {
    return {
      lendIds: Array.isArray(object?.lendIds)
        ? object.lendIds.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: LendMapping): unknown {
    const obj: any = {};
    if (message.lendIds) {
      obj.lendIds = message.lendIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.lendIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LendMapping>, I>>(
    object: I
  ): LendMapping {
    const message = createBaseLendMapping();
    message.lendIds = object.lendIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseBorrowMapping(): BorrowMapping {
  return { borrowIds: [] };
}

export const BorrowMapping = {
  encode(
    message: BorrowMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.borrowIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BorrowMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBorrowMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.borrowIds.push(reader.uint64() as Long);
            }
          } else {
            message.borrowIds.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BorrowMapping {
    return {
      borrowIds: Array.isArray(object?.borrowIds)
        ? object.borrowIds.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: BorrowMapping): unknown {
    const obj: any = {};
    if (message.borrowIds) {
      obj.borrowIds = message.borrowIds.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.borrowIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BorrowMapping>, I>>(
    object: I
  ): BorrowMapping {
    const message = createBaseBorrowMapping();
    message.borrowIds = object.borrowIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseStableBorrowMapping(): StableBorrowMapping {
  return { stableBorrowIds: [] };
}

export const StableBorrowMapping = {
  encode(
    message: StableBorrowMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.stableBorrowIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StableBorrowMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStableBorrowMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.stableBorrowIds.push(reader.uint64() as Long);
            }
          } else {
            message.stableBorrowIds.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StableBorrowMapping {
    return {
      stableBorrowIds: Array.isArray(object?.stableBorrowIds)
        ? object.stableBorrowIds.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: StableBorrowMapping): unknown {
    const obj: any = {};
    if (message.stableBorrowIds) {
      obj.stableBorrowIds = message.stableBorrowIds.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.stableBorrowIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StableBorrowMapping>, I>>(
    object: I
  ): StableBorrowMapping {
    const message = createBaseStableBorrowMapping();
    message.stableBorrowIds =
      object.stableBorrowIds?.map((e) => Long.fromValue(e)) || [];
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

function createBaseBalanceStats(): BalanceStats {
  return { assetId: Long.UZERO, amount: "" };
}

export const BalanceStats = {
  encode(
    message: BalanceStats,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.assetId.isZero()) {
      writer.uint32(8).uint64(message.assetId);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalanceStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalanceStats();
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

  fromJSON(object: any): BalanceStats {
    return {
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: BalanceStats): unknown {
    const obj: any = {};
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BalanceStats>, I>>(
    object: I
  ): BalanceStats {
    const message = createBaseBalanceStats();
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseDepositStats(): DepositStats {
  return { balanceStats: [] };
}

export const DepositStats = {
  encode(
    message: DepositStats,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.balanceStats) {
      BalanceStats.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balanceStats.push(
            BalanceStats.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositStats {
    return {
      balanceStats: Array.isArray(object?.balanceStats)
        ? object.balanceStats.map((e: any) => BalanceStats.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DepositStats): unknown {
    const obj: any = {};
    if (message.balanceStats) {
      obj.balanceStats = message.balanceStats.map((e) =>
        e ? BalanceStats.toJSON(e) : undefined
      );
    } else {
      obj.balanceStats = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DepositStats>, I>>(
    object: I
  ): DepositStats {
    const message = createBaseDepositStats();
    message.balanceStats =
      object.balanceStats?.map((e) => BalanceStats.fromPartial(e)) || [];
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

function createBaseReservePoolRecordsForBorrow(): ReservePoolRecordsForBorrow {
  return { borrowingId: Long.UZERO, interestAccumulated: "" };
}

export const ReservePoolRecordsForBorrow = {
  encode(
    message: ReservePoolRecordsForBorrow,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.borrowingId.isZero()) {
      writer.uint32(8).uint64(message.borrowingId);
    }
    if (message.interestAccumulated !== "") {
      writer.uint32(18).string(message.interestAccumulated);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ReservePoolRecordsForBorrow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReservePoolRecordsForBorrow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.borrowingId = reader.uint64() as Long;
          break;
        case 2:
          message.interestAccumulated = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReservePoolRecordsForBorrow {
    return {
      borrowingId: isSet(object.borrowingId)
        ? Long.fromValue(object.borrowingId)
        : Long.UZERO,
      interestAccumulated: isSet(object.interestAccumulated)
        ? String(object.interestAccumulated)
        : "",
    };
  },

  toJSON(message: ReservePoolRecordsForBorrow): unknown {
    const obj: any = {};
    message.borrowingId !== undefined &&
      (obj.borrowingId = (message.borrowingId || Long.UZERO).toString());
    message.interestAccumulated !== undefined &&
      (obj.interestAccumulated = message.interestAccumulated);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReservePoolRecordsForBorrow>, I>>(
    object: I
  ): ReservePoolRecordsForBorrow {
    const message = createBaseReservePoolRecordsForBorrow();
    message.borrowingId =
      object.borrowingId !== undefined && object.borrowingId !== null
        ? Long.fromValue(object.borrowingId)
        : Long.UZERO;
    message.interestAccumulated = object.interestAccumulated ?? "";
    return message;
  },
};

function createBaseBorrowInterestTracker(): BorrowInterestTracker {
  return { borrowingId: Long.UZERO, interestAccumulated: "" };
}

export const BorrowInterestTracker = {
  encode(
    message: BorrowInterestTracker,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.borrowingId.isZero()) {
      writer.uint32(8).uint64(message.borrowingId);
    }
    if (message.interestAccumulated !== "") {
      writer.uint32(18).string(message.interestAccumulated);
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
        case 2:
          message.interestAccumulated = reader.string();
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
      interestAccumulated: isSet(object.interestAccumulated)
        ? String(object.interestAccumulated)
        : "",
    };
  },

  toJSON(message: BorrowInterestTracker): unknown {
    const obj: any = {};
    message.borrowingId !== undefined &&
      (obj.borrowingId = (message.borrowingId || Long.UZERO).toString());
    message.interestAccumulated !== undefined &&
      (obj.interestAccumulated = message.interestAccumulated);
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
    message.interestAccumulated = object.interestAccumulated ?? "";
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

function createBaseAssetRanking(): AssetRanking {
  return { assetId: Long.UZERO, apr: "", amount: "" };
}

export const AssetRanking = {
  encode(
    message: AssetRanking,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.assetId.isZero()) {
      writer.uint32(8).uint64(message.assetId);
    }
    if (message.apr !== "") {
      writer.uint32(18).string(message.apr);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetRanking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetRanking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.uint64() as Long;
          break;
        case 2:
          message.apr = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetRanking {
    return {
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      apr: isSet(object.apr) ? String(object.apr) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: AssetRanking): unknown {
    const obj: any = {};
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.apr !== undefined && (obj.apr = message.apr);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetRanking>, I>>(
    object: I
  ): AssetRanking {
    const message = createBaseAssetRanking();
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.apr = object.apr ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseBorrowRanking(): BorrowRanking {
  return { first: undefined, second: undefined, third: undefined };
}

export const BorrowRanking = {
  encode(
    message: BorrowRanking,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.first !== undefined) {
      AssetRanking.encode(message.first, writer.uint32(10).fork()).ldelim();
    }
    if (message.second !== undefined) {
      AssetRanking.encode(message.second, writer.uint32(18).fork()).ldelim();
    }
    if (message.third !== undefined) {
      AssetRanking.encode(message.third, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BorrowRanking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBorrowRanking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.first = AssetRanking.decode(reader, reader.uint32());
          break;
        case 2:
          message.second = AssetRanking.decode(reader, reader.uint32());
          break;
        case 3:
          message.third = AssetRanking.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BorrowRanking {
    return {
      first: isSet(object.first)
        ? AssetRanking.fromJSON(object.first)
        : undefined,
      second: isSet(object.second)
        ? AssetRanking.fromJSON(object.second)
        : undefined,
      third: isSet(object.third)
        ? AssetRanking.fromJSON(object.third)
        : undefined,
    };
  },

  toJSON(message: BorrowRanking): unknown {
    const obj: any = {};
    message.first !== undefined &&
      (obj.first = message.first
        ? AssetRanking.toJSON(message.first)
        : undefined);
    message.second !== undefined &&
      (obj.second = message.second
        ? AssetRanking.toJSON(message.second)
        : undefined);
    message.third !== undefined &&
      (obj.third = message.third
        ? AssetRanking.toJSON(message.third)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BorrowRanking>, I>>(
    object: I
  ): BorrowRanking {
    const message = createBaseBorrowRanking();
    message.first =
      object.first !== undefined && object.first !== null
        ? AssetRanking.fromPartial(object.first)
        : undefined;
    message.second =
      object.second !== undefined && object.second !== null
        ? AssetRanking.fromPartial(object.second)
        : undefined;
    message.third =
      object.third !== undefined && object.third !== null
        ? AssetRanking.fromPartial(object.third)
        : undefined;
    return message;
  },
};

function createBaseDepositRanking(): DepositRanking {
  return { first: undefined, second: undefined, third: undefined };
}

export const DepositRanking = {
  encode(
    message: DepositRanking,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.first !== undefined) {
      AssetRanking.encode(message.first, writer.uint32(10).fork()).ldelim();
    }
    if (message.second !== undefined) {
      AssetRanking.encode(message.second, writer.uint32(18).fork()).ldelim();
    }
    if (message.third !== undefined) {
      AssetRanking.encode(message.third, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositRanking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositRanking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.first = AssetRanking.decode(reader, reader.uint32());
          break;
        case 2:
          message.second = AssetRanking.decode(reader, reader.uint32());
          break;
        case 3:
          message.third = AssetRanking.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositRanking {
    return {
      first: isSet(object.first)
        ? AssetRanking.fromJSON(object.first)
        : undefined,
      second: isSet(object.second)
        ? AssetRanking.fromJSON(object.second)
        : undefined,
      third: isSet(object.third)
        ? AssetRanking.fromJSON(object.third)
        : undefined,
    };
  },

  toJSON(message: DepositRanking): unknown {
    const obj: any = {};
    message.first !== undefined &&
      (obj.first = message.first
        ? AssetRanking.toJSON(message.first)
        : undefined);
    message.second !== undefined &&
      (obj.second = message.second
        ? AssetRanking.toJSON(message.second)
        : undefined);
    message.third !== undefined &&
      (obj.third = message.third
        ? AssetRanking.toJSON(message.third)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DepositRanking>, I>>(
    object: I
  ): DepositRanking {
    const message = createBaseDepositRanking();
    message.first =
      object.first !== undefined && object.first !== null
        ? AssetRanking.fromPartial(object.first)
        : undefined;
    message.second =
      object.second !== undefined && object.second !== null
        ? AssetRanking.fromPartial(object.second)
        : undefined;
    message.third =
      object.third !== undefined && object.third !== null
        ? AssetRanking.fromPartial(object.third)
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
