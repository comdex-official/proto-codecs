import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { LiquidationWhiteListing } from "../../../comdex/liquidationsV2/v1beta1/liquidate";
export declare const protobufPackage = "comdex.liquidationsV2.v1beta1";
export interface WhitelistLiquidationProposal {
    title: string;
    description: string;
    whitelisting?: LiquidationWhiteListing;
}
export declare const WhitelistLiquidationProposal: {
    encode(message: WhitelistLiquidationProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WhitelistLiquidationProposal;
    fromJSON(object: any): WhitelistLiquidationProposal;
    toJSON(message: WhitelistLiquidationProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        whitelisting?: {
            appId?: string | number | Long.Long | undefined;
            initiator?: boolean | undefined;
            isDutchActivated?: boolean | undefined;
            dutchAuctionParam?: {
                premium?: string | undefined;
                discount?: string | undefined;
                decrementFactor?: string | undefined;
            } | undefined;
            isEnglishActivated?: boolean | undefined;
            englishAuctionParam?: {
                decrementFactor?: string | undefined;
            } | undefined;
            keeeperIncentive?: string | undefined;
        } | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        whitelisting?: ({
            appId?: string | number | Long.Long | undefined;
            initiator?: boolean | undefined;
            isDutchActivated?: boolean | undefined;
            dutchAuctionParam?: {
                premium?: string | undefined;
                discount?: string | undefined;
                decrementFactor?: string | undefined;
            } | undefined;
            isEnglishActivated?: boolean | undefined;
            englishAuctionParam?: {
                decrementFactor?: string | undefined;
            } | undefined;
            keeeperIncentive?: string | undefined;
        } & {
            appId?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["whitelisting"]["appId"], keyof Long.Long>, never>) | undefined;
            initiator?: boolean | undefined;
            isDutchActivated?: boolean | undefined;
            dutchAuctionParam?: ({
                premium?: string | undefined;
                discount?: string | undefined;
                decrementFactor?: string | undefined;
            } & {
                premium?: string | undefined;
                discount?: string | undefined;
                decrementFactor?: string | undefined;
            } & Record<Exclude<keyof I["whitelisting"]["dutchAuctionParam"], keyof import("../../../comdex/liquidationsV2/v1beta1/liquidate").DutchAuctionParam>, never>) | undefined;
            isEnglishActivated?: boolean | undefined;
            englishAuctionParam?: ({
                decrementFactor?: string | undefined;
            } & {
                decrementFactor?: string | undefined;
            } & Record<Exclude<keyof I["whitelisting"]["englishAuctionParam"], "decrementFactor">, never>) | undefined;
            keeeperIncentive?: string | undefined;
        } & Record<Exclude<keyof I["whitelisting"], keyof LiquidationWhiteListing>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof WhitelistLiquidationProposal>, never>>(object: I): WhitelistLiquidationProposal;
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
