/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.rewards.v1beta1";

export interface InternalRewards {
  appMappingID: Long;
  assetID: Long;
}

export interface LockerRewardsTracker {
  lockerId: Long;
  appMappingId: Long;
  rewardsAccumulated: string;
}

export interface VaultInterestTracker {
  vaultId: Long;
  appMappingId: Long;
  interestAccumulated: string;
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

export interface EpochTime {
  id: Long;
  appMappingId: Long;
  startingTime: Long;
  count: Long;
}

export interface LendExternalRewards {
  id: Long;
  appMappingId: Long;
  rewardsAssetPoolData?: RewardsAssetPoolData;
  totalRewards?: Coin;
  rewardAssetId: Long;
  durationDays: Long;
  isActive: boolean;
  availableRewards?: Coin;
  depositor: string;
  startTimestamp?: Date;
  endTimestamp?: Date;
  minLockupTimeSeconds: Long;
  epochId: Long;
}

export interface RewardsAssetPoolData {
  cPoolId: Long;
  assetId: Long[];
}

function createBaseInternalRewards(): InternalRewards {
  return { appMappingID: Long.UZERO, assetID: Long.UZERO };
}

export const InternalRewards = {
  encode(
    message: InternalRewards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appMappingID.isZero()) {
      writer.uint32(8).uint64(message.appMappingID);
    }
    if (!message.assetID.isZero()) {
      writer.uint32(16).uint64(message.assetID);
    }
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
          message.assetID = reader.uint64() as Long;
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
      assetID: isSet(object.assetID)
        ? Long.fromValue(object.assetID)
        : Long.UZERO,
    };
  },

  toJSON(message: InternalRewards): unknown {
    const obj: any = {};
    message.appMappingID !== undefined &&
      (obj.appMappingID = (message.appMappingID || Long.UZERO).toString());
    message.assetID !== undefined &&
      (obj.assetID = (message.assetID || Long.UZERO).toString());
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
    message.assetID =
      object.assetID !== undefined && object.assetID !== null
        ? Long.fromValue(object.assetID)
        : Long.UZERO;
    return message;
  },
};

function createBaseLockerRewardsTracker(): LockerRewardsTracker {
  return {
    lockerId: Long.UZERO,
    appMappingId: Long.UZERO,
    rewardsAccumulated: "",
  };
}

export const LockerRewardsTracker = {
  encode(
    message: LockerRewardsTracker,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.lockerId.isZero()) {
      writer.uint32(8).uint64(message.lockerId);
    }
    if (!message.appMappingId.isZero()) {
      writer.uint32(16).uint64(message.appMappingId);
    }
    if (message.rewardsAccumulated !== "") {
      writer.uint32(26).string(message.rewardsAccumulated);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LockerRewardsTracker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockerRewardsTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockerId = reader.uint64() as Long;
          break;
        case 2:
          message.appMappingId = reader.uint64() as Long;
          break;
        case 3:
          message.rewardsAccumulated = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockerRewardsTracker {
    return {
      lockerId: isSet(object.lockerId)
        ? Long.fromValue(object.lockerId)
        : Long.UZERO,
      appMappingId: isSet(object.appMappingId)
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO,
      rewardsAccumulated: isSet(object.rewardsAccumulated)
        ? String(object.rewardsAccumulated)
        : "",
    };
  },

  toJSON(message: LockerRewardsTracker): unknown {
    const obj: any = {};
    message.lockerId !== undefined &&
      (obj.lockerId = (message.lockerId || Long.UZERO).toString());
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
    message.rewardsAccumulated !== undefined &&
      (obj.rewardsAccumulated = message.rewardsAccumulated);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LockerRewardsTracker>, I>>(
    object: I
  ): LockerRewardsTracker {
    const message = createBaseLockerRewardsTracker();
    message.lockerId =
      object.lockerId !== undefined && object.lockerId !== null
        ? Long.fromValue(object.lockerId)
        : Long.UZERO;
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO;
    message.rewardsAccumulated = object.rewardsAccumulated ?? "";
    return message;
  },
};

function createBaseVaultInterestTracker(): VaultInterestTracker {
  return {
    vaultId: Long.UZERO,
    appMappingId: Long.UZERO,
    interestAccumulated: "",
  };
}

export const VaultInterestTracker = {
  encode(
    message: VaultInterestTracker,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.vaultId.isZero()) {
      writer.uint32(8).uint64(message.vaultId);
    }
    if (!message.appMappingId.isZero()) {
      writer.uint32(16).uint64(message.appMappingId);
    }
    if (message.interestAccumulated !== "") {
      writer.uint32(26).string(message.interestAccumulated);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): VaultInterestTracker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVaultInterestTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultId = reader.uint64() as Long;
          break;
        case 2:
          message.appMappingId = reader.uint64() as Long;
          break;
        case 3:
          message.interestAccumulated = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VaultInterestTracker {
    return {
      vaultId: isSet(object.vaultId)
        ? Long.fromValue(object.vaultId)
        : Long.UZERO,
      appMappingId: isSet(object.appMappingId)
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO,
      interestAccumulated: isSet(object.interestAccumulated)
        ? String(object.interestAccumulated)
        : "",
    };
  },

  toJSON(message: VaultInterestTracker): unknown {
    const obj: any = {};
    message.vaultId !== undefined &&
      (obj.vaultId = (message.vaultId || Long.UZERO).toString());
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
    message.interestAccumulated !== undefined &&
      (obj.interestAccumulated = message.interestAccumulated);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VaultInterestTracker>, I>>(
    object: I
  ): VaultInterestTracker {
    const message = createBaseVaultInterestTracker();
    message.vaultId =
      object.vaultId !== undefined && object.vaultId !== null
        ? Long.fromValue(object.vaultId)
        : Long.UZERO;
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO;
    message.interestAccumulated = object.interestAccumulated ?? "";
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

function createBaseLendExternalRewards(): LendExternalRewards {
  return {
    id: Long.UZERO,
    appMappingId: Long.UZERO,
    rewardsAssetPoolData: undefined,
    totalRewards: undefined,
    rewardAssetId: Long.UZERO,
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

export const LendExternalRewards = {
  encode(
    message: LendExternalRewards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.appMappingId.isZero()) {
      writer.uint32(16).uint64(message.appMappingId);
    }
    if (message.rewardsAssetPoolData !== undefined) {
      RewardsAssetPoolData.encode(
        message.rewardsAssetPoolData,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.totalRewards !== undefined) {
      Coin.encode(message.totalRewards, writer.uint32(34).fork()).ldelim();
    }
    if (!message.rewardAssetId.isZero()) {
      writer.uint32(40).uint64(message.rewardAssetId);
    }
    if (!message.durationDays.isZero()) {
      writer.uint32(48).int64(message.durationDays);
    }
    if (message.isActive === true) {
      writer.uint32(56).bool(message.isActive);
    }
    if (message.availableRewards !== undefined) {
      Coin.encode(message.availableRewards, writer.uint32(66).fork()).ldelim();
    }
    if (message.depositor !== "") {
      writer.uint32(74).string(message.depositor);
    }
    if (message.startTimestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTimestamp),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.endTimestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTimestamp),
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (!message.minLockupTimeSeconds.isZero()) {
      writer.uint32(96).int64(message.minLockupTimeSeconds);
    }
    if (!message.epochId.isZero()) {
      writer.uint32(104).uint64(message.epochId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LendExternalRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLendExternalRewards();
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
          message.rewardsAssetPoolData = RewardsAssetPoolData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.totalRewards = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.rewardAssetId = reader.uint64() as Long;
          break;
        case 6:
          message.durationDays = reader.int64() as Long;
          break;
        case 7:
          message.isActive = reader.bool();
          break;
        case 8:
          message.availableRewards = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.depositor = reader.string();
          break;
        case 10:
          message.startTimestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.endTimestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.minLockupTimeSeconds = reader.int64() as Long;
          break;
        case 13:
          message.epochId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LendExternalRewards {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      appMappingId: isSet(object.appMappingId)
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO,
      rewardsAssetPoolData: isSet(object.rewardsAssetPoolData)
        ? RewardsAssetPoolData.fromJSON(object.rewardsAssetPoolData)
        : undefined,
      totalRewards: isSet(object.totalRewards)
        ? Coin.fromJSON(object.totalRewards)
        : undefined,
      rewardAssetId: isSet(object.rewardAssetId)
        ? Long.fromValue(object.rewardAssetId)
        : Long.UZERO,
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

  toJSON(message: LendExternalRewards): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
    message.rewardsAssetPoolData !== undefined &&
      (obj.rewardsAssetPoolData = message.rewardsAssetPoolData
        ? RewardsAssetPoolData.toJSON(message.rewardsAssetPoolData)
        : undefined);
    message.totalRewards !== undefined &&
      (obj.totalRewards = message.totalRewards
        ? Coin.toJSON(message.totalRewards)
        : undefined);
    message.rewardAssetId !== undefined &&
      (obj.rewardAssetId = (message.rewardAssetId || Long.UZERO).toString());
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

  fromPartial<I extends Exact<DeepPartial<LendExternalRewards>, I>>(
    object: I
  ): LendExternalRewards {
    const message = createBaseLendExternalRewards();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO;
    message.rewardsAssetPoolData =
      object.rewardsAssetPoolData !== undefined &&
      object.rewardsAssetPoolData !== null
        ? RewardsAssetPoolData.fromPartial(object.rewardsAssetPoolData)
        : undefined;
    message.totalRewards =
      object.totalRewards !== undefined && object.totalRewards !== null
        ? Coin.fromPartial(object.totalRewards)
        : undefined;
    message.rewardAssetId =
      object.rewardAssetId !== undefined && object.rewardAssetId !== null
        ? Long.fromValue(object.rewardAssetId)
        : Long.UZERO;
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

function createBaseRewardsAssetPoolData(): RewardsAssetPoolData {
  return { cPoolId: Long.UZERO, assetId: [] };
}

export const RewardsAssetPoolData = {
  encode(
    message: RewardsAssetPoolData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.cPoolId.isZero()) {
      writer.uint32(8).uint64(message.cPoolId);
    }
    writer.uint32(18).fork();
    for (const v of message.assetId) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RewardsAssetPoolData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsAssetPoolData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cPoolId = reader.uint64() as Long;
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.assetId.push(reader.uint64() as Long);
            }
          } else {
            message.assetId.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardsAssetPoolData {
    return {
      cPoolId: isSet(object.cPoolId)
        ? Long.fromValue(object.cPoolId)
        : Long.UZERO,
      assetId: Array.isArray(object?.assetId)
        ? object.assetId.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: RewardsAssetPoolData): unknown {
    const obj: any = {};
    message.cPoolId !== undefined &&
      (obj.cPoolId = (message.cPoolId || Long.UZERO).toString());
    if (message.assetId) {
      obj.assetId = message.assetId.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.assetId = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RewardsAssetPoolData>, I>>(
    object: I
  ): RewardsAssetPoolData {
    const message = createBaseRewardsAssetPoolData();
    message.cPoolId =
      object.cPoolId !== undefined && object.cPoolId !== null
        ? Long.fromValue(object.cPoolId)
        : Long.UZERO;
    message.assetId = object.assetId?.map((e) => Long.fromValue(e)) || [];
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
