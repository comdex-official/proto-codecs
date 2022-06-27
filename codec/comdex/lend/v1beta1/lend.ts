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
  rewardAccumulated: string;
}

export interface BorrowAsset {
  borrowingId: Long;
  lendingId: Long;
  isStableBorrow: boolean;
  pairId: Long;
  amountIn?: Coin;
  amountOut?: Coin;
  bridgedAssetId: Long;
  borrowingTime?: Date;
  stableBorrowRate: string;
  updatedAmountOut: string;
  interestAccumulated: string;
}

export interface Pool {
  poolId: Long;
  moduleName: string;
  mainAssetId: Long;
  firstBridgedAssetId: Long;
  secondBridgedAssetId: Long;
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
  totalLend: string;
  lendApr: string;
  borrowApr: string;
  stableBorrowApr: string;
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
  reserveFactor: string;
  cAssetId: Long;
}

export interface LendMapping {
  lendIds: Long[];
}

export interface BorrowMapping {
  borrowIds: Long[];
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
    rewardAccumulated: "",
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
    if (message.rewardAccumulated !== "") {
      writer.uint32(66).string(message.rewardAccumulated);
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
          message.rewardAccumulated = reader.string();
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
      rewardAccumulated: isSet(object.rewardAccumulated)
        ? String(object.rewardAccumulated)
        : "",
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
    message.rewardAccumulated !== undefined &&
      (obj.rewardAccumulated = message.rewardAccumulated);
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
    message.rewardAccumulated = object.rewardAccumulated ?? "";
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
    bridgedAssetId: Long.UZERO,
    borrowingTime: undefined,
    stableBorrowRate: "",
    updatedAmountOut: "",
    interestAccumulated: "",
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
    if (!message.bridgedAssetId.isZero()) {
      writer.uint32(56).uint64(message.bridgedAssetId);
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
          message.bridgedAssetId = reader.uint64() as Long;
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
      bridgedAssetId: isSet(object.bridgedAssetId)
        ? Long.fromValue(object.bridgedAssetId)
        : Long.UZERO,
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
    message.bridgedAssetId !== undefined &&
      (obj.bridgedAssetId = (message.bridgedAssetId || Long.UZERO).toString());
    message.borrowingTime !== undefined &&
      (obj.borrowingTime = message.borrowingTime.toISOString());
    message.stableBorrowRate !== undefined &&
      (obj.stableBorrowRate = message.stableBorrowRate);
    message.updatedAmountOut !== undefined &&
      (obj.updatedAmountOut = message.updatedAmountOut);
    message.interestAccumulated !== undefined &&
      (obj.interestAccumulated = message.interestAccumulated);
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
    message.bridgedAssetId =
      object.bridgedAssetId !== undefined && object.bridgedAssetId !== null
        ? Long.fromValue(object.bridgedAssetId)
        : Long.UZERO;
    message.borrowingTime = object.borrowingTime ?? undefined;
    message.stableBorrowRate = object.stableBorrowRate ?? "";
    message.updatedAmountOut = object.updatedAmountOut ?? "";
    message.interestAccumulated = object.interestAccumulated ?? "";
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
    for (const v of message.assetData) {
      AssetDataPoolMapping.encode(v!, writer.uint32(50).fork()).ldelim();
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
    totalLend: "",
    lendApr: "",
    borrowApr: "",
    stableBorrowApr: "",
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
    if (message.totalLend !== "") {
      writer.uint32(34).string(message.totalLend);
    }
    if (message.lendApr !== "") {
      writer.uint32(42).string(message.lendApr);
    }
    if (message.borrowApr !== "") {
      writer.uint32(50).string(message.borrowApr);
    }
    if (message.stableBorrowApr !== "") {
      writer.uint32(58).string(message.stableBorrowApr);
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
          message.totalLend = reader.string();
          break;
        case 5:
          message.lendApr = reader.string();
          break;
        case 6:
          message.borrowApr = reader.string();
          break;
        case 7:
          message.stableBorrowApr = reader.string();
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
      totalLend: isSet(object.totalLend) ? String(object.totalLend) : "",
      lendApr: isSet(object.lendApr) ? String(object.lendApr) : "",
      borrowApr: isSet(object.borrowApr) ? String(object.borrowApr) : "",
      stableBorrowApr: isSet(object.stableBorrowApr)
        ? String(object.stableBorrowApr)
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
    message.totalLend !== undefined && (obj.totalLend = message.totalLend);
    message.lendApr !== undefined && (obj.lendApr = message.lendApr);
    message.borrowApr !== undefined && (obj.borrowApr = message.borrowApr);
    message.stableBorrowApr !== undefined &&
      (obj.stableBorrowApr = message.stableBorrowApr);
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
    message.totalLend = object.totalLend ?? "";
    message.lendApr = object.lendApr ?? "";
    message.borrowApr = object.borrowApr ?? "";
    message.stableBorrowApr = object.stableBorrowApr ?? "";
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
    if (message.reserveFactor !== "") {
      writer.uint32(106).string(message.reserveFactor);
    }
    if (!message.cAssetId.isZero()) {
      writer.uint32(112).uint64(message.cAssetId);
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
          message.reserveFactor = reader.string();
          break;
        case 14:
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
