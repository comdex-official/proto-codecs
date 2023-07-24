/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { LiquidationWhiteListing } from "../../../comdex/liquidationsV2/v1beta1/liquidate";

export const protobufPackage = "comdex.liquidationsV2.v1beta1";

export interface WhitelistLiquidationProposal {
  title: string;
  description: string;
  whitelisting?: LiquidationWhiteListing;
}

function createBaseWhitelistLiquidationProposal(): WhitelistLiquidationProposal {
  return { title: "", description: "", whitelisting: undefined };
}

export const WhitelistLiquidationProposal = {
  encode(
    message: WhitelistLiquidationProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.whitelisting !== undefined) {
      LiquidationWhiteListing.encode(
        message.whitelisting,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WhitelistLiquidationProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistLiquidationProposal();
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
          message.whitelisting = LiquidationWhiteListing.decode(
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

  fromJSON(object: any): WhitelistLiquidationProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      whitelisting: isSet(object.whitelisting)
        ? LiquidationWhiteListing.fromJSON(object.whitelisting)
        : undefined,
    };
  },

  toJSON(message: WhitelistLiquidationProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.whitelisting !== undefined &&
      (obj.whitelisting = message.whitelisting
        ? LiquidationWhiteListing.toJSON(message.whitelisting)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WhitelistLiquidationProposal>, I>>(
    object: I
  ): WhitelistLiquidationProposal {
    const message = createBaseWhitelistLiquidationProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.whitelisting =
      object.whitelisting !== undefined && object.whitelisting !== null
        ? LiquidationWhiteListing.fromPartial(object.whitelisting)
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
