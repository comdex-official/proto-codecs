import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "comdex.bandoracle.v1beta1";
export interface BandoraclePacketData {
    noData?: NoData | undefined;
}
export interface NoData {
}
export declare const BandoraclePacketData: {
    encode(message: BandoraclePacketData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BandoraclePacketData;
    fromJSON(object: any): BandoraclePacketData;
    toJSON(message: BandoraclePacketData): unknown;
    fromPartial<I extends {
        noData?: {} | undefined;
    } & {
        noData?: ({} & {} & Record<Exclude<keyof I["noData"], never>, never>) | undefined;
    } & Record<Exclude<keyof I, "noData">, never>>(object: I): BandoraclePacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NoData;
    fromJSON(_: any): NoData;
    toJSON(_: NoData): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): NoData;
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
