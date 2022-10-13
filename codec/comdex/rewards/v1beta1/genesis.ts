/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../comdex/rewards/v1beta1/params";
import {
  InternalRewards,
  LockerRewardsTracker,
  VaultInterestTracker,
  LockerExternalRewards,
  VaultExternalRewards,
} from "../../../comdex/rewards/v1beta1/rewards";
import { EpochInfo } from "../../../comdex/rewards/v1beta1/epochs";
import { Gauge, GaugeByTriggerDuration } from "../../../comdex/rewards/v1beta1/gauge";

export const protobufPackage = "comdex.rewards.v1beta1";

/** GenesisState defines the rewards module's genesis state. */
export interface GenesisState {
  internalRewards: InternalRewards[];
  lockerRewardsTracker: LockerRewardsTracker[];
  vaultInterestTracker: VaultInterestTracker[];
  lockerExternalRewards: LockerExternalRewards[];
  vaultExternalRewards: VaultExternalRewards[];
  appIDs: Long[];
  epochInfo: EpochInfo[];
  gauge: Gauge[];
  gaugeByTriggerDuration: GaugeByTriggerDuration[];
  params?: Params;
}

function createBaseGenesisState(): GenesisState {
  return {
    internalRewards: [],
    lockerRewardsTracker: [],
    vaultInterestTracker: [],
    lockerExternalRewards: [],
    vaultExternalRewards: [],
    appIDs: [],
    epochInfo: [],
    gauge: [],
    gaugeByTriggerDuration: [],
    params: undefined,
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.internalRewards) {
      InternalRewards.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.lockerRewardsTracker) {
      LockerRewardsTracker.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.vaultInterestTracker) {
      VaultInterestTracker.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.lockerExternalRewards) {
      LockerExternalRewards.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.vaultExternalRewards) {
      VaultExternalRewards.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(50).fork();
    for (const v of message.appIDs) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.epochInfo) {
      EpochInfo.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.gauge) {
      Gauge.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.gaugeByTriggerDuration) {
      GaugeByTriggerDuration.encode(v!, writer.uint32(74).fork()).ldelim();
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
          message.internalRewards.push(
            InternalRewards.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.lockerRewardsTracker.push(
            LockerRewardsTracker.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.vaultInterestTracker.push(
            VaultInterestTracker.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.lockerExternalRewards.push(
            LockerExternalRewards.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.vaultExternalRewards.push(
            VaultExternalRewards.decode(reader, reader.uint32())
          );
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.appIDs.push(reader.uint64() as Long);
            }
          } else {
            message.appIDs.push(reader.uint64() as Long);
          }
          break;
        case 7:
          message.epochInfo.push(EpochInfo.decode(reader, reader.uint32()));
          break;
        case 8:
          message.gauge.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 9:
          message.gaugeByTriggerDuration.push(
            GaugeByTriggerDuration.decode(reader, reader.uint32())
          );
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
      internalRewards: Array.isArray(object?.internalRewards)
        ? object.internalRewards.map((e: any) => InternalRewards.fromJSON(e))
        : [],
      lockerRewardsTracker: Array.isArray(object?.lockerRewardsTracker)
        ? object.lockerRewardsTracker.map((e: any) =>
            LockerRewardsTracker.fromJSON(e)
          )
        : [],
      vaultInterestTracker: Array.isArray(object?.vaultInterestTracker)
        ? object.vaultInterestTracker.map((e: any) =>
            VaultInterestTracker.fromJSON(e)
          )
        : [],
      lockerExternalRewards: Array.isArray(object?.lockerExternalRewards)
        ? object.lockerExternalRewards.map((e: any) =>
            LockerExternalRewards.fromJSON(e)
          )
        : [],
      vaultExternalRewards: Array.isArray(object?.vaultExternalRewards)
        ? object.vaultExternalRewards.map((e: any) =>
            VaultExternalRewards.fromJSON(e)
          )
        : [],
      appIDs: Array.isArray(object?.appIDs)
        ? object.appIDs.map((e: any) => Long.fromValue(e))
        : [],
      epochInfo: Array.isArray(object?.epochInfo)
        ? object.epochInfo.map((e: any) => EpochInfo.fromJSON(e))
        : [],
      gauge: Array.isArray(object?.gauge)
        ? object.gauge.map((e: any) => Gauge.fromJSON(e))
        : [],
      gaugeByTriggerDuration: Array.isArray(object?.gaugeByTriggerDuration)
        ? object.gaugeByTriggerDuration.map((e: any) =>
            GaugeByTriggerDuration.fromJSON(e)
          )
        : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.internalRewards) {
      obj.internalRewards = message.internalRewards.map((e) =>
        e ? InternalRewards.toJSON(e) : undefined
      );
    } else {
      obj.internalRewards = [];
    }
    if (message.lockerRewardsTracker) {
      obj.lockerRewardsTracker = message.lockerRewardsTracker.map((e) =>
        e ? LockerRewardsTracker.toJSON(e) : undefined
      );
    } else {
      obj.lockerRewardsTracker = [];
    }
    if (message.vaultInterestTracker) {
      obj.vaultInterestTracker = message.vaultInterestTracker.map((e) =>
        e ? VaultInterestTracker.toJSON(e) : undefined
      );
    } else {
      obj.vaultInterestTracker = [];
    }
    if (message.lockerExternalRewards) {
      obj.lockerExternalRewards = message.lockerExternalRewards.map((e) =>
        e ? LockerExternalRewards.toJSON(e) : undefined
      );
    } else {
      obj.lockerExternalRewards = [];
    }
    if (message.vaultExternalRewards) {
      obj.vaultExternalRewards = message.vaultExternalRewards.map((e) =>
        e ? VaultExternalRewards.toJSON(e) : undefined
      );
    } else {
      obj.vaultExternalRewards = [];
    }
    if (message.appIDs) {
      obj.appIDs = message.appIDs.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.appIDs = [];
    }
    if (message.epochInfo) {
      obj.epochInfo = message.epochInfo.map((e) =>
        e ? EpochInfo.toJSON(e) : undefined
      );
    } else {
      obj.epochInfo = [];
    }
    if (message.gauge) {
      obj.gauge = message.gauge.map((e) => (e ? Gauge.toJSON(e) : undefined));
    } else {
      obj.gauge = [];
    }
    if (message.gaugeByTriggerDuration) {
      obj.gaugeByTriggerDuration = message.gaugeByTriggerDuration.map((e) =>
        e ? GaugeByTriggerDuration.toJSON(e) : undefined
      );
    } else {
      obj.gaugeByTriggerDuration = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.internalRewards =
      object.internalRewards?.map((e) => InternalRewards.fromPartial(e)) || [];
    message.lockerRewardsTracker =
      object.lockerRewardsTracker?.map((e) =>
        LockerRewardsTracker.fromPartial(e)
      ) || [];
    message.vaultInterestTracker =
      object.vaultInterestTracker?.map((e) =>
        VaultInterestTracker.fromPartial(e)
      ) || [];
    message.lockerExternalRewards =
      object.lockerExternalRewards?.map((e) =>
        LockerExternalRewards.fromPartial(e)
      ) || [];
    message.vaultExternalRewards =
      object.vaultExternalRewards?.map((e) =>
        VaultExternalRewards.fromPartial(e)
      ) || [];
    message.appIDs = object.appIDs?.map((e) => Long.fromValue(e)) || [];
    message.epochInfo =
      object.epochInfo?.map((e) => EpochInfo.fromPartial(e)) || [];
    message.gauge = object.gauge?.map((e) => Gauge.fromPartial(e)) || [];
    message.gaugeByTriggerDuration =
      object.gaugeByTriggerDuration?.map((e) =>
        GaugeByTriggerDuration.fromPartial(e)
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
