"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.QueryClientImpl = exports.OwnerNFTCollection = exports.QuerySupplyResponse = exports.QuerySupplyRequest = exports.QueryOwnerNFTsResponse = exports.QueryOwnerNFTsRequest = exports.QueryNFTResponse = exports.QueryNFTRequest = exports.QueryDenomsResponse = exports.QueryDenomsRequest = exports.QueryDenomResponse = exports.QueryDenomRequest = exports.QueryCollectionResponse = exports.QueryCollectionRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const pagination_1 = require("./cosmos/base/query/v1beta1/pagination");
const denom_1 = require("./comdex/nft/v1beta1/denom");
exports.protobufPackage = "comdex.nft.v1beta1";
function createBaseQueryCollectionRequest() {
    return { denomId: "", pagination: undefined };
}
exports.QueryCollectionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denomId !== "") {
            writer.uint32(10).string(message.denomId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomId = reader.string();
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
            denomId: isSet(object.denomId) ? String(object.denomId) : "",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.denomId !== undefined && (obj.denomId = message.denomId);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryCollectionRequest();
        message.denomId = (_a = object.denomId) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryCollectionResponse() {
    return { collection: undefined, pagination: undefined };
}
exports.QueryCollectionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collection !== undefined) {
            denom_1.Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collection = denom_1.Collection.decode(reader, reader.uint32());
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
            collection: isSet(object.collection)
                ? denom_1.Collection.fromJSON(object.collection)
                : undefined,
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collection !== undefined &&
            (obj.collection = message.collection
                ? denom_1.Collection.toJSON(message.collection)
                : undefined);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCollectionResponse();
        message.collection =
            object.collection !== undefined && object.collection !== null
                ? denom_1.Collection.fromPartial(object.collection)
                : undefined;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDenomRequest() {
    return { denomId: "" };
}
exports.QueryDenomRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denomId !== "") {
            writer.uint32(10).string(message.denomId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomId = reader.string();
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
            denomId: isSet(object.denomId) ? String(object.denomId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.denomId !== undefined && (obj.denomId = message.denomId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDenomRequest();
        message.denomId = (_a = object.denomId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDenomResponse() {
    return { denom: undefined };
}
exports.QueryDenomResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== undefined) {
            denom_1.Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = denom_1.Denom.decode(reader, reader.uint32());
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
            denom: isSet(object.denom) ? denom_1.Denom.fromJSON(object.denom) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined &&
            (obj.denom = message.denom ? denom_1.Denom.toJSON(message.denom) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomResponse();
        message.denom =
            object.denom !== undefined && object.denom !== null
                ? denom_1.Denom.fromPartial(object.denom)
                : undefined;
        return message;
    },
};
function createBaseQueryDenomsRequest() {
    return { pagination: undefined, owner: "" };
}
exports.QueryDenomsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.owner = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDenomsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDenomsResponse() {
    return { denoms: [], pagination: undefined };
}
exports.QueryDenomsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.denoms) {
            denom_1.Denom.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denoms.push(denom_1.Denom.decode(reader, reader.uint32()));
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
            denoms: Array.isArray(object === null || object === void 0 ? void 0 : object.denoms)
                ? object.denoms.map((e) => denom_1.Denom.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denoms) {
            obj.denoms = message.denoms.map((e) => (e ? denom_1.Denom.toJSON(e) : undefined));
        }
        else {
            obj.denoms = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDenomsResponse();
        message.denoms = ((_a = object.denoms) === null || _a === void 0 ? void 0 : _a.map((e) => denom_1.Denom.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryNFTRequest() {
    return { denomId: "", id: "" };
}
exports.QueryNFTRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denomId !== "") {
            writer.uint32(10).string(message.denomId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
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
            denomId: isSet(object.denomId) ? String(object.denomId) : "",
            id: isSet(object.id) ? String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.denomId !== undefined && (obj.denomId = message.denomId);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryNFTRequest();
        message.denomId = (_a = object.denomId) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryNFTResponse() {
    return { nft: undefined };
}
exports.QueryNFTResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nft !== undefined) {
            denom_1.NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nft = denom_1.NFT.decode(reader, reader.uint32());
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
            nft: isSet(object.nft) ? denom_1.NFT.fromJSON(object.nft) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.nft !== undefined &&
            (obj.nft = message.nft ? denom_1.NFT.toJSON(message.nft) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNFTResponse();
        message.nft =
            object.nft !== undefined && object.nft !== null
                ? denom_1.NFT.fromPartial(object.nft)
                : undefined;
        return message;
    },
};
function createBaseQueryOwnerNFTsRequest() {
    return { denomId: "", owner: "", pagination: undefined };
}
exports.QueryOwnerNFTsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denomId !== "") {
            writer.uint32(10).string(message.denomId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerNFTsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomId = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
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
            denomId: isSet(object.denomId) ? String(object.denomId) : "",
            owner: isSet(object.owner) ? String(object.owner) : "",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.denomId !== undefined && (obj.denomId = message.denomId);
        message.owner !== undefined && (obj.owner = message.owner);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryOwnerNFTsRequest();
        message.denomId = (_a = object.denomId) !== null && _a !== void 0 ? _a : "";
        message.owner = (_b = object.owner) !== null && _b !== void 0 ? _b : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryOwnerNFTsResponse() {
    return { owner: "", collections: [], pagination: undefined };
}
exports.QueryOwnerNFTsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        for (const v of message.collections) {
            exports.OwnerNFTCollection.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerNFTsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.collections.push(exports.OwnerNFTCollection.decode(reader, reader.uint32()));
                    break;
                case 3:
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            collections: Array.isArray(object === null || object === void 0 ? void 0 : object.collections)
                ? object.collections.map((e) => exports.OwnerNFTCollection.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        if (message.collections) {
            obj.collections = message.collections.map((e) => e ? exports.OwnerNFTCollection.toJSON(e) : undefined);
        }
        else {
            obj.collections = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryOwnerNFTsResponse();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.collections =
            ((_b = object.collections) === null || _b === void 0 ? void 0 : _b.map((e) => exports.OwnerNFTCollection.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQuerySupplyRequest() {
    return { denomId: "", owner: "" };
}
exports.QuerySupplyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denomId !== "") {
            writer.uint32(10).string(message.denomId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomId = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
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
            denomId: isSet(object.denomId) ? String(object.denomId) : "",
            owner: isSet(object.owner) ? String(object.owner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.denomId !== undefined && (obj.denomId = message.denomId);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQuerySupplyRequest();
        message.denomId = (_a = object.denomId) !== null && _a !== void 0 ? _a : "";
        message.owner = (_b = object.owner) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQuerySupplyResponse() {
    return { amount: long_1.default.UZERO };
}
exports.QuerySupplyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.amount.isZero()) {
            writer.uint32(8).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.uint64();
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
            amount: isSet(object.amount) ? long_1.default.fromValue(object.amount) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined &&
            (obj.amount = (message.amount || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySupplyResponse();
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? long_1.default.fromValue(object.amount)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseOwnerNFTCollection() {
    return { denom: undefined, nfts: [] };
}
exports.OwnerNFTCollection = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== undefined) {
            denom_1.Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.nfts) {
            denom_1.NFT.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOwnerNFTCollection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = denom_1.Denom.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nfts.push(denom_1.NFT.decode(reader, reader.uint32()));
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
            denom: isSet(object.denom) ? denom_1.Denom.fromJSON(object.denom) : undefined,
            nfts: Array.isArray(object === null || object === void 0 ? void 0 : object.nfts)
                ? object.nfts.map((e) => denom_1.NFT.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined &&
            (obj.denom = message.denom ? denom_1.Denom.toJSON(message.denom) : undefined);
        if (message.nfts) {
            obj.nfts = message.nfts.map((e) => (e ? denom_1.NFT.toJSON(e) : undefined));
        }
        else {
            obj.nfts = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOwnerNFTCollection();
        message.denom =
            object.denom !== undefined && object.denom !== null
                ? denom_1.Denom.fromPartial(object.denom)
                : undefined;
        message.nfts = ((_a = object.nfts) === null || _a === void 0 ? void 0 : _a.map((e) => denom_1.NFT.fromPartial(e))) || [];
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Collection = this.Collection.bind(this);
        this.Denom = this.Denom.bind(this);
        this.Denoms = this.Denoms.bind(this);
        this.NFT = this.NFT.bind(this);
        this.OwnerNFTs = this.OwnerNFTs.bind(this);
        this.Supply = this.Supply.bind(this);
    }
    Collection(request) {
        const data = exports.QueryCollectionRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.nft.v1beta1.Query", "Collection", data);
        return promise.then((data) => exports.QueryCollectionResponse.decode(new _m0.Reader(data)));
    }
    Denom(request) {
        const data = exports.QueryDenomRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.nft.v1beta1.Query", "Denom", data);
        return promise.then((data) => exports.QueryDenomResponse.decode(new _m0.Reader(data)));
    }
    Denoms(request) {
        const data = exports.QueryDenomsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.nft.v1beta1.Query", "Denoms", data);
        return promise.then((data) => exports.QueryDenomsResponse.decode(new _m0.Reader(data)));
    }
    NFT(request) {
        const data = exports.QueryNFTRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.nft.v1beta1.Query", "NFT", data);
        return promise.then((data) => exports.QueryNFTResponse.decode(new _m0.Reader(data)));
    }
    OwnerNFTs(request) {
        const data = exports.QueryOwnerNFTsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.nft.v1beta1.Query", "OwnerNFTs", data);
        return promise.then((data) => exports.QueryOwnerNFTsResponse.decode(new _m0.Reader(data)));
    }
    Supply(request) {
        const data = exports.QuerySupplyRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.nft.v1beta1.Query", "Supply", data);
        return promise.then((data) => exports.QuerySupplyResponse.decode(new _m0.Reader(data)));
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