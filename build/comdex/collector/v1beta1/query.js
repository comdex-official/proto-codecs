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
exports.QueryClientImpl = exports.QueryNetFeeCollectedForAppAndAssetResponse = exports.QueryNetFeeCollectedForAppAndAssetRequest = exports.QueryAuctionMappingForAppAndAssetResponse = exports.QueryAuctionMappingForAppAndAssetRequest = exports.QueryCollectorDataByAppAndAssetResponse = exports.QueryCollectorDataByAppAndAssetRequest = exports.QueryCollectorLookupByAppAndAssetResponse = exports.QueryCollectorLookupByAppAndAssetRequest = exports.QueryCollectorLookupByAppResponse = exports.QueryCollectorLookupByAppRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const params_1 = require("../../../comdex/collector/v1beta1/params");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const collector_1 = require("../../../comdex/collector/v1beta1/collector");
exports.protobufPackage = "comdex.collector.v1beta1";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
function createBaseQueryCollectorLookupByAppRequest() {
    return { appId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryCollectorLookupByAppRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectorLookupByAppRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCollectorLookupByAppRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryCollectorLookupByAppResponse() {
    return { collectorLookup: [], pagination: undefined };
}
exports.QueryCollectorLookupByAppResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.collectorLookup) {
            collector_1.CollectorLookupTableData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectorLookupByAppResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectorLookup.push(collector_1.CollectorLookupTableData.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
                ? object.collectorLookup.map((e) => collector_1.CollectorLookupTableData.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.collectorLookup) {
            obj.collectorLookup = message.collectorLookup.map((e) => e ? collector_1.CollectorLookupTableData.toJSON(e) : undefined);
        }
        else {
            obj.collectorLookup = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryCollectorLookupByAppResponse();
        message.collectorLookup =
            ((_a = object.collectorLookup) === null || _a === void 0 ? void 0 : _a.map((e) => collector_1.CollectorLookupTableData.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryCollectorLookupByAppAndAssetRequest() {
    return { appId: long_1.default.UZERO, assetId: long_1.default.UZERO };
}
exports.QueryCollectorLookupByAppAndAssetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectorLookupByAppAndAssetRequest();
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
        const message = createBaseQueryCollectorLookupByAppAndAssetRequest();
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
function createBaseQueryCollectorLookupByAppAndAssetResponse() {
    return { collectorLookup: undefined };
}
exports.QueryCollectorLookupByAppAndAssetResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectorLookup !== undefined) {
            collector_1.CollectorLookupTableData.encode(message.collectorLookup, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectorLookupByAppAndAssetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectorLookup = collector_1.CollectorLookupTableData.decode(reader, reader.uint32());
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
                ? collector_1.CollectorLookupTableData.fromJSON(object.collectorLookup)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectorLookup !== undefined &&
            (obj.collectorLookup = message.collectorLookup
                ? collector_1.CollectorLookupTableData.toJSON(message.collectorLookup)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCollectorLookupByAppAndAssetResponse();
        message.collectorLookup =
            object.collectorLookup !== undefined && object.collectorLookup !== null
                ? collector_1.CollectorLookupTableData.fromPartial(object.collectorLookup)
                : undefined;
        return message;
    },
};
function createBaseQueryCollectorDataByAppAndAssetRequest() {
    return { appId: long_1.default.UZERO, assetId: long_1.default.UZERO };
}
exports.QueryCollectorDataByAppAndAssetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectorDataByAppAndAssetRequest();
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
        const message = createBaseQueryCollectorDataByAppAndAssetRequest();
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
function createBaseQueryCollectorDataByAppAndAssetResponse() {
    return { collectorData: undefined };
}
exports.QueryCollectorDataByAppAndAssetResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectorData !== undefined) {
            collector_1.CollectorData.encode(message.collectorData, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectorDataByAppAndAssetResponse();
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
        const message = createBaseQueryCollectorDataByAppAndAssetResponse();
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
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    encode(message, writer = _m0.Writer.create()) {
        if (message.assetIdToAuctionLookupTable !== undefined) {
            collector_1.AppAssetIdToAuctionLookupTable.encode(message.assetIdToAuctionLookupTable, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionMappingForAppAndAssetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetIdToAuctionLookupTable =
                        collector_1.AppAssetIdToAuctionLookupTable.decode(reader, reader.uint32());
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
                ? collector_1.AppAssetIdToAuctionLookupTable.fromJSON(object.assetIdToAuctionLookupTable)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetIdToAuctionLookupTable !== undefined &&
            (obj.assetIdToAuctionLookupTable = message.assetIdToAuctionLookupTable
                ? collector_1.AppAssetIdToAuctionLookupTable.toJSON(message.assetIdToAuctionLookupTable)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAuctionMappingForAppAndAssetResponse();
        message.assetIdToAuctionLookupTable =
            object.assetIdToAuctionLookupTable !== undefined &&
                object.assetIdToAuctionLookupTable !== null
                ? collector_1.AppAssetIdToAuctionLookupTable.fromPartial(object.assetIdToAuctionLookupTable)
                : undefined;
        return message;
    },
};
function createBaseQueryNetFeeCollectedForAppAndAssetRequest() {
    return { appId: long_1.default.UZERO, assetId: long_1.default.UZERO };
}
exports.QueryNetFeeCollectedForAppAndAssetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    encode(message, writer = _m0.Writer.create()) {
        if (message.assetIdToFeeCollected !== undefined) {
            collector_1.AppAssetIdToFeeCollectedData.encode(message.assetIdToFeeCollected, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNetFeeCollectedForAppAndAssetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetIdToFeeCollected = collector_1.AppAssetIdToFeeCollectedData.decode(reader, reader.uint32());
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
                ? collector_1.AppAssetIdToFeeCollectedData.fromJSON(object.assetIdToFeeCollected)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetIdToFeeCollected !== undefined &&
            (obj.assetIdToFeeCollected = message.assetIdToFeeCollected
                ? collector_1.AppAssetIdToFeeCollectedData.toJSON(message.assetIdToFeeCollected)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNetFeeCollectedForAppAndAssetResponse();
        message.assetIdToFeeCollected =
            object.assetIdToFeeCollected !== undefined &&
                object.assetIdToFeeCollected !== null
                ? collector_1.AppAssetIdToFeeCollectedData.fromPartial(object.assetIdToFeeCollected)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.QueryCollectorLookupByApp = this.QueryCollectorLookupByApp.bind(this);
        this.QueryCollectorLookupByAppAndAsset =
            this.QueryCollectorLookupByAppAndAsset.bind(this);
        this.QueryCollectorDataByAppAndAsset =
            this.QueryCollectorDataByAppAndAsset.bind(this);
        this.QueryAuctionMappingForAppAndAsset =
            this.QueryAuctionMappingForAppAndAsset.bind(this);
        this.QueryNetFeeCollectedForAppAndAsset =
            this.QueryNetFeeCollectedForAppAndAsset.bind(this);
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.collector.v1beta1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    QueryCollectorLookupByApp(request) {
        const data = exports.QueryCollectorLookupByAppRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.collector.v1beta1.Query", "QueryCollectorLookupByApp", data);
        return promise.then((data) => exports.QueryCollectorLookupByAppResponse.decode(new _m0.Reader(data)));
    }
    QueryCollectorLookupByAppAndAsset(request) {
        const data = exports.QueryCollectorLookupByAppAndAssetRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.collector.v1beta1.Query", "QueryCollectorLookupByAppAndAsset", data);
        return promise.then((data) => exports.QueryCollectorLookupByAppAndAssetResponse.decode(new _m0.Reader(data)));
    }
    QueryCollectorDataByAppAndAsset(request) {
        const data = exports.QueryCollectorDataByAppAndAssetRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.collector.v1beta1.Query", "QueryCollectorDataByAppAndAsset", data);
        return promise.then((data) => exports.QueryCollectorDataByAppAndAssetResponse.decode(new _m0.Reader(data)));
    }
    QueryAuctionMappingForAppAndAsset(request) {
        const data = exports.QueryAuctionMappingForAppAndAssetRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.collector.v1beta1.Query", "QueryAuctionMappingForAppAndAsset", data);
        return promise.then((data) => exports.QueryAuctionMappingForAppAndAssetResponse.decode(new _m0.Reader(data)));
    }
    QueryNetFeeCollectedForAppAndAsset(request) {
        const data = exports.QueryNetFeeCollectedForAppAndAssetRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.collector.v1beta1.Query", "QueryNetFeeCollectedForAppAndAsset", data);
        return promise.then((data) => exports.QueryNetFeeCollectedForAppAndAssetResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map