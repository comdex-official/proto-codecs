/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.asset.v1beta1";

export interface Asset {
  id: Long;
  name: string;
  denom: string;
  decimals: string;
  isOnChain: boolean;
  isOraclePriceRequired: boolean;
  isCdpMintable: boolean;
}

function createBaseAsset(): Asset {
  return {
    id: Long.UZERO,
    name: "",
    denom: "",
    decimals: "",
    isOnChain: false,
    isOraclePriceRequired: false,
    isCdpMintable: false,
  };
}

export const Asset = {
  encode(message: Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.decimals !== "") {
      writer.uint32(34).string(message.decimals);
    }
    if (message.isOnChain === true) {
      writer.uint32(40).bool(message.isOnChain);
    }
    if (message.isOraclePriceRequired === true) {
      writer.uint32(48).bool(message.isOraclePriceRequired);
    }
    if (message.isCdpMintable === true) {
      writer.uint32(56).bool(message.isCdpMintable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Asset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.decimals = reader.string();
          break;
        case 5:
          message.isOnChain = reader.bool();
          break;
        case 6:
          message.isOraclePriceRequired = reader.bool();
          break;
        case 7:
          message.isCdpMintable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Asset {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      decimals: isSet(object.decimals) ? String(object.decimals) : "",
      isOnChain: isSet(object.isOnChain) ? Boolean(object.isOnChain) : false,
      isOraclePriceRequired: isSet(object.isOraclePriceRequired)
        ? Boolean(object.isOraclePriceRequired)
        : false,
      isCdpMintable: isSet(object.isCdpMintable)
        ? Boolean(object.isCdpMintable)
        : false,
    };
  },

  toJSON(message: Asset): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.denom !== undefined && (obj.denom = message.denom);
    message.decimals !== undefined && (obj.decimals = message.decimals);
    message.isOnChain !== undefined && (obj.isOnChain = message.isOnChain);
    message.isOraclePriceRequired !== undefined &&
      (obj.isOraclePriceRequired = message.isOraclePriceRequired);
    message.isCdpMintable !== undefined &&
      (obj.isCdpMintable = message.isCdpMintable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Asset>, I>>(object: I): Asset {
    const message = createBaseAsset();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.name = object.name ?? "";
    message.denom = object.denom ?? "";
    message.decimals = object.decimals ?? "";
    message.isOnChain = object.isOnChain ?? false;
    message.isOraclePriceRequired = object.isOraclePriceRequired ?? false;
    message.isCdpMintable = object.isCdpMintable ?? false;
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
