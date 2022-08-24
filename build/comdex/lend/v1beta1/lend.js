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
exports.DepositRanking = exports.BorrowRanking = exports.AssetRanking = exports.LendRewardsTracker = exports.BorrowInterestTracker = exports.ReservePoolRecordsForBorrow = exports.AuctionParams = exports.DepositStats = exports.BalanceStats = exports.ModuleBalanceStats = exports.ModuleBalance = exports.StableBorrowMapping = exports.BorrowMapping = exports.LendMapping = exports.AssetRatesStats = exports.AssetStats = exports.LendIdToBorrowIdMapping = exports.UserBorrowIdMapping = exports.BorrowIdByOwnerAndPoolMapping = exports.LendIdByOwnerAndPoolMapping = exports.UserLendIdMapping = exports.AssetToPairMapping = exports.ExtendedPair = exports.AssetDataPoolMapping = exports.Pool = exports.BorrowAsset = exports.LendAsset = exports.protobufPackage = void 0;
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
        updatedAmountIn: "",
        availableToBorrow: "",
        rewardAccumulated: "",
        appId: long_1.default.UZERO,
        cpoolName: "",
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
        if (message.updatedAmountIn !== "") {
            writer.uint32(58).string(message.updatedAmountIn);
        }
        if (message.availableToBorrow !== "") {
            writer.uint32(66).string(message.availableToBorrow);
        }
        if (message.rewardAccumulated !== "") {
            writer.uint32(74).string(message.rewardAccumulated);
        }
        if (!message.appId.isZero()) {
            writer.uint32(80).uint64(message.appId);
        }
        if (message.cpoolName !== "") {
            writer.uint32(90).string(message.cpoolName);
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
                    message.updatedAmountIn = reader.string();
                    break;
                case 8:
                    message.availableToBorrow = reader.string();
                    break;
                case 9:
                    message.rewardAccumulated = reader.string();
                    break;
                case 10:
                    message.appId = reader.uint64();
                    break;
                case 11:
                    message.cpoolName = reader.string();
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
            updatedAmountIn: isSet(object.updatedAmountIn)
                ? String(object.updatedAmountIn)
                : "",
            availableToBorrow: isSet(object.availableToBorrow)
                ? String(object.availableToBorrow)
                : "",
            rewardAccumulated: isSet(object.rewardAccumulated)
                ? String(object.rewardAccumulated)
                : "",
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            cpoolName: isSet(object.cpoolName) ? String(object.cpoolName) : "",
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
        message.updatedAmountIn !== undefined &&
            (obj.updatedAmountIn = message.updatedAmountIn);
        message.availableToBorrow !== undefined &&
            (obj.availableToBorrow = message.availableToBorrow);
        message.rewardAccumulated !== undefined &&
            (obj.rewardAccumulated = message.rewardAccumulated);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.cpoolName !== undefined && (obj.cpoolName = message.cpoolName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
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
        message.updatedAmountIn = (_c = object.updatedAmountIn) !== null && _c !== void 0 ? _c : "";
        message.availableToBorrow = (_d = object.availableToBorrow) !== null && _d !== void 0 ? _d : "";
        message.rewardAccumulated = (_e = object.rewardAccumulated) !== null && _e !== void 0 ? _e : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.cpoolName = (_f = object.cpoolName) !== null && _f !== void 0 ? _f : "";
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
        updatedAmountOut: "",
        interestAccumulated: "",
        cpoolName: "",
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
        if (message.updatedAmountOut !== "") {
            writer.uint32(82).string(message.updatedAmountOut);
        }
        if (message.interestAccumulated !== "") {
            writer.uint32(90).string(message.interestAccumulated);
        }
        if (message.cpoolName !== "") {
            writer.uint32(98).string(message.cpoolName);
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
                    message.updatedAmountOut = reader.string();
                    break;
                case 11:
                    message.interestAccumulated = reader.string();
                    break;
                case 12:
                    message.cpoolName = reader.string();
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
            updatedAmountOut: isSet(object.updatedAmountOut)
                ? String(object.updatedAmountOut)
                : "",
            interestAccumulated: isSet(object.interestAccumulated)
                ? String(object.interestAccumulated)
                : "",
            cpoolName: isSet(object.cpoolName) ? String(object.cpoolName) : "",
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
        message.updatedAmountOut !== undefined &&
            (obj.updatedAmountOut = message.updatedAmountOut);
        message.interestAccumulated !== undefined &&
            (obj.interestAccumulated = message.interestAccumulated);
        message.cpoolName !== undefined && (obj.cpoolName = message.cpoolName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
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
        message.updatedAmountOut = (_d = object.updatedAmountOut) !== null && _d !== void 0 ? _d : "";
        message.interestAccumulated = (_e = object.interestAccumulated) !== null && _e !== void 0 ? _e : "";
        message.cpoolName = (_f = object.cpoolName) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBasePool() {
    return {
        poolId: long_1.default.UZERO,
        moduleName: "",
        mainAssetId: long_1.default.UZERO,
        firstBridgedAssetId: long_1.default.UZERO,
        secondBridgedAssetId: long_1.default.UZERO,
        cpoolName: "",
        reserveFunds: long_1.default.UZERO,
        assetData: [],
    };
}
exports.Pool = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.moduleName !== "") {
            writer.uint32(18).string(message.moduleName);
        }
        if (!message.mainAssetId.isZero()) {
            writer.uint32(24).uint64(message.mainAssetId);
        }
        if (!message.firstBridgedAssetId.isZero()) {
            writer.uint32(32).uint64(message.firstBridgedAssetId);
        }
        if (!message.secondBridgedAssetId.isZero()) {
            writer.uint32(40).uint64(message.secondBridgedAssetId);
        }
        if (message.cpoolName !== "") {
            writer.uint32(50).string(message.cpoolName);
        }
        if (!message.reserveFunds.isZero()) {
            writer.uint32(56).uint64(message.reserveFunds);
        }
        for (const v of message.assetData) {
            exports.AssetDataPoolMapping.encode(v, writer.uint32(66).fork()).ldelim();
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
                    message.mainAssetId = reader.uint64();
                    break;
                case 4:
                    message.firstBridgedAssetId = reader.uint64();
                    break;
                case 5:
                    message.secondBridgedAssetId = reader.uint64();
                    break;
                case 6:
                    message.cpoolName = reader.string();
                    break;
                case 7:
                    message.reserveFunds = reader.uint64();
                    break;
                case 8:
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
            mainAssetId: isSet(object.mainAssetId)
                ? long_1.default.fromValue(object.mainAssetId)
                : long_1.default.UZERO,
            firstBridgedAssetId: isSet(object.firstBridgedAssetId)
                ? long_1.default.fromValue(object.firstBridgedAssetId)
                : long_1.default.UZERO,
            secondBridgedAssetId: isSet(object.secondBridgedAssetId)
                ? long_1.default.fromValue(object.secondBridgedAssetId)
                : long_1.default.UZERO,
            cpoolName: isSet(object.cpoolName) ? String(object.cpoolName) : "",
            reserveFunds: isSet(object.reserveFunds)
                ? long_1.default.fromValue(object.reserveFunds)
                : long_1.default.UZERO,
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
        message.mainAssetId !== undefined &&
            (obj.mainAssetId = (message.mainAssetId || long_1.default.UZERO).toString());
        message.firstBridgedAssetId !== undefined &&
            (obj.firstBridgedAssetId = (message.firstBridgedAssetId || long_1.default.UZERO).toString());
        message.secondBridgedAssetId !== undefined &&
            (obj.secondBridgedAssetId = (message.secondBridgedAssetId || long_1.default.UZERO).toString());
        message.cpoolName !== undefined && (obj.cpoolName = message.cpoolName);
        message.reserveFunds !== undefined &&
            (obj.reserveFunds = (message.reserveFunds || long_1.default.UZERO).toString());
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
        message.mainAssetId =
            object.mainAssetId !== undefined && object.mainAssetId !== null
                ? long_1.default.fromValue(object.mainAssetId)
                : long_1.default.UZERO;
        message.firstBridgedAssetId =
            object.firstBridgedAssetId !== undefined &&
                object.firstBridgedAssetId !== null
                ? long_1.default.fromValue(object.firstBridgedAssetId)
                : long_1.default.UZERO;
        message.secondBridgedAssetId =
            object.secondBridgedAssetId !== undefined &&
                object.secondBridgedAssetId !== null
                ? long_1.default.fromValue(object.secondBridgedAssetId)
                : long_1.default.UZERO;
        message.cpoolName = (_b = object.cpoolName) !== null && _b !== void 0 ? _b : "";
        message.reserveFunds =
            object.reserveFunds !== undefined && object.reserveFunds !== null
                ? long_1.default.fromValue(object.reserveFunds)
                : long_1.default.UZERO;
        message.assetData =
            ((_c = object.assetData) === null || _c === void 0 ? void 0 : _c.map((e) => exports.AssetDataPoolMapping.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAssetDataPoolMapping() {
    return { assetId: long_1.default.UZERO, isBridged: false };
}
exports.AssetDataPoolMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (message.isBridged === true) {
            writer.uint32(16).bool(message.isBridged);
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
                    message.isBridged = reader.bool();
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
            isBridged: isSet(object.isBridged) ? Boolean(object.isBridged) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.isBridged !== undefined && (obj.isBridged = message.isBridged);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAssetDataPoolMapping();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.isBridged = (_a = object.isBridged) !== null && _a !== void 0 ? _a : false;
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
        return obj;
    },
    fromPartial(object) {
        var _a;
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
        return message;
    },
};
function createBaseAssetToPairMapping() {
    return { assetId: long_1.default.UZERO, poolId: long_1.default.UZERO, pairId: [] };
}
exports.AssetToPairMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
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
                    message.assetId = reader.uint64();
                    break;
                case 2:
                    message.poolId = reader.uint64();
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
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            pairId: Array.isArray(object === null || object === void 0 ? void 0 : object.pairId)
                ? object.pairId.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
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
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.pairId = ((_a = object.pairId) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseUserLendIdMapping() {
    return { owner: "", lendIds: [] };
}
exports.UserLendIdMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        writer.uint32(18).fork();
        for (const v of message.lendIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserLendIdMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
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
            lendIds: Array.isArray(object === null || object === void 0 ? void 0 : object.lendIds)
                ? object.lendIds.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        if (message.lendIds) {
            obj.lendIds = message.lendIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.lendIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserLendIdMapping();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.lendIds = ((_b = object.lendIds) === null || _b === void 0 ? void 0 : _b.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseLendIdByOwnerAndPoolMapping() {
    return { owner: "", poolId: long_1.default.UZERO, lendIds: [] };
}
exports.LendIdByOwnerAndPoolMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        writer.uint32(26).fork();
        for (const v of message.lendIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLendIdByOwnerAndPoolMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            lendIds: Array.isArray(object === null || object === void 0 ? void 0 : object.lendIds)
                ? object.lendIds.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        if (message.lendIds) {
            obj.lendIds = message.lendIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.lendIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLendIdByOwnerAndPoolMapping();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.lendIds = ((_b = object.lendIds) === null || _b === void 0 ? void 0 : _b.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseBorrowIdByOwnerAndPoolMapping() {
    return { owner: "", poolId: long_1.default.UZERO, borrowIds: [] };
}
exports.BorrowIdByOwnerAndPoolMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        writer.uint32(26).fork();
        for (const v of message.borrowIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBorrowIdByOwnerAndPoolMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            borrowIds: Array.isArray(object === null || object === void 0 ? void 0 : object.borrowIds)
                ? object.borrowIds.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        if (message.borrowIds) {
            obj.borrowIds = message.borrowIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.borrowIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBorrowIdByOwnerAndPoolMapping();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.borrowIds = ((_b = object.borrowIds) === null || _b === void 0 ? void 0 : _b.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseUserBorrowIdMapping() {
    return { owner: "", borrowIds: [] };
}
exports.UserBorrowIdMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        writer.uint32(18).fork();
        for (const v of message.borrowIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserBorrowIdMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
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
            borrowIds: Array.isArray(object === null || object === void 0 ? void 0 : object.borrowIds)
                ? object.borrowIds.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        if (message.borrowIds) {
            obj.borrowIds = message.borrowIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.borrowIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserBorrowIdMapping();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.borrowIds = ((_b = object.borrowIds) === null || _b === void 0 ? void 0 : _b.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseLendIdToBorrowIdMapping() {
    return { lendingId: long_1.default.UZERO, borrowingId: [] };
}
exports.LendIdToBorrowIdMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.lendingId.isZero()) {
            writer.uint32(8).uint64(message.lendingId);
        }
        writer.uint32(18).fork();
        for (const v of message.borrowingId) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLendIdToBorrowIdMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lendingId = reader.uint64();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.borrowingId.push(reader.uint64());
                        }
                    }
                    else {
                        message.borrowingId.push(reader.uint64());
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
            lendingId: isSet(object.lendingId)
                ? long_1.default.fromValue(object.lendingId)
                : long_1.default.UZERO,
            borrowingId: Array.isArray(object === null || object === void 0 ? void 0 : object.borrowingId)
                ? object.borrowingId.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.lendingId !== undefined &&
            (obj.lendingId = (message.lendingId || long_1.default.UZERO).toString());
        if (message.borrowingId) {
            obj.borrowingId = message.borrowingId.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.borrowingId = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLendIdToBorrowIdMapping();
        message.lendingId =
            object.lendingId !== undefined && object.lendingId !== null
                ? long_1.default.fromValue(object.lendingId)
                : long_1.default.UZERO;
        message.borrowingId =
            ((_a = object.borrowingId) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseAssetStats() {
    return {
        poolId: long_1.default.UZERO,
        assetId: long_1.default.UZERO,
        totalBorrowed: "",
        totalStableBorrowed: "",
        totalLend: "",
        lendApr: "",
        borrowApr: "",
        stableBorrowApr: "",
        utilisationRatio: "",
    };
}
exports.AssetStats = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        if (message.totalBorrowed !== "") {
            writer.uint32(26).string(message.totalBorrowed);
        }
        if (message.totalStableBorrowed !== "") {
            writer.uint32(34).string(message.totalStableBorrowed);
        }
        if (message.totalLend !== "") {
            writer.uint32(42).string(message.totalLend);
        }
        if (message.lendApr !== "") {
            writer.uint32(50).string(message.lendApr);
        }
        if (message.borrowApr !== "") {
            writer.uint32(58).string(message.borrowApr);
        }
        if (message.stableBorrowApr !== "") {
            writer.uint32(66).string(message.stableBorrowApr);
        }
        if (message.utilisationRatio !== "") {
            writer.uint32(74).string(message.utilisationRatio);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetStats();
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
                    message.totalBorrowed = reader.string();
                    break;
                case 4:
                    message.totalStableBorrowed = reader.string();
                    break;
                case 5:
                    message.totalLend = reader.string();
                    break;
                case 6:
                    message.lendApr = reader.string();
                    break;
                case 7:
                    message.borrowApr = reader.string();
                    break;
                case 8:
                    message.stableBorrowApr = reader.string();
                    break;
                case 9:
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
            totalBorrowed: isSet(object.totalBorrowed)
                ? String(object.totalBorrowed)
                : "",
            totalStableBorrowed: isSet(object.totalStableBorrowed)
                ? String(object.totalStableBorrowed)
                : "",
            totalLend: isSet(object.totalLend) ? String(object.totalLend) : "",
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
        message.totalBorrowed !== undefined &&
            (obj.totalBorrowed = message.totalBorrowed);
        message.totalStableBorrowed !== undefined &&
            (obj.totalStableBorrowed = message.totalStableBorrowed);
        message.totalLend !== undefined && (obj.totalLend = message.totalLend);
        message.lendApr !== undefined && (obj.lendApr = message.lendApr);
        message.borrowApr !== undefined && (obj.borrowApr = message.borrowApr);
        message.stableBorrowApr !== undefined &&
            (obj.stableBorrowApr = message.stableBorrowApr);
        message.utilisationRatio !== undefined &&
            (obj.utilisationRatio = message.utilisationRatio);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseAssetStats();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.totalBorrowed = (_a = object.totalBorrowed) !== null && _a !== void 0 ? _a : "";
        message.totalStableBorrowed = (_b = object.totalStableBorrowed) !== null && _b !== void 0 ? _b : "";
        message.totalLend = (_c = object.totalLend) !== null && _c !== void 0 ? _c : "";
        message.lendApr = (_d = object.lendApr) !== null && _d !== void 0 ? _d : "";
        message.borrowApr = (_e = object.borrowApr) !== null && _e !== void 0 ? _e : "";
        message.stableBorrowApr = (_f = object.stableBorrowApr) !== null && _f !== void 0 ? _f : "";
        message.utilisationRatio = (_g = object.utilisationRatio) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseAssetRatesStats() {
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
    };
}
exports.AssetRatesStats = {
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetRatesStats();
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
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = createBaseAssetRatesStats();
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
        return message;
    },
};
function createBaseLendMapping() {
    return { lendIds: [] };
}
exports.LendMapping = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.lendIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLendMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            lendIds: Array.isArray(object === null || object === void 0 ? void 0 : object.lendIds)
                ? object.lendIds.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lendIds) {
            obj.lendIds = message.lendIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.lendIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLendMapping();
        message.lendIds = ((_a = object.lendIds) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseBorrowMapping() {
    return { borrowIds: [] };
}
exports.BorrowMapping = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.borrowIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBorrowMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            borrowIds: Array.isArray(object === null || object === void 0 ? void 0 : object.borrowIds)
                ? object.borrowIds.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.borrowIds) {
            obj.borrowIds = message.borrowIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.borrowIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBorrowMapping();
        message.borrowIds = ((_a = object.borrowIds) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseStableBorrowMapping() {
    return { stableBorrowIds: [] };
}
exports.StableBorrowMapping = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.stableBorrowIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStableBorrowMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.stableBorrowIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.stableBorrowIds.push(reader.uint64());
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
            stableBorrowIds: Array.isArray(object === null || object === void 0 ? void 0 : object.stableBorrowIds)
                ? object.stableBorrowIds.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.stableBorrowIds) {
            obj.stableBorrowIds = message.stableBorrowIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.stableBorrowIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStableBorrowMapping();
        message.stableBorrowIds =
            ((_a = object.stableBorrowIds) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
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
function createBaseBalanceStats() {
    return { assetId: long_1.default.UZERO, amount: "" };
}
exports.BalanceStats = {
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
        const message = createBaseBalanceStats();
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
        const message = createBaseBalanceStats();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.amount = (_a = object.amount) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDepositStats() {
    return { balanceStats: [] };
}
exports.DepositStats = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.balanceStats) {
            exports.BalanceStats.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositStats();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balanceStats.push(exports.BalanceStats.decode(reader, reader.uint32()));
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
            balanceStats: Array.isArray(object === null || object === void 0 ? void 0 : object.balanceStats)
                ? object.balanceStats.map((e) => exports.BalanceStats.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.balanceStats) {
            obj.balanceStats = message.balanceStats.map((e) => e ? exports.BalanceStats.toJSON(e) : undefined);
        }
        else {
            obj.balanceStats = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDepositStats();
        message.balanceStats =
            ((_a = object.balanceStats) === null || _a === void 0 ? void 0 : _a.map((e) => exports.BalanceStats.fromPartial(e))) || [];
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
function createBaseReservePoolRecordsForBorrow() {
    return { borrowingId: long_1.default.UZERO, interestAccumulated: "" };
}
exports.ReservePoolRecordsForBorrow = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.borrowingId.isZero()) {
            writer.uint32(8).uint64(message.borrowingId);
        }
        if (message.interestAccumulated !== "") {
            writer.uint32(18).string(message.interestAccumulated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReservePoolRecordsForBorrow();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrowingId = reader.uint64();
                    break;
                case 2:
                    message.interestAccumulated = reader.string();
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
            interestAccumulated: isSet(object.interestAccumulated)
                ? String(object.interestAccumulated)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.borrowingId !== undefined &&
            (obj.borrowingId = (message.borrowingId || long_1.default.UZERO).toString());
        message.interestAccumulated !== undefined &&
            (obj.interestAccumulated = message.interestAccumulated);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseReservePoolRecordsForBorrow();
        message.borrowingId =
            object.borrowingId !== undefined && object.borrowingId !== null
                ? long_1.default.fromValue(object.borrowingId)
                : long_1.default.UZERO;
        message.interestAccumulated = (_a = object.interestAccumulated) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseBorrowInterestTracker() {
    return { borrowingId: long_1.default.UZERO, interestAccumulated: "" };
}
exports.BorrowInterestTracker = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.borrowingId.isZero()) {
            writer.uint32(8).uint64(message.borrowingId);
        }
        if (message.interestAccumulated !== "") {
            writer.uint32(18).string(message.interestAccumulated);
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
                case 2:
                    message.interestAccumulated = reader.string();
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
            interestAccumulated: isSet(object.interestAccumulated)
                ? String(object.interestAccumulated)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.borrowingId !== undefined &&
            (obj.borrowingId = (message.borrowingId || long_1.default.UZERO).toString());
        message.interestAccumulated !== undefined &&
            (obj.interestAccumulated = message.interestAccumulated);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBorrowInterestTracker();
        message.borrowingId =
            object.borrowingId !== undefined && object.borrowingId !== null
                ? long_1.default.fromValue(object.borrowingId)
                : long_1.default.UZERO;
        message.interestAccumulated = (_a = object.interestAccumulated) !== null && _a !== void 0 ? _a : "";
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
function createBaseAssetRanking() {
    return { assetId: long_1.default.UZERO, apr: "", amount: "" };
}
exports.AssetRanking = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (message.apr !== "") {
            writer.uint32(18).string(message.apr);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetRanking();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint64();
                    break;
                case 2:
                    message.apr = reader.string();
                    break;
                case 3:
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
            apr: isSet(object.apr) ? String(object.apr) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.apr !== undefined && (obj.apr = message.apr);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAssetRanking();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.apr = (_a = object.apr) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseBorrowRanking() {
    return { first: undefined, second: undefined, third: undefined };
}
exports.BorrowRanking = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.first !== undefined) {
            exports.AssetRanking.encode(message.first, writer.uint32(10).fork()).ldelim();
        }
        if (message.second !== undefined) {
            exports.AssetRanking.encode(message.second, writer.uint32(18).fork()).ldelim();
        }
        if (message.third !== undefined) {
            exports.AssetRanking.encode(message.third, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBorrowRanking();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.first = exports.AssetRanking.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.second = exports.AssetRanking.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.third = exports.AssetRanking.decode(reader, reader.uint32());
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
            first: isSet(object.first)
                ? exports.AssetRanking.fromJSON(object.first)
                : undefined,
            second: isSet(object.second)
                ? exports.AssetRanking.fromJSON(object.second)
                : undefined,
            third: isSet(object.third)
                ? exports.AssetRanking.fromJSON(object.third)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.first !== undefined &&
            (obj.first = message.first
                ? exports.AssetRanking.toJSON(message.first)
                : undefined);
        message.second !== undefined &&
            (obj.second = message.second
                ? exports.AssetRanking.toJSON(message.second)
                : undefined);
        message.third !== undefined &&
            (obj.third = message.third
                ? exports.AssetRanking.toJSON(message.third)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBorrowRanking();
        message.first =
            object.first !== undefined && object.first !== null
                ? exports.AssetRanking.fromPartial(object.first)
                : undefined;
        message.second =
            object.second !== undefined && object.second !== null
                ? exports.AssetRanking.fromPartial(object.second)
                : undefined;
        message.third =
            object.third !== undefined && object.third !== null
                ? exports.AssetRanking.fromPartial(object.third)
                : undefined;
        return message;
    },
};
function createBaseDepositRanking() {
    return { first: undefined, second: undefined, third: undefined };
}
exports.DepositRanking = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.first !== undefined) {
            exports.AssetRanking.encode(message.first, writer.uint32(10).fork()).ldelim();
        }
        if (message.second !== undefined) {
            exports.AssetRanking.encode(message.second, writer.uint32(18).fork()).ldelim();
        }
        if (message.third !== undefined) {
            exports.AssetRanking.encode(message.third, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositRanking();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.first = exports.AssetRanking.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.second = exports.AssetRanking.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.third = exports.AssetRanking.decode(reader, reader.uint32());
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
            first: isSet(object.first)
                ? exports.AssetRanking.fromJSON(object.first)
                : undefined,
            second: isSet(object.second)
                ? exports.AssetRanking.fromJSON(object.second)
                : undefined,
            third: isSet(object.third)
                ? exports.AssetRanking.fromJSON(object.third)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.first !== undefined &&
            (obj.first = message.first
                ? exports.AssetRanking.toJSON(message.first)
                : undefined);
        message.second !== undefined &&
            (obj.second = message.second
                ? exports.AssetRanking.toJSON(message.second)
                : undefined);
        message.third !== undefined &&
            (obj.third = message.third
                ? exports.AssetRanking.toJSON(message.third)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDepositRanking();
        message.first =
            object.first !== undefined && object.first !== null
                ? exports.AssetRanking.fromPartial(object.first)
                : undefined;
        message.second =
            object.second !== undefined && object.second !== null
                ? exports.AssetRanking.fromPartial(object.second)
                : undefined;
        message.third =
            object.third !== undefined && object.third !== null
                ? exports.AssetRanking.fromPartial(object.third)
                : undefined;
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