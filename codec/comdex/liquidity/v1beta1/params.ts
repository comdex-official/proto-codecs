/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "comdex.liquidity.v1beta1";

/** Params defines the parameters for the liquidity module. */
export interface Params {}

/** Params defines the parameters for the liquidity module. */
export interface GenericParams {
  batchSize: Long;
  tickPrecision: Long;
  feeCollectorAddress: string;
  dustCollectorAddress: string;
  minInitialPoolCoinSupply: string;
  pairCreationFee: Coin[];
  poolCreationFee: Coin[];
  minInitialDepositAmount: string;
  maxPriceLimitRatio: string;
  maxOrderLifespan?: Duration;
  swapFeeRate: string;
  withdrawFeeRate: string;
  depositExtraGas: Long;
  withdrawExtraGas: Long;
  orderExtraGas: Long;
  swapFeeDistrDenom: string;
  swapFeeBurnRate: string;
  appId: Long;
}

function createBaseParams(): Params {
  return {};
}

export const Params = {
  encode(_: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
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

  fromJSON(_: any): Params {
    return {};
  },

  toJSON(_: Params): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(_: I): Params {
    const message = createBaseParams();
    return message;
  },
};

function createBaseGenericParams(): GenericParams {
  return {
    batchSize: Long.UZERO,
    tickPrecision: Long.UZERO,
    feeCollectorAddress: "",
    dustCollectorAddress: "",
    minInitialPoolCoinSupply: "",
    pairCreationFee: [],
    poolCreationFee: [],
    minInitialDepositAmount: "",
    maxPriceLimitRatio: "",
    maxOrderLifespan: undefined,
    swapFeeRate: "",
    withdrawFeeRate: "",
    depositExtraGas: Long.UZERO,
    withdrawExtraGas: Long.UZERO,
    orderExtraGas: Long.UZERO,
    swapFeeDistrDenom: "",
    swapFeeBurnRate: "",
    appId: Long.UZERO,
  };
}

export const GenericParams = {
  encode(
    message: GenericParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.batchSize.isZero()) {
      writer.uint32(8).uint64(message.batchSize);
    }
    if (!message.tickPrecision.isZero()) {
      writer.uint32(16).uint64(message.tickPrecision);
    }
    if (message.feeCollectorAddress !== "") {
      writer.uint32(26).string(message.feeCollectorAddress);
    }
    if (message.dustCollectorAddress !== "") {
      writer.uint32(34).string(message.dustCollectorAddress);
    }
    if (message.minInitialPoolCoinSupply !== "") {
      writer.uint32(42).string(message.minInitialPoolCoinSupply);
    }
    for (const v of message.pairCreationFee) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.poolCreationFee) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.minInitialDepositAmount !== "") {
      writer.uint32(66).string(message.minInitialDepositAmount);
    }
    if (message.maxPriceLimitRatio !== "") {
      writer.uint32(74).string(message.maxPriceLimitRatio);
    }
    if (message.maxOrderLifespan !== undefined) {
      Duration.encode(
        message.maxOrderLifespan,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.swapFeeRate !== "") {
      writer.uint32(90).string(message.swapFeeRate);
    }
    if (message.withdrawFeeRate !== "") {
      writer.uint32(98).string(message.withdrawFeeRate);
    }
    if (!message.depositExtraGas.isZero()) {
      writer.uint32(104).uint64(message.depositExtraGas);
    }
    if (!message.withdrawExtraGas.isZero()) {
      writer.uint32(112).uint64(message.withdrawExtraGas);
    }
    if (!message.orderExtraGas.isZero()) {
      writer.uint32(120).uint64(message.orderExtraGas);
    }
    if (message.swapFeeDistrDenom !== "") {
      writer.uint32(130).string(message.swapFeeDistrDenom);
    }
    if (message.swapFeeBurnRate !== "") {
      writer.uint32(138).string(message.swapFeeBurnRate);
    }
    if (!message.appId.isZero()) {
      writer.uint32(144).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenericParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenericParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchSize = reader.uint64() as Long;
          break;
        case 2:
          message.tickPrecision = reader.uint64() as Long;
          break;
        case 3:
          message.feeCollectorAddress = reader.string();
          break;
        case 4:
          message.dustCollectorAddress = reader.string();
          break;
        case 5:
          message.minInitialPoolCoinSupply = reader.string();
          break;
        case 6:
          message.pairCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.poolCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.minInitialDepositAmount = reader.string();
          break;
        case 9:
          message.maxPriceLimitRatio = reader.string();
          break;
        case 10:
          message.maxOrderLifespan = Duration.decode(reader, reader.uint32());
          break;
        case 11:
          message.swapFeeRate = reader.string();
          break;
        case 12:
          message.withdrawFeeRate = reader.string();
          break;
        case 13:
          message.depositExtraGas = reader.uint64() as Long;
          break;
        case 14:
          message.withdrawExtraGas = reader.uint64() as Long;
          break;
        case 15:
          message.orderExtraGas = reader.uint64() as Long;
          break;
        case 16:
          message.swapFeeDistrDenom = reader.string();
          break;
        case 17:
          message.swapFeeBurnRate = reader.string();
          break;
        case 18:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenericParams {
    return {
      batchSize: isSet(object.batchSize)
        ? Long.fromValue(object.batchSize)
        : Long.UZERO,
      tickPrecision: isSet(object.tickPrecision)
        ? Long.fromValue(object.tickPrecision)
        : Long.UZERO,
      feeCollectorAddress: isSet(object.feeCollectorAddress)
        ? String(object.feeCollectorAddress)
        : "",
      dustCollectorAddress: isSet(object.dustCollectorAddress)
        ? String(object.dustCollectorAddress)
        : "",
      minInitialPoolCoinSupply: isSet(object.minInitialPoolCoinSupply)
        ? String(object.minInitialPoolCoinSupply)
        : "",
      pairCreationFee: Array.isArray(object?.pairCreationFee)
        ? object.pairCreationFee.map((e: any) => Coin.fromJSON(e))
        : [],
      poolCreationFee: Array.isArray(object?.poolCreationFee)
        ? object.poolCreationFee.map((e: any) => Coin.fromJSON(e))
        : [],
      minInitialDepositAmount: isSet(object.minInitialDepositAmount)
        ? String(object.minInitialDepositAmount)
        : "",
      maxPriceLimitRatio: isSet(object.maxPriceLimitRatio)
        ? String(object.maxPriceLimitRatio)
        : "",
      maxOrderLifespan: isSet(object.maxOrderLifespan)
        ? Duration.fromJSON(object.maxOrderLifespan)
        : undefined,
      swapFeeRate: isSet(object.swapFeeRate) ? String(object.swapFeeRate) : "",
      withdrawFeeRate: isSet(object.withdrawFeeRate)
        ? String(object.withdrawFeeRate)
        : "",
      depositExtraGas: isSet(object.depositExtraGas)
        ? Long.fromValue(object.depositExtraGas)
        : Long.UZERO,
      withdrawExtraGas: isSet(object.withdrawExtraGas)
        ? Long.fromValue(object.withdrawExtraGas)
        : Long.UZERO,
      orderExtraGas: isSet(object.orderExtraGas)
        ? Long.fromValue(object.orderExtraGas)
        : Long.UZERO,
      swapFeeDistrDenom: isSet(object.swapFeeDistrDenom)
        ? String(object.swapFeeDistrDenom)
        : "",
      swapFeeBurnRate: isSet(object.swapFeeBurnRate)
        ? String(object.swapFeeBurnRate)
        : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: GenericParams): unknown {
    const obj: any = {};
    message.batchSize !== undefined &&
      (obj.batchSize = (message.batchSize || Long.UZERO).toString());
    message.tickPrecision !== undefined &&
      (obj.tickPrecision = (message.tickPrecision || Long.UZERO).toString());
    message.feeCollectorAddress !== undefined &&
      (obj.feeCollectorAddress = message.feeCollectorAddress);
    message.dustCollectorAddress !== undefined &&
      (obj.dustCollectorAddress = message.dustCollectorAddress);
    message.minInitialPoolCoinSupply !== undefined &&
      (obj.minInitialPoolCoinSupply = message.minInitialPoolCoinSupply);
    if (message.pairCreationFee) {
      obj.pairCreationFee = message.pairCreationFee.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.pairCreationFee = [];
    }
    if (message.poolCreationFee) {
      obj.poolCreationFee = message.poolCreationFee.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.poolCreationFee = [];
    }
    message.minInitialDepositAmount !== undefined &&
      (obj.minInitialDepositAmount = message.minInitialDepositAmount);
    message.maxPriceLimitRatio !== undefined &&
      (obj.maxPriceLimitRatio = message.maxPriceLimitRatio);
    message.maxOrderLifespan !== undefined &&
      (obj.maxOrderLifespan = message.maxOrderLifespan
        ? Duration.toJSON(message.maxOrderLifespan)
        : undefined);
    message.swapFeeRate !== undefined &&
      (obj.swapFeeRate = message.swapFeeRate);
    message.withdrawFeeRate !== undefined &&
      (obj.withdrawFeeRate = message.withdrawFeeRate);
    message.depositExtraGas !== undefined &&
      (obj.depositExtraGas = (
        message.depositExtraGas || Long.UZERO
      ).toString());
    message.withdrawExtraGas !== undefined &&
      (obj.withdrawExtraGas = (
        message.withdrawExtraGas || Long.UZERO
      ).toString());
    message.orderExtraGas !== undefined &&
      (obj.orderExtraGas = (message.orderExtraGas || Long.UZERO).toString());
    message.swapFeeDistrDenom !== undefined &&
      (obj.swapFeeDistrDenom = message.swapFeeDistrDenom);
    message.swapFeeBurnRate !== undefined &&
      (obj.swapFeeBurnRate = message.swapFeeBurnRate);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenericParams>, I>>(
    object: I
  ): GenericParams {
    const message = createBaseGenericParams();
    message.batchSize =
      object.batchSize !== undefined && object.batchSize !== null
        ? Long.fromValue(object.batchSize)
        : Long.UZERO;
    message.tickPrecision =
      object.tickPrecision !== undefined && object.tickPrecision !== null
        ? Long.fromValue(object.tickPrecision)
        : Long.UZERO;
    message.feeCollectorAddress = object.feeCollectorAddress ?? "";
    message.dustCollectorAddress = object.dustCollectorAddress ?? "";
    message.minInitialPoolCoinSupply = object.minInitialPoolCoinSupply ?? "";
    message.pairCreationFee =
      object.pairCreationFee?.map((e) => Coin.fromPartial(e)) || [];
    message.poolCreationFee =
      object.poolCreationFee?.map((e) => Coin.fromPartial(e)) || [];
    message.minInitialDepositAmount = object.minInitialDepositAmount ?? "";
    message.maxPriceLimitRatio = object.maxPriceLimitRatio ?? "";
    message.maxOrderLifespan =
      object.maxOrderLifespan !== undefined && object.maxOrderLifespan !== null
        ? Duration.fromPartial(object.maxOrderLifespan)
        : undefined;
    message.swapFeeRate = object.swapFeeRate ?? "";
    message.withdrawFeeRate = object.withdrawFeeRate ?? "";
    message.depositExtraGas =
      object.depositExtraGas !== undefined && object.depositExtraGas !== null
        ? Long.fromValue(object.depositExtraGas)
        : Long.UZERO;
    message.withdrawExtraGas =
      object.withdrawExtraGas !== undefined && object.withdrawExtraGas !== null
        ? Long.fromValue(object.withdrawExtraGas)
        : Long.UZERO;
    message.orderExtraGas =
      object.orderExtraGas !== undefined && object.orderExtraGas !== null
        ? Long.fromValue(object.orderExtraGas)
        : Long.UZERO;
    message.swapFeeDistrDenom = object.swapFeeDistrDenom ?? "";
    message.swapFeeBurnRate = object.swapFeeBurnRate ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
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
