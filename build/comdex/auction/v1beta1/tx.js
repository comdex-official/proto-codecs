"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.MsgClientImpl = exports.MsgPlaceDutchLendBidResponse = exports.MsgPlaceDutchLendBidRequest = exports.MsgPlaceDutchBidResponse = exports.MsgPlaceDutchBidRequest = exports.MsgPlaceDebtBidResponse = exports.MsgPlaceDebtBidRequest = exports.MsgPlaceSurplusBidResponse = exports.MsgPlaceSurplusBidRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "comdex.auction.v1beta1";
function createBaseMsgPlaceSurplusBidRequest() {
    return {
        auctionId: long_1.default.UZERO,
        bidder: "",
        amount: undefined,
        appId: long_1.default.UZERO,
        auctionMappingId: long_1.default.UZERO,
    };
}
exports.MsgPlaceSurplusBidRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.auctionId.isZero()) {
            writer.uint32(8).uint64(message.auctionId);
        }
        if (message.bidder !== "") {
            writer.uint32(18).string(message.bidder);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        if (!message.appId.isZero()) {
            writer.uint32(32).uint64(message.appId);
        }
        if (!message.auctionMappingId.isZero()) {
            writer.uint32(40).uint64(message.auctionMappingId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPlaceSurplusBidRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctionId = reader.uint64();
                    break;
                case 2:
                    message.bidder = reader.string();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.appId = reader.uint64();
                    break;
                case 5:
                    message.auctionMappingId = reader.uint64();
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
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            auctionMappingId: isSet(object.auctionMappingId)
                ? long_1.default.fromValue(object.auctionMappingId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.auctionId !== undefined &&
            (obj.auctionId = (message.auctionId || long_1.default.UZERO).toString());
        message.bidder !== undefined && (obj.bidder = message.bidder);
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.auctionMappingId !== undefined &&
            (obj.auctionMappingId = (message.auctionMappingId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgPlaceSurplusBidRequest();
        message.auctionId =
            object.auctionId !== undefined && object.auctionId !== null
                ? long_1.default.fromValue(object.auctionId)
                : long_1.default.UZERO;
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? coin_1.Coin.fromPartial(object.amount)
                : undefined;
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.auctionMappingId =
            object.auctionMappingId !== undefined && object.auctionMappingId !== null
                ? long_1.default.fromValue(object.auctionMappingId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgPlaceSurplusBidResponse() {
    return {};
}
exports.MsgPlaceSurplusBidResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgPlaceSurplusBidResponse();
        return message;
    },
};
function createBaseMsgPlaceDebtBidRequest() {
    return {
        auctionId: long_1.default.UZERO,
        bidder: "",
        bid: undefined,
        expectedUserToken: undefined,
        appId: long_1.default.UZERO,
        auctionMappingId: long_1.default.UZERO,
    };
}
exports.MsgPlaceDebtBidRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.auctionId.isZero()) {
            writer.uint32(8).uint64(message.auctionId);
        }
        if (message.bidder !== "") {
            writer.uint32(18).string(message.bidder);
        }
        if (message.bid !== undefined) {
            coin_1.Coin.encode(message.bid, writer.uint32(26).fork()).ldelim();
        }
        if (message.expectedUserToken !== undefined) {
            coin_1.Coin.encode(message.expectedUserToken, writer.uint32(34).fork()).ldelim();
        }
        if (!message.appId.isZero()) {
            writer.uint32(40).uint64(message.appId);
        }
        if (!message.auctionMappingId.isZero()) {
            writer.uint32(48).uint64(message.auctionMappingId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPlaceDebtBidRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctionId = reader.uint64();
                    break;
                case 2:
                    message.bidder = reader.string();
                    break;
                case 3:
                    message.bid = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.expectedUserToken = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.appId = reader.uint64();
                    break;
                case 6:
                    message.auctionMappingId = reader.uint64();
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
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            bid: isSet(object.bid) ? coin_1.Coin.fromJSON(object.bid) : undefined,
            expectedUserToken: isSet(object.expectedUserToken)
                ? coin_1.Coin.fromJSON(object.expectedUserToken)
                : undefined,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            auctionMappingId: isSet(object.auctionMappingId)
                ? long_1.default.fromValue(object.auctionMappingId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.auctionId !== undefined &&
            (obj.auctionId = (message.auctionId || long_1.default.UZERO).toString());
        message.bidder !== undefined && (obj.bidder = message.bidder);
        message.bid !== undefined &&
            (obj.bid = message.bid ? coin_1.Coin.toJSON(message.bid) : undefined);
        message.expectedUserToken !== undefined &&
            (obj.expectedUserToken = message.expectedUserToken
                ? coin_1.Coin.toJSON(message.expectedUserToken)
                : undefined);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.auctionMappingId !== undefined &&
            (obj.auctionMappingId = (message.auctionMappingId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgPlaceDebtBidRequest();
        message.auctionId =
            object.auctionId !== undefined && object.auctionId !== null
                ? long_1.default.fromValue(object.auctionId)
                : long_1.default.UZERO;
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.bid =
            object.bid !== undefined && object.bid !== null
                ? coin_1.Coin.fromPartial(object.bid)
                : undefined;
        message.expectedUserToken =
            object.expectedUserToken !== undefined &&
                object.expectedUserToken !== null
                ? coin_1.Coin.fromPartial(object.expectedUserToken)
                : undefined;
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.auctionMappingId =
            object.auctionMappingId !== undefined && object.auctionMappingId !== null
                ? long_1.default.fromValue(object.auctionMappingId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgPlaceDebtBidResponse() {
    return {};
}
exports.MsgPlaceDebtBidResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgPlaceDebtBidResponse();
        return message;
    },
};
function createBaseMsgPlaceDutchBidRequest() {
    return {
        auctionId: long_1.default.UZERO,
        bidder: "",
        amount: undefined,
        max: "",
        appId: long_1.default.UZERO,
        auctionMappingId: long_1.default.UZERO,
    };
}
exports.MsgPlaceDutchBidRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.auctionId.isZero()) {
            writer.uint32(8).uint64(message.auctionId);
        }
        if (message.bidder !== "") {
            writer.uint32(18).string(message.bidder);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPlaceDutchBidRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctionId = reader.uint64();
                    break;
                case 2:
                    message.bidder = reader.string();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.max = reader.string();
                    break;
                case 5:
                    message.appId = reader.uint64();
                    break;
                case 6:
                    message.auctionMappingId = reader.uint64();
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
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
            max: isSet(object.max) ? String(object.max) : "",
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            auctionMappingId: isSet(object.auctionMappingId)
                ? long_1.default.fromValue(object.auctionMappingId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.auctionId !== undefined &&
            (obj.auctionId = (message.auctionId || long_1.default.UZERO).toString());
        message.bidder !== undefined && (obj.bidder = message.bidder);
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        message.max !== undefined && (obj.max = message.max);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.auctionMappingId !== undefined &&
            (obj.auctionMappingId = (message.auctionMappingId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgPlaceDutchBidRequest();
        message.auctionId =
            object.auctionId !== undefined && object.auctionId !== null
                ? long_1.default.fromValue(object.auctionId)
                : long_1.default.UZERO;
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? coin_1.Coin.fromPartial(object.amount)
                : undefined;
        message.max = (_b = object.max) !== null && _b !== void 0 ? _b : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.auctionMappingId =
            object.auctionMappingId !== undefined && object.auctionMappingId !== null
                ? long_1.default.fromValue(object.auctionMappingId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgPlaceDutchBidResponse() {
    return {};
}
exports.MsgPlaceDutchBidResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgPlaceDutchBidResponse();
        return message;
    },
};
function createBaseMsgPlaceDutchLendBidRequest() {
    return {
        auctionId: long_1.default.UZERO,
        bidder: "",
        amount: undefined,
        max: "",
        appId: long_1.default.UZERO,
        auctionMappingId: long_1.default.UZERO,
    };
}
exports.MsgPlaceDutchLendBidRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.auctionId.isZero()) {
            writer.uint32(8).uint64(message.auctionId);
        }
        if (message.bidder !== "") {
            writer.uint32(18).string(message.bidder);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPlaceDutchLendBidRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctionId = reader.uint64();
                    break;
                case 2:
                    message.bidder = reader.string();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.max = reader.string();
                    break;
                case 5:
                    message.appId = reader.uint64();
                    break;
                case 6:
                    message.auctionMappingId = reader.uint64();
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
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
            max: isSet(object.max) ? String(object.max) : "",
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            auctionMappingId: isSet(object.auctionMappingId)
                ? long_1.default.fromValue(object.auctionMappingId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.auctionId !== undefined &&
            (obj.auctionId = (message.auctionId || long_1.default.UZERO).toString());
        message.bidder !== undefined && (obj.bidder = message.bidder);
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        message.max !== undefined && (obj.max = message.max);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.auctionMappingId !== undefined &&
            (obj.auctionMappingId = (message.auctionMappingId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgPlaceDutchLendBidRequest();
        message.auctionId =
            object.auctionId !== undefined && object.auctionId !== null
                ? long_1.default.fromValue(object.auctionId)
                : long_1.default.UZERO;
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? coin_1.Coin.fromPartial(object.amount)
                : undefined;
        message.max = (_b = object.max) !== null && _b !== void 0 ? _b : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.auctionMappingId =
            object.auctionMappingId !== undefined && object.auctionMappingId !== null
                ? long_1.default.fromValue(object.auctionMappingId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgPlaceDutchLendBidResponse() {
    return {};
}
exports.MsgPlaceDutchLendBidResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgPlaceDutchLendBidResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.MsgPlaceSurplusBid = this.MsgPlaceSurplusBid.bind(this);
        this.MsgPlaceDebtBid = this.MsgPlaceDebtBid.bind(this);
        this.MsgPlaceDutchBid = this.MsgPlaceDutchBid.bind(this);
        this.MsgPlaceDutchLendBid = this.MsgPlaceDutchLendBid.bind(this);
    }
    MsgPlaceSurplusBid(request) {
        const data = exports.MsgPlaceSurplusBidRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auction.v1beta1.Msg", "MsgPlaceSurplusBid", data);
        return promise.then((data) => exports.MsgPlaceSurplusBidResponse.decode(new _m0.Reader(data)));
    }
    MsgPlaceDebtBid(request) {
        const data = exports.MsgPlaceDebtBidRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auction.v1beta1.Msg", "MsgPlaceDebtBid", data);
        return promise.then((data) => exports.MsgPlaceDebtBidResponse.decode(new _m0.Reader(data)));
    }
    MsgPlaceDutchBid(request) {
        const data = exports.MsgPlaceDutchBidRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auction.v1beta1.Msg", "MsgPlaceDutchBid", data);
        return promise.then((data) => exports.MsgPlaceDutchBidResponse.decode(new _m0.Reader(data)));
    }
    MsgPlaceDutchLendBid(request) {
        const data = exports.MsgPlaceDutchLendBidRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.auction.v1beta1.Msg", "MsgPlaceDutchLendBid", data);
        return promise.then((data) => exports.MsgPlaceDutchLendBidResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map