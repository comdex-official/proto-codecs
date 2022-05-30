import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "comdex.vault.v1beta1";
export interface EventCreateVault {
    sender: string;
    collateralType: string;
}
export interface EventDepositCollateral {
    owner: string;
    collateralType: string;
    collateral?: Coin;
}
export interface EventWithdrawCollateral {
    owner: string;
    collateralType: string;
    collateral?: Coin;
}
export interface EventDrawDebt {
    owner: string;
    collateralType: string;
    debt?: Coin;
}
export interface EventRepayDebt {
    owner: string;
    collateralType: string;
    debt?: Coin;
}
export interface EventCloseVault {
    owner: string;
    collateralType: string;
}
export declare const EventCreateVault: {
    encode(message: EventCreateVault, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventCreateVault;
    fromJSON(object: any): EventCreateVault;
    toJSON(message: EventCreateVault): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        collateralType?: string | undefined;
    } & {
        sender?: string | undefined;
        collateralType?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventCreateVault>, never>>(object: I): EventCreateVault;
};
export declare const EventDepositCollateral: {
    encode(message: EventDepositCollateral, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventDepositCollateral;
    fromJSON(object: any): EventDepositCollateral;
    toJSON(message: EventDepositCollateral): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        collateralType?: string | undefined;
        collateral?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        owner?: string | undefined;
        collateralType?: string | undefined;
        collateral?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["collateral"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof EventDepositCollateral>, never>>(object: I): EventDepositCollateral;
};
export declare const EventWithdrawCollateral: {
    encode(message: EventWithdrawCollateral, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventWithdrawCollateral;
    fromJSON(object: any): EventWithdrawCollateral;
    toJSON(message: EventWithdrawCollateral): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        collateralType?: string | undefined;
        collateral?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        owner?: string | undefined;
        collateralType?: string | undefined;
        collateral?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["collateral"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof EventWithdrawCollateral>, never>>(object: I): EventWithdrawCollateral;
};
export declare const EventDrawDebt: {
    encode(message: EventDrawDebt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventDrawDebt;
    fromJSON(object: any): EventDrawDebt;
    toJSON(message: EventDrawDebt): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        collateralType?: string | undefined;
        debt?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        owner?: string | undefined;
        collateralType?: string | undefined;
        debt?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["debt"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof EventDrawDebt>, never>>(object: I): EventDrawDebt;
};
export declare const EventRepayDebt: {
    encode(message: EventRepayDebt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventRepayDebt;
    fromJSON(object: any): EventRepayDebt;
    toJSON(message: EventRepayDebt): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        collateralType?: string | undefined;
        debt?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        owner?: string | undefined;
        collateralType?: string | undefined;
        debt?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["debt"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof EventRepayDebt>, never>>(object: I): EventRepayDebt;
};
export declare const EventCloseVault: {
    encode(message: EventCloseVault, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventCloseVault;
    fromJSON(object: any): EventCloseVault;
    toJSON(message: EventCloseVault): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        collateralType?: string | undefined;
    } & {
        owner?: string | undefined;
        collateralType?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventCloseVault>, never>>(object: I): EventCloseVault;
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
