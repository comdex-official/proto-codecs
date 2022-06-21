/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.asset.v1beta1";

export interface ExtendedPairLend {
  id: Long;
  pairId: Long;
  moduleAcc: string;
  baseBorrowRateAsset1: string;
  baseLendRateAsset1: string;
  baseBorrowRateAsset2: string;
  baseLendRateAsset2: string;
  currentBorrowRateAsset1: string;
  currentLendRateAsset1: string;
  currentBorrowRateAsset2: string;
  currentLendRateAsset2: string;
  productMappingId: Long;
}

function createBaseExtendedPairLend(): ExtendedPairLend {
  return {
    id: Long.UZERO,
    pairId: Long.UZERO,
    moduleAcc: "",
    baseBorrowRateAsset1: "",
    baseLendRateAsset1: "",
    baseBorrowRateAsset2: "",
    baseLendRateAsset2: "",
    currentBorrowRateAsset1: "",
    currentLendRateAsset1: "",
    currentBorrowRateAsset2: "",
    currentLendRateAsset2: "",
    productMappingId: Long.UZERO,
  };
}

export const ExtendedPairLend = {
  encode(
    message: ExtendedPairLend,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }
    if (message.moduleAcc !== "") {
      writer.uint32(26).string(message.moduleAcc);
    }
    if (message.baseBorrowRateAsset1 !== "") {
      writer.uint32(34).string(message.baseBorrowRateAsset1);
    }
    if (message.baseLendRateAsset1 !== "") {
      writer.uint32(42).string(message.baseLendRateAsset1);
    }
    if (message.baseBorrowRateAsset2 !== "") {
      writer.uint32(50).string(message.baseBorrowRateAsset2);
    }
    if (message.baseLendRateAsset2 !== "") {
      writer.uint32(58).string(message.baseLendRateAsset2);
    }
    if (message.currentBorrowRateAsset1 !== "") {
      writer.uint32(66).string(message.currentBorrowRateAsset1);
    }
    if (message.currentLendRateAsset1 !== "") {
      writer.uint32(74).string(message.currentLendRateAsset1);
    }
    if (message.currentBorrowRateAsset2 !== "") {
      writer.uint32(82).string(message.currentBorrowRateAsset2);
    }
    if (message.currentLendRateAsset2 !== "") {
      writer.uint32(90).string(message.currentLendRateAsset2);
    }
    if (!message.productMappingId.isZero()) {
      writer.uint32(96).uint64(message.productMappingId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedPairLend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedPairLend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.pairId = reader.uint64() as Long;
          break;
        case 3:
          message.moduleAcc = reader.string();
          break;
        case 4:
          message.baseBorrowRateAsset1 = reader.string();
          break;
        case 5:
          message.baseLendRateAsset1 = reader.string();
          break;
        case 6:
          message.baseBorrowRateAsset2 = reader.string();
          break;
        case 7:
          message.baseLendRateAsset2 = reader.string();
          break;
        case 8:
          message.currentBorrowRateAsset1 = reader.string();
          break;
        case 9:
          message.currentLendRateAsset1 = reader.string();
          break;
        case 10:
          message.currentBorrowRateAsset2 = reader.string();
          break;
        case 11:
          message.currentLendRateAsset2 = reader.string();
          break;
        case 12:
          message.productMappingId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExtendedPairLend {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      pairId: isSet(object.pairId) ? Long.fromValue(object.pairId) : Long.UZERO,
      moduleAcc: isSet(object.moduleAcc) ? String(object.moduleAcc) : "",
      baseBorrowRateAsset1: isSet(object.baseBorrowRateAsset1)
        ? String(object.baseBorrowRateAsset1)
        : "",
      baseLendRateAsset1: isSet(object.baseLendRateAsset1)
        ? String(object.baseLendRateAsset1)
        : "",
      baseBorrowRateAsset2: isSet(object.baseBorrowRateAsset2)
        ? String(object.baseBorrowRateAsset2)
        : "",
      baseLendRateAsset2: isSet(object.baseLendRateAsset2)
        ? String(object.baseLendRateAsset2)
        : "",
      currentBorrowRateAsset1: isSet(object.currentBorrowRateAsset1)
        ? String(object.currentBorrowRateAsset1)
        : "",
      currentLendRateAsset1: isSet(object.currentLendRateAsset1)
        ? String(object.currentLendRateAsset1)
        : "",
      currentBorrowRateAsset2: isSet(object.currentBorrowRateAsset2)
        ? String(object.currentBorrowRateAsset2)
        : "",
      currentLendRateAsset2: isSet(object.currentLendRateAsset2)
        ? String(object.currentLendRateAsset2)
        : "",
      productMappingId: isSet(object.productMappingId)
        ? Long.fromValue(object.productMappingId)
        : Long.UZERO,
    };
  },

  toJSON(message: ExtendedPairLend): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.moduleAcc !== undefined && (obj.moduleAcc = message.moduleAcc);
    message.baseBorrowRateAsset1 !== undefined &&
      (obj.baseBorrowRateAsset1 = message.baseBorrowRateAsset1);
    message.baseLendRateAsset1 !== undefined &&
      (obj.baseLendRateAsset1 = message.baseLendRateAsset1);
    message.baseBorrowRateAsset2 !== undefined &&
      (obj.baseBorrowRateAsset2 = message.baseBorrowRateAsset2);
    message.baseLendRateAsset2 !== undefined &&
      (obj.baseLendRateAsset2 = message.baseLendRateAsset2);
    message.currentBorrowRateAsset1 !== undefined &&
      (obj.currentBorrowRateAsset1 = message.currentBorrowRateAsset1);
    message.currentLendRateAsset1 !== undefined &&
      (obj.currentLendRateAsset1 = message.currentLendRateAsset1);
    message.currentBorrowRateAsset2 !== undefined &&
      (obj.currentBorrowRateAsset2 = message.currentBorrowRateAsset2);
    message.currentLendRateAsset2 !== undefined &&
      (obj.currentLendRateAsset2 = message.currentLendRateAsset2);
    message.productMappingId !== undefined &&
      (obj.productMappingId = (
        message.productMappingId || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExtendedPairLend>, I>>(
    object: I
  ): ExtendedPairLend {
    const message = createBaseExtendedPairLend();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.moduleAcc = object.moduleAcc ?? "";
    message.baseBorrowRateAsset1 = object.baseBorrowRateAsset1 ?? "";
    message.baseLendRateAsset1 = object.baseLendRateAsset1 ?? "";
    message.baseBorrowRateAsset2 = object.baseBorrowRateAsset2 ?? "";
    message.baseLendRateAsset2 = object.baseLendRateAsset2 ?? "";
    message.currentBorrowRateAsset1 = object.currentBorrowRateAsset1 ?? "";
    message.currentLendRateAsset1 = object.currentLendRateAsset1 ?? "";
    message.currentBorrowRateAsset2 = object.currentBorrowRateAsset2 ?? "";
    message.currentLendRateAsset2 = object.currentLendRateAsset2 ?? "";
    message.productMappingId =
      object.productMappingId !== undefined && object.productMappingId !== null
        ? Long.fromValue(object.productMappingId)
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
