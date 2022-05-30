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
exports.AddAssetMappingProposal = exports.AddAppMappingProposal = exports.UpdateExtendedPairVaultProposal = exports.AddExtendedPairsVaultProposal = exports.UpdateWhitelistedPairProposal = exports.AddWhitelistedPairsProposal = exports.UpdateWhitelistedAssetProposal = exports.AddWhitelistedAssetsProposal = exports.AddPairsProposal = exports.UpdateAssetProposal = exports.AddAssetsProposal = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const asset_1 = require("../../../comdex/asset/v1beta1/asset");
const extendedAsset_1 = require("../../../comdex/asset/v1beta1/extendedAsset");
const extendedLend_1 = require("../../../comdex/asset/v1beta1/extendedLend");
const extendedPairVault_1 = require("../../../comdex/asset/v1beta1/extendedPairVault");
const pair_1 = require("../../../comdex/asset/v1beta1/pair");
const appMapping_1 = require("../../../comdex/asset/v1beta1/appMapping");
exports.protobufPackage = "comdex.asset.v1beta1";
function createBaseAddAssetsProposal() {
    return { title: "", description: "", assets: [] };
}
exports.AddAssetsProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.assets) {
            asset_1.Asset.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddAssetsProposal();
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
                    message.assets.push(asset_1.Asset.decode(reader, reader.uint32()));
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
            assets: Array.isArray(object === null || object === void 0 ? void 0 : object.assets)
                ? object.assets.map((e) => asset_1.Asset.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.assets) {
            obj.assets = message.assets.map((e) => (e ? asset_1.Asset.toJSON(e) : undefined));
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAddAssetsProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.assets = ((_c = object.assets) === null || _c === void 0 ? void 0 : _c.map((e) => asset_1.Asset.fromPartial(e))) || [];
        return message;
    },
};
function createBaseUpdateAssetProposal() {
    return { title: "", description: "", asset: undefined };
}
exports.UpdateAssetProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.asset !== undefined) {
            asset_1.Asset.encode(message.asset, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateAssetProposal();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            asset: isSet(object.asset) ? asset_1.Asset.fromJSON(object.asset) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.asset !== undefined &&
            (obj.asset = message.asset ? asset_1.Asset.toJSON(message.asset) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateAssetProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.asset =
            object.asset !== undefined && object.asset !== null
                ? asset_1.Asset.fromPartial(object.asset)
                : undefined;
        return message;
    },
};
function createBaseAddPairsProposal() {
    return { title: "", description: "", pairs: [] };
}
exports.AddPairsProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.pairs) {
            pair_1.Pair.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddPairsProposal();
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
                    message.pairs.push(pair_1.Pair.decode(reader, reader.uint32()));
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
                ? object.pairs.map((e) => pair_1.Pair.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.pairs) {
            obj.pairs = message.pairs.map((e) => (e ? pair_1.Pair.toJSON(e) : undefined));
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAddPairsProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.pairs = ((_c = object.pairs) === null || _c === void 0 ? void 0 : _c.map((e) => pair_1.Pair.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAddWhitelistedAssetsProposal() {
    return { title: "", description: "", assets: [] };
}
exports.AddWhitelistedAssetsProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.assets) {
            extendedAsset_1.ExtendedAsset.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddWhitelistedAssetsProposal();
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
                    message.assets.push(extendedAsset_1.ExtendedAsset.decode(reader, reader.uint32()));
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
            assets: Array.isArray(object === null || object === void 0 ? void 0 : object.assets)
                ? object.assets.map((e) => extendedAsset_1.ExtendedAsset.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.assets) {
            obj.assets = message.assets.map((e) => e ? extendedAsset_1.ExtendedAsset.toJSON(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAddWhitelistedAssetsProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.assets =
            ((_c = object.assets) === null || _c === void 0 ? void 0 : _c.map((e) => extendedAsset_1.ExtendedAsset.fromPartial(e))) || [];
        return message;
    },
};
function createBaseUpdateWhitelistedAssetProposal() {
    return { title: "", description: "", asset: undefined };
}
exports.UpdateWhitelistedAssetProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.asset !== undefined) {
            extendedAsset_1.ExtendedAsset.encode(message.asset, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateWhitelistedAssetProposal();
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
                    message.asset = extendedAsset_1.ExtendedAsset.decode(reader, reader.uint32());
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
            asset: isSet(object.asset)
                ? extendedAsset_1.ExtendedAsset.fromJSON(object.asset)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.asset !== undefined &&
            (obj.asset = message.asset
                ? extendedAsset_1.ExtendedAsset.toJSON(message.asset)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateWhitelistedAssetProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.asset =
            object.asset !== undefined && object.asset !== null
                ? extendedAsset_1.ExtendedAsset.fromPartial(object.asset)
                : undefined;
        return message;
    },
};
function createBaseAddWhitelistedPairsProposal() {
    return { title: "", description: "", pairs: [] };
}
exports.AddWhitelistedPairsProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.pairs) {
            extendedLend_1.ExtendedPairLend.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddWhitelistedPairsProposal();
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
                    message.pairs.push(extendedLend_1.ExtendedPairLend.decode(reader, reader.uint32()));
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
                ? object.pairs.map((e) => extendedLend_1.ExtendedPairLend.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.pairs) {
            obj.pairs = message.pairs.map((e) => e ? extendedLend_1.ExtendedPairLend.toJSON(e) : undefined);
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAddWhitelistedPairsProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.pairs =
            ((_c = object.pairs) === null || _c === void 0 ? void 0 : _c.map((e) => extendedLend_1.ExtendedPairLend.fromPartial(e))) || [];
        return message;
    },
};
function createBaseUpdateWhitelistedPairProposal() {
    return { title: "", description: "", pair: undefined };
}
exports.UpdateWhitelistedPairProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.pair !== undefined) {
            extendedLend_1.ExtendedPairLend.encode(message.pair, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateWhitelistedPairProposal();
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
                    message.pair = extendedLend_1.ExtendedPairLend.decode(reader, reader.uint32());
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
            pair: isSet(object.pair)
                ? extendedLend_1.ExtendedPairLend.fromJSON(object.pair)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.pair !== undefined &&
            (obj.pair = message.pair
                ? extendedLend_1.ExtendedPairLend.toJSON(message.pair)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateWhitelistedPairProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.pair =
            object.pair !== undefined && object.pair !== null
                ? extendedLend_1.ExtendedPairLend.fromPartial(object.pair)
                : undefined;
        return message;
    },
};
function createBaseAddExtendedPairsVaultProposal() {
    return { title: "", description: "", pairs: [] };
}
exports.AddExtendedPairsVaultProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.pairs) {
            extendedPairVault_1.ExtendedPairVault.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddExtendedPairsVaultProposal();
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
                    message.pairs.push(extendedPairVault_1.ExtendedPairVault.decode(reader, reader.uint32()));
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
                ? object.pairs.map((e) => extendedPairVault_1.ExtendedPairVault.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.pairs) {
            obj.pairs = message.pairs.map((e) => e ? extendedPairVault_1.ExtendedPairVault.toJSON(e) : undefined);
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAddExtendedPairsVaultProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.pairs =
            ((_c = object.pairs) === null || _c === void 0 ? void 0 : _c.map((e) => extendedPairVault_1.ExtendedPairVault.fromPartial(e))) || [];
        return message;
    },
};
function createBaseUpdateExtendedPairVaultProposal() {
    return { title: "", description: "", pair: undefined };
}
exports.UpdateExtendedPairVaultProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.pair !== undefined) {
            extendedPairVault_1.ExtendedPairVault.encode(message.pair, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateExtendedPairVaultProposal();
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
                    message.pair = extendedPairVault_1.ExtendedPairVault.decode(reader, reader.uint32());
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
            pair: isSet(object.pair)
                ? extendedPairVault_1.ExtendedPairVault.fromJSON(object.pair)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.pair !== undefined &&
            (obj.pair = message.pair
                ? extendedPairVault_1.ExtendedPairVault.toJSON(message.pair)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateExtendedPairVaultProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.pair =
            object.pair !== undefined && object.pair !== null
                ? extendedPairVault_1.ExtendedPairVault.fromPartial(object.pair)
                : undefined;
        return message;
    },
};
function createBaseAddAppMappingProposal() {
    return { title: "", description: "", app: [] };
}
exports.AddAppMappingProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.app) {
            appMapping_1.AppMapping.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddAppMappingProposal();
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
                    message.app.push(appMapping_1.AppMapping.decode(reader, reader.uint32()));
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
            app: Array.isArray(object === null || object === void 0 ? void 0 : object.app)
                ? object.app.map((e) => appMapping_1.AppMapping.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.app) {
            obj.app = message.app.map((e) => (e ? appMapping_1.AppMapping.toJSON(e) : undefined));
        }
        else {
            obj.app = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAddAppMappingProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.app = ((_c = object.app) === null || _c === void 0 ? void 0 : _c.map((e) => appMapping_1.AppMapping.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAddAssetMappingProposal() {
    return { title: "", description: "", app: [] };
}
exports.AddAssetMappingProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.app) {
            appMapping_1.AppMapping.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddAssetMappingProposal();
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
                    message.app.push(appMapping_1.AppMapping.decode(reader, reader.uint32()));
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
            app: Array.isArray(object === null || object === void 0 ? void 0 : object.app)
                ? object.app.map((e) => appMapping_1.AppMapping.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.app) {
            obj.app = message.app.map((e) => (e ? appMapping_1.AppMapping.toJSON(e) : undefined));
        }
        else {
            obj.app = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAddAssetMappingProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.app = ((_c = object.app) === null || _c === void 0 ? void 0 : _c.map((e) => appMapping_1.AppMapping.fromPartial(e))) || [];
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