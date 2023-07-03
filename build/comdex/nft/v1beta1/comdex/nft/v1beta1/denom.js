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
exports.Owner = exports.Metadata = exports.NFT = exports.Denom = exports.IDCollection = exports.Collection = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.nft.v1beta1";
function createBaseCollection() {
    return { denom: undefined, nfts: [] };
}
exports.Collection = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== undefined) {
            exports.Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.nfts) {
            exports.NFT.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCollection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = exports.Denom.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nfts.push(exports.NFT.decode(reader, reader.uint32()));
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
            denom: isSet(object.denom) ? exports.Denom.fromJSON(object.denom) : undefined,
            nfts: Array.isArray(object === null || object === void 0 ? void 0 : object.nfts)
                ? object.nfts.map((e) => exports.NFT.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined &&
            (obj.denom = message.denom ? exports.Denom.toJSON(message.denom) : undefined);
        if (message.nfts) {
            obj.nfts = message.nfts.map((e) => (e ? exports.NFT.toJSON(e) : undefined));
        }
        else {
            obj.nfts = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCollection();
        message.denom =
            object.denom !== undefined && object.denom !== null
                ? exports.Denom.fromPartial(object.denom)
                : undefined;
        message.nfts = ((_a = object.nfts) === null || _a === void 0 ? void 0 : _a.map((e) => exports.NFT.fromPartial(e))) || [];
        return message;
    },
};
function createBaseIDCollection() {
    return { denomId: "", nftIds: [] };
}
exports.IDCollection = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denomId !== "") {
            writer.uint32(10).string(message.denomId);
        }
        for (const v of message.nftIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDCollection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomId = reader.string();
                    break;
                case 2:
                    message.nftIds.push(reader.string());
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
            nftIds: Array.isArray(object === null || object === void 0 ? void 0 : object.nftIds)
                ? object.nftIds.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.denomId !== undefined && (obj.denomId = message.denomId);
        if (message.nftIds) {
            obj.nftIds = message.nftIds.map((e) => e);
        }
        else {
            obj.nftIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseIDCollection();
        message.denomId = (_a = object.denomId) !== null && _a !== void 0 ? _a : "";
        message.nftIds = ((_b = object.nftIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseDenom() {
    return {
        id: "",
        symbol: "",
        name: "",
        description: "",
        previewUri: "",
        schema: "",
        sender: "",
        creator: "",
    };
}
exports.Denom = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.previewUri !== "") {
            writer.uint32(42).string(message.previewUri);
        }
        if (message.schema !== "") {
            writer.uint32(50).string(message.schema);
        }
        if (message.sender !== "") {
            writer.uint32(58).string(message.sender);
        }
        if (message.creator !== "") {
            writer.uint32(66).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.symbol = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.previewUri = reader.string();
                    break;
                case 6:
                    message.schema = reader.string();
                    break;
                case 7:
                    message.sender = reader.string();
                    break;
                case 8:
                    message.creator = reader.string();
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
            id: isSet(object.id) ? String(object.id) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            name: isSet(object.name) ? String(object.name) : "",
            description: isSet(object.description) ? String(object.description) : "",
            previewUri: isSet(object.previewUri) ? String(object.previewUri) : "",
            schema: isSet(object.schema) ? String(object.schema) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
            creator: isSet(object.creator) ? String(object.creator) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.previewUri !== undefined && (obj.previewUri = message.previewUri);
        message.schema !== undefined && (obj.schema = message.schema);
        message.sender !== undefined && (obj.sender = message.sender);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseDenom();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.symbol = (_b = object.symbol) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.previewUri = (_e = object.previewUri) !== null && _e !== void 0 ? _e : "";
        message.schema = (_f = object.schema) !== null && _f !== void 0 ? _f : "";
        message.sender = (_g = object.sender) !== null && _g !== void 0 ? _g : "";
        message.creator = (_h = object.creator) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function createBaseNFT() {
    return {
        id: "",
        metadata: undefined,
        data: "",
        owner: "",
        transferable: false,
        extensible: false,
        createdAt: undefined,
        nsfw: false,
        royaltyShare: "",
    };
}
exports.NFT = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.metadata !== undefined) {
            exports.Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        if (message.data !== "") {
            writer.uint32(26).string(message.data);
        }
        if (message.owner !== "") {
            writer.uint32(34).string(message.owner);
        }
        if (message.transferable === true) {
            writer.uint32(40).bool(message.transferable);
        }
        if (message.extensible === true) {
            writer.uint32(48).bool(message.extensible);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.nsfw === true) {
            writer.uint32(64).bool(message.nsfw);
        }
        if (message.royaltyShare !== "") {
            writer.uint32(74).string(message.royaltyShare);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNFT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.metadata = exports.Metadata.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.data = reader.string();
                    break;
                case 4:
                    message.owner = reader.string();
                    break;
                case 5:
                    message.transferable = reader.bool();
                    break;
                case 6:
                    message.extensible = reader.bool();
                    break;
                case 7:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.nsfw = reader.bool();
                    break;
                case 9:
                    message.royaltyShare = reader.string();
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
            id: isSet(object.id) ? String(object.id) : "",
            metadata: isSet(object.metadata)
                ? exports.Metadata.fromJSON(object.metadata)
                : undefined,
            data: isSet(object.data) ? String(object.data) : "",
            owner: isSet(object.owner) ? String(object.owner) : "",
            transferable: isSet(object.transferable)
                ? Boolean(object.transferable)
                : false,
            extensible: isSet(object.extensible) ? Boolean(object.extensible) : false,
            createdAt: isSet(object.createdAt)
                ? fromJsonTimestamp(object.createdAt)
                : undefined,
            nsfw: isSet(object.nsfw) ? Boolean(object.nsfw) : false,
            royaltyShare: isSet(object.royaltyShare)
                ? String(object.royaltyShare)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.metadata !== undefined &&
            (obj.metadata = message.metadata
                ? exports.Metadata.toJSON(message.metadata)
                : undefined);
        message.data !== undefined && (obj.data = message.data);
        message.owner !== undefined && (obj.owner = message.owner);
        message.transferable !== undefined &&
            (obj.transferable = message.transferable);
        message.extensible !== undefined && (obj.extensible = message.extensible);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.nsfw !== undefined && (obj.nsfw = message.nsfw);
        message.royaltyShare !== undefined &&
            (obj.royaltyShare = message.royaltyShare);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseNFT();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? exports.Metadata.fromPartial(object.metadata)
                : undefined;
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : "";
        message.owner = (_c = object.owner) !== null && _c !== void 0 ? _c : "";
        message.transferable = (_d = object.transferable) !== null && _d !== void 0 ? _d : false;
        message.extensible = (_e = object.extensible) !== null && _e !== void 0 ? _e : false;
        message.createdAt = (_f = object.createdAt) !== null && _f !== void 0 ? _f : undefined;
        message.nsfw = (_g = object.nsfw) !== null && _g !== void 0 ? _g : false;
        message.royaltyShare = (_h = object.royaltyShare) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function createBaseMetadata() {
    return { name: "", description: "", mediaUri: "", previewUri: "" };
}
exports.Metadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.mediaUri !== "") {
            writer.uint32(26).string(message.mediaUri);
        }
        if (message.previewUri !== "") {
            writer.uint32(34).string(message.previewUri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.mediaUri = reader.string();
                    break;
                case 4:
                    message.previewUri = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
            description: isSet(object.description) ? String(object.description) : "",
            mediaUri: isSet(object.mediaUri) ? String(object.mediaUri) : "",
            previewUri: isSet(object.previewUri) ? String(object.previewUri) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.mediaUri !== undefined && (obj.mediaUri = message.mediaUri);
        message.previewUri !== undefined && (obj.previewUri = message.previewUri);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMetadata();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.mediaUri = (_c = object.mediaUri) !== null && _c !== void 0 ? _c : "";
        message.previewUri = (_d = object.previewUri) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseOwner() {
    return { address: "", idCollections: [] };
}
exports.Owner = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.idCollections) {
            exports.IDCollection.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOwner();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.idCollections.push(exports.IDCollection.decode(reader, reader.uint32()));
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
            address: isSet(object.address) ? String(object.address) : "",
            idCollections: Array.isArray(object === null || object === void 0 ? void 0 : object.idCollections)
                ? object.idCollections.map((e) => exports.IDCollection.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.idCollections) {
            obj.idCollections = message.idCollections.map((e) => e ? exports.IDCollection.toJSON(e) : undefined);
        }
        else {
            obj.idCollections = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOwner();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.idCollections =
            ((_b = object.idCollections) === null || _b === void 0 ? void 0 : _b.map((e) => exports.IDCollection.fromPartial(e))) || [];
        return message;
    },
};
function toTimestamp(date) {
    const seconds = numberToLong(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds.toNumber() * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function numberToLong(number) {
    return long_1.default.fromNumber(number);
}
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=denom.js.map