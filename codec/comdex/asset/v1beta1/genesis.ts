/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../comdex/asset/v1beta1/params";
import { Asset } from "../../../comdex/asset/v1beta1/asset";
import { Pair } from "../../../comdex/asset/v1beta1/pair";
import { AppData } from "../../../comdex/asset/v1beta1/app";
import { ExtendedPairVault } from "../../../comdex/asset/v1beta1/extendedPairVault";

export const protobufPackage = "comdex.asset.v1beta1";

export interface GenesisState {
  assets: Asset[];
  pairs: Pair[];
  appData: AppData[];
  extendedPairVault: ExtendedPairVault[];
  params?: Params;
}

function createBaseGenesisState(): GenesisState {
  return {
    assets: [],
    pairs: [],
    appData: [],
    extendedPairVault: [],
    params: undefined,
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pairs) {
      Pair.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.appData) {
      AppData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.extendedPairVault) {
      ExtendedPairVault.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(Asset.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pairs.push(Pair.decode(reader, reader.uint32()));
          break;
        case 3:
          message.appData.push(AppData.decode(reader, reader.uint32()));
          break;
        case 4:
          message.extendedPairVault.push(
            ExtendedPairVault.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      assets: Array.isArray(object?.assets)
        ? object.assets.map((e: any) => Asset.fromJSON(e))
        : [],
      pairs: Array.isArray(object?.pairs)
        ? object.pairs.map((e: any) => Pair.fromJSON(e))
        : [],
      appData: Array.isArray(object?.appData)
        ? object.appData.map((e: any) => AppData.fromJSON(e))
        : [],
      extendedPairVault: Array.isArray(object?.extendedPairVault)
        ? object.extendedPairVault.map((e: any) =>
            ExtendedPairVault.fromJSON(e)
          )
        : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map((e) => (e ? Asset.toJSON(e) : undefined));
    } else {
      obj.assets = [];
    }
    if (message.pairs) {
      obj.pairs = message.pairs.map((e) => (e ? Pair.toJSON(e) : undefined));
    } else {
      obj.pairs = [];
    }
    if (message.appData) {
      obj.appData = message.appData.map((e) =>
        e ? AppData.toJSON(e) : undefined
      );
    } else {
      obj.appData = [];
    }
    if (message.extendedPairVault) {
      obj.extendedPairVault = message.extendedPairVault.map((e) =>
        e ? ExtendedPairVault.toJSON(e) : undefined
      );
    } else {
      obj.extendedPairVault = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.assets = object.assets?.map((e) => Asset.fromPartial(e)) || [];
    message.pairs = object.pairs?.map((e) => Pair.fromPartial(e)) || [];
    message.appData = object.appData?.map((e) => AppData.fromPartial(e)) || [];
    message.extendedPairVault =
      object.extendedPairVault?.map((e) => ExtendedPairVault.fromPartial(e)) ||
      [];
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
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
