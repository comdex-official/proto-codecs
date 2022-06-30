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
exports.AddAssetRatesStats = exports.AddAssetToPairProposal = exports.AddPoolsProposal = exports.UpdatePairProposal = exports.LendPairsProposal = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const lend_1 = require("../../../comdex/lend/v1beta1/lend");
exports.protobufPackage = "comdex.lend.v1beta1";
function createBaseLendPairsProposal() {
    return { title: "", description: "", pairs: [] };
}
exports.LendPairsProposal = {
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
        const message = createBaseLendPairsProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.pairs = ((_c = object.pairs) === null || _c === void 0 ? void 0 : _c.map((e) => lend_1.ExtendedPair.fromPartial(e))) || [];
        return message;
    },
};
function createBaseUpdatePairProposal() {
    return { title: "", description: "", pair: undefined };
}
exports.UpdatePairProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.pair !== undefined) {
            lend_1.ExtendedPair.encode(message.pair, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdatePairProposal();
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
                    message.pair = lend_1.ExtendedPair.decode(reader, reader.uint32());
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
            pair: isSet(object.pair) ? lend_1.ExtendedPair.fromJSON(object.pair) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.pair !== undefined &&
            (obj.pair = message.pair ? lend_1.ExtendedPair.toJSON(message.pair) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdatePairProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.pair =
            object.pair !== undefined && object.pair !== null
                ? lend_1.ExtendedPair.fromPartial(object.pair)
                : undefined;
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
function createBaseAddAssetRatesStats() {
    return { title: "", description: "", AssetRatesStats: [] };
}
exports.AddAssetRatesStats = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.AssetRatesStats) {
            lend_1.AssetRatesStats.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddAssetRatesStats();
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
                    message.AssetRatesStats.push(lend_1.AssetRatesStats.decode(reader, reader.uint32()));
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
            AssetRatesStats: Array.isArray(object === null || object === void 0 ? void 0 : object.AssetRatesStats)
                ? object.AssetRatesStats.map((e) => lend_1.AssetRatesStats.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.AssetRatesStats) {
            obj.AssetRatesStats = message.AssetRatesStats.map((e) => e ? lend_1.AssetRatesStats.toJSON(e) : undefined);
        }
        else {
            obj.AssetRatesStats = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAddAssetRatesStats();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.AssetRatesStats =
            ((_c = object.AssetRatesStats) === null || _c === void 0 ? void 0 : _c.map((e) => lend_1.AssetRatesStats.fromPartial(e))) || [];
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