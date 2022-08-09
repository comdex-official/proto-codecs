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
exports.QueryClientImpl = exports.QueryTokenMintedByAppAndAssetResponse = exports.QueryTokenMintedByAppAndAssetRequest = exports.QueryTokenMintedByAppResponse = exports.QueryTokenMintedByAppRequest = exports.QueryAllTokenMintedForAllAppsResponse = exports.QueryAllTokenMintedForAllAppsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const mint_1 = require("../../../comdex/tokenmint/v1beta1/mint");
exports.protobufPackage = "comdex.tokenmint.v1beta1";
function createBaseQueryAllTokenMintedForAllAppsRequest() {
    return { pagination: undefined };
}
exports.QueryAllTokenMintedForAllAppsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllTokenMintedForAllAppsRequest();
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
        const message = createBaseQueryAllTokenMintedForAllAppsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllTokenMintedForAllAppsResponse() {
    return { tokenMint: [], pagination: undefined };
}
exports.QueryAllTokenMintedForAllAppsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.tokenMint) {
            mint_1.TokenMint.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllTokenMintedForAllAppsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenMint.push(mint_1.TokenMint.decode(reader, reader.uint32()));
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
            tokenMint: Array.isArray(object === null || object === void 0 ? void 0 : object.tokenMint)
                ? object.tokenMint.map((e) => mint_1.TokenMint.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tokenMint) {
            obj.tokenMint = message.tokenMint.map((e) => e ? mint_1.TokenMint.toJSON(e) : undefined);
        }
        else {
            obj.tokenMint = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllTokenMintedForAllAppsResponse();
        message.tokenMint =
            ((_a = object.tokenMint) === null || _a === void 0 ? void 0 : _a.map((e) => mint_1.TokenMint.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryTokenMintedByAppRequest() {
    return { appId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryTokenMintedByAppRequest = {
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
        const message = createBaseQueryTokenMintedByAppRequest();
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
        const message = createBaseQueryTokenMintedByAppRequest();
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
function createBaseQueryTokenMintedByAppResponse() {
    return { tokenMint: undefined, pagination: undefined };
}
exports.QueryTokenMintedByAppResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tokenMint !== undefined) {
            mint_1.TokenMint.encode(message.tokenMint, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenMintedByAppResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenMint = mint_1.TokenMint.decode(reader, reader.uint32());
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
            tokenMint: isSet(object.tokenMint)
                ? mint_1.TokenMint.fromJSON(object.tokenMint)
                : undefined,
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.tokenMint !== undefined &&
            (obj.tokenMint = message.tokenMint
                ? mint_1.TokenMint.toJSON(message.tokenMint)
                : undefined);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenMintedByAppResponse();
        message.tokenMint =
            object.tokenMint !== undefined && object.tokenMint !== null
                ? mint_1.TokenMint.fromPartial(object.tokenMint)
                : undefined;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryTokenMintedByAppAndAssetRequest() {
    return { appId: long_1.default.UZERO, assetId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryTokenMintedByAppAndAssetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenMintedByAppAndAssetRequest();
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
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenMintedByAppAndAssetRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryTokenMintedByAppAndAssetResponse() {
    return { mintedTokens: undefined, pagination: undefined };
}
exports.QueryTokenMintedByAppAndAssetResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.mintedTokens !== undefined) {
            mint_1.MintedTokens.encode(message.mintedTokens, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenMintedByAppAndAssetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mintedTokens = mint_1.MintedTokens.decode(reader, reader.uint32());
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
            mintedTokens: isSet(object.mintedTokens)
                ? mint_1.MintedTokens.fromJSON(object.mintedTokens)
                : undefined,
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.mintedTokens !== undefined &&
            (obj.mintedTokens = message.mintedTokens
                ? mint_1.MintedTokens.toJSON(message.mintedTokens)
                : undefined);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenMintedByAppAndAssetResponse();
        message.mintedTokens =
            object.mintedTokens !== undefined && object.mintedTokens !== null
                ? mint_1.MintedTokens.fromPartial(object.mintedTokens)
                : undefined;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.QueryAllTokenMintedForAllApps =
            this.QueryAllTokenMintedForAllApps.bind(this);
        this.QueryTokenMintedByApp = this.QueryTokenMintedByApp.bind(this);
        this.QueryTokenMintedByAppAndAsset =
            this.QueryTokenMintedByAppAndAsset.bind(this);
    }
    QueryAllTokenMintedForAllApps(request) {
        const data = exports.QueryAllTokenMintedForAllAppsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.tokenmint.v1beta1.Query", "QueryAllTokenMintedForAllApps", data);
        return promise.then((data) => exports.QueryAllTokenMintedForAllAppsResponse.decode(new _m0.Reader(data)));
    }
    QueryTokenMintedByApp(request) {
        const data = exports.QueryTokenMintedByAppRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.tokenmint.v1beta1.Query", "QueryTokenMintedByApp", data);
        return promise.then((data) => exports.QueryTokenMintedByAppResponse.decode(new _m0.Reader(data)));
    }
    QueryTokenMintedByAppAndAsset(request) {
        const data = exports.QueryTokenMintedByAppAndAssetRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.tokenmint.v1beta1.Query", "QueryTokenMintedByAppAndAsset", data);
        return promise.then((data) => exports.QueryTokenMintedByAppAndAssetResponse.decode(new _m0.Reader(data)));
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