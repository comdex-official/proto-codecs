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
exports.AuctionFeesCollectionFromLimitBidTx = exports.LimitOrderUserKey = exports.LimitOrderBidsForUser = exports.AuctionParams = exports.LimitOrderBid = exports.Bid = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.auctionsV2.v1beta1";
function createBaseBid() {
    return {
        biddingId: long_1.default.UZERO,
        auctionId: long_1.default.UZERO,
        collateralTokenAmount: undefined,
        debtTokenAmount: undefined,
        bidderAddress: "",
        biddingTimestamp: undefined,
        appId: long_1.default.UZERO,
        bidType: "",
    };
}
exports.Bid = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.biddingId.isZero()) {
            writer.uint32(8).uint64(message.biddingId);
        }
        if (!message.auctionId.isZero()) {
            writer.uint32(16).uint64(message.auctionId);
        }
        if (message.collateralTokenAmount !== undefined) {
            coin_1.Coin.encode(message.collateralTokenAmount, writer.uint32(26).fork()).ldelim();
        }
        if (message.debtTokenAmount !== undefined) {
            coin_1.Coin.encode(message.debtTokenAmount, writer.uint32(34).fork()).ldelim();
        }
        if (message.bidderAddress !== "") {
            writer.uint32(42).string(message.bidderAddress);
        }
        if (message.biddingTimestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.biddingTimestamp), writer.uint32(50).fork()).ldelim();
        }
        if (!message.appId.isZero()) {
            writer.uint32(56).uint64(message.appId);
        }
        if (message.bidType !== "") {
            writer.uint32(66).string(message.bidType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.biddingId = reader.uint64();
                    break;
                case 2:
                    message.auctionId = reader.uint64();
                    break;
                case 3:
                    message.collateralTokenAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.debtTokenAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.bidderAddress = reader.string();
                    break;
                case 6:
                    message.biddingTimestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.appId = reader.uint64();
                    break;
                case 8:
                    message.bidType = reader.string();
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
            biddingId: isSet(object.biddingId)
                ? long_1.default.fromValue(object.biddingId)
                : long_1.default.UZERO,
            auctionId: isSet(object.auctionId)
                ? long_1.default.fromValue(object.auctionId)
                : long_1.default.UZERO,
            collateralTokenAmount: isSet(object.collateralTokenAmount)
                ? coin_1.Coin.fromJSON(object.collateralTokenAmount)
                : undefined,
            debtTokenAmount: isSet(object.debtTokenAmount)
                ? coin_1.Coin.fromJSON(object.debtTokenAmount)
                : undefined,
            bidderAddress: isSet(object.bidderAddress)
                ? String(object.bidderAddress)
                : "",
            biddingTimestamp: isSet(object.biddingTimestamp)
                ? fromJsonTimestamp(object.biddingTimestamp)
                : undefined,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            bidType: isSet(object.bidType) ? String(object.bidType) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.biddingId !== undefined &&
            (obj.biddingId = (message.biddingId || long_1.default.UZERO).toString());
        message.auctionId !== undefined &&
            (obj.auctionId = (message.auctionId || long_1.default.UZERO).toString());
        message.collateralTokenAmount !== undefined &&
            (obj.collateralTokenAmount = message.collateralTokenAmount
                ? coin_1.Coin.toJSON(message.collateralTokenAmount)
                : undefined);
        message.debtTokenAmount !== undefined &&
            (obj.debtTokenAmount = message.debtTokenAmount
                ? coin_1.Coin.toJSON(message.debtTokenAmount)
                : undefined);
        message.bidderAddress !== undefined &&
            (obj.bidderAddress = message.bidderAddress);
        message.biddingTimestamp !== undefined &&
            (obj.biddingTimestamp = message.biddingTimestamp.toISOString());
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.bidType !== undefined && (obj.bidType = message.bidType);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseBid();
        message.biddingId =
            object.biddingId !== undefined && object.biddingId !== null
                ? long_1.default.fromValue(object.biddingId)
                : long_1.default.UZERO;
        message.auctionId =
            object.auctionId !== undefined && object.auctionId !== null
                ? long_1.default.fromValue(object.auctionId)
                : long_1.default.UZERO;
        message.collateralTokenAmount =
            object.collateralTokenAmount !== undefined &&
                object.collateralTokenAmount !== null
                ? coin_1.Coin.fromPartial(object.collateralTokenAmount)
                : undefined;
        message.debtTokenAmount =
            object.debtTokenAmount !== undefined && object.debtTokenAmount !== null
                ? coin_1.Coin.fromPartial(object.debtTokenAmount)
                : undefined;
        message.bidderAddress = (_a = object.bidderAddress) !== null && _a !== void 0 ? _a : "";
        message.biddingTimestamp = (_b = object.biddingTimestamp) !== null && _b !== void 0 ? _b : undefined;
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.bidType = (_c = object.bidType) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseLimitOrderBid() {
    return {
        limitOrderBiddingId: long_1.default.UZERO,
        bidderAddress: "",
        collateralTokenId: long_1.default.UZERO,
        premiumDiscount: "",
        debtTokenId: long_1.default.UZERO,
        debtToken: undefined,
        biddingId: [],
    };
}
exports.LimitOrderBid = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.limitOrderBiddingId.isZero()) {
            writer.uint32(8).uint64(message.limitOrderBiddingId);
        }
        if (message.bidderAddress !== "") {
            writer.uint32(18).string(message.bidderAddress);
        }
        if (!message.collateralTokenId.isZero()) {
            writer.uint32(24).uint64(message.collateralTokenId);
        }
        if (message.premiumDiscount !== "") {
            writer.uint32(34).string(message.premiumDiscount);
        }
        if (!message.debtTokenId.isZero()) {
            writer.uint32(40).uint64(message.debtTokenId);
        }
        if (message.debtToken !== undefined) {
            coin_1.Coin.encode(message.debtToken, writer.uint32(50).fork()).ldelim();
        }
        writer.uint32(58).fork();
        for (const v of message.biddingId) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLimitOrderBid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limitOrderBiddingId = reader.uint64();
                    break;
                case 2:
                    message.bidderAddress = reader.string();
                    break;
                case 3:
                    message.collateralTokenId = reader.uint64();
                    break;
                case 4:
                    message.premiumDiscount = reader.string();
                    break;
                case 5:
                    message.debtTokenId = reader.uint64();
                    break;
                case 6:
                    message.debtToken = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.biddingId.push(reader.uint64());
                        }
                    }
                    else {
                        message.biddingId.push(reader.uint64());
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
            limitOrderBiddingId: isSet(object.limitOrderBiddingId)
                ? long_1.default.fromValue(object.limitOrderBiddingId)
                : long_1.default.UZERO,
            bidderAddress: isSet(object.bidderAddress)
                ? String(object.bidderAddress)
                : "",
            collateralTokenId: isSet(object.collateralTokenId)
                ? long_1.default.fromValue(object.collateralTokenId)
                : long_1.default.UZERO,
            premiumDiscount: isSet(object.premiumDiscount)
                ? String(object.premiumDiscount)
                : "",
            debtTokenId: isSet(object.debtTokenId)
                ? long_1.default.fromValue(object.debtTokenId)
                : long_1.default.UZERO,
            debtToken: isSet(object.debtToken)
                ? coin_1.Coin.fromJSON(object.debtToken)
                : undefined,
            biddingId: Array.isArray(object === null || object === void 0 ? void 0 : object.biddingId)
                ? object.biddingId.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.limitOrderBiddingId !== undefined &&
            (obj.limitOrderBiddingId = (message.limitOrderBiddingId || long_1.default.UZERO).toString());
        message.bidderAddress !== undefined &&
            (obj.bidderAddress = message.bidderAddress);
        message.collateralTokenId !== undefined &&
            (obj.collateralTokenId = (message.collateralTokenId || long_1.default.UZERO).toString());
        message.premiumDiscount !== undefined &&
            (obj.premiumDiscount = message.premiumDiscount);
        message.debtTokenId !== undefined &&
            (obj.debtTokenId = (message.debtTokenId || long_1.default.UZERO).toString());
        message.debtToken !== undefined &&
            (obj.debtToken = message.debtToken
                ? coin_1.Coin.toJSON(message.debtToken)
                : undefined);
        if (message.biddingId) {
            obj.biddingId = message.biddingId.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.biddingId = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseLimitOrderBid();
        message.limitOrderBiddingId =
            object.limitOrderBiddingId !== undefined &&
                object.limitOrderBiddingId !== null
                ? long_1.default.fromValue(object.limitOrderBiddingId)
                : long_1.default.UZERO;
        message.bidderAddress = (_a = object.bidderAddress) !== null && _a !== void 0 ? _a : "";
        message.collateralTokenId =
            object.collateralTokenId !== undefined &&
                object.collateralTokenId !== null
                ? long_1.default.fromValue(object.collateralTokenId)
                : long_1.default.UZERO;
        message.premiumDiscount = (_b = object.premiumDiscount) !== null && _b !== void 0 ? _b : "";
        message.debtTokenId =
            object.debtTokenId !== undefined && object.debtTokenId !== null
                ? long_1.default.fromValue(object.debtTokenId)
                : long_1.default.UZERO;
        message.debtToken =
            object.debtToken !== undefined && object.debtToken !== null
                ? coin_1.Coin.fromPartial(object.debtToken)
                : undefined;
        message.biddingId = ((_c = object.biddingId) === null || _c === void 0 ? void 0 : _c.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseAuctionParams() {
    return {
        auctionDurationSeconds: long_1.default.UZERO,
        step: "",
        withdrawalFee: "",
        closingFee: "",
        minUsdValueLeft: long_1.default.UZERO,
        bidFactor: "",
        liquidationPenalty: "",
        auctionBonus: "",
    };
}
exports.AuctionParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.auctionDurationSeconds.isZero()) {
            writer.uint32(8).uint64(message.auctionDurationSeconds);
        }
        if (message.step !== "") {
            writer.uint32(18).string(message.step);
        }
        if (message.withdrawalFee !== "") {
            writer.uint32(26).string(message.withdrawalFee);
        }
        if (message.closingFee !== "") {
            writer.uint32(34).string(message.closingFee);
        }
        if (!message.minUsdValueLeft.isZero()) {
            writer.uint32(40).uint64(message.minUsdValueLeft);
        }
        if (message.bidFactor !== "") {
            writer.uint32(50).string(message.bidFactor);
        }
        if (message.liquidationPenalty !== "") {
            writer.uint32(58).string(message.liquidationPenalty);
        }
        if (message.auctionBonus !== "") {
            writer.uint32(66).string(message.auctionBonus);
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
                    message.auctionDurationSeconds = reader.uint64();
                    break;
                case 2:
                    message.step = reader.string();
                    break;
                case 3:
                    message.withdrawalFee = reader.string();
                    break;
                case 4:
                    message.closingFee = reader.string();
                    break;
                case 5:
                    message.minUsdValueLeft = reader.uint64();
                    break;
                case 6:
                    message.bidFactor = reader.string();
                    break;
                case 7:
                    message.liquidationPenalty = reader.string();
                    break;
                case 8:
                    message.auctionBonus = reader.string();
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
            auctionDurationSeconds: isSet(object.auctionDurationSeconds)
                ? long_1.default.fromValue(object.auctionDurationSeconds)
                : long_1.default.UZERO,
            step: isSet(object.step) ? String(object.step) : "",
            withdrawalFee: isSet(object.withdrawalFee)
                ? String(object.withdrawalFee)
                : "",
            closingFee: isSet(object.closingFee) ? String(object.closingFee) : "",
            minUsdValueLeft: isSet(object.minUsdValueLeft)
                ? long_1.default.fromValue(object.minUsdValueLeft)
                : long_1.default.UZERO,
            bidFactor: isSet(object.bidFactor) ? String(object.bidFactor) : "",
            liquidationPenalty: isSet(object.liquidationPenalty)
                ? String(object.liquidationPenalty)
                : "",
            auctionBonus: isSet(object.auctionBonus)
                ? String(object.auctionBonus)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.auctionDurationSeconds !== undefined &&
            (obj.auctionDurationSeconds = (message.auctionDurationSeconds || long_1.default.UZERO).toString());
        message.step !== undefined && (obj.step = message.step);
        message.withdrawalFee !== undefined &&
            (obj.withdrawalFee = message.withdrawalFee);
        message.closingFee !== undefined && (obj.closingFee = message.closingFee);
        message.minUsdValueLeft !== undefined &&
            (obj.minUsdValueLeft = (message.minUsdValueLeft || long_1.default.UZERO).toString());
        message.bidFactor !== undefined && (obj.bidFactor = message.bidFactor);
        message.liquidationPenalty !== undefined &&
            (obj.liquidationPenalty = message.liquidationPenalty);
        message.auctionBonus !== undefined &&
            (obj.auctionBonus = message.auctionBonus);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseAuctionParams();
        message.auctionDurationSeconds =
            object.auctionDurationSeconds !== undefined &&
                object.auctionDurationSeconds !== null
                ? long_1.default.fromValue(object.auctionDurationSeconds)
                : long_1.default.UZERO;
        message.step = (_a = object.step) !== null && _a !== void 0 ? _a : "";
        message.withdrawalFee = (_b = object.withdrawalFee) !== null && _b !== void 0 ? _b : "";
        message.closingFee = (_c = object.closingFee) !== null && _c !== void 0 ? _c : "";
        message.minUsdValueLeft =
            object.minUsdValueLeft !== undefined && object.minUsdValueLeft !== null
                ? long_1.default.fromValue(object.minUsdValueLeft)
                : long_1.default.UZERO;
        message.bidFactor = (_d = object.bidFactor) !== null && _d !== void 0 ? _d : "";
        message.liquidationPenalty = (_e = object.liquidationPenalty) !== null && _e !== void 0 ? _e : "";
        message.auctionBonus = (_f = object.auctionBonus) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseLimitOrderBidsForUser() {
    return { bidderAddress: "", limitOrderBidKey: [] };
}
exports.LimitOrderBidsForUser = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.bidderAddress !== "") {
            writer.uint32(10).string(message.bidderAddress);
        }
        for (const v of message.limitOrderBidKey) {
            exports.LimitOrderUserKey.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLimitOrderBidsForUser();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidderAddress = reader.string();
                    break;
                case 2:
                    message.limitOrderBidKey.push(exports.LimitOrderUserKey.decode(reader, reader.uint32()));
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
            bidderAddress: isSet(object.bidderAddress)
                ? String(object.bidderAddress)
                : "",
            limitOrderBidKey: Array.isArray(object === null || object === void 0 ? void 0 : object.limitOrderBidKey)
                ? object.limitOrderBidKey.map((e) => exports.LimitOrderUserKey.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.bidderAddress !== undefined &&
            (obj.bidderAddress = message.bidderAddress);
        if (message.limitOrderBidKey) {
            obj.limitOrderBidKey = message.limitOrderBidKey.map((e) => e ? exports.LimitOrderUserKey.toJSON(e) : undefined);
        }
        else {
            obj.limitOrderBidKey = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLimitOrderBidsForUser();
        message.bidderAddress = (_a = object.bidderAddress) !== null && _a !== void 0 ? _a : "";
        message.limitOrderBidKey =
            ((_b = object.limitOrderBidKey) === null || _b === void 0 ? void 0 : _b.map((e) => exports.LimitOrderUserKey.fromPartial(e))) ||
                [];
        return message;
    },
};
function createBaseLimitOrderUserKey() {
    return {
        debtTokenId: long_1.default.UZERO,
        collateralTokenId: long_1.default.UZERO,
        premiumDiscount: "",
        limitOrderBiddingId: long_1.default.UZERO,
    };
}
exports.LimitOrderUserKey = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.debtTokenId.isZero()) {
            writer.uint32(8).uint64(message.debtTokenId);
        }
        if (!message.collateralTokenId.isZero()) {
            writer.uint32(16).uint64(message.collateralTokenId);
        }
        if (message.premiumDiscount !== "") {
            writer.uint32(26).string(message.premiumDiscount);
        }
        if (!message.limitOrderBiddingId.isZero()) {
            writer.uint32(32).uint64(message.limitOrderBiddingId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLimitOrderUserKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.debtTokenId = reader.uint64();
                    break;
                case 2:
                    message.collateralTokenId = reader.uint64();
                    break;
                case 3:
                    message.premiumDiscount = reader.string();
                    break;
                case 4:
                    message.limitOrderBiddingId = reader.uint64();
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
            debtTokenId: isSet(object.debtTokenId)
                ? long_1.default.fromValue(object.debtTokenId)
                : long_1.default.UZERO,
            collateralTokenId: isSet(object.collateralTokenId)
                ? long_1.default.fromValue(object.collateralTokenId)
                : long_1.default.UZERO,
            premiumDiscount: isSet(object.premiumDiscount)
                ? String(object.premiumDiscount)
                : "",
            limitOrderBiddingId: isSet(object.limitOrderBiddingId)
                ? long_1.default.fromValue(object.limitOrderBiddingId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.debtTokenId !== undefined &&
            (obj.debtTokenId = (message.debtTokenId || long_1.default.UZERO).toString());
        message.collateralTokenId !== undefined &&
            (obj.collateralTokenId = (message.collateralTokenId || long_1.default.UZERO).toString());
        message.premiumDiscount !== undefined &&
            (obj.premiumDiscount = message.premiumDiscount);
        message.limitOrderBiddingId !== undefined &&
            (obj.limitOrderBiddingId = (message.limitOrderBiddingId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLimitOrderUserKey();
        message.debtTokenId =
            object.debtTokenId !== undefined && object.debtTokenId !== null
                ? long_1.default.fromValue(object.debtTokenId)
                : long_1.default.UZERO;
        message.collateralTokenId =
            object.collateralTokenId !== undefined &&
                object.collateralTokenId !== null
                ? long_1.default.fromValue(object.collateralTokenId)
                : long_1.default.UZERO;
        message.premiumDiscount = (_a = object.premiumDiscount) !== null && _a !== void 0 ? _a : "";
        message.limitOrderBiddingId =
            object.limitOrderBiddingId !== undefined &&
                object.limitOrderBiddingId !== null
                ? long_1.default.fromValue(object.limitOrderBiddingId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseAuctionFeesCollectionFromLimitBidTx() {
    return { assetId: long_1.default.UZERO, amount: "" };
}
exports.AuctionFeesCollectionFromLimitBidTx = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuctionFeesCollectionFromLimitBidTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint64();
                    break;
                case 2:
                    message.amount = reader.string();
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
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAuctionFeesCollectionFromLimitBidTx();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.amount = (_a = object.amount) !== null && _a !== void 0 ? _a : "";
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
//# sourceMappingURL=bid.js.map