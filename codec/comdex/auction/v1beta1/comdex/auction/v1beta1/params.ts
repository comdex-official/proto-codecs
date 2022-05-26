/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.auction.v1beta1";

export interface Params {
  liquidationPenaltyPercent: string;
  auctionDiscountPercent: string;
  auctionDurationSeconds: Long;
  debtMintTokenDecreasePercentage: string;
  buffer: string;
  cusp: string;
  tau: string;
  dutchDecreasePercentage: string;
  chost: string;
  step: string;
  priceFunctionType: Long;
}

function createBaseParams(): Params {
  return {
    liquidationPenaltyPercent: "",
    auctionDiscountPercent: "",
    auctionDurationSeconds: Long.UZERO,
    debtMintTokenDecreasePercentage: "",
    buffer: "",
    cusp: "",
    tau: "",
    dutchDecreasePercentage: "",
    chost: "",
    step: "",
    priceFunctionType: Long.UZERO,
  };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.liquidationPenaltyPercent !== "") {
      writer.uint32(10).string(message.liquidationPenaltyPercent);
    }
    if (message.auctionDiscountPercent !== "") {
      writer.uint32(18).string(message.auctionDiscountPercent);
    }
    if (!message.auctionDurationSeconds.isZero()) {
      writer.uint32(24).uint64(message.auctionDurationSeconds);
    }
    if (message.debtMintTokenDecreasePercentage !== "") {
      writer.uint32(34).string(message.debtMintTokenDecreasePercentage);
    }
    if (message.buffer !== "") {
      writer.uint32(42).string(message.buffer);
    }
    if (message.cusp !== "") {
      writer.uint32(50).string(message.cusp);
    }
    if (message.tau !== "") {
      writer.uint32(58).string(message.tau);
    }
    if (message.dutchDecreasePercentage !== "") {
      writer.uint32(66).string(message.dutchDecreasePercentage);
    }
    if (message.chost !== "") {
      writer.uint32(74).string(message.chost);
    }
    if (message.step !== "") {
      writer.uint32(82).string(message.step);
    }
    if (!message.priceFunctionType.isZero()) {
      writer.uint32(88).uint64(message.priceFunctionType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidationPenaltyPercent = reader.string();
          break;
        case 2:
          message.auctionDiscountPercent = reader.string();
          break;
        case 3:
          message.auctionDurationSeconds = reader.uint64() as Long;
          break;
        case 4:
          message.debtMintTokenDecreasePercentage = reader.string();
          break;
        case 5:
          message.buffer = reader.string();
          break;
        case 6:
          message.cusp = reader.string();
          break;
        case 7:
          message.tau = reader.string();
          break;
        case 8:
          message.dutchDecreasePercentage = reader.string();
          break;
        case 9:
          message.chost = reader.string();
          break;
        case 10:
          message.step = reader.string();
          break;
        case 11:
          message.priceFunctionType = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      liquidationPenaltyPercent: isSet(object.liquidationPenaltyPercent)
        ? String(object.liquidationPenaltyPercent)
        : "",
      auctionDiscountPercent: isSet(object.auctionDiscountPercent)
        ? String(object.auctionDiscountPercent)
        : "",
      auctionDurationSeconds: isSet(object.auctionDurationSeconds)
        ? Long.fromValue(object.auctionDurationSeconds)
        : Long.UZERO,
      debtMintTokenDecreasePercentage: isSet(
        object.debtMintTokenDecreasePercentage
      )
        ? String(object.debtMintTokenDecreasePercentage)
        : "",
      buffer: isSet(object.buffer) ? String(object.buffer) : "",
      cusp: isSet(object.cusp) ? String(object.cusp) : "",
      tau: isSet(object.tau) ? String(object.tau) : "",
      dutchDecreasePercentage: isSet(object.dutchDecreasePercentage)
        ? String(object.dutchDecreasePercentage)
        : "",
      chost: isSet(object.chost) ? String(object.chost) : "",
      step: isSet(object.step) ? String(object.step) : "",
      priceFunctionType: isSet(object.priceFunctionType)
        ? Long.fromValue(object.priceFunctionType)
        : Long.UZERO,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.liquidationPenaltyPercent !== undefined &&
      (obj.liquidationPenaltyPercent = message.liquidationPenaltyPercent);
    message.auctionDiscountPercent !== undefined &&
      (obj.auctionDiscountPercent = message.auctionDiscountPercent);
    message.auctionDurationSeconds !== undefined &&
      (obj.auctionDurationSeconds = (
        message.auctionDurationSeconds || Long.UZERO
      ).toString());
    message.debtMintTokenDecreasePercentage !== undefined &&
      (obj.debtMintTokenDecreasePercentage =
        message.debtMintTokenDecreasePercentage);
    message.buffer !== undefined && (obj.buffer = message.buffer);
    message.cusp !== undefined && (obj.cusp = message.cusp);
    message.tau !== undefined && (obj.tau = message.tau);
    message.dutchDecreasePercentage !== undefined &&
      (obj.dutchDecreasePercentage = message.dutchDecreasePercentage);
    message.chost !== undefined && (obj.chost = message.chost);
    message.step !== undefined && (obj.step = message.step);
    message.priceFunctionType !== undefined &&
      (obj.priceFunctionType = (
        message.priceFunctionType || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.liquidationPenaltyPercent = object.liquidationPenaltyPercent ?? "";
    message.auctionDiscountPercent = object.auctionDiscountPercent ?? "";
    message.auctionDurationSeconds =
      object.auctionDurationSeconds !== undefined &&
      object.auctionDurationSeconds !== null
        ? Long.fromValue(object.auctionDurationSeconds)
        : Long.UZERO;
    message.debtMintTokenDecreasePercentage =
      object.debtMintTokenDecreasePercentage ?? "";
    message.buffer = object.buffer ?? "";
    message.cusp = object.cusp ?? "";
    message.tau = object.tau ?? "";
    message.dutchDecreasePercentage = object.dutchDecreasePercentage ?? "";
    message.chost = object.chost ?? "";
    message.step = object.step ?? "";
    message.priceFunctionType =
      object.priceFunctionType !== undefined &&
      object.priceFunctionType !== null
        ? Long.fromValue(object.priceFunctionType)
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
