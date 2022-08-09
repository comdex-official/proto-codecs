/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.rewards.v1beta1";

export interface LiquidtyGaugeMetaData {
  poolId: Long;
  isMasterPool: boolean;
  childPoolIds: Long[];
}

export interface Gauge {
  id: Long;
  from: string;
  createdAt?: Date;
  startTime?: Date;
  gaugeTypeId: Long;
  triggerDuration?: Duration;
  depositAmount?: Coin;
  totalTriggers: Long;
  triggeredCount: Long;
  distributedAmount?: Coin;
  isActive: boolean;
  forSwapFee: boolean;
  liquidityMetaData?: LiquidtyGaugeMetaData | undefined;
  appId: Long;
}

export interface GaugeByTriggerDuration {
  triggerDuration?: Duration;
  gaugeIds: Long[];
}

function createBaseLiquidtyGaugeMetaData(): LiquidtyGaugeMetaData {
  return { poolId: Long.UZERO, isMasterPool: false, childPoolIds: [] };
}

export const LiquidtyGaugeMetaData = {
  encode(
    message: LiquidtyGaugeMetaData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.isMasterPool === true) {
      writer.uint32(16).bool(message.isMasterPool);
    }
    writer.uint32(26).fork();
    for (const v of message.childPoolIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LiquidtyGaugeMetaData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidtyGaugeMetaData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.isMasterPool = reader.bool();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.childPoolIds.push(reader.uint64() as Long);
            }
          } else {
            message.childPoolIds.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidtyGaugeMetaData {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      isMasterPool: isSet(object.isMasterPool)
        ? Boolean(object.isMasterPool)
        : false,
      childPoolIds: Array.isArray(object?.childPoolIds)
        ? object.childPoolIds.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: LiquidtyGaugeMetaData): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.isMasterPool !== undefined &&
      (obj.isMasterPool = message.isMasterPool);
    if (message.childPoolIds) {
      obj.childPoolIds = message.childPoolIds.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.childPoolIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LiquidtyGaugeMetaData>, I>>(
    object: I
  ): LiquidtyGaugeMetaData {
    const message = createBaseLiquidtyGaugeMetaData();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.isMasterPool = object.isMasterPool ?? false;
    message.childPoolIds =
      object.childPoolIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseGauge(): Gauge {
  return {
    id: Long.UZERO,
    from: "",
    createdAt: undefined,
    startTime: undefined,
    gaugeTypeId: Long.UZERO,
    triggerDuration: undefined,
    depositAmount: undefined,
    totalTriggers: Long.UZERO,
    triggeredCount: Long.UZERO,
    distributedAmount: undefined,
    isActive: false,
    forSwapFee: false,
    liquidityMetaData: undefined,
    appId: Long.UZERO,
  };
}

export const Gauge = {
  encode(message: Gauge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (!message.gaugeTypeId.isZero()) {
      writer.uint32(40).uint64(message.gaugeTypeId);
    }
    if (message.triggerDuration !== undefined) {
      Duration.encode(
        message.triggerDuration,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.depositAmount !== undefined) {
      Coin.encode(message.depositAmount, writer.uint32(58).fork()).ldelim();
    }
    if (!message.totalTriggers.isZero()) {
      writer.uint32(64).uint64(message.totalTriggers);
    }
    if (!message.triggeredCount.isZero()) {
      writer.uint32(72).uint64(message.triggeredCount);
    }
    if (message.distributedAmount !== undefined) {
      Coin.encode(message.distributedAmount, writer.uint32(82).fork()).ldelim();
    }
    if (message.isActive === true) {
      writer.uint32(88).bool(message.isActive);
    }
    if (message.forSwapFee === true) {
      writer.uint32(96).bool(message.forSwapFee);
    }
    if (message.liquidityMetaData !== undefined) {
      LiquidtyGaugeMetaData.encode(
        message.liquidityMetaData,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (!message.appId.isZero()) {
      writer.uint32(112).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Gauge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.gaugeTypeId = reader.uint64() as Long;
          break;
        case 6:
          message.triggerDuration = Duration.decode(reader, reader.uint32());
          break;
        case 7:
          message.depositAmount = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.totalTriggers = reader.uint64() as Long;
          break;
        case 9:
          message.triggeredCount = reader.uint64() as Long;
          break;
        case 10:
          message.distributedAmount = Coin.decode(reader, reader.uint32());
          break;
        case 11:
          message.isActive = reader.bool();
          break;
        case 12:
          message.forSwapFee = reader.bool();
          break;
        case 13:
          message.liquidityMetaData = LiquidtyGaugeMetaData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Gauge {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      from: isSet(object.from) ? String(object.from) : "",
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
      gaugeTypeId: isSet(object.gaugeTypeId)
        ? Long.fromValue(object.gaugeTypeId)
        : Long.UZERO,
      triggerDuration: isSet(object.triggerDuration)
        ? Duration.fromJSON(object.triggerDuration)
        : undefined,
      depositAmount: isSet(object.depositAmount)
        ? Coin.fromJSON(object.depositAmount)
        : undefined,
      totalTriggers: isSet(object.totalTriggers)
        ? Long.fromValue(object.totalTriggers)
        : Long.UZERO,
      triggeredCount: isSet(object.triggeredCount)
        ? Long.fromValue(object.triggeredCount)
        : Long.UZERO,
      distributedAmount: isSet(object.distributedAmount)
        ? Coin.fromJSON(object.distributedAmount)
        : undefined,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      forSwapFee: isSet(object.forSwapFee) ? Boolean(object.forSwapFee) : false,
      liquidityMetaData: isSet(object.liquidityMetaData)
        ? LiquidtyGaugeMetaData.fromJSON(object.liquidityMetaData)
        : undefined,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: Gauge): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.from !== undefined && (obj.from = message.from);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
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
    message.triggeredCount !== undefined &&
      (obj.triggeredCount = (message.triggeredCount || Long.UZERO).toString());
    message.distributedAmount !== undefined &&
      (obj.distributedAmount = message.distributedAmount
        ? Coin.toJSON(message.distributedAmount)
        : undefined);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.forSwapFee !== undefined && (obj.forSwapFee = message.forSwapFee);
    message.liquidityMetaData !== undefined &&
      (obj.liquidityMetaData = message.liquidityMetaData
        ? LiquidtyGaugeMetaData.toJSON(message.liquidityMetaData)
        : undefined);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Gauge>, I>>(object: I): Gauge {
    const message = createBaseGauge();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.from = object.from ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.startTime = object.startTime ?? undefined;
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
    message.triggeredCount =
      object.triggeredCount !== undefined && object.triggeredCount !== null
        ? Long.fromValue(object.triggeredCount)
        : Long.UZERO;
    message.distributedAmount =
      object.distributedAmount !== undefined &&
      object.distributedAmount !== null
        ? Coin.fromPartial(object.distributedAmount)
        : undefined;
    message.isActive = object.isActive ?? false;
    message.forSwapFee = object.forSwapFee ?? false;
    message.liquidityMetaData =
      object.liquidityMetaData !== undefined &&
      object.liquidityMetaData !== null
        ? LiquidtyGaugeMetaData.fromPartial(object.liquidityMetaData)
        : undefined;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseGaugeByTriggerDuration(): GaugeByTriggerDuration {
  return { triggerDuration: undefined, gaugeIds: [] };
}

export const GaugeByTriggerDuration = {
  encode(
    message: GaugeByTriggerDuration,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.triggerDuration !== undefined) {
      Duration.encode(
        message.triggerDuration,
        writer.uint32(10).fork()
      ).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.gaugeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GaugeByTriggerDuration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGaugeByTriggerDuration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triggerDuration = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.gaugeIds.push(reader.uint64() as Long);
            }
          } else {
            message.gaugeIds.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GaugeByTriggerDuration {
    return {
      triggerDuration: isSet(object.triggerDuration)
        ? Duration.fromJSON(object.triggerDuration)
        : undefined,
      gaugeIds: Array.isArray(object?.gaugeIds)
        ? object.gaugeIds.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: GaugeByTriggerDuration): unknown {
    const obj: any = {};
    message.triggerDuration !== undefined &&
      (obj.triggerDuration = message.triggerDuration
        ? Duration.toJSON(message.triggerDuration)
        : undefined);
    if (message.gaugeIds) {
      obj.gaugeIds = message.gaugeIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.gaugeIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GaugeByTriggerDuration>, I>>(
    object: I
  ): GaugeByTriggerDuration {
    const message = createBaseGaugeByTriggerDuration();
    message.triggerDuration =
      object.triggerDuration !== undefined && object.triggerDuration !== null
        ? Duration.fromPartial(object.triggerDuration)
        : undefined;
    message.gaugeIds = object.gaugeIds?.map((e) => Long.fromValue(e)) || [];
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
