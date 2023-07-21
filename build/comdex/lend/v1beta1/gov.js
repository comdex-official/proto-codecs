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
exports.AddEModePairsProposal = exports.AddPoolDepreciateProposal = exports.AddAssetRatesPoolPairsProposal = exports.AddPoolPairsProposal = exports.AddAuctionParamsProposal = exports.AddAssetRatesParams = exports.AddMultipleAssetToPairProposal = exports.AddAssetToPairProposal = exports.AddPoolsProposal = exports.MultipleLendPairsProposal = exports.LendPairsProposal = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const lend_1 = require("../../../comdex/lend/v1beta1/lend");
exports.protobufPackage = "comdex.lend.v1beta1";
function createBaseLendPairsProposal() {
    return { title: "", description: "", pairs: undefined };
}
exports.LendPairsProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.pairs !== undefined) {
            lend_1.ExtendedPair.encode(message.pairs, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLendPairsProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.pairs = lend_1.ExtendedPair.decode(reader, reader.uint32());
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            pairs: isSet(object.pairs)
                ? lend_1.ExtendedPair.fromJSON(object.pairs)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.pairs !== undefined &&
            (obj.pairs = message.pairs
                ? lend_1.ExtendedPair.toJSON(message.pairs)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLendPairsProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.pairs =
            object.pairs !== undefined && object.pairs !== null
                ? lend_1.ExtendedPair.fromPartial(object.pairs)
                : undefined;
        return message;
    },
};
function createBaseMultipleLendPairsProposal() {
    return { title: "", description: "", pairs: [] };
}
exports.MultipleLendPairsProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.pairs) {
            lend_1.ExtendedPair.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMultipleLendPairsProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.pairs.push(lend_1.ExtendedPair.decode(reader, reader.uint32()));
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            pairs: Array.isArray(object === null || object === void 0 ? void 0 : object.pairs)
                ? object.pairs.map((e) => lend_1.ExtendedPair.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.pairs) {
            obj.pairs = message.pairs.map((e) => e ? lend_1.ExtendedPair.toJSON(e) : undefined);
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMultipleLendPairsProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.pairs = ((_c = object.pairs) === null || _c === void 0 ? void 0 : _c.map((e) => lend_1.ExtendedPair.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAddPoolsProposal() {
    return { title: "", description: "", Pool: undefined };
}
exports.AddPoolsProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.Pool !== undefined) {
            lend_1.Pool.encode(message.Pool, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddPoolsProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            Pool: isSet(object.Pool) ? lend_1.Pool.fromJSON(object.Pool) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.Pool !== undefined &&
            (obj.Pool = message.Pool ? lend_1.Pool.toJSON(message.Pool) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAddPoolsProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.Pool =
            object.Pool !== undefined && object.Pool !== null
                ? lend_1.Pool.fromPartial(object.Pool)
                : undefined;
        return message;
    },
};
function createBaseAddAssetToPairProposal() {
    return { title: "", description: "", AssetToPairMapping: undefined };
}
exports.AddAssetToPairProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.AssetToPairMapping !== undefined) {
            lend_1.AssetToPairMapping.encode(message.AssetToPairMapping, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddAssetToPairProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            AssetToPairMapping: isSet(object.AssetToPairMapping)
                ? lend_1.AssetToPairMapping.fromJSON(object.AssetToPairMapping)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.AssetToPairMapping !== undefined &&
            (obj.AssetToPairMapping = message.AssetToPairMapping
                ? lend_1.AssetToPairMapping.toJSON(message.AssetToPairMapping)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAddAssetToPairProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.AssetToPairMapping =
            object.AssetToPairMapping !== undefined &&
                object.AssetToPairMapping !== null
                ? lend_1.AssetToPairMapping.fromPartial(object.AssetToPairMapping)
                : undefined;
        return message;
    },
};
function createBaseAddMultipleAssetToPairProposal() {
    return { title: "", description: "", AssetToPairSingleMapping: [] };
}
exports.AddMultipleAssetToPairProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.AssetToPairSingleMapping) {
            lend_1.AssetToPairSingleMapping.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddMultipleAssetToPairProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.AssetToPairSingleMapping.push(lend_1.AssetToPairSingleMapping.decode(reader, reader.uint32()));
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            AssetToPairSingleMapping: Array.isArray(object === null || object === void 0 ? void 0 : object.AssetToPairSingleMapping)
                ? object.AssetToPairSingleMapping.map((e) => lend_1.AssetToPairSingleMapping.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.AssetToPairSingleMapping) {
            obj.AssetToPairSingleMapping = message.AssetToPairSingleMapping.map((e) => e ? lend_1.AssetToPairSingleMapping.toJSON(e) : undefined);
        }
        else {
            obj.AssetToPairSingleMapping = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAddMultipleAssetToPairProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.AssetToPairSingleMapping =
            ((_c = object.AssetToPairSingleMapping) === null || _c === void 0 ? void 0 : _c.map((e) => lend_1.AssetToPairSingleMapping.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAddAssetRatesParams() {
    return { title: "", description: "", AssetRatesParams: undefined };
}
exports.AddAssetRatesParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.AssetRatesParams !== undefined) {
            lend_1.AssetRatesParams.encode(message.AssetRatesParams, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddAssetRatesParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.AssetRatesParams = lend_1.AssetRatesParams.decode(reader, reader.uint32());
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            AssetRatesParams: isSet(object.AssetRatesParams)
                ? lend_1.AssetRatesParams.fromJSON(object.AssetRatesParams)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.AssetRatesParams !== undefined &&
            (obj.AssetRatesParams = message.AssetRatesParams
                ? lend_1.AssetRatesParams.toJSON(message.AssetRatesParams)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAddAssetRatesParams();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.AssetRatesParams =
            object.AssetRatesParams !== undefined && object.AssetRatesParams !== null
                ? lend_1.AssetRatesParams.fromPartial(object.AssetRatesParams)
                : undefined;
        return message;
    },
};
function createBaseAddAuctionParamsProposal() {
    return { title: "", description: "", AuctionParams: undefined };
}
exports.AddAuctionParamsProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.AuctionParams !== undefined) {
            lend_1.AuctionParams.encode(message.AuctionParams, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddAuctionParamsProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.AuctionParams = lend_1.AuctionParams.decode(reader, reader.uint32());
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            AuctionParams: isSet(object.AuctionParams)
                ? lend_1.AuctionParams.fromJSON(object.AuctionParams)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.AuctionParams !== undefined &&
            (obj.AuctionParams = message.AuctionParams
                ? lend_1.AuctionParams.toJSON(message.AuctionParams)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAddAuctionParamsProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.AuctionParams =
            object.AuctionParams !== undefined && object.AuctionParams !== null
                ? lend_1.AuctionParams.fromPartial(object.AuctionParams)
                : undefined;
        return message;
    },
};
function createBaseAddPoolPairsProposal() {
    return { title: "", description: "", PoolPairs: undefined };
}
exports.AddPoolPairsProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.PoolPairs !== undefined) {
            lend_1.PoolPairs.encode(message.PoolPairs, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddPoolPairsProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.PoolPairs = lend_1.PoolPairs.decode(reader, reader.uint32());
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            PoolPairs: isSet(object.PoolPairs)
                ? lend_1.PoolPairs.fromJSON(object.PoolPairs)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.PoolPairs !== undefined &&
            (obj.PoolPairs = message.PoolPairs
                ? lend_1.PoolPairs.toJSON(message.PoolPairs)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAddPoolPairsProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.PoolPairs =
            object.PoolPairs !== undefined && object.PoolPairs !== null
                ? lend_1.PoolPairs.fromPartial(object.PoolPairs)
                : undefined;
        return message;
    },
};
function createBaseAddAssetRatesPoolPairsProposal() {
    return { title: "", description: "", AssetRatesPoolPairs: undefined };
}
exports.AddAssetRatesPoolPairsProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.AssetRatesPoolPairs !== undefined) {
            lend_1.AssetRatesPoolPairs.encode(message.AssetRatesPoolPairs, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddAssetRatesPoolPairsProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.AssetRatesPoolPairs = lend_1.AssetRatesPoolPairs.decode(reader, reader.uint32());
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            AssetRatesPoolPairs: isSet(object.AssetRatesPoolPairs)
                ? lend_1.AssetRatesPoolPairs.fromJSON(object.AssetRatesPoolPairs)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.AssetRatesPoolPairs !== undefined &&
            (obj.AssetRatesPoolPairs = message.AssetRatesPoolPairs
                ? lend_1.AssetRatesPoolPairs.toJSON(message.AssetRatesPoolPairs)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAddAssetRatesPoolPairsProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.AssetRatesPoolPairs =
            object.AssetRatesPoolPairs !== undefined &&
                object.AssetRatesPoolPairs !== null
                ? lend_1.AssetRatesPoolPairs.fromPartial(object.AssetRatesPoolPairs)
                : undefined;
        return message;
    },
};
function createBaseAddPoolDepreciateProposal() {
    return { title: "", description: "", PoolDepreciate: undefined };
}
exports.AddPoolDepreciateProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.PoolDepreciate !== undefined) {
            lend_1.PoolDepreciate.encode(message.PoolDepreciate, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddPoolDepreciateProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.PoolDepreciate = lend_1.PoolDepreciate.decode(reader, reader.uint32());
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            PoolDepreciate: isSet(object.PoolDepreciate)
                ? lend_1.PoolDepreciate.fromJSON(object.PoolDepreciate)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.PoolDepreciate !== undefined &&
            (obj.PoolDepreciate = message.PoolDepreciate
                ? lend_1.PoolDepreciate.toJSON(message.PoolDepreciate)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAddPoolDepreciateProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.PoolDepreciate =
            object.PoolDepreciate !== undefined && object.PoolDepreciate !== null
                ? lend_1.PoolDepreciate.fromPartial(object.PoolDepreciate)
                : undefined;
        return message;
    },
};
function createBaseAddEModePairsProposal() {
    return { title: "", description: "", EModePairsForProposal: undefined };
}
exports.AddEModePairsProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.EModePairsForProposal !== undefined) {
            lend_1.EModePairsForProposal.encode(message.EModePairsForProposal, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddEModePairsProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.EModePairsForProposal = lend_1.EModePairsForProposal.decode(reader, reader.uint32());
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            EModePairsForProposal: isSet(object.EModePairsForProposal)
                ? lend_1.EModePairsForProposal.fromJSON(object.EModePairsForProposal)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.EModePairsForProposal !== undefined &&
            (obj.EModePairsForProposal = message.EModePairsForProposal
                ? lend_1.EModePairsForProposal.toJSON(message.EModePairsForProposal)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAddEModePairsProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.EModePairsForProposal =
            object.EModePairsForProposal !== undefined &&
                object.EModePairsForProposal !== null
                ? lend_1.EModePairsForProposal.fromPartial(object.EModePairsForProposal)
                : undefined;
        return message;
    },
};
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=gov.js.map