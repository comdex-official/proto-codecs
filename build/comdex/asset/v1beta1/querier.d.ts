import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Asset } from "../../../comdex/asset/v1beta1/asset";
import { Params } from "../../../comdex/asset/v1beta1/params";
export declare const protobufPackage = "comdex.asset.v1beta1";
export interface QueryAssetsRequest {
    pagination?: PageRequest;
}
export interface QueryAssetsResponse {
    assets: Asset[];
    pagination?: PageResponse;
}
export interface QueryAssetRequest {
    id: Long;
}
export interface QueryAssetResponse {
    asset?: Asset;
}
export interface PairInfo {
    id: Long;
    assetIn: Long;
    denomIn: string;
    assetOut: Long;
    denomOut: string;
    liquidationRatio: string;
}
export interface QueryPairsRequest {
    pagination?: PageRequest;
}
export interface QueryPairsResponse {
    pairsInfo: PairInfo[];
    pagination?: PageResponse;
}
export interface QueryPairRequest {
    id: Long;
}
export interface QueryPairResponse {
    pairInfo?: PairInfo;
}
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    params?: Params;
}
export declare const QueryAssetsRequest: {
    encode(message: QueryAssetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryAssetsRequest;
    fromJSON(object: any): QueryAssetsRequest;
    toJSON(message: QueryAssetsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAssetsRequest>): QueryAssetsRequest;
};
export declare const QueryAssetsResponse: {
    encode(message: QueryAssetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryAssetsResponse;
    fromJSON(object: any): QueryAssetsResponse;
    toJSON(message: QueryAssetsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAssetsResponse>): QueryAssetsResponse;
};
export declare const QueryAssetRequest: {
    encode(message: QueryAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryAssetRequest;
    fromJSON(object: any): QueryAssetRequest;
    toJSON(message: QueryAssetRequest): unknown;
    fromPartial(object: DeepPartial<QueryAssetRequest>): QueryAssetRequest;
};
export declare const QueryAssetResponse: {
    encode(message: QueryAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryAssetResponse;
    fromJSON(object: any): QueryAssetResponse;
    toJSON(message: QueryAssetResponse): unknown;
    fromPartial(object: DeepPartial<QueryAssetResponse>): QueryAssetResponse;
};
export declare const PairInfo: {
    encode(message: PairInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PairInfo;
    fromJSON(object: any): PairInfo;
    toJSON(message: PairInfo): unknown;
    fromPartial(object: DeepPartial<PairInfo>): PairInfo;
};
export declare const QueryPairsRequest: {
    encode(message: QueryPairsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPairsRequest;
    fromJSON(object: any): QueryPairsRequest;
    toJSON(message: QueryPairsRequest): unknown;
    fromPartial(object: DeepPartial<QueryPairsRequest>): QueryPairsRequest;
};
export declare const QueryPairsResponse: {
    encode(message: QueryPairsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPairsResponse;
    fromJSON(object: any): QueryPairsResponse;
    toJSON(message: QueryPairsResponse): unknown;
    fromPartial(object: DeepPartial<QueryPairsResponse>): QueryPairsResponse;
};
export declare const QueryPairRequest: {
    encode(message: QueryPairRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPairRequest;
    fromJSON(object: any): QueryPairRequest;
    toJSON(message: QueryPairRequest): unknown;
    fromPartial(object: DeepPartial<QueryPairRequest>): QueryPairRequest;
};
export declare const QueryPairResponse: {
    encode(message: QueryPairResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPairResponse;
    fromJSON(object: any): QueryPairResponse;
    toJSON(message: QueryPairResponse): unknown;
    fromPartial(object: DeepPartial<QueryPairResponse>): QueryPairResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export interface QueryService {
    QueryAssets(request: QueryAssetsRequest): Promise<QueryAssetsResponse>;
    QueryAsset(request: QueryAssetRequest): Promise<QueryAssetResponse>;
    QueryPairs(request: QueryPairsRequest): Promise<QueryPairsResponse>;
    QueryPair(request: QueryPairRequest): Promise<QueryPairResponse>;
    QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryServiceClientImpl implements QueryService {
    private readonly rpc;
    constructor(rpc: Rpc);
    QueryAssets(request: QueryAssetsRequest): Promise<QueryAssetsResponse>;
    QueryAsset(request: QueryAssetRequest): Promise<QueryAssetResponse>;
    QueryPairs(request: QueryPairsRequest): Promise<QueryPairsResponse>;
    QueryPair(request: QueryPairRequest): Promise<QueryPairResponse>;
    QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
