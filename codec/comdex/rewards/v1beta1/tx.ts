/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "comdex.rewards.v1beta1";

export interface WhitelistAsset {
  appMappingId: Long;
  from: string;
  assetId: Long[];
}

export interface RemoveWhitelistAsset {
  appMappingId: Long;
  from: string;
  assetId: Long;
}

export interface MsgWhitelistAssetResponse {}

export interface MsgRemoveWhitelistAssetResponse {}

export interface WhitelistAppIdVault {
  appMappingId: Long;
  from: string;
}

export interface RemoveWhitelistAppIdVault {
  appMappingId: Long;
  from: string;
}

export interface MsgWhitelistAppIdVaultResponse {}

export interface MsgRemoveWhitelistAppIdVaultResponse {}

export interface ActivateExternalRewardsLockers {
  appMappingId: Long;
  assetId: Long;
  totalRewards?: Coin;
  durationDays: Long;
  depositor: string;
  minLockupTimeSeconds: Long;
}

export interface ActivateExternalRewardsLockersResponse {}

export interface ActivateExternalRewardsVault {
  appMappingId: Long;
  extendedPairId: Long;
  totalRewards?: Coin;
  durationDays: Long;
  depositor: string;
  minLockupTimeSeconds: Long;
}

export interface ActivateExternalRewardsVaultResponse {}

function createBaseWhitelistAsset(): WhitelistAsset {
  return { appMappingId: Long.UZERO, from: "", assetId: [] };
}

export const WhitelistAsset = {
  encode(
    message: WhitelistAsset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appMappingId.isZero()) {
      writer.uint32(8).uint64(message.appMappingId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    writer.uint32(26).fork();
    for (const v of message.assetId) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WhitelistAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appMappingId = reader.uint64() as Long;
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
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

  fromJSON(object: any): WhitelistAsset {
    return {
      appMappingId: isSet(object.appMappingId)
        ? Long.fromString(object.appMappingId)
        : Long.UZERO,
      from: isSet(object.from) ? String(object.from) : "",
      assetId: Array.isArray(object?.assetId)
        ? object.assetId.map((e: any) => Long.fromString(e))
        : [],
    };
  },

  toJSON(message: WhitelistAsset): unknown {
    const obj: any = {};
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
    message.from !== undefined && (obj.from = message.from);
    if (message.assetId) {
      obj.assetId = message.assetId.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.assetId = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WhitelistAsset>, I>>(
    object: I
  ): WhitelistAsset {
    const message = createBaseWhitelistAsset();
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO;
    message.from = object.from ?? "";
    message.assetId = object.assetId?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseRemoveWhitelistAsset(): RemoveWhitelistAsset {
  return { appMappingId: Long.UZERO, from: "", assetId: Long.UZERO };
}

export const RemoveWhitelistAsset = {
  encode(
    message: RemoveWhitelistAsset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appMappingId.isZero()) {
      writer.uint32(8).uint64(message.appMappingId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(24).uint64(message.assetId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveWhitelistAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveWhitelistAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appMappingId = reader.uint64() as Long;
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.assetId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveWhitelistAsset {
    return {
      appMappingId: isSet(object.appMappingId)
        ? Long.fromString(object.appMappingId)
        : Long.UZERO,
      from: isSet(object.from) ? String(object.from) : "",
      assetId: isSet(object.assetId)
        ? Long.fromString(object.assetId)
        : Long.UZERO,
    };
  },

  toJSON(message: RemoveWhitelistAsset): unknown {
    const obj: any = {};
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
    message.from !== undefined && (obj.from = message.from);
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveWhitelistAsset>, I>>(
    object: I
  ): RemoveWhitelistAsset {
    const message = createBaseRemoveWhitelistAsset();
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO;
    message.from = object.from ?? "";
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgWhitelistAssetResponse(): MsgWhitelistAssetResponse {
  return {};
}

export const MsgWhitelistAssetResponse = {
  encode(
    _: MsgWhitelistAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWhitelistAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelistAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWhitelistAssetResponse {
    return {};
  },

  toJSON(_: MsgWhitelistAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWhitelistAssetResponse>, I>>(
    _: I
  ): MsgWhitelistAssetResponse {
    const message = createBaseMsgWhitelistAssetResponse();
    return message;
  },
};

function createBaseMsgRemoveWhitelistAssetResponse(): MsgRemoveWhitelistAssetResponse {
  return {};
}

export const MsgRemoveWhitelistAssetResponse = {
  encode(
    _: MsgRemoveWhitelistAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveWhitelistAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveWhitelistAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRemoveWhitelistAssetResponse {
    return {};
  },

  toJSON(_: MsgRemoveWhitelistAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveWhitelistAssetResponse>, I>>(
    _: I
  ): MsgRemoveWhitelistAssetResponse {
    const message = createBaseMsgRemoveWhitelistAssetResponse();
    return message;
  },
};

function createBaseWhitelistAppIdVault(): WhitelistAppIdVault {
  return { appMappingId: Long.UZERO, from: "" };
}

export const WhitelistAppIdVault = {
  encode(
    message: WhitelistAppIdVault,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appMappingId.isZero()) {
      writer.uint32(8).uint64(message.appMappingId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WhitelistAppIdVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistAppIdVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appMappingId = reader.uint64() as Long;
          break;
        case 2:
          message.from = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WhitelistAppIdVault {
    return {
      appMappingId: isSet(object.appMappingId)
        ? Long.fromString(object.appMappingId)
        : Long.UZERO,
      from: isSet(object.from) ? String(object.from) : "",
    };
  },

  toJSON(message: WhitelistAppIdVault): unknown {
    const obj: any = {};
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
    message.from !== undefined && (obj.from = message.from);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WhitelistAppIdVault>, I>>(
    object: I
  ): WhitelistAppIdVault {
    const message = createBaseWhitelistAppIdVault();
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO;
    message.from = object.from ?? "";
    return message;
  },
};

function createBaseRemoveWhitelistAppIdVault(): RemoveWhitelistAppIdVault {
  return { appMappingId: Long.UZERO, from: "" };
}

export const RemoveWhitelistAppIdVault = {
  encode(
    message: RemoveWhitelistAppIdVault,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appMappingId.isZero()) {
      writer.uint32(8).uint64(message.appMappingId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveWhitelistAppIdVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveWhitelistAppIdVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appMappingId = reader.uint64() as Long;
          break;
        case 2:
          message.from = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveWhitelistAppIdVault {
    return {
      appMappingId: isSet(object.appMappingId)
        ? Long.fromString(object.appMappingId)
        : Long.UZERO,
      from: isSet(object.from) ? String(object.from) : "",
    };
  },

  toJSON(message: RemoveWhitelistAppIdVault): unknown {
    const obj: any = {};
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
    message.from !== undefined && (obj.from = message.from);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveWhitelistAppIdVault>, I>>(
    object: I
  ): RemoveWhitelistAppIdVault {
    const message = createBaseRemoveWhitelistAppIdVault();
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO;
    message.from = object.from ?? "";
    return message;
  },
};

function createBaseMsgWhitelistAppIdVaultResponse(): MsgWhitelistAppIdVaultResponse {
  return {};
}

export const MsgWhitelistAppIdVaultResponse = {
  encode(
    _: MsgWhitelistAppIdVaultResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWhitelistAppIdVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelistAppIdVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWhitelistAppIdVaultResponse {
    return {};
  },

  toJSON(_: MsgWhitelistAppIdVaultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWhitelistAppIdVaultResponse>, I>>(
    _: I
  ): MsgWhitelistAppIdVaultResponse {
    const message = createBaseMsgWhitelistAppIdVaultResponse();
    return message;
  },
};

function createBaseMsgRemoveWhitelistAppIdVaultResponse(): MsgRemoveWhitelistAppIdVaultResponse {
  return {};
}

export const MsgRemoveWhitelistAppIdVaultResponse = {
  encode(
    _: MsgRemoveWhitelistAppIdVaultResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveWhitelistAppIdVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveWhitelistAppIdVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRemoveWhitelistAppIdVaultResponse {
    return {};
  },

  toJSON(_: MsgRemoveWhitelistAppIdVaultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgRemoveWhitelistAppIdVaultResponse>, I>
  >(_: I): MsgRemoveWhitelistAppIdVaultResponse {
    const message = createBaseMsgRemoveWhitelistAppIdVaultResponse();
    return message;
  },
};

function createBaseActivateExternalRewardsLockers(): ActivateExternalRewardsLockers {
  return {
    appMappingId: Long.UZERO,
    assetId: Long.UZERO,
    totalRewards: undefined,
    durationDays: Long.ZERO,
    depositor: "",
    minLockupTimeSeconds: Long.ZERO,
  };
}

export const ActivateExternalRewardsLockers = {
  encode(
    message: ActivateExternalRewardsLockers,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appMappingId.isZero()) {
      writer.uint32(8).uint64(message.appMappingId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    if (message.totalRewards !== undefined) {
      Coin.encode(message.totalRewards, writer.uint32(26).fork()).ldelim();
    }
    if (!message.durationDays.isZero()) {
      writer.uint32(32).int64(message.durationDays);
    }
    if (message.depositor !== "") {
      writer.uint32(42).string(message.depositor);
    }
    if (!message.minLockupTimeSeconds.isZero()) {
      writer.uint32(48).int64(message.minLockupTimeSeconds);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ActivateExternalRewardsLockers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateExternalRewardsLockers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appMappingId = reader.uint64() as Long;
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        case 3:
          message.totalRewards = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.durationDays = reader.int64() as Long;
          break;
        case 5:
          message.depositor = reader.string();
          break;
        case 6:
          message.minLockupTimeSeconds = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActivateExternalRewardsLockers {
    return {
      appMappingId: isSet(object.appMappingId)
        ? Long.fromString(object.appMappingId)
        : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromString(object.assetId)
        : Long.UZERO,
      totalRewards: isSet(object.totalRewards)
        ? Coin.fromJSON(object.totalRewards)
        : undefined,
      durationDays: isSet(object.durationDays)
        ? Long.fromString(object.durationDays)
        : Long.ZERO,
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      minLockupTimeSeconds: isSet(object.minLockupTimeSeconds)
        ? Long.fromString(object.minLockupTimeSeconds)
        : Long.ZERO,
    };
  },

  toJSON(message: ActivateExternalRewardsLockers): unknown {
    const obj: any = {};
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
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.minLockupTimeSeconds !== undefined &&
      (obj.minLockupTimeSeconds = (
        message.minLockupTimeSeconds || Long.ZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActivateExternalRewardsLockers>, I>>(
    object: I
  ): ActivateExternalRewardsLockers {
    const message = createBaseActivateExternalRewardsLockers();
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
    message.depositor = object.depositor ?? "";
    message.minLockupTimeSeconds =
      object.minLockupTimeSeconds !== undefined &&
      object.minLockupTimeSeconds !== null
        ? Long.fromValue(object.minLockupTimeSeconds)
        : Long.ZERO;
    return message;
  },
};

function createBaseActivateExternalRewardsLockersResponse(): ActivateExternalRewardsLockersResponse {
  return {};
}

export const ActivateExternalRewardsLockersResponse = {
  encode(
    _: ActivateExternalRewardsLockersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ActivateExternalRewardsLockersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateExternalRewardsLockersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ActivateExternalRewardsLockersResponse {
    return {};
  },

  toJSON(_: ActivateExternalRewardsLockersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ActivateExternalRewardsLockersResponse>, I>
  >(_: I): ActivateExternalRewardsLockersResponse {
    const message = createBaseActivateExternalRewardsLockersResponse();
    return message;
  },
};

function createBaseActivateExternalRewardsVault(): ActivateExternalRewardsVault {
  return {
    appMappingId: Long.UZERO,
    extendedPairId: Long.UZERO,
    totalRewards: undefined,
    durationDays: Long.ZERO,
    depositor: "",
    minLockupTimeSeconds: Long.ZERO,
  };
}

export const ActivateExternalRewardsVault = {
  encode(
    message: ActivateExternalRewardsVault,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appMappingId.isZero()) {
      writer.uint32(8).uint64(message.appMappingId);
    }
    if (!message.extendedPairId.isZero()) {
      writer.uint32(16).uint64(message.extendedPairId);
    }
    if (message.totalRewards !== undefined) {
      Coin.encode(message.totalRewards, writer.uint32(26).fork()).ldelim();
    }
    if (!message.durationDays.isZero()) {
      writer.uint32(32).int64(message.durationDays);
    }
    if (message.depositor !== "") {
      writer.uint32(42).string(message.depositor);
    }
    if (!message.minLockupTimeSeconds.isZero()) {
      writer.uint32(48).int64(message.minLockupTimeSeconds);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ActivateExternalRewardsVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateExternalRewardsVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appMappingId = reader.uint64() as Long;
          break;
        case 2:
          message.extendedPairId = reader.uint64() as Long;
          break;
        case 3:
          message.totalRewards = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.durationDays = reader.int64() as Long;
          break;
        case 5:
          message.depositor = reader.string();
          break;
        case 6:
          message.minLockupTimeSeconds = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActivateExternalRewardsVault {
    return {
      appMappingId: isSet(object.appMappingId)
        ? Long.fromString(object.appMappingId)
        : Long.UZERO,
      extendedPairId: isSet(object.extendedPairId)
        ? Long.fromString(object.extendedPairId)
        : Long.UZERO,
      totalRewards: isSet(object.totalRewards)
        ? Coin.fromJSON(object.totalRewards)
        : undefined,
      durationDays: isSet(object.durationDays)
        ? Long.fromString(object.durationDays)
        : Long.ZERO,
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      minLockupTimeSeconds: isSet(object.minLockupTimeSeconds)
        ? Long.fromString(object.minLockupTimeSeconds)
        : Long.ZERO,
    };
  },

  toJSON(message: ActivateExternalRewardsVault): unknown {
    const obj: any = {};
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
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.minLockupTimeSeconds !== undefined &&
      (obj.minLockupTimeSeconds = (
        message.minLockupTimeSeconds || Long.ZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActivateExternalRewardsVault>, I>>(
    object: I
  ): ActivateExternalRewardsVault {
    const message = createBaseActivateExternalRewardsVault();
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
    message.depositor = object.depositor ?? "";
    message.minLockupTimeSeconds =
      object.minLockupTimeSeconds !== undefined &&
      object.minLockupTimeSeconds !== null
        ? Long.fromValue(object.minLockupTimeSeconds)
        : Long.ZERO;
    return message;
  },
};

function createBaseActivateExternalRewardsVaultResponse(): ActivateExternalRewardsVaultResponse {
  return {};
}

export const ActivateExternalRewardsVaultResponse = {
  encode(
    _: ActivateExternalRewardsVaultResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ActivateExternalRewardsVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateExternalRewardsVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ActivateExternalRewardsVaultResponse {
    return {};
  },

  toJSON(_: ActivateExternalRewardsVaultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ActivateExternalRewardsVaultResponse>, I>
  >(_: I): ActivateExternalRewardsVaultResponse {
    const message = createBaseActivateExternalRewardsVaultResponse();
    return message;
  },
};

export interface Msg {
  Whitelist(request: WhitelistAsset): Promise<MsgWhitelistAssetResponse>;
  RemoveWhitelist(
    request: RemoveWhitelistAsset
  ): Promise<MsgRemoveWhitelistAssetResponse>;
  WhitelistAppVault(
    request: WhitelistAppIdVault
  ): Promise<MsgWhitelistAppIdVaultResponse>;
  RemoveWhitelistAppVault(
    request: RemoveWhitelistAppIdVault
  ): Promise<MsgRemoveWhitelistAppIdVaultResponse>;
  ExternalRewardsLockers(
    request: ActivateExternalRewardsLockers
  ): Promise<ActivateExternalRewardsLockersResponse>;
  ExternalRewardsVault(
    request: ActivateExternalRewardsVault
  ): Promise<ActivateExternalRewardsVaultResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Whitelist = this.Whitelist.bind(this);
    this.RemoveWhitelist = this.RemoveWhitelist.bind(this);
    this.WhitelistAppVault = this.WhitelistAppVault.bind(this);
    this.RemoveWhitelistAppVault = this.RemoveWhitelistAppVault.bind(this);
    this.ExternalRewardsLockers = this.ExternalRewardsLockers.bind(this);
    this.ExternalRewardsVault = this.ExternalRewardsVault.bind(this);
  }
  Whitelist(request: WhitelistAsset): Promise<MsgWhitelistAssetResponse> {
    const data = WhitelistAsset.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.rewards.v1beta1.Msg",
      "Whitelist",
      data
    );
    return promise.then((data) =>
      MsgWhitelistAssetResponse.decode(new _m0.Reader(data))
    );
  }

  RemoveWhitelist(
    request: RemoveWhitelistAsset
  ): Promise<MsgRemoveWhitelistAssetResponse> {
    const data = RemoveWhitelistAsset.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.rewards.v1beta1.Msg",
      "RemoveWhitelist",
      data
    );
    return promise.then((data) =>
      MsgRemoveWhitelistAssetResponse.decode(new _m0.Reader(data))
    );
  }

  WhitelistAppVault(
    request: WhitelistAppIdVault
  ): Promise<MsgWhitelistAppIdVaultResponse> {
    const data = WhitelistAppIdVault.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.rewards.v1beta1.Msg",
      "WhitelistAppVault",
      data
    );
    return promise.then((data) =>
      MsgWhitelistAppIdVaultResponse.decode(new _m0.Reader(data))
    );
  }

  RemoveWhitelistAppVault(
    request: RemoveWhitelistAppIdVault
  ): Promise<MsgRemoveWhitelistAppIdVaultResponse> {
    const data = RemoveWhitelistAppIdVault.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.rewards.v1beta1.Msg",
      "RemoveWhitelistAppVault",
      data
    );
    return promise.then((data) =>
      MsgRemoveWhitelistAppIdVaultResponse.decode(new _m0.Reader(data))
    );
  }

  ExternalRewardsLockers(
    request: ActivateExternalRewardsLockers
  ): Promise<ActivateExternalRewardsLockersResponse> {
    const data = ActivateExternalRewardsLockers.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.rewards.v1beta1.Msg",
      "ExternalRewardsLockers",
      data
    );
    return promise.then((data) =>
      ActivateExternalRewardsLockersResponse.decode(new _m0.Reader(data))
    );
  }

  ExternalRewardsVault(
    request: ActivateExternalRewardsVault
  ): Promise<ActivateExternalRewardsVaultResponse> {
    const data = ActivateExternalRewardsVault.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.rewards.v1beta1.Msg",
      "ExternalRewardsVault",
      data
    );
    return promise.then((data) =>
      ActivateExternalRewardsVaultResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
