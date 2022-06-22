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
exports.QueryClientImpl = exports.QueryAllBorrowByOwnerResponse = exports.QueryAllBorrowByOwnerRequest = exports.QueryBorrowResponse = exports.QueryBorrowRequest = exports.QueryBorrowsResponse = exports.QueryBorrowsRequest = exports.QueryAssetToPairMappingResponse = exports.QueryAssetToPairMappingRequest = exports.QueryAssetToPairMappingsResponse = exports.QueryAssetToPairMappingsRequest = exports.QueryPoolResponse = exports.QueryPoolRequest = exports.QueryPoolsResponse = exports.QueryPoolsRequest = exports.QueryAssetRatesStatResponse = exports.QueryAssetRatesStatRequest = exports.QueryAssetRatesStatsResponse = exports.QueryAssetRatesStatsRequest = exports.QueryPairResponse = exports.QueryPairRequest = exports.QueryPairsResponse = exports.QueryPairsRequest = exports.QueryAllLendByOwnerResponse = exports.QueryAllLendByOwnerRequest = exports.QueryLendResponse = exports.QueryLendRequest = exports.QueryLendsResponse = exports.QueryLendsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const params_1 = require("../../../comdex/lend/v1beta1/params");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const lend_1 = require("../../../comdex/lend/v1beta1/lend");
exports.protobufPackage = "comdex.lend.v1beta1";
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
function createBaseQueryLendsRequest() {
    return { pagination: undefined };
}
exports.QueryLendsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLendsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLendsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryLendsResponse() {
    return { lends: [], pagination: undefined };
}
exports.QueryLendsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.lends) {
            lend_1.LendAsset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLendsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lends.push(lend_1.LendAsset.decode(reader, reader.uint32()));
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
            lends: Array.isArray(object === null || object === void 0 ? void 0 : object.lends)
                ? object.lends.map((e) => lend_1.LendAsset.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lends) {
            obj.lends = message.lends.map((e) => e ? lend_1.LendAsset.toJSON(e) : undefined);
        }
        else {
            obj.lends = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLendsResponse();
        message.lends = ((_a = object.lends) === null || _a === void 0 ? void 0 : _a.map((e) => lend_1.LendAsset.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryLendRequest() {
    return { id: long_1.default.UZERO };
}
exports.QueryLendRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLendRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLendRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryLendResponse() {
    return { lend: undefined };
}
exports.QueryLendResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.lend !== undefined) {
            lend_1.LendAsset.encode(message.lend, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLendResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lend = lend_1.LendAsset.decode(reader, reader.uint32());
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
            lend: isSet(object.lend) ? lend_1.LendAsset.fromJSON(object.lend) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lend !== undefined &&
            (obj.lend = message.lend ? lend_1.LendAsset.toJSON(message.lend) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLendResponse();
        message.lend =
            object.lend !== undefined && object.lend !== null
                ? lend_1.LendAsset.fromPartial(object.lend)
                : undefined;
        return message;
    },
};
function createBaseQueryAllLendByOwnerRequest() {
    return { owner: "", pagination: undefined };
}
exports.QueryAllLendByOwnerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllLendByOwnerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllLendByOwnerRequest();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllLendByOwnerResponse() {
    return { lends: [] };
}
exports.QueryAllLendByOwnerResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.lends) {
            lend_1.LendAsset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllLendByOwnerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lends.push(lend_1.LendAsset.decode(reader, reader.uint32()));
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
            lends: Array.isArray(object === null || object === void 0 ? void 0 : object.lends)
                ? object.lends.map((e) => lend_1.LendAsset.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lends) {
            obj.lends = message.lends.map((e) => e ? lend_1.LendAsset.toJSON(e) : undefined);
        }
        else {
            obj.lends = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllLendByOwnerResponse();
        message.lends = ((_a = object.lends) === null || _a === void 0 ? void 0 : _a.map((e) => lend_1.LendAsset.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryPairsRequest() {
    return { pagination: undefined };
}
exports.QueryPairsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPairsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPairsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryPairsResponse() {
    return { extendedPairs: [], pagination: undefined };
}
exports.QueryPairsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.extendedPairs) {
            lend_1.ExtendedPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPairsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extendedPairs.push(lend_1.ExtendedPair.decode(reader, reader.uint32()));
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
            extendedPairs: Array.isArray(object === null || object === void 0 ? void 0 : object.extendedPairs)
                ? object.extendedPairs.map((e) => lend_1.ExtendedPair.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.extendedPairs) {
            obj.extendedPairs = message.extendedPairs.map((e) => e ? lend_1.ExtendedPair.toJSON(e) : undefined);
        }
        else {
            obj.extendedPairs = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPairsResponse();
        message.extendedPairs =
            ((_a = object.extendedPairs) === null || _a === void 0 ? void 0 : _a.map((e) => lend_1.ExtendedPair.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryPairRequest() {
    return { id: long_1.default.UZERO };
}
exports.QueryPairRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPairRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPairRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryPairResponse() {
    return { ExtendedPair: undefined };
}
exports.QueryPairResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ExtendedPair !== undefined) {
            lend_1.ExtendedPair.encode(message.ExtendedPair, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPairResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ExtendedPair = lend_1.ExtendedPair.decode(reader, reader.uint32());
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
            ExtendedPair: isSet(object.ExtendedPair)
                ? lend_1.ExtendedPair.fromJSON(object.ExtendedPair)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.ExtendedPair !== undefined &&
            (obj.ExtendedPair = message.ExtendedPair
                ? lend_1.ExtendedPair.toJSON(message.ExtendedPair)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPairResponse();
        message.ExtendedPair =
            object.ExtendedPair !== undefined && object.ExtendedPair !== null
                ? lend_1.ExtendedPair.fromPartial(object.ExtendedPair)
                : undefined;
        return message;
    },
};
function createBaseQueryAssetRatesStatsRequest() {
    return { pagination: undefined };
}
exports.QueryAssetRatesStatsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetRatesStatsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAssetRatesStatsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAssetRatesStatsResponse() {
    return { AssetRatesStats: [], pagination: undefined };
}
exports.QueryAssetRatesStatsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.AssetRatesStats) {
            lend_1.AssetRatesStats.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetRatesStatsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.AssetRatesStats.push(lend_1.AssetRatesStats.decode(reader, reader.uint32()));
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
            AssetRatesStats: Array.isArray(object === null || object === void 0 ? void 0 : object.AssetRatesStats)
                ? object.AssetRatesStats.map((e) => lend_1.AssetRatesStats.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.AssetRatesStats) {
            obj.AssetRatesStats = message.AssetRatesStats.map((e) => e ? lend_1.AssetRatesStats.toJSON(e) : undefined);
        }
        else {
            obj.AssetRatesStats = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAssetRatesStatsResponse();
        message.AssetRatesStats =
            ((_a = object.AssetRatesStats) === null || _a === void 0 ? void 0 : _a.map((e) => lend_1.AssetRatesStats.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAssetRatesStatRequest() {
    return { id: long_1.default.UZERO };
}
exports.QueryAssetRatesStatRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetRatesStatRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAssetRatesStatRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryAssetRatesStatResponse() {
    return { AssetRatesStat: undefined };
}
exports.QueryAssetRatesStatResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.AssetRatesStat !== undefined) {
            lend_1.AssetRatesStats.encode(message.AssetRatesStat, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetRatesStatResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.AssetRatesStat = lend_1.AssetRatesStats.decode(reader, reader.uint32());
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
            AssetRatesStat: isSet(object.AssetRatesStat)
                ? lend_1.AssetRatesStats.fromJSON(object.AssetRatesStat)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.AssetRatesStat !== undefined &&
            (obj.AssetRatesStat = message.AssetRatesStat
                ? lend_1.AssetRatesStats.toJSON(message.AssetRatesStat)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAssetRatesStatResponse();
        message.AssetRatesStat =
            object.AssetRatesStat !== undefined && object.AssetRatesStat !== null
                ? lend_1.AssetRatesStats.fromPartial(object.AssetRatesStat)
                : undefined;
        return message;
    },
};
function createBaseQueryPoolsRequest() {
    return { pagination: undefined };
}
exports.QueryPoolsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryPoolsResponse() {
    return { pools: [], pagination: undefined };
}
exports.QueryPoolsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pools) {
            lend_1.Pool.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(lend_1.Pool.decode(reader, reader.uint32()));
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
            pools: Array.isArray(object === null || object === void 0 ? void 0 : object.pools)
                ? object.pools.map((e) => lend_1.Pool.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map((e) => (e ? lend_1.Pool.toJSON(e) : undefined));
        }
        else {
            obj.pools = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPoolsResponse();
        message.pools = ((_a = object.pools) === null || _a === void 0 ? void 0 : _a.map((e) => lend_1.Pool.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryPoolRequest() {
    return { id: long_1.default.UZERO };
}
exports.QueryPoolRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryPoolResponse() {
    return { Pool: undefined };
}
exports.QueryPoolResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.Pool !== undefined) {
            lend_1.Pool.encode(message.Pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Pool = lend_1.Pool.decode(reader, reader.uint32());
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
            Pool: isSet(object.Pool) ? lend_1.Pool.fromJSON(object.Pool) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.Pool !== undefined &&
            (obj.Pool = message.Pool ? lend_1.Pool.toJSON(message.Pool) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolResponse();
        message.Pool =
            object.Pool !== undefined && object.Pool !== null
                ? lend_1.Pool.fromPartial(object.Pool)
                : undefined;
        return message;
    },
};
function createBaseQueryAssetToPairMappingsRequest() {
    return { pagination: undefined };
}
exports.QueryAssetToPairMappingsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetToPairMappingsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAssetToPairMappingsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAssetToPairMappingsResponse() {
    return { assetToPairMappings: [], pagination: undefined };
}
exports.QueryAssetToPairMappingsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.assetToPairMappings) {
            lend_1.AssetToPairMapping.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetToPairMappingsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetToPairMappings.push(lend_1.AssetToPairMapping.decode(reader, reader.uint32()));
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
            assetToPairMappings: Array.isArray(object === null || object === void 0 ? void 0 : object.assetToPairMappings)
                ? object.assetToPairMappings.map((e) => lend_1.AssetToPairMapping.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.assetToPairMappings) {
            obj.assetToPairMappings = message.assetToPairMappings.map((e) => e ? lend_1.AssetToPairMapping.toJSON(e) : undefined);
        }
        else {
            obj.assetToPairMappings = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAssetToPairMappingsResponse();
        message.assetToPairMappings =
            ((_a = object.assetToPairMappings) === null || _a === void 0 ? void 0 : _a.map((e) => lend_1.AssetToPairMapping.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAssetToPairMappingRequest() {
    return { id: long_1.default.UZERO };
}
exports.QueryAssetToPairMappingRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetToPairMappingRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAssetToPairMappingRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryAssetToPairMappingResponse() {
    return { AssetToPairMapping: undefined };
}
exports.QueryAssetToPairMappingResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.AssetToPairMapping !== undefined) {
            lend_1.AssetToPairMapping.encode(message.AssetToPairMapping, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetToPairMappingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.AssetToPairMapping = lend_1.AssetToPairMapping.decode(reader, reader.uint32());
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
            AssetToPairMapping: isSet(object.AssetToPairMapping)
                ? lend_1.AssetToPairMapping.fromJSON(object.AssetToPairMapping)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.AssetToPairMapping !== undefined &&
            (obj.AssetToPairMapping = message.AssetToPairMapping
                ? lend_1.AssetToPairMapping.toJSON(message.AssetToPairMapping)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAssetToPairMappingResponse();
        message.AssetToPairMapping =
            object.AssetToPairMapping !== undefined &&
                object.AssetToPairMapping !== null
                ? lend_1.AssetToPairMapping.fromPartial(object.AssetToPairMapping)
                : undefined;
        return message;
    },
};
function createBaseQueryBorrowsRequest() {
    return { pagination: undefined };
}
exports.QueryBorrowsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBorrowsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBorrowsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryBorrowsResponse() {
    return { borrows: [], pagination: undefined };
}
exports.QueryBorrowsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.borrows) {
            lend_1.BorrowAsset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBorrowsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrows.push(lend_1.BorrowAsset.decode(reader, reader.uint32()));
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
            borrows: Array.isArray(object === null || object === void 0 ? void 0 : object.borrows)
                ? object.borrows.map((e) => lend_1.BorrowAsset.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.borrows) {
            obj.borrows = message.borrows.map((e) => e ? lend_1.BorrowAsset.toJSON(e) : undefined);
        }
        else {
            obj.borrows = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryBorrowsResponse();
        message.borrows =
            ((_a = object.borrows) === null || _a === void 0 ? void 0 : _a.map((e) => lend_1.BorrowAsset.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryBorrowRequest() {
    return { id: long_1.default.UZERO };
}
exports.QueryBorrowRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBorrowRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBorrowRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryBorrowResponse() {
    return { borrow: undefined };
}
exports.QueryBorrowResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.borrow !== undefined) {
            lend_1.BorrowAsset.encode(message.borrow, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBorrowResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrow = lend_1.BorrowAsset.decode(reader, reader.uint32());
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
            borrow: isSet(object.borrow)
                ? lend_1.BorrowAsset.fromJSON(object.borrow)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.borrow !== undefined &&
            (obj.borrow = message.borrow
                ? lend_1.BorrowAsset.toJSON(message.borrow)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBorrowResponse();
        message.borrow =
            object.borrow !== undefined && object.borrow !== null
                ? lend_1.BorrowAsset.fromPartial(object.borrow)
                : undefined;
        return message;
    },
};
function createBaseQueryAllBorrowByOwnerRequest() {
    return { owner: "", pagination: undefined };
}
exports.QueryAllBorrowByOwnerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBorrowByOwnerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllBorrowByOwnerRequest();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllBorrowByOwnerResponse() {
    return { borrows: [] };
}
exports.QueryAllBorrowByOwnerResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.borrows) {
            lend_1.BorrowAsset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBorrowByOwnerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrows.push(lend_1.BorrowAsset.decode(reader, reader.uint32()));
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
            borrows: Array.isArray(object === null || object === void 0 ? void 0 : object.borrows)
                ? object.borrows.map((e) => lend_1.BorrowAsset.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.borrows) {
            obj.borrows = message.borrows.map((e) => e ? lend_1.BorrowAsset.toJSON(e) : undefined);
        }
        else {
            obj.borrows = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllBorrowByOwnerResponse();
        message.borrows =
            ((_a = object.borrows) === null || _a === void 0 ? void 0 : _a.map((e) => lend_1.BorrowAsset.fromPartial(e))) || [];
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.QueryLends = this.QueryLends.bind(this);
        this.QueryLend = this.QueryLend.bind(this);
        this.QueryAllLendByOwner = this.QueryAllLendByOwner.bind(this);
        this.Params = this.Params.bind(this);
        this.QueryPairs = this.QueryPairs.bind(this);
        this.QueryPair = this.QueryPair.bind(this);
        this.QueryAssetRatesStats = this.QueryAssetRatesStats.bind(this);
        this.QueryAssetRatesStat = this.QueryAssetRatesStat.bind(this);
        this.QueryPools = this.QueryPools.bind(this);
        this.QueryPool = this.QueryPool.bind(this);
        this.QueryAssetToPairMappings = this.QueryAssetToPairMappings.bind(this);
        this.QueryAssetToPairMapping = this.QueryAssetToPairMapping.bind(this);
        this.QueryBorrows = this.QueryBorrows.bind(this);
        this.QueryBorrow = this.QueryBorrow.bind(this);
        this.QueryAllBorrowByOwner = this.QueryAllBorrowByOwner.bind(this);
    }
    QueryLends(request) {
        const data = exports.QueryLendsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryLends", data);
        return promise.then((data) => exports.QueryLendsResponse.decode(new _m0.Reader(data)));
    }
    QueryLend(request) {
        const data = exports.QueryLendRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryLend", data);
        return promise.then((data) => exports.QueryLendResponse.decode(new _m0.Reader(data)));
    }
    QueryAllLendByOwner(request) {
        const data = exports.QueryAllLendByOwnerRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryAllLendByOwner", data);
        return promise.then((data) => exports.QueryAllLendByOwnerResponse.decode(new _m0.Reader(data)));
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    QueryPairs(request) {
        const data = exports.QueryPairsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryPairs", data);
        return promise.then((data) => exports.QueryPairsResponse.decode(new _m0.Reader(data)));
    }
    QueryPair(request) {
        const data = exports.QueryPairRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryPair", data);
        return promise.then((data) => exports.QueryPairResponse.decode(new _m0.Reader(data)));
    }
    QueryAssetRatesStats(request) {
        const data = exports.QueryAssetRatesStatsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryAssetRatesStats", data);
        return promise.then((data) => exports.QueryAssetRatesStatsResponse.decode(new _m0.Reader(data)));
    }
    QueryAssetRatesStat(request) {
        const data = exports.QueryAssetRatesStatRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryAssetRatesStat", data);
        return promise.then((data) => exports.QueryAssetRatesStatResponse.decode(new _m0.Reader(data)));
    }
    QueryPools(request) {
        const data = exports.QueryPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryPools", data);
        return promise.then((data) => exports.QueryPoolsResponse.decode(new _m0.Reader(data)));
    }
    QueryPool(request) {
        const data = exports.QueryPoolRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryPool", data);
        return promise.then((data) => exports.QueryPoolResponse.decode(new _m0.Reader(data)));
    }
    QueryAssetToPairMappings(request) {
        const data = exports.QueryAssetToPairMappingsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryAssetToPairMappings", data);
        return promise.then((data) => exports.QueryAssetToPairMappingsResponse.decode(new _m0.Reader(data)));
    }
    QueryAssetToPairMapping(request) {
        const data = exports.QueryAssetToPairMappingRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryAssetToPairMapping", data);
        return promise.then((data) => exports.QueryAssetToPairMappingResponse.decode(new _m0.Reader(data)));
    }
    QueryBorrows(request) {
        const data = exports.QueryBorrowsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryBorrows", data);
        return promise.then((data) => exports.QueryBorrowsResponse.decode(new _m0.Reader(data)));
    }
    QueryBorrow(request) {
        const data = exports.QueryBorrowRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryBorrow", data);
        return promise.then((data) => exports.QueryBorrowResponse.decode(new _m0.Reader(data)));
    }
    QueryAllBorrowByOwner(request) {
        const data = exports.QueryAllBorrowByOwnerRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryAllBorrowByOwner", data);
        return promise.then((data) => exports.QueryAllBorrowByOwnerResponse.decode(new _m0.Reader(data)));
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