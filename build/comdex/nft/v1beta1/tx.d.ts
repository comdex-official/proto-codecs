import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Metadata } from "./comdex/nft/v1beta1/denom";
export declare const protobufPackage = "comdex.nft.v1beta1";
export interface MsgCreateDenom {
    id: string;
    symbol: string;
    name: string;
    description: string;
    previewUri: string;
    schema: string;
    sender: string;
}
export interface MsgCreateDenomResponse {
}
export interface MsgUpdateDenom {
    id: string;
    name: string;
    description: string;
    previewUri: string;
    sender: string;
}
export interface MsgUpdateDenomResponse {
}
export interface MsgTransferDenom {
    id: string;
    sender: string;
    recipient: string;
}
export interface MsgTransferDenomResponse {
}
export interface MsgMintNFT {
    id: string;
    denomId: string;
    metadata?: Metadata;
    data: string;
    transferable: boolean;
    extensible: boolean;
    nsfw: boolean;
    royaltyShare: string;
    sender: string;
    recipient: string;
}
export interface MsgMintNFTResponse {
}
export interface MsgTransferNFT {
    id: string;
    denomId: string;
    sender: string;
    recipient: string;
}
export interface MsgTransferNFTResponse {
}
export interface MsgBurnNFT {
    id: string;
    denomId: string;
    sender: string;
}
export interface MsgBurnNFTResponse {
}
export declare const MsgCreateDenom: {
    encode(message: MsgCreateDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenom;
    fromJSON(object: any): MsgCreateDenom;
    toJSON(message: MsgCreateDenom): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        symbol?: string | undefined;
        name?: string | undefined;
        description?: string | undefined;
        previewUri?: string | undefined;
        schema?: string | undefined;
        sender?: string | undefined;
    } & {
        id?: string | undefined;
        symbol?: string | undefined;
        name?: string | undefined;
        description?: string | undefined;
        previewUri?: string | undefined;
        schema?: string | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreateDenom>, never>>(object: I): MsgCreateDenom;
};
export declare const MsgCreateDenomResponse: {
    encode(_: MsgCreateDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenomResponse;
    fromJSON(_: any): MsgCreateDenomResponse;
    toJSON(_: MsgCreateDenomResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgCreateDenomResponse;
};
export declare const MsgUpdateDenom: {
    encode(message: MsgUpdateDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDenom;
    fromJSON(object: any): MsgUpdateDenom;
    toJSON(message: MsgUpdateDenom): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        name?: string | undefined;
        description?: string | undefined;
        previewUri?: string | undefined;
        sender?: string | undefined;
    } & {
        id?: string | undefined;
        name?: string | undefined;
        description?: string | undefined;
        previewUri?: string | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgUpdateDenom>, never>>(object: I): MsgUpdateDenom;
};
export declare const MsgUpdateDenomResponse: {
    encode(_: MsgUpdateDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDenomResponse;
    fromJSON(_: any): MsgUpdateDenomResponse;
    toJSON(_: MsgUpdateDenomResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateDenomResponse;
};
export declare const MsgTransferDenom: {
    encode(message: MsgTransferDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferDenom;
    fromJSON(object: any): MsgTransferDenom;
    toJSON(message: MsgTransferDenom): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        sender?: string | undefined;
        recipient?: string | undefined;
    } & {
        id?: string | undefined;
        sender?: string | undefined;
        recipient?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgTransferDenom>, never>>(object: I): MsgTransferDenom;
};
export declare const MsgTransferDenomResponse: {
    encode(_: MsgTransferDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferDenomResponse;
    fromJSON(_: any): MsgTransferDenomResponse;
    toJSON(_: MsgTransferDenomResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgTransferDenomResponse;
};
export declare const MsgMintNFT: {
    encode(message: MsgMintNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFT;
    fromJSON(object: any): MsgMintNFT;
    toJSON(message: MsgMintNFT): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        denomId?: string | undefined;
        metadata?: {
            name?: string | undefined;
            description?: string | undefined;
            mediaUri?: string | undefined;
            previewUri?: string | undefined;
        } | undefined;
        data?: string | undefined;
        transferable?: boolean | undefined;
        extensible?: boolean | undefined;
        nsfw?: boolean | undefined;
        royaltyShare?: string | undefined;
        sender?: string | undefined;
        recipient?: string | undefined;
    } & {
        id?: string | undefined;
        denomId?: string | undefined;
        metadata?: ({
            name?: string | undefined;
            description?: string | undefined;
            mediaUri?: string | undefined;
            previewUri?: string | undefined;
        } & {
            name?: string | undefined;
            description?: string | undefined;
            mediaUri?: string | undefined;
            previewUri?: string | undefined;
        } & Record<Exclude<keyof I["metadata"], keyof Metadata>, never>) | undefined;
        data?: string | undefined;
        transferable?: boolean | undefined;
        extensible?: boolean | undefined;
        nsfw?: boolean | undefined;
        royaltyShare?: string | undefined;
        sender?: string | undefined;
        recipient?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgMintNFT>, never>>(object: I): MsgMintNFT;
};
export declare const MsgMintNFTResponse: {
    encode(_: MsgMintNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFTResponse;
    fromJSON(_: any): MsgMintNFTResponse;
    toJSON(_: MsgMintNFTResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgMintNFTResponse;
};
export declare const MsgTransferNFT: {
    encode(message: MsgTransferNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferNFT;
    fromJSON(object: any): MsgTransferNFT;
    toJSON(message: MsgTransferNFT): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        denomId?: string | undefined;
        sender?: string | undefined;
        recipient?: string | undefined;
    } & {
        id?: string | undefined;
        denomId?: string | undefined;
        sender?: string | undefined;
        recipient?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgTransferNFT>, never>>(object: I): MsgTransferNFT;
};
export declare const MsgTransferNFTResponse: {
    encode(_: MsgTransferNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferNFTResponse;
    fromJSON(_: any): MsgTransferNFTResponse;
    toJSON(_: MsgTransferNFTResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgTransferNFTResponse;
};
export declare const MsgBurnNFT: {
    encode(message: MsgBurnNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFT;
    fromJSON(object: any): MsgBurnNFT;
    toJSON(message: MsgBurnNFT): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        denomId?: string | undefined;
        sender?: string | undefined;
    } & {
        id?: string | undefined;
        denomId?: string | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgBurnNFT>, never>>(object: I): MsgBurnNFT;
};
export declare const MsgBurnNFTResponse: {
    encode(_: MsgBurnNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFTResponse;
    fromJSON(_: any): MsgBurnNFTResponse;
    toJSON(_: MsgBurnNFTResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgBurnNFTResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
    UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse>;
    TransferDenom(request: MsgTransferDenom): Promise<MsgTransferDenomResponse>;
    MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
    TransferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
    UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse>;
    TransferDenom(request: MsgTransferDenom): Promise<MsgTransferDenomResponse>;
    MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
    TransferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse>;
    BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
