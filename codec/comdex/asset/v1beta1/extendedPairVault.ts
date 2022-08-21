/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.asset.v1beta1";

export interface ExtendedPairVault {
  id: Long;
  appId: Long;
  pairId: Long;
  stabilityFee: string;
  closingFee: string;
  liquidationPenalty: string;
  drawDownFee: string;
  isVaultActive: boolean;
  debtCeiling: string;
  debtFloor: string;
  isStableMintVault: boolean;
  minCr: string;
  pairName: string;
  assetOutOraclePrice: boolean;
  assetOutPrice: Long;
  minUsdValueLeft: Long;
  blockHeight: Long;
  blockTime?: Date;
}

function createBaseExtendedPairVault(): ExtendedPairVault {
  return {
    id: Long.UZERO,
    appId: Long.UZERO,
    pairId: Long.UZERO,
    stabilityFee: "",
    closingFee: "",
    liquidationPenalty: "",
    drawDownFee: "",
    isVaultActive: false,
    debtCeiling: "",
    debtFloor: "",
    isStableMintVault: false,
    minCr: "",
    pairName: "",
    assetOutOraclePrice: false,
    assetOutPrice: Long.UZERO,
    minUsdValueLeft: Long.UZERO,
    blockHeight: Long.ZERO,
    blockTime: undefined,
  };
}

export const ExtendedPairVault = {
  encode(
    message: ExtendedPairVault,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (!message.pairId.isZero()) {
      writer.uint32(24).uint64(message.pairId);
    }
    if (message.stabilityFee !== "") {
      writer.uint32(34).string(message.stabilityFee);
    }
    if (message.closingFee !== "") {
      writer.uint32(42).string(message.closingFee);
    }
    if (message.liquidationPenalty !== "") {
      writer.uint32(50).string(message.liquidationPenalty);
    }
    if (message.drawDownFee !== "") {
      writer.uint32(58).string(message.drawDownFee);
    }
    if (message.isVaultActive === true) {
      writer.uint32(64).bool(message.isVaultActive);
    }
    if (message.debtCeiling !== "") {
      writer.uint32(74).string(message.debtCeiling);
    }
    if (message.debtFloor !== "") {
      writer.uint32(82).string(message.debtFloor);
    }
    if (message.isStableMintVault === true) {
      writer.uint32(88).bool(message.isStableMintVault);
    }
    if (message.minCr !== "") {
      writer.uint32(98).string(message.minCr);
    }
    if (message.pairName !== "") {
      writer.uint32(106).string(message.pairName);
    }
    if (message.assetOutOraclePrice === true) {
      writer.uint32(112).bool(message.assetOutOraclePrice);
    }
    if (!message.assetOutPrice.isZero()) {
      writer.uint32(120).uint64(message.assetOutPrice);
    }
    if (!message.minUsdValueLeft.isZero()) {
      writer.uint32(128).uint64(message.minUsdValueLeft);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(136).int64(message.blockHeight);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.blockTime),
        writer.uint32(146).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedPairVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedPairVault();
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
          message.pairId = reader.uint64() as Long;
          break;
        case 4:
          message.stabilityFee = reader.string();
          break;
        case 5:
          message.closingFee = reader.string();
          break;
        case 6:
          message.liquidationPenalty = reader.string();
          break;
        case 7:
          message.drawDownFee = reader.string();
          break;
        case 8:
          message.isVaultActive = reader.bool();
          break;
        case 9:
          message.debtCeiling = reader.string();
          break;
        case 10:
          message.debtFloor = reader.string();
          break;
        case 11:
          message.isStableMintVault = reader.bool();
          break;
        case 12:
          message.minCr = reader.string();
          break;
        case 13:
          message.pairName = reader.string();
          break;
        case 14:
          message.assetOutOraclePrice = reader.bool();
          break;
        case 15:
          message.assetOutPrice = reader.uint64() as Long;
          break;
        case 16:
          message.minUsdValueLeft = reader.uint64() as Long;
          break;
        case 17:
          message.blockHeight = reader.int64() as Long;
          break;
        case 18:
          message.blockTime = fromTimestamp(
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

  fromJSON(object: any): ExtendedPairVault {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      pairId: isSet(object.pairId) ? Long.fromValue(object.pairId) : Long.UZERO,
      stabilityFee: isSet(object.stabilityFee)
        ? String(object.stabilityFee)
        : "",
      closingFee: isSet(object.closingFee) ? String(object.closingFee) : "",
      liquidationPenalty: isSet(object.liquidationPenalty)
        ? String(object.liquidationPenalty)
        : "",
      drawDownFee: isSet(object.drawDownFee) ? String(object.drawDownFee) : "",
      isVaultActive: isSet(object.isVaultActive)
        ? Boolean(object.isVaultActive)
        : false,
      debtCeiling: isSet(object.debtCeiling) ? String(object.debtCeiling) : "",
      debtFloor: isSet(object.debtFloor) ? String(object.debtFloor) : "",
      isStableMintVault: isSet(object.isStableMintVault)
        ? Boolean(object.isStableMintVault)
        : false,
      minCr: isSet(object.minCr) ? String(object.minCr) : "",
      pairName: isSet(object.pairName) ? String(object.pairName) : "",
      assetOutOraclePrice: isSet(object.assetOutOraclePrice)
        ? Boolean(object.assetOutOraclePrice)
        : false,
      assetOutPrice: isSet(object.assetOutPrice)
        ? Long.fromValue(object.assetOutPrice)
        : Long.UZERO,
      minUsdValueLeft: isSet(object.minUsdValueLeft)
        ? Long.fromValue(object.minUsdValueLeft)
        : Long.UZERO,
      blockHeight: isSet(object.blockHeight)
        ? Long.fromValue(object.blockHeight)
        : Long.ZERO,
      blockTime: isSet(object.blockTime)
        ? fromJsonTimestamp(object.blockTime)
        : undefined,
    };
  },

  toJSON(message: ExtendedPairVault): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.stabilityFee !== undefined &&
      (obj.stabilityFee = message.stabilityFee);
    message.closingFee !== undefined && (obj.closingFee = message.closingFee);
    message.liquidationPenalty !== undefined &&
      (obj.liquidationPenalty = message.liquidationPenalty);
    message.drawDownFee !== undefined &&
      (obj.drawDownFee = message.drawDownFee);
    message.isVaultActive !== undefined &&
      (obj.isVaultActive = message.isVaultActive);
    message.debtCeiling !== undefined &&
      (obj.debtCeiling = message.debtCeiling);
    message.debtFloor !== undefined && (obj.debtFloor = message.debtFloor);
    message.isStableMintVault !== undefined &&
      (obj.isStableMintVault = message.isStableMintVault);
    message.minCr !== undefined && (obj.minCr = message.minCr);
    message.pairName !== undefined && (obj.pairName = message.pairName);
    message.assetOutOraclePrice !== undefined &&
      (obj.assetOutOraclePrice = message.assetOutOraclePrice);
    message.assetOutPrice !== undefined &&
      (obj.assetOutPrice = (message.assetOutPrice || Long.UZERO).toString());
    message.minUsdValueLeft !== undefined &&
      (obj.minUsdValueLeft = (
        message.minUsdValueLeft || Long.UZERO
      ).toString());
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.blockTime !== undefined &&
      (obj.blockTime = message.blockTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExtendedPairVault>, I>>(
    object: I
  ): ExtendedPairVault {
    const message = createBaseExtendedPairVault();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.stabilityFee = object.stabilityFee ?? "";
    message.closingFee = object.closingFee ?? "";
    message.liquidationPenalty = object.liquidationPenalty ?? "";
    message.drawDownFee = object.drawDownFee ?? "";
    message.isVaultActive = object.isVaultActive ?? false;
    message.debtCeiling = object.debtCeiling ?? "";
    message.debtFloor = object.debtFloor ?? "";
    message.isStableMintVault = object.isStableMintVault ?? false;
    message.minCr = object.minCr ?? "";
    message.pairName = object.pairName ?? "";
    message.assetOutOraclePrice = object.assetOutOraclePrice ?? false;
    message.assetOutPrice =
      object.assetOutPrice !== undefined && object.assetOutPrice !== null
        ? Long.fromValue(object.assetOutPrice)
        : Long.UZERO;
    message.minUsdValueLeft =
      object.minUsdValueLeft !== undefined && object.minUsdValueLeft !== null
        ? Long.fromValue(object.minUsdValueLeft)
        : Long.UZERO;
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.ZERO;
    message.blockTime = object.blockTime ?? undefined;
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
