/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "comdex.auction.v1beta1";

export interface MsgPlaceSurplusBidRequest {
  auctionId: Long;
  bidder: string;
  amount?: Coin;
  appId: Long;
  auctionMappingId: Long;
}

export interface MsgPlaceSurplusBidResponse {}

export interface MsgPlaceDebtBidRequest {
  auctionId: Long;
  bidder: string;
  bid?: Coin;
  expectedUserToken?: Coin;
  appId: Long;
  auctionMappingId: Long;
}

export interface MsgPlaceDebtBidResponse {}

export interface MsgPlaceDutchBidRequest {
  auctionId: Long;
  bidder: string;
  amount?: Coin;
  max: string;
  appId: Long;
  auctionMappingId: Long;
}

export interface MsgPlaceDutchBidResponse {}

export interface MsgPlaceDutchLendBidRequest {
  auctionId: Long;
  bidder: string;
  amount?: Coin;
  max: string;
  appId: Long;
  auctionMappingId: Long;
}

export interface MsgPlaceDutchLendBidResponse {}

function createBaseMsgPlaceSurplusBidRequest(): MsgPlaceSurplusBidRequest {
  return {
    auctionId: Long.UZERO,
    bidder: "",
    amount: undefined,
    appId: Long.UZERO,
    auctionMappingId: Long.UZERO,
  };
}

export const MsgPlaceSurplusBidRequest = {
  encode(
    message: MsgPlaceSurplusBidRequest,
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
    if (!message.appId.isZero()) {
      writer.uint32(32).uint64(message.appId);
    }
    if (!message.auctionMappingId.isZero()) {
      writer.uint32(40).uint64(message.auctionMappingId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgPlaceSurplusBidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceSurplusBidRequest();
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
        case 4:
          message.appId = reader.uint64() as Long;
          break;
        case 5:
          message.auctionMappingId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPlaceSurplusBidRequest {
    return {
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      auctionMappingId: isSet(object.auctionMappingId)
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgPlaceSurplusBidRequest): unknown {
    const obj: any = {};
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.auctionMappingId !== undefined &&
      (obj.auctionMappingId = (
        message.auctionMappingId || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlaceSurplusBidRequest>, I>>(
    object: I
  ): MsgPlaceSurplusBidRequest {
    const message = createBaseMsgPlaceSurplusBidRequest();
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.bidder = object.bidder ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.auctionMappingId =
      object.auctionMappingId !== undefined && object.auctionMappingId !== null
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgPlaceSurplusBidResponse(): MsgPlaceSurplusBidResponse {
  return {};
}

export const MsgPlaceSurplusBidResponse = {
  encode(
    _: MsgPlaceSurplusBidResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgPlaceSurplusBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceSurplusBidResponse();
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

  fromJSON(_: any): MsgPlaceSurplusBidResponse {
    return {};
  },

  toJSON(_: MsgPlaceSurplusBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlaceSurplusBidResponse>, I>>(
    _: I
  ): MsgPlaceSurplusBidResponse {
    const message = createBaseMsgPlaceSurplusBidResponse();
    return message;
  },
};

function createBaseMsgPlaceDebtBidRequest(): MsgPlaceDebtBidRequest {
  return {
    auctionId: Long.UZERO,
    bidder: "",
    bid: undefined,
    expectedUserToken: undefined,
    appId: Long.UZERO,
    auctionMappingId: Long.UZERO,
  };
}

export const MsgPlaceDebtBidRequest = {
  encode(
    message: MsgPlaceDebtBidRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }
    if (message.bidder !== "") {
      writer.uint32(18).string(message.bidder);
    }
    if (message.bid !== undefined) {
      Coin.encode(message.bid, writer.uint32(26).fork()).ldelim();
    }
    if (message.expectedUserToken !== undefined) {
      Coin.encode(message.expectedUserToken, writer.uint32(34).fork()).ldelim();
    }
    if (!message.appId.isZero()) {
      writer.uint32(40).uint64(message.appId);
    }
    if (!message.auctionMappingId.isZero()) {
      writer.uint32(48).uint64(message.auctionMappingId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgPlaceDebtBidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceDebtBidRequest();
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
          message.bid = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.expectedUserToken = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.appId = reader.uint64() as Long;
          break;
        case 6:
          message.auctionMappingId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPlaceDebtBidRequest {
    return {
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      bid: isSet(object.bid) ? Coin.fromJSON(object.bid) : undefined,
      expectedUserToken: isSet(object.expectedUserToken)
        ? Coin.fromJSON(object.expectedUserToken)
        : undefined,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      auctionMappingId: isSet(object.auctionMappingId)
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgPlaceDebtBidRequest): unknown {
    const obj: any = {};
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.bid !== undefined &&
      (obj.bid = message.bid ? Coin.toJSON(message.bid) : undefined);
    message.expectedUserToken !== undefined &&
      (obj.expectedUserToken = message.expectedUserToken
        ? Coin.toJSON(message.expectedUserToken)
        : undefined);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.auctionMappingId !== undefined &&
      (obj.auctionMappingId = (
        message.auctionMappingId || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlaceDebtBidRequest>, I>>(
    object: I
  ): MsgPlaceDebtBidRequest {
    const message = createBaseMsgPlaceDebtBidRequest();
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.bidder = object.bidder ?? "";
    message.bid =
      object.bid !== undefined && object.bid !== null
        ? Coin.fromPartial(object.bid)
        : undefined;
    message.expectedUserToken =
      object.expectedUserToken !== undefined &&
      object.expectedUserToken !== null
        ? Coin.fromPartial(object.expectedUserToken)
        : undefined;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.auctionMappingId =
      object.auctionMappingId !== undefined && object.auctionMappingId !== null
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgPlaceDebtBidResponse(): MsgPlaceDebtBidResponse {
  return {};
}

export const MsgPlaceDebtBidResponse = {
  encode(
    _: MsgPlaceDebtBidResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgPlaceDebtBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceDebtBidResponse();
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

  fromJSON(_: any): MsgPlaceDebtBidResponse {
    return {};
  },

  toJSON(_: MsgPlaceDebtBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlaceDebtBidResponse>, I>>(
    _: I
  ): MsgPlaceDebtBidResponse {
    const message = createBaseMsgPlaceDebtBidResponse();
    return message;
  },
};

function createBaseMsgPlaceDutchBidRequest(): MsgPlaceDutchBidRequest {
  return {
    auctionId: Long.UZERO,
    bidder: "",
    amount: undefined,
    max: "",
    appId: Long.UZERO,
    auctionMappingId: Long.UZERO,
  };
}

export const MsgPlaceDutchBidRequest = {
  encode(
    message: MsgPlaceDutchBidRequest,
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
    if (message.max !== "") {
      writer.uint32(34).string(message.max);
    }
    if (!message.appId.isZero()) {
      writer.uint32(40).uint64(message.appId);
    }
    if (!message.auctionMappingId.isZero()) {
      writer.uint32(48).uint64(message.auctionMappingId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgPlaceDutchBidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceDutchBidRequest();
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
        case 4:
          message.max = reader.string();
          break;
        case 5:
          message.appId = reader.uint64() as Long;
          break;
        case 6:
          message.auctionMappingId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPlaceDutchBidRequest {
    return {
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      max: isSet(object.max) ? String(object.max) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      auctionMappingId: isSet(object.auctionMappingId)
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgPlaceDutchBidRequest): unknown {
    const obj: any = {};
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.max !== undefined && (obj.max = message.max);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.auctionMappingId !== undefined &&
      (obj.auctionMappingId = (
        message.auctionMappingId || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlaceDutchBidRequest>, I>>(
    object: I
  ): MsgPlaceDutchBidRequest {
    const message = createBaseMsgPlaceDutchBidRequest();
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.bidder = object.bidder ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    message.max = object.max ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.auctionMappingId =
      object.auctionMappingId !== undefined && object.auctionMappingId !== null
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgPlaceDutchBidResponse(): MsgPlaceDutchBidResponse {
  return {};
}

export const MsgPlaceDutchBidResponse = {
  encode(
    _: MsgPlaceDutchBidResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgPlaceDutchBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceDutchBidResponse();
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

  fromJSON(_: any): MsgPlaceDutchBidResponse {
    return {};
  },

  toJSON(_: MsgPlaceDutchBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlaceDutchBidResponse>, I>>(
    _: I
  ): MsgPlaceDutchBidResponse {
    const message = createBaseMsgPlaceDutchBidResponse();
    return message;
  },
};

function createBaseMsgPlaceDutchLendBidRequest(): MsgPlaceDutchLendBidRequest {
  return {
    auctionId: Long.UZERO,
    bidder: "",
    amount: undefined,
    max: "",
    appId: Long.UZERO,
    auctionMappingId: Long.UZERO,
  };
}

export const MsgPlaceDutchLendBidRequest = {
  encode(
    message: MsgPlaceDutchLendBidRequest,
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
    if (message.max !== "") {
      writer.uint32(34).string(message.max);
    }
    if (!message.appId.isZero()) {
      writer.uint32(40).uint64(message.appId);
    }
    if (!message.auctionMappingId.isZero()) {
      writer.uint32(48).uint64(message.auctionMappingId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgPlaceDutchLendBidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceDutchLendBidRequest();
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
        case 4:
          message.max = reader.string();
          break;
        case 5:
          message.appId = reader.uint64() as Long;
          break;
        case 6:
          message.auctionMappingId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPlaceDutchLendBidRequest {
    return {
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      max: isSet(object.max) ? String(object.max) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      auctionMappingId: isSet(object.auctionMappingId)
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgPlaceDutchLendBidRequest): unknown {
    const obj: any = {};
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.max !== undefined && (obj.max = message.max);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.auctionMappingId !== undefined &&
      (obj.auctionMappingId = (
        message.auctionMappingId || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlaceDutchLendBidRequest>, I>>(
    object: I
  ): MsgPlaceDutchLendBidRequest {
    const message = createBaseMsgPlaceDutchLendBidRequest();
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.bidder = object.bidder ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    message.max = object.max ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.auctionMappingId =
      object.auctionMappingId !== undefined && object.auctionMappingId !== null
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgPlaceDutchLendBidResponse(): MsgPlaceDutchLendBidResponse {
  return {};
}

export const MsgPlaceDutchLendBidResponse = {
  encode(
    _: MsgPlaceDutchLendBidResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgPlaceDutchLendBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceDutchLendBidResponse();
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

  fromJSON(_: any): MsgPlaceDutchLendBidResponse {
    return {};
  },

  toJSON(_: MsgPlaceDutchLendBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlaceDutchLendBidResponse>, I>>(
    _: I
  ): MsgPlaceDutchLendBidResponse {
    const message = createBaseMsgPlaceDutchLendBidResponse();
    return message;
  },
};

export interface Msg {
  MsgPlaceSurplusBid(
    request: MsgPlaceSurplusBidRequest
  ): Promise<MsgPlaceSurplusBidResponse>;
  MsgPlaceDebtBid(
    request: MsgPlaceDebtBidRequest
  ): Promise<MsgPlaceDebtBidResponse>;
  MsgPlaceDutchBid(
    request: MsgPlaceDutchBidRequest
  ): Promise<MsgPlaceDutchBidResponse>;
  MsgPlaceDutchLendBid(
    request: MsgPlaceDutchLendBidRequest
  ): Promise<MsgPlaceDutchLendBidResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MsgPlaceSurplusBid = this.MsgPlaceSurplusBid.bind(this);
    this.MsgPlaceDebtBid = this.MsgPlaceDebtBid.bind(this);
    this.MsgPlaceDutchBid = this.MsgPlaceDutchBid.bind(this);
    this.MsgPlaceDutchLendBid = this.MsgPlaceDutchLendBid.bind(this);
  }
  MsgPlaceSurplusBid(
    request: MsgPlaceSurplusBidRequest
  ): Promise<MsgPlaceSurplusBidResponse> {
    const data = MsgPlaceSurplusBidRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.Msg",
      "MsgPlaceSurplusBid",
      data
    );
    return promise.then((data) =>
      MsgPlaceSurplusBidResponse.decode(new _m0.Reader(data))
    );
  }

  MsgPlaceDebtBid(
    request: MsgPlaceDebtBidRequest
  ): Promise<MsgPlaceDebtBidResponse> {
    const data = MsgPlaceDebtBidRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.Msg",
      "MsgPlaceDebtBid",
      data
    );
    return promise.then((data) =>
      MsgPlaceDebtBidResponse.decode(new _m0.Reader(data))
    );
  }

  MsgPlaceDutchBid(
    request: MsgPlaceDutchBidRequest
  ): Promise<MsgPlaceDutchBidResponse> {
    const data = MsgPlaceDutchBidRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.Msg",
      "MsgPlaceDutchBid",
      data
    );
    return promise.then((data) =>
      MsgPlaceDutchBidResponse.decode(new _m0.Reader(data))
    );
  }

  MsgPlaceDutchLendBid(
    request: MsgPlaceDutchLendBidRequest
  ): Promise<MsgPlaceDutchLendBidResponse> {
    const data = MsgPlaceDutchLendBidRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.Msg",
      "MsgPlaceDutchLendBid",
      data
    );
    return promise.then((data) =>
      MsgPlaceDutchLendBidResponse.decode(new _m0.Reader(data))
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
