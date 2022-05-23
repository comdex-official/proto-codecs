/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { LiquidtyGaugeMetaData } from "./gauge";

export const protobufPackage = "comdex.incentives.v1beta1";

export interface MsgCreateGauge {
  from: string;
  gaugeTypeId: Long;
  triggerDuration?: Duration;
  depositAmount?: Coin;
  totalTriggers: Long;
  startTime?: Date;
  liquidityMetaData?: LiquidtyGaugeMetaData | undefined;
}

export interface MsgCreateGaugeResponse {}

function createBaseMsgCreateGauge(): MsgCreateGauge {
  return {
    from: "",
    gaugeTypeId: Long.UZERO,
    triggerDuration: undefined,
    depositAmount: undefined,
    totalTriggers: Long.UZERO,
    startTime: undefined,
    liquidityMetaData: undefined,
  };
}

export const MsgCreateGauge = {
  encode(
    message: MsgCreateGauge,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.gaugeTypeId.isZero()) {
      writer.uint32(16).uint64(message.gaugeTypeId);
    }
    if (message.triggerDuration !== undefined) {
      Duration.encode(
        message.triggerDuration,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.depositAmount !== undefined) {
      Coin.encode(message.depositAmount, writer.uint32(34).fork()).ldelim();
    }
    if (!message.totalTriggers.isZero()) {
      writer.uint32(40).uint64(message.totalTriggers);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.liquidityMetaData !== undefined) {
      LiquidtyGaugeMetaData.encode(
        message.liquidityMetaData,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGauge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.gaugeTypeId = reader.uint64() as Long;
          break;
        case 3:
          message.triggerDuration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.depositAmount = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.totalTriggers = reader.uint64() as Long;
          break;
        case 6:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.liquidityMetaData = LiquidtyGaugeMetaData.decode(
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

  fromJSON(object: any): MsgCreateGauge {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      gaugeTypeId: isSet(object.gaugeTypeId)
        ? Long.fromString(object.gaugeTypeId)
        : Long.UZERO,
      triggerDuration: isSet(object.triggerDuration)
        ? Duration.fromJSON(object.triggerDuration)
        : undefined,
      depositAmount: isSet(object.depositAmount)
        ? Coin.fromJSON(object.depositAmount)
        : undefined,
      totalTriggers: isSet(object.totalTriggers)
        ? Long.fromString(object.totalTriggers)
        : Long.UZERO,
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
      liquidityMetaData: isSet(object.liquidityMetaData)
        ? LiquidtyGaugeMetaData.fromJSON(object.liquidityMetaData)
        : undefined,
    };
  },

  toJSON(message: MsgCreateGauge): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.gaugeTypeId !== undefined &&
      (obj.gaugeTypeId = (message.gaugeTypeId || Long.UZERO).toString());
    message.triggerDuration !== undefined &&
      (obj.triggerDuration = message.triggerDuration
        ? Duration.toJSON(message.triggerDuration)
        : undefined);
    message.depositAmount !== undefined &&
      (obj.depositAmount = message.depositAmount
        ? Coin.toJSON(message.depositAmount)
        : undefined);
    message.totalTriggers !== undefined &&
      (obj.totalTriggers = (message.totalTriggers || Long.UZERO).toString());
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.liquidityMetaData !== undefined &&
      (obj.liquidityMetaData = message.liquidityMetaData
        ? LiquidtyGaugeMetaData.toJSON(message.liquidityMetaData)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGauge>, I>>(
    object: I
  ): MsgCreateGauge {
    const message = createBaseMsgCreateGauge();
    message.from = object.from ?? "";
    message.gaugeTypeId =
      object.gaugeTypeId !== undefined && object.gaugeTypeId !== null
        ? Long.fromValue(object.gaugeTypeId)
        : Long.UZERO;
    message.triggerDuration =
      object.triggerDuration !== undefined && object.triggerDuration !== null
        ? Duration.fromPartial(object.triggerDuration)
        : undefined;
    message.depositAmount =
      object.depositAmount !== undefined && object.depositAmount !== null
        ? Coin.fromPartial(object.depositAmount)
        : undefined;
    message.totalTriggers =
      object.totalTriggers !== undefined && object.totalTriggers !== null
        ? Long.fromValue(object.totalTriggers)
        : Long.UZERO;
    message.startTime = object.startTime ?? undefined;
    message.liquidityMetaData =
      object.liquidityMetaData !== undefined &&
      object.liquidityMetaData !== null
        ? LiquidtyGaugeMetaData.fromPartial(object.liquidityMetaData)
        : undefined;
    return message;
  },
};

function createBaseMsgCreateGaugeResponse(): MsgCreateGaugeResponse {
  return {};
}

export const MsgCreateGaugeResponse = {
  encode(
    _: MsgCreateGaugeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateGaugeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGaugeResponse();
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

  fromJSON(_: any): MsgCreateGaugeResponse {
    return {};
  },

  toJSON(_: MsgCreateGaugeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGaugeResponse>, I>>(
    _: I
  ): MsgCreateGaugeResponse {
    const message = createBaseMsgCreateGaugeResponse();
    return message;
  },
};

export interface Msg {
  CreateGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateGauge = this.CreateGauge.bind(this);
  }
  CreateGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponse> {
    const data = MsgCreateGauge.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.incentives.v1beta1.Msg",
      "CreateGauge",
      data
    );
    return promise.then((data) =>
      MsgCreateGaugeResponse.decode(new _m0.Reader(data))
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
