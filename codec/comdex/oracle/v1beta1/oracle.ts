/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.oracle.v1beta1";

export interface Market {
    symbol: string;
    scriptId: Long;
    rates: Long;
}

function createBaseMarket(): Market {
    return { symbol: "", scriptId: Long.UZERO, rates: Long.UZERO };
}

export const Market = {
    encode(
        message: Market,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.symbol !== "") {
            writer.uint32(10).string(message.symbol);
        }
        if (!message.scriptId.isZero()) {
            writer.uint32(16).uint64(message.scriptId);
        }
        if (!message.rates.isZero()) {
            writer.uint32(24).uint64(message.rates);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Market {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.symbol = reader.string();
                    break;
                case 2:
                    message.scriptId = reader.uint64() as Long;
                    break;
                case 3:
                    message.rates = reader.uint64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Market {
        return {
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            scriptId: isSet(object.scriptId)
                ? Long.fromString(object.scriptId)
                : Long.UZERO,
            rates: isSet(object.rates) ? Long.fromString(object.rates) : Long.UZERO,
        };
    },

    toJSON(message: Market): unknown {
        const obj: any = {};
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.scriptId !== undefined &&
        (obj.scriptId = (message.scriptId || Long.UZERO).toString());
        message.rates !== undefined &&
        (obj.rates = (message.rates || Long.UZERO).toString());
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Market>, I>>(object: I): Market {
        const message = createBaseMarket();
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