/* eslint-disable */
import Long from "long";
import  _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.liquidation.v1beta1";

export interface LockedVault {
  id: Long;
  appMappingId: Long;
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
}

export interface LockedVaultToAppMapping {
  appMappingId: Long;
  lockedVault: LockedVault[];
}

export interface WhitelistedAppIds {
  whitelistedAppMappingIds: Long[];
}

function createBaseLockedVault(): LockedVault {
  return {
    id: Long.UZERO,
    appMappingId: Long.UZERO,
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
    if (!message.appMappingId.isZero()) {
      writer.uint32(16).uint64(message.appMappingId);
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
          message.appMappingId = reader.uint64() as Long;
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
      appMappingId: isSet(object.appMappingId)
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO,
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
    };
  },

  toJSON(message: LockedVault): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
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
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
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
    return message;
  },
};

function createBaseLockedVaultToAppMapping(): LockedVaultToAppMapping {
  return { appMappingId: Long.UZERO, lockedVault: [] };
}

export const LockedVaultToAppMapping = {
  encode(
    message: LockedVaultToAppMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appMappingId.isZero()) {
      writer.uint32(8).uint64(message.appMappingId);
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
          message.appMappingId = reader.uint64() as Long;
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
      appMappingId: isSet(object.appMappingId)
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO,
      lockedVault: Array.isArray(object?.lockedVault)
        ? object.lockedVault.map((e: any) => LockedVault.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LockedVaultToAppMapping): unknown {
    const obj: any = {};
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
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
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO;
    message.lockedVault =
      object.lockedVault?.map((e) => LockedVault.fromPartial(e)) || [];
    return message;
  },
};

function createBaseWhitelistedAppIds(): WhitelistedAppIds {
  return { whitelistedAppMappingIds: [] };
}

export const WhitelistedAppIds = {
  encode(
    message: WhitelistedAppIds,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.whitelistedAppMappingIds) {
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
              message.whitelistedAppMappingIds.push(reader.uint64() as Long);
            }
          } else {
            message.whitelistedAppMappingIds.push(reader.uint64() as Long);
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
      whitelistedAppMappingIds: Array.isArray(object?.whitelistedAppMappingIds)
        ? object.whitelistedAppMappingIds.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: WhitelistedAppIds): unknown {
    const obj: any = {};
    if (message.whitelistedAppMappingIds) {
      obj.whitelistedAppMappingIds = message.whitelistedAppMappingIds.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.whitelistedAppMappingIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WhitelistedAppIds>, I>>(
    object: I
  ): WhitelistedAppIds {
    const message = createBaseWhitelistedAppIds();
    message.whitelistedAppMappingIds =
      object.whitelistedAppMappingIds?.map((e) => Long.fromValue(e)) || [];
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
