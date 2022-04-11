/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.oracle.v1beta1";

export interface MsgAddMarketRequest {
    from: string;
    symbol: string;
    scriptId: Long;
    id: Long;
    rates: Long;
}

export interface MsgAddMarketResponse {}

export interface MsgUpdateMarketRequest {
    from: string;
    symbol: string;
    scriptId: Long;
    rates: Long;
}

export interface MsgUpdateMarketResponse {}

export interface MsgRemoveMarketForAssetRequest {
    from: string;
    id: Long;
    symbol: string;
}

export interface MsgRemoveMarketForAssetResponse {}

function createBaseMsgAddMarketRequest(): MsgAddMarketRequest {
    return {
        from: "",
        symbol: "",
        scriptId: Long.UZERO,
        id: Long.UZERO,
        rates: Long.UZERO,
    };
}

export const MsgAddMarketRequest = {
    encode(
        message: MsgAddMarketRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        if (!message.scriptId.isZero()) {
            writer.uint32(24).uint64(message.scriptId);
        }
        if (!message.id.isZero()) {
            writer.uint32(32).uint64(message.id);
        }
        if (!message.rates.isZero()) {
            writer.uint32(40).uint64(message.rates);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMarketRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddMarketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.symbol = reader.string();
                    break;
                case 3:
                    message.scriptId = reader.uint64() as Long;
                    break;
                case 4:
                    message.id = reader.uint64() as Long;
                    break;
                case 5:
                    message.rates = reader.uint64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgAddMarketRequest {
        return {
            from: isSet(object.from) ? String(object.from) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            scriptId: isSet(object.scriptId)
                ? Long.fromString(object.scriptId)
                : Long.UZERO,
            id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
            rates: isSet(object.rates) ? Long.fromString(object.rates) : Long.UZERO,
        };
    },

    toJSON(message: MsgAddMarketRequest): unknown {
        const obj: any = {};
        message.from !== undefined && (obj.from = message.from);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.scriptId !== undefined &&
        (obj.scriptId = (message.scriptId || Long.UZERO).toString());
        message.id !== undefined &&
        (obj.id = (message.id || Long.UZERO).toString());
        message.rates !== undefined &&
        (obj.rates = (message.rates || Long.UZERO).toString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MsgAddMarketRequest>, I>>(
        object: I
    ): MsgAddMarketRequest {
        const message = createBaseMsgAddMarketRequest();
        message.from = object.from ?? "";
        message.symbol = object.symbol ?? "";
        message.scriptId =
            object.scriptId !== undefined && object.scriptId !== null
                ? Long.fromValue(object.scriptId)
                : Long.UZERO;
        message.id =
            object.id !== undefined && object.id !== null
                ? Long.fromValue(object.id)
                : Long.UZERO;
        message.rates =
            object.rates !== undefined && object.rates !== null
                ? Long.fromValue(object.rates)
                : Long.UZERO;
        return message;
    },
};

function createBaseMsgAddMarketResponse(): MsgAddMarketResponse {
    return {};
}

export const MsgAddMarketResponse = {
    encode(
        _: MsgAddMarketResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MsgAddMarketResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): MsgAddMarketResponse {
        return {};
    },

    toJSON(_: MsgAddMarketResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MsgAddMarketResponse>, I>>(
        _: I
    ): MsgAddMarketResponse {
        const message = createBaseMsgAddMarketResponse();
        return message;
    },
};

function createBaseMsgUpdateMarketRequest(): MsgUpdateMarketRequest {
    return { from: "", symbol: "", scriptId: Long.UZERO, rates: Long.UZERO };
}

export const MsgUpdateMarketRequest = {
    encode(
        message: MsgUpdateMarketRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        if (!message.scriptId.isZero()) {
            writer.uint32(24).uint64(message.scriptId);
        }
        if (!message.rates.isZero()) {
            writer.uint32(32).uint64(message.rates);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MsgUpdateMarketRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateMarketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.symbol = reader.string();
                    break;
                case 3:
                    message.scriptId = reader.uint64() as Long;
                    break;
                case 4:
                    message.rates = reader.uint64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgUpdateMarketRequest {
        return {
            from: isSet(object.from) ? String(object.from) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            scriptId: isSet(object.scriptId)
                ? Long.fromString(object.scriptId)
                : Long.UZERO,
            rates: isSet(object.rates) ? Long.fromString(object.rates) : Long.UZERO,
        };
    },

    toJSON(message: MsgUpdateMarketRequest): unknown {
        const obj: any = {};
        message.from !== undefined && (obj.from = message.from);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.scriptId !== undefined &&
        (obj.scriptId = (message.scriptId || Long.UZERO).toString());
        message.rates !== undefined &&
        (obj.rates = (message.rates || Long.UZERO).toString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MsgUpdateMarketRequest>, I>>(
        object: I
    ): MsgUpdateMarketRequest {
        const message = createBaseMsgUpdateMarketRequest();
        message.from = object.from ?? "";
        message.symbol = object.symbol ?? "";
        message.scriptId =
            object.scriptId !== undefined && object.scriptId !== null
                ? Long.fromValue(object.scriptId)
                : Long.UZERO;
        message.rates =
            object.rates !== undefined && object.rates !== null
                ? Long.fromValue(object.rates)
                : Long.UZERO;
        return message;
    },
};

function createBaseMsgUpdateMarketResponse(): MsgUpdateMarketResponse {
    return {};
}

export const MsgUpdateMarketResponse = {
    encode(
        _: MsgUpdateMarketResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MsgUpdateMarketResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): MsgUpdateMarketResponse {
        return {};
    },

    toJSON(_: MsgUpdateMarketResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MsgUpdateMarketResponse>, I>>(
        _: I
    ): MsgUpdateMarketResponse {
        const message = createBaseMsgUpdateMarketResponse();
        return message;
    },
};

function createBaseMsgRemoveMarketForAssetRequest(): MsgRemoveMarketForAssetRequest {
    return { from: "", id: Long.UZERO, symbol: "" };
}

export const MsgRemoveMarketForAssetRequest = {
    encode(
        message: MsgRemoveMarketForAssetRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.id.isZero()) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.symbol !== "") {
            writer.uint32(26).string(message.symbol);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MsgRemoveMarketForAssetRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveMarketForAssetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64() as Long;
                    break;
                case 3:
                    message.symbol = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgRemoveMarketForAssetRequest {
        return {
            from: isSet(object.from) ? String(object.from) : "",
            id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
        };
    },

    toJSON(message: MsgRemoveMarketForAssetRequest): unknown {
        const obj: any = {};
        message.from !== undefined && (obj.from = message.from);
        message.id !== undefined &&
        (obj.id = (message.id || Long.UZERO).toString());
        message.symbol !== undefined && (obj.symbol = message.symbol);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MsgRemoveMarketForAssetRequest>, I>>(
        object: I
    ): MsgRemoveMarketForAssetRequest {
        const message = createBaseMsgRemoveMarketForAssetRequest();
        message.from = object.from ?? "";
        message.id =
            object.id !== undefined && object.id !== null
                ? Long.fromValue(object.id)
                : Long.UZERO;
        message.symbol = object.symbol ?? "";
        return message;
    },
};

function createBaseMsgRemoveMarketForAssetResponse(): MsgRemoveMarketForAssetResponse {
    return {};
}

export const MsgRemoveMarketForAssetResponse = {
    encode(
        _: MsgRemoveMarketForAssetResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MsgRemoveMarketForAssetResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveMarketForAssetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): MsgRemoveMarketForAssetResponse {
        return {};
    },

    toJSON(_: MsgRemoveMarketForAssetResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MsgRemoveMarketForAssetResponse>, I>>(
        _: I
    ): MsgRemoveMarketForAssetResponse {
        const message = createBaseMsgRemoveMarketForAssetResponse();
        return message;
    },
};

export interface MsgService {
    MsgAddMarket(request: MsgAddMarketRequest): Promise<MsgAddMarketResponse>;
    MsgUpdateMarket(
        request: MsgUpdateMarketRequest
    ): Promise<MsgUpdateMarketResponse>;
    MsgRemoveMarketForAsset(
        request: MsgRemoveMarketForAssetRequest
    ): Promise<MsgRemoveMarketForAssetResponse>;
}

export class MsgServiceClientImpl implements MsgService {
    private readonly rpc: Rpc;
    constructor(rpc: Rpc) {
        this.rpc = rpc;
        this.MsgAddMarket = this.MsgAddMarket.bind(this);
        this.MsgUpdateMarket = this.MsgUpdateMarket.bind(this);
        this.MsgRemoveMarketForAsset = this.MsgRemoveMarketForAsset.bind(this);
    }
    MsgAddMarket(request: MsgAddMarketRequest): Promise<MsgAddMarketResponse> {
        const data = MsgAddMarketRequest.encode(request).finish();
        const promise = this.rpc.request(
            "comdex.oracle.v1beta1.MsgService",
            "MsgAddMarket",
            data
        );
        return promise.then((data) =>
            MsgAddMarketResponse.decode(new _m0.Reader(data))
        );
    }

    MsgUpdateMarket(
        request: MsgUpdateMarketRequest
    ): Promise<MsgUpdateMarketResponse> {
        const data = MsgUpdateMarketRequest.encode(request).finish();
        const promise = this.rpc.request(
            "comdex.oracle.v1beta1.MsgService",
            "MsgUpdateMarket",
            data
        );
        return promise.then((data) =>
            MsgUpdateMarketResponse.decode(new _m0.Reader(data))
        );
    }

    MsgRemoveMarketForAsset(
        request: MsgRemoveMarketForAssetRequest
    ): Promise<MsgRemoveMarketForAssetResponse> {
        const data = MsgRemoveMarketForAssetRequest.encode(request).finish();
        const promise = this.rpc.request(
            "comdex.oracle.v1beta1.MsgService",
            "MsgRemoveMarketForAsset",
            data
        );
        return promise.then((data) =>
            MsgRemoveMarketForAssetResponse.decode(new _m0.Reader(data))
        );
    }
}

interface Rpc {
    request(
        service: string,
        method: string,
        data: Uint8Array
    ): Promise<Uint8Array>;
}

type Builtin =
    | Date
    | Function
    | Uint8Array
    | string
    | number
    | boolean
    | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Long
        ? string | number | Long
        : T extends Array<infer U>
            ? Array<DeepPartial<U>>
            : T extends ReadonlyArray<infer U>
                ? ReadonlyArray<DeepPartial<U>>
                : T extends {}
                    ? { [K in keyof T]?: DeepPartial<T[K]> }
                    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
    Exclude<keyof I, KeysOfUnion<P>>,
    never
    >;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
