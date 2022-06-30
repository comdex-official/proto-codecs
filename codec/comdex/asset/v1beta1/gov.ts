/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Asset } from "../../../comdex/asset/v1beta1/asset";
import { ExtendedPairVault } from "../../../comdex/asset/v1beta1/extendedPairVault";
import { AppAndGovTime, AppMapping } from "../../../comdex/asset/v1beta1/appMapping";
import { Pair } from "../../../comdex/asset/v1beta1/pair";

export const protobufPackage = "comdex.asset.v1beta1";

export interface AddAssetsProposal {
  title: string;
  description: string;
  assets: Asset[];
}

export interface UpdateAssetProposal {
  title: string;
  description: string;
  asset?: Asset;
}

export interface AddPairsProposal {
  title: string;
  description: string;
  pairs: Pair[];
}

export interface AddExtendedPairsVaultProposal {
  title: string;
  description: string;
  pairs: ExtendedPairVault[];
}

export interface UpdateExtendedPairVaultProposal {
  title: string;
  description: string;
  pair?: ExtendedPairVault;
}

export interface AddAppMappingProposal {
  title: string;
  description: string;
  app: AppMapping[];
}

export interface UpdateGovTimeInAppMappingProposal {
  title: string;
  description: string;
  govTime?: AppAndGovTime;
}

export interface AddAssetMappingProposal {
  title: string;
  description: string;
  app: AppMapping[];
}

function createBaseAddAssetsProposal(): AddAssetsProposal {
  return { title: "", description: "", assets: [] };
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
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.assets.push(Asset.decode(reader, reader.uint32()));
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
      assets: Array.isArray(object?.assets)
        ? object.assets.map((e: any) => Asset.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AddAssetsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.assets) {
      obj.assets = message.assets.map((e) => (e ? Asset.toJSON(e) : undefined));
    } else {
      obj.assets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddAssetsProposal>, I>>(
    object: I
  ): AddAssetsProposal {
    const message = createBaseAddAssetsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.assets = object.assets?.map((e) => Asset.fromPartial(e)) || [];
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
  return { title: "", description: "", pairs: [] };
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
    for (const v of message.pairs) {
      Pair.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.pairs.push(Pair.decode(reader, reader.uint32()));
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
      pairs: Array.isArray(object?.pairs)
        ? object.pairs.map((e: any) => Pair.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AddPairsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.pairs) {
      obj.pairs = message.pairs.map((e) => (e ? Pair.toJSON(e) : undefined));
    } else {
      obj.pairs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddPairsProposal>, I>>(
    object: I
  ): AddPairsProposal {
    const message = createBaseAddPairsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.pairs = object.pairs?.map((e) => Pair.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAddExtendedPairsVaultProposal(): AddExtendedPairsVaultProposal {
  return { title: "", description: "", pairs: [] };
}

export const AddExtendedPairsVaultProposal = {
  encode(
    message: AddExtendedPairsVaultProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.pairs) {
      ExtendedPairVault.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddExtendedPairsVaultProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddExtendedPairsVaultProposal();
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
          message.pairs.push(ExtendedPairVault.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddExtendedPairsVaultProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      pairs: Array.isArray(object?.pairs)
        ? object.pairs.map((e: any) => ExtendedPairVault.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AddExtendedPairsVaultProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.pairs) {
      obj.pairs = message.pairs.map((e) =>
        e ? ExtendedPairVault.toJSON(e) : undefined
      );
    } else {
      obj.pairs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddExtendedPairsVaultProposal>, I>>(
    object: I
  ): AddExtendedPairsVaultProposal {
    const message = createBaseAddExtendedPairsVaultProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.pairs =
      object.pairs?.map((e) => ExtendedPairVault.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateExtendedPairVaultProposal(): UpdateExtendedPairVaultProposal {
  return { title: "", description: "", pair: undefined };
}

export const UpdateExtendedPairVaultProposal = {
  encode(
    message: UpdateExtendedPairVaultProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.pair !== undefined) {
      ExtendedPairVault.encode(message.pair, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateExtendedPairVaultProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateExtendedPairVaultProposal();
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
          message.pair = ExtendedPairVault.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateExtendedPairVaultProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      pair: isSet(object.pair)
        ? ExtendedPairVault.fromJSON(object.pair)
        : undefined,
    };
  },

  toJSON(message: UpdateExtendedPairVaultProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.pair !== undefined &&
      (obj.pair = message.pair
        ? ExtendedPairVault.toJSON(message.pair)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateExtendedPairVaultProposal>, I>>(
    object: I
  ): UpdateExtendedPairVaultProposal {
    const message = createBaseUpdateExtendedPairVaultProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.pair =
      object.pair !== undefined && object.pair !== null
        ? ExtendedPairVault.fromPartial(object.pair)
        : undefined;
    return message;
  },
};

function createBaseAddAppMappingProposal(): AddAppMappingProposal {
  return { title: "", description: "", app: [] };
}

export const AddAppMappingProposal = {
  encode(
    message: AddAppMappingProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.app) {
      AppMapping.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddAppMappingProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddAppMappingProposal();
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
          message.app.push(AppMapping.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddAppMappingProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      app: Array.isArray(object?.app)
        ? object.app.map((e: any) => AppMapping.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AddAppMappingProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.app) {
      obj.app = message.app.map((e) => (e ? AppMapping.toJSON(e) : undefined));
    } else {
      obj.app = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddAppMappingProposal>, I>>(
    object: I
  ): AddAppMappingProposal {
    const message = createBaseAddAppMappingProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.app = object.app?.map((e) => AppMapping.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateGovTimeInAppMappingProposal(): UpdateGovTimeInAppMappingProposal {
  return { title: "", description: "", govTime: undefined };
}

export const UpdateGovTimeInAppMappingProposal = {
  encode(
    message: UpdateGovTimeInAppMappingProposal,
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
  ): UpdateGovTimeInAppMappingProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGovTimeInAppMappingProposal();
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

  fromJSON(object: any): UpdateGovTimeInAppMappingProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      govTime: isSet(object.govTime)
        ? AppAndGovTime.fromJSON(object.govTime)
        : undefined,
    };
  },

  toJSON(message: UpdateGovTimeInAppMappingProposal): unknown {
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

  fromPartial<
    I extends Exact<DeepPartial<UpdateGovTimeInAppMappingProposal>, I>
  >(object: I): UpdateGovTimeInAppMappingProposal {
    const message = createBaseUpdateGovTimeInAppMappingProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.govTime =
      object.govTime !== undefined && object.govTime !== null
        ? AppAndGovTime.fromPartial(object.govTime)
        : undefined;
    return message;
  },
};

function createBaseAddAssetMappingProposal(): AddAssetMappingProposal {
  return { title: "", description: "", app: [] };
}

export const AddAssetMappingProposal = {
  encode(
    message: AddAssetMappingProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.app) {
      AppMapping.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddAssetMappingProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddAssetMappingProposal();
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
          message.app.push(AppMapping.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddAssetMappingProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      app: Array.isArray(object?.app)
        ? object.app.map((e: any) => AppMapping.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AddAssetMappingProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.app) {
      obj.app = message.app.map((e) => (e ? AppMapping.toJSON(e) : undefined));
    } else {
      obj.app = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddAssetMappingProposal>, I>>(
    object: I
  ): AddAssetMappingProposal {
    const message = createBaseAddAssetMappingProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.app = object.app?.map((e) => AppMapping.fromPartial(e)) || [];
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
