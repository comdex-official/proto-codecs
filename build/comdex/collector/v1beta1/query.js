"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryNetFeeCollectedForAppAndAssetResponse = exports.QueryNetFeeCollectedForAppAndAssetRequest = exports.QueryAuctionMappingForAppAndAssetResponse = exports.QueryAuctionMappingForAppAndAssetRequest = exports.QueryCollectorDataByProductAndAssetResponse = exports.QueryCollectorDataByProductAndAssetRequest = exports.QueryCollectorLookupByProductAndAssetResponse = exports.QueryCollectorLookupByProductAndAssetRequest = exports.QueryCollectorLookupByProductResponse = exports.QueryCollectorLookupByProductRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const params_1 = require("../../../comdex/collector/v1beta1/params");
const collector_1 = require("../../../comdex/collector/v1beta1/collector");
exports.protobufPackage = "comdex.collector.v1beta1";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
exports.QueryParamsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseQueryCollectorLookupByProductRequest() {
    return { appId: long_1.default.UZERO };
}
exports.QueryCollectorLookupByProductRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectorLookupByProductRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCollectorLookupByProductRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryCollectorLookupByProductResponse() {
    return { collectorLookup: [] };
}
exports.QueryCollectorLookupByProductResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.collectorLookup) {
            collector_1.CollectorLookupTable.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectorLookupByProductResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectorLookup.push(collector_1.CollectorLookupTable.decode(reader, reader.uint32()));
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
            collectorLookup: Array.isArray(object === null || object === void 0 ? void 0 : object.collectorLookup)
                ? object.collectorLookup.map((e) => collector_1.CollectorLookupTable.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.collectorLookup) {
            obj.collectorLookup = message.collectorLookup.map((e) => e ? collector_1.CollectorLookupTable.toJSON(e) : undefined);
        }
        else {
            obj.collectorLookup = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryCollectorLookupByProductResponse();
        message.collectorLookup =
            ((_a = object.collectorLookup) === null || _a === void 0 ? void 0 : _a.map((e) => collector_1.CollectorLookupTable.fromPartial(e))) ||
                [];
        return message;
    },
};
function createBaseQueryCollectorLookupByProductAndAssetRequest() {
    return { appId: long_1.default.UZERO, assetId: long_1.default.UZERO };
}
exports.QueryCollectorLookupByProductAndAssetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectorLookupByProductAndAssetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.assetId = reader.uint64();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCollectorLookupByProductAndAssetRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryCollectorLookupByProductAndAssetResponse() {
    return { collectorLookup: undefined };
}
exports.QueryCollectorLookupByProductAndAssetResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.collectorLookup !== undefined) {
            collector_1.CollectorLookupTable.encode(message.collectorLookup, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectorLookupByProductAndAssetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectorLookup = collector_1.CollectorLookupTable.decode(reader, reader.uint32());
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
            collectorLookup: isSet(object.collectorLookup)
                ? collector_1.CollectorLookupTable.fromJSON(object.collectorLookup)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectorLookup !== undefined &&
            (obj.collectorLookup = message.collectorLookup
                ? collector_1.CollectorLookupTable.toJSON(message.collectorLookup)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCollectorLookupByProductAndAssetResponse();
        message.collectorLookup =
            object.collectorLookup !== undefined && object.collectorLookup !== null
                ? collector_1.CollectorLookupTable.fromPartial(object.collectorLookup)
                : undefined;
        return message;
    },
};
function createBaseQueryCollectorDataByProductAndAssetRequest() {
    return { appId: long_1.default.UZERO, assetId: long_1.default.UZERO };
}
exports.QueryCollectorDataByProductAndAssetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectorDataByProductAndAssetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.assetId = reader.uint64();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCollectorDataByProductAndAssetRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryCollectorDataByProductAndAssetResponse() {
    return { collectorData: undefined };
}
exports.QueryCollectorDataByProductAndAssetResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.collectorData !== undefined) {
            collector_1.CollectorData.encode(message.collectorData, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectorDataByProductAndAssetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectorData = collector_1.CollectorData.decode(reader, reader.uint32());
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
            collectorData: isSet(object.collectorData)
                ? collector_1.CollectorData.fromJSON(object.collectorData)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectorData !== undefined &&
            (obj.collectorData = message.collectorData
                ? collector_1.CollectorData.toJSON(message.collectorData)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCollectorDataByProductAndAssetResponse();
        message.collectorData =
            object.collectorData !== undefined && object.collectorData !== null
                ? collector_1.CollectorData.fromPartial(object.collectorData)
                : undefined;
        return message;
    },
};
function createBaseQueryAuctionMappingForAppAndAssetRequest() {
    return { appId: long_1.default.UZERO, assetId: long_1.default.UZERO };
}
exports.QueryAuctionMappingForAppAndAssetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionMappingForAppAndAssetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.assetId = reader.uint64();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAuctionMappingForAppAndAssetRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryAuctionMappingForAppAndAssetResponse() {
    return { assetIdToAuctionLookupTable: undefined };
}
exports.QueryAuctionMappingForAppAndAssetResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.assetIdToAuctionLookupTable !== undefined) {
            collector_1.AssetIdToAuctionLookupTable.encode(message.assetIdToAuctionLookupTable, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionMappingForAppAndAssetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetIdToAuctionLookupTable =
                        collector_1.AssetIdToAuctionLookupTable.decode(reader, reader.uint32());
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
            assetIdToAuctionLookupTable: isSet(object.assetIdToAuctionLookupTable)
                ? collector_1.AssetIdToAuctionLookupTable.fromJSON(object.assetIdToAuctionLookupTable)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetIdToAuctionLookupTable !== undefined &&
            (obj.assetIdToAuctionLookupTable = message.assetIdToAuctionLookupTable
                ? collector_1.AssetIdToAuctionLookupTable.toJSON(message.assetIdToAuctionLookupTable)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAuctionMappingForAppAndAssetResponse();
        message.assetIdToAuctionLookupTable =
            object.assetIdToAuctionLookupTable !== undefined &&
                object.assetIdToAuctionLookupTable !== null
                ? collector_1.AssetIdToAuctionLookupTable.fromPartial(object.assetIdToAuctionLookupTable)
                : undefined;
        return message;
    },
};
function createBaseQueryNetFeeCollectedForAppAndAssetRequest() {
    return { appId: long_1.default.UZERO, assetId: long_1.default.UZERO };
}
exports.QueryNetFeeCollectedForAppAndAssetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNetFeeCollectedForAppAndAssetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.assetId = reader.uint64();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNetFeeCollectedForAppAndAssetRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryNetFeeCollectedForAppAndAssetResponse() {
    return { assetIdToFeeCollected: undefined };
}
exports.QueryNetFeeCollectedForAppAndAssetResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.assetIdToFeeCollected !== undefined) {
            collector_1.AssetIdToFeeCollected.encode(message.assetIdToFeeCollected, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNetFeeCollectedForAppAndAssetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetIdToFeeCollected = collector_1.AssetIdToFeeCollected.decode(reader, reader.uint32());
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
            assetIdToFeeCollected: isSet(object.assetIdToFeeCollected)
                ? collector_1.AssetIdToFeeCollected.fromJSON(object.assetIdToFeeCollected)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetIdToFeeCollected !== undefined &&
            (obj.assetIdToFeeCollected = message.assetIdToFeeCollected
                ? collector_1.AssetIdToFeeCollected.toJSON(message.assetIdToFeeCollected)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNetFeeCollectedForAppAndAssetResponse();
        message.assetIdToFeeCollected =
            object.assetIdToFeeCollected !== undefined &&
                object.assetIdToFeeCollected !== null
                ? collector_1.AssetIdToFeeCollected.fromPartial(object.assetIdToFeeCollected)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.QueryCollectorLookupByProduct =
            this.QueryCollectorLookupByProduct.bind(this);
        this.QueryCollectorLookupByProductAndAsset =
            this.QueryCollectorLookupByProductAndAsset.bind(this);
        this.QueryCollectorDataByProductAndAsset =
            this.QueryCollectorDataByProductAndAsset.bind(this);
        this.QueryAuctionMappingForAppAndAsset =
            this.QueryAuctionMappingForAppAndAsset.bind(this);
        this.QueryNetFeeCollectedForAppAndAsset =
            this.QueryNetFeeCollectedForAppAndAsset.bind(this);
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.collector.v1beta1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryCollectorLookupByProduct(request) {
        const data = exports.QueryCollectorLookupByProductRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.collector.v1beta1.Query", "QueryCollectorLookupByProduct", data);
        return promise.then((data) => exports.QueryCollectorLookupByProductResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryCollectorLookupByProductAndAsset(request) {
        const data = exports.QueryCollectorLookupByProductAndAssetRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.collector.v1beta1.Query", "QueryCollectorLookupByProductAndAsset", data);
        return promise.then((data) => exports.QueryCollectorLookupByProductAndAssetResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryCollectorDataByProductAndAsset(request) {
        const data = exports.QueryCollectorDataByProductAndAssetRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.collector.v1beta1.Query", "QueryCollectorDataByProductAndAsset", data);
        return promise.then((data) => exports.QueryCollectorDataByProductAndAssetResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryAuctionMappingForAppAndAsset(request) {
        const data = exports.QueryAuctionMappingForAppAndAssetRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.collector.v1beta1.Query", "QueryAuctionMappingForAppAndAsset", data);
        return promise.then((data) => exports.QueryAuctionMappingForAppAndAssetResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryNetFeeCollectedForAppAndAsset(request) {
        const data = exports.QueryNetFeeCollectedForAppAndAssetRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.collector.v1beta1.Query", "QueryNetFeeCollectedForAppAndAsset", data);
        return promise.then((data) => exports.QueryNetFeeCollectedForAppAndAssetResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map