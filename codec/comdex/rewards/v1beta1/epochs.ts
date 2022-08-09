/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.rewards.v1beta1";

export interface EpochInfo {
  startTime?: Date;
  duration?: Duration;
  currentEpoch: Long;
  currentEpochStartTime?: Date;
  currentEpochStartHeight: Long;
}

function createBaseEpochInfo(): EpochInfo {
  return {
    startTime: undefined,
    duration: undefined,
    currentEpoch: Long.ZERO,
    currentEpochStartTime: undefined,
    currentEpochStartHeight: Long.ZERO,
  };
}

export const EpochInfo = {
  encode(
    message: EpochInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (!message.currentEpoch.isZero()) {
      writer.uint32(32).int64(message.currentEpoch);
    }
    if (message.currentEpochStartTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.currentEpochStartTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (!message.currentEpochStartHeight.isZero()) {
      writer.uint32(48).int64(message.currentEpochStartHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.currentEpoch = reader.int64() as Long;
          break;
        case 5:
          message.currentEpochStartTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.currentEpochStartHeight = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EpochInfo {
    return {
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
      duration: isSet(object.duration)
        ? Duration.fromJSON(object.duration)
        : undefined,
      currentEpoch: isSet(object.currentEpoch)
        ? Long.fromValue(object.currentEpoch)
        : Long.ZERO,
      currentEpochStartTime: isSet(object.currentEpochStartTime)
        ? fromJsonTimestamp(object.currentEpochStartTime)
        : undefined,
      currentEpochStartHeight: isSet(object.currentEpochStartHeight)
        ? Long.fromValue(object.currentEpochStartHeight)
        : Long.ZERO,
    };
  },

  toJSON(message: EpochInfo): unknown {
    const obj: any = {};
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.duration !== undefined &&
      (obj.duration = message.duration
        ? Duration.toJSON(message.duration)
        : undefined);
    message.currentEpoch !== undefined &&
      (obj.currentEpoch = (message.currentEpoch || Long.ZERO).toString());
    message.currentEpochStartTime !== undefined &&
      (obj.currentEpochStartTime = message.currentEpochStartTime.toISOString());
    message.currentEpochStartHeight !== undefined &&
      (obj.currentEpochStartHeight = (
        message.currentEpochStartHeight || Long.ZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EpochInfo>, I>>(
    object: I
  ): EpochInfo {
    const message = createBaseEpochInfo();
    message.startTime = object.startTime ?? undefined;
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Duration.fromPartial(object.duration)
        : undefined;
    message.currentEpoch =
      object.currentEpoch !== undefined && object.currentEpoch !== null
        ? Long.fromValue(object.currentEpoch)
        : Long.ZERO;
    message.currentEpochStartTime = object.currentEpochStartTime ?? undefined;
    message.currentEpochStartHeight =
      object.currentEpochStartHeight !== undefined &&
      object.currentEpochStartHeight !== null
        ? Long.fromValue(object.currentEpochStartHeight)
        : Long.ZERO;
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
