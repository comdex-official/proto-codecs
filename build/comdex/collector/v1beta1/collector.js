"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetIdToAuctionLookupTable = exports.CollectorAuctionLookupTable = exports.AssetToAuctionMapping = exports.HistoricalAuction = exports.AppToDenomsMapping = exports.CollectorLookup = exports.CollectorLookupTable = exports.AssetIdCollectorMappping = exports.AppIdToAssetCollectorMapping = exports.AssetIdToFeeCollected = exports.NetFeeCollectedData = exports.CollectorData = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
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
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            writer.uint32(42).string(message.liquidationRewardsCollected);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                case 5:
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
function createBaseNetFeeCollectedData() {
    return { appId: long_1.default.UZERO, assetIdToFeeCollected: [] };
}
exports.NetFeeCollectedData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        for (const v of message.assetIdToFeeCollected) {
            exports.AssetIdToFeeCollected.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNetFeeCollectedData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.assetIdToFeeCollected.push(exports.AssetIdToFeeCollected.decode(reader, reader.uint32()));
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
            appId: isSet(object.appId) ? long_1.default.fromString(object.appId) : long_1.default.UZERO,
            assetIdToFeeCollected: Array.isArray(object === null || object === void 0 ? void 0 : object.assetIdToFeeCollected)
                ? object.assetIdToFeeCollected.map((e) => exports.AssetIdToFeeCollected.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        if (message.assetIdToFeeCollected) {
            obj.assetIdToFeeCollected = message.assetIdToFeeCollected.map((e) => e ? exports.AssetIdToFeeCollected.toJSON(e) : undefined);
        }
        else {
            obj.assetIdToFeeCollected = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseNetFeeCollectedData();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetIdToFeeCollected =
            ((_a = object.assetIdToFeeCollected) === null || _a === void 0 ? void 0 : _a.map((e) => exports.AssetIdToFeeCollected.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAssetIdToFeeCollected() {
    return { assetId: long_1.default.UZERO, netFeesCollected: "" };
}
exports.AssetIdToFeeCollected = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (message.netFeesCollected !== "") {
            writer.uint32(18).string(message.netFeesCollected);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetIdToFeeCollected();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint64();
                    break;
                case 2:
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
            assetId: isSet(object.assetId)
                ? long_1.default.fromString(object.assetId)
                : long_1.default.UZERO,
            netFeesCollected: isSet(object.netFeesCollected)
                ? String(object.netFeesCollected)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.netFeesCollected !== undefined &&
            (obj.netFeesCollected = message.netFeesCollected);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAssetIdToFeeCollected();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.netFeesCollected = (_a = object.netFeesCollected) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAppIdToAssetCollectorMapping() {
    return { appId: long_1.default.UZERO, assetCollector: [] };
}
exports.AppIdToAssetCollectorMapping = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        for (const v of message.assetCollector) {
            exports.AssetIdCollectorMappping.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppIdToAssetCollectorMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.assetCollector.push(exports.AssetIdCollectorMappping.decode(reader, reader.uint32()));
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
            appId: isSet(object.appId) ? long_1.default.fromString(object.appId) : long_1.default.UZERO,
            assetCollector: Array.isArray(object === null || object === void 0 ? void 0 : object.assetCollector)
                ? object.assetCollector.map((e) => exports.AssetIdCollectorMappping.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        if (message.assetCollector) {
            obj.assetCollector = message.assetCollector.map((e) => e ? exports.AssetIdCollectorMappping.toJSON(e) : undefined);
        }
        else {
            obj.assetCollector = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAppIdToAssetCollectorMapping();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetCollector =
            ((_a = object.assetCollector) === null || _a === void 0 ? void 0 : _a.map((e) => exports.AssetIdCollectorMappping.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAssetIdCollectorMappping() {
    return { assetId: long_1.default.UZERO, collector: undefined };
}
exports.AssetIdCollectorMappping = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (message.collector !== undefined) {
            exports.CollectorData.encode(message.collector, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetIdCollectorMappping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint64();
                    break;
                case 2:
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
            assetId: isSet(object.assetId)
                ? long_1.default.fromString(object.assetId)
                : long_1.default.UZERO,
            collector: isSet(object.collector)
                ? exports.CollectorData.fromJSON(object.collector)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.collector !== undefined &&
            (obj.collector = message.collector
                ? exports.CollectorData.toJSON(message.collector)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAssetIdCollectorMappping();
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
function createBaseCollectorLookupTable() {
    return {
        appId: long_1.default.UZERO,
        collectorAssetId: long_1.default.UZERO,
        secondaryAssetId: long_1.default.UZERO,
        surplusThreshold: long_1.default.UZERO,
        debtThreshold: long_1.default.UZERO,
        lockerSavingRate: "",
        lotSize: long_1.default.UZERO,
        bidFactor: "",
    };
}
exports.CollectorLookupTable = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.collectorAssetId.isZero()) {
            writer.uint32(16).uint64(message.collectorAssetId);
        }
        if (!message.secondaryAssetId.isZero()) {
            writer.uint32(24).uint64(message.secondaryAssetId);
        }
        if (!message.surplusThreshold.isZero()) {
            writer.uint32(32).uint64(message.surplusThreshold);
        }
        if (!message.debtThreshold.isZero()) {
            writer.uint32(40).uint64(message.debtThreshold);
        }
        if (message.lockerSavingRate !== "") {
            writer.uint32(50).string(message.lockerSavingRate);
        }
        if (!message.lotSize.isZero()) {
            writer.uint32(56).uint64(message.lotSize);
        }
        if (message.bidFactor !== "") {
            writer.uint32(66).string(message.bidFactor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCollectorLookupTable();
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
                    message.surplusThreshold = reader.uint64();
                    break;
                case 5:
                    message.debtThreshold = reader.uint64();
                    break;
                case 6:
                    message.lockerSavingRate = reader.string();
                    break;
                case 7:
                    message.lotSize = reader.uint64();
                    break;
                case 8:
                    message.bidFactor = reader.string();
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
            appId: isSet(object.appId) ? long_1.default.fromString(object.appId) : long_1.default.UZERO,
            collectorAssetId: isSet(object.collectorAssetId)
                ? long_1.default.fromString(object.collectorAssetId)
                : long_1.default.UZERO,
            secondaryAssetId: isSet(object.secondaryAssetId)
                ? long_1.default.fromString(object.secondaryAssetId)
                : long_1.default.UZERO,
            surplusThreshold: isSet(object.surplusThreshold)
                ? long_1.default.fromString(object.surplusThreshold)
                : long_1.default.UZERO,
            debtThreshold: isSet(object.debtThreshold)
                ? long_1.default.fromString(object.debtThreshold)
                : long_1.default.UZERO,
            lockerSavingRate: isSet(object.lockerSavingRate)
                ? String(object.lockerSavingRate)
                : "",
            lotSize: isSet(object.lotSize)
                ? long_1.default.fromString(object.lotSize)
                : long_1.default.UZERO,
            bidFactor: isSet(object.bidFactor) ? String(object.bidFactor) : "",
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
            (obj.surplusThreshold = (message.surplusThreshold || long_1.default.UZERO).toString());
        message.debtThreshold !== undefined &&
            (obj.debtThreshold = (message.debtThreshold || long_1.default.UZERO).toString());
        message.lockerSavingRate !== undefined &&
            (obj.lockerSavingRate = message.lockerSavingRate);
        message.lotSize !== undefined &&
            (obj.lotSize = (message.lotSize || long_1.default.UZERO).toString());
        message.bidFactor !== undefined && (obj.bidFactor = message.bidFactor);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCollectorLookupTable();
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
        message.surplusThreshold =
            object.surplusThreshold !== undefined && object.surplusThreshold !== null
                ? long_1.default.fromValue(object.surplusThreshold)
                : long_1.default.UZERO;
        message.debtThreshold =
            object.debtThreshold !== undefined && object.debtThreshold !== null
                ? long_1.default.fromValue(object.debtThreshold)
                : long_1.default.UZERO;
        message.lockerSavingRate = (_a = object.lockerSavingRate) !== null && _a !== void 0 ? _a : "";
        message.lotSize =
            object.lotSize !== undefined && object.lotSize !== null
                ? long_1.default.fromValue(object.lotSize)
                : long_1.default.UZERO;
        message.bidFactor = (_b = object.bidFactor) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseCollectorLookup() {
    return { appId: long_1.default.UZERO, assetrateInfo: [] };
}
exports.CollectorLookup = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        for (const v of message.assetrateInfo) {
            exports.CollectorLookupTable.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCollectorLookup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.assetrateInfo.push(exports.CollectorLookupTable.decode(reader, reader.uint32()));
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
            appId: isSet(object.appId) ? long_1.default.fromString(object.appId) : long_1.default.UZERO,
            assetrateInfo: Array.isArray(object === null || object === void 0 ? void 0 : object.assetrateInfo)
                ? object.assetrateInfo.map((e) => exports.CollectorLookupTable.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        if (message.assetrateInfo) {
            obj.assetrateInfo = message.assetrateInfo.map((e) => e ? exports.CollectorLookupTable.toJSON(e) : undefined);
        }
        else {
            obj.assetrateInfo = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCollectorLookup();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetrateInfo =
            ((_a = object.assetrateInfo) === null || _a === void 0 ? void 0 : _a.map((e) => exports.CollectorLookupTable.fromPartial(e))) ||
                [];
        return message;
    },
};
function createBaseAppToDenomsMapping() {
    return { appId: long_1.default.UZERO, assetIds: [] };
}
exports.AppToDenomsMapping = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
            appId: isSet(object.appId) ? long_1.default.fromString(object.appId) : long_1.default.UZERO,
            assetIds: Array.isArray(object === null || object === void 0 ? void 0 : object.assetIds)
                ? object.assetIds.map((e) => long_1.default.fromString(e))
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
function createBaseHistoricalAuction() {
    return { appId: long_1.default.UZERO, assetToAuction: [] };
}
exports.HistoricalAuction = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        for (const v of message.assetToAuction) {
            exports.AssetToAuctionMapping.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHistoricalAuction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.assetToAuction.push(exports.AssetToAuctionMapping.decode(reader, reader.uint32()));
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
            appId: isSet(object.appId) ? long_1.default.fromString(object.appId) : long_1.default.UZERO,
            assetToAuction: Array.isArray(object === null || object === void 0 ? void 0 : object.assetToAuction)
                ? object.assetToAuction.map((e) => exports.AssetToAuctionMapping.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        if (message.assetToAuction) {
            obj.assetToAuction = message.assetToAuction.map((e) => e ? exports.AssetToAuctionMapping.toJSON(e) : undefined);
        }
        else {
            obj.assetToAuction = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseHistoricalAuction();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetToAuction =
            ((_a = object.assetToAuction) === null || _a === void 0 ? void 0 : _a.map((e) => exports.AssetToAuctionMapping.fromPartial(e))) ||
                [];
        return message;
    },
};
function createBaseAssetToAuctionMapping() {
    return { auctionId: long_1.default.UZERO, assetDenoms: [] };
}
exports.AssetToAuctionMapping = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.auctionId.isZero()) {
            writer.uint32(8).uint64(message.auctionId);
        }
        for (const v of message.assetDenoms) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetToAuctionMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctionId = reader.uint64();
                    break;
                case 2:
                    message.assetDenoms.push(reader.string());
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
            auctionId: isSet(object.auctionId)
                ? long_1.default.fromString(object.auctionId)
                : long_1.default.UZERO,
            assetDenoms: Array.isArray(object === null || object === void 0 ? void 0 : object.assetDenoms)
                ? object.assetDenoms.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.auctionId !== undefined &&
            (obj.auctionId = (message.auctionId || long_1.default.UZERO).toString());
        if (message.assetDenoms) {
            obj.assetDenoms = message.assetDenoms.map((e) => e);
        }
        else {
            obj.assetDenoms = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAssetToAuctionMapping();
        message.auctionId =
            object.auctionId !== undefined && object.auctionId !== null
                ? long_1.default.fromValue(object.auctionId)
                : long_1.default.UZERO;
        message.assetDenoms = ((_a = object.assetDenoms) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseCollectorAuctionLookupTable() {
    return { appId: long_1.default.UZERO, assetIdToAuctionLookup: [] };
}
exports.CollectorAuctionLookupTable = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        for (const v of message.assetIdToAuctionLookup) {
            exports.AssetIdToAuctionLookupTable.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCollectorAuctionLookupTable();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.assetIdToAuctionLookup.push(exports.AssetIdToAuctionLookupTable.decode(reader, reader.uint32()));
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
            appId: isSet(object.appId) ? long_1.default.fromString(object.appId) : long_1.default.UZERO,
            assetIdToAuctionLookup: Array.isArray(object === null || object === void 0 ? void 0 : object.assetIdToAuctionLookup)
                ? object.assetIdToAuctionLookup.map((e) => exports.AssetIdToAuctionLookupTable.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        if (message.assetIdToAuctionLookup) {
            obj.assetIdToAuctionLookup = message.assetIdToAuctionLookup.map((e) => e ? exports.AssetIdToAuctionLookupTable.toJSON(e) : undefined);
        }
        else {
            obj.assetIdToAuctionLookup = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCollectorAuctionLookupTable();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetIdToAuctionLookup =
            ((_a = object.assetIdToAuctionLookup) === null || _a === void 0 ? void 0 : _a.map((e) => exports.AssetIdToAuctionLookupTable.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAssetIdToAuctionLookupTable() {
    return {
        assetId: long_1.default.UZERO,
        isSurplusAuction: false,
        isDebtAuction: false,
        isAuctionActive: false,
    };
}
exports.AssetIdToAuctionLookupTable = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (message.isSurplusAuction === true) {
            writer.uint32(16).bool(message.isSurplusAuction);
        }
        if (message.isDebtAuction === true) {
            writer.uint32(24).bool(message.isDebtAuction);
        }
        if (message.isAuctionActive === true) {
            writer.uint32(32).bool(message.isAuctionActive);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetIdToAuctionLookupTable();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint64();
                    break;
                case 2:
                    message.isSurplusAuction = reader.bool();
                    break;
                case 3:
                    message.isDebtAuction = reader.bool();
                    break;
                case 4:
                    message.isAuctionActive = reader.bool();
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
                ? long_1.default.fromString(object.assetId)
                : long_1.default.UZERO,
            isSurplusAuction: isSet(object.isSurplusAuction)
                ? Boolean(object.isSurplusAuction)
                : false,
            isDebtAuction: isSet(object.isDebtAuction)
                ? Boolean(object.isDebtAuction)
                : false,
            isAuctionActive: isSet(object.isAuctionActive)
                ? Boolean(object.isAuctionActive)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.isSurplusAuction !== undefined &&
            (obj.isSurplusAuction = message.isSurplusAuction);
        message.isDebtAuction !== undefined &&
            (obj.isDebtAuction = message.isDebtAuction);
        message.isAuctionActive !== undefined &&
            (obj.isAuctionActive = message.isAuctionActive);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAssetIdToAuctionLookupTable();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.isSurplusAuction = (_a = object.isSurplusAuction) !== null && _a !== void 0 ? _a : false;
        message.isDebtAuction = (_b = object.isDebtAuction) !== null && _b !== void 0 ? _b : false;
        message.isAuctionActive = (_c = object.isAuctionActive) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=collector.js.map