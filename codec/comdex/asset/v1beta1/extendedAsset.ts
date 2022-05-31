/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.asset.v1beta1";

export interface ExtendedAsset {
  id: Long;
  assetId: Long;
  collateralWeight: string;
  liquidationThreshold: string;
  /** The rate indicates the price of the asset in USD */
  rate: string;
  isBridgedAsset: boolean;
}

function createBaseExtendedAsset(): ExtendedAsset {
  return {
    id: Long.UZERO,
    assetId: Long.UZERO,
    collateralWeight: "",
    liquidationThreshold: "",
    rate: "",
    isBridgedAsset: false,
  };
}

export const ExtendedAsset = {
  encode(
    message: ExtendedAsset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    if (message.collateralWeight !== "") {
      writer.uint32(26).string(message.collateralWeight);
    }
    if (message.liquidationThreshold !== "") {
      writer.uint32(34).string(message.liquidationThreshold);
    }
    if (message.rate !== "") {
      writer.uint32(42).string(message.rate);
    }
    if (message.isBridgedAsset === true) {
      writer.uint32(48).bool(message.isBridgedAsset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        case 3:
          message.collateralWeight = reader.string();
          break;
        case 4:
          message.liquidationThreshold = reader.string();
          break;
        case 5:
          message.rate = reader.string();
          break;
        case 6:
          message.isBridgedAsset = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExtendedAsset {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      collateralWeight: isSet(object.collateralWeight)
        ? String(object.collateralWeight)
        : "",
      liquidationThreshold: isSet(object.liquidationThreshold)
        ? String(object.liquidationThreshold)
        : "",
      rate: isSet(object.rate) ? String(object.rate) : "",
      isBridgedAsset: isSet(object.isBridgedAsset)
        ? Boolean(object.isBridgedAsset)
        : false,
    };
  },

  toJSON(message: ExtendedAsset): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.collateralWeight !== undefined &&
      (obj.collateralWeight = message.collateralWeight);
    message.liquidationThreshold !== undefined &&
      (obj.liquidationThreshold = message.liquidationThreshold);
    message.rate !== undefined && (obj.rate = message.rate);
    message.isBridgedAsset !== undefined &&
      (obj.isBridgedAsset = message.isBridgedAsset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExtendedAsset>, I>>(
    object: I
  ): ExtendedAsset {
    const message = createBaseExtendedAsset();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.collateralWeight = object.collateralWeight ?? "";
    message.liquidationThreshold = object.liquidationThreshold ?? "";
    message.rate = object.rate ?? "";
    message.isBridgedAsset = object.isBridgedAsset ?? false;
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
