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
exports.QueryClientImpl = exports.QueryExtendedPairDataPsmPairWiseResponse = exports.QueryExtendedPairDataPsmPairWiseRequest = exports.QueryExtendedPairPsmPairWiseResponse = exports.QueryExtendedPairPsmPairWiseRequest = exports.QueryProductToExtendedPairResponse = exports.QueryProductToExtendedPairRequest = exports.QueryPairVaultsResponse = exports.QueryPairVaultsRequest = exports.QueryPairVaultResponse = exports.QueryPairVaultRequest = exports.QueryAppsResponse = exports.QueryAppsRequest = exports.QueryTokenGovResponse = exports.QueryTokenGovRequest = exports.QueryAppResponse = exports.QueryAppRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryPairResponse = exports.QueryPairRequest = exports.QueryPairsResponse = exports.QueryPairsRequest = exports.PairInfo = exports.QueryAssetResponse = exports.QueryAssetRequest = exports.QueryAssetsResponse = exports.QueryAssetsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const asset_1 = require("../../../comdex/asset/v1beta1/asset");
const params_1 = require("../../../comdex/asset/v1beta1/params");
const appMapping_1 = require("../../../comdex/asset/v1beta1/appMapping");
const extendedPairVault_1 = require("../../../comdex/asset/v1beta1/extendedPairVault");
exports.protobufPackage = "comdex.asset.v1beta1";
function createBaseQueryAssetsRequest() {
    return { pagination: undefined };
}
exports.QueryAssetsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetsRequest();
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
        const message = createBaseQueryAssetsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAssetsResponse() {
    return { assets: [], pagination: undefined };
}
exports.QueryAssetsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.assets) {
            asset_1.Asset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetsResponse();
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
        return {
            assets: Array.isArray(object === null || object === void 0 ? void 0 : object.assets)
                ? object.assets.map((e) => asset_1.Asset.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
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
        var _a;
        const message = createBaseQueryAssetsResponse();
        message.assets = ((_a = object.assets) === null || _a === void 0 ? void 0 : _a.map((e) => asset_1.Asset.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAssetRequest() {
    return { id: long_1.default.UZERO };
}
exports.QueryAssetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetRequest();
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
        const message = createBaseQueryAssetRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryAssetResponse() {
    return { asset: undefined };
}
exports.QueryAssetResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.asset !== undefined) {
            asset_1.Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetResponse();
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
        return {
            asset: isSet(object.asset) ? asset_1.Asset.fromJSON(object.asset) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.asset !== undefined &&
            (obj.asset = message.asset ? asset_1.Asset.toJSON(message.asset) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAssetResponse();
        message.asset =
            object.asset !== undefined && object.asset !== null
                ? asset_1.Asset.fromPartial(object.asset)
                : undefined;
        return message;
    },
};
function createBasePairInfo() {
    return {
        id: long_1.default.UZERO,
        assetIn: long_1.default.UZERO,
        denomIn: "",
        assetOut: long_1.default.UZERO,
        denomOut: "",
    };
}
exports.PairInfo = {
    encode(message, writer = _m0.Writer.create()) {
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePairInfo();
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
            denomIn: isSet(object.denomIn) ? String(object.denomIn) : "",
            assetOut: isSet(object.assetOut)
                ? long_1.default.fromValue(object.assetOut)
                : long_1.default.UZERO,
            denomOut: isSet(object.denomOut) ? String(object.denomOut) : "",
        };
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
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePairInfo();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.assetIn =
            object.assetIn !== undefined && object.assetIn !== null
                ? long_1.default.fromValue(object.assetIn)
                : long_1.default.UZERO;
        message.denomIn = (_a = object.denomIn) !== null && _a !== void 0 ? _a : "";
        message.assetOut =
            object.assetOut !== undefined && object.assetOut !== null
                ? long_1.default.fromValue(object.assetOut)
                : long_1.default.UZERO;
        message.denomOut = (_b = object.denomOut) !== null && _b !== void 0 ? _b : "";
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
    return { pairsInfo: [], pagination: undefined };
}
exports.QueryPairsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pairsInfo) {
            exports.PairInfo.encode(v, writer.uint32(10).fork()).ldelim();
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
        return {
            pairsInfo: Array.isArray(object === null || object === void 0 ? void 0 : object.pairsInfo)
                ? object.pairsInfo.map((e) => exports.PairInfo.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
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
        var _a;
        const message = createBaseQueryPairsResponse();
        message.pairsInfo =
            ((_a = object.pairsInfo) === null || _a === void 0 ? void 0 : _a.map((e) => exports.PairInfo.fromPartial(e))) || [];
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
    return { pairInfo: undefined };
}
exports.QueryPairResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pairInfo !== undefined) {
            exports.PairInfo.encode(message.pairInfo, writer.uint32(10).fork()).ldelim();
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
        return {
            pairInfo: isSet(object.pairInfo)
                ? exports.PairInfo.fromJSON(object.pairInfo)
                : undefined,
        };
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
        const message = createBaseQueryPairResponse();
        message.pairInfo =
            object.pairInfo !== undefined && object.pairInfo !== null
                ? exports.PairInfo.fromPartial(object.pairInfo)
                : undefined;
        return message;
    },
};
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
function createBaseQueryAppRequest() {
    return { id: long_1.default.UZERO };
}
exports.QueryAppRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppRequest();
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
        const message = createBaseQueryAppRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryAppResponse() {
    return { app: undefined };
}
exports.QueryAppResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.app !== undefined) {
            appMapping_1.AppMapping.encode(message.app, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.app = appMapping_1.AppMapping.decode(reader, reader.uint32());
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
            app: isSet(object.app) ? appMapping_1.AppMapping.fromJSON(object.app) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.app !== undefined &&
            (obj.app = message.app ? appMapping_1.AppMapping.toJSON(message.app) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAppResponse();
        message.app =
            object.app !== undefined && object.app !== null
                ? appMapping_1.AppMapping.fromPartial(object.app)
                : undefined;
        return message;
    },
};
function createBaseQueryTokenGovRequest() {
    return { appId: long_1.default.UZERO };
}
exports.QueryTokenGovRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenGovRequest();
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
        const message = createBaseQueryTokenGovRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryTokenGovResponse() {
    return { govAssetId: long_1.default.UZERO };
}
exports.QueryTokenGovResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.govAssetId.isZero()) {
            writer.uint32(8).uint64(message.govAssetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenGovResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.govAssetId = reader.uint64();
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
            govAssetId: isSet(object.govAssetId)
                ? long_1.default.fromValue(object.govAssetId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.govAssetId !== undefined &&
            (obj.govAssetId = (message.govAssetId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenGovResponse();
        message.govAssetId =
            object.govAssetId !== undefined && object.govAssetId !== null
                ? long_1.default.fromValue(object.govAssetId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryAppsRequest() {
    return {};
}
exports.QueryAppsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppsRequest();
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
        const message = createBaseQueryAppsRequest();
        return message;
    },
};
function createBaseQueryAppsResponse() {
    return { apps: [] };
}
exports.QueryAppsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.apps) {
            appMapping_1.AppMapping.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apps.push(appMapping_1.AppMapping.decode(reader, reader.uint32()));
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
            apps: Array.isArray(object === null || object === void 0 ? void 0 : object.apps)
                ? object.apps.map((e) => appMapping_1.AppMapping.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.apps) {
            obj.apps = message.apps.map((e) => e ? appMapping_1.AppMapping.toJSON(e) : undefined);
        }
        else {
            obj.apps = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAppsResponse();
        message.apps = ((_a = object.apps) === null || _a === void 0 ? void 0 : _a.map((e) => appMapping_1.AppMapping.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryPairVaultRequest() {
    return { id: long_1.default.UZERO };
}
exports.QueryPairVaultRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPairVaultRequest();
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
        const message = createBaseQueryPairVaultRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryPairVaultResponse() {
    return { pairVault: undefined };
}
exports.QueryPairVaultResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pairVault !== undefined) {
            extendedPairVault_1.ExtendedPairVault.encode(message.pairVault, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPairVaultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairVault = extendedPairVault_1.ExtendedPairVault.decode(reader, reader.uint32());
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
            pairVault: isSet(object.pairVault)
                ? extendedPairVault_1.ExtendedPairVault.fromJSON(object.pairVault)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pairVault !== undefined &&
            (obj.pairVault = message.pairVault
                ? extendedPairVault_1.ExtendedPairVault.toJSON(message.pairVault)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPairVaultResponse();
        message.pairVault =
            object.pairVault !== undefined && object.pairVault !== null
                ? extendedPairVault_1.ExtendedPairVault.fromPartial(object.pairVault)
                : undefined;
        return message;
    },
};
function createBaseQueryPairVaultsRequest() {
    return {};
}
exports.QueryPairVaultsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPairVaultsRequest();
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
        const message = createBaseQueryPairVaultsRequest();
        return message;
    },
};
function createBaseQueryPairVaultsResponse() {
    return { pairVault: [] };
}
exports.QueryPairVaultsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pairVault) {
            extendedPairVault_1.ExtendedPairVault.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPairVaultsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairVault.push(extendedPairVault_1.ExtendedPairVault.decode(reader, reader.uint32()));
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
            pairVault: Array.isArray(object === null || object === void 0 ? void 0 : object.pairVault)
                ? object.pairVault.map((e) => extendedPairVault_1.ExtendedPairVault.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pairVault) {
            obj.pairVault = message.pairVault.map((e) => e ? extendedPairVault_1.ExtendedPairVault.toJSON(e) : undefined);
        }
        else {
            obj.pairVault = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPairVaultsResponse();
        message.pairVault =
            ((_a = object.pairVault) === null || _a === void 0 ? void 0 : _a.map((e) => extendedPairVault_1.ExtendedPairVault.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryProductToExtendedPairRequest() {
    return { productId: long_1.default.UZERO };
}
exports.QueryProductToExtendedPairRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.productId.isZero()) {
            writer.uint32(8).uint64(message.productId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProductToExtendedPairRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productId = reader.uint64();
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
            productId: isSet(object.productId)
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.productId !== undefined &&
            (obj.productId = (message.productId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProductToExtendedPairRequest();
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryProductToExtendedPairResponse() {
    return { extendedPair: [] };
}
exports.QueryProductToExtendedPairResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.extendedPair) {
            extendedPairVault_1.ExtendedPairVault.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProductToExtendedPairResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extendedPair.push(extendedPairVault_1.ExtendedPairVault.decode(reader, reader.uint32()));
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
            extendedPair: Array.isArray(object === null || object === void 0 ? void 0 : object.extendedPair)
                ? object.extendedPair.map((e) => extendedPairVault_1.ExtendedPairVault.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.extendedPair) {
            obj.extendedPair = message.extendedPair.map((e) => e ? extendedPairVault_1.ExtendedPairVault.toJSON(e) : undefined);
        }
        else {
            obj.extendedPair = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryProductToExtendedPairResponse();
        message.extendedPair =
            ((_a = object.extendedPair) === null || _a === void 0 ? void 0 : _a.map((e) => extendedPairVault_1.ExtendedPairVault.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryExtendedPairPsmPairWiseRequest() {
    return { productId: long_1.default.UZERO };
}
exports.QueryExtendedPairPsmPairWiseRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.productId.isZero()) {
            writer.uint32(8).uint64(message.productId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExtendedPairPsmPairWiseRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productId = reader.uint64();
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
            productId: isSet(object.productId)
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.productId !== undefined &&
            (obj.productId = (message.productId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryExtendedPairPsmPairWiseRequest();
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryExtendedPairPsmPairWiseResponse() {
    return { extendedPairsId: [] };
}
exports.QueryExtendedPairPsmPairWiseResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.extendedPairsId) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExtendedPairPsmPairWiseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.extendedPairsId.push(reader.uint64());
                        }
                    }
                    else {
                        message.extendedPairsId.push(reader.uint64());
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
            extendedPairsId: Array.isArray(object === null || object === void 0 ? void 0 : object.extendedPairsId)
                ? object.extendedPairsId.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.extendedPairsId) {
            obj.extendedPairsId = message.extendedPairsId.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.extendedPairsId = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryExtendedPairPsmPairWiseResponse();
        message.extendedPairsId =
            ((_a = object.extendedPairsId) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseQueryExtendedPairDataPsmPairWiseRequest() {
    return { appId: long_1.default.UZERO };
}
exports.QueryExtendedPairDataPsmPairWiseRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExtendedPairDataPsmPairWiseRequest();
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
        const message = createBaseQueryExtendedPairDataPsmPairWiseRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryExtendedPairDataPsmPairWiseResponse() {
    return { extendedPair: [] };
}
exports.QueryExtendedPairDataPsmPairWiseResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.extendedPair) {
            extendedPairVault_1.ExtendedPairVault.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExtendedPairDataPsmPairWiseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extendedPair.push(extendedPairVault_1.ExtendedPairVault.decode(reader, reader.uint32()));
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
            extendedPair: Array.isArray(object === null || object === void 0 ? void 0 : object.extendedPair)
                ? object.extendedPair.map((e) => extendedPairVault_1.ExtendedPairVault.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.extendedPair) {
            obj.extendedPair = message.extendedPair.map((e) => e ? extendedPairVault_1.ExtendedPairVault.toJSON(e) : undefined);
        }
        else {
            obj.extendedPair = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryExtendedPairDataPsmPairWiseResponse();
        message.extendedPair =
            ((_a = object.extendedPair) === null || _a === void 0 ? void 0 : _a.map((e) => extendedPairVault_1.ExtendedPairVault.fromPartial(e))) || [];
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.QueryAssets = this.QueryAssets.bind(this);
        this.QueryAsset = this.QueryAsset.bind(this);
        this.QueryPairs = this.QueryPairs.bind(this);
        this.QueryPair = this.QueryPair.bind(this);
        this.QueryParams = this.QueryParams.bind(this);
        this.QueryAppsMapings = this.QueryAppsMapings.bind(this);
        this.QueryAppMapings = this.QueryAppMapings.bind(this);
        this.QueryPairVault = this.QueryPairVault.bind(this);
        this.QueryPairVaults = this.QueryPairVaults.bind(this);
        this.QueryProductToExtendedPair =
            this.QueryProductToExtendedPair.bind(this);
        this.QueryExtendedPairPsmPairWise =
            this.QueryExtendedPairPsmPairWise.bind(this);
        this.QueryTokenGov = this.QueryTokenGov.bind(this);
        this.QueryExtendedPairDataPsmPairWise =
            this.QueryExtendedPairDataPsmPairWise.bind(this);
    }
    QueryAssets(request) {
        const data = exports.QueryAssetsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.asset.v1beta1.Query", "QueryAssets", data);
        return promise.then((data) => exports.QueryAssetsResponse.decode(new _m0.Reader(data)));
    }
    QueryAsset(request) {
        const data = exports.QueryAssetRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.asset.v1beta1.Query", "QueryAsset", data);
        return promise.then((data) => exports.QueryAssetResponse.decode(new _m0.Reader(data)));
    }
    QueryPairs(request) {
        const data = exports.QueryPairsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.asset.v1beta1.Query", "QueryPairs", data);
        return promise.then((data) => exports.QueryPairsResponse.decode(new _m0.Reader(data)));
    }
    QueryPair(request) {
        const data = exports.QueryPairRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.asset.v1beta1.Query", "QueryPair", data);
        return promise.then((data) => exports.QueryPairResponse.decode(new _m0.Reader(data)));
    }
    QueryParams(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.asset.v1beta1.Query", "QueryParams", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    QueryAppsMapings(request) {
        const data = exports.QueryAppsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.asset.v1beta1.Query", "QueryAppsMapings", data);
        return promise.then((data) => exports.QueryAppsResponse.decode(new _m0.Reader(data)));
    }
    QueryAppMapings(request) {
        const data = exports.QueryAppRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.asset.v1beta1.Query", "QueryAppMapings", data);
        return promise.then((data) => exports.QueryAppResponse.decode(new _m0.Reader(data)));
    }
    QueryPairVault(request) {
        const data = exports.QueryPairVaultRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.asset.v1beta1.Query", "QueryPairVault", data);
        return promise.then((data) => exports.QueryPairVaultResponse.decode(new _m0.Reader(data)));
    }
    QueryPairVaults(request) {
        const data = exports.QueryPairVaultsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.asset.v1beta1.Query", "QueryPairVaults", data);
        return promise.then((data) => exports.QueryPairVaultsResponse.decode(new _m0.Reader(data)));
    }
    QueryProductToExtendedPair(request) {
        const data = exports.QueryProductToExtendedPairRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.asset.v1beta1.Query", "QueryProductToExtendedPair", data);
        return promise.then((data) => exports.QueryProductToExtendedPairResponse.decode(new _m0.Reader(data)));
    }
    QueryExtendedPairPsmPairWise(request) {
        const data = exports.QueryExtendedPairPsmPairWiseRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.asset.v1beta1.Query", "QueryExtendedPairPsmPairWise", data);
        return promise.then((data) => exports.QueryExtendedPairPsmPairWiseResponse.decode(new _m0.Reader(data)));
    }
    QueryTokenGov(request) {
        const data = exports.QueryTokenGovRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.asset.v1beta1.Query", "QueryTokenGov", data);
        return promise.then((data) => exports.QueryTokenGovResponse.decode(new _m0.Reader(data)));
    }
    QueryExtendedPairDataPsmPairWise(request) {
        const data = exports.QueryExtendedPairDataPsmPairWiseRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.asset.v1beta1.Query", "QueryExtendedPairDataPsmPairWise", data);
        return promise.then((data) => exports.QueryExtendedPairDataPsmPairWiseResponse.decode(new _m0.Reader(data)));
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