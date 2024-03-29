import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "comdex.oracle.v1beta1";
export interface UpdateAdminProposal {
    title: string;
    description: string;
    address: string;
}
export declare const UpdateAdminProposal: {
    encode(message: UpdateAdminProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAdminProposal;
    fromJSON(object: any): UpdateAdminProposal;
    toJSON(message: UpdateAdminProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        address?: string | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        address?: string | undefined;
    } & Record<Exclude<keyof I, keyof UpdateAdminProposal>, never>>(object: I): UpdateAdminProposal;
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
