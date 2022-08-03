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
exports.QueryAuctionParamRequest = exports.QueryBorrowStatsResponse = exports.QueryBorrowStatsRequest = exports.QueryBuyBackDepositStatsResponse = exports.QueryBuyBackDepositStatsRequest = exports.QueryReserveDepositStatsResponse = exports.QueryReserveDepositStatsRequest = exports.QueryUserDepositStatsResponse = exports.QueryUserDepositStatsRequest = exports.QueryDepositStatsResponse = exports.QueryDepositStatsRequest = exports.QueryModuleBalanceResponse = exports.QueryModuleBalanceRequest = exports.QueryAssetStatsResponse = exports.QueryAssetStatsRequest = exports.QueryAllBorrowByOwnerAndPoolResponse = exports.QueryAllBorrowByOwnerAndPoolRequest = exports.QueryAllBorrowByOwnerResponse = exports.QueryAllBorrowByOwnerRequest = exports.QueryBorrowResponse = exports.QueryBorrowRequest = exports.QueryBorrowsResponse = exports.QueryBorrowsRequest = exports.QueryAssetToPairMappingResponse = exports.QueryAssetToPairMappingRequest = exports.QueryAssetToPairMappingsResponse = exports.QueryAssetToPairMappingsRequest = exports.QueryPoolResponse = exports.QueryPoolRequest = exports.QueryPoolsResponse = exports.QueryPoolsRequest = exports.QueryAssetRatesStatResponse = exports.QueryAssetRatesStatRequest = exports.QueryAssetRatesStatsResponse = exports.QueryAssetRatesStatsRequest = exports.QueryPairResponse = exports.QueryPairRequest = exports.QueryPairsResponse = exports.QueryPairsRequest = exports.QueryAllLendByOwnerAndPoolResponse = exports.QueryAllLendByOwnerAndPoolRequest = exports.QueryAllLendByOwnerResponse = exports.QueryAllLendByOwnerRequest = exports.QueryLendResponse = exports.QueryLendRequest = exports.QueryLendsResponse = exports.QueryLendsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
exports.QueryClientImpl = exports.QueryAuctionParamResponse = void 0;
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
function createBaseQueryAllLendByOwnerAndPoolRequest() {
    return { owner: "", poolId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryAllLendByOwnerAndPoolRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllLendByOwnerAndPoolRequest();
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllLendByOwnerAndPoolRequest();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllLendByOwnerAndPoolResponse() {
    return { lends: [] };
}
exports.QueryAllLendByOwnerAndPoolResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.lends) {
            lend_1.LendAsset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllLendByOwnerAndPoolResponse();
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
        const message = createBaseQueryAllLendByOwnerAndPoolResponse();
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
    return { pool: undefined };
}
exports.QueryPoolResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pool !== undefined) {
            lend_1.Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
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
                    message.pool = lend_1.Pool.decode(reader, reader.uint32());
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
            pool: isSet(object.pool) ? lend_1.Pool.fromJSON(object.pool) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool !== undefined &&
            (obj.pool = message.pool ? lend_1.Pool.toJSON(message.pool) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolResponse();
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? lend_1.Pool.fromPartial(object.pool)
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
    return { assetId: long_1.default.UZERO, poolId: long_1.default.UZERO };
}
exports.QueryAssetToPairMappingRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
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
                    message.assetId = reader.uint64();
                    break;
                case 2:
                    message.poolId = reader.uint64();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAssetToPairMappingRequest();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
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
function createBaseQueryAllBorrowByOwnerAndPoolRequest() {
    return { owner: "", poolId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryAllBorrowByOwnerAndPoolRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBorrowByOwnerAndPoolRequest();
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllBorrowByOwnerAndPoolRequest();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllBorrowByOwnerAndPoolResponse() {
    return { borrows: [] };
}
exports.QueryAllBorrowByOwnerAndPoolResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.borrows) {
            lend_1.BorrowAsset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBorrowByOwnerAndPoolResponse();
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
        const message = createBaseQueryAllBorrowByOwnerAndPoolResponse();
        message.borrows =
            ((_a = object.borrows) === null || _a === void 0 ? void 0 : _a.map((e) => lend_1.BorrowAsset.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryAssetStatsRequest() {
    return { assetId: long_1.default.UZERO, poolId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryAssetStatsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetStatsRequest();
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
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAssetStatsRequest();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAssetStatsResponse() {
    return { AssetStats: undefined };
}
exports.QueryAssetStatsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.AssetStats !== undefined) {
            lend_1.AssetStats.encode(message.AssetStats, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetStatsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.AssetStats = lend_1.AssetStats.decode(reader, reader.uint32());
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
            AssetStats: isSet(object.AssetStats)
                ? lend_1.AssetStats.fromJSON(object.AssetStats)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.AssetStats !== undefined &&
            (obj.AssetStats = message.AssetStats
                ? lend_1.AssetStats.toJSON(message.AssetStats)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAssetStatsResponse();
        message.AssetStats =
            object.AssetStats !== undefined && object.AssetStats !== null
                ? lend_1.AssetStats.fromPartial(object.AssetStats)
                : undefined;
        return message;
    },
};
function createBaseQueryModuleBalanceRequest() {
    return { poolId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryModuleBalanceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleBalanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleBalanceRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryModuleBalanceResponse() {
    return { ModuleBalance: undefined };
}
exports.QueryModuleBalanceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ModuleBalance !== undefined) {
            lend_1.ModuleBalance.encode(message.ModuleBalance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ModuleBalance = lend_1.ModuleBalance.decode(reader, reader.uint32());
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
            ModuleBalance: isSet(object.ModuleBalance)
                ? lend_1.ModuleBalance.fromJSON(object.ModuleBalance)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.ModuleBalance !== undefined &&
            (obj.ModuleBalance = message.ModuleBalance
                ? lend_1.ModuleBalance.toJSON(message.ModuleBalance)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleBalanceResponse();
        message.ModuleBalance =
            object.ModuleBalance !== undefined && object.ModuleBalance !== null
                ? lend_1.ModuleBalance.fromPartial(object.ModuleBalance)
                : undefined;
        return message;
    },
};
function createBaseQueryDepositStatsRequest() {
    return {};
}
exports.QueryDepositStatsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositStatsRequest();
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
        const message = createBaseQueryDepositStatsRequest();
        return message;
    },
};
function createBaseQueryDepositStatsResponse() {
    return { DepositStats: undefined };
}
exports.QueryDepositStatsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.DepositStats !== undefined) {
            lend_1.DepositStats.encode(message.DepositStats, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositStatsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.DepositStats = lend_1.DepositStats.decode(reader, reader.uint32());
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
            DepositStats: isSet(object.DepositStats)
                ? lend_1.DepositStats.fromJSON(object.DepositStats)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.DepositStats !== undefined &&
            (obj.DepositStats = message.DepositStats
                ? lend_1.DepositStats.toJSON(message.DepositStats)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDepositStatsResponse();
        message.DepositStats =
            object.DepositStats !== undefined && object.DepositStats !== null
                ? lend_1.DepositStats.fromPartial(object.DepositStats)
                : undefined;
        return message;
    },
};
function createBaseQueryUserDepositStatsRequest() {
    return {};
}
exports.QueryUserDepositStatsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUserDepositStatsRequest();
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
        const message = createBaseQueryUserDepositStatsRequest();
        return message;
    },
};
function createBaseQueryUserDepositStatsResponse() {
    return { UserDepositStats: undefined };
}
exports.QueryUserDepositStatsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.UserDepositStats !== undefined) {
            lend_1.DepositStats.encode(message.UserDepositStats, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUserDepositStatsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.UserDepositStats = lend_1.DepositStats.decode(reader, reader.uint32());
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
            UserDepositStats: isSet(object.UserDepositStats)
                ? lend_1.DepositStats.fromJSON(object.UserDepositStats)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.UserDepositStats !== undefined &&
            (obj.UserDepositStats = message.UserDepositStats
                ? lend_1.DepositStats.toJSON(message.UserDepositStats)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUserDepositStatsResponse();
        message.UserDepositStats =
            object.UserDepositStats !== undefined && object.UserDepositStats !== null
                ? lend_1.DepositStats.fromPartial(object.UserDepositStats)
                : undefined;
        return message;
    },
};
function createBaseQueryReserveDepositStatsRequest() {
    return {};
}
exports.QueryReserveDepositStatsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryReserveDepositStatsRequest();
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
        const message = createBaseQueryReserveDepositStatsRequest();
        return message;
    },
};
function createBaseQueryReserveDepositStatsResponse() {
    return { ReserveDepositStats: undefined };
}
exports.QueryReserveDepositStatsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ReserveDepositStats !== undefined) {
            lend_1.DepositStats.encode(message.ReserveDepositStats, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryReserveDepositStatsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ReserveDepositStats = lend_1.DepositStats.decode(reader, reader.uint32());
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
            ReserveDepositStats: isSet(object.ReserveDepositStats)
                ? lend_1.DepositStats.fromJSON(object.ReserveDepositStats)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.ReserveDepositStats !== undefined &&
            (obj.ReserveDepositStats = message.ReserveDepositStats
                ? lend_1.DepositStats.toJSON(message.ReserveDepositStats)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryReserveDepositStatsResponse();
        message.ReserveDepositStats =
            object.ReserveDepositStats !== undefined &&
                object.ReserveDepositStats !== null
                ? lend_1.DepositStats.fromPartial(object.ReserveDepositStats)
                : undefined;
        return message;
    },
};
function createBaseQueryBuyBackDepositStatsRequest() {
    return {};
}
exports.QueryBuyBackDepositStatsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBuyBackDepositStatsRequest();
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
        const message = createBaseQueryBuyBackDepositStatsRequest();
        return message;
    },
};
function createBaseQueryBuyBackDepositStatsResponse() {
    return { BuyBackDepositStats: undefined };
}
exports.QueryBuyBackDepositStatsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.BuyBackDepositStats !== undefined) {
            lend_1.DepositStats.encode(message.BuyBackDepositStats, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBuyBackDepositStatsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.BuyBackDepositStats = lend_1.DepositStats.decode(reader, reader.uint32());
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
            BuyBackDepositStats: isSet(object.BuyBackDepositStats)
                ? lend_1.DepositStats.fromJSON(object.BuyBackDepositStats)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.BuyBackDepositStats !== undefined &&
            (obj.BuyBackDepositStats = message.BuyBackDepositStats
                ? lend_1.DepositStats.toJSON(message.BuyBackDepositStats)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBuyBackDepositStatsResponse();
        message.BuyBackDepositStats =
            object.BuyBackDepositStats !== undefined &&
                object.BuyBackDepositStats !== null
                ? lend_1.DepositStats.fromPartial(object.BuyBackDepositStats)
                : undefined;
        return message;
    },
};
function createBaseQueryBorrowStatsRequest() {
    return {};
}
exports.QueryBorrowStatsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBorrowStatsRequest();
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
        const message = createBaseQueryBorrowStatsRequest();
        return message;
    },
};
function createBaseQueryBorrowStatsResponse() {
    return { BorrowStats: undefined };
}
exports.QueryBorrowStatsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.BorrowStats !== undefined) {
            lend_1.DepositStats.encode(message.BorrowStats, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBorrowStatsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.BorrowStats = lend_1.DepositStats.decode(reader, reader.uint32());
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
            BorrowStats: isSet(object.BorrowStats)
                ? lend_1.DepositStats.fromJSON(object.BorrowStats)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.BorrowStats !== undefined &&
            (obj.BorrowStats = message.BorrowStats
                ? lend_1.DepositStats.toJSON(message.BorrowStats)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBorrowStatsResponse();
        message.BorrowStats =
            object.BorrowStats !== undefined && object.BorrowStats !== null
                ? lend_1.DepositStats.fromPartial(object.BorrowStats)
                : undefined;
        return message;
    },
};
function createBaseQueryAuctionParamRequest() {
    return { appId: long_1.default.UZERO };
}
exports.QueryAuctionParamRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionParamRequest();
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
        const message = createBaseQueryAuctionParamRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryAuctionParamResponse() {
    return { auctionParams: undefined };
}
exports.QueryAuctionParamResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.auctionParams !== undefined) {
            lend_1.AuctionParams.encode(message.auctionParams, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionParamResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctionParams = lend_1.AuctionParams.decode(reader, reader.uint32());
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
            auctionParams: isSet(object.auctionParams)
                ? lend_1.AuctionParams.fromJSON(object.auctionParams)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.auctionParams !== undefined &&
            (obj.auctionParams = message.auctionParams
                ? lend_1.AuctionParams.toJSON(message.auctionParams)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAuctionParamResponse();
        message.auctionParams =
            object.auctionParams !== undefined && object.auctionParams !== null
                ? lend_1.AuctionParams.fromPartial(object.auctionParams)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.QueryLends = this.QueryLends.bind(this);
        this.QueryLend = this.QueryLend.bind(this);
        this.QueryAllLendByOwner = this.QueryAllLendByOwner.bind(this);
        this.QueryAllLendByOwnerAndPool =
            this.QueryAllLendByOwnerAndPool.bind(this);
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
        this.QueryAllBorrowByOwnerAndPool =
            this.QueryAllBorrowByOwnerAndPool.bind(this);
        this.QueryAssetStats = this.QueryAssetStats.bind(this);
        this.QueryModuleBalance = this.QueryModuleBalance.bind(this);
        this.QueryDepositStats = this.QueryDepositStats.bind(this);
        this.QueryUserDepositStats = this.QueryUserDepositStats.bind(this);
        this.QueryReserveDepositStats = this.QueryReserveDepositStats.bind(this);
        this.QueryBuyBackDepositStats = this.QueryBuyBackDepositStats.bind(this);
        this.QueryBorrowStats = this.QueryBorrowStats.bind(this);
        this.QueryAuctionParams = this.QueryAuctionParams.bind(this);
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
    QueryAllLendByOwnerAndPool(request) {
        const data = exports.QueryAllLendByOwnerAndPoolRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryAllLendByOwnerAndPool", data);
        return promise.then((data) => exports.QueryAllLendByOwnerAndPoolResponse.decode(new _m0.Reader(data)));
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
    QueryAllBorrowByOwnerAndPool(request) {
        const data = exports.QueryAllBorrowByOwnerAndPoolRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryAllBorrowByOwnerAndPool", data);
        return promise.then((data) => exports.QueryAllBorrowByOwnerAndPoolResponse.decode(new _m0.Reader(data)));
    }
    QueryAssetStats(request) {
        const data = exports.QueryAssetStatsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryAssetStats", data);
        return promise.then((data) => exports.QueryAssetStatsResponse.decode(new _m0.Reader(data)));
    }
    QueryModuleBalance(request) {
        const data = exports.QueryModuleBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryModuleBalance", data);
        return promise.then((data) => exports.QueryModuleBalanceResponse.decode(new _m0.Reader(data)));
    }
    QueryDepositStats(request) {
        const data = exports.QueryDepositStatsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryDepositStats", data);
        return promise.then((data) => exports.QueryDepositStatsResponse.decode(new _m0.Reader(data)));
    }
    QueryUserDepositStats(request) {
        const data = exports.QueryUserDepositStatsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryUserDepositStats", data);
        return promise.then((data) => exports.QueryUserDepositStatsResponse.decode(new _m0.Reader(data)));
    }
    QueryReserveDepositStats(request) {
        const data = exports.QueryReserveDepositStatsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryReserveDepositStats", data);
        return promise.then((data) => exports.QueryReserveDepositStatsResponse.decode(new _m0.Reader(data)));
    }
    QueryBuyBackDepositStats(request) {
        const data = exports.QueryBuyBackDepositStatsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryBuyBackDepositStats", data);
        return promise.then((data) => exports.QueryBuyBackDepositStatsResponse.decode(new _m0.Reader(data)));
    }
    QueryBorrowStats(request) {
        const data = exports.QueryBorrowStatsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryBorrowStats", data);
        return promise.then((data) => exports.QueryBorrowStatsResponse.decode(new _m0.Reader(data)));
    }
    QueryAuctionParams(request) {
        const data = exports.QueryAuctionParamRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Query", "QueryAuctionParams", data);
        return promise.then((data) => exports.QueryAuctionParamResponse.decode(new _m0.Reader(data)));
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