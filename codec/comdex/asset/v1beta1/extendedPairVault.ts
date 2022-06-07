/* eslint-disable */
import Long from "long";
import  _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.asset.v1beta1";

export interface ExtendedPairVault {
  id: Long;
  appMappingId: Long;
  pairId: Long;
  liquidationRatio: string;
  stabilityFee: string;
  closingFee: string;
  liquidationPenalty: string;
  drawDownFee: string;
  isVaultActive: boolean;
  debtCeiling: string;
  debtFloor: string;
  isPsmPair: boolean;
  minCr: string;
  pairName: string;
  assetOutOraclePrice: boolean;
  assetOutPrice: Long;
  minUsdValueLeft: Long;
}

function createBaseExtendedPairVault(): ExtendedPairVault {
  return {
    id: Long.UZERO,
    appMappingId: Long.UZERO,
    pairId: Long.UZERO,
    liquidationRatio: "",
    stabilityFee: "",
    closingFee: "",
    liquidationPenalty: "",
    drawDownFee: "",
    isVaultActive: false,
    debtCeiling: "",
    debtFloor: "",
    isPsmPair: false,
    minCr: "",
    pairName: "",
    assetOutOraclePrice: false,
    assetOutPrice: Long.UZERO,
    minUsdValueLeft: Long.UZERO,
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
    if (!message.appMappingId.isZero()) {
      writer.uint32(16).uint64(message.appMappingId);
    }
    if (!message.pairId.isZero()) {
      writer.uint32(24).uint64(message.pairId);
    }
    if (message.liquidationRatio !== "") {
      writer.uint32(34).string(message.liquidationRatio);
    }
    if (message.stabilityFee !== "") {
      writer.uint32(42).string(message.stabilityFee);
    }
    if (message.closingFee !== "") {
      writer.uint32(50).string(message.closingFee);
    }
    if (message.liquidationPenalty !== "") {
      writer.uint32(58).string(message.liquidationPenalty);
    }
    if (message.drawDownFee !== "") {
      writer.uint32(66).string(message.drawDownFee);
    }
    if (message.isVaultActive === true) {
      writer.uint32(72).bool(message.isVaultActive);
    }
    if (message.debtCeiling !== "") {
      writer.uint32(82).string(message.debtCeiling);
    }
    if (message.debtFloor !== "") {
      writer.uint32(90).string(message.debtFloor);
    }
    if (message.isPsmPair === true) {
      writer.uint32(96).bool(message.isPsmPair);
    }
    if (message.minCr !== "") {
      writer.uint32(106).string(message.minCr);
    }
    if (message.pairName !== "") {
      writer.uint32(114).string(message.pairName);
    }
    if (message.assetOutOraclePrice === true) {
      writer.uint32(120).bool(message.assetOutOraclePrice);
    }
    if (!message.assetOutPrice.isZero()) {
      writer.uint32(128).uint64(message.assetOutPrice);
    }
    if (!message.minUsdValueLeft.isZero()) {
      writer.uint32(136).uint64(message.minUsdValueLeft);
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
          message.appMappingId = reader.uint64() as Long;
          break;
        case 3:
          message.pairId = reader.uint64() as Long;
          break;
        case 4:
          message.liquidationRatio = reader.string();
          break;
        case 5:
          message.stabilityFee = reader.string();
          break;
        case 6:
          message.closingFee = reader.string();
          break;
        case 7:
          message.liquidationPenalty = reader.string();
          break;
        case 8:
          message.drawDownFee = reader.string();
          break;
        case 9:
          message.isVaultActive = reader.bool();
          break;
        case 10:
          message.debtCeiling = reader.string();
          break;
        case 11:
          message.debtFloor = reader.string();
          break;
        case 12:
          message.isPsmPair = reader.bool();
          break;
        case 13:
          message.minCr = reader.string();
          break;
        case 14:
          message.pairName = reader.string();
          break;
        case 15:
          message.assetOutOraclePrice = reader.bool();
          break;
        case 16:
          message.assetOutPrice = reader.uint64() as Long;
          break;
        case 17:
          message.minUsdValueLeft = reader.uint64() as Long;
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
      appMappingId: isSet(object.appMappingId)
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO,
      pairId: isSet(object.pairId) ? Long.fromValue(object.pairId) : Long.UZERO,
      liquidationRatio: isSet(object.liquidationRatio)
        ? String(object.liquidationRatio)
        : "",
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
      isPsmPair: isSet(object.isPsmPair) ? Boolean(object.isPsmPair) : false,
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
    };
  },

  toJSON(message: ExtendedPairVault): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.liquidationRatio !== undefined &&
      (obj.liquidationRatio = message.liquidationRatio);
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
    message.isPsmPair !== undefined && (obj.isPsmPair = message.isPsmPair);
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
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO;
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.liquidationRatio = object.liquidationRatio ?? "";
    message.stabilityFee = object.stabilityFee ?? "";
    message.closingFee = object.closingFee ?? "";
    message.liquidationPenalty = object.liquidationPenalty ?? "";
    message.drawDownFee = object.drawDownFee ?? "";
    message.isVaultActive = object.isVaultActive ?? false;
    message.debtCeiling = object.debtCeiling ?? "";
    message.debtFloor = object.debtFloor ?? "";
    message.isPsmPair = object.isPsmPair ?? false;
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
