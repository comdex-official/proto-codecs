/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.asset.v1beta1";

export interface AppData {
  id: Long;
  name: string;
  shortName: string;
  minGovDeposit: string;
  govTimeInSeconds: Long;
  genesisToken: MintGenesisToken[];
}

export interface MintGenesisToken {
  assetId: Long;
  genesisSupply: string;
  isGovToken: boolean;
  recipient: string;
}

export interface AppAndGovTime {
  appId: Long;
  govTimeInSeconds: Long;
  minGovDeposit: string;
}

function createBaseAppData(): AppData {
  return {
    id: Long.UZERO,
    name: "",
    shortName: "",
    minGovDeposit: "",
    govTimeInSeconds: Long.UZERO,
    genesisToken: [],
  };
}

export const AppData = {
  encode(
    message: AppData,
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
    if (message.minGovDeposit !== "") {
      writer.uint32(34).string(message.minGovDeposit);
    }
    if (!message.govTimeInSeconds.isZero()) {
      writer.uint32(40).uint64(message.govTimeInSeconds);
    }
    for (const v of message.genesisToken) {
      MintGenesisToken.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppData();
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
          message.minGovDeposit = reader.string();
          break;
        case 5:
          message.govTimeInSeconds = reader.uint64() as Long;
          break;
        case 6:
          message.genesisToken.push(
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

  fromJSON(object: any): AppData {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      shortName: isSet(object.shortName) ? String(object.shortName) : "",
      minGovDeposit: isSet(object.minGovDeposit)
        ? String(object.minGovDeposit)
        : "",
      govTimeInSeconds: isSet(object.govTimeInSeconds)
        ? Long.fromValue(object.govTimeInSeconds)
        : Long.UZERO,
      genesisToken: Array.isArray(object?.genesisToken)
        ? object.genesisToken.map((e: any) => MintGenesisToken.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AppData): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.shortName !== undefined && (obj.shortName = message.shortName);
    message.minGovDeposit !== undefined &&
      (obj.minGovDeposit = message.minGovDeposit);
    message.govTimeInSeconds !== undefined &&
      (obj.govTimeInSeconds = (
        message.govTimeInSeconds || Long.UZERO
      ).toString());
    if (message.genesisToken) {
      obj.genesisToken = message.genesisToken.map((e) =>
        e ? MintGenesisToken.toJSON(e) : undefined
      );
    } else {
      obj.genesisToken = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AppData>, I>>(object: I): AppData {
    const message = createBaseAppData();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.name = object.name ?? "";
    message.shortName = object.shortName ?? "";
    message.minGovDeposit = object.minGovDeposit ?? "";
    message.govTimeInSeconds =
      object.govTimeInSeconds !== undefined && object.govTimeInSeconds !== null
        ? Long.fromValue(object.govTimeInSeconds)
        : Long.UZERO;
    message.genesisToken =
      object.genesisToken?.map((e) => MintGenesisToken.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMintGenesisToken(): MintGenesisToken {
  return {
    assetId: Long.UZERO,
    genesisSupply: "",
    isGovToken: false,
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
    if (message.isGovToken === true) {
      writer.uint32(24).bool(message.isGovToken);
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
          message.isGovToken = reader.bool();
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
      isGovToken: isSet(object.isGovToken) ? Boolean(object.isGovToken) : false,
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: MintGenesisToken): unknown {
    const obj: any = {};
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.genesisSupply !== undefined &&
      (obj.genesisSupply = message.genesisSupply);
    message.isGovToken !== undefined && (obj.isGovToken = message.isGovToken);
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
    message.isGovToken = object.isGovToken ?? false;
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseAppAndGovTime(): AppAndGovTime {
  return { appId: Long.UZERO, govTimeInSeconds: Long.UZERO, minGovDeposit: "" };
}

export const AppAndGovTime = {
  encode(
    message: AppAndGovTime,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.govTimeInSeconds.isZero()) {
      writer.uint32(16).uint64(message.govTimeInSeconds);
    }
    if (message.minGovDeposit !== "") {
      writer.uint32(26).string(message.minGovDeposit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppAndGovTime {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppAndGovTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.govTimeInSeconds = reader.uint64() as Long;
          break;
        case 3:
          message.minGovDeposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppAndGovTime {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      govTimeInSeconds: isSet(object.govTimeInSeconds)
        ? Long.fromValue(object.govTimeInSeconds)
        : Long.UZERO,
      minGovDeposit: isSet(object.minGovDeposit)
        ? String(object.minGovDeposit)
        : "",
    };
  },

  toJSON(message: AppAndGovTime): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.govTimeInSeconds !== undefined &&
      (obj.govTimeInSeconds = (
        message.govTimeInSeconds || Long.UZERO
      ).toString());
    message.minGovDeposit !== undefined &&
      (obj.minGovDeposit = message.minGovDeposit);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AppAndGovTime>, I>>(
    object: I
  ): AppAndGovTime {
    const message = createBaseAppAndGovTime();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.govTimeInSeconds =
      object.govTimeInSeconds !== undefined && object.govTimeInSeconds !== null
        ? Long.fromValue(object.govTimeInSeconds)
        : Long.UZERO;
    message.minGovDeposit = object.minGovDeposit ?? "";
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
