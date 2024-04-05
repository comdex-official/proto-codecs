/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "comdex.auctionsV2.v1beta1";

export interface MsgPlaceMarketBidRequest {
  auctionId: Long;
  bidder: string;
  amount?: Coin;
}

export interface MsgPlaceMarketBidResponse {
}

export interface MsgDepositLimitBidRequest {
  collateralTokenId: Long;
  debtTokenId: Long;
  premiumDiscount: string;
  bidder: string;
  amount?: Coin;
}

export interface MsgDepositLimitBidResponse {
}

export interface MsgCancelLimitBidRequest {
  collateralTokenId: Long;
  debtTokenId: Long;
  premiumDiscount: string;
  bidder: string;
}

export interface MsgCancelLimitBidResponse {
}

export interface MsgWithdrawLimitBidRequest {
  collateralTokenId: Long;
  debtTokenId: Long;
  premiumDiscount: string;
  bidder: string;
  amount?: Coin;
}

export interface MsgWithdrawLimitBidResponse {
}

function createBaseMsgPlaceMarketBidRequest(): MsgPlaceMarketBidRequest {
  return { auctionId: Long.UZERO, bidder: "", amount: undefined };
}

export const MsgPlaceMarketBidRequest = {
  encode(message: MsgPlaceMarketBidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceMarketBidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceMarketBidRequest();
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

  fromJSON(object: any): MsgPlaceMarketBidRequest {
    return {
      auctionId: isSet(object.auctionId) ? Long.fromValue(object.auctionId) : Long.UZERO,
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgPlaceMarketBidRequest): unknown {
    const obj: any = {};
    message.auctionId !== undefined && (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPlaceMarketBidRequest>, I>>(base?: I): MsgPlaceMarketBidRequest {
    return MsgPlaceMarketBidRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlaceMarketBidRequest>, I>>(object: I): MsgPlaceMarketBidRequest {
    const message = createBaseMsgPlaceMarketBidRequest();
    message.auctionId = (object.auctionId !== undefined && object.auctionId !== null)
      ? Long.fromValue(object.auctionId)
      : Long.UZERO;
    message.bidder = object.bidder ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseMsgPlaceMarketBidResponse(): MsgPlaceMarketBidResponse {
  return {};
}

export const MsgPlaceMarketBidResponse = {
  encode(_: MsgPlaceMarketBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceMarketBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceMarketBidResponse();
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

  fromJSON(_: any): MsgPlaceMarketBidResponse {
    return {};
  },

  toJSON(_: MsgPlaceMarketBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPlaceMarketBidResponse>, I>>(base?: I): MsgPlaceMarketBidResponse {
    return MsgPlaceMarketBidResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlaceMarketBidResponse>, I>>(_: I): MsgPlaceMarketBidResponse {
    const message = createBaseMsgPlaceMarketBidResponse();
    return message;
  },
};

function createBaseMsgDepositLimitBidRequest(): MsgDepositLimitBidRequest {
  return { collateralTokenId: Long.UZERO, debtTokenId: Long.UZERO, premiumDiscount: "", bidder: "", amount: undefined };
}

export const MsgDepositLimitBidRequest = {
  encode(message: MsgDepositLimitBidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.collateralTokenId.isZero()) {
      writer.uint32(8).uint64(message.collateralTokenId);
    }
    if (!message.debtTokenId.isZero()) {
      writer.uint32(16).uint64(message.debtTokenId);
    }
    if (message.premiumDiscount !== "") {
      writer.uint32(26).string(message.premiumDiscount);
    }
    if (message.bidder !== "") {
      writer.uint32(34).string(message.bidder);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositLimitBidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositLimitBidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralTokenId = reader.uint64() as Long;
          break;
        case 2:
          message.debtTokenId = reader.uint64() as Long;
          break;
        case 3:
          message.premiumDiscount = reader.string();
          break;
        case 4:
          message.bidder = reader.string();
          break;
        case 5:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDepositLimitBidRequest {
    return {
      collateralTokenId: isSet(object.collateralTokenId) ? Long.fromValue(object.collateralTokenId) : Long.UZERO,
      debtTokenId: isSet(object.debtTokenId) ? Long.fromValue(object.debtTokenId) : Long.UZERO,
      premiumDiscount: isSet(object.premiumDiscount) ? String(object.premiumDiscount) : "",
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgDepositLimitBidRequest): unknown {
    const obj: any = {};
    message.collateralTokenId !== undefined &&
      (obj.collateralTokenId = (message.collateralTokenId || Long.UZERO).toString());
    message.debtTokenId !== undefined && (obj.debtTokenId = (message.debtTokenId || Long.UZERO).toString());
    message.premiumDiscount !== undefined && (obj.premiumDiscount = message.premiumDiscount);
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDepositLimitBidRequest>, I>>(base?: I): MsgDepositLimitBidRequest {
    return MsgDepositLimitBidRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositLimitBidRequest>, I>>(object: I): MsgDepositLimitBidRequest {
    const message = createBaseMsgDepositLimitBidRequest();
    message.collateralTokenId = (object.collateralTokenId !== undefined && object.collateralTokenId !== null)
      ? Long.fromValue(object.collateralTokenId)
      : Long.UZERO;
    message.debtTokenId = (object.debtTokenId !== undefined && object.debtTokenId !== null)
      ? Long.fromValue(object.debtTokenId)
      : Long.UZERO;
    message.premiumDiscount = object.premiumDiscount ?? "";
    message.bidder = object.bidder ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseMsgDepositLimitBidResponse(): MsgDepositLimitBidResponse {
  return {};
}

export const MsgDepositLimitBidResponse = {
  encode(_: MsgDepositLimitBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositLimitBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositLimitBidResponse();
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

  fromJSON(_: any): MsgDepositLimitBidResponse {
    return {};
  },

  toJSON(_: MsgDepositLimitBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDepositLimitBidResponse>, I>>(base?: I): MsgDepositLimitBidResponse {
    return MsgDepositLimitBidResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositLimitBidResponse>, I>>(_: I): MsgDepositLimitBidResponse {
    const message = createBaseMsgDepositLimitBidResponse();
    return message;
  },
};

function createBaseMsgCancelLimitBidRequest(): MsgCancelLimitBidRequest {
  return { collateralTokenId: Long.UZERO, debtTokenId: Long.UZERO, premiumDiscount: "", bidder: "" };
}

export const MsgCancelLimitBidRequest = {
  encode(message: MsgCancelLimitBidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.collateralTokenId.isZero()) {
      writer.uint32(8).uint64(message.collateralTokenId);
    }
    if (!message.debtTokenId.isZero()) {
      writer.uint32(16).uint64(message.debtTokenId);
    }
    if (message.premiumDiscount !== "") {
      writer.uint32(26).string(message.premiumDiscount);
    }
    if (message.bidder !== "") {
      writer.uint32(34).string(message.bidder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelLimitBidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelLimitBidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralTokenId = reader.uint64() as Long;
          break;
        case 2:
          message.debtTokenId = reader.uint64() as Long;
          break;
        case 3:
          message.premiumDiscount = reader.string();
          break;
        case 4:
          message.bidder = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelLimitBidRequest {
    return {
      collateralTokenId: isSet(object.collateralTokenId) ? Long.fromValue(object.collateralTokenId) : Long.UZERO,
      debtTokenId: isSet(object.debtTokenId) ? Long.fromValue(object.debtTokenId) : Long.UZERO,
      premiumDiscount: isSet(object.premiumDiscount) ? String(object.premiumDiscount) : "",
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
    };
  },

  toJSON(message: MsgCancelLimitBidRequest): unknown {
    const obj: any = {};
    message.collateralTokenId !== undefined &&
      (obj.collateralTokenId = (message.collateralTokenId || Long.UZERO).toString());
    message.debtTokenId !== undefined && (obj.debtTokenId = (message.debtTokenId || Long.UZERO).toString());
    message.premiumDiscount !== undefined && (obj.premiumDiscount = message.premiumDiscount);
    message.bidder !== undefined && (obj.bidder = message.bidder);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCancelLimitBidRequest>, I>>(base?: I): MsgCancelLimitBidRequest {
    return MsgCancelLimitBidRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelLimitBidRequest>, I>>(object: I): MsgCancelLimitBidRequest {
    const message = createBaseMsgCancelLimitBidRequest();
    message.collateralTokenId = (object.collateralTokenId !== undefined && object.collateralTokenId !== null)
      ? Long.fromValue(object.collateralTokenId)
      : Long.UZERO;
    message.debtTokenId = (object.debtTokenId !== undefined && object.debtTokenId !== null)
      ? Long.fromValue(object.debtTokenId)
      : Long.UZERO;
    message.premiumDiscount = object.premiumDiscount ?? "";
    message.bidder = object.bidder ?? "";
    return message;
  },
};

function createBaseMsgCancelLimitBidResponse(): MsgCancelLimitBidResponse {
  return {};
}

export const MsgCancelLimitBidResponse = {
  encode(_: MsgCancelLimitBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelLimitBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelLimitBidResponse();
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

  fromJSON(_: any): MsgCancelLimitBidResponse {
    return {};
  },

  toJSON(_: MsgCancelLimitBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCancelLimitBidResponse>, I>>(base?: I): MsgCancelLimitBidResponse {
    return MsgCancelLimitBidResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelLimitBidResponse>, I>>(_: I): MsgCancelLimitBidResponse {
    const message = createBaseMsgCancelLimitBidResponse();
    return message;
  },
};

function createBaseMsgWithdrawLimitBidRequest(): MsgWithdrawLimitBidRequest {
  return { collateralTokenId: Long.UZERO, debtTokenId: Long.UZERO, premiumDiscount: "", bidder: "", amount: undefined };
}

export const MsgWithdrawLimitBidRequest = {
  encode(message: MsgWithdrawLimitBidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.collateralTokenId.isZero()) {
      writer.uint32(8).uint64(message.collateralTokenId);
    }
    if (!message.debtTokenId.isZero()) {
      writer.uint32(16).uint64(message.debtTokenId);
    }
    if (message.premiumDiscount !== "") {
      writer.uint32(26).string(message.premiumDiscount);
    }
    if (message.bidder !== "") {
      writer.uint32(34).string(message.bidder);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawLimitBidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawLimitBidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralTokenId = reader.uint64() as Long;
          break;
        case 2:
          message.debtTokenId = reader.uint64() as Long;
          break;
        case 3:
          message.premiumDiscount = reader.string();
          break;
        case 4:
          message.bidder = reader.string();
          break;
        case 5:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawLimitBidRequest {
    return {
      collateralTokenId: isSet(object.collateralTokenId) ? Long.fromValue(object.collateralTokenId) : Long.UZERO,
      debtTokenId: isSet(object.debtTokenId) ? Long.fromValue(object.debtTokenId) : Long.UZERO,
      premiumDiscount: isSet(object.premiumDiscount) ? String(object.premiumDiscount) : "",
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgWithdrawLimitBidRequest): unknown {
    const obj: any = {};
    message.collateralTokenId !== undefined &&
      (obj.collateralTokenId = (message.collateralTokenId || Long.UZERO).toString());
    message.debtTokenId !== undefined && (obj.debtTokenId = (message.debtTokenId || Long.UZERO).toString());
    message.premiumDiscount !== undefined && (obj.premiumDiscount = message.premiumDiscount);
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgWithdrawLimitBidRequest>, I>>(base?: I): MsgWithdrawLimitBidRequest {
    return MsgWithdrawLimitBidRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawLimitBidRequest>, I>>(object: I): MsgWithdrawLimitBidRequest {
    const message = createBaseMsgWithdrawLimitBidRequest();
    message.collateralTokenId = (object.collateralTokenId !== undefined && object.collateralTokenId !== null)
      ? Long.fromValue(object.collateralTokenId)
      : Long.UZERO;
    message.debtTokenId = (object.debtTokenId !== undefined && object.debtTokenId !== null)
      ? Long.fromValue(object.debtTokenId)
      : Long.UZERO;
    message.premiumDiscount = object.premiumDiscount ?? "";
    message.bidder = object.bidder ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseMsgWithdrawLimitBidResponse(): MsgWithdrawLimitBidResponse {
  return {};
}

export const MsgWithdrawLimitBidResponse = {
  encode(_: MsgWithdrawLimitBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawLimitBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawLimitBidResponse();
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

  fromJSON(_: any): MsgWithdrawLimitBidResponse {
    return {};
  },

  toJSON(_: MsgWithdrawLimitBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgWithdrawLimitBidResponse>, I>>(base?: I): MsgWithdrawLimitBidResponse {
    return MsgWithdrawLimitBidResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawLimitBidResponse>, I>>(_: I): MsgWithdrawLimitBidResponse {
    const message = createBaseMsgWithdrawLimitBidResponse();
    return message;
  },
};

export interface Msg {
  MsgPlaceMarketBid(request: MsgPlaceMarketBidRequest): Promise<MsgPlaceMarketBidResponse>;
  MsgDepositLimitBid(request: MsgDepositLimitBidRequest): Promise<MsgDepositLimitBidResponse>;
  MsgCancelLimitBid(request: MsgCancelLimitBidRequest): Promise<MsgCancelLimitBidResponse>;
  MsgWithdrawLimitBid(request: MsgWithdrawLimitBidRequest): Promise<MsgWithdrawLimitBidResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "comdex.auctionsV2.v1beta1.Msg";
    this.rpc = rpc;
    this.MsgPlaceMarketBid = this.MsgPlaceMarketBid.bind(this);
    this.MsgDepositLimitBid = this.MsgDepositLimitBid.bind(this);
    this.MsgCancelLimitBid = this.MsgCancelLimitBid.bind(this);
    this.MsgWithdrawLimitBid = this.MsgWithdrawLimitBid.bind(this);
  }
  MsgPlaceMarketBid(request: MsgPlaceMarketBidRequest): Promise<MsgPlaceMarketBidResponse> {
    const data = MsgPlaceMarketBidRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgPlaceMarketBid", data);
    return promise.then((data) => MsgPlaceMarketBidResponse.decode(new _m0.Reader(data)));
  }

  MsgDepositLimitBid(request: MsgDepositLimitBidRequest): Promise<MsgDepositLimitBidResponse> {
    const data = MsgDepositLimitBidRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgDepositLimitBid", data);
    return promise.then((data) => MsgDepositLimitBidResponse.decode(new _m0.Reader(data)));
  }

  MsgCancelLimitBid(request: MsgCancelLimitBidRequest): Promise<MsgCancelLimitBidResponse> {
    const data = MsgCancelLimitBidRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgCancelLimitBid", data);
    return promise.then((data) => MsgCancelLimitBidResponse.decode(new _m0.Reader(data)));
  }

  MsgWithdrawLimitBid(request: MsgWithdrawLimitBidRequest): Promise<MsgWithdrawLimitBidResponse> {
    const data = MsgWithdrawLimitBidRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgWithdrawLimitBid", data);
    return promise.then((data) => MsgWithdrawLimitBidResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
