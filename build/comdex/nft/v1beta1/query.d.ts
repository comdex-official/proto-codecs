import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "./cosmos/base/query/v1beta1/pagination";
import { Collection, Denom, NFT } from "./comdex/nft/v1beta1/denom";
export declare const protobufPackage = "comdex.nft.v1beta1";
export interface QueryCollectionRequest {
    denomId: string;
    pagination?: PageRequest;
}
export interface QueryCollectionResponse {
    collection?: Collection;
    pagination?: PageResponse;
}
export interface QueryDenomRequest {
    denomId: string;
}
export interface QueryDenomResponse {
    denom?: Denom;
}
export interface QueryDenomsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    owner: string;
}
export interface QueryDenomsResponse {
    denoms: Denom[];
    pagination?: PageResponse;
}
export interface QueryNFTRequest {
    denomId: string;
    id: string;
}
export interface QueryNFTResponse {
    nft?: NFT;
}
export interface QueryOwnerNFTsRequest {
    denomId: string;
    owner: string;
    pagination?: PageRequest;
}
export interface QueryOwnerNFTsResponse {
    owner: string;
    collections: OwnerNFTCollection[];
    pagination?: PageResponse;
}
export interface QuerySupplyRequest {
    denomId: string;
    owner: string;
}
export interface QuerySupplyResponse {
    amount: Long;
}
export interface OwnerNFTCollection {
    denom?: Denom;
    nfts: NFT[];
}
export declare const QueryCollectionRequest: {
    encode(message: QueryCollectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionRequest;
    fromJSON(object: any): QueryCollectionRequest;
    toJSON(message: QueryCollectionRequest): unknown;
    fromPartial<I extends {
        denomId?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        denomId?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["pagination"]["offset"], keyof Long.Long>, never>) | undefined;
            limit?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["pagination"]["limit"], keyof Long.Long>, never>) | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryCollectionRequest>, never>>(object: I): QueryCollectionRequest;
};
export declare const QueryCollectionResponse: {
    encode(message: QueryCollectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionResponse;
    fromJSON(object: any): QueryCollectionResponse;
    toJSON(message: QueryCollectionResponse): unknown;
    fromPartial<I extends {
        collection?: {
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
        } | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        collection?: ({
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
            } & Record<Exclude<keyof I["collection"]["denom"], keyof Denom>, never>) | undefined;
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
                } & Record<Exclude<keyof I["collection"]["nfts"][number]["metadata"], keyof import("./comdex/nft/v1beta1/denom").Metadata>, never>) | undefined;
                data?: string | undefined;
                owner?: string | undefined;
                transferable?: boolean | undefined;
                extensible?: boolean | undefined;
                createdAt?: Date | undefined;
                nsfw?: boolean | undefined;
                royaltyShare?: string | undefined;
            } & Record<Exclude<keyof I["collection"]["nfts"][number], keyof NFT>, never>)[] & Record<Exclude<keyof I["collection"]["nfts"], keyof {
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
        } & Record<Exclude<keyof I["collection"], keyof Collection>, never>) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long.Long | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["pagination"]["total"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryCollectionResponse>, never>>(object: I): QueryCollectionResponse;
};
export declare const QueryDenomRequest: {
    encode(message: QueryDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomRequest;
    fromJSON(object: any): QueryDenomRequest;
    toJSON(message: QueryDenomRequest): unknown;
    fromPartial<I extends {
        denomId?: string | undefined;
    } & {
        denomId?: string | undefined;
    } & Record<Exclude<keyof I, "denomId">, never>>(object: I): QueryDenomRequest;
};
export declare const QueryDenomResponse: {
    encode(message: QueryDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomResponse;
    fromJSON(object: any): QueryDenomResponse;
    toJSON(message: QueryDenomResponse): unknown;
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
    } & Record<Exclude<keyof I, "denom">, never>>(object: I): QueryDenomResponse;
};
export declare const QueryDenomsRequest: {
    encode(message: QueryDenomsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsRequest;
    fromJSON(object: any): QueryDenomsRequest;
    toJSON(message: QueryDenomsRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        owner?: string | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["pagination"]["offset"], keyof Long.Long>, never>) | undefined;
            limit?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["pagination"]["limit"], keyof Long.Long>, never>) | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
        owner?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryDenomsRequest>, never>>(object: I): QueryDenomsRequest;
};
export declare const QueryDenomsResponse: {
    encode(message: QueryDenomsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsResponse;
    fromJSON(object: any): QueryDenomsResponse;
    toJSON(message: QueryDenomsResponse): unknown;
    fromPartial<I extends {
        denoms?: {
            id?: string | undefined;
            symbol?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            previewUri?: string | undefined;
            schema?: string | undefined;
            sender?: string | undefined;
            creator?: string | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        denoms?: ({
            id?: string | undefined;
            symbol?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            previewUri?: string | undefined;
            schema?: string | undefined;
            sender?: string | undefined;
            creator?: string | undefined;
        }[] & ({
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
        } & Record<Exclude<keyof I["denoms"][number], keyof Denom>, never>)[] & Record<Exclude<keyof I["denoms"], keyof {
            id?: string | undefined;
            symbol?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            previewUri?: string | undefined;
            schema?: string | undefined;
            sender?: string | undefined;
            creator?: string | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long.Long | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["pagination"]["total"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryDenomsResponse>, never>>(object: I): QueryDenomsResponse;
};
export declare const QueryNFTRequest: {
    encode(message: QueryNFTRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTRequest;
    fromJSON(object: any): QueryNFTRequest;
    toJSON(message: QueryNFTRequest): unknown;
    fromPartial<I extends {
        denomId?: string | undefined;
        id?: string | undefined;
    } & {
        denomId?: string | undefined;
        id?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryNFTRequest>, never>>(object: I): QueryNFTRequest;
};
export declare const QueryNFTResponse: {
    encode(message: QueryNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTResponse;
    fromJSON(object: any): QueryNFTResponse;
    toJSON(message: QueryNFTResponse): unknown;
    fromPartial<I extends {
        nft?: {
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
        } | undefined;
    } & {
        nft?: ({
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
            } & Record<Exclude<keyof I["nft"]["metadata"], keyof import("./comdex/nft/v1beta1/denom").Metadata>, never>) | undefined;
            data?: string | undefined;
            owner?: string | undefined;
            transferable?: boolean | undefined;
            extensible?: boolean | undefined;
            createdAt?: Date | undefined;
            nsfw?: boolean | undefined;
            royaltyShare?: string | undefined;
        } & Record<Exclude<keyof I["nft"], keyof NFT>, never>) | undefined;
    } & Record<Exclude<keyof I, "nft">, never>>(object: I): QueryNFTResponse;
};
export declare const QueryOwnerNFTsRequest: {
    encode(message: QueryOwnerNFTsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerNFTsRequest;
    fromJSON(object: any): QueryOwnerNFTsRequest;
    toJSON(message: QueryOwnerNFTsRequest): unknown;
    fromPartial<I extends {
        denomId?: string | undefined;
        owner?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        denomId?: string | undefined;
        owner?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["pagination"]["offset"], keyof Long.Long>, never>) | undefined;
            limit?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["pagination"]["limit"], keyof Long.Long>, never>) | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryOwnerNFTsRequest>, never>>(object: I): QueryOwnerNFTsRequest;
};
export declare const QueryOwnerNFTsResponse: {
    encode(message: QueryOwnerNFTsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerNFTsResponse;
    fromJSON(object: any): QueryOwnerNFTsResponse;
    toJSON(message: QueryOwnerNFTsResponse): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
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
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        owner?: string | undefined;
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
            } & Record<Exclude<keyof I["collections"][number]["denom"], keyof Denom>, never>) | undefined;
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
            } & Record<Exclude<keyof I["collections"][number]["nfts"][number], keyof NFT>, never>)[] & Record<Exclude<keyof I["collections"][number]["nfts"], keyof {
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
        } & Record<Exclude<keyof I["collections"][number], keyof OwnerNFTCollection>, never>)[] & Record<Exclude<keyof I["collections"], keyof {
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
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long.Long | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["pagination"]["total"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryOwnerNFTsResponse>, never>>(object: I): QueryOwnerNFTsResponse;
};
export declare const QuerySupplyRequest: {
    encode(message: QuerySupplyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest;
    fromJSON(object: any): QuerySupplyRequest;
    toJSON(message: QuerySupplyRequest): unknown;
    fromPartial<I extends {
        denomId?: string | undefined;
        owner?: string | undefined;
    } & {
        denomId?: string | undefined;
        owner?: string | undefined;
    } & Record<Exclude<keyof I, keyof QuerySupplyRequest>, never>>(object: I): QuerySupplyRequest;
};
export declare const QuerySupplyResponse: {
    encode(message: QuerySupplyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse;
    fromJSON(object: any): QuerySupplyResponse;
    toJSON(message: QuerySupplyResponse): unknown;
    fromPartial<I extends {
        amount?: string | number | Long.Long | undefined;
    } & {
        amount?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["amount"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, "amount">, never>>(object: I): QuerySupplyResponse;
};
export declare const OwnerNFTCollection: {
    encode(message: OwnerNFTCollection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OwnerNFTCollection;
    fromJSON(object: any): OwnerNFTCollection;
    toJSON(message: OwnerNFTCollection): unknown;
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
            } & Record<Exclude<keyof I["nfts"][number]["metadata"], keyof import("./comdex/nft/v1beta1/denom").Metadata>, never>) | undefined;
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
    } & Record<Exclude<keyof I, keyof OwnerNFTCollection>, never>>(object: I): OwnerNFTCollection;
};
export interface Query {
    Collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
    Denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
    Denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse>;
    NFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
    OwnerNFTs(request: QueryOwnerNFTsRequest): Promise<QueryOwnerNFTsResponse>;
    Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
    Denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
    Denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse>;
    NFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
    OwnerNFTs(request: QueryOwnerNFTsRequest): Promise<QueryOwnerNFTsResponse>;
    Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
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
