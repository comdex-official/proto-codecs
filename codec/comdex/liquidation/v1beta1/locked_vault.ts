/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "codec/google/protobuf/timestamp";

export const protobufPackage = "comdex.liquidation.v1beta1";

export interface LockedVault {
  id: Long;
  vaultId: Long;
  pairId: Long;
  owner: string;
  amountIn: string;
  amountOut: string;
  initiator: string;
  isAuctionComplete: boolean;
  isAuctionInProgress: boolean;
  crAtLiquidation: string;
  currentCollateralisationRatio: string;
  collateralToBeAuctioned: string;
  liquidationTimestamp?: Date;
  selloffHistory: string[];
}

function createBaseLockedVault(): LockedVault {
  return {
    id: Long.UZERO,
    vaultId: Long.UZERO,
    pairId: Long.UZERO,
    owner: "",
    amountIn: "",
    amountOut: "",
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
    if (!message.vaultId.isZero()) {
      writer.uint32(16).uint64(message.vaultId);
    }
    if (!message.pairId.isZero()) {
      writer.uint32(24).uint64(message.pairId);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.amountIn !== "") {
      writer.uint32(42).string(message.amountIn);
    }
    if (message.amountOut !== "") {
      writer.uint32(50).string(message.amountOut);
    }
    if (message.initiator !== "") {
      writer.uint32(58).string(message.initiator);
    }
    if (message.isAuctionComplete === true) {
      writer.uint32(64).bool(message.isAuctionComplete);
    }
    if (message.isAuctionInProgress === true) {
      writer.uint32(72).bool(message.isAuctionInProgress);
    }
    if (message.crAtLiquidation !== "") {
      writer.uint32(82).string(message.crAtLiquidation);
    }
    if (message.currentCollateralisationRatio !== "") {
      writer.uint32(90).string(message.currentCollateralisationRatio);
    }
    if (message.collateralToBeAuctioned !== "") {
      writer.uint32(98).string(message.collateralToBeAuctioned);
    }
    if (message.liquidationTimestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.liquidationTimestamp),
        writer.uint32(106).fork()
      ).ldelim();
    }
    for (const v of message.selloffHistory) {
      writer.uint32(114).string(v!);
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
          message.vaultId = reader.uint64() as Long;
          break;
        case 3:
          message.pairId = reader.uint64() as Long;
          break;
        case 4:
          message.owner = reader.string();
          break;
        case 5:
          message.amountIn = reader.string();
          break;
        case 6:
          message.amountOut = reader.string();
          break;
        case 7:
          message.initiator = reader.string();
          break;
        case 8:
          message.isAuctionComplete = reader.bool();
          break;
        case 9:
          message.isAuctionInProgress = reader.bool();
          break;
        case 10:
          message.crAtLiquidation = reader.string();
          break;
        case 11:
          message.currentCollateralisationRatio = reader.string();
          break;
        case 12:
          message.collateralToBeAuctioned = reader.string();
          break;
        case 13:
          message.liquidationTimestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 14:
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
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      vaultId: isSet(object.vaultId)
        ? Long.fromString(object.vaultId)
        : Long.UZERO,
      pairId: isSet(object.pairId)
        ? Long.fromString(object.pairId)
        : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
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
    message.vaultId !== undefined &&
      (obj.vaultId = (message.vaultId || Long.UZERO).toString());
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut);
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
    message.vaultId =
      object.vaultId !== undefined && object.vaultId !== null
        ? Long.fromValue(object.vaultId)
        : Long.UZERO;
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.owner = object.owner ?? "";
    message.amountIn = object.amountIn ?? "";
    message.amountOut = object.amountOut ?? "";
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
