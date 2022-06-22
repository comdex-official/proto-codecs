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
exports.BorrowMapping = exports.LendMapping = exports.AssetRatesStats = exports.AssetStats = exports.LendIdToBorrowIdMapping = exports.UserBorrowIdMapping = exports.UserLendIdMapping = exports.AssetToPairMapping = exports.ExtendedPair = exports.AssetDataPoolMapping = exports.Pool = exports.BorrowAsset = exports.LendAsset = exports.protobufPackage = void 0;
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
        rewardAccumulated: "",
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
        if (message.rewardAccumulated !== "") {
            writer.uint32(66).string(message.rewardAccumulated);
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
                    message.rewardAccumulated = reader.string();
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
            rewardAccumulated: isSet(object.rewardAccumulated)
                ? String(object.rewardAccumulated)
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
        message.updatedAmountIn !== undefined &&
            (obj.updatedAmountIn = message.updatedAmountIn);
        message.rewardAccumulated !== undefined &&
            (obj.rewardAccumulated = message.rewardAccumulated);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
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
        message.rewardAccumulated = (_d = object.rewardAccumulated) !== null && _d !== void 0 ? _d : "";
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
        bridgedAssetId: long_1.default.UZERO,
        borrowingTime: undefined,
        stableBorrowRate: "",
        updatedAmountOut: "",
        interestAccumulated: "",
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
        if (!message.bridgedAssetId.isZero()) {
            writer.uint32(56).uint64(message.bridgedAssetId);
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
                    message.bridgedAssetId = reader.uint64();
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
            bridgedAssetId: isSet(object.bridgedAssetId)
                ? long_1.default.fromValue(object.bridgedAssetId)
                : long_1.default.UZERO,
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
        message.bridgedAssetId !== undefined &&
            (obj.bridgedAssetId = (message.bridgedAssetId || long_1.default.UZERO).toString());
        message.borrowingTime !== undefined &&
            (obj.borrowingTime = message.borrowingTime.toISOString());
        message.stableBorrowRate !== undefined &&
            (obj.stableBorrowRate = message.stableBorrowRate);
        message.updatedAmountOut !== undefined &&
            (obj.updatedAmountOut = message.updatedAmountOut);
        message.interestAccumulated !== undefined &&
            (obj.interestAccumulated = message.interestAccumulated);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
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
        message.bridgedAssetId =
            object.bridgedAssetId !== undefined && object.bridgedAssetId !== null
                ? long_1.default.fromValue(object.bridgedAssetId)
                : long_1.default.UZERO;
        message.borrowingTime = (_b = object.borrowingTime) !== null && _b !== void 0 ? _b : undefined;
        message.stableBorrowRate = (_c = object.stableBorrowRate) !== null && _c !== void 0 ? _c : "";
        message.updatedAmountOut = (_d = object.updatedAmountOut) !== null && _d !== void 0 ? _d : "";
        message.interestAccumulated = (_e = object.interestAccumulated) !== null && _e !== void 0 ? _e : "";
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
        for (const v of message.assetData) {
            exports.AssetDataPoolMapping.encode(v, writer.uint32(50).fork()).ldelim();
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
        if (message.assetData) {
            obj.assetData = message.assetData.map((e) => e ? exports.AssetDataPoolMapping.toJSON(e) : undefined);
        }
        else {
            obj.assetData = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
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
        message.assetData =
            ((_b = object.assetData) === null || _b === void 0 ? void 0 : _b.map((e) => exports.AssetDataPoolMapping.fromPartial(e))) || [];
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
        return message;
    },
};
function createBaseAssetToPairMapping() {
    return { assetId: long_1.default.UZERO, pairId: [] };
}
exports.AssetToPairMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        writer.uint32(18).fork();
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
            pairId: Array.isArray(object === null || object === void 0 ? void 0 : object.pairId)
                ? object.pairId.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
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
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.pairId = ((_a = object.pairId) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseUserLendIdMapping() {
    return { owner: "", lends: [] };
}
exports.UserLendIdMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        for (const v of message.lends) {
            exports.LendAsset.encode(v, writer.uint32(18).fork()).ldelim();
        }
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
                    message.lends.push(exports.LendAsset.decode(reader, reader.uint32()));
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
            lends: Array.isArray(object === null || object === void 0 ? void 0 : object.lends)
                ? object.lends.map((e) => exports.LendAsset.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        if (message.lends) {
            obj.lends = message.lends.map((e) => e ? exports.LendAsset.toJSON(e) : undefined);
        }
        else {
            obj.lends = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserLendIdMapping();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.lends = ((_b = object.lends) === null || _b === void 0 ? void 0 : _b.map((e) => exports.LendAsset.fromPartial(e))) || [];
        return message;
    },
};
function createBaseUserBorrowIdMapping() {
    return { owner: "", borrows: [] };
}
exports.UserBorrowIdMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        for (const v of message.borrows) {
            exports.BorrowAsset.encode(v, writer.uint32(18).fork()).ldelim();
        }
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
                    message.borrows.push(exports.BorrowAsset.decode(reader, reader.uint32()));
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
            borrows: Array.isArray(object === null || object === void 0 ? void 0 : object.borrows)
                ? object.borrows.map((e) => exports.BorrowAsset.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        if (message.borrows) {
            obj.borrows = message.borrows.map((e) => e ? exports.BorrowAsset.toJSON(e) : undefined);
        }
        else {
            obj.borrows = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserBorrowIdMapping();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.borrows =
            ((_b = object.borrows) === null || _b === void 0 ? void 0 : _b.map((e) => exports.BorrowAsset.fromPartial(e))) || [];
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
        totalLend: "",
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
        if (message.totalLend !== "") {
            writer.uint32(34).string(message.totalLend);
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
                    message.totalLend = reader.string();
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
            totalLend: isSet(object.totalLend) ? String(object.totalLend) : "",
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
        message.totalLend !== undefined && (obj.totalLend = message.totalLend);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
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
        message.totalLend = (_b = object.totalLend) !== null && _b !== void 0 ? _b : "";
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
        if (message.reserveFactor !== "") {
            writer.uint32(106).string(message.reserveFactor);
        }
        if (!message.cAssetId.isZero()) {
            writer.uint32(112).uint64(message.cAssetId);
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
                    message.reserveFactor = reader.string();
                    break;
                case 14:
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
        message.reserveFactor !== undefined &&
            (obj.reserveFactor = message.reserveFactor);
        message.cAssetId !== undefined &&
            (obj.cAssetId = (message.cAssetId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
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
        message.reserveFactor = (_m = object.reserveFactor) !== null && _m !== void 0 ? _m : "";
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