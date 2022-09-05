/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  SurplusAuction,
  DebtAuction,
  DutchAuction,
  AuctionParams,
  ProtocolStatistics,
} from "../../../comdex/auction/v1beta1/auction";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "../../../comdex/auction/v1beta1/params";
import {
  SurplusBiddings,
  DebtBiddings,
  DutchBiddings,
} from "../../../comdex/auction/v1beta1/biddings";

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
  pagination?: PageRequest;
}

export interface QuerySurplusBiddingsResponse {
  bidder: string;
  biddings: SurplusBiddings[];
  pagination?: PageResponse;
}

export interface QueryDebtAuctionRequest {
  appId: Long;
  auctionMappingId: Long;
  auctionId: Long;
  history: boolean;
}

export interface QueryDebtAuctionResponse {
  auction?: DebtAuction;
  pagination?: PageRequest;
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
  pagination?: PageRequest;
}

export interface QueryDebtBiddingsResponse {
  bidder: string;
  biddings: DebtBiddings[];
  pagination?: PageResponse;
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
  pagination?: PageRequest;
}

export interface QueryDutchBiddingsResponse {
  bidder: string;
  biddings: DutchBiddings[];
  pagination?: PageResponse;
}

export interface QueryBiddingsForSurplusAuctionRequest {
  appId: Long;
  auctionMappingId: Long;
  auctionId: Long;
  history: boolean;
  pagination?: PageRequest;
}

export interface QueryBiddingsForSurplusAuctionResponse {
  biddings: SurplusBiddings[];
  pagination?: PageResponse;
}

export interface QueryProtocolStatisticsRequest {
  appId: Long;
  pagination?: PageRequest;
}

export interface QueryProtocolStatisticsResponse {
  stats: ProtocolStatistics[];
  pagination?: PageResponse;
}

export interface QueryParamsRequest {}

export interface QueryParamsResponse {
  params?: Params;
}

export interface QueryAuctionParamRequest {
  appId: Long;
}

export interface QueryAuctionParamResponse {
  auctionParams?: AuctionParams;
}

export interface QueryDutchLendAuctionRequest {
  appId: Long;
  auctionMappingId: Long;
  auctionId: Long;
  history: boolean;
}

export interface QueryDutchLendAuctionResponse {
  auction?: DutchAuction;
}

export interface QueryDutchLendAuctionsRequest {
  appId: Long;
  history: boolean;
  pagination?: PageRequest;
}

export interface QueryDutchLendAuctionsResponse {
  auctions: DutchAuction[];
  pagination?: PageResponse;
}

export interface QueryDutchLendBiddingsRequest {
  bidder: string;
  appId: Long;
  history: boolean;
  pagination?: PageRequest;
}

export interface QueryDutchLendBiddingsResponse {
  bidder: string;
  biddings: DutchBiddings[];
  pagination?: PageResponse;
}

export interface QueryFilterDutchAuctionsRequest {
  appId: Long;
  denom: string[];
  history: boolean;
  pagination?: PageRequest;
}

export interface QueryFilterDutchAuctionsResponse {
  auctions: DutchAuction[];
  pagination?: PageResponse;
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
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      auctionMappingId: isSet(object.auctionMappingId)
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO,
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
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
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
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
  return {
    bidder: "",
    appId: Long.UZERO,
    history: false,
    pagination: undefined,
  };
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
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
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

  fromJSON(object: any): QuerySurplusBiddingsRequest {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      history: isSet(object.history) ? Boolean(object.history) : false,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QuerySurplusBiddingsRequest): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.history !== undefined && (obj.history = message.history);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
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
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQuerySurplusBiddingsResponse(): QuerySurplusBiddingsResponse {
  return { bidder: "", biddings: [], pagination: undefined };
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
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(26).fork()
      ).ldelim();
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

  fromJSON(object: any): QuerySurplusBiddingsResponse {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      biddings: Array.isArray(object?.biddings)
        ? object.biddings.map((e: any) => SurplusBiddings.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
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
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySurplusBiddingsResponse>, I>>(
    object: I
  ): QuerySurplusBiddingsResponse {
    const message = createBaseQuerySurplusBiddingsResponse();
    message.bidder = object.bidder ?? "";
    message.biddings =
      object.biddings?.map((e) => SurplusBiddings.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
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
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      auctionMappingId: isSet(object.auctionMappingId)
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO,
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
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
  return { auction: undefined, pagination: undefined };
}

export const QueryDebtAuctionResponse = {
  encode(
    message: QueryDebtAuctionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.auction !== undefined) {
      DebtAuction.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
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

  fromJSON(object: any): QueryDebtAuctionResponse {
    return {
      auction: isSet(object.auction)
        ? DebtAuction.fromJSON(object.auction)
        : undefined,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDebtAuctionResponse): unknown {
    const obj: any = {};
    message.auction !== undefined &&
      (obj.auction = message.auction
        ? DebtAuction.toJSON(message.auction)
        : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
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
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
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
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
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
  return {
    bidder: "",
    appId: Long.UZERO,
    history: false,
    pagination: undefined,
  };
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
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
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

  fromJSON(object: any): QueryDebtBiddingsRequest {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      history: isSet(object.history) ? Boolean(object.history) : false,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDebtBiddingsRequest): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.history !== undefined && (obj.history = message.history);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
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
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryDebtBiddingsResponse(): QueryDebtBiddingsResponse {
  return { bidder: "", biddings: [], pagination: undefined };
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
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(26).fork()
      ).ldelim();
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

  fromJSON(object: any): QueryDebtBiddingsResponse {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      biddings: Array.isArray(object?.biddings)
        ? object.biddings.map((e: any) => DebtBiddings.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
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
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDebtBiddingsResponse>, I>>(
    object: I
  ): QueryDebtBiddingsResponse {
    const message = createBaseQueryDebtBiddingsResponse();
    message.bidder = object.bidder ?? "";
    message.biddings =
      object.biddings?.map((e) => DebtBiddings.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
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
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      auctionMappingId: isSet(object.auctionMappingId)
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO,
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
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
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
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
  return {
    bidder: "",
    appId: Long.UZERO,
    history: false,
    pagination: undefined,
  };
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
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
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

  fromJSON(object: any): QueryDutchBiddingsRequest {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      history: isSet(object.history) ? Boolean(object.history) : false,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDutchBiddingsRequest): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.history !== undefined && (obj.history = message.history);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
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
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryDutchBiddingsResponse(): QueryDutchBiddingsResponse {
  return { bidder: "", biddings: [], pagination: undefined };
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
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(26).fork()
      ).ldelim();
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

  fromJSON(object: any): QueryDutchBiddingsResponse {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      biddings: Array.isArray(object?.biddings)
        ? object.biddings.map((e: any) => DutchBiddings.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
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
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDutchBiddingsResponse>, I>>(
    object: I
  ): QueryDutchBiddingsResponse {
    const message = createBaseQueryDutchBiddingsResponse();
    message.bidder = object.bidder ?? "";
    message.biddings =
      object.biddings?.map((e) => DutchBiddings.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryBiddingsForSurplusAuctionRequest(): QueryBiddingsForSurplusAuctionRequest {
  return {
    appId: Long.UZERO,
    auctionMappingId: Long.UZERO,
    auctionId: Long.UZERO,
    history: false,
    pagination: undefined,
  };
}

export const QueryBiddingsForSurplusAuctionRequest = {
  encode(
    message: QueryBiddingsForSurplusAuctionRequest,
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
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBiddingsForSurplusAuctionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBiddingsForSurplusAuctionRequest();
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
        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBiddingsForSurplusAuctionRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      auctionMappingId: isSet(object.auctionMappingId)
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO,
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
      history: isSet(object.history) ? Boolean(object.history) : false,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBiddingsForSurplusAuctionRequest): unknown {
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
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryBiddingsForSurplusAuctionRequest>, I>
  >(object: I): QueryBiddingsForSurplusAuctionRequest {
    const message = createBaseQueryBiddingsForSurplusAuctionRequest();
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
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryBiddingsForSurplusAuctionResponse(): QueryBiddingsForSurplusAuctionResponse {
  return { biddings: [], pagination: undefined };
}

export const QueryBiddingsForSurplusAuctionResponse = {
  encode(
    message: QueryBiddingsForSurplusAuctionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.biddings) {
      SurplusBiddings.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryBiddingsForSurplusAuctionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBiddingsForSurplusAuctionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.biddings.push(
            SurplusBiddings.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryBiddingsForSurplusAuctionResponse {
    return {
      biddings: Array.isArray(object?.biddings)
        ? object.biddings.map((e: any) => SurplusBiddings.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBiddingsForSurplusAuctionResponse): unknown {
    const obj: any = {};
    if (message.biddings) {
      obj.biddings = message.biddings.map((e) =>
        e ? SurplusBiddings.toJSON(e) : undefined
      );
    } else {
      obj.biddings = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryBiddingsForSurplusAuctionResponse>, I>
  >(object: I): QueryBiddingsForSurplusAuctionResponse {
    const message = createBaseQueryBiddingsForSurplusAuctionResponse();
    message.biddings =
      object.biddings?.map((e) => SurplusBiddings.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryProtocolStatisticsRequest(): QueryProtocolStatisticsRequest {
  return { appId: Long.UZERO, pagination: undefined };
}

export const QueryProtocolStatisticsRequest = {
  encode(
    message: QueryProtocolStatisticsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProtocolStatisticsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProtocolStatisticsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
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

  fromJSON(object: any): QueryProtocolStatisticsRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryProtocolStatisticsRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProtocolStatisticsRequest>, I>>(
    object: I
  ): QueryProtocolStatisticsRequest {
    const message = createBaseQueryProtocolStatisticsRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryProtocolStatisticsResponse(): QueryProtocolStatisticsResponse {
  return { stats: [], pagination: undefined };
}

export const QueryProtocolStatisticsResponse = {
  encode(
    message: QueryProtocolStatisticsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.stats) {
      ProtocolStatistics.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryProtocolStatisticsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProtocolStatisticsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stats.push(
            ProtocolStatistics.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryProtocolStatisticsResponse {
    return {
      stats: Array.isArray(object?.stats)
        ? object.stats.map((e: any) => ProtocolStatistics.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryProtocolStatisticsResponse): unknown {
    const obj: any = {};
    if (message.stats) {
      obj.stats = message.stats.map((e) =>
        e ? ProtocolStatistics.toJSON(e) : undefined
      );
    } else {
      obj.stats = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProtocolStatisticsResponse>, I>>(
    object: I
  ): QueryProtocolStatisticsResponse {
    const message = createBaseQueryProtocolStatisticsResponse();
    message.stats =
      object.stats?.map((e) => ProtocolStatistics.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
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

function createBaseQueryAuctionParamRequest(): QueryAuctionParamRequest {
  return { appId: Long.UZERO };
}

export const QueryAuctionParamRequest = {
  encode(
    message: QueryAuctionParamRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAuctionParamRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionParamRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAuctionParamRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryAuctionParamRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAuctionParamRequest>, I>>(
    object: I
  ): QueryAuctionParamRequest {
    const message = createBaseQueryAuctionParamRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryAuctionParamResponse(): QueryAuctionParamResponse {
  return { auctionParams: undefined };
}

export const QueryAuctionParamResponse = {
  encode(
    message: QueryAuctionParamResponse,
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
  ): QueryAuctionParamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionParamResponse();
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

  fromJSON(object: any): QueryAuctionParamResponse {
    return {
      auctionParams: isSet(object.auctionParams)
        ? AuctionParams.fromJSON(object.auctionParams)
        : undefined,
    };
  },

  toJSON(message: QueryAuctionParamResponse): unknown {
    const obj: any = {};
    message.auctionParams !== undefined &&
      (obj.auctionParams = message.auctionParams
        ? AuctionParams.toJSON(message.auctionParams)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAuctionParamResponse>, I>>(
    object: I
  ): QueryAuctionParamResponse {
    const message = createBaseQueryAuctionParamResponse();
    message.auctionParams =
      object.auctionParams !== undefined && object.auctionParams !== null
        ? AuctionParams.fromPartial(object.auctionParams)
        : undefined;
    return message;
  },
};

function createBaseQueryDutchLendAuctionRequest(): QueryDutchLendAuctionRequest {
  return {
    appId: Long.UZERO,
    auctionMappingId: Long.UZERO,
    auctionId: Long.UZERO,
    history: false,
  };
}

export const QueryDutchLendAuctionRequest = {
  encode(
    message: QueryDutchLendAuctionRequest,
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
  ): QueryDutchLendAuctionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDutchLendAuctionRequest();
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

  fromJSON(object: any): QueryDutchLendAuctionRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      auctionMappingId: isSet(object.auctionMappingId)
        ? Long.fromValue(object.auctionMappingId)
        : Long.UZERO,
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
      history: isSet(object.history) ? Boolean(object.history) : false,
    };
  },

  toJSON(message: QueryDutchLendAuctionRequest): unknown {
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

  fromPartial<I extends Exact<DeepPartial<QueryDutchLendAuctionRequest>, I>>(
    object: I
  ): QueryDutchLendAuctionRequest {
    const message = createBaseQueryDutchLendAuctionRequest();
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

function createBaseQueryDutchLendAuctionResponse(): QueryDutchLendAuctionResponse {
  return { auction: undefined };
}

export const QueryDutchLendAuctionResponse = {
  encode(
    message: QueryDutchLendAuctionResponse,
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
  ): QueryDutchLendAuctionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDutchLendAuctionResponse();
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

  fromJSON(object: any): QueryDutchLendAuctionResponse {
    return {
      auction: isSet(object.auction)
        ? DutchAuction.fromJSON(object.auction)
        : undefined,
    };
  },

  toJSON(message: QueryDutchLendAuctionResponse): unknown {
    const obj: any = {};
    message.auction !== undefined &&
      (obj.auction = message.auction
        ? DutchAuction.toJSON(message.auction)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDutchLendAuctionResponse>, I>>(
    object: I
  ): QueryDutchLendAuctionResponse {
    const message = createBaseQueryDutchLendAuctionResponse();
    message.auction =
      object.auction !== undefined && object.auction !== null
        ? DutchAuction.fromPartial(object.auction)
        : undefined;
    return message;
  },
};

function createBaseQueryDutchLendAuctionsRequest(): QueryDutchLendAuctionsRequest {
  return { appId: Long.UZERO, history: false, pagination: undefined };
}

export const QueryDutchLendAuctionsRequest = {
  encode(
    message: QueryDutchLendAuctionsRequest,
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
  ): QueryDutchLendAuctionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDutchLendAuctionsRequest();
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

  fromJSON(object: any): QueryDutchLendAuctionsRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      history: isSet(object.history) ? Boolean(object.history) : false,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDutchLendAuctionsRequest): unknown {
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

  fromPartial<I extends Exact<DeepPartial<QueryDutchLendAuctionsRequest>, I>>(
    object: I
  ): QueryDutchLendAuctionsRequest {
    const message = createBaseQueryDutchLendAuctionsRequest();
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

function createBaseQueryDutchLendAuctionsResponse(): QueryDutchLendAuctionsResponse {
  return { auctions: [], pagination: undefined };
}

export const QueryDutchLendAuctionsResponse = {
  encode(
    message: QueryDutchLendAuctionsResponse,
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
  ): QueryDutchLendAuctionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDutchLendAuctionsResponse();
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

  fromJSON(object: any): QueryDutchLendAuctionsResponse {
    return {
      auctions: Array.isArray(object?.auctions)
        ? object.auctions.map((e: any) => DutchAuction.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDutchLendAuctionsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<QueryDutchLendAuctionsResponse>, I>>(
    object: I
  ): QueryDutchLendAuctionsResponse {
    const message = createBaseQueryDutchLendAuctionsResponse();
    message.auctions =
      object.auctions?.map((e) => DutchAuction.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryDutchLendBiddingsRequest(): QueryDutchLendBiddingsRequest {
  return {
    bidder: "",
    appId: Long.UZERO,
    history: false,
    pagination: undefined,
  };
}

export const QueryDutchLendBiddingsRequest = {
  encode(
    message: QueryDutchLendBiddingsRequest,
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
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDutchLendBiddingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDutchLendBiddingsRequest();
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

  fromJSON(object: any): QueryDutchLendBiddingsRequest {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      history: isSet(object.history) ? Boolean(object.history) : false,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDutchLendBiddingsRequest): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.history !== undefined && (obj.history = message.history);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDutchLendBiddingsRequest>, I>>(
    object: I
  ): QueryDutchLendBiddingsRequest {
    const message = createBaseQueryDutchLendBiddingsRequest();
    message.bidder = object.bidder ?? "";
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

function createBaseQueryDutchLendBiddingsResponse(): QueryDutchLendBiddingsResponse {
  return { bidder: "", biddings: [], pagination: undefined };
}

export const QueryDutchLendBiddingsResponse = {
  encode(
    message: QueryDutchLendBiddingsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    for (const v of message.biddings) {
      DutchBiddings.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDutchLendBiddingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDutchLendBiddingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.biddings.push(DutchBiddings.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryDutchLendBiddingsResponse {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      biddings: Array.isArray(object?.biddings)
        ? object.biddings.map((e: any) => DutchBiddings.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDutchLendBiddingsResponse): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    if (message.biddings) {
      obj.biddings = message.biddings.map((e) =>
        e ? DutchBiddings.toJSON(e) : undefined
      );
    } else {
      obj.biddings = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDutchLendBiddingsResponse>, I>>(
    object: I
  ): QueryDutchLendBiddingsResponse {
    const message = createBaseQueryDutchLendBiddingsResponse();
    message.bidder = object.bidder ?? "";
    message.biddings =
      object.biddings?.map((e) => DutchBiddings.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryFilterDutchAuctionsRequest(): QueryFilterDutchAuctionsRequest {
  return {
    appId: Long.UZERO,
    denom: [],
    history: false,
    pagination: undefined,
  };
}

export const QueryFilterDutchAuctionsRequest = {
  encode(
    message: QueryFilterDutchAuctionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    for (const v of message.denom) {
      writer.uint32(18).string(v!);
    }
    if (message.history === true) {
      writer.uint32(24).bool(message.history);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFilterDutchAuctionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFilterDutchAuctionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.denom.push(reader.string());
          break;
        case 3:
          message.history = reader.bool();
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

  fromJSON(object: any): QueryFilterDutchAuctionsRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      denom: Array.isArray(object?.denom)
        ? object.denom.map((e: any) => String(e))
        : [],
      history: isSet(object.history) ? Boolean(object.history) : false,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryFilterDutchAuctionsRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    if (message.denom) {
      obj.denom = message.denom.map((e) => e);
    } else {
      obj.denom = [];
    }
    message.history !== undefined && (obj.history = message.history);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFilterDutchAuctionsRequest>, I>>(
    object: I
  ): QueryFilterDutchAuctionsRequest {
    const message = createBaseQueryFilterDutchAuctionsRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.denom = object.denom?.map((e) => e) || [];
    message.history = object.history ?? false;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryFilterDutchAuctionsResponse(): QueryFilterDutchAuctionsResponse {
  return { auctions: [], pagination: undefined };
}

export const QueryFilterDutchAuctionsResponse = {
  encode(
    message: QueryFilterDutchAuctionsResponse,
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
  ): QueryFilterDutchAuctionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFilterDutchAuctionsResponse();
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

  fromJSON(object: any): QueryFilterDutchAuctionsResponse {
    return {
      auctions: Array.isArray(object?.auctions)
        ? object.auctions.map((e: any) => DutchAuction.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryFilterDutchAuctionsResponse): unknown {
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

  fromPartial<
    I extends Exact<DeepPartial<QueryFilterDutchAuctionsResponse>, I>
  >(object: I): QueryFilterDutchAuctionsResponse {
    const message = createBaseQueryFilterDutchAuctionsResponse();
    message.auctions =
      object.auctions?.map((e) => DutchAuction.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
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
  QueryProtocolStatistics(
    request: QueryProtocolStatisticsRequest
  ): Promise<QueryProtocolStatisticsResponse>;
  QueryAuctionParams(
    request: QueryAuctionParamRequest
  ): Promise<QueryAuctionParamResponse>;
  QueryDutchLendAuction(
    request: QueryDutchLendAuctionRequest
  ): Promise<QueryDutchLendAuctionResponse>;
  QueryDutchLendAuctions(
    request: QueryDutchLendAuctionsRequest
  ): Promise<QueryDutchLendAuctionsResponse>;
  QueryDutchLendBiddings(
    request: QueryDutchLendBiddingsRequest
  ): Promise<QueryDutchLendBiddingsResponse>;
  QueryFilterDutchAuctions(
    request: QueryFilterDutchAuctionsRequest
  ): Promise<QueryFilterDutchAuctionsResponse>;
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
    this.QueryProtocolStatistics = this.QueryProtocolStatistics.bind(this);
    this.QueryAuctionParams = this.QueryAuctionParams.bind(this);
    this.QueryDutchLendAuction = this.QueryDutchLendAuction.bind(this);
    this.QueryDutchLendAuctions = this.QueryDutchLendAuctions.bind(this);
    this.QueryDutchLendBiddings = this.QueryDutchLendBiddings.bind(this);
    this.QueryFilterDutchAuctions = this.QueryFilterDutchAuctions.bind(this);
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

  QueryProtocolStatistics(
    request: QueryProtocolStatisticsRequest
  ): Promise<QueryProtocolStatisticsResponse> {
    const data = QueryProtocolStatisticsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.Query",
      "QueryProtocolStatistics",
      data
    );
    return promise.then((data) =>
      QueryProtocolStatisticsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAuctionParams(
    request: QueryAuctionParamRequest
  ): Promise<QueryAuctionParamResponse> {
    const data = QueryAuctionParamRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.Query",
      "QueryAuctionParams",
      data
    );
    return promise.then((data) =>
      QueryAuctionParamResponse.decode(new _m0.Reader(data))
    );
  }

  QueryDutchLendAuction(
    request: QueryDutchLendAuctionRequest
  ): Promise<QueryDutchLendAuctionResponse> {
    const data = QueryDutchLendAuctionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.Query",
      "QueryDutchLendAuction",
      data
    );
    return promise.then((data) =>
      QueryDutchLendAuctionResponse.decode(new _m0.Reader(data))
    );
  }

  QueryDutchLendAuctions(
    request: QueryDutchLendAuctionsRequest
  ): Promise<QueryDutchLendAuctionsResponse> {
    const data = QueryDutchLendAuctionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.Query",
      "QueryDutchLendAuctions",
      data
    );
    return promise.then((data) =>
      QueryDutchLendAuctionsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryDutchLendBiddings(
    request: QueryDutchLendBiddingsRequest
  ): Promise<QueryDutchLendBiddingsResponse> {
    const data = QueryDutchLendBiddingsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.Query",
      "QueryDutchLendBiddings",
      data
    );
    return promise.then((data) =>
      QueryDutchLendBiddingsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryFilterDutchAuctions(
    request: QueryFilterDutchAuctionsRequest
  ): Promise<QueryFilterDutchAuctionsResponse> {
    const data = QueryFilterDutchAuctionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.auction.v1beta1.Query",
      "QueryFilterDutchAuctions",
      data
    );
    return promise.then((data) =>
      QueryFilterDutchAuctionsResponse.decode(new _m0.Reader(data))
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
