/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.asset.v1beta1";

export interface Pair {
  id: Long;
  assetIn: Long;
  assetOut: Long;
}

export interface PairInfo {
  id: Long;
  assetIn: Long;
  denomIn: string;
  assetOut: Long;
  denomOut: string;
}

export interface AssetPair {
  id: Long;
  name: string;
  denom: string;
  decimals: string;
  isOnChain: boolean;
  isOraclePriceRequired: boolean;
  isCdpMintable: boolean;
  assetOut: Long;
}

function createBasePair(): Pair {
  return { id: Long.UZERO, assetIn: Long.UZERO, assetOut: Long.UZERO };
}

export const Pair = {
  encode(message: Pair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.assetIn.isZero()) {
      writer.uint32(16).uint64(message.assetIn);
    }
    if (!message.assetOut.isZero()) {
      writer.uint32(24).uint64(message.assetOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePair();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pair {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      assetIn: isSet(object.assetIn) ? Long.fromValue(object.assetIn) : Long.UZERO,
      assetOut: isSet(object.assetOut) ? Long.fromValue(object.assetOut) : Long.UZERO,
    };
  },

  toJSON(message: Pair): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.assetIn !== undefined && (obj.assetIn = (message.assetIn || Long.UZERO).toString());
    message.assetOut !== undefined && (obj.assetOut = (message.assetOut || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<Pair>, I>>(base?: I): Pair {
    return Pair.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Pair>, I>>(object: I): Pair {
    const message = createBasePair();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.assetIn = (object.assetIn !== undefined && object.assetIn !== null)
      ? Long.fromValue(object.assetIn)
      : Long.UZERO;
    message.assetOut = (object.assetOut !== undefined && object.assetOut !== null)
      ? Long.fromValue(object.assetOut)
      : Long.UZERO;
    return message;
  },
};

function createBasePairInfo(): PairInfo {
  return { id: Long.UZERO, assetIn: Long.UZERO, denomIn: "", assetOut: Long.UZERO, denomOut: "" };
}

export const PairInfo = {
  encode(message: PairInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.assetIn.isZero()) {
      writer.uint32(16).uint64(message.assetIn);
    }
    if (message.denomIn !== "") {
      writer.uint32(26).string(message.denomIn);
    }
    if (!message.assetOut.isZero()) {
      writer.uint32(32).uint64(message.assetOut);
    }
    if (message.denomOut !== "") {
      writer.uint32(42).string(message.denomOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PairInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePairInfo();
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
          message.denomIn = reader.string();
          break;
        case 4:
          message.assetOut = reader.uint64() as Long;
          break;
        case 5:
          message.denomOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PairInfo {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      assetIn: isSet(object.assetIn) ? Long.fromValue(object.assetIn) : Long.UZERO,
      denomIn: isSet(object.denomIn) ? String(object.denomIn) : "",
      assetOut: isSet(object.assetOut) ? Long.fromValue(object.assetOut) : Long.UZERO,
      denomOut: isSet(object.denomOut) ? String(object.denomOut) : "",
    };
  },

  toJSON(message: PairInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.assetIn !== undefined && (obj.assetIn = (message.assetIn || Long.UZERO).toString());
    message.denomIn !== undefined && (obj.denomIn = message.denomIn);
    message.assetOut !== undefined && (obj.assetOut = (message.assetOut || Long.UZERO).toString());
    message.denomOut !== undefined && (obj.denomOut = message.denomOut);
    return obj;
  },

  create<I extends Exact<DeepPartial<PairInfo>, I>>(base?: I): PairInfo {
    return PairInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PairInfo>, I>>(object: I): PairInfo {
    const message = createBasePairInfo();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.assetIn = (object.assetIn !== undefined && object.assetIn !== null)
      ? Long.fromValue(object.assetIn)
      : Long.UZERO;
    message.denomIn = object.denomIn ?? "";
    message.assetOut = (object.assetOut !== undefined && object.assetOut !== null)
      ? Long.fromValue(object.assetOut)
      : Long.UZERO;
    message.denomOut = object.denomOut ?? "";
    return message;
  },
};

function createBaseAssetPair(): AssetPair {
  return {
    id: Long.UZERO,
    name: "",
    denom: "",
    decimals: "",
    isOnChain: false,
    isOraclePriceRequired: false,
    isCdpMintable: false,
    assetOut: Long.UZERO,
  };
}

export const AssetPair = {
  encode(message: AssetPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.assetOut.isZero()) {
      writer.uint32(64).uint64(message.assetOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetPair();
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
        case 8:
          message.assetOut = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetPair {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      decimals: isSet(object.decimals) ? String(object.decimals) : "",
      isOnChain: isSet(object.isOnChain) ? Boolean(object.isOnChain) : false,
      isOraclePriceRequired: isSet(object.isOraclePriceRequired) ? Boolean(object.isOraclePriceRequired) : false,
      isCdpMintable: isSet(object.isCdpMintable) ? Boolean(object.isCdpMintable) : false,
      assetOut: isSet(object.assetOut) ? Long.fromValue(object.assetOut) : Long.UZERO,
    };
  },

  toJSON(message: AssetPair): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.denom !== undefined && (obj.denom = message.denom);
    message.decimals !== undefined && (obj.decimals = message.decimals);
    message.isOnChain !== undefined && (obj.isOnChain = message.isOnChain);
    message.isOraclePriceRequired !== undefined && (obj.isOraclePriceRequired = message.isOraclePriceRequired);
    message.isCdpMintable !== undefined && (obj.isCdpMintable = message.isCdpMintable);
    message.assetOut !== undefined && (obj.assetOut = (message.assetOut || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<AssetPair>, I>>(base?: I): AssetPair {
    return AssetPair.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AssetPair>, I>>(object: I): AssetPair {
    const message = createBaseAssetPair();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.name = object.name ?? "";
    message.denom = object.denom ?? "";
    message.decimals = object.decimals ?? "";
    message.isOnChain = object.isOnChain ?? false;
    message.isOraclePriceRequired = object.isOraclePriceRequired ?? false;
    message.isCdpMintable = object.isCdpMintable ?? false;
    message.assetOut = (object.assetOut !== undefined && object.assetOut !== null)
      ? Long.fromValue(object.assetOut)
      : Long.UZERO;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
