"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryTokenMintedByProductAndAssetResponse = exports.QueryTokenMintedByProductAndAssetRequest = exports.QueryTokenMintedByProductResponse = exports.QueryTokenMintedByProductRequest = exports.QueryAllTokenMintedForAllProductsResponse = exports.QueryAllTokenMintedForAllProductsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const mint_1 = require("./mint");
exports.protobufPackage = "comdex.tokenmint.v1beta1";
function createBaseQueryAllTokenMintedForAllProductsRequest() {
    return { pagination: undefined };
}
exports.QueryAllTokenMintedForAllProductsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllTokenMintedForAllProductsRequest();
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
        const message = createBaseQueryAllTokenMintedForAllProductsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllTokenMintedForAllProductsResponse() {
    return { tokenMint: [], pagination: undefined };
}
exports.QueryAllTokenMintedForAllProductsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.tokenMint) {
            mint_1.TokenMint.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllTokenMintedForAllProductsResponse();
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
        const message = createBaseQueryAllTokenMintedForAllProductsResponse();
        message.tokenMint =
            ((_a = object.tokenMint) === null || _a === void 0 ? void 0 : _a.map((e) => mint_1.TokenMint.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryTokenMintedByProductRequest() {
    return { appId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryTokenMintedByProductRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenMintedByProductRequest();
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
            appId: isSet(object.appId) ? long_1.default.fromString(object.appId) : long_1.default.UZERO,
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
        const message = createBaseQueryTokenMintedByProductRequest();
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
function createBaseQueryTokenMintedByProductResponse() {
    return { tokenMint: undefined, pagination: undefined };
}
exports.QueryTokenMintedByProductResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tokenMint !== undefined) {
            mint_1.TokenMint.encode(message.tokenMint, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenMintedByProductResponse();
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
        const message = createBaseQueryTokenMintedByProductResponse();
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
function createBaseQueryTokenMintedByProductAndAssetRequest() {
    return { appId: long_1.default.UZERO, assetId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryTokenMintedByProductAndAssetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenMintedByProductAndAssetRequest();
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
            appId: isSet(object.appId) ? long_1.default.fromString(object.appId) : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromString(object.assetId)
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
        const message = createBaseQueryTokenMintedByProductAndAssetRequest();
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
function createBaseQueryTokenMintedByProductAndAssetResponse() {
    return { mintedTokens: undefined, pagination: undefined };
}
exports.QueryTokenMintedByProductAndAssetResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mintedTokens !== undefined) {
            mint_1.MintedTokens.encode(message.mintedTokens, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenMintedByProductAndAssetResponse();
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
        const message = createBaseQueryTokenMintedByProductAndAssetResponse();
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
        this.QueryAllTokenMintedForAllProducts =
            this.QueryAllTokenMintedForAllProducts.bind(this);
        this.QueryTokenMintedByProduct = this.QueryTokenMintedByProduct.bind(this);
        this.QueryTokenMintedByProductAndAsset =
            this.QueryTokenMintedByProductAndAsset.bind(this);
    }
    QueryAllTokenMintedForAllProducts(request) {
        const data = exports.QueryAllTokenMintedForAllProductsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.tokenmint.v1beta1.Query", "QueryAllTokenMintedForAllProducts", data);
        return promise.then((data) => exports.QueryAllTokenMintedForAllProductsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryTokenMintedByProduct(request) {
        const data = exports.QueryTokenMintedByProductRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.tokenmint.v1beta1.Query", "QueryTokenMintedByProduct", data);
        return promise.then((data) => exports.QueryTokenMintedByProductResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryTokenMintedByProductAndAsset(request) {
        const data = exports.QueryTokenMintedByProductAndAssetRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.tokenmint.v1beta1.Query", "QueryTokenMintedByProductAndAsset", data);
        return promise.then((data) => exports.QueryTokenMintedByProductAndAssetResponse.decode(new minimal_1.default.Reader(data)));
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