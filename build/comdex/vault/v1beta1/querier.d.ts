import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "comdex.vault.v1beta1";
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
export declare const VaultInfo: {
    encode(message: VaultInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VaultInfo;
    fromJSON(object: any): VaultInfo;
    toJSON(message: VaultInfo): unknown;
    fromPartial(object: DeepPartial<VaultInfo>): VaultInfo;
};
export declare const QueryVaultRequest: {
    encode(message: QueryVaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryVaultRequest;
    fromJSON(object: any): QueryVaultRequest;
    toJSON(message: QueryVaultRequest): unknown;
    fromPartial(object: DeepPartial<QueryVaultRequest>): QueryVaultRequest;
};
export declare const QueryVaultResponse: {
    encode(message: QueryVaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryVaultResponse;
    fromJSON(object: any): QueryVaultResponse;
    toJSON(message: QueryVaultResponse): unknown;
    fromPartial(object: DeepPartial<QueryVaultResponse>): QueryVaultResponse;
};
export declare const QueryVaultsRequest: {
    encode(message: QueryVaultsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryVaultsRequest;
    fromJSON(object: any): QueryVaultsRequest;
    toJSON(message: QueryVaultsRequest): unknown;
    fromPartial(object: DeepPartial<QueryVaultsRequest>): QueryVaultsRequest;
};
export declare const QueryVaultsResponse: {
    encode(message: QueryVaultsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryVaultsResponse;
    fromJSON(object: any): QueryVaultsResponse;
    toJSON(message: QueryVaultsResponse): unknown;
    fromPartial(object: DeepPartial<QueryVaultsResponse>): QueryVaultsResponse;
};
export interface QueryService {
    QueryVault(request: QueryVaultRequest): Promise<QueryVaultResponse>;
    QueryVaults(request: QueryVaultsRequest): Promise<QueryVaultsResponse>;
}
export declare class QueryServiceClientImpl implements QueryService {
    private readonly rpc;
    constructor(rpc: Rpc);
    QueryVault(request: QueryVaultRequest): Promise<QueryVaultResponse>;
    QueryVaults(request: QueryVaultsRequest): Promise<QueryVaultsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
