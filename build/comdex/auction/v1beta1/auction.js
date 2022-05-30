"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollateralAuction = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const pair_1 = require("../../../comdex/asset/v1beta1/pair");
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.auction.v1beta1";
function createBaseCollateralAuction() {
    return {
        id: long_1.default.UZERO,
        lockedVaultId: long_1.default.UZERO,
        auctionedCollateral: undefined,
        discountQuantity: undefined,
        activeBiddingId: long_1.default.UZERO,
        bidder: "",
        bid: undefined,
        minBid: undefined,
        maxBid: undefined,
        endTime: undefined,
        pair: undefined,
        biddingIds: [],
    };
}
exports.CollateralAuction = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.lockedVaultId.isZero()) {
            writer.uint32(16).uint64(message.lockedVaultId);
        }
        if (message.auctionedCollateral !== undefined) {
            coin_1.Coin.encode(message.auctionedCollateral, writer.uint32(26).fork()).ldelim();
        }
        if (message.discountQuantity !== undefined) {
            coin_1.Coin.encode(message.discountQuantity, writer.uint32(34).fork()).ldelim();
        }
        if (!message.activeBiddingId.isZero()) {
            writer.uint32(40).uint64(message.activeBiddingId);
        }
        if (message.bidder !== "") {
            writer.uint32(50).string(message.bidder);
        }
        if (message.bid !== undefined) {
            coin_1.Coin.encode(message.bid, writer.uint32(58).fork()).ldelim();
        }
        if (message.minBid !== undefined) {
            coin_1.Coin.encode(message.minBid, writer.uint32(66).fork()).ldelim();
        }
        if (message.maxBid !== undefined) {
            coin_1.Coin.encode(message.maxBid, writer.uint32(74).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.endTime), writer.uint32(82).fork()).ldelim();
        }
        if (message.pair !== undefined) {
            pair_1.Pair.encode(message.pair, writer.uint32(90).fork()).ldelim();
        }
        writer.uint32(98).fork();
        for (const v of message.biddingIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCollateralAuction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.lockedVaultId = reader.uint64();
                    break;
                case 3:
                    message.auctionedCollateral = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.discountQuantity = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.activeBiddingId = reader.uint64();
                    break;
                case 6:
                    message.bidder = reader.string();
                    break;
                case 7:
                    message.bid = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.minBid = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.maxBid = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.endTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.pair = pair_1.Pair.decode(reader, reader.uint32());
                    break;
                case 12:
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
            lockedVaultId: isSet(object.lockedVaultId)
                ? long_1.default.fromString(object.lockedVaultId)
                : long_1.default.UZERO,
            auctionedCollateral: isSet(object.auctionedCollateral)
                ? coin_1.Coin.fromJSON(object.auctionedCollateral)
                : undefined,
            discountQuantity: isSet(object.discountQuantity)
                ? coin_1.Coin.fromJSON(object.discountQuantity)
                : undefined,
            activeBiddingId: isSet(object.activeBiddingId)
                ? long_1.default.fromString(object.activeBiddingId)
                : long_1.default.UZERO,
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            bid: isSet(object.bid) ? coin_1.Coin.fromJSON(object.bid) : undefined,
            minBid: isSet(object.minBid) ? coin_1.Coin.fromJSON(object.minBid) : undefined,
            maxBid: isSet(object.maxBid) ? coin_1.Coin.fromJSON(object.maxBid) : undefined,
            endTime: isSet(object.endTime)
                ? fromJsonTimestamp(object.endTime)
                : undefined,
            pair: isSet(object.pair) ? pair_1.Pair.fromJSON(object.pair) : undefined,
            biddingIds: Array.isArray(object === null || object === void 0 ? void 0 : object.biddingIds)
                ? object.biddingIds.map((e) => long_1.default.fromString(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.lockedVaultId !== undefined &&
            (obj.lockedVaultId = (message.lockedVaultId || long_1.default.UZERO).toString());
        message.auctionedCollateral !== undefined &&
            (obj.auctionedCollateral = message.auctionedCollateral
                ? coin_1.Coin.toJSON(message.auctionedCollateral)
                : undefined);
        message.discountQuantity !== undefined &&
            (obj.discountQuantity = message.discountQuantity
                ? coin_1.Coin.toJSON(message.discountQuantity)
                : undefined);
        message.activeBiddingId !== undefined &&
            (obj.activeBiddingId = (message.activeBiddingId || long_1.default.UZERO).toString());
        message.bidder !== undefined && (obj.bidder = message.bidder);
        message.bid !== undefined &&
            (obj.bid = message.bid ? coin_1.Coin.toJSON(message.bid) : undefined);
        message.minBid !== undefined &&
            (obj.minBid = message.minBid ? coin_1.Coin.toJSON(message.minBid) : undefined);
        message.maxBid !== undefined &&
            (obj.maxBid = message.maxBid ? coin_1.Coin.toJSON(message.maxBid) : undefined);
        message.endTime !== undefined &&
            (obj.endTime = message.endTime.toISOString());
        message.pair !== undefined &&
            (obj.pair = message.pair ? pair_1.Pair.toJSON(message.pair) : undefined);
        if (message.biddingIds) {
            obj.biddingIds = message.biddingIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.biddingIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCollateralAuction();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.lockedVaultId =
            object.lockedVaultId !== undefined && object.lockedVaultId !== null
                ? long_1.default.fromValue(object.lockedVaultId)
                : long_1.default.UZERO;
        message.auctionedCollateral =
            object.auctionedCollateral !== undefined &&
                object.auctionedCollateral !== null
                ? coin_1.Coin.fromPartial(object.auctionedCollateral)
                : undefined;
        message.discountQuantity =
            object.discountQuantity !== undefined && object.discountQuantity !== null
                ? coin_1.Coin.fromPartial(object.discountQuantity)
                : undefined;
        message.activeBiddingId =
            object.activeBiddingId !== undefined && object.activeBiddingId !== null
                ? long_1.default.fromValue(object.activeBiddingId)
                : long_1.default.UZERO;
        message.bidder = (_a = object.bidder) !== null && _a !== void 0 ? _a : "";
        message.bid =
            object.bid !== undefined && object.bid !== null
                ? coin_1.Coin.fromPartial(object.bid)
                : undefined;
        message.minBid =
            object.minBid !== undefined && object.minBid !== null
                ? coin_1.Coin.fromPartial(object.minBid)
                : undefined;
        message.maxBid =
            object.maxBid !== undefined && object.maxBid !== null
                ? coin_1.Coin.fromPartial(object.maxBid)
                : undefined;
        message.endTime = (_b = object.endTime) !== null && _b !== void 0 ? _b : undefined;
        message.pair =
            object.pair !== undefined && object.pair !== null
                ? pair_1.Pair.fromPartial(object.pair)
                : undefined;
        message.biddingIds = ((_c = object.biddingIds) === null || _c === void 0 ? void 0 : _c.map((e) => long_1.default.fromValue(e))) || [];
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
//# sourceMappingURL=auction.js.map