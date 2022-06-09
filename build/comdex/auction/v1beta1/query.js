"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryAuctionParamResponse = exports.QueryAuctionParamRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryProtocolStatisticsResponse = exports.QueryProtocolStatisticsRequest = exports.QueryBiddingsForSurplusAuctionResponse = exports.QueryBiddingsForSurplusAuctionRequest = exports.QueryDutchBiddingsResponse = exports.QueryDutchBiddingsRequest = exports.QueryDutchAuctionsResponse = exports.QueryDutchAuctionsRequest = exports.QueryDutchAuctionResponse = exports.QueryDutchAuctionRequest = exports.QueryDebtBiddingsResponse = exports.QueryDebtBiddingsRequest = exports.QueryDebtAuctionsResponse = exports.QueryDebtAuctionsRequest = exports.QueryDebtAuctionResponse = exports.QueryDebtAuctionRequest = exports.QuerySurplusBiddingsResponse = exports.QuerySurplusBiddingsRequest = exports.QuerySurplusAuctionsResponse = exports.QuerySurplusAuctionsRequest = exports.QuerySurplusAuctionResponse = exports.QuerySurplusAuctionRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const auction_1 = require("./auction");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const params_1 = require("./params");
const biddings_1 = require("./biddings");
exports.protobufPackage = "comdex.auction.v1beta1";
function createBaseQuerySurplusAuctionRequest() {
    return {
        appId: long_1.default.UZERO,
        auctionMappingId: long_1.default.UZERO,
        auctionId: long_1.default.UZERO,
        history: false,
    };
}
exports.QuerySurplusAuctionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySurplusAuctionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.auctionMappingId = reader.uint64();
                    break;
                case 3:
                    message.auctionId = reader.uint64();
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
    fromJSON(object) {
        return {
            appId: isSet(object.appId) ? long_1.default.fromString(object.appId) : long_1.default.UZERO,
            auctionMappingId: isSet(object.auctionMappingId)
                ? long_1.default.fromString(object.auctionMappingId)
                : long_1.default.UZERO,
            auctionId: isSet(object.auctionId)
                ? long_1.default.fromString(object.auctionId)
                : long_1.default.UZERO,
            history: isSet(object.history) ? Boolean(object.history) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.auctionMappingId !== undefined &&
            (obj.auctionMappingId = (message.auctionMappingId || long_1.default.UZERO).toString());
        message.auctionId !== undefined &&
            (obj.auctionId = (message.auctionId || long_1.default.UZERO).toString());
        message.history !== undefined && (obj.history = message.history);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySurplusAuctionRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.auctionMappingId =
            object.auctionMappingId !== undefined && object.auctionMappingId !== null
                ? long_1.default.fromValue(object.auctionMappingId)
                : long_1.default.UZERO;
        message.auctionId =
            object.auctionId !== undefined && object.auctionId !== null
                ? long_1.default.fromValue(object.auctionId)
                : long_1.default.UZERO;
        message.history = (_a = object.history) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseQuerySurplusAuctionResponse() {
    return { auction: undefined };
}
exports.QuerySurplusAuctionResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.auction !== undefined) {
            auction_1.SurplusAuction.encode(message.auction, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySurplusAuctionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auction = auction_1.SurplusAuction.decode(reader, reader.uint32());
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
                ? auction_1.SurplusAuction.fromJSON(object.auction)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.auction !== undefined &&
            (obj.auction = message.auction
                ? auction_1.SurplusAuction.toJSON(message.auction)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySurplusAuctionResponse();
        message.auction =
            object.auction !== undefined && object.auction !== null
                ? auction_1.SurplusAuction.fromPartial(object.auction)
                : undefined;
        return message;
    },
};
function createBaseQuerySurplusAuctionsRequest() {
    return { appId: long_1.default.UZERO, history: false, pagination: undefined };
}
exports.QuerySurplusAuctionsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySurplusAuctionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
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
            appId: isSet(object.appId) ? long_1.default.fromString(object.appId) : long_1.default.UZERO,
            history: isSet(object.history) ? Boolean(object.history) : false,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.history !== undefined && (obj.history = message.history);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySurplusAuctionsRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.history = (_a = object.history) !== null && _a !== void 0 ? _a : false;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQuerySurplusAuctionsResponse() {
    return { auctions: [], pagination: undefined };
}
exports.QuerySurplusAuctionsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.auctions) {
            auction_1.SurplusAuction.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySurplusAuctionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctions.push(auction_1.SurplusAuction.decode(reader, reader.uint32()));
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
                ? object.auctions.map((e) => auction_1.SurplusAuction.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.auctions) {
            obj.auctions = message.auctions.map((e) => e ? auction_1.SurplusAuction.toJSON(e) : undefined);
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
        const message = createBaseQuerySurplusAuctionsResponse();
        message.auctions =
            ((_a = object.auctions) === null || _a === void 0 ? void 0 : _a.map((e) => auction_1.SurplusAuction.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQuerySurplusBiddingsRequest() {
    return { bidder: "", appId: long_1.default.UZERO, history: false };
}
exports.QuerySurplusBiddingsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySurplusBiddingsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidder = reader.string();
                    break;
                case 2:
                    message.appId = reader.uint64();
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
    fromJSON(object) {
        return {
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            appId: isSet(object.appId) ? long_1.default.fromString(object.appId) : long_1.default.UZERO,
            history: isSet(object.history) ? Boolean(object.history) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.bidder !== undefined && (obj.bidder = message.bidder);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.history !== undefined && (obj.history = message.history);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQuerySurplusBiddingsRequest();
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.history = (_b = object.history) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseQuerySurplusBiddingsResponse() {
    return { bidder: "", biddings: [] };
}
exports.QuerySurplusBiddingsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bidder !== "") {
            writer.uint32(10).string(message.bidder);
        }
        for (const v of message.biddings) {
            biddings_1.SurplusBiddings.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySurplusBiddingsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidder = reader.string();
                    break;
                case 2:
                    message.biddings.push(biddings_1.SurplusBiddings.decode(reader, reader.uint32()));
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
            biddings: Array.isArray(object === null || object === void 0 ? void 0 : object.biddings)
                ? object.biddings.map((e) => biddings_1.SurplusBiddings.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.bidder !== undefined && (obj.bidder = message.bidder);
        if (message.biddings) {
            obj.biddings = message.biddings.map((e) => e ? biddings_1.SurplusBiddings.toJSON(e) : undefined);
        }
        else {
            obj.biddings = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQuerySurplusBiddingsResponse();
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.biddings =
            ((_b = object.biddings) === null || _b === void 0 ? void 0 : _b.map((e) => biddings_1.SurplusBiddings.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryDebtAuctionRequest() {
    return {
        appId: long_1.default.UZERO,
        auctionMappingId: long_1.default.UZERO,
        auctionId: long_1.default.UZERO,
        history: false,
    };
}
exports.QueryDebtAuctionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDebtAuctionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.auctionMappingId = reader.uint64();
                    break;
                case 3:
                    message.auctionId = reader.uint64();
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
    fromJSON(object) {
        return {
            appId: isSet(object.appId) ? long_1.default.fromString(object.appId) : long_1.default.UZERO,
            auctionMappingId: isSet(object.auctionMappingId)
                ? long_1.default.fromString(object.auctionMappingId)
                : long_1.default.UZERO,
            auctionId: isSet(object.auctionId)
                ? long_1.default.fromString(object.auctionId)
                : long_1.default.UZERO,
            history: isSet(object.history) ? Boolean(object.history) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.auctionMappingId !== undefined &&
            (obj.auctionMappingId = (message.auctionMappingId || long_1.default.UZERO).toString());
        message.auctionId !== undefined &&
            (obj.auctionId = (message.auctionId || long_1.default.UZERO).toString());
        message.history !== undefined && (obj.history = message.history);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDebtAuctionRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.auctionMappingId =
            object.auctionMappingId !== undefined && object.auctionMappingId !== null
                ? long_1.default.fromValue(object.auctionMappingId)
                : long_1.default.UZERO;
        message.auctionId =
            object.auctionId !== undefined && object.auctionId !== null
                ? long_1.default.fromValue(object.auctionId)
                : long_1.default.UZERO;
        message.history = (_a = object.history) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseQueryDebtAuctionResponse() {
    return { auction: undefined };
}
exports.QueryDebtAuctionResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.auction !== undefined) {
            auction_1.DebtAuction.encode(message.auction, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDebtAuctionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auction = auction_1.DebtAuction.decode(reader, reader.uint32());
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
                ? auction_1.DebtAuction.fromJSON(object.auction)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.auction !== undefined &&
            (obj.auction = message.auction
                ? auction_1.DebtAuction.toJSON(message.auction)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDebtAuctionResponse();
        message.auction =
            object.auction !== undefined && object.auction !== null
                ? auction_1.DebtAuction.fromPartial(object.auction)
                : undefined;
        return message;
    },
};
function createBaseQueryDebtAuctionsRequest() {
    return { appId: long_1.default.UZERO, history: false, pagination: undefined };
}
exports.QueryDebtAuctionsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDebtAuctionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
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
            appId: isSet(object.appId) ? long_1.default.fromString(object.appId) : long_1.default.UZERO,
            history: isSet(object.history) ? Boolean(object.history) : false,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.history !== undefined && (obj.history = message.history);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDebtAuctionsRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.history = (_a = object.history) !== null && _a !== void 0 ? _a : false;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDebtAuctionsResponse() {
    return { auctions: [], pagination: undefined };
}
exports.QueryDebtAuctionsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.auctions) {
            auction_1.DebtAuction.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDebtAuctionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctions.push(auction_1.DebtAuction.decode(reader, reader.uint32()));
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
                ? object.auctions.map((e) => auction_1.DebtAuction.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.auctions) {
            obj.auctions = message.auctions.map((e) => e ? auction_1.DebtAuction.toJSON(e) : undefined);
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
        const message = createBaseQueryDebtAuctionsResponse();
        message.auctions =
            ((_a = object.auctions) === null || _a === void 0 ? void 0 : _a.map((e) => auction_1.DebtAuction.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDebtBiddingsRequest() {
    return { bidder: "", appId: long_1.default.UZERO, history: false };
}
exports.QueryDebtBiddingsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDebtBiddingsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidder = reader.string();
                    break;
                case 2:
                    message.appId = reader.uint64();
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
    fromJSON(object) {
        return {
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            appId: isSet(object.appId) ? long_1.default.fromString(object.appId) : long_1.default.UZERO,
            history: isSet(object.history) ? Boolean(object.history) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.bidder !== undefined && (obj.bidder = message.bidder);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.history !== undefined && (obj.history = message.history);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryDebtBiddingsRequest();
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.history = (_b = object.history) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseQueryDebtBiddingsResponse() {
    return { bidder: "", biddings: [] };
}
exports.QueryDebtBiddingsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bidder !== "") {
            writer.uint32(10).string(message.bidder);
        }
        for (const v of message.biddings) {
            biddings_1.DebtBiddings.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDebtBiddingsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidder = reader.string();
                    break;
                case 2:
                    message.biddings.push(biddings_1.DebtBiddings.decode(reader, reader.uint32()));
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
            biddings: Array.isArray(object === null || object === void 0 ? void 0 : object.biddings)
                ? object.biddings.map((e) => biddings_1.DebtBiddings.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.bidder !== undefined && (obj.bidder = message.bidder);
        if (message.biddings) {
            obj.biddings = message.biddings.map((e) => e ? biddings_1.DebtBiddings.toJSON(e) : undefined);
        }
        else {
            obj.biddings = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryDebtBiddingsResponse();
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.biddings =
            ((_b = object.biddings) === null || _b === void 0 ? void 0 : _b.map((e) => biddings_1.DebtBiddings.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryDutchAuctionRequest() {
    return {
        appId: long_1.default.UZERO,
        auctionMappingId: long_1.default.UZERO,
        auctionId: long_1.default.UZERO,
        history: false,
    };
}
exports.QueryDutchAuctionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDutchAuctionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.auctionMappingId = reader.uint64();
                    break;
                case 3:
                    message.auctionId = reader.uint64();
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
    fromJSON(object) {
        return {
            appId: isSet(object.appId) ? long_1.default.fromString(object.appId) : long_1.default.UZERO,
            auctionMappingId: isSet(object.auctionMappingId)
                ? long_1.default.fromString(object.auctionMappingId)
                : long_1.default.UZERO,
            auctionId: isSet(object.auctionId)
                ? long_1.default.fromString(object.auctionId)
                : long_1.default.UZERO,
            history: isSet(object.history) ? Boolean(object.history) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.auctionMappingId !== undefined &&
            (obj.auctionMappingId = (message.auctionMappingId || long_1.default.UZERO).toString());
        message.auctionId !== undefined &&
            (obj.auctionId = (message.auctionId || long_1.default.UZERO).toString());
        message.history !== undefined && (obj.history = message.history);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDutchAuctionRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.auctionMappingId =
            object.auctionMappingId !== undefined && object.auctionMappingId !== null
                ? long_1.default.fromValue(object.auctionMappingId)
                : long_1.default.UZERO;
        message.auctionId =
            object.auctionId !== undefined && object.auctionId !== null
                ? long_1.default.fromValue(object.auctionId)
                : long_1.default.UZERO;
        message.history = (_a = object.history) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseQueryDutchAuctionResponse() {
    return { auction: undefined };
}
exports.QueryDutchAuctionResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.auction !== undefined) {
            auction_1.DutchAuction.encode(message.auction, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDutchAuctionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auction = auction_1.DutchAuction.decode(reader, reader.uint32());
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
                ? auction_1.DutchAuction.fromJSON(object.auction)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.auction !== undefined &&
            (obj.auction = message.auction
                ? auction_1.DutchAuction.toJSON(message.auction)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDutchAuctionResponse();
        message.auction =
            object.auction !== undefined && object.auction !== null
                ? auction_1.DutchAuction.fromPartial(object.auction)
                : undefined;
        return message;
    },
};
function createBaseQueryDutchAuctionsRequest() {
    return { appId: long_1.default.UZERO, history: false, pagination: undefined };
}
exports.QueryDutchAuctionsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDutchAuctionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
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
            appId: isSet(object.appId) ? long_1.default.fromString(object.appId) : long_1.default.UZERO,
            history: isSet(object.history) ? Boolean(object.history) : false,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.history !== undefined && (obj.history = message.history);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDutchAuctionsRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.history = (_a = object.history) !== null && _a !== void 0 ? _a : false;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDutchAuctionsResponse() {
    return { auctions: [], pagination: undefined };
}
exports.QueryDutchAuctionsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.auctions) {
            auction_1.DutchAuction.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDutchAuctionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctions.push(auction_1.DutchAuction.decode(reader, reader.uint32()));
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
                ? object.auctions.map((e) => auction_1.DutchAuction.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.auctions) {
            obj.auctions = message.auctions.map((e) => e ? auction_1.DutchAuction.toJSON(e) : undefined);
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
        const message = createBaseQueryDutchAuctionsResponse();
        message.auctions =
            ((_a = object.auctions) === null || _a === void 0 ? void 0 : _a.map((e) => auction_1.DutchAuction.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDutchBiddingsRequest() {
    return { bidder: "", appId: long_1.default.UZERO, history: false };
}
exports.QueryDutchBiddingsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDutchBiddingsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidder = reader.string();
                    break;
                case 2:
                    message.appId = reader.uint64();
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
    fromJSON(object) {
        return {
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            appId: isSet(object.appId) ? long_1.default.fromString(object.appId) : long_1.default.UZERO,
            history: isSet(object.history) ? Boolean(object.history) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.bidder !== undefined && (obj.bidder = message.bidder);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.history !== undefined && (obj.history = message.history);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryDutchBiddingsRequest();
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.history = (_b = object.history) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseQueryDutchBiddingsResponse() {
    return { bidder: "", biddings: [] };
}
exports.QueryDutchBiddingsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bidder !== "") {
            writer.uint32(10).string(message.bidder);
        }
        for (const v of message.biddings) {
            biddings_1.DutchBiddings.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDutchBiddingsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidder = reader.string();
                    break;
                case 2:
                    message.biddings.push(biddings_1.DutchBiddings.decode(reader, reader.uint32()));
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
            biddings: Array.isArray(object === null || object === void 0 ? void 0 : object.biddings)
                ? object.biddings.map((e) => biddings_1.DutchBiddings.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.bidder !== undefined && (obj.bidder = message.bidder);
        if (message.biddings) {
            obj.biddings = message.biddings.map((e) => e ? biddings_1.DutchBiddings.toJSON(e) : undefined);
        }
        else {
            obj.biddings = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryDutchBiddingsResponse();
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.biddings =
            ((_b = object.biddings) === null || _b === void 0 ? void 0 : _b.map((e) => biddings_1.DutchBiddings.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryBiddingsForSurplusAuctionRequest() {
    return {
        appId: long_1.default.UZERO,
        auctionMappingId: long_1.default.UZERO,
        auctionId: long_1.default.UZERO,
        history: false,
    };
}
exports.QueryBiddingsForSurplusAuctionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBiddingsForSurplusAuctionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.auctionMappingId = reader.uint64();
                    break;
                case 3:
                    message.auctionId = reader.uint64();
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
    fromJSON(object) {
        return {
            appId: isSet(object.appId) ? long_1.default.fromString(object.appId) : long_1.default.UZERO,
            auctionMappingId: isSet(object.auctionMappingId)
                ? long_1.default.fromString(object.auctionMappingId)
                : long_1.default.UZERO,
            auctionId: isSet(object.auctionId)
                ? long_1.default.fromString(object.auctionId)
                : long_1.default.UZERO,
            history: isSet(object.history) ? Boolean(object.history) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.auctionMappingId !== undefined &&
            (obj.auctionMappingId = (message.auctionMappingId || long_1.default.UZERO).toString());
        message.auctionId !== undefined &&
            (obj.auctionId = (message.auctionId || long_1.default.UZERO).toString());
        message.history !== undefined && (obj.history = message.history);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBiddingsForSurplusAuctionRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.auctionMappingId =
            object.auctionMappingId !== undefined && object.auctionMappingId !== null
                ? long_1.default.fromValue(object.auctionMappingId)
                : long_1.default.UZERO;
        message.auctionId =
            object.auctionId !== undefined && object.auctionId !== null
                ? long_1.default.fromValue(object.auctionId)
                : long_1.default.UZERO;
        message.history = (_a = object.history) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseQueryBiddingsForSurplusAuctionResponse() {
    return { biddings: [], pagination: undefined };
}
exports.QueryBiddingsForSurplusAuctionResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.biddings) {
            biddings_1.SurplusBiddings.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBiddingsForSurplusAuctionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.biddings.push(biddings_1.SurplusBiddings.decode(reader, reader.uint32()));
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
            biddings: Array.isArray(object === null || object === void 0 ? void 0 : object.biddings)
                ? object.biddings.map((e) => biddings_1.SurplusBiddings.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.biddings) {
            obj.biddings = message.biddings.map((e) => e ? biddings_1.SurplusBiddings.toJSON(e) : undefined);
        }
        else {
            obj.biddings = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBiddingsForSurplusAuctionResponse();
        message.biddings =
            ((_a = object.biddings) === null || _a === void 0 ? void 0 : _a.map((e) => biddings_1.SurplusBiddings.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryProtocolStatisticsRequest() {
    return { appId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryProtocolStatisticsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProtocolStatisticsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
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
            appId: isSet(object.appId) ? long_1.default.fromString(object.appId) : long_1.default.UZERO,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProtocolStatisticsRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryProtocolStatisticsResponse() {
    return { stats: [], pagination: undefined };
}
exports.QueryProtocolStatisticsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.stats) {
            auction_1.ProtocolStatistics.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProtocolStatisticsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stats.push(auction_1.ProtocolStatistics.decode(reader, reader.uint32()));
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
            stats: Array.isArray(object === null || object === void 0 ? void 0 : object.stats)
                ? object.stats.map((e) => auction_1.ProtocolStatistics.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.stats) {
            obj.stats = message.stats.map((e) => e ? auction_1.ProtocolStatistics.toJSON(e) : undefined);
        }
        else {
            obj.stats = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryProtocolStatisticsResponse();
        message.stats =
            ((_a = object.stats) === null || _a === void 0 ? void 0 : _a.map((e) => auction_1.ProtocolStatistics.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
function createBaseQueryAuctionParamRequest() {
    return { appId: long_1.default.UZERO };
}
exports.QueryAuctionParamRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionParamRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
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
            appId: isSet(object.appId) ? long_1.default.fromString(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAuctionParamRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryAuctionParamResponse() {
    return { auctionParams: undefined };
}
exports.QueryAuctionParamResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.auctionParams !== undefined) {
            auction_1.AuctionParams.encode(message.auctionParams, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionParamResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctionParams = auction_1.AuctionParams.decode(reader, reader.uint32());
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
                ? auction_1.AuctionParams.fromJSON(object.auctionParams)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.auctionParams !== undefined &&
            (obj.auctionParams = message.auctionParams
                ? auction_1.AuctionParams.toJSON(message.auctionParams)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAuctionParamResponse();
        message.auctionParams =
            object.auctionParams !== undefined && object.auctionParams !== null
                ? auction_1.AuctionParams.fromPartial(object.auctionParams)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
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
    }
    QuerySurplusAuction(request) {
        const data = exports.QuerySurplusAuctionRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auction.v1beta1.Query", "QuerySurplusAuction", data);
        return promise.then((data) => exports.QuerySurplusAuctionResponse.decode(new minimal_1.default.Reader(data)));
    }
    QuerySurplusAuctions(request) {
        const data = exports.QuerySurplusAuctionsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auction.v1beta1.Query", "QuerySurplusAuctions", data);
        return promise.then((data) => exports.QuerySurplusAuctionsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QuerySurplusBiddings(request) {
        const data = exports.QuerySurplusBiddingsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auction.v1beta1.Query", "QuerySurplusBiddings", data);
        return promise.then((data) => exports.QuerySurplusBiddingsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryDebtAuction(request) {
        const data = exports.QueryDebtAuctionRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auction.v1beta1.Query", "QueryDebtAuction", data);
        return promise.then((data) => exports.QueryDebtAuctionResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryDebtAuctions(request) {
        const data = exports.QueryDebtAuctionsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auction.v1beta1.Query", "QueryDebtAuctions", data);
        return promise.then((data) => exports.QueryDebtAuctionsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryDebtBiddings(request) {
        const data = exports.QueryDebtBiddingsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auction.v1beta1.Query", "QueryDebtBiddings", data);
        return promise.then((data) => exports.QueryDebtBiddingsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryDutchAuction(request) {
        const data = exports.QueryDutchAuctionRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auction.v1beta1.Query", "QueryDutchAuction", data);
        return promise.then((data) => exports.QueryDutchAuctionResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryDutchAuctions(request) {
        const data = exports.QueryDutchAuctionsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auction.v1beta1.Query", "QueryDutchAuctions", data);
        return promise.then((data) => exports.QueryDutchAuctionsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryDutchBiddings(request) {
        const data = exports.QueryDutchBiddingsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auction.v1beta1.Query", "QueryDutchBiddings", data);
        return promise.then((data) => exports.QueryDutchBiddingsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryParams(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auction.v1beta1.Query", "QueryParams", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryProtocolStatistics(request) {
        const data = exports.QueryProtocolStatisticsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auction.v1beta1.Query", "QueryProtocolStatistics", data);
        return promise.then((data) => exports.QueryProtocolStatisticsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryAuctionParams(request) {
        const data = exports.QueryAuctionParamRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auction.v1beta1.Query", "QueryAuctionParams", data);
        return promise.then((data) => exports.QueryAuctionParamResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map