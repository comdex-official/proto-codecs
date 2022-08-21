/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.locker.v1beta1";

/** locker_id will be the key which will be derived from the LockerLookUpTable */
export interface Locker {
  lockerId: Long;
  depositor: string;
  returnsAccumulated: string;
  netBalance: string;
  createdAt?: Date;
  assetDepositId: Long;
  isLocked: boolean;
  appId: Long;
  blockHeight: Long;
  blockTime?: Date;
}

export interface UserAppAssetLockerMapping {
  owner: string;
  appId: Long;
  assetId: Long;
  lockerId: Long;
  userData: UserTxData[];
}

export interface UserTxData {
  txType: string;
  amount: string;
  balance: string;
  txTime?: Date;
}

export interface LockerLookupTableData {
  appId: Long;
  assetId: Long;
  lockerIds: Long[];
  depositedAmount: string;
}

/** Key is app_mapping_id */
export interface LockerProductAssetMapping {
  appId: Long;
  assetId: Long;
}

export interface LockedDepositedAmountDataMap {
  assetId: Long;
  depositedAmount: string;
}

export interface LockerTotalRewardsByAssetAppWise {
  appId: Long;
  assetId: Long;
  totalRewards: string;
}

function createBaseLocker(): Locker {
  return {
    lockerId: Long.UZERO,
    depositor: "",
    returnsAccumulated: "",
    netBalance: "",
    createdAt: undefined,
    assetDepositId: Long.UZERO,
    isLocked: false,
    appId: Long.UZERO,
    blockHeight: Long.ZERO,
    blockTime: undefined,
  };
}

export const Locker = {
  encode(
    message: Locker,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.lockerId.isZero()) {
      writer.uint32(8).uint64(message.lockerId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    if (message.returnsAccumulated !== "") {
      writer.uint32(26).string(message.returnsAccumulated);
    }
    if (message.netBalance !== "") {
      writer.uint32(34).string(message.netBalance);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (!message.assetDepositId.isZero()) {
      writer.uint32(48).uint64(message.assetDepositId);
    }
    if (message.isLocked === true) {
      writer.uint32(56).bool(message.isLocked);
    }
    if (!message.appId.isZero()) {
      writer.uint32(64).uint64(message.appId);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(72).int64(message.blockHeight);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.blockTime),
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Locker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockerId = reader.uint64() as Long;
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.returnsAccumulated = reader.string();
          break;
        case 4:
          message.netBalance = reader.string();
          break;
        case 5:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.assetDepositId = reader.uint64() as Long;
          break;
        case 7:
          message.isLocked = reader.bool();
          break;
        case 8:
          message.appId = reader.uint64() as Long;
          break;
        case 9:
          message.blockHeight = reader.int64() as Long;
          break;
        case 10:
          message.blockTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Locker {
    return {
      lockerId: isSet(object.lockerId)
        ? Long.fromValue(object.lockerId)
        : Long.UZERO,
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      returnsAccumulated: isSet(object.returnsAccumulated)
        ? String(object.returnsAccumulated)
        : "",
      netBalance: isSet(object.netBalance) ? String(object.netBalance) : "",
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
      assetDepositId: isSet(object.assetDepositId)
        ? Long.fromValue(object.assetDepositId)
        : Long.UZERO,
      isLocked: isSet(object.isLocked) ? Boolean(object.isLocked) : false,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      blockHeight: isSet(object.blockHeight)
        ? Long.fromValue(object.blockHeight)
        : Long.ZERO,
      blockTime: isSet(object.blockTime)
        ? fromJsonTimestamp(object.blockTime)
        : undefined,
    };
  },

  toJSON(message: Locker): unknown {
    const obj: any = {};
    message.lockerId !== undefined &&
      (obj.lockerId = (message.lockerId || Long.UZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.returnsAccumulated !== undefined &&
      (obj.returnsAccumulated = message.returnsAccumulated);
    message.netBalance !== undefined && (obj.netBalance = message.netBalance);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.assetDepositId !== undefined &&
      (obj.assetDepositId = (message.assetDepositId || Long.UZERO).toString());
    message.isLocked !== undefined && (obj.isLocked = message.isLocked);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.blockTime !== undefined &&
      (obj.blockTime = message.blockTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Locker>, I>>(object: I): Locker {
    const message = createBaseLocker();
    message.lockerId =
      object.lockerId !== undefined && object.lockerId !== null
        ? Long.fromValue(object.lockerId)
        : Long.UZERO;
    message.depositor = object.depositor ?? "";
    message.returnsAccumulated = object.returnsAccumulated ?? "";
    message.netBalance = object.netBalance ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.assetDepositId =
      object.assetDepositId !== undefined && object.assetDepositId !== null
        ? Long.fromValue(object.assetDepositId)
        : Long.UZERO;
    message.isLocked = object.isLocked ?? false;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.ZERO;
    message.blockTime = object.blockTime ?? undefined;
    return message;
  },
};

function createBaseUserAppAssetLockerMapping(): UserAppAssetLockerMapping {
  return {
    owner: "",
    appId: Long.UZERO,
    assetId: Long.UZERO,
    lockerId: Long.UZERO,
    userData: [],
  };
}

export const UserAppAssetLockerMapping = {
  encode(
    message: UserAppAssetLockerMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(24).uint64(message.assetId);
    }
    if (!message.lockerId.isZero()) {
      writer.uint32(32).uint64(message.lockerId);
    }
    for (const v of message.userData) {
      UserTxData.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UserAppAssetLockerMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserAppAssetLockerMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.appId = reader.uint64() as Long;
          break;
        case 3:
          message.assetId = reader.uint64() as Long;
          break;
        case 4:
          message.lockerId = reader.uint64() as Long;
          break;
        case 5:
          message.userData.push(UserTxData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserAppAssetLockerMapping {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      lockerId: isSet(object.lockerId)
        ? Long.fromValue(object.lockerId)
        : Long.UZERO,
      userData: Array.isArray(object?.userData)
        ? object.userData.map((e: any) => UserTxData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UserAppAssetLockerMapping): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.lockerId !== undefined &&
      (obj.lockerId = (message.lockerId || Long.UZERO).toString());
    if (message.userData) {
      obj.userData = message.userData.map((e) =>
        e ? UserTxData.toJSON(e) : undefined
      );
    } else {
      obj.userData = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserAppAssetLockerMapping>, I>>(
    object: I
  ): UserAppAssetLockerMapping {
    const message = createBaseUserAppAssetLockerMapping();
    message.owner = object.owner ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.lockerId =
      object.lockerId !== undefined && object.lockerId !== null
        ? Long.fromValue(object.lockerId)
        : Long.UZERO;
    message.userData =
      object.userData?.map((e) => UserTxData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUserTxData(): UserTxData {
  return { txType: "", amount: "", balance: "", txTime: undefined };
}

export const UserTxData = {
  encode(
    message: UserTxData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.txType !== "") {
      writer.uint32(10).string(message.txType);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.balance !== "") {
      writer.uint32(26).string(message.balance);
    }
    if (message.txTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.txTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserTxData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserTxData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txType = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.balance = reader.string();
          break;
        case 4:
          message.txTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserTxData {
    return {
      txType: isSet(object.txType) ? String(object.txType) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
      txTime: isSet(object.txTime)
        ? fromJsonTimestamp(object.txTime)
        : undefined,
    };
  },

  toJSON(message: UserTxData): unknown {
    const obj: any = {};
    message.txType !== undefined && (obj.txType = message.txType);
    message.amount !== undefined && (obj.amount = message.amount);
    message.balance !== undefined && (obj.balance = message.balance);
    message.txTime !== undefined && (obj.txTime = message.txTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserTxData>, I>>(
    object: I
  ): UserTxData {
    const message = createBaseUserTxData();
    message.txType = object.txType ?? "";
    message.amount = object.amount ?? "";
    message.balance = object.balance ?? "";
    message.txTime = object.txTime ?? undefined;
    return message;
  },
};

function createBaseLockerLookupTableData(): LockerLookupTableData {
  return {
    appId: Long.UZERO,
    assetId: Long.UZERO,
    lockerIds: [],
    depositedAmount: "",
  };
}

export const LockerLookupTableData = {
  encode(
    message: LockerLookupTableData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    writer.uint32(26).fork();
    for (const v of message.lockerIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.depositedAmount !== "") {
      writer.uint32(34).string(message.depositedAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LockerLookupTableData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockerLookupTableData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lockerIds.push(reader.uint64() as Long);
            }
          } else {
            message.lockerIds.push(reader.uint64() as Long);
          }
          break;
        case 4:
          message.depositedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockerLookupTableData {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      lockerIds: Array.isArray(object?.lockerIds)
        ? object.lockerIds.map((e: any) => Long.fromValue(e))
        : [],
      depositedAmount: isSet(object.depositedAmount)
        ? String(object.depositedAmount)
        : "",
    };
  },

  toJSON(message: LockerLookupTableData): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    if (message.lockerIds) {
      obj.lockerIds = message.lockerIds.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.lockerIds = [];
    }
    message.depositedAmount !== undefined &&
      (obj.depositedAmount = message.depositedAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LockerLookupTableData>, I>>(
    object: I
  ): LockerLookupTableData {
    const message = createBaseLockerLookupTableData();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.lockerIds = object.lockerIds?.map((e) => Long.fromValue(e)) || [];
    message.depositedAmount = object.depositedAmount ?? "";
    return message;
  },
};

function createBaseLockerProductAssetMapping(): LockerProductAssetMapping {
  return { appId: Long.UZERO, assetId: Long.UZERO };
}

export const LockerProductAssetMapping = {
  encode(
    message: LockerProductAssetMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LockerProductAssetMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockerProductAssetMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockerProductAssetMapping {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
    };
  },

  toJSON(message: LockerProductAssetMapping): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LockerProductAssetMapping>, I>>(
    object: I
  ): LockerProductAssetMapping {
    const message = createBaseLockerProductAssetMapping();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    return message;
  },
};

function createBaseLockedDepositedAmountDataMap(): LockedDepositedAmountDataMap {
  return { assetId: Long.UZERO, depositedAmount: "" };
}

export const LockedDepositedAmountDataMap = {
  encode(
    message: LockedDepositedAmountDataMap,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.assetId.isZero()) {
      writer.uint32(8).uint64(message.assetId);
    }
    if (message.depositedAmount !== "") {
      writer.uint32(18).string(message.depositedAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LockedDepositedAmountDataMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedDepositedAmountDataMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.uint64() as Long;
          break;
        case 2:
          message.depositedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockedDepositedAmountDataMap {
    return {
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      depositedAmount: isSet(object.depositedAmount)
        ? String(object.depositedAmount)
        : "",
    };
  },

  toJSON(message: LockedDepositedAmountDataMap): unknown {
    const obj: any = {};
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.depositedAmount !== undefined &&
      (obj.depositedAmount = message.depositedAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LockedDepositedAmountDataMap>, I>>(
    object: I
  ): LockedDepositedAmountDataMap {
    const message = createBaseLockedDepositedAmountDataMap();
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.depositedAmount = object.depositedAmount ?? "";
    return message;
  },
};

function createBaseLockerTotalRewardsByAssetAppWise(): LockerTotalRewardsByAssetAppWise {
  return { appId: Long.UZERO, assetId: Long.UZERO, totalRewards: "" };
}

export const LockerTotalRewardsByAssetAppWise = {
  encode(
    message: LockerTotalRewardsByAssetAppWise,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    if (message.totalRewards !== "") {
      writer.uint32(26).string(message.totalRewards);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LockerTotalRewardsByAssetAppWise {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockerTotalRewardsByAssetAppWise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        case 3:
          message.totalRewards = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockerTotalRewardsByAssetAppWise {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      totalRewards: isSet(object.totalRewards)
        ? String(object.totalRewards)
        : "",
    };
  },

  toJSON(message: LockerTotalRewardsByAssetAppWise): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.totalRewards !== undefined &&
      (obj.totalRewards = message.totalRewards);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<LockerTotalRewardsByAssetAppWise>, I>
  >(object: I): LockerTotalRewardsByAssetAppWise {
    const message = createBaseLockerTotalRewardsByAssetAppWise();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.totalRewards = object.totalRewards ?? "";
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
