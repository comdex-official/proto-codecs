/* eslint-disable */
import Long from "long";
import  _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.vault.v1beta1";

/** app_vault_type_id will be the key for  the KVStore for this value. */
export interface Vault {
  id: string;
  appMappingId: Long;
  extendedPairVaultId: Long;
  owner: string;
  amountIn: string;
  amountOut: string;
  createdAt?: Date;
  interestAccumulated: string;
  closingFeeAccumulated: string;
}

/** user_address is the key */
export interface UserVaultAssetMapping {
  owner: string;
  userVaultApp: VaultToAppMapping[];
}

export interface VaultToAppMapping {
  appMappingId: Long;
  userExtendedPairVault: ExtendedPairToVaultMapping[];
}

export interface ExtendedPairToVaultMapping {
  extendedPairId: Long;
  vaultId: string;
}

/** app_id is the key */
export interface AppExtendedPairVaultMapping {
  appMappingId: Long;
  counter: Long;
  extendedPairVaults: ExtendedPairVaultMapping[];
}

export interface ExtendedPairVaultMapping {
  extendedPairId: Long;
  vaultIds: string[];
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
  id: string;
  amountIn: string;
  amountOut: string;
  appMappingId: Long;
  extendedPairVaultId: Long;
  createdAt?: Date;
}

function createBaseVault(): Vault {
  return {
    id: "",
    appMappingId: Long.UZERO,
    extendedPairVaultId: Long.UZERO,
    owner: "",
    amountIn: "",
    amountOut: "",
    createdAt: undefined,
    interestAccumulated: "",
    closingFeeAccumulated: "",
  };
}

export const Vault = {
  encode(message: Vault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (!message.appMappingId.isZero()) {
      writer.uint32(16).uint64(message.appMappingId);
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
          message.id = reader.string();
          break;
        case 2:
          message.appMappingId = reader.uint64() as Long;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vault {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      appMappingId: isSet(object.appMappingId)
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO,
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
    };
  },

  toJSON(message: Vault): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
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
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vault>, I>>(object: I): Vault {
    const message = createBaseVault();
    message.id = object.id ?? "";
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
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
    return message;
  },
};

function createBaseUserVaultAssetMapping(): UserVaultAssetMapping {
  return { owner: "", userVaultApp: [] };
}

export const UserVaultAssetMapping = {
  encode(
    message: UserVaultAssetMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.userVaultApp) {
      VaultToAppMapping.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UserVaultAssetMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserVaultAssetMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.userVaultApp.push(
            VaultToAppMapping.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserVaultAssetMapping {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      userVaultApp: Array.isArray(object?.userVaultApp)
        ? object.userVaultApp.map((e: any) => VaultToAppMapping.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UserVaultAssetMapping): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.userVaultApp) {
      obj.userVaultApp = message.userVaultApp.map((e) =>
        e ? VaultToAppMapping.toJSON(e) : undefined
      );
    } else {
      obj.userVaultApp = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserVaultAssetMapping>, I>>(
    object: I
  ): UserVaultAssetMapping {
    const message = createBaseUserVaultAssetMapping();
    message.owner = object.owner ?? "";
    message.userVaultApp =
      object.userVaultApp?.map((e) => VaultToAppMapping.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVaultToAppMapping(): VaultToAppMapping {
  return { appMappingId: Long.UZERO, userExtendedPairVault: [] };
}

export const VaultToAppMapping = {
  encode(
    message: VaultToAppMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appMappingId.isZero()) {
      writer.uint32(8).uint64(message.appMappingId);
    }
    for (const v of message.userExtendedPairVault) {
      ExtendedPairToVaultMapping.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VaultToAppMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVaultToAppMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appMappingId = reader.uint64() as Long;
          break;
        case 2:
          message.userExtendedPairVault.push(
            ExtendedPairToVaultMapping.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VaultToAppMapping {
    return {
      appMappingId: isSet(object.appMappingId)
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO,
      userExtendedPairVault: Array.isArray(object?.userExtendedPairVault)
        ? object.userExtendedPairVault.map((e: any) =>
            ExtendedPairToVaultMapping.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: VaultToAppMapping): unknown {
    const obj: any = {};
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
    if (message.userExtendedPairVault) {
      obj.userExtendedPairVault = message.userExtendedPairVault.map((e) =>
        e ? ExtendedPairToVaultMapping.toJSON(e) : undefined
      );
    } else {
      obj.userExtendedPairVault = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VaultToAppMapping>, I>>(
    object: I
  ): VaultToAppMapping {
    const message = createBaseVaultToAppMapping();
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO;
    message.userExtendedPairVault =
      object.userExtendedPairVault?.map((e) =>
        ExtendedPairToVaultMapping.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseExtendedPairToVaultMapping(): ExtendedPairToVaultMapping {
  return { extendedPairId: Long.UZERO, vaultId: "" };
}

export const ExtendedPairToVaultMapping = {
  encode(
    message: ExtendedPairToVaultMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.extendedPairId.isZero()) {
      writer.uint32(8).uint64(message.extendedPairId);
    }
    if (message.vaultId !== "") {
      writer.uint32(18).string(message.vaultId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExtendedPairToVaultMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedPairToVaultMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extendedPairId = reader.uint64() as Long;
          break;
        case 2:
          message.vaultId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExtendedPairToVaultMapping {
    return {
      extendedPairId: isSet(object.extendedPairId)
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO,
      vaultId: isSet(object.vaultId) ? String(object.vaultId) : "",
    };
  },

  toJSON(message: ExtendedPairToVaultMapping): unknown {
    const obj: any = {};
    message.extendedPairId !== undefined &&
      (obj.extendedPairId = (message.extendedPairId || Long.UZERO).toString());
    message.vaultId !== undefined && (obj.vaultId = message.vaultId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExtendedPairToVaultMapping>, I>>(
    object: I
  ): ExtendedPairToVaultMapping {
    const message = createBaseExtendedPairToVaultMapping();
    message.extendedPairId =
      object.extendedPairId !== undefined && object.extendedPairId !== null
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO;
    message.vaultId = object.vaultId ?? "";
    return message;
  },
};

function createBaseAppExtendedPairVaultMapping(): AppExtendedPairVaultMapping {
  return {
    appMappingId: Long.UZERO,
    counter: Long.UZERO,
    extendedPairVaults: [],
  };
}

export const AppExtendedPairVaultMapping = {
  encode(
    message: AppExtendedPairVaultMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appMappingId.isZero()) {
      writer.uint32(8).uint64(message.appMappingId);
    }
    if (!message.counter.isZero()) {
      writer.uint32(16).uint64(message.counter);
    }
    for (const v of message.extendedPairVaults) {
      ExtendedPairVaultMapping.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AppExtendedPairVaultMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppExtendedPairVaultMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appMappingId = reader.uint64() as Long;
          break;
        case 2:
          message.counter = reader.uint64() as Long;
          break;
        case 3:
          message.extendedPairVaults.push(
            ExtendedPairVaultMapping.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppExtendedPairVaultMapping {
    return {
      appMappingId: isSet(object.appMappingId)
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO,
      counter: isSet(object.counter)
        ? Long.fromValue(object.counter)
        : Long.UZERO,
      extendedPairVaults: Array.isArray(object?.extendedPairVaults)
        ? object.extendedPairVaults.map((e: any) =>
            ExtendedPairVaultMapping.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: AppExtendedPairVaultMapping): unknown {
    const obj: any = {};
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
    message.counter !== undefined &&
      (obj.counter = (message.counter || Long.UZERO).toString());
    if (message.extendedPairVaults) {
      obj.extendedPairVaults = message.extendedPairVaults.map((e) =>
        e ? ExtendedPairVaultMapping.toJSON(e) : undefined
      );
    } else {
      obj.extendedPairVaults = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AppExtendedPairVaultMapping>, I>>(
    object: I
  ): AppExtendedPairVaultMapping {
    const message = createBaseAppExtendedPairVaultMapping();
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO;
    message.counter =
      object.counter !== undefined && object.counter !== null
        ? Long.fromValue(object.counter)
        : Long.UZERO;
    message.extendedPairVaults =
      object.extendedPairVaults?.map((e) =>
        ExtendedPairVaultMapping.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseExtendedPairVaultMapping(): ExtendedPairVaultMapping {
  return {
    extendedPairId: Long.UZERO,
    vaultIds: [],
    tokenMintedAmount: "",
    collateralLockedAmount: "",
  };
}

export const ExtendedPairVaultMapping = {
  encode(
    message: ExtendedPairVaultMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.extendedPairId.isZero()) {
      writer.uint32(8).uint64(message.extendedPairId);
    }
    for (const v of message.vaultIds) {
      writer.uint32(18).string(v!);
    }
    if (message.tokenMintedAmount !== "") {
      writer.uint32(26).string(message.tokenMintedAmount);
    }
    if (message.collateralLockedAmount !== "") {
      writer.uint32(34).string(message.collateralLockedAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExtendedPairVaultMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedPairVaultMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extendedPairId = reader.uint64() as Long;
          break;
        case 2:
          message.vaultIds.push(reader.string());
          break;
        case 3:
          message.tokenMintedAmount = reader.string();
          break;
        case 4:
          message.collateralLockedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExtendedPairVaultMapping {
    return {
      extendedPairId: isSet(object.extendedPairId)
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO,
      vaultIds: Array.isArray(object?.vaultIds)
        ? object.vaultIds.map((e: any) => String(e))
        : [],
      tokenMintedAmount: isSet(object.tokenMintedAmount)
        ? String(object.tokenMintedAmount)
        : "",
      collateralLockedAmount: isSet(object.collateralLockedAmount)
        ? String(object.collateralLockedAmount)
        : "",
    };
  },

  toJSON(message: ExtendedPairVaultMapping): unknown {
    const obj: any = {};
    message.extendedPairId !== undefined &&
      (obj.extendedPairId = (message.extendedPairId || Long.UZERO).toString());
    if (message.vaultIds) {
      obj.vaultIds = message.vaultIds.map((e) => e);
    } else {
      obj.vaultIds = [];
    }
    message.tokenMintedAmount !== undefined &&
      (obj.tokenMintedAmount = message.tokenMintedAmount);
    message.collateralLockedAmount !== undefined &&
      (obj.collateralLockedAmount = message.collateralLockedAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExtendedPairVaultMapping>, I>>(
    object: I
  ): ExtendedPairVaultMapping {
    const message = createBaseExtendedPairVaultMapping();
    message.extendedPairId =
      object.extendedPairId !== undefined && object.extendedPairId !== null
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO;
    message.vaultIds = object.vaultIds?.map((e) => e) || [];
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
    id: "",
    amountIn: "",
    amountOut: "",
    appMappingId: Long.UZERO,
    extendedPairVaultId: Long.UZERO,
    createdAt: undefined,
  };
}

export const StableMintVault = {
  encode(
    message: StableMintVault,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.amountIn !== "") {
      writer.uint32(18).string(message.amountIn);
    }
    if (message.amountOut !== "") {
      writer.uint32(26).string(message.amountOut);
    }
    if (!message.appMappingId.isZero()) {
      writer.uint32(32).uint64(message.appMappingId);
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
          message.id = reader.string();
          break;
        case 2:
          message.amountIn = reader.string();
          break;
        case 3:
          message.amountOut = reader.string();
          break;
        case 4:
          message.appMappingId = reader.uint64() as Long;
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
      id: isSet(object.id) ? String(object.id) : "",
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
      appMappingId: isSet(object.appMappingId)
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO,
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
    message.id !== undefined && (obj.id = message.id);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut);
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
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
    message.id = object.id ?? "";
    message.amountIn = object.amountIn ?? "";
    message.amountOut = object.amountOut ?? "";
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
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
