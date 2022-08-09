/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.tokenmint.v1beta1";

/** app_vault_type_id will be the key for  the KVStore for this value. */
export interface TokenMint {
  appId: Long;
  mintedTokens: MintedTokens[];
}

export interface MintedTokens {
  assetId: Long;
  genesisSupply: string;
  createdAt?: Date;
  currentSupply: string;
}

function createBaseTokenMint(): TokenMint {
  return { appId: Long.UZERO, mintedTokens: [] };
}

export const TokenMint = {
  encode(
    message: TokenMint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    for (const v of message.mintedTokens) {
      MintedTokens.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.mintedTokens.push(
            MintedTokens.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenMint {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      mintedTokens: Array.isArray(object?.mintedTokens)
        ? object.mintedTokens.map((e: any) => MintedTokens.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TokenMint): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    if (message.mintedTokens) {
      obj.mintedTokens = message.mintedTokens.map((e) =>
        e ? MintedTokens.toJSON(e) : undefined
      );
    } else {
      obj.mintedTokens = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TokenMint>, I>>(
    object: I
  ): TokenMint {
    const message = createBaseTokenMint();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.mintedTokens =
      object.mintedTokens?.map((e) => MintedTokens.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMintedTokens(): MintedTokens {
  return {
    assetId: Long.UZERO,
    genesisSupply: "",
    createdAt: undefined,
    currentSupply: "",
  };
}

export const MintedTokens = {
  encode(
    message: MintedTokens,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.assetId.isZero()) {
      writer.uint32(8).uint64(message.assetId);
    }
    if (message.genesisSupply !== "") {
      writer.uint32(18).string(message.genesisSupply);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.currentSupply !== "") {
      writer.uint32(34).string(message.currentSupply);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintedTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintedTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.uint64() as Long;
          break;
        case 2:
          message.genesisSupply = reader.string();
          break;
        case 3:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.currentSupply = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MintedTokens {
    return {
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      genesisSupply: isSet(object.genesisSupply)
        ? String(object.genesisSupply)
        : "",
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
      currentSupply: isSet(object.currentSupply)
        ? String(object.currentSupply)
        : "",
    };
  },

  toJSON(message: MintedTokens): unknown {
    const obj: any = {};
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.genesisSupply !== undefined &&
      (obj.genesisSupply = message.genesisSupply);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.currentSupply !== undefined &&
      (obj.currentSupply = message.currentSupply);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MintedTokens>, I>>(
    object: I
  ): MintedTokens {
    const message = createBaseMintedTokens();
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.genesisSupply = object.genesisSupply ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.currentSupply = object.currentSupply ?? "";
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
