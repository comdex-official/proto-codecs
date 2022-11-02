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
const lend_1 = require("../../../comdex/lend/v1beta1/lend");
exports.protobufPackage = "comdex.lend.v1beta1";
function createBaseGenesisState() {
    return {
        borrowAsset: [],
        borrowInterestTracker: [],
        lendAsset: [],
        pool: [],
        assetToPairMapping: [],
        poolAssetLBMapping: [],
        lendRewardsTracker: [],
        userAssetLendBorrowMapping: [],
        reserveBuybackAssetData: [],
        extendedPair: [],
        auctionParams: [],
        assetRatesParams: [],
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.borrowAsset) {
            lend_1.BorrowAsset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.borrowInterestTracker) {
            lend_1.BorrowInterestTracker.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.lendAsset) {
            lend_1.LendAsset.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.pool) {
            lend_1.Pool.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.assetToPairMapping) {
            lend_1.AssetToPairMapping.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.poolAssetLBMapping) {
            lend_1.PoolAssetLBMapping.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.lendRewardsTracker) {
            lend_1.LendRewardsTracker.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.userAssetLendBorrowMapping) {
            lend_1.UserAssetLendBorrowMapping.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.reserveBuybackAssetData) {
            lend_1.ReserveBuybackAssetData.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.extendedPair) {
            lend_1.ExtendedPair.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.auctionParams) {
            lend_1.AuctionParams.encode(v, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.assetRatesParams) {
            lend_1.AssetRatesParams.encode(v, writer.uint32(98).fork()).ldelim();
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
                    message.borrowAsset.push(lend_1.BorrowAsset.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.borrowInterestTracker.push(lend_1.BorrowInterestTracker.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lendAsset.push(lend_1.LendAsset.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.pool.push(lend_1.Pool.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.assetToPairMapping.push(lend_1.AssetToPairMapping.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.poolAssetLBMapping.push(lend_1.PoolAssetLBMapping.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.lendRewardsTracker.push(lend_1.LendRewardsTracker.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.userAssetLendBorrowMapping.push(lend_1.UserAssetLendBorrowMapping.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.reserveBuybackAssetData.push(lend_1.ReserveBuybackAssetData.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.extendedPair.push(lend_1.ExtendedPair.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.auctionParams.push(lend_1.AuctionParams.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.assetRatesParams.push(lend_1.AssetRatesParams.decode(reader, reader.uint32()));
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
            borrowAsset: Array.isArray(object === null || object === void 0 ? void 0 : object.borrowAsset)
                ? object.borrowAsset.map((e) => lend_1.BorrowAsset.fromJSON(e))
                : [],
            borrowInterestTracker: Array.isArray(object === null || object === void 0 ? void 0 : object.borrowInterestTracker)
                ? object.borrowInterestTracker.map((e) => lend_1.BorrowInterestTracker.fromJSON(e))
                : [],
            lendAsset: Array.isArray(object === null || object === void 0 ? void 0 : object.lendAsset)
                ? object.lendAsset.map((e) => lend_1.LendAsset.fromJSON(e))
                : [],
            pool: Array.isArray(object === null || object === void 0 ? void 0 : object.pool)
                ? object.pool.map((e) => lend_1.Pool.fromJSON(e))
                : [],
            assetToPairMapping: Array.isArray(object === null || object === void 0 ? void 0 : object.assetToPairMapping)
                ? object.assetToPairMapping.map((e) => lend_1.AssetToPairMapping.fromJSON(e))
                : [],
            poolAssetLBMapping: Array.isArray(object === null || object === void 0 ? void 0 : object.poolAssetLBMapping)
                ? object.poolAssetLBMapping.map((e) => lend_1.PoolAssetLBMapping.fromJSON(e))
                : [],
            lendRewardsTracker: Array.isArray(object === null || object === void 0 ? void 0 : object.lendRewardsTracker)
                ? object.lendRewardsTracker.map((e) => lend_1.LendRewardsTracker.fromJSON(e))
                : [],
            userAssetLendBorrowMapping: Array.isArray(object === null || object === void 0 ? void 0 : object.userAssetLendBorrowMapping)
                ? object.userAssetLendBorrowMapping.map((e) => lend_1.UserAssetLendBorrowMapping.fromJSON(e))
                : [],
            reserveBuybackAssetData: Array.isArray(object === null || object === void 0 ? void 0 : object.reserveBuybackAssetData)
                ? object.reserveBuybackAssetData.map((e) => lend_1.ReserveBuybackAssetData.fromJSON(e))
                : [],
            extendedPair: Array.isArray(object === null || object === void 0 ? void 0 : object.extendedPair)
                ? object.extendedPair.map((e) => lend_1.ExtendedPair.fromJSON(e))
                : [],
            auctionParams: Array.isArray(object === null || object === void 0 ? void 0 : object.auctionParams)
                ? object.auctionParams.map((e) => lend_1.AuctionParams.fromJSON(e))
                : [],
            assetRatesParams: Array.isArray(object === null || object === void 0 ? void 0 : object.assetRatesParams)
                ? object.assetRatesParams.map((e) => lend_1.AssetRatesParams.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.borrowAsset) {
            obj.borrowAsset = message.borrowAsset.map((e) => e ? lend_1.BorrowAsset.toJSON(e) : undefined);
        }
        else {
            obj.borrowAsset = [];
        }
        if (message.borrowInterestTracker) {
            obj.borrowInterestTracker = message.borrowInterestTracker.map((e) => e ? lend_1.BorrowInterestTracker.toJSON(e) : undefined);
        }
        else {
            obj.borrowInterestTracker = [];
        }
        if (message.lendAsset) {
            obj.lendAsset = message.lendAsset.map((e) => e ? lend_1.LendAsset.toJSON(e) : undefined);
        }
        else {
            obj.lendAsset = [];
        }
        if (message.pool) {
            obj.pool = message.pool.map((e) => (e ? lend_1.Pool.toJSON(e) : undefined));
        }
        else {
            obj.pool = [];
        }
        if (message.assetToPairMapping) {
            obj.assetToPairMapping = message.assetToPairMapping.map((e) => e ? lend_1.AssetToPairMapping.toJSON(e) : undefined);
        }
        else {
            obj.assetToPairMapping = [];
        }
        if (message.poolAssetLBMapping) {
            obj.poolAssetLBMapping = message.poolAssetLBMapping.map((e) => e ? lend_1.PoolAssetLBMapping.toJSON(e) : undefined);
        }
        else {
            obj.poolAssetLBMapping = [];
        }
        if (message.lendRewardsTracker) {
            obj.lendRewardsTracker = message.lendRewardsTracker.map((e) => e ? lend_1.LendRewardsTracker.toJSON(e) : undefined);
        }
        else {
            obj.lendRewardsTracker = [];
        }
        if (message.userAssetLendBorrowMapping) {
            obj.userAssetLendBorrowMapping = message.userAssetLendBorrowMapping.map((e) => (e ? lend_1.UserAssetLendBorrowMapping.toJSON(e) : undefined));
        }
        else {
            obj.userAssetLendBorrowMapping = [];
        }
        if (message.reserveBuybackAssetData) {
            obj.reserveBuybackAssetData = message.reserveBuybackAssetData.map((e) => e ? lend_1.ReserveBuybackAssetData.toJSON(e) : undefined);
        }
        else {
            obj.reserveBuybackAssetData = [];
        }
        if (message.extendedPair) {
            obj.extendedPair = message.extendedPair.map((e) => e ? lend_1.ExtendedPair.toJSON(e) : undefined);
        }
        else {
            obj.extendedPair = [];
        }
        if (message.auctionParams) {
            obj.auctionParams = message.auctionParams.map((e) => e ? lend_1.AuctionParams.toJSON(e) : undefined);
        }
        else {
            obj.auctionParams = [];
        }
        if (message.assetRatesParams) {
            obj.assetRatesParams = message.assetRatesParams.map((e) => e ? lend_1.AssetRatesParams.toJSON(e) : undefined);
        }
        else {
            obj.assetRatesParams = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = createBaseGenesisState();
        message.borrowAsset =
            ((_a = object.borrowAsset) === null || _a === void 0 ? void 0 : _a.map((e) => lend_1.BorrowAsset.fromPartial(e))) || [];
        message.borrowInterestTracker =
            ((_b = object.borrowInterestTracker) === null || _b === void 0 ? void 0 : _b.map((e) => lend_1.BorrowInterestTracker.fromPartial(e))) || [];
        message.lendAsset =
            ((_c = object.lendAsset) === null || _c === void 0 ? void 0 : _c.map((e) => lend_1.LendAsset.fromPartial(e))) || [];
        message.pool = ((_d = object.pool) === null || _d === void 0 ? void 0 : _d.map((e) => lend_1.Pool.fromPartial(e))) || [];
        message.assetToPairMapping =
            ((_e = object.assetToPairMapping) === null || _e === void 0 ? void 0 : _e.map((e) => lend_1.AssetToPairMapping.fromPartial(e))) || [];
        message.poolAssetLBMapping =
            ((_f = object.poolAssetLBMapping) === null || _f === void 0 ? void 0 : _f.map((e) => lend_1.PoolAssetLBMapping.fromPartial(e))) || [];
        message.lendRewardsTracker =
            ((_g = object.lendRewardsTracker) === null || _g === void 0 ? void 0 : _g.map((e) => lend_1.LendRewardsTracker.fromPartial(e))) || [];
        message.userAssetLendBorrowMapping =
            ((_h = object.userAssetLendBorrowMapping) === null || _h === void 0 ? void 0 : _h.map((e) => lend_1.UserAssetLendBorrowMapping.fromPartial(e))) || [];
        message.reserveBuybackAssetData =
            ((_j = object.reserveBuybackAssetData) === null || _j === void 0 ? void 0 : _j.map((e) => lend_1.ReserveBuybackAssetData.fromPartial(e))) || [];
        message.extendedPair =
            ((_k = object.extendedPair) === null || _k === void 0 ? void 0 : _k.map((e) => lend_1.ExtendedPair.fromPartial(e))) || [];
        message.auctionParams =
            ((_l = object.auctionParams) === null || _l === void 0 ? void 0 : _l.map((e) => lend_1.AuctionParams.fromPartial(e))) || [];
        message.assetRatesParams =
            ((_m = object.assetRatesParams) === null || _m === void 0 ? void 0 : _m.map((e) => lend_1.AssetRatesParams.fromPartial(e))) ||
                [];
        return message;
    },
};
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
//# sourceMappingURL=genesis.js.map