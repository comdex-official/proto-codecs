/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.bandoracle.v1beta1";

export interface FetchPriceCallData {
  symbols: string[];
  multiplier: Long;
}

export interface FetchPriceResult {
  rates: Long[];
}

export interface Market {
  symbol: string;
  scriptId: Long;
}

export interface DiscardData {
  blockHeight: Long;
  discardBool: boolean;
}

function createBaseFetchPriceCallData(): FetchPriceCallData {
  return { symbols: [], multiplier: Long.UZERO };
}

export const FetchPriceCallData = {
  encode(message: FetchPriceCallData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.symbols) {
      writer.uint32(10).string(v!);
    }
    if (!message.multiplier.isZero()) {
      writer.uint32(16).uint64(message.multiplier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchPriceCallData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchPriceCallData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbols.push(reader.string());
          break;
        case 2:
          message.multiplier = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FetchPriceCallData {
    return {
      symbols: Array.isArray(object?.symbols) ? object.symbols.map((e: any) => String(e)) : [],
      multiplier: isSet(object.multiplier) ? Long.fromValue(object.multiplier) : Long.UZERO,
    };
  },

  toJSON(message: FetchPriceCallData): unknown {
    const obj: any = {};
    if (message.symbols) {
      obj.symbols = message.symbols.map((e) => e);
    } else {
      obj.symbols = [];
    }
    message.multiplier !== undefined && (obj.multiplier = (message.multiplier || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<FetchPriceCallData>, I>>(base?: I): FetchPriceCallData {
    return FetchPriceCallData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FetchPriceCallData>, I>>(object: I): FetchPriceCallData {
    const message = createBaseFetchPriceCallData();
    message.symbols = object.symbols?.map((e) => e) || [];
    message.multiplier = (object.multiplier !== undefined && object.multiplier !== null)
      ? Long.fromValue(object.multiplier)
      : Long.UZERO;
    return message;
  },
};

function createBaseFetchPriceResult(): FetchPriceResult {
  return { rates: [] };
}

export const FetchPriceResult = {
  encode(message: FetchPriceResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.rates) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchPriceResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchPriceResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.rates.push(reader.uint64() as Long);
            }
          } else {
            message.rates.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FetchPriceResult {
    return { rates: Array.isArray(object?.rates) ? object.rates.map((e: any) => Long.fromValue(e)) : [] };
  },

  toJSON(message: FetchPriceResult): unknown {
    const obj: any = {};
    if (message.rates) {
      obj.rates = message.rates.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.rates = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FetchPriceResult>, I>>(base?: I): FetchPriceResult {
    return FetchPriceResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FetchPriceResult>, I>>(object: I): FetchPriceResult {
    const message = createBaseFetchPriceResult();
    message.rates = object.rates?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseMarket(): Market {
  return { symbol: "", scriptId: Long.UZERO };
}

export const Market = {
  encode(message: Market, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (!message.scriptId.isZero()) {
      writer.uint32(16).uint64(message.scriptId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Market {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;
        case 2:
          message.scriptId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Market {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      scriptId: isSet(object.scriptId) ? Long.fromValue(object.scriptId) : Long.UZERO,
    };
  },

  toJSON(message: Market): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.scriptId !== undefined && (obj.scriptId = (message.scriptId || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<Market>, I>>(base?: I): Market {
    return Market.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Market>, I>>(object: I): Market {
    const message = createBaseMarket();
    message.symbol = object.symbol ?? "";
    message.scriptId = (object.scriptId !== undefined && object.scriptId !== null)
      ? Long.fromValue(object.scriptId)
      : Long.UZERO;
    return message;
  },
};

function createBaseDiscardData(): DiscardData {
  return { blockHeight: Long.ZERO, discardBool: false };
}

export const DiscardData = {
  encode(message: DiscardData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }
    if (message.discardBool === true) {
      writer.uint32(16).bool(message.discardBool);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiscardData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiscardData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64() as Long;
          break;
        case 2:
          message.discardBool = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DiscardData {
    return {
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      discardBool: isSet(object.discardBool) ? Boolean(object.discardBool) : false,
    };
  },

  toJSON(message: DiscardData): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.discardBool !== undefined && (obj.discardBool = message.discardBool);
    return obj;
  },

  create<I extends Exact<DeepPartial<DiscardData>, I>>(base?: I): DiscardData {
    return DiscardData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DiscardData>, I>>(object: I): DiscardData {
    const message = createBaseDiscardData();
    message.blockHeight = (object.blockHeight !== undefined && object.blockHeight !== null)
      ? Long.fromValue(object.blockHeight)
      : Long.ZERO;
    message.discardBool = object.discardBool ?? false;
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
