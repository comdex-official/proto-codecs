/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "./comdex/liquidationsV2/v1beta1/params";
import {
  LockedVault,
  LiquidationWhiteListing,
  AppReserveFunds,
} from "./comdex/liquidationsV2/v1beta1/liquidate";

export const protobufPackage = "comdex.liquidationsV2.v1beta1";

export interface GenesisState {
  lockedVault: LockedVault[];
  liquidationWhiteListing: LiquidationWhiteListing[];
  appReserveFunds: AppReserveFunds[];
  params?: Params;
}

function createBaseGenesisState(): GenesisState {
  return {
    lockedVault: [],
    liquidationWhiteListing: [],
    appReserveFunds: [],
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
    for (const v of message.liquidationWhiteListing) {
      LiquidationWhiteListing.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.appReserveFunds) {
      AppReserveFunds.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.liquidationWhiteListing.push(
            LiquidationWhiteListing.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.appReserveFunds.push(
            AppReserveFunds.decode(reader, reader.uint32())
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
      liquidationWhiteListing: Array.isArray(object?.liquidationWhiteListing)
        ? object.liquidationWhiteListing.map((e: any) =>
            LiquidationWhiteListing.fromJSON(e)
          )
        : [],
      appReserveFunds: Array.isArray(object?.appReserveFunds)
        ? object.appReserveFunds.map((e: any) => AppReserveFunds.fromJSON(e))
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
    if (message.liquidationWhiteListing) {
      obj.liquidationWhiteListing = message.liquidationWhiteListing.map((e) =>
        e ? LiquidationWhiteListing.toJSON(e) : undefined
      );
    } else {
      obj.liquidationWhiteListing = [];
    }
    if (message.appReserveFunds) {
      obj.appReserveFunds = message.appReserveFunds.map((e) =>
        e ? AppReserveFunds.toJSON(e) : undefined
      );
    } else {
      obj.appReserveFunds = [];
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
    message.liquidationWhiteListing =
      object.liquidationWhiteListing?.map((e) =>
        LiquidationWhiteListing.fromPartial(e)
      ) || [];
    message.appReserveFunds =
      object.appReserveFunds?.map((e) => AppReserveFunds.fromPartial(e)) || [];
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
