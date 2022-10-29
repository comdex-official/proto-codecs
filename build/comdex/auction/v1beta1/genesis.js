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
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const params_1 = require("../../../comdex/auction/v1beta1/params");
const auction_1 = require("../../../comdex/auction/v1beta1/auction");
exports.protobufPackage = "comdex.auction.v1beta1";
function createBaseGenesisState() {
    return {
        surplusAuction: [],
        debtAuction: [],
        dutchAuction: [],
        protocolStatistics: [],
        auctionParams: [],
        params: undefined,
        UserBiddingID: long_1.default.UZERO,
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.surplusAuction) {
            auction_1.SurplusAuction.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.debtAuction) {
            auction_1.DebtAuction.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.dutchAuction) {
            auction_1.DutchAuction.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.protocolStatistics) {
            auction_1.ProtocolStatistics.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.auctionParams) {
            auction_1.AuctionParams.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(50).fork()).ldelim();
        }
        if (!message.UserBiddingID.isZero()) {
            writer.uint32(56).uint64(message.UserBiddingID);
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
                    message.surplusAuction.push(auction_1.SurplusAuction.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.debtAuction.push(auction_1.DebtAuction.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.dutchAuction.push(auction_1.DutchAuction.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.protocolStatistics.push(auction_1.ProtocolStatistics.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.auctionParams.push(auction_1.AuctionParams.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 7:
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
            surplusAuction: Array.isArray(object === null || object === void 0 ? void 0 : object.surplusAuction)
                ? object.surplusAuction.map((e) => auction_1.SurplusAuction.fromJSON(e))
                : [],
            debtAuction: Array.isArray(object === null || object === void 0 ? void 0 : object.debtAuction)
                ? object.debtAuction.map((e) => auction_1.DebtAuction.fromJSON(e))
                : [],
            dutchAuction: Array.isArray(object === null || object === void 0 ? void 0 : object.dutchAuction)
                ? object.dutchAuction.map((e) => auction_1.DutchAuction.fromJSON(e))
                : [],
            protocolStatistics: Array.isArray(object === null || object === void 0 ? void 0 : object.protocolStatistics)
                ? object.protocolStatistics.map((e) => auction_1.ProtocolStatistics.fromJSON(e))
                : [],
            auctionParams: Array.isArray(object === null || object === void 0 ? void 0 : object.auctionParams)
                ? object.auctionParams.map((e) => auction_1.AuctionParams.fromJSON(e))
                : [],
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            UserBiddingID: isSet(object.UserBiddingID)
                ? long_1.default.fromValue(object.UserBiddingID)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.surplusAuction) {
            obj.surplusAuction = message.surplusAuction.map((e) => e ? auction_1.SurplusAuction.toJSON(e) : undefined);
        }
        else {
            obj.surplusAuction = [];
        }
        if (message.debtAuction) {
            obj.debtAuction = message.debtAuction.map((e) => e ? auction_1.DebtAuction.toJSON(e) : undefined);
        }
        else {
            obj.debtAuction = [];
        }
        if (message.dutchAuction) {
            obj.dutchAuction = message.dutchAuction.map((e) => e ? auction_1.DutchAuction.toJSON(e) : undefined);
        }
        else {
            obj.dutchAuction = [];
        }
        if (message.protocolStatistics) {
            obj.protocolStatistics = message.protocolStatistics.map((e) => e ? auction_1.ProtocolStatistics.toJSON(e) : undefined);
        }
        else {
            obj.protocolStatistics = [];
        }
        if (message.auctionParams) {
            obj.auctionParams = message.auctionParams.map((e) => e ? auction_1.AuctionParams.toJSON(e) : undefined);
        }
        else {
            obj.auctionParams = [];
        }
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        message.UserBiddingID !== undefined &&
            (obj.UserBiddingID = (message.UserBiddingID || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseGenesisState();
        message.surplusAuction =
            ((_a = object.surplusAuction) === null || _a === void 0 ? void 0 : _a.map((e) => auction_1.SurplusAuction.fromPartial(e))) || [];
        message.debtAuction =
            ((_b = object.debtAuction) === null || _b === void 0 ? void 0 : _b.map((e) => auction_1.DebtAuction.fromPartial(e))) || [];
        message.dutchAuction =
            ((_c = object.dutchAuction) === null || _c === void 0 ? void 0 : _c.map((e) => auction_1.DutchAuction.fromPartial(e))) || [];
        message.protocolStatistics =
            ((_d = object.protocolStatistics) === null || _d === void 0 ? void 0 : _d.map((e) => auction_1.ProtocolStatistics.fromPartial(e))) || [];
        message.auctionParams =
            ((_e = object.auctionParams) === null || _e === void 0 ? void 0 : _e.map((e) => auction_1.AuctionParams.fromPartial(e))) || [];
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
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