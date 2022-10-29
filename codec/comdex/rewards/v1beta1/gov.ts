/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { LendExternalRewards } from "../../../comdex/rewards/v1beta1/rewards";

export const protobufPackage = "comdex.rewards.v1beta1";

export interface AddLendExternalRewardsProposal {
  title: string;
  description: string;
  lendExternalRewards?: LendExternalRewards;
}

function createBaseAddLendExternalRewardsProposal(): AddLendExternalRewardsProposal {
  return { title: "", description: "", lendExternalRewards: undefined };
}

export const AddLendExternalRewardsProposal = {
  encode(
    message: AddLendExternalRewardsProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.lendExternalRewards !== undefined) {
      LendExternalRewards.encode(
        message.lendExternalRewards,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddLendExternalRewardsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddLendExternalRewardsProposal();
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
          message.lendExternalRewards = LendExternalRewards.decode(
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

  fromJSON(object: any): AddLendExternalRewardsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      lendExternalRewards: isSet(object.lendExternalRewards)
        ? LendExternalRewards.fromJSON(object.lendExternalRewards)
        : undefined,
    };
  },

  toJSON(message: AddLendExternalRewardsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.lendExternalRewards !== undefined &&
      (obj.lendExternalRewards = message.lendExternalRewards
        ? LendExternalRewards.toJSON(message.lendExternalRewards)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddLendExternalRewardsProposal>, I>>(
    object: I
  ): AddLendExternalRewardsProposal {
    const message = createBaseAddLendExternalRewardsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.lendExternalRewards =
      object.lendExternalRewards !== undefined &&
      object.lendExternalRewards !== null
        ? LendExternalRewards.fromPartial(object.lendExternalRewards)
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
