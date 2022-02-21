/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
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
  id: Long;
}

export interface QueryVaultResponse {
  vaultInfo?: VaultInfo;
}

export interface QueryVaultsRequest {
  owner: string;
  pagination?: PageRequest;
}

export interface QueryVaultsResponse {
  vaultsInfo: VaultInfo[];
  pagination?: PageResponse;
}

export interface QueryAllVaultsRequest {
  pagination?: PageRequest;
}

export interface QueryAllVaultsResponse {
  vaultsInfo: VaultInfo[];
  pagination?: PageResponse;
}

export interface QueryTotalCollateralRequest {}

export interface QueryTotalCollateralResponse {
  collaterals: Coin[];
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
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      pairId: isSet(object.pairId)
        ? Long.fromString(object.pairId)
        : Long.UZERO,
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
  return { id: Long.UZERO };
}

export const QueryVaultRequest = {
  encode(
    message: QueryVaultRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
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
          message.id = reader.uint64() as Long;
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
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryVaultRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVaultRequest>, I>>(
    object: I
  ): QueryVaultRequest {
    const message = createBaseQueryVaultRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryVaultResponse(): QueryVaultResponse {
  return { vaultInfo: undefined };
}

export const QueryVaultResponse = {
  encode(
    message: QueryVaultResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vaultInfo !== undefined) {
      VaultInfo.encode(message.vaultInfo, writer.uint32(10).fork()).ldelim();
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
          message.vaultInfo = VaultInfo.decode(reader, reader.uint32());
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
      vaultInfo: isSet(object.vaultInfo)
        ? VaultInfo.fromJSON(object.vaultInfo)
        : undefined,
    };
  },

  toJSON(message: QueryVaultResponse): unknown {
    const obj: any = {};
    message.vaultInfo !== undefined &&
      (obj.vaultInfo = message.vaultInfo
        ? VaultInfo.toJSON(message.vaultInfo)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVaultResponse>, I>>(
    object: I
  ): QueryVaultResponse {
    const message = createBaseQueryVaultResponse();
    message.vaultInfo =
      object.vaultInfo !== undefined && object.vaultInfo !== null
        ? VaultInfo.fromPartial(object.vaultInfo)
        : undefined;
    return message;
  },
};

function createBaseQueryVaultsRequest(): QueryVaultsRequest {
  return { owner: "", pagination: undefined };
}

export const QueryVaultsRequest = {
  encode(
    message: QueryVaultsRequest,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultsRequest();
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

  fromJSON(object: any): QueryVaultsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryVaultsRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVaultsRequest>, I>>(
    object: I
  ): QueryVaultsRequest {
    const message = createBaseQueryVaultsRequest();
    message.owner = object.owner ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryVaultsResponse(): QueryVaultsResponse {
  return { vaultsInfo: [], pagination: undefined };
}

export const QueryVaultsResponse = {
  encode(
    message: QueryVaultsResponse,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultsResponse();
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

  fromJSON(object: any): QueryVaultsResponse {
    return {
      vaultsInfo: Array.isArray(object?.vaultsInfo)
        ? object.vaultsInfo.map((e: any) => VaultInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryVaultsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<QueryVaultsResponse>, I>>(
    object: I
  ): QueryVaultsResponse {
    const message = createBaseQueryVaultsResponse();
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
  return { vaultsInfo: [], pagination: undefined };
}

export const QueryAllVaultsResponse = {
  encode(
    message: QueryAllVaultsResponse,
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
  ): QueryAllVaultsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVaultsResponse();
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

  fromJSON(object: any): QueryAllVaultsResponse {
    return {
      vaultsInfo: Array.isArray(object?.vaultsInfo)
        ? object.vaultsInfo.map((e: any) => VaultInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllVaultsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<QueryAllVaultsResponse>, I>>(
    object: I
  ): QueryAllVaultsResponse {
    const message = createBaseQueryAllVaultsResponse();
    message.vaultsInfo =
      object.vaultsInfo?.map((e) => VaultInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryTotalCollateralRequest(): QueryTotalCollateralRequest {
  return {};
}

export const QueryTotalCollateralRequest = {
  encode(
    _: QueryTotalCollateralRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalCollateralRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalCollateralRequest();
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

  fromJSON(_: any): QueryTotalCollateralRequest {
    return {};
  },

  toJSON(_: QueryTotalCollateralRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalCollateralRequest>, I>>(
    _: I
  ): QueryTotalCollateralRequest {
    const message = createBaseQueryTotalCollateralRequest();
    return message;
  },
};

function createBaseQueryTotalCollateralResponse(): QueryTotalCollateralResponse {
  return { collaterals: [] };
}

export const QueryTotalCollateralResponse = {
  encode(
    message: QueryTotalCollateralResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.collaterals) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalCollateralResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collaterals.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalCollateralResponse {
    return {
      collaterals: Array.isArray(object?.collaterals)
        ? object.collaterals.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryTotalCollateralResponse): unknown {
    const obj: any = {};
    if (message.collaterals) {
      obj.collaterals = message.collaterals.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.collaterals = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalCollateralResponse>, I>>(
    object: I
  ): QueryTotalCollateralResponse {
    const message = createBaseQueryTotalCollateralResponse();
    message.collaterals =
      object.collaterals?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

export interface QueryService {
  QueryVault(request: QueryVaultRequest): Promise<QueryVaultResponse>;
  QueryVaults(request: QueryVaultsRequest): Promise<QueryVaultsResponse>;
  QueryAllVaults(
    request: QueryAllVaultsRequest
  ): Promise<QueryAllVaultsResponse>;
  QueryTotalCollaterals(
    request: QueryTotalCollateralRequest
  ): Promise<QueryTotalCollateralResponse>;
}

export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.QueryVault = this.QueryVault.bind(this);
    this.QueryVaults = this.QueryVaults.bind(this);
    this.QueryAllVaults = this.QueryAllVaults.bind(this);
    this.QueryTotalCollaterals = this.QueryTotalCollaterals.bind(this);
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

  QueryVaults(request: QueryVaultsRequest): Promise<QueryVaultsResponse> {
    const data = QueryVaultsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.QueryService",
      "QueryVaults",
      data
    );
    return promise.then((data) =>
      QueryVaultsResponse.decode(new _m0.Reader(data))
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

  QueryTotalCollaterals(
    request: QueryTotalCollateralRequest
  ): Promise<QueryTotalCollateralResponse> {
    const data = QueryTotalCollateralRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.QueryService",
      "QueryTotalCollaterals",
      data
    );
    return promise.then((data) =>
      QueryTotalCollateralResponse.decode(new _m0.Reader(data))
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
