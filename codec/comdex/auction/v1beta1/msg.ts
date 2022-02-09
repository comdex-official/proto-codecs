/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "codec/cosmos/base/v1beta1/coin";

export const protobufPackage = "comdex.auction.v1beta1";

export interface MsgPlaceBidRequest {
  auctionId: Long;
  bidder: string;
  amount?: Coin;
}

export interface MsgPlaceBidResponse {}

function createBaseMsgPlaceBidRequest(): MsgPlaceBidRequest {
  return { auctionId: Long.UZERO, bidder: "", amount: undefined };
}

export const MsgPlaceBidRequest = {
  encode(
    message: MsgPlaceBidRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }
    if (message.bidder !== "") {
      writer.uint32(18).string(message.bidder);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceBidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceBidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.uint64() as Long;
          break;
        case 2:
          message.bidder = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPlaceBidRequest {
    return {
      auctionId: isSet(object.auctionId)
        ? Long.fromString(object.auctionId)
        : Long.UZERO,
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgPlaceBidRequest): unknown {
    const obj: any = {};
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlaceBidRequest>, I>>(
    object: I
  ): MsgPlaceBidRequest {
    const message = createBaseMsgPlaceBidRequest();
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.bidder = object.bidder ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBaseMsgPlaceBidResponse(): MsgPlaceBidResponse {
  return {};
}

export const MsgPlaceBidResponse = {
  encode(
    _: MsgPlaceBidResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceBidResponse();
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

  fromJSON(_: any): MsgPlaceBidResponse {
    return {};
  },

  toJSON(_: MsgPlaceBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlaceBidResponse>, I>>(
    _: I
  ): MsgPlaceBidResponse {
    const message = createBaseMsgPlaceBidResponse();
    return message;
  },
};

export interface MsgService {
  MsgPlaceBid(request: MsgPlaceBidRequest): Promise<MsgPlaceBidResponse>;
}

export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MsgPlaceBid = this.MsgPlaceBid.bind(this);
  }
  MsgPlaceBid(request: MsgPlaceBidRequest): Promise<MsgPlaceBidResponse> {
    const data = MsgPlaceBidRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.MsgService",
      "MsgPlaceBid",
      data
    );
    return promise.then((data) =>
      MsgPlaceBidResponse.decode(new _m0.Reader(data))
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
