/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  ExtendedPair,
  Pool,
  AssetToPairMapping,
  AssetRatesStats,
} from "../../../comdex/lend/v1beta1/lend";

export const protobufPackage = "comdex.lend.v1beta1";

export interface LendPairsProposal {
  title: string;
  description: string;
  pairs: ExtendedPair[];
}

export interface UpdatePairProposal {
  title: string;
  description: string;
  pair?: ExtendedPair;
}

export interface AddPoolsProposal {
  title: string;
  description: string;
  Pool?: Pool;
}

export interface AddAssetToPairProposal {
  title: string;
  description: string;
  AssetToPairMapping?: AssetToPairMapping;
}

export interface AddAssetRatesStats {
  title: string;
  description: string;
  AssetRatesStats: AssetRatesStats[];
}

function createBaseLendPairsProposal(): LendPairsProposal {
  return { title: "", description: "", pairs: [] };
}

export const LendPairsProposal = {
  encode(
    message: LendPairsProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.pairs) {
      ExtendedPair.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LendPairsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLendPairsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.pairs.push(ExtendedPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LendPairsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      pairs: Array.isArray(object?.pairs)
        ? object.pairs.map((e: any) => ExtendedPair.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LendPairsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.pairs) {
      obj.pairs = message.pairs.map((e) =>
        e ? ExtendedPair.toJSON(e) : undefined
      );
    } else {
      obj.pairs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LendPairsProposal>, I>>(
    object: I
  ): LendPairsProposal {
    const message = createBaseLendPairsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.pairs = object.pairs?.map((e) => ExtendedPair.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdatePairProposal(): UpdatePairProposal {
  return { title: "", description: "", pair: undefined };
}

export const UpdatePairProposal = {
  encode(
    message: UpdatePairProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.pair !== undefined) {
      ExtendedPair.encode(message.pair, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePairProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePairProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.pair = ExtendedPair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePairProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      pair: isSet(object.pair) ? ExtendedPair.fromJSON(object.pair) : undefined,
    };
  },

  toJSON(message: UpdatePairProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.pair !== undefined &&
      (obj.pair = message.pair ? ExtendedPair.toJSON(message.pair) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdatePairProposal>, I>>(
    object: I
  ): UpdatePairProposal {
    const message = createBaseUpdatePairProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.pair =
      object.pair !== undefined && object.pair !== null
        ? ExtendedPair.fromPartial(object.pair)
        : undefined;
    return message;
  },
};

function createBaseAddPoolsProposal(): AddPoolsProposal {
  return { title: "", description: "", Pool: undefined };
}

export const AddPoolsProposal = {
  encode(
    message: AddPoolsProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.Pool !== undefined) {
      Pool.encode(message.Pool, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddPoolsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddPoolsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.Pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddPoolsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      Pool: isSet(object.Pool) ? Pool.fromJSON(object.Pool) : undefined,
    };
  },

  toJSON(message: AddPoolsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.Pool !== undefined &&
      (obj.Pool = message.Pool ? Pool.toJSON(message.Pool) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddPoolsProposal>, I>>(
    object: I
  ): AddPoolsProposal {
    const message = createBaseAddPoolsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.Pool =
      object.Pool !== undefined && object.Pool !== null
        ? Pool.fromPartial(object.Pool)
        : undefined;
    return message;
  },
};

function createBaseAddAssetToPairProposal(): AddAssetToPairProposal {
  return { title: "", description: "", AssetToPairMapping: undefined };
}

export const AddAssetToPairProposal = {
  encode(
    message: AddAssetToPairProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.AssetToPairMapping !== undefined) {
      AssetToPairMapping.encode(
        message.AssetToPairMapping,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddAssetToPairProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddAssetToPairProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.AssetToPairMapping = AssetToPairMapping.decode(
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

  fromJSON(object: any): AddAssetToPairProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      AssetToPairMapping: isSet(object.AssetToPairMapping)
        ? AssetToPairMapping.fromJSON(object.AssetToPairMapping)
        : undefined,
    };
  },

  toJSON(message: AddAssetToPairProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.AssetToPairMapping !== undefined &&
      (obj.AssetToPairMapping = message.AssetToPairMapping
        ? AssetToPairMapping.toJSON(message.AssetToPairMapping)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddAssetToPairProposal>, I>>(
    object: I
  ): AddAssetToPairProposal {
    const message = createBaseAddAssetToPairProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.AssetToPairMapping =
      object.AssetToPairMapping !== undefined &&
      object.AssetToPairMapping !== null
        ? AssetToPairMapping.fromPartial(object.AssetToPairMapping)
        : undefined;
    return message;
  },
};

function createBaseAddAssetRatesStats(): AddAssetRatesStats {
  return { title: "", description: "", AssetRatesStats: [] };
}

export const AddAssetRatesStats = {
  encode(
    message: AddAssetRatesStats,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.AssetRatesStats) {
      AssetRatesStats.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddAssetRatesStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddAssetRatesStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.AssetRatesStats.push(
            AssetRatesStats.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddAssetRatesStats {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      AssetRatesStats: Array.isArray(object?.AssetRatesStats)
        ? object.AssetRatesStats.map((e: any) => AssetRatesStats.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AddAssetRatesStats): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.AssetRatesStats) {
      obj.AssetRatesStats = message.AssetRatesStats.map((e) =>
        e ? AssetRatesStats.toJSON(e) : undefined
      );
    } else {
      obj.AssetRatesStats = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddAssetRatesStats>, I>>(
    object: I
  ): AddAssetRatesStats {
    const message = createBaseAddAssetRatesStats();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.AssetRatesStats =
      object.AssetRatesStats?.map((e) => AssetRatesStats.fromPartial(e)) || [];
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
