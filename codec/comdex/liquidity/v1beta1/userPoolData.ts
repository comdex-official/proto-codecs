/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.liquidity.v1beta1";

export interface AllUserAddressesArray {
  userAddresses: string[];
}

export interface UserPoolsData {
  userAddress: string;
  userPools: UserPools[];
}

export interface UserPools {
  poolId: Long;
  bondedPoolCoin: string;
  unbondedPoolCoin: string;
  unbondingCoins: UserPoolUnbondingTokens[];
}

export interface UserPoolUnbondingTokens {
  isUnbondingPoolCoin: string;
  unbondingStartTime?: Date;
  unbondingEndTime?: Date;
}

function createBaseAllUserAddressesArray(): AllUserAddressesArray {
  return { userAddresses: [] };
}

export const AllUserAddressesArray = {
  encode(
    message: AllUserAddressesArray,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.userAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AllUserAddressesArray {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllUserAddressesArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllUserAddressesArray {
    return {
      userAddresses: Array.isArray(object?.userAddresses)
        ? object.userAddresses.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: AllUserAddressesArray): unknown {
    const obj: any = {};
    if (message.userAddresses) {
      obj.userAddresses = message.userAddresses.map((e) => e);
    } else {
      obj.userAddresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllUserAddressesArray>, I>>(
    object: I
  ): AllUserAddressesArray {
    const message = createBaseAllUserAddressesArray();
    message.userAddresses = object.userAddresses?.map((e) => e) || [];
    return message;
  },
};

function createBaseUserPoolsData(): UserPoolsData {
  return { userAddress: "", userPools: [] };
}

export const UserPoolsData = {
  encode(
    message: UserPoolsData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    for (const v of message.userPools) {
      UserPools.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserPoolsData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPoolsData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;
        case 2:
          message.userPools.push(UserPools.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserPoolsData {
    return {
      userAddress: isSet(object.userAddress) ? String(object.userAddress) : "",
      userPools: Array.isArray(object?.userPools)
        ? object.userPools.map((e: any) => UserPools.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UserPoolsData): unknown {
    const obj: any = {};
    message.userAddress !== undefined &&
      (obj.userAddress = message.userAddress);
    if (message.userPools) {
      obj.userPools = message.userPools.map((e) =>
        e ? UserPools.toJSON(e) : undefined
      );
    } else {
      obj.userPools = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserPoolsData>, I>>(
    object: I
  ): UserPoolsData {
    const message = createBaseUserPoolsData();
    message.userAddress = object.userAddress ?? "";
    message.userPools =
      object.userPools?.map((e) => UserPools.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUserPools(): UserPools {
  return {
    poolId: Long.UZERO,
    bondedPoolCoin: "",
    unbondedPoolCoin: "",
    unbondingCoins: [],
  };
}

export const UserPools = {
  encode(
    message: UserPools,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.bondedPoolCoin !== "") {
      writer.uint32(18).string(message.bondedPoolCoin);
    }
    if (message.unbondedPoolCoin !== "") {
      writer.uint32(26).string(message.unbondedPoolCoin);
    }
    for (const v of message.unbondingCoins) {
      UserPoolUnbondingTokens.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserPools {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPools();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.bondedPoolCoin = reader.string();
          break;
        case 3:
          message.unbondedPoolCoin = reader.string();
          break;
        case 4:
          message.unbondingCoins.push(
            UserPoolUnbondingTokens.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserPools {
    return {
      poolId: isSet(object.poolId)
        ? Long.fromString(object.poolId)
        : Long.UZERO,
      bondedPoolCoin: isSet(object.bondedPoolCoin)
        ? String(object.bondedPoolCoin)
        : "",
      unbondedPoolCoin: isSet(object.unbondedPoolCoin)
        ? String(object.unbondedPoolCoin)
        : "",
      unbondingCoins: Array.isArray(object?.unbondingCoins)
        ? object.unbondingCoins.map((e: any) =>
            UserPoolUnbondingTokens.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: UserPools): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.bondedPoolCoin !== undefined &&
      (obj.bondedPoolCoin = message.bondedPoolCoin);
    message.unbondedPoolCoin !== undefined &&
      (obj.unbondedPoolCoin = message.unbondedPoolCoin);
    if (message.unbondingCoins) {
      obj.unbondingCoins = message.unbondingCoins.map((e) =>
        e ? UserPoolUnbondingTokens.toJSON(e) : undefined
      );
    } else {
      obj.unbondingCoins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserPools>, I>>(
    object: I
  ): UserPools {
    const message = createBaseUserPools();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.bondedPoolCoin = object.bondedPoolCoin ?? "";
    message.unbondedPoolCoin = object.unbondedPoolCoin ?? "";
    message.unbondingCoins =
      object.unbondingCoins?.map((e) =>
        UserPoolUnbondingTokens.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseUserPoolUnbondingTokens(): UserPoolUnbondingTokens {
  return {
    isUnbondingPoolCoin: "",
    unbondingStartTime: undefined,
    unbondingEndTime: undefined,
  };
}

export const UserPoolUnbondingTokens = {
  encode(
    message: UserPoolUnbondingTokens,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isUnbondingPoolCoin !== "") {
      writer.uint32(10).string(message.isUnbondingPoolCoin);
    }
    if (message.unbondingStartTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.unbondingStartTime),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.unbondingEndTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.unbondingEndTime),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UserPoolUnbondingTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPoolUnbondingTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isUnbondingPoolCoin = reader.string();
          break;
        case 2:
          message.unbondingStartTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.unbondingEndTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserPoolUnbondingTokens {
    return {
      isUnbondingPoolCoin: isSet(object.isUnbondingPoolCoin)
        ? String(object.isUnbondingPoolCoin)
        : "",
      unbondingStartTime: isSet(object.unbondingStartTime)
        ? fromJsonTimestamp(object.unbondingStartTime)
        : undefined,
      unbondingEndTime: isSet(object.unbondingEndTime)
        ? fromJsonTimestamp(object.unbondingEndTime)
        : undefined,
    };
  },

  toJSON(message: UserPoolUnbondingTokens): unknown {
    const obj: any = {};
    message.isUnbondingPoolCoin !== undefined &&
      (obj.isUnbondingPoolCoin = message.isUnbondingPoolCoin);
    message.unbondingStartTime !== undefined &&
      (obj.unbondingStartTime = message.unbondingStartTime.toISOString());
    message.unbondingEndTime !== undefined &&
      (obj.unbondingEndTime = message.unbondingEndTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserPoolUnbondingTokens>, I>>(
    object: I
  ): UserPoolUnbondingTokens {
    const message = createBaseUserPoolUnbondingTokens();
    message.isUnbondingPoolCoin = object.isUnbondingPoolCoin ?? "";
    message.unbondingStartTime = object.unbondingStartTime ?? undefined;
    message.unbondingEndTime = object.unbondingEndTime ?? undefined;
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
