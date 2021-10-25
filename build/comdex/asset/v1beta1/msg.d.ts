import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "comdex.asset.v1beta1";
export interface MsgAddAssetRequest {
    from: string;
    name: string;
    denom: string;
    decimals: Long;
}
export interface MsgAddAssetResponse {
}
export interface MsgUpdateAssetRequest {
    from: string;
    id: Long;
    name: string;
    denom: string;
    decimals: Long;
}
export interface MsgUpdateAssetResponse {
}
export interface MsgAddPairRequest {
    from: string;
    assetIn: Long;
    assetOut: Long;
    liquidationRatio: string;
}
export interface MsgAddPairResponse {
}
export interface MsgUpdatePairRequest {
    from: string;
    id: Long;
    liquidationRatio: string;
}
export interface MsgUpdatePairResponse {
}
export declare const MsgAddAssetRequest: {
    encode(message: MsgAddAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgAddAssetRequest;
    fromJSON(object: any): MsgAddAssetRequest;
    toJSON(message: MsgAddAssetRequest): unknown;
    fromPartial(object: DeepPartial<MsgAddAssetRequest>): MsgAddAssetRequest;
};
export declare const MsgAddAssetResponse: {
    encode(_: MsgAddAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgAddAssetResponse;
    fromJSON(_: any): MsgAddAssetResponse;
    toJSON(_: MsgAddAssetResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddAssetResponse>): MsgAddAssetResponse;
};
export declare const MsgUpdateAssetRequest: {
    encode(message: MsgUpdateAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateAssetRequest;
    fromJSON(object: any): MsgUpdateAssetRequest;
    toJSON(message: MsgUpdateAssetRequest): unknown;
    fromPartial(object: DeepPartial<MsgUpdateAssetRequest>): MsgUpdateAssetRequest;
};
export declare const MsgUpdateAssetResponse: {
    encode(_: MsgUpdateAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateAssetResponse;
    fromJSON(_: any): MsgUpdateAssetResponse;
    toJSON(_: MsgUpdateAssetResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateAssetResponse>): MsgUpdateAssetResponse;
};
export declare const MsgAddPairRequest: {
    encode(message: MsgAddPairRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgAddPairRequest;
    fromJSON(object: any): MsgAddPairRequest;
    toJSON(message: MsgAddPairRequest): unknown;
    fromPartial(object: DeepPartial<MsgAddPairRequest>): MsgAddPairRequest;
};
export declare const MsgAddPairResponse: {
    encode(_: MsgAddPairResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgAddPairResponse;
    fromJSON(_: any): MsgAddPairResponse;
    toJSON(_: MsgAddPairResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddPairResponse>): MsgAddPairResponse;
};
export declare const MsgUpdatePairRequest: {
    encode(message: MsgUpdatePairRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdatePairRequest;
    fromJSON(object: any): MsgUpdatePairRequest;
    toJSON(message: MsgUpdatePairRequest): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePairRequest>): MsgUpdatePairRequest;
};
export declare const MsgUpdatePairResponse: {
    encode(_: MsgUpdatePairResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdatePairResponse;
    fromJSON(_: any): MsgUpdatePairResponse;
    toJSON(_: MsgUpdatePairResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePairResponse>): MsgUpdatePairResponse;
};
export interface MsgService {
    MsgAddAsset(request: MsgAddAssetRequest): Promise<MsgAddAssetResponse>;
    MsgUpdateAsset(request: MsgUpdateAssetRequest): Promise<MsgUpdateAssetResponse>;
    MsgAddPair(request: MsgAddPairRequest): Promise<MsgAddPairResponse>;
    MsgUpdatePair(request: MsgUpdatePairRequest): Promise<MsgUpdatePairResponse>;
}
export declare class MsgServiceClientImpl implements MsgService {
    private readonly rpc;
    constructor(rpc: Rpc);
    MsgAddAsset(request: MsgAddAssetRequest): Promise<MsgAddAssetResponse>;
    MsgUpdateAsset(request: MsgUpdateAssetRequest): Promise<MsgUpdateAssetResponse>;
    MsgAddPair(request: MsgAddPairRequest): Promise<MsgAddPairResponse>;
    MsgUpdatePair(request: MsgUpdatePairRequest): Promise<MsgUpdatePairResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
