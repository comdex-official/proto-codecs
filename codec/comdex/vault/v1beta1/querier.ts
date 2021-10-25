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

const baseVaultInfo: object = {
  id: Long.UZERO,
  pairId: Long.UZERO,
  owner: "",
  collateralizationRatio: "",
};

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
    const message = { ...baseVaultInfo } as VaultInfo;
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
    const message = { ...baseVaultInfo } as VaultInfo;
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    } else {
      message.id = Long.UZERO;
    }
    if (object.pairId !== undefined && object.pairId !== null) {
      message.pairId = Long.fromString(object.pairId);
    } else {
      message.pairId = Long.UZERO;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromJSON(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.debt !== undefined && object.debt !== null) {
      message.debt = Coin.fromJSON(object.debt);
    } else {
      message.debt = undefined;
    }
    if (
      object.collateralizationRatio !== undefined &&
      object.collateralizationRatio !== null
    ) {
      message.collateralizationRatio = String(object.collateralizationRatio);
    } else {
      message.collateralizationRatio = "";
    }
    return message;
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

  fromPartial(object: DeepPartial<VaultInfo>): VaultInfo {
    const message = { ...baseVaultInfo } as VaultInfo;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long;
    } else {
      message.id = Long.UZERO;
    }
    if (object.pairId !== undefined && object.pairId !== null) {
      message.pairId = object.pairId as Long;
    } else {
      message.pairId = Long.UZERO;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromPartial(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.debt !== undefined && object.debt !== null) {
      message.debt = Coin.fromPartial(object.debt);
    } else {
      message.debt = undefined;
    }
    if (
      object.collateralizationRatio !== undefined &&
      object.collateralizationRatio !== null
    ) {
      message.collateralizationRatio = object.collateralizationRatio;
    } else {
      message.collateralizationRatio = "";
    }
    return message;
  },
};

const baseQueryVaultRequest: object = { id: Long.UZERO };

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
    const message = { ...baseQueryVaultRequest } as QueryVaultRequest;
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
    const message = { ...baseQueryVaultRequest } as QueryVaultRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    } else {
      message.id = Long.UZERO;
    }
    return message;
  },

  toJSON(message: QueryVaultRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryVaultRequest>): QueryVaultRequest {
    const message = { ...baseQueryVaultRequest } as QueryVaultRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long;
    } else {
      message.id = Long.UZERO;
    }
    return message;
  },
};

const baseQueryVaultResponse: object = {};

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
    const message = { ...baseQueryVaultResponse } as QueryVaultResponse;
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
    const message = { ...baseQueryVaultResponse } as QueryVaultResponse;
    if (object.vaultInfo !== undefined && object.vaultInfo !== null) {
      message.vaultInfo = VaultInfo.fromJSON(object.vaultInfo);
    } else {
      message.vaultInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryVaultResponse): unknown {
    const obj: any = {};
    message.vaultInfo !== undefined &&
      (obj.vaultInfo = message.vaultInfo
        ? VaultInfo.toJSON(message.vaultInfo)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryVaultResponse>): QueryVaultResponse {
    const message = { ...baseQueryVaultResponse } as QueryVaultResponse;
    if (object.vaultInfo !== undefined && object.vaultInfo !== null) {
      message.vaultInfo = VaultInfo.fromPartial(object.vaultInfo);
    } else {
      message.vaultInfo = undefined;
    }
    return message;
  },
};

const baseQueryVaultsRequest: object = { owner: "" };

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
    const message = { ...baseQueryVaultsRequest } as QueryVaultsRequest;
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
    const message = { ...baseQueryVaultsRequest } as QueryVaultsRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
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

  fromPartial(object: DeepPartial<QueryVaultsRequest>): QueryVaultsRequest {
    const message = { ...baseQueryVaultsRequest } as QueryVaultsRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryVaultsResponse: object = {};

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
    const message = { ...baseQueryVaultsResponse } as QueryVaultsResponse;
    message.vaultsInfo = [];
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
    const message = { ...baseQueryVaultsResponse } as QueryVaultsResponse;
    message.vaultsInfo = [];
    if (object.vaultsInfo !== undefined && object.vaultsInfo !== null) {
      for (const e of object.vaultsInfo) {
        message.vaultsInfo.push(VaultInfo.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
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

  fromPartial(object: DeepPartial<QueryVaultsResponse>): QueryVaultsResponse {
    const message = { ...baseQueryVaultsResponse } as QueryVaultsResponse;
    message.vaultsInfo = [];
    if (object.vaultsInfo !== undefined && object.vaultsInfo !== null) {
      for (const e of object.vaultsInfo) {
        message.vaultsInfo.push(VaultInfo.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

export interface QueryService {
  QueryVault(request: QueryVaultRequest): Promise<QueryVaultResponse>;
  QueryVaults(request: QueryVaultsRequest): Promise<QueryVaultsResponse>;
}

export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.QueryVault = this.QueryVault.bind(this);
    this.QueryVaults = this.QueryVaults.bind(this);
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
