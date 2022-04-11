/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.oracle.v1beta1";

export interface UpdateAdminProposal {
    title: string;
    description: string;
    address: string;
}

function createBaseUpdateAdminProposal(): UpdateAdminProposal {
    return { title: "", description: "", address: "" };
}

export const UpdateAdminProposal = {
    encode(
        message: UpdateAdminProposal,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.address !== "") {
            writer.uint32(26).string(message.address);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAdminProposal {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateAdminProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateAdminProposal {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            address: isSet(object.address) ? String(object.address) : "",
        };
    },

    toJSON(message: UpdateAdminProposal): unknown {
        const obj: any = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
        (obj.description = message.description);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<UpdateAdminProposal>, I>>(
        object: I
    ): UpdateAdminProposal {
        const message = createBaseUpdateAdminProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.address = object.address ?? "";
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