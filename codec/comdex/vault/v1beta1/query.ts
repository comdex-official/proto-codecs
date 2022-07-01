/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  Vault,
  StableMintVault,
  ExtendedPairVaultMapping,
  UserVaultAssetMapping,
  MintedDataMap,
  TvlLockedDataMap,
  PairStatisticData,
} from "../../../comdex/vault/v1beta1/vault";
import {
  PageResponse,
  PageRequest,
} from "../../../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "comdex.vault.v1beta1";

export interface VaultInfo {
  id: string;
  extendedPairId: Long;
  owner: string;
  collateral: string;
  debt: string;
  collateralizationRatio: string;
  extendedPairName: string;
  interestRate: string;
  assetInDenom: string;
  assetOutDenom: string;
  minCr: string;
}

export interface QueryVaultRequest {
  id: string;
}

export interface QueryVaultResponse {
  vault?: Vault;
}

export interface QueryVaultInfoByVaultIdRequest {
  id: string;
}

export interface QueryVaultInfoByVaultIdResponse {
  vaultsInfo?: VaultInfo;
}

export interface QueryVaultInfoOfOwnerByAppRequest {
  appId: Long;
  owner: string;
}

export interface QueryVaultInfoOfOwnerByAppResponse {
  vaultsInfo: VaultInfo[];
  pagination?: PageResponse;
}

export interface QueryAllVaultsRequest {
  pagination?: PageRequest;
}

export interface QueryAllVaultsResponse {
  vault: Vault[];
  pagination?: PageResponse;
}

export interface QueryAllVaultsByAppRequest {
  appId: Long;
}

export interface QueryAllVaultsByAppResponse {
  vault: Vault[];
  pagination?: PageResponse;
}

export interface QueryAllVaultsByAppAndExtendedPairRequest {
  appId: Long;
  extendedPairId: Long;
  pagination?: PageRequest;
}

export interface QueryAllVaultsByAppAndExtendedPairResponse {
  vault: Vault[];
  pagination?: PageResponse;
}

export interface QueryVaultIdOfOwnerByExtendedPairAndAppRequest {
  appId: Long;
  owner: string;
  extendedPairId: Long;
  pagination?: PageRequest;
}

export interface QueryVaultIdOfOwnerByExtendedPairAndAppResponse {
  vaultId: string;
}

export interface QueryVaultIdsByAppInAllExtendedPairsRequest {
  appId: Long;
  pagination?: PageRequest;
}

export interface QueryVaultIdsByAppInAllExtendedPairsResponse {
  vaultIds: string[];
}

export interface QueryAllVaultIdsByAnOwnerRequest {
  owner: string;
  pagination?: PageRequest;
}

export interface QueryAllVaultIdsByAnOwnerResponse {
  vaultIds: string[];
}

export interface QueryTokenMintedByAppAndExtendedPairRequest {
  appId: Long;
  extendedPairId: Long;
  pagination?: PageRequest;
}

export interface QueryTokenMintedByAppAndExtendedPairResponse {
  tokenMinted: string;
}

export interface QueryTokenMintedAssetWiseByAppRequest {
  appId: Long;
  pagination?: PageRequest;
}

export interface QueryTokenMintedAssetWiseByAppResponse {
  mintedData: MintedDataMap[];
}

export interface QueryVaultCountByAppRequest {
  appId: Long;
  pagination?: PageRequest;
}

export interface QueryVaultCountByAppResponse {
  vaultCount: Long;
}

export interface QueryVaultCountByAppAndExtendedPairRequest {
  appId: Long;
  extendedPairId: Long;
  pagination?: PageRequest;
}

export interface QueryVaultCountByAppAndExtendedPairResponse {
  vaultCount: Long;
}

export interface QueryTotalValueLockedByAppAndExtendedPairRequest {
  appId: Long;
  extendedPairId: Long;
  pagination?: PageRequest;
}

export interface QueryTotalValueLockedByAppAndExtendedPairResponse {
  valueLocked: string;
}

export interface QueryExtendedPairIDsByAppRequest {
  appId: Long;
  pagination?: PageRequest;
}

export interface QueryExtendedPairIDsByAppResponse {
  extendedPairIds: Long[];
}

export interface QueryStableVaultByVaultIdRequest {
  stableVaultId: string;
}

export interface QueryStableVaultByVaultIdResponse {
  stableMintVault?: StableMintVault;
}

export interface QueryStableVaultByAppRequest {
  appId: Long;
}

export interface QueryStableVaultByAppResponse {
  stableMintVault: StableMintVault[];
}

export interface QueryStableVaultByAppAndExtendedPairRequest {
  appId: Long;
  extendedPairId: Long;
}

export interface QueryStableVaultByAppAndExtendedPairResponse {
  stableMintVault?: StableMintVault;
}

export interface QueryExtendedPairVaultMappingByAppAndExtendedPairRequest {
  appId: Long;
  extendedPairId: Long;
}

export interface QueryExtendedPairVaultMappingByAppAndExtendedPairResponse {
  extendedPairVaultMapping?: ExtendedPairVaultMapping;
}

export interface QueryExtendedPairVaultMappingByAppRequest {
  appId: Long;
}

export interface QueryExtendedPairVaultMappingByAppResponse {
  extendedPairVaultMapping: ExtendedPairVaultMapping[];
}

export interface QueryTVLByAppOfAllExtendedPairsRequest {
  appId: Long;
}

export interface QueryTVLByAppOfAllExtendedPairsResponse {
  tvldata: TvlLockedDataMap[];
}

export interface QueryTVLByAppRequest {
  appId: Long;
}

export interface QueryTVLByAppResponse {
  collateralLocked: string;
}

export interface QueryUserMyPositionByAppRequest {
  appId: Long;
  owner: string;
}

export interface QueryUserMyPositionByAppResponse {
  collateralLocked: string;
  totalDue: string;
  availableToBorrow: string;
  averageCrRatio: string;
}

export interface QueryUserExtendedPairTotalDataRequest {
  owner: string;
}

export interface QueryUserExtendedPairTotalDataResponse {
  userTotalData?: UserVaultAssetMapping;
}

export interface QueryPairsLockedAndMintedStatisticByAppRequest {
  appId: Long;
}

export interface QueryPairsLockedAndMintedStatisticByAppResponse {
  pairStatisticData: PairStatisticData[];
}

function createBaseVaultInfo(): VaultInfo {
  return {
    id: "",
    extendedPairId: Long.UZERO,
    owner: "",
    collateral: "",
    debt: "",
    collateralizationRatio: "",
    extendedPairName: "",
    interestRate: "",
    assetInDenom: "",
    assetOutDenom: "",
    minCr: "",
  };
}

export const VaultInfo = {
  encode(
    message: VaultInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (!message.extendedPairId.isZero()) {
      writer.uint32(16).uint64(message.extendedPairId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.collateral !== "") {
      writer.uint32(34).string(message.collateral);
    }
    if (message.debt !== "") {
      writer.uint32(42).string(message.debt);
    }
    if (message.collateralizationRatio !== "") {
      writer.uint32(50).string(message.collateralizationRatio);
    }
    if (message.extendedPairName !== "") {
      writer.uint32(58).string(message.extendedPairName);
    }
    if (message.interestRate !== "") {
      writer.uint32(66).string(message.interestRate);
    }
    if (message.assetInDenom !== "") {
      writer.uint32(74).string(message.assetInDenom);
    }
    if (message.assetOutDenom !== "") {
      writer.uint32(82).string(message.assetOutDenom);
    }
    if (message.minCr !== "") {
      writer.uint32(90).string(message.minCr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VaultInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVaultInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.extendedPairId = reader.uint64() as Long;
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.collateral = reader.string();
          break;
        case 5:
          message.debt = reader.string();
          break;
        case 6:
          message.collateralizationRatio = reader.string();
          break;
        case 7:
          message.extendedPairName = reader.string();
          break;
        case 8:
          message.interestRate = reader.string();
          break;
        case 9:
          message.assetInDenom = reader.string();
          break;
        case 10:
          message.assetOutDenom = reader.string();
          break;
        case 11:
          message.minCr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VaultInfo {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      extendedPairId: isSet(object.extendedPairId)
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      collateral: isSet(object.collateral) ? String(object.collateral) : "",
      debt: isSet(object.debt) ? String(object.debt) : "",
      collateralizationRatio: isSet(object.collateralizationRatio)
        ? String(object.collateralizationRatio)
        : "",
      extendedPairName: isSet(object.extendedPairName)
        ? String(object.extendedPairName)
        : "",
      interestRate: isSet(object.interestRate)
        ? String(object.interestRate)
        : "",
      assetInDenom: isSet(object.assetInDenom)
        ? String(object.assetInDenom)
        : "",
      assetOutDenom: isSet(object.assetOutDenom)
        ? String(object.assetOutDenom)
        : "",
      minCr: isSet(object.minCr) ? String(object.minCr) : "",
    };
  },

  toJSON(message: VaultInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.extendedPairId !== undefined &&
      (obj.extendedPairId = (message.extendedPairId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.collateral !== undefined && (obj.collateral = message.collateral);
    message.debt !== undefined && (obj.debt = message.debt);
    message.collateralizationRatio !== undefined &&
      (obj.collateralizationRatio = message.collateralizationRatio);
    message.extendedPairName !== undefined &&
      (obj.extendedPairName = message.extendedPairName);
    message.interestRate !== undefined &&
      (obj.interestRate = message.interestRate);
    message.assetInDenom !== undefined &&
      (obj.assetInDenom = message.assetInDenom);
    message.assetOutDenom !== undefined &&
      (obj.assetOutDenom = message.assetOutDenom);
    message.minCr !== undefined && (obj.minCr = message.minCr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VaultInfo>, I>>(
    object: I
  ): VaultInfo {
    const message = createBaseVaultInfo();
    message.id = object.id ?? "";
    message.extendedPairId =
      object.extendedPairId !== undefined && object.extendedPairId !== null
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO;
    message.owner = object.owner ?? "";
    message.collateral = object.collateral ?? "";
    message.debt = object.debt ?? "";
    message.collateralizationRatio = object.collateralizationRatio ?? "";
    message.extendedPairName = object.extendedPairName ?? "";
    message.interestRate = object.interestRate ?? "";
    message.assetInDenom = object.assetInDenom ?? "";
    message.assetOutDenom = object.assetOutDenom ?? "";
    message.minCr = object.minCr ?? "";
    return message;
  },
};

function createBaseQueryVaultRequest(): QueryVaultRequest {
  return { id: "" };
}

export const QueryVaultRequest = {
  encode(
    message: QueryVaultRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVaultRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: QueryVaultRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVaultRequest>, I>>(
    object: I
  ): QueryVaultRequest {
    const message = createBaseQueryVaultRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryVaultResponse(): QueryVaultResponse {
  return { vault: undefined };
}

export const QueryVaultResponse = {
  encode(
    message: QueryVaultResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vault !== undefined) {
      Vault.encode(message.vault, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vault = Vault.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVaultResponse {
    return {
      vault: isSet(object.vault) ? Vault.fromJSON(object.vault) : undefined,
    };
  },

  toJSON(message: QueryVaultResponse): unknown {
    const obj: any = {};
    message.vault !== undefined &&
      (obj.vault = message.vault ? Vault.toJSON(message.vault) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVaultResponse>, I>>(
    object: I
  ): QueryVaultResponse {
    const message = createBaseQueryVaultResponse();
    message.vault =
      object.vault !== undefined && object.vault !== null
        ? Vault.fromPartial(object.vault)
        : undefined;
    return message;
  },
};

function createBaseQueryVaultInfoByVaultIdRequest(): QueryVaultInfoByVaultIdRequest {
  return { id: "" };
}

export const QueryVaultInfoByVaultIdRequest = {
  encode(
    message: QueryVaultInfoByVaultIdRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVaultInfoByVaultIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultInfoByVaultIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVaultInfoByVaultIdRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: QueryVaultInfoByVaultIdRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVaultInfoByVaultIdRequest>, I>>(
    object: I
  ): QueryVaultInfoByVaultIdRequest {
    const message = createBaseQueryVaultInfoByVaultIdRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryVaultInfoByVaultIdResponse(): QueryVaultInfoByVaultIdResponse {
  return { vaultsInfo: undefined };
}

export const QueryVaultInfoByVaultIdResponse = {
  encode(
    message: QueryVaultInfoByVaultIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vaultsInfo !== undefined) {
      VaultInfo.encode(message.vaultsInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVaultInfoByVaultIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultInfoByVaultIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultsInfo = VaultInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVaultInfoByVaultIdResponse {
    return {
      vaultsInfo: isSet(object.vaultsInfo)
        ? VaultInfo.fromJSON(object.vaultsInfo)
        : undefined,
    };
  },

  toJSON(message: QueryVaultInfoByVaultIdResponse): unknown {
    const obj: any = {};
    message.vaultsInfo !== undefined &&
      (obj.vaultsInfo = message.vaultsInfo
        ? VaultInfo.toJSON(message.vaultsInfo)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVaultInfoByVaultIdResponse>, I>>(
    object: I
  ): QueryVaultInfoByVaultIdResponse {
    const message = createBaseQueryVaultInfoByVaultIdResponse();
    message.vaultsInfo =
      object.vaultsInfo !== undefined && object.vaultsInfo !== null
        ? VaultInfo.fromPartial(object.vaultsInfo)
        : undefined;
    return message;
  },
};

function createBaseQueryVaultInfoOfOwnerByAppRequest(): QueryVaultInfoOfOwnerByAppRequest {
  return { appId: Long.UZERO, owner: "" };
}

export const QueryVaultInfoOfOwnerByAppRequest = {
  encode(
    message: QueryVaultInfoOfOwnerByAppRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVaultInfoOfOwnerByAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultInfoOfOwnerByAppRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVaultInfoOfOwnerByAppRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: QueryVaultInfoOfOwnerByAppRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryVaultInfoOfOwnerByAppRequest>, I>
  >(object: I): QueryVaultInfoOfOwnerByAppRequest {
    const message = createBaseQueryVaultInfoOfOwnerByAppRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseQueryVaultInfoOfOwnerByAppResponse(): QueryVaultInfoOfOwnerByAppResponse {
  return { vaultsInfo: [], pagination: undefined };
}

export const QueryVaultInfoOfOwnerByAppResponse = {
  encode(
    message: QueryVaultInfoOfOwnerByAppResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.vaultsInfo) {
      VaultInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVaultInfoOfOwnerByAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultInfoOfOwnerByAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultsInfo.push(VaultInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVaultInfoOfOwnerByAppResponse {
    return {
      vaultsInfo: Array.isArray(object?.vaultsInfo)
        ? object.vaultsInfo.map((e: any) => VaultInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryVaultInfoOfOwnerByAppResponse): unknown {
    const obj: any = {};
    if (message.vaultsInfo) {
      obj.vaultsInfo = message.vaultsInfo.map((e) =>
        e ? VaultInfo.toJSON(e) : undefined
      );
    } else {
      obj.vaultsInfo = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryVaultInfoOfOwnerByAppResponse>, I>
  >(object: I): QueryVaultInfoOfOwnerByAppResponse {
    const message = createBaseQueryVaultInfoOfOwnerByAppResponse();
    message.vaultsInfo =
      object.vaultsInfo?.map((e) => VaultInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllVaultsRequest(): QueryAllVaultsRequest {
  return { pagination: undefined };
}

export const QueryAllVaultsRequest = {
  encode(
    message: QueryAllVaultsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllVaultsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVaultsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVaultsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllVaultsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllVaultsRequest>, I>>(
    object: I
  ): QueryAllVaultsRequest {
    const message = createBaseQueryAllVaultsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllVaultsResponse(): QueryAllVaultsResponse {
  return { vault: [], pagination: undefined };
}

export const QueryAllVaultsResponse = {
  encode(
    message: QueryAllVaultsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.vault) {
      Vault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllVaultsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVaultsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vault.push(Vault.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVaultsResponse {
    return {
      vault: Array.isArray(object?.vault)
        ? object.vault.map((e: any) => Vault.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllVaultsResponse): unknown {
    const obj: any = {};
    if (message.vault) {
      obj.vault = message.vault.map((e) => (e ? Vault.toJSON(e) : undefined));
    } else {
      obj.vault = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllVaultsResponse>, I>>(
    object: I
  ): QueryAllVaultsResponse {
    const message = createBaseQueryAllVaultsResponse();
    message.vault = object.vault?.map((e) => Vault.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllVaultsByAppRequest(): QueryAllVaultsByAppRequest {
  return { appId: Long.UZERO };
}

export const QueryAllVaultsByAppRequest = {
  encode(
    message: QueryAllVaultsByAppRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllVaultsByAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVaultsByAppRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVaultsByAppRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryAllVaultsByAppRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllVaultsByAppRequest>, I>>(
    object: I
  ): QueryAllVaultsByAppRequest {
    const message = createBaseQueryAllVaultsByAppRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryAllVaultsByAppResponse(): QueryAllVaultsByAppResponse {
  return { vault: [], pagination: undefined };
}

export const QueryAllVaultsByAppResponse = {
  encode(
    message: QueryAllVaultsByAppResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.vault) {
      Vault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllVaultsByAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVaultsByAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vault.push(Vault.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVaultsByAppResponse {
    return {
      vault: Array.isArray(object?.vault)
        ? object.vault.map((e: any) => Vault.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllVaultsByAppResponse): unknown {
    const obj: any = {};
    if (message.vault) {
      obj.vault = message.vault.map((e) => (e ? Vault.toJSON(e) : undefined));
    } else {
      obj.vault = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllVaultsByAppResponse>, I>>(
    object: I
  ): QueryAllVaultsByAppResponse {
    const message = createBaseQueryAllVaultsByAppResponse();
    message.vault = object.vault?.map((e) => Vault.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllVaultsByAppAndExtendedPairRequest(): QueryAllVaultsByAppAndExtendedPairRequest {
  return {
    appId: Long.UZERO,
    extendedPairId: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryAllVaultsByAppAndExtendedPairRequest = {
  encode(
    message: QueryAllVaultsByAppAndExtendedPairRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.extendedPairId.isZero()) {
      writer.uint32(16).uint64(message.extendedPairId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllVaultsByAppAndExtendedPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVaultsByAppAndExtendedPairRequest();
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVaultsByAppAndExtendedPairRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      extendedPairId: isSet(object.extendedPairId)
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllVaultsByAppAndExtendedPairRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.extendedPairId !== undefined &&
      (obj.extendedPairId = (message.extendedPairId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAllVaultsByAppAndExtendedPairRequest>, I>
  >(object: I): QueryAllVaultsByAppAndExtendedPairRequest {
    const message = createBaseQueryAllVaultsByAppAndExtendedPairRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.extendedPairId =
      object.extendedPairId !== undefined && object.extendedPairId !== null
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllVaultsByAppAndExtendedPairResponse(): QueryAllVaultsByAppAndExtendedPairResponse {
  return { vault: [], pagination: undefined };
}

export const QueryAllVaultsByAppAndExtendedPairResponse = {
  encode(
    message: QueryAllVaultsByAppAndExtendedPairResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.vault) {
      Vault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllVaultsByAppAndExtendedPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVaultsByAppAndExtendedPairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vault.push(Vault.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVaultsByAppAndExtendedPairResponse {
    return {
      vault: Array.isArray(object?.vault)
        ? object.vault.map((e: any) => Vault.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllVaultsByAppAndExtendedPairResponse): unknown {
    const obj: any = {};
    if (message.vault) {
      obj.vault = message.vault.map((e) => (e ? Vault.toJSON(e) : undefined));
    } else {
      obj.vault = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAllVaultsByAppAndExtendedPairResponse>, I>
  >(object: I): QueryAllVaultsByAppAndExtendedPairResponse {
    const message = createBaseQueryAllVaultsByAppAndExtendedPairResponse();
    message.vault = object.vault?.map((e) => Vault.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryVaultIdOfOwnerByExtendedPairAndAppRequest(): QueryVaultIdOfOwnerByExtendedPairAndAppRequest {
  return {
    appId: Long.UZERO,
    owner: "",
    extendedPairId: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryVaultIdOfOwnerByExtendedPairAndAppRequest = {
  encode(
    message: QueryVaultIdOfOwnerByExtendedPairAndAppRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (!message.extendedPairId.isZero()) {
      writer.uint32(24).uint64(message.extendedPairId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVaultIdOfOwnerByExtendedPairAndAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultIdOfOwnerByExtendedPairAndAppRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.extendedPairId = reader.uint64() as Long;
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVaultIdOfOwnerByExtendedPairAndAppRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      extendedPairId: isSet(object.extendedPairId)
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryVaultIdOfOwnerByExtendedPairAndAppRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.extendedPairId !== undefined &&
      (obj.extendedPairId = (message.extendedPairId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryVaultIdOfOwnerByExtendedPairAndAppRequest>,
      I
    >
  >(object: I): QueryVaultIdOfOwnerByExtendedPairAndAppRequest {
    const message = createBaseQueryVaultIdOfOwnerByExtendedPairAndAppRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.owner = object.owner ?? "";
    message.extendedPairId =
      object.extendedPairId !== undefined && object.extendedPairId !== null
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryVaultIdOfOwnerByExtendedPairAndAppResponse(): QueryVaultIdOfOwnerByExtendedPairAndAppResponse {
  return { vaultId: "" };
}

export const QueryVaultIdOfOwnerByExtendedPairAndAppResponse = {
  encode(
    message: QueryVaultIdOfOwnerByExtendedPairAndAppResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vaultId !== "") {
      writer.uint32(10).string(message.vaultId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVaultIdOfOwnerByExtendedPairAndAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultIdOfOwnerByExtendedPairAndAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVaultIdOfOwnerByExtendedPairAndAppResponse {
    return {
      vaultId: isSet(object.vaultId) ? String(object.vaultId) : "",
    };
  },

  toJSON(message: QueryVaultIdOfOwnerByExtendedPairAndAppResponse): unknown {
    const obj: any = {};
    message.vaultId !== undefined && (obj.vaultId = message.vaultId);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryVaultIdOfOwnerByExtendedPairAndAppResponse>,
      I
    >
  >(object: I): QueryVaultIdOfOwnerByExtendedPairAndAppResponse {
    const message = createBaseQueryVaultIdOfOwnerByExtendedPairAndAppResponse();
    message.vaultId = object.vaultId ?? "";
    return message;
  },
};

function createBaseQueryVaultIdsByAppInAllExtendedPairsRequest(): QueryVaultIdsByAppInAllExtendedPairsRequest {
  return { appId: Long.UZERO, pagination: undefined };
}

export const QueryVaultIdsByAppInAllExtendedPairsRequest = {
  encode(
    message: QueryVaultIdsByAppInAllExtendedPairsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVaultIdsByAppInAllExtendedPairsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultIdsByAppInAllExtendedPairsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVaultIdsByAppInAllExtendedPairsRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryVaultIdsByAppInAllExtendedPairsRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryVaultIdsByAppInAllExtendedPairsRequest>, I>
  >(object: I): QueryVaultIdsByAppInAllExtendedPairsRequest {
    const message = createBaseQueryVaultIdsByAppInAllExtendedPairsRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryVaultIdsByAppInAllExtendedPairsResponse(): QueryVaultIdsByAppInAllExtendedPairsResponse {
  return { vaultIds: [] };
}

export const QueryVaultIdsByAppInAllExtendedPairsResponse = {
  encode(
    message: QueryVaultIdsByAppInAllExtendedPairsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.vaultIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVaultIdsByAppInAllExtendedPairsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultIdsByAppInAllExtendedPairsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVaultIdsByAppInAllExtendedPairsResponse {
    return {
      vaultIds: Array.isArray(object?.vaultIds)
        ? object.vaultIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: QueryVaultIdsByAppInAllExtendedPairsResponse): unknown {
    const obj: any = {};
    if (message.vaultIds) {
      obj.vaultIds = message.vaultIds.map((e) => e);
    } else {
      obj.vaultIds = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryVaultIdsByAppInAllExtendedPairsResponse>,
      I
    >
  >(object: I): QueryVaultIdsByAppInAllExtendedPairsResponse {
    const message = createBaseQueryVaultIdsByAppInAllExtendedPairsResponse();
    message.vaultIds = object.vaultIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryAllVaultIdsByAnOwnerRequest(): QueryAllVaultIdsByAnOwnerRequest {
  return { owner: "", pagination: undefined };
}

export const QueryAllVaultIdsByAnOwnerRequest = {
  encode(
    message: QueryAllVaultIdsByAnOwnerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllVaultIdsByAnOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVaultIdsByAnOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVaultIdsByAnOwnerRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllVaultIdsByAnOwnerRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAllVaultIdsByAnOwnerRequest>, I>
  >(object: I): QueryAllVaultIdsByAnOwnerRequest {
    const message = createBaseQueryAllVaultIdsByAnOwnerRequest();
    message.owner = object.owner ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllVaultIdsByAnOwnerResponse(): QueryAllVaultIdsByAnOwnerResponse {
  return { vaultIds: [] };
}

export const QueryAllVaultIdsByAnOwnerResponse = {
  encode(
    message: QueryAllVaultIdsByAnOwnerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.vaultIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllVaultIdsByAnOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVaultIdsByAnOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVaultIdsByAnOwnerResponse {
    return {
      vaultIds: Array.isArray(object?.vaultIds)
        ? object.vaultIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: QueryAllVaultIdsByAnOwnerResponse): unknown {
    const obj: any = {};
    if (message.vaultIds) {
      obj.vaultIds = message.vaultIds.map((e) => e);
    } else {
      obj.vaultIds = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAllVaultIdsByAnOwnerResponse>, I>
  >(object: I): QueryAllVaultIdsByAnOwnerResponse {
    const message = createBaseQueryAllVaultIdsByAnOwnerResponse();
    message.vaultIds = object.vaultIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryTokenMintedByAppAndExtendedPairRequest(): QueryTokenMintedByAppAndExtendedPairRequest {
  return {
    appId: Long.UZERO,
    extendedPairId: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryTokenMintedByAppAndExtendedPairRequest = {
  encode(
    message: QueryTokenMintedByAppAndExtendedPairRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.extendedPairId.isZero()) {
      writer.uint32(16).uint64(message.extendedPairId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenMintedByAppAndExtendedPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenMintedByAppAndExtendedPairRequest();
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenMintedByAppAndExtendedPairRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      extendedPairId: isSet(object.extendedPairId)
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTokenMintedByAppAndExtendedPairRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.extendedPairId !== undefined &&
      (obj.extendedPairId = (message.extendedPairId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryTokenMintedByAppAndExtendedPairRequest>, I>
  >(object: I): QueryTokenMintedByAppAndExtendedPairRequest {
    const message = createBaseQueryTokenMintedByAppAndExtendedPairRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.extendedPairId =
      object.extendedPairId !== undefined && object.extendedPairId !== null
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryTokenMintedByAppAndExtendedPairResponse(): QueryTokenMintedByAppAndExtendedPairResponse {
  return { tokenMinted: "" };
}

export const QueryTokenMintedByAppAndExtendedPairResponse = {
  encode(
    message: QueryTokenMintedByAppAndExtendedPairResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenMinted !== "") {
      writer.uint32(10).string(message.tokenMinted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenMintedByAppAndExtendedPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenMintedByAppAndExtendedPairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenMinted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenMintedByAppAndExtendedPairResponse {
    return {
      tokenMinted: isSet(object.tokenMinted) ? String(object.tokenMinted) : "",
    };
  },

  toJSON(message: QueryTokenMintedByAppAndExtendedPairResponse): unknown {
    const obj: any = {};
    message.tokenMinted !== undefined &&
      (obj.tokenMinted = message.tokenMinted);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryTokenMintedByAppAndExtendedPairResponse>,
      I
    >
  >(object: I): QueryTokenMintedByAppAndExtendedPairResponse {
    const message = createBaseQueryTokenMintedByAppAndExtendedPairResponse();
    message.tokenMinted = object.tokenMinted ?? "";
    return message;
  },
};

function createBaseQueryTokenMintedAssetWiseByAppRequest(): QueryTokenMintedAssetWiseByAppRequest {
  return { appId: Long.UZERO, pagination: undefined };
}

export const QueryTokenMintedAssetWiseByAppRequest = {
  encode(
    message: QueryTokenMintedAssetWiseByAppRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenMintedAssetWiseByAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenMintedAssetWiseByAppRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenMintedAssetWiseByAppRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTokenMintedAssetWiseByAppRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryTokenMintedAssetWiseByAppRequest>, I>
  >(object: I): QueryTokenMintedAssetWiseByAppRequest {
    const message = createBaseQueryTokenMintedAssetWiseByAppRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryTokenMintedAssetWiseByAppResponse(): QueryTokenMintedAssetWiseByAppResponse {
  return { mintedData: [] };
}

export const QueryTokenMintedAssetWiseByAppResponse = {
  encode(
    message: QueryTokenMintedAssetWiseByAppResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.mintedData) {
      MintedDataMap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenMintedAssetWiseByAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenMintedAssetWiseByAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintedData.push(
            MintedDataMap.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenMintedAssetWiseByAppResponse {
    return {
      mintedData: Array.isArray(object?.mintedData)
        ? object.mintedData.map((e: any) => MintedDataMap.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryTokenMintedAssetWiseByAppResponse): unknown {
    const obj: any = {};
    if (message.mintedData) {
      obj.mintedData = message.mintedData.map((e) =>
        e ? MintedDataMap.toJSON(e) : undefined
      );
    } else {
      obj.mintedData = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryTokenMintedAssetWiseByAppResponse>, I>
  >(object: I): QueryTokenMintedAssetWiseByAppResponse {
    const message = createBaseQueryTokenMintedAssetWiseByAppResponse();
    message.mintedData =
      object.mintedData?.map((e) => MintedDataMap.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryVaultCountByAppRequest(): QueryVaultCountByAppRequest {
  return { appId: Long.UZERO, pagination: undefined };
}

export const QueryVaultCountByAppRequest = {
  encode(
    message: QueryVaultCountByAppRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVaultCountByAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultCountByAppRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVaultCountByAppRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryVaultCountByAppRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVaultCountByAppRequest>, I>>(
    object: I
  ): QueryVaultCountByAppRequest {
    const message = createBaseQueryVaultCountByAppRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryVaultCountByAppResponse(): QueryVaultCountByAppResponse {
  return { vaultCount: Long.UZERO };
}

export const QueryVaultCountByAppResponse = {
  encode(
    message: QueryVaultCountByAppResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.vaultCount.isZero()) {
      writer.uint32(8).uint64(message.vaultCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVaultCountByAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultCountByAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultCount = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVaultCountByAppResponse {
    return {
      vaultCount: isSet(object.vaultCount)
        ? Long.fromValue(object.vaultCount)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryVaultCountByAppResponse): unknown {
    const obj: any = {};
    message.vaultCount !== undefined &&
      (obj.vaultCount = (message.vaultCount || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVaultCountByAppResponse>, I>>(
    object: I
  ): QueryVaultCountByAppResponse {
    const message = createBaseQueryVaultCountByAppResponse();
    message.vaultCount =
      object.vaultCount !== undefined && object.vaultCount !== null
        ? Long.fromValue(object.vaultCount)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryVaultCountByAppAndExtendedPairRequest(): QueryVaultCountByAppAndExtendedPairRequest {
  return {
    appId: Long.UZERO,
    extendedPairId: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryVaultCountByAppAndExtendedPairRequest = {
  encode(
    message: QueryVaultCountByAppAndExtendedPairRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.extendedPairId.isZero()) {
      writer.uint32(16).uint64(message.extendedPairId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVaultCountByAppAndExtendedPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultCountByAppAndExtendedPairRequest();
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVaultCountByAppAndExtendedPairRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      extendedPairId: isSet(object.extendedPairId)
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryVaultCountByAppAndExtendedPairRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.extendedPairId !== undefined &&
      (obj.extendedPairId = (message.extendedPairId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryVaultCountByAppAndExtendedPairRequest>, I>
  >(object: I): QueryVaultCountByAppAndExtendedPairRequest {
    const message = createBaseQueryVaultCountByAppAndExtendedPairRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.extendedPairId =
      object.extendedPairId !== undefined && object.extendedPairId !== null
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryVaultCountByAppAndExtendedPairResponse(): QueryVaultCountByAppAndExtendedPairResponse {
  return { vaultCount: Long.UZERO };
}

export const QueryVaultCountByAppAndExtendedPairResponse = {
  encode(
    message: QueryVaultCountByAppAndExtendedPairResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.vaultCount.isZero()) {
      writer.uint32(8).uint64(message.vaultCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVaultCountByAppAndExtendedPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultCountByAppAndExtendedPairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultCount = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVaultCountByAppAndExtendedPairResponse {
    return {
      vaultCount: isSet(object.vaultCount)
        ? Long.fromValue(object.vaultCount)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryVaultCountByAppAndExtendedPairResponse): unknown {
    const obj: any = {};
    message.vaultCount !== undefined &&
      (obj.vaultCount = (message.vaultCount || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryVaultCountByAppAndExtendedPairResponse>, I>
  >(object: I): QueryVaultCountByAppAndExtendedPairResponse {
    const message = createBaseQueryVaultCountByAppAndExtendedPairResponse();
    message.vaultCount =
      object.vaultCount !== undefined && object.vaultCount !== null
        ? Long.fromValue(object.vaultCount)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryTotalValueLockedByAppAndExtendedPairRequest(): QueryTotalValueLockedByAppAndExtendedPairRequest {
  return {
    appId: Long.UZERO,
    extendedPairId: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryTotalValueLockedByAppAndExtendedPairRequest = {
  encode(
    message: QueryTotalValueLockedByAppAndExtendedPairRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.extendedPairId.isZero()) {
      writer.uint32(16).uint64(message.extendedPairId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalValueLockedByAppAndExtendedPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseQueryTotalValueLockedByAppAndExtendedPairRequest();
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalValueLockedByAppAndExtendedPairRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      extendedPairId: isSet(object.extendedPairId)
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTotalValueLockedByAppAndExtendedPairRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.extendedPairId !== undefined &&
      (obj.extendedPairId = (message.extendedPairId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryTotalValueLockedByAppAndExtendedPairRequest>,
      I
    >
  >(object: I): QueryTotalValueLockedByAppAndExtendedPairRequest {
    const message =
      createBaseQueryTotalValueLockedByAppAndExtendedPairRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.extendedPairId =
      object.extendedPairId !== undefined && object.extendedPairId !== null
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryTotalValueLockedByAppAndExtendedPairResponse(): QueryTotalValueLockedByAppAndExtendedPairResponse {
  return { valueLocked: "" };
}

export const QueryTotalValueLockedByAppAndExtendedPairResponse = {
  encode(
    message: QueryTotalValueLockedByAppAndExtendedPairResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.valueLocked !== "") {
      writer.uint32(10).string(message.valueLocked);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalValueLockedByAppAndExtendedPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseQueryTotalValueLockedByAppAndExtendedPairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valueLocked = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalValueLockedByAppAndExtendedPairResponse {
    return {
      valueLocked: isSet(object.valueLocked) ? String(object.valueLocked) : "",
    };
  },

  toJSON(message: QueryTotalValueLockedByAppAndExtendedPairResponse): unknown {
    const obj: any = {};
    message.valueLocked !== undefined &&
      (obj.valueLocked = message.valueLocked);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryTotalValueLockedByAppAndExtendedPairResponse>,
      I
    >
  >(object: I): QueryTotalValueLockedByAppAndExtendedPairResponse {
    const message =
      createBaseQueryTotalValueLockedByAppAndExtendedPairResponse();
    message.valueLocked = object.valueLocked ?? "";
    return message;
  },
};

function createBaseQueryExtendedPairIDsByAppRequest(): QueryExtendedPairIDsByAppRequest {
  return { appId: Long.UZERO, pagination: undefined };
}

export const QueryExtendedPairIDsByAppRequest = {
  encode(
    message: QueryExtendedPairIDsByAppRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryExtendedPairIDsByAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExtendedPairIDsByAppRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryExtendedPairIDsByAppRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryExtendedPairIDsByAppRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryExtendedPairIDsByAppRequest>, I>
  >(object: I): QueryExtendedPairIDsByAppRequest {
    const message = createBaseQueryExtendedPairIDsByAppRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryExtendedPairIDsByAppResponse(): QueryExtendedPairIDsByAppResponse {
  return { extendedPairIds: [] };
}

export const QueryExtendedPairIDsByAppResponse = {
  encode(
    message: QueryExtendedPairIDsByAppResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.extendedPairIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryExtendedPairIDsByAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExtendedPairIDsByAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.extendedPairIds.push(reader.uint64() as Long);
            }
          } else {
            message.extendedPairIds.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryExtendedPairIDsByAppResponse {
    return {
      extendedPairIds: Array.isArray(object?.extendedPairIds)
        ? object.extendedPairIds.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: QueryExtendedPairIDsByAppResponse): unknown {
    const obj: any = {};
    if (message.extendedPairIds) {
      obj.extendedPairIds = message.extendedPairIds.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.extendedPairIds = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryExtendedPairIDsByAppResponse>, I>
  >(object: I): QueryExtendedPairIDsByAppResponse {
    const message = createBaseQueryExtendedPairIDsByAppResponse();
    message.extendedPairIds =
      object.extendedPairIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseQueryStableVaultByVaultIdRequest(): QueryStableVaultByVaultIdRequest {
  return { stableVaultId: "" };
}

export const QueryStableVaultByVaultIdRequest = {
  encode(
    message: QueryStableVaultByVaultIdRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stableVaultId !== "") {
      writer.uint32(10).string(message.stableVaultId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStableVaultByVaultIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStableVaultByVaultIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stableVaultId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStableVaultByVaultIdRequest {
    return {
      stableVaultId: isSet(object.stableVaultId)
        ? String(object.stableVaultId)
        : "",
    };
  },

  toJSON(message: QueryStableVaultByVaultIdRequest): unknown {
    const obj: any = {};
    message.stableVaultId !== undefined &&
      (obj.stableVaultId = message.stableVaultId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryStableVaultByVaultIdRequest>, I>
  >(object: I): QueryStableVaultByVaultIdRequest {
    const message = createBaseQueryStableVaultByVaultIdRequest();
    message.stableVaultId = object.stableVaultId ?? "";
    return message;
  },
};

function createBaseQueryStableVaultByVaultIdResponse(): QueryStableVaultByVaultIdResponse {
  return { stableMintVault: undefined };
}

export const QueryStableVaultByVaultIdResponse = {
  encode(
    message: QueryStableVaultByVaultIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stableMintVault !== undefined) {
      StableMintVault.encode(
        message.stableMintVault,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStableVaultByVaultIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStableVaultByVaultIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stableMintVault = StableMintVault.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStableVaultByVaultIdResponse {
    return {
      stableMintVault: isSet(object.stableMintVault)
        ? StableMintVault.fromJSON(object.stableMintVault)
        : undefined,
    };
  },

  toJSON(message: QueryStableVaultByVaultIdResponse): unknown {
    const obj: any = {};
    message.stableMintVault !== undefined &&
      (obj.stableMintVault = message.stableMintVault
        ? StableMintVault.toJSON(message.stableMintVault)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryStableVaultByVaultIdResponse>, I>
  >(object: I): QueryStableVaultByVaultIdResponse {
    const message = createBaseQueryStableVaultByVaultIdResponse();
    message.stableMintVault =
      object.stableMintVault !== undefined && object.stableMintVault !== null
        ? StableMintVault.fromPartial(object.stableMintVault)
        : undefined;
    return message;
  },
};

function createBaseQueryStableVaultByAppRequest(): QueryStableVaultByAppRequest {
  return { appId: Long.UZERO };
}

export const QueryStableVaultByAppRequest = {
  encode(
    message: QueryStableVaultByAppRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStableVaultByAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStableVaultByAppRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStableVaultByAppRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryStableVaultByAppRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStableVaultByAppRequest>, I>>(
    object: I
  ): QueryStableVaultByAppRequest {
    const message = createBaseQueryStableVaultByAppRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryStableVaultByAppResponse(): QueryStableVaultByAppResponse {
  return { stableMintVault: [] };
}

export const QueryStableVaultByAppResponse = {
  encode(
    message: QueryStableVaultByAppResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.stableMintVault) {
      StableMintVault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStableVaultByAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStableVaultByAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stableMintVault.push(
            StableMintVault.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStableVaultByAppResponse {
    return {
      stableMintVault: Array.isArray(object?.stableMintVault)
        ? object.stableMintVault.map((e: any) => StableMintVault.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryStableVaultByAppResponse): unknown {
    const obj: any = {};
    if (message.stableMintVault) {
      obj.stableMintVault = message.stableMintVault.map((e) =>
        e ? StableMintVault.toJSON(e) : undefined
      );
    } else {
      obj.stableMintVault = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStableVaultByAppResponse>, I>>(
    object: I
  ): QueryStableVaultByAppResponse {
    const message = createBaseQueryStableVaultByAppResponse();
    message.stableMintVault =
      object.stableMintVault?.map((e) => StableMintVault.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryStableVaultByAppAndExtendedPairRequest(): QueryStableVaultByAppAndExtendedPairRequest {
  return { appId: Long.UZERO, extendedPairId: Long.UZERO };
}

export const QueryStableVaultByAppAndExtendedPairRequest = {
  encode(
    message: QueryStableVaultByAppAndExtendedPairRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.extendedPairId.isZero()) {
      writer.uint32(16).uint64(message.extendedPairId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStableVaultByAppAndExtendedPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStableVaultByAppAndExtendedPairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.extendedPairId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStableVaultByAppAndExtendedPairRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      extendedPairId: isSet(object.extendedPairId)
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryStableVaultByAppAndExtendedPairRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.extendedPairId !== undefined &&
      (obj.extendedPairId = (message.extendedPairId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryStableVaultByAppAndExtendedPairRequest>, I>
  >(object: I): QueryStableVaultByAppAndExtendedPairRequest {
    const message = createBaseQueryStableVaultByAppAndExtendedPairRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.extendedPairId =
      object.extendedPairId !== undefined && object.extendedPairId !== null
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryStableVaultByAppAndExtendedPairResponse(): QueryStableVaultByAppAndExtendedPairResponse {
  return { stableMintVault: undefined };
}

export const QueryStableVaultByAppAndExtendedPairResponse = {
  encode(
    message: QueryStableVaultByAppAndExtendedPairResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stableMintVault !== undefined) {
      StableMintVault.encode(
        message.stableMintVault,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStableVaultByAppAndExtendedPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStableVaultByAppAndExtendedPairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stableMintVault = StableMintVault.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStableVaultByAppAndExtendedPairResponse {
    return {
      stableMintVault: isSet(object.stableMintVault)
        ? StableMintVault.fromJSON(object.stableMintVault)
        : undefined,
    };
  },

  toJSON(message: QueryStableVaultByAppAndExtendedPairResponse): unknown {
    const obj: any = {};
    message.stableMintVault !== undefined &&
      (obj.stableMintVault = message.stableMintVault
        ? StableMintVault.toJSON(message.stableMintVault)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryStableVaultByAppAndExtendedPairResponse>,
      I
    >
  >(object: I): QueryStableVaultByAppAndExtendedPairResponse {
    const message = createBaseQueryStableVaultByAppAndExtendedPairResponse();
    message.stableMintVault =
      object.stableMintVault !== undefined && object.stableMintVault !== null
        ? StableMintVault.fromPartial(object.stableMintVault)
        : undefined;
    return message;
  },
};

function createBaseQueryExtendedPairVaultMappingByAppAndExtendedPairRequest(): QueryExtendedPairVaultMappingByAppAndExtendedPairRequest {
  return { appId: Long.UZERO, extendedPairId: Long.UZERO };
}

export const QueryExtendedPairVaultMappingByAppAndExtendedPairRequest = {
  encode(
    message: QueryExtendedPairVaultMappingByAppAndExtendedPairRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.extendedPairId.isZero()) {
      writer.uint32(16).uint64(message.extendedPairId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryExtendedPairVaultMappingByAppAndExtendedPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseQueryExtendedPairVaultMappingByAppAndExtendedPairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.extendedPairId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(
    object: any
  ): QueryExtendedPairVaultMappingByAppAndExtendedPairRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      extendedPairId: isSet(object.extendedPairId)
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO,
    };
  },

  toJSON(
    message: QueryExtendedPairVaultMappingByAppAndExtendedPairRequest
  ): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.extendedPairId !== undefined &&
      (obj.extendedPairId = (message.extendedPairId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryExtendedPairVaultMappingByAppAndExtendedPairRequest>,
      I
    >
  >(object: I): QueryExtendedPairVaultMappingByAppAndExtendedPairRequest {
    const message =
      createBaseQueryExtendedPairVaultMappingByAppAndExtendedPairRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.extendedPairId =
      object.extendedPairId !== undefined && object.extendedPairId !== null
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryExtendedPairVaultMappingByAppAndExtendedPairResponse(): QueryExtendedPairVaultMappingByAppAndExtendedPairResponse {
  return { extendedPairVaultMapping: undefined };
}

export const QueryExtendedPairVaultMappingByAppAndExtendedPairResponse = {
  encode(
    message: QueryExtendedPairVaultMappingByAppAndExtendedPairResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.extendedPairVaultMapping !== undefined) {
      ExtendedPairVaultMapping.encode(
        message.extendedPairVaultMapping,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryExtendedPairVaultMappingByAppAndExtendedPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseQueryExtendedPairVaultMappingByAppAndExtendedPairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extendedPairVaultMapping = ExtendedPairVaultMapping.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(
    object: any
  ): QueryExtendedPairVaultMappingByAppAndExtendedPairResponse {
    return {
      extendedPairVaultMapping: isSet(object.extendedPairVaultMapping)
        ? ExtendedPairVaultMapping.fromJSON(object.extendedPairVaultMapping)
        : undefined,
    };
  },

  toJSON(
    message: QueryExtendedPairVaultMappingByAppAndExtendedPairResponse
  ): unknown {
    const obj: any = {};
    message.extendedPairVaultMapping !== undefined &&
      (obj.extendedPairVaultMapping = message.extendedPairVaultMapping
        ? ExtendedPairVaultMapping.toJSON(message.extendedPairVaultMapping)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryExtendedPairVaultMappingByAppAndExtendedPairResponse>,
      I
    >
  >(object: I): QueryExtendedPairVaultMappingByAppAndExtendedPairResponse {
    const message =
      createBaseQueryExtendedPairVaultMappingByAppAndExtendedPairResponse();
    message.extendedPairVaultMapping =
      object.extendedPairVaultMapping !== undefined &&
      object.extendedPairVaultMapping !== null
        ? ExtendedPairVaultMapping.fromPartial(object.extendedPairVaultMapping)
        : undefined;
    return message;
  },
};

function createBaseQueryExtendedPairVaultMappingByAppRequest(): QueryExtendedPairVaultMappingByAppRequest {
  return { appId: Long.UZERO };
}

export const QueryExtendedPairVaultMappingByAppRequest = {
  encode(
    message: QueryExtendedPairVaultMappingByAppRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryExtendedPairVaultMappingByAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExtendedPairVaultMappingByAppRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryExtendedPairVaultMappingByAppRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryExtendedPairVaultMappingByAppRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryExtendedPairVaultMappingByAppRequest>, I>
  >(object: I): QueryExtendedPairVaultMappingByAppRequest {
    const message = createBaseQueryExtendedPairVaultMappingByAppRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryExtendedPairVaultMappingByAppResponse(): QueryExtendedPairVaultMappingByAppResponse {
  return { extendedPairVaultMapping: [] };
}

export const QueryExtendedPairVaultMappingByAppResponse = {
  encode(
    message: QueryExtendedPairVaultMappingByAppResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.extendedPairVaultMapping) {
      ExtendedPairVaultMapping.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryExtendedPairVaultMappingByAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExtendedPairVaultMappingByAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extendedPairVaultMapping.push(
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

  fromJSON(object: any): QueryExtendedPairVaultMappingByAppResponse {
    return {
      extendedPairVaultMapping: Array.isArray(object?.extendedPairVaultMapping)
        ? object.extendedPairVaultMapping.map((e: any) =>
            ExtendedPairVaultMapping.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: QueryExtendedPairVaultMappingByAppResponse): unknown {
    const obj: any = {};
    if (message.extendedPairVaultMapping) {
      obj.extendedPairVaultMapping = message.extendedPairVaultMapping.map((e) =>
        e ? ExtendedPairVaultMapping.toJSON(e) : undefined
      );
    } else {
      obj.extendedPairVaultMapping = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryExtendedPairVaultMappingByAppResponse>, I>
  >(object: I): QueryExtendedPairVaultMappingByAppResponse {
    const message = createBaseQueryExtendedPairVaultMappingByAppResponse();
    message.extendedPairVaultMapping =
      object.extendedPairVaultMapping?.map((e) =>
        ExtendedPairVaultMapping.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseQueryTVLByAppOfAllExtendedPairsRequest(): QueryTVLByAppOfAllExtendedPairsRequest {
  return { appId: Long.UZERO };
}

export const QueryTVLByAppOfAllExtendedPairsRequest = {
  encode(
    message: QueryTVLByAppOfAllExtendedPairsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTVLByAppOfAllExtendedPairsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTVLByAppOfAllExtendedPairsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTVLByAppOfAllExtendedPairsRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryTVLByAppOfAllExtendedPairsRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryTVLByAppOfAllExtendedPairsRequest>, I>
  >(object: I): QueryTVLByAppOfAllExtendedPairsRequest {
    const message = createBaseQueryTVLByAppOfAllExtendedPairsRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryTVLByAppOfAllExtendedPairsResponse(): QueryTVLByAppOfAllExtendedPairsResponse {
  return { tvldata: [] };
}

export const QueryTVLByAppOfAllExtendedPairsResponse = {
  encode(
    message: QueryTVLByAppOfAllExtendedPairsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tvldata) {
      TvlLockedDataMap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTVLByAppOfAllExtendedPairsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTVLByAppOfAllExtendedPairsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tvldata.push(
            TvlLockedDataMap.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTVLByAppOfAllExtendedPairsResponse {
    return {
      tvldata: Array.isArray(object?.tvldata)
        ? object.tvldata.map((e: any) => TvlLockedDataMap.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryTVLByAppOfAllExtendedPairsResponse): unknown {
    const obj: any = {};
    if (message.tvldata) {
      obj.tvldata = message.tvldata.map((e) =>
        e ? TvlLockedDataMap.toJSON(e) : undefined
      );
    } else {
      obj.tvldata = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryTVLByAppOfAllExtendedPairsResponse>, I>
  >(object: I): QueryTVLByAppOfAllExtendedPairsResponse {
    const message = createBaseQueryTVLByAppOfAllExtendedPairsResponse();
    message.tvldata =
      object.tvldata?.map((e) => TvlLockedDataMap.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryTVLByAppRequest(): QueryTVLByAppRequest {
  return { appId: Long.UZERO };
}

export const QueryTVLByAppRequest = {
  encode(
    message: QueryTVLByAppRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTVLByAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTVLByAppRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTVLByAppRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryTVLByAppRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTVLByAppRequest>, I>>(
    object: I
  ): QueryTVLByAppRequest {
    const message = createBaseQueryTVLByAppRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryTVLByAppResponse(): QueryTVLByAppResponse {
  return { collateralLocked: "" };
}

export const QueryTVLByAppResponse = {
  encode(
    message: QueryTVLByAppResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collateralLocked !== "") {
      writer.uint32(10).string(message.collateralLocked);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTVLByAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTVLByAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralLocked = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTVLByAppResponse {
    return {
      collateralLocked: isSet(object.collateralLocked)
        ? String(object.collateralLocked)
        : "",
    };
  },

  toJSON(message: QueryTVLByAppResponse): unknown {
    const obj: any = {};
    message.collateralLocked !== undefined &&
      (obj.collateralLocked = message.collateralLocked);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTVLByAppResponse>, I>>(
    object: I
  ): QueryTVLByAppResponse {
    const message = createBaseQueryTVLByAppResponse();
    message.collateralLocked = object.collateralLocked ?? "";
    return message;
  },
};

function createBaseQueryUserMyPositionByAppRequest(): QueryUserMyPositionByAppRequest {
  return { appId: Long.UZERO, owner: "" };
}

export const QueryUserMyPositionByAppRequest = {
  encode(
    message: QueryUserMyPositionByAppRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserMyPositionByAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserMyPositionByAppRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserMyPositionByAppRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: QueryUserMyPositionByAppRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUserMyPositionByAppRequest>, I>>(
    object: I
  ): QueryUserMyPositionByAppRequest {
    const message = createBaseQueryUserMyPositionByAppRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseQueryUserMyPositionByAppResponse(): QueryUserMyPositionByAppResponse {
  return {
    collateralLocked: "",
    totalDue: "",
    availableToBorrow: "",
    averageCrRatio: "",
  };
}

export const QueryUserMyPositionByAppResponse = {
  encode(
    message: QueryUserMyPositionByAppResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collateralLocked !== "") {
      writer.uint32(10).string(message.collateralLocked);
    }
    if (message.totalDue !== "") {
      writer.uint32(18).string(message.totalDue);
    }
    if (message.availableToBorrow !== "") {
      writer.uint32(26).string(message.availableToBorrow);
    }
    if (message.averageCrRatio !== "") {
      writer.uint32(34).string(message.averageCrRatio);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserMyPositionByAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserMyPositionByAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralLocked = reader.string();
          break;
        case 2:
          message.totalDue = reader.string();
          break;
        case 3:
          message.availableToBorrow = reader.string();
          break;
        case 4:
          message.averageCrRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserMyPositionByAppResponse {
    return {
      collateralLocked: isSet(object.collateralLocked)
        ? String(object.collateralLocked)
        : "",
      totalDue: isSet(object.totalDue) ? String(object.totalDue) : "",
      availableToBorrow: isSet(object.availableToBorrow)
        ? String(object.availableToBorrow)
        : "",
      averageCrRatio: isSet(object.averageCrRatio)
        ? String(object.averageCrRatio)
        : "",
    };
  },

  toJSON(message: QueryUserMyPositionByAppResponse): unknown {
    const obj: any = {};
    message.collateralLocked !== undefined &&
      (obj.collateralLocked = message.collateralLocked);
    message.totalDue !== undefined && (obj.totalDue = message.totalDue);
    message.availableToBorrow !== undefined &&
      (obj.availableToBorrow = message.availableToBorrow);
    message.averageCrRatio !== undefined &&
      (obj.averageCrRatio = message.averageCrRatio);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryUserMyPositionByAppResponse>, I>
  >(object: I): QueryUserMyPositionByAppResponse {
    const message = createBaseQueryUserMyPositionByAppResponse();
    message.collateralLocked = object.collateralLocked ?? "";
    message.totalDue = object.totalDue ?? "";
    message.availableToBorrow = object.availableToBorrow ?? "";
    message.averageCrRatio = object.averageCrRatio ?? "";
    return message;
  },
};

function createBaseQueryUserExtendedPairTotalDataRequest(): QueryUserExtendedPairTotalDataRequest {
  return { owner: "" };
}

export const QueryUserExtendedPairTotalDataRequest = {
  encode(
    message: QueryUserExtendedPairTotalDataRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserExtendedPairTotalDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserExtendedPairTotalDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserExtendedPairTotalDataRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: QueryUserExtendedPairTotalDataRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryUserExtendedPairTotalDataRequest>, I>
  >(object: I): QueryUserExtendedPairTotalDataRequest {
    const message = createBaseQueryUserExtendedPairTotalDataRequest();
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseQueryUserExtendedPairTotalDataResponse(): QueryUserExtendedPairTotalDataResponse {
  return { userTotalData: undefined };
}

export const QueryUserExtendedPairTotalDataResponse = {
  encode(
    message: QueryUserExtendedPairTotalDataResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userTotalData !== undefined) {
      UserVaultAssetMapping.encode(
        message.userTotalData,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserExtendedPairTotalDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserExtendedPairTotalDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userTotalData = UserVaultAssetMapping.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserExtendedPairTotalDataResponse {
    return {
      userTotalData: isSet(object.userTotalData)
        ? UserVaultAssetMapping.fromJSON(object.userTotalData)
        : undefined,
    };
  },

  toJSON(message: QueryUserExtendedPairTotalDataResponse): unknown {
    const obj: any = {};
    message.userTotalData !== undefined &&
      (obj.userTotalData = message.userTotalData
        ? UserVaultAssetMapping.toJSON(message.userTotalData)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryUserExtendedPairTotalDataResponse>, I>
  >(object: I): QueryUserExtendedPairTotalDataResponse {
    const message = createBaseQueryUserExtendedPairTotalDataResponse();
    message.userTotalData =
      object.userTotalData !== undefined && object.userTotalData !== null
        ? UserVaultAssetMapping.fromPartial(object.userTotalData)
        : undefined;
    return message;
  },
};

function createBaseQueryPairsLockedAndMintedStatisticByAppRequest(): QueryPairsLockedAndMintedStatisticByAppRequest {
  return { appId: Long.UZERO };
}

export const QueryPairsLockedAndMintedStatisticByAppRequest = {
  encode(
    message: QueryPairsLockedAndMintedStatisticByAppRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPairsLockedAndMintedStatisticByAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairsLockedAndMintedStatisticByAppRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPairsLockedAndMintedStatisticByAppRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryPairsLockedAndMintedStatisticByAppRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryPairsLockedAndMintedStatisticByAppRequest>,
      I
    >
  >(object: I): QueryPairsLockedAndMintedStatisticByAppRequest {
    const message = createBaseQueryPairsLockedAndMintedStatisticByAppRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryPairsLockedAndMintedStatisticByAppResponse(): QueryPairsLockedAndMintedStatisticByAppResponse {
  return { pairStatisticData: [] };
}

export const QueryPairsLockedAndMintedStatisticByAppResponse = {
  encode(
    message: QueryPairsLockedAndMintedStatisticByAppResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pairStatisticData) {
      PairStatisticData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPairsLockedAndMintedStatisticByAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairsLockedAndMintedStatisticByAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairStatisticData.push(
            PairStatisticData.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPairsLockedAndMintedStatisticByAppResponse {
    return {
      pairStatisticData: Array.isArray(object?.pairStatisticData)
        ? object.pairStatisticData.map((e: any) =>
            PairStatisticData.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: QueryPairsLockedAndMintedStatisticByAppResponse): unknown {
    const obj: any = {};
    if (message.pairStatisticData) {
      obj.pairStatisticData = message.pairStatisticData.map((e) =>
        e ? PairStatisticData.toJSON(e) : undefined
      );
    } else {
      obj.pairStatisticData = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryPairsLockedAndMintedStatisticByAppResponse>,
      I
    >
  >(object: I): QueryPairsLockedAndMintedStatisticByAppResponse {
    const message = createBaseQueryPairsLockedAndMintedStatisticByAppResponse();
    message.pairStatisticData =
      object.pairStatisticData?.map((e) => PairStatisticData.fromPartial(e)) ||
      [];
    return message;
  },
};

export interface Query {
  QueryVault(request: QueryVaultRequest): Promise<QueryVaultResponse>;
  QueryUserExtendedPairTotalData(
    request: QueryUserExtendedPairTotalDataRequest
  ): Promise<QueryUserExtendedPairTotalDataResponse>;
  QueryVaultInfoByVaultId(
    request: QueryVaultInfoByVaultIdRequest
  ): Promise<QueryVaultInfoByVaultIdResponse>;
  QueryVaultInfoOfOwnerByApp(
    request: QueryVaultInfoOfOwnerByAppRequest
  ): Promise<QueryVaultInfoOfOwnerByAppResponse>;
  QueryAllVaults(
    request: QueryAllVaultsRequest
  ): Promise<QueryAllVaultsResponse>;
  QueryAllVaultsByApp(
    request: QueryAllVaultsByAppRequest
  ): Promise<QueryAllVaultsByAppResponse>;
  QueryAllVaultsByAppAndExtendedPair(
    request: QueryAllVaultsByAppAndExtendedPairRequest
  ): Promise<QueryAllVaultsByAppAndExtendedPairResponse>;
  QueryVaultIdOfOwnerByExtendedPairAndApp(
    request: QueryVaultIdOfOwnerByExtendedPairAndAppRequest
  ): Promise<QueryVaultIdOfOwnerByExtendedPairAndAppResponse>;
  QueryVaultIdsByAppInAllExtendedPairs(
    request: QueryVaultIdsByAppInAllExtendedPairsRequest
  ): Promise<QueryVaultIdsByAppInAllExtendedPairsResponse>;
  QueryAllVaultIdsByAnOwner(
    request: QueryAllVaultIdsByAnOwnerRequest
  ): Promise<QueryAllVaultIdsByAnOwnerResponse>;
  QueryTokenMintedByAppAndExtendedPair(
    request: QueryTokenMintedByAppAndExtendedPairRequest
  ): Promise<QueryTokenMintedByAppAndExtendedPairResponse>;
  QueryTokenMintedAssetWiseByApp(
    request: QueryTokenMintedAssetWiseByAppRequest
  ): Promise<QueryTokenMintedAssetWiseByAppResponse>;
  QueryVaultCountByApp(
    request: QueryVaultCountByAppRequest
  ): Promise<QueryVaultCountByAppResponse>;
  QueryVaultCountByAppAndExtendedPair(
    request: QueryVaultCountByAppAndExtendedPairRequest
  ): Promise<QueryVaultCountByAppAndExtendedPairResponse>;
  QueryTotalValueLockedByAppAndExtendedPair(
    request: QueryTotalValueLockedByAppAndExtendedPairRequest
  ): Promise<QueryTotalValueLockedByAppAndExtendedPairResponse>;
  QueryExtendedPairIDsByApp(
    request: QueryExtendedPairIDsByAppRequest
  ): Promise<QueryExtendedPairIDsByAppResponse>;
  QueryStableVaultByVaultId(
    request: QueryStableVaultByVaultIdRequest
  ): Promise<QueryStableVaultByVaultIdResponse>;
  QueryStableVaultByApp(
    request: QueryStableVaultByAppRequest
  ): Promise<QueryStableVaultByAppResponse>;
  QueryStableVaultByAppAndExtendedPair(
    request: QueryStableVaultByAppAndExtendedPairRequest
  ): Promise<QueryStableVaultByAppAndExtendedPairResponse>;
  QueryExtendedPairVaultMappingByAppAndExtendedPair(
    request: QueryExtendedPairVaultMappingByAppAndExtendedPairRequest
  ): Promise<QueryExtendedPairVaultMappingByAppAndExtendedPairResponse>;
  QueryExtendedPairVaultMappingByApp(
    request: QueryExtendedPairVaultMappingByAppRequest
  ): Promise<QueryExtendedPairVaultMappingByAppResponse>;
  QueryTVLByAppOfAllExtendedPairs(
    request: QueryTVLByAppOfAllExtendedPairsRequest
  ): Promise<QueryTVLByAppOfAllExtendedPairsResponse>;
  QueryTVLByApp(request: QueryTVLByAppRequest): Promise<QueryTVLByAppResponse>;
  QueryUserMyPositionByApp(
    request: QueryUserMyPositionByAppRequest
  ): Promise<QueryUserMyPositionByAppResponse>;
  QueryPairsLockedAndMintedStatisticByApp(
    request: QueryPairsLockedAndMintedStatisticByAppRequest
  ): Promise<QueryPairsLockedAndMintedStatisticByAppResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.QueryVault = this.QueryVault.bind(this);
    this.QueryUserExtendedPairTotalData =
      this.QueryUserExtendedPairTotalData.bind(this);
    this.QueryVaultInfoByVaultId = this.QueryVaultInfoByVaultId.bind(this);
    this.QueryVaultInfoOfOwnerByApp =
      this.QueryVaultInfoOfOwnerByApp.bind(this);
    this.QueryAllVaults = this.QueryAllVaults.bind(this);
    this.QueryAllVaultsByApp = this.QueryAllVaultsByApp.bind(this);
    this.QueryAllVaultsByAppAndExtendedPair =
      this.QueryAllVaultsByAppAndExtendedPair.bind(this);
    this.QueryVaultIdOfOwnerByExtendedPairAndApp =
      this.QueryVaultIdOfOwnerByExtendedPairAndApp.bind(this);
    this.QueryVaultIdsByAppInAllExtendedPairs =
      this.QueryVaultIdsByAppInAllExtendedPairs.bind(this);
    this.QueryAllVaultIdsByAnOwner = this.QueryAllVaultIdsByAnOwner.bind(this);
    this.QueryTokenMintedByAppAndExtendedPair =
      this.QueryTokenMintedByAppAndExtendedPair.bind(this);
    this.QueryTokenMintedAssetWiseByApp =
      this.QueryTokenMintedAssetWiseByApp.bind(this);
    this.QueryVaultCountByApp = this.QueryVaultCountByApp.bind(this);
    this.QueryVaultCountByAppAndExtendedPair =
      this.QueryVaultCountByAppAndExtendedPair.bind(this);
    this.QueryTotalValueLockedByAppAndExtendedPair =
      this.QueryTotalValueLockedByAppAndExtendedPair.bind(this);
    this.QueryExtendedPairIDsByApp = this.QueryExtendedPairIDsByApp.bind(this);
    this.QueryStableVaultByVaultId = this.QueryStableVaultByVaultId.bind(this);
    this.QueryStableVaultByApp = this.QueryStableVaultByApp.bind(this);
    this.QueryStableVaultByAppAndExtendedPair =
      this.QueryStableVaultByAppAndExtendedPair.bind(this);
    this.QueryExtendedPairVaultMappingByAppAndExtendedPair =
      this.QueryExtendedPairVaultMappingByAppAndExtendedPair.bind(this);
    this.QueryExtendedPairVaultMappingByApp =
      this.QueryExtendedPairVaultMappingByApp.bind(this);
    this.QueryTVLByAppOfAllExtendedPairs =
      this.QueryTVLByAppOfAllExtendedPairs.bind(this);
    this.QueryTVLByApp = this.QueryTVLByApp.bind(this);
    this.QueryUserMyPositionByApp = this.QueryUserMyPositionByApp.bind(this);
    this.QueryPairsLockedAndMintedStatisticByApp =
      this.QueryPairsLockedAndMintedStatisticByApp.bind(this);
  }
  QueryVault(request: QueryVaultRequest): Promise<QueryVaultResponse> {
    const data = QueryVaultRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryVault",
      data
    );
    return promise.then((data) =>
      QueryVaultResponse.decode(new _m0.Reader(data))
    );
  }

  QueryUserExtendedPairTotalData(
    request: QueryUserExtendedPairTotalDataRequest
  ): Promise<QueryUserExtendedPairTotalDataResponse> {
    const data = QueryUserExtendedPairTotalDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryUserExtendedPairTotalData",
      data
    );
    return promise.then((data) =>
      QueryUserExtendedPairTotalDataResponse.decode(new _m0.Reader(data))
    );
  }

  QueryVaultInfoByVaultId(
    request: QueryVaultInfoByVaultIdRequest
  ): Promise<QueryVaultInfoByVaultIdResponse> {
    const data = QueryVaultInfoByVaultIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryVaultInfoByVaultId",
      data
    );
    return promise.then((data) =>
      QueryVaultInfoByVaultIdResponse.decode(new _m0.Reader(data))
    );
  }

  QueryVaultInfoOfOwnerByApp(
    request: QueryVaultInfoOfOwnerByAppRequest
  ): Promise<QueryVaultInfoOfOwnerByAppResponse> {
    const data = QueryVaultInfoOfOwnerByAppRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryVaultInfoOfOwnerByApp",
      data
    );
    return promise.then((data) =>
      QueryVaultInfoOfOwnerByAppResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAllVaults(
    request: QueryAllVaultsRequest
  ): Promise<QueryAllVaultsResponse> {
    const data = QueryAllVaultsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryAllVaults",
      data
    );
    return promise.then((data) =>
      QueryAllVaultsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAllVaultsByApp(
    request: QueryAllVaultsByAppRequest
  ): Promise<QueryAllVaultsByAppResponse> {
    const data = QueryAllVaultsByAppRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryAllVaultsByApp",
      data
    );
    return promise.then((data) =>
      QueryAllVaultsByAppResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAllVaultsByAppAndExtendedPair(
    request: QueryAllVaultsByAppAndExtendedPairRequest
  ): Promise<QueryAllVaultsByAppAndExtendedPairResponse> {
    const data =
      QueryAllVaultsByAppAndExtendedPairRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryAllVaultsByAppAndExtendedPair",
      data
    );
    return promise.then((data) =>
      QueryAllVaultsByAppAndExtendedPairResponse.decode(new _m0.Reader(data))
    );
  }

  QueryVaultIdOfOwnerByExtendedPairAndApp(
    request: QueryVaultIdOfOwnerByExtendedPairAndAppRequest
  ): Promise<QueryVaultIdOfOwnerByExtendedPairAndAppResponse> {
    const data =
      QueryVaultIdOfOwnerByExtendedPairAndAppRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryVaultIdOfOwnerByExtendedPairAndApp",
      data
    );
    return promise.then((data) =>
      QueryVaultIdOfOwnerByExtendedPairAndAppResponse.decode(
        new _m0.Reader(data)
      )
    );
  }

  QueryVaultIdsByAppInAllExtendedPairs(
    request: QueryVaultIdsByAppInAllExtendedPairsRequest
  ): Promise<QueryVaultIdsByAppInAllExtendedPairsResponse> {
    const data =
      QueryVaultIdsByAppInAllExtendedPairsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryVaultIdsByAppInAllExtendedPairs",
      data
    );
    return promise.then((data) =>
      QueryVaultIdsByAppInAllExtendedPairsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAllVaultIdsByAnOwner(
    request: QueryAllVaultIdsByAnOwnerRequest
  ): Promise<QueryAllVaultIdsByAnOwnerResponse> {
    const data = QueryAllVaultIdsByAnOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryAllVaultIdsByAnOwner",
      data
    );
    return promise.then((data) =>
      QueryAllVaultIdsByAnOwnerResponse.decode(new _m0.Reader(data))
    );
  }

  QueryTokenMintedByAppAndExtendedPair(
    request: QueryTokenMintedByAppAndExtendedPairRequest
  ): Promise<QueryTokenMintedByAppAndExtendedPairResponse> {
    const data =
      QueryTokenMintedByAppAndExtendedPairRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryTokenMintedByAppAndExtendedPair",
      data
    );
    return promise.then((data) =>
      QueryTokenMintedByAppAndExtendedPairResponse.decode(new _m0.Reader(data))
    );
  }

  QueryTokenMintedAssetWiseByApp(
    request: QueryTokenMintedAssetWiseByAppRequest
  ): Promise<QueryTokenMintedAssetWiseByAppResponse> {
    const data = QueryTokenMintedAssetWiseByAppRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryTokenMintedAssetWiseByApp",
      data
    );
    return promise.then((data) =>
      QueryTokenMintedAssetWiseByAppResponse.decode(new _m0.Reader(data))
    );
  }

  QueryVaultCountByApp(
    request: QueryVaultCountByAppRequest
  ): Promise<QueryVaultCountByAppResponse> {
    const data = QueryVaultCountByAppRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryVaultCountByApp",
      data
    );
    return promise.then((data) =>
      QueryVaultCountByAppResponse.decode(new _m0.Reader(data))
    );
  }

  QueryVaultCountByAppAndExtendedPair(
    request: QueryVaultCountByAppAndExtendedPairRequest
  ): Promise<QueryVaultCountByAppAndExtendedPairResponse> {
    const data =
      QueryVaultCountByAppAndExtendedPairRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryVaultCountByAppAndExtendedPair",
      data
    );
    return promise.then((data) =>
      QueryVaultCountByAppAndExtendedPairResponse.decode(new _m0.Reader(data))
    );
  }

  QueryTotalValueLockedByAppAndExtendedPair(
    request: QueryTotalValueLockedByAppAndExtendedPairRequest
  ): Promise<QueryTotalValueLockedByAppAndExtendedPairResponse> {
    const data =
      QueryTotalValueLockedByAppAndExtendedPairRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryTotalValueLockedByAppAndExtendedPair",
      data
    );
    return promise.then((data) =>
      QueryTotalValueLockedByAppAndExtendedPairResponse.decode(
        new _m0.Reader(data)
      )
    );
  }

  QueryExtendedPairIDsByApp(
    request: QueryExtendedPairIDsByAppRequest
  ): Promise<QueryExtendedPairIDsByAppResponse> {
    const data = QueryExtendedPairIDsByAppRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryExtendedPairIDsByApp",
      data
    );
    return promise.then((data) =>
      QueryExtendedPairIDsByAppResponse.decode(new _m0.Reader(data))
    );
  }

  QueryStableVaultByVaultId(
    request: QueryStableVaultByVaultIdRequest
  ): Promise<QueryStableVaultByVaultIdResponse> {
    const data = QueryStableVaultByVaultIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryStableVaultByVaultId",
      data
    );
    return promise.then((data) =>
      QueryStableVaultByVaultIdResponse.decode(new _m0.Reader(data))
    );
  }

  QueryStableVaultByApp(
    request: QueryStableVaultByAppRequest
  ): Promise<QueryStableVaultByAppResponse> {
    const data = QueryStableVaultByAppRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryStableVaultByApp",
      data
    );
    return promise.then((data) =>
      QueryStableVaultByAppResponse.decode(new _m0.Reader(data))
    );
  }

  QueryStableVaultByAppAndExtendedPair(
    request: QueryStableVaultByAppAndExtendedPairRequest
  ): Promise<QueryStableVaultByAppAndExtendedPairResponse> {
    const data =
      QueryStableVaultByAppAndExtendedPairRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryStableVaultByAppAndExtendedPair",
      data
    );
    return promise.then((data) =>
      QueryStableVaultByAppAndExtendedPairResponse.decode(new _m0.Reader(data))
    );
  }

  QueryExtendedPairVaultMappingByAppAndExtendedPair(
    request: QueryExtendedPairVaultMappingByAppAndExtendedPairRequest
  ): Promise<QueryExtendedPairVaultMappingByAppAndExtendedPairResponse> {
    const data =
      QueryExtendedPairVaultMappingByAppAndExtendedPairRequest.encode(
        request
      ).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryExtendedPairVaultMappingByAppAndExtendedPair",
      data
    );
    return promise.then((data) =>
      QueryExtendedPairVaultMappingByAppAndExtendedPairResponse.decode(
        new _m0.Reader(data)
      )
    );
  }

  QueryExtendedPairVaultMappingByApp(
    request: QueryExtendedPairVaultMappingByAppRequest
  ): Promise<QueryExtendedPairVaultMappingByAppResponse> {
    const data =
      QueryExtendedPairVaultMappingByAppRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryExtendedPairVaultMappingByApp",
      data
    );
    return promise.then((data) =>
      QueryExtendedPairVaultMappingByAppResponse.decode(new _m0.Reader(data))
    );
  }

  QueryTVLByAppOfAllExtendedPairs(
    request: QueryTVLByAppOfAllExtendedPairsRequest
  ): Promise<QueryTVLByAppOfAllExtendedPairsResponse> {
    const data =
      QueryTVLByAppOfAllExtendedPairsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryTVLByAppOfAllExtendedPairs",
      data
    );
    return promise.then((data) =>
      QueryTVLByAppOfAllExtendedPairsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryTVLByApp(request: QueryTVLByAppRequest): Promise<QueryTVLByAppResponse> {
    const data = QueryTVLByAppRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryTVLByApp",
      data
    );
    return promise.then((data) =>
      QueryTVLByAppResponse.decode(new _m0.Reader(data))
    );
  }

  QueryUserMyPositionByApp(
    request: QueryUserMyPositionByAppRequest
  ): Promise<QueryUserMyPositionByAppResponse> {
    const data = QueryUserMyPositionByAppRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryUserMyPositionByApp",
      data
    );
    return promise.then((data) =>
      QueryUserMyPositionByAppResponse.decode(new _m0.Reader(data))
    );
  }

  QueryPairsLockedAndMintedStatisticByApp(
    request: QueryPairsLockedAndMintedStatisticByAppRequest
  ): Promise<QueryPairsLockedAndMintedStatisticByAppResponse> {
    const data =
      QueryPairsLockedAndMintedStatisticByAppRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Query",
      "QueryPairsLockedAndMintedStatisticByApp",
      data
    );
    return promise.then((data) =>
      QueryPairsLockedAndMintedStatisticByAppResponse.decode(
        new _m0.Reader(data)
      )
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
