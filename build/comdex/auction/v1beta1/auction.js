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
exports.DutchAuction = exports.DebtAuction = exports.SurplusAuction = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("./cosmos/base/v1beta1/coin");
const timestamp_1 = require("./google/protobuf/timestamp");
exports.protobufPackage = "comdex.auction.v1beta1";
function createBaseSurplusAuction() {
    return {
        id: long_1.default.UZERO,
        outflowToken: undefined,
        inflowToken: undefined,
        activeBiddingId: long_1.default.UZERO,
        bidder: "",
        bid: undefined,
        endTime: undefined,
        bidFactor: "",
        biddingIds: [],
        auctionStatus: long_1.default.UZERO,
        appId: long_1.default.UZERO,
        assetId: long_1.default.UZERO,
    };
}
exports.SurplusAuction = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.outflowToken !== undefined) {
            coin_1.Coin.encode(message.outflowToken, writer.uint32(18).fork()).ldelim();
        }
        if (message.inflowToken !== undefined) {
            coin_1.Coin.encode(message.inflowToken, writer.uint32(26).fork()).ldelim();
        }
        if (!message.activeBiddingId.isZero()) {
            writer.uint32(32).uint64(message.activeBiddingId);
        }
        if (message.bidder !== "") {
            writer.uint32(42).string(message.bidder);
        }
        if (message.bid !== undefined) {
            coin_1.Coin.encode(message.bid, writer.uint32(50).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.endTime), writer.uint32(58).fork()).ldelim();
        }
        if (message.bidFactor !== "") {
            writer.uint32(66).string(message.bidFactor);
        }
        writer.uint32(74).fork();
        for (const v of message.biddingIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (!message.auctionStatus.isZero()) {
            writer.uint32(80).uint64(message.auctionStatus);
        }
        if (!message.appId.isZero()) {
            writer.uint32(88).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(96).uint64(message.assetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSurplusAuction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.outflowToken = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.inflowToken = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.activeBiddingId = reader.uint64();
                    break;
                case 5:
                    message.bidder = reader.string();
                    break;
                case 6:
                    message.bid = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.endTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.bidFactor = reader.string();
                    break;
                case 9:
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
                case 10:
                    message.auctionStatus = reader.uint64();
                    break;
                case 11:
                    message.appId = reader.uint64();
                    break;
                case 12:
                    message.assetId = reader.uint64();
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
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
            outflowToken: isSet(object.outflowToken)
                ? coin_1.Coin.fromJSON(object.outflowToken)
                : undefined,
            inflowToken: isSet(object.inflowToken)
                ? coin_1.Coin.fromJSON(object.inflowToken)
                : undefined,
            activeBiddingId: isSet(object.activeBiddingId)
                ? long_1.default.fromValue(object.activeBiddingId)
                : long_1.default.UZERO,
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            bid: isSet(object.bid) ? coin_1.Coin.fromJSON(object.bid) : undefined,
            endTime: isSet(object.endTime)
                ? fromJsonTimestamp(object.endTime)
                : undefined,
            bidFactor: isSet(object.bidFactor) ? String(object.bidFactor) : "",
            biddingIds: Array.isArray(object === null || object === void 0 ? void 0 : object.biddingIds)
                ? object.biddingIds.map((e) => long_1.default.fromValue(e))
                : [],
            auctionStatus: isSet(object.auctionStatus)
                ? long_1.default.fromValue(object.auctionStatus)
                : long_1.default.UZERO,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.outflowToken !== undefined &&
            (obj.outflowToken = message.outflowToken
                ? coin_1.Coin.toJSON(message.outflowToken)
                : undefined);
        message.inflowToken !== undefined &&
            (obj.inflowToken = message.inflowToken
                ? coin_1.Coin.toJSON(message.inflowToken)
                : undefined);
        message.activeBiddingId !== undefined &&
            (obj.activeBiddingId = (message.activeBiddingId || long_1.default.UZERO).toString());
        message.bidder !== undefined && (obj.bidder = message.bidder);
        message.bid !== undefined &&
            (obj.bid = message.bid ? coin_1.Coin.toJSON(message.bid) : undefined);
        message.endTime !== undefined &&
            (obj.endTime = message.endTime.toISOString());
        message.bidFactor !== undefined && (obj.bidFactor = message.bidFactor);
        if (message.biddingIds) {
            obj.biddingIds = message.biddingIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.biddingIds = [];
        }
        message.auctionStatus !== undefined &&
            (obj.auctionStatus = (message.auctionStatus || long_1.default.UZERO).toString());
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSurplusAuction();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.outflowToken =
            object.outflowToken !== undefined && object.outflowToken !== null
                ? coin_1.Coin.fromPartial(object.outflowToken)
                : undefined;
        message.inflowToken =
            object.inflowToken !== undefined && object.inflowToken !== null
                ? coin_1.Coin.fromPartial(object.inflowToken)
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
        message.endTime = (_b = object.endTime) !== null && _b !== void 0 ? _b : undefined;
        message.bidFactor = (_c = object.bidFactor) !== null && _c !== void 0 ? _c : "";
        message.biddingIds = ((_d = object.biddingIds) === null || _d === void 0 ? void 0 : _d.map((e) => long_1.default.fromValue(e))) || [];
        message.auctionStatus =
            object.auctionStatus !== undefined && object.auctionStatus !== null
                ? long_1.default.fromValue(object.auctionStatus)
                : long_1.default.UZERO;
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseDebtAuction() {
    return {
        auctionId: long_1.default.UZERO,
        auctionedToken: undefined,
        expectedUserToken: undefined,
        expectedMintedToken: undefined,
        endTime: undefined,
        activeBiddingId: long_1.default.UZERO,
        bidder: "",
        currentBidAmount: undefined,
        auctionStatus: long_1.default.UZERO,
        appId: long_1.default.UZERO,
        assetId: long_1.default.UZERO,
    };
}
exports.DebtAuction = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.auctionId.isZero()) {
            writer.uint32(8).uint64(message.auctionId);
        }
        if (message.auctionedToken !== undefined) {
            coin_1.Coin.encode(message.auctionedToken, writer.uint32(18).fork()).ldelim();
        }
        if (message.expectedUserToken !== undefined) {
            coin_1.Coin.encode(message.expectedUserToken, writer.uint32(26).fork()).ldelim();
        }
        if (message.expectedMintedToken !== undefined) {
            coin_1.Coin.encode(message.expectedMintedToken, writer.uint32(34).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.endTime), writer.uint32(42).fork()).ldelim();
        }
        if (!message.activeBiddingId.isZero()) {
            writer.uint32(48).uint64(message.activeBiddingId);
        }
        if (message.bidder !== "") {
            writer.uint32(58).string(message.bidder);
        }
        if (message.currentBidAmount !== undefined) {
            coin_1.Coin.encode(message.currentBidAmount, writer.uint32(66).fork()).ldelim();
        }
        if (!message.auctionStatus.isZero()) {
            writer.uint32(72).uint64(message.auctionStatus);
        }
        if (!message.appId.isZero()) {
            writer.uint32(80).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(88).uint64(message.assetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDebtAuction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctionId = reader.uint64();
                    break;
                case 2:
                    message.auctionedToken = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.expectedUserToken = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.expectedMintedToken = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.endTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.activeBiddingId = reader.uint64();
                    break;
                case 7:
                    message.bidder = reader.string();
                    break;
                case 8:
                    message.currentBidAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.auctionStatus = reader.uint64();
                    break;
                case 10:
                    message.appId = reader.uint64();
                    break;
                case 11:
                    message.assetId = reader.uint64();
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
            auctionedToken: isSet(object.auctionedToken)
                ? coin_1.Coin.fromJSON(object.auctionedToken)
                : undefined,
            expectedUserToken: isSet(object.expectedUserToken)
                ? coin_1.Coin.fromJSON(object.expectedUserToken)
                : undefined,
            expectedMintedToken: isSet(object.expectedMintedToken)
                ? coin_1.Coin.fromJSON(object.expectedMintedToken)
                : undefined,
            endTime: isSet(object.endTime)
                ? fromJsonTimestamp(object.endTime)
                : undefined,
            activeBiddingId: isSet(object.activeBiddingId)
                ? long_1.default.fromValue(object.activeBiddingId)
                : long_1.default.UZERO,
            bidder: isSet(object.bidder) ? String(object.bidder) : "",
            currentBidAmount: isSet(object.currentBidAmount)
                ? coin_1.Coin.fromJSON(object.currentBidAmount)
                : undefined,
            auctionStatus: isSet(object.auctionStatus)
                ? long_1.default.fromValue(object.auctionStatus)
                : long_1.default.UZERO,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.auctionId !== undefined &&
            (obj.auctionId = (message.auctionId || long_1.default.UZERO).toString());
        message.auctionedToken !== undefined &&
            (obj.auctionedToken = message.auctionedToken
                ? coin_1.Coin.toJSON(message.auctionedToken)
                : undefined);
        message.expectedUserToken !== undefined &&
            (obj.expectedUserToken = message.expectedUserToken
                ? coin_1.Coin.toJSON(message.expectedUserToken)
                : undefined);
        message.expectedMintedToken !== undefined &&
            (obj.expectedMintedToken = message.expectedMintedToken
                ? coin_1.Coin.toJSON(message.expectedMintedToken)
                : undefined);
        message.endTime !== undefined &&
            (obj.endTime = message.endTime.toISOString());
        message.activeBiddingId !== undefined &&
            (obj.activeBiddingId = (message.activeBiddingId || long_1.default.UZERO).toString());
        message.bidder !== undefined && (obj.bidder = message.bidder);
        message.currentBidAmount !== undefined &&
            (obj.currentBidAmount = message.currentBidAmount
                ? coin_1.Coin.toJSON(message.currentBidAmount)
                : undefined);
        message.auctionStatus !== undefined &&
            (obj.auctionStatus = (message.auctionStatus || long_1.default.UZERO).toString());
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDebtAuction();
        message.auctionId =
            object.auctionId !== undefined && object.auctionId !== null
                ? long_1.default.fromValue(object.auctionId)
                : long_1.default.UZERO;
        message.auctionedToken =
            object.auctionedToken !== undefined && object.auctionedToken !== null
                ? coin_1.Coin.fromPartial(object.auctionedToken)
                : undefined;
        message.expectedUserToken =
            object.expectedUserToken !== undefined &&
                object.expectedUserToken !== null
                ? coin_1.Coin.fromPartial(object.expectedUserToken)
                : undefined;
        message.expectedMintedToken =
            object.expectedMintedToken !== undefined &&
                object.expectedMintedToken !== null
                ? coin_1.Coin.fromPartial(object.expectedMintedToken)
                : undefined;
        message.endTime = (_a = object.endTime) !== null && _a !== void 0 ? _a : undefined;
        message.activeBiddingId =
            object.activeBiddingId !== undefined && object.activeBiddingId !== null
                ? long_1.default.fromValue(object.activeBiddingId)
                : long_1.default.UZERO;
        message.bidder = (_b = object.bidder) !== null && _b !== void 0 ? _b : "";
        message.currentBidAmount =
            object.currentBidAmount !== undefined && object.currentBidAmount !== null
                ? coin_1.Coin.fromPartial(object.currentBidAmount)
                : undefined;
        message.auctionStatus =
            object.auctionStatus !== undefined && object.auctionStatus !== null
                ? long_1.default.fromValue(object.auctionStatus)
                : long_1.default.UZERO;
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseDutchAuction() {
    return {
        auctionId: long_1.default.UZERO,
        outflowTokenInitAmount: undefined,
        outflowTokenCurrentAmount: undefined,
        inflowTokenTargetAmount: undefined,
        inflowTokenCurrentAmount: undefined,
        outflowTokenInitialPrice: "",
        outflowTokenCurrentPrice: "",
        outflowTokenEndPrice: "",
        inflowTokenCurrentPrice: "",
        endTime: undefined,
        auctionStatus: long_1.default.UZERO,
        inflowTokenAddress: "",
        outflowTokenAddress: "",
        startTime: undefined,
    };
}
exports.DutchAuction = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.auctionId.isZero()) {
            writer.uint32(8).uint64(message.auctionId);
        }
        if (message.outflowTokenInitAmount !== undefined) {
            coin_1.Coin.encode(message.outflowTokenInitAmount, writer.uint32(18).fork()).ldelim();
        }
        if (message.outflowTokenCurrentAmount !== undefined) {
            coin_1.Coin.encode(message.outflowTokenCurrentAmount, writer.uint32(26).fork()).ldelim();
        }
        if (message.inflowTokenTargetAmount !== undefined) {
            coin_1.Coin.encode(message.inflowTokenTargetAmount, writer.uint32(34).fork()).ldelim();
        }
        if (message.inflowTokenCurrentAmount !== undefined) {
            coin_1.Coin.encode(message.inflowTokenCurrentAmount, writer.uint32(42).fork()).ldelim();
        }
        if (message.outflowTokenInitialPrice !== "") {
            writer.uint32(50).string(message.outflowTokenInitialPrice);
        }
        if (message.outflowTokenCurrentPrice !== "") {
            writer.uint32(58).string(message.outflowTokenCurrentPrice);
        }
        if (message.outflowTokenEndPrice !== "") {
            writer.uint32(66).string(message.outflowTokenEndPrice);
        }
        if (message.inflowTokenCurrentPrice !== "") {
            writer.uint32(74).string(message.inflowTokenCurrentPrice);
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.endTime), writer.uint32(82).fork()).ldelim();
        }
        if (!message.auctionStatus.isZero()) {
            writer.uint32(88).uint64(message.auctionStatus);
        }
        if (message.inflowTokenAddress !== "") {
            writer.uint32(98).string(message.inflowTokenAddress);
        }
        if (message.outflowTokenAddress !== "") {
            writer.uint32(106).string(message.outflowTokenAddress);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startTime), writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDutchAuction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctionId = reader.uint64();
                    break;
                case 2:
                    message.outflowTokenInitAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.outflowTokenCurrentAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.inflowTokenTargetAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.inflowTokenCurrentAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.outflowTokenInitialPrice = reader.string();
                    break;
                case 7:
                    message.outflowTokenCurrentPrice = reader.string();
                    break;
                case 8:
                    message.outflowTokenEndPrice = reader.string();
                    break;
                case 9:
                    message.inflowTokenCurrentPrice = reader.string();
                    break;
                case 10:
                    message.endTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.auctionStatus = reader.uint64();
                    break;
                case 12:
                    message.inflowTokenAddress = reader.string();
                    break;
                case 13:
                    message.outflowTokenAddress = reader.string();
                    break;
                case 14:
                    message.startTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            outflowTokenInitAmount: isSet(object.outflowTokenInitAmount)
                ? coin_1.Coin.fromJSON(object.outflowTokenInitAmount)
                : undefined,
            outflowTokenCurrentAmount: isSet(object.outflowTokenCurrentAmount)
                ? coin_1.Coin.fromJSON(object.outflowTokenCurrentAmount)
                : undefined,
            inflowTokenTargetAmount: isSet(object.inflowTokenTargetAmount)
                ? coin_1.Coin.fromJSON(object.inflowTokenTargetAmount)
                : undefined,
            inflowTokenCurrentAmount: isSet(object.inflowTokenCurrentAmount)
                ? coin_1.Coin.fromJSON(object.inflowTokenCurrentAmount)
                : undefined,
            outflowTokenInitialPrice: isSet(object.outflowTokenInitialPrice)
                ? String(object.outflowTokenInitialPrice)
                : "",
            outflowTokenCurrentPrice: isSet(object.outflowTokenCurrentPrice)
                ? String(object.outflowTokenCurrentPrice)
                : "",
            outflowTokenEndPrice: isSet(object.outflowTokenEndPrice)
                ? String(object.outflowTokenEndPrice)
                : "",
            inflowTokenCurrentPrice: isSet(object.inflowTokenCurrentPrice)
                ? String(object.inflowTokenCurrentPrice)
                : "",
            endTime: isSet(object.endTime)
                ? fromJsonTimestamp(object.endTime)
                : undefined,
            auctionStatus: isSet(object.auctionStatus)
                ? long_1.default.fromValue(object.auctionStatus)
                : long_1.default.UZERO,
            inflowTokenAddress: isSet(object.inflowTokenAddress)
                ? String(object.inflowTokenAddress)
                : "",
            outflowTokenAddress: isSet(object.outflowTokenAddress)
                ? String(object.outflowTokenAddress)
                : "",
            startTime: isSet(object.startTime)
                ? fromJsonTimestamp(object.startTime)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.auctionId !== undefined &&
            (obj.auctionId = (message.auctionId || long_1.default.UZERO).toString());
        message.outflowTokenInitAmount !== undefined &&
            (obj.outflowTokenInitAmount = message.outflowTokenInitAmount
                ? coin_1.Coin.toJSON(message.outflowTokenInitAmount)
                : undefined);
        message.outflowTokenCurrentAmount !== undefined &&
            (obj.outflowTokenCurrentAmount = message.outflowTokenCurrentAmount
                ? coin_1.Coin.toJSON(message.outflowTokenCurrentAmount)
                : undefined);
        message.inflowTokenTargetAmount !== undefined &&
            (obj.inflowTokenTargetAmount = message.inflowTokenTargetAmount
                ? coin_1.Coin.toJSON(message.inflowTokenTargetAmount)
                : undefined);
        message.inflowTokenCurrentAmount !== undefined &&
            (obj.inflowTokenCurrentAmount = message.inflowTokenCurrentAmount
                ? coin_1.Coin.toJSON(message.inflowTokenCurrentAmount)
                : undefined);
        message.outflowTokenInitialPrice !== undefined &&
            (obj.outflowTokenInitialPrice = message.outflowTokenInitialPrice);
        message.outflowTokenCurrentPrice !== undefined &&
            (obj.outflowTokenCurrentPrice = message.outflowTokenCurrentPrice);
        message.outflowTokenEndPrice !== undefined &&
            (obj.outflowTokenEndPrice = message.outflowTokenEndPrice);
        message.inflowTokenCurrentPrice !== undefined &&
            (obj.inflowTokenCurrentPrice = message.inflowTokenCurrentPrice);
        message.endTime !== undefined &&
            (obj.endTime = message.endTime.toISOString());
        message.auctionStatus !== undefined &&
            (obj.auctionStatus = (message.auctionStatus || long_1.default.UZERO).toString());
        message.inflowTokenAddress !== undefined &&
            (obj.inflowTokenAddress = message.inflowTokenAddress);
        message.outflowTokenAddress !== undefined &&
            (obj.outflowTokenAddress = message.outflowTokenAddress);
        message.startTime !== undefined &&
            (obj.startTime = message.startTime.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseDutchAuction();
        message.auctionId =
            object.auctionId !== undefined && object.auctionId !== null
                ? long_1.default.fromValue(object.auctionId)
                : long_1.default.UZERO;
        message.outflowTokenInitAmount =
            object.outflowTokenInitAmount !== undefined &&
                object.outflowTokenInitAmount !== null
                ? coin_1.Coin.fromPartial(object.outflowTokenInitAmount)
                : undefined;
        message.outflowTokenCurrentAmount =
            object.outflowTokenCurrentAmount !== undefined &&
                object.outflowTokenCurrentAmount !== null
                ? coin_1.Coin.fromPartial(object.outflowTokenCurrentAmount)
                : undefined;
        message.inflowTokenTargetAmount =
            object.inflowTokenTargetAmount !== undefined &&
                object.inflowTokenTargetAmount !== null
                ? coin_1.Coin.fromPartial(object.inflowTokenTargetAmount)
                : undefined;
        message.inflowTokenCurrentAmount =
            object.inflowTokenCurrentAmount !== undefined &&
                object.inflowTokenCurrentAmount !== null
                ? coin_1.Coin.fromPartial(object.inflowTokenCurrentAmount)
                : undefined;
        message.outflowTokenInitialPrice = (_a = object.outflowTokenInitialPrice) !== null && _a !== void 0 ? _a : "";
        message.outflowTokenCurrentPrice = (_b = object.outflowTokenCurrentPrice) !== null && _b !== void 0 ? _b : "";
        message.outflowTokenEndPrice = (_c = object.outflowTokenEndPrice) !== null && _c !== void 0 ? _c : "";
        message.inflowTokenCurrentPrice = (_d = object.inflowTokenCurrentPrice) !== null && _d !== void 0 ? _d : "";
        message.endTime = (_e = object.endTime) !== null && _e !== void 0 ? _e : undefined;
        message.auctionStatus =
            object.auctionStatus !== undefined && object.auctionStatus !== null
                ? long_1.default.fromValue(object.auctionStatus)
                : long_1.default.UZERO;
        message.inflowTokenAddress = (_f = object.inflowTokenAddress) !== null && _f !== void 0 ? _f : "";
        message.outflowTokenAddress = (_g = object.outflowTokenAddress) !== null && _g !== void 0 ? _g : "";
        message.startTime = (_h = object.startTime) !== null && _h !== void 0 ? _h : undefined;
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
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=auction.js.map