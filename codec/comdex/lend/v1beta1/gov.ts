/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  ExtendedPair,
  Pool,
  AssetToPairMapping,
  AssetRatesParams,
  AuctionParams,
  PoolPairs,
  AssetRatesPoolPairs,
  AssetToPairSingleMapping,
} from "../../../comdex/lend/v1beta1/lend";

export const protobufPackage = "comdex.lend.v1beta1";

export interface LendPairsProposal {
  title: string;
  description: string;
  pairs?: ExtendedPair;
}

export interface MultipleLendPairsProposal {
  title: string;
  description: string;
  pairs: ExtendedPair[];
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

export interface AddMultipleAssetToPairProposal {
  title: string;
  description: string;
  AssetToPairSingleMapping: AssetToPairSingleMapping[];
}

export interface AddAssetRatesParams {
  title: string;
  description: string;
  AssetRatesParams?: AssetRatesParams;
}

export interface AddAuctionParamsProposal {
  title: string;
  description: string;
  AuctionParams?: AuctionParams;
}

export interface AddPoolPairsProposal {
  title: string;
  description: string;
  PoolPairs?: PoolPairs;
}

export interface AddAssetRatesPoolPairsProposal {
  title: string;
  description: string;
  AssetRatesPoolPairs?: AssetRatesPoolPairs;
}

function createBaseLendPairsProposal(): LendPairsProposal {
  return { title: "", description: "", pairs: undefined };
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
    if (message.pairs !== undefined) {
      ExtendedPair.encode(message.pairs, writer.uint32(26).fork()).ldelim();
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
          message.pairs = ExtendedPair.decode(reader, reader.uint32());
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
      pairs: isSet(object.pairs)
        ? ExtendedPair.fromJSON(object.pairs)
        : undefined,
    };
  },

  toJSON(message: LendPairsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.pairs !== undefined &&
      (obj.pairs = message.pairs
        ? ExtendedPair.toJSON(message.pairs)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LendPairsProposal>, I>>(
    object: I
  ): LendPairsProposal {
    const message = createBaseLendPairsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.pairs =
      object.pairs !== undefined && object.pairs !== null
        ? ExtendedPair.fromPartial(object.pairs)
        : undefined;
    return message;
  },
};

function createBaseMultipleLendPairsProposal(): MultipleLendPairsProposal {
  return { title: "", description: "", pairs: [] };
}

export const MultipleLendPairsProposal = {
  encode(
    message: MultipleLendPairsProposal,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MultipleLendPairsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultipleLendPairsProposal();
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

  fromJSON(object: any): MultipleLendPairsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      pairs: Array.isArray(object?.pairs)
        ? object.pairs.map((e: any) => ExtendedPair.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MultipleLendPairsProposal): unknown {
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

  fromPartial<I extends Exact<DeepPartial<MultipleLendPairsProposal>, I>>(
    object: I
  ): MultipleLendPairsProposal {
    const message = createBaseMultipleLendPairsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.pairs = object.pairs?.map((e) => ExtendedPair.fromPartial(e)) || [];
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

function createBaseAddMultipleAssetToPairProposal(): AddMultipleAssetToPairProposal {
  return { title: "", description: "", AssetToPairSingleMapping: [] };
}

export const AddMultipleAssetToPairProposal = {
  encode(
    message: AddMultipleAssetToPairProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.AssetToPairSingleMapping) {
      AssetToPairSingleMapping.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddMultipleAssetToPairProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddMultipleAssetToPairProposal();
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
          message.AssetToPairSingleMapping.push(
            AssetToPairSingleMapping.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddMultipleAssetToPairProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      AssetToPairSingleMapping: Array.isArray(object?.AssetToPairSingleMapping)
        ? object.AssetToPairSingleMapping.map((e: any) =>
            AssetToPairSingleMapping.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: AddMultipleAssetToPairProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.AssetToPairSingleMapping) {
      obj.AssetToPairSingleMapping = message.AssetToPairSingleMapping.map((e) =>
        e ? AssetToPairSingleMapping.toJSON(e) : undefined
      );
    } else {
      obj.AssetToPairSingleMapping = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddMultipleAssetToPairProposal>, I>>(
    object: I
  ): AddMultipleAssetToPairProposal {
    const message = createBaseAddMultipleAssetToPairProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.AssetToPairSingleMapping =
      object.AssetToPairSingleMapping?.map((e) =>
        AssetToPairSingleMapping.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseAddAssetRatesParams(): AddAssetRatesParams {
  return { title: "", description: "", AssetRatesParams: undefined };
}

export const AddAssetRatesParams = {
  encode(
    message: AddAssetRatesParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.AssetRatesParams !== undefined) {
      AssetRatesParams.encode(
        message.AssetRatesParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddAssetRatesParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddAssetRatesParams();
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
          message.AssetRatesParams = AssetRatesParams.decode(
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

  fromJSON(object: any): AddAssetRatesParams {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      AssetRatesParams: isSet(object.AssetRatesParams)
        ? AssetRatesParams.fromJSON(object.AssetRatesParams)
        : undefined,
    };
  },

  toJSON(message: AddAssetRatesParams): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.AssetRatesParams !== undefined &&
      (obj.AssetRatesParams = message.AssetRatesParams
        ? AssetRatesParams.toJSON(message.AssetRatesParams)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddAssetRatesParams>, I>>(
    object: I
  ): AddAssetRatesParams {
    const message = createBaseAddAssetRatesParams();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.AssetRatesParams =
      object.AssetRatesParams !== undefined && object.AssetRatesParams !== null
        ? AssetRatesParams.fromPartial(object.AssetRatesParams)
        : undefined;
    return message;
  },
};

function createBaseAddAuctionParamsProposal(): AddAuctionParamsProposal {
  return { title: "", description: "", AuctionParams: undefined };
}

export const AddAuctionParamsProposal = {
  encode(
    message: AddAuctionParamsProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.AuctionParams !== undefined) {
      AuctionParams.encode(
        message.AuctionParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddAuctionParamsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddAuctionParamsProposal();
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
          message.AuctionParams = AuctionParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddAuctionParamsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      AuctionParams: isSet(object.AuctionParams)
        ? AuctionParams.fromJSON(object.AuctionParams)
        : undefined,
    };
  },

  toJSON(message: AddAuctionParamsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.AuctionParams !== undefined &&
      (obj.AuctionParams = message.AuctionParams
        ? AuctionParams.toJSON(message.AuctionParams)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddAuctionParamsProposal>, I>>(
    object: I
  ): AddAuctionParamsProposal {
    const message = createBaseAddAuctionParamsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.AuctionParams =
      object.AuctionParams !== undefined && object.AuctionParams !== null
        ? AuctionParams.fromPartial(object.AuctionParams)
        : undefined;
    return message;
  },
};

function createBaseAddPoolPairsProposal(): AddPoolPairsProposal {
  return { title: "", description: "", PoolPairs: undefined };
}

export const AddPoolPairsProposal = {
  encode(
    message: AddPoolPairsProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.PoolPairs !== undefined) {
      PoolPairs.encode(message.PoolPairs, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddPoolPairsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddPoolPairsProposal();
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
          message.PoolPairs = PoolPairs.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddPoolPairsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      PoolPairs: isSet(object.PoolPairs)
        ? PoolPairs.fromJSON(object.PoolPairs)
        : undefined,
    };
  },

  toJSON(message: AddPoolPairsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.PoolPairs !== undefined &&
      (obj.PoolPairs = message.PoolPairs
        ? PoolPairs.toJSON(message.PoolPairs)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddPoolPairsProposal>, I>>(
    object: I
  ): AddPoolPairsProposal {
    const message = createBaseAddPoolPairsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.PoolPairs =
      object.PoolPairs !== undefined && object.PoolPairs !== null
        ? PoolPairs.fromPartial(object.PoolPairs)
        : undefined;
    return message;
  },
};

function createBaseAddAssetRatesPoolPairsProposal(): AddAssetRatesPoolPairsProposal {
  return { title: "", description: "", AssetRatesPoolPairs: undefined };
}

export const AddAssetRatesPoolPairsProposal = {
  encode(
    message: AddAssetRatesPoolPairsProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.AssetRatesPoolPairs !== undefined) {
      AssetRatesPoolPairs.encode(
        message.AssetRatesPoolPairs,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddAssetRatesPoolPairsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddAssetRatesPoolPairsProposal();
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
          message.AssetRatesPoolPairs = AssetRatesPoolPairs.decode(
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

  fromJSON(object: any): AddAssetRatesPoolPairsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      AssetRatesPoolPairs: isSet(object.AssetRatesPoolPairs)
        ? AssetRatesPoolPairs.fromJSON(object.AssetRatesPoolPairs)
        : undefined,
    };
  },

  toJSON(message: AddAssetRatesPoolPairsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.AssetRatesPoolPairs !== undefined &&
      (obj.AssetRatesPoolPairs = message.AssetRatesPoolPairs
        ? AssetRatesPoolPairs.toJSON(message.AssetRatesPoolPairs)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddAssetRatesPoolPairsProposal>, I>>(
    object: I
  ): AddAssetRatesPoolPairsProposal {
    const message = createBaseAddAssetRatesPoolPairsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.AssetRatesPoolPairs =
      object.AssetRatesPoolPairs !== undefined &&
      object.AssetRatesPoolPairs !== null
        ? AssetRatesPoolPairs.fromPartial(object.AssetRatesPoolPairs)
        : undefined;
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
