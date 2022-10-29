/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { LiquidtyGaugeMetaData } from "../../../comdex/rewards/v1beta1/gauge";

export const protobufPackage = "comdex.rewards.v1beta1";

export interface MsgCreateGauge {
  from: string;
  gaugeTypeId: Long;
  triggerDuration?: Duration;
  depositAmount?: Coin;
  totalTriggers: Long;
  startTime?: Date;
  liquidityMetaData?: LiquidtyGaugeMetaData | undefined;
  appId: Long;
}

export interface MsgCreateGaugeResponse {}

export interface WhitelistAsset {
  appMappingId: Long;
  from: string;
  assetId: Long;
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

function createBaseMsgCreateGauge(): MsgCreateGauge {
  return {
    from: "",
    gaugeTypeId: Long.UZERO,
    triggerDuration: undefined,
    depositAmount: undefined,
    totalTriggers: Long.UZERO,
    startTime: undefined,
    liquidityMetaData: undefined,
    appId: Long.UZERO,
  };
}

export const MsgCreateGauge = {
  encode(
    message: MsgCreateGauge,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.gaugeTypeId.isZero()) {
      writer.uint32(16).uint64(message.gaugeTypeId);
    }
    if (message.triggerDuration !== undefined) {
      Duration.encode(
        message.triggerDuration,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.depositAmount !== undefined) {
      Coin.encode(message.depositAmount, writer.uint32(34).fork()).ldelim();
    }
    if (!message.totalTriggers.isZero()) {
      writer.uint32(40).uint64(message.totalTriggers);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.liquidityMetaData !== undefined) {
      LiquidtyGaugeMetaData.encode(
        message.liquidityMetaData,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (!message.appId.isZero()) {
      writer.uint32(64).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGauge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.gaugeTypeId = reader.uint64() as Long;
          break;
        case 3:
          message.triggerDuration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.depositAmount = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.totalTriggers = reader.uint64() as Long;
          break;
        case 6:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.liquidityMetaData = LiquidtyGaugeMetaData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGauge {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      gaugeTypeId: isSet(object.gaugeTypeId)
        ? Long.fromValue(object.gaugeTypeId)
        : Long.UZERO,
      triggerDuration: isSet(object.triggerDuration)
        ? Duration.fromJSON(object.triggerDuration)
        : undefined,
      depositAmount: isSet(object.depositAmount)
        ? Coin.fromJSON(object.depositAmount)
        : undefined,
      totalTriggers: isSet(object.totalTriggers)
        ? Long.fromValue(object.totalTriggers)
        : Long.UZERO,
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
      liquidityMetaData: isSet(object.liquidityMetaData)
        ? LiquidtyGaugeMetaData.fromJSON(object.liquidityMetaData)
        : undefined,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: MsgCreateGauge): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.gaugeTypeId !== undefined &&
      (obj.gaugeTypeId = (message.gaugeTypeId || Long.UZERO).toString());
    message.triggerDuration !== undefined &&
      (obj.triggerDuration = message.triggerDuration
        ? Duration.toJSON(message.triggerDuration)
        : undefined);
    message.depositAmount !== undefined &&
      (obj.depositAmount = message.depositAmount
        ? Coin.toJSON(message.depositAmount)
        : undefined);
    message.totalTriggers !== undefined &&
      (obj.totalTriggers = (message.totalTriggers || Long.UZERO).toString());
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.liquidityMetaData !== undefined &&
      (obj.liquidityMetaData = message.liquidityMetaData
        ? LiquidtyGaugeMetaData.toJSON(message.liquidityMetaData)
        : undefined);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGauge>, I>>(
    object: I
  ): MsgCreateGauge {
    const message = createBaseMsgCreateGauge();
    message.from = object.from ?? "";
    message.gaugeTypeId =
      object.gaugeTypeId !== undefined && object.gaugeTypeId !== null
        ? Long.fromValue(object.gaugeTypeId)
        : Long.UZERO;
    message.triggerDuration =
      object.triggerDuration !== undefined && object.triggerDuration !== null
        ? Duration.fromPartial(object.triggerDuration)
        : undefined;
    message.depositAmount =
      object.depositAmount !== undefined && object.depositAmount !== null
        ? Coin.fromPartial(object.depositAmount)
        : undefined;
    message.totalTriggers =
      object.totalTriggers !== undefined && object.totalTriggers !== null
        ? Long.fromValue(object.totalTriggers)
        : Long.UZERO;
    message.startTime = object.startTime ?? undefined;
    message.liquidityMetaData =
      object.liquidityMetaData !== undefined &&
      object.liquidityMetaData !== null
        ? LiquidtyGaugeMetaData.fromPartial(object.liquidityMetaData)
        : undefined;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgCreateGaugeResponse(): MsgCreateGaugeResponse {
  return {};
}

export const MsgCreateGaugeResponse = {
  encode(
    _: MsgCreateGaugeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateGaugeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGaugeResponse();
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

  fromJSON(_: any): MsgCreateGaugeResponse {
    return {};
  },

  toJSON(_: MsgCreateGaugeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGaugeResponse>, I>>(
    _: I
  ): MsgCreateGaugeResponse {
    const message = createBaseMsgCreateGaugeResponse();
    return message;
  },
};

function createBaseWhitelistAsset(): WhitelistAsset {
  return { appMappingId: Long.UZERO, from: "", assetId: Long.UZERO };
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
    if (!message.assetId.isZero()) {
      writer.uint32(24).uint64(message.assetId);
    }
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
          message.assetId = reader.uint64() as Long;
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
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO,
      from: isSet(object.from) ? String(object.from) : "",
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
    };
  },

  toJSON(message: WhitelistAsset): unknown {
    const obj: any = {};
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
    message.from !== undefined && (obj.from = message.from);
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
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
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
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
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO,
      from: isSet(object.from) ? String(object.from) : "",
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
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
        ? Long.fromValue(object.appMappingId)
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
        ? Long.fromValue(object.appMappingId)
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
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      minLockupTimeSeconds: isSet(object.minLockupTimeSeconds)
        ? Long.fromValue(object.minLockupTimeSeconds)
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
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      minLockupTimeSeconds: isSet(object.minLockupTimeSeconds)
        ? Long.fromValue(object.minLockupTimeSeconds)
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
  CreateGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponse>;
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
    this.CreateGauge = this.CreateGauge.bind(this);
    this.ExternalRewardsLockers = this.ExternalRewardsLockers.bind(this);
    this.ExternalRewardsVault = this.ExternalRewardsVault.bind(this);
  }
  CreateGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponse> {
    const data = MsgCreateGauge.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.rewards.v1beta1.Msg",
      "CreateGauge",
      data
    );
    return promise.then((data) =>
      MsgCreateGaugeResponse.decode(new _m0.Reader(data))
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
