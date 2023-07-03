import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Collection } from "./comdex/nft/v1beta1/denom";
export declare const protobufPackage = "comdex.nft.v1beta1";
/** GenesisState defines the nft module's genesis state. */
export interface GenesisState {
    collections: Collection[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        collections?: {
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
        }[] | undefined;
    } & {
        collections?: ({
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
        }[] & ({
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
            } & Record<Exclude<keyof I["collections"][number]["denom"], keyof import("./comdex/nft/v1beta1/denom").Denom>, never>) | undefined;
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
                } & Record<Exclude<keyof I["collections"][number]["nfts"][number]["metadata"], keyof import("./comdex/nft/v1beta1/denom").Metadata>, never>) | undefined;
                data?: string | undefined;
                owner?: string | undefined;
                transferable?: boolean | undefined;
                extensible?: boolean | undefined;
                createdAt?: Date | undefined;
                nsfw?: boolean | undefined;
                royaltyShare?: string | undefined;
            } & Record<Exclude<keyof I["collections"][number]["nfts"][number], keyof import("./comdex/nft/v1beta1/denom").NFT>, never>)[] & Record<Exclude<keyof I["collections"][number]["nfts"], keyof {
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
        } & Record<Exclude<keyof I["collections"][number], keyof Collection>, never>)[] & Record<Exclude<keyof I["collections"], keyof {
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
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "collections">, never>>(object: I): GenesisState;
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
