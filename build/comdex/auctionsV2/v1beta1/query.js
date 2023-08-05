"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryLimitBidProtocolDataWithUserResponse = exports.QueryLimitBidProtocolDataWithUserRequest = exports.QueryAuctionFeesCollectionFromLimitBidTxResponse = exports.QueryAuctionFeesCollectionFromLimitBidTxRequest = exports.QueryLimitBidProtocolDataResponse = exports.QueryLimitBidProtocolDataRequest = exports.QueryLimitBidsResponse = exports.QueryLimitBidsRequest = exports.QueryUserLimitBidsByAssetIDResponse = exports.QueryUserLimitBidsByAssetIDRequest = exports.QueryAuctionParamsResponse = exports.QueryAuctionParamsRequest = exports.QueryBidsResponse = exports.QueryBidsRequest = exports.QueryAuctionsResponse = exports.QueryAuctionsRequest = exports.QueryAuctionResponse = exports.QueryAuctionRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const params_1 = require("../../../comdex/auctionsV2/v1beta1/params");
const auction_1 = require("../../../comdex/auctionsV2/v1beta1/auction");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const bid_1 = require("../../../comdex/auctionsV2/v1beta1/bid");
exports.protobufPackage = "comdex.auctionsV2.v1beta1";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
exports.QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseQueryAuctionRequest() {
    return { auctionId: long_1.default.UZERO, history: false };
}
exports.QueryAuctionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.auctionId.isZero()) {
            writer.uint32(8).uint64(message.auctionId);
        }
        if (message.history === true) {
            writer.uint32(16).bool(message.history);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctionId = reader.uint64();
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
    fromJSON(object) {
        return {
            auctionId: isSet(object.auctionId)
                ? long_1.default.fromValue(object.auctionId)
                : long_1.default.UZERO,
            history: isSet(object.history) ? Boolean(object.history) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.auctionId !== undefined &&
            (obj.auctionId = (message.auctionId || long_1.default.UZERO).toString());
        message.history !== undefined && (obj.history = message.history);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAuctionRequest();
        message.auctionId =
            object.auctionId !== undefined && object.auctionId !== null
                ? long_1.default.fromValue(object.auctionId)
                : long_1.default.UZERO;
        message.history = (_a = object.history) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseQueryAuctionResponse() {
    return { auction: undefined };
}
exports.QueryAuctionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.auction !== undefined) {
            auction_1.Auction.encode(message.auction, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auction = auction_1.Auction.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            auction: isSet(object.auction)
                ? auction_1.Auction.fromJSON(object.auction)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.auction !== undefined &&
            (obj.auction = message.auction
                ? auction_1.Auction.toJSON(message.auction)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAuctionResponse();
        message.auction =
            object.auction !== undefined && object.auction !== null
                ? auction_1.Auction.fromPartial(object.auction)
                : undefined;
        return message;
    },
};
function createBaseQueryAuctionsRequest() {
    return { auctionType: long_1.default.UZERO, history: false, pagination: undefined };
}
exports.QueryAuctionsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.auctionType.isZero()) {
            writer.uint32(8).uint64(message.auctionType);
        }
        if (message.history === true) {
            writer.uint32(16).bool(message.history);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctionType = reader.uint64();
                    break;
                case 2:
                    message.history = reader.bool();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            auctionType: isSet(object.auctionType)
                ? long_1.default.fromValue(object.auctionType)
                : long_1.default.UZERO,
            history: isSet(object.history) ? Boolean(object.history) : false,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.auctionType !== undefined &&
            (obj.auctionType = (message.auctionType || long_1.default.UZERO).toString());
        message.history !== undefined && (obj.history = message.history);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAuctionsRequest();
        message.auctionType =
            object.auctionType !== undefined && object.auctionType !== null
                ? long_1.default.fromValue(object.auctionType)
                : long_1.default.UZERO;
        message.history = (_a = object.history) !== null && _a !== void 0 ? _a : false;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAuctionsResponse() {
    return { auctions: [], pagination: undefined };
}
exports.QueryAuctionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.auctions) {
            auction_1.Auction.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctions.push(auction_1.Auction.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            auctions: Array.isArray(object === null || object === void 0 ? void 0 : object.auctions)
                ? object.auctions.map((e) => auction_1.Auction.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.auctions) {
            obj.auctions = message.auctions.map((e) => e ? auction_1.Auction.toJSON(e) : undefined);
        }
        else {
            obj.auctions = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAuctionsResponse();
        message.auctions =
            ((_a = object.auctions) === null || _a === void 0 ? void 0 : _a.map((e) => auction_1.Auction.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryBidsRequest() {
    return { bidder: "", history: false, pagination: undefined };
}
exports.QueryBidsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.bidder !== "") {
            writer.uint32(10).string(message.bidder);
        }
        if (message.history === true) {
            writer.uint32(16).bool(message.history);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            history: isSet(object.history) ? Boolean(object.history) : false,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.bidder !== undefined && (obj.bidder = message.bidder);
        message.history !== undefined && (obj.history = message.history);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryBidsRequest();
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.history = (_b = object.history) !== null && _b !== void 0 ? _b : false;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryBidsResponse() {
    return { bidder: "", bids: [], pagination: undefined };
}
exports.QueryBidsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.bidder !== "") {
            writer.uint32(10).string(message.bidder);
        }
        for (const v of message.bids) {
            bid_1.Bid.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                    message.bids.push(bid_1.Bid.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            bids: Array.isArray(object === null || object === void 0 ? void 0 : object.bids)
                ? object.bids.map((e) => bid_1.Bid.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.bidder !== undefined && (obj.bidder = message.bidder);
        if (message.bids) {
            obj.bids = message.bids.map((e) => (e ? bid_1.Bid.toJSON(e) : undefined));
        }
        else {
            obj.bids = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryBidsResponse();
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.bids = ((_b = object.bids) === null || _b === void 0 ? void 0 : _b.map((e) => bid_1.Bid.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAuctionParamsRequest() {
    return {};
}
exports.QueryAuctionParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryAuctionParamsRequest();
        return message;
    },
};
function createBaseQueryAuctionParamsResponse() {
    return { auctionParams: undefined };
}
exports.QueryAuctionParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.auctionParams !== undefined) {
            bid_1.AuctionParams.encode(message.auctionParams, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctionParams = bid_1.AuctionParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            auctionParams: isSet(object.auctionParams)
                ? bid_1.AuctionParams.fromJSON(object.auctionParams)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.auctionParams !== undefined &&
            (obj.auctionParams = message.auctionParams
                ? bid_1.AuctionParams.toJSON(message.auctionParams)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAuctionParamsResponse();
        message.auctionParams =
            object.auctionParams !== undefined && object.auctionParams !== null
                ? bid_1.AuctionParams.fromPartial(object.auctionParams)
                : undefined;
        return message;
    },
};
function createBaseQueryUserLimitBidsByAssetIDRequest() {
    return {
        bidder: "",
        collateralTokenId: long_1.default.UZERO,
        debtTokenId: long_1.default.UZERO,
        pagination: undefined,
    };
}
exports.QueryUserLimitBidsByAssetIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                    message.collateralTokenId = reader.uint64();
                    break;
                case 3:
                    message.debtTokenId = reader.uint64();
                    break;
                case 4:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            collateralTokenId: isSet(object.collateralTokenId)
                ? long_1.default.fromValue(object.collateralTokenId)
                : long_1.default.UZERO,
            debtTokenId: isSet(object.debtTokenId)
                ? long_1.default.fromValue(object.debtTokenId)
                : long_1.default.UZERO,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.bidder !== undefined && (obj.bidder = message.bidder);
        message.collateralTokenId !== undefined &&
            (obj.collateralTokenId = (message.collateralTokenId || long_1.default.UZERO).toString());
        message.debtTokenId !== undefined &&
            (obj.debtTokenId = (message.debtTokenId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryUserLimitBidsByAssetIDRequest();
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.collateralTokenId =
            object.collateralTokenId !== undefined &&
                object.collateralTokenId !== null
                ? long_1.default.fromValue(object.collateralTokenId)
                : long_1.default.UZERO;
        message.debtTokenId =
            object.debtTokenId !== undefined && object.debtTokenId !== null
                ? long_1.default.fromValue(object.debtTokenId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryUserLimitBidsByAssetIDResponse() {
    return {
        bidder: "",
        totalAmount: "",
        limitOrderBids: [],
        pagination: undefined,
    };
}
exports.QueryUserLimitBidsByAssetIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.bidder !== "") {
            writer.uint32(10).string(message.bidder);
        }
        if (message.totalAmount !== "") {
            writer.uint32(18).string(message.totalAmount);
        }
        for (const v of message.limitOrderBids) {
            bid_1.LimitOrderBid.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                    message.limitOrderBids.push(bid_1.LimitOrderBid.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            totalAmount: isSet(object.totalAmount) ? String(object.totalAmount) : "",
            limitOrderBids: Array.isArray(object === null || object === void 0 ? void 0 : object.limitOrderBids)
                ? object.limitOrderBids.map((e) => bid_1.LimitOrderBid.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.bidder !== undefined && (obj.bidder = message.bidder);
        message.totalAmount !== undefined &&
            (obj.totalAmount = message.totalAmount);
        if (message.limitOrderBids) {
            obj.limitOrderBids = message.limitOrderBids.map((e) => e ? bid_1.LimitOrderBid.toJSON(e) : undefined);
        }
        else {
            obj.limitOrderBids = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryUserLimitBidsByAssetIDResponse();
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.totalAmount = (_b = object.totalAmount) !== null && _b !== void 0 ? _b : "";
        message.limitOrderBids =
            ((_c = object.limitOrderBids) === null || _c === void 0 ? void 0 : _c.map((e) => bid_1.LimitOrderBid.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryLimitBidsRequest() {
    return {
        collateralTokenId: long_1.default.UZERO,
        debtTokenId: long_1.default.UZERO,
        pagination: undefined,
    };
}
exports.QueryLimitBidsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.collateralTokenId.isZero()) {
            writer.uint32(8).uint64(message.collateralTokenId);
        }
        if (!message.debtTokenId.isZero()) {
            writer.uint32(16).uint64(message.debtTokenId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLimitBidsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collateralTokenId = reader.uint64();
                    break;
                case 2:
                    message.debtTokenId = reader.uint64();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collateralTokenId: isSet(object.collateralTokenId)
                ? long_1.default.fromValue(object.collateralTokenId)
                : long_1.default.UZERO,
            debtTokenId: isSet(object.debtTokenId)
                ? long_1.default.fromValue(object.debtTokenId)
                : long_1.default.UZERO,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collateralTokenId !== undefined &&
            (obj.collateralTokenId = (message.collateralTokenId || long_1.default.UZERO).toString());
        message.debtTokenId !== undefined &&
            (obj.debtTokenId = (message.debtTokenId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLimitBidsRequest();
        message.collateralTokenId =
            object.collateralTokenId !== undefined &&
                object.collateralTokenId !== null
                ? long_1.default.fromValue(object.collateralTokenId)
                : long_1.default.UZERO;
        message.debtTokenId =
            object.debtTokenId !== undefined && object.debtTokenId !== null
                ? long_1.default.fromValue(object.debtTokenId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryLimitBidsResponse() {
    return { limitOrderBids: [], pagination: undefined };
}
exports.QueryLimitBidsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.limitOrderBids) {
            bid_1.LimitOrderBid.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLimitBidsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limitOrderBids.push(bid_1.LimitOrderBid.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            limitOrderBids: Array.isArray(object === null || object === void 0 ? void 0 : object.limitOrderBids)
                ? object.limitOrderBids.map((e) => bid_1.LimitOrderBid.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.limitOrderBids) {
            obj.limitOrderBids = message.limitOrderBids.map((e) => e ? bid_1.LimitOrderBid.toJSON(e) : undefined);
        }
        else {
            obj.limitOrderBids = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLimitBidsResponse();
        message.limitOrderBids =
            ((_a = object.limitOrderBids) === null || _a === void 0 ? void 0 : _a.map((e) => bid_1.LimitOrderBid.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryLimitBidProtocolDataRequest() {
    return { pagination: undefined };
}
exports.QueryLimitBidProtocolDataRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLimitBidProtocolDataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLimitBidProtocolDataRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryLimitBidProtocolDataResponse() {
    return { limitBidProtocolData: [], pagination: undefined };
}
exports.QueryLimitBidProtocolDataResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.limitBidProtocolData) {
            auction_1.LimitBidProtocolDataForQuery.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLimitBidProtocolDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limitBidProtocolData.push(auction_1.LimitBidProtocolDataForQuery.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            limitBidProtocolData: Array.isArray(object === null || object === void 0 ? void 0 : object.limitBidProtocolData)
                ? object.limitBidProtocolData.map((e) => auction_1.LimitBidProtocolDataForQuery.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.limitBidProtocolData) {
            obj.limitBidProtocolData = message.limitBidProtocolData.map((e) => e ? auction_1.LimitBidProtocolDataForQuery.toJSON(e) : undefined);
        }
        else {
            obj.limitBidProtocolData = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLimitBidProtocolDataResponse();
        message.limitBidProtocolData =
            ((_a = object.limitBidProtocolData) === null || _a === void 0 ? void 0 : _a.map((e) => auction_1.LimitBidProtocolDataForQuery.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAuctionFeesCollectionFromLimitBidTxRequest() {
    return { pagination: undefined };
}
exports.QueryAuctionFeesCollectionFromLimitBidTxRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionFeesCollectionFromLimitBidTxRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAuctionFeesCollectionFromLimitBidTxRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAuctionFeesCollectionFromLimitBidTxResponse() {
    return { auctionFeesCollectionFromLimitBidTx: [], pagination: undefined };
}
exports.QueryAuctionFeesCollectionFromLimitBidTxResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.auctionFeesCollectionFromLimitBidTx) {
            bid_1.AuctionFeesCollectionFromLimitBidTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionFeesCollectionFromLimitBidTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctionFeesCollectionFromLimitBidTx.push(bid_1.AuctionFeesCollectionFromLimitBidTx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            auctionFeesCollectionFromLimitBidTx: Array.isArray(object === null || object === void 0 ? void 0 : object.auctionFeesCollectionFromLimitBidTx)
                ? object.auctionFeesCollectionFromLimitBidTx.map((e) => bid_1.AuctionFeesCollectionFromLimitBidTx.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.auctionFeesCollectionFromLimitBidTx) {
            obj.auctionFeesCollectionFromLimitBidTx =
                message.auctionFeesCollectionFromLimitBidTx.map((e) => e ? bid_1.AuctionFeesCollectionFromLimitBidTx.toJSON(e) : undefined);
        }
        else {
            obj.auctionFeesCollectionFromLimitBidTx = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAuctionFeesCollectionFromLimitBidTxResponse();
        message.auctionFeesCollectionFromLimitBidTx =
            ((_a = object.auctionFeesCollectionFromLimitBidTx) === null || _a === void 0 ? void 0 : _a.map((e) => bid_1.AuctionFeesCollectionFromLimitBidTx.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryLimitBidProtocolDataWithUserRequest() {
    return { bidder: "", pagination: undefined };
}
exports.QueryLimitBidProtocolDataWithUserRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.bidder !== "") {
            writer.uint32(10).string(message.bidder);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.bidder !== undefined && (obj.bidder = message.bidder);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLimitBidProtocolDataWithUserRequest();
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryLimitBidProtocolDataWithUserResponse() {
    return { limitBidProtocolDataWithUser: [], pagination: undefined };
}
exports.QueryLimitBidProtocolDataWithUserResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.limitBidProtocolDataWithUser) {
            auction_1.LimitBidProtocolDataWithUserForQuery.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLimitBidProtocolDataWithUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limitBidProtocolDataWithUser.push(auction_1.LimitBidProtocolDataWithUserForQuery.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            limitBidProtocolDataWithUser: Array.isArray(object === null || object === void 0 ? void 0 : object.limitBidProtocolDataWithUser)
                ? object.limitBidProtocolDataWithUser.map((e) => auction_1.LimitBidProtocolDataWithUserForQuery.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.limitBidProtocolDataWithUser) {
            obj.limitBidProtocolDataWithUser =
                message.limitBidProtocolDataWithUser.map((e) => e ? auction_1.LimitBidProtocolDataWithUserForQuery.toJSON(e) : undefined);
        }
        else {
            obj.limitBidProtocolDataWithUser = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLimitBidProtocolDataWithUserResponse();
        message.limitBidProtocolDataWithUser =
            ((_a = object.limitBidProtocolDataWithUser) === null || _a === void 0 ? void 0 : _a.map((e) => auction_1.LimitBidProtocolDataWithUserForQuery.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
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
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auctionsV2.v1beta1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    Auction(request) {
        const data = exports.QueryAuctionRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auctionsV2.v1beta1.Query", "Auction", data);
        return promise.then((data) => exports.QueryAuctionResponse.decode(new _m0.Reader(data)));
    }
    Auctions(request) {
        const data = exports.QueryAuctionsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auctionsV2.v1beta1.Query", "Auctions", data);
        return promise.then((data) => exports.QueryAuctionsResponse.decode(new _m0.Reader(data)));
    }
    Bids(request) {
        const data = exports.QueryBidsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auctionsV2.v1beta1.Query", "Bids", data);
        return promise.then((data) => exports.QueryBidsResponse.decode(new _m0.Reader(data)));
    }
    AuctionParams(request) {
        const data = exports.QueryAuctionParamsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auctionsV2.v1beta1.Query", "AuctionParams", data);
        return promise.then((data) => exports.QueryAuctionParamsResponse.decode(new _m0.Reader(data)));
    }
    UserLimitBidsByAssetID(request) {
        const data = exports.QueryUserLimitBidsByAssetIDRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auctionsV2.v1beta1.Query", "UserLimitBidsByAssetID", data);
        return promise.then((data) => exports.QueryUserLimitBidsByAssetIDResponse.decode(new _m0.Reader(data)));
    }
    LimitBids(request) {
        const data = exports.QueryLimitBidsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auctionsV2.v1beta1.Query", "LimitBids", data);
        return promise.then((data) => exports.QueryLimitBidsResponse.decode(new _m0.Reader(data)));
    }
    LimitBidProtocolData(request) {
        const data = exports.QueryLimitBidProtocolDataRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auctionsV2.v1beta1.Query", "LimitBidProtocolData", data);
        return promise.then((data) => exports.QueryLimitBidProtocolDataResponse.decode(new _m0.Reader(data)));
    }
    AuctionFeesCollectionData(request) {
        const data = exports.QueryAuctionFeesCollectionFromLimitBidTxRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auctionsV2.v1beta1.Query", "AuctionFeesCollectionData", data);
        return promise.then((data) => exports.QueryAuctionFeesCollectionFromLimitBidTxResponse.decode(new _m0.Reader(data)));
    }
    LimitBidProtocolDataWithUser(request) {
        const data = exports.QueryLimitBidProtocolDataWithUserRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auctionsV2.v1beta1.Query", "LimitBidProtocolDataWithUser", data);
        return promise.then((data) => exports.QueryLimitBidProtocolDataWithUserResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map