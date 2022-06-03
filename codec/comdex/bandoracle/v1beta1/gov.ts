/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MsgFetchPriceData } from "./tx";

export const protobufPackage = "comdex.bandoracle.v1beta1";

export interface FetchPriceProposal {
  title: string;
  description: string;
  FetchPrice?: MsgFetchPriceData;
}

function createBaseFetchPriceProposal(): FetchPriceProposal {
  return { title: "", description: "", FetchPrice: undefined };
}

export const FetchPriceProposal = {
  encode(
    message: FetchPriceProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.FetchPrice !== undefined) {
      MsgFetchPriceData.encode(
        message.FetchPrice,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchPriceProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchPriceProposal();
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
          message.FetchPrice = MsgFetchPriceData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FetchPriceProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      FetchPrice: isSet(object.FetchPrice)
        ? MsgFetchPriceData.fromJSON(object.FetchPrice)
        : undefined,
    };
  },

  toJSON(message: FetchPriceProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.FetchPrice !== undefined &&
      (obj.FetchPrice = message.FetchPrice
        ? MsgFetchPriceData.toJSON(message.FetchPrice)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FetchPriceProposal>, I>>(
    object: I
  ): FetchPriceProposal {
    const message = createBaseFetchPriceProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.FetchPrice =
      object.FetchPrice !== undefined && object.FetchPrice !== null
        ? MsgFetchPriceData.fromPartial(object.FetchPrice)
        : undefined;
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
