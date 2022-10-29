/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Asset } from "../../../comdex/asset/v1beta1/asset";
import { Pair } from "../../../comdex/asset/v1beta1/pair";
import { AppData, AppAndGovTime } from "../../../comdex/asset/v1beta1/app";

export const protobufPackage = "comdex.asset.v1beta1";

export interface AddAssetsProposal {
  title: string;
  description: string;
  assets?: Asset;
}

export interface UpdateAssetProposal {
  title: string;
  description: string;
  asset?: Asset;
}

export interface AddPairsProposal {
  title: string;
  description: string;
  pairs?: Pair;
}

export interface UpdatePairProposal {
  title: string;
  description: string;
  pairs?: Pair;
}

export interface AddAppProposal {
  title: string;
  description: string;
  app?: AppData;
}

export interface UpdateGovTimeInAppProposal {
  title: string;
  description: string;
  govTime?: AppAndGovTime;
}

export interface AddAssetInAppProposal {
  title: string;
  description: string;
  app?: AppData;
}

function createBaseAddAssetsProposal(): AddAssetsProposal {
  return { title: "", description: "", assets: undefined };
}

export const AddAssetsProposal = {
  encode(
    message: AddAssetsProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.assets !== undefined) {
      Asset.encode(message.assets, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddAssetsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddAssetsProposal();
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
          message.assets = Asset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddAssetsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      assets: isSet(object.assets) ? Asset.fromJSON(object.assets) : undefined,
    };
  },

  toJSON(message: AddAssetsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.assets !== undefined &&
      (obj.assets = message.assets ? Asset.toJSON(message.assets) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddAssetsProposal>, I>>(
    object: I
  ): AddAssetsProposal {
    const message = createBaseAddAssetsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.assets =
      object.assets !== undefined && object.assets !== null
        ? Asset.fromPartial(object.assets)
        : undefined;
    return message;
  },
};

function createBaseUpdateAssetProposal(): UpdateAssetProposal {
  return { title: "", description: "", asset: undefined };
}

export const UpdateAssetProposal = {
  encode(
    message: UpdateAssetProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAssetProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAssetProposal();
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
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAssetProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
    };
  },

  toJSON(message: UpdateAssetProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.asset !== undefined &&
      (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateAssetProposal>, I>>(
    object: I
  ): UpdateAssetProposal {
    const message = createBaseUpdateAssetProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.asset =
      object.asset !== undefined && object.asset !== null
        ? Asset.fromPartial(object.asset)
        : undefined;
    return message;
  },
};

function createBaseAddPairsProposal(): AddPairsProposal {
  return { title: "", description: "", pairs: undefined };
}

export const AddPairsProposal = {
  encode(
    message: AddPairsProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.pairs !== undefined) {
      Pair.encode(message.pairs, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddPairsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddPairsProposal();
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
          message.pairs = Pair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddPairsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      pairs: isSet(object.pairs) ? Pair.fromJSON(object.pairs) : undefined,
    };
  },

  toJSON(message: AddPairsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.pairs !== undefined &&
      (obj.pairs = message.pairs ? Pair.toJSON(message.pairs) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddPairsProposal>, I>>(
    object: I
  ): AddPairsProposal {
    const message = createBaseAddPairsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.pairs =
      object.pairs !== undefined && object.pairs !== null
        ? Pair.fromPartial(object.pairs)
        : undefined;
    return message;
  },
};

function createBaseUpdatePairProposal(): UpdatePairProposal {
  return { title: "", description: "", pairs: undefined };
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
    if (message.pairs !== undefined) {
      Pair.encode(message.pairs, writer.uint32(26).fork()).ldelim();
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
          message.pairs = Pair.decode(reader, reader.uint32());
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
      pairs: isSet(object.pairs) ? Pair.fromJSON(object.pairs) : undefined,
    };
  },

  toJSON(message: UpdatePairProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.pairs !== undefined &&
      (obj.pairs = message.pairs ? Pair.toJSON(message.pairs) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdatePairProposal>, I>>(
    object: I
  ): UpdatePairProposal {
    const message = createBaseUpdatePairProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.pairs =
      object.pairs !== undefined && object.pairs !== null
        ? Pair.fromPartial(object.pairs)
        : undefined;
    return message;
  },
};

function createBaseAddAppProposal(): AddAppProposal {
  return { title: "", description: "", app: undefined };
}

export const AddAppProposal = {
  encode(
    message: AddAppProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.app !== undefined) {
      AppData.encode(message.app, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddAppProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddAppProposal();
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
          message.app = AppData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddAppProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      app: isSet(object.app) ? AppData.fromJSON(object.app) : undefined,
    };
  },

  toJSON(message: AddAppProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.app !== undefined &&
      (obj.app = message.app ? AppData.toJSON(message.app) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddAppProposal>, I>>(
    object: I
  ): AddAppProposal {
    const message = createBaseAddAppProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.app =
      object.app !== undefined && object.app !== null
        ? AppData.fromPartial(object.app)
        : undefined;
    return message;
  },
};

function createBaseUpdateGovTimeInAppProposal(): UpdateGovTimeInAppProposal {
  return { title: "", description: "", govTime: undefined };
}

export const UpdateGovTimeInAppProposal = {
  encode(
    message: UpdateGovTimeInAppProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.govTime !== undefined) {
      AppAndGovTime.encode(message.govTime, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateGovTimeInAppProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGovTimeInAppProposal();
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
          message.govTime = AppAndGovTime.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateGovTimeInAppProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      govTime: isSet(object.govTime)
        ? AppAndGovTime.fromJSON(object.govTime)
        : undefined,
    };
  },

  toJSON(message: UpdateGovTimeInAppProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.govTime !== undefined &&
      (obj.govTime = message.govTime
        ? AppAndGovTime.toJSON(message.govTime)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateGovTimeInAppProposal>, I>>(
    object: I
  ): UpdateGovTimeInAppProposal {
    const message = createBaseUpdateGovTimeInAppProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.govTime =
      object.govTime !== undefined && object.govTime !== null
        ? AppAndGovTime.fromPartial(object.govTime)
        : undefined;
    return message;
  },
};

function createBaseAddAssetInAppProposal(): AddAssetInAppProposal {
  return { title: "", description: "", app: undefined };
}

export const AddAssetInAppProposal = {
  encode(
    message: AddAssetInAppProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.app !== undefined) {
      AppData.encode(message.app, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddAssetInAppProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddAssetInAppProposal();
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
          message.app = AppData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddAssetInAppProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      app: isSet(object.app) ? AppData.fromJSON(object.app) : undefined,
    };
  },

  toJSON(message: AddAssetInAppProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.app !== undefined &&
      (obj.app = message.app ? AppData.toJSON(message.app) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddAssetInAppProposal>, I>>(
    object: I
  ): AddAssetInAppProposal {
    const message = createBaseAddAssetInAppProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.app =
      object.app !== undefined && object.app !== null
        ? AppData.fromPartial(object.app)
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
