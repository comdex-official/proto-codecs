"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryServiceClientImpl = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryPairResponse = exports.QueryPairRequest = exports.QueryPairsResponse = exports.QueryPairsRequest = exports.PairInfo = exports.QueryAssetResponse = exports.QueryAssetRequest = exports.QueryAssetsResponse = exports.QueryAssetsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const asset_1 = require("../../../comdex/asset/v1beta1/asset");
const params_1 = require("../../../comdex/asset/v1beta1/params");
exports.protobufPackage = "comdex.asset.v1beta1";
const baseQueryAssetsRequest = {};
exports.QueryAssetsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAssetsRequest };
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
        const message = { ...baseQueryAssetsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
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
        const message = { ...baseQueryAssetsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAssetsResponse = {};
exports.QueryAssetsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.assets) {
            asset_1.Asset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAssetsResponse };
        message.assets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assets.push(asset_1.Asset.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryAssetsResponse };
        message.assets = [];
        if (object.assets !== undefined && object.assets !== null) {
            for (const e of object.assets) {
                message.assets.push(asset_1.Asset.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map((e) => (e ? asset_1.Asset.toJSON(e) : undefined));
        }
        else {
            obj.assets = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAssetsResponse };
        message.assets = [];
        if (object.assets !== undefined && object.assets !== null) {
            for (const e of object.assets) {
                message.assets.push(asset_1.Asset.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAssetRequest = { id: long_1.default.UZERO };
exports.QueryAssetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAssetRequest };
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
        const message = { ...baseQueryAssetRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = long_1.default.fromString(object.id);
        }
        else {
            message.id = long_1.default.UZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAssetRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = long_1.default.UZERO;
        }
        return message;
    },
};
const baseQueryAssetResponse = {};
exports.QueryAssetResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.asset !== undefined) {
            asset_1.Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAssetResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.asset = asset_1.Asset.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAssetResponse };
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = asset_1.Asset.fromJSON(object.asset);
        }
        else {
            message.asset = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.asset !== undefined &&
            (obj.asset = message.asset ? asset_1.Asset.toJSON(message.asset) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAssetResponse };
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = asset_1.Asset.fromPartial(object.asset);
        }
        else {
            message.asset = undefined;
        }
        return message;
    },
};
const basePairInfo = {
    id: long_1.default.UZERO,
    assetIn: long_1.default.UZERO,
    denomIn: "",
    assetOut: long_1.default.UZERO,
    denomOut: "",
    liquidationRatio: "",
};
exports.PairInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.assetIn.isZero()) {
            writer.uint32(16).uint64(message.assetIn);
        }
        if (message.denomIn !== "") {
            writer.uint32(26).string(message.denomIn);
        }
        if (!message.assetOut.isZero()) {
            writer.uint32(32).uint64(message.assetOut);
        }
        if (message.denomOut !== "") {
            writer.uint32(42).string(message.denomOut);
        }
        if (message.liquidationRatio !== "") {
            writer.uint32(50).string(message.liquidationRatio);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePairInfo };
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
                    message.denomIn = reader.string();
                    break;
                case 4:
                    message.assetOut = reader.uint64();
                    break;
                case 5:
                    message.denomOut = reader.string();
                    break;
                case 6:
                    message.liquidationRatio = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePairInfo };
        if (object.id !== undefined && object.id !== null) {
            message.id = long_1.default.fromString(object.id);
        }
        else {
            message.id = long_1.default.UZERO;
        }
        if (object.assetIn !== undefined && object.assetIn !== null) {
            message.assetIn = long_1.default.fromString(object.assetIn);
        }
        else {
            message.assetIn = long_1.default.UZERO;
        }
        if (object.denomIn !== undefined && object.denomIn !== null) {
            message.denomIn = String(object.denomIn);
        }
        else {
            message.denomIn = "";
        }
        if (object.assetOut !== undefined && object.assetOut !== null) {
            message.assetOut = long_1.default.fromString(object.assetOut);
        }
        else {
            message.assetOut = long_1.default.UZERO;
        }
        if (object.denomOut !== undefined && object.denomOut !== null) {
            message.denomOut = String(object.denomOut);
        }
        else {
            message.denomOut = "";
        }
        if (object.liquidationRatio !== undefined &&
            object.liquidationRatio !== null) {
            message.liquidationRatio = String(object.liquidationRatio);
        }
        else {
            message.liquidationRatio = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.assetIn !== undefined &&
            (obj.assetIn = (message.assetIn || long_1.default.UZERO).toString());
        message.denomIn !== undefined && (obj.denomIn = message.denomIn);
        message.assetOut !== undefined &&
            (obj.assetOut = (message.assetOut || long_1.default.UZERO).toString());
        message.denomOut !== undefined && (obj.denomOut = message.denomOut);
        message.liquidationRatio !== undefined &&
            (obj.liquidationRatio = message.liquidationRatio);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePairInfo };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = long_1.default.UZERO;
        }
        if (object.assetIn !== undefined && object.assetIn !== null) {
            message.assetIn = object.assetIn;
        }
        else {
            message.assetIn = long_1.default.UZERO;
        }
        if (object.denomIn !== undefined && object.denomIn !== null) {
            message.denomIn = object.denomIn;
        }
        else {
            message.denomIn = "";
        }
        if (object.assetOut !== undefined && object.assetOut !== null) {
            message.assetOut = object.assetOut;
        }
        else {
            message.assetOut = long_1.default.UZERO;
        }
        if (object.denomOut !== undefined && object.denomOut !== null) {
            message.denomOut = object.denomOut;
        }
        else {
            message.denomOut = "";
        }
        if (object.liquidationRatio !== undefined &&
            object.liquidationRatio !== null) {
            message.liquidationRatio = object.liquidationRatio;
        }
        else {
            message.liquidationRatio = "";
        }
        return message;
    },
};
const baseQueryPairsRequest = {};
exports.QueryPairsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPairsRequest };
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
        const message = { ...baseQueryPairsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
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
        const message = { ...baseQueryPairsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryPairsResponse = {};
exports.QueryPairsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.pairsInfo) {
            exports.PairInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPairsResponse };
        message.pairsInfo = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairsInfo.push(exports.PairInfo.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryPairsResponse };
        message.pairsInfo = [];
        if (object.pairsInfo !== undefined && object.pairsInfo !== null) {
            for (const e of object.pairsInfo) {
                message.pairsInfo.push(exports.PairInfo.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.pairsInfo) {
            obj.pairsInfo = message.pairsInfo.map((e) => e ? exports.PairInfo.toJSON(e) : undefined);
        }
        else {
            obj.pairsInfo = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryPairsResponse };
        message.pairsInfo = [];
        if (object.pairsInfo !== undefined && object.pairsInfo !== null) {
            for (const e of object.pairsInfo) {
                message.pairsInfo.push(exports.PairInfo.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryPairRequest = { id: long_1.default.UZERO };
exports.QueryPairRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPairRequest };
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
        const message = { ...baseQueryPairRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = long_1.default.fromString(object.id);
        }
        else {
            message.id = long_1.default.UZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryPairRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = long_1.default.UZERO;
        }
        return message;
    },
};
const baseQueryPairResponse = {};
exports.QueryPairResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pairInfo !== undefined) {
            exports.PairInfo.encode(message.pairInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPairResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairInfo = exports.PairInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryPairResponse };
        if (object.pairInfo !== undefined && object.pairInfo !== null) {
            message.pairInfo = exports.PairInfo.fromJSON(object.pairInfo);
        }
        else {
            message.pairInfo = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pairInfo !== undefined &&
            (obj.pairInfo = message.pairInfo
                ? exports.PairInfo.toJSON(message.pairInfo)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryPairResponse };
        if (object.pairInfo !== undefined && object.pairInfo !== null) {
            message.pairInfo = exports.PairInfo.fromPartial(object.pairInfo);
        }
        else {
            message.pairInfo = undefined;
        }
        return message;
    },
};
const baseQueryParamsRequest = {};
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsRequest };
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
        const message = { ...baseQueryParamsRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    },
};
const baseQueryParamsResponse = {};
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
        const message = { ...baseQueryParamsResponse };
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
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
class QueryServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.QueryAssets = this.QueryAssets.bind(this);
        this.QueryAsset = this.QueryAsset.bind(this);
        this.QueryPairs = this.QueryPairs.bind(this);
        this.QueryPair = this.QueryPair.bind(this);
        this.QueryParams = this.QueryParams.bind(this);
    }
    QueryAssets(request) {
        const data = exports.QueryAssetsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.asset.v1beta1.QueryService", "QueryAssets", data);
        return promise.then((data) => exports.QueryAssetsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryAsset(request) {
        const data = exports.QueryAssetRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.asset.v1beta1.QueryService", "QueryAsset", data);
        return promise.then((data) => exports.QueryAssetResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryPairs(request) {
        const data = exports.QueryPairsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.asset.v1beta1.QueryService", "QueryPairs", data);
        return promise.then((data) => exports.QueryPairsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryPair(request) {
        const data = exports.QueryPairRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.asset.v1beta1.QueryService", "QueryPair", data);
        return promise.then((data) => exports.QueryPairResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryParams(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.asset.v1beta1.QueryService", "QueryParams", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryServiceClientImpl = QueryServiceClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=querier.js.map