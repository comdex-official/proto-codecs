import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "comdex.liquidity.v1beta1";
export interface AllUserAddressesArray {
    userAddresses: string[];
}
export interface UserPoolsData {
    userAddress: string;
    userPools: UserPools[];
}
export interface UserPools {
    poolId: Long;
    bondedPoolCoin: string;
    unbondedPoolCoin: string;
    unbondingCoins: UserPoolUnbondingTokens[];
}
export interface UserPoolUnbondingTokens {
    isUnbondingPoolCoin: string;
    unbondingStartTime?: Date;
    unbondingEndTime?: Date;
}
export declare const AllUserAddressesArray: {
    encode(message: AllUserAddressesArray, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AllUserAddressesArray;
    fromJSON(object: any): AllUserAddressesArray;
    toJSON(message: AllUserAddressesArray): unknown;
    fromPartial<I extends {
        userAddresses?: string[] | undefined;
    } & {
        userAddresses?: (string[] & string[] & Record<Exclude<keyof I["userAddresses"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "userAddresses">, never>>(object: I): AllUserAddressesArray;
};
export declare const UserPoolsData: {
    encode(message: UserPoolsData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserPoolsData;
    fromJSON(object: any): UserPoolsData;
    toJSON(message: UserPoolsData): unknown;
    fromPartial<I extends {
        userAddress?: string | undefined;
        userPools?: {
            poolId?: string | number | Long.Long | undefined;
            bondedPoolCoin?: string | undefined;
            unbondedPoolCoin?: string | undefined;
            unbondingCoins?: {
                isUnbondingPoolCoin?: string | undefined;
                unbondingStartTime?: Date | undefined;
                unbondingEndTime?: Date | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        userAddress?: string | undefined;
        userPools?: ({
            poolId?: string | number | Long.Long | undefined;
            bondedPoolCoin?: string | undefined;
            unbondedPoolCoin?: string | undefined;
            unbondingCoins?: {
                isUnbondingPoolCoin?: string | undefined;
                unbondingStartTime?: Date | undefined;
                unbondingEndTime?: Date | undefined;
            }[] | undefined;
        }[] & ({
            poolId?: string | number | Long.Long | undefined;
            bondedPoolCoin?: string | undefined;
            unbondedPoolCoin?: string | undefined;
            unbondingCoins?: {
                isUnbondingPoolCoin?: string | undefined;
                unbondingStartTime?: Date | undefined;
                unbondingEndTime?: Date | undefined;
            }[] | undefined;
        } & {
            poolId?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["userPools"][number]["poolId"], keyof Long.Long>, never>) | undefined;
            bondedPoolCoin?: string | undefined;
            unbondedPoolCoin?: string | undefined;
            unbondingCoins?: ({
                isUnbondingPoolCoin?: string | undefined;
                unbondingStartTime?: Date | undefined;
                unbondingEndTime?: Date | undefined;
            }[] & ({
                isUnbondingPoolCoin?: string | undefined;
                unbondingStartTime?: Date | undefined;
                unbondingEndTime?: Date | undefined;
            } & {
                isUnbondingPoolCoin?: string | undefined;
                unbondingStartTime?: Date | undefined;
                unbondingEndTime?: Date | undefined;
            } & Record<Exclude<keyof I["userPools"][number]["unbondingCoins"][number], keyof UserPoolUnbondingTokens>, never>)[] & Record<Exclude<keyof I["userPools"][number]["unbondingCoins"], keyof {
                isUnbondingPoolCoin?: string | undefined;
                unbondingStartTime?: Date | undefined;
                unbondingEndTime?: Date | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["userPools"][number], keyof UserPools>, never>)[] & Record<Exclude<keyof I["userPools"], keyof {
            poolId?: string | number | Long.Long | undefined;
            bondedPoolCoin?: string | undefined;
            unbondedPoolCoin?: string | undefined;
            unbondingCoins?: {
                isUnbondingPoolCoin?: string | undefined;
                unbondingStartTime?: Date | undefined;
                unbondingEndTime?: Date | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof UserPoolsData>, never>>(object: I): UserPoolsData;
};
export declare const UserPools: {
    encode(message: UserPools, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserPools;
    fromJSON(object: any): UserPools;
    toJSON(message: UserPools): unknown;
    fromPartial<I extends {
        poolId?: string | number | Long.Long | undefined;
        bondedPoolCoin?: string | undefined;
        unbondedPoolCoin?: string | undefined;
        unbondingCoins?: {
            isUnbondingPoolCoin?: string | undefined;
            unbondingStartTime?: Date | undefined;
            unbondingEndTime?: Date | undefined;
        }[] | undefined;
    } & {
        poolId?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["poolId"], keyof Long.Long>, never>) | undefined;
        bondedPoolCoin?: string | undefined;
        unbondedPoolCoin?: string | undefined;
        unbondingCoins?: ({
            isUnbondingPoolCoin?: string | undefined;
            unbondingStartTime?: Date | undefined;
            unbondingEndTime?: Date | undefined;
        }[] & ({
            isUnbondingPoolCoin?: string | undefined;
            unbondingStartTime?: Date | undefined;
            unbondingEndTime?: Date | undefined;
        } & {
            isUnbondingPoolCoin?: string | undefined;
            unbondingStartTime?: Date | undefined;
            unbondingEndTime?: Date | undefined;
        } & Record<Exclude<keyof I["unbondingCoins"][number], keyof UserPoolUnbondingTokens>, never>)[] & Record<Exclude<keyof I["unbondingCoins"], keyof {
            isUnbondingPoolCoin?: string | undefined;
            unbondingStartTime?: Date | undefined;
            unbondingEndTime?: Date | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof UserPools>, never>>(object: I): UserPools;
};
export declare const UserPoolUnbondingTokens: {
    encode(message: UserPoolUnbondingTokens, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserPoolUnbondingTokens;
    fromJSON(object: any): UserPoolUnbondingTokens;
    toJSON(message: UserPoolUnbondingTokens): unknown;
    fromPartial<I extends {
        isUnbondingPoolCoin?: string | undefined;
        unbondingStartTime?: Date | undefined;
        unbondingEndTime?: Date | undefined;
    } & {
        isUnbondingPoolCoin?: string | undefined;
        unbondingStartTime?: Date | undefined;
        unbondingEndTime?: Date | undefined;
    } & Record<Exclude<keyof I, keyof UserPoolUnbondingTokens>, never>>(object: I): UserPoolUnbondingTokens;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};