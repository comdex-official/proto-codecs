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
exports.AppAssetIdToAuctionLookupTable = exports.AppToDenomsMapping = exports.CollectorLookupTableData = exports.AppToAssetIdCollectorMapping = exports.AppAssetIdToFeeCollectedData = exports.CollectorData = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.collector.v1beta1";
function createBaseCollectorData() {
    return {
        collectedStabilityFee: "",
        collectedClosingFee: "",
        collectedOpeningFee: "",
        liquidationRewardsCollected: "",
    };
}
exports.CollectorData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectedStabilityFee !== "") {
            writer.uint32(10).string(message.collectedStabilityFee);
        }
        if (message.collectedClosingFee !== "") {
            writer.uint32(18).string(message.collectedClosingFee);
        }
        if (message.collectedOpeningFee !== "") {
            writer.uint32(26).string(message.collectedOpeningFee);
        }
        if (message.liquidationRewardsCollected !== "") {
            writer.uint32(34).string(message.liquidationRewardsCollected);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCollectorData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectedStabilityFee = reader.string();
                    break;
                case 2:
                    message.collectedClosingFee = reader.string();
                    break;
                case 3:
                    message.collectedOpeningFee = reader.string();
                    break;
                case 4:
                    message.liquidationRewardsCollected = reader.string();
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
            collectedStabilityFee: isSet(object.collectedStabilityFee)
                ? String(object.collectedStabilityFee)
                : "",
            collectedClosingFee: isSet(object.collectedClosingFee)
                ? String(object.collectedClosingFee)
                : "",
            collectedOpeningFee: isSet(object.collectedOpeningFee)
                ? String(object.collectedOpeningFee)
                : "",
            liquidationRewardsCollected: isSet(object.liquidationRewardsCollected)
                ? String(object.liquidationRewardsCollected)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectedStabilityFee !== undefined &&
            (obj.collectedStabilityFee = message.collectedStabilityFee);
        message.collectedClosingFee !== undefined &&
            (obj.collectedClosingFee = message.collectedClosingFee);
        message.collectedOpeningFee !== undefined &&
            (obj.collectedOpeningFee = message.collectedOpeningFee);
        message.liquidationRewardsCollected !== undefined &&
            (obj.liquidationRewardsCollected = message.liquidationRewardsCollected);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCollectorData();
        message.collectedStabilityFee = (_a = object.collectedStabilityFee) !== null && _a !== void 0 ? _a : "";
        message.collectedClosingFee = (_b = object.collectedClosingFee) !== null && _b !== void 0 ? _b : "";
        message.collectedOpeningFee = (_c = object.collectedOpeningFee) !== null && _c !== void 0 ? _c : "";
        message.liquidationRewardsCollected =
            (_d = object.liquidationRewardsCollected) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseAppAssetIdToFeeCollectedData() {
    return { appId: long_1.default.UZERO, assetId: long_1.default.UZERO, netFeesCollected: "" };
}
exports.AppAssetIdToFeeCollectedData = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        if (message.netFeesCollected !== "") {
            writer.uint32(26).string(message.netFeesCollected);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppAssetIdToFeeCollectedData();
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
                    message.netFeesCollected = reader.string();
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
            netFeesCollected: isSet(object.netFeesCollected)
                ? String(object.netFeesCollected)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.netFeesCollected !== undefined &&
            (obj.netFeesCollected = message.netFeesCollected);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAppAssetIdToFeeCollectedData();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.netFeesCollected = (_a = object.netFeesCollected) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAppToAssetIdCollectorMapping() {
    return { appId: long_1.default.UZERO, assetId: long_1.default.UZERO, collector: undefined };
}
exports.AppToAssetIdCollectorMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        if (message.collector !== undefined) {
            exports.CollectorData.encode(message.collector, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppToAssetIdCollectorMapping();
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
                    message.collector = exports.CollectorData.decode(reader, reader.uint32());
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
            collector: isSet(object.collector)
                ? exports.CollectorData.fromJSON(object.collector)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.collector !== undefined &&
            (obj.collector = message.collector
                ? exports.CollectorData.toJSON(message.collector)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAppToAssetIdCollectorMapping();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.collector =
            object.collector !== undefined && object.collector !== null
                ? exports.CollectorData.fromPartial(object.collector)
                : undefined;
        return message;
    },
};
function createBaseCollectorLookupTableData() {
    return {
        appId: long_1.default.UZERO,
        collectorAssetId: long_1.default.UZERO,
        secondaryAssetId: long_1.default.UZERO,
        surplusThreshold: "",
        debtThreshold: "",
        lockerSavingRate: "",
        lotSize: "",
        bidFactor: "",
        debtLotSize: "",
        blockHeight: long_1.default.ZERO,
        blockTime: undefined,
    };
}
exports.CollectorLookupTableData = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.collectorAssetId.isZero()) {
            writer.uint32(16).uint64(message.collectorAssetId);
        }
        if (!message.secondaryAssetId.isZero()) {
            writer.uint32(24).uint64(message.secondaryAssetId);
        }
        if (message.surplusThreshold !== "") {
            writer.uint32(34).string(message.surplusThreshold);
        }
        if (message.debtThreshold !== "") {
            writer.uint32(42).string(message.debtThreshold);
        }
        if (message.lockerSavingRate !== "") {
            writer.uint32(50).string(message.lockerSavingRate);
        }
        if (message.lotSize !== "") {
            writer.uint32(58).string(message.lotSize);
        }
        if (message.bidFactor !== "") {
            writer.uint32(66).string(message.bidFactor);
        }
        if (message.debtLotSize !== "") {
            writer.uint32(74).string(message.debtLotSize);
        }
        if (!message.blockHeight.isZero()) {
            writer.uint32(80).int64(message.blockHeight);
        }
        if (message.blockTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCollectorLookupTableData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.collectorAssetId = reader.uint64();
                    break;
                case 3:
                    message.secondaryAssetId = reader.uint64();
                    break;
                case 4:
                    message.surplusThreshold = reader.string();
                    break;
                case 5:
                    message.debtThreshold = reader.string();
                    break;
                case 6:
                    message.lockerSavingRate = reader.string();
                    break;
                case 7:
                    message.lotSize = reader.string();
                    break;
                case 8:
                    message.bidFactor = reader.string();
                    break;
                case 9:
                    message.debtLotSize = reader.string();
                    break;
                case 10:
                    message.blockHeight = reader.int64();
                    break;
                case 11:
                    message.blockTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            collectorAssetId: isSet(object.collectorAssetId)
                ? long_1.default.fromValue(object.collectorAssetId)
                : long_1.default.UZERO,
            secondaryAssetId: isSet(object.secondaryAssetId)
                ? long_1.default.fromValue(object.secondaryAssetId)
                : long_1.default.UZERO,
            surplusThreshold: isSet(object.surplusThreshold)
                ? String(object.surplusThreshold)
                : "",
            debtThreshold: isSet(object.debtThreshold)
                ? String(object.debtThreshold)
                : "",
            lockerSavingRate: isSet(object.lockerSavingRate)
                ? String(object.lockerSavingRate)
                : "",
            lotSize: isSet(object.lotSize) ? String(object.lotSize) : "",
            bidFactor: isSet(object.bidFactor) ? String(object.bidFactor) : "",
            debtLotSize: isSet(object.debtLotSize) ? String(object.debtLotSize) : "",
            blockHeight: isSet(object.blockHeight)
                ? long_1.default.fromValue(object.blockHeight)
                : long_1.default.ZERO,
            blockTime: isSet(object.blockTime)
                ? fromJsonTimestamp(object.blockTime)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.collectorAssetId !== undefined &&
            (obj.collectorAssetId = (message.collectorAssetId || long_1.default.UZERO).toString());
        message.secondaryAssetId !== undefined &&
            (obj.secondaryAssetId = (message.secondaryAssetId || long_1.default.UZERO).toString());
        message.surplusThreshold !== undefined &&
            (obj.surplusThreshold = message.surplusThreshold);
        message.debtThreshold !== undefined &&
            (obj.debtThreshold = message.debtThreshold);
        message.lockerSavingRate !== undefined &&
            (obj.lockerSavingRate = message.lockerSavingRate);
        message.lotSize !== undefined && (obj.lotSize = message.lotSize);
        message.bidFactor !== undefined && (obj.bidFactor = message.bidFactor);
        message.debtLotSize !== undefined &&
            (obj.debtLotSize = message.debtLotSize);
        message.blockHeight !== undefined &&
            (obj.blockHeight = (message.blockHeight || long_1.default.ZERO).toString());
        message.blockTime !== undefined &&
            (obj.blockTime = message.blockTime.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseCollectorLookupTableData();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.collectorAssetId =
            object.collectorAssetId !== undefined && object.collectorAssetId !== null
                ? long_1.default.fromValue(object.collectorAssetId)
                : long_1.default.UZERO;
        message.secondaryAssetId =
            object.secondaryAssetId !== undefined && object.secondaryAssetId !== null
                ? long_1.default.fromValue(object.secondaryAssetId)
                : long_1.default.UZERO;
        message.surplusThreshold = (_a = object.surplusThreshold) !== null && _a !== void 0 ? _a : "";
        message.debtThreshold = (_b = object.debtThreshold) !== null && _b !== void 0 ? _b : "";
        message.lockerSavingRate = (_c = object.lockerSavingRate) !== null && _c !== void 0 ? _c : "";
        message.lotSize = (_d = object.lotSize) !== null && _d !== void 0 ? _d : "";
        message.bidFactor = (_e = object.bidFactor) !== null && _e !== void 0 ? _e : "";
        message.debtLotSize = (_f = object.debtLotSize) !== null && _f !== void 0 ? _f : "";
        message.blockHeight =
            object.blockHeight !== undefined && object.blockHeight !== null
                ? long_1.default.fromValue(object.blockHeight)
                : long_1.default.ZERO;
        message.blockTime = (_g = object.blockTime) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
function createBaseAppToDenomsMapping() {
    return { appId: long_1.default.UZERO, assetIds: [] };
}
exports.AppToDenomsMapping = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        writer.uint32(18).fork();
        for (const v of message.assetIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppToDenomsMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.assetIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.assetIds.push(reader.uint64());
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            assetIds: Array.isArray(object === null || object === void 0 ? void 0 : object.assetIds)
                ? object.assetIds.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        if (message.assetIds) {
            obj.assetIds = message.assetIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.assetIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAppToDenomsMapping();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetIds = ((_a = object.assetIds) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseAppAssetIdToAuctionLookupTable() {
    return {
        appId: long_1.default.UZERO,
        assetId: long_1.default.UZERO,
        isSurplusAuction: false,
        isDebtAuction: false,
        isDistributor: false,
        isAuctionActive: false,
        assetOutOraclePrice: false,
        assetOutPrice: long_1.default.UZERO,
    };
}
exports.AppAssetIdToAuctionLookupTable = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        if (message.isSurplusAuction === true) {
            writer.uint32(24).bool(message.isSurplusAuction);
        }
        if (message.isDebtAuction === true) {
            writer.uint32(32).bool(message.isDebtAuction);
        }
        if (message.isDistributor === true) {
            writer.uint32(40).bool(message.isDistributor);
        }
        if (message.isAuctionActive === true) {
            writer.uint32(48).bool(message.isAuctionActive);
        }
        if (message.assetOutOraclePrice === true) {
            writer.uint32(56).bool(message.assetOutOraclePrice);
        }
        if (!message.assetOutPrice.isZero()) {
            writer.uint32(64).uint64(message.assetOutPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppAssetIdToAuctionLookupTable();
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
                    message.isSurplusAuction = reader.bool();
                    break;
                case 4:
                    message.isDebtAuction = reader.bool();
                    break;
                case 5:
                    message.isDistributor = reader.bool();
                    break;
                case 6:
                    message.isAuctionActive = reader.bool();
                    break;
                case 7:
                    message.assetOutOraclePrice = reader.bool();
                    break;
                case 8:
                    message.assetOutPrice = reader.uint64();
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
            isSurplusAuction: isSet(object.isSurplusAuction)
                ? Boolean(object.isSurplusAuction)
                : false,
            isDebtAuction: isSet(object.isDebtAuction)
                ? Boolean(object.isDebtAuction)
                : false,
            isDistributor: isSet(object.isDistributor)
                ? Boolean(object.isDistributor)
                : false,
            isAuctionActive: isSet(object.isAuctionActive)
                ? Boolean(object.isAuctionActive)
                : false,
            assetOutOraclePrice: isSet(object.assetOutOraclePrice)
                ? Boolean(object.assetOutOraclePrice)
                : false,
            assetOutPrice: isSet(object.assetOutPrice)
                ? long_1.default.fromValue(object.assetOutPrice)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.isSurplusAuction !== undefined &&
            (obj.isSurplusAuction = message.isSurplusAuction);
        message.isDebtAuction !== undefined &&
            (obj.isDebtAuction = message.isDebtAuction);
        message.isDistributor !== undefined &&
            (obj.isDistributor = message.isDistributor);
        message.isAuctionActive !== undefined &&
            (obj.isAuctionActive = message.isAuctionActive);
        message.assetOutOraclePrice !== undefined &&
            (obj.assetOutOraclePrice = message.assetOutOraclePrice);
        message.assetOutPrice !== undefined &&
            (obj.assetOutPrice = (message.assetOutPrice || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseAppAssetIdToAuctionLookupTable();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.isSurplusAuction = (_a = object.isSurplusAuction) !== null && _a !== void 0 ? _a : false;
        message.isDebtAuction = (_b = object.isDebtAuction) !== null && _b !== void 0 ? _b : false;
        message.isDistributor = (_c = object.isDistributor) !== null && _c !== void 0 ? _c : false;
        message.isAuctionActive = (_d = object.isAuctionActive) !== null && _d !== void 0 ? _d : false;
        message.assetOutOraclePrice = (_e = object.assetOutOraclePrice) !== null && _e !== void 0 ? _e : false;
        message.assetOutPrice =
            object.assetOutPrice !== undefined && object.assetOutPrice !== null
                ? long_1.default.fromValue(object.assetOutPrice)
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
//# sourceMappingURL=collector.js.map