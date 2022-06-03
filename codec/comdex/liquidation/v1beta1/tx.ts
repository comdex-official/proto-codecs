/* eslint-disable */
import Long from "long";
import  _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.liquidation.v1beta1";

export interface WhitelistAppId {
  appMappingId: Long;
  from: string;
}

export interface RemoveWhitelistAppId {
  appMappingId: Long;
  from: string;
}

export interface MsgWhitelistAppIdResponse {}

export interface MsgRemoveWhitelistAppIdResponse {}

function createBaseWhitelistAppId(): WhitelistAppId {
  return { appMappingId: Long.UZERO, from: "" };
}

export const WhitelistAppId = {
  encode(
    message: WhitelistAppId,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appMappingId.isZero()) {
      writer.uint32(8).uint64(message.appMappingId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WhitelistAppId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistAppId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appMappingId = reader.uint64() as Long;
          break;
        case 2:
          message.from = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WhitelistAppId {
    return {
      appMappingId: isSet(object.appMappingId)
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO,
      from: isSet(object.from) ? String(object.from) : "",
    };
  },

  toJSON(message: WhitelistAppId): unknown {
    const obj: any = {};
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
    message.from !== undefined && (obj.from = message.from);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WhitelistAppId>, I>>(
    object: I
  ): WhitelistAppId {
    const message = createBaseWhitelistAppId();
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO;
    message.from = object.from ?? "";
    return message;
  },
};

function createBaseRemoveWhitelistAppId(): RemoveWhitelistAppId {
  return { appMappingId: Long.UZERO, from: "" };
}

export const RemoveWhitelistAppId = {
  encode(
    message: RemoveWhitelistAppId,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appMappingId.isZero()) {
      writer.uint32(8).uint64(message.appMappingId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveWhitelistAppId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveWhitelistAppId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appMappingId = reader.uint64() as Long;
          break;
        case 2:
          message.from = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveWhitelistAppId {
    return {
      appMappingId: isSet(object.appMappingId)
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO,
      from: isSet(object.from) ? String(object.from) : "",
    };
  },

  toJSON(message: RemoveWhitelistAppId): unknown {
    const obj: any = {};
    message.appMappingId !== undefined &&
      (obj.appMappingId = (message.appMappingId || Long.UZERO).toString());
    message.from !== undefined && (obj.from = message.from);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveWhitelistAppId>, I>>(
    object: I
  ): RemoveWhitelistAppId {
    const message = createBaseRemoveWhitelistAppId();
    message.appMappingId =
      object.appMappingId !== undefined && object.appMappingId !== null
        ? Long.fromValue(object.appMappingId)
        : Long.UZERO;
    message.from = object.from ?? "";
    return message;
  },
};

function createBaseMsgWhitelistAppIdResponse(): MsgWhitelistAppIdResponse {
  return {};
}

export const MsgWhitelistAppIdResponse = {
  encode(
    _: MsgWhitelistAppIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWhitelistAppIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelistAppIdResponse();
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

  fromJSON(_: any): MsgWhitelistAppIdResponse {
    return {};
  },

  toJSON(_: MsgWhitelistAppIdResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWhitelistAppIdResponse>, I>>(
    _: I
  ): MsgWhitelistAppIdResponse {
    const message = createBaseMsgWhitelistAppIdResponse();
    return message;
  },
};

function createBaseMsgRemoveWhitelistAppIdResponse(): MsgRemoveWhitelistAppIdResponse {
  return {};
}

export const MsgRemoveWhitelistAppIdResponse = {
  encode(
    _: MsgRemoveWhitelistAppIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveWhitelistAppIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveWhitelistAppIdResponse();
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

  fromJSON(_: any): MsgRemoveWhitelistAppIdResponse {
    return {};
  },

  toJSON(_: MsgRemoveWhitelistAppIdResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveWhitelistAppIdResponse>, I>>(
    _: I
  ): MsgRemoveWhitelistAppIdResponse {
    const message = createBaseMsgRemoveWhitelistAppIdResponse();
    return message;
  },
};

export interface Msg {
  WhitelistApp(request: WhitelistAppId): Promise<MsgWhitelistAppIdResponse>;
  RemoveWhitelistApp(
    request: RemoveWhitelistAppId
  ): Promise<MsgRemoveWhitelistAppIdResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.WhitelistApp = this.WhitelistApp.bind(this);
    this.RemoveWhitelistApp = this.RemoveWhitelistApp.bind(this);
  }
  WhitelistApp(request: WhitelistAppId): Promise<MsgWhitelistAppIdResponse> {
    const data = WhitelistAppId.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidation.v1beta1.Msg",
      "WhitelistApp",
      data
    );
    return promise.then((data) =>
      MsgWhitelistAppIdResponse.decode(new _m0.Reader(data))
    );
  }

  RemoveWhitelistApp(
    request: RemoveWhitelistAppId
  ): Promise<MsgRemoveWhitelistAppIdResponse> {
    const data = RemoveWhitelistAppId.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidation.v1beta1.Msg",
      "RemoveWhitelistApp",
      data
    );
    return promise.then((data) =>
      MsgRemoveWhitelistAppIdResponse.decode(new _m0.Reader(data))
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
