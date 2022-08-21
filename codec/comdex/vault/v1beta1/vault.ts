/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.vault.v1beta1";

/** app_vault_type_id will be the key for  the KVStore for this value. */
export interface Vault {
  id: Long;
  appId: Long;
  extendedPairVaultId: Long;
  owner: string;
  amountIn: string;
  amountOut: string;
  createdAt?: Date;
  interestAccumulated: string;
  closingFeeAccumulated: string;
  blockHeight: Long;
  blockTime?: Date;
}

export interface OwnerAppExtendedPairVaultMappingData {
  owner: string;
  appId: Long;
  extendedPairId: Long;
  vaultId: Long;
}

export interface AppExtendedPairVaultMappingData {
  appId: Long;
  extendedPairId: Long;
  vaultIds: Long[];
  tokenMintedAmount: string;
  collateralLockedAmount: string;
}

export interface TvlLockedDataMap {
  assetDenom: string;
  collateralLockedAmount: string;
}

export interface MintedDataMap {
  assetDenom: string;
  mintedAmount: string;
}

export interface StableMintVault {
  id: Long;
  amountIn: string;
  amountOut: string;
  appId: Long;
  extendedPairVaultId: Long;
  createdAt?: Date;
}

export interface PairStatisticData {
  assetInDenom: string;
  assetOutDenom: string;
  collateralAmount: string;
  mintedAmount: string;
  extendedPairVaultId: Long;
}

function createBaseVault(): Vault {
  return {
    id: Long.UZERO,
    appId: Long.UZERO,
    extendedPairVaultId: Long.UZERO,
    owner: "",
    amountIn: "",
    amountOut: "",
    createdAt: undefined,
    interestAccumulated: "",
    closingFeeAccumulated: "",
    blockHeight: Long.ZERO,
    blockTime: undefined,
  };
}

export const Vault = {
  encode(message: Vault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (!message.extendedPairVaultId.isZero()) {
      writer.uint32(24).uint64(message.extendedPairVaultId);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.amountIn !== "") {
      writer.uint32(42).string(message.amountIn);
    }
    if (message.amountOut !== "") {
      writer.uint32(50).string(message.amountOut);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.interestAccumulated !== "") {
      writer.uint32(66).string(message.interestAccumulated);
    }
    if (message.closingFeeAccumulated !== "") {
      writer.uint32(74).string(message.closingFeeAccumulated);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(80).int64(message.blockHeight);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.blockTime),
        writer.uint32(90).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.appId = reader.uint64() as Long;
          break;
        case 3:
          message.extendedPairVaultId = reader.uint64() as Long;
          break;
        case 4:
          message.owner = reader.string();
          break;
        case 5:
          message.amountIn = reader.string();
          break;
        case 6:
          message.amountOut = reader.string();
          break;
        case 7:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.interestAccumulated = reader.string();
          break;
        case 9:
          message.closingFeeAccumulated = reader.string();
          break;
        case 10:
          message.blockHeight = reader.int64() as Long;
          break;
        case 11:
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

  fromJSON(object: any): Vault {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      extendedPairVaultId: isSet(object.extendedPairVaultId)
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
      interestAccumulated: isSet(object.interestAccumulated)
        ? String(object.interestAccumulated)
        : "",
      closingFeeAccumulated: isSet(object.closingFeeAccumulated)
        ? String(object.closingFeeAccumulated)
        : "",
      blockHeight: isSet(object.blockHeight)
        ? Long.fromValue(object.blockHeight)
        : Long.ZERO,
      blockTime: isSet(object.blockTime)
        ? fromJsonTimestamp(object.blockTime)
        : undefined,
    };
  },

  toJSON(message: Vault): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.extendedPairVaultId !== undefined &&
      (obj.extendedPairVaultId = (
        message.extendedPairVaultId || Long.UZERO
      ).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.interestAccumulated !== undefined &&
      (obj.interestAccumulated = message.interestAccumulated);
    message.closingFeeAccumulated !== undefined &&
      (obj.closingFeeAccumulated = message.closingFeeAccumulated);
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.blockTime !== undefined &&
      (obj.blockTime = message.blockTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vault>, I>>(object: I): Vault {
    const message = createBaseVault();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.extendedPairVaultId =
      object.extendedPairVaultId !== undefined &&
      object.extendedPairVaultId !== null
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO;
    message.owner = object.owner ?? "";
    message.amountIn = object.amountIn ?? "";
    message.amountOut = object.amountOut ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.interestAccumulated = object.interestAccumulated ?? "";
    message.closingFeeAccumulated = object.closingFeeAccumulated ?? "";
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.ZERO;
    message.blockTime = object.blockTime ?? undefined;
    return message;
  },
};

function createBaseOwnerAppExtendedPairVaultMappingData(): OwnerAppExtendedPairVaultMappingData {
  return {
    owner: "",
    appId: Long.UZERO,
    extendedPairId: Long.UZERO,
    vaultId: Long.UZERO,
  };
}

export const OwnerAppExtendedPairVaultMappingData = {
  encode(
    message: OwnerAppExtendedPairVaultMappingData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (!message.extendedPairId.isZero()) {
      writer.uint32(24).uint64(message.extendedPairId);
    }
    if (!message.vaultId.isZero()) {
      writer.uint32(32).uint64(message.vaultId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OwnerAppExtendedPairVaultMappingData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwnerAppExtendedPairVaultMappingData();
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
          message.extendedPairId = reader.uint64() as Long;
          break;
        case 4:
          message.vaultId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OwnerAppExtendedPairVaultMappingData {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      extendedPairId: isSet(object.extendedPairId)
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO,
      vaultId: isSet(object.vaultId)
        ? Long.fromValue(object.vaultId)
        : Long.UZERO,
    };
  },

  toJSON(message: OwnerAppExtendedPairVaultMappingData): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.extendedPairId !== undefined &&
      (obj.extendedPairId = (message.extendedPairId || Long.UZERO).toString());
    message.vaultId !== undefined &&
      (obj.vaultId = (message.vaultId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<OwnerAppExtendedPairVaultMappingData>, I>
  >(object: I): OwnerAppExtendedPairVaultMappingData {
    const message = createBaseOwnerAppExtendedPairVaultMappingData();
    message.owner = object.owner ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.extendedPairId =
      object.extendedPairId !== undefined && object.extendedPairId !== null
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO;
    message.vaultId =
      object.vaultId !== undefined && object.vaultId !== null
        ? Long.fromValue(object.vaultId)
        : Long.UZERO;
    return message;
  },
};

function createBaseAppExtendedPairVaultMappingData(): AppExtendedPairVaultMappingData {
  return {
    appId: Long.UZERO,
    extendedPairId: Long.UZERO,
    vaultIds: [],
    tokenMintedAmount: "",
    collateralLockedAmount: "",
  };
}

export const AppExtendedPairVaultMappingData = {
  encode(
    message: AppExtendedPairVaultMappingData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.extendedPairId.isZero()) {
      writer.uint32(16).uint64(message.extendedPairId);
    }
    writer.uint32(26).fork();
    for (const v of message.vaultIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.tokenMintedAmount !== "") {
      writer.uint32(34).string(message.tokenMintedAmount);
    }
    if (message.collateralLockedAmount !== "") {
      writer.uint32(42).string(message.collateralLockedAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AppExtendedPairVaultMappingData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppExtendedPairVaultMappingData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.extendedPairId = reader.uint64() as Long;
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.vaultIds.push(reader.uint64() as Long);
            }
          } else {
            message.vaultIds.push(reader.uint64() as Long);
          }
          break;
        case 4:
          message.tokenMintedAmount = reader.string();
          break;
        case 5:
          message.collateralLockedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppExtendedPairVaultMappingData {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      extendedPairId: isSet(object.extendedPairId)
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO,
      vaultIds: Array.isArray(object?.vaultIds)
        ? object.vaultIds.map((e: any) => Long.fromValue(e))
        : [],
      tokenMintedAmount: isSet(object.tokenMintedAmount)
        ? String(object.tokenMintedAmount)
        : "",
      collateralLockedAmount: isSet(object.collateralLockedAmount)
        ? String(object.collateralLockedAmount)
        : "",
    };
  },

  toJSON(message: AppExtendedPairVaultMappingData): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.extendedPairId !== undefined &&
      (obj.extendedPairId = (message.extendedPairId || Long.UZERO).toString());
    if (message.vaultIds) {
      obj.vaultIds = message.vaultIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.vaultIds = [];
    }
    message.tokenMintedAmount !== undefined &&
      (obj.tokenMintedAmount = message.tokenMintedAmount);
    message.collateralLockedAmount !== undefined &&
      (obj.collateralLockedAmount = message.collateralLockedAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AppExtendedPairVaultMappingData>, I>>(
    object: I
  ): AppExtendedPairVaultMappingData {
    const message = createBaseAppExtendedPairVaultMappingData();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.extendedPairId =
      object.extendedPairId !== undefined && object.extendedPairId !== null
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO;
    message.vaultIds = object.vaultIds?.map((e) => Long.fromValue(e)) || [];
    message.tokenMintedAmount = object.tokenMintedAmount ?? "";
    message.collateralLockedAmount = object.collateralLockedAmount ?? "";
    return message;
  },
};

function createBaseTvlLockedDataMap(): TvlLockedDataMap {
  return { assetDenom: "", collateralLockedAmount: "" };
}

export const TvlLockedDataMap = {
  encode(
    message: TvlLockedDataMap,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.assetDenom !== "") {
      writer.uint32(10).string(message.assetDenom);
    }
    if (message.collateralLockedAmount !== "") {
      writer.uint32(18).string(message.collateralLockedAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TvlLockedDataMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTvlLockedDataMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetDenom = reader.string();
          break;
        case 2:
          message.collateralLockedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TvlLockedDataMap {
    return {
      assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : "",
      collateralLockedAmount: isSet(object.collateralLockedAmount)
        ? String(object.collateralLockedAmount)
        : "",
    };
  },

  toJSON(message: TvlLockedDataMap): unknown {
    const obj: any = {};
    message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
    message.collateralLockedAmount !== undefined &&
      (obj.collateralLockedAmount = message.collateralLockedAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TvlLockedDataMap>, I>>(
    object: I
  ): TvlLockedDataMap {
    const message = createBaseTvlLockedDataMap();
    message.assetDenom = object.assetDenom ?? "";
    message.collateralLockedAmount = object.collateralLockedAmount ?? "";
    return message;
  },
};

function createBaseMintedDataMap(): MintedDataMap {
  return { assetDenom: "", mintedAmount: "" };
}

export const MintedDataMap = {
  encode(
    message: MintedDataMap,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.assetDenom !== "") {
      writer.uint32(10).string(message.assetDenom);
    }
    if (message.mintedAmount !== "") {
      writer.uint32(18).string(message.mintedAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintedDataMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintedDataMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetDenom = reader.string();
          break;
        case 2:
          message.mintedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MintedDataMap {
    return {
      assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : "",
      mintedAmount: isSet(object.mintedAmount)
        ? String(object.mintedAmount)
        : "",
    };
  },

  toJSON(message: MintedDataMap): unknown {
    const obj: any = {};
    message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
    message.mintedAmount !== undefined &&
      (obj.mintedAmount = message.mintedAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MintedDataMap>, I>>(
    object: I
  ): MintedDataMap {
    const message = createBaseMintedDataMap();
    message.assetDenom = object.assetDenom ?? "";
    message.mintedAmount = object.mintedAmount ?? "";
    return message;
  },
};

function createBaseStableMintVault(): StableMintVault {
  return {
    id: Long.UZERO,
    amountIn: "",
    amountOut: "",
    appId: Long.UZERO,
    extendedPairVaultId: Long.UZERO,
    createdAt: undefined,
  };
}

export const StableMintVault = {
  encode(
    message: StableMintVault,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.amountIn !== "") {
      writer.uint32(18).string(message.amountIn);
    }
    if (message.amountOut !== "") {
      writer.uint32(26).string(message.amountOut);
    }
    if (!message.appId.isZero()) {
      writer.uint32(32).uint64(message.appId);
    }
    if (!message.extendedPairVaultId.isZero()) {
      writer.uint32(40).uint64(message.extendedPairVaultId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StableMintVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStableMintVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.amountIn = reader.string();
          break;
        case 3:
          message.amountOut = reader.string();
          break;
        case 4:
          message.appId = reader.uint64() as Long;
          break;
        case 5:
          message.extendedPairVaultId = reader.uint64() as Long;
          break;
        case 6:
          message.createdAt = fromTimestamp(
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

  fromJSON(object: any): StableMintVault {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      extendedPairVaultId: isSet(object.extendedPairVaultId)
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO,
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
    };
  },

  toJSON(message: StableMintVault): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.extendedPairVaultId !== undefined &&
      (obj.extendedPairVaultId = (
        message.extendedPairVaultId || Long.UZERO
      ).toString());
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StableMintVault>, I>>(
    object: I
  ): StableMintVault {
    const message = createBaseStableMintVault();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.amountIn = object.amountIn ?? "";
    message.amountOut = object.amountOut ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.extendedPairVaultId =
      object.extendedPairVaultId !== undefined &&
      object.extendedPairVaultId !== null
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO;
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

function createBasePairStatisticData(): PairStatisticData {
  return {
    assetInDenom: "",
    assetOutDenom: "",
    collateralAmount: "",
    mintedAmount: "",
    extendedPairVaultId: Long.UZERO,
  };
}

export const PairStatisticData = {
  encode(
    message: PairStatisticData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.assetInDenom !== "") {
      writer.uint32(10).string(message.assetInDenom);
    }
    if (message.assetOutDenom !== "") {
      writer.uint32(18).string(message.assetOutDenom);
    }
    if (message.collateralAmount !== "") {
      writer.uint32(26).string(message.collateralAmount);
    }
    if (message.mintedAmount !== "") {
      writer.uint32(34).string(message.mintedAmount);
    }
    if (!message.extendedPairVaultId.isZero()) {
      writer.uint32(40).uint64(message.extendedPairVaultId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PairStatisticData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePairStatisticData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetInDenom = reader.string();
          break;
        case 2:
          message.assetOutDenom = reader.string();
          break;
        case 3:
          message.collateralAmount = reader.string();
          break;
        case 4:
          message.mintedAmount = reader.string();
          break;
        case 5:
          message.extendedPairVaultId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PairStatisticData {
    return {
      assetInDenom: isSet(object.assetInDenom)
        ? String(object.assetInDenom)
        : "",
      assetOutDenom: isSet(object.assetOutDenom)
        ? String(object.assetOutDenom)
        : "",
      collateralAmount: isSet(object.collateralAmount)
        ? String(object.collateralAmount)
        : "",
      mintedAmount: isSet(object.mintedAmount)
        ? String(object.mintedAmount)
        : "",
      extendedPairVaultId: isSet(object.extendedPairVaultId)
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO,
    };
  },

  toJSON(message: PairStatisticData): unknown {
    const obj: any = {};
    message.assetInDenom !== undefined &&
      (obj.assetInDenom = message.assetInDenom);
    message.assetOutDenom !== undefined &&
      (obj.assetOutDenom = message.assetOutDenom);
    message.collateralAmount !== undefined &&
      (obj.collateralAmount = message.collateralAmount);
    message.mintedAmount !== undefined &&
      (obj.mintedAmount = message.mintedAmount);
    message.extendedPairVaultId !== undefined &&
      (obj.extendedPairVaultId = (
        message.extendedPairVaultId || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PairStatisticData>, I>>(
    object: I
  ): PairStatisticData {
    const message = createBasePairStatisticData();
    message.assetInDenom = object.assetInDenom ?? "";
    message.assetOutDenom = object.assetOutDenom ?? "";
    message.collateralAmount = object.collateralAmount ?? "";
    message.mintedAmount = object.mintedAmount ?? "";
    message.extendedPairVaultId =
      object.extendedPairVaultId !== undefined &&
      object.extendedPairVaultId !== null
        ? Long.fromValue(object.extendedPairVaultId)
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
