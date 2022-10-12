/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../comdex/liquidation/v1beta1/params";
import { LockedVault } from "../../../comdex/liquidation/v1beta1/locked_vault";

export const protobufPackage = "comdex.liquidation.v1beta1";

export interface GenesisState {
  lockedVault: LockedVault[];
  whitelistedApps: Long[];
  params?: Params;
}

function createBaseGenesisState(): GenesisState {
  return { lockedVault: [], whitelistedApps: [], params: undefined };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.lockedVault) {
      LockedVault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.whitelistedApps) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
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
          message.lockedVault.push(LockedVault.decode(reader, reader.uint32()));
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.whitelistedApps.push(reader.uint64() as Long);
            }
          } else {
            message.whitelistedApps.push(reader.uint64() as Long);
          }
          break;
        case 4:
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
      lockedVault: Array.isArray(object?.lockedVault)
        ? object.lockedVault.map((e: any) => LockedVault.fromJSON(e))
        : [],
      whitelistedApps: Array.isArray(object?.whitelistedApps)
        ? object.whitelistedApps.map((e: any) => Long.fromValue(e))
        : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.lockedVault) {
      obj.lockedVault = message.lockedVault.map((e) =>
        e ? LockedVault.toJSON(e) : undefined
      );
    } else {
      obj.lockedVault = [];
    }
    if (message.whitelistedApps) {
      obj.whitelistedApps = message.whitelistedApps.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.whitelistedApps = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.lockedVault =
      object.lockedVault?.map((e) => LockedVault.fromPartial(e)) || [];
    message.whitelistedApps =
      object.whitelistedApps?.map((e) => Long.fromValue(e)) || [];
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
