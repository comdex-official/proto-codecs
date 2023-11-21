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
exports.LockedVault = exports.LiquidationOffsetHolder = exports.EnglishAuctionParam = exports.DutchAuctionParam = exports.AssetTxData = exports.AppReserveFundsTxData = exports.AppReserveFunds = exports.LiquidationWhiteListing = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.liquidationsV2.v1beta1";
function createBaseLiquidationWhiteListing() {
    return {
        appId: long_1.default.UZERO,
        initiator: false,
        isDutchActivated: false,
        dutchAuctionParam: undefined,
        isEnglishActivated: false,
        englishAuctionParam: undefined,
        keeeperIncentive: "",
    };
}
exports.LiquidationWhiteListing = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (message.initiator === true) {
            writer.uint32(16).bool(message.initiator);
        }
        if (message.isDutchActivated === true) {
            writer.uint32(24).bool(message.isDutchActivated);
        }
        if (message.dutchAuctionParam !== undefined) {
            exports.DutchAuctionParam.encode(message.dutchAuctionParam, writer.uint32(34).fork()).ldelim();
        }
        if (message.isEnglishActivated === true) {
            writer.uint32(40).bool(message.isEnglishActivated);
        }
        if (message.englishAuctionParam !== undefined) {
            exports.EnglishAuctionParam.encode(message.englishAuctionParam, writer.uint32(50).fork()).ldelim();
        }
        if (message.keeeperIncentive !== "") {
            writer.uint32(58).string(message.keeeperIncentive);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiquidationWhiteListing();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.initiator = reader.bool();
                    break;
                case 3:
                    message.isDutchActivated = reader.bool();
                    break;
                case 4:
                    message.dutchAuctionParam = exports.DutchAuctionParam.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.isEnglishActivated = reader.bool();
                    break;
                case 6:
                    message.englishAuctionParam = exports.EnglishAuctionParam.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.keeeperIncentive = reader.string();
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
            initiator: isSet(object.initiator) ? Boolean(object.initiator) : false,
            isDutchActivated: isSet(object.isDutchActivated)
                ? Boolean(object.isDutchActivated)
                : false,
            dutchAuctionParam: isSet(object.dutchAuctionParam)
                ? exports.DutchAuctionParam.fromJSON(object.dutchAuctionParam)
                : undefined,
            isEnglishActivated: isSet(object.isEnglishActivated)
                ? Boolean(object.isEnglishActivated)
                : false,
            englishAuctionParam: isSet(object.englishAuctionParam)
                ? exports.EnglishAuctionParam.fromJSON(object.englishAuctionParam)
                : undefined,
            keeeperIncentive: isSet(object.keeeperIncentive)
                ? String(object.keeeperIncentive)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.initiator !== undefined && (obj.initiator = message.initiator);
        message.isDutchActivated !== undefined &&
            (obj.isDutchActivated = message.isDutchActivated);
        message.dutchAuctionParam !== undefined &&
            (obj.dutchAuctionParam = message.dutchAuctionParam
                ? exports.DutchAuctionParam.toJSON(message.dutchAuctionParam)
                : undefined);
        message.isEnglishActivated !== undefined &&
            (obj.isEnglishActivated = message.isEnglishActivated);
        message.englishAuctionParam !== undefined &&
            (obj.englishAuctionParam = message.englishAuctionParam
                ? exports.EnglishAuctionParam.toJSON(message.englishAuctionParam)
                : undefined);
        message.keeeperIncentive !== undefined &&
            (obj.keeeperIncentive = message.keeeperIncentive);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseLiquidationWhiteListing();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.initiator = (_a = object.initiator) !== null && _a !== void 0 ? _a : false;
        message.isDutchActivated = (_b = object.isDutchActivated) !== null && _b !== void 0 ? _b : false;
        message.dutchAuctionParam =
            object.dutchAuctionParam !== undefined &&
                object.dutchAuctionParam !== null
                ? exports.DutchAuctionParam.fromPartial(object.dutchAuctionParam)
                : undefined;
        message.isEnglishActivated = (_c = object.isEnglishActivated) !== null && _c !== void 0 ? _c : false;
        message.englishAuctionParam =
            object.englishAuctionParam !== undefined &&
                object.englishAuctionParam !== null
                ? exports.EnglishAuctionParam.fromPartial(object.englishAuctionParam)
                : undefined;
        message.keeeperIncentive = (_d = object.keeeperIncentive) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseAppReserveFunds() {
    return { appId: long_1.default.UZERO, assetId: long_1.default.UZERO, tokenQuantity: undefined };
}
exports.AppReserveFunds = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        if (message.tokenQuantity !== undefined) {
            coin_1.Coin.encode(message.tokenQuantity, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppReserveFunds();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.assetId = reader.uint64();
                    break;
                case 3:
                    message.tokenQuantity = coin_1.Coin.decode(reader, reader.uint32());
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
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            tokenQuantity: isSet(object.tokenQuantity)
                ? coin_1.Coin.fromJSON(object.tokenQuantity)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.tokenQuantity !== undefined &&
            (obj.tokenQuantity = message.tokenQuantity
                ? coin_1.Coin.toJSON(message.tokenQuantity)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAppReserveFunds();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.tokenQuantity =
            object.tokenQuantity !== undefined && object.tokenQuantity !== null
                ? coin_1.Coin.fromPartial(object.tokenQuantity)
                : undefined;
        return message;
    },
};
function createBaseAppReserveFundsTxData() {
    return { appId: long_1.default.UZERO, assetTxData: [] };
}
exports.AppReserveFundsTxData = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        for (const v of message.assetTxData) {
            exports.AssetTxData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppReserveFundsTxData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.assetTxData.push(exports.AssetTxData.decode(reader, reader.uint32()));
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
            assetTxData: Array.isArray(object === null || object === void 0 ? void 0 : object.assetTxData)
                ? object.assetTxData.map((e) => exports.AssetTxData.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        if (message.assetTxData) {
            obj.assetTxData = message.assetTxData.map((e) => e ? exports.AssetTxData.toJSON(e) : undefined);
        }
        else {
            obj.assetTxData = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAppReserveFundsTxData();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetTxData =
            ((_a = object.assetTxData) === null || _a === void 0 ? void 0 : _a.map((e) => exports.AssetTxData.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAssetTxData() {
    return { assetId: long_1.default.UZERO, txType: "", tokenQuantity: undefined };
}
exports.AssetTxData = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (message.txType !== "") {
            writer.uint32(18).string(message.txType);
        }
        if (message.tokenQuantity !== undefined) {
            coin_1.Coin.encode(message.tokenQuantity, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetTxData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint64();
                    break;
                case 2:
                    message.txType = reader.string();
                    break;
                case 3:
                    message.tokenQuantity = coin_1.Coin.decode(reader, reader.uint32());
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
            txType: isSet(object.txType) ? String(object.txType) : "",
            tokenQuantity: isSet(object.tokenQuantity)
                ? coin_1.Coin.fromJSON(object.tokenQuantity)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.txType !== undefined && (obj.txType = message.txType);
        message.tokenQuantity !== undefined &&
            (obj.tokenQuantity = message.tokenQuantity
                ? coin_1.Coin.toJSON(message.tokenQuantity)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAssetTxData();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.txType = (_a = object.txType) !== null && _a !== void 0 ? _a : "";
        message.tokenQuantity =
            object.tokenQuantity !== undefined && object.tokenQuantity !== null
                ? coin_1.Coin.fromPartial(object.tokenQuantity)
                : undefined;
        return message;
    },
};
function createBaseDutchAuctionParam() {
    return { premium: "", discount: "", decrementFactor: "" };
}
exports.DutchAuctionParam = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.premium !== "") {
            writer.uint32(10).string(message.premium);
        }
        if (message.discount !== "") {
            writer.uint32(18).string(message.discount);
        }
        if (message.decrementFactor !== "") {
            writer.uint32(26).string(message.decrementFactor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDutchAuctionParam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.premium = reader.string();
                    break;
                case 2:
                    message.discount = reader.string();
                    break;
                case 3:
                    message.decrementFactor = reader.string();
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
            premium: isSet(object.premium) ? String(object.premium) : "",
            discount: isSet(object.discount) ? String(object.discount) : "",
            decrementFactor: isSet(object.decrementFactor)
                ? String(object.decrementFactor)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.premium !== undefined && (obj.premium = message.premium);
        message.discount !== undefined && (obj.discount = message.discount);
        message.decrementFactor !== undefined &&
            (obj.decrementFactor = message.decrementFactor);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDutchAuctionParam();
        message.premium = (_a = object.premium) !== null && _a !== void 0 ? _a : "";
        message.discount = (_b = object.discount) !== null && _b !== void 0 ? _b : "";
        message.decrementFactor = (_c = object.decrementFactor) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseEnglishAuctionParam() {
    return { decrementFactor: "" };
}
exports.EnglishAuctionParam = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.decrementFactor !== "") {
            writer.uint32(10).string(message.decrementFactor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnglishAuctionParam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.decrementFactor = reader.string();
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
            decrementFactor: isSet(object.decrementFactor)
                ? String(object.decrementFactor)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.decrementFactor !== undefined &&
            (obj.decrementFactor = message.decrementFactor);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseEnglishAuctionParam();
        message.decrementFactor = (_a = object.decrementFactor) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseLiquidationOffsetHolder() {
    return { appId: long_1.default.UZERO, currentOffset: long_1.default.UZERO };
}
exports.LiquidationOffsetHolder = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.currentOffset.isZero()) {
            writer.uint32(16).uint64(message.currentOffset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiquidationOffsetHolder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.currentOffset = reader.uint64();
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
            currentOffset: isSet(object.currentOffset)
                ? long_1.default.fromValue(object.currentOffset)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.currentOffset !== undefined &&
            (obj.currentOffset = (message.currentOffset || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLiquidationOffsetHolder();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.currentOffset =
            object.currentOffset !== undefined && object.currentOffset !== null
                ? long_1.default.fromValue(object.currentOffset)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseLockedVault() {
    return {
        id: long_1.default.UZERO,
        appId: long_1.default.UZERO,
        originalVaultId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        owner: "",
        collateralToken: undefined,
        debtToken: undefined,
        currentCollateralisationRatio: "",
        collateralToBeAuctioned: undefined,
        targetDebt: undefined,
        liquidationTimestamp: undefined,
        isInternalKeeper: false,
        internalKeeperAddress: "",
        externalKeeperAddress: "",
        feeToBeCollected: "",
        bonusToBeGiven: "",
        initiatorType: "",
        auctionType: false,
        isDebtCmst: false,
        collateralAssetId: long_1.default.UZERO,
        debtAssetId: long_1.default.UZERO,
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
        if (!message.originalVaultId.isZero()) {
            writer.uint32(24).uint64(message.originalVaultId);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(32).uint64(message.extendedPairVaultId);
        }
        if (message.owner !== "") {
            writer.uint32(42).string(message.owner);
        }
        if (message.collateralToken !== undefined) {
            coin_1.Coin.encode(message.collateralToken, writer.uint32(50).fork()).ldelim();
        }
        if (message.debtToken !== undefined) {
            coin_1.Coin.encode(message.debtToken, writer.uint32(58).fork()).ldelim();
        }
        if (message.currentCollateralisationRatio !== "") {
            writer.uint32(66).string(message.currentCollateralisationRatio);
        }
        if (message.collateralToBeAuctioned !== undefined) {
            coin_1.Coin.encode(message.collateralToBeAuctioned, writer.uint32(74).fork()).ldelim();
        }
        if (message.targetDebt !== undefined) {
            coin_1.Coin.encode(message.targetDebt, writer.uint32(82).fork()).ldelim();
        }
        if (message.liquidationTimestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.liquidationTimestamp), writer.uint32(90).fork()).ldelim();
        }
        if (message.isInternalKeeper === true) {
            writer.uint32(96).bool(message.isInternalKeeper);
        }
        if (message.internalKeeperAddress !== "") {
            writer.uint32(106).string(message.internalKeeperAddress);
        }
        if (message.externalKeeperAddress !== "") {
            writer.uint32(122).string(message.externalKeeperAddress);
        }
        if (message.feeToBeCollected !== "") {
            writer.uint32(130).string(message.feeToBeCollected);
        }
        if (message.bonusToBeGiven !== "") {
            writer.uint32(138).string(message.bonusToBeGiven);
        }
        if (message.initiatorType !== "") {
            writer.uint32(146).string(message.initiatorType);
        }
        if (message.auctionType === true) {
            writer.uint32(152).bool(message.auctionType);
        }
        if (message.isDebtCmst === true) {
            writer.uint32(160).bool(message.isDebtCmst);
        }
        if (!message.collateralAssetId.isZero()) {
            writer.uint32(168).uint64(message.collateralAssetId);
        }
        if (!message.debtAssetId.isZero()) {
            writer.uint32(176).uint64(message.debtAssetId);
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
                    message.originalVaultId = reader.uint64();
                    break;
                case 4:
                    message.extendedPairVaultId = reader.uint64();
                    break;
                case 5:
                    message.owner = reader.string();
                    break;
                case 6:
                    message.collateralToken = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.debtToken = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.currentCollateralisationRatio = reader.string();
                    break;
                case 9:
                    message.collateralToBeAuctioned = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.targetDebt = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.liquidationTimestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.isInternalKeeper = reader.bool();
                    break;
                case 13:
                    message.internalKeeperAddress = reader.string();
                    break;
                case 15:
                    message.externalKeeperAddress = reader.string();
                    break;
                case 16:
                    message.feeToBeCollected = reader.string();
                    break;
                case 17:
                    message.bonusToBeGiven = reader.string();
                    break;
                case 18:
                    message.initiatorType = reader.string();
                    break;
                case 19:
                    message.auctionType = reader.bool();
                    break;
                case 20:
                    message.isDebtCmst = reader.bool();
                    break;
                case 21:
                    message.collateralAssetId = reader.uint64();
                    break;
                case 22:
                    message.debtAssetId = reader.uint64();
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
            originalVaultId: isSet(object.originalVaultId)
                ? long_1.default.fromValue(object.originalVaultId)
                : long_1.default.UZERO,
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO,
            owner: isSet(object.owner) ? String(object.owner) : "",
            collateralToken: isSet(object.collateralToken)
                ? coin_1.Coin.fromJSON(object.collateralToken)
                : undefined,
            debtToken: isSet(object.debtToken)
                ? coin_1.Coin.fromJSON(object.debtToken)
                : undefined,
            currentCollateralisationRatio: isSet(object.currentCollateralisationRatio)
                ? String(object.currentCollateralisationRatio)
                : "",
            collateralToBeAuctioned: isSet(object.collateralToBeAuctioned)
                ? coin_1.Coin.fromJSON(object.collateralToBeAuctioned)
                : undefined,
            targetDebt: isSet(object.targetDebt)
                ? coin_1.Coin.fromJSON(object.targetDebt)
                : undefined,
            liquidationTimestamp: isSet(object.liquidationTimestamp)
                ? fromJsonTimestamp(object.liquidationTimestamp)
                : undefined,
            isInternalKeeper: isSet(object.isInternalKeeper)
                ? Boolean(object.isInternalKeeper)
                : false,
            internalKeeperAddress: isSet(object.internalKeeperAddress)
                ? String(object.internalKeeperAddress)
                : "",
            externalKeeperAddress: isSet(object.externalKeeperAddress)
                ? String(object.externalKeeperAddress)
                : "",
            feeToBeCollected: isSet(object.feeToBeCollected)
                ? String(object.feeToBeCollected)
                : "",
            bonusToBeGiven: isSet(object.bonusToBeGiven)
                ? String(object.bonusToBeGiven)
                : "",
            initiatorType: isSet(object.initiatorType)
                ? String(object.initiatorType)
                : "",
            auctionType: isSet(object.auctionType)
                ? Boolean(object.auctionType)
                : false,
            isDebtCmst: isSet(object.isDebtCmst) ? Boolean(object.isDebtCmst) : false,
            collateralAssetId: isSet(object.collateralAssetId)
                ? long_1.default.fromValue(object.collateralAssetId)
                : long_1.default.UZERO,
            debtAssetId: isSet(object.debtAssetId)
                ? long_1.default.fromValue(object.debtAssetId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.originalVaultId !== undefined &&
            (obj.originalVaultId = (message.originalVaultId || long_1.default.UZERO).toString());
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.collateralToken !== undefined &&
            (obj.collateralToken = message.collateralToken
                ? coin_1.Coin.toJSON(message.collateralToken)
                : undefined);
        message.debtToken !== undefined &&
            (obj.debtToken = message.debtToken
                ? coin_1.Coin.toJSON(message.debtToken)
                : undefined);
        message.currentCollateralisationRatio !== undefined &&
            (obj.currentCollateralisationRatio =
                message.currentCollateralisationRatio);
        message.collateralToBeAuctioned !== undefined &&
            (obj.collateralToBeAuctioned = message.collateralToBeAuctioned
                ? coin_1.Coin.toJSON(message.collateralToBeAuctioned)
                : undefined);
        message.targetDebt !== undefined &&
            (obj.targetDebt = message.targetDebt
                ? coin_1.Coin.toJSON(message.targetDebt)
                : undefined);
        message.liquidationTimestamp !== undefined &&
            (obj.liquidationTimestamp = message.liquidationTimestamp.toISOString());
        message.isInternalKeeper !== undefined &&
            (obj.isInternalKeeper = message.isInternalKeeper);
        message.internalKeeperAddress !== undefined &&
            (obj.internalKeeperAddress = message.internalKeeperAddress);
        message.externalKeeperAddress !== undefined &&
            (obj.externalKeeperAddress = message.externalKeeperAddress);
        message.feeToBeCollected !== undefined &&
            (obj.feeToBeCollected = message.feeToBeCollected);
        message.bonusToBeGiven !== undefined &&
            (obj.bonusToBeGiven = message.bonusToBeGiven);
        message.initiatorType !== undefined &&
            (obj.initiatorType = message.initiatorType);
        message.auctionType !== undefined &&
            (obj.auctionType = message.auctionType);
        message.isDebtCmst !== undefined && (obj.isDebtCmst = message.isDebtCmst);
        message.collateralAssetId !== undefined &&
            (obj.collateralAssetId = (message.collateralAssetId || long_1.default.UZERO).toString());
        message.debtAssetId !== undefined &&
            (obj.debtAssetId = (message.debtAssetId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseLockedVault();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.originalVaultId =
            object.originalVaultId !== undefined && object.originalVaultId !== null
                ? long_1.default.fromValue(object.originalVaultId)
                : long_1.default.UZERO;
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.collateralToken =
            object.collateralToken !== undefined && object.collateralToken !== null
                ? coin_1.Coin.fromPartial(object.collateralToken)
                : undefined;
        message.debtToken =
            object.debtToken !== undefined && object.debtToken !== null
                ? coin_1.Coin.fromPartial(object.debtToken)
                : undefined;
        message.currentCollateralisationRatio =
            (_b = object.currentCollateralisationRatio) !== null && _b !== void 0 ? _b : "";
        message.collateralToBeAuctioned =
            object.collateralToBeAuctioned !== undefined &&
                object.collateralToBeAuctioned !== null
                ? coin_1.Coin.fromPartial(object.collateralToBeAuctioned)
                : undefined;
        message.targetDebt =
            object.targetDebt !== undefined && object.targetDebt !== null
                ? coin_1.Coin.fromPartial(object.targetDebt)
                : undefined;
        message.liquidationTimestamp = (_c = object.liquidationTimestamp) !== null && _c !== void 0 ? _c : undefined;
        message.isInternalKeeper = (_d = object.isInternalKeeper) !== null && _d !== void 0 ? _d : false;
        message.internalKeeperAddress = (_e = object.internalKeeperAddress) !== null && _e !== void 0 ? _e : "";
        message.externalKeeperAddress = (_f = object.externalKeeperAddress) !== null && _f !== void 0 ? _f : "";
        message.feeToBeCollected = (_g = object.feeToBeCollected) !== null && _g !== void 0 ? _g : "";
        message.bonusToBeGiven = (_h = object.bonusToBeGiven) !== null && _h !== void 0 ? _h : "";
        message.initiatorType = (_j = object.initiatorType) !== null && _j !== void 0 ? _j : "";
        message.auctionType = (_k = object.auctionType) !== null && _k !== void 0 ? _k : false;
        message.isDebtCmst = (_l = object.isDebtCmst) !== null && _l !== void 0 ? _l : false;
        message.collateralAssetId =
            object.collateralAssetId !== undefined &&
                object.collateralAssetId !== null
                ? long_1.default.fromValue(object.collateralAssetId)
                : long_1.default.UZERO;
        message.debtAssetId =
            object.debtAssetId !== undefined && object.debtAssetId !== null
                ? long_1.default.fromValue(object.debtAssetId)
                : long_1.default.UZERO;
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
//# sourceMappingURL=liquidate.js.map