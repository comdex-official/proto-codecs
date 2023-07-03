import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "comdex.nft.v1beta1";
/** Collection */
export interface Collection {
    denom?: Denom;
    nfts: NFT[];
}
export interface IDCollection {
    denomId: string;
    nftIds: string[];
}
export interface Denom {
    id: string;
    symbol: string;
    name: string;
    description: string;
    previewUri: string;
    schema: string;
    sender: string;
    creator: string;
}
/** ASSET or NFT */
export interface NFT {
    id: string;
    metadata?: Metadata;
    data: string;
    owner: string;
    transferable: boolean;
    extensible: boolean;
    createdAt?: Date;
    nsfw: boolean;
    royaltyShare: string;
}
export interface Metadata {
    name: string;
    description: string;
    mediaUri: string;
    previewUri: string;
}
export interface Owner {
    address: string;
    idCollections: IDCollection[];
}
export declare const Collection: {
    encode(message: Collection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Collection;
    fromJSON(object: any): Collection;
    toJSON(message: Collection): unknown;
    fromPartial<I extends {
        denom?: {
            id?: string | undefined;
            symbol?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            previewUri?: string | undefined;
            schema?: string | undefined;
            sender?: string | undefined;
            creator?: string | undefined;
        } | undefined;
        nfts?: {
            id?: string | undefined;
            metadata?: {
                name?: string | undefined;
                description?: string | undefined;
                mediaUri?: string | undefined;
                previewUri?: string | undefined;
            } | undefined;
            data?: string | undefined;
            owner?: string | undefined;
            transferable?: boolean | undefined;
            extensible?: boolean | undefined;
            createdAt?: Date | undefined;
            nsfw?: boolean | undefined;
            royaltyShare?: string | undefined;
        }[] | undefined;
    } & {
        denom?: ({
            id?: string | undefined;
            symbol?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            previewUri?: string | undefined;
            schema?: string | undefined;
            sender?: string | undefined;
            creator?: string | undefined;
        } & {
            id?: string | undefined;
            symbol?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            previewUri?: string | undefined;
            schema?: string | undefined;
            sender?: string | undefined;
            creator?: string | undefined;
        } & Record<Exclude<keyof I["denom"], keyof Denom>, never>) | undefined;
        nfts?: ({
            id?: string | undefined;
            metadata?: {
                name?: string | undefined;
                description?: string | undefined;
                mediaUri?: string | undefined;
                previewUri?: string | undefined;
            } | undefined;
            data?: string | undefined;
            owner?: string | undefined;
            transferable?: boolean | undefined;
            extensible?: boolean | undefined;
            createdAt?: Date | undefined;
            nsfw?: boolean | undefined;
            royaltyShare?: string | undefined;
        }[] & ({
            id?: string | undefined;
            metadata?: {
                name?: string | undefined;
                description?: string | undefined;
                mediaUri?: string | undefined;
                previewUri?: string | undefined;
            } | undefined;
            data?: string | undefined;
            owner?: string | undefined;
            transferable?: boolean | undefined;
            extensible?: boolean | undefined;
            createdAt?: Date | undefined;
            nsfw?: boolean | undefined;
            royaltyShare?: string | undefined;
        } & {
            id?: string | undefined;
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
            } & Record<Exclude<keyof I["nfts"][number]["metadata"], keyof Metadata>, never>) | undefined;
            data?: string | undefined;
            owner?: string | undefined;
            transferable?: boolean | undefined;
            extensible?: boolean | undefined;
            createdAt?: Date | undefined;
            nsfw?: boolean | undefined;
            royaltyShare?: string | undefined;
        } & Record<Exclude<keyof I["nfts"][number], keyof NFT>, never>)[] & Record<Exclude<keyof I["nfts"], keyof {
            id?: string | undefined;
            metadata?: {
                name?: string | undefined;
                description?: string | undefined;
                mediaUri?: string | undefined;
                previewUri?: string | undefined;
            } | undefined;
            data?: string | undefined;
            owner?: string | undefined;
            transferable?: boolean | undefined;
            extensible?: boolean | undefined;
            createdAt?: Date | undefined;
            nsfw?: boolean | undefined;
            royaltyShare?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Collection>, never>>(object: I): Collection;
};
export declare const IDCollection: {
    encode(message: IDCollection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDCollection;
    fromJSON(object: any): IDCollection;
    toJSON(message: IDCollection): unknown;
    fromPartial<I extends {
        denomId?: string | undefined;
        nftIds?: string[] | undefined;
    } & {
        denomId?: string | undefined;
        nftIds?: (string[] & string[] & Record<Exclude<keyof I["nftIds"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof IDCollection>, never>>(object: I): IDCollection;
};
export declare const Denom: {
    encode(message: Denom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Denom;
    fromJSON(object: any): Denom;
    toJSON(message: Denom): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        symbol?: string | undefined;
        name?: string | undefined;
        description?: string | undefined;
        previewUri?: string | undefined;
        schema?: string | undefined;
        sender?: string | undefined;
        creator?: string | undefined;
    } & {
        id?: string | undefined;
        symbol?: string | undefined;
        name?: string | undefined;
        description?: string | undefined;
        previewUri?: string | undefined;
        schema?: string | undefined;
        sender?: string | undefined;
        creator?: string | undefined;
    } & Record<Exclude<keyof I, keyof Denom>, never>>(object: I): Denom;
};
export declare const NFT: {
    encode(message: NFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NFT;
    fromJSON(object: any): NFT;
    toJSON(message: NFT): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        metadata?: {
            name?: string | undefined;
            description?: string | undefined;
            mediaUri?: string | undefined;
            previewUri?: string | undefined;
        } | undefined;
        data?: string | undefined;
        owner?: string | undefined;
        transferable?: boolean | undefined;
        extensible?: boolean | undefined;
        createdAt?: Date | undefined;
        nsfw?: boolean | undefined;
        royaltyShare?: string | undefined;
    } & {
        id?: string | undefined;
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
        owner?: string | undefined;
        transferable?: boolean | undefined;
        extensible?: boolean | undefined;
        createdAt?: Date | undefined;
        nsfw?: boolean | undefined;
        royaltyShare?: string | undefined;
    } & Record<Exclude<keyof I, keyof NFT>, never>>(object: I): NFT;
};
export declare const Metadata: {
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        description?: string | undefined;
        mediaUri?: string | undefined;
        previewUri?: string | undefined;
    } & {
        name?: string | undefined;
        description?: string | undefined;
        mediaUri?: string | undefined;
        previewUri?: string | undefined;
    } & Record<Exclude<keyof I, keyof Metadata>, never>>(object: I): Metadata;
};
export declare const Owner: {
    encode(message: Owner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Owner;
    fromJSON(object: any): Owner;
    toJSON(message: Owner): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        idCollections?: {
            denomId?: string | undefined;
            nftIds?: string[] | undefined;
        }[] | undefined;
    } & {
        address?: string | undefined;
        idCollections?: ({
            denomId?: string | undefined;
            nftIds?: string[] | undefined;
        }[] & ({
            denomId?: string | undefined;
            nftIds?: string[] | undefined;
        } & {
            denomId?: string | undefined;
            nftIds?: (string[] & string[] & Record<Exclude<keyof I["idCollections"][number]["nftIds"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["idCollections"][number], keyof IDCollection>, never>)[] & Record<Exclude<keyof I["idCollections"], keyof {
            denomId?: string | undefined;
            nftIds?: string[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Owner>, never>>(object: I): Owner;
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
