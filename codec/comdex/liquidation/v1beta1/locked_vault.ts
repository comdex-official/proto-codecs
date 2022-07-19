/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "./cosmos/base/v1beta1/coin";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "comdex.liquidation.v1beta1";

export interface LockedVault {
  id: Long;
  appId: Long;
  appVaultTypeId: string;
  originalVaultId: string;
  extendedPairVaultId: Long;
  owner: string;
  amountIn: string;
  amountOut: string;
  /**
   * updated_amount_out = amount_out + interest_accumulated + opening_fee_accumulated
   * + closing_fee_accumulated
   */
  updatedAmountOut: string;
  initiator: string;
  isAuctionComplete: boolean;
  isAuctionInProgress: boolean;
  crAtLiquidation: string;
  currentCollateralisationRatio: string;
  collateralToBeAuctioned: string;
  liquidationTimestamp?: Date;
  selloffHistory: string[];
  interestAccumulated: string;
  borrowMetaData?: BorrowMetaData | undefined;
}

export interface BorrowMetaData {
  lendingId: Long;
  isStableBorrow: boolean;
  stableBorrowRate: string;
  bridgedAssetAmount?: Coin;
}

export interface LockedVaultToAppMapping {
  appId: Long;
  lockedVault: LockedVault[];
}

export interface WhitelistedAppIds {
  whitelistedAppIds: Long[];
}

function createBaseLockedVault(): LockedVault {
  return {
    id: Long.UZERO,
    appId: Long.UZERO,
    appVaultTypeId: "",
    originalVaultId: "",
    extendedPairVaultId: Long.UZERO,
    owner: "",
    amountIn: "",
    amountOut: "",
    updatedAmountOut: "",
    initiator: "",
    isAuctionComplete: false,
    isAuctionInProgress: false,
    crAtLiquidation: "",
    currentCollateralisationRatio: "",
    collateralToBeAuctioned: "",
    liquidationTimestamp: undefined,
    selloffHistory: [],
    interestAccumulated: "",
    borrowMetaData: undefined,
  };
}

export const LockedVault = {
  encode(
    message: LockedVault,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (message.appVaultTypeId !== "") {
      writer.uint32(26).string(message.appVaultTypeId);
    }
    if (message.originalVaultId !== "") {
      writer.uint32(34).string(message.originalVaultId);
    }
    if (!message.extendedPairVaultId.isZero()) {
      writer.uint32(40).uint64(message.extendedPairVaultId);
    }
    if (message.owner !== "") {
      writer.uint32(50).string(message.owner);
    }
    if (message.amountIn !== "") {
      writer.uint32(58).string(message.amountIn);
    }
    if (message.amountOut !== "") {
      writer.uint32(66).string(message.amountOut);
    }
    if (message.updatedAmountOut !== "") {
      writer.uint32(74).string(message.updatedAmountOut);
    }
    if (message.initiator !== "") {
      writer.uint32(82).string(message.initiator);
    }
    if (message.isAuctionComplete === true) {
      writer.uint32(88).bool(message.isAuctionComplete);
    }
    if (message.isAuctionInProgress === true) {
      writer.uint32(96).bool(message.isAuctionInProgress);
    }
    if (message.crAtLiquidation !== "") {
      writer.uint32(106).string(message.crAtLiquidation);
    }
    if (message.currentCollateralisationRatio !== "") {
      writer.uint32(114).string(message.currentCollateralisationRatio);
    }
    if (message.collateralToBeAuctioned !== "") {
      writer.uint32(122).string(message.collateralToBeAuctioned);
    }
    if (message.liquidationTimestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.liquidationTimestamp),
        writer.uint32(130).fork()
      ).ldelim();
    }
    for (const v of message.selloffHistory) {
      writer.uint32(138).string(v!);
    }
    if (message.interestAccumulated !== "") {
      writer.uint32(146).string(message.interestAccumulated);
    }
    if (message.borrowMetaData !== undefined) {
      BorrowMetaData.encode(
        message.borrowMetaData,
        writer.uint32(154).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockedVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.appId = reader.uint64() as Long;
          break;
        case 3:
          message.appVaultTypeId = reader.string();
          break;
        case 4:
          message.originalVaultId = reader.string();
          break;
        case 5:
          message.extendedPairVaultId = reader.uint64() as Long;
          break;
        case 6:
          message.owner = reader.string();
          break;
        case 7:
          message.amountIn = reader.string();
          break;
        case 8:
          message.amountOut = reader.string();
          break;
        case 9:
          message.updatedAmountOut = reader.string();
          break;
        case 10:
          message.initiator = reader.string();
          break;
        case 11:
          message.isAuctionComplete = reader.bool();
          break;
        case 12:
          message.isAuctionInProgress = reader.bool();
          break;
        case 13:
          message.crAtLiquidation = reader.string();
          break;
        case 14:
          message.currentCollateralisationRatio = reader.string();
          break;
        case 15:
          message.collateralToBeAuctioned = reader.string();
          break;
        case 16:
          message.liquidationTimestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 17:
          message.selloffHistory.push(reader.string());
          break;
        case 18:
          message.interestAccumulated = reader.string();
          break;
        case 19:
          message.borrowMetaData = BorrowMetaData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockedVault {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      appVaultTypeId: isSet(object.appVaultTypeId)
        ? String(object.appVaultTypeId)
        : "",
      originalVaultId: isSet(object.originalVaultId)
        ? String(object.originalVaultId)
        : "",
      extendedPairVaultId: isSet(object.extendedPairVaultId)
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
      updatedAmountOut: isSet(object.updatedAmountOut)
        ? String(object.updatedAmountOut)
        : "",
      initiator: isSet(object.initiator) ? String(object.initiator) : "",
      isAuctionComplete: isSet(object.isAuctionComplete)
        ? Boolean(object.isAuctionComplete)
        : false,
      isAuctionInProgress: isSet(object.isAuctionInProgress)
        ? Boolean(object.isAuctionInProgress)
        : false,
      crAtLiquidation: isSet(object.crAtLiquidation)
        ? String(object.crAtLiquidation)
        : "",
      currentCollateralisationRatio: isSet(object.currentCollateralisationRatio)
        ? String(object.currentCollateralisationRatio)
        : "",
      collateralToBeAuctioned: isSet(object.collateralToBeAuctioned)
        ? String(object.collateralToBeAuctioned)
        : "",
      liquidationTimestamp: isSet(object.liquidationTimestamp)
        ? fromJsonTimestamp(object.liquidationTimestamp)
        : undefined,
      selloffHistory: Array.isArray(object?.selloffHistory)
        ? object.selloffHistory.map((e: any) => String(e))
        : [],
      interestAccumulated: isSet(object.interestAccumulated)
        ? String(object.interestAccumulated)
        : "",
      borrowMetaData: isSet(object.borrowMetaData)
        ? BorrowMetaData.fromJSON(object.borrowMetaData)
        : undefined,
    };
  },

  toJSON(message: LockedVault): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.appVaultTypeId !== undefined &&
      (obj.appVaultTypeId = message.appVaultTypeId);
    message.originalVaultId !== undefined &&
      (obj.originalVaultId = message.originalVaultId);
    message.extendedPairVaultId !== undefined &&
      (obj.extendedPairVaultId = (
        message.extendedPairVaultId || Long.UZERO
      ).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut);
    message.updatedAmountOut !== undefined &&
      (obj.updatedAmountOut = message.updatedAmountOut);
    message.initiator !== undefined && (obj.initiator = message.initiator);
    message.isAuctionComplete !== undefined &&
      (obj.isAuctionComplete = message.isAuctionComplete);
    message.isAuctionInProgress !== undefined &&
      (obj.isAuctionInProgress = message.isAuctionInProgress);
    message.crAtLiquidation !== undefined &&
      (obj.crAtLiquidation = message.crAtLiquidation);
    message.currentCollateralisationRatio !== undefined &&
      (obj.currentCollateralisationRatio =
        message.currentCollateralisationRatio);
    message.collateralToBeAuctioned !== undefined &&
      (obj.collateralToBeAuctioned = message.collateralToBeAuctioned);
    message.liquidationTimestamp !== undefined &&
      (obj.liquidationTimestamp = message.liquidationTimestamp.toISOString());
    if (message.selloffHistory) {
      obj.selloffHistory = message.selloffHistory.map((e) => e);
    } else {
      obj.selloffHistory = [];
    }
    message.interestAccumulated !== undefined &&
      (obj.interestAccumulated = message.interestAccumulated);
    message.borrowMetaData !== undefined &&
      (obj.borrowMetaData = message.borrowMetaData
        ? BorrowMetaData.toJSON(message.borrowMetaData)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LockedVault>, I>>(
    object: I
  ): LockedVault {
    const message = createBaseLockedVault();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.appVaultTypeId = object.appVaultTypeId ?? "";
    message.originalVaultId = object.originalVaultId ?? "";
    message.extendedPairVaultId =
      object.extendedPairVaultId !== undefined &&
      object.extendedPairVaultId !== null
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO;
    message.owner = object.owner ?? "";
    message.amountIn = object.amountIn ?? "";
    message.amountOut = object.amountOut ?? "";
    message.updatedAmountOut = object.updatedAmountOut ?? "";
    message.initiator = object.initiator ?? "";
    message.isAuctionComplete = object.isAuctionComplete ?? false;
    message.isAuctionInProgress = object.isAuctionInProgress ?? false;
    message.crAtLiquidation = object.crAtLiquidation ?? "";
    message.currentCollateralisationRatio =
      object.currentCollateralisationRatio ?? "";
    message.collateralToBeAuctioned = object.collateralToBeAuctioned ?? "";
    message.liquidationTimestamp = object.liquidationTimestamp ?? undefined;
    message.selloffHistory = object.selloffHistory?.map((e) => e) || [];
    message.interestAccumulated = object.interestAccumulated ?? "";
    message.borrowMetaData =
      object.borrowMetaData !== undefined && object.borrowMetaData !== null
        ? BorrowMetaData.fromPartial(object.borrowMetaData)
        : undefined;
    return message;
  },
};

function createBaseBorrowMetaData(): BorrowMetaData {
  return {
    lendingId: Long.UZERO,
    isStableBorrow: false,
    stableBorrowRate: "",
    bridgedAssetAmount: undefined,
  };
}

export const BorrowMetaData = {
  encode(
    message: BorrowMetaData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.lendingId.isZero()) {
      writer.uint32(8).uint64(message.lendingId);
    }
    if (message.isStableBorrow === true) {
      writer.uint32(16).bool(message.isStableBorrow);
    }
    if (message.stableBorrowRate !== "") {
      writer.uint32(26).string(message.stableBorrowRate);
    }
    if (message.bridgedAssetAmount !== undefined) {
      Coin.encode(
        message.bridgedAssetAmount,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BorrowMetaData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBorrowMetaData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lendingId = reader.uint64() as Long;
          break;
        case 2:
          message.isStableBorrow = reader.bool();
          break;
        case 3:
          message.stableBorrowRate = reader.string();
          break;
        case 7:
          message.bridgedAssetAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BorrowMetaData {
    return {
      lendingId: isSet(object.lendingId)
        ? Long.fromValue(object.lendingId)
        : Long.UZERO,
      isStableBorrow: isSet(object.isStableBorrow)
        ? Boolean(object.isStableBorrow)
        : false,
      stableBorrowRate: isSet(object.stableBorrowRate)
        ? String(object.stableBorrowRate)
        : "",
      bridgedAssetAmount: isSet(object.bridgedAssetAmount)
        ? Coin.fromJSON(object.bridgedAssetAmount)
        : undefined,
    };
  },

  toJSON(message: BorrowMetaData): unknown {
    const obj: any = {};
    message.lendingId !== undefined &&
      (obj.lendingId = (message.lendingId || Long.UZERO).toString());
    message.isStableBorrow !== undefined &&
      (obj.isStableBorrow = message.isStableBorrow);
    message.stableBorrowRate !== undefined &&
      (obj.stableBorrowRate = message.stableBorrowRate);
    message.bridgedAssetAmount !== undefined &&
      (obj.bridgedAssetAmount = message.bridgedAssetAmount
        ? Coin.toJSON(message.bridgedAssetAmount)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BorrowMetaData>, I>>(
    object: I
  ): BorrowMetaData {
    const message = createBaseBorrowMetaData();
    message.lendingId =
      object.lendingId !== undefined && object.lendingId !== null
        ? Long.fromValue(object.lendingId)
        : Long.UZERO;
    message.isStableBorrow = object.isStableBorrow ?? false;
    message.stableBorrowRate = object.stableBorrowRate ?? "";
    message.bridgedAssetAmount =
      object.bridgedAssetAmount !== undefined &&
      object.bridgedAssetAmount !== null
        ? Coin.fromPartial(object.bridgedAssetAmount)
        : undefined;
    return message;
  },
};

function createBaseLockedVaultToAppMapping(): LockedVaultToAppMapping {
  return { appId: Long.UZERO, lockedVault: [] };
}

export const LockedVaultToAppMapping = {
  encode(
    message: LockedVaultToAppMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    for (const v of message.lockedVault) {
      LockedVault.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LockedVaultToAppMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedVaultToAppMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.lockedVault.push(LockedVault.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockedVaultToAppMapping {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      lockedVault: Array.isArray(object?.lockedVault)
        ? object.lockedVault.map((e: any) => LockedVault.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LockedVaultToAppMapping): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    if (message.lockedVault) {
      obj.lockedVault = message.lockedVault.map((e) =>
        e ? LockedVault.toJSON(e) : undefined
      );
    } else {
      obj.lockedVault = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LockedVaultToAppMapping>, I>>(
    object: I
  ): LockedVaultToAppMapping {
    const message = createBaseLockedVaultToAppMapping();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.lockedVault =
      object.lockedVault?.map((e) => LockedVault.fromPartial(e)) || [];
    return message;
  },
};

function createBaseWhitelistedAppIds(): WhitelistedAppIds {
  return { whitelistedAppIds: [] };
}

export const WhitelistedAppIds = {
  encode(
    message: WhitelistedAppIds,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.whitelistedAppIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WhitelistedAppIds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistedAppIds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.whitelistedAppIds.push(reader.uint64() as Long);
            }
          } else {
            message.whitelistedAppIds.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WhitelistedAppIds {
    return {
      whitelistedAppIds: Array.isArray(object?.whitelistedAppIds)
        ? object.whitelistedAppIds.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: WhitelistedAppIds): unknown {
    const obj: any = {};
    if (message.whitelistedAppIds) {
      obj.whitelistedAppIds = message.whitelistedAppIds.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.whitelistedAppIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WhitelistedAppIds>, I>>(
    object: I
  ): WhitelistedAppIds {
    const message = createBaseWhitelistedAppIds();
    message.whitelistedAppIds =
      object.whitelistedAppIds?.map((e) => Long.fromValue(e)) || [];
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
