"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryServiceClientImpl = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryBiddingsResponse = exports.QueryBiddingsRequest = exports.QueryAuctionsResponse = exports.QueryAuctionsRequest = exports.QueryAuctionResponse = exports.QueryAuctionRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const auction_1 = require("../../../comdex/auction/v1beta1/auction");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const params_1 = require("../../../comdex/auction/v1beta1/params");
const biddings_1 = require("./biddings");
exports.protobufPackage = "comdex.auction.v1beta1";
function createBaseQueryAuctionRequest() {
    return { id: long_1.default.UZERO };
}
exports.QueryAuctionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
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
            id: isSet(object.id) ? long_1.default.fromString(object.id) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAuctionRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryAuctionResponse() {
    return { auction: undefined };
}
exports.QueryAuctionResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.auction !== undefined) {
            auction_1.CollateralAuction.encode(message.auction, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auction = auction_1.CollateralAuction.decode(reader, reader.uint32());
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
                ? auction_1.CollateralAuction.fromJSON(object.auction)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.auction !== undefined &&
            (obj.auction = message.auction
                ? auction_1.CollateralAuction.toJSON(message.auction)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAuctionResponse();
        message.auction =
            object.auction !== undefined && object.auction !== null
                ? auction_1.CollateralAuction.fromPartial(object.auction)
                : undefined;
        return message;
    },
};
function createBaseQueryAuctionsRequest() {
    return { pagination: undefined };
}
exports.QueryAuctionsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionsRequest();
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
        const message = createBaseQueryAuctionsRequest();
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.auctions) {
            auction_1.CollateralAuction.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctions.push(auction_1.CollateralAuction.decode(reader, reader.uint32()));
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
                ? object.auctions.map((e) => auction_1.CollateralAuction.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.auctions) {
            obj.auctions = message.auctions.map((e) => e ? auction_1.CollateralAuction.toJSON(e) : undefined);
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
            ((_a = object.auctions) === null || _a === void 0 ? void 0 : _a.map((e) => auction_1.CollateralAuction.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryBiddingsRequest() {
    return { bidder: "" };
}
exports.QueryBiddingsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bidder !== "") {
            writer.uint32(10).string(message.bidder);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBiddingsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidder = reader.string();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.bidder !== undefined && (obj.bidder = message.bidder);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBiddingsRequest();
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryBiddingsResponse() {
    return { bidder: "", biddings: [] };
}
exports.QueryBiddingsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bidder !== "") {
            writer.uint32(10).string(message.bidder);
        }
        for (const v of message.biddings) {
            biddings_1.Biddings.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBiddingsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidder = reader.string();
                    break;
                case 2:
                    message.biddings.push(biddings_1.Biddings.decode(reader, reader.uint32()));
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
                ? object.biddings.map((e) => biddings_1.Biddings.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.bidder !== undefined && (obj.bidder = message.bidder);
        if (message.biddings) {
            obj.biddings = message.biddings.map((e) => e ? biddings_1.Biddings.toJSON(e) : undefined);
        }
        else {
            obj.biddings = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryBiddingsResponse();
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.biddings =
            ((_b = object.biddings) === null || _b === void 0 ? void 0 : _b.map((e) => biddings_1.Biddings.fromPartial(e))) || [];
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
class QueryServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.QueryAuction = this.QueryAuction.bind(this);
        this.QueryAuctions = this.QueryAuctions.bind(this);
        this.QueryBiddings = this.QueryBiddings.bind(this);
        this.QueryParams = this.QueryParams.bind(this);
    }
    QueryAuction(request) {
        const data = exports.QueryAuctionRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auction.v1beta1.QueryService", "QueryAuction", data);
        return promise.then((data) => exports.QueryAuctionResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryAuctions(request) {
        const data = exports.QueryAuctionsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auction.v1beta1.QueryService", "QueryAuctions", data);
        return promise.then((data) => exports.QueryAuctionsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryBiddings(request) {
        const data = exports.QueryBiddingsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auction.v1beta1.QueryService", "QueryBiddings", data);
        return promise.then((data) => exports.QueryBiddingsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryParams(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auction.v1beta1.QueryService", "QueryParams", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryServiceClientImpl = QueryServiceClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=querier.js.map