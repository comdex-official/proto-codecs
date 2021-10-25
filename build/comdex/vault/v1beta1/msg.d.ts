import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "comdex.vault.v1beta1";
export interface MsgCreateRequest {
    from: string;
    pairId: Long;
    amountIn: string;
    amountOut: string;
}
export interface MsgCreateResponse {
}
export interface MsgDepositRequest {
    from: string;
    id: Long;
    amount: string;
}
export interface MsgDepositResponse {
}
export interface MsgWithdrawRequest {
    from: string;
    id: Long;
    amount: string;
}
export interface MsgWithdrawResponse {
}
export interface MsgDrawRequest {
    from: string;
    id: Long;
    amount: string;
}
export interface MsgDrawResponse {
}
export interface MsgRepayRequest {
    from: string;
    id: Long;
    amount: string;
}
export interface MsgRepayResponse {
}
export interface MsgCloseRequest {
    from: string;
    id: Long;
}
export interface MsgCloseResponse {
}
export declare const MsgCreateRequest: {
    encode(message: MsgCreateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreateRequest;
    fromJSON(object: any): MsgCreateRequest;
    toJSON(message: MsgCreateRequest): unknown;
    fromPartial(object: DeepPartial<MsgCreateRequest>): MsgCreateRequest;
};
export declare const MsgCreateResponse: {
    encode(_: MsgCreateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreateResponse;
    fromJSON(_: any): MsgCreateResponse;
    toJSON(_: MsgCreateResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateResponse>): MsgCreateResponse;
};
export declare const MsgDepositRequest: {
    encode(message: MsgDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDepositRequest;
    fromJSON(object: any): MsgDepositRequest;
    toJSON(message: MsgDepositRequest): unknown;
    fromPartial(object: DeepPartial<MsgDepositRequest>): MsgDepositRequest;
};
export declare const MsgDepositResponse: {
    encode(_: MsgDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDepositResponse;
    fromJSON(_: any): MsgDepositResponse;
    toJSON(_: MsgDepositResponse): unknown;
    fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse;
};
export declare const MsgWithdrawRequest: {
    encode(message: MsgWithdrawRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgWithdrawRequest;
    fromJSON(object: any): MsgWithdrawRequest;
    toJSON(message: MsgWithdrawRequest): unknown;
    fromPartial(object: DeepPartial<MsgWithdrawRequest>): MsgWithdrawRequest;
};
export declare const MsgWithdrawResponse: {
    encode(_: MsgWithdrawResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgWithdrawResponse;
    fromJSON(_: any): MsgWithdrawResponse;
    toJSON(_: MsgWithdrawResponse): unknown;
    fromPartial(_: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse;
};
export declare const MsgDrawRequest: {
    encode(message: MsgDrawRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDrawRequest;
    fromJSON(object: any): MsgDrawRequest;
    toJSON(message: MsgDrawRequest): unknown;
    fromPartial(object: DeepPartial<MsgDrawRequest>): MsgDrawRequest;
};
export declare const MsgDrawResponse: {
    encode(_: MsgDrawResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDrawResponse;
    fromJSON(_: any): MsgDrawResponse;
    toJSON(_: MsgDrawResponse): unknown;
    fromPartial(_: DeepPartial<MsgDrawResponse>): MsgDrawResponse;
};
export declare const MsgRepayRequest: {
    encode(message: MsgRepayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgRepayRequest;
    fromJSON(object: any): MsgRepayRequest;
    toJSON(message: MsgRepayRequest): unknown;
    fromPartial(object: DeepPartial<MsgRepayRequest>): MsgRepayRequest;
};
export declare const MsgRepayResponse: {
    encode(_: MsgRepayResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgRepayResponse;
    fromJSON(_: any): MsgRepayResponse;
    toJSON(_: MsgRepayResponse): unknown;
    fromPartial(_: DeepPartial<MsgRepayResponse>): MsgRepayResponse;
};
export declare const MsgCloseRequest: {
    encode(message: MsgCloseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCloseRequest;
    fromJSON(object: any): MsgCloseRequest;
    toJSON(message: MsgCloseRequest): unknown;
    fromPartial(object: DeepPartial<MsgCloseRequest>): MsgCloseRequest;
};
export declare const MsgCloseResponse: {
    encode(_: MsgCloseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCloseResponse;
    fromJSON(_: any): MsgCloseResponse;
    toJSON(_: MsgCloseResponse): unknown;
    fromPartial(_: DeepPartial<MsgCloseResponse>): MsgCloseResponse;
};
export interface MsgService {
    MsgCreate(request: MsgCreateRequest): Promise<MsgCreateResponse>;
    MsgDeposit(request: MsgDepositRequest): Promise<MsgDepositResponse>;
    MsgWithdraw(request: MsgWithdrawRequest): Promise<MsgWithdrawResponse>;
    MsgDraw(request: MsgDrawRequest): Promise<MsgDrawResponse>;
    MsgRepay(request: MsgRepayRequest): Promise<MsgRepayResponse>;
    MsgClose(request: MsgCloseRequest): Promise<MsgCloseResponse>;
}
export declare class MsgServiceClientImpl implements MsgService {
    private readonly rpc;
    constructor(rpc: Rpc);
    MsgCreate(request: MsgCreateRequest): Promise<MsgCreateResponse>;
    MsgDeposit(request: MsgDepositRequest): Promise<MsgDepositResponse>;
    MsgWithdraw(request: MsgWithdrawRequest): Promise<MsgWithdrawResponse>;
    MsgDraw(request: MsgDrawRequest): Promise<MsgDrawResponse>;
    MsgRepay(request: MsgRepayRequest): Promise<MsgRepayResponse>;
    MsgClose(request: MsgCloseRequest): Promise<MsgCloseResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
