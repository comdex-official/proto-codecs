/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.rewards.v1beta1";

export interface InternalRewards {
  appMappingID: Long;
  assetID: Long[];
}

export interface LockerExternalRewards {
  id: Long;
  appMappingId: Long;
  assetId: Long;
  totalRewards?: Coin;
  durationDays: Long;
  isActive: boolean;
  availableRewards?: Coin;
  depositor: string;
  startTimestamp?: Date;
  endTimestamp?: Date;
  minLockupTimeSeconds: Long;
  epochId: Long;
}

export interface VaultExternalRewards {
  id: Long;
  appMappingId: Long;
  extendedPairId: Long;
  totalRewards?: Coin;
  durationDays: Long;
  isActive: boolean;
  availableRewards?: Coin;
  depositor: string;
  startTimestamp?: Date;
  endTimestamp?: Date;
  minLockupTimeSeconds: Long;
  epochId: Long;
}

export interface WhitelistedAppIdsVault {
  whitelistedAppMappingIdsVaults: Long[];
}

export interface EpochTime {
  id: Long;
  appMappingId: Long;
  startingTime: Long;
  count: Long;
}

function createBaseInternalRewards(): InternalRewards {
  return { appMappingID: Long.UZERO, assetID: [] };
}

export const InternalRewards = {
  encode(
    message: InternalRewards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appMappingID.isZero()) {
      writer.uint32(8).uint64(message.appMappingID);
    }
    writer.uint32(18).fork();
    for (const v of message.assetID) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InternalRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInternalRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appMappingID = reader.uint64() as Long;
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.assetID.push(reader.uint64() as Long);
            }
          } else {
            message.assetID.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InternalRewards {
    return {
      appMappingID: isSet(object.appMappingID)
        ? Long.fromValue(object.appMappingID)
        : Long.UZERO,
      assetID: Array.isArray(object?.assetID)
        ? object.assetID.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: InternalRewards): unknown {
    const obj: any = {};
    message.appMappingID !== undefined &&
      (obj.appMappingID = (message.appMappingID || Long.UZERO).toString());
    if (message.assetID) {
      obj.assetID = message.assetID.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.assetID = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InternalRewards>, I>>(
    object: I
  ): InternalRewards {
    const message = createBaseInternalRewards();
    message.appMappingID =
      object.appMappingID !== undefined && object.appMappingID !== null
        ? Long.fromValue(object.appMappingID)
        : Long.UZERO;
    message.assetID = object.assetID?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseLockerExternalRewards(): LockerExternalRewards {
  return {
    id: Long.UZERO,
    appMappingId: Long.UZERO,
    assetId: Long.UZERO,
    totalRewards: undefined,
    durationDays: Long.ZERO,
    isActive: false,
    availableRewards: undefined,
    depositor: "",
    startTimestamp: undefined,
    endTimestamp: undefined,
    minLockupTimeSeconds: Long.ZERO,
    epochId: Long.UZERO,
  };
}

export const LockerExternalRewards = {
  encode(
    message: LockerExternalRewards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.appMappingId.isZero()) {
      writer.uint32(16).uint64(message.appMappingId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(24).uint64(message.assetId);
    }
    if (message.totalRewards !== undefined) {
      Coin.encode(message.totalRewards, writer.uint32(34).fork()).ldelim();
    }
    if (!message.durationDays.isZero()) {
      writer.uint32(40).int64(message.durationDays);
    }
    if (message.isActive === true) {
      writer.uint32(48).bool(message.isActive);
    }
    if (message.availableRewards !== undefined) {
      Coin.encode(message.availableRewards, writer.uint32(58).fork()).ldelim();
    }
    if (message.depositor !== "") {
      writer.uint32(66).string(message.depositor);
    }
    if (message.startTimestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTimestamp),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.endTimestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTimestamp),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (!message.minLockupTimeSeconds.isZero()) {
      writer.uint32(88).int64(message.minLockupTimeSeconds);
    }
    if (!message.epochId.isZero()) {
      writer.uint32(96).uint64(message.epochId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LockerExternalRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockerExternalRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.appMappingId = reader.uint64() as Long;
          break;
        case 3:
          message.assetId = reader.uint64() as Long;
          break;
        case 4:
          message.totalRewards = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.durationDays = reader.int64() as Long;
          break;
        case 6:
          message.isActive = reader.bool();
          break;
        case 7:
          message.availableRewards = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.depositor = reader.string();
          break;
        case 9:
          message.startTimestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.endTimestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.minLockupTimeSeconds = reader.int64() as Long;
          break;
        case 12:
          message.epochId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockerExternalRewards {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      appMappingId: isSet(object.appMappingId)
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      totalRewards: isSet(object.totalRewards)
        ? Coin.fromJSON(object.totalRewards)
        : undefined,
      durationDays: isSet(object.durationDays)
        ? Long.fromValue(object.durationDays)
        : Long.ZERO,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      availableRewards: isSet(object.availableRewards)
        ? Coin.fromJSON(object.availableRewards)
        : undefined,
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      startTimestamp: isSet(object.startTimestamp)
        ? fromJsonTimestamp(object.startTimestamp)
        : undefined,
      endTimestamp: isSet(object.endTimestamp)
        ? fromJsonTimestamp(object.endTimestamp)
        : undefined,
      minLockupTimeSeconds: isSet(object.minLockupTimeSeconds)
        ? Long.fromValue(object.minLockupTimeSeconds)
        : Long.ZERO,
      epochId: isSet(object.epochId)
        ? Long.fromValue(object.epochId)
        : Long.UZERO,
    };
  },

  toJSON(message: LockerExternalRewards): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.totalRewards !== undefined &&
      (obj.totalRewards = message.totalRewards
        ? Coin.toJSON(message.totalRewards)
        : undefined);
    message.durationDays !== undefined &&
      (obj.durationDays = (message.durationDays || Long.ZERO).toString());
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.availableRewards !== undefined &&
      (obj.availableRewards = message.availableRewards
        ? Coin.toJSON(message.availableRewards)
        : undefined);
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.startTimestamp !== undefined &&
      (obj.startTimestamp = message.startTimestamp.toISOString());
    message.endTimestamp !== undefined &&
      (obj.endTimestamp = message.endTimestamp.toISOString());
    message.minLockupTimeSeconds !== undefined &&
      (obj.minLockupTimeSeconds = (
        message.minLockupTimeSeconds || Long.ZERO
      ).toString());
    message.epochId !== undefined &&
      (obj.epochId = (message.epochId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LockerExternalRewards>, I>>(
    object: I
  ): LockerExternalRewards {
    const message = createBaseLockerExternalRewards();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.totalRewards =
      object.totalRewards !== undefined && object.totalRewards !== null
        ? Coin.fromPartial(object.totalRewards)
        : undefined;
    message.durationDays =
      object.durationDays !== undefined && object.durationDays !== null
        ? Long.fromValue(object.durationDays)
        : Long.ZERO;
    message.isActive = object.isActive ?? false;
    message.availableRewards =
      object.availableRewards !== undefined && object.availableRewards !== null
        ? Coin.fromPartial(object.availableRewards)
        : undefined;
    message.depositor = object.depositor ?? "";
    message.startTimestamp = object.startTimestamp ?? undefined;
    message.endTimestamp = object.endTimestamp ?? undefined;
    message.minLockupTimeSeconds =
      object.minLockupTimeSeconds !== undefined &&
      object.minLockupTimeSeconds !== null
        ? Long.fromValue(object.minLockupTimeSeconds)
        : Long.ZERO;
    message.epochId =
      object.epochId !== undefined && object.epochId !== null
        ? Long.fromValue(object.epochId)
        : Long.UZERO;
    return message;
  },
};

function createBaseVaultExternalRewards(): VaultExternalRewards {
  return {
    id: Long.UZERO,
    appMappingId: Long.UZERO,
    extendedPairId: Long.UZERO,
    totalRewards: undefined,
    durationDays: Long.ZERO,
    isActive: false,
    availableRewards: undefined,
    depositor: "",
    startTimestamp: undefined,
    endTimestamp: undefined,
    minLockupTimeSeconds: Long.ZERO,
    epochId: Long.UZERO,
  };
}

export const VaultExternalRewards = {
  encode(
    message: VaultExternalRewards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.appMappingId.isZero()) {
      writer.uint32(16).uint64(message.appMappingId);
    }
    if (!message.extendedPairId.isZero()) {
      writer.uint32(24).uint64(message.extendedPairId);
    }
    if (message.totalRewards !== undefined) {
      Coin.encode(message.totalRewards, writer.uint32(34).fork()).ldelim();
    }
    if (!message.durationDays.isZero()) {
      writer.uint32(40).int64(message.durationDays);
    }
    if (message.isActive === true) {
      writer.uint32(48).bool(message.isActive);
    }
    if (message.availableRewards !== undefined) {
      Coin.encode(message.availableRewards, writer.uint32(58).fork()).ldelim();
    }
    if (message.depositor !== "") {
      writer.uint32(66).string(message.depositor);
    }
    if (message.startTimestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTimestamp),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.endTimestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTimestamp),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (!message.minLockupTimeSeconds.isZero()) {
      writer.uint32(88).int64(message.minLockupTimeSeconds);
    }
    if (!message.epochId.isZero()) {
      writer.uint32(96).uint64(message.epochId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): VaultExternalRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVaultExternalRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.appMappingId = reader.uint64() as Long;
          break;
        case 3:
          message.extendedPairId = reader.uint64() as Long;
          break;
        case 4:
          message.totalRewards = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.durationDays = reader.int64() as Long;
          break;
        case 6:
          message.isActive = reader.bool();
          break;
        case 7:
          message.availableRewards = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.depositor = reader.string();
          break;
        case 9:
          message.startTimestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.endTimestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.minLockupTimeSeconds = reader.int64() as Long;
          break;
        case 12:
          message.epochId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VaultExternalRewards {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      appMappingId: isSet(object.appMappingId)
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO,
      extendedPairId: isSet(object.extendedPairId)
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO,
      totalRewards: isSet(object.totalRewards)
        ? Coin.fromJSON(object.totalRewards)
        : undefined,
      durationDays: isSet(object.durationDays)
        ? Long.fromValue(object.durationDays)
        : Long.ZERO,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      availableRewards: isSet(object.availableRewards)
        ? Coin.fromJSON(object.availableRewards)
        : undefined,
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      startTimestamp: isSet(object.startTimestamp)
        ? fromJsonTimestamp(object.startTimestamp)
        : undefined,
      endTimestamp: isSet(object.endTimestamp)
        ? fromJsonTimestamp(object.endTimestamp)
        : undefined,
      minLockupTimeSeconds: isSet(object.minLockupTimeSeconds)
        ? Long.fromValue(object.minLockupTimeSeconds)
        : Long.ZERO,
      epochId: isSet(object.epochId)
        ? Long.fromValue(object.epochId)
        : Long.UZERO,
    };
  },

  toJSON(message: VaultExternalRewards): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
    message.extendedPairId !== undefined &&
      (obj.extendedPairId = (message.extendedPairId || Long.UZERO).toString());
    message.totalRewards !== undefined &&
      (obj.totalRewards = message.totalRewards
        ? Coin.toJSON(message.totalRewards)
        : undefined);
    message.durationDays !== undefined &&
      (obj.durationDays = (message.durationDays || Long.ZERO).toString());
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.availableRewards !== undefined &&
      (obj.availableRewards = message.availableRewards
        ? Coin.toJSON(message.availableRewards)
        : undefined);
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.startTimestamp !== undefined &&
      (obj.startTimestamp = message.startTimestamp.toISOString());
    message.endTimestamp !== undefined &&
      (obj.endTimestamp = message.endTimestamp.toISOString());
    message.minLockupTimeSeconds !== undefined &&
      (obj.minLockupTimeSeconds = (
        message.minLockupTimeSeconds || Long.ZERO
      ).toString());
    message.epochId !== undefined &&
      (obj.epochId = (message.epochId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VaultExternalRewards>, I>>(
    object: I
  ): VaultExternalRewards {
    const message = createBaseVaultExternalRewards();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO;
    message.extendedPairId =
      object.extendedPairId !== undefined && object.extendedPairId !== null
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO;
    message.totalRewards =
      object.totalRewards !== undefined && object.totalRewards !== null
        ? Coin.fromPartial(object.totalRewards)
        : undefined;
    message.durationDays =
      object.durationDays !== undefined && object.durationDays !== null
        ? Long.fromValue(object.durationDays)
        : Long.ZERO;
    message.isActive = object.isActive ?? false;
    message.availableRewards =
      object.availableRewards !== undefined && object.availableRewards !== null
        ? Coin.fromPartial(object.availableRewards)
        : undefined;
    message.depositor = object.depositor ?? "";
    message.startTimestamp = object.startTimestamp ?? undefined;
    message.endTimestamp = object.endTimestamp ?? undefined;
    message.minLockupTimeSeconds =
      object.minLockupTimeSeconds !== undefined &&
      object.minLockupTimeSeconds !== null
        ? Long.fromValue(object.minLockupTimeSeconds)
        : Long.ZERO;
    message.epochId =
      object.epochId !== undefined && object.epochId !== null
        ? Long.fromValue(object.epochId)
        : Long.UZERO;
    return message;
  },
};

function createBaseWhitelistedAppIdsVault(): WhitelistedAppIdsVault {
  return { whitelistedAppMappingIdsVaults: [] };
}

export const WhitelistedAppIdsVault = {
  encode(
    message: WhitelistedAppIdsVault,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.whitelistedAppMappingIdsVaults) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WhitelistedAppIdsVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistedAppIdsVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.whitelistedAppMappingIdsVaults.push(
                reader.uint64() as Long
              );
            }
          } else {
            message.whitelistedAppMappingIdsVaults.push(
              reader.uint64() as Long
            );
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WhitelistedAppIdsVault {
    return {
      whitelistedAppMappingIdsVaults: Array.isArray(
        object?.whitelistedAppMappingIdsVaults
      )
        ? object.whitelistedAppMappingIdsVaults.map((e: any) =>
            Long.fromValue(e)
          )
        : [],
    };
  },

  toJSON(message: WhitelistedAppIdsVault): unknown {
    const obj: any = {};
    if (message.whitelistedAppMappingIdsVaults) {
      obj.whitelistedAppMappingIdsVaults =
        message.whitelistedAppMappingIdsVaults.map((e) =>
          (e || Long.UZERO).toString()
        );
    } else {
      obj.whitelistedAppMappingIdsVaults = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WhitelistedAppIdsVault>, I>>(
    object: I
  ): WhitelistedAppIdsVault {
    const message = createBaseWhitelistedAppIdsVault();
    message.whitelistedAppMappingIdsVaults =
      object.whitelistedAppMappingIdsVaults?.map((e) => Long.fromValue(e)) ||
      [];
    return message;
  },
};

function createBaseEpochTime(): EpochTime {
  return {
    id: Long.UZERO,
    appMappingId: Long.UZERO,
    startingTime: Long.ZERO,
    count: Long.UZERO,
  };
}

export const EpochTime = {
  encode(
    message: EpochTime,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.appMappingId.isZero()) {
      writer.uint32(16).uint64(message.appMappingId);
    }
    if (!message.startingTime.isZero()) {
      writer.uint32(24).int64(message.startingTime);
    }
    if (!message.count.isZero()) {
      writer.uint32(32).uint64(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochTime {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.appMappingId = reader.uint64() as Long;
          break;
        case 3:
          message.startingTime = reader.int64() as Long;
          break;
        case 4:
          message.count = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EpochTime {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      appMappingId: isSet(object.appMappingId)
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO,
      startingTime: isSet(object.startingTime)
        ? Long.fromValue(object.startingTime)
        : Long.ZERO,
      count: isSet(object.count) ? Long.fromValue(object.count) : Long.UZERO,
    };
  },

  toJSON(message: EpochTime): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
    message.startingTime !== undefined &&
      (obj.startingTime = (message.startingTime || Long.ZERO).toString());
    message.count !== undefined &&
      (obj.count = (message.count || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EpochTime>, I>>(
    object: I
  ): EpochTime {
    const message = createBaseEpochTime();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO;
    message.startingTime =
      object.startingTime !== undefined && object.startingTime !== null
        ? Long.fromValue(object.startingTime)
        : Long.ZERO;
    message.count =
      object.count !== undefined && object.count !== null
        ? Long.fromValue(object.count)
        : Long.UZERO;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
