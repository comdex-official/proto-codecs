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
exports.WhitelistedAppIds = exports.LockedVaultToAppMapping = exports.BorrowMetaData = exports.LockedVault = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.liquidation.v1beta1";
function createBaseLockedVault() {
    return {
        id: long_1.default.UZERO,
        appId: long_1.default.UZERO,
        appVaultTypeId: "",
        originalVaultId: "",
        extendedPairVaultId: long_1.default.UZERO,
        owner: "",
        amountIn: "",
        amountOut: "",
        updatedAmountOut: "",
        initiator: "",
        isAuctionComplete: false,
        isAuctionInProgress: false,
        crAtLiquidation: "",
        currentCollateralisationRatio: "",
        collateralToBeAuctioned: "",
        liquidationTimestamp: undefined,
        selloffHistory: [],
        interestAccumulated: "",
        borrowMetaData: undefined,
    };
}
exports.LockedVault = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (message.appVaultTypeId !== "") {
            writer.uint32(26).string(message.appVaultTypeId);
        }
        if (message.originalVaultId !== "") {
            writer.uint32(34).string(message.originalVaultId);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(40).uint64(message.extendedPairVaultId);
        }
        if (message.owner !== "") {
            writer.uint32(50).string(message.owner);
        }
        if (message.amountIn !== "") {
            writer.uint32(58).string(message.amountIn);
        }
        if (message.amountOut !== "") {
            writer.uint32(66).string(message.amountOut);
        }
        if (message.updatedAmountOut !== "") {
            writer.uint32(74).string(message.updatedAmountOut);
        }
        if (message.initiator !== "") {
            writer.uint32(82).string(message.initiator);
        }
        if (message.isAuctionComplete === true) {
            writer.uint32(88).bool(message.isAuctionComplete);
        }
        if (message.isAuctionInProgress === true) {
            writer.uint32(96).bool(message.isAuctionInProgress);
        }
        if (message.crAtLiquidation !== "") {
            writer.uint32(106).string(message.crAtLiquidation);
        }
        if (message.currentCollateralisationRatio !== "") {
            writer.uint32(114).string(message.currentCollateralisationRatio);
        }
        if (message.collateralToBeAuctioned !== "") {
            writer.uint32(122).string(message.collateralToBeAuctioned);
        }
        if (message.liquidationTimestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.liquidationTimestamp), writer.uint32(130).fork()).ldelim();
        }
        for (const v of message.selloffHistory) {
            writer.uint32(138).string(v);
        }
        if (message.interestAccumulated !== "") {
            writer.uint32(146).string(message.interestAccumulated);
        }
        if (message.borrowMetaData !== undefined) {
            exports.BorrowMetaData.encode(message.borrowMetaData, writer.uint32(154).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedVault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.appId = reader.uint64();
                    break;
                case 3:
                    message.appVaultTypeId = reader.string();
                    break;
                case 4:
                    message.originalVaultId = reader.string();
                    break;
                case 5:
                    message.extendedPairVaultId = reader.uint64();
                    break;
                case 6:
                    message.owner = reader.string();
                    break;
                case 7:
                    message.amountIn = reader.string();
                    break;
                case 8:
                    message.amountOut = reader.string();
                    break;
                case 9:
                    message.updatedAmountOut = reader.string();
                    break;
                case 10:
                    message.initiator = reader.string();
                    break;
                case 11:
                    message.isAuctionComplete = reader.bool();
                    break;
                case 12:
                    message.isAuctionInProgress = reader.bool();
                    break;
                case 13:
                    message.crAtLiquidation = reader.string();
                    break;
                case 14:
                    message.currentCollateralisationRatio = reader.string();
                    break;
                case 15:
                    message.collateralToBeAuctioned = reader.string();
                    break;
                case 16:
                    message.liquidationTimestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 17:
                    message.selloffHistory.push(reader.string());
                    break;
                case 18:
                    message.interestAccumulated = reader.string();
                    break;
                case 19:
                    message.borrowMetaData = exports.BorrowMetaData.decode(reader, reader.uint32());
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            appVaultTypeId: isSet(object.appVaultTypeId)
                ? String(object.appVaultTypeId)
                : "",
            originalVaultId: isSet(object.originalVaultId)
                ? String(object.originalVaultId)
                : "",
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO,
            owner: isSet(object.owner) ? String(object.owner) : "",
            amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
            amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
            updatedAmountOut: isSet(object.updatedAmountOut)
                ? String(object.updatedAmountOut)
                : "",
            initiator: isSet(object.initiator) ? String(object.initiator) : "",
            isAuctionComplete: isSet(object.isAuctionComplete)
                ? Boolean(object.isAuctionComplete)
                : false,
            isAuctionInProgress: isSet(object.isAuctionInProgress)
                ? Boolean(object.isAuctionInProgress)
                : false,
            crAtLiquidation: isSet(object.crAtLiquidation)
                ? String(object.crAtLiquidation)
                : "",
            currentCollateralisationRatio: isSet(object.currentCollateralisationRatio)
                ? String(object.currentCollateralisationRatio)
                : "",
            collateralToBeAuctioned: isSet(object.collateralToBeAuctioned)
                ? String(object.collateralToBeAuctioned)
                : "",
            liquidationTimestamp: isSet(object.liquidationTimestamp)
                ? fromJsonTimestamp(object.liquidationTimestamp)
                : undefined,
            selloffHistory: Array.isArray(object === null || object === void 0 ? void 0 : object.selloffHistory)
                ? object.selloffHistory.map((e) => String(e))
                : [],
            interestAccumulated: isSet(object.interestAccumulated)
                ? String(object.interestAccumulated)
                : "",
            borrowMetaData: isSet(object.borrowMetaData)
                ? exports.BorrowMetaData.fromJSON(object.borrowMetaData)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.appVaultTypeId !== undefined &&
            (obj.appVaultTypeId = message.appVaultTypeId);
        message.originalVaultId !== undefined &&
            (obj.originalVaultId = message.originalVaultId);
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.amountIn !== undefined && (obj.amountIn = message.amountIn);
        message.amountOut !== undefined && (obj.amountOut = message.amountOut);
        message.updatedAmountOut !== undefined &&
            (obj.updatedAmountOut = message.updatedAmountOut);
        message.initiator !== undefined && (obj.initiator = message.initiator);
        message.isAuctionComplete !== undefined &&
            (obj.isAuctionComplete = message.isAuctionComplete);
        message.isAuctionInProgress !== undefined &&
            (obj.isAuctionInProgress = message.isAuctionInProgress);
        message.crAtLiquidation !== undefined &&
            (obj.crAtLiquidation = message.crAtLiquidation);
        message.currentCollateralisationRatio !== undefined &&
            (obj.currentCollateralisationRatio =
                message.currentCollateralisationRatio);
        message.collateralToBeAuctioned !== undefined &&
            (obj.collateralToBeAuctioned = message.collateralToBeAuctioned);
        message.liquidationTimestamp !== undefined &&
            (obj.liquidationTimestamp = message.liquidationTimestamp.toISOString());
        if (message.selloffHistory) {
            obj.selloffHistory = message.selloffHistory.map((e) => e);
        }
        else {
            obj.selloffHistory = [];
        }
        message.interestAccumulated !== undefined &&
            (obj.interestAccumulated = message.interestAccumulated);
        message.borrowMetaData !== undefined &&
            (obj.borrowMetaData = message.borrowMetaData
                ? exports.BorrowMetaData.toJSON(message.borrowMetaData)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        const message = createBaseLockedVault();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.appVaultTypeId = (_a = object.appVaultTypeId) !== null && _a !== void 0 ? _a : "";
        message.originalVaultId = (_b = object.originalVaultId) !== null && _b !== void 0 ? _b : "";
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.owner = (_c = object.owner) !== null && _c !== void 0 ? _c : "";
        message.amountIn = (_d = object.amountIn) !== null && _d !== void 0 ? _d : "";
        message.amountOut = (_e = object.amountOut) !== null && _e !== void 0 ? _e : "";
        message.updatedAmountOut = (_f = object.updatedAmountOut) !== null && _f !== void 0 ? _f : "";
        message.initiator = (_g = object.initiator) !== null && _g !== void 0 ? _g : "";
        message.isAuctionComplete = (_h = object.isAuctionComplete) !== null && _h !== void 0 ? _h : false;
        message.isAuctionInProgress = (_j = object.isAuctionInProgress) !== null && _j !== void 0 ? _j : false;
        message.crAtLiquidation = (_k = object.crAtLiquidation) !== null && _k !== void 0 ? _k : "";
        message.currentCollateralisationRatio =
            (_l = object.currentCollateralisationRatio) !== null && _l !== void 0 ? _l : "";
        message.collateralToBeAuctioned = (_m = object.collateralToBeAuctioned) !== null && _m !== void 0 ? _m : "";
        message.liquidationTimestamp = (_o = object.liquidationTimestamp) !== null && _o !== void 0 ? _o : undefined;
        message.selloffHistory = ((_p = object.selloffHistory) === null || _p === void 0 ? void 0 : _p.map((e) => e)) || [];
        message.interestAccumulated = (_q = object.interestAccumulated) !== null && _q !== void 0 ? _q : "";
        message.borrowMetaData =
            object.borrowMetaData !== undefined && object.borrowMetaData !== null
                ? exports.BorrowMetaData.fromPartial(object.borrowMetaData)
                : undefined;
        return message;
    },
};
function createBaseBorrowMetaData() {
    return {
        lendingId: long_1.default.UZERO,
        isStableBorrow: false,
        stableBorrowRate: "",
        bridgedAssetAmount: undefined,
    };
}
exports.BorrowMetaData = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.lendingId.isZero()) {
            writer.uint32(8).uint64(message.lendingId);
        }
        if (message.isStableBorrow === true) {
            writer.uint32(16).bool(message.isStableBorrow);
        }
        if (message.stableBorrowRate !== "") {
            writer.uint32(26).string(message.stableBorrowRate);
        }
        if (message.bridgedAssetAmount !== undefined) {
            coin_1.Coin.encode(message.bridgedAssetAmount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBorrowMetaData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lendingId = reader.uint64();
                    break;
                case 2:
                    message.isStableBorrow = reader.bool();
                    break;
                case 3:
                    message.stableBorrowRate = reader.string();
                    break;
                case 4:
                    message.bridgedAssetAmount = coin_1.Coin.decode(reader, reader.uint32());
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
            isStableBorrow: isSet(object.isStableBorrow)
                ? Boolean(object.isStableBorrow)
                : false,
            stableBorrowRate: isSet(object.stableBorrowRate)
                ? String(object.stableBorrowRate)
                : "",
            bridgedAssetAmount: isSet(object.bridgedAssetAmount)
                ? coin_1.Coin.fromJSON(object.bridgedAssetAmount)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lendingId !== undefined &&
            (obj.lendingId = (message.lendingId || long_1.default.UZERO).toString());
        message.isStableBorrow !== undefined &&
            (obj.isStableBorrow = message.isStableBorrow);
        message.stableBorrowRate !== undefined &&
            (obj.stableBorrowRate = message.stableBorrowRate);
        message.bridgedAssetAmount !== undefined &&
            (obj.bridgedAssetAmount = message.bridgedAssetAmount
                ? coin_1.Coin.toJSON(message.bridgedAssetAmount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBorrowMetaData();
        message.lendingId =
            object.lendingId !== undefined && object.lendingId !== null
                ? long_1.default.fromValue(object.lendingId)
                : long_1.default.UZERO;
        message.isStableBorrow = (_a = object.isStableBorrow) !== null && _a !== void 0 ? _a : false;
        message.stableBorrowRate = (_b = object.stableBorrowRate) !== null && _b !== void 0 ? _b : "";
        message.bridgedAssetAmount =
            object.bridgedAssetAmount !== undefined &&
                object.bridgedAssetAmount !== null
                ? coin_1.Coin.fromPartial(object.bridgedAssetAmount)
                : undefined;
        return message;
    },
};
function createBaseLockedVaultToAppMapping() {
    return { appId: long_1.default.UZERO, lockedVault: [] };
}
exports.LockedVaultToAppMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        for (const v of message.lockedVault) {
            exports.LockedVault.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedVaultToAppMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.lockedVault.push(exports.LockedVault.decode(reader, reader.uint32()));
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
            lockedVault: Array.isArray(object === null || object === void 0 ? void 0 : object.lockedVault)
                ? object.lockedVault.map((e) => exports.LockedVault.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        if (message.lockedVault) {
            obj.lockedVault = message.lockedVault.map((e) => e ? exports.LockedVault.toJSON(e) : undefined);
        }
        else {
            obj.lockedVault = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLockedVaultToAppMapping();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.lockedVault =
            ((_a = object.lockedVault) === null || _a === void 0 ? void 0 : _a.map((e) => exports.LockedVault.fromPartial(e))) || [];
        return message;
    },
};
function createBaseWhitelistedAppIds() {
    return { whitelistedAppIds: [] };
}
exports.WhitelistedAppIds = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.whitelistedAppIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWhitelistedAppIds();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.whitelistedAppIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.whitelistedAppIds.push(reader.uint64());
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
            whitelistedAppIds: Array.isArray(object === null || object === void 0 ? void 0 : object.whitelistedAppIds)
                ? object.whitelistedAppIds.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.whitelistedAppIds) {
            obj.whitelistedAppIds = message.whitelistedAppIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.whitelistedAppIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseWhitelistedAppIds();
        message.whitelistedAppIds =
            ((_a = object.whitelistedAppIds) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
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
//# sourceMappingURL=locked_vault.js.map