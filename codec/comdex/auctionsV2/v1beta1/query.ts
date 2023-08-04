/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../comdex/auctionsV2/v1beta1/params";
import {
  Auction,
  LimitBidProtocolDataForQuery,
  LimitBidProtocolDataWithUserForQuery,
} from "../../../comdex/auctionsV2/v1beta1/auction";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import {
  AuctionParams,
  Bid,
  LimitOrderBid,
  AuctionFeesCollectionFromLimitBidTx,
} from "../../../comdex/auctionsV2/v1beta1/bid";

export const protobufPackage = "comdex.auctionsV2.v1beta1";

export interface QueryParamsRequest {}

export interface QueryParamsResponse {
  params?: Params;
}

export interface QueryAuctionRequest {
  auctionId: Long;
  history: boolean;
}

export interface QueryAuctionResponse {
  auction?: Auction;
}

export interface QueryAuctionsRequest {
  auctionType: Long;
  history: boolean;
  pagination?: PageRequest;
}

export interface QueryAuctionsResponse {
  auctions: Auction[];
  pagination?: PageResponse;
}

export interface QueryBidsRequest {
  bidder: string;
  history: boolean;
  pagination?: PageRequest;
}

export interface QueryBidsResponse {
  bidder: string;
  bids: Bid[];
  pagination?: PageResponse;
}

export interface QueryAuctionParamsRequest {}

export interface QueryAuctionParamsResponse {
  auctionParams?: AuctionParams;
}

export interface QueryUserLimitBidsByAssetIDRequest {
  bidder: string;
  collateralTokenId: Long;
  debtTokenId: Long;
  pagination?: PageRequest;
}

export interface QueryUserLimitBidsByAssetIDResponse {
  bidder: string;
  totalAmount: string;
  limitOrderBids: LimitOrderBid[];
  pagination?: PageResponse;
}

export interface QueryLimitBidsRequest {
  collateralTokenId: Long;
  debtTokenId: Long;
  pagination?: PageRequest;
}

export interface QueryLimitBidsResponse {
  limitOrderBids: LimitOrderBid[];
  pagination?: PageResponse;
}

export interface QueryLimitBidProtocolDataRequest {
  pagination?: PageRequest;
}

export interface QueryLimitBidProtocolDataResponse {
  limitBidProtocolData: LimitBidProtocolDataForQuery[];
  pagination?: PageResponse;
}

export interface QueryAuctionFeesCollectionFromLimitBidTxRequest {
  pagination?: PageRequest;
}

export interface QueryAuctionFeesCollectionFromLimitBidTxResponse {
  auctionFeesCollectionFromLimitBidTx: AuctionFeesCollectionFromLimitBidTx[];
  pagination?: PageResponse;
}

export interface QueryLimitBidProtocolDataWithUserRequest {
  bidder: string;
  pagination?: PageRequest;
}

export interface QueryLimitBidProtocolDataWithUserResponse {
  limitBidProtocolDataWithUser: LimitBidProtocolDataWithUserForQuery[];
  pagination?: PageResponse;
}

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

function createBaseQueryAuctionRequest(): QueryAuctionRequest {
  return { auctionId: Long.UZERO, history: false };
}

export const QueryAuctionRequest = {
  encode(
    message: QueryAuctionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }
    if (message.history === true) {
      writer.uint32(16).bool(message.history);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.uint64() as Long;
          break;
        case 2:
          message.history = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAuctionRequest {
    return {
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
      history: isSet(object.history) ? Boolean(object.history) : false,
    };
  },

  toJSON(message: QueryAuctionRequest): unknown {
    const obj: any = {};
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.history !== undefined && (obj.history = message.history);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAuctionRequest>, I>>(
    object: I
  ): QueryAuctionRequest {
    const message = createBaseQueryAuctionRequest();
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.history = object.history ?? false;
    return message;
  },
};

function createBaseQueryAuctionResponse(): QueryAuctionResponse {
  return { auction: undefined };
}

export const QueryAuctionResponse = {
  encode(
    message: QueryAuctionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.auction !== undefined) {
      Auction.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAuctionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auction = Auction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAuctionResponse {
    return {
      auction: isSet(object.auction)
        ? Auction.fromJSON(object.auction)
        : undefined,
    };
  },

  toJSON(message: QueryAuctionResponse): unknown {
    const obj: any = {};
    message.auction !== undefined &&
      (obj.auction = message.auction
        ? Auction.toJSON(message.auction)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAuctionResponse>, I>>(
    object: I
  ): QueryAuctionResponse {
    const message = createBaseQueryAuctionResponse();
    message.auction =
      object.auction !== undefined && object.auction !== null
        ? Auction.fromPartial(object.auction)
        : undefined;
    return message;
  },
};

function createBaseQueryAuctionsRequest(): QueryAuctionsRequest {
  return { auctionType: Long.UZERO, history: false, pagination: undefined };
}

export const QueryAuctionsRequest = {
  encode(
    message: QueryAuctionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.auctionType.isZero()) {
      writer.uint32(8).uint64(message.auctionType);
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
  ): QueryAuctionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionType = reader.uint64() as Long;
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

  fromJSON(object: any): QueryAuctionsRequest {
    return {
      auctionType: isSet(object.auctionType)
        ? Long.fromValue(object.auctionType)
        : Long.UZERO,
      history: isSet(object.history) ? Boolean(object.history) : false,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAuctionsRequest): unknown {
    const obj: any = {};
    message.auctionType !== undefined &&
      (obj.auctionType = (message.auctionType || Long.UZERO).toString());
    message.history !== undefined && (obj.history = message.history);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAuctionsRequest>, I>>(
    object: I
  ): QueryAuctionsRequest {
    const message = createBaseQueryAuctionsRequest();
    message.auctionType =
      object.auctionType !== undefined && object.auctionType !== null
        ? Long.fromValue(object.auctionType)
        : Long.UZERO;
    message.history = object.history ?? false;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAuctionsResponse(): QueryAuctionsResponse {
  return { auctions: [], pagination: undefined };
}

export const QueryAuctionsResponse = {
  encode(
    message: QueryAuctionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.auctions) {
      Auction.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAuctionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctions.push(Auction.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAuctionsResponse {
    return {
      auctions: Array.isArray(object?.auctions)
        ? object.auctions.map((e: any) => Auction.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAuctionsResponse): unknown {
    const obj: any = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map((e) =>
        e ? Auction.toJSON(e) : undefined
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

  fromPartial<I extends Exact<DeepPartial<QueryAuctionsResponse>, I>>(
    object: I
  ): QueryAuctionsResponse {
    const message = createBaseQueryAuctionsResponse();
    message.auctions =
      object.auctions?.map((e) => Auction.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryBidsRequest(): QueryBidsRequest {
  return { bidder: "", history: false, pagination: undefined };
}

export const QueryBidsRequest = {
  encode(
    message: QueryBidsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.history === true) {
      writer.uint32(16).bool(message.history);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
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

  fromJSON(object: any): QueryBidsRequest {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      history: isSet(object.history) ? Boolean(object.history) : false,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBidsRequest): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.history !== undefined && (obj.history = message.history);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBidsRequest>, I>>(
    object: I
  ): QueryBidsRequest {
    const message = createBaseQueryBidsRequest();
    message.bidder = object.bidder ?? "";
    message.history = object.history ?? false;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryBidsResponse(): QueryBidsResponse {
  return { bidder: "", bids: [], pagination: undefined };
}

export const QueryBidsResponse = {
  encode(
    message: QueryBidsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    for (const v of message.bids) {
      Bid.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.bids.push(Bid.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBidsResponse {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      bids: Array.isArray(object?.bids)
        ? object.bids.map((e: any) => Bid.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBidsResponse): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    if (message.bids) {
      obj.bids = message.bids.map((e) => (e ? Bid.toJSON(e) : undefined));
    } else {
      obj.bids = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBidsResponse>, I>>(
    object: I
  ): QueryBidsResponse {
    const message = createBaseQueryBidsResponse();
    message.bidder = object.bidder ?? "";
    message.bids = object.bids?.map((e) => Bid.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAuctionParamsRequest(): QueryAuctionParamsRequest {
  return {};
}

export const QueryAuctionParamsRequest = {
  encode(
    _: QueryAuctionParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAuctionParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionParamsRequest();
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

  fromJSON(_: any): QueryAuctionParamsRequest {
    return {};
  },

  toJSON(_: QueryAuctionParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAuctionParamsRequest>, I>>(
    _: I
  ): QueryAuctionParamsRequest {
    const message = createBaseQueryAuctionParamsRequest();
    return message;
  },
};

function createBaseQueryAuctionParamsResponse(): QueryAuctionParamsResponse {
  return { auctionParams: undefined };
}

export const QueryAuctionParamsResponse = {
  encode(
    message: QueryAuctionParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.auctionParams !== undefined) {
      AuctionParams.encode(
        message.auctionParams,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAuctionParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionParams = AuctionParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAuctionParamsResponse {
    return {
      auctionParams: isSet(object.auctionParams)
        ? AuctionParams.fromJSON(object.auctionParams)
        : undefined,
    };
  },

  toJSON(message: QueryAuctionParamsResponse): unknown {
    const obj: any = {};
    message.auctionParams !== undefined &&
      (obj.auctionParams = message.auctionParams
        ? AuctionParams.toJSON(message.auctionParams)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAuctionParamsResponse>, I>>(
    object: I
  ): QueryAuctionParamsResponse {
    const message = createBaseQueryAuctionParamsResponse();
    message.auctionParams =
      object.auctionParams !== undefined && object.auctionParams !== null
        ? AuctionParams.fromPartial(object.auctionParams)
        : undefined;
    return message;
  },
};

function createBaseQueryUserLimitBidsByAssetIDRequest(): QueryUserLimitBidsByAssetIDRequest {
  return {
    bidder: "",
    collateralTokenId: Long.UZERO,
    debtTokenId: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryUserLimitBidsByAssetIDRequest = {
  encode(
    message: QueryUserLimitBidsByAssetIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (!message.collateralTokenId.isZero()) {
      writer.uint32(16).uint64(message.collateralTokenId);
    }
    if (!message.debtTokenId.isZero()) {
      writer.uint32(24).uint64(message.debtTokenId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserLimitBidsByAssetIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserLimitBidsByAssetIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.collateralTokenId = reader.uint64() as Long;
          break;
        case 3:
          message.debtTokenId = reader.uint64() as Long;
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserLimitBidsByAssetIDRequest {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      collateralTokenId: isSet(object.collateralTokenId)
        ? Long.fromValue(object.collateralTokenId)
        : Long.UZERO,
      debtTokenId: isSet(object.debtTokenId)
        ? Long.fromValue(object.debtTokenId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryUserLimitBidsByAssetIDRequest): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.collateralTokenId !== undefined &&
      (obj.collateralTokenId = (
        message.collateralTokenId || Long.UZERO
      ).toString());
    message.debtTokenId !== undefined &&
      (obj.debtTokenId = (message.debtTokenId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryUserLimitBidsByAssetIDRequest>, I>
  >(object: I): QueryUserLimitBidsByAssetIDRequest {
    const message = createBaseQueryUserLimitBidsByAssetIDRequest();
    message.bidder = object.bidder ?? "";
    message.collateralTokenId =
      object.collateralTokenId !== undefined &&
      object.collateralTokenId !== null
        ? Long.fromValue(object.collateralTokenId)
        : Long.UZERO;
    message.debtTokenId =
      object.debtTokenId !== undefined && object.debtTokenId !== null
        ? Long.fromValue(object.debtTokenId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryUserLimitBidsByAssetIDResponse(): QueryUserLimitBidsByAssetIDResponse {
  return {
    bidder: "",
    totalAmount: "",
    limitOrderBids: [],
    pagination: undefined,
  };
}

export const QueryUserLimitBidsByAssetIDResponse = {
  encode(
    message: QueryUserLimitBidsByAssetIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.totalAmount !== "") {
      writer.uint32(18).string(message.totalAmount);
    }
    for (const v of message.limitOrderBids) {
      LimitOrderBid.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserLimitBidsByAssetIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserLimitBidsByAssetIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.totalAmount = reader.string();
          break;
        case 3:
          message.limitOrderBids.push(
            LimitOrderBid.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserLimitBidsByAssetIDResponse {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      totalAmount: isSet(object.totalAmount) ? String(object.totalAmount) : "",
      limitOrderBids: Array.isArray(object?.limitOrderBids)
        ? object.limitOrderBids.map((e: any) => LimitOrderBid.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryUserLimitBidsByAssetIDResponse): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.totalAmount !== undefined &&
      (obj.totalAmount = message.totalAmount);
    if (message.limitOrderBids) {
      obj.limitOrderBids = message.limitOrderBids.map((e) =>
        e ? LimitOrderBid.toJSON(e) : undefined
      );
    } else {
      obj.limitOrderBids = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryUserLimitBidsByAssetIDResponse>, I>
  >(object: I): QueryUserLimitBidsByAssetIDResponse {
    const message = createBaseQueryUserLimitBidsByAssetIDResponse();
    message.bidder = object.bidder ?? "";
    message.totalAmount = object.totalAmount ?? "";
    message.limitOrderBids =
      object.limitOrderBids?.map((e) => LimitOrderBid.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryLimitBidsRequest(): QueryLimitBidsRequest {
  return {
    collateralTokenId: Long.UZERO,
    debtTokenId: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryLimitBidsRequest = {
  encode(
    message: QueryLimitBidsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.collateralTokenId.isZero()) {
      writer.uint32(8).uint64(message.collateralTokenId);
    }
    if (!message.debtTokenId.isZero()) {
      writer.uint32(16).uint64(message.debtTokenId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLimitBidsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLimitBidsRequest();
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLimitBidsRequest {
    return {
      collateralTokenId: isSet(object.collateralTokenId)
        ? Long.fromValue(object.collateralTokenId)
        : Long.UZERO,
      debtTokenId: isSet(object.debtTokenId)
        ? Long.fromValue(object.debtTokenId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLimitBidsRequest): unknown {
    const obj: any = {};
    message.collateralTokenId !== undefined &&
      (obj.collateralTokenId = (
        message.collateralTokenId || Long.UZERO
      ).toString());
    message.debtTokenId !== undefined &&
      (obj.debtTokenId = (message.debtTokenId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLimitBidsRequest>, I>>(
    object: I
  ): QueryLimitBidsRequest {
    const message = createBaseQueryLimitBidsRequest();
    message.collateralTokenId =
      object.collateralTokenId !== undefined &&
      object.collateralTokenId !== null
        ? Long.fromValue(object.collateralTokenId)
        : Long.UZERO;
    message.debtTokenId =
      object.debtTokenId !== undefined && object.debtTokenId !== null
        ? Long.fromValue(object.debtTokenId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryLimitBidsResponse(): QueryLimitBidsResponse {
  return { limitOrderBids: [], pagination: undefined };
}

export const QueryLimitBidsResponse = {
  encode(
    message: QueryLimitBidsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.limitOrderBids) {
      LimitOrderBid.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryLimitBidsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLimitBidsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limitOrderBids.push(
            LimitOrderBid.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryLimitBidsResponse {
    return {
      limitOrderBids: Array.isArray(object?.limitOrderBids)
        ? object.limitOrderBids.map((e: any) => LimitOrderBid.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLimitBidsResponse): unknown {
    const obj: any = {};
    if (message.limitOrderBids) {
      obj.limitOrderBids = message.limitOrderBids.map((e) =>
        e ? LimitOrderBid.toJSON(e) : undefined
      );
    } else {
      obj.limitOrderBids = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLimitBidsResponse>, I>>(
    object: I
  ): QueryLimitBidsResponse {
    const message = createBaseQueryLimitBidsResponse();
    message.limitOrderBids =
      object.limitOrderBids?.map((e) => LimitOrderBid.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryLimitBidProtocolDataRequest(): QueryLimitBidProtocolDataRequest {
  return { pagination: undefined };
}

export const QueryLimitBidProtocolDataRequest = {
  encode(
    message: QueryLimitBidProtocolDataRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLimitBidProtocolDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLimitBidProtocolDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLimitBidProtocolDataRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLimitBidProtocolDataRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryLimitBidProtocolDataRequest>, I>
  >(object: I): QueryLimitBidProtocolDataRequest {
    const message = createBaseQueryLimitBidProtocolDataRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryLimitBidProtocolDataResponse(): QueryLimitBidProtocolDataResponse {
  return { limitBidProtocolData: [], pagination: undefined };
}

export const QueryLimitBidProtocolDataResponse = {
  encode(
    message: QueryLimitBidProtocolDataResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.limitBidProtocolData) {
      LimitBidProtocolDataForQuery.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
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
  ): QueryLimitBidProtocolDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLimitBidProtocolDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limitBidProtocolData.push(
            LimitBidProtocolDataForQuery.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryLimitBidProtocolDataResponse {
    return {
      limitBidProtocolData: Array.isArray(object?.limitBidProtocolData)
        ? object.limitBidProtocolData.map((e: any) =>
            LimitBidProtocolDataForQuery.fromJSON(e)
          )
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLimitBidProtocolDataResponse): unknown {
    const obj: any = {};
    if (message.limitBidProtocolData) {
      obj.limitBidProtocolData = message.limitBidProtocolData.map((e) =>
        e ? LimitBidProtocolDataForQuery.toJSON(e) : undefined
      );
    } else {
      obj.limitBidProtocolData = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryLimitBidProtocolDataResponse>, I>
  >(object: I): QueryLimitBidProtocolDataResponse {
    const message = createBaseQueryLimitBidProtocolDataResponse();
    message.limitBidProtocolData =
      object.limitBidProtocolData?.map((e) =>
        LimitBidProtocolDataForQuery.fromPartial(e)
      ) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAuctionFeesCollectionFromLimitBidTxRequest(): QueryAuctionFeesCollectionFromLimitBidTxRequest {
  return { pagination: undefined };
}

export const QueryAuctionFeesCollectionFromLimitBidTxRequest = {
  encode(
    message: QueryAuctionFeesCollectionFromLimitBidTxRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAuctionFeesCollectionFromLimitBidTxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionFeesCollectionFromLimitBidTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAuctionFeesCollectionFromLimitBidTxRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAuctionFeesCollectionFromLimitBidTxRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryAuctionFeesCollectionFromLimitBidTxRequest>,
      I
    >
  >(object: I): QueryAuctionFeesCollectionFromLimitBidTxRequest {
    const message = createBaseQueryAuctionFeesCollectionFromLimitBidTxRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAuctionFeesCollectionFromLimitBidTxResponse(): QueryAuctionFeesCollectionFromLimitBidTxResponse {
  return { auctionFeesCollectionFromLimitBidTx: [], pagination: undefined };
}

export const QueryAuctionFeesCollectionFromLimitBidTxResponse = {
  encode(
    message: QueryAuctionFeesCollectionFromLimitBidTxResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.auctionFeesCollectionFromLimitBidTx) {
      AuctionFeesCollectionFromLimitBidTx.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
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
  ): QueryAuctionFeesCollectionFromLimitBidTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseQueryAuctionFeesCollectionFromLimitBidTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionFeesCollectionFromLimitBidTx.push(
            AuctionFeesCollectionFromLimitBidTx.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryAuctionFeesCollectionFromLimitBidTxResponse {
    return {
      auctionFeesCollectionFromLimitBidTx: Array.isArray(
        object?.auctionFeesCollectionFromLimitBidTx
      )
        ? object.auctionFeesCollectionFromLimitBidTx.map((e: any) =>
            AuctionFeesCollectionFromLimitBidTx.fromJSON(e)
          )
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAuctionFeesCollectionFromLimitBidTxResponse): unknown {
    const obj: any = {};
    if (message.auctionFeesCollectionFromLimitBidTx) {
      obj.auctionFeesCollectionFromLimitBidTx =
        message.auctionFeesCollectionFromLimitBidTx.map((e) =>
          e ? AuctionFeesCollectionFromLimitBidTx.toJSON(e) : undefined
        );
    } else {
      obj.auctionFeesCollectionFromLimitBidTx = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryAuctionFeesCollectionFromLimitBidTxResponse>,
      I
    >
  >(object: I): QueryAuctionFeesCollectionFromLimitBidTxResponse {
    const message =
      createBaseQueryAuctionFeesCollectionFromLimitBidTxResponse();
    message.auctionFeesCollectionFromLimitBidTx =
      object.auctionFeesCollectionFromLimitBidTx?.map((e) =>
        AuctionFeesCollectionFromLimitBidTx.fromPartial(e)
      ) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryLimitBidProtocolDataWithUserRequest(): QueryLimitBidProtocolDataWithUserRequest {
  return { bidder: "", pagination: undefined };
}

export const QueryLimitBidProtocolDataWithUserRequest = {
  encode(
    message: QueryLimitBidProtocolDataWithUserRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLimitBidProtocolDataWithUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLimitBidProtocolDataWithUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLimitBidProtocolDataWithUserRequest {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLimitBidProtocolDataWithUserRequest): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryLimitBidProtocolDataWithUserRequest>, I>
  >(object: I): QueryLimitBidProtocolDataWithUserRequest {
    const message = createBaseQueryLimitBidProtocolDataWithUserRequest();
    message.bidder = object.bidder ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryLimitBidProtocolDataWithUserResponse(): QueryLimitBidProtocolDataWithUserResponse {
  return { limitBidProtocolDataWithUser: [], pagination: undefined };
}

export const QueryLimitBidProtocolDataWithUserResponse = {
  encode(
    message: QueryLimitBidProtocolDataWithUserResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.limitBidProtocolDataWithUser) {
      LimitBidProtocolDataWithUserForQuery.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
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
  ): QueryLimitBidProtocolDataWithUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLimitBidProtocolDataWithUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limitBidProtocolDataWithUser.push(
            LimitBidProtocolDataWithUserForQuery.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryLimitBidProtocolDataWithUserResponse {
    return {
      limitBidProtocolDataWithUser: Array.isArray(
        object?.limitBidProtocolDataWithUser
      )
        ? object.limitBidProtocolDataWithUser.map((e: any) =>
            LimitBidProtocolDataWithUserForQuery.fromJSON(e)
          )
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryLimitBidProtocolDataWithUserResponse): unknown {
    const obj: any = {};
    if (message.limitBidProtocolDataWithUser) {
      obj.limitBidProtocolDataWithUser =
        message.limitBidProtocolDataWithUser.map((e) =>
          e ? LimitBidProtocolDataWithUserForQuery.toJSON(e) : undefined
        );
    } else {
      obj.limitBidProtocolDataWithUser = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryLimitBidProtocolDataWithUserResponse>, I>
  >(object: I): QueryLimitBidProtocolDataWithUserResponse {
    const message = createBaseQueryLimitBidProtocolDataWithUserResponse();
    message.limitBidProtocolDataWithUser =
      object.limitBidProtocolDataWithUser?.map((e) =>
        LimitBidProtocolDataWithUserForQuery.fromPartial(e)
      ) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

export interface Query {
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  Auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse>;
  Auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse>;
  Bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
  AuctionParams(
    request: QueryAuctionParamsRequest
  ): Promise<QueryAuctionParamsResponse>;
  UserLimitBidsByAssetID(
    request: QueryUserLimitBidsByAssetIDRequest
  ): Promise<QueryUserLimitBidsByAssetIDResponse>;
  LimitBids(request: QueryLimitBidsRequest): Promise<QueryLimitBidsResponse>;
  LimitBidProtocolData(
    request: QueryLimitBidProtocolDataRequest
  ): Promise<QueryLimitBidProtocolDataResponse>;
  AuctionFeesCollectionData(
    request: QueryAuctionFeesCollectionFromLimitBidTxRequest
  ): Promise<QueryAuctionFeesCollectionFromLimitBidTxResponse>;
  LimitBidProtocolDataWithUser(
    request: QueryLimitBidProtocolDataWithUserRequest
  ): Promise<QueryLimitBidProtocolDataWithUserResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Auction = this.Auction.bind(this);
    this.Auctions = this.Auctions.bind(this);
    this.Bids = this.Bids.bind(this);
    this.AuctionParams = this.AuctionParams.bind(this);
    this.UserLimitBidsByAssetID = this.UserLimitBidsByAssetID.bind(this);
    this.LimitBids = this.LimitBids.bind(this);
    this.LimitBidProtocolData = this.LimitBidProtocolData.bind(this);
    this.AuctionFeesCollectionData = this.AuctionFeesCollectionData.bind(this);
    this.LimitBidProtocolDataWithUser =
      this.LimitBidProtocolDataWithUser.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auctionsV2.v1beta1.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  Auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse> {
    const data = QueryAuctionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auctionsV2.v1beta1.Query",
      "Auction",
      data
    );
    return promise.then((data) =>
      QueryAuctionResponse.decode(new _m0.Reader(data))
    );
  }

  Auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse> {
    const data = QueryAuctionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auctionsV2.v1beta1.Query",
      "Auctions",
      data
    );
    return promise.then((data) =>
      QueryAuctionsResponse.decode(new _m0.Reader(data))
    );
  }

  Bids(request: QueryBidsRequest): Promise<QueryBidsResponse> {
    const data = QueryBidsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auctionsV2.v1beta1.Query",
      "Bids",
      data
    );
    return promise.then((data) =>
      QueryBidsResponse.decode(new _m0.Reader(data))
    );
  }

  AuctionParams(
    request: QueryAuctionParamsRequest
  ): Promise<QueryAuctionParamsResponse> {
    const data = QueryAuctionParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auctionsV2.v1beta1.Query",
      "AuctionParams",
      data
    );
    return promise.then((data) =>
      QueryAuctionParamsResponse.decode(new _m0.Reader(data))
    );
  }

  UserLimitBidsByAssetID(
    request: QueryUserLimitBidsByAssetIDRequest
  ): Promise<QueryUserLimitBidsByAssetIDResponse> {
    const data = QueryUserLimitBidsByAssetIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auctionsV2.v1beta1.Query",
      "UserLimitBidsByAssetID",
      data
    );
    return promise.then((data) =>
      QueryUserLimitBidsByAssetIDResponse.decode(new _m0.Reader(data))
    );
  }

  LimitBids(request: QueryLimitBidsRequest): Promise<QueryLimitBidsResponse> {
    const data = QueryLimitBidsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auctionsV2.v1beta1.Query",
      "LimitBids",
      data
    );
    return promise.then((data) =>
      QueryLimitBidsResponse.decode(new _m0.Reader(data))
    );
  }

  LimitBidProtocolData(
    request: QueryLimitBidProtocolDataRequest
  ): Promise<QueryLimitBidProtocolDataResponse> {
    const data = QueryLimitBidProtocolDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auctionsV2.v1beta1.Query",
      "LimitBidProtocolData",
      data
    );
    return promise.then((data) =>
      QueryLimitBidProtocolDataResponse.decode(new _m0.Reader(data))
    );
  }

  AuctionFeesCollectionData(
    request: QueryAuctionFeesCollectionFromLimitBidTxRequest
  ): Promise<QueryAuctionFeesCollectionFromLimitBidTxResponse> {
    const data =
      QueryAuctionFeesCollectionFromLimitBidTxRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auctionsV2.v1beta1.Query",
      "AuctionFeesCollectionData",
      data
    );
    return promise.then((data) =>
      QueryAuctionFeesCollectionFromLimitBidTxResponse.decode(
        new _m0.Reader(data)
      )
    );
  }

  LimitBidProtocolDataWithUser(
    request: QueryLimitBidProtocolDataWithUserRequest
  ): Promise<QueryLimitBidProtocolDataWithUserResponse> {
    const data =
      QueryLimitBidProtocolDataWithUserRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auctionsV2.v1beta1.Query",
      "LimitBidProtocolDataWithUser",
      data
    );
    return promise.then((data) =>
      QueryLimitBidProtocolDataWithUserResponse.decode(new _m0.Reader(data))
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
