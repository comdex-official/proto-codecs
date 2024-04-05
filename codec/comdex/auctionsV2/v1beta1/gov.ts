/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { AuctionParams } from "../../../comdex/auctionsV2/v1beta1/bid";

export const protobufPackage = "comdex.auctionsV2.v1beta1";

export interface DutchAutoBidParamsProposal {
  title: string;
  description: string;
  auctionParams?: AuctionParams;
}

function createBaseDutchAutoBidParamsProposal(): DutchAutoBidParamsProposal {
  return { title: "", description: "", auctionParams: undefined };
}

export const DutchAutoBidParamsProposal = {
  encode(message: DutchAutoBidParamsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.auctionParams !== undefined) {
      AuctionParams.encode(message.auctionParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DutchAutoBidParamsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDutchAutoBidParamsProposal();
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
          message.auctionParams = AuctionParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DutchAutoBidParamsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      auctionParams: isSet(object.auctionParams) ? AuctionParams.fromJSON(object.auctionParams) : undefined,
    };
  },

  toJSON(message: DutchAutoBidParamsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.auctionParams !== undefined &&
      (obj.auctionParams = message.auctionParams ? AuctionParams.toJSON(message.auctionParams) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DutchAutoBidParamsProposal>, I>>(base?: I): DutchAutoBidParamsProposal {
    return DutchAutoBidParamsProposal.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DutchAutoBidParamsProposal>, I>>(object: I): DutchAutoBidParamsProposal {
    const message = createBaseDutchAutoBidParamsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.auctionParams = (object.auctionParams !== undefined && object.auctionParams !== null)
      ? AuctionParams.fromPartial(object.auctionParams)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
