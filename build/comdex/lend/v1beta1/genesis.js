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
const params_1 = require("../../../comdex/lend/v1beta1/params");
exports.protobufPackage = "comdex.lend.v1beta1";
function createBaseGenesisState() {
    return {
        borrowAsset: [],
        userBorrowIdMapping: [],
        borrowIdByOwnerAndPoolMapping: [],
        borrowMapping: undefined,
        lendAsset: [],
        pool: [],
        assetToPairMapping: [],
        userLendIdMapping: [],
        lendIdByOwnerAndPoolMapping: [],
        lendIdToBorrowIdMapping: [],
        assetStats: [],
        lendMapping: undefined,
        userDepositStats: undefined,
        reserveDepositStats: undefined,
        buyBackDepositStats: undefined,
        borrowDepositStats: undefined,
        extendedPair: [],
        assetRatesStats: [],
        auctionParams: [],
        params: undefined,
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.borrowAsset) {
            lend_1.BorrowAsset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.userBorrowIdMapping) {
            lend_1.UserBorrowIdMapping.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.borrowIdByOwnerAndPoolMapping) {
            lend_1.BorrowIdByOwnerAndPoolMapping.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.borrowMapping !== undefined) {
            lend_1.BorrowMapping.encode(message.borrowMapping, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.lendAsset) {
            lend_1.LendAsset.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.pool) {
            lend_1.Pool.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.assetToPairMapping) {
            lend_1.AssetToPairMapping.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.userLendIdMapping) {
            lend_1.UserLendIdMapping.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.lendIdByOwnerAndPoolMapping) {
            lend_1.LendIdByOwnerAndPoolMapping.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.lendIdToBorrowIdMapping) {
            lend_1.LendIdToBorrowIdMapping.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.assetStats) {
            lend_1.AssetStats.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (message.lendMapping !== undefined) {
            lend_1.LendMapping.encode(message.lendMapping, writer.uint32(98).fork()).ldelim();
        }
        if (message.userDepositStats !== undefined) {
            lend_1.DepositStats.encode(message.userDepositStats, writer.uint32(106).fork()).ldelim();
        }
        if (message.reserveDepositStats !== undefined) {
            lend_1.DepositStats.encode(message.reserveDepositStats, writer.uint32(114).fork()).ldelim();
        }
        if (message.buyBackDepositStats !== undefined) {
            lend_1.DepositStats.encode(message.buyBackDepositStats, writer.uint32(122).fork()).ldelim();
        }
        if (message.borrowDepositStats !== undefined) {
            lend_1.DepositStats.encode(message.borrowDepositStats, writer.uint32(130).fork()).ldelim();
        }
        for (const v of message.extendedPair) {
            lend_1.ExtendedPair.encode(v, writer.uint32(138).fork()).ldelim();
        }
        for (const v of message.assetRatesStats) {
            lend_1.AssetRatesStats.encode(v, writer.uint32(146).fork()).ldelim();
        }
        for (const v of message.auctionParams) {
            lend_1.AuctionParams.encode(v, writer.uint32(154).fork()).ldelim();
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(162).fork()).ldelim();
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
                    message.userBorrowIdMapping.push(lend_1.UserBorrowIdMapping.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.borrowIdByOwnerAndPoolMapping.push(lend_1.BorrowIdByOwnerAndPoolMapping.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.borrowMapping = lend_1.BorrowMapping.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.lendAsset.push(lend_1.LendAsset.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.pool.push(lend_1.Pool.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.assetToPairMapping.push(lend_1.AssetToPairMapping.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.userLendIdMapping.push(lend_1.UserLendIdMapping.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.lendIdByOwnerAndPoolMapping.push(lend_1.LendIdByOwnerAndPoolMapping.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.lendIdToBorrowIdMapping.push(lend_1.LendIdToBorrowIdMapping.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.assetStats.push(lend_1.AssetStats.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.lendMapping = lend_1.LendMapping.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.userDepositStats = lend_1.DepositStats.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.reserveDepositStats = lend_1.DepositStats.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.buyBackDepositStats = lend_1.DepositStats.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.borrowDepositStats = lend_1.DepositStats.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.extendedPair.push(lend_1.ExtendedPair.decode(reader, reader.uint32()));
                    break;
                case 18:
                    message.assetRatesStats.push(lend_1.AssetRatesStats.decode(reader, reader.uint32()));
                    break;
                case 19:
                    message.auctionParams.push(lend_1.AuctionParams.decode(reader, reader.uint32()));
                    break;
                case 20:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
            userBorrowIdMapping: Array.isArray(object === null || object === void 0 ? void 0 : object.userBorrowIdMapping)
                ? object.userBorrowIdMapping.map((e) => lend_1.UserBorrowIdMapping.fromJSON(e))
                : [],
            borrowIdByOwnerAndPoolMapping: Array.isArray(object === null || object === void 0 ? void 0 : object.borrowIdByOwnerAndPoolMapping)
                ? object.borrowIdByOwnerAndPoolMapping.map((e) => lend_1.BorrowIdByOwnerAndPoolMapping.fromJSON(e))
                : [],
            borrowMapping: isSet(object.borrowMapping)
                ? lend_1.BorrowMapping.fromJSON(object.borrowMapping)
                : undefined,
            lendAsset: Array.isArray(object === null || object === void 0 ? void 0 : object.lendAsset)
                ? object.lendAsset.map((e) => lend_1.LendAsset.fromJSON(e))
                : [],
            pool: Array.isArray(object === null || object === void 0 ? void 0 : object.pool)
                ? object.pool.map((e) => lend_1.Pool.fromJSON(e))
                : [],
            assetToPairMapping: Array.isArray(object === null || object === void 0 ? void 0 : object.assetToPairMapping)
                ? object.assetToPairMapping.map((e) => lend_1.AssetToPairMapping.fromJSON(e))
                : [],
            userLendIdMapping: Array.isArray(object === null || object === void 0 ? void 0 : object.userLendIdMapping)
                ? object.userLendIdMapping.map((e) => lend_1.UserLendIdMapping.fromJSON(e))
                : [],
            lendIdByOwnerAndPoolMapping: Array.isArray(object === null || object === void 0 ? void 0 : object.lendIdByOwnerAndPoolMapping)
                ? object.lendIdByOwnerAndPoolMapping.map((e) => lend_1.LendIdByOwnerAndPoolMapping.fromJSON(e))
                : [],
            lendIdToBorrowIdMapping: Array.isArray(object === null || object === void 0 ? void 0 : object.lendIdToBorrowIdMapping)
                ? object.lendIdToBorrowIdMapping.map((e) => lend_1.LendIdToBorrowIdMapping.fromJSON(e))
                : [],
            assetStats: Array.isArray(object === null || object === void 0 ? void 0 : object.assetStats)
                ? object.assetStats.map((e) => lend_1.AssetStats.fromJSON(e))
                : [],
            lendMapping: isSet(object.lendMapping)
                ? lend_1.LendMapping.fromJSON(object.lendMapping)
                : undefined,
            userDepositStats: isSet(object.userDepositStats)
                ? lend_1.DepositStats.fromJSON(object.userDepositStats)
                : undefined,
            reserveDepositStats: isSet(object.reserveDepositStats)
                ? lend_1.DepositStats.fromJSON(object.reserveDepositStats)
                : undefined,
            buyBackDepositStats: isSet(object.buyBackDepositStats)
                ? lend_1.DepositStats.fromJSON(object.buyBackDepositStats)
                : undefined,
            borrowDepositStats: isSet(object.borrowDepositStats)
                ? lend_1.DepositStats.fromJSON(object.borrowDepositStats)
                : undefined,
            extendedPair: Array.isArray(object === null || object === void 0 ? void 0 : object.extendedPair)
                ? object.extendedPair.map((e) => lend_1.ExtendedPair.fromJSON(e))
                : [],
            assetRatesStats: Array.isArray(object === null || object === void 0 ? void 0 : object.assetRatesStats)
                ? object.assetRatesStats.map((e) => lend_1.AssetRatesStats.fromJSON(e))
                : [],
            auctionParams: Array.isArray(object === null || object === void 0 ? void 0 : object.auctionParams)
                ? object.auctionParams.map((e) => lend_1.AuctionParams.fromJSON(e))
                : [],
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
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
        if (message.userBorrowIdMapping) {
            obj.userBorrowIdMapping = message.userBorrowIdMapping.map((e) => e ? lend_1.UserBorrowIdMapping.toJSON(e) : undefined);
        }
        else {
            obj.userBorrowIdMapping = [];
        }
        if (message.borrowIdByOwnerAndPoolMapping) {
            obj.borrowIdByOwnerAndPoolMapping =
                message.borrowIdByOwnerAndPoolMapping.map((e) => e ? lend_1.BorrowIdByOwnerAndPoolMapping.toJSON(e) : undefined);
        }
        else {
            obj.borrowIdByOwnerAndPoolMapping = [];
        }
        message.borrowMapping !== undefined &&
            (obj.borrowMapping = message.borrowMapping
                ? lend_1.BorrowMapping.toJSON(message.borrowMapping)
                : undefined);
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
        if (message.userLendIdMapping) {
            obj.userLendIdMapping = message.userLendIdMapping.map((e) => e ? lend_1.UserLendIdMapping.toJSON(e) : undefined);
        }
        else {
            obj.userLendIdMapping = [];
        }
        if (message.lendIdByOwnerAndPoolMapping) {
            obj.lendIdByOwnerAndPoolMapping = message.lendIdByOwnerAndPoolMapping.map((e) => (e ? lend_1.LendIdByOwnerAndPoolMapping.toJSON(e) : undefined));
        }
        else {
            obj.lendIdByOwnerAndPoolMapping = [];
        }
        if (message.lendIdToBorrowIdMapping) {
            obj.lendIdToBorrowIdMapping = message.lendIdToBorrowIdMapping.map((e) => e ? lend_1.LendIdToBorrowIdMapping.toJSON(e) : undefined);
        }
        else {
            obj.lendIdToBorrowIdMapping = [];
        }
        if (message.assetStats) {
            obj.assetStats = message.assetStats.map((e) => e ? lend_1.AssetStats.toJSON(e) : undefined);
        }
        else {
            obj.assetStats = [];
        }
        message.lendMapping !== undefined &&
            (obj.lendMapping = message.lendMapping
                ? lend_1.LendMapping.toJSON(message.lendMapping)
                : undefined);
        message.userDepositStats !== undefined &&
            (obj.userDepositStats = message.userDepositStats
                ? lend_1.DepositStats.toJSON(message.userDepositStats)
                : undefined);
        message.reserveDepositStats !== undefined &&
            (obj.reserveDepositStats = message.reserveDepositStats
                ? lend_1.DepositStats.toJSON(message.reserveDepositStats)
                : undefined);
        message.buyBackDepositStats !== undefined &&
            (obj.buyBackDepositStats = message.buyBackDepositStats
                ? lend_1.DepositStats.toJSON(message.buyBackDepositStats)
                : undefined);
        message.borrowDepositStats !== undefined &&
            (obj.borrowDepositStats = message.borrowDepositStats
                ? lend_1.DepositStats.toJSON(message.borrowDepositStats)
                : undefined);
        if (message.extendedPair) {
            obj.extendedPair = message.extendedPair.map((e) => e ? lend_1.ExtendedPair.toJSON(e) : undefined);
        }
        else {
            obj.extendedPair = [];
        }
        if (message.assetRatesStats) {
            obj.assetRatesStats = message.assetRatesStats.map((e) => e ? lend_1.AssetRatesStats.toJSON(e) : undefined);
        }
        else {
            obj.assetRatesStats = [];
        }
        if (message.auctionParams) {
            obj.auctionParams = message.auctionParams.map((e) => e ? lend_1.AuctionParams.toJSON(e) : undefined);
        }
        else {
            obj.auctionParams = [];
        }
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = createBaseGenesisState();
        message.borrowAsset =
            ((_a = object.borrowAsset) === null || _a === void 0 ? void 0 : _a.map((e) => lend_1.BorrowAsset.fromPartial(e))) || [];
        message.userBorrowIdMapping =
            ((_b = object.userBorrowIdMapping) === null || _b === void 0 ? void 0 : _b.map((e) => lend_1.UserBorrowIdMapping.fromPartial(e))) || [];
        message.borrowIdByOwnerAndPoolMapping =
            ((_c = object.borrowIdByOwnerAndPoolMapping) === null || _c === void 0 ? void 0 : _c.map((e) => lend_1.BorrowIdByOwnerAndPoolMapping.fromPartial(e))) || [];
        message.borrowMapping =
            object.borrowMapping !== undefined && object.borrowMapping !== null
                ? lend_1.BorrowMapping.fromPartial(object.borrowMapping)
                : undefined;
        message.lendAsset =
            ((_d = object.lendAsset) === null || _d === void 0 ? void 0 : _d.map((e) => lend_1.LendAsset.fromPartial(e))) || [];
        message.pool = ((_e = object.pool) === null || _e === void 0 ? void 0 : _e.map((e) => lend_1.Pool.fromPartial(e))) || [];
        message.assetToPairMapping =
            ((_f = object.assetToPairMapping) === null || _f === void 0 ? void 0 : _f.map((e) => lend_1.AssetToPairMapping.fromPartial(e))) || [];
        message.userLendIdMapping =
            ((_g = object.userLendIdMapping) === null || _g === void 0 ? void 0 : _g.map((e) => lend_1.UserLendIdMapping.fromPartial(e))) ||
                [];
        message.lendIdByOwnerAndPoolMapping =
            ((_h = object.lendIdByOwnerAndPoolMapping) === null || _h === void 0 ? void 0 : _h.map((e) => lend_1.LendIdByOwnerAndPoolMapping.fromPartial(e))) || [];
        message.lendIdToBorrowIdMapping =
            ((_j = object.lendIdToBorrowIdMapping) === null || _j === void 0 ? void 0 : _j.map((e) => lend_1.LendIdToBorrowIdMapping.fromPartial(e))) || [];
        message.assetStats =
            ((_k = object.assetStats) === null || _k === void 0 ? void 0 : _k.map((e) => lend_1.AssetStats.fromPartial(e))) || [];
        message.lendMapping =
            object.lendMapping !== undefined && object.lendMapping !== null
                ? lend_1.LendMapping.fromPartial(object.lendMapping)
                : undefined;
        message.userDepositStats =
            object.userDepositStats !== undefined && object.userDepositStats !== null
                ? lend_1.DepositStats.fromPartial(object.userDepositStats)
                : undefined;
        message.reserveDepositStats =
            object.reserveDepositStats !== undefined &&
                object.reserveDepositStats !== null
                ? lend_1.DepositStats.fromPartial(object.reserveDepositStats)
                : undefined;
        message.buyBackDepositStats =
            object.buyBackDepositStats !== undefined &&
                object.buyBackDepositStats !== null
                ? lend_1.DepositStats.fromPartial(object.buyBackDepositStats)
                : undefined;
        message.borrowDepositStats =
            object.borrowDepositStats !== undefined &&
                object.borrowDepositStats !== null
                ? lend_1.DepositStats.fromPartial(object.borrowDepositStats)
                : undefined;
        message.extendedPair =
            ((_l = object.extendedPair) === null || _l === void 0 ? void 0 : _l.map((e) => lend_1.ExtendedPair.fromPartial(e))) || [];
        message.assetRatesStats =
            ((_m = object.assetRatesStats) === null || _m === void 0 ? void 0 : _m.map((e) => lend_1.AssetRatesStats.fromPartial(e))) || [];
        message.auctionParams =
            ((_o = object.auctionParams) === null || _o === void 0 ? void 0 : _o.map((e) => lend_1.AuctionParams.fromPartial(e))) || [];
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
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