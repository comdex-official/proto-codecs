import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "comdex.vault.v1beta1";
export interface Vault {
    id: Long;
    pairId: Long;
    owner: string;
    amountIn: string;
    amountOut: string;
}
export declare const Vault: {
    encode(message: Vault, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Vault;
    fromJSON(object: any): Vault;
    toJSON(message: Vault): unknown;
    fromPartial(object: DeepPartial<Vault>): Vault;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
