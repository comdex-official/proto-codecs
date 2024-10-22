/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  CurrentDepositStats,
  DataAfterCoolOff,
  ESMStatus,
  ESMTriggerParams,
  KillSwitchParams,
  UsersDepositMapping,
} from "./esm";
import { Params } from "./params";

export const protobufPackage = "comdex.esm.v1beta1";

export interface GenesisState {
  eSMTriggerParams: ESMTriggerParams[];
  currentDepositStats: CurrentDepositStats[];
  eSMStatus: ESMStatus[];
  killSwitchParams: KillSwitchParams[];
  usersDepositMapping: UsersDepositMapping[];
  dataAfterCoolOff: DataAfterCoolOff[];
  params?: Params;
}

function createBaseGenesisState(): GenesisState {
  return {
    eSMTriggerParams: [],
    currentDepositStats: [],
    eSMStatus: [],
    killSwitchParams: [],
    usersDepositMapping: [],
    dataAfterCoolOff: [],
    params: undefined,
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.eSMTriggerParams) {
      ESMTriggerParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.currentDepositStats) {
      CurrentDepositStats.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.eSMStatus) {
      ESMStatus.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.killSwitchParams) {
      KillSwitchParams.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.usersDepositMapping) {
      UsersDepositMapping.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.dataAfterCoolOff) {
      DataAfterCoolOff.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(82).fork()).ldelim();
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
          message.eSMTriggerParams.push(ESMTriggerParams.decode(reader, reader.uint32()));
          break;
        case 2:
          message.currentDepositStats.push(CurrentDepositStats.decode(reader, reader.uint32()));
          break;
        case 3:
          message.eSMStatus.push(ESMStatus.decode(reader, reader.uint32()));
          break;
        case 4:
          message.killSwitchParams.push(KillSwitchParams.decode(reader, reader.uint32()));
          break;
        case 5:
          message.usersDepositMapping.push(UsersDepositMapping.decode(reader, reader.uint32()));
          break;
        case 7:
          message.dataAfterCoolOff.push(DataAfterCoolOff.decode(reader, reader.uint32()));
          break;
        case 10:
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
      eSMTriggerParams: Array.isArray(object?.eSMTriggerParams)
        ? object.eSMTriggerParams.map((e: any) => ESMTriggerParams.fromJSON(e))
        : [],
      currentDepositStats: Array.isArray(object?.currentDepositStats)
        ? object.currentDepositStats.map((e: any) => CurrentDepositStats.fromJSON(e))
        : [],
      eSMStatus: Array.isArray(object?.eSMStatus) ? object.eSMStatus.map((e: any) => ESMStatus.fromJSON(e)) : [],
      killSwitchParams: Array.isArray(object?.killSwitchParams)
        ? object.killSwitchParams.map((e: any) => KillSwitchParams.fromJSON(e))
        : [],
      usersDepositMapping: Array.isArray(object?.usersDepositMapping)
        ? object.usersDepositMapping.map((e: any) => UsersDepositMapping.fromJSON(e))
        : [],
      dataAfterCoolOff: Array.isArray(object?.dataAfterCoolOff)
        ? object.dataAfterCoolOff.map((e: any) => DataAfterCoolOff.fromJSON(e))
        : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.eSMTriggerParams) {
      obj.eSMTriggerParams = message.eSMTriggerParams.map((e) => e ? ESMTriggerParams.toJSON(e) : undefined);
    } else {
      obj.eSMTriggerParams = [];
    }
    if (message.currentDepositStats) {
      obj.currentDepositStats = message.currentDepositStats.map((e) => e ? CurrentDepositStats.toJSON(e) : undefined);
    } else {
      obj.currentDepositStats = [];
    }
    if (message.eSMStatus) {
      obj.eSMStatus = message.eSMStatus.map((e) => e ? ESMStatus.toJSON(e) : undefined);
    } else {
      obj.eSMStatus = [];
    }
    if (message.killSwitchParams) {
      obj.killSwitchParams = message.killSwitchParams.map((e) => e ? KillSwitchParams.toJSON(e) : undefined);
    } else {
      obj.killSwitchParams = [];
    }
    if (message.usersDepositMapping) {
      obj.usersDepositMapping = message.usersDepositMapping.map((e) => e ? UsersDepositMapping.toJSON(e) : undefined);
    } else {
      obj.usersDepositMapping = [];
    }
    if (message.dataAfterCoolOff) {
      obj.dataAfterCoolOff = message.dataAfterCoolOff.map((e) => e ? DataAfterCoolOff.toJSON(e) : undefined);
    } else {
      obj.dataAfterCoolOff = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.eSMTriggerParams = object.eSMTriggerParams?.map((e) => ESMTriggerParams.fromPartial(e)) || [];
    message.currentDepositStats = object.currentDepositStats?.map((e) => CurrentDepositStats.fromPartial(e)) || [];
    message.eSMStatus = object.eSMStatus?.map((e) => ESMStatus.fromPartial(e)) || [];
    message.killSwitchParams = object.killSwitchParams?.map((e) => KillSwitchParams.fromPartial(e)) || [];
    message.usersDepositMapping = object.usersDepositMapping?.map((e) => UsersDepositMapping.fromPartial(e)) || [];
    message.dataAfterCoolOff = object.dataAfterCoolOff?.map((e) => DataAfterCoolOff.fromPartial(e)) || [];
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
