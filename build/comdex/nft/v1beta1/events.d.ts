import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "comdex.nft.v1beta1";
/** EventCreateDenom is emitted on Denom Creation */
export interface EventCreateDenom {
    id: string;
    symbol: string;
    name: string;
    creator: string;
}
/** EventUpdateDenom is emitted on Denom Update */
export interface EventUpdateDenom {
    id: string;
    symbol: string;
    name: string;
    creator: string;
}
/** EventTransferDenom is emitted on Denom Transfer */
export interface EventTransferDenom {
    id: string;
    symbol: string;
    sender: string;
    recipient: string;
}
/** EventMintNFT is emitted on Mint */
export interface EventMintNFT {
    denomId: string;
    id: string;
    uri: string;
    owner: string;
}
/** EventTransferNFT is emitted on Transfer */
export interface EventTransferNFT {
    denomId: string;
    id: string;
    sender: string;
    recipient: string;
}
/** EventBurnNFT is emitted on Burn */
export interface EventBurnNFT {
    denomId: string;
    id: string;
    owner: string;
}
export declare const EventCreateDenom: {
    encode(message: EventCreateDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateDenom;
    fromJSON(object: any): EventCreateDenom;
    toJSON(message: EventCreateDenom): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        symbol?: string | undefined;
        name?: string | undefined;
        creator?: string | undefined;
    } & {
        id?: string | undefined;
        symbol?: string | undefined;
        name?: string | undefined;
        creator?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventCreateDenom>, never>>(object: I): EventCreateDenom;
};
export declare const EventUpdateDenom: {
    encode(message: EventUpdateDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateDenom;
    fromJSON(object: any): EventUpdateDenom;
    toJSON(message: EventUpdateDenom): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        symbol?: string | undefined;
        name?: string | undefined;
        creator?: string | undefined;
    } & {
        id?: string | undefined;
        symbol?: string | undefined;
        name?: string | undefined;
        creator?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventUpdateDenom>, never>>(object: I): EventUpdateDenom;
};
export declare const EventTransferDenom: {
    encode(message: EventTransferDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTransferDenom;
    fromJSON(object: any): EventTransferDenom;
    toJSON(message: EventTransferDenom): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        symbol?: string | undefined;
        sender?: string | undefined;
        recipient?: string | undefined;
    } & {
        id?: string | undefined;
        symbol?: string | undefined;
        sender?: string | undefined;
        recipient?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventTransferDenom>, never>>(object: I): EventTransferDenom;
};
export declare const EventMintNFT: {
    encode(message: EventMintNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMintNFT;
    fromJSON(object: any): EventMintNFT;
    toJSON(message: EventMintNFT): unknown;
    fromPartial<I extends {
        denomId?: string | undefined;
        id?: string | undefined;
        uri?: string | undefined;
        owner?: string | undefined;
    } & {
        denomId?: string | undefined;
        id?: string | undefined;
        uri?: string | undefined;
        owner?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventMintNFT>, never>>(object: I): EventMintNFT;
};
export declare const EventTransferNFT: {
    encode(message: EventTransferNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTransferNFT;
    fromJSON(object: any): EventTransferNFT;
    toJSON(message: EventTransferNFT): unknown;
    fromPartial<I extends {
        denomId?: string | undefined;
        id?: string | undefined;
        sender?: string | undefined;
        recipient?: string | undefined;
    } & {
        denomId?: string | undefined;
        id?: string | undefined;
        sender?: string | undefined;
        recipient?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventTransferNFT>, never>>(object: I): EventTransferNFT;
};
export declare const EventBurnNFT: {
    encode(message: EventBurnNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBurnNFT;
    fromJSON(object: any): EventBurnNFT;
    toJSON(message: EventBurnNFT): unknown;
    fromPartial<I extends {
        denomId?: string | undefined;
        id?: string | undefined;
        owner?: string | undefined;
    } & {
        denomId?: string | undefined;
        id?: string | undefined;
        owner?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventBurnNFT>, never>>(object: I): EventBurnNFT;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
