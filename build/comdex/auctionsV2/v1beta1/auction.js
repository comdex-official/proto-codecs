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
exports.LimitBidProtocolData = exports.bidOwnerMapping = exports.Auction = exports.AuctionHistorical = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const liquidate_1 = require("../../../comdex/liquidationsV2/v1beta1/liquidate");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.auctionsV2.v1beta1";
function createBaseAuctionHistorical() {
    return {
        auctionId: long_1.default.UZERO,
        auctionHistorical: undefined,
        lockedVault: undefined,
    };
}
exports.AuctionHistorical = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.auctionId.isZero()) {
            writer.uint32(8).uint64(message.auctionId);
        }
        if (message.auctionHistorical !== undefined) {
            exports.Auction.encode(message.auctionHistorical, writer.uint32(18).fork()).ldelim();
        }
        if (message.lockedVault !== undefined) {
            liquidate_1.LockedVault.encode(message.lockedVault, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuctionHistorical();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctionId = reader.uint64();
                    break;
                case 2:
                    message.auctionHistorical = exports.Auction.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.lockedVault = liquidate_1.LockedVault.decode(reader, reader.uint32());
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
            auctionHistorical: isSet(object.auctionHistorical)
                ? exports.Auction.fromJSON(object.auctionHistorical)
                : undefined,
            lockedVault: isSet(object.lockedVault)
                ? liquidate_1.LockedVault.fromJSON(object.lockedVault)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.auctionId !== undefined &&
            (obj.auctionId = (message.auctionId || long_1.default.UZERO).toString());
        message.auctionHistorical !== undefined &&
            (obj.auctionHistorical = message.auctionHistorical
                ? exports.Auction.toJSON(message.auctionHistorical)
                : undefined);
        message.lockedVault !== undefined &&
            (obj.lockedVault = message.lockedVault
                ? liquidate_1.LockedVault.toJSON(message.lockedVault)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAuctionHistorical();
        message.auctionId =
            object.auctionId !== undefined && object.auctionId !== null
                ? long_1.default.fromValue(object.auctionId)
                : long_1.default.UZERO;
        message.auctionHistorical =
            object.auctionHistorical !== undefined &&
                object.auctionHistorical !== null
                ? exports.Auction.fromPartial(object.auctionHistorical)
                : undefined;
        message.lockedVault =
            object.lockedVault !== undefined && object.lockedVault !== null
                ? liquidate_1.LockedVault.fromPartial(object.lockedVault)
                : undefined;
        return message;
    },
};
function createBaseAuction() {
    return {
        auctionId: long_1.default.UZERO,
        collateralToken: undefined,
        debtToken: undefined,
        activeBiddingId: long_1.default.UZERO,
        biddingIds: [],
        collateralTokenAuctionPrice: "",
        collateralTokenOraclePrice: "",
        debtTokenOraclePrice: "",
        lockedVaultId: long_1.default.UZERO,
        startTime: undefined,
        endTime: undefined,
        appId: long_1.default.UZERO,
        auctionType: false,
        collateralAssetId: long_1.default.UZERO,
        debtAssetId: long_1.default.UZERO,
        bonusAmount: "",
        collateralTokenInitialPrice: "",
    };
}
exports.Auction = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.auctionId.isZero()) {
            writer.uint32(8).uint64(message.auctionId);
        }
        if (message.collateralToken !== undefined) {
            coin_1.Coin.encode(message.collateralToken, writer.uint32(18).fork()).ldelim();
        }
        if (message.debtToken !== undefined) {
            coin_1.Coin.encode(message.debtToken, writer.uint32(26).fork()).ldelim();
        }
        if (!message.activeBiddingId.isZero()) {
            writer.uint32(32).uint64(message.activeBiddingId);
        }
        for (const v of message.biddingIds) {
            exports.bidOwnerMapping.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.collateralTokenAuctionPrice !== "") {
            writer.uint32(58).string(message.collateralTokenAuctionPrice);
        }
        if (message.collateralTokenOraclePrice !== "") {
            writer.uint32(66).string(message.collateralTokenOraclePrice);
        }
        if (message.debtTokenOraclePrice !== "") {
            writer.uint32(74).string(message.debtTokenOraclePrice);
        }
        if (!message.lockedVaultId.isZero()) {
            writer.uint32(80).uint64(message.lockedVaultId);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startTime), writer.uint32(90).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.endTime), writer.uint32(98).fork()).ldelim();
        }
        if (!message.appId.isZero()) {
            writer.uint32(104).uint64(message.appId);
        }
        if (message.auctionType === true) {
            writer.uint32(112).bool(message.auctionType);
        }
        if (!message.collateralAssetId.isZero()) {
            writer.uint32(120).uint64(message.collateralAssetId);
        }
        if (!message.debtAssetId.isZero()) {
            writer.uint32(128).uint64(message.debtAssetId);
        }
        if (message.bonusAmount !== "") {
            writer.uint32(138).string(message.bonusAmount);
        }
        if (message.collateralTokenInitialPrice !== "") {
            writer.uint32(146).string(message.collateralTokenInitialPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctionId = reader.uint64();
                    break;
                case 2:
                    message.collateralToken = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.debtToken = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.activeBiddingId = reader.uint64();
                    break;
                case 5:
                    message.biddingIds.push(exports.bidOwnerMapping.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.collateralTokenAuctionPrice = reader.string();
                    break;
                case 8:
                    message.collateralTokenOraclePrice = reader.string();
                    break;
                case 9:
                    message.debtTokenOraclePrice = reader.string();
                    break;
                case 10:
                    message.lockedVaultId = reader.uint64();
                    break;
                case 11:
                    message.startTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.endTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.appId = reader.uint64();
                    break;
                case 14:
                    message.auctionType = reader.bool();
                    break;
                case 15:
                    message.collateralAssetId = reader.uint64();
                    break;
                case 16:
                    message.debtAssetId = reader.uint64();
                    break;
                case 17:
                    message.bonusAmount = reader.string();
                    break;
                case 18:
                    message.collateralTokenInitialPrice = reader.string();
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
            collateralToken: isSet(object.collateralToken)
                ? coin_1.Coin.fromJSON(object.collateralToken)
                : undefined,
            debtToken: isSet(object.debtToken)
                ? coin_1.Coin.fromJSON(object.debtToken)
                : undefined,
            activeBiddingId: isSet(object.activeBiddingId)
                ? long_1.default.fromValue(object.activeBiddingId)
                : long_1.default.UZERO,
            biddingIds: Array.isArray(object === null || object === void 0 ? void 0 : object.biddingIds)
                ? object.biddingIds.map((e) => exports.bidOwnerMapping.fromJSON(e))
                : [],
            collateralTokenAuctionPrice: isSet(object.collateralTokenAuctionPrice)
                ? String(object.collateralTokenAuctionPrice)
                : "",
            collateralTokenOraclePrice: isSet(object.collateralTokenOraclePrice)
                ? String(object.collateralTokenOraclePrice)
                : "",
            debtTokenOraclePrice: isSet(object.debtTokenOraclePrice)
                ? String(object.debtTokenOraclePrice)
                : "",
            lockedVaultId: isSet(object.lockedVaultId)
                ? long_1.default.fromValue(object.lockedVaultId)
                : long_1.default.UZERO,
            startTime: isSet(object.startTime)
                ? fromJsonTimestamp(object.startTime)
                : undefined,
            endTime: isSet(object.endTime)
                ? fromJsonTimestamp(object.endTime)
                : undefined,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            auctionType: isSet(object.auctionType)
                ? Boolean(object.auctionType)
                : false,
            collateralAssetId: isSet(object.collateralAssetId)
                ? long_1.default.fromValue(object.collateralAssetId)
                : long_1.default.UZERO,
            debtAssetId: isSet(object.debtAssetId)
                ? long_1.default.fromValue(object.debtAssetId)
                : long_1.default.UZERO,
            bonusAmount: isSet(object.bonusAmount) ? String(object.bonusAmount) : "",
            collateralTokenInitialPrice: isSet(object.collateralTokenInitialPrice)
                ? String(object.collateralTokenInitialPrice)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.auctionId !== undefined &&
            (obj.auctionId = (message.auctionId || long_1.default.UZERO).toString());
        message.collateralToken !== undefined &&
            (obj.collateralToken = message.collateralToken
                ? coin_1.Coin.toJSON(message.collateralToken)
                : undefined);
        message.debtToken !== undefined &&
            (obj.debtToken = message.debtToken
                ? coin_1.Coin.toJSON(message.debtToken)
                : undefined);
        message.activeBiddingId !== undefined &&
            (obj.activeBiddingId = (message.activeBiddingId || long_1.default.UZERO).toString());
        if (message.biddingIds) {
            obj.biddingIds = message.biddingIds.map((e) => e ? exports.bidOwnerMapping.toJSON(e) : undefined);
        }
        else {
            obj.biddingIds = [];
        }
        message.collateralTokenAuctionPrice !== undefined &&
            (obj.collateralTokenAuctionPrice = message.collateralTokenAuctionPrice);
        message.collateralTokenOraclePrice !== undefined &&
            (obj.collateralTokenOraclePrice = message.collateralTokenOraclePrice);
        message.debtTokenOraclePrice !== undefined &&
            (obj.debtTokenOraclePrice = message.debtTokenOraclePrice);
        message.lockedVaultId !== undefined &&
            (obj.lockedVaultId = (message.lockedVaultId || long_1.default.UZERO).toString());
        message.startTime !== undefined &&
            (obj.startTime = message.startTime.toISOString());
        message.endTime !== undefined &&
            (obj.endTime = message.endTime.toISOString());
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.auctionType !== undefined &&
            (obj.auctionType = message.auctionType);
        message.collateralAssetId !== undefined &&
            (obj.collateralAssetId = (message.collateralAssetId || long_1.default.UZERO).toString());
        message.debtAssetId !== undefined &&
            (obj.debtAssetId = (message.debtAssetId || long_1.default.UZERO).toString());
        message.bonusAmount !== undefined &&
            (obj.bonusAmount = message.bonusAmount);
        message.collateralTokenInitialPrice !== undefined &&
            (obj.collateralTokenInitialPrice = message.collateralTokenInitialPrice);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseAuction();
        message.auctionId =
            object.auctionId !== undefined && object.auctionId !== null
                ? long_1.default.fromValue(object.auctionId)
                : long_1.default.UZERO;
        message.collateralToken =
            object.collateralToken !== undefined && object.collateralToken !== null
                ? coin_1.Coin.fromPartial(object.collateralToken)
                : undefined;
        message.debtToken =
            object.debtToken !== undefined && object.debtToken !== null
                ? coin_1.Coin.fromPartial(object.debtToken)
                : undefined;
        message.activeBiddingId =
            object.activeBiddingId !== undefined && object.activeBiddingId !== null
                ? long_1.default.fromValue(object.activeBiddingId)
                : long_1.default.UZERO;
        message.biddingIds =
            ((_a = object.biddingIds) === null || _a === void 0 ? void 0 : _a.map((e) => exports.bidOwnerMapping.fromPartial(e))) || [];
        message.collateralTokenAuctionPrice =
            (_b = object.collateralTokenAuctionPrice) !== null && _b !== void 0 ? _b : "";
        message.collateralTokenOraclePrice =
            (_c = object.collateralTokenOraclePrice) !== null && _c !== void 0 ? _c : "";
        message.debtTokenOraclePrice = (_d = object.debtTokenOraclePrice) !== null && _d !== void 0 ? _d : "";
        message.lockedVaultId =
            object.lockedVaultId !== undefined && object.lockedVaultId !== null
                ? long_1.default.fromValue(object.lockedVaultId)
                : long_1.default.UZERO;
        message.startTime = (_e = object.startTime) !== null && _e !== void 0 ? _e : undefined;
        message.endTime = (_f = object.endTime) !== null && _f !== void 0 ? _f : undefined;
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.auctionType = (_g = object.auctionType) !== null && _g !== void 0 ? _g : false;
        message.collateralAssetId =
            object.collateralAssetId !== undefined &&
                object.collateralAssetId !== null
                ? long_1.default.fromValue(object.collateralAssetId)
                : long_1.default.UZERO;
        message.debtAssetId =
            object.debtAssetId !== undefined && object.debtAssetId !== null
                ? long_1.default.fromValue(object.debtAssetId)
                : long_1.default.UZERO;
        message.bonusAmount = (_h = object.bonusAmount) !== null && _h !== void 0 ? _h : "";
        message.collateralTokenInitialPrice =
            (_j = object.collateralTokenInitialPrice) !== null && _j !== void 0 ? _j : "";
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
function createBaseLimitBidProtocolData() {
    return {
        collateralAssetId: long_1.default.UZERO,
        debtAssetId: long_1.default.UZERO,
        bidValue: "",
        maxDiscount: "",
    };
}
exports.LimitBidProtocolData = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.collateralAssetId.isZero()) {
            writer.uint32(8).uint64(message.collateralAssetId);
        }
        if (!message.debtAssetId.isZero()) {
            writer.uint32(16).uint64(message.debtAssetId);
        }
        if (message.bidValue !== "") {
            writer.uint32(26).string(message.bidValue);
        }
        if (message.maxDiscount !== "") {
            writer.uint32(34).string(message.maxDiscount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLimitBidProtocolData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collateralAssetId = reader.uint64();
                    break;
                case 2:
                    message.debtAssetId = reader.uint64();
                    break;
                case 3:
                    message.bidValue = reader.string();
                    break;
                case 4:
                    message.maxDiscount = reader.string();
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
            collateralAssetId: isSet(object.collateralAssetId)
                ? long_1.default.fromValue(object.collateralAssetId)
                : long_1.default.UZERO,
            debtAssetId: isSet(object.debtAssetId)
                ? long_1.default.fromValue(object.debtAssetId)
                : long_1.default.UZERO,
            bidValue: isSet(object.bidValue) ? String(object.bidValue) : "",
            maxDiscount: isSet(object.maxDiscount) ? String(object.maxDiscount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collateralAssetId !== undefined &&
            (obj.collateralAssetId = (message.collateralAssetId || long_1.default.UZERO).toString());
        message.debtAssetId !== undefined &&
            (obj.debtAssetId = (message.debtAssetId || long_1.default.UZERO).toString());
        message.bidValue !== undefined && (obj.bidValue = message.bidValue);
        message.maxDiscount !== undefined &&
            (obj.maxDiscount = message.maxDiscount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLimitBidProtocolData();
        message.collateralAssetId =
            object.collateralAssetId !== undefined &&
                object.collateralAssetId !== null
                ? long_1.default.fromValue(object.collateralAssetId)
                : long_1.default.UZERO;
        message.debtAssetId =
            object.debtAssetId !== undefined && object.debtAssetId !== null
                ? long_1.default.fromValue(object.debtAssetId)
                : long_1.default.UZERO;
        message.bidValue = (_a = object.bidValue) !== null && _a !== void 0 ? _a : "";
        message.maxDiscount = (_b = object.maxDiscount) !== null && _b !== void 0 ? _b : "";
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