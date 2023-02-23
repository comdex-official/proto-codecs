/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.liquidity.v1beta1";

export interface UpdateGenericParamsProposal {
  appId: Long;
  keys: string[];
  values: string[];
  title: string;
  description: string;
}

export interface CreateNewLiquidityPairProposal {
  from: string;
  appId: Long;
  baseCoinDenom: string;
  quoteCoinDenom: string;
  title: string;
  description: string;
}

function createBaseUpdateGenericParamsProposal(): UpdateGenericParamsProposal {
  return {
    appId: Long.UZERO,
    keys: [],
    values: [],
    title: "",
    description: "",
  };
}

export const UpdateGenericParamsProposal = {
  encode(
    message: UpdateGenericParamsProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    for (const v of message.keys) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.values) {
      writer.uint32(26).string(v!);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateGenericParamsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGenericParamsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.keys.push(reader.string());
          break;
        case 3:
          message.values.push(reader.string());
          break;
        case 4:
          message.title = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateGenericParamsProposal {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      keys: Array.isArray(object?.keys)
        ? object.keys.map((e: any) => String(e))
        : [],
      values: Array.isArray(object?.values)
        ? object.values.map((e: any) => String(e))
        : [],
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: UpdateGenericParamsProposal): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    if (message.keys) {
      obj.keys = message.keys.map((e) => e);
    } else {
      obj.keys = [];
    }
    if (message.values) {
      obj.values = message.values.map((e) => e);
    } else {
      obj.values = [];
    }
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateGenericParamsProposal>, I>>(
    object: I
  ): UpdateGenericParamsProposal {
    const message = createBaseUpdateGenericParamsProposal();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.keys = object.keys?.map((e) => e) || [];
    message.values = object.values?.map((e) => e) || [];
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseCreateNewLiquidityPairProposal(): CreateNewLiquidityPairProposal {
  return {
    from: "",
    appId: Long.UZERO,
    baseCoinDenom: "",
    quoteCoinDenom: "",
    title: "",
    description: "",
  };
}

export const CreateNewLiquidityPairProposal = {
  encode(
    message: CreateNewLiquidityPairProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (message.baseCoinDenom !== "") {
      writer.uint32(26).string(message.baseCoinDenom);
    }
    if (message.quoteCoinDenom !== "") {
      writer.uint32(34).string(message.quoteCoinDenom);
    }
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateNewLiquidityPairProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateNewLiquidityPairProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.appId = reader.uint64() as Long;
          break;
        case 3:
          message.baseCoinDenom = reader.string();
          break;
        case 4:
          message.quoteCoinDenom = reader.string();
          break;
        case 5:
          message.title = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateNewLiquidityPairProposal {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      baseCoinDenom: isSet(object.baseCoinDenom)
        ? String(object.baseCoinDenom)
        : "",
      quoteCoinDenom: isSet(object.quoteCoinDenom)
        ? String(object.quoteCoinDenom)
        : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: CreateNewLiquidityPairProposal): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.baseCoinDenom !== undefined &&
      (obj.baseCoinDenom = message.baseCoinDenom);
    message.quoteCoinDenom !== undefined &&
      (obj.quoteCoinDenom = message.quoteCoinDenom);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateNewLiquidityPairProposal>, I>>(
    object: I
  ): CreateNewLiquidityPairProposal {
    const message = createBaseCreateNewLiquidityPairProposal();
    message.from = object.from ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.baseCoinDenom = object.baseCoinDenom ?? "";
    message.quoteCoinDenom = object.quoteCoinDenom ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
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
