/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  SurplusAuction,
  DebtAuction,
  DutchAuction,
} from "./comdex/auction/v1beta1/auction";
import {
  PageRequest,
  PageResponse,
} from "./cosmos/base/query/v1beta1/pagination";
import { Params } from "./comdex/auction/v1beta1/params";
import {
  SurplusBiddings,
  DebtBiddings,
  DutchBiddings,
} from "./comdex/auction/v1beta1/biddings";

export const protobufPackage = "comdex.auction.v1beta1";

export interface QuerySurplusAuctionRequest {
  appId: Long;
  auctionMappingId: Long;
  auctionId: Long;
  history: boolean;
}

export interface QuerySurplusAuctionResponse {
  auction?: SurplusAuction;
}

export interface QuerySurplusAuctionsRequest {
  appId: Long;
  history: boolean;
  pagination?: PageRequest;
}

export interface QuerySurplusAuctionsResponse {
  auctions: SurplusAuction[];
  pagination?: PageResponse;
}

export interface QuerySurplusBiddingsRequest {
  bidder: string;
  appId: Long;
  history: boolean;
}

export interface QuerySurplusBiddingsResponse {
  bidder: string;
  biddings: SurplusBiddings[];
}

export interface QueryDebtAuctionRequest {
  appId: Long;
  auctionMappingId: Long;
  auctionId: Long;
  history: boolean;
}

export interface QueryDebtAuctionResponse {
  auction?: DebtAuction;
}

export interface QueryDebtAuctionsRequest {
  appId: Long;
  history: boolean;
  pagination?: PageRequest;
}

export interface QueryDebtAuctionsResponse {
  auctions: DebtAuction[];
  pagination?: PageResponse;
}

export interface QueryDebtBiddingsRequest {
  bidder: string;
  appId: Long;
  history: boolean;
}

export interface QueryDebtBiddingsResponse {
  bidder: string;
  biddings: DebtBiddings[];
}

export interface QueryDutchAuctionRequest {
  appId: Long;
  auctionMappingId: Long;
  auctionId: Long;
  history: boolean;
}

export interface QueryDutchAuctionResponse {
  auction?: DutchAuction;
}

export interface QueryDutchAuctionsRequest {
  appId: Long;
  history: boolean;
  pagination?: PageRequest;
}

export interface QueryDutchAuctionsResponse {
  auctions: DutchAuction[];
  pagination?: PageResponse;
}

export interface QueryDutchBiddingsRequest {
  bidder: string;
  appId: Long;
  history: boolean;
}

export interface QueryDutchBiddingsResponse {
  bidder: string;
  biddings: DutchBiddings[];
}

export interface QueryParamsRequest {}

export interface QueryParamsResponse {
  params?: Params;
}

function createBaseQuerySurplusAuctionRequest(): QuerySurplusAuctionRequest {
  return {
    appId: Long.UZERO,
    auctionMappingId: Long.UZERO,
    auctionId: Long.UZERO,
    history: false,
  };
}

export const QuerySurplusAuctionRequest = {
  encode(
    message: QuerySurplusAuctionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.auctionMappingId.isZero()) {
      writer.uint32(16).uint64(message.auctionMappingId);
    }
    if (!message.auctionId.isZero()) {
      writer.uint32(24).uint64(message.auctionId);
    }
    if (message.history === true) {
      writer.uint32(32).bool(message.history);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySurplusAuctionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySurplusAuctionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.auctionMappingId = reader.uint64() as Long;
          break;
        case 3:
          message.auctionId = reader.uint64() as Long;
          break;
        case 4:
          message.history = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySurplusAuctionRequest {
    return {
      appId: isSet(object.appId) ? Long.fromString(object.appId) : Long.UZERO,
      auctionMappingId: isSet(object.auctionMappingId)
        ? Long.fromString(object.auctionMappingId)
        : Long.UZERO,
      auctionId: isSet(object.auctionId)
        ? Long.fromString(object.auctionId)
        : Long.UZERO,
      history: isSet(object.history) ? Boolean(object.history) : false,
    };
  },

  toJSON(message: QuerySurplusAuctionRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.auctionMappingId !== undefined &&
      (obj.auctionMappingId = (
        message.auctionMappingId || Long.UZERO
      ).toString());
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.history !== undefined && (obj.history = message.history);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySurplusAuctionRequest>, I>>(
    object: I
  ): QuerySurplusAuctionRequest {
    const message = createBaseQuerySurplusAuctionRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.auctionMappingId =
      object.auctionMappingId !== undefined && object.auctionMappingId !== null
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO;
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.history = object.history ?? false;
    return message;
  },
};

function createBaseQuerySurplusAuctionResponse(): QuerySurplusAuctionResponse {
  return { auction: undefined };
}

export const QuerySurplusAuctionResponse = {
  encode(
    message: QuerySurplusAuctionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.auction !== undefined) {
      SurplusAuction.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySurplusAuctionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySurplusAuctionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auction = SurplusAuction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySurplusAuctionResponse {
    return {
      auction: isSet(object.auction)
        ? SurplusAuction.fromJSON(object.auction)
        : undefined,
    };
  },

  toJSON(message: QuerySurplusAuctionResponse): unknown {
    const obj: any = {};
    message.auction !== undefined &&
      (obj.auction = message.auction
        ? SurplusAuction.toJSON(message.auction)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySurplusAuctionResponse>, I>>(
    object: I
  ): QuerySurplusAuctionResponse {
    const message = createBaseQuerySurplusAuctionResponse();
    message.auction =
      object.auction !== undefined && object.auction !== null
        ? SurplusAuction.fromPartial(object.auction)
        : undefined;
    return message;
  },
};

function createBaseQuerySurplusAuctionsRequest(): QuerySurplusAuctionsRequest {
  return { appId: Long.UZERO, history: false, pagination: undefined };
}

export const QuerySurplusAuctionsRequest = {
  encode(
    message: QuerySurplusAuctionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.history === true) {
      writer.uint32(16).bool(message.history);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySurplusAuctionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySurplusAuctionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.history = reader.bool();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySurplusAuctionsRequest {
    return {
      appId: isSet(object.appId) ? Long.fromString(object.appId) : Long.UZERO,
      history: isSet(object.history) ? Boolean(object.history) : false,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QuerySurplusAuctionsRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.history !== undefined && (obj.history = message.history);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySurplusAuctionsRequest>, I>>(
    object: I
  ): QuerySurplusAuctionsRequest {
    const message = createBaseQuerySurplusAuctionsRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.history = object.history ?? false;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQuerySurplusAuctionsResponse(): QuerySurplusAuctionsResponse {
  return { auctions: [], pagination: undefined };
}

export const QuerySurplusAuctionsResponse = {
  encode(
    message: QuerySurplusAuctionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.auctions) {
      SurplusAuction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySurplusAuctionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySurplusAuctionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctions.push(SurplusAuction.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySurplusAuctionsResponse {
    return {
      auctions: Array.isArray(object?.auctions)
        ? object.auctions.map((e: any) => SurplusAuction.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QuerySurplusAuctionsResponse): unknown {
    const obj: any = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map((e) =>
        e ? SurplusAuction.toJSON(e) : undefined
      );
    } else {
      obj.auctions = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySurplusAuctionsResponse>, I>>(
    object: I
  ): QuerySurplusAuctionsResponse {
    const message = createBaseQuerySurplusAuctionsResponse();
    message.auctions =
      object.auctions?.map((e) => SurplusAuction.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQuerySurplusBiddingsRequest(): QuerySurplusBiddingsRequest {
  return { bidder: "", appId: Long.UZERO, history: false };
}

export const QuerySurplusBiddingsRequest = {
  encode(
    message: QuerySurplusBiddingsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (message.history === true) {
      writer.uint32(24).bool(message.history);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySurplusBiddingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySurplusBiddingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.appId = reader.uint64() as Long;
          break;
        case 3:
          message.history = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySurplusBiddingsRequest {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      appId: isSet(object.appId) ? Long.fromString(object.appId) : Long.UZERO,
      history: isSet(object.history) ? Boolean(object.history) : false,
    };
  },

  toJSON(message: QuerySurplusBiddingsRequest): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.history !== undefined && (obj.history = message.history);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySurplusBiddingsRequest>, I>>(
    object: I
  ): QuerySurplusBiddingsRequest {
    const message = createBaseQuerySurplusBiddingsRequest();
    message.bidder = object.bidder ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.history = object.history ?? false;
    return message;
  },
};

function createBaseQuerySurplusBiddingsResponse(): QuerySurplusBiddingsResponse {
  return { bidder: "", biddings: [] };
}

export const QuerySurplusBiddingsResponse = {
  encode(
    message: QuerySurplusBiddingsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    for (const v of message.biddings) {
      SurplusBiddings.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySurplusBiddingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySurplusBiddingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.biddings.push(
            SurplusBiddings.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySurplusBiddingsResponse {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      biddings: Array.isArray(object?.biddings)
        ? object.biddings.map((e: any) => SurplusBiddings.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QuerySurplusBiddingsResponse): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    if (message.biddings) {
      obj.biddings = message.biddings.map((e) =>
        e ? SurplusBiddings.toJSON(e) : undefined
      );
    } else {
      obj.biddings = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySurplusBiddingsResponse>, I>>(
    object: I
  ): QuerySurplusBiddingsResponse {
    const message = createBaseQuerySurplusBiddingsResponse();
    message.bidder = object.bidder ?? "";
    message.biddings =
      object.biddings?.map((e) => SurplusBiddings.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryDebtAuctionRequest(): QueryDebtAuctionRequest {
  return {
    appId: Long.UZERO,
    auctionMappingId: Long.UZERO,
    auctionId: Long.UZERO,
    history: false,
  };
}

export const QueryDebtAuctionRequest = {
  encode(
    message: QueryDebtAuctionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.auctionMappingId.isZero()) {
      writer.uint32(16).uint64(message.auctionMappingId);
    }
    if (!message.auctionId.isZero()) {
      writer.uint32(24).uint64(message.auctionId);
    }
    if (message.history === true) {
      writer.uint32(32).bool(message.history);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDebtAuctionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDebtAuctionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.auctionMappingId = reader.uint64() as Long;
          break;
        case 3:
          message.auctionId = reader.uint64() as Long;
          break;
        case 4:
          message.history = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDebtAuctionRequest {
    return {
      appId: isSet(object.appId) ? Long.fromString(object.appId) : Long.UZERO,
      auctionMappingId: isSet(object.auctionMappingId)
        ? Long.fromString(object.auctionMappingId)
        : Long.UZERO,
      auctionId: isSet(object.auctionId)
        ? Long.fromString(object.auctionId)
        : Long.UZERO,
      history: isSet(object.history) ? Boolean(object.history) : false,
    };
  },

  toJSON(message: QueryDebtAuctionRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.auctionMappingId !== undefined &&
      (obj.auctionMappingId = (
        message.auctionMappingId || Long.UZERO
      ).toString());
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.history !== undefined && (obj.history = message.history);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDebtAuctionRequest>, I>>(
    object: I
  ): QueryDebtAuctionRequest {
    const message = createBaseQueryDebtAuctionRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.auctionMappingId =
      object.auctionMappingId !== undefined && object.auctionMappingId !== null
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO;
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.history = object.history ?? false;
    return message;
  },
};

function createBaseQueryDebtAuctionResponse(): QueryDebtAuctionResponse {
  return { auction: undefined };
}

export const QueryDebtAuctionResponse = {
  encode(
    message: QueryDebtAuctionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.auction !== undefined) {
      DebtAuction.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDebtAuctionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDebtAuctionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auction = DebtAuction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDebtAuctionResponse {
    return {
      auction: isSet(object.auction)
        ? DebtAuction.fromJSON(object.auction)
        : undefined,
    };
  },

  toJSON(message: QueryDebtAuctionResponse): unknown {
    const obj: any = {};
    message.auction !== undefined &&
      (obj.auction = message.auction
        ? DebtAuction.toJSON(message.auction)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDebtAuctionResponse>, I>>(
    object: I
  ): QueryDebtAuctionResponse {
    const message = createBaseQueryDebtAuctionResponse();
    message.auction =
      object.auction !== undefined && object.auction !== null
        ? DebtAuction.fromPartial(object.auction)
        : undefined;
    return message;
  },
};

function createBaseQueryDebtAuctionsRequest(): QueryDebtAuctionsRequest {
  return { appId: Long.UZERO, history: false, pagination: undefined };
}

export const QueryDebtAuctionsRequest = {
  encode(
    message: QueryDebtAuctionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.history === true) {
      writer.uint32(16).bool(message.history);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDebtAuctionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDebtAuctionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.history = reader.bool();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDebtAuctionsRequest {
    return {
      appId: isSet(object.appId) ? Long.fromString(object.appId) : Long.UZERO,
      history: isSet(object.history) ? Boolean(object.history) : false,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDebtAuctionsRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.history !== undefined && (obj.history = message.history);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDebtAuctionsRequest>, I>>(
    object: I
  ): QueryDebtAuctionsRequest {
    const message = createBaseQueryDebtAuctionsRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.history = object.history ?? false;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryDebtAuctionsResponse(): QueryDebtAuctionsResponse {
  return { auctions: [], pagination: undefined };
}

export const QueryDebtAuctionsResponse = {
  encode(
    message: QueryDebtAuctionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.auctions) {
      DebtAuction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDebtAuctionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDebtAuctionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctions.push(DebtAuction.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDebtAuctionsResponse {
    return {
      auctions: Array.isArray(object?.auctions)
        ? object.auctions.map((e: any) => DebtAuction.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDebtAuctionsResponse): unknown {
    const obj: any = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map((e) =>
        e ? DebtAuction.toJSON(e) : undefined
      );
    } else {
      obj.auctions = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDebtAuctionsResponse>, I>>(
    object: I
  ): QueryDebtAuctionsResponse {
    const message = createBaseQueryDebtAuctionsResponse();
    message.auctions =
      object.auctions?.map((e) => DebtAuction.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryDebtBiddingsRequest(): QueryDebtBiddingsRequest {
  return { bidder: "", appId: Long.UZERO, history: false };
}

export const QueryDebtBiddingsRequest = {
  encode(
    message: QueryDebtBiddingsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (message.history === true) {
      writer.uint32(24).bool(message.history);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDebtBiddingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDebtBiddingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.appId = reader.uint64() as Long;
          break;
        case 3:
          message.history = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDebtBiddingsRequest {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      appId: isSet(object.appId) ? Long.fromString(object.appId) : Long.UZERO,
      history: isSet(object.history) ? Boolean(object.history) : false,
    };
  },

  toJSON(message: QueryDebtBiddingsRequest): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.history !== undefined && (obj.history = message.history);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDebtBiddingsRequest>, I>>(
    object: I
  ): QueryDebtBiddingsRequest {
    const message = createBaseQueryDebtBiddingsRequest();
    message.bidder = object.bidder ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.history = object.history ?? false;
    return message;
  },
};

function createBaseQueryDebtBiddingsResponse(): QueryDebtBiddingsResponse {
  return { bidder: "", biddings: [] };
}

export const QueryDebtBiddingsResponse = {
  encode(
    message: QueryDebtBiddingsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    for (const v of message.biddings) {
      DebtBiddings.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDebtBiddingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDebtBiddingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.biddings.push(DebtBiddings.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDebtBiddingsResponse {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      biddings: Array.isArray(object?.biddings)
        ? object.biddings.map((e: any) => DebtBiddings.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryDebtBiddingsResponse): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    if (message.biddings) {
      obj.biddings = message.biddings.map((e) =>
        e ? DebtBiddings.toJSON(e) : undefined
      );
    } else {
      obj.biddings = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDebtBiddingsResponse>, I>>(
    object: I
  ): QueryDebtBiddingsResponse {
    const message = createBaseQueryDebtBiddingsResponse();
    message.bidder = object.bidder ?? "";
    message.biddings =
      object.biddings?.map((e) => DebtBiddings.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryDutchAuctionRequest(): QueryDutchAuctionRequest {
  return {
    appId: Long.UZERO,
    auctionMappingId: Long.UZERO,
    auctionId: Long.UZERO,
    history: false,
  };
}

export const QueryDutchAuctionRequest = {
  encode(
    message: QueryDutchAuctionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.auctionMappingId.isZero()) {
      writer.uint32(16).uint64(message.auctionMappingId);
    }
    if (!message.auctionId.isZero()) {
      writer.uint32(24).uint64(message.auctionId);
    }
    if (message.history === true) {
      writer.uint32(32).bool(message.history);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDutchAuctionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDutchAuctionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.auctionMappingId = reader.uint64() as Long;
          break;
        case 3:
          message.auctionId = reader.uint64() as Long;
          break;
        case 4:
          message.history = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDutchAuctionRequest {
    return {
      appId: isSet(object.appId) ? Long.fromString(object.appId) : Long.UZERO,
      auctionMappingId: isSet(object.auctionMappingId)
        ? Long.fromString(object.auctionMappingId)
        : Long.UZERO,
      auctionId: isSet(object.auctionId)
        ? Long.fromString(object.auctionId)
        : Long.UZERO,
      history: isSet(object.history) ? Boolean(object.history) : false,
    };
  },

  toJSON(message: QueryDutchAuctionRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.auctionMappingId !== undefined &&
      (obj.auctionMappingId = (
        message.auctionMappingId || Long.UZERO
      ).toString());
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.history !== undefined && (obj.history = message.history);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDutchAuctionRequest>, I>>(
    object: I
  ): QueryDutchAuctionRequest {
    const message = createBaseQueryDutchAuctionRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.auctionMappingId =
      object.auctionMappingId !== undefined && object.auctionMappingId !== null
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO;
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.history = object.history ?? false;
    return message;
  },
};

function createBaseQueryDutchAuctionResponse(): QueryDutchAuctionResponse {
  return { auction: undefined };
}

export const QueryDutchAuctionResponse = {
  encode(
    message: QueryDutchAuctionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.auction !== undefined) {
      DutchAuction.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDutchAuctionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDutchAuctionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auction = DutchAuction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDutchAuctionResponse {
    return {
      auction: isSet(object.auction)
        ? DutchAuction.fromJSON(object.auction)
        : undefined,
    };
  },

  toJSON(message: QueryDutchAuctionResponse): unknown {
    const obj: any = {};
    message.auction !== undefined &&
      (obj.auction = message.auction
        ? DutchAuction.toJSON(message.auction)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDutchAuctionResponse>, I>>(
    object: I
  ): QueryDutchAuctionResponse {
    const message = createBaseQueryDutchAuctionResponse();
    message.auction =
      object.auction !== undefined && object.auction !== null
        ? DutchAuction.fromPartial(object.auction)
        : undefined;
    return message;
  },
};

function createBaseQueryDutchAuctionsRequest(): QueryDutchAuctionsRequest {
  return { appId: Long.UZERO, history: false, pagination: undefined };
}

export const QueryDutchAuctionsRequest = {
  encode(
    message: QueryDutchAuctionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.history === true) {
      writer.uint32(16).bool(message.history);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDutchAuctionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDutchAuctionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.history = reader.bool();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDutchAuctionsRequest {
    return {
      appId: isSet(object.appId) ? Long.fromString(object.appId) : Long.UZERO,
      history: isSet(object.history) ? Boolean(object.history) : false,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDutchAuctionsRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.history !== undefined && (obj.history = message.history);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDutchAuctionsRequest>, I>>(
    object: I
  ): QueryDutchAuctionsRequest {
    const message = createBaseQueryDutchAuctionsRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.history = object.history ?? false;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryDutchAuctionsResponse(): QueryDutchAuctionsResponse {
  return { auctions: [], pagination: undefined };
}

export const QueryDutchAuctionsResponse = {
  encode(
    message: QueryDutchAuctionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.auctions) {
      DutchAuction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDutchAuctionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDutchAuctionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctions.push(DutchAuction.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDutchAuctionsResponse {
    return {
      auctions: Array.isArray(object?.auctions)
        ? object.auctions.map((e: any) => DutchAuction.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDutchAuctionsResponse): unknown {
    const obj: any = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map((e) =>
        e ? DutchAuction.toJSON(e) : undefined
      );
    } else {
      obj.auctions = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDutchAuctionsResponse>, I>>(
    object: I
  ): QueryDutchAuctionsResponse {
    const message = createBaseQueryDutchAuctionsResponse();
    message.auctions =
      object.auctions?.map((e) => DutchAuction.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryDutchBiddingsRequest(): QueryDutchBiddingsRequest {
  return { bidder: "", appId: Long.UZERO, history: false };
}

export const QueryDutchBiddingsRequest = {
  encode(
    message: QueryDutchBiddingsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (message.history === true) {
      writer.uint32(24).bool(message.history);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDutchBiddingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDutchBiddingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.appId = reader.uint64() as Long;
          break;
        case 3:
          message.history = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDutchBiddingsRequest {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      appId: isSet(object.appId) ? Long.fromString(object.appId) : Long.UZERO,
      history: isSet(object.history) ? Boolean(object.history) : false,
    };
  },

  toJSON(message: QueryDutchBiddingsRequest): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.history !== undefined && (obj.history = message.history);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDutchBiddingsRequest>, I>>(
    object: I
  ): QueryDutchBiddingsRequest {
    const message = createBaseQueryDutchBiddingsRequest();
    message.bidder = object.bidder ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.history = object.history ?? false;
    return message;
  },
};

function createBaseQueryDutchBiddingsResponse(): QueryDutchBiddingsResponse {
  return { bidder: "", biddings: [] };
}

export const QueryDutchBiddingsResponse = {
  encode(
    message: QueryDutchBiddingsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    for (const v of message.biddings) {
      DutchBiddings.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDutchBiddingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDutchBiddingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.biddings.push(DutchBiddings.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDutchBiddingsResponse {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      biddings: Array.isArray(object?.biddings)
        ? object.biddings.map((e: any) => DutchBiddings.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryDutchBiddingsResponse): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    if (message.biddings) {
      obj.biddings = message.biddings.map((e) =>
        e ? DutchBiddings.toJSON(e) : undefined
      );
    } else {
      obj.biddings = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDutchBiddingsResponse>, I>>(
    object: I
  ): QueryDutchBiddingsResponse {
    const message = createBaseQueryDutchBiddingsResponse();
    message.bidder = object.bidder ?? "";
    message.biddings =
      object.biddings?.map((e) => DutchBiddings.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

export interface Query {
  QuerySurplusAuction(
    request: QuerySurplusAuctionRequest
  ): Promise<QuerySurplusAuctionResponse>;
  QuerySurplusAuctions(
    request: QuerySurplusAuctionsRequest
  ): Promise<QuerySurplusAuctionsResponse>;
  QuerySurplusBiddings(
    request: QuerySurplusBiddingsRequest
  ): Promise<QuerySurplusBiddingsResponse>;
  QueryDebtAuction(
    request: QueryDebtAuctionRequest
  ): Promise<QueryDebtAuctionResponse>;
  QueryDebtAuctions(
    request: QueryDebtAuctionsRequest
  ): Promise<QueryDebtAuctionsResponse>;
  QueryDebtBiddings(
    request: QueryDebtBiddingsRequest
  ): Promise<QueryDebtBiddingsResponse>;
  QueryDutchAuction(
    request: QueryDutchAuctionRequest
  ): Promise<QueryDutchAuctionResponse>;
  QueryDutchAuctions(
    request: QueryDutchAuctionsRequest
  ): Promise<QueryDutchAuctionsResponse>;
  QueryDutchBiddings(
    request: QueryDutchBiddingsRequest
  ): Promise<QueryDutchBiddingsResponse>;
  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.QuerySurplusAuction = this.QuerySurplusAuction.bind(this);
    this.QuerySurplusAuctions = this.QuerySurplusAuctions.bind(this);
    this.QuerySurplusBiddings = this.QuerySurplusBiddings.bind(this);
    this.QueryDebtAuction = this.QueryDebtAuction.bind(this);
    this.QueryDebtAuctions = this.QueryDebtAuctions.bind(this);
    this.QueryDebtBiddings = this.QueryDebtBiddings.bind(this);
    this.QueryDutchAuction = this.QueryDutchAuction.bind(this);
    this.QueryDutchAuctions = this.QueryDutchAuctions.bind(this);
    this.QueryDutchBiddings = this.QueryDutchBiddings.bind(this);
    this.QueryParams = this.QueryParams.bind(this);
  }
  QuerySurplusAuction(
    request: QuerySurplusAuctionRequest
  ): Promise<QuerySurplusAuctionResponse> {
    const data = QuerySurplusAuctionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.Query",
      "QuerySurplusAuction",
      data
    );
    return promise.then((data) =>
      QuerySurplusAuctionResponse.decode(new _m0.Reader(data))
    );
  }

  QuerySurplusAuctions(
    request: QuerySurplusAuctionsRequest
  ): Promise<QuerySurplusAuctionsResponse> {
    const data = QuerySurplusAuctionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.Query",
      "QuerySurplusAuctions",
      data
    );
    return promise.then((data) =>
      QuerySurplusAuctionsResponse.decode(new _m0.Reader(data))
    );
  }

  QuerySurplusBiddings(
    request: QuerySurplusBiddingsRequest
  ): Promise<QuerySurplusBiddingsResponse> {
    const data = QuerySurplusBiddingsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.Query",
      "QuerySurplusBiddings",
      data
    );
    return promise.then((data) =>
      QuerySurplusBiddingsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryDebtAuction(
    request: QueryDebtAuctionRequest
  ): Promise<QueryDebtAuctionResponse> {
    const data = QueryDebtAuctionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.Query",
      "QueryDebtAuction",
      data
    );
    return promise.then((data) =>
      QueryDebtAuctionResponse.decode(new _m0.Reader(data))
    );
  }

  QueryDebtAuctions(
    request: QueryDebtAuctionsRequest
  ): Promise<QueryDebtAuctionsResponse> {
    const data = QueryDebtAuctionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.Query",
      "QueryDebtAuctions",
      data
    );
    return promise.then((data) =>
      QueryDebtAuctionsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryDebtBiddings(
    request: QueryDebtBiddingsRequest
  ): Promise<QueryDebtBiddingsResponse> {
    const data = QueryDebtBiddingsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.Query",
      "QueryDebtBiddings",
      data
    );
    return promise.then((data) =>
      QueryDebtBiddingsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryDutchAuction(
    request: QueryDutchAuctionRequest
  ): Promise<QueryDutchAuctionResponse> {
    const data = QueryDutchAuctionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.Query",
      "QueryDutchAuction",
      data
    );
    return promise.then((data) =>
      QueryDutchAuctionResponse.decode(new _m0.Reader(data))
    );
  }

  QueryDutchAuctions(
    request: QueryDutchAuctionsRequest
  ): Promise<QueryDutchAuctionsResponse> {
    const data = QueryDutchAuctionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.Query",
      "QueryDutchAuctions",
      data
    );
    return promise.then((data) =>
      QueryDutchAuctionsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryDutchBiddings(
    request: QueryDutchBiddingsRequest
  ): Promise<QueryDutchBiddingsResponse> {
    const data = QueryDutchBiddingsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.Query",
      "QueryDutchBiddings",
      data
    );
    return promise.then((data) =>
      QueryDutchBiddingsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.Query",
      "QueryParams",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
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
