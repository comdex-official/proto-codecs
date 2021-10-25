"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgServiceClientImpl = exports.MsgUpdatePairResponse = exports.MsgUpdatePairRequest = exports.MsgAddPairResponse = exports.MsgAddPairRequest = exports.MsgUpdateAssetResponse = exports.MsgUpdateAssetRequest = exports.MsgAddAssetResponse = exports.MsgAddAssetRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.asset.v1beta1";
const baseMsgAddAssetRequest = {
    from: "",
    name: "",
    denom: "",
    decimals: long_1.default.ZERO,
};
exports.MsgAddAssetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        if (!message.decimals.isZero()) {
            writer.uint32(32).int64(message.decimals);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddAssetRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                case 4:
                    message.decimals = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgAddAssetRequest };
        if (object.from !== undefined && object.from !== null) {
            message.from = String(object.from);
        }
        else {
            message.from = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = "";
        }
        if (object.decimals !== undefined && object.decimals !== null) {
            message.decimals = long_1.default.fromString(object.decimals);
        }
        else {
            message.decimals = long_1.default.ZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.name !== undefined && (obj.name = message.name);
        message.denom !== undefined && (obj.denom = message.denom);
        message.decimals !== undefined &&
            (obj.decimals = (message.decimals || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAddAssetRequest };
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        else {
            message.from = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = "";
        }
        if (object.decimals !== undefined && object.decimals !== null) {
            message.decimals = object.decimals;
        }
        else {
            message.decimals = long_1.default.ZERO;
        }
        return message;
    },
};
const baseMsgAddAssetResponse = {};
exports.MsgAddAssetResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddAssetResponse };
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
        const message = { ...baseMsgAddAssetResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgAddAssetResponse };
        return message;
    },
};
const baseMsgUpdateAssetRequest = {
    from: "",
    id: long_1.default.UZERO,
    name: "",
    denom: "",
    decimals: long_1.default.ZERO,
};
exports.MsgUpdateAssetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.id.isZero()) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.denom !== "") {
            writer.uint32(34).string(message.denom);
        }
        if (!message.decimals.isZero()) {
            writer.uint32(40).int64(message.decimals);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateAssetRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.denom = reader.string();
                    break;
                case 5:
                    message.decimals = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateAssetRequest };
        if (object.from !== undefined && object.from !== null) {
            message.from = String(object.from);
        }
        else {
            message.from = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = long_1.default.fromString(object.id);
        }
        else {
            message.id = long_1.default.UZERO;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = "";
        }
        if (object.decimals !== undefined && object.decimals !== null) {
            message.decimals = long_1.default.fromString(object.decimals);
        }
        else {
            message.decimals = long_1.default.ZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.name !== undefined && (obj.name = message.name);
        message.denom !== undefined && (obj.denom = message.denom);
        message.decimals !== undefined &&
            (obj.decimals = (message.decimals || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateAssetRequest };
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        else {
            message.from = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = long_1.default.UZERO;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = "";
        }
        if (object.decimals !== undefined && object.decimals !== null) {
            message.decimals = object.decimals;
        }
        else {
            message.decimals = long_1.default.ZERO;
        }
        return message;
    },
};
const baseMsgUpdateAssetResponse = {};
exports.MsgUpdateAssetResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateAssetResponse };
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
        const message = { ...baseMsgUpdateAssetResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateAssetResponse };
        return message;
    },
};
const baseMsgAddPairRequest = {
    from: "",
    assetIn: long_1.default.UZERO,
    assetOut: long_1.default.UZERO,
    liquidationRatio: "",
};
exports.MsgAddPairRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.assetIn.isZero()) {
            writer.uint32(16).uint64(message.assetIn);
        }
        if (!message.assetOut.isZero()) {
            writer.uint32(24).uint64(message.assetOut);
        }
        if (message.liquidationRatio !== "") {
            writer.uint32(34).string(message.liquidationRatio);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddPairRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.assetIn = reader.uint64();
                    break;
                case 3:
                    message.assetOut = reader.uint64();
                    break;
                case 4:
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
        const message = { ...baseMsgAddPairRequest };
        if (object.from !== undefined && object.from !== null) {
            message.from = String(object.from);
        }
        else {
            message.from = "";
        }
        if (object.assetIn !== undefined && object.assetIn !== null) {
            message.assetIn = long_1.default.fromString(object.assetIn);
        }
        else {
            message.assetIn = long_1.default.UZERO;
        }
        if (object.assetOut !== undefined && object.assetOut !== null) {
            message.assetOut = long_1.default.fromString(object.assetOut);
        }
        else {
            message.assetOut = long_1.default.UZERO;
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
        message.from !== undefined && (obj.from = message.from);
        message.assetIn !== undefined &&
            (obj.assetIn = (message.assetIn || long_1.default.UZERO).toString());
        message.assetOut !== undefined &&
            (obj.assetOut = (message.assetOut || long_1.default.UZERO).toString());
        message.liquidationRatio !== undefined &&
            (obj.liquidationRatio = message.liquidationRatio);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAddPairRequest };
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        else {
            message.from = "";
        }
        if (object.assetIn !== undefined && object.assetIn !== null) {
            message.assetIn = object.assetIn;
        }
        else {
            message.assetIn = long_1.default.UZERO;
        }
        if (object.assetOut !== undefined && object.assetOut !== null) {
            message.assetOut = object.assetOut;
        }
        else {
            message.assetOut = long_1.default.UZERO;
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
const baseMsgAddPairResponse = {};
exports.MsgAddPairResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddPairResponse };
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
        const message = { ...baseMsgAddPairResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgAddPairResponse };
        return message;
    },
};
const baseMsgUpdatePairRequest = {
    from: "",
    id: long_1.default.UZERO,
    liquidationRatio: "",
};
exports.MsgUpdatePairRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.id.isZero()) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.liquidationRatio !== "") {
            writer.uint32(26).string(message.liquidationRatio);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePairRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
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
        const message = { ...baseMsgUpdatePairRequest };
        if (object.from !== undefined && object.from !== null) {
            message.from = String(object.from);
        }
        else {
            message.from = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = long_1.default.fromString(object.id);
        }
        else {
            message.id = long_1.default.UZERO;
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
        message.from !== undefined && (obj.from = message.from);
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.liquidationRatio !== undefined &&
            (obj.liquidationRatio = message.liquidationRatio);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdatePairRequest };
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        else {
            message.from = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = long_1.default.UZERO;
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
const baseMsgUpdatePairResponse = {};
exports.MsgUpdatePairResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePairResponse };
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
        const message = { ...baseMsgUpdatePairResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdatePairResponse };
        return message;
    },
};
class MsgServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.MsgAddAsset = this.MsgAddAsset.bind(this);
        this.MsgUpdateAsset = this.MsgUpdateAsset.bind(this);
        this.MsgAddPair = this.MsgAddPair.bind(this);
        this.MsgUpdatePair = this.MsgUpdatePair.bind(this);
    }
    MsgAddAsset(request) {
        const data = exports.MsgAddAssetRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.asset.v1beta1.MsgService", "MsgAddAsset", data);
        return promise.then((data) => exports.MsgAddAssetResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgUpdateAsset(request) {
        const data = exports.MsgUpdateAssetRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.asset.v1beta1.MsgService", "MsgUpdateAsset", data);
        return promise.then((data) => exports.MsgUpdateAssetResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgAddPair(request) {
        const data = exports.MsgAddPairRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.asset.v1beta1.MsgService", "MsgAddPair", data);
        return promise.then((data) => exports.MsgAddPairResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgUpdatePair(request) {
        const data = exports.MsgUpdatePairRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.asset.v1beta1.MsgService", "MsgUpdatePair", data);
        return promise.then((data) => exports.MsgUpdatePairResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgServiceClientImpl = MsgServiceClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=msg.js.map