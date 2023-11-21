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
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const bid_1 = require("../../../comdex/auctionsV2/v1beta1/bid");
const params_1 = require("../../../comdex/auctionsV2/v1beta1/params");
const auction_1 = require("../../../comdex/auctionsV2/v1beta1/auction");
exports.protobufPackage = "comdex.auctionsV2.v1beta1";
function createBaseGenesisState() {
    return {
        auction: [],
        auctionParams: undefined,
        auctionFeesCollectionFromLimitBidTx: [],
        params: undefined,
        AuctionId: long_1.default.UZERO,
        UserBiddingID: long_1.default.UZERO,
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.auction) {
            auction_1.Auction.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.auctionParams !== undefined) {
            bid_1.AuctionParams.encode(message.auctionParams, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.auctionFeesCollectionFromLimitBidTx) {
            bid_1.AuctionFeesCollectionFromLimitBidTx.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        if (!message.AuctionId.isZero()) {
            writer.uint32(40).uint64(message.AuctionId);
        }
        if (!message.UserBiddingID.isZero()) {
            writer.uint32(48).uint64(message.UserBiddingID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auction.push(auction_1.Auction.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.auctionParams = bid_1.AuctionParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.auctionFeesCollectionFromLimitBidTx.push(bid_1.AuctionFeesCollectionFromLimitBidTx.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.AuctionId = reader.uint64();
                    break;
                case 6:
                    message.UserBiddingID = reader.uint64();
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
            auction: Array.isArray(object === null || object === void 0 ? void 0 : object.auction)
                ? object.auction.map((e) => auction_1.Auction.fromJSON(e))
                : [],
            auctionParams: isSet(object.auctionParams)
                ? bid_1.AuctionParams.fromJSON(object.auctionParams)
                : undefined,
            auctionFeesCollectionFromLimitBidTx: Array.isArray(object === null || object === void 0 ? void 0 : object.auctionFeesCollectionFromLimitBidTx)
                ? object.auctionFeesCollectionFromLimitBidTx.map((e) => bid_1.AuctionFeesCollectionFromLimitBidTx.fromJSON(e))
                : [],
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            AuctionId: isSet(object.AuctionId)
                ? long_1.default.fromValue(object.AuctionId)
                : long_1.default.UZERO,
            UserBiddingID: isSet(object.UserBiddingID)
                ? long_1.default.fromValue(object.UserBiddingID)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.auction) {
            obj.auction = message.auction.map((e) => e ? auction_1.Auction.toJSON(e) : undefined);
        }
        else {
            obj.auction = [];
        }
        message.auctionParams !== undefined &&
            (obj.auctionParams = message.auctionParams
                ? bid_1.AuctionParams.toJSON(message.auctionParams)
                : undefined);
        if (message.auctionFeesCollectionFromLimitBidTx) {
            obj.auctionFeesCollectionFromLimitBidTx =
                message.auctionFeesCollectionFromLimitBidTx.map((e) => e ? bid_1.AuctionFeesCollectionFromLimitBidTx.toJSON(e) : undefined);
        }
        else {
            obj.auctionFeesCollectionFromLimitBidTx = [];
        }
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        message.AuctionId !== undefined &&
            (obj.AuctionId = (message.AuctionId || long_1.default.UZERO).toString());
        message.UserBiddingID !== undefined &&
            (obj.UserBiddingID = (message.UserBiddingID || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGenesisState();
        message.auction = ((_a = object.auction) === null || _a === void 0 ? void 0 : _a.map((e) => auction_1.Auction.fromPartial(e))) || [];
        message.auctionParams =
            object.auctionParams !== undefined && object.auctionParams !== null
                ? bid_1.AuctionParams.fromPartial(object.auctionParams)
                : undefined;
        message.auctionFeesCollectionFromLimitBidTx =
            ((_b = object.auctionFeesCollectionFromLimitBidTx) === null || _b === void 0 ? void 0 : _b.map((e) => bid_1.AuctionFeesCollectionFromLimitBidTx.fromPartial(e))) || [];
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        message.AuctionId =
            object.AuctionId !== undefined && object.AuctionId !== null
                ? long_1.default.fromValue(object.AuctionId)
                : long_1.default.UZERO;
        message.UserBiddingID =
            object.UserBiddingID !== undefined && object.UserBiddingID !== null
                ? long_1.default.fromValue(object.UserBiddingID)
                : long_1.default.UZERO;
        return message;
    },
};
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=genesis.js.map