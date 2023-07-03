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
exports.MsgClientImpl = exports.MsgBurnNFTResponse = exports.MsgBurnNFT = exports.MsgTransferNFTResponse = exports.MsgTransferNFT = exports.MsgMintNFTResponse = exports.MsgMintNFT = exports.MsgTransferDenomResponse = exports.MsgTransferDenom = exports.MsgUpdateDenomResponse = exports.MsgUpdateDenom = exports.MsgCreateDenomResponse = exports.MsgCreateDenom = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const denom_1 = require("./comdex/nft/v1beta1/denom");
exports.protobufPackage = "comdex.nft.v1beta1";
function createBaseMsgCreateDenom() {
    return {
        id: "",
        symbol: "",
        name: "",
        description: "",
        previewUri: "",
        schema: "",
        sender: "",
    };
}
exports.MsgCreateDenom = {
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDenom();
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
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseMsgCreateDenom();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.symbol = (_b = object.symbol) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.previewUri = (_e = object.previewUri) !== null && _e !== void 0 ? _e : "";
        message.schema = (_f = object.schema) !== null && _f !== void 0 ? _f : "";
        message.sender = (_g = object.sender) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseMsgCreateDenomResponse() {
    return {};
}
exports.MsgCreateDenomResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDenomResponse();
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
        const message = createBaseMsgCreateDenomResponse();
        return message;
    },
};
function createBaseMsgUpdateDenom() {
    return { id: "", name: "", description: "", previewUri: "", sender: "" };
}
exports.MsgUpdateDenom = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.previewUri !== "") {
            writer.uint32(34).string(message.previewUri);
        }
        if (message.sender !== "") {
            writer.uint32(42).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.previewUri = reader.string();
                    break;
                case 5:
                    message.sender = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
            description: isSet(object.description) ? String(object.description) : "",
            previewUri: isSet(object.previewUri) ? String(object.previewUri) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.previewUri !== undefined && (obj.previewUri = message.previewUri);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgUpdateDenom();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.previewUri = (_d = object.previewUri) !== null && _d !== void 0 ? _d : "";
        message.sender = (_e = object.sender) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseMsgUpdateDenomResponse() {
    return {};
}
exports.MsgUpdateDenomResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDenomResponse();
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
        const message = createBaseMsgUpdateDenomResponse();
        return message;
    },
};
function createBaseMsgTransferDenom() {
    return { id: "", sender: "", recipient: "" };
}
exports.MsgTransferDenom = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.sender !== undefined && (obj.sender = message.sender);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgTransferDenom();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.sender = (_b = object.sender) !== null && _b !== void 0 ? _b : "";
        message.recipient = (_c = object.recipient) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgTransferDenomResponse() {
    return {};
}
exports.MsgTransferDenomResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferDenomResponse();
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
        const message = createBaseMsgTransferDenomResponse();
        return message;
    },
};
function createBaseMsgMintNFT() {
    return {
        id: "",
        denomId: "",
        metadata: undefined,
        data: "",
        transferable: false,
        extensible: false,
        nsfw: false,
        royaltyShare: "",
        sender: "",
        recipient: "",
    };
}
exports.MsgMintNFT = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.denomId !== "") {
            writer.uint32(18).string(message.denomId);
        }
        if (message.metadata !== undefined) {
            denom_1.Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
        }
        if (message.data !== "") {
            writer.uint32(34).string(message.data);
        }
        if (message.transferable === true) {
            writer.uint32(40).bool(message.transferable);
        }
        if (message.extensible === true) {
            writer.uint32(48).bool(message.extensible);
        }
        if (message.nsfw === true) {
            writer.uint32(56).bool(message.nsfw);
        }
        if (message.royaltyShare !== "") {
            writer.uint32(66).string(message.royaltyShare);
        }
        if (message.sender !== "") {
            writer.uint32(74).string(message.sender);
        }
        if (message.recipient !== "") {
            writer.uint32(82).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintNFT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.denomId = reader.string();
                    break;
                case 3:
                    message.metadata = denom_1.Metadata.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.data = reader.string();
                    break;
                case 5:
                    message.transferable = reader.bool();
                    break;
                case 6:
                    message.extensible = reader.bool();
                    break;
                case 7:
                    message.nsfw = reader.bool();
                    break;
                case 8:
                    message.royaltyShare = reader.string();
                    break;
                case 9:
                    message.sender = reader.string();
                    break;
                case 10:
                    message.recipient = reader.string();
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
            denomId: isSet(object.denomId) ? String(object.denomId) : "",
            metadata: isSet(object.metadata)
                ? denom_1.Metadata.fromJSON(object.metadata)
                : undefined,
            data: isSet(object.data) ? String(object.data) : "",
            transferable: isSet(object.transferable)
                ? Boolean(object.transferable)
                : false,
            extensible: isSet(object.extensible) ? Boolean(object.extensible) : false,
            nsfw: isSet(object.nsfw) ? Boolean(object.nsfw) : false,
            royaltyShare: isSet(object.royaltyShare)
                ? String(object.royaltyShare)
                : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.denomId !== undefined && (obj.denomId = message.denomId);
        message.metadata !== undefined &&
            (obj.metadata = message.metadata
                ? denom_1.Metadata.toJSON(message.metadata)
                : undefined);
        message.data !== undefined && (obj.data = message.data);
        message.transferable !== undefined &&
            (obj.transferable = message.transferable);
        message.extensible !== undefined && (obj.extensible = message.extensible);
        message.nsfw !== undefined && (obj.nsfw = message.nsfw);
        message.royaltyShare !== undefined &&
            (obj.royaltyShare = message.royaltyShare);
        message.sender !== undefined && (obj.sender = message.sender);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseMsgMintNFT();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.denomId = (_b = object.denomId) !== null && _b !== void 0 ? _b : "";
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? denom_1.Metadata.fromPartial(object.metadata)
                : undefined;
        message.data = (_c = object.data) !== null && _c !== void 0 ? _c : "";
        message.transferable = (_d = object.transferable) !== null && _d !== void 0 ? _d : false;
        message.extensible = (_e = object.extensible) !== null && _e !== void 0 ? _e : false;
        message.nsfw = (_f = object.nsfw) !== null && _f !== void 0 ? _f : false;
        message.royaltyShare = (_g = object.royaltyShare) !== null && _g !== void 0 ? _g : "";
        message.sender = (_h = object.sender) !== null && _h !== void 0 ? _h : "";
        message.recipient = (_j = object.recipient) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
function createBaseMsgMintNFTResponse() {
    return {};
}
exports.MsgMintNFTResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintNFTResponse();
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
        const message = createBaseMsgMintNFTResponse();
        return message;
    },
};
function createBaseMsgTransferNFT() {
    return { id: "", denomId: "", sender: "", recipient: "" };
}
exports.MsgTransferNFT = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.denomId !== "") {
            writer.uint32(18).string(message.denomId);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        if (message.recipient !== "") {
            writer.uint32(34).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferNFT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.denomId = reader.string();
                    break;
                case 3:
                    message.sender = reader.string();
                    break;
                case 4:
                    message.recipient = reader.string();
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
            denomId: isSet(object.denomId) ? String(object.denomId) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.denomId !== undefined && (obj.denomId = message.denomId);
        message.sender !== undefined && (obj.sender = message.sender);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgTransferNFT();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.denomId = (_b = object.denomId) !== null && _b !== void 0 ? _b : "";
        message.sender = (_c = object.sender) !== null && _c !== void 0 ? _c : "";
        message.recipient = (_d = object.recipient) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgTransferNFTResponse() {
    return {};
}
exports.MsgTransferNFTResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferNFTResponse();
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
        const message = createBaseMsgTransferNFTResponse();
        return message;
    },
};
function createBaseMsgBurnNFT() {
    return { id: "", denomId: "", sender: "" };
}
exports.MsgBurnNFT = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.denomId !== "") {
            writer.uint32(18).string(message.denomId);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurnNFT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.denomId = reader.string();
                    break;
                case 3:
                    message.sender = reader.string();
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
            denomId: isSet(object.denomId) ? String(object.denomId) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.denomId !== undefined && (obj.denomId = message.denomId);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgBurnNFT();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.denomId = (_b = object.denomId) !== null && _b !== void 0 ? _b : "";
        message.sender = (_c = object.sender) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgBurnNFTResponse() {
    return {};
}
exports.MsgBurnNFTResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurnNFTResponse();
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
        const message = createBaseMsgBurnNFTResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateDenom = this.CreateDenom.bind(this);
        this.UpdateDenom = this.UpdateDenom.bind(this);
        this.TransferDenom = this.TransferDenom.bind(this);
        this.MintNFT = this.MintNFT.bind(this);
        this.TransferNFT = this.TransferNFT.bind(this);
        this.BurnNFT = this.BurnNFT.bind(this);
    }
    CreateDenom(request) {
        const data = exports.MsgCreateDenom.encode(request).finish();
        const promise = this.rpc.request("comdex.nft.v1beta1.Msg", "CreateDenom", data);
        return promise.then((data) => exports.MsgCreateDenomResponse.decode(new _m0.Reader(data)));
    }
    UpdateDenom(request) {
        const data = exports.MsgUpdateDenom.encode(request).finish();
        const promise = this.rpc.request("comdex.nft.v1beta1.Msg", "UpdateDenom", data);
        return promise.then((data) => exports.MsgUpdateDenomResponse.decode(new _m0.Reader(data)));
    }
    TransferDenom(request) {
        const data = exports.MsgTransferDenom.encode(request).finish();
        const promise = this.rpc.request("comdex.nft.v1beta1.Msg", "TransferDenom", data);
        return promise.then((data) => exports.MsgTransferDenomResponse.decode(new _m0.Reader(data)));
    }
    MintNFT(request) {
        const data = exports.MsgMintNFT.encode(request).finish();
        const promise = this.rpc.request("comdex.nft.v1beta1.Msg", "MintNFT", data);
        return promise.then((data) => exports.MsgMintNFTResponse.decode(new _m0.Reader(data)));
    }
    TransferNFT(request) {
        const data = exports.MsgTransferNFT.encode(request).finish();
        const promise = this.rpc.request("comdex.nft.v1beta1.Msg", "TransferNFT", data);
        return promise.then((data) => exports.MsgTransferNFTResponse.decode(new _m0.Reader(data)));
    }
    BurnNFT(request) {
        const data = exports.MsgBurnNFT.encode(request).finish();
        const promise = this.rpc.request("comdex.nft.v1beta1.Msg", "BurnNFT", data);
        return promise.then((data) => exports.MsgBurnNFTResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map