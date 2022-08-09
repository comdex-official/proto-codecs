/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.tokenmint.v1beta1";

/** Will become governance proposal- will trigger token minting & sending */
export interface MsgMintNewTokensRequest {
  from: string;
  appId: Long;
  assetId: Long;
}

export interface MsgMintNewTokensResponse {}

function createBaseMsgMintNewTokensRequest(): MsgMintNewTokensRequest {
  return { from: "", appId: Long.UZERO, assetId: Long.UZERO };
}

export const MsgMintNewTokensRequest = {
  encode(
    message: MsgMintNewTokensRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(24).uint64(message.assetId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgMintNewTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNewTokensRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.appId = reader.uint64() as Long;
          break;
        case 3:
          message.assetId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintNewTokensRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgMintNewTokensRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNewTokensRequest>, I>>(
    object: I
  ): MsgMintNewTokensRequest {
    const message = createBaseMsgMintNewTokensRequest();
    message.from = object.from ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgMintNewTokensResponse(): MsgMintNewTokensResponse {
  return {};
}

export const MsgMintNewTokensResponse = {
  encode(
    _: MsgMintNewTokensResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgMintNewTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNewTokensResponse();
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

  fromJSON(_: any): MsgMintNewTokensResponse {
    return {};
  },

  toJSON(_: MsgMintNewTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNewTokensResponse>, I>>(
    _: I
  ): MsgMintNewTokensResponse {
    const message = createBaseMsgMintNewTokensResponse();
    return message;
  },
};

export interface Msg {
  MsgMintNewTokens(
    request: MsgMintNewTokensRequest
  ): Promise<MsgMintNewTokensResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MsgMintNewTokens = this.MsgMintNewTokens.bind(this);
  }
  MsgMintNewTokens(
    request: MsgMintNewTokensRequest
  ): Promise<MsgMintNewTokensResponse> {
    const data = MsgMintNewTokensRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.tokenmint.v1beta1.Msg",
      "MsgMintNewTokens",
      data
    );
    return promise.then((data) =>
      MsgMintNewTokensResponse.decode(new _m0.Reader(data))
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
