"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBiddings = exports.Biddings = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.auction.v1beta1";
function createBaseBiddings() {
    return {
        id: long_1.default.UZERO,
        auctionId: long_1.default.UZERO,
        auctionStatus: "",
        auctionedCollateral: undefined,
        bidder: "",
        bid: undefined,
        biddingTimestamp: undefined,
        biddingStatus: "",
    };
}
exports.Biddings = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.auctionId.isZero()) {
            writer.uint32(16).uint64(message.auctionId);
        }
        if (message.auctionStatus !== "") {
            writer.uint32(26).string(message.auctionStatus);
        }
        if (message.auctionedCollateral !== undefined) {
            coin_1.Coin.encode(message.auctionedCollateral, writer.uint32(34).fork()).ldelim();
        }
        if (message.bidder !== "") {
            writer.uint32(42).string(message.bidder);
        }
        if (message.bid !== undefined) {
            coin_1.Coin.encode(message.bid, writer.uint32(50).fork()).ldelim();
        }
        if (message.biddingTimestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.biddingTimestamp), writer.uint32(58).fork()).ldelim();
        }
        if (message.biddingStatus !== "") {
            writer.uint32(66).string(message.biddingStatus);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBiddings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.auctionId = reader.uint64();
                    break;
                case 3:
                    message.auctionStatus = reader.string();
                    break;
                case 4:
                    message.auctionedCollateral = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.bidder = reader.string();
                    break;
                case 6:
                    message.bid = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.biddingTimestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.biddingStatus = reader.string();
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
            auctionId: isSet(object.auctionId)
                ? long_1.default.fromString(object.auctionId)
                : long_1.default.UZERO,
            auctionStatus: isSet(object.auctionStatus)
                ? String(object.auctionStatus)
                : "",
            auctionedCollateral: isSet(object.auctionedCollateral)
                ? coin_1.Coin.fromJSON(object.auctionedCollateral)
                : undefined,
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            bid: isSet(object.bid) ? coin_1.Coin.fromJSON(object.bid) : undefined,
            biddingTimestamp: isSet(object.biddingTimestamp)
                ? fromJsonTimestamp(object.biddingTimestamp)
                : undefined,
            biddingStatus: isSet(object.biddingStatus)
                ? String(object.biddingStatus)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.auctionId !== undefined &&
            (obj.auctionId = (message.auctionId || long_1.default.UZERO).toString());
        message.auctionStatus !== undefined &&
            (obj.auctionStatus = message.auctionStatus);
        message.auctionedCollateral !== undefined &&
            (obj.auctionedCollateral = message.auctionedCollateral
                ? coin_1.Coin.toJSON(message.auctionedCollateral)
                : undefined);
        message.bidder !== undefined && (obj.bidder = message.bidder);
        message.bid !== undefined &&
            (obj.bid = message.bid ? coin_1.Coin.toJSON(message.bid) : undefined);
        message.biddingTimestamp !== undefined &&
            (obj.biddingTimestamp = message.biddingTimestamp.toISOString());
        message.biddingStatus !== undefined &&
            (obj.biddingStatus = message.biddingStatus);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseBiddings();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.auctionId =
            object.auctionId !== undefined && object.auctionId !== null
                ? long_1.default.fromValue(object.auctionId)
                : long_1.default.UZERO;
        message.auctionStatus = (_a = object.auctionStatus) !== null && _a !== void 0 ? _a : "";
        message.auctionedCollateral =
            object.auctionedCollateral !== undefined &&
                object.auctionedCollateral !== null
                ? coin_1.Coin.fromPartial(object.auctionedCollateral)
                : undefined;
        message.bidder = (_b = object.bidder) !== null && _b !== void 0 ? _b : "";
        message.bid =
            object.bid !== undefined && object.bid !== null
                ? coin_1.Coin.fromPartial(object.bid)
                : undefined;
        message.biddingTimestamp = (_c = object.biddingTimestamp) !== null && _c !== void 0 ? _c : undefined;
        message.biddingStatus = (_d = object.biddingStatus) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseUserBiddings() {
    return { id: long_1.default.UZERO, bidder: "", biddingIds: [] };
}
exports.UserBiddings = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.bidder !== "") {
            writer.uint32(18).string(message.bidder);
        }
        writer.uint32(26).fork();
        for (const v of message.biddingIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserBiddings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.bidder = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.biddingIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.biddingIds.push(reader.uint64());
                    }
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
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            biddingIds: Array.isArray(object === null || object === void 0 ? void 0 : object.biddingIds)
                ? object.biddingIds.map((e) => long_1.default.fromString(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.bidder !== undefined && (obj.bidder = message.bidder);
        if (message.biddingIds) {
            obj.biddingIds = message.biddingIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.biddingIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserBiddings();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.biddingIds = ((_b = object.biddingIds) === null || _b === void 0 ? void 0 : _b.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function toTimestamp(date) {
    const seconds = numberToLong(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds.toNumber() * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function numberToLong(number) {
    return long_1.default.fromNumber(number);
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=biddings.js.map