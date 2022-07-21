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
exports.AuctionParams = exports.ProtocolStatistics = exports.bidOwnerMapping = exports.DutchAuction = exports.DebtAuction = exports.SurplusAuction = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.auction.v1beta1";
function createBaseSurplusAuction() {
    return {
        auctionId: long_1.default.UZERO,
        sellToken: undefined,
        buyToken: undefined,
        activeBiddingId: long_1.default.UZERO,
        bidder: "",
        bid: undefined,
        endTime: undefined,
        bidFactor: "",
        biddingIds: [],
        auctionStatus: long_1.default.UZERO,
        appId: long_1.default.UZERO,
        assetId: long_1.default.UZERO,
        auctionMappingId: long_1.default.UZERO,
        assetInId: long_1.default.UZERO,
        assetOutId: long_1.default.UZERO,
        bidEndTime: undefined,
    };
}
exports.SurplusAuction = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.auctionId.isZero()) {
            writer.uint32(8).uint64(message.auctionId);
        }
        if (message.sellToken !== undefined) {
            coin_1.Coin.encode(message.sellToken, writer.uint32(18).fork()).ldelim();
        }
        if (message.buyToken !== undefined) {
            coin_1.Coin.encode(message.buyToken, writer.uint32(26).fork()).ldelim();
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
        for (const v of message.biddingIds) {
            exports.bidOwnerMapping.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (!message.auctionStatus.isZero()) {
            writer.uint32(80).uint64(message.auctionStatus);
        }
        if (!message.appId.isZero()) {
            writer.uint32(88).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(96).uint64(message.assetId);
        }
        if (!message.auctionMappingId.isZero()) {
            writer.uint32(104).uint64(message.auctionMappingId);
        }
        if (!message.assetInId.isZero()) {
            writer.uint32(112).uint64(message.assetInId);
        }
        if (!message.assetOutId.isZero()) {
            writer.uint32(120).uint64(message.assetOutId);
        }
        if (message.bidEndTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.bidEndTime), writer.uint32(130).fork()).ldelim();
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
                    message.auctionId = reader.uint64();
                    break;
                case 2:
                    message.sellToken = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.buyToken = coin_1.Coin.decode(reader, reader.uint32());
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
                    message.biddingIds.push(exports.bidOwnerMapping.decode(reader, reader.uint32()));
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
                case 13:
                    message.auctionMappingId = reader.uint64();
                    break;
                case 14:
                    message.assetInId = reader.uint64();
                    break;
                case 15:
                    message.assetOutId = reader.uint64();
                    break;
                case 16:
                    message.bidEndTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            sellToken: isSet(object.sellToken)
                ? coin_1.Coin.fromJSON(object.sellToken)
                : undefined,
            buyToken: isSet(object.buyToken)
                ? coin_1.Coin.fromJSON(object.buyToken)
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
                ? object.biddingIds.map((e) => exports.bidOwnerMapping.fromJSON(e))
                : [],
            auctionStatus: isSet(object.auctionStatus)
                ? long_1.default.fromValue(object.auctionStatus)
                : long_1.default.UZERO,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            auctionMappingId: isSet(object.auctionMappingId)
                ? long_1.default.fromValue(object.auctionMappingId)
                : long_1.default.UZERO,
            assetInId: isSet(object.assetInId)
                ? long_1.default.fromValue(object.assetInId)
                : long_1.default.UZERO,
            assetOutId: isSet(object.assetOutId)
                ? long_1.default.fromValue(object.assetOutId)
                : long_1.default.UZERO,
            bidEndTime: isSet(object.bidEndTime)
                ? fromJsonTimestamp(object.bidEndTime)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.auctionId !== undefined &&
            (obj.auctionId = (message.auctionId || long_1.default.UZERO).toString());
        message.sellToken !== undefined &&
            (obj.sellToken = message.sellToken
                ? coin_1.Coin.toJSON(message.sellToken)
                : undefined);
        message.buyToken !== undefined &&
            (obj.buyToken = message.buyToken
                ? coin_1.Coin.toJSON(message.buyToken)
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
            obj.biddingIds = message.biddingIds.map((e) => e ? exports.bidOwnerMapping.toJSON(e) : undefined);
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
        message.auctionMappingId !== undefined &&
            (obj.auctionMappingId = (message.auctionMappingId || long_1.default.UZERO).toString());
        message.assetInId !== undefined &&
            (obj.assetInId = (message.assetInId || long_1.default.UZERO).toString());
        message.assetOutId !== undefined &&
            (obj.assetOutId = (message.assetOutId || long_1.default.UZERO).toString());
        message.bidEndTime !== undefined &&
            (obj.bidEndTime = message.bidEndTime.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseSurplusAuction();
        message.auctionId =
            object.auctionId !== undefined && object.auctionId !== null
                ? long_1.default.fromValue(object.auctionId)
                : long_1.default.UZERO;
        message.sellToken =
            object.sellToken !== undefined && object.sellToken !== null
                ? coin_1.Coin.fromPartial(object.sellToken)
                : undefined;
        message.buyToken =
            object.buyToken !== undefined && object.buyToken !== null
                ? coin_1.Coin.fromPartial(object.buyToken)
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
        message.biddingIds =
            ((_d = object.biddingIds) === null || _d === void 0 ? void 0 : _d.map((e) => exports.bidOwnerMapping.fromPartial(e))) || [];
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
        message.auctionMappingId =
            object.auctionMappingId !== undefined && object.auctionMappingId !== null
                ? long_1.default.fromValue(object.auctionMappingId)
                : long_1.default.UZERO;
        message.assetInId =
            object.assetInId !== undefined && object.assetInId !== null
                ? long_1.default.fromValue(object.assetInId)
                : long_1.default.UZERO;
        message.assetOutId =
            object.assetOutId !== undefined && object.assetOutId !== null
                ? long_1.default.fromValue(object.assetOutId)
                : long_1.default.UZERO;
        message.bidEndTime = (_e = object.bidEndTime) !== null && _e !== void 0 ? _e : undefined;
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
        biddingIds: [],
        auctionMappingId: long_1.default.UZERO,
        bidFactor: "",
        assetInId: long_1.default.UZERO,
        assetOutId: long_1.default.UZERO,
        bidEndTime: undefined,
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
        for (const v of message.biddingIds) {
            exports.bidOwnerMapping.encode(v, writer.uint32(98).fork()).ldelim();
        }
        if (!message.auctionMappingId.isZero()) {
            writer.uint32(104).uint64(message.auctionMappingId);
        }
        if (message.bidFactor !== "") {
            writer.uint32(114).string(message.bidFactor);
        }
        if (!message.assetInId.isZero()) {
            writer.uint32(120).uint64(message.assetInId);
        }
        if (!message.assetOutId.isZero()) {
            writer.uint32(128).uint64(message.assetOutId);
        }
        if (message.bidEndTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.bidEndTime), writer.uint32(138).fork()).ldelim();
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
                case 12:
                    message.biddingIds.push(exports.bidOwnerMapping.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.auctionMappingId = reader.uint64();
                    break;
                case 14:
                    message.bidFactor = reader.string();
                    break;
                case 15:
                    message.assetInId = reader.uint64();
                    break;
                case 16:
                    message.assetOutId = reader.uint64();
                    break;
                case 17:
                    message.bidEndTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            biddingIds: Array.isArray(object === null || object === void 0 ? void 0 : object.biddingIds)
                ? object.biddingIds.map((e) => exports.bidOwnerMapping.fromJSON(e))
                : [],
            auctionMappingId: isSet(object.auctionMappingId)
                ? long_1.default.fromValue(object.auctionMappingId)
                : long_1.default.UZERO,
            bidFactor: isSet(object.bidFactor) ? String(object.bidFactor) : "",
            assetInId: isSet(object.assetInId)
                ? long_1.default.fromValue(object.assetInId)
                : long_1.default.UZERO,
            assetOutId: isSet(object.assetOutId)
                ? long_1.default.fromValue(object.assetOutId)
                : long_1.default.UZERO,
            bidEndTime: isSet(object.bidEndTime)
                ? fromJsonTimestamp(object.bidEndTime)
                : undefined,
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
        if (message.biddingIds) {
            obj.biddingIds = message.biddingIds.map((e) => e ? exports.bidOwnerMapping.toJSON(e) : undefined);
        }
        else {
            obj.biddingIds = [];
        }
        message.auctionMappingId !== undefined &&
            (obj.auctionMappingId = (message.auctionMappingId || long_1.default.UZERO).toString());
        message.bidFactor !== undefined && (obj.bidFactor = message.bidFactor);
        message.assetInId !== undefined &&
            (obj.assetInId = (message.assetInId || long_1.default.UZERO).toString());
        message.assetOutId !== undefined &&
            (obj.assetOutId = (message.assetOutId || long_1.default.UZERO).toString());
        message.bidEndTime !== undefined &&
            (obj.bidEndTime = message.bidEndTime.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
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
        message.biddingIds =
            ((_c = object.biddingIds) === null || _c === void 0 ? void 0 : _c.map((e) => exports.bidOwnerMapping.fromPartial(e))) || [];
        message.auctionMappingId =
            object.auctionMappingId !== undefined && object.auctionMappingId !== null
                ? long_1.default.fromValue(object.auctionMappingId)
                : long_1.default.UZERO;
        message.bidFactor = (_d = object.bidFactor) !== null && _d !== void 0 ? _d : "";
        message.assetInId =
            object.assetInId !== undefined && object.assetInId !== null
                ? long_1.default.fromValue(object.assetInId)
                : long_1.default.UZERO;
        message.assetOutId =
            object.assetOutId !== undefined && object.assetOutId !== null
                ? long_1.default.fromValue(object.assetOutId)
                : long_1.default.UZERO;
        message.bidEndTime = (_e = object.bidEndTime) !== null && _e !== void 0 ? _e : undefined;
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
        startTime: undefined,
        biddingIds: [],
        auctionMappingId: long_1.default.UZERO,
        appId: long_1.default.UZERO,
        assetInId: long_1.default.UZERO,
        assetOutId: long_1.default.UZERO,
        lockedVaultId: long_1.default.UZERO,
        vaultOwner: "",
        liquidationPenalty: "",
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
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startTime), writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.biddingIds) {
            exports.bidOwnerMapping.encode(v, writer.uint32(106).fork()).ldelim();
        }
        if (!message.auctionMappingId.isZero()) {
            writer.uint32(112).uint64(message.auctionMappingId);
        }
        if (!message.appId.isZero()) {
            writer.uint32(120).uint64(message.appId);
        }
        if (!message.assetInId.isZero()) {
            writer.uint32(128).uint64(message.assetInId);
        }
        if (!message.assetOutId.isZero()) {
            writer.uint32(136).uint64(message.assetOutId);
        }
        if (!message.lockedVaultId.isZero()) {
            writer.uint32(144).uint64(message.lockedVaultId);
        }
        if (message.vaultOwner !== "") {
            writer.uint32(154).string(message.vaultOwner);
        }
        if (message.liquidationPenalty !== "") {
            writer.uint32(162).string(message.liquidationPenalty);
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
                    message.startTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.biddingIds.push(exports.bidOwnerMapping.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.auctionMappingId = reader.uint64();
                    break;
                case 15:
                    message.appId = reader.uint64();
                    break;
                case 16:
                    message.assetInId = reader.uint64();
                    break;
                case 17:
                    message.assetOutId = reader.uint64();
                    break;
                case 18:
                    message.lockedVaultId = reader.uint64();
                    break;
                case 19:
                    message.vaultOwner = reader.string();
                    break;
                case 20:
                    message.liquidationPenalty = reader.string();
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
            startTime: isSet(object.startTime)
                ? fromJsonTimestamp(object.startTime)
                : undefined,
            biddingIds: Array.isArray(object === null || object === void 0 ? void 0 : object.biddingIds)
                ? object.biddingIds.map((e) => exports.bidOwnerMapping.fromJSON(e))
                : [],
            auctionMappingId: isSet(object.auctionMappingId)
                ? long_1.default.fromValue(object.auctionMappingId)
                : long_1.default.UZERO,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            assetInId: isSet(object.assetInId)
                ? long_1.default.fromValue(object.assetInId)
                : long_1.default.UZERO,
            assetOutId: isSet(object.assetOutId)
                ? long_1.default.fromValue(object.assetOutId)
                : long_1.default.UZERO,
            lockedVaultId: isSet(object.lockedVaultId)
                ? long_1.default.fromValue(object.lockedVaultId)
                : long_1.default.UZERO,
            vaultOwner: isSet(object.vaultOwner) ? String(object.vaultOwner) : "",
            liquidationPenalty: isSet(object.liquidationPenalty)
                ? String(object.liquidationPenalty)
                : "",
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
        message.startTime !== undefined &&
            (obj.startTime = message.startTime.toISOString());
        if (message.biddingIds) {
            obj.biddingIds = message.biddingIds.map((e) => e ? exports.bidOwnerMapping.toJSON(e) : undefined);
        }
        else {
            obj.biddingIds = [];
        }
        message.auctionMappingId !== undefined &&
            (obj.auctionMappingId = (message.auctionMappingId || long_1.default.UZERO).toString());
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetInId !== undefined &&
            (obj.assetInId = (message.assetInId || long_1.default.UZERO).toString());
        message.assetOutId !== undefined &&
            (obj.assetOutId = (message.assetOutId || long_1.default.UZERO).toString());
        message.lockedVaultId !== undefined &&
            (obj.lockedVaultId = (message.lockedVaultId || long_1.default.UZERO).toString());
        message.vaultOwner !== undefined && (obj.vaultOwner = message.vaultOwner);
        message.liquidationPenalty !== undefined &&
            (obj.liquidationPenalty = message.liquidationPenalty);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
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
        message.startTime = (_f = object.startTime) !== null && _f !== void 0 ? _f : undefined;
        message.biddingIds =
            ((_g = object.biddingIds) === null || _g === void 0 ? void 0 : _g.map((e) => exports.bidOwnerMapping.fromPartial(e))) || [];
        message.auctionMappingId =
            object.auctionMappingId !== undefined && object.auctionMappingId !== null
                ? long_1.default.fromValue(object.auctionMappingId)
                : long_1.default.UZERO;
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetInId =
            object.assetInId !== undefined && object.assetInId !== null
                ? long_1.default.fromValue(object.assetInId)
                : long_1.default.UZERO;
        message.assetOutId =
            object.assetOutId !== undefined && object.assetOutId !== null
                ? long_1.default.fromValue(object.assetOutId)
                : long_1.default.UZERO;
        message.lockedVaultId =
            object.lockedVaultId !== undefined && object.lockedVaultId !== null
                ? long_1.default.fromValue(object.lockedVaultId)
                : long_1.default.UZERO;
        message.vaultOwner = (_h = object.vaultOwner) !== null && _h !== void 0 ? _h : "";
        message.liquidationPenalty = (_j = object.liquidationPenalty) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
function createBasebidOwnerMapping() {
    return { bidId: long_1.default.UZERO, bidOwner: "" };
}
exports.bidOwnerMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.bidId.isZero()) {
            writer.uint32(8).uint64(message.bidId);
        }
        if (message.bidOwner !== "") {
            writer.uint32(18).string(message.bidOwner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasebidOwnerMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidId = reader.uint64();
                    break;
                case 2:
                    message.bidOwner = reader.string();
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
            bidId: isSet(object.bidId) ? long_1.default.fromValue(object.bidId) : long_1.default.UZERO,
            bidOwner: isSet(object.bidOwner) ? String(object.bidOwner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.bidId !== undefined &&
            (obj.bidId = (message.bidId || long_1.default.UZERO).toString());
        message.bidOwner !== undefined && (obj.bidOwner = message.bidOwner);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasebidOwnerMapping();
        message.bidId =
            object.bidId !== undefined && object.bidId !== null
                ? long_1.default.fromValue(object.bidId)
                : long_1.default.UZERO;
        message.bidOwner = (_a = object.bidOwner) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseProtocolStatistics() {
    return { appId: long_1.default.UZERO, assetId: long_1.default.UZERO, loss: "" };
}
exports.ProtocolStatistics = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        if (message.loss !== "") {
            writer.uint32(26).string(message.loss);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProtocolStatistics();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.assetId = reader.uint64();
                    break;
                case 3:
                    message.loss = reader.string();
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            loss: isSet(object.loss) ? String(object.loss) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.loss !== undefined && (obj.loss = message.loss);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseProtocolStatistics();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.loss = (_a = object.loss) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAuctionParams() {
    return {
        appId: long_1.default.UZERO,
        auctionDurationSeconds: long_1.default.UZERO,
        buffer: "",
        cusp: "",
        step: "",
        priceFunctionType: long_1.default.UZERO,
        surplusId: long_1.default.UZERO,
        debtId: long_1.default.UZERO,
        dutchId: long_1.default.UZERO,
        bidDurationSeconds: long_1.default.UZERO,
    };
}
exports.AuctionParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.auctionDurationSeconds.isZero()) {
            writer.uint32(16).uint64(message.auctionDurationSeconds);
        }
        if (message.buffer !== "") {
            writer.uint32(26).string(message.buffer);
        }
        if (message.cusp !== "") {
            writer.uint32(34).string(message.cusp);
        }
        if (message.step !== "") {
            writer.uint32(42).string(message.step);
        }
        if (!message.priceFunctionType.isZero()) {
            writer.uint32(48).uint64(message.priceFunctionType);
        }
        if (!message.surplusId.isZero()) {
            writer.uint32(56).uint64(message.surplusId);
        }
        if (!message.debtId.isZero()) {
            writer.uint32(64).uint64(message.debtId);
        }
        if (!message.dutchId.isZero()) {
            writer.uint32(72).uint64(message.dutchId);
        }
        if (!message.bidDurationSeconds.isZero()) {
            writer.uint32(80).uint64(message.bidDurationSeconds);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuctionParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.auctionDurationSeconds = reader.uint64();
                    break;
                case 3:
                    message.buffer = reader.string();
                    break;
                case 4:
                    message.cusp = reader.string();
                    break;
                case 5:
                    message.step = reader.string();
                    break;
                case 6:
                    message.priceFunctionType = reader.uint64();
                    break;
                case 7:
                    message.surplusId = reader.uint64();
                    break;
                case 8:
                    message.debtId = reader.uint64();
                    break;
                case 9:
                    message.dutchId = reader.uint64();
                    break;
                case 10:
                    message.bidDurationSeconds = reader.uint64();
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            auctionDurationSeconds: isSet(object.auctionDurationSeconds)
                ? long_1.default.fromValue(object.auctionDurationSeconds)
                : long_1.default.UZERO,
            buffer: isSet(object.buffer) ? String(object.buffer) : "",
            cusp: isSet(object.cusp) ? String(object.cusp) : "",
            step: isSet(object.step) ? String(object.step) : "",
            priceFunctionType: isSet(object.priceFunctionType)
                ? long_1.default.fromValue(object.priceFunctionType)
                : long_1.default.UZERO,
            surplusId: isSet(object.surplusId)
                ? long_1.default.fromValue(object.surplusId)
                : long_1.default.UZERO,
            debtId: isSet(object.debtId) ? long_1.default.fromValue(object.debtId) : long_1.default.UZERO,
            dutchId: isSet(object.dutchId)
                ? long_1.default.fromValue(object.dutchId)
                : long_1.default.UZERO,
            bidDurationSeconds: isSet(object.bidDurationSeconds)
                ? long_1.default.fromValue(object.bidDurationSeconds)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.auctionDurationSeconds !== undefined &&
            (obj.auctionDurationSeconds = (message.auctionDurationSeconds || long_1.default.UZERO).toString());
        message.buffer !== undefined && (obj.buffer = message.buffer);
        message.cusp !== undefined && (obj.cusp = message.cusp);
        message.step !== undefined && (obj.step = message.step);
        message.priceFunctionType !== undefined &&
            (obj.priceFunctionType = (message.priceFunctionType || long_1.default.UZERO).toString());
        message.surplusId !== undefined &&
            (obj.surplusId = (message.surplusId || long_1.default.UZERO).toString());
        message.debtId !== undefined &&
            (obj.debtId = (message.debtId || long_1.default.UZERO).toString());
        message.dutchId !== undefined &&
            (obj.dutchId = (message.dutchId || long_1.default.UZERO).toString());
        message.bidDurationSeconds !== undefined &&
            (obj.bidDurationSeconds = (message.bidDurationSeconds || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAuctionParams();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.auctionDurationSeconds =
            object.auctionDurationSeconds !== undefined &&
                object.auctionDurationSeconds !== null
                ? long_1.default.fromValue(object.auctionDurationSeconds)
                : long_1.default.UZERO;
        message.buffer = (_a = object.buffer) !== null && _a !== void 0 ? _a : "";
        message.cusp = (_b = object.cusp) !== null && _b !== void 0 ? _b : "";
        message.step = (_c = object.step) !== null && _c !== void 0 ? _c : "";
        message.priceFunctionType =
            object.priceFunctionType !== undefined &&
                object.priceFunctionType !== null
                ? long_1.default.fromValue(object.priceFunctionType)
                : long_1.default.UZERO;
        message.surplusId =
            object.surplusId !== undefined && object.surplusId !== null
                ? long_1.default.fromValue(object.surplusId)
                : long_1.default.UZERO;
        message.debtId =
            object.debtId !== undefined && object.debtId !== null
                ? long_1.default.fromValue(object.debtId)
                : long_1.default.UZERO;
        message.dutchId =
            object.dutchId !== undefined && object.dutchId !== null
                ? long_1.default.fromValue(object.dutchId)
                : long_1.default.UZERO;
        message.bidDurationSeconds =
            object.bidDurationSeconds !== undefined &&
                object.bidDurationSeconds !== null
                ? long_1.default.fromValue(object.bidDurationSeconds)
                : long_1.default.UZERO;
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