/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  ExtendedPair,
  Pool,
  AssetToPairMapping,
  AssetRatesParams,
  AuctionParams,
} from "../../../comdex/lend/v1beta1/lend";

export const protobufPackage = "comdex.lend.v1beta1";

export interface LendPairsProposal {
  title: string;
  description: string;
  pairs?: ExtendedPair;
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
