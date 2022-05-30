"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgRemoveMarketForAssetResponse = exports.MsgRemoveMarketForAssetRequest = exports.MsgUpdateMarketResponse = exports.MsgUpdateMarketRequest = exports.MsgAddMarketResponse = exports.MsgAddMarketRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.market.v1beta1";
function createBaseMsgAddMarketRequest() {
    return {
        from: "",
        symbol: "",
        scriptId: long_1.default.UZERO,
        id: long_1.default.UZERO,
        rates: long_1.default.UZERO,
    };
}
exports.MsgAddMarketRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        if (!message.scriptId.isZero()) {
            writer.uint32(24).uint64(message.scriptId);
        }
        if (!message.id.isZero()) {
            writer.uint32(32).uint64(message.id);
        }
        if (!message.rates.isZero()) {
            writer.uint32(40).uint64(message.rates);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddMarketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.symbol = reader.string();
                    break;
                case 3:
                    message.scriptId = reader.uint64();
                    break;
                case 4:
                    message.id = reader.uint64();
                    break;
                case 5:
                    message.rates = reader.uint64();
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
            from: isSet(object.from) ? String(object.from) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            scriptId: isSet(object.scriptId)
                ? long_1.default.fromString(object.scriptId)
                : long_1.default.UZERO,
            id: isSet(object.id) ? long_1.default.fromString(object.id) : long_1.default.UZERO,
            rates: isSet(object.rates) ? long_1.default.fromString(object.rates) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.scriptId !== undefined &&
            (obj.scriptId = (message.scriptId || long_1.default.UZERO).toString());
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.rates !== undefined &&
            (obj.rates = (message.rates || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgAddMarketRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.symbol = (_b = object.symbol) !== null && _b !== void 0 ? _b : "";
        message.scriptId =
            object.scriptId !== undefined && object.scriptId !== null
                ? long_1.default.fromValue(object.scriptId)
                : long_1.default.UZERO;
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.rates =
            object.rates !== undefined && object.rates !== null
                ? long_1.default.fromValue(object.rates)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgAddMarketResponse() {
    return {};
}
exports.MsgAddMarketResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddMarketResponse();
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
        const message = createBaseMsgAddMarketResponse();
        return message;
    },
};
function createBaseMsgUpdateMarketRequest() {
    return { from: "", symbol: "", scriptId: long_1.default.UZERO, rates: long_1.default.UZERO };
}
exports.MsgUpdateMarketRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        if (!message.scriptId.isZero()) {
            writer.uint32(24).uint64(message.scriptId);
        }
        if (!message.rates.isZero()) {
            writer.uint32(32).uint64(message.rates);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateMarketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.symbol = reader.string();
                    break;
                case 3:
                    message.scriptId = reader.uint64();
                    break;
                case 4:
                    message.rates = reader.uint64();
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
            from: isSet(object.from) ? String(object.from) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            scriptId: isSet(object.scriptId)
                ? long_1.default.fromString(object.scriptId)
                : long_1.default.UZERO,
            rates: isSet(object.rates) ? long_1.default.fromString(object.rates) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.scriptId !== undefined &&
            (obj.scriptId = (message.scriptId || long_1.default.UZERO).toString());
        message.rates !== undefined &&
            (obj.rates = (message.rates || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgUpdateMarketRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.symbol = (_b = object.symbol) !== null && _b !== void 0 ? _b : "";
        message.scriptId =
            object.scriptId !== undefined && object.scriptId !== null
                ? long_1.default.fromValue(object.scriptId)
                : long_1.default.UZERO;
        message.rates =
            object.rates !== undefined && object.rates !== null
                ? long_1.default.fromValue(object.rates)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgUpdateMarketResponse() {
    return {};
}
exports.MsgUpdateMarketResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateMarketResponse();
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
        const message = createBaseMsgUpdateMarketResponse();
        return message;
    },
};
function createBaseMsgRemoveMarketForAssetRequest() {
    return { from: "", id: long_1.default.UZERO, symbol: "" };
}
exports.MsgRemoveMarketForAssetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.id.isZero()) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.symbol !== "") {
            writer.uint32(26).string(message.symbol);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveMarketForAssetRequest();
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
                    message.symbol = reader.string();
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
            from: isSet(object.from) ? String(object.from) : "",
            id: isSet(object.id) ? long_1.default.fromString(object.id) : long_1.default.UZERO,
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.symbol !== undefined && (obj.symbol = message.symbol);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgRemoveMarketForAssetRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.symbol = (_b = object.symbol) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgRemoveMarketForAssetResponse() {
    return {};
}
exports.MsgRemoveMarketForAssetResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveMarketForAssetResponse();
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
        const message = createBaseMsgRemoveMarketForAssetResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.MsgAddMarket = this.MsgAddMarket.bind(this);
        this.MsgUpdateMarket = this.MsgUpdateMarket.bind(this);
        this.MsgRemoveMarketForAsset = this.MsgRemoveMarketForAsset.bind(this);
    }
    MsgAddMarket(request) {
        const data = exports.MsgAddMarketRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.market.v1beta1.Msg", "MsgAddMarket", data);
        return promise.then((data) => exports.MsgAddMarketResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgUpdateMarket(request) {
        const data = exports.MsgUpdateMarketRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.market.v1beta1.Msg", "MsgUpdateMarket", data);
        return promise.then((data) => exports.MsgUpdateMarketResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgRemoveMarketForAsset(request) {
        const data = exports.MsgRemoveMarketForAssetRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.market.v1beta1.Msg", "MsgRemoveMarketForAsset", data);
        return promise.then((data) => exports.MsgRemoveMarketForAssetResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map