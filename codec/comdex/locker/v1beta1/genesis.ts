/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../comdex/locker/v1beta1/params";
import {
  Locker,
  LockerProductAssetMapping,
  LockerTotalRewardsByAssetAppWise,
  LockerLookupTableData,
  UserAppAssetLockerMapping,
} from "../../../comdex/locker/v1beta1/locker";

export const protobufPackage = "comdex.locker.v1beta1";

export interface GenesisState {
  lockers: Locker[];
  lockerProductAssetMapping: LockerProductAssetMapping[];
  lockerTotalRewardsByAssetAppWise: LockerTotalRewardsByAssetAppWise[];
  lockerLookupTable: LockerLookupTableData[];
  userLockerAssetMapping: UserAppAssetLockerMapping[];
  params?: Params;
}

function createBaseGenesisState(): GenesisState {
  return {
    lockers: [],
    lockerProductAssetMapping: [],
    lockerTotalRewardsByAssetAppWise: [],
    lockerLookupTable: [],
    userLockerAssetMapping: [],
    params: undefined,
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.lockers) {
      Locker.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.lockerProductAssetMapping) {
      LockerProductAssetMapping.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.lockerTotalRewardsByAssetAppWise) {
      LockerTotalRewardsByAssetAppWise.encode(
        v!,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.lockerLookupTable) {
      LockerLookupTableData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.userLockerAssetMapping) {
      UserAppAssetLockerMapping.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(50).fork()).ldelim();
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
          message.lockers.push(Locker.decode(reader, reader.uint32()));
          break;
        case 2:
          message.lockerProductAssetMapping.push(
            LockerProductAssetMapping.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.lockerTotalRewardsByAssetAppWise.push(
            LockerTotalRewardsByAssetAppWise.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.lockerLookupTable.push(
            LockerLookupTableData.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.userLockerAssetMapping.push(
            UserAppAssetLockerMapping.decode(reader, reader.uint32())
          );
          break;
        case 6:
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
      lockers: Array.isArray(object?.lockers)
        ? object.lockers.map((e: any) => Locker.fromJSON(e))
        : [],
      lockerProductAssetMapping: Array.isArray(
        object?.lockerProductAssetMapping
      )
        ? object.lockerProductAssetMapping.map((e: any) =>
            LockerProductAssetMapping.fromJSON(e)
          )
        : [],
      lockerTotalRewardsByAssetAppWise: Array.isArray(
        object?.lockerTotalRewardsByAssetAppWise
      )
        ? object.lockerTotalRewardsByAssetAppWise.map((e: any) =>
            LockerTotalRewardsByAssetAppWise.fromJSON(e)
          )
        : [],
      lockerLookupTable: Array.isArray(object?.lockerLookupTable)
        ? object.lockerLookupTable.map((e: any) =>
            LockerLookupTableData.fromJSON(e)
          )
        : [],
      userLockerAssetMapping: Array.isArray(object?.userLockerAssetMapping)
        ? object.userLockerAssetMapping.map((e: any) =>
            UserAppAssetLockerMapping.fromJSON(e)
          )
        : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.lockers) {
      obj.lockers = message.lockers.map((e) =>
        e ? Locker.toJSON(e) : undefined
      );
    } else {
      obj.lockers = [];
    }
    if (message.lockerProductAssetMapping) {
      obj.lockerProductAssetMapping = message.lockerProductAssetMapping.map(
        (e) => (e ? LockerProductAssetMapping.toJSON(e) : undefined)
      );
    } else {
      obj.lockerProductAssetMapping = [];
    }
    if (message.lockerTotalRewardsByAssetAppWise) {
      obj.lockerTotalRewardsByAssetAppWise =
        message.lockerTotalRewardsByAssetAppWise.map((e) =>
          e ? LockerTotalRewardsByAssetAppWise.toJSON(e) : undefined
        );
    } else {
      obj.lockerTotalRewardsByAssetAppWise = [];
    }
    if (message.lockerLookupTable) {
      obj.lockerLookupTable = message.lockerLookupTable.map((e) =>
        e ? LockerLookupTableData.toJSON(e) : undefined
      );
    } else {
      obj.lockerLookupTable = [];
    }
    if (message.userLockerAssetMapping) {
      obj.userLockerAssetMapping = message.userLockerAssetMapping.map((e) =>
        e ? UserAppAssetLockerMapping.toJSON(e) : undefined
      );
    } else {
      obj.userLockerAssetMapping = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.lockers = object.lockers?.map((e) => Locker.fromPartial(e)) || [];
    message.lockerProductAssetMapping =
      object.lockerProductAssetMapping?.map((e) =>
        LockerProductAssetMapping.fromPartial(e)
      ) || [];
    message.lockerTotalRewardsByAssetAppWise =
      object.lockerTotalRewardsByAssetAppWise?.map((e) =>
        LockerTotalRewardsByAssetAppWise.fromPartial(e)
      ) || [];
    message.lockerLookupTable =
      object.lockerLookupTable?.map((e) =>
        LockerLookupTableData.fromPartial(e)
      ) || [];
    message.userLockerAssetMapping =
      object.userLockerAssetMapping?.map((e) =>
        UserAppAssetLockerMapping.fromPartial(e)
      ) || [];
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
