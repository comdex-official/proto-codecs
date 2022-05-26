/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.asset.v1beta1";

export interface AppMapping {
  id: Long;
  name: string;
  shortName: string;
  mintGenesisToken: MintGenesisToken[];
}

export interface MintGenesisToken {
  assetId: Long;
  genesisSupply: string;
  isgovToken: boolean;
  recipient: string;
}

function createBaseAppMapping(): AppMapping {
  return { id: Long.UZERO, name: "", shortName: "", mintGenesisToken: [] };
}

export const AppMapping = {
  encode(
    message: AppMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.shortName !== "") {
      writer.uint32(26).string(message.shortName);
    }
    for (const v of message.mintGenesisToken) {
      MintGenesisToken.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.shortName = reader.string();
          break;
        case 4:
          message.mintGenesisToken.push(
            MintGenesisToken.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppMapping {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      shortName: isSet(object.shortName) ? String(object.shortName) : "",
      mintGenesisToken: Array.isArray(object?.mintGenesisToken)
        ? object.mintGenesisToken.map((e: any) => MintGenesisToken.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AppMapping): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.shortName !== undefined && (obj.shortName = message.shortName);
    if (message.mintGenesisToken) {
      obj.mintGenesisToken = message.mintGenesisToken.map((e) =>
        e ? MintGenesisToken.toJSON(e) : undefined
      );
    } else {
      obj.mintGenesisToken = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AppMapping>, I>>(
    object: I
  ): AppMapping {
    const message = createBaseAppMapping();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.name = object.name ?? "";
    message.shortName = object.shortName ?? "";
    message.mintGenesisToken =
      object.mintGenesisToken?.map((e) => MintGenesisToken.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseMintGenesisToken(): MintGenesisToken {
  return {
    assetId: Long.UZERO,
    genesisSupply: "",
    isgovToken: false,
    recipient: "",
  };
}

export const MintGenesisToken = {
  encode(
    message: MintGenesisToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.assetId.isZero()) {
      writer.uint32(8).uint64(message.assetId);
    }
    if (message.genesisSupply !== "") {
      writer.uint32(18).string(message.genesisSupply);
    }
    if (message.isgovToken === true) {
      writer.uint32(24).bool(message.isgovToken);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintGenesisToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintGenesisToken();
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
          message.isgovToken = reader.bool();
          break;
        case 4:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MintGenesisToken {
    return {
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      genesisSupply: isSet(object.genesisSupply)
        ? String(object.genesisSupply)
        : "",
      isgovToken: isSet(object.isgovToken) ? Boolean(object.isgovToken) : false,
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: MintGenesisToken): unknown {
    const obj: any = {};
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.genesisSupply !== undefined &&
      (obj.genesisSupply = message.genesisSupply);
    message.isgovToken !== undefined && (obj.isgovToken = message.isgovToken);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MintGenesisToken>, I>>(
    object: I
  ): MintGenesisToken {
    const message = createBaseMintGenesisToken();
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.genesisSupply = object.genesisSupply ?? "";
    message.isgovToken = object.isgovToken ?? false;
    message.recipient = object.recipient ?? "";
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
