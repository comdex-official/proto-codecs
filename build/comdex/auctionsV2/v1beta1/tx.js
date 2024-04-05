"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgWithdrawLimitBidResponse = exports.MsgWithdrawLimitBidRequest = exports.MsgCancelLimitBidResponse = exports.MsgCancelLimitBidRequest = exports.MsgDepositLimitBidResponse = exports.MsgDepositLimitBidRequest = exports.MsgPlaceMarketBidResponse = exports.MsgPlaceMarketBidRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "comdex.auctionsV2.v1beta1";
function createBaseMsgPlaceMarketBidRequest() {
    return { auctionId: long_1.default.UZERO, bidder: "", amount: undefined };
}
exports.MsgPlaceMarketBidRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.auctionId.isZero()) {
            writer.uint32(8).uint64(message.auctionId);
        }
        if (message.bidder !== "") {
            writer.uint32(18).string(message.bidder);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPlaceMarketBidRequest();
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            auctionId: isSet(object.auctionId) ? long_1.default.fromValue(object.auctionId) : long_1.default.UZERO,
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.auctionId !== undefined && (obj.auctionId = (message.auctionId || long_1.default.UZERO).toString());
        message.bidder !== undefined && (obj.bidder = message.bidder);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgPlaceMarketBidRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgPlaceMarketBidRequest();
        message.auctionId = (object.auctionId !== undefined && object.auctionId !== null)
            ? long_1.default.fromValue(object.auctionId)
            : long_1.default.UZERO;
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? coin_1.Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseMsgPlaceMarketBidResponse() {
    return {};
}
exports.MsgPlaceMarketBidResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgPlaceMarketBidResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgPlaceMarketBidResponse();
        return message;
    },
};
function createBaseMsgDepositLimitBidRequest() {
    return { collateralTokenId: long_1.default.UZERO, debtTokenId: long_1.default.UZERO, premiumDiscount: "", bidder: "", amount: undefined };
}
exports.MsgDepositLimitBidRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            coin_1.Coin.encode(message.amount, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositLimitBidRequest();
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
                    message.premiumDiscount = reader.string();
                    break;
                case 4:
                    message.bidder = reader.string();
                    break;
                case 5:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            collateralTokenId: isSet(object.collateralTokenId) ? long_1.default.fromValue(object.collateralTokenId) : long_1.default.UZERO,
            debtTokenId: isSet(object.debtTokenId) ? long_1.default.fromValue(object.debtTokenId) : long_1.default.UZERO,
            premiumDiscount: isSet(object.premiumDiscount) ? String(object.premiumDiscount) : "",
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collateralTokenId !== undefined &&
            (obj.collateralTokenId = (message.collateralTokenId || long_1.default.UZERO).toString());
        message.debtTokenId !== undefined && (obj.debtTokenId = (message.debtTokenId || long_1.default.UZERO).toString());
        message.premiumDiscount !== undefined && (obj.premiumDiscount = message.premiumDiscount);
        message.bidder !== undefined && (obj.bidder = message.bidder);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgDepositLimitBidRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgDepositLimitBidRequest();
        message.collateralTokenId = (object.collateralTokenId !== undefined && object.collateralTokenId !== null)
            ? long_1.default.fromValue(object.collateralTokenId)
            : long_1.default.UZERO;
        message.debtTokenId = (object.debtTokenId !== undefined && object.debtTokenId !== null)
            ? long_1.default.fromValue(object.debtTokenId)
            : long_1.default.UZERO;
        message.premiumDiscount = (_a = object.premiumDiscount) !== null && _a !== void 0 ? _a : "";
        message.bidder = (_b = object.bidder) !== null && _b !== void 0 ? _b : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? coin_1.Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseMsgDepositLimitBidResponse() {
    return {};
}
exports.MsgDepositLimitBidResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgDepositLimitBidResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgDepositLimitBidResponse();
        return message;
    },
};
function createBaseMsgCancelLimitBidRequest() {
    return { collateralTokenId: long_1.default.UZERO, debtTokenId: long_1.default.UZERO, premiumDiscount: "", bidder: "" };
}
exports.MsgCancelLimitBidRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelLimitBidRequest();
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
    fromJSON(object) {
        return {
            collateralTokenId: isSet(object.collateralTokenId) ? long_1.default.fromValue(object.collateralTokenId) : long_1.default.UZERO,
            debtTokenId: isSet(object.debtTokenId) ? long_1.default.fromValue(object.debtTokenId) : long_1.default.UZERO,
            premiumDiscount: isSet(object.premiumDiscount) ? String(object.premiumDiscount) : "",
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collateralTokenId !== undefined &&
            (obj.collateralTokenId = (message.collateralTokenId || long_1.default.UZERO).toString());
        message.debtTokenId !== undefined && (obj.debtTokenId = (message.debtTokenId || long_1.default.UZERO).toString());
        message.premiumDiscount !== undefined && (obj.premiumDiscount = message.premiumDiscount);
        message.bidder !== undefined && (obj.bidder = message.bidder);
        return obj;
    },
    create(base) {
        return exports.MsgCancelLimitBidRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgCancelLimitBidRequest();
        message.collateralTokenId = (object.collateralTokenId !== undefined && object.collateralTokenId !== null)
            ? long_1.default.fromValue(object.collateralTokenId)
            : long_1.default.UZERO;
        message.debtTokenId = (object.debtTokenId !== undefined && object.debtTokenId !== null)
            ? long_1.default.fromValue(object.debtTokenId)
            : long_1.default.UZERO;
        message.premiumDiscount = (_a = object.premiumDiscount) !== null && _a !== void 0 ? _a : "";
        message.bidder = (_b = object.bidder) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgCancelLimitBidResponse() {
    return {};
}
exports.MsgCancelLimitBidResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgCancelLimitBidResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCancelLimitBidResponse();
        return message;
    },
};
function createBaseMsgWithdrawLimitBidRequest() {
    return { collateralTokenId: long_1.default.UZERO, debtTokenId: long_1.default.UZERO, premiumDiscount: "", bidder: "", amount: undefined };
}
exports.MsgWithdrawLimitBidRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            coin_1.Coin.encode(message.amount, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawLimitBidRequest();
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
                    message.premiumDiscount = reader.string();
                    break;
                case 4:
                    message.bidder = reader.string();
                    break;
                case 5:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            collateralTokenId: isSet(object.collateralTokenId) ? long_1.default.fromValue(object.collateralTokenId) : long_1.default.UZERO,
            debtTokenId: isSet(object.debtTokenId) ? long_1.default.fromValue(object.debtTokenId) : long_1.default.UZERO,
            premiumDiscount: isSet(object.premiumDiscount) ? String(object.premiumDiscount) : "",
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collateralTokenId !== undefined &&
            (obj.collateralTokenId = (message.collateralTokenId || long_1.default.UZERO).toString());
        message.debtTokenId !== undefined && (obj.debtTokenId = (message.debtTokenId || long_1.default.UZERO).toString());
        message.premiumDiscount !== undefined && (obj.premiumDiscount = message.premiumDiscount);
        message.bidder !== undefined && (obj.bidder = message.bidder);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgWithdrawLimitBidRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgWithdrawLimitBidRequest();
        message.collateralTokenId = (object.collateralTokenId !== undefined && object.collateralTokenId !== null)
            ? long_1.default.fromValue(object.collateralTokenId)
            : long_1.default.UZERO;
        message.debtTokenId = (object.debtTokenId !== undefined && object.debtTokenId !== null)
            ? long_1.default.fromValue(object.debtTokenId)
            : long_1.default.UZERO;
        message.premiumDiscount = (_a = object.premiumDiscount) !== null && _a !== void 0 ? _a : "";
        message.bidder = (_b = object.bidder) !== null && _b !== void 0 ? _b : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? coin_1.Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseMsgWithdrawLimitBidResponse() {
    return {};
}
exports.MsgWithdrawLimitBidResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgWithdrawLimitBidResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgWithdrawLimitBidResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "comdex.auctionsV2.v1beta1.Msg";
        this.rpc = rpc;
        this.MsgPlaceMarketBid = this.MsgPlaceMarketBid.bind(this);
        this.MsgDepositLimitBid = this.MsgDepositLimitBid.bind(this);
        this.MsgCancelLimitBid = this.MsgCancelLimitBid.bind(this);
        this.MsgWithdrawLimitBid = this.MsgWithdrawLimitBid.bind(this);
    }
    MsgPlaceMarketBid(request) {
        const data = exports.MsgPlaceMarketBidRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "MsgPlaceMarketBid", data);
        return promise.then((data) => exports.MsgPlaceMarketBidResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgDepositLimitBid(request) {
        const data = exports.MsgDepositLimitBidRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "MsgDepositLimitBid", data);
        return promise.then((data) => exports.MsgDepositLimitBidResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgCancelLimitBid(request) {
        const data = exports.MsgCancelLimitBidRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "MsgCancelLimitBid", data);
        return promise.then((data) => exports.MsgCancelLimitBidResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgWithdrawLimitBid(request) {
        const data = exports.MsgWithdrawLimitBidRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "MsgWithdrawLimitBid", data);
        return promise.then((data) => exports.MsgWithdrawLimitBidResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map