/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "./cosmos/base/v1beta1/coin";
import { Vault, StableMintVault } from "./comdex/vault/v1beta1/vault";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "comdex.vault.v1beta1";

export interface VaultInfo {
  id: Long;
  pairId: Long;
  owner: string;
  collateral?: Coin;
  debt?: Coin;
  collateralizationRatio: string;
}

export interface QueryVaultRequest {
  id: string;
}

export interface QueryVaultResponse {
  vault?: Vault;
}

export interface QueryAllVaultsRequest {
  pagination?: PageRequest;
}

export interface QueryAllVaultsResponse {
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

export interface QueryVaultOfOwnerByPairRequest {
  productId: Long;
  owner: string;
  extendedPairId: Long;
  pagination?: PageRequest;
}

export interface QueryVaultOfOwnerByPairResponse {
  vaultId: string;
}

export interface QueryVaultByProductRequest {
  productId: Long;
  pagination?: PageRequest;
}

export interface QueryVaultByProductResponse {
  vaultIds: string[];
}

export interface QueryAllVaultByOwnerRequest {
  owner: string;
  pagination?: PageRequest;
}

export interface QueryAllVaultByOwnerResponse {
  vaultIds: string[];
}

export interface QueryTokenMintedAllProductsByPairRequest {
  productId: Long;
  extendedPairId: Long;
  pagination?: PageRequest;
}

export interface QueryTokenMintedAllProductsByPairResponse {
  tokenMinted: string;
}

export interface QueryTokenMintedAllProductsRequest {
  productId: Long;
  pagination?: PageRequest;
}

export interface QueryTokenMintedAllProductsResponse {
  tokenMinted: string;
}

export interface QueryVaultCountByProductRequest {
  productId: Long;
  pagination?: PageRequest;
}

export interface QueryVaultCountByProductResponse {
  vaultCount: Long;
}

export interface QueryVaultCountByProductAndPairRequest {
  productId: Long;
  extendedPairId: Long;
  pagination?: PageRequest;
}

export interface QueryVaultCountByProductAndPairResponse {
  vaultCount: Long;
}

export interface QueryTotalValueLockedByProductExtendedPairRequest {
  productId: Long;
  extendedPairId: Long;
  pagination?: PageRequest;
}

export interface QueryTotalValueLockedByProductExtendedPairResponse {
  valueLocked: string;
}

export interface QueryExtendedPairIDByProductRequest {
  productId: Long;
  pagination?: PageRequest;
}

export interface QueryExtendedPairIDByProductResponse {
  extendedPairIds: Long[];
}

export interface QueryStableVaultInfoRequest {
  stableVaultId: string;
}

export interface QueryStableVaultInfoResponse {
  stableMintVault?: StableMintVault;
}

export interface QueryAllStableVaultsRequest {
  appId: Long;
}

export interface QueryAllStableVaultsResponse {
  stableMintVault: StableMintVault[];
}

export interface QueryStableVaultByProductExtendedPairRequest {
  appId: Long;
  extendedPairId: Long;
}

export interface QueryStableVaultByProductExtendedPairResponse {
  stableMintVault?: StableMintVault;
}

function createBaseVaultInfo(): VaultInfo {
  return {
    id: Long.UZERO,
    pairId: Long.UZERO,
    owner: "",
    collateral: undefined,
    debt: undefined,
    collateralizationRatio: "",
  };
}

export const VaultInfo = {
  encode(
    message: VaultInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(34).fork()).ldelim();
    }
    if (message.debt !== undefined) {
      Coin.encode(message.debt, writer.uint32(42).fork()).ldelim();
    }
    if (message.collateralizationRatio !== "") {
      writer.uint32(50).string(message.collateralizationRatio);
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
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.pairId = reader.uint64() as Long;
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.debt = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.collateralizationRatio = reader.string();
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      pairId: isSet(object.pairId) ? Long.fromValue(object.pairId) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      collateral: isSet(object.collateral)
        ? Coin.fromJSON(object.collateral)
        : undefined,
      debt: isSet(object.debt) ? Coin.fromJSON(object.debt) : undefined,
      collateralizationRatio: isSet(object.collateralizationRatio)
        ? String(object.collateralizationRatio)
        : "",
    };
  },

  toJSON(message: VaultInfo): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.collateral !== undefined &&
      (obj.collateral = message.collateral
        ? Coin.toJSON(message.collateral)
        : undefined);
    message.debt !== undefined &&
      (obj.debt = message.debt ? Coin.toJSON(message.debt) : undefined);
    message.collateralizationRatio !== undefined &&
      (obj.collateralizationRatio = message.collateralizationRatio);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VaultInfo>, I>>(
    object: I
  ): VaultInfo {
    const message = createBaseVaultInfo();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.owner = object.owner ?? "";
    message.collateral =
      object.collateral !== undefined && object.collateral !== null
        ? Coin.fromPartial(object.collateral)
        : undefined;
    message.debt =
      object.debt !== undefined && object.debt !== null
        ? Coin.fromPartial(object.debt)
        : undefined;
    message.collateralizationRatio = object.collateralizationRatio ?? "";
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

function createBaseQueryVaultOfOwnerByPairRequest(): QueryVaultOfOwnerByPairRequest {
  return {
    productId: Long.UZERO,
    owner: "",
    extendedPairId: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryVaultOfOwnerByPairRequest = {
  encode(
    message: QueryVaultOfOwnerByPairRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.productId.isZero()) {
      writer.uint32(8).uint64(message.productId);
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
  ): QueryVaultOfOwnerByPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultOfOwnerByPairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.uint64() as Long;
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

  fromJSON(object: any): QueryVaultOfOwnerByPairRequest {
    return {
      productId: isSet(object.productId)
        ? Long.fromValue(object.productId)
        : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      extendedPairId: isSet(object.extendedPairId)
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryVaultOfOwnerByPairRequest): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.extendedPairId !== undefined &&
      (obj.extendedPairId = (message.extendedPairId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVaultOfOwnerByPairRequest>, I>>(
    object: I
  ): QueryVaultOfOwnerByPairRequest {
    const message = createBaseQueryVaultOfOwnerByPairRequest();
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? Long.fromValue(object.productId)
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

function createBaseQueryVaultOfOwnerByPairResponse(): QueryVaultOfOwnerByPairResponse {
  return { vaultId: "" };
}

export const QueryVaultOfOwnerByPairResponse = {
  encode(
    message: QueryVaultOfOwnerByPairResponse,
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
  ): QueryVaultOfOwnerByPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultOfOwnerByPairResponse();
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

  fromJSON(object: any): QueryVaultOfOwnerByPairResponse {
    return {
      vaultId: isSet(object.vaultId) ? String(object.vaultId) : "",
    };
  },

  toJSON(message: QueryVaultOfOwnerByPairResponse): unknown {
    const obj: any = {};
    message.vaultId !== undefined && (obj.vaultId = message.vaultId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVaultOfOwnerByPairResponse>, I>>(
    object: I
  ): QueryVaultOfOwnerByPairResponse {
    const message = createBaseQueryVaultOfOwnerByPairResponse();
    message.vaultId = object.vaultId ?? "";
    return message;
  },
};

function createBaseQueryVaultByProductRequest(): QueryVaultByProductRequest {
  return { productId: Long.UZERO, pagination: undefined };
}

export const QueryVaultByProductRequest = {
  encode(
    message: QueryVaultByProductRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.productId.isZero()) {
      writer.uint32(8).uint64(message.productId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVaultByProductRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultByProductRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.uint64() as Long;
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

  fromJSON(object: any): QueryVaultByProductRequest {
    return {
      productId: isSet(object.productId)
        ? Long.fromValue(object.productId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryVaultByProductRequest): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVaultByProductRequest>, I>>(
    object: I
  ): QueryVaultByProductRequest {
    const message = createBaseQueryVaultByProductRequest();
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? Long.fromValue(object.productId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryVaultByProductResponse(): QueryVaultByProductResponse {
  return { vaultIds: [] };
}

export const QueryVaultByProductResponse = {
  encode(
    message: QueryVaultByProductResponse,
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
  ): QueryVaultByProductResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultByProductResponse();
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

  fromJSON(object: any): QueryVaultByProductResponse {
    return {
      vaultIds: Array.isArray(object?.vaultIds)
        ? object.vaultIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: QueryVaultByProductResponse): unknown {
    const obj: any = {};
    if (message.vaultIds) {
      obj.vaultIds = message.vaultIds.map((e) => e);
    } else {
      obj.vaultIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVaultByProductResponse>, I>>(
    object: I
  ): QueryVaultByProductResponse {
    const message = createBaseQueryVaultByProductResponse();
    message.vaultIds = object.vaultIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryAllVaultByOwnerRequest(): QueryAllVaultByOwnerRequest {
  return { owner: "", pagination: undefined };
}

export const QueryAllVaultByOwnerRequest = {
  encode(
    message: QueryAllVaultByOwnerRequest,
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
  ): QueryAllVaultByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVaultByOwnerRequest();
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

  fromJSON(object: any): QueryAllVaultByOwnerRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllVaultByOwnerRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllVaultByOwnerRequest>, I>>(
    object: I
  ): QueryAllVaultByOwnerRequest {
    const message = createBaseQueryAllVaultByOwnerRequest();
    message.owner = object.owner ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllVaultByOwnerResponse(): QueryAllVaultByOwnerResponse {
  return { vaultIds: [] };
}

export const QueryAllVaultByOwnerResponse = {
  encode(
    message: QueryAllVaultByOwnerResponse,
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
  ): QueryAllVaultByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVaultByOwnerResponse();
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

  fromJSON(object: any): QueryAllVaultByOwnerResponse {
    return {
      vaultIds: Array.isArray(object?.vaultIds)
        ? object.vaultIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: QueryAllVaultByOwnerResponse): unknown {
    const obj: any = {};
    if (message.vaultIds) {
      obj.vaultIds = message.vaultIds.map((e) => e);
    } else {
      obj.vaultIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllVaultByOwnerResponse>, I>>(
    object: I
  ): QueryAllVaultByOwnerResponse {
    const message = createBaseQueryAllVaultByOwnerResponse();
    message.vaultIds = object.vaultIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryTokenMintedAllProductsByPairRequest(): QueryTokenMintedAllProductsByPairRequest {
  return {
    productId: Long.UZERO,
    extendedPairId: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryTokenMintedAllProductsByPairRequest = {
  encode(
    message: QueryTokenMintedAllProductsByPairRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.productId.isZero()) {
      writer.uint32(8).uint64(message.productId);
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
  ): QueryTokenMintedAllProductsByPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenMintedAllProductsByPairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.uint64() as Long;
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

  fromJSON(object: any): QueryTokenMintedAllProductsByPairRequest {
    return {
      productId: isSet(object.productId)
        ? Long.fromValue(object.productId)
        : Long.UZERO,
      extendedPairId: isSet(object.extendedPairId)
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTokenMintedAllProductsByPairRequest): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    message.extendedPairId !== undefined &&
      (obj.extendedPairId = (message.extendedPairId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryTokenMintedAllProductsByPairRequest>, I>
  >(object: I): QueryTokenMintedAllProductsByPairRequest {
    const message = createBaseQueryTokenMintedAllProductsByPairRequest();
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? Long.fromValue(object.productId)
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

function createBaseQueryTokenMintedAllProductsByPairResponse(): QueryTokenMintedAllProductsByPairResponse {
  return { tokenMinted: "" };
}

export const QueryTokenMintedAllProductsByPairResponse = {
  encode(
    message: QueryTokenMintedAllProductsByPairResponse,
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
  ): QueryTokenMintedAllProductsByPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenMintedAllProductsByPairResponse();
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

  fromJSON(object: any): QueryTokenMintedAllProductsByPairResponse {
    return {
      tokenMinted: isSet(object.tokenMinted) ? String(object.tokenMinted) : "",
    };
  },

  toJSON(message: QueryTokenMintedAllProductsByPairResponse): unknown {
    const obj: any = {};
    message.tokenMinted !== undefined &&
      (obj.tokenMinted = message.tokenMinted);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryTokenMintedAllProductsByPairResponse>, I>
  >(object: I): QueryTokenMintedAllProductsByPairResponse {
    const message = createBaseQueryTokenMintedAllProductsByPairResponse();
    message.tokenMinted = object.tokenMinted ?? "";
    return message;
  },
};

function createBaseQueryTokenMintedAllProductsRequest(): QueryTokenMintedAllProductsRequest {
  return { productId: Long.UZERO, pagination: undefined };
}

export const QueryTokenMintedAllProductsRequest = {
  encode(
    message: QueryTokenMintedAllProductsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.productId.isZero()) {
      writer.uint32(8).uint64(message.productId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenMintedAllProductsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenMintedAllProductsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.uint64() as Long;
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

  fromJSON(object: any): QueryTokenMintedAllProductsRequest {
    return {
      productId: isSet(object.productId)
        ? Long.fromValue(object.productId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTokenMintedAllProductsRequest): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryTokenMintedAllProductsRequest>, I>
  >(object: I): QueryTokenMintedAllProductsRequest {
    const message = createBaseQueryTokenMintedAllProductsRequest();
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? Long.fromValue(object.productId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryTokenMintedAllProductsResponse(): QueryTokenMintedAllProductsResponse {
  return { tokenMinted: "" };
}

export const QueryTokenMintedAllProductsResponse = {
  encode(
    message: QueryTokenMintedAllProductsResponse,
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
  ): QueryTokenMintedAllProductsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenMintedAllProductsResponse();
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

  fromJSON(object: any): QueryTokenMintedAllProductsResponse {
    return {
      tokenMinted: isSet(object.tokenMinted) ? String(object.tokenMinted) : "",
    };
  },

  toJSON(message: QueryTokenMintedAllProductsResponse): unknown {
    const obj: any = {};
    message.tokenMinted !== undefined &&
      (obj.tokenMinted = message.tokenMinted);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryTokenMintedAllProductsResponse>, I>
  >(object: I): QueryTokenMintedAllProductsResponse {
    const message = createBaseQueryTokenMintedAllProductsResponse();
    message.tokenMinted = object.tokenMinted ?? "";
    return message;
  },
};

function createBaseQueryVaultCountByProductRequest(): QueryVaultCountByProductRequest {
  return { productId: Long.UZERO, pagination: undefined };
}

export const QueryVaultCountByProductRequest = {
  encode(
    message: QueryVaultCountByProductRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.productId.isZero()) {
      writer.uint32(8).uint64(message.productId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVaultCountByProductRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultCountByProductRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.uint64() as Long;
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

  fromJSON(object: any): QueryVaultCountByProductRequest {
    return {
      productId: isSet(object.productId)
        ? Long.fromValue(object.productId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryVaultCountByProductRequest): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVaultCountByProductRequest>, I>>(
    object: I
  ): QueryVaultCountByProductRequest {
    const message = createBaseQueryVaultCountByProductRequest();
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? Long.fromValue(object.productId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryVaultCountByProductResponse(): QueryVaultCountByProductResponse {
  return { vaultCount: Long.UZERO };
}

export const QueryVaultCountByProductResponse = {
  encode(
    message: QueryVaultCountByProductResponse,
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
  ): QueryVaultCountByProductResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultCountByProductResponse();
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

  fromJSON(object: any): QueryVaultCountByProductResponse {
    return {
      vaultCount: isSet(object.vaultCount)
        ? Long.fromValue(object.vaultCount)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryVaultCountByProductResponse): unknown {
    const obj: any = {};
    message.vaultCount !== undefined &&
      (obj.vaultCount = (message.vaultCount || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryVaultCountByProductResponse>, I>
  >(object: I): QueryVaultCountByProductResponse {
    const message = createBaseQueryVaultCountByProductResponse();
    message.vaultCount =
      object.vaultCount !== undefined && object.vaultCount !== null
        ? Long.fromValue(object.vaultCount)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryVaultCountByProductAndPairRequest(): QueryVaultCountByProductAndPairRequest {
  return {
    productId: Long.UZERO,
    extendedPairId: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryVaultCountByProductAndPairRequest = {
  encode(
    message: QueryVaultCountByProductAndPairRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.productId.isZero()) {
      writer.uint32(8).uint64(message.productId);
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
  ): QueryVaultCountByProductAndPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultCountByProductAndPairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.uint64() as Long;
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

  fromJSON(object: any): QueryVaultCountByProductAndPairRequest {
    return {
      productId: isSet(object.productId)
        ? Long.fromValue(object.productId)
        : Long.UZERO,
      extendedPairId: isSet(object.extendedPairId)
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryVaultCountByProductAndPairRequest): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    message.extendedPairId !== undefined &&
      (obj.extendedPairId = (message.extendedPairId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryVaultCountByProductAndPairRequest>, I>
  >(object: I): QueryVaultCountByProductAndPairRequest {
    const message = createBaseQueryVaultCountByProductAndPairRequest();
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? Long.fromValue(object.productId)
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

function createBaseQueryVaultCountByProductAndPairResponse(): QueryVaultCountByProductAndPairResponse {
  return { vaultCount: Long.UZERO };
}

export const QueryVaultCountByProductAndPairResponse = {
  encode(
    message: QueryVaultCountByProductAndPairResponse,
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
  ): QueryVaultCountByProductAndPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultCountByProductAndPairResponse();
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

  fromJSON(object: any): QueryVaultCountByProductAndPairResponse {
    return {
      vaultCount: isSet(object.vaultCount)
        ? Long.fromValue(object.vaultCount)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryVaultCountByProductAndPairResponse): unknown {
    const obj: any = {};
    message.vaultCount !== undefined &&
      (obj.vaultCount = (message.vaultCount || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryVaultCountByProductAndPairResponse>, I>
  >(object: I): QueryVaultCountByProductAndPairResponse {
    const message = createBaseQueryVaultCountByProductAndPairResponse();
    message.vaultCount =
      object.vaultCount !== undefined && object.vaultCount !== null
        ? Long.fromValue(object.vaultCount)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryTotalValueLockedByProductExtendedPairRequest(): QueryTotalValueLockedByProductExtendedPairRequest {
  return {
    productId: Long.UZERO,
    extendedPairId: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryTotalValueLockedByProductExtendedPairRequest = {
  encode(
    message: QueryTotalValueLockedByProductExtendedPairRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.productId.isZero()) {
      writer.uint32(8).uint64(message.productId);
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
  ): QueryTotalValueLockedByProductExtendedPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseQueryTotalValueLockedByProductExtendedPairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.uint64() as Long;
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

  fromJSON(object: any): QueryTotalValueLockedByProductExtendedPairRequest {
    return {
      productId: isSet(object.productId)
        ? Long.fromValue(object.productId)
        : Long.UZERO,
      extendedPairId: isSet(object.extendedPairId)
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTotalValueLockedByProductExtendedPairRequest): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
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
      DeepPartial<QueryTotalValueLockedByProductExtendedPairRequest>,
      I
    >
  >(object: I): QueryTotalValueLockedByProductExtendedPairRequest {
    const message =
      createBaseQueryTotalValueLockedByProductExtendedPairRequest();
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? Long.fromValue(object.productId)
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

function createBaseQueryTotalValueLockedByProductExtendedPairResponse(): QueryTotalValueLockedByProductExtendedPairResponse {
  return { valueLocked: "" };
}

export const QueryTotalValueLockedByProductExtendedPairResponse = {
  encode(
    message: QueryTotalValueLockedByProductExtendedPairResponse,
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
  ): QueryTotalValueLockedByProductExtendedPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseQueryTotalValueLockedByProductExtendedPairResponse();
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

  fromJSON(object: any): QueryTotalValueLockedByProductExtendedPairResponse {
    return {
      valueLocked: isSet(object.valueLocked) ? String(object.valueLocked) : "",
    };
  },

  toJSON(message: QueryTotalValueLockedByProductExtendedPairResponse): unknown {
    const obj: any = {};
    message.valueLocked !== undefined &&
      (obj.valueLocked = message.valueLocked);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryTotalValueLockedByProductExtendedPairResponse>,
      I
    >
  >(object: I): QueryTotalValueLockedByProductExtendedPairResponse {
    const message =
      createBaseQueryTotalValueLockedByProductExtendedPairResponse();
    message.valueLocked = object.valueLocked ?? "";
    return message;
  },
};

function createBaseQueryExtendedPairIDByProductRequest(): QueryExtendedPairIDByProductRequest {
  return { productId: Long.UZERO, pagination: undefined };
}

export const QueryExtendedPairIDByProductRequest = {
  encode(
    message: QueryExtendedPairIDByProductRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.productId.isZero()) {
      writer.uint32(8).uint64(message.productId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryExtendedPairIDByProductRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExtendedPairIDByProductRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.uint64() as Long;
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

  fromJSON(object: any): QueryExtendedPairIDByProductRequest {
    return {
      productId: isSet(object.productId)
        ? Long.fromValue(object.productId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryExtendedPairIDByProductRequest): unknown {
    const obj: any = {};
    message.productId !== undefined &&
      (obj.productId = (message.productId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryExtendedPairIDByProductRequest>, I>
  >(object: I): QueryExtendedPairIDByProductRequest {
    const message = createBaseQueryExtendedPairIDByProductRequest();
    message.productId =
      object.productId !== undefined && object.productId !== null
        ? Long.fromValue(object.productId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryExtendedPairIDByProductResponse(): QueryExtendedPairIDByProductResponse {
  return { extendedPairIds: [] };
}

export const QueryExtendedPairIDByProductResponse = {
  encode(
    message: QueryExtendedPairIDByProductResponse,
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
  ): QueryExtendedPairIDByProductResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExtendedPairIDByProductResponse();
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

  fromJSON(object: any): QueryExtendedPairIDByProductResponse {
    return {
      extendedPairIds: Array.isArray(object?.extendedPairIds)
        ? object.extendedPairIds.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: QueryExtendedPairIDByProductResponse): unknown {
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
    I extends Exact<DeepPartial<QueryExtendedPairIDByProductResponse>, I>
  >(object: I): QueryExtendedPairIDByProductResponse {
    const message = createBaseQueryExtendedPairIDByProductResponse();
    message.extendedPairIds =
      object.extendedPairIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseQueryStableVaultInfoRequest(): QueryStableVaultInfoRequest {
  return { stableVaultId: "" };
}

export const QueryStableVaultInfoRequest = {
  encode(
    message: QueryStableVaultInfoRequest,
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
  ): QueryStableVaultInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStableVaultInfoRequest();
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

  fromJSON(object: any): QueryStableVaultInfoRequest {
    return {
      stableVaultId: isSet(object.stableVaultId)
        ? String(object.stableVaultId)
        : "",
    };
  },

  toJSON(message: QueryStableVaultInfoRequest): unknown {
    const obj: any = {};
    message.stableVaultId !== undefined &&
      (obj.stableVaultId = message.stableVaultId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStableVaultInfoRequest>, I>>(
    object: I
  ): QueryStableVaultInfoRequest {
    const message = createBaseQueryStableVaultInfoRequest();
    message.stableVaultId = object.stableVaultId ?? "";
    return message;
  },
};

function createBaseQueryStableVaultInfoResponse(): QueryStableVaultInfoResponse {
  return { stableMintVault: undefined };
}

export const QueryStableVaultInfoResponse = {
  encode(
    message: QueryStableVaultInfoResponse,
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
  ): QueryStableVaultInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStableVaultInfoResponse();
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

  fromJSON(object: any): QueryStableVaultInfoResponse {
    return {
      stableMintVault: isSet(object.stableMintVault)
        ? StableMintVault.fromJSON(object.stableMintVault)
        : undefined,
    };
  },

  toJSON(message: QueryStableVaultInfoResponse): unknown {
    const obj: any = {};
    message.stableMintVault !== undefined &&
      (obj.stableMintVault = message.stableMintVault
        ? StableMintVault.toJSON(message.stableMintVault)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStableVaultInfoResponse>, I>>(
    object: I
  ): QueryStableVaultInfoResponse {
    const message = createBaseQueryStableVaultInfoResponse();
    message.stableMintVault =
      object.stableMintVault !== undefined && object.stableMintVault !== null
        ? StableMintVault.fromPartial(object.stableMintVault)
        : undefined;
    return message;
  },
};

function createBaseQueryAllStableVaultsRequest(): QueryAllStableVaultsRequest {
  return { appId: Long.UZERO };
}

export const QueryAllStableVaultsRequest = {
  encode(
    message: QueryAllStableVaultsRequest,
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
  ): QueryAllStableVaultsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStableVaultsRequest();
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

  fromJSON(object: any): QueryAllStableVaultsRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryAllStableVaultsRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStableVaultsRequest>, I>>(
    object: I
  ): QueryAllStableVaultsRequest {
    const message = createBaseQueryAllStableVaultsRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryAllStableVaultsResponse(): QueryAllStableVaultsResponse {
  return { stableMintVault: [] };
}

export const QueryAllStableVaultsResponse = {
  encode(
    message: QueryAllStableVaultsResponse,
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
  ): QueryAllStableVaultsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStableVaultsResponse();
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

  fromJSON(object: any): QueryAllStableVaultsResponse {
    return {
      stableMintVault: Array.isArray(object?.stableMintVault)
        ? object.stableMintVault.map((e: any) => StableMintVault.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAllStableVaultsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<QueryAllStableVaultsResponse>, I>>(
    object: I
  ): QueryAllStableVaultsResponse {
    const message = createBaseQueryAllStableVaultsResponse();
    message.stableMintVault =
      object.stableMintVault?.map((e) => StableMintVault.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryStableVaultByProductExtendedPairRequest(): QueryStableVaultByProductExtendedPairRequest {
  return { appId: Long.UZERO, extendedPairId: Long.UZERO };
}

export const QueryStableVaultByProductExtendedPairRequest = {
  encode(
    message: QueryStableVaultByProductExtendedPairRequest,
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
  ): QueryStableVaultByProductExtendedPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStableVaultByProductExtendedPairRequest();
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

  fromJSON(object: any): QueryStableVaultByProductExtendedPairRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      extendedPairId: isSet(object.extendedPairId)
        ? Long.fromValue(object.extendedPairId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryStableVaultByProductExtendedPairRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.extendedPairId !== undefined &&
      (obj.extendedPairId = (message.extendedPairId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryStableVaultByProductExtendedPairRequest>,
      I
    >
  >(object: I): QueryStableVaultByProductExtendedPairRequest {
    const message = createBaseQueryStableVaultByProductExtendedPairRequest();
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

function createBaseQueryStableVaultByProductExtendedPairResponse(): QueryStableVaultByProductExtendedPairResponse {
  return { stableMintVault: undefined };
}

export const QueryStableVaultByProductExtendedPairResponse = {
  encode(
    message: QueryStableVaultByProductExtendedPairResponse,
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
  ): QueryStableVaultByProductExtendedPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStableVaultByProductExtendedPairResponse();
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

  fromJSON(object: any): QueryStableVaultByProductExtendedPairResponse {
    return {
      stableMintVault: isSet(object.stableMintVault)
        ? StableMintVault.fromJSON(object.stableMintVault)
        : undefined,
    };
  },

  toJSON(message: QueryStableVaultByProductExtendedPairResponse): unknown {
    const obj: any = {};
    message.stableMintVault !== undefined &&
      (obj.stableMintVault = message.stableMintVault
        ? StableMintVault.toJSON(message.stableMintVault)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryStableVaultByProductExtendedPairResponse>,
      I
    >
  >(object: I): QueryStableVaultByProductExtendedPairResponse {
    const message = createBaseQueryStableVaultByProductExtendedPairResponse();
    message.stableMintVault =
      object.stableMintVault !== undefined && object.stableMintVault !== null
        ? StableMintVault.fromPartial(object.stableMintVault)
        : undefined;
    return message;
  },
};

export interface QueryService {
  QueryVault(request: QueryVaultRequest): Promise<QueryVaultResponse>;
  QueryAllVaults(
    request: QueryAllVaultsRequest
  ): Promise<QueryAllVaultsResponse>;
  QueryAllVaultsByAppAndExtendedPair(
    request: QueryAllVaultsByAppAndExtendedPairRequest
  ): Promise<QueryAllVaultsByAppAndExtendedPairResponse>;
  QueryVaultOfOwnerByPair(
    request: QueryVaultOfOwnerByPairRequest
  ): Promise<QueryVaultOfOwnerByPairResponse>;
  QueryVaultByProduct(
    request: QueryVaultByProductRequest
  ): Promise<QueryVaultByProductResponse>;
  QueryAllVaultByOwner(
    request: QueryAllVaultByOwnerRequest
  ): Promise<QueryAllVaultByOwnerResponse>;
  QueryTokenMintedAllProductsByPair(
    request: QueryTokenMintedAllProductsByPairRequest
  ): Promise<QueryTokenMintedAllProductsByPairResponse>;
  QueryTokenMintedAllProducts(
    request: QueryTokenMintedAllProductsRequest
  ): Promise<QueryTokenMintedAllProductsResponse>;
  QueryVaultCountByProduct(
    request: QueryVaultCountByProductRequest
  ): Promise<QueryVaultCountByProductResponse>;
  QueryVaultCountByProductAndPair(
    request: QueryVaultCountByProductAndPairRequest
  ): Promise<QueryVaultCountByProductAndPairResponse>;
  QueryTotalValueLockedByProductExtendedPair(
    request: QueryTotalValueLockedByProductExtendedPairRequest
  ): Promise<QueryTotalValueLockedByProductExtendedPairResponse>;
  QueryExtendedPairIDByProduct(
    request: QueryExtendedPairIDByProductRequest
  ): Promise<QueryExtendedPairIDByProductResponse>;
  QueryStableVaultInfo(
    request: QueryStableVaultInfoRequest
  ): Promise<QueryStableVaultInfoResponse>;
  QueryAllStableVaults(
    request: QueryAllStableVaultsRequest
  ): Promise<QueryAllStableVaultsResponse>;
  QueryStableVaultByProductExtendedPair(
    request: QueryStableVaultByProductExtendedPairRequest
  ): Promise<QueryStableVaultByProductExtendedPairResponse>;
}

export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.QueryVault = this.QueryVault.bind(this);
    this.QueryAllVaults = this.QueryAllVaults.bind(this);
    this.QueryAllVaultsByAppAndExtendedPair =
      this.QueryAllVaultsByAppAndExtendedPair.bind(this);
    this.QueryVaultOfOwnerByPair = this.QueryVaultOfOwnerByPair.bind(this);
    this.QueryVaultByProduct = this.QueryVaultByProduct.bind(this);
    this.QueryAllVaultByOwner = this.QueryAllVaultByOwner.bind(this);
    this.QueryTokenMintedAllProductsByPair =
      this.QueryTokenMintedAllProductsByPair.bind(this);
    this.QueryTokenMintedAllProducts =
      this.QueryTokenMintedAllProducts.bind(this);
    this.QueryVaultCountByProduct = this.QueryVaultCountByProduct.bind(this);
    this.QueryVaultCountByProductAndPair =
      this.QueryVaultCountByProductAndPair.bind(this);
    this.QueryTotalValueLockedByProductExtendedPair =
      this.QueryTotalValueLockedByProductExtendedPair.bind(this);
    this.QueryExtendedPairIDByProduct =
      this.QueryExtendedPairIDByProduct.bind(this);
    this.QueryStableVaultInfo = this.QueryStableVaultInfo.bind(this);
    this.QueryAllStableVaults = this.QueryAllStableVaults.bind(this);
    this.QueryStableVaultByProductExtendedPair =
      this.QueryStableVaultByProductExtendedPair.bind(this);
  }
  QueryVault(request: QueryVaultRequest): Promise<QueryVaultResponse> {
    const data = QueryVaultRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.QueryService",
      "QueryVault",
      data
    );
    return promise.then((data) =>
      QueryVaultResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAllVaults(
    request: QueryAllVaultsRequest
  ): Promise<QueryAllVaultsResponse> {
    const data = QueryAllVaultsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.QueryService",
      "QueryAllVaults",
      data
    );
    return promise.then((data) =>
      QueryAllVaultsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAllVaultsByAppAndExtendedPair(
    request: QueryAllVaultsByAppAndExtendedPairRequest
  ): Promise<QueryAllVaultsByAppAndExtendedPairResponse> {
    const data =
      QueryAllVaultsByAppAndExtendedPairRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.QueryService",
      "QueryAllVaultsByAppAndExtendedPair",
      data
    );
    return promise.then((data) =>
      QueryAllVaultsByAppAndExtendedPairResponse.decode(new _m0.Reader(data))
    );
  }

  QueryVaultOfOwnerByPair(
    request: QueryVaultOfOwnerByPairRequest
  ): Promise<QueryVaultOfOwnerByPairResponse> {
    const data = QueryVaultOfOwnerByPairRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.QueryService",
      "QueryVaultOfOwnerByPair",
      data
    );
    return promise.then((data) =>
      QueryVaultOfOwnerByPairResponse.decode(new _m0.Reader(data))
    );
  }

  QueryVaultByProduct(
    request: QueryVaultByProductRequest
  ): Promise<QueryVaultByProductResponse> {
    const data = QueryVaultByProductRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.QueryService",
      "QueryVaultByProduct",
      data
    );
    return promise.then((data) =>
      QueryVaultByProductResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAllVaultByOwner(
    request: QueryAllVaultByOwnerRequest
  ): Promise<QueryAllVaultByOwnerResponse> {
    const data = QueryAllVaultByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.QueryService",
      "QueryAllVaultByOwner",
      data
    );
    return promise.then((data) =>
      QueryAllVaultByOwnerResponse.decode(new _m0.Reader(data))
    );
  }

  QueryTokenMintedAllProductsByPair(
    request: QueryTokenMintedAllProductsByPairRequest
  ): Promise<QueryTokenMintedAllProductsByPairResponse> {
    const data =
      QueryTokenMintedAllProductsByPairRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.QueryService",
      "QueryTokenMintedAllProductsByPair",
      data
    );
    return promise.then((data) =>
      QueryTokenMintedAllProductsByPairResponse.decode(new _m0.Reader(data))
    );
  }

  QueryTokenMintedAllProducts(
    request: QueryTokenMintedAllProductsRequest
  ): Promise<QueryTokenMintedAllProductsResponse> {
    const data = QueryTokenMintedAllProductsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.QueryService",
      "QueryTokenMintedAllProducts",
      data
    );
    return promise.then((data) =>
      QueryTokenMintedAllProductsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryVaultCountByProduct(
    request: QueryVaultCountByProductRequest
  ): Promise<QueryVaultCountByProductResponse> {
    const data = QueryVaultCountByProductRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.QueryService",
      "QueryVaultCountByProduct",
      data
    );
    return promise.then((data) =>
      QueryVaultCountByProductResponse.decode(new _m0.Reader(data))
    );
  }

  QueryVaultCountByProductAndPair(
    request: QueryVaultCountByProductAndPairRequest
  ): Promise<QueryVaultCountByProductAndPairResponse> {
    const data =
      QueryVaultCountByProductAndPairRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.QueryService",
      "QueryVaultCountByProductAndPair",
      data
    );
    return promise.then((data) =>
      QueryVaultCountByProductAndPairResponse.decode(new _m0.Reader(data))
    );
  }

  QueryTotalValueLockedByProductExtendedPair(
    request: QueryTotalValueLockedByProductExtendedPairRequest
  ): Promise<QueryTotalValueLockedByProductExtendedPairResponse> {
    const data =
      QueryTotalValueLockedByProductExtendedPairRequest.encode(
        request
      ).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.QueryService",
      "QueryTotalValueLockedByProductExtendedPair",
      data
    );
    return promise.then((data) =>
      QueryTotalValueLockedByProductExtendedPairResponse.decode(
        new _m0.Reader(data)
      )
    );
  }

  QueryExtendedPairIDByProduct(
    request: QueryExtendedPairIDByProductRequest
  ): Promise<QueryExtendedPairIDByProductResponse> {
    const data = QueryExtendedPairIDByProductRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.QueryService",
      "QueryExtendedPairIDByProduct",
      data
    );
    return promise.then((data) =>
      QueryExtendedPairIDByProductResponse.decode(new _m0.Reader(data))
    );
  }

  QueryStableVaultInfo(
    request: QueryStableVaultInfoRequest
  ): Promise<QueryStableVaultInfoResponse> {
    const data = QueryStableVaultInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.QueryService",
      "QueryStableVaultInfo",
      data
    );
    return promise.then((data) =>
      QueryStableVaultInfoResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAllStableVaults(
    request: QueryAllStableVaultsRequest
  ): Promise<QueryAllStableVaultsResponse> {
    const data = QueryAllStableVaultsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.QueryService",
      "QueryAllStableVaults",
      data
    );
    return promise.then((data) =>
      QueryAllStableVaultsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryStableVaultByProductExtendedPair(
    request: QueryStableVaultByProductExtendedPairRequest
  ): Promise<QueryStableVaultByProductExtendedPairResponse> {
    const data =
      QueryStableVaultByProductExtendedPairRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.QueryService",
      "QueryStableVaultByProductExtendedPair",
      data
    );
    return promise.then((data) =>
      QueryStableVaultByProductExtendedPairResponse.decode(new _m0.Reader(data))
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
