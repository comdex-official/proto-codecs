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
exports.EModePairs = exports.EModePairsForProposal = exports.IndividualPoolDepreciate = exports.PoolDepreciate = exports.AssetRatesPoolPairs = exports.PoolInterestB = exports.PoolInterestDataB = exports.PoolInterest = exports.PoolInterestData = exports.PoolPairs = exports.AssetToPairSingleMapping = exports.AllReserveStats = exports.FundReserveBal = exports.FundModBal = exports.ReserveBal = exports.ModBal = exports.ModuleBalanceStats = exports.ModuleBalance = exports.LendRewardsTracker = exports.BorrowInterestTracker = exports.AuctionParams = exports.ReserveBuybackAssetData = exports.AssetRatesParams = exports.PoolAssetLBMapping = exports.AssetToPairMapping = exports.ExtendedPair = exports.AssetDataPoolMapping = exports.UserAssetLendBorrowMapping = exports.Pool = exports.BorrowAsset = exports.LendAsset = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.lend.v1beta1";
function createBaseLendAsset() {
    return {
        lendingId: long_1.default.UZERO,
        assetId: long_1.default.UZERO,
        poolId: long_1.default.UZERO,
        owner: "",
        amountIn: undefined,
        lendingTime: undefined,
        availableToBorrow: "",
        appId: long_1.default.UZERO,
        globalIndex: "",
        lastInteractionTime: undefined,
        cpoolName: "",
        totalRewards: "",
    };
}
exports.LendAsset = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.lendingId.isZero()) {
            writer.uint32(8).uint64(message.lendingId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(24).uint64(message.poolId);
        }
        if (message.owner !== "") {
            writer.uint32(34).string(message.owner);
        }
        if (message.amountIn !== undefined) {
            coin_1.Coin.encode(message.amountIn, writer.uint32(42).fork()).ldelim();
        }
        if (message.lendingTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lendingTime), writer.uint32(50).fork()).ldelim();
        }
        if (message.availableToBorrow !== "") {
            writer.uint32(58).string(message.availableToBorrow);
        }
        if (!message.appId.isZero()) {
            writer.uint32(64).uint64(message.appId);
        }
        if (message.globalIndex !== "") {
            writer.uint32(74).string(message.globalIndex);
        }
        if (message.lastInteractionTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastInteractionTime), writer.uint32(82).fork()).ldelim();
        }
        if (message.cpoolName !== "") {
            writer.uint32(90).string(message.cpoolName);
        }
        if (message.totalRewards !== "") {
            writer.uint32(98).string(message.totalRewards);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLendAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lendingId = reader.uint64();
                    break;
                case 2:
                    message.assetId = reader.uint64();
                    break;
                case 3:
                    message.poolId = reader.uint64();
                    break;
                case 4:
                    message.owner = reader.string();
                    break;
                case 5:
                    message.amountIn = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.lendingTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.availableToBorrow = reader.string();
                    break;
                case 8:
                    message.appId = reader.uint64();
                    break;
                case 9:
                    message.globalIndex = reader.string();
                    break;
                case 10:
                    message.lastInteractionTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.cpoolName = reader.string();
                    break;
                case 12:
                    message.totalRewards = reader.string();
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
            lendingId: isSet(object.lendingId)
                ? long_1.default.fromValue(object.lendingId)
                : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            owner: isSet(object.owner) ? String(object.owner) : "",
            amountIn: isSet(object.amountIn)
                ? coin_1.Coin.fromJSON(object.amountIn)
                : undefined,
            lendingTime: isSet(object.lendingTime)
                ? fromJsonTimestamp(object.lendingTime)
                : undefined,
            availableToBorrow: isSet(object.availableToBorrow)
                ? String(object.availableToBorrow)
                : "",
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            globalIndex: isSet(object.globalIndex) ? String(object.globalIndex) : "",
            lastInteractionTime: isSet(object.lastInteractionTime)
                ? fromJsonTimestamp(object.lastInteractionTime)
                : undefined,
            cpoolName: isSet(object.cpoolName) ? String(object.cpoolName) : "",
            totalRewards: isSet(object.totalRewards)
                ? String(object.totalRewards)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.lendingId !== undefined &&
            (obj.lendingId = (message.lendingId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.amountIn !== undefined &&
            (obj.amountIn = message.amountIn
                ? coin_1.Coin.toJSON(message.amountIn)
                : undefined);
        message.lendingTime !== undefined &&
            (obj.lendingTime = message.lendingTime.toISOString());
        message.availableToBorrow !== undefined &&
            (obj.availableToBorrow = message.availableToBorrow);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.globalIndex !== undefined &&
            (obj.globalIndex = message.globalIndex);
        message.lastInteractionTime !== undefined &&
            (obj.lastInteractionTime = message.lastInteractionTime.toISOString());
        message.cpoolName !== undefined && (obj.cpoolName = message.cpoolName);
        message.totalRewards !== undefined &&
            (obj.totalRewards = message.totalRewards);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseLendAsset();
        message.lendingId =
            object.lendingId !== undefined && object.lendingId !== null
                ? long_1.default.fromValue(object.lendingId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.amountIn =
            object.amountIn !== undefined && object.amountIn !== null
                ? coin_1.Coin.fromPartial(object.amountIn)
                : undefined;
        message.lendingTime = (_b = object.lendingTime) !== null && _b !== void 0 ? _b : undefined;
        message.availableToBorrow = (_c = object.availableToBorrow) !== null && _c !== void 0 ? _c : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.globalIndex = (_d = object.globalIndex) !== null && _d !== void 0 ? _d : "";
        message.lastInteractionTime = (_e = object.lastInteractionTime) !== null && _e !== void 0 ? _e : undefined;
        message.cpoolName = (_f = object.cpoolName) !== null && _f !== void 0 ? _f : "";
        message.totalRewards = (_g = object.totalRewards) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseBorrowAsset() {
    return {
        borrowingId: long_1.default.UZERO,
        lendingId: long_1.default.UZERO,
        isStableBorrow: false,
        pairId: long_1.default.UZERO,
        amountIn: undefined,
        amountOut: undefined,
        bridgedAssetAmount: undefined,
        borrowingTime: undefined,
        stableBorrowRate: "",
        interestAccumulated: "",
        globalIndex: "",
        reserveGlobalIndex: "",
        lastInteractionTime: undefined,
        cpoolName: "",
        isLiquidated: false,
    };
}
exports.BorrowAsset = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.borrowingId.isZero()) {
            writer.uint32(8).uint64(message.borrowingId);
        }
        if (!message.lendingId.isZero()) {
            writer.uint32(16).uint64(message.lendingId);
        }
        if (message.isStableBorrow === true) {
            writer.uint32(24).bool(message.isStableBorrow);
        }
        if (!message.pairId.isZero()) {
            writer.uint32(32).uint64(message.pairId);
        }
        if (message.amountIn !== undefined) {
            coin_1.Coin.encode(message.amountIn, writer.uint32(42).fork()).ldelim();
        }
        if (message.amountOut !== undefined) {
            coin_1.Coin.encode(message.amountOut, writer.uint32(50).fork()).ldelim();
        }
        if (message.bridgedAssetAmount !== undefined) {
            coin_1.Coin.encode(message.bridgedAssetAmount, writer.uint32(58).fork()).ldelim();
        }
        if (message.borrowingTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.borrowingTime), writer.uint32(66).fork()).ldelim();
        }
        if (message.stableBorrowRate !== "") {
            writer.uint32(74).string(message.stableBorrowRate);
        }
        if (message.interestAccumulated !== "") {
            writer.uint32(82).string(message.interestAccumulated);
        }
        if (message.globalIndex !== "") {
            writer.uint32(90).string(message.globalIndex);
        }
        if (message.reserveGlobalIndex !== "") {
            writer.uint32(98).string(message.reserveGlobalIndex);
        }
        if (message.lastInteractionTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastInteractionTime), writer.uint32(106).fork()).ldelim();
        }
        if (message.cpoolName !== "") {
            writer.uint32(114).string(message.cpoolName);
        }
        if (message.isLiquidated === true) {
            writer.uint32(120).bool(message.isLiquidated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBorrowAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrowingId = reader.uint64();
                    break;
                case 2:
                    message.lendingId = reader.uint64();
                    break;
                case 3:
                    message.isStableBorrow = reader.bool();
                    break;
                case 4:
                    message.pairId = reader.uint64();
                    break;
                case 5:
                    message.amountIn = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.amountOut = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.bridgedAssetAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.borrowingTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.stableBorrowRate = reader.string();
                    break;
                case 10:
                    message.interestAccumulated = reader.string();
                    break;
                case 11:
                    message.globalIndex = reader.string();
                    break;
                case 12:
                    message.reserveGlobalIndex = reader.string();
                    break;
                case 13:
                    message.lastInteractionTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.cpoolName = reader.string();
                    break;
                case 15:
                    message.isLiquidated = reader.bool();
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
            borrowingId: isSet(object.borrowingId)
                ? long_1.default.fromValue(object.borrowingId)
                : long_1.default.UZERO,
            lendingId: isSet(object.lendingId)
                ? long_1.default.fromValue(object.lendingId)
                : long_1.default.UZERO,
            isStableBorrow: isSet(object.isStableBorrow)
                ? Boolean(object.isStableBorrow)
                : false,
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            amountIn: isSet(object.amountIn)
                ? coin_1.Coin.fromJSON(object.amountIn)
                : undefined,
            amountOut: isSet(object.amountOut)
                ? coin_1.Coin.fromJSON(object.amountOut)
                : undefined,
            bridgedAssetAmount: isSet(object.bridgedAssetAmount)
                ? coin_1.Coin.fromJSON(object.bridgedAssetAmount)
                : undefined,
            borrowingTime: isSet(object.borrowingTime)
                ? fromJsonTimestamp(object.borrowingTime)
                : undefined,
            stableBorrowRate: isSet(object.stableBorrowRate)
                ? String(object.stableBorrowRate)
                : "",
            interestAccumulated: isSet(object.interestAccumulated)
                ? String(object.interestAccumulated)
                : "",
            globalIndex: isSet(object.globalIndex) ? String(object.globalIndex) : "",
            reserveGlobalIndex: isSet(object.reserveGlobalIndex)
                ? String(object.reserveGlobalIndex)
                : "",
            lastInteractionTime: isSet(object.lastInteractionTime)
                ? fromJsonTimestamp(object.lastInteractionTime)
                : undefined,
            cpoolName: isSet(object.cpoolName) ? String(object.cpoolName) : "",
            isLiquidated: isSet(object.isLiquidated)
                ? Boolean(object.isLiquidated)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.borrowingId !== undefined &&
            (obj.borrowingId = (message.borrowingId || long_1.default.UZERO).toString());
        message.lendingId !== undefined &&
            (obj.lendingId = (message.lendingId || long_1.default.UZERO).toString());
        message.isStableBorrow !== undefined &&
            (obj.isStableBorrow = message.isStableBorrow);
        message.pairId !== undefined &&
            (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.amountIn !== undefined &&
            (obj.amountIn = message.amountIn
                ? coin_1.Coin.toJSON(message.amountIn)
                : undefined);
        message.amountOut !== undefined &&
            (obj.amountOut = message.amountOut
                ? coin_1.Coin.toJSON(message.amountOut)
                : undefined);
        message.bridgedAssetAmount !== undefined &&
            (obj.bridgedAssetAmount = message.bridgedAssetAmount
                ? coin_1.Coin.toJSON(message.bridgedAssetAmount)
                : undefined);
        message.borrowingTime !== undefined &&
            (obj.borrowingTime = message.borrowingTime.toISOString());
        message.stableBorrowRate !== undefined &&
            (obj.stableBorrowRate = message.stableBorrowRate);
        message.interestAccumulated !== undefined &&
            (obj.interestAccumulated = message.interestAccumulated);
        message.globalIndex !== undefined &&
            (obj.globalIndex = message.globalIndex);
        message.reserveGlobalIndex !== undefined &&
            (obj.reserveGlobalIndex = message.reserveGlobalIndex);
        message.lastInteractionTime !== undefined &&
            (obj.lastInteractionTime = message.lastInteractionTime.toISOString());
        message.cpoolName !== undefined && (obj.cpoolName = message.cpoolName);
        message.isLiquidated !== undefined &&
            (obj.isLiquidated = message.isLiquidated);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseBorrowAsset();
        message.borrowingId =
            object.borrowingId !== undefined && object.borrowingId !== null
                ? long_1.default.fromValue(object.borrowingId)
                : long_1.default.UZERO;
        message.lendingId =
            object.lendingId !== undefined && object.lendingId !== null
                ? long_1.default.fromValue(object.lendingId)
                : long_1.default.UZERO;
        message.isStableBorrow = (_a = object.isStableBorrow) !== null && _a !== void 0 ? _a : false;
        message.pairId =
            object.pairId !== undefined && object.pairId !== null
                ? long_1.default.fromValue(object.pairId)
                : long_1.default.UZERO;
        message.amountIn =
            object.amountIn !== undefined && object.amountIn !== null
                ? coin_1.Coin.fromPartial(object.amountIn)
                : undefined;
        message.amountOut =
            object.amountOut !== undefined && object.amountOut !== null
                ? coin_1.Coin.fromPartial(object.amountOut)
                : undefined;
        message.bridgedAssetAmount =
            object.bridgedAssetAmount !== undefined &&
                object.bridgedAssetAmount !== null
                ? coin_1.Coin.fromPartial(object.bridgedAssetAmount)
                : undefined;
        message.borrowingTime = (_b = object.borrowingTime) !== null && _b !== void 0 ? _b : undefined;
        message.stableBorrowRate = (_c = object.stableBorrowRate) !== null && _c !== void 0 ? _c : "";
        message.interestAccumulated = (_d = object.interestAccumulated) !== null && _d !== void 0 ? _d : "";
        message.globalIndex = (_e = object.globalIndex) !== null && _e !== void 0 ? _e : "";
        message.reserveGlobalIndex = (_f = object.reserveGlobalIndex) !== null && _f !== void 0 ? _f : "";
        message.lastInteractionTime = (_g = object.lastInteractionTime) !== null && _g !== void 0 ? _g : undefined;
        message.cpoolName = (_h = object.cpoolName) !== null && _h !== void 0 ? _h : "";
        message.isLiquidated = (_j = object.isLiquidated) !== null && _j !== void 0 ? _j : false;
        return message;
    },
};
function createBasePool() {
    return { poolId: long_1.default.UZERO, moduleName: "", cpoolName: "", assetData: [] };
}
exports.Pool = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.moduleName !== "") {
            writer.uint32(18).string(message.moduleName);
        }
        if (message.cpoolName !== "") {
            writer.uint32(26).string(message.cpoolName);
        }
        for (const v of message.assetData) {
            exports.AssetDataPoolMapping.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.moduleName = reader.string();
                    break;
                case 3:
                    message.cpoolName = reader.string();
                    break;
                case 4:
                    message.assetData.push(exports.AssetDataPoolMapping.decode(reader, reader.uint32()));
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
            cpoolName: isSet(object.cpoolName) ? String(object.cpoolName) : "",
            assetData: Array.isArray(object === null || object === void 0 ? void 0 : object.assetData)
                ? object.assetData.map((e) => exports.AssetDataPoolMapping.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.moduleName !== undefined && (obj.moduleName = message.moduleName);
        message.cpoolName !== undefined && (obj.cpoolName = message.cpoolName);
        if (message.assetData) {
            obj.assetData = message.assetData.map((e) => e ? exports.AssetDataPoolMapping.toJSON(e) : undefined);
        }
        else {
            obj.assetData = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePool();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.moduleName = (_a = object.moduleName) !== null && _a !== void 0 ? _a : "";
        message.cpoolName = (_b = object.cpoolName) !== null && _b !== void 0 ? _b : "";
        message.assetData =
            ((_c = object.assetData) === null || _c === void 0 ? void 0 : _c.map((e) => exports.AssetDataPoolMapping.fromPartial(e))) || [];
        return message;
    },
};
function createBaseUserAssetLendBorrowMapping() {
    return { owner: "", lendId: long_1.default.UZERO, poolId: long_1.default.UZERO, borrowId: [] };
}
exports.UserAssetLendBorrowMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (!message.lendId.isZero()) {
            writer.uint32(16).uint64(message.lendId);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(24).uint64(message.poolId);
        }
        writer.uint32(34).fork();
        for (const v of message.borrowId) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserAssetLendBorrowMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.lendId = reader.uint64();
                    break;
                case 3:
                    message.poolId = reader.uint64();
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.borrowId.push(reader.uint64());
                        }
                    }
                    else {
                        message.borrowId.push(reader.uint64());
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            lendId: isSet(object.lendId) ? long_1.default.fromValue(object.lendId) : long_1.default.UZERO,
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            borrowId: Array.isArray(object === null || object === void 0 ? void 0 : object.borrowId)
                ? object.borrowId.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.lendId !== undefined &&
            (obj.lendId = (message.lendId || long_1.default.UZERO).toString());
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        if (message.borrowId) {
            obj.borrowId = message.borrowId.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.borrowId = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserAssetLendBorrowMapping();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.lendId =
            object.lendId !== undefined && object.lendId !== null
                ? long_1.default.fromValue(object.lendId)
                : long_1.default.UZERO;
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.borrowId = ((_b = object.borrowId) === null || _b === void 0 ? void 0 : _b.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseAssetDataPoolMapping() {
    return { assetId: long_1.default.UZERO, assetTransitType: long_1.default.UZERO, supplyCap: "" };
}
exports.AssetDataPoolMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (!message.assetTransitType.isZero()) {
            writer.uint32(16).uint64(message.assetTransitType);
        }
        if (message.supplyCap !== "") {
            writer.uint32(26).string(message.supplyCap);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetDataPoolMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint64();
                    break;
                case 2:
                    message.assetTransitType = reader.uint64();
                    break;
                case 3:
                    message.supplyCap = reader.string();
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
            assetTransitType: isSet(object.assetTransitType)
                ? long_1.default.fromValue(object.assetTransitType)
                : long_1.default.UZERO,
            supplyCap: isSet(object.supplyCap) ? String(object.supplyCap) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.assetTransitType !== undefined &&
            (obj.assetTransitType = (message.assetTransitType || long_1.default.UZERO).toString());
        message.supplyCap !== undefined && (obj.supplyCap = message.supplyCap);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAssetDataPoolMapping();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.assetTransitType =
            object.assetTransitType !== undefined && object.assetTransitType !== null
                ? long_1.default.fromValue(object.assetTransitType)
                : long_1.default.UZERO;
        message.supplyCap = (_a = object.supplyCap) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseExtendedPair() {
    return {
        id: long_1.default.UZERO,
        assetIn: long_1.default.UZERO,
        assetOut: long_1.default.UZERO,
        isInterPool: false,
        assetOutPoolId: long_1.default.UZERO,
        minUsdValueLeft: long_1.default.UZERO,
        isEModeEnabled: false,
    };
}
exports.ExtendedPair = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.assetIn.isZero()) {
            writer.uint32(16).uint64(message.assetIn);
        }
        if (!message.assetOut.isZero()) {
            writer.uint32(24).uint64(message.assetOut);
        }
        if (message.isInterPool === true) {
            writer.uint32(32).bool(message.isInterPool);
        }
        if (!message.assetOutPoolId.isZero()) {
            writer.uint32(40).uint64(message.assetOutPoolId);
        }
        if (!message.minUsdValueLeft.isZero()) {
            writer.uint32(48).uint64(message.minUsdValueLeft);
        }
        if (message.isEModeEnabled === true) {
            writer.uint32(56).bool(message.isEModeEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtendedPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.assetIn = reader.uint64();
                    break;
                case 3:
                    message.assetOut = reader.uint64();
                    break;
                case 4:
                    message.isInterPool = reader.bool();
                    break;
                case 5:
                    message.assetOutPoolId = reader.uint64();
                    break;
                case 6:
                    message.minUsdValueLeft = reader.uint64();
                    break;
                case 7:
                    message.isEModeEnabled = reader.bool();
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
            assetIn: isSet(object.assetIn)
                ? long_1.default.fromValue(object.assetIn)
                : long_1.default.UZERO,
            assetOut: isSet(object.assetOut)
                ? long_1.default.fromValue(object.assetOut)
                : long_1.default.UZERO,
            isInterPool: isSet(object.isInterPool)
                ? Boolean(object.isInterPool)
                : false,
            assetOutPoolId: isSet(object.assetOutPoolId)
                ? long_1.default.fromValue(object.assetOutPoolId)
                : long_1.default.UZERO,
            minUsdValueLeft: isSet(object.minUsdValueLeft)
                ? long_1.default.fromValue(object.minUsdValueLeft)
                : long_1.default.UZERO,
            isEModeEnabled: isSet(object.isEModeEnabled)
                ? Boolean(object.isEModeEnabled)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.assetIn !== undefined &&
            (obj.assetIn = (message.assetIn || long_1.default.UZERO).toString());
        message.assetOut !== undefined &&
            (obj.assetOut = (message.assetOut || long_1.default.UZERO).toString());
        message.isInterPool !== undefined &&
            (obj.isInterPool = message.isInterPool);
        message.assetOutPoolId !== undefined &&
            (obj.assetOutPoolId = (message.assetOutPoolId || long_1.default.UZERO).toString());
        message.minUsdValueLeft !== undefined &&
            (obj.minUsdValueLeft = (message.minUsdValueLeft || long_1.default.UZERO).toString());
        message.isEModeEnabled !== undefined &&
            (obj.isEModeEnabled = message.isEModeEnabled);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseExtendedPair();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.assetIn =
            object.assetIn !== undefined && object.assetIn !== null
                ? long_1.default.fromValue(object.assetIn)
                : long_1.default.UZERO;
        message.assetOut =
            object.assetOut !== undefined && object.assetOut !== null
                ? long_1.default.fromValue(object.assetOut)
                : long_1.default.UZERO;
        message.isInterPool = (_a = object.isInterPool) !== null && _a !== void 0 ? _a : false;
        message.assetOutPoolId =
            object.assetOutPoolId !== undefined && object.assetOutPoolId !== null
                ? long_1.default.fromValue(object.assetOutPoolId)
                : long_1.default.UZERO;
        message.minUsdValueLeft =
            object.minUsdValueLeft !== undefined && object.minUsdValueLeft !== null
                ? long_1.default.fromValue(object.minUsdValueLeft)
                : long_1.default.UZERO;
        message.isEModeEnabled = (_b = object.isEModeEnabled) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseAssetToPairMapping() {
    return { poolId: long_1.default.UZERO, assetId: long_1.default.UZERO, pairId: [] };
}
exports.AssetToPairMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        writer.uint32(26).fork();
        for (const v of message.pairId) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetToPairMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.assetId = reader.uint64();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.pairId.push(reader.uint64());
                        }
                    }
                    else {
                        message.pairId.push(reader.uint64());
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            pairId: Array.isArray(object === null || object === void 0 ? void 0 : object.pairId)
                ? object.pairId.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        if (message.pairId) {
            obj.pairId = message.pairId.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.pairId = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAssetToPairMapping();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.pairId = ((_a = object.pairId) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBasePoolAssetLBMapping() {
    return {
        poolId: long_1.default.UZERO,
        assetId: long_1.default.UZERO,
        lendIds: [],
        borrowIds: [],
        totalBorrowed: "",
        totalStableBorrowed: "",
        totalLend: "",
        totalInterestAccumulated: "",
        lendApr: "",
        borrowApr: "",
        stableBorrowApr: "",
        utilisationRatio: "",
    };
}
exports.PoolAssetLBMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        writer.uint32(26).fork();
        for (const v of message.lendIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        writer.uint32(34).fork();
        for (const v of message.borrowIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.totalBorrowed !== "") {
            writer.uint32(42).string(message.totalBorrowed);
        }
        if (message.totalStableBorrowed !== "") {
            writer.uint32(50).string(message.totalStableBorrowed);
        }
        if (message.totalLend !== "") {
            writer.uint32(58).string(message.totalLend);
        }
        if (message.totalInterestAccumulated !== "") {
            writer.uint32(66).string(message.totalInterestAccumulated);
        }
        if (message.lendApr !== "") {
            writer.uint32(74).string(message.lendApr);
        }
        if (message.borrowApr !== "") {
            writer.uint32(82).string(message.borrowApr);
        }
        if (message.stableBorrowApr !== "") {
            writer.uint32(90).string(message.stableBorrowApr);
        }
        if (message.utilisationRatio !== "") {
            writer.uint32(98).string(message.utilisationRatio);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolAssetLBMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.assetId = reader.uint64();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.lendIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.lendIds.push(reader.uint64());
                    }
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.borrowIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.borrowIds.push(reader.uint64());
                    }
                    break;
                case 5:
                    message.totalBorrowed = reader.string();
                    break;
                case 6:
                    message.totalStableBorrowed = reader.string();
                    break;
                case 7:
                    message.totalLend = reader.string();
                    break;
                case 8:
                    message.totalInterestAccumulated = reader.string();
                    break;
                case 9:
                    message.lendApr = reader.string();
                    break;
                case 10:
                    message.borrowApr = reader.string();
                    break;
                case 11:
                    message.stableBorrowApr = reader.string();
                    break;
                case 12:
                    message.utilisationRatio = reader.string();
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            lendIds: Array.isArray(object === null || object === void 0 ? void 0 : object.lendIds)
                ? object.lendIds.map((e) => long_1.default.fromValue(e))
                : [],
            borrowIds: Array.isArray(object === null || object === void 0 ? void 0 : object.borrowIds)
                ? object.borrowIds.map((e) => long_1.default.fromValue(e))
                : [],
            totalBorrowed: isSet(object.totalBorrowed)
                ? String(object.totalBorrowed)
                : "",
            totalStableBorrowed: isSet(object.totalStableBorrowed)
                ? String(object.totalStableBorrowed)
                : "",
            totalLend: isSet(object.totalLend) ? String(object.totalLend) : "",
            totalInterestAccumulated: isSet(object.totalInterestAccumulated)
                ? String(object.totalInterestAccumulated)
                : "",
            lendApr: isSet(object.lendApr) ? String(object.lendApr) : "",
            borrowApr: isSet(object.borrowApr) ? String(object.borrowApr) : "",
            stableBorrowApr: isSet(object.stableBorrowApr)
                ? String(object.stableBorrowApr)
                : "",
            utilisationRatio: isSet(object.utilisationRatio)
                ? String(object.utilisationRatio)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        if (message.lendIds) {
            obj.lendIds = message.lendIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.lendIds = [];
        }
        if (message.borrowIds) {
            obj.borrowIds = message.borrowIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.borrowIds = [];
        }
        message.totalBorrowed !== undefined &&
            (obj.totalBorrowed = message.totalBorrowed);
        message.totalStableBorrowed !== undefined &&
            (obj.totalStableBorrowed = message.totalStableBorrowed);
        message.totalLend !== undefined && (obj.totalLend = message.totalLend);
        message.totalInterestAccumulated !== undefined &&
            (obj.totalInterestAccumulated = message.totalInterestAccumulated);
        message.lendApr !== undefined && (obj.lendApr = message.lendApr);
        message.borrowApr !== undefined && (obj.borrowApr = message.borrowApr);
        message.stableBorrowApr !== undefined &&
            (obj.stableBorrowApr = message.stableBorrowApr);
        message.utilisationRatio !== undefined &&
            (obj.utilisationRatio = message.utilisationRatio);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBasePoolAssetLBMapping();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.lendIds = ((_a = object.lendIds) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        message.borrowIds = ((_b = object.borrowIds) === null || _b === void 0 ? void 0 : _b.map((e) => long_1.default.fromValue(e))) || [];
        message.totalBorrowed = (_c = object.totalBorrowed) !== null && _c !== void 0 ? _c : "";
        message.totalStableBorrowed = (_d = object.totalStableBorrowed) !== null && _d !== void 0 ? _d : "";
        message.totalLend = (_e = object.totalLend) !== null && _e !== void 0 ? _e : "";
        message.totalInterestAccumulated = (_f = object.totalInterestAccumulated) !== null && _f !== void 0 ? _f : "";
        message.lendApr = (_g = object.lendApr) !== null && _g !== void 0 ? _g : "";
        message.borrowApr = (_h = object.borrowApr) !== null && _h !== void 0 ? _h : "";
        message.stableBorrowApr = (_j = object.stableBorrowApr) !== null && _j !== void 0 ? _j : "";
        message.utilisationRatio = (_k = object.utilisationRatio) !== null && _k !== void 0 ? _k : "";
        return message;
    },
};
function createBaseAssetRatesParams() {
    return {
        assetId: long_1.default.UZERO,
        uOptimal: "",
        base: "",
        slope1: "",
        slope2: "",
        enableStableBorrow: false,
        stableBase: "",
        stableSlope1: "",
        stableSlope2: "",
        ltv: "",
        liquidationThreshold: "",
        liquidationPenalty: "",
        liquidationBonus: "",
        reserveFactor: "",
        cAssetId: long_1.default.UZERO,
        isIsolated: false,
        eLtv: "",
        eLiquidationThreshold: "",
        eLiquidationPenalty: "",
    };
}
exports.AssetRatesParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (message.uOptimal !== "") {
            writer.uint32(18).string(message.uOptimal);
        }
        if (message.base !== "") {
            writer.uint32(26).string(message.base);
        }
        if (message.slope1 !== "") {
            writer.uint32(34).string(message.slope1);
        }
        if (message.slope2 !== "") {
            writer.uint32(42).string(message.slope2);
        }
        if (message.enableStableBorrow === true) {
            writer.uint32(48).bool(message.enableStableBorrow);
        }
        if (message.stableBase !== "") {
            writer.uint32(58).string(message.stableBase);
        }
        if (message.stableSlope1 !== "") {
            writer.uint32(66).string(message.stableSlope1);
        }
        if (message.stableSlope2 !== "") {
            writer.uint32(74).string(message.stableSlope2);
        }
        if (message.ltv !== "") {
            writer.uint32(82).string(message.ltv);
        }
        if (message.liquidationThreshold !== "") {
            writer.uint32(90).string(message.liquidationThreshold);
        }
        if (message.liquidationPenalty !== "") {
            writer.uint32(98).string(message.liquidationPenalty);
        }
        if (message.liquidationBonus !== "") {
            writer.uint32(106).string(message.liquidationBonus);
        }
        if (message.reserveFactor !== "") {
            writer.uint32(114).string(message.reserveFactor);
        }
        if (!message.cAssetId.isZero()) {
            writer.uint32(120).uint64(message.cAssetId);
        }
        if (message.isIsolated === true) {
            writer.uint32(128).bool(message.isIsolated);
        }
        if (message.eLtv !== "") {
            writer.uint32(138).string(message.eLtv);
        }
        if (message.eLiquidationThreshold !== "") {
            writer.uint32(146).string(message.eLiquidationThreshold);
        }
        if (message.eLiquidationPenalty !== "") {
            writer.uint32(154).string(message.eLiquidationPenalty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetRatesParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint64();
                    break;
                case 2:
                    message.uOptimal = reader.string();
                    break;
                case 3:
                    message.base = reader.string();
                    break;
                case 4:
                    message.slope1 = reader.string();
                    break;
                case 5:
                    message.slope2 = reader.string();
                    break;
                case 6:
                    message.enableStableBorrow = reader.bool();
                    break;
                case 7:
                    message.stableBase = reader.string();
                    break;
                case 8:
                    message.stableSlope1 = reader.string();
                    break;
                case 9:
                    message.stableSlope2 = reader.string();
                    break;
                case 10:
                    message.ltv = reader.string();
                    break;
                case 11:
                    message.liquidationThreshold = reader.string();
                    break;
                case 12:
                    message.liquidationPenalty = reader.string();
                    break;
                case 13:
                    message.liquidationBonus = reader.string();
                    break;
                case 14:
                    message.reserveFactor = reader.string();
                    break;
                case 15:
                    message.cAssetId = reader.uint64();
                    break;
                case 16:
                    message.isIsolated = reader.bool();
                    break;
                case 17:
                    message.eLtv = reader.string();
                    break;
                case 18:
                    message.eLiquidationThreshold = reader.string();
                    break;
                case 19:
                    message.eLiquidationPenalty = reader.string();
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
            uOptimal: isSet(object.uOptimal) ? String(object.uOptimal) : "",
            base: isSet(object.base) ? String(object.base) : "",
            slope1: isSet(object.slope1) ? String(object.slope1) : "",
            slope2: isSet(object.slope2) ? String(object.slope2) : "",
            enableStableBorrow: isSet(object.enableStableBorrow)
                ? Boolean(object.enableStableBorrow)
                : false,
            stableBase: isSet(object.stableBase) ? String(object.stableBase) : "",
            stableSlope1: isSet(object.stableSlope1)
                ? String(object.stableSlope1)
                : "",
            stableSlope2: isSet(object.stableSlope2)
                ? String(object.stableSlope2)
                : "",
            ltv: isSet(object.ltv) ? String(object.ltv) : "",
            liquidationThreshold: isSet(object.liquidationThreshold)
                ? String(object.liquidationThreshold)
                : "",
            liquidationPenalty: isSet(object.liquidationPenalty)
                ? String(object.liquidationPenalty)
                : "",
            liquidationBonus: isSet(object.liquidationBonus)
                ? String(object.liquidationBonus)
                : "",
            reserveFactor: isSet(object.reserveFactor)
                ? String(object.reserveFactor)
                : "",
            cAssetId: isSet(object.cAssetId)
                ? long_1.default.fromValue(object.cAssetId)
                : long_1.default.UZERO,
            isIsolated: isSet(object.isIsolated) ? Boolean(object.isIsolated) : false,
            eLtv: isSet(object.eLtv) ? String(object.eLtv) : "",
            eLiquidationThreshold: isSet(object.eLiquidationThreshold)
                ? String(object.eLiquidationThreshold)
                : "",
            eLiquidationPenalty: isSet(object.eLiquidationPenalty)
                ? String(object.eLiquidationPenalty)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.uOptimal !== undefined && (obj.uOptimal = message.uOptimal);
        message.base !== undefined && (obj.base = message.base);
        message.slope1 !== undefined && (obj.slope1 = message.slope1);
        message.slope2 !== undefined && (obj.slope2 = message.slope2);
        message.enableStableBorrow !== undefined &&
            (obj.enableStableBorrow = message.enableStableBorrow);
        message.stableBase !== undefined && (obj.stableBase = message.stableBase);
        message.stableSlope1 !== undefined &&
            (obj.stableSlope1 = message.stableSlope1);
        message.stableSlope2 !== undefined &&
            (obj.stableSlope2 = message.stableSlope2);
        message.ltv !== undefined && (obj.ltv = message.ltv);
        message.liquidationThreshold !== undefined &&
            (obj.liquidationThreshold = message.liquidationThreshold);
        message.liquidationPenalty !== undefined &&
            (obj.liquidationPenalty = message.liquidationPenalty);
        message.liquidationBonus !== undefined &&
            (obj.liquidationBonus = message.liquidationBonus);
        message.reserveFactor !== undefined &&
            (obj.reserveFactor = message.reserveFactor);
        message.cAssetId !== undefined &&
            (obj.cAssetId = (message.cAssetId || long_1.default.UZERO).toString());
        message.isIsolated !== undefined && (obj.isIsolated = message.isIsolated);
        message.eLtv !== undefined && (obj.eLtv = message.eLtv);
        message.eLiquidationThreshold !== undefined &&
            (obj.eLiquidationThreshold = message.eLiquidationThreshold);
        message.eLiquidationPenalty !== undefined &&
            (obj.eLiquidationPenalty = message.eLiquidationPenalty);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        const message = createBaseAssetRatesParams();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.uOptimal = (_a = object.uOptimal) !== null && _a !== void 0 ? _a : "";
        message.base = (_b = object.base) !== null && _b !== void 0 ? _b : "";
        message.slope1 = (_c = object.slope1) !== null && _c !== void 0 ? _c : "";
        message.slope2 = (_d = object.slope2) !== null && _d !== void 0 ? _d : "";
        message.enableStableBorrow = (_e = object.enableStableBorrow) !== null && _e !== void 0 ? _e : false;
        message.stableBase = (_f = object.stableBase) !== null && _f !== void 0 ? _f : "";
        message.stableSlope1 = (_g = object.stableSlope1) !== null && _g !== void 0 ? _g : "";
        message.stableSlope2 = (_h = object.stableSlope2) !== null && _h !== void 0 ? _h : "";
        message.ltv = (_j = object.ltv) !== null && _j !== void 0 ? _j : "";
        message.liquidationThreshold = (_k = object.liquidationThreshold) !== null && _k !== void 0 ? _k : "";
        message.liquidationPenalty = (_l = object.liquidationPenalty) !== null && _l !== void 0 ? _l : "";
        message.liquidationBonus = (_m = object.liquidationBonus) !== null && _m !== void 0 ? _m : "";
        message.reserveFactor = (_o = object.reserveFactor) !== null && _o !== void 0 ? _o : "";
        message.cAssetId =
            object.cAssetId !== undefined && object.cAssetId !== null
                ? long_1.default.fromValue(object.cAssetId)
                : long_1.default.UZERO;
        message.isIsolated = (_p = object.isIsolated) !== null && _p !== void 0 ? _p : false;
        message.eLtv = (_q = object.eLtv) !== null && _q !== void 0 ? _q : "";
        message.eLiquidationThreshold = (_r = object.eLiquidationThreshold) !== null && _r !== void 0 ? _r : "";
        message.eLiquidationPenalty = (_s = object.eLiquidationPenalty) !== null && _s !== void 0 ? _s : "";
        return message;
    },
};
function createBaseReserveBuybackAssetData() {
    return { assetId: long_1.default.UZERO, reserveAmount: "", buybackAmount: "" };
}
exports.ReserveBuybackAssetData = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (message.reserveAmount !== "") {
            writer.uint32(18).string(message.reserveAmount);
        }
        if (message.buybackAmount !== "") {
            writer.uint32(26).string(message.buybackAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReserveBuybackAssetData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint64();
                    break;
                case 2:
                    message.reserveAmount = reader.string();
                    break;
                case 3:
                    message.buybackAmount = reader.string();
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
            reserveAmount: isSet(object.reserveAmount)
                ? String(object.reserveAmount)
                : "",
            buybackAmount: isSet(object.buybackAmount)
                ? String(object.buybackAmount)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.reserveAmount !== undefined &&
            (obj.reserveAmount = message.reserveAmount);
        message.buybackAmount !== undefined &&
            (obj.buybackAmount = message.buybackAmount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseReserveBuybackAssetData();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.reserveAmount = (_a = object.reserveAmount) !== null && _a !== void 0 ? _a : "";
        message.buybackAmount = (_b = object.buybackAmount) !== null && _b !== void 0 ? _b : "";
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
        if (!message.dutchId.isZero()) {
            writer.uint32(56).uint64(message.dutchId);
        }
        if (!message.bidDurationSeconds.isZero()) {
            writer.uint32(64).uint64(message.bidDurationSeconds);
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
                    message.dutchId = reader.uint64();
                    break;
                case 8:
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
function createBaseBorrowInterestTracker() {
    return { borrowingId: long_1.default.UZERO, reservePoolInterest: "" };
}
exports.BorrowInterestTracker = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.borrowingId.isZero()) {
            writer.uint32(8).uint64(message.borrowingId);
        }
        if (message.reservePoolInterest !== "") {
            writer.uint32(26).string(message.reservePoolInterest);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBorrowInterestTracker();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrowingId = reader.uint64();
                    break;
                case 3:
                    message.reservePoolInterest = reader.string();
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
            borrowingId: isSet(object.borrowingId)
                ? long_1.default.fromValue(object.borrowingId)
                : long_1.default.UZERO,
            reservePoolInterest: isSet(object.reservePoolInterest)
                ? String(object.reservePoolInterest)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.borrowingId !== undefined &&
            (obj.borrowingId = (message.borrowingId || long_1.default.UZERO).toString());
        message.reservePoolInterest !== undefined &&
            (obj.reservePoolInterest = message.reservePoolInterest);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBorrowInterestTracker();
        message.borrowingId =
            object.borrowingId !== undefined && object.borrowingId !== null
                ? long_1.default.fromValue(object.borrowingId)
                : long_1.default.UZERO;
        message.reservePoolInterest = (_a = object.reservePoolInterest) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseLendRewardsTracker() {
    return { lendingId: long_1.default.UZERO, rewardsAccumulated: "" };
}
exports.LendRewardsTracker = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.lendingId.isZero()) {
            writer.uint32(8).uint64(message.lendingId);
        }
        if (message.rewardsAccumulated !== "") {
            writer.uint32(18).string(message.rewardsAccumulated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLendRewardsTracker();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lendingId = reader.uint64();
                    break;
                case 2:
                    message.rewardsAccumulated = reader.string();
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
            lendingId: isSet(object.lendingId)
                ? long_1.default.fromValue(object.lendingId)
                : long_1.default.UZERO,
            rewardsAccumulated: isSet(object.rewardsAccumulated)
                ? String(object.rewardsAccumulated)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.lendingId !== undefined &&
            (obj.lendingId = (message.lendingId || long_1.default.UZERO).toString());
        message.rewardsAccumulated !== undefined &&
            (obj.rewardsAccumulated = message.rewardsAccumulated);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLendRewardsTracker();
        message.lendingId =
            object.lendingId !== undefined && object.lendingId !== null
                ? long_1.default.fromValue(object.lendingId)
                : long_1.default.UZERO;
        message.rewardsAccumulated = (_a = object.rewardsAccumulated) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseModuleBalance() {
    return { poolId: long_1.default.UZERO, moduleBalanceStats: [] };
}
exports.ModuleBalance = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        for (const v of message.moduleBalanceStats) {
            exports.ModuleBalanceStats.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleBalance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.moduleBalanceStats.push(exports.ModuleBalanceStats.decode(reader, reader.uint32()));
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            moduleBalanceStats: Array.isArray(object === null || object === void 0 ? void 0 : object.moduleBalanceStats)
                ? object.moduleBalanceStats.map((e) => exports.ModuleBalanceStats.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        if (message.moduleBalanceStats) {
            obj.moduleBalanceStats = message.moduleBalanceStats.map((e) => e ? exports.ModuleBalanceStats.toJSON(e) : undefined);
        }
        else {
            obj.moduleBalanceStats = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseModuleBalance();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.moduleBalanceStats =
            ((_a = object.moduleBalanceStats) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ModuleBalanceStats.fromPartial(e))) || [];
        return message;
    },
};
function createBaseModuleBalanceStats() {
    return { assetId: long_1.default.UZERO, balance: undefined };
}
exports.ModuleBalanceStats = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleBalanceStats();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint64();
                    break;
                case 2:
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
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
            balance: isSet(object.balance)
                ? coin_1.Coin.fromJSON(object.balance)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.balance !== undefined &&
            (obj.balance = message.balance
                ? coin_1.Coin.toJSON(message.balance)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleBalanceStats();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.balance =
            object.balance !== undefined && object.balance !== null
                ? coin_1.Coin.fromPartial(object.balance)
                : undefined;
        return message;
    },
};
function createBaseModBal() {
    return { fundModuleBalance: [] };
}
exports.ModBal = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.fundModuleBalance) {
            exports.FundModBal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModBal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fundModuleBalance.push(exports.FundModBal.decode(reader, reader.uint32()));
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
            fundModuleBalance: Array.isArray(object === null || object === void 0 ? void 0 : object.fundModuleBalance)
                ? object.fundModuleBalance.map((e) => exports.FundModBal.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fundModuleBalance) {
            obj.fundModuleBalance = message.fundModuleBalance.map((e) => e ? exports.FundModBal.toJSON(e) : undefined);
        }
        else {
            obj.fundModuleBalance = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseModBal();
        message.fundModuleBalance =
            ((_a = object.fundModuleBalance) === null || _a === void 0 ? void 0 : _a.map((e) => exports.FundModBal.fromPartial(e))) || [];
        return message;
    },
};
function createBaseReserveBal() {
    return { fundReserveBalance: [] };
}
exports.ReserveBal = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.fundReserveBalance) {
            exports.FundReserveBal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReserveBal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fundReserveBalance.push(exports.FundReserveBal.decode(reader, reader.uint32()));
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
            fundReserveBalance: Array.isArray(object === null || object === void 0 ? void 0 : object.fundReserveBalance)
                ? object.fundReserveBalance.map((e) => exports.FundReserveBal.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fundReserveBalance) {
            obj.fundReserveBalance = message.fundReserveBalance.map((e) => e ? exports.FundReserveBal.toJSON(e) : undefined);
        }
        else {
            obj.fundReserveBalance = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseReserveBal();
        message.fundReserveBalance =
            ((_a = object.fundReserveBalance) === null || _a === void 0 ? void 0 : _a.map((e) => exports.FundReserveBal.fromPartial(e))) ||
                [];
        return message;
    },
};
function createBaseFundModBal() {
    return {
        assetId: long_1.default.UZERO,
        poolId: long_1.default.UZERO,
        amountIn: undefined,
        depositTime: undefined,
        funder: "",
    };
}
exports.FundModBal = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.amountIn !== undefined) {
            coin_1.Coin.encode(message.amountIn, writer.uint32(26).fork()).ldelim();
        }
        if (message.depositTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.depositTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.funder !== "") {
            writer.uint32(42).string(message.funder);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFundModBal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint64();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.amountIn = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.depositTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.funder = reader.string();
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            amountIn: isSet(object.amountIn)
                ? coin_1.Coin.fromJSON(object.amountIn)
                : undefined,
            depositTime: isSet(object.depositTime)
                ? fromJsonTimestamp(object.depositTime)
                : undefined,
            funder: isSet(object.funder) ? String(object.funder) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.amountIn !== undefined &&
            (obj.amountIn = message.amountIn
                ? coin_1.Coin.toJSON(message.amountIn)
                : undefined);
        message.depositTime !== undefined &&
            (obj.depositTime = message.depositTime.toISOString());
        message.funder !== undefined && (obj.funder = message.funder);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFundModBal();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.amountIn =
            object.amountIn !== undefined && object.amountIn !== null
                ? coin_1.Coin.fromPartial(object.amountIn)
                : undefined;
        message.depositTime = (_a = object.depositTime) !== null && _a !== void 0 ? _a : undefined;
        message.funder = (_b = object.funder) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseFundReserveBal() {
    return {
        assetId: long_1.default.UZERO,
        amountIn: undefined,
        depositTime: undefined,
        funder: "",
    };
}
exports.FundReserveBal = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (message.amountIn !== undefined) {
            coin_1.Coin.encode(message.amountIn, writer.uint32(18).fork()).ldelim();
        }
        if (message.depositTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.depositTime), writer.uint32(26).fork()).ldelim();
        }
        if (message.funder !== "") {
            writer.uint32(34).string(message.funder);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFundReserveBal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint64();
                    break;
                case 2:
                    message.amountIn = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.depositTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.funder = reader.string();
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
            amountIn: isSet(object.amountIn)
                ? coin_1.Coin.fromJSON(object.amountIn)
                : undefined,
            depositTime: isSet(object.depositTime)
                ? fromJsonTimestamp(object.depositTime)
                : undefined,
            funder: isSet(object.funder) ? String(object.funder) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.amountIn !== undefined &&
            (obj.amountIn = message.amountIn
                ? coin_1.Coin.toJSON(message.amountIn)
                : undefined);
        message.depositTime !== undefined &&
            (obj.depositTime = message.depositTime.toISOString());
        message.funder !== undefined && (obj.funder = message.funder);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFundReserveBal();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.amountIn =
            object.amountIn !== undefined && object.amountIn !== null
                ? coin_1.Coin.fromPartial(object.amountIn)
                : undefined;
        message.depositTime = (_a = object.depositTime) !== null && _a !== void 0 ? _a : undefined;
        message.funder = (_b = object.funder) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseAllReserveStats() {
    return {
        assetId: long_1.default.UZERO,
        amountOutFromReserveToLenders: "",
        amountOutFromReserveForAuction: "",
        amountInFromLiqPenalty: "",
        amountInFromRepayments: "",
        totalAmountOutToLenders: "",
    };
}
exports.AllReserveStats = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (message.amountOutFromReserveToLenders !== "") {
            writer.uint32(18).string(message.amountOutFromReserveToLenders);
        }
        if (message.amountOutFromReserveForAuction !== "") {
            writer.uint32(26).string(message.amountOutFromReserveForAuction);
        }
        if (message.amountInFromLiqPenalty !== "") {
            writer.uint32(34).string(message.amountInFromLiqPenalty);
        }
        if (message.amountInFromRepayments !== "") {
            writer.uint32(42).string(message.amountInFromRepayments);
        }
        if (message.totalAmountOutToLenders !== "") {
            writer.uint32(50).string(message.totalAmountOutToLenders);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllReserveStats();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint64();
                    break;
                case 2:
                    message.amountOutFromReserveToLenders = reader.string();
                    break;
                case 3:
                    message.amountOutFromReserveForAuction = reader.string();
                    break;
                case 4:
                    message.amountInFromLiqPenalty = reader.string();
                    break;
                case 5:
                    message.amountInFromRepayments = reader.string();
                    break;
                case 6:
                    message.totalAmountOutToLenders = reader.string();
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
            amountOutFromReserveToLenders: isSet(object.amountOutFromReserveToLenders)
                ? String(object.amountOutFromReserveToLenders)
                : "",
            amountOutFromReserveForAuction: isSet(object.amountOutFromReserveForAuction)
                ? String(object.amountOutFromReserveForAuction)
                : "",
            amountInFromLiqPenalty: isSet(object.amountInFromLiqPenalty)
                ? String(object.amountInFromLiqPenalty)
                : "",
            amountInFromRepayments: isSet(object.amountInFromRepayments)
                ? String(object.amountInFromRepayments)
                : "",
            totalAmountOutToLenders: isSet(object.totalAmountOutToLenders)
                ? String(object.totalAmountOutToLenders)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.amountOutFromReserveToLenders !== undefined &&
            (obj.amountOutFromReserveToLenders =
                message.amountOutFromReserveToLenders);
        message.amountOutFromReserveForAuction !== undefined &&
            (obj.amountOutFromReserveForAuction =
                message.amountOutFromReserveForAuction);
        message.amountInFromLiqPenalty !== undefined &&
            (obj.amountInFromLiqPenalty = message.amountInFromLiqPenalty);
        message.amountInFromRepayments !== undefined &&
            (obj.amountInFromRepayments = message.amountInFromRepayments);
        message.totalAmountOutToLenders !== undefined &&
            (obj.totalAmountOutToLenders = message.totalAmountOutToLenders);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseAllReserveStats();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.amountOutFromReserveToLenders =
            (_a = object.amountOutFromReserveToLenders) !== null && _a !== void 0 ? _a : "";
        message.amountOutFromReserveForAuction =
            (_b = object.amountOutFromReserveForAuction) !== null && _b !== void 0 ? _b : "";
        message.amountInFromLiqPenalty = (_c = object.amountInFromLiqPenalty) !== null && _c !== void 0 ? _c : "";
        message.amountInFromRepayments = (_d = object.amountInFromRepayments) !== null && _d !== void 0 ? _d : "";
        message.totalAmountOutToLenders = (_e = object.totalAmountOutToLenders) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseAssetToPairSingleMapping() {
    return { poolId: long_1.default.UZERO, assetId: long_1.default.UZERO, pairId: long_1.default.UZERO };
}
exports.AssetToPairSingleMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        if (!message.pairId.isZero()) {
            writer.uint32(24).uint64(message.pairId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetToPairSingleMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.assetId = reader.uint64();
                    break;
                case 3:
                    message.pairId = reader.uint64();
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.pairId !== undefined &&
            (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAssetToPairSingleMapping();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.pairId =
            object.pairId !== undefined && object.pairId !== null
                ? long_1.default.fromValue(object.pairId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBasePoolPairs() {
    return {
        poolId: long_1.default.UZERO,
        moduleName: "",
        cpoolName: "",
        assetData: [],
        minUsdValueLeft: long_1.default.UZERO,
    };
}
exports.PoolPairs = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.moduleName !== "") {
            writer.uint32(18).string(message.moduleName);
        }
        if (message.cpoolName !== "") {
            writer.uint32(26).string(message.cpoolName);
        }
        for (const v of message.assetData) {
            exports.AssetDataPoolMapping.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (!message.minUsdValueLeft.isZero()) {
            writer.uint32(40).uint64(message.minUsdValueLeft);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolPairs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.moduleName = reader.string();
                    break;
                case 3:
                    message.cpoolName = reader.string();
                    break;
                case 4:
                    message.assetData.push(exports.AssetDataPoolMapping.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.minUsdValueLeft = reader.uint64();
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
            cpoolName: isSet(object.cpoolName) ? String(object.cpoolName) : "",
            assetData: Array.isArray(object === null || object === void 0 ? void 0 : object.assetData)
                ? object.assetData.map((e) => exports.AssetDataPoolMapping.fromJSON(e))
                : [],
            minUsdValueLeft: isSet(object.minUsdValueLeft)
                ? long_1.default.fromValue(object.minUsdValueLeft)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.moduleName !== undefined && (obj.moduleName = message.moduleName);
        message.cpoolName !== undefined && (obj.cpoolName = message.cpoolName);
        if (message.assetData) {
            obj.assetData = message.assetData.map((e) => e ? exports.AssetDataPoolMapping.toJSON(e) : undefined);
        }
        else {
            obj.assetData = [];
        }
        message.minUsdValueLeft !== undefined &&
            (obj.minUsdValueLeft = (message.minUsdValueLeft || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePoolPairs();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.moduleName = (_a = object.moduleName) !== null && _a !== void 0 ? _a : "";
        message.cpoolName = (_b = object.cpoolName) !== null && _b !== void 0 ? _b : "";
        message.assetData =
            ((_c = object.assetData) === null || _c === void 0 ? void 0 : _c.map((e) => exports.AssetDataPoolMapping.fromPartial(e))) || [];
        message.minUsdValueLeft =
            object.minUsdValueLeft !== undefined && object.minUsdValueLeft !== null
                ? long_1.default.fromValue(object.minUsdValueLeft)
                : long_1.default.UZERO;
        return message;
    },
};
function createBasePoolInterestData() {
    return { assetId: long_1.default.UZERO, lendInterest: "" };
}
exports.PoolInterestData = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (message.lendInterest !== "") {
            writer.uint32(18).string(message.lendInterest);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolInterestData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint64();
                    break;
                case 2:
                    message.lendInterest = reader.string();
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
            lendInterest: isSet(object.lendInterest)
                ? String(object.lendInterest)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.lendInterest !== undefined &&
            (obj.lendInterest = message.lendInterest);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePoolInterestData();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.lendInterest = (_a = object.lendInterest) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBasePoolInterest() {
    return { poolId: long_1.default.UZERO, poolInterestData: [] };
}
exports.PoolInterest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        for (const v of message.poolInterestData) {
            exports.PoolInterestData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolInterest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.poolInterestData.push(exports.PoolInterestData.decode(reader, reader.uint32()));
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            poolInterestData: Array.isArray(object === null || object === void 0 ? void 0 : object.poolInterestData)
                ? object.poolInterestData.map((e) => exports.PoolInterestData.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        if (message.poolInterestData) {
            obj.poolInterestData = message.poolInterestData.map((e) => e ? exports.PoolInterestData.toJSON(e) : undefined);
        }
        else {
            obj.poolInterestData = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePoolInterest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.poolInterestData =
            ((_a = object.poolInterestData) === null || _a === void 0 ? void 0 : _a.map((e) => exports.PoolInterestData.fromPartial(e))) ||
                [];
        return message;
    },
};
function createBasePoolInterestDataB() {
    return { assetId: long_1.default.UZERO, borrowInterest: "" };
}
exports.PoolInterestDataB = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (message.borrowInterest !== "") {
            writer.uint32(18).string(message.borrowInterest);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolInterestDataB();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint64();
                    break;
                case 2:
                    message.borrowInterest = reader.string();
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
            borrowInterest: isSet(object.borrowInterest)
                ? String(object.borrowInterest)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.borrowInterest !== undefined &&
            (obj.borrowInterest = message.borrowInterest);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePoolInterestDataB();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.borrowInterest = (_a = object.borrowInterest) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBasePoolInterestB() {
    return { poolId: long_1.default.UZERO, poolInterestData: [] };
}
exports.PoolInterestB = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        for (const v of message.poolInterestData) {
            exports.PoolInterestDataB.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolInterestB();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.poolInterestData.push(exports.PoolInterestDataB.decode(reader, reader.uint32()));
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            poolInterestData: Array.isArray(object === null || object === void 0 ? void 0 : object.poolInterestData)
                ? object.poolInterestData.map((e) => exports.PoolInterestDataB.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        if (message.poolInterestData) {
            obj.poolInterestData = message.poolInterestData.map((e) => e ? exports.PoolInterestDataB.toJSON(e) : undefined);
        }
        else {
            obj.poolInterestData = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePoolInterestB();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.poolInterestData =
            ((_a = object.poolInterestData) === null || _a === void 0 ? void 0 : _a.map((e) => exports.PoolInterestDataB.fromPartial(e))) ||
                [];
        return message;
    },
};
function createBaseAssetRatesPoolPairs() {
    return {
        assetId: long_1.default.UZERO,
        uOptimal: "",
        base: "",
        slope1: "",
        slope2: "",
        enableStableBorrow: false,
        stableBase: "",
        stableSlope1: "",
        stableSlope2: "",
        ltv: "",
        liquidationThreshold: "",
        liquidationPenalty: "",
        liquidationBonus: "",
        reserveFactor: "",
        cAssetId: long_1.default.UZERO,
        moduleName: "",
        cpoolName: "",
        assetData: [],
        minUsdValueLeft: long_1.default.UZERO,
        isIsolated: false,
    };
}
exports.AssetRatesPoolPairs = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (message.uOptimal !== "") {
            writer.uint32(18).string(message.uOptimal);
        }
        if (message.base !== "") {
            writer.uint32(26).string(message.base);
        }
        if (message.slope1 !== "") {
            writer.uint32(34).string(message.slope1);
        }
        if (message.slope2 !== "") {
            writer.uint32(42).string(message.slope2);
        }
        if (message.enableStableBorrow === true) {
            writer.uint32(48).bool(message.enableStableBorrow);
        }
        if (message.stableBase !== "") {
            writer.uint32(58).string(message.stableBase);
        }
        if (message.stableSlope1 !== "") {
            writer.uint32(66).string(message.stableSlope1);
        }
        if (message.stableSlope2 !== "") {
            writer.uint32(74).string(message.stableSlope2);
        }
        if (message.ltv !== "") {
            writer.uint32(82).string(message.ltv);
        }
        if (message.liquidationThreshold !== "") {
            writer.uint32(90).string(message.liquidationThreshold);
        }
        if (message.liquidationPenalty !== "") {
            writer.uint32(98).string(message.liquidationPenalty);
        }
        if (message.liquidationBonus !== "") {
            writer.uint32(106).string(message.liquidationBonus);
        }
        if (message.reserveFactor !== "") {
            writer.uint32(114).string(message.reserveFactor);
        }
        if (!message.cAssetId.isZero()) {
            writer.uint32(120).uint64(message.cAssetId);
        }
        if (message.moduleName !== "") {
            writer.uint32(130).string(message.moduleName);
        }
        if (message.cpoolName !== "") {
            writer.uint32(138).string(message.cpoolName);
        }
        for (const v of message.assetData) {
            exports.AssetDataPoolMapping.encode(v, writer.uint32(146).fork()).ldelim();
        }
        if (!message.minUsdValueLeft.isZero()) {
            writer.uint32(152).uint64(message.minUsdValueLeft);
        }
        if (message.isIsolated === true) {
            writer.uint32(160).bool(message.isIsolated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetRatesPoolPairs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint64();
                    break;
                case 2:
                    message.uOptimal = reader.string();
                    break;
                case 3:
                    message.base = reader.string();
                    break;
                case 4:
                    message.slope1 = reader.string();
                    break;
                case 5:
                    message.slope2 = reader.string();
                    break;
                case 6:
                    message.enableStableBorrow = reader.bool();
                    break;
                case 7:
                    message.stableBase = reader.string();
                    break;
                case 8:
                    message.stableSlope1 = reader.string();
                    break;
                case 9:
                    message.stableSlope2 = reader.string();
                    break;
                case 10:
                    message.ltv = reader.string();
                    break;
                case 11:
                    message.liquidationThreshold = reader.string();
                    break;
                case 12:
                    message.liquidationPenalty = reader.string();
                    break;
                case 13:
                    message.liquidationBonus = reader.string();
                    break;
                case 14:
                    message.reserveFactor = reader.string();
                    break;
                case 15:
                    message.cAssetId = reader.uint64();
                    break;
                case 16:
                    message.moduleName = reader.string();
                    break;
                case 17:
                    message.cpoolName = reader.string();
                    break;
                case 18:
                    message.assetData.push(exports.AssetDataPoolMapping.decode(reader, reader.uint32()));
                    break;
                case 19:
                    message.minUsdValueLeft = reader.uint64();
                    break;
                case 20:
                    message.isIsolated = reader.bool();
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
            uOptimal: isSet(object.uOptimal) ? String(object.uOptimal) : "",
            base: isSet(object.base) ? String(object.base) : "",
            slope1: isSet(object.slope1) ? String(object.slope1) : "",
            slope2: isSet(object.slope2) ? String(object.slope2) : "",
            enableStableBorrow: isSet(object.enableStableBorrow)
                ? Boolean(object.enableStableBorrow)
                : false,
            stableBase: isSet(object.stableBase) ? String(object.stableBase) : "",
            stableSlope1: isSet(object.stableSlope1)
                ? String(object.stableSlope1)
                : "",
            stableSlope2: isSet(object.stableSlope2)
                ? String(object.stableSlope2)
                : "",
            ltv: isSet(object.ltv) ? String(object.ltv) : "",
            liquidationThreshold: isSet(object.liquidationThreshold)
                ? String(object.liquidationThreshold)
                : "",
            liquidationPenalty: isSet(object.liquidationPenalty)
                ? String(object.liquidationPenalty)
                : "",
            liquidationBonus: isSet(object.liquidationBonus)
                ? String(object.liquidationBonus)
                : "",
            reserveFactor: isSet(object.reserveFactor)
                ? String(object.reserveFactor)
                : "",
            cAssetId: isSet(object.cAssetId)
                ? long_1.default.fromValue(object.cAssetId)
                : long_1.default.UZERO,
            moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
            cpoolName: isSet(object.cpoolName) ? String(object.cpoolName) : "",
            assetData: Array.isArray(object === null || object === void 0 ? void 0 : object.assetData)
                ? object.assetData.map((e) => exports.AssetDataPoolMapping.fromJSON(e))
                : [],
            minUsdValueLeft: isSet(object.minUsdValueLeft)
                ? long_1.default.fromValue(object.minUsdValueLeft)
                : long_1.default.UZERO,
            isIsolated: isSet(object.isIsolated) ? Boolean(object.isIsolated) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.uOptimal !== undefined && (obj.uOptimal = message.uOptimal);
        message.base !== undefined && (obj.base = message.base);
        message.slope1 !== undefined && (obj.slope1 = message.slope1);
        message.slope2 !== undefined && (obj.slope2 = message.slope2);
        message.enableStableBorrow !== undefined &&
            (obj.enableStableBorrow = message.enableStableBorrow);
        message.stableBase !== undefined && (obj.stableBase = message.stableBase);
        message.stableSlope1 !== undefined &&
            (obj.stableSlope1 = message.stableSlope1);
        message.stableSlope2 !== undefined &&
            (obj.stableSlope2 = message.stableSlope2);
        message.ltv !== undefined && (obj.ltv = message.ltv);
        message.liquidationThreshold !== undefined &&
            (obj.liquidationThreshold = message.liquidationThreshold);
        message.liquidationPenalty !== undefined &&
            (obj.liquidationPenalty = message.liquidationPenalty);
        message.liquidationBonus !== undefined &&
            (obj.liquidationBonus = message.liquidationBonus);
        message.reserveFactor !== undefined &&
            (obj.reserveFactor = message.reserveFactor);
        message.cAssetId !== undefined &&
            (obj.cAssetId = (message.cAssetId || long_1.default.UZERO).toString());
        message.moduleName !== undefined && (obj.moduleName = message.moduleName);
        message.cpoolName !== undefined && (obj.cpoolName = message.cpoolName);
        if (message.assetData) {
            obj.assetData = message.assetData.map((e) => e ? exports.AssetDataPoolMapping.toJSON(e) : undefined);
        }
        else {
            obj.assetData = [];
        }
        message.minUsdValueLeft !== undefined &&
            (obj.minUsdValueLeft = (message.minUsdValueLeft || long_1.default.UZERO).toString());
        message.isIsolated !== undefined && (obj.isIsolated = message.isIsolated);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        const message = createBaseAssetRatesPoolPairs();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.uOptimal = (_a = object.uOptimal) !== null && _a !== void 0 ? _a : "";
        message.base = (_b = object.base) !== null && _b !== void 0 ? _b : "";
        message.slope1 = (_c = object.slope1) !== null && _c !== void 0 ? _c : "";
        message.slope2 = (_d = object.slope2) !== null && _d !== void 0 ? _d : "";
        message.enableStableBorrow = (_e = object.enableStableBorrow) !== null && _e !== void 0 ? _e : false;
        message.stableBase = (_f = object.stableBase) !== null && _f !== void 0 ? _f : "";
        message.stableSlope1 = (_g = object.stableSlope1) !== null && _g !== void 0 ? _g : "";
        message.stableSlope2 = (_h = object.stableSlope2) !== null && _h !== void 0 ? _h : "";
        message.ltv = (_j = object.ltv) !== null && _j !== void 0 ? _j : "";
        message.liquidationThreshold = (_k = object.liquidationThreshold) !== null && _k !== void 0 ? _k : "";
        message.liquidationPenalty = (_l = object.liquidationPenalty) !== null && _l !== void 0 ? _l : "";
        message.liquidationBonus = (_m = object.liquidationBonus) !== null && _m !== void 0 ? _m : "";
        message.reserveFactor = (_o = object.reserveFactor) !== null && _o !== void 0 ? _o : "";
        message.cAssetId =
            object.cAssetId !== undefined && object.cAssetId !== null
                ? long_1.default.fromValue(object.cAssetId)
                : long_1.default.UZERO;
        message.moduleName = (_p = object.moduleName) !== null && _p !== void 0 ? _p : "";
        message.cpoolName = (_q = object.cpoolName) !== null && _q !== void 0 ? _q : "";
        message.assetData =
            ((_r = object.assetData) === null || _r === void 0 ? void 0 : _r.map((e) => exports.AssetDataPoolMapping.fromPartial(e))) || [];
        message.minUsdValueLeft =
            object.minUsdValueLeft !== undefined && object.minUsdValueLeft !== null
                ? long_1.default.fromValue(object.minUsdValueLeft)
                : long_1.default.UZERO;
        message.isIsolated = (_s = object.isIsolated) !== null && _s !== void 0 ? _s : false;
        return message;
    },
};
function createBasePoolDepreciate() {
    return { individualPoolDepreciate: [] };
}
exports.PoolDepreciate = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.individualPoolDepreciate) {
            exports.IndividualPoolDepreciate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolDepreciate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.individualPoolDepreciate.push(exports.IndividualPoolDepreciate.decode(reader, reader.uint32()));
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
            individualPoolDepreciate: Array.isArray(object === null || object === void 0 ? void 0 : object.individualPoolDepreciate)
                ? object.individualPoolDepreciate.map((e) => exports.IndividualPoolDepreciate.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.individualPoolDepreciate) {
            obj.individualPoolDepreciate = message.individualPoolDepreciate.map((e) => e ? exports.IndividualPoolDepreciate.toJSON(e) : undefined);
        }
        else {
            obj.individualPoolDepreciate = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePoolDepreciate();
        message.individualPoolDepreciate =
            ((_a = object.individualPoolDepreciate) === null || _a === void 0 ? void 0 : _a.map((e) => exports.IndividualPoolDepreciate.fromPartial(e))) || [];
        return message;
    },
};
function createBaseIndividualPoolDepreciate() {
    return { poolId: long_1.default.UZERO, isPoolDepreciated: false };
}
exports.IndividualPoolDepreciate = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.isPoolDepreciated === true) {
            writer.uint32(16).bool(message.isPoolDepreciated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIndividualPoolDepreciate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.isPoolDepreciated = reader.bool();
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            isPoolDepreciated: isSet(object.isPoolDepreciated)
                ? Boolean(object.isPoolDepreciated)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.isPoolDepreciated !== undefined &&
            (obj.isPoolDepreciated = message.isPoolDepreciated);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseIndividualPoolDepreciate();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.isPoolDepreciated = (_a = object.isPoolDepreciated) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseEModePairsForProposal() {
    return { eModePairs: [] };
}
exports.EModePairsForProposal = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.eModePairs) {
            exports.EModePairs.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEModePairsForProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eModePairs.push(exports.EModePairs.decode(reader, reader.uint32()));
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
            eModePairs: Array.isArray(object === null || object === void 0 ? void 0 : object.eModePairs)
                ? object.eModePairs.map((e) => exports.EModePairs.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.eModePairs) {
            obj.eModePairs = message.eModePairs.map((e) => e ? exports.EModePairs.toJSON(e) : undefined);
        }
        else {
            obj.eModePairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseEModePairsForProposal();
        message.eModePairs =
            ((_a = object.eModePairs) === null || _a === void 0 ? void 0 : _a.map((e) => exports.EModePairs.fromPartial(e))) || [];
        return message;
    },
};
function createBaseEModePairs() {
    return {
        pairId: long_1.default.UZERO,
        eLtv: "",
        eLiquidationThreshold: "",
        eLiquidationPenalty: "",
    };
}
exports.EModePairs = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.pairId.isZero()) {
            writer.uint32(8).uint64(message.pairId);
        }
        if (message.eLtv !== "") {
            writer.uint32(18).string(message.eLtv);
        }
        if (message.eLiquidationThreshold !== "") {
            writer.uint32(26).string(message.eLiquidationThreshold);
        }
        if (message.eLiquidationPenalty !== "") {
            writer.uint32(34).string(message.eLiquidationPenalty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEModePairs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairId = reader.uint64();
                    break;
                case 2:
                    message.eLtv = reader.string();
                    break;
                case 3:
                    message.eLiquidationThreshold = reader.string();
                    break;
                case 4:
                    message.eLiquidationPenalty = reader.string();
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
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            eLtv: isSet(object.eLtv) ? String(object.eLtv) : "",
            eLiquidationThreshold: isSet(object.eLiquidationThreshold)
                ? String(object.eLiquidationThreshold)
                : "",
            eLiquidationPenalty: isSet(object.eLiquidationPenalty)
                ? String(object.eLiquidationPenalty)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.pairId !== undefined &&
            (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.eLtv !== undefined && (obj.eLtv = message.eLtv);
        message.eLiquidationThreshold !== undefined &&
            (obj.eLiquidationThreshold = message.eLiquidationThreshold);
        message.eLiquidationPenalty !== undefined &&
            (obj.eLiquidationPenalty = message.eLiquidationPenalty);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEModePairs();
        message.pairId =
            object.pairId !== undefined && object.pairId !== null
                ? long_1.default.fromValue(object.pairId)
                : long_1.default.UZERO;
        message.eLtv = (_a = object.eLtv) !== null && _a !== void 0 ? _a : "";
        message.eLiquidationThreshold = (_b = object.eLiquidationThreshold) !== null && _b !== void 0 ? _b : "";
        message.eLiquidationPenalty = (_c = object.eLiquidationPenalty) !== null && _c !== void 0 ? _c : "";
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
//# sourceMappingURL=lend.js.map