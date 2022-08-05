/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  WhitelistedAppIds,
  LockedVault,
  LockedVaultToAppMapping,
} from "../../../comdex/liquidation/v1beta1/locked_vault";
import { Params } from "../../../comdex/liquidation/v1beta1/params";

export const protobufPackage = "comdex.liquidation.v1beta1";

export interface GenesisState {
  lockedVault: LockedVault[];
  lockedVaultToAppMapping: LockedVaultToAppMapping[];
  whitelistedAppIds?: WhitelistedAppIds;
  params?: Params;
}

function createBaseGenesisState(): GenesisState {
  return {
    lockedVault: [],
    lockedVaultToAppMapping: [],
    whitelistedAppIds: undefined,
    params: undefined,
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.lockedVault) {
      LockedVault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.lockedVaultToAppMapping) {
      LockedVaultToAppMapping.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.whitelistedAppIds !== undefined) {
      WhitelistedAppIds.encode(
        message.whitelistedAppIds,
        writer.uint32(26).fork()
      ).ldelim();
    }
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
          message.lockedVaultToAppMapping.push(
            LockedVaultToAppMapping.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.whitelistedAppIds = WhitelistedAppIds.decode(
            reader,
            reader.uint32()
          );
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
      lockedVaultToAppMapping: Array.isArray(object?.lockedVaultToAppMapping)
        ? object.lockedVaultToAppMapping.map((e: any) =>
            LockedVaultToAppMapping.fromJSON(e)
          )
        : [],
      whitelistedAppIds: isSet(object.whitelistedAppIds)
        ? WhitelistedAppIds.fromJSON(object.whitelistedAppIds)
        : undefined,
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
    if (message.lockedVaultToAppMapping) {
      obj.lockedVaultToAppMapping = message.lockedVaultToAppMapping.map((e) =>
        e ? LockedVaultToAppMapping.toJSON(e) : undefined
      );
    } else {
      obj.lockedVaultToAppMapping = [];
    }
    message.whitelistedAppIds !== undefined &&
      (obj.whitelistedAppIds = message.whitelistedAppIds
        ? WhitelistedAppIds.toJSON(message.whitelistedAppIds)
        : undefined);
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
    message.lockedVaultToAppMapping =
      object.lockedVaultToAppMapping?.map((e) =>
        LockedVaultToAppMapping.fromPartial(e)
      ) || [];
    message.whitelistedAppIds =
      object.whitelistedAppIds !== undefined &&
      object.whitelistedAppIds !== null
        ? WhitelistedAppIds.fromPartial(object.whitelistedAppIds)
        : undefined;
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
