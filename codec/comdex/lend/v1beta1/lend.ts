/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.lend.v1beta1";

export interface LendAsset {
  lendingId: Long;
  pairId: Long;
  owner: string;
  amountIn?: Coin;
  lendingTime?: Date;
  reward?: Coin;
}

function createBaseLendAsset(): LendAsset {
  return {
    lendingId: Long.UZERO,
    pairId: Long.UZERO,
    owner: "",
    amountIn: undefined,
    lendingTime: undefined,
    reward: undefined,
  };
}

export const LendAsset = {
  encode(
    message: LendAsset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.lendingId.isZero()) {
      writer.uint32(8).uint64(message.lendingId);
    }
    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(34).fork()).ldelim();
    }
    if (message.lendingTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lendingTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.reward !== undefined) {
      Coin.encode(message.reward, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LendAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLendAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lendingId = reader.uint64() as Long;
          break;
        case 2:
          message.pairId = reader.uint64() as Long;
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.amountIn = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.lendingTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.reward = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LendAsset {
    return {
      lendingId: isSet(object.lendingId)
        ? Long.fromString(object.lendingId)
        : Long.UZERO,
      pairId: isSet(object.pairId)
        ? Long.fromString(object.pairId)
        : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      amountIn: isSet(object.amountIn)
        ? Coin.fromJSON(object.amountIn)
        : undefined,
      lendingTime: isSet(object.lendingTime)
        ? fromJsonTimestamp(object.lendingTime)
        : undefined,
      reward: isSet(object.reward) ? Coin.fromJSON(object.reward) : undefined,
    };
  },

  toJSON(message: LendAsset): unknown {
    const obj: any = {};
    message.lendingId !== undefined &&
      (obj.lendingId = (message.lendingId || Long.UZERO).toString());
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.amountIn !== undefined &&
      (obj.amountIn = message.amountIn
        ? Coin.toJSON(message.amountIn)
        : undefined);
    message.lendingTime !== undefined &&
      (obj.lendingTime = message.lendingTime.toISOString());
    message.reward !== undefined &&
      (obj.reward = message.reward ? Coin.toJSON(message.reward) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LendAsset>, I>>(
    object: I
  ): LendAsset {
    const message = createBaseLendAsset();
    message.lendingId =
      object.lendingId !== undefined && object.lendingId !== null
        ? Long.fromValue(object.lendingId)
        : Long.UZERO;
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.owner = object.owner ?? "";
    message.amountIn =
      object.amountIn !== undefined && object.amountIn !== null
        ? Coin.fromPartial(object.amountIn)
        : undefined;
    message.lendingTime = object.lendingTime ?? undefined;
    message.reward =
      object.reward !== undefined && object.reward !== null
        ? Coin.fromPartial(object.reward)
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
